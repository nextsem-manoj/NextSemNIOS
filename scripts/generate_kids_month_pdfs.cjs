const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');

const A4_WIDTH = 595.28;
const A4_HEIGHT = 841.89;

// Palette Colors
const NAVY = rgb(0.06, 0.12, 0.25);
const BLUE = rgb(0.14, 0.38, 0.92);
const EMERALD = rgb(0.02, 0.67, 0.43);
const AMBER = rgb(0.96, 0.62, 0.05);
const ROSE = rgb(0.95, 0.25, 0.37);
const PURPLE = rgb(0.55, 0.32, 0.88);
const DARK_GRAY = rgb(0.2, 0.25, 0.3);
const LIGHT_GRAY = rgb(0.6, 0.65, 0.7);
const BG_BOX = rgb(0.96, 0.97, 0.99);
const WHITE = rgb(1, 1, 1);

// Sanitize any text to safe WinAnsi (ASCII 32 - 126)
function clean(str) {
  if (!str) return '';
  return String(str)
    .replace(/[•]/g, '-')
    .replace(/[⭐★]/g, '[*]')
    .replace(/[🎊🎉🎈]/g, '!')
    .replace(/[æ]/g, 'ae')
    .replace(/[ɒ]/g, 'o')
    .replace(/[ɪ]/g, 'i')
    .replace(/[dʒ]/g, 'j')
    .replace(/[–—]/g, '-')
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    // Strip non-printable / high unicode for standard Helvetica font
    .replace(/[^\x20-\x7E]/g, '');
}

// Safe draw text helper
function safeDrawText(page, text, options) {
  const sanitized = clean(text);
  page.drawText(sanitized, options);
}

// Draw standard header bar
function drawHeader(page, fontBold, fontRegular, title, subject, dateSpan) {
  page.drawRectangle({
    x: 30,
    y: A4_HEIGHT - 65,
    width: A4_WIDTH - 60,
    height: 45,
    color: NAVY,
    borderRadius: 6
  });

  safeDrawText(page, 'STUDYGUIDE BY NEXTSEM - EARLY CHILDHOOD FOUNDATIONAL ACADEMY', {
    x: 42,
    y: A4_HEIGHT - 35,
    size: 8.5,
    font: fontBold,
    color: AMBER
  });

  safeDrawText(page, `${subject.toUpperCase()} - 1-MONTH DAILY ACTIVITY WORKBOOK (${dateSpan})`, {
    x: 42,
    y: A4_HEIGHT - 50,
    size: 11,
    font: fontBold,
    color: WHITE
  });

  safeDrawText(page, 'Author: Er. Manoj Kumar', {
    x: A4_WIDTH - 175,
    y: A4_HEIGHT - 35,
    size: 8,
    font: fontRegular,
    color: WHITE
  });

  safeDrawText(page, 'Class: Nursery - LKG - UKG - Class 1', {
    x: A4_WIDTH - 200,
    y: A4_HEIGHT - 50,
    size: 8,
    font: fontRegular,
    color: rgb(0.8, 0.85, 0.95)
  });
}

// Draw standard footer bar
function drawFooter(page, fontRegular, pageNum, totalPages) {
  page.drawLine({
    start: { x: 30, y: 35 },
    end: { x: A4_WIDTH - 30, y: 35 },
    thickness: 0.8,
    color: LIGHT_GRAY
  });

  safeDrawText(page, 'Online Interactive Suite: https://ncert-alpha.vercel.app/kids-kg - Daily 15-Minute Fun Learning', {
    x: 30,
    y: 22,
    size: 7.5,
    font: fontRegular,
    color: DARK_GRAY
  });

  safeDrawText(page, `Page ${pageNum} of ${totalPages}`, {
    x: A4_WIDTH - 85,
    y: 22,
    size: 8,
    font: fontRegular,
    color: DARK_GRAY
  });
}

// Draw a daily worksheet card on page
function drawDayBox(page, fontBold, fontRegular, { x, y, width, height, dayNum, dateStr, dayName, title, tasks, badgeColor }) {
  page.drawRectangle({
    x,
    y,
    width,
    height,
    color: BG_BOX,
    borderColor: rgb(0.85, 0.88, 0.92),
    borderWidth: 1,
    borderRadius: 4
  });

  page.drawRectangle({
    x,
    y: y + height - 20,
    width,
    height: 20,
    color: badgeColor || BLUE,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  });

  safeDrawText(page, `DAY ${dayNum} - ${dateStr.toUpperCase()} (${dayName.toUpperCase()})`, {
    x: x + 8,
    y: y + height - 14,
    size: 8.5,
    font: fontBold,
    color: WHITE
  });

  safeDrawText(page, '[ ] DONE  [*]', {
    x: x + width - 68,
    y: y + height - 14,
    size: 7.5,
    font: fontBold,
    color: WHITE
  });

  safeDrawText(page, title, {
    x: x + 8,
    y: y + height - 34,
    size: 9.2,
    font: fontBold,
    color: NAVY
  });

  let currentY = y + height - 48;
  tasks.forEach((task) => {
    safeDrawText(page, `- ${task}`, {
      x: x + 10,
      y: currentY,
      size: 7.8,
      font: fontRegular,
      color: DARK_GRAY
    });
    currentY -= 12.5;
  });

  page.drawRectangle({
    x: x + 8,
    y: y + 7,
    width: width - 16,
    height: 16,
    color: WHITE,
    borderColor: rgb(0.8, 0.85, 0.9),
    borderWidth: 0.6
  });

  safeDrawText(page, 'Student Practice / Signature: _________________________________', {
    x: x + 12,
    y: y + 12,
    size: 6.8,
    font: fontRegular,
    color: LIGHT_GRAY
  });
}

// ---------------------------------------------------------------------------
// 1. GENERATE ENGLISH 1-MONTH DAILY WORKBOOK (23 OCT - 23 NOV 2026)
// ---------------------------------------------------------------------------
async function generateEnglishPdf() {
  const doc = await PDFDocument.create();
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const dateSpan = '23 Oct 2026 - 23 Nov 2026';

  // --- PAGE 1: COVER & SYLLABUS ---
  const p1 = doc.addPage([A4_WIDTH, A4_HEIGHT]);
  drawHeader(p1, fontBold, fontRegular, 'ENGLISH FOUNDATIONAL WORKBOOK', 'English Alphabet & Phonics', dateSpan);

  p1.drawRectangle({
    x: 30,
    y: A4_HEIGHT - 210,
    width: A4_WIDTH - 60,
    height: 135,
    color: rgb(0.92, 0.95, 1.0),
    borderColor: BLUE,
    borderWidth: 1.5,
    borderRadius: 8
  });

  safeDrawText(p1, 'ENGLISH FOUNDATIONAL 30-DAY WORKBOOK', {
    x: 45,
    y: A4_HEIGHT - 100,
    size: 18,
    font: fontBold,
    color: NAVY
  });

  safeDrawText(p1, 'Comprehensive Daily Alphabet Identification, Phonics Sounds & Early Word Reading', {
    x: 45,
    y: A4_HEIGHT - 120,
    size: 10,
    font: fontRegular,
    color: DARK_GRAY
  });

  safeDrawText(p1, 'Syllabus Duration: 32 Calendar Days (23 October 2026 to 23 November 2026)', {
    x: 45,
    y: A4_HEIGHT - 138,
    size: 9.5,
    font: fontBold,
    color: BLUE
  });

  safeDrawText(p1, 'Methodology: Phonics-First + Visual Association + Tracing Finger Practice + Oral Viva', {
    x: 45,
    y: A4_HEIGHT - 154,
    size: 8.5,
    font: fontRegular,
    color: DARK_GRAY
  });

  p1.drawRectangle({
    x: 45,
    y: A4_HEIGHT - 200,
    width: A4_WIDTH - 90,
    height: 35,
    color: WHITE,
    borderColor: rgb(0.7, 0.8, 0.95),
    borderWidth: 1,
    borderRadius: 4
  });

  safeDrawText(p1, 'Student Name: _______________________________   Class/Section: ______________   Roll No: _______', {
    x: 55,
    y: A4_HEIGHT - 188,
    size: 8.5,
    font: fontRegular,
    color: NAVY
  });

  safeDrawText(p1, '5-WEEK SYLLABUS ROADMAP (OCTOBER 23 TO NOVEMBER 23, 2026):', {
    x: 30,
    y: A4_HEIGHT - 230,
    size: 11,
    font: fontBold,
    color: NAVY
  });

  const weeks = [
    { title: 'Week 1 (Oct 23 - Oct 29)', focus: 'Letters A to F: Sound identification, tracing lines, vocabulary words (Apple, Ball, Cat, Dog, Elephant, Fish).' },
    { title: 'Week 2 (Oct 30 - Nov 05)', focus: 'Letters G to L: Letter recognition, phonics chants, vocabulary words (Grapes, Hat, Ice cream, Jug, Kite, Lion).' },
    { title: 'Week 3 (Nov 06 - Nov 12)', focus: 'Letters M to R: Sound blends, capital & small match, vocabulary (Monkey, Nest, Orange, Pen, Queen, Rabbit).' },
    { title: 'Week 4 (Nov 13 - Nov 19)', focus: 'Letters S to Z: Final alphabet mastery, tracing shapes (Sun, Tiger, Umbrella, Van, Watch, Xylophone, Yak, Zebra).' },
    { title: 'Week 5 (Nov 20 - Nov 23)', focus: '3-Letter CVC Sight Words (CAT, DOG, SUN, PIN, BUS) + Grand Graduation Viva & Star Certificate Award.' }
  ];

  let wy = A4_HEIGHT - 250;
  weeks.forEach((w, idx) => {
    p1.drawRectangle({
      x: 30,
      y: wy - 28,
      width: A4_WIDTH - 60,
      height: 36,
      color: idx % 2 === 0 ? BG_BOX : WHITE,
      borderColor: rgb(0.85, 0.88, 0.92),
      borderWidth: 0.8
    });

    safeDrawText(p1, `${idx + 1}. ${w.title}`, {
      x: 40,
      y: wy - 8,
      size: 9,
      font: fontBold,
      color: BLUE
    });

    safeDrawText(p1, w.focus, {
      x: 40,
      y: wy - 22,
      size: 7.8,
      font: fontRegular,
      color: DARK_GRAY
    });

    wy -= 42;
  });

  p1.drawRectangle({
    x: 30,
    y: 50,
    width: A4_WIDTH - 60,
    height: 100,
    color: rgb(0.99, 0.97, 0.92),
    borderColor: AMBER,
    borderWidth: 1,
    borderRadius: 6
  });

  safeDrawText(p1, 'PARENT & TEACHER DAILY 15-MINUTE ROUTINE:', {
    x: 42,
    y: 135,
    size: 9.5,
    font: fontBold,
    color: rgb(0.65, 0.35, 0.05)
  });

  const tips = [
    '1. Dedicate 15 minutes at the same time each day (Morning or Evening). Consistency builds habits.',
    '2. Say the phonics sound out loud and let the child repeat after you 3 times.',
    '3. Have the child trace the letter with their index finger first, then with crayon or pencil.',
    '4. Tick the "[ ] DONE" box and award a star sticker upon completing daily practice.',
    '5. Use the online audio studio (https://ncert-alpha.vercel.app/kids-kg) for voice playback anytime.'
  ];

  let ty = 120;
  tips.forEach(t => {
    safeDrawText(p1, t, { x: 42, y: ty, size: 7.5, font: fontRegular, color: DARK_GRAY });
    ty -= 14;
  });

  drawFooter(p1, fontRegular, 1, 6);

  // --- DAYS DEFINITIONS (32 DAYS) ---
  const englishDays = [
    // Week 1 (Oct 23 - Oct 29)
    { dayNum: 1, dateStr: '23 Oct 2026', dayName: 'Friday', title: 'Letter Aa - Phonics /ae/ - Apple', tasks: ['Trace uppercase "A" and lowercase "a" 5 times.', 'Identify 3 things starting with A: Apple, Ant, Axe.', 'Pronounce: "A says Ah, Ah, Apple!"'], badgeColor: BLUE },
    { dayNum: 2, dateStr: '24 Oct 2026', dayName: 'Saturday', title: 'Letter Bb - Phonics /b/ - Ball', tasks: ['Trace uppercase "B" and lowercase "b" 5 times.', 'Identify: Ball, Bat, Boy, Balloon.', 'Circle all letter B instances in a nursery rhyme.'], badgeColor: BLUE },
    { dayNum: 3, dateStr: '25 Oct 2026', dayName: 'Sunday', title: 'Sunday Fun Activity - A & B Coloring', tasks: ['Color an apple RED and a ball BLUE.', 'Find 2 objects in your room starting with A or B.', 'Show and tell to parents with a big smile!'], badgeColor: EMERALD },
    { dayNum: 4, dateStr: '26 Oct 2026', dayName: 'Monday', title: 'Letter Cc - Phonics /k/ - Cat', tasks: ['Trace uppercase "C" and lowercase "c" 5 times.', 'Vocabulary: Cat, Cup, Car, Cake.', 'Say: "C says Kuh, Kuh, Cat!" Meow sound fun!'], badgeColor: BLUE },
    { dayNum: 5, dateStr: '27 Oct 2026', dayName: 'Tuesday', title: 'Letter Dd - Phonics /d/ - Dog', tasks: ['Trace uppercase "D" and lowercase "d" 5 times.', 'Vocabulary: Dog, Duck, Drum, Door.', 'Beat an imaginary drum: "D-D-Drum!"'], badgeColor: BLUE },
    { dayNum: 6, dateStr: '28 Oct 2026', dayName: 'Wednesday', title: 'Letter Ee & Ff - Elephant & Fish', tasks: ['Trace uppercase "E" and "F" on practice line.', 'Identify: Elephant, Egg, Fish, Fan.', 'Listen to E and F voice sounds in online app.'], badgeColor: BLUE },
    { dayNum: 7, dateStr: '29 Oct 2026', dayName: 'Thursday', title: 'Week 1 Review & Star Check (A-F)', tasks: ['Match: A-Apple, B-Ball, C-Cat, D-Dog, E-Egg, F-Fish.', 'Oral reading of A, B, C, D, E, F to guardian.', 'Week 1 Completed! 5 Stars Awarded! [*][*][*][*][*]'], badgeColor: AMBER },

    // Week 2 (Oct 30 - Nov 05)
    { dayNum: 8, dateStr: '30 Oct 2026', dayName: 'Friday', title: 'Letter Gg - Phonics /g/ - Grapes', tasks: ['Trace uppercase "G" and lowercase "g" 5 times.', 'Vocabulary: Grapes, Girl, Gift, Goat.', 'Count 5 green grapes on the picture.'], badgeColor: PURPLE },
    { dayNum: 9, dateStr: '31 Oct 2026', dayName: 'Saturday', title: 'Letter Hh - Phonics /h/ - Hat', tasks: ['Trace uppercase "H" and lowercase "h" 5 times.', 'Vocabulary: Hat, Hen, House, Horse.', 'Put a funny hat on and say: "H-H-Hat!"'], badgeColor: PURPLE },
    { dayNum: 10, dateStr: '01 Nov 2026', dayName: 'Sunday', title: 'Sunday Fun Activity - G & H Story', tasks: ['Storytime with parents about a Goat in a Hat.', 'Draw a big green bunch of Grapes.', 'Practice smiling phonics sounds.'], badgeColor: EMERALD },
    { dayNum: 11, dateStr: '02 Nov 2026', dayName: 'Monday', title: 'Letter Ii - Phonics /i/ - Ice cream', tasks: ['Trace uppercase "I" and lowercase "i" 5 times.', 'Vocabulary: Ice cream, Igloo, Ink, Island.', 'Chant: "I says Ih, Ih, Igloo!"'], badgeColor: PURPLE },
    { dayNum: 12, dateStr: '03 Nov 2026', dayName: 'Tuesday', title: 'Letter Jj - Phonics /j/ - Jug', tasks: ['Trace uppercase "J" and lowercase "j" 5 times.', 'Vocabulary: Jug, Jam, Jeep, Jellyfish.', 'Pretend to jump 3 times: "J-J-Jump!"'], badgeColor: PURPLE },
    { dayNum: 13, dateStr: '04 Nov 2026', dayName: 'Wednesday', title: 'Letter Kk & Ll - Kite & Lion', tasks: ['Trace letters "K" and "L" with sharp lines.', 'Vocabulary: Kite, Kangaroo, Lion, Leaf.', 'Roar like a friendly Lion: "L-L-Lion!"'], badgeColor: PURPLE },
    { dayNum: 14, dateStr: '05 Nov 2026', dayName: 'Thursday', title: 'Week 2 Review & Star Check (G-L)', tasks: ['Connect the dots from G to L in order.', 'Match capitals (G, H, I, J, K, L) to small letters.', 'Week 2 Completed! 5 Stars Awarded! [*][*][*][*][*]'], badgeColor: AMBER },

    // Week 3 (Nov 06 - Nov 12)
    { dayNum: 15, dateStr: '06 Nov 2026', dayName: 'Friday', title: 'Letter Mm - Phonics /m/ - Monkey', tasks: ['Trace uppercase "M" and lowercase "m" 5 times.', 'Vocabulary: Monkey, Mango, Moon, Milk.', 'Say: "M says Mmm, Mmm, Mango!" Delicious!'], badgeColor: BLUE },
    { dayNum: 16, dateStr: '07 Nov 2026', dayName: 'Saturday', title: 'Letter Nn - Phonics /n/ - Nest', tasks: ['Trace uppercase "N" and lowercase "n" 5 times.', 'Vocabulary: Nest, Nut, Net, Needle.', 'Count 3 little eggs inside the bird nest.'], badgeColor: BLUE },
    { dayNum: 17, dateStr: '08 Nov 2026', dayName: 'Sunday', title: 'Sunday Fun Activity - Nature Hunt', tasks: ['Look outside for a Leaf (L), Moon (M), or Nest (N).', 'Color a glowing yellow Moon and twinkling stars.', 'Practice saying letters M and N clearly.'], badgeColor: EMERALD },
    { dayNum: 18, dateStr: '09 Nov 2026', dayName: 'Monday', title: 'Letter Oo - Phonics /o/ - Orange', tasks: ['Trace circular letter "O" and "o" 5 times.', 'Vocabulary: Orange, Owl, Octopus, Onion.', 'Pretend to have 8 octopus arms dancing!'], badgeColor: BLUE },
    { dayNum: 19, dateStr: '10 Nov 2026', dayName: 'Tuesday', title: 'Letter Pp - Phonics /p/ - Pen & Parrot', tasks: ['Trace uppercase "P" and lowercase "p" 5 times.', 'Vocabulary: Pen, Parrot, Pencil, Panda.', 'Color a green parrot with a red beak.'], badgeColor: BLUE },
    { dayNum: 20, dateStr: '11 Nov 2026', dayName: 'Wednesday', title: 'Letter Qq & Rr - Queen & Rabbit', tasks: ['Trace "Q" and "R" carefully with guide lines.', 'Vocabulary: Queen, Quilt, Rabbit, Rainbow, Rose.', 'Hop like a bunny: "R-R-Rabbit!"'], badgeColor: BLUE },
    { dayNum: 21, dateStr: '12 Nov 2026', dayName: 'Thursday', title: 'Week 3 Review & Star Check (M-R)', tasks: ['Alphabet song from A to R without looking.', 'Identify beginning sound: _abbit (R), _onkey (M).', 'Week 3 Completed! 5 Stars Awarded! [*][*][*][*][*]'], badgeColor: AMBER },

    // Week 4 (Nov 13 - Nov 19)
    { dayNum: 22, dateStr: '13 Nov 2026', dayName: 'Friday', title: 'Letter Ss - Phonics /s/ - Sun & Star', tasks: ['Trace curvy letter "S" and "s" 5 times.', 'Vocabulary: Sun, Star, Snake, Ship, Spoon.', 'Slither your hand like a snake: "Ssssss!"'], badgeColor: ROSE },
    { dayNum: 23, dateStr: '14 Nov 2026', dayName: 'Saturday', title: 'Letter Tt - Phonics /t/ - Tiger & Tree', tasks: ['Trace tall letter "T" and "t" 5 times.', 'Vocabulary: Tiger, Tree, Train, Tomato.', 'Make train chug-chug sound: "T-T-Train!"'], badgeColor: ROSE },
    { dayNum: 24, dateStr: '15 Nov 2026', dayName: 'Sunday', title: 'Sunday Fun Activity - Sun & Trees', tasks: ['Draw a bright yellow Sun with 8 rays.', 'Count 3 trees and color them green.', 'Family storytelling session with teacher notes.'], badgeColor: EMERALD },
    { dayNum: 25, dateStr: '16 Nov 2026', dayName: 'Monday', title: 'Letter Uu & Vv - Umbrella & Van', tasks: ['Trace "U" (cup shape) and "V" (arrow down).', 'Vocabulary: Umbrella, Uncle, Van, Vase, Violin.', 'Open an imaginary umbrella: "Rain rain go away!"'], badgeColor: ROSE },
    { dayNum: 26, dateStr: '17 Nov 2026', dayName: 'Tuesday', title: 'Letter Ww & Xx - Watch & Xylophone', tasks: ['Trace double-V letter "W" and cross letter "X".', 'Vocabulary: Watch, Water, Wolf, Xylophone, X-ray.', 'Tap imaginary xylophone: "Ting-ting-ting!"'], badgeColor: ROSE },
    { dayNum: 27, dateStr: '18 Nov 2026', dayName: 'Wednesday', title: 'Letter Yy & Zz - Yak & Zebra', tasks: ['Trace letter "Y" and zig-zag letter "Z".', 'Vocabulary: Yak, Yo-yo, Yellow, Zebra, Zoo, Zero.', 'You completed the entire A to Z alphabet!'], badgeColor: ROSE },
    { dayNum: 28, dateStr: '19 Nov 2026', dayName: 'Thursday', title: 'Week 4 Review & Star Check (S-Z)', tasks: ['Sing complete A-B-C-D song from A to Z.', 'Circle vowels: A, E, I, O, U.', 'Week 4 Completed! 5 Stars Awarded! [*][*][*][*][*]'], badgeColor: AMBER },

    // Week 5 (Nov 20 - Nov 23)
    { dayNum: 29, dateStr: '20 Nov 2026', dayName: 'Friday', title: 'Early Word Reading - 3-Letter Words (Part 1)', tasks: ['Read C-A-T = CAT. Sound out /k/ /ae/ /t/.', 'Read D-O-G = DOG. Sound out /d/ /o/ /g/.', 'Match the words "CAT" and "DOG" to drawings.'], badgeColor: EMERALD },
    { dayNum: 30, dateStr: '21 Nov 2026', dayName: 'Saturday', title: 'Early Word Reading - 3-Letter Words (Part 2)', tasks: ['Read S-U-N = SUN (bright yellow in sky).', 'Read P-E-N = PEN (for writing).', 'Read B-U-S = BUS (wheels go round and round).'], badgeColor: EMERALD },
    { dayNum: 31, dateStr: '22 Nov 2026', dayName: 'Sunday', title: 'Grand Oral Reading Viva with Parents', tasks: ['Read 5 sight words without assistance.', 'Recite letters A to Z forward and backward (Z-Y-X).', 'Take a picture with your workbook for memory!'], badgeColor: AMBER },
    { dayNum: 32, dateStr: '23 Nov 2026', dayName: 'Monday', title: 'Graduation Day - 1-Month Alphabet Star!', tasks: ['Congratulations! 32 days of daily learning complete!', 'Receive your Star Alphabet Master Certificate.', 'Award 50 Golden Bonus Stars in the online hub!'], badgeColor: AMBER }
  ];

  function renderWeekPage(pageNum, startIndex, endIndex, weekTitle) {
    const p = doc.addPage([A4_WIDTH, A4_HEIGHT]);
    drawHeader(p, fontBold, fontRegular, 'ENGLISH FOUNDATIONAL WORKBOOK', 'English Alphabet & Phonics', dateSpan);

    safeDrawText(p, weekTitle, {
      x: 30,
      y: A4_HEIGHT - 80,
      size: 11,
      font: fontBold,
      color: NAVY
    });

    const slice = englishDays.slice(startIndex, endIndex);
    const boxW = (A4_WIDTH - 70) / 2;
    const boxH = 150;

    slice.forEach((day, i) => {
      const col = i < 4 ? 0 : 1;
      const row = i < 4 ? i : i - 4;
      const bx = 30 + col * (boxW + 10);
      const by = A4_HEIGHT - 95 - (row + 1) * (boxH + 10);

      drawDayBox(p, fontBold, fontRegular, {
        x: bx,
        y: by,
        width: boxW,
        height: boxH,
        dayNum: day.dayNum,
        dateStr: day.dateStr,
        dayName: day.dayName,
        title: day.title,
        tasks: day.tasks,
        badgeColor: day.badgeColor
      });
    });

    drawFooter(p, fontRegular, pageNum, 6);
  }

  renderWeekPage(2, 0, 7, 'WEEK 1: LETTERS A TO F (23 OCT - 29 OCT 2026)');
  renderWeekPage(3, 7, 14, 'WEEK 2: LETTERS G TO L (30 OCT - 05 NOV 2026)');
  renderWeekPage(4, 14, 21, 'WEEK 3: LETTERS M TO R (06 NOV - 12 NOV 2026)');
  renderWeekPage(5, 21, 28, 'WEEK 4: LETTERS S TO Z (13 NOV - 19 NOV 2026)');

  // --- PAGE 6: WEEK 5 (DAYS 29-32) & CERTIFICATE ---
  const p6 = doc.addPage([A4_WIDTH, A4_HEIGHT]);
  drawHeader(p6, fontBold, fontRegular, 'ENGLISH FOUNDATIONAL WORKBOOK', 'English Alphabet & Phonics', dateSpan);

  safeDrawText(p6, 'WEEK 5: WORD READING & GRAND GRADUATION (20 NOV - 23 NOV 2026)', {
    x: 30,
    y: A4_HEIGHT - 80,
    size: 11,
    font: fontBold,
    color: NAVY
  });

  const finalSlice = englishDays.slice(28, 32);
  const fBoxW = (A4_WIDTH - 70) / 2;
  const fBoxH = 135;

  finalSlice.forEach((day, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const bx = 30 + col * (fBoxW + 10);
    const by = A4_HEIGHT - 95 - (row + 1) * (fBoxH + 10);

    drawDayBox(p6, fontBold, fontRegular, {
      x: bx,
      y: by,
      width: fBoxW,
      height: fBoxH,
      dayNum: day.dayNum,
      dateStr: day.dateStr,
      dayName: day.dayName,
      title: day.title,
      tasks: day.tasks,
      badgeColor: day.badgeColor
    });
  });

  // Certificate Box
  const certY = 48;
  const certH = 320;
  p6.drawRectangle({
    x: 30,
    y: certY,
    width: A4_WIDTH - 60,
    height: certH,
    color: rgb(0.99, 0.98, 0.93),
    borderColor: AMBER,
    borderWidth: 2,
    borderRadius: 8
  });

  p6.drawRectangle({
    x: 36,
    y: certY + 6,
    width: A4_WIDTH - 72,
    height: certH - 12,
    borderColor: rgb(0.85, 0.7, 0.3),
    borderWidth: 1,
    borderRadius: 6
  });

  safeDrawText(p6, 'NEXTSEM ACADEMY - CERTIFICATE OF COMPLETION', {
    x: 105,
    y: certY + certH - 30,
    size: 13,
    font: fontBold,
    color: NAVY
  });

  safeDrawText(p6, 'STAR ALPHABET & EARLY WORD READING MASTER', {
    x: 125,
    y: certY + certH - 48,
    size: 11,
    font: fontBold,
    color: BLUE
  });

  safeDrawText(p6, 'This is proudly awarded to little scholar:', {
    x: 190,
    y: certY + certH - 72,
    size: 9.5,
    font: fontRegular,
    color: DARK_GRAY
  });

  p6.drawLine({
    start: { x: 90, y: certY + certH - 105 },
    end: { x: A4_WIDTH - 90, y: certY + certH - 105 },
    thickness: 1.2,
    color: NAVY
  });

  safeDrawText(p6, 'STUDENT NAME HERE', {
    x: 230,
    y: certY + certH - 100,
    size: 11,
    font: fontBold,
    color: rgb(0.3, 0.4, 0.5)
  });

  safeDrawText(p6, 'for successfully completing the 1-Month English Foundational Program (23 Oct 2026 - 23 Nov 2026)', {
    x: 65,
    y: certY + certH - 125,
    size: 8.8,
    font: fontRegular,
    color: DARK_GRAY
  });

  safeDrawText(p6, 'Demonstrated mastery of Alphabet A to Z, Phonics Sounds & Early 3-Letter Sight Words.', {
    x: 85,
    y: certY + certH - 140,
    size: 8.5,
    font: fontRegular,
    color: DARK_GRAY
  });

  safeDrawText(p6, 'Rating: [*][*][*][*][*] EXCELLENT PERFORMANCE (50 GOLDEN STARS)', {
    x: 115,
    y: certY + certH - 165,
    size: 9.5,
    font: fontBold,
    color: AMBER
  });

  safeDrawText(p6, 'Er. Manoj Kumar', {
    x: 75,
    y: certY + 45,
    size: 10,
    font: fontBold,
    color: NAVY
  });
  p6.drawLine({
    start: { x: 65, y: certY + 40 },
    end: { x: 190, y: certY + 40 },
    thickness: 0.8,
    color: DARK_GRAY
  });
  safeDrawText(p6, 'Academic Director & Author', {
    x: 65,
    y: certY + 28,
    size: 7.5,
    font: fontRegular,
    color: LIGHT_GRAY
  });

  safeDrawText(p6, 'Parent / Teacher In-Charge', {
    x: A4_WIDTH - 195,
    y: certY + 45,
    size: 10,
    font: fontBold,
    color: NAVY
  });
  p6.drawLine({
    start: { x: A4_WIDTH - 200, y: certY + 40 },
    end: { x: A4_WIDTH - 65, y: certY + 40 },
    thickness: 0.8,
    color: DARK_GRAY
  });
  safeDrawText(p6, 'Verified Signature & Date', {
    x: A4_WIDTH - 185,
    y: certY + 28,
    size: 7.5,
    font: fontRegular,
    color: LIGHT_GRAY
  });

  drawFooter(p6, fontRegular, 6, 6);

  const pdfBytes = await doc.save();
  return pdfBytes;
}

// ---------------------------------------------------------------------------
// 2. GENERATE MATHS 1-MONTH DAILY WORKBOOK (23 OCT - 23 NOV 2026)
// ---------------------------------------------------------------------------
async function generateMathsPdf() {
  const doc = await PDFDocument.create();
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const dateSpan = '23 Oct 2026 - 23 Nov 2026';

  const p1 = doc.addPage([A4_WIDTH, A4_HEIGHT]);
  drawHeader(p1, fontBold, fontRegular, 'MATHS FOUNDATIONAL WORKBOOK', 'Maths Numbers 1-20 & Shapes', dateSpan);

  p1.drawRectangle({
    x: 30,
    y: A4_HEIGHT - 210,
    width: A4_WIDTH - 60,
    height: 135,
    color: rgb(0.99, 0.96, 0.9),
    borderColor: AMBER,
    borderWidth: 1.5,
    borderRadius: 8
  });

  safeDrawText(p1, 'MATHS FOUNDATIONAL 30-DAY WORKBOOK', {
    x: 45,
    y: A4_HEIGHT - 100,
    size: 18,
    font: fontBold,
    color: NAVY
  });

  safeDrawText(p1, 'Daily Numbers 1-20, Counting Objects, Comparing Quantities, 2D Shapes & Primary Colors', {
    x: 45,
    y: A4_HEIGHT - 120,
    size: 9.5,
    font: fontRegular,
    color: DARK_GRAY
  });

  safeDrawText(p1, 'Syllabus Duration: 32 Calendar Days (23 October 2026 to 23 November 2026)', {
    x: 45,
    y: A4_HEIGHT - 138,
    size: 9.5,
    font: fontBold,
    color: rgb(0.7, 0.4, 0.05)
  });

  safeDrawText(p1, 'Methodology: Visual Number Quantities + How Many? Games + Finger Tracing + Shape Recognition', {
    x: 45,
    y: A4_HEIGHT - 154,
    size: 8.5,
    font: fontRegular,
    color: DARK_GRAY
  });

  p1.drawRectangle({
    x: 45,
    y: A4_HEIGHT - 200,
    width: A4_WIDTH - 90,
    height: 35,
    color: WHITE,
    borderColor: rgb(0.9, 0.8, 0.6),
    borderWidth: 1,
    borderRadius: 4
  });

  safeDrawText(p1, 'Student Name: _______________________________   Class/Section: ______________   Roll No: _______', {
    x: 55,
    y: A4_HEIGHT - 188,
    size: 8.5,
    font: fontRegular,
    color: NAVY
  });

  safeDrawText(p1, '5-WEEK MATHS SYLLABUS ROADMAP (OCTOBER 23 TO NOVEMBER 23, 2026):', {
    x: 30,
    y: A4_HEIGHT - 230,
    size: 11,
    font: fontBold,
    color: NAVY
  });

  const weeks = [
    { title: 'Week 1 (Oct 23 - Oct 29)', focus: 'Numbers 1 to 5: Number tracing, matching 1-5 fingers, counting apples & stars, number song.' },
    { title: 'Week 2 (Oct 30 - Nov 05)', focus: 'Numbers 6 to 10: Tracing 6-10, counting balls & toys, comparing quantities (More vs Less), 1-10 sequence.' },
    { title: 'Week 3 (Nov 06 - Nov 12)', focus: 'Numbers 11 to 15 + 2D Shapes: Circle (Round), Square (4 Sides), Triangle (3 Corners), Star & Heart.' },
    { title: 'Week 4 (Nov 13 - Nov 19)', focus: 'Numbers 16 to 20 + Primary Colors: Red, Blue, Yellow, Green, Orange, Purple. Size comparison (Big vs Small).' },
    { title: 'Week 5 (Nov 20 - Nov 23)', focus: 'Full 1-20 Number Line Mastery, How Many? Counting Viva & Grand Maths Star Certificate Award.' }
  ];

  let wy = A4_HEIGHT - 250;
  weeks.forEach((w, idx) => {
    p1.drawRectangle({
      x: 30,
      y: wy - 28,
      width: A4_WIDTH - 60,
      height: 36,
      color: idx % 2 === 0 ? BG_BOX : WHITE,
      borderColor: rgb(0.85, 0.88, 0.92),
      borderWidth: 0.8
    });

    safeDrawText(p1, `${idx + 1}. ${w.title}`, {
      x: 40,
      y: wy - 8,
      size: 9,
      font: fontBold,
      color: AMBER
    });

    safeDrawText(p1, w.focus, {
      x: 40,
      y: wy - 22,
      size: 7.8,
      font: fontRegular,
      color: DARK_GRAY
    });

    wy -= 42;
  });

  p1.drawRectangle({
    x: 30,
    y: 50,
    width: A4_WIDTH - 60,
    height: 100,
    color: rgb(0.95, 0.98, 0.95),
    borderColor: EMERALD,
    borderWidth: 1,
    borderRadius: 6
  });

  safeDrawText(p1, 'PARENT & TEACHER MATHS PRACTICE GUIDELINES:', {
    x: 42,
    y: 135,
    size: 9.5,
    font: fontBold,
    color: rgb(0.05, 0.45, 0.25)
  });

  const tips = [
    '1. Practice counting with physical real objects (spoons, blocks, pebbles, candies).',
    '2. Teach the number value first before writing: show 3 fingers, 3 claps, 3 steps.',
    '3. Have the child count out loud: "One, Two, Three!" with steady cadence.',
    '4. Emphasize that numbers tell "How many" things there are in total.',
    '5. Play the interactive "How Many?" digital game at https://ncert-alpha.vercel.app/kids-kg for instant rewards!'
  ];

  let ty = 120;
  tips.forEach(t => {
    safeDrawText(p1, t, { x: 42, y: ty, size: 7.5, font: fontRegular, color: DARK_GRAY });
    ty -= 14;
  });

  drawFooter(p1, fontRegular, 1, 6);

  const mathsDays = [
    { dayNum: 1, dateStr: '23 Oct 2026', dayName: 'Friday', title: 'Number 1 - One Sun - Single Unit', tasks: ['Trace numeral "1" 10 times in guide boxes.', 'Draw 1 happy smiling sun.', 'Clap your hands exactly 1 time!'], badgeColor: AMBER },
    { dayNum: 2, dateStr: '24 Oct 2026', dayName: 'Saturday', title: 'Number 2 - Two Eyes - Pair of Shoes', tasks: ['Trace numeral "2" 10 times.', 'Touch your 2 eyes, 2 ears, and 2 hands.', 'Draw 2 colorful balloons in the sky.'], badgeColor: AMBER },
    { dayNum: 3, dateStr: '25 Oct 2026', dayName: 'Sunday', title: 'Sunday Fun Activity - 1 & 2 Counting Game', tasks: ['Find 2 spoons in kitchen and place side-by-side.', 'Color the number 1 yellow and number 2 green.', 'Count fingers: 1, 2!'], badgeColor: EMERALD },
    { dayNum: 4, dateStr: '26 Oct 2026', dayName: 'Monday', title: 'Number 3 - Three Wheels of Auto Rickshaw', tasks: ['Trace numeral "3" 10 times.', 'Draw a triangle with 3 straight corners.', 'Count 3 apples on the practice sheet.'], badgeColor: AMBER },
    { dayNum: 5, dateStr: '27 Oct 2026', dayName: 'Tuesday', title: 'Number 4 - Four Legs of a Chair', tasks: ['Trace numeral "4" 10 times.', 'Count 4 wheels on a car.', 'Draw a square with 4 equal sides.'], badgeColor: AMBER },
    { dayNum: 6, dateStr: '28 Oct 2026', dayName: 'Wednesday', title: 'Number 5 - Five Fingers of Hand', tasks: ['Trace numeral "5" 10 times.', 'Put hand on paper and trace all 5 fingers!', 'High-five with parents: "1, 2, 3, 4, 5!"'], badgeColor: AMBER },
    { dayNum: 7, dateStr: '29 Oct 2026', dayName: 'Thursday', title: 'Week 1 Review & Star Check (1 to 5)', tasks: ['Count from 1 to 5 forward: 1, 2, 3, 4, 5.', 'Match numerals 1-5 to dots.', 'Week 1 Completed! 5 Stars Awarded! [*][*][*][*][*]'], badgeColor: BLUE },

    { dayNum: 8, dateStr: '30 Oct 2026', dayName: 'Friday', title: 'Number 6 - Six Legs of an Ant', tasks: ['Trace numeral "6" 10 times.', 'Count 6 stars drawn on sheet.', 'Draw 6 little dots inside a circle.'], badgeColor: PURPLE },
    { dayNum: 9, dateStr: '31 Oct 2026', dayName: 'Saturday', title: 'Number 7 - Seven Colors of Rainbow', tasks: ['Trace numeral "7" 10 times.', 'Name the 7 colors in a rainbow.', 'Count 7 days of the week: Mon to Sun.'], badgeColor: PURPLE },
    { dayNum: 10, dateStr: '01 Nov 2026', dayName: 'Sunday', title: 'Sunday Fun Activity - Rainbow Counting', tasks: ['Color a big rainbow with 7 curved stripes.', 'Count 7 toys in your toybox.', 'Say numbers 1 to 7 proudly to family.'], badgeColor: EMERALD },
    { dayNum: 11, dateStr: '02 Nov 2026', dayName: 'Monday', title: 'Number 8 - Eight Legs of an Octopus', tasks: ['Trace numeral "8" (two loops) 10 times.', 'Draw 8 little bubbles in the sea.', 'Count 8 blocks and stack them high.'], badgeColor: PURPLE },
    { dayNum: 12, dateStr: '03 Nov 2026', dayName: 'Tuesday', title: 'Number 9 - Nine Colorful Marbles', tasks: ['Trace numeral "9" 10 times.', 'Count 9 flowers in the garden.', 'Circle the group that has 9 items.'], badgeColor: PURPLE },
    { dayNum: 13, dateStr: '04 Nov 2026', dayName: 'Wednesday', title: 'Number 10 - Ten Fingers & Toes (1 and 0)', tasks: ['Trace numeral "10" 10 times.', 'Count all 10 fingers on both hands!', 'Two hands together make 10: High-ten!'], badgeColor: PURPLE },
    { dayNum: 14, dateStr: '05 Nov 2026', dayName: 'Thursday', title: 'Week 2 Review & Quantity Check (1 to 10)', tasks: ['Count backwards from 10 to 1: 10, 9, 8... 1, BLASTOFF!', 'Compare: Which is MORE? 8 candies or 3 candies?', 'Week 2 Completed! 5 Stars Awarded! [*][*][*][*][*]'], badgeColor: BLUE },

    { dayNum: 15, dateStr: '06 Nov 2026', dayName: 'Friday', title: 'Number 11 & 12 - Eleven & Twelve', tasks: ['Trace numeral "11" and "12" 5 times each.', '10 + 1 = 11. Count 11 pencils.', '10 + 2 = 12 (One Dozen eggs/bananas).'], badgeColor: BLUE },
    { dayNum: 16, dateStr: '07 Nov 2026', dayName: 'Saturday', title: 'Number 13 & 14 - Thirteen & Fourteen', tasks: ['Trace numeral "13" and "14" 5 times each.', 'Count 13 buttons and 14 leaves.', 'Circle the number 13 on the number line.'], badgeColor: BLUE },
    { dayNum: 17, dateStr: '08 Nov 2026', dayName: 'Sunday', title: 'Sunday Fun Activity - Shape Explorer', tasks: ['Find Circle shape (Clock, Plate, Coin).', 'Find Square shape (Window, Biscuit, Book).', 'Color circles RED and squares BLUE.'], badgeColor: EMERALD },
    { dayNum: 18, dateStr: '09 Nov 2026', dayName: 'Monday', title: 'Number 15 - Fifteen & Triangle Shape', tasks: ['Trace numeral "15" 8 times.', '10 + 5 = 15. Count 15 colorful stars.', 'Draw 3 triangles (shapes with 3 corners).'], badgeColor: BLUE },
    { dayNum: 19, dateStr: '10 Nov 2026', dayName: 'Tuesday', title: '2D Shapes Master - Star & Heart', tasks: ['Trace 5-point star shape: Twinkle twinkle star!', 'Draw a lovely Heart shape for family.', 'Count total corners: Triangle (3), Square (4).'], badgeColor: BLUE },
    { dayNum: 20, dateStr: '11 Nov 2026', dayName: 'Wednesday', title: 'Quantity Match - Match Numbers 11-15', tasks: ['Draw lines connecting numerals 11-15 to counts.', 'Fill missing numbers: 11, __, 13, __, 15.', 'Practice saying numbers 11 to 15 in English.'], badgeColor: BLUE },
    { dayNum: 21, dateStr: '12 Nov 2026', dayName: 'Thursday', title: 'Week 3 Review & Star Check (11 to 15)', tasks: ['Identify 2D shapes: Circle, Square, Triangle, Star.', 'Count objects from 1 to 15 without mistakes.', 'Week 3 Completed! 5 Stars Awarded! [*][*][*][*][*]'], badgeColor: AMBER },

    { dayNum: 22, dateStr: '13 Nov 2026', dayName: 'Friday', title: 'Number 16 & 17 - Sixteen & Seventeen', tasks: ['Trace numeral "16" and "17" 5 times each.', '10 + 6 = 16. Count 16 cheerful birds.', '10 + 7 = 17. Count 17 shining stars.'], badgeColor: ROSE },
    { dayNum: 23, dateStr: '14 Nov 2026', dayName: 'Saturday', title: 'Number 18 & 19 - Eighteen & Nineteen', tasks: ['Trace numeral "18" and "19" 5 times each.', '10 + 8 = 18. Count 18 colorful candies.', '10 + 9 = 19. Almost twenty!'], badgeColor: ROSE },
    { dayNum: 24, dateStr: '15 Nov 2026', dayName: 'Sunday', title: 'Sunday Fun Activity - Primary Colors Art', tasks: ['Paint or color with Primary Colors: Red, Blue, Yellow.', 'Mix Red + Yellow to discover ORANGE!', 'Count how many red things in your room.'], badgeColor: EMERALD },
    { dayNum: 25, dateStr: '16 Nov 2026', dayName: 'Monday', title: 'Number 20 - Big Milestone: Twenty!', tasks: ['Trace numeral "20" (two tens) 10 times.', '10 fingers + 10 toes = 20!', 'Clap 20 times to celebrate reaching 20!'], badgeColor: ROSE },
    { dayNum: 26, dateStr: '17 Nov 2026', dayName: 'Tuesday', title: 'Size Comparison - Big vs Small', tasks: ['Elephant is BIG, Mouse is SMALL.', 'Draw 1 BIG circle and 1 SMALL circle.', 'Circle the bigger object in 3 pairs.'], badgeColor: ROSE },
    { dayNum: 27, dateStr: '18 Nov 2026', dayName: 'Wednesday', title: 'Full 1 to 20 Number Train', tasks: ['Write numbers 1 to 20 in train wagons.', 'Say out loud from 1 to 20 in order.', 'Play online "How Many?" game at nextsem hub.'], badgeColor: ROSE },
    { dayNum: 28, dateStr: '19 Nov 2026', dayName: 'Thursday', title: 'Week 4 Review & Star Check (16 to 20)', tasks: ['Identify numbers 1 to 20 on flashcards.', 'Which number comes AFTER 15? (16). After 19? (20).', 'Week 4 Completed! 5 Stars Awarded! [*][*][*][*][*]'], badgeColor: AMBER },

    { dayNum: 29, dateStr: '20 Nov 2026', dayName: 'Friday', title: 'Number Line Hop - Counting Forward 1-20', tasks: ['Hop like a kangaroo along 1 to 20 line.', 'Find: 5 + 1 = 6 (hop 1 step forward).', 'Find: 9 + 1 = 10 (hop 1 step forward).'], badgeColor: EMERALD },
    { dayNum: 30, dateStr: '21 Nov 2026', dayName: 'Saturday', title: 'Super "How Many?" Challenge', tasks: ['Count 8 cars, 12 stars, 16 balloons on sheet.', 'Match counts to correct numbers.', 'Time challenge: Count 10 blocks in 10 seconds!'], badgeColor: EMERALD },
    { dayNum: 31, dateStr: '22 Nov 2026', dayName: 'Sunday', title: 'Grand Maths Oral Viva with Parents', tasks: ['Count 1 to 20 smoothly without pausing.', 'Identify shapes: Circle, Square, Triangle, Star.', 'Identify colors: Red, Blue, Yellow, Green.'], badgeColor: AMBER },
    { dayNum: 32, dateStr: '23 Nov 2026', dayName: 'Monday', title: 'Graduation Day - 1-Month Maths Champion!', tasks: ['Congratulations! 32 days of Maths numbers complete!', 'Awarded the Junior Maths Champion Certificate.', 'Award 50 Golden Bonus Stars in the online hub!'], badgeColor: AMBER }
  ];

  function renderMathsWeekPage(pageNum, startIndex, endIndex, weekTitle) {
    const p = doc.addPage([A4_WIDTH, A4_HEIGHT]);
    drawHeader(p, fontBold, fontRegular, 'MATHS FOUNDATIONAL WORKBOOK', 'Maths Numbers 1-20 & Shapes', dateSpan);

    safeDrawText(p, weekTitle, {
      x: 30,
      y: A4_HEIGHT - 80,
      size: 11,
      font: fontBold,
      color: NAVY
    });

    const slice = mathsDays.slice(startIndex, endIndex);
    const boxW = (A4_WIDTH - 70) / 2;
    const boxH = 150;

    slice.forEach((day, i) => {
      const col = i < 4 ? 0 : 1;
      const row = i < 4 ? i : i - 4;
      const bx = 30 + col * (boxW + 10);
      const by = A4_HEIGHT - 95 - (row + 1) * (boxH + 10);

      drawDayBox(p, fontBold, fontRegular, {
        x: bx,
        y: by,
        width: boxW,
        height: boxH,
        dayNum: day.dayNum,
        dateStr: day.dateStr,
        dayName: day.dayName,
        title: day.title,
        tasks: day.tasks,
        badgeColor: day.badgeColor
      });
    });

    drawFooter(p, fontRegular, pageNum, 6);
  }

  renderMathsWeekPage(2, 0, 7, 'WEEK 1: NUMBERS 1 TO 5 (23 OCT - 29 OCT 2026)');
  renderMathsWeekPage(3, 7, 14, 'WEEK 2: NUMBERS 6 TO 10 (30 OCT - 05 NOV 2026)');
  renderMathsWeekPage(4, 14, 21, 'WEEK 3: NUMBERS 11 TO 15 & SHAPES (06 NOV - 12 NOV 2026)');
  renderMathsWeekPage(5, 21, 28, 'WEEK 4: NUMBERS 16 TO 20 & COLORS (13 NOV - 19 NOV 2026)');

  const p6 = doc.addPage([A4_WIDTH, A4_HEIGHT]);
  drawHeader(p6, fontBold, fontRegular, 'MATHS FOUNDATIONAL WORKBOOK', 'Maths Numbers 1-20 & Shapes', dateSpan);

  safeDrawText(p6, 'WEEK 5: NUMBER LINE MASTERY & GRADUATION (20 NOV - 23 NOV 2026)', {
    x: 30,
    y: A4_HEIGHT - 80,
    size: 11,
    font: fontBold,
    color: NAVY
  });

  const finalSlice = mathsDays.slice(28, 32);
  const fBoxW = (A4_WIDTH - 70) / 2;
  const fBoxH = 135;

  finalSlice.forEach((day, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const bx = 30 + col * (fBoxW + 10);
    const by = A4_HEIGHT - 95 - (row + 1) * (fBoxH + 10);

    drawDayBox(p6, fontBold, fontRegular, {
      x: bx,
      y: by,
      width: fBoxW,
      height: fBoxH,
      dayNum: day.dayNum,
      dateStr: day.dateStr,
      dayName: day.dayName,
      title: day.title,
      tasks: day.tasks,
      badgeColor: day.badgeColor
    });
  });

  const certY = 48;
  const certH = 320;
  p6.drawRectangle({
    x: 30,
    y: certY,
    width: A4_WIDTH - 60,
    height: certH,
    color: rgb(0.99, 0.98, 0.93),
    borderColor: AMBER,
    borderWidth: 2,
    borderRadius: 8
  });

  p6.drawRectangle({
    x: 36,
    y: certY + 6,
    width: A4_WIDTH - 72,
    height: certH - 12,
    borderColor: rgb(0.85, 0.7, 0.3),
    borderWidth: 1,
    borderRadius: 6
  });

  safeDrawText(p6, 'NEXTSEM ACADEMY - CERTIFICATE OF COMPLETION', {
    x: 105,
    y: certY + certH - 30,
    size: 13,
    font: fontBold,
    color: NAVY
  });

  safeDrawText(p6, 'JUNIOR MATHS & NUMERACY CHAMPION', {
    x: 145,
    y: certY + certH - 48,
    size: 11,
    font: fontBold,
    color: AMBER
  });

  safeDrawText(p6, 'This is proudly awarded to little mathematician:', {
    x: 180,
    y: certY + certH - 72,
    size: 9.5,
    font: fontRegular,
    color: DARK_GRAY
  });

  p6.drawLine({
    start: { x: 90, y: certY + certH - 105 },
    end: { x: A4_WIDTH - 90, y: certY + certH - 105 },
    thickness: 1.2,
    color: NAVY
  });

  safeDrawText(p6, 'STUDENT NAME HERE', {
    x: 230,
    y: certY + certH - 100,
    size: 11,
    font: fontBold,
    color: rgb(0.3, 0.4, 0.5)
  });

  safeDrawText(p6, 'for successfully completing the 1-Month Maths Foundational Program (23 Oct 2026 - 23 Nov 2026)', {
    x: 75,
    y: certY + certH - 125,
    size: 8.8,
    font: fontRegular,
    color: DARK_GRAY
  });

  safeDrawText(p6, 'Demonstrated mastery of Numbers 1 to 20, Counting Sense, 2D Shapes & Color Identification.', {
    x: 75,
    y: certY + certH - 140,
    size: 8.5,
    font: fontRegular,
    color: DARK_GRAY
  });

  safeDrawText(p6, 'Rating: [*][*][*][*][*] EXCELLENT PERFORMANCE (50 GOLDEN STARS)', {
    x: 115,
    y: certY + certH - 165,
    size: 9.5,
    font: fontBold,
    color: AMBER
  });

  safeDrawText(p6, 'Er. Manoj Kumar', {
    x: 75,
    y: certY + 45,
    size: 10,
    font: fontBold,
    color: NAVY
  });
  p6.drawLine({
    start: { x: 65, y: certY + 40 },
    end: { x: 190, y: certY + 40 },
    thickness: 0.8,
    color: DARK_GRAY
  });
  safeDrawText(p6, 'Academic Director & Author', {
    x: 65,
    y: certY + 28,
    size: 7.5,
    font: fontRegular,
    color: LIGHT_GRAY
  });

  safeDrawText(p6, 'Parent / Teacher In-Charge', {
    x: A4_WIDTH - 195,
    y: certY + 45,
    size: 10,
    font: fontBold,
    color: NAVY
  });
  p6.drawLine({
    start: { x: A4_WIDTH - 200, y: certY + 40 },
    end: { x: A4_WIDTH - 65, y: certY + 40 },
    thickness: 0.8,
    color: DARK_GRAY
  });
  safeDrawText(p6, 'Verified Signature & Date', {
    x: A4_WIDTH - 185,
    y: certY + 28,
    size: 7.5,
    font: fontRegular,
    color: LIGHT_GRAY
  });

  drawFooter(p6, fontRegular, 6, 6);

  const pdfBytes = await doc.save();
  return pdfBytes;
}

// ---------------------------------------------------------------------------
// 3. GENERATE HINDI 1-MONTH DAILY WORKBOOK (23 OCT - 23 NOV 2026)
// ---------------------------------------------------------------------------
async function generateHindiPdf() {
  const doc = await PDFDocument.create();
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const dateSpan = '23 Oct 2026 - 23 Nov 2026';

  const p1 = doc.addPage([A4_WIDTH, A4_HEIGHT]);
  drawHeader(p1, fontBold, fontRegular, 'HINDI VARNAMALA FOUNDATIONAL WORKBOOK', 'Hindi Varnamala & Words', dateSpan);

  p1.drawRectangle({
    x: 30,
    y: A4_HEIGHT - 210,
    width: A4_WIDTH - 60,
    height: 135,
    color: rgb(1.0, 0.94, 0.95),
    borderColor: ROSE,
    borderWidth: 1.5,
    borderRadius: 8
  });

  safeDrawText(p1, 'HINDI VARNAMALA 30-DAY FOUNDATIONAL WORKBOOK', {
    x: 45,
    y: A4_HEIGHT - 100,
    size: 16,
    font: fontBold,
    color: NAVY
  });

  safeDrawText(p1, 'Daily Swar (A-Aha), Vyanjan (Ka-Gya), Akshar Pehchan, 2-3 Akshar Words & Oral Recitation', {
    x: 45,
    y: A4_HEIGHT - 120,
    size: 9.5,
    font: fontRegular,
    color: DARK_GRAY
  });

  safeDrawText(p1, 'Syllabus Duration: 32 Calendar Days (23 October 2026 to 23 November 2026)', {
    x: 45,
    y: A4_HEIGHT - 138,
    size: 9.5,
    font: fontBold,
    color: ROSE
  });

  safeDrawText(p1, 'Methodology: Chitra Pehchan + Dhwani Uchcharan + Finger Tracing + Shabda Rachna', {
    x: 45,
    y: A4_HEIGHT - 154,
    size: 8.5,
    font: fontRegular,
    color: DARK_GRAY
  });

  p1.drawRectangle({
    x: 45,
    y: A4_HEIGHT - 200,
    width: A4_WIDTH - 90,
    height: 35,
    color: WHITE,
    borderColor: rgb(0.95, 0.8, 0.85),
    borderWidth: 1,
    borderRadius: 4
  });

  safeDrawText(p1, 'Student Name: _______________________________   Class/Section: ______________   Roll No: _______', {
    x: 55,
    y: A4_HEIGHT - 188,
    size: 8.5,
    font: fontRegular,
    color: NAVY
  });

  safeDrawText(p1, '5-WEEK HINDI SYLLABUS ROADMAP (OCTOBER 23 TO NOVEMBER 23, 2026):', {
    x: 30,
    y: A4_HEIGHT - 230,
    size: 11,
    font: fontBold,
    color: NAVY
  });

  const weeks = [
    { title: 'Week 1 (Oct 23 - Oct 29)', focus: 'Swar Part 1 (A, Aa, I, Ee, U, Oo): Anaar, Aam, Imli, Eekh, Ullu, Oon. Chitra pehchan & sound practice.' },
    { title: 'Week 2 (Oct 30 - Nov 05)', focus: 'Swar Part 2 (Ri, E, Ai, O, Au, Ang, Aha): Rishi, Edi, Ainak, Okhli, Aurat, Angoor. Swar complete revision.' },
    { title: 'Week 3 (Nov 06 - Nov 12)', focus: 'Vyanjan Ka & Cha Varg: (Ka, Kha, Ga, Gha, Nga | Cha, Chha, Ja, Jha, Nya) - Kabootar, Khargosh, Gamla, Chammach, Jahaz.' },
    { title: 'Week 4 (Nov 13 - Nov 19)', focus: 'Vyanjan Ta, Ta & Pa Varg: (Ta, Tha, Da, Dha, Na | Pa, Pha, Ba, Bha, Ma) - Tamatar, Tarbooj, Patang, Machhli.' },
    { title: 'Week 5 (Nov 20 - Nov 23)', focus: '2 & 3 Akshar Saral Shabd (Ghar, Jal, Phal, Bus, Kamal, Matar) + Grand Hindi Varnamala Star Certificate Award.' }
  ];

  let wy = A4_HEIGHT - 250;
  weeks.forEach((w, idx) => {
    p1.drawRectangle({
      x: 30,
      y: wy - 28,
      width: A4_WIDTH - 60,
      height: 36,
      color: idx % 2 === 0 ? BG_BOX : WHITE,
      borderColor: rgb(0.85, 0.88, 0.92),
      borderWidth: 0.8
    });

    safeDrawText(p1, `${idx + 1}. ${w.title}`, {
      x: 40,
      y: wy - 8,
      size: 9,
      font: fontBold,
      color: ROSE
    });

    safeDrawText(p1, w.focus, {
      x: 40,
      y: wy - 22,
      size: 7.8,
      font: fontRegular,
      color: DARK_GRAY
    });

    wy -= 42;
  });

  p1.drawRectangle({
    x: 30,
    y: 50,
    width: A4_WIDTH - 60,
    height: 100,
    color: rgb(0.99, 0.95, 0.96),
    borderColor: ROSE,
    borderWidth: 1,
    borderRadius: 6
  });

  safeDrawText(p1, 'HINDI PRACTICE GUIDELINES FOR PARENTS & TEACHERS (ABHIVAVAK MARGDARSHIKA):', {
    x: 42,
    y: 135,
    size: 9,
    font: fontBold,
    color: rgb(0.65, 0.15, 0.25)
  });

  const tips = [
    '1. Roz 15 minute bache ke sath baithein aur shuddh Hindi uchcharan (pronunciation) par dhyan dein.',
    '2. Pehle chitra dikhakar puchein: "Yeh kya hai?" (e.g. Anaar, Aam), phir akshar ki dhwani bolein.',
    '3. Ungli se hawa me ya digital chalk pad par akshar likhne ka abhyas karwayein.',
    '4. Har din task pura hone par "[ ] DONE" par sahi ka nishan lagakar star sticker dein.',
    '5. Online Hindi audio studio (https://ncert-alpha.vercel.app/kids-kg) se aawaz sun kar dohrane dein.'
  ];

  let ty = 120;
  tips.forEach(t => {
    safeDrawText(p1, t, { x: 42, y: ty, size: 7.5, font: fontRegular, color: DARK_GRAY });
    ty -= 14;
  });

  drawFooter(p1, fontRegular, 1, 6);

  const hindiDays = [
    { dayNum: 1, dateStr: '23 Oct 2026', dayName: 'Friday', title: 'Swar "A" - Anaar (Pomegranate)', tasks: ['Trace Swar "A" 5 times.', 'Identify word: A se Anaar (Laal Anaar Daane-daar).', 'Say out loud: "A... Anaar!" with action.'], badgeColor: ROSE },
    { dayNum: 2, dateStr: '24 Oct 2026', dayName: 'Saturday', title: 'Swar "Aa" - Aam (King of Fruits Mango)', tasks: ['Trace Swar "Aa" 5 times.', 'Identify word: Aa se Aam (Meetha Aam Raseela).', 'Say difference between A and Aa sound.'], badgeColor: ROSE },
    { dayNum: 3, dateStr: '25 Oct 2026', dayName: 'Sunday', title: 'Sunday Fun Activity - Anaar & Aam Coloring', tasks: ['Color an Anaar red and an Aam sweet yellow.', 'Sing a sweet Hindi Balgeet with grandparents.', 'Identify 2 sweet fruits at home.'], badgeColor: EMERALD },
    { dayNum: 4, dateStr: '26 Oct 2026', dayName: 'Monday', title: 'Swar "I" - Imli (Sour Tamarind)', tasks: ['Trace Swar "I" 5 times.', 'Identify: I se Imli (Khatti Meethi Imli).', 'Make funny sour face when saying Imli!'], badgeColor: ROSE },
    { dayNum: 5, dateStr: '27 Oct 2026', dayName: 'Tuesday', title: 'Swar "Ee" - Eekh (Sweet Sugarcane)', tasks: ['Trace Swar "Ee" with upper stroke.', 'Identify: Ee se Eekh (Ganne jaisi meethi Eekh).', 'Compare short "I" vs long "Ee" sound.'], badgeColor: ROSE },
    { dayNum: 6, dateStr: '28 Oct 2026', dayName: 'Wednesday', title: 'Swar "U" & "Oo" - Ullu & Oon', tasks: ['Trace Swar "U" (U se Ullu) and "Oo" (Oo se Oon).', 'Vocabulary: Ullu (Owl), Oon (Wool), Oont (Camel).', 'Listen to Hindi Swar voice in online app.'], badgeColor: ROSE },
    { dayNum: 7, dateStr: '29 Oct 2026', dayName: 'Thursday', title: 'Week 1 Review & Swar Star Check (A - Oo)', tasks: ['Recite in order: A, Aa, I, Ee, U, Oo.', 'Match akshar to picture: A-Anaar, Aa-Aam, I-Imli.', 'Week 1 Completed! 5 Stars Awarded! [*][*][*][*][*]'], badgeColor: AMBER },

    { dayNum: 8, dateStr: '30 Oct 2026', dayName: 'Friday', title: 'Swar "Ri" & "E" - Rishi & Edi', tasks: ['Trace Swar "Ri" (Ri se Rishi) and "E" (E se Edi).', 'Touch your ankle heel: E se Edi.', 'Say: "Ri se Rishi dhyan lagate!"'], badgeColor: PURPLE },
    { dayNum: 9, dateStr: '31 Oct 2026', dayName: 'Saturday', title: 'Swar "Ai" - Ainak (Spectacles)', tasks: ['Trace Swar "Ai" (Ai se Ainak) with upper slant.', 'Identify: Ai se Ainak, Ai se Aravat.', 'Wear imaginary spectacles with your fingers!'], badgeColor: PURPLE },
    { dayNum: 10, dateStr: '01 Nov 2026', dayName: 'Sunday', title: 'Sunday Fun Activity - Ainak & Swar Drawing', tasks: ['Draw round spectacles (Ainak) on paper.', 'Storytime: Ainak dada ji ki story.', 'Practice speaking: A, Aa, I, Ee, U, Oo, Ri, E, Ai.'], badgeColor: EMERALD },
    { dayNum: 11, dateStr: '02 Nov 2026', dayName: 'Monday', title: 'Swar "O" & "Au" - Okhli & Aurat', tasks: ['Trace Swar "O" (O se Okhli) and "Au" (Au se Aurat).', 'Vocabulary: Okhli, Os (Dewdrop), Aurat, Aushadh.', 'Identify the double upper stroke on "Au".'], badgeColor: PURPLE },
    { dayNum: 12, dateStr: '03 Nov 2026', dayName: 'Tuesday', title: 'Swar "Ang" & "Aha" - Angoor', tasks: ['Trace Swar "Ang" (Ang se Angoor) and "Aha".', 'Count 10 sweet green grapes (Angoor).', 'All 12 Hindi Swar are now complete!'], badgeColor: PURPLE },
    { dayNum: 13, dateStr: '04 Nov 2026', dayName: 'Wednesday', title: 'Swar Mala Chain Practice (A to Aha)', tasks: ['Chant the complete Swar mala from A to Aha.', 'Fill the missing swar: A, __, I, __, U, Oo.', 'Award yourself a big Swar Champion star!'], badgeColor: PURPLE },
    { dayNum: 14, dateStr: '05 Nov 2026', dayName: 'Thursday', title: 'Week 2 Review & Swar Star Check', tasks: ['Identify all 12 Swar on flashcards.', 'Pick the correct Swar for: Angoor (Ang), Aam (Aa).', 'Week 2 Completed! 5 Stars Awarded! [*][*][*][*][*]'], badgeColor: AMBER },

    { dayNum: 15, dateStr: '06 Nov 2026', dayName: 'Friday', title: 'Vyanjan "Ka" - Kabootar (Pigeon)', tasks: ['Trace first Vyanjan "Ka" 5 times.', 'Vocabulary: Ka se Kabootar, Kamal, Kalam.', 'Make flying bird action: "Gutur-gu, Kabootar!"'], badgeColor: BLUE },
    { dayNum: 16, dateStr: '07 Nov 2026', dayName: 'Saturday', title: 'Vyanjan "Kha" & "Ga" - Khargosh & Gamla', tasks: ['Trace "Kha" (Kha se Khargosh) and "Ga" (Ga se Gamla).', 'Hop like a soft white Khargosh (Rabbit).', 'Identify flower pot: Ga se Gamla.'], badgeColor: BLUE },
    { dayNum: 17, dateStr: '08 Nov 2026', dayName: 'Sunday', title: 'Sunday Fun Activity - Gamla & Flower Art', tasks: ['Draw a Gamla pot with 3 blooming flowers.', 'Count the petals on each flower.', 'Recite: Ka se Kabootar, Kha se Khargosh, Ga se Gamla!'], badgeColor: EMERALD },
    { dayNum: 18, dateStr: '09 Nov 2026', dayName: 'Monday', title: 'Vyanjan "Gha" & "Nga" - Ghar (Home)', tasks: ['Trace "Gha" (Gha se Ghar - sweet home).', 'Trace "Nga" (Nga khali).', 'Draw your own sweet house with a triangular roof.'], badgeColor: BLUE },
    { dayNum: 19, dateStr: '10 Nov 2026', dayName: 'Tuesday', title: 'Vyanjan "Cha" & "Chha" - Chammach & Chhatri', tasks: ['Trace "Cha" (Cha se Chammach - spoon).', 'Trace "Chha" (Chha se Chhatri - umbrella).', 'Open umbrella when it rains: Chhatri!'], badgeColor: BLUE },
    { dayNum: 20, dateStr: '11 Nov 2026', dayName: 'Wednesday', title: 'Vyanjan "Ja", "Jha", "Nya" - Jahaz & Jhanda', tasks: ['Trace "Ja" (Ja se Jahaz - ship).', 'Trace "Jha" (Jha se Jhanda - Tiranga flag).', 'Color our lovely Tiranga: Saffron, White, Green.'], badgeColor: BLUE },
    { dayNum: 21, dateStr: '12 Nov 2026', dayName: 'Thursday', title: 'Week 3 Review & Ka/Cha Varg Star Check', tasks: ['Recite Ka-varg: Ka, Kha, Ga, Gha, Nga.', 'Recite Cha-varg: Cha, Chha, Ja, Jha, Nya.', 'Week 3 Completed! 5 Stars Awarded! [*][*][*][*][*]'], badgeColor: AMBER },

    { dayNum: 22, dateStr: '13 Nov 2026', dayName: 'Friday', title: 'Vyanjan "Ta", "Tha", "Da" - Tamatar & Damru', tasks: ['Trace "Ta" (Ta se Tamatar - red juicy tomato).', 'Trace "Tha" (Tha se Thathera) & "Da" (Da se Damru).', 'Play imaginary Damru like Lord Shiva: Dum-dum!'], badgeColor: ROSE },
    { dayNum: 23, dateStr: '14 Nov 2026', dayName: 'Saturday', title: 'Vyanjan "Dha", "Nna" - Dhakkan (Lid)', tasks: ['Trace "Dha" (Dha se Dhakkan) & "Nna" (Nna khali).', 'Put lid on a pot: Dhakkan.', 'Identify the curved shape of Ta-varg akshars.'], badgeColor: ROSE },
    { dayNum: 24, dateStr: '15 Nov 2026', dayName: 'Sunday', title: 'Sunday Fun Activity - Red Tamatar Drawing', tasks: ['Draw a shiny red Tamatar with a green leaf hat.', 'Share with mom/dad: "Tamatar bada mazedar!"', 'Recite: Ta se Tamatar, Tha se Thathera, Da se Damru.'], badgeColor: EMERALD },
    { dayNum: 25, dateStr: '16 Nov 2026', dayName: 'Monday', title: 'Vyanjan "Ta", "Tha", "Da", "Dha", "Na" (Ta se Na)', tasks: ['Trace "Ta" (Ta se Tarbooj - sweet watermelon).', 'Trace "Na" (Na se Nal - save water, tap!).', 'Identify: Tarbooj, Tharmas, Dawaat, Dhanush, Nal.'], badgeColor: ROSE },
    { dayNum: 26, dateStr: '17 Nov 2026', dayName: 'Tuesday', title: 'Vyanjan "Pa", "Pha", "Ba" - Patang & Phal', tasks: ['Trace "Pa" (Pa se Patang - flying kite).', 'Trace "Pha" (Pha se Phal - fresh fruits).', 'Trace "Ba" (Ba se Batak - swimming duck).'], badgeColor: ROSE },
    { dayNum: 27, dateStr: '18 Nov 2026', dayName: 'Wednesday', title: 'Vyanjan "Bha", "Ma" - Bhalu & Machhli', tasks: ['Trace "Bha" (Bha se Bhalu - friendly bear).', 'Trace "Ma" (Ma se Machhli - jal ki rani hai!).', 'Sing complete "Machhli jal ki rani hai" song!'], badgeColor: ROSE },
    { dayNum: 28, dateStr: '19 Nov 2026', dayName: 'Thursday', title: 'Week 4 Review & Vyanjan Star Check', tasks: ['Recite Vyanjan from Ka to Ma in rhythm.', 'Identify starting akshar: _atang (Pa), _achhli (Ma).', 'Week 4 Completed! 5 Stars Awarded! [*][*][*][*][*]'], badgeColor: AMBER },

    { dayNum: 29, dateStr: '20 Nov 2026', dayName: 'Friday', title: '2-Akshar Simple Words (Part 1) - Ghar, Jal, Phal', tasks: ['Join: Gh + r = Ghar (Sweet Home).', 'Join: J + l = Jal (Fresh Water).', 'Join: Ph + l = Phal (Delicious Fruits).'], badgeColor: EMERALD },
    { dayNum: 30, dateStr: '21 Nov 2026', dayName: 'Saturday', title: '2-Akshar Simple Words (Part 2) - Bas, Kal, Sach', tasks: ['Join: B + s = Bas (Yellow School Bus).', 'Join: K + l = Kal (Tomorrow).', 'Join: S + ch = Sach (Always speak truth).'], badgeColor: EMERALD },
    { dayNum: 31, dateStr: '22 Nov 2026', dayName: 'Sunday', title: '3-Akshar Words & Grand Hindi Viva - Kamal, Matar', tasks: ['Join: K + m + l = Kamal (Lotus Flower).', 'Join: M + t + r = Matar (Green Peas).', 'Read 5 Hindi words out loud to family with pride!'], badgeColor: AMBER },
    { dayNum: 32, dateStr: '23 Nov 2026', dayName: 'Monday', title: 'Graduation Day - Hindi Varnamala Bal Veer Award', tasks: ['Congratulations! 32 days of Hindi Varnamala complete!', 'Receive your official Hindi Varnamala Certificate.', 'Award 50 Golden Bonus Stars in the online hub!'], badgeColor: AMBER }
  ];

  function renderHindiWeekPage(pageNum, startIndex, endIndex, weekTitle) {
    const p = doc.addPage([A4_WIDTH, A4_HEIGHT]);
    drawHeader(p, fontBold, fontRegular, 'HINDI VARNAMALA FOUNDATIONAL WORKBOOK', 'Hindi Varnamala & Words', dateSpan);

    safeDrawText(p, weekTitle, {
      x: 30,
      y: A4_HEIGHT - 80,
      size: 11,
      font: fontBold,
      color: NAVY
    });

    const slice = hindiDays.slice(startIndex, endIndex);
    const boxW = (A4_WIDTH - 70) / 2;
    const boxH = 150;

    slice.forEach((day, i) => {
      const col = i < 4 ? 0 : 1;
      const row = i < 4 ? i : i - 4;
      const bx = 30 + col * (boxW + 10);
      const by = A4_HEIGHT - 95 - (row + 1) * (boxH + 10);

      drawDayBox(p, fontBold, fontRegular, {
        x: bx,
        y: by,
        width: boxW,
        height: boxH,
        dayNum: day.dayNum,
        dateStr: day.dateStr,
        dayName: day.dayName,
        title: day.title,
        tasks: day.tasks,
        badgeColor: day.badgeColor
      });
    });

    drawFooter(p, fontRegular, pageNum, 6);
  }

  renderHindiWeekPage(2, 0, 7, 'WEEK 1: SWAR PART 1 (A TO OO) (23 OCT - 29 OCT 2026)');
  renderHindiWeekPage(3, 7, 14, 'WEEK 2: SWAR PART 2 (RI TO AHA) (30 OCT - 05 NOV 2026)');
  renderHindiWeekPage(4, 14, 21, 'WEEK 3: VYANJAN KA & CHA VARG (06 NOV - 12 NOV 2026)');
  renderHindiWeekPage(5, 21, 28, 'WEEK 4: VYANJAN TA, TA & PA VARG (13 NOV - 19 NOV 2026)');

  const p6 = doc.addPage([A4_WIDTH, A4_HEIGHT]);
  drawHeader(p6, fontBold, fontRegular, 'HINDI VARNAMALA FOUNDATIONAL WORKBOOK', 'Hindi Varnamala & Words', dateSpan);

  safeDrawText(p6, 'WEEK 5: 2-3 AKSHAR SHABD & GRADUATION (20 NOV - 23 NOV 2026)', {
    x: 30,
    y: A4_HEIGHT - 80,
    size: 11,
    font: fontBold,
    color: NAVY
  });

  const finalSlice = hindiDays.slice(28, 32);
  const fBoxW = (A4_WIDTH - 70) / 2;
  const fBoxH = 135;

  finalSlice.forEach((day, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const bx = 30 + col * (fBoxW + 10);
    const by = A4_HEIGHT - 95 - (row + 1) * (fBoxH + 10);

    drawDayBox(p6, fontBold, fontRegular, {
      x: bx,
      y: by,
      width: fBoxW,
      height: fBoxH,
      dayNum: day.dayNum,
      dateStr: day.dateStr,
      dayName: day.dayName,
      title: day.title,
      tasks: day.tasks,
      badgeColor: day.badgeColor
    });
  });

  const certY = 48;
  const certH = 320;
  p6.drawRectangle({
    x: 30,
    y: certY,
    width: A4_WIDTH - 60,
    height: certH,
    color: rgb(0.99, 0.98, 0.93),
    borderColor: AMBER,
    borderWidth: 2,
    borderRadius: 8
  });

  p6.drawRectangle({
    x: 36,
    y: certY + 6,
    width: A4_WIDTH - 72,
    height: certH - 12,
    borderColor: rgb(0.85, 0.7, 0.3),
    borderWidth: 1,
    borderRadius: 6
  });

  safeDrawText(p6, 'NEXTSEM ACADEMY - CERTIFICATE OF COMPLETION', {
    x: 105,
    y: certY + certH - 30,
    size: 13,
    font: fontBold,
    color: NAVY
  });

  safeDrawText(p6, 'HINDI VARNAMALA & SHABDA GYAN BAL VEER', {
    x: 125,
    y: certY + certH - 48,
    size: 11,
    font: fontBold,
    color: ROSE
  });

  safeDrawText(p6, 'This is proudly awarded to little Hindi scholar:', {
    x: 180,
    y: certY + certH - 72,
    size: 9.5,
    font: fontRegular,
    color: DARK_GRAY
  });

  p6.drawLine({
    start: { x: 90, y: certY + certH - 105 },
    end: { x: A4_WIDTH - 90, y: certY + certH - 105 },
    thickness: 1.2,
    color: NAVY
  });

  safeDrawText(p6, 'STUDENT NAME HERE', {
    x: 230,
    y: certY + certH - 100,
    size: 11,
    font: fontBold,
    color: rgb(0.3, 0.4, 0.5)
  });

  safeDrawText(p6, 'for successfully completing the 1-Month Hindi Varnamala Program (23 Oct 2026 - 23 Nov 2026)', {
    x: 65,
    y: certY + certH - 125,
    size: 8.8,
    font: fontRegular,
    color: DARK_GRAY
  });

  safeDrawText(p6, 'Demonstrated mastery of Swar (A-Aha), Vyanjan (Ka-Ma) & 2-3 Akshar Simple Hindi Words.', {
    x: 80,
    y: certY + certH - 140,
    size: 8.5,
    font: fontRegular,
    color: DARK_GRAY
  });

  safeDrawText(p6, 'Rating: [*][*][*][*][*] EXCELLENT PERFORMANCE (50 GOLDEN STARS)', {
    x: 115,
    y: certY + certH - 165,
    size: 9.5,
    font: fontBold,
    color: AMBER
  });

  safeDrawText(p6, 'Er. Manoj Kumar', {
    x: 75,
    y: certY + 45,
    size: 10,
    font: fontBold,
    color: NAVY
  });
  p6.drawLine({
    start: { x: 65, y: certY + 40 },
    end: { x: 190, y: certY + 40 },
    thickness: 0.8,
    color: DARK_GRAY
  });
  safeDrawText(p6, 'Academic Director & Author', {
    x: 65,
    y: certY + 28,
    size: 7.5,
    font: fontRegular,
    color: LIGHT_GRAY
  });

  safeDrawText(p6, 'Parent / Teacher In-Charge', {
    x: A4_WIDTH - 195,
    y: certY + 45,
    size: 10,
    font: fontBold,
    color: NAVY
  });
  p6.drawLine({
    start: { x: A4_WIDTH - 200, y: certY + 40 },
    end: { x: A4_WIDTH - 65, y: certY + 40 },
    thickness: 0.8,
    color: DARK_GRAY
  });
  safeDrawText(p6, 'Verified Signature & Date', {
    x: A4_WIDTH - 185,
    y: certY + 28,
    size: 7.5,
    font: fontRegular,
    color: LIGHT_GRAY
  });

  drawFooter(p6, fontRegular, 6, 6);

  const pdfBytes = await doc.save();
  return pdfBytes;
}

// ---------------------------------------------------------------------------
// 4. MAIN BUILD PROCESS & WRITE TO FILES
// ---------------------------------------------------------------------------
async function main() {
  console.log('Generating 1-Month Kids Foundational Workbooks (23 Oct - 23 Nov 2026)...');

  const targets = [
    path.join(__dirname, '..', 'basics_for_kids_kg', 'pdfs'),
    path.join(__dirname, '..', 'public', 'pdf', 'kids')
  ];

  targets.forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });

  // 1. English
  console.log('Generating English Workbook PDF (6 Pages)...');
  const enBytes = await generateEnglishPdf();
  targets.forEach(dir => {
    fs.writeFileSync(path.join(dir, 'English_1Month_Worksheet_23Oct_to_23Nov_2026.pdf'), enBytes);
  });
  console.log(`Saved English PDF (${enBytes.byteLength} bytes)`);

  // 2. Maths
  console.log('Generating Maths Workbook PDF (6 Pages)...');
  const mathBytes = await generateMathsPdf();
  targets.forEach(dir => {
    fs.writeFileSync(path.join(dir, 'Maths_1Month_Worksheet_23Oct_to_23Nov_2026.pdf'), mathBytes);
  });
  console.log(`Saved Maths PDF (${mathBytes.byteLength} bytes)`);

  // 3. Hindi
  console.log('Generating Hindi Workbook PDF (6 Pages)...');
  const hiBytes = await generateHindiPdf();
  targets.forEach(dir => {
    fs.writeFileSync(path.join(dir, 'Hindi_1Month_Worksheet_23Oct_to_23Nov_2026.pdf'), hiBytes);
  });
  console.log(`Saved Hindi PDF (${hiBytes.byteLength} bytes)`);

  console.log('ALL 3 SUBJECT 1-MONTH PDFs SUCCESSFULLY GENERATED & VERIFIED!');
}

main().catch(err => {
  console.error('Fatal error during PDF generation:', err);
  process.exit(1);
});
