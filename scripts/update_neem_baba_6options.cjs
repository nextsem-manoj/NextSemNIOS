const fs = require('fs');
const path = require('path');

const questions = [
  // CATEGORY 1: STORY & ORIGIN (dialogue)
  {
    id: 1,
    category: 'dialogue',
    badge: 'Dialogue & Story',
    title: 'Where was Amber sitting when she felt that the tree was whispering to her?',
    hinglish: 'Amber kahan baithi thi jab use laga ki ped usse baatein kar raha hai?',
    options: [
      'In her school playground',
      'In the shade of the neem tree in her courtyard',
      'In a public botanical garden',
      'On the roof of her neighbour\'s house',
      'Inside her grandmother\'s study room',
      'At the village bus stop under a banyan tree'
    ],
    correctAnswer: 'In the shade of the neem tree in her courtyard',
    explanation: 'Amber returned from school and sat down in the cool shade of the neem tree in her courtyard, where she felt the tree was whispering to her.',
    ncertRef: 'NCERT Poorvi Page 76 (Let us read)'
  },
  {
    id: 2,
    category: 'dialogue',
    badge: 'Character Dialogue',
    title: 'How did Neem Baba greet and recognise Amber?',
    hinglish: 'Neem Baba ne Amber ko pehchan kar kya kaha?',
    options: [
      'He said he had never seen her before',
      'He knew her because she played in his shade in her childhood',
      'He recognized her from a school photograph',
      'He said her grandmother introduced her',
      'He mistook her for another child from the village',
      'He heard the birds chirping her name'
    ],
    correctAnswer: 'He knew her because she played in his shade in her childhood',
    explanation: 'Neem Baba said: "Sure, dear Amber. I know you. You played in my shade in your childhood. You may call me \'Neem Baba\'."',
    ncertRef: 'NCERT Poorvi Page 76'
  },
  {
    id: 3,
    category: 'dialogue',
    badge: 'Origin & Age',
    title: 'According to Neem Baba, when was his ancestral family born on Earth?',
    hinglish: 'Neem Baba ke mutabiq unka parivar dharti par kab paida hua tha?',
    options: [
      'A few hundred years ago',
      'Just fifty years ago',
      'Millions of years ago',
      'Ten thousand years ago',
      'During the British colonial era',
      'Only after the modern cities were built'
    ],
    correctAnswer: 'Millions of years ago',
    explanation: 'Neem Baba tells Amber: "I am very old. I was born millions of years ago somewhere in North India or Myanmar."',
    ncertRef: 'NCERT Poorvi Page 76'
  },
  {
    id: 4,
    category: 'dialogue',
    badge: 'Geographical Origin',
    title: 'In which geographical region was the neem tree originally born?',
    hinglish: 'Neem ka ped mool roop se kahan paida hua tha?',
    options: [
      'North India or Myanmar',
      'Persia or Iran',
      'South Africa',
      'Amazon Rainforest',
      'Mediterranean Coast',
      'Central Asian Steppes'
    ],
    correctAnswer: 'North India or Myanmar',
    explanation: 'Botanical and historical evidence in the textbook states that Neem was born millions of years ago in North India or Myanmar.',
    ncertRef: 'NCERT Poorvi Page 76'
  },
  {
    id: 5,
    category: 'dialogue',
    badge: 'Global Spread',
    title: 'Outside India, where can the neem tree family be found today?',
    hinglish: 'Bharat ke alawa neem ka ped kin kin deshon aur mahadweepon mein paya jata hai?',
    options: [
      'Only in Antarctica and the North Pole',
      'In many Asian and African countries and parts of America',
      'Exclusively in the United Kingdom',
      'Only in Australia and New Zealand',
      'Strictly confined to the Himalayan mountains',
      'Only on small isolated volcanic islands'
    ],
    correctAnswer: 'In many Asian and African countries and parts of America',
    explanation: 'Neem Baba says: "My family can be found in many Asian and African countries and even in some parts of America."',
    ncertRef: 'NCERT Poorvi Page 76'
  },
  {
    id: 6,
    category: 'dialogue',
    badge: 'Author Attribution',
    title: 'Who is the author of the story "Neem Baba" adapted in the NCERT textbook?',
    hinglish: 'NCERT textbook mein "Neem Baba" kahani kiske lekh se adapt ki gayi hai?',
    options: [
      'Ruskin Bond',
      'S. I. Farooqi',
      'R. K. Narayan',
      'Rabindranath Tagore',
      'Mulk Raj Anand',
      'Sarojini Naidu'
    ],
    correctAnswer: 'S. I. Farooqi',
    explanation: 'The textbook footnote explicitly states: "Adapted from Neem Baba by S. I. Farooqi".',
    ncertRef: 'NCERT Poorvi Page 80'
  },
  {
    id: 7,
    category: 'dialogue',
    badge: 'Moral & Thought',
    title: 'Why did Neem Baba say that trees become "well known"?',
    hinglish: 'Neem Baba ne kya bataya ki ped logon mein mashhoor kyu hote hain?',
    options: [
      'Because of their tall height only',
      'Because of what they do and how useful they are to people',
      'Because they are painted with bright colors',
      'Because they make loud noises in the storm',
      'Because birds build luxurious nests in them',
      'Because government botanists put tags on them'
    ],
    correctAnswer: 'Because of what they do and how useful they are to people',
    explanation: 'Neem Baba tells Amber: "Dear Amber, we become well known for what we do. People find us useful and that is why they know us."',
    ncertRef: 'NCERT Poorvi Page 77'
  },
  {
    id: 8,
    category: 'dialogue',
    badge: 'Future Promise',
    title: 'What did Amber promise Neem Baba at the end of their conversation?',
    hinglish: 'Amber ne baat ke ant mein Neem Baba se kya vada kiya?',
    options: [
      'To cut down the tree for wood',
      'To discover more beneficial qualities of neem when she grows up',
      'To leave the courtyard and never return',
      'To stop studying science',
      'To replace the neem tree with concrete tiles',
      'To pluck all its leaves before autumn'
    ],
    correctAnswer: 'To discover more beneficial qualities of neem when she grows up',
    explanation: 'Neem Baba asked if she would discover more qualities of neem when she grows up, and Amber enthusiastically promised: "Yes, Neem Baba. I will."',
    ncertRef: 'NCERT Poorvi Page 80'
  },

  // CATEGORY 2: LINGUISTIC NAMES & ETYMOLOGY (names)
  {
    id: 9,
    category: 'names',
    badge: 'Linguistic History',
    title: 'Who gave the common name "Neem" to the tree?',
    hinglish: 'Neem ka aam naam "Neem" kisne diya tha?',
    options: [
      'The Iranians (Persians)',
      'The British botanists',
      'The Ancient Greeks',
      'The Japanese merchants',
      'The Portuguese voyagers',
      'The Roman emperors'
    ],
    correctAnswer: 'The Iranians (Persians)',
    explanation: 'Neem Baba mentions: "The name \'Neem\' is given by the Iranians."',
    ncertRef: 'NCERT Poorvi Page 77'
  },
  {
    id: 10,
    category: 'names',
    badge: 'Sanskrit Etymology',
    title: 'What is the meaning of the ancient Sanskrit name "Arishta" given to neem?',
    hinglish: 'Sanskrit naam "Arishta" ka kya arth hota hai?',
    options: [
      'The tree of the kings',
      'The one who cures diseases',
      'The free green umbrella',
      'The bitter forest plant',
      'The eternal tree of clouds',
      'The bringer of morning peace'
    ],
    correctAnswer: 'The one who cures diseases',
    explanation: 'In Sanskrit, neem was called "Arishta", which literally translates to "the one who cures diseases".',
    ncertRef: 'NCERT Poorvi Page 77'
  },
  {
    id: 11,
    category: 'names',
    badge: 'Scientific Latin Name',
    title: 'What is the Latin scientific name of the Neem tree and what Persian phrase was it derived from?',
    hinglish: 'Neem ka Latin vaigyanik naam kya hai aur yeh kis Persian phrase se bana?',
    options: [
      'Ficus religiosa from "Peepal tree"',
      'Azadirachta indica from "Azad Darakhte Hindi"',
      'Mangifera indica from "Aam Darakht"',
      'Ocimum sanctum from "Tulsi Hindi"',
      'Tamarindus indica from "Imli Hind"',
      'Santalum album from "Chandan Darakht"'
    ],
    correctAnswer: 'Azadirachta indica from "Azad Darakhte Hindi"',
    explanation: 'When Persians saw the tree growing freely everywhere in India, they called it "Azad Darakhte Hindi" (Free Tree of India), which led to the scientific Latin name Azadirachta indica.',
    ncertRef: 'NCERT Poorvi Page 84 (Let us explore)'
  },
  {
    id: 12,
    category: 'names',
    badge: 'Indian Languages: Gujarati',
    title: 'What is the neem tree called in the Gujarati language?',
    hinglish: 'Gujarati bhasha mein neem ko kya kaha jata hai?',
    options: [
      'Nimbamond',
      'Nimbe',
      'Leemba or Nimori',
      'Nimo',
      'Kadunimb',
      'Vepa'
    ],
    correctAnswer: 'Leemba or Nimori',
    explanation: 'In Gujarati, neem is known as Leemba or Nimori (it is called Nim in Marathi, Nimbamond in Bengali, Nimbe in Kannada, and Nimo in Odia).',
    ncertRef: 'NCERT Poorvi Page 77 & 84'
  },
  {
    id: 13,
    category: 'names',
    badge: 'Indian Languages: Bengali',
    title: 'Match the regional name: In Bengali, the neem tree is called:',
    hinglish: 'Bengali bhasha mein neem ka naam kya hai?',
    options: [
      'Nimbamond',
      'Nimbe',
      'Leemba',
      'Nimb',
      'Ariveppu',
      'Kadunimb'
    ],
    correctAnswer: 'Nimbamond',
    explanation: 'In Bengali, the neem tree is called Nimbamond.',
    ncertRef: 'NCERT Poorvi Page 77'
  },
  {
    id: 14,
    category: 'names',
    badge: 'Titles Given by Scientists',
    title: 'Which of the following titles was given to the neem tree by scientists and scholars?',
    hinglish: 'Vaigyanikon ne neem ke ped ko inme se kaun sa naam diya hai?',
    options: [
      'The noisy tree of storms',
      'Bitter grace of God, Nature\'s gift to man, and Cleanliness-parting tree',
      'The silent poisonous weed',
      'The temporary seasonal visitor',
      'The fragile ornamental bush',
      'The greedy water-absorbing weed'
    ],
    correctAnswer: 'Bitter grace of God, Nature\'s gift to man, and Cleanliness-parting tree',
    explanation: 'Scientists call neem the "bitter grace of God", "nature\'s gift to man", and "cleanliness-parting tree", as well as "the tree of the twentieth century".',
    ncertRef: 'NCERT Poorvi Page 77'
  },

  // CATEGORY 3: MEDICINAL & AGRICULTURAL USES (uses)
  {
    id: 15,
    category: 'uses',
    badge: 'Hygiene & Daily Life',
    title: 'What part of the neem tree is traditionally used by people to clean their teeth?',
    hinglish: 'Log daant saaf karne ke liye neem ke kis hisse ka istemaal karte hain?',
    options: [
      'Neem seeds',
      'Neem twigs (datun)',
      'Neem underground roots',
      'Neem fallen dead flowers',
      'Neem ripe fruit peel',
      'Neem tree thorny bark'
    ],
    correctAnswer: 'Neem twigs (datun)',
    explanation: 'Amber notes: "I know that people clean their teeth with your twigs and protect clothes with your leaves."',
    ncertRef: 'NCERT Poorvi Page 78'
  },
  {
    id: 16,
    category: 'uses',
    badge: 'Medical Science: Measles',
    title: 'Why do doctors advise patients suffering from measles to lie on fresh neem leaves?',
    hinglish: 'Measles (khata) se pidit mareezon ko neem ke patton par sone ki salah kyu di jaati hai?',
    options: [
      'Because neem leaves have chemical properties that destroy germs and soothe itching',
      'Because the leaves are brightly colored to cheer up the patient',
      'Because the leaves induce heavy hypnotic sleep',
      'Because the leaves absorb body temperature through magic',
      'Because the aroma completely repels sunlight',
      'Because the leaves change color when sickness departs'
    ],
    correctAnswer: 'Because neem leaves have chemical properties that destroy germs and soothe itching',
    explanation: 'Doctors know that neem leaves have chemical properties that destroy germs and do not allow them to breed, providing soothing comfort from itching.',
    ncertRef: 'NCERT Poorvi Page 78'
  },
  {
    id: 17,
    category: 'uses',
    badge: 'Family Remedies: Cough',
    title: 'What part of the neem tree was used by Amber\'s grandmother to cure her cough and breathing trouble?',
    hinglish: 'Amber ki dadi ne uski khansi aur saans lene ki takleef ko theek karne ke liye neem ke kis hisse se dawa banayi thi?',
    options: [
      'Neem underground roots',
      'Neem bark',
      'Neem fruit pulp',
      'Neem dead fallen leaves',
      'Neem tree sap/gum',
      'Fresh neem flower nectar'
    ],
    correctAnswer: 'Neem bark',
    explanation: 'Amber recalls: "My grandmother cured me with a medicine made from neem bark."',
    ncertRef: 'NCERT Poorvi Page 79'
  },
  {
    id: 18,
    category: 'uses',
    badge: 'Family Remedies: Eye Irritation',
    title: 'How did Amber\'s grandmother relieve her father\'s eye itching?',
    hinglish: 'Amber ki dadi ne uske pita ki aankhon ki khujli door karne ke liye kya banaya?',
    options: [
      'She washed his eyes with concentrated neem seed oil',
      'She prepared a kajal from neem flowers',
      'She rubbed raw neem bark directly on his eyelids',
      'She tied boiled neem leaves around his head',
      'She applied powdered neem seeds as eyeliner',
      'She squeezed bitter leaf juice into his eyes'
    ],
    correctAnswer: 'She prepared a kajal from neem flowers',
    explanation: 'Amber mentions: "And when my father had itching in the eyes, she prepared a kajal from neem flowers, which cured him."',
    ncertRef: 'NCERT Poorvi Page 79'
  },
  {
    id: 19,
    category: 'uses',
    badge: 'Safety Precaution',
    title: 'What important safety warning did Neem Baba give about medicinal remedies?',
    hinglish: 'Neem Baba ne dawayian banane ke baare mein kya savdhani di?',
    options: [
      'Anyone can make medicines without prior knowledge',
      'Remedies must only be prepared by well-trained and experienced people',
      'Medicines can only be made during a full moon',
      'Never use neem on children under any condition',
      'Remedies must only be prepared using iron vessels',
      'Medicines lose all value if stored for more than an hour'
    ],
    correctAnswer: 'Remedies must only be prepared by well-trained and experienced people',
    explanation: 'Neem Baba cautions: "Remember, these remedies are to be used only by people who are well trained and have a lot of experience."',
    ncertRef: 'NCERT Poorvi Page 79'
  },
  {
    id: 20,
    category: 'uses',
    badge: 'Agriculture & Bio-Pesticide',
    title: 'How does spraying neem seed powder mixed with water protect farmers\' crops?',
    hinglish: 'Neem ke beejon ke powder ko paani mein milakar chhidakne se kisano ki fasal kaise bachti hai?',
    options: [
      'It makes the crops grow overnight',
      'It prevents locusts from eating the plants and saves crops from root-eating termites',
      'It paints the leaves dark green so animals cannot spot them',
      'It attracts predatory wasps to fight bugs',
      'It turns the plant sap into sugar water',
      'It stops all weeds from growing without touching the soil'
    ],
    correctAnswer: 'It prevents locusts from eating the plants and saves crops from root-eating termites',
    explanation: 'Neem seed powder in water prevents locusts from eating plants, saves crops from termites that eat roots, and stops insect breeding.',
    ncertRef: 'NCERT Poorvi Page 79'
  },
  {
    id: 21,
    category: 'uses',
    badge: 'Mosquito Control',
    title: 'Why is adding neem seed powder to stagnant water and rice fields a cost-effective method?',
    hinglish: 'Ruke huye paani aur dhaan ke kheton mein neem powder daalna kyu faydemand aur kifayati hai?',
    options: [
      'It prevents mosquitoes from breeding and increases crop yield',
      'It evaporates standing water instantly',
      'It converts muddy water into drinking water',
      'It turns mosquito larvae into harmless fish food',
      'It prevents sunlight from reaching green algae',
      'It neutralizes all salts in seawater'
    ],
    correctAnswer: 'It prevents mosquitoes from breeding and increases crop yield',
    explanation: 'Adding neem seed powder to standing water stops mosquito breeding naturally without costly chemical sprays, making it highly cost-effective.',
    ncertRef: 'NCERT Poorvi Page 79'
  },
  {
    id: 22,
    category: 'uses',
    badge: 'Storage & Grain Protection',
    title: 'How do villagers protect stored grains from pests and insects?',
    hinglish: 'Gharon mein anaj ko keedo se bachane ke liye kya milaya jata hai?',
    options: [
      'By mixing sugar powder into the wheat',
      'By adding neem seed powder and dried neem leaves',
      'By sprinkling salt water over the bags every hour',
      'By leaving containers open under direct rain',
      'By storing grains inside copper vaults',
      'By burning incense sticks inside grain sacks'
    ],
    correctAnswer: 'By adding neem seed powder and dried neem leaves',
    explanation: 'People save their stored grains from insects by adding neem seed powder or dried neem leaves to storage bins.',
    ncertRef: 'NCERT Poorvi Page 80'
  },
  {
    id: 23,
    category: 'uses',
    badge: 'Wood & Furniture',
    title: 'Why is furniture made from neem wood highly prized in Indian homes?',
    hinglish: 'Neem ki lakdi se bana furniture kyu pasand kiya jata hai?',
    options: [
      'Because it is light as a balloon',
      'Because it is not eaten or damaged by termites',
      'Because it has an artificial rose perfume scent',
      'Because it bends easily like rubber',
      'Because it glows faintly in complete darkness',
      'Because it floats on water without absorbing moisture'
    ],
    correctAnswer: 'Because it is not eaten or damaged by termites',
    explanation: 'Neem wood is naturally resistant to termites and borers, so furniture made from it lasts for decades without decay.',
    ncertRef: 'NCERT Poorvi Page 80'
  },
  {
    id: 24,
    category: 'uses',
    badge: 'Ecology & Environment',
    title: 'What major ecological role does the neem tree play in the surrounding atmosphere?',
    hinglish: 'Neem ka ped paryavaran aur hawa ke liye kya bada kaam karta hai?',
    options: [
      'It produces thick white vapor',
      'It purifies the air by removing harmful particles and toxins',
      'It cools down the environment only during winter nights',
      'It blocks natural wind currents completely',
      'It generates high levels of carbon dioxide during midday',
      'It traps electrical charges from thunder'
    ],
    correctAnswer: 'It purifies the air by removing harmful particles and toxins',
    explanation: 'Neem Baba highlights: "Neem also purifies the air. There are many qualities yet to be discovered."',
    ncertRef: 'NCERT Poorvi Page 80'
  },

  // CATEGORY 4: GRAMMAR, VOCABULARY & FIGURES OF SPEECH (grammar)
  {
    id: 25,
    category: 'grammar',
    badge: 'Figures of Speech',
    title: 'When the author depicts Neem Baba speaking and whispering to Amber, which literary device is used?',
    hinglish: 'Jab lekhak Neem Baba ko ek insaan ki tarah bolte huye dikhata hai, to yeh kaun sa alankar hai?',
    options: [
      'Alliteration (Anupras)',
      'Personification (Manavikaran)',
      'Hyperbole (Atishyokti)',
      'Simile (Upma)',
      'Metaphor (Rupak)',
      'Oxymoron (Virodhabhas)'
    ],
    correctAnswer: 'Personification (Manavikaran)',
    explanation: 'Personification is a figure of speech where human qualities, emotions, or speech are given to non-human things (e.g. "The leaves whispered in the wind", "The flowers danced merrily").',
    ncertRef: 'NCERT Poorvi Page 83 (Let us learn III)'
  },
  {
    id: 26,
    category: 'grammar',
    badge: 'Compound Words: Open',
    title: 'Which of the following is an "Open Compound Word" discussed in the chapter?',
    hinglish: 'Inme se kaun sa "Open Compound Word" hai?',
    options: [
      'childhood',
      'grandmother',
      'neem oil (or seed powder, well known)',
      'thought-provoking',
      'courtyard',
      'cleanliness-parting'
    ],
    correctAnswer: 'neem oil (or seed powder, well known)',
    explanation: 'Open compound words have spaces between the words (e.g. "neem oil", "seed powder", "well known", "well trained").',
    ncertRef: 'NCERT Poorvi Page 81–82'
  },
  {
    id: 27,
    category: 'grammar',
    badge: 'Compound Words: Closed',
    title: 'Which of the following is a "Closed Compound Word" from the lesson?',
    hinglish: 'Inme se kaun sa "Closed Compound Word" hai?',
    options: [
      'cleanliness-parting',
      'something (or grandmother, childhood)',
      'well trained',
      'seed powder',
      'thought-provoking',
      'neem bark'
    ],
    correctAnswer: 'something (or grandmother, childhood)',
    explanation: 'Closed compound words have no spaces between the words (e.g. "something", "grandmother", "childhood").',
    ncertRef: 'NCERT Poorvi Page 81–82'
  },
  {
    id: 28,
    category: 'grammar',
    badge: 'Compound Words: Hyphenated',
    title: 'Which of the following is a "Hyphenated Compound Word"?',
    hinglish: 'Inme se kaun sa "Hyphenated Compound Word" hai jisme hyphen lagta hai?',
    options: [
      'thought-provoking (or cleanliness-parting)',
      'childhood',
      'neem oil',
      'something',
      'courtyard',
      'seed powder'
    ],
    correctAnswer: 'thought-provoking (or cleanliness-parting)',
    explanation: 'Hyphenated compound words have a hyphen between the joined words (e.g. "thought-provoking", "cleanliness-parting").',
    ncertRef: 'NCERT Poorvi Page 81–82'
  },
  {
    id: 29,
    category: 'grammar',
    badge: 'Verb Tenses',
    title: 'What is the past tense form of the verb "become" as matched in the textbook exercise?',
    hinglish: 'Textbook exercise ke mutabiq "become" verb ka past tense kya hota hai?',
    options: [
      'becomed',
      'became',
      'becoming',
      'becomen',
      'had became',
      'becomming'
    ],
    correctAnswer: 'became',
    explanation: 'The past tense of "become" is "became" (e.g., "The sapling became a huge neem tree").',
    ncertRef: 'NCERT Poorvi Page 82 (Verbs Table)'
  },
  {
    id: 30,
    category: 'grammar',
    badge: 'Listening Activity Connection',
    title: 'In the "Let us listen" activity, who is the real-life environmentalist mentioned who planted trees all over India?',
    hinglish: 'Listening activity mein kis shakhsiyat ka zikr hai jinhone poore desh mein hazaron ped lagaye?',
    options: [
      'Banyan King',
      'Peepal Baba',
      'Forest Inspector',
      'Gulmohar Uncle',
      'Neem Chacha',
      'Chipko Leader'
    ],
    correctAnswer: 'Peepal Baba',
    explanation: 'The listening transcript and exercise feature the inspiring story of Peepal Baba, who planted trees across the country.',
    ncertRef: 'NCERT Poorvi Page 83 (Let us listen)'
  }
];

// Let's generate the complete HTML content
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>Neem Baba (30 MCQs • 6 Options • Unpredictable Shuffle) - Class 6 English Poorvi Unit 3 Chapter 7 | Nextsem Study Guide</title>
  <meta name="description" content="NCERT Class 6 English Poorvi Unit 3 Chapter 7 'Neem Baba' - 30 Dynamic MCQs with 6 options (A to F) and unpredictable live shuffling for master-level preparation.">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌿</text></svg>">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.4/dist/confetti.browser.min.js"></script>

  <style>
    :root {
      --bg-body: #060c18;
      --bg-card: #0d1527;
      --bg-card-hover: #131f38;
      --border-card: rgba(56, 189, 248, 0.22);
      --accent-emerald: #10b981;
      --accent-sky: #38bdf8;
      --accent-gold: #f59e0b;
      --accent-purple: #a855f7;
      --accent-rose: #f43f5e;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
    }

    body.light-theme {
      --bg-body: #f8fafc;
      --bg-card: #ffffff;
      --bg-card-hover: #f1f5f9;
      --border-card: #cbd5e1;
      --text-main: #0f172a;
      --text-muted: #475569;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background-color: var(--bg-body);
      color: var(--text-main);
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
      line-height: 1.7;
      padding-bottom: 80px;
      transition: background 0.3s, color 0.3s;
    }

    .bg-glow {
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: radial-gradient(circle at 50% 10%, rgba(16, 185, 129, 0.1) 0%, transparent 60%),
                  radial-gradient(circle at 85% 60%, rgba(56, 189, 248, 0.08) 0%, transparent 50%),
                  radial-gradient(circle at 15% 80%, rgba(245, 158, 11, 0.06) 0%, transparent 50%);
      pointer-events: none; z-index: 0;
    }

    .top-nav {
      position: sticky; top: 0;
      background: rgba(6, 12, 24, 0.92);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding: 12px 20px;
      display: flex; justify-content: space-between; align-items: center;
      z-index: 50;
    }

    .nav-brand { display: flex; align-items: center; gap: 10px; text-decoration: none; color: inherit; }
    .nav-badge {
      background: linear-gradient(135deg, #04aa6d, #059669);
      color: #fff; font-weight: 800; font-size: 11px;
      padding: 3px 8px; border-radius: 6px; text-transform: uppercase;
    }

    .nav-actions { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
    .nav-btn {
      background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.15);
      color: var(--text-main); padding: 7px 14px; border-radius: 8px; cursor: pointer;
      font-size: 13px; font-weight: 600; text-decoration: none; display: flex; align-items: center; gap: 6px;
      transition: all 0.2s;
    }
    .nav-btn:hover { background: rgba(255, 255, 255, 0.15); transform: translateY(-1px); }
    .nav-btn.shuffle-btn {
      background: linear-gradient(135deg, #10b981, #059669);
      border-color: #34d399; color: #ffffff; font-weight: 700;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35);
    }
    .nav-btn.shuffle-btn:hover {
      background: linear-gradient(135deg, #059669, #047857);
      box-shadow: 0 6px 16px rgba(16, 185, 129, 0.5);
    }

    .container {
      position: relative; max-width: 960px; margin: 0 auto;
      padding: 24px 16px; z-index: 1;
    }

    .hero-banner {
      background: linear-gradient(135deg, rgba(16, 185, 129, 0.18), rgba(56, 189, 248, 0.12));
      border: 1px solid var(--border-card);
      border-radius: 20px; padding: 28px 24px; text-align: center;
      margin-bottom: 24px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    }

    .hero-tag {
      display: inline-flex; align-items: center; gap: 6px;
      background: rgba(16, 185, 129, 0.2); border: 1px solid rgba(16, 185, 129, 0.4);
      color: #34d399; font-size: 12px; font-weight: 800; padding: 4px 12px;
      border-radius: 9999px; text-transform: uppercase; margin-bottom: 12px; letter-spacing: 0.5px;
    }

    .hero-title {
      font-size: clamp(22px, 3.5vw, 32px); font-weight: 900;
      background: linear-gradient(135deg, #ffffff, #94a3b8);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      margin-bottom: 8px; line-height: 1.3;
    }

    body.light-theme .hero-title {
      background: linear-gradient(135deg, #0f172a, #334155);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }

    .hero-subtitle {
      font-size: 14px; color: var(--text-muted); max-width: 720px; margin: 0 auto 16px auto;
    }

    .breadcrumbs {
      display: flex; gap: 8px; align-items: center; justify-content: center;
      font-size: 13px; color: var(--text-muted); margin-bottom: 16px; flex-wrap: wrap;
    }
    .breadcrumbs a { color: #10b981; text-decoration: none; font-weight: 600; }
    .breadcrumbs a:hover { text-decoration: underline; }

    /* Score Tracker Bar */
    .score-bar {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px;
      margin-bottom: 24px;
    }
    .stat-card {
      background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px; padding: 14px; text-align: center;
    }
    .stat-val { font-size: 24px; font-weight: 800; color: var(--text-main); }
    .stat-label { font-size: 12px; color: var(--text-muted); text-transform: uppercase; margin-top: 2px; }

    /* Controls Bar */
    .controls-bar {
      display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;
      margin-bottom: 20px;
    }
    .filter-tabs { display: flex; gap: 6px; flex-wrap: wrap; }
    .filter-btn {
      background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--text-muted); padding: 6px 12px; border-radius: 8px; cursor: pointer;
      font-size: 13px; font-weight: 600; transition: all 0.2s;
    }
    .filter-btn.active, .filter-btn:hover {
      background: #10b981; color: #ffffff; border-color: #10b981;
    }

    /* MCQ Card */
    .mcq-card {
      background: var(--bg-card);
      border: 1px solid var(--border-card);
      border-radius: 16px; padding: 22px; margin-bottom: 20px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
      transition: transform 0.2s, border-color 0.2s;
    }
    .mcq-card:hover { border-color: rgba(56, 189, 248, 0.4); }

    .q-header {
      display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 12px;
    }
    .q-title { font-size: 16px; font-weight: 800; color: var(--text-main); line-height: 1.4; }
    .q-hinglish { font-size: 13px; color: #38bdf8; margin-top: 4px; font-weight: 500; }
    .q-badge {
      font-size: 11px; font-weight: 800; padding: 3px 10px; border-radius: 9999px;
      background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3);
      white-space: nowrap;
    }

    /* 6-Options Grid */
    .options-grid {
      display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 14px;
    }
    @media (max-width: 680px) {
      .options-grid { grid-template-columns: 1fr; }
    }

    .opt-btn {
      display: flex; align-items: flex-start; gap: 10px; text-align: left;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px; padding: 12px 14px; cursor: pointer;
      color: var(--text-main); font-size: 13.5px; font-weight: 600;
      transition: all 0.2s; line-height: 1.4; width: 100%;
    }
    .opt-btn:hover:not(:disabled) {
      background: rgba(56, 189, 248, 0.12);
      border-color: #38bdf8;
      transform: translateY(-1px);
    }
    .opt-key {
      display: inline-flex; align-items: center; justify-content: center;
      min-width: 26px; height: 26px; border-radius: 6px;
      background: rgba(255, 255, 255, 0.1); color: var(--text-main);
      font-weight: 800; font-size: 12px; flex-shrink: 0;
    }

    .opt-btn.correct {
      background: rgba(16, 185, 129, 0.25) !important;
      border-color: #10b981 !important; color: #34d399 !important;
      font-weight: 700;
    }
    .opt-btn.correct .opt-key {
      background: #10b981 !important; color: #ffffff !important;
    }

    .opt-btn.incorrect {
      background: rgba(244, 63, 94, 0.2) !important;
      border-color: #f43f5e !important; color: #fb7185 !important;
      text-decoration: line-through;
    }
    .opt-btn.incorrect .opt-key {
      background: #f43f5e !important; color: #ffffff !important;
    }

    /* Explanation Box */
    .explanation-box {
      margin-top: 14px; padding: 12px 16px; border-radius: 10px;
      background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3);
      font-size: 13px; color: #a7f3d0; display: none;
    }
    .explanation-box.show { display: block; animation: fadeIn 0.3s ease; }
    .explanation-box strong { color: #34d399; }
    .ncert-ref { font-size: 11px; color: #94a3b8; margin-top: 6px; font-weight: 600; }

    /* Unpredictable Badge Notice */
    .shuffle-notice {
      background: rgba(245, 158, 11, 0.12);
      border: 1px dashed rgba(245, 158, 11, 0.4);
      color: #fbbf24; padding: 8px 14px; border-radius: 8px;
      font-size: 12.5px; font-weight: 600; display: flex; align-items: center; justify-content: center;
      gap: 8px; margin-bottom: 20px;
    }

    /* Score Modal / Banner */
    .score-banner {
      background: linear-gradient(135deg, #059669, #0284c7);
      color: #ffffff; border-radius: 14px; padding: 18px 24px;
      display: none; align-items: center; justify-content: space-between;
      margin-bottom: 24px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
    }
    .score-banner-text { font-size: 16px; font-weight: 800; }

    .footer-bar {
      text-align: center; margin-top: 40px; padding-top: 20px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 13px; color: var(--text-muted);
    }
    .footer-bar a { color: #10b981; text-decoration: none; font-weight: 600; }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(4px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body>
  <div class="bg-glow"></div>

  <!-- Top Sticky Navigation -->
  <header class="top-nav">
    <a href="/" class="nav-brand">
      <span style="font-size: 22px;">🌿</span>
      <div>
        <div style="font-weight: 800; font-size: 15px; letter-spacing: -0.3px;">Neem Baba • 6-Option Test</div>
        <div style="font-size: 11px; color: var(--text-muted);">Class 6 English Poorvi Unit 3 Ch 7</div>
      </div>
    </a>
    <div class="nav-actions">
      <button class="nav-btn shuffle-btn" onclick="reshuffleAllQuestionsAndOptions()" title="Completely reshuffles all 30 questions and scrambles all 6 options randomly">
        🔀 Reshuffle Test (Unpredictable)
      </button>
      <button class="nav-btn" onclick="resetQuiz()">🔄 Reset</button>
      <button class="nav-btn" id="themeToggleBtn" onclick="toggleTheme()">🌙 Theme</button>
      <a href="/" class="nav-btn">🏠 Home</a>
    </div>
  </header>

  <div class="container">
    <!-- Breadcrumbs Trail -->
    <div class="breadcrumbs">
      <a href="/">Home</a> ❯ 
      <a href="/?class=6">Class 6</a> ❯ 
      <a href="/?subject=c6-english">Poorvi English</a> ❯ 
      <span>Unit 3 Ch 7: Neem Baba (6-Option Unpredictable MCQs)</span>
    </div>

    <!-- Hero Banner -->
    <div class="hero-banner">
      <div class="hero-tag">⚡ 6 OPTIONS PER QUESTION • 100% UNPREDICTABLE LIVE SHUFFLE</div>
      <h1 class="hero-title">Neem Baba (नीम बाबा) — 30 Comprehensive MCQs</h1>
      <p class="hero-subtitle">
        Adapted from <strong>S.I. Farooqi</strong> • Complete coverage of dialogue, origin in North India/Myanmar, Persian & Sanskrit names, folk & clinical remedies, bio-pesticides, and grammar personification with <strong>6 options (A to F)</strong>.
      </p>
    </div>

    <!-- Unpredictable Shuffle Notice -->
    <div class="shuffle-notice">
      <span>🎲 <strong>Unpredictable Mode Active:</strong> Every time you load or click "Reshuffle", both the question order and all 6 option positions (A–F) are randomly scrambled with Fisher-Yates randomization.</span>
    </div>

    <!-- Completion Banner -->
    <div class="score-banner" id="scoreBanner">
      <div class="score-banner-text" id="scoreBannerText">🎉 Great job!</div>
      <button class="nav-btn" onclick="reshuffleAllQuestionsAndOptions()" style="background: rgba(0,0,0,0.3); border-color: rgba(255,255,255,0.4); color: white;">
        🔀 Reshuffle & Retest
      </button>
    </div>

    <!-- Score Bar -->
    <div class="score-bar">
      <div class="stat-card">
        <div class="stat-val" id="totalCountDisplay">30</div>
        <div class="stat-label">Total Questions</div>
      </div>
      <div class="stat-card">
        <div class="stat-val" id="answeredCountDisplay">0</div>
        <div class="stat-label">Answered</div>
      </div>
      <div class="stat-card">
        <div class="stat-val" id="correctScoreDisplay" style="color: #10b981;">0</div>
        <div class="stat-label">Correct Score</div>
      </div>
      <div class="stat-card">
        <div class="stat-val" id="accuracyDisplay" style="color: #38bdf8;">0%</div>
        <div class="stat-label">Accuracy Rate</div>
      </div>
    </div>

    <!-- Controls & Categories -->
    <div class="controls-bar">
      <div class="filter-tabs">
        <button class="filter-btn active" onclick="filterCategory('all', this)">All (30)</button>
        <button class="filter-btn" onclick="filterCategory('dialogue', this)">Story & Origin (8)</button>
        <button class="filter-btn" onclick="filterCategory('names', this)">Linguistic Names (6)</button>
        <button class="filter-btn" onclick="filterCategory('uses', this)">Medicinal & Agro Uses (10)</button>
        <button class="filter-btn" onclick="filterCategory('grammar', this)">Grammar & Vocab (6)</button>
      </div>
      <div>
        <button class="nav-btn" onclick="expandAllExplanations()">💡 Show All Explanations</button>
      </div>
    </div>

    <!-- Questions Container -->
    <div id="questionsContainer"></div>

    <!-- Bottom Footer -->
    <div class="footer-bar">
      <p>NCERT Class 6 English (Poorvi) • Unit 3: Nurturing Nature • Chapter 7: Neem Baba</p>
      <p style="margin-top: 6px;">Nextsem Academy • Free Dev & School Curriculum • <a href="/">Return to Dashboard</a></p>
    </div>
  </div>

  <script>
    // RAW QUESTIONS DATA (Each with 6 authentic options)
    const RAW_QUESTIONS_DATA = ` + JSON.stringify(questions, null, 2) + `;

    // Active working state
    let ACTIVE_QUESTIONS = [];
    let currentCategory = 'all';
    let userSelections = {}; // { questionId: selectedOptionIndex }

    const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

    // Deep copy and Fisher-Yates shuffle
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    // Completely randomize questions and options
    function randomizeTest() {
      // 1. Clone questions
      const cloned = JSON.parse(JSON.stringify(RAW_QUESTIONS_DATA));

      // 2. Shuffle each question's 6 options and compute new correctIndex
      cloned.forEach(q => {
        const correctText = q.correctAnswer;
        const shuffledOpts = shuffleArray([...q.options]);
        q.options = shuffledOpts;
        q.correctIndex = shuffledOpts.indexOf(correctText);
      });

      // 3. Shuffle question order
      ACTIVE_QUESTIONS = shuffleArray(cloned);
      userSelections = {};
    }

    function renderQuestions() {
      const container = document.getElementById('questionsContainer');
      container.innerHTML = '';

      const filtered = ACTIVE_QUESTIONS.filter(q => currentCategory === 'all' || q.category === currentCategory);

      filtered.forEach((q, displayIdx) => {
        const card = document.createElement('div');
        card.className = 'mcq-card';
        card.id = 'card-' + q.id;

        const isAnswered = userSelections[q.id] !== undefined;
        const selectedIdx = userSelections[q.id];

        let optionsHtml = '';
        q.options.forEach((opt, optIdx) => {
          let btnClass = 'opt-btn';
          if (isAnswered) {
            if (optIdx === q.correctIndex) {
              btnClass += ' correct';
            } else if (optIdx === selectedIdx) {
              btnClass += ' incorrect';
            }
          }

          optionsHtml += \`
            <button class="\${btnClass}" onclick="handleSelectOption(\${q.id}, \${optIdx})" \${isAnswered ? 'disabled' : ''}>
              <span class="opt-key">\${LETTERS[optIdx]}</span>
              <span>\${opt}</span>
            </button>
          \`;
        });

        card.innerHTML = \`
          <div class="q-header">
            <div>
              <div class="q-title">Q\${displayIdx + 1}. \${q.title}</div>
              <div class="q-hinglish">\${q.hinglish}</div>
            </div>
            <span class="q-badge">\${q.badge}</span>
          </div>
          <div class="options-grid">
            \${optionsHtml}
          </div>
          <div class="explanation-box \${isAnswered ? 'show' : ''}" id="exp-\${q.id}">
            <strong>💡 Correct Answer: \${LETTERS[q.correctIndex]}) \${q.options[q.correctIndex]}</strong>
            <p style="margin-top: 4px;">\${q.explanation}</p>
            <div class="ncert-ref">📖 \${q.ncertRef}</div>
          </div>
        \`;

        container.appendChild(card);
      });

      updateScoreStats();
    }

    function handleSelectOption(qId, selectedIdx) {
      if (userSelections[qId] !== undefined) return;

      userSelections[qId] = selectedIdx;
      renderQuestions();

      // Check if finished
      const answeredCount = Object.keys(userSelections).length;
      if (answeredCount === ACTIVE_QUESTIONS.length) {
        triggerConfetti();
        const scoreBanner = document.getElementById('scoreBanner');
        const correctCount = Object.entries(userSelections).filter(([id, ans]) => {
          const quest = ACTIVE_QUESTIONS.find(item => item.id === Number(id));
          return quest && quest.correctIndex === ans;
        }).length;
        document.getElementById('scoreBannerText').innerText = 
          '🎉 Outstanding! You scored ' + correctCount + ' out of ' + ACTIVE_QUESTIONS.length + ' (' + Math.round((correctCount/ACTIVE_QUESTIONS.length)*100) + '%)!';
        scoreBanner.style.display = 'flex';
      }
    }

    function updateScoreStats() {
      const total = ACTIVE_QUESTIONS.length;
      const answered = Object.keys(userSelections).length;
      let correct = 0;

      Object.entries(userSelections).forEach(([id, ans]) => {
        const quest = ACTIVE_QUESTIONS.find(item => item.id === Number(id));
        if (quest && quest.correctIndex === ans) {
          correct++;
        }
      });

      const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;

      document.getElementById('totalCountDisplay').innerText = total;
      document.getElementById('answeredCountDisplay').innerText = answered;
      document.getElementById('correctScoreDisplay').innerText = correct;
      document.getElementById('accuracyDisplay').innerText = accuracy + '%';
    }

    function filterCategory(cat, btn) {
      currentCategory = cat;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      if (btn) btn.classList.add('active');
      renderQuestions();
    }

    function reshuffleAllQuestionsAndOptions() {
      randomizeTest();
      document.getElementById('scoreBanner').style.display = 'none';
      renderQuestions();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function expandAllExplanations() {
      document.querySelectorAll('.explanation-box').forEach(el => el.classList.add('show'));
    }

    function resetQuiz() {
      userSelections = {};
      document.getElementById('scoreBanner').style.display = 'none';
      renderQuestions();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function toggleTheme() {
      const isLight = document.body.classList.toggle('light-theme');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      document.getElementById('themeToggleBtn').innerText = isLight ? '☀️ Theme' : '🌙 Theme';
    }

    function triggerConfetti() {
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }

    // Init on load with fresh unpredictable shuffle
    window.addEventListener('DOMContentLoaded', () => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        document.getElementById('themeToggleBtn').innerText = '☀️ Theme';
      }
      randomizeTest();
      renderQuestions();
    });
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, '../public/english-class6-poorvi-unit3-ch7-neem-baba-mcq.html'), htmlContent, 'utf-8');
console.log('Successfully generated public/english-class6-poorvi-unit3-ch7-neem-baba-mcq.html with 6 options and unpredictable shuffle!');
