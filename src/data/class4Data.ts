import type { ClassStageInfo } from './ncertData';

export const CLASS_4_DATA: ClassStageInfo = {
  classNumber: 4,
  stageName: 'Preparatory',
  ageGroup: '9-10 Years',
  nepFocus: 'Experiential Mathematics, Spatial Reasoning, Multi-digit Place Value, Story-driven English, Literary Hindi, Environmental Ecology & Interactive Worksheets',
  subjects: [
    // 1. Mathematics (Maths Mela / गणित मेला)
    {
      id: 'c4-maths',
      name: 'Mathematics (Maths Mela / गणित मेला)',
      iconName: 'Calculator',
      color: '#0284c7',
      description: '14 Chapters: Shapes Around Us, Hide and Seek, Patterns Around Us, Fun with Symmetry, Thousands Around Us, Measuring Length, The Cleanest Village, Weigh It Pour It, Equal Groups, Elephants Tigers and Leopards, Sharing and Grouping, Ticking Clocks, The Transport Museum, and Data Handling.',
      totalChapters: 14,
      coverImageUrl: 'https://ncert.nic.in/textbook/pdf/demm1cc.jpg',
      chapters: [
        {
          id: 'c4-m-ch1',
          chapterNumber: 1,
          title: 'Shapes Around Us (हमारे आस-पास की आकृतियाँ)',
          officialBookCode: 'demm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/demm101.pdf',
          nepHighlights: 'Spatial relationships, 3D solids unfolding to 2D nets, cubes, prisms, cylinders, and architectural observation.',
          summaryTextbook: 'Children observe local buildings, boxes, bridges, and monuments to identify prisms, pyramids, and cylinders. They unfold cardboard cartons to discover 2D nets that construct 3D boxes.',
          exerciseSolutions: [
            {
              id: 'c4-m-ch1-q1',
              questionNo: 'Page 5 Cube Nets',
              questionText: 'How many square faces does a cube have? Can a net of 5 squares fold into a complete closed cube? (एक घन के कितने वर्गाकार फलक होते हैं? क्या 5 वर्गों का जाल एक बंद घन बना सकता है?)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Cube geometry',
              stepByStepSolution: [
                'Step 1: A cube has 6 identical square faces (top, bottom, and 4 sides).',
                'Step 2: A net of only 5 squares will leave one face open and cannot form a closed cube.',
                'चरण 1: एक घन में 6 समान वर्गाकार फलक होते हैं।',
                'चरण 2: केवल 5 वर्गों का जाल एक फलक को खुला छोड़ देगा, इसलिए बंद घन नहीं बन सकता।'
              ],
              finalAnswer: 'A cube has 6 faces. No, 5 squares cannot make a closed cube.',
              keyTakeaway: 'A complete cube requires exactly 6 connected square faces arranged in a foldable net.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c4-m-ch1-mcq1',
              question: 'How many vertices (corners) does a cube have?',
              options: ['6', '8', '12', '4'],
              correctIndex: 1,
              explanation: 'A cube has 8 vertices, 12 edges, and 6 square faces.'
            }
          ]
        },
        {
          id: 'c4-m-ch2',
          chapterNumber: 2,
          title: 'Hide and Seek (आँख-मिचौली)',
          officialBookCode: 'demm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/demm102.pdf',
          nepHighlights: 'Top view, side view, front view, visual mapping, grid navigation, and coordinate games.',
          summaryTextbook: 'Using childhood games of hide and seek, students learn perspective drawing: how an object appears from the top (bird’s-eye view), from the side, and from the front.',
          exerciseSolutions: [
            {
              id: 'c4-m-ch2-q1',
              questionNo: 'Perspective Check',
              questionText: 'From which view does a railway track look wide near you and narrow far away? (किस दृश्य से रेल की पटरी पास में चौड़ी और दूर संकरी दिखाई देती है?)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: When standing at eye level looking down a straight track (front/ground view), perspective creates converging lines.',
                'चरण 1: ज़मीन के स्तर से सामने देखने पर दूरी के साथ वस्तुएँ संकरी दिखाई देती हैं।'
              ],
              finalAnswer: 'Front ground view (सामने से देखने पर).',
              keyTakeaway: 'Linear perspective causes parallel lines to appear to converge in the distance.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-m-ch3',
          chapterNumber: 3,
          title: 'Patterns Around Us (हमारे आस-पास के पैटर्न)',
          officialBookCode: 'demm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/demm103.pdf',
          nepHighlights: 'Repeating and growing geometric patterns, rangoli designs, number patterns, and rule identification.',
          summaryTextbook: 'Exploring floor tiles, border prints on dupattas, rangoli designs, and growing numerical series to identify mathematical rules.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-m-ch4',
          chapterNumber: 4,
          title: 'Fun with Symmetry (सममिति का मज़ा)',
          officialBookCode: 'demm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/demm104.pdf',
          nepHighlights: 'Line of symmetry, reflection, mirror halves, folding paper, and rotational symmetry.',
          summaryTextbook: 'Students fold paper, paint inkblots, use mirrors to test symmetrical figures, and explore alphabetical letters with horizontal and vertical axes of symmetry.',
          exerciseSolutions: [
            {
              id: 'c4-m-ch4-q1',
              questionNo: 'Symmetry Q1',
              questionText: 'Which of the following English letters has both vertical and horizontal lines of symmetry: A, H, M, C? (इनमें से किस अक्षर में क्षैतिज और ऊर्ध्वाधर दोनों सममिति रेखाएँ हैं: A, H, M, C?)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: A has only vertical symmetry.',
                'Step 2: C has only horizontal symmetry.',
                'Step 3: H can be divided into identical halves both vertically down the middle and horizontally across the crossbar.',
                'चरण 1: H को बीच से लंबवत और क्षैतिज दोनों तरह काटने पर दोनों भाग समान दिखते हैं।'
              ],
              finalAnswer: 'Letter H',
              keyTakeaway: 'Letters like H, I, O, and X have both horizontal and vertical symmetry.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-m-ch5',
          chapterNumber: 5,
          title: 'Thousands Around Us (हज़ार का संसार)',
          officialBookCode: 'demm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/demm105.pdf',
          nepHighlights: '4-digit numbers, place value up to 9,999, abacus representation, expanded form, and number words.',
          summaryTextbook: 'Introduces numbers greater than 1,000 using school library book counts, stadium ticket sales, and town populations. Teaches thousands, hundreds, tens, and ones place values.',
          exerciseSolutions: [
            {
              id: 'c4-m-ch5-q1',
              questionNo: 'Place Value Q1',
              questionText: 'Write the place value of digit 7 in 4,725. (4,725 में अंक 7 का स्थानीय मान क्या है?)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: 4 is in Thousands place (4,000).',
                'Step 2: 7 is in Hundreds place -> 7 × 100 = 700.',
                'चरण 1: 7 सैकड़ा के स्थान पर है -> 7 × 100 = 700।'
              ],
              finalAnswer: '700 (सात सौ)',
              keyTakeaway: 'The place value of a digit is its face value multiplied by the value of its position.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-m-ch6',
          chapterNumber: 6,
          title: 'Measuring Length (लंबाई का मापन)',
          officialBookCode: 'demm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/demm106.pdf',
          nepHighlights: 'Standard units of length (meter, centimeter, kilometer), conversion rules (1 m = 100 cm, 1 km = 1,000 m).',
          summaryTextbook: 'Using rulers, tailor tapes, and trundle wheels to measure desks, room boundaries, heights of children, and road distances.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-m-ch7',
          chapterNumber: 7,
          title: 'The Cleanest Village (सबसे स्वच्छ गाँव)',
          officialBookCode: 'demm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/demm107.pdf',
          nepHighlights: 'Real-world data, waste collection weights, addition and subtraction in practical civic contexts.',
          summaryTextbook: 'Based on Mawlynnong village in Meghalaya, students calculate daily dry and wet garbage weights collected, compost generated, and recycling statistics.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-m-ch8',
          chapterNumber: 8,
          title: 'Weigh It, Pour It (तौलो और भरो)',
          officialBookCode: 'demm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/demm108.pdf',
          nepHighlights: 'Mass and volume: grams, kilograms, milliliters, liters, estimating capacities and pan balance equilibrium.',
          summaryTextbook: 'Using beam balances with 500 g, 200 g, 100 g weights, and measuring cylinders for liquids like milk, water, and medicine bottles.',
          exerciseSolutions: [
            {
              id: 'c4-m-ch8-q1',
              questionNo: 'Capacity Problem',
              questionText: 'How many 250 mL glasses of water are needed to fill a 1-liter bottle? (1 लीटर की बोतल भरने के लिए 250 मिली के कितने गिलास पानी चाहिए?)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: '1 Liter = 1,000 mL, Glass = 250 mL',
              formula: 'Glasses = 1000 ÷ 250',
              stepByStepSolution: [
                'Step 1: 1 Liter = 1,000 mL.',
                'Step 2: 250 + 250 = 500 mL (2 glasses).',
                'Step 3: 500 + 500 = 1,000 mL (4 glasses).',
                'चरण 1: 1 लीटर = 1,000 मिली',
                'चरण 2: 1,000 ÷ 250 = 4 गिलास'
              ],
              finalAnswer: '4 glasses (4 गिलास)',
              keyTakeaway: '1,000 mL equals 1 Liter.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-m-ch9',
          chapterNumber: 9,
          title: 'Equal Groups (बराबर समूह)',
          officialBookCode: 'demm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/demm109.pdf',
          nepHighlights: 'Multiplication as repeated addition, arrays, skip counting, multiplication tables up to 10.',
          summaryTextbook: 'Understanding multiplication through planting rows of trees, arranging desks, packaging eggs in cartons, and making equal groupings.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-m-ch10',
          chapterNumber: 10,
          title: 'Elephants, Tigers and Leopards (हाथी, बाघ और तेंदुए)',
          officialBookCode: 'demm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/demm110.pdf',
          nepHighlights: 'Wildlife census, wildlife reserves, large animal weights, multi-step math problems.',
          summaryTextbook: 'Learning math through Indian wildlife sanctuaries: counting tiger reserves, comparing elephant weights, and tracking migration paths.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-m-ch11',
          chapterNumber: 11,
          title: 'Sharing and Grouping (बांटना और समूह बनाना)',
          officialBookCode: 'demm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/demm111.pdf',
          nepHighlights: 'Division as repeated subtraction, sharing equally, quotient and remainder concepts.',
          summaryTextbook: 'Sharing laddoos among children, dividing pencils into boxes, and discovering what remains when numbers do not divide evenly.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-m-ch12',
          chapterNumber: 12,
          title: 'Ticking Clocks and Turning Calendar (टिक-टिक करती घड़ी और बदलता कैलेंडर)',
          officialBookCode: 'demm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/demm112.pdf',
          nepHighlights: '12-hour and 24-hour clock, reading minutes and seconds, calculating elapsed time, days in months, leap year.',
          summaryTextbook: 'Railway timetable analysis, journey start and arrival times, calendar reading, and calculating total days between vacations.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-m-ch13',
          chapterNumber: 13,
          title: 'The Transport Museum (परिवहन संग्रहालय)',
          officialBookCode: 'demm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/demm113.pdf',
          nepHighlights: 'Fares, ticket costs, distance traveled, fuel consumption math, and historical transit timelines.',
          summaryTextbook: 'A trip to the transport museum teaches bus and train fare structures, currency transactions, and distance-speed calculations.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-m-ch14',
          chapterNumber: 14,
          title: 'Data Handling (आँकड़ों का प्रबंधन)',
          officialBookCode: 'demm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/demm114.pdf',
          nepHighlights: 'Tally charts, pictographs with key scale (1 picture = 5 items), simple bar charts, and data interpretation.',
          summaryTextbook: 'Recording favorite fruits of classmates, vehicles passing school gate, making tally charts, and drawing colorful pictographs.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },
    // 2. English (Santoor)
    {
      id: 'c4-english',
      name: 'English (Santoor)',
      iconName: 'BookOpen',
      color: '#8b5cf6',
      description: '12 Chapters: Together We Can, The Tinkling Bells, Be Smart Be Safe, One Thing at a Time, The Old Stag, Braille, Fit Body Fit Mind, The Lagori Champions, Hekko, The Swing, A Journey to the Magical Mountains, and Maheshwar.',
      totalChapters: 12,
      coverImageUrl: 'https://ncert.nic.in/textbook/pdf/desa1cc.jpg',
      chapters: [
        {
          id: 'c4-e-ch1',
          chapterNumber: 1,
          title: 'Together We Can',
          officialBookCode: 'desa1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/desa101.pdf',
          nepHighlights: 'Cooperation, community spirit, teamwork, and collective problem solving.',
          summaryTextbook: 'A heartwarming story demonstrating that when individuals combine their unique talents, they can overcome community challenges that no single person could tackle alone.',
          exerciseSolutions: [
            {
              id: 'c4-e-ch1-q1',
              questionNo: 'Exercise Q1',
              questionText: 'What is the central theme of the chapter "Together We Can"?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: The chapter emphasizes that unity and collaboration make difficult tasks achievable.',
                'Step 2: When people join hands, they achieve greater success.'
              ],
              finalAnswer: 'Unity, teamwork, and collective action achieve great results.',
              keyTakeaway: 'Together everyone achieves more.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c4-e-ch1-mcq1',
              question: 'What is the main message of "Together We Can"?',
              options: ['Work alone', 'Teamwork brings success', 'Never ask for help', 'Compete with friends'],
              correctIndex: 1,
              explanation: 'The chapter celebrates the strength found in teamwork and cooperation.'
            }
          ]
        },
        {
          id: 'c4-e-ch2',
          chapterNumber: 2,
          title: 'The Tinkling Bells',
          officialBookCode: 'desa1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/desa102.pdf',
          nepHighlights: 'Sensory imagery, listening skills, rhythm in poetry, and rural village bells.',
          summaryTextbook: 'A melodic poem and story capturing the cheerful sounds of cattle bells, temple chimes, and bicycle bells resonating across morning pathways.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-e-ch3',
          chapterNumber: 3,
          title: 'Be Smart, Be Safe',
          officialBookCode: 'desa1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/desa103.pdf',
          nepHighlights: 'Road safety, pedestrian crossing, traffic light rules, cyber safety basics, and alertness.',
          summaryTextbook: 'Teaches essential safety habits: look right and left before crossing, use zebra crossings, wear bicycle helmets, and stay alert around unknown callers.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-e-ch4',
          chapterNumber: 4,
          title: 'One Thing at a Time',
          officialBookCode: 'desa1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/desa104.pdf',
          nepHighlights: 'Focus, mindfulness, time management, and dedication to work and play.',
          summaryTextbook: 'Based on M.A. Stodart’s classic poem: "Work while you work, play while you play; for that is the way to be cheerful and gay."',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-e-ch5',
          chapterNumber: 5,
          title: 'The Old Stag',
          officialBookCode: 'desa1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/desa105.pdf',
          nepHighlights: 'Wisdom of elders, humility, appreciating inner virtues over external vanity.',
          summaryTextbook: 'An adaptation of Aesop’s fable: a stag who admired his graceful horns but despised his slender legs discovers that his legs saved his life while his horns caught in branches.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-e-ch6',
          chapterNumber: 6,
          title: 'Braille',
          officialBookCode: 'desa1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/desa106.pdf',
          nepHighlights: 'Inclusivity, Louis Braille’s invention, raised tactile dots system, and empathy for visually impaired.',
          summaryTextbook: 'The inspiring story of young Louis Braille in France who invented the 6-dot tactile alphabet, empowering millions of visually impaired readers worldwide.',
          exerciseSolutions: [
            {
              id: 'c4-e-ch6-q1',
              questionNo: 'Reading Comprehension',
              questionText: 'How do people read Braille? (लोग ब्रेल लिपि कैसे पढ़ते हैं?)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Braille characters are formed by patterns of raised dots on thick paper.',
                'Step 2: Readers touch and feel the raised dots with their fingertips to recognize letters and words.',
                'चरण 1: ब्रेल लिपि में उभरे हुए बिंदुओं के पैटर्न होते हैं।',
                'चरण 2: पाठक अपनी उँगलियों के पोरों से छूकर अक्षरों को पढ़ते हैं।'
              ],
              finalAnswer: 'By feeling patterns of raised dots with their fingertips.',
              keyTakeaway: 'Braille is a tactile writing system based on a 6-dot matrix cell.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-e-ch7',
          chapterNumber: 7,
          title: 'Fit Body, Fit Mind, Fit Nation',
          officialBookCode: 'desa1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/desa107.pdf',
          nepHighlights: 'Fit India Movement, morning exercise, balanced diet, yoga asanas, and mental well-being.',
          summaryTextbook: 'Explores daily physical activity routines in schools, emphasizing how a healthy body nurtures a sharp, creative, and resilient mind.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-e-ch8',
          chapterNumber: 8,
          title: 'The Lagori Champions',
          officialBookCode: 'desa1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/desa108.pdf',
          nepHighlights: 'Traditional Indian sports, indigenous games (Satoliya / Lagori / 7 stones), sportsmanship.',
          summaryTextbook: 'A thrilling inter-school tournament of Lagori (Seven Stones) where team coordination, agility, and fair play lead to a memorable finish.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-e-ch9',
          chapterNumber: 9,
          title: 'Hekko',
          officialBookCode: 'desa1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/desa109.pdf',
          nepHighlights: 'North-East Indian folklore, environmental preservation, and forest guardian legends.',
          summaryTextbook: 'A captivating folklore from Nagaland/Arunachal about forest harmony, reverence for ancestral trees, and coexistence with woodland spirits.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-e-ch10',
          chapterNumber: 10,
          title: 'The Swing',
          officialBookCode: 'desa1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/desa110.pdf',
          nepHighlights: 'R.L. Stevenson’s classic poem, joyful rhythm, ascending viewpoint, and childhood bliss.',
          summaryTextbook: '"How do you like to go up in a swing, up in the air so blue?" Children experience the soaring feeling of flying above garden walls, roofs, and green fields.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-e-ch11',
          chapterNumber: 11,
          title: 'A Journey to the Magical Mountains',
          officialBookCode: 'desa1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/desa111.pdf',
          nepHighlights: 'Himalayan travelogue, snow peaks, pine valleys, and mountain culture.',
          summaryTextbook: 'A family travels through Himachal Pradesh, discovering terraced apple orchards, roaring rivers, fresh mountain air, and local legends.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-e-ch12',
          chapterNumber: 12,
          title: 'Maheshwar',
          officialBookCode: 'desa1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/desa112.pdf',
          nepHighlights: 'Historical heritage of Madhya Pradesh, Queen Ahilyabai Holkar, Narmada ghats, and Maheshwari handloom sarees.',
          summaryTextbook: 'A rich cultural visit to historic Maheshwar on the banks of holy river Narmada, marveling at Ahilya Fort, skilled handloom weavers, and architectural beauty.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },
    // 3. Hindi (Veena / वीणा)
    {
      id: 'c4-hindi',
      name: 'Hindi (Veena / वीणा)',
      iconName: 'BookMarked',
      color: '#e11d48',
      description: '13 Chapters: चिड़िया का गीत, मति की उड़ान, बगीचे का घोंघा, नीम, भांति-भांति की पत्तियाँ, ऐसा वर दो, हमारे प्यारे मित्र, जादू का ब्रश, अनोखा घोंसला, जंगल की सैर, त्योहारों की खुशबू, नदियाँ हमारी जीवनधारा, और हम भारत के नौजवान।',
      totalChapters: 13,
      coverImageUrl: 'https://ncert.nic.in/textbook/pdf/dhve1cc.jpg',
      chapters: [
        {
          id: 'c4-h-ch1',
          chapterNumber: 1,
          title: 'चिड़िया का गीत (कविता)',
          officialBookCode: 'dhve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/dhve101.pdf',
          nepHighlights: 'स्वतंत्रता, प्रकृति के प्रति प्रेम, पक्षियों का सुमधुर कलरव और जीवन का उल्लास।',
          summaryTextbook: 'पहले अंडे में, फिर घोंसले में, और अंत में खुले नीले आकाश में उड़ती चिड़िया अपने बढ़ते हुए संसार और आजादी का गीत सुनाती है।',
          exerciseSolutions: [
            {
              id: 'c4-h-ch1-q1',
              questionNo: 'कविता बोध प्रश्न 1',
              questionText: 'चिड़िया का संसार धीरे-धीरे कैसे बढ़ता गया?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'चरण 1: पहले चिड़िया का संसार केवल उसका अंडा था।',
                'चरण 2: फिर तिनकों से बना घोंसला और पेड़ की डालियाँ उसका संसार बनीं।',
                'चरण 3: जब उसने पंख फैलाए, तो पूरा खुला आसमान उसका संसार बन गया।'
              ],
              finalAnswer: 'अंडे से घोंसले तक और घोंसले से पूरे नीले आकाश तक चिड़िया का संसार विस्तृत हुआ।',
              keyTakeaway: 'जैसे-जैसे हम सीखते हैं, हमारा ज्ञान और संसार भी विस्तृत होता है।'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c4-h-ch1-mcq1',
              question: 'चिड़िया का पहला घर क्या था?',
              options: ['तिनकों का घोंसला', 'अंडा', 'पेड़ की डाल', 'आसमान'],
              correctIndex: 1,
              explanation: 'कविता के अनुसार चिड़िया का सबसे पहला घर उसका अंडा था।'
            }
          ]
        },
        {
          id: 'c4-h-ch2',
          chapterNumber: 2,
          title: 'मति की उड़ान',
          officialBookCode: 'dhve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/dhve102.pdf',
          nepHighlights: 'रचनात्मक बुद्धि, सूझबूझ, आत्मविश्वास और नवाचार।',
          summaryTextbook: 'एक ग्रामीण बालक ने अपनी कुशाग्र बुद्धि और लगन से किस प्रकार बेकार पड़ी वस्तुओं से उपयोगी यंत्र तैयार किया।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-h-ch3',
          chapterNumber: 3,
          title: 'बगीचे का घोंघा',
          officialBookCode: 'dhve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/dhve103.pdf',
          nepHighlights: 'सूक्ष्म अवलोकन, धीरज, जीवों का पारिस्थितिक तंत्र और प्रकृति रहस्य।',
          summaryTextbook: 'बगीचे में नमी वाली पत्तियों के बीच रेंगते घोंघे की धीमी चाल, सुरक्षात्मक खोल और उसके जीवन चक्र का रोचक विवरण।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-h-ch4',
          chapterNumber: 4,
          title: 'नीम',
          officialBookCode: 'dhve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/dhve104.pdf',
          nepHighlights: 'पारंपरिक आयुर्वेद, नीम के औषधीय गुण, पर्यावरण शोधक वृक्ष।',
          summaryTextbook: 'नीम का वृक्ष स्वयं कड़वा होकर भी मनुष्य को अनेक रोगों से बचाता है—उसकी दातून, पत्तियाँ, निबोरी और छाल के बहुमूल्य उपयोग।',
          exerciseSolutions: [
            {
              id: 'c4-h-ch4-q1',
              questionNo: 'प्रश्न 1',
              questionText: 'नीम के पेड़ को हमारे लिए वरदान क्यों माना गया है?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'चरण 1: नीम की पत्तियाँ हवा को शुद्ध करती हैं और कीटाणुओं को नष्ट करती हैं।',
                'चरण 2: नीम की दातून दाँतों को मजबूत करती है और इसकी निबोरी से औषधियाँ बनती हैं।'
              ],
              finalAnswer: 'नीम के प्रत्येक भाग में औषधीय गुण होने के कारण यह मानव जाति के लिए वरदान है।',
              keyTakeaway: 'नीम भारतीय प्राकृतिक चिकित्सा और पर्यावरण का प्रहरी है।'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-h-ch5',
          chapterNumber: 5,
          title: 'भांति-भांति की पत्तियाँ',
          officialBookCode: 'dhve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/dhve105.pdf',
          nepHighlights: 'पत्तियों के विविध आकार, खुशबू, रंग और उनका वर्गीकरण।',
          summaryTextbook: 'गोल, नुकीली, चौड़ी, कटीली और सुगंधित पत्तियों (तुलसी, पुदीना, धनिया, केला) का तुलनात्मक अध्ययन और कलात्मक हर्बेरियम बनाना।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-h-ch6',
          chapterNumber: 6,
          title: 'ऐसा वर दो (कविता)',
          officialBookCode: 'dhve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/dhve106.pdf',
          nepHighlights: 'प्रार्थना, विनय, परोपकार, सत्य और सद्गुणों की याचना।',
          summaryTextbook: 'बालक ईश्वर से प्रार्थना करते हैं कि वे सदा सत्य बोलें, दीनों की सहायता करें और मातृभूमि की सेवा में समर्पित रहें।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-h-ch7',
          chapterNumber: 7,
          title: 'हमारे प्यारे मित्र',
          officialBookCode: 'dhve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/dhve107.pdf',
          nepHighlights: 'सहपाठी प्रेम, दिव्यांग साथियों के प्रति संवेदनशीलता और समावेशी शिक्षा।',
          summaryTextbook: 'कक्षा में आए नए विशेष आवश्यकता वाले साथी को सब मिलकर अपना मित्र बनाते हैं और उसकी पढ़ाई व खेल में मदद करते हैं।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-h-ch8',
          chapterNumber: 8,
          title: 'जादू का ब्रश',
          officialBookCode: 'dhve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/dhve108.pdf',
          nepHighlights: 'कला, लोक कथा, निस्वार्थ सेवा और लालच का परिणाम।',
          summaryTextbook: 'मा-लियांग के जादुई ब्रश की लोक कथा—जिससे वह जो भी बनाता, वह जीवित हो जाता था। उसने केवल निर्धनों की भलाई के लिए चित्र बनाए।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-h-ch9',
          chapterNumber: 9,
          title: 'अनोखा घोंसला',
          officialBookCode: 'dhve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/dhve109.pdf',
          nepHighlights: 'दर्जिन चिड़िया की शिल्पकला, पत्तों को सीकर घोंसला तैयार करना।',
          summaryTextbook: 'दर्जिन चिड़िया अपनी चोंच को सुई की तरह उपयोग कर दो बड़े पत्तों को आपस में सीकर सुरक्षित घोंसला बनाती है।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-h-ch10',
          chapterNumber: 10,
          title: 'जंगल की सैर',
          officialBookCode: 'dhve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/dhve110.pdf',
          nepHighlights: 'वन्य जीवन, अभयारण्य भ्रमण, पशुओं की बोलियाँ और पदचिह्न।',
          summaryTextbook: 'जिम कॉर्बेट राष्ट्रीय उद्यान की सैर का रोमांचक संस्मरण, जहाँ बच्चों ने हिरणों के झुंड, मोर और हाथी देखे।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-h-ch11',
          chapterNumber: 11,
          title: 'त्योहारों की खुशबू',
          officialBookCode: 'dhve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/dhve111.pdf',
          nepHighlights: 'सांस्कृतिक पर्व, पारंपरिक व्यंजन (गुझिया, सेवइयां, केक) और सामाजिक समरसता।',
          summaryTextbook: 'होली, ईद और क्रिसमस पर बनने वाले स्वादिष्ट पारंपरिक व्यंजनों और मिलकर खुशियाँ बाँटने का उल्लास।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-h-ch12',
          chapterNumber: 12,
          title: 'नदियाँ हमारी जीवनधारा',
          officialBookCode: 'dhve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/dhve112.pdf',
          nepHighlights: 'नदी संरक्षण, जल प्रदूषण निवारण, भारतीय सभ्यता में नदियों का स्थान।',
          summaryTextbook: 'पहाड़ों से निकलकर मैदानों को सींचने वाली नदियों की कहानी और उन्हें स्वच्छ व अविरल रखने का संदेश।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-h-ch13',
          chapterNumber: 13,
          title: 'हम भारत के नौजवान',
          officialBookCode: 'dhve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/dhve113.pdf',
          nepHighlights: 'राष्ट्र निर्माण, कर्मठता, साहस और देशभक्ति का संकल्प।',
          summaryTextbook: 'देश के बच्चों और युवाओं का संकल्प कि वे कठिन परिश्रम, सत्य और ज्ञान के बल पर भारत को विश्व में सिरमौर बनाएंगे।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },
    // 4. Environmental Studies (Our Wondrous World / हमारा अद्भुत संसार)
    {
      id: 'c4-evs',
      name: 'Environmental Studies (Our Wondrous World / हमारा अद्भुत संसार)',
      iconName: 'Globe',
      color: '#10b981',
      description: '10 Chapters: Our Community, Exploring Our Neighbourhood, Learning from Nature, Growing up with Nature, Health and Well-being, Different Lands Different Lives, How Things Work, Caring for Animals, Water and Cleanliness, Conserving Our Resources.',
      totalChapters: 10,
      coverImageUrl: 'https://ncert.nic.in/textbook/pdf/deev1cc.jpg',
      chapters: [
        {
          id: 'c4-evs-ch1',
          chapterNumber: 1,
          title: 'Our Community (हमारा समुदाय)',
          officialBookCode: 'deev1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/deev101.pdf',
          nepHighlights: 'Community living, civic institutions (Panchayat, Municipalities), postal services, healthcare clinics, and community helpers.',
          summaryTextbook: 'Explores how communities function together: local governance, post offices, hospitals, fire stations, and the collaborative network sustaining daily city and village life.',
          exerciseSolutions: [
            {
              id: 'c4-evs-ch1-q1',
              questionNo: 'Exercise Q1',
              questionText: 'Name three public institutions that serve our community and state their role. (हमारे समुदाय की सेवा करने वाले तीन सार्वजनिक संस्थानों के नाम और कार्य बताइए।)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Primary Health Centre (PHC) provides medical care and vaccines.',
                'Step 2: Post Office delivers letters, parcels, and manages savings accounts.',
                'Step 3: Police Station maintains law, order, and public safety.',
                'चरण 1: प्राथमिक स्वास्थ्य केंद्र उपचार और टीके उपलब्ध कराता है।',
                'चरण 2: डाकघर पत्र पहुँचाने और बचत खाते की सुविधा देता है।',
                'चरण 3: पुलिस थाना कानून-व्यवस्था और सुरक्षा बनाए रखता है।'
              ],
              finalAnswer: 'Primary Health Centre, Post Office, and Police Station.',
              keyTakeaway: 'Public institutions provide essential services accessible to all citizens.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c4-evs-ch1-mcq1',
              question: 'Who oversees governance at the village level in India?',
              options: ['Gram Panchayat', 'Supreme Court', 'Railway Board', 'Airport Authority'],
              correctIndex: 0,
              explanation: 'The Gram Panchayat is the grassroots local governing body for villages in India.'
            }
          ]
        },
        {
          id: 'c4-evs-ch2',
          chapterNumber: 2,
          title: 'Exploring Our Neighbourhood (पड़ोस की खोज)',
          officialBookCode: 'deev1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/deev102.pdf',
          nepHighlights: 'Mapping skills, reading symbols, landmarks, directions (North, South, East, West), scale.',
          summaryTextbook: 'Students draw sketch maps of their route to school, learn the four cardinal directions using the rising sun, and mark landmarks using standard map keys.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-evs-ch3',
          chapterNumber: 3,
          title: 'Learning from Nature (प्रकृति से सीख)',
          officialBookCode: 'deev1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/deev103.pdf',
          nepHighlights: 'Plant adaptations (desert cacti, aquatic lotus, mountain pines), seed dispersal methods, and food chains.',
          summaryTextbook: 'Discovering how plants adapt to their environments: thick waxy leaves of lotus in ponds, spiny thorns of desert cacti, and winged seeds carried by the wind.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-evs-ch4',
          chapterNumber: 4,
          title: 'Growing up with Nature (प्रकृति के साथ विकास)',
          officialBookCode: 'deev1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/deev104.pdf',
          nepHighlights: 'Life cycles of butterflies, frogs, plants, germination stages, and seasonal crop cycles.',
          summaryTextbook: 'Observing the transformation of a caterpillar into a chrysalis and butterfly, tadpole to frog, and bean seed germination in moist cotton.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-evs-ch5',
          chapterNumber: 5,
          title: 'Health and Well-being (स्वास्थ्य और खुशहाली)',
          officialBookCode: 'deev1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/deev105.pdf',
          nepHighlights: 'Nutritious balanced diet, food groups (carbohydrates, proteins, vitamins, minerals), clean water, dental care.',
          summaryTextbook: 'Understanding the food plate: energy-giving foods, body-building pulses, protective vegetables, avoiding junk food, and daily hydration.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-evs-ch6',
          chapterNumber: 6,
          title: 'Different Lands, Different Lives (अनोखे भूभाग, अनोखा जीवन)',
          officialBookCode: 'deev1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/deev106.pdf',
          nepHighlights: 'Physical geography of India: Ladakh cold desert, Thar hot desert, Sundarbans coastal delta, and Gangetic plains.',
          summaryTextbook: 'Comparative study of lifestyles across India: houses on stilts in Assam, igloos and yak wool in Ladakh, camel caravans in Rajasthan, and coconut groves in Kerala.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-evs-ch7',
          chapterNumber: 7,
          title: 'How Things Work (चीजें कैसे काम करती हैं)',
          officialBookCode: 'deev1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/deev107.pdf',
          nepHighlights: 'Simple machines: levers, pulleys, wheels, inclined planes, and gears in daily life.',
          summaryTextbook: 'Hands-on scientific inquiry: how a seesaw acts as a lever, how a pulley draws water from a well, and why wheels with axles reduce friction.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-evs-ch8',
          chapterNumber: 8,
          title: 'Caring for Animals (पशु-पक्षियों की देखभाल)',
          officialBookCode: 'deev1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/deev108.pdf',
          nepHighlights: 'Animal welfare, shelter, ethical treatment, animal shelters, veterinary care, and endangered species.',
          summaryTextbook: 'Compassionate living with domestic and stray animals, providing clean water bowls in heatwaves, avoiding animal cruelty, and visiting veterinary dispensaries.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-evs-ch9',
          chapterNumber: 9,
          title: 'Water and Cleanliness (जल और स्वच्छता)',
          officialBookCode: 'deev1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/deev109.pdf',
          nepHighlights: 'Safe drinking water, boiling and filtration methods, waterborne diseases (cholera, jaundice), and sanitation hygiene.',
          summaryTextbook: 'Purification methods for drinking water, protecting underground aquifers, preventing stagnant water to stop mosquito breeding, and maintaining clean community toilets.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c4-evs-ch10',
          chapterNumber: 10,
          title: 'Conserving Our Resources (संसाधनों का संरक्षण)',
          officialBookCode: 'deev1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/deev110.pdf',
          nepHighlights: 'The 3 Rs (Reduce, Reuse, Recycle), energy conservation, solar power, and sustainable living.',
          summaryTextbook: 'Practical conservation techniques for students: turning off appliances, switching to solar lights, recycling paper, carrying cloth bags, and planting saplings.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    }
  ]
};
