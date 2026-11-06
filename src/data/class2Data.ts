import type { ClassStageInfo } from './ncertData';

export const CLASS_2_DATA: ClassStageInfo = {
  classNumber: 2,
  stageName: 'Foundational',
  ageGroup: '6-7 Years',
  nepFocus: 'Foundational Literacy & Numeracy, Spatial Understanding, Number Sense 1–100, Rhymes, Stories & Creative Expression',
  subjects: [
    // 1. Mathematics — Joyful-Mathematics (आनंदमय गणित)
    {
      id: 'c2-maths',
      name: 'Mathematics (Joyful-Mathematics / आनंदमय गणित)',
      iconName: 'Calculator',
      color: '#8b5cf6',
      description: '11 Chapters under NEP 2020: A Day at the Beach, Shapes Around Us, Fun with Numbers, Shadow Story (Togalu), Playing with Lines, Decoration for Festival, Rani’s Gift, Grouping and Sharing, Which Season is it?, Fun at the Fair, and Data Handling.',
      totalChapters: 11,
      coverImageUrl: 'https://ncert.nic.in/textbook/pdf/bejm1cc.jpg',
      chapters: [
        {
          id: 'c2-m-ch1',
          chapterNumber: 1,
          title: 'A Day at the Beach (Counting in Groups)',
          officialBookCode: 'bejm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bejm101.pdf',
          nepHighlights: 'Counting in pairs, groups of 5 and 10, estimating quantities, seashells and coconut counting.',
          summaryTextbook: 'Children visit the sandy beach and learn to count seashells in pairs (2, 4, 6, 8), footprints, and coconuts in clusters of 5 and 10 to understand grouping and estimation.',
          exerciseSolutions: [
            {
              id: 'c2-m-ch1-q1',
              questionNo: 'Seashell Counting Q1',
              questionText: 'If you have 4 pairs of slippers on the beach, how many individual slippers do you have? (यदि समुद्र तट पर चप्पलों के 4 जोड़े हैं, तो कुल कितनी चप्पलें हैं?)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: '4 pairs of slippers',
              formula: 'Total = 4 × 2 = 8',
              stepByStepSolution: [
                'Step 1: One pair equals 2 slippers.',
                'Step 2: Count in twos: 2, 4, 6, 8.',
                'चरण 1: 1 जोड़े में 2 चप्पलें होती हैं।',
                'चरण 2: दो-दो करके गिनें: 2, 4, 6, 8।'
              ],
              finalAnswer: '8 slippers in total. (कुल 8 चप्पलें हैं।)',
              keyTakeaway: 'Counting in groups of 2 or 5 is faster than counting one by one.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c2-m-ch1-mcq1',
              question: 'How many items make a pair? (एक जोड़े में कितनी वस्तुएं होती हैं?)',
              options: ['One (1)', 'Two (2)', 'Three (3)', 'Five (5)'],
              correctIndex: 1,
              explanation: 'A pair always contains 2 matching items (जैसे 2 जूते या 2 मोजे).'
            }
          ]
        },
        {
          id: 'c2-m-ch2',
          chapterNumber: 2,
          title: 'Shapes Around Us (3D Shapes in Daily Life)',
          officialBookCode: 'bejm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bejm102.pdf',
          nepHighlights: 'Exploring cubes, cuboids, spheres, cylinders, cones; stacking vs rolling.',
          summaryTextbook: 'Identifying shapes of birthday cap (cone), football (sphere), chalk box (cube), water pipe (cylinder), and matchbox (cuboid).',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-m-ch3',
          chapterNumber: 3,
          title: 'Fun with Numbers (Numbers 1 to 100)',
          officialBookCode: 'bejm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bejm103.pdf',
          nepHighlights: 'Place value (Tens and Ones), expanded form, skip counting by 2, 5, 10 up to 100.',
          summaryTextbook: 'Students master numbers from 1 to 100 with place value blocks, tens frames, number charts, and forward/backward counting.',
          exerciseSolutions: [
            {
              id: 'c2-m-ch3-q1',
              questionNo: 'Place Value Q1',
              questionText: 'What is the place value of 7 in the number 74? (संख्या 74 में 7 का स्थानीय मान क्या है?)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Number: 74',
              formula: '7 tens + 4 ones = 70 + 4',
              stepByStepSolution: [
                'Step 1: In 74, 4 is at the ones place and 7 is at the tens place.',
                'Step 2: 7 tens = 7 × 10 = 70.',
                'चरण 1: 74 में 4 इकाई पर है और 7 दहाई पर है।',
                'चरण 2: 7 दहाई = 70।'
              ],
              finalAnswer: '70 (Seven tens / 7 दहाई)',
              keyTakeaway: 'The digit in the tens position represents multiples of ten.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c2-m-ch3-mcq1',
              question: 'Which number is 5 tens and 8 ones? (5 दहाई और 8 इकाई कौन सी संख्या है?)',
              options: ['85', '58', '508', '13'],
              correctIndex: 1,
              explanation: '5 tens (50) + 8 ones (8) = 58 (अट्ठाईस).'
            }
          ]
        },
        {
          id: 'c2-m-ch4',
          chapterNumber: 4,
          title: 'Shadow Story (Togalu) (2D Shapes & Shadows)',
          officialBookCode: 'bejm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bejm104.pdf',
          nepHighlights: 'Traditional Indian leather shadow puppetry (Togalu Gombeyaata), silhouettes, 2D outlines of circles, rectangles, triangles.',
          summaryTextbook: 'Discovering 2D geometric shapes through traditional puppet shadows cast on screen: triangles, rectangles, squares, and circles.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-m-ch5',
          chapterNumber: 5,
          title: 'Playing with Lines (Standing, Slanting & Sleeping Lines)',
          officialBookCode: 'bejm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bejm105.pdf',
          nepHighlights: 'Straight lines (vertical, horizontal, slanting) and curved lines; dancing stick figures.',
          summaryTextbook: 'Drawing stick figures with standing lines, sleeping lines, and slanting lines to create playful rangoli and dancing patterns.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-m-ch6',
          chapterNumber: 6,
          title: 'Decoration for Festival (Addition & Subtraction up to 99)',
          officialBookCode: 'bejm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bejm106.pdf',
          nepHighlights: 'Adding and subtracting 2-digit numbers without and with regrouping, diya counting, flower garlands.',
          summaryTextbook: 'Preparing marigold flower garlands and counting earthen lamps (diyas) for Diwali/Eid, using mental math strategies.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-m-ch7',
          chapterNumber: 7,
          title: 'Rani’s Gift (Measurement: Length, Weight & Capacity)',
          officialBookCode: 'bejm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bejm107.pdf',
          nepHighlights: 'Comparing lengths with ribbons, weighing fruits on balance scale, measuring glasses of lemonade.',
          summaryTextbook: 'Rani wraps gifts with colorful ribbons, compares heavy and light packages using pan balances, and fills bottles with cups.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-m-ch8',
          chapterNumber: 8,
          title: 'Grouping and Sharing (Multiplication & Division Concepts)',
          officialBookCode: 'bejm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bejm108.pdf',
          nepHighlights: 'Equal sharing among friends, repeated addition, skip jumping on number lines.',
          summaryTextbook: 'Distributing 12 laddoos equally among 3 children so each gets 4 laddoos. Introducing fair sharing.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-m-ch9',
          chapterNumber: 9,
          title: 'Which Season is it? (Measurement of Time & Calendar)',
          officialBookCode: 'bejm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bejm109.pdf',
          nepHighlights: '7 days of the week, 12 months of the year, seasons, reading a simple wall calendar.',
          summaryTextbook: 'Learning days of the week (Monday to Sunday), order of months, birthday celebrations, and weather seasons.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-m-ch10',
          chapterNumber: 10,
          title: 'Fun at the Fair (Money: Coins, Notes & Shopping)',
          officialBookCode: 'bejm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bejm110.pdf',
          nepHighlights: 'Combining coins and currency notes (₹5 + ₹10 = ₹15), giving change at the village fair.',
          summaryTextbook: 'Enjoying balloon games and joyrides at the fair, buying chana jor garam, and calculating total cost and balance money.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-m-ch11',
          chapterNumber: 11,
          title: 'Data Handling (Pictographs & Frequency Tables)',
          officialBookCode: 'bejm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bejm111.pdf',
          nepHighlights: 'Collecting information, drawing tally marks, representing data with smiley pictographs.',
          summaryTextbook: 'Surveying classmates on favorite fruits (mango, apple, banana, guava) and creating a fun pictorial chart.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },

    // 2. English — Mridang (मृदंग)
    {
      id: 'c2-english',
      name: 'English (Mridang / मृदंग)',
      iconName: 'BookOpen',
      color: '#f59e0b',
      description: '13 Joyful Chapters (5 Units): My Bicycle, Picture Reading, It is Fun, Seeing without Seeing, Come Back Soon, Between Home and School, This is My Town, A Show of Clouds, My Name, The Crow, The Smart Monkey, Little Drops of Water, and We are all Indians.',
      totalChapters: 13,
      coverImageUrl: 'https://ncert.nic.in/textbook/pdf/bemr1cc.jpg',
      chapters: [
        {
          id: 'c2-eng-ch1',
          chapterNumber: 1,
          title: 'My Bicycle (Unit 1: Fun with Friends)',
          officialBookCode: 'bemr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bemr101.pdf',
          nepHighlights: 'Action rhyme, riding red bicycle, bell sound "trin trin", traffic safety.',
          summaryTextbook: 'A charming poem about riding a shiny red bicycle with a bell that rings trin trin, two wheels turning, and helmet safety.',
          exerciseSolutions: [
            {
              id: 'c2-eng-ch1-q1',
              questionNo: 'Poem Reading Q1',
              questionText: 'What sound does the bicycle bell make in the poem? (कविता में साइकिल की घंटी कैसी आवाज़ करती है?)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: In the poem, the rider rings the bell.',
                'Step 2: The sound is "Trin, trin!".',
                'चरण 1: साइकिल की घंटी की आवाज़ "ट्रिन, ट्रिन!" है।'
              ],
              finalAnswer: 'The bicycle bell goes "Trin, trin!". (साइकिल की घंटी "ट्रिन, ट्रिन" बजती है।)',
              keyTakeaway: 'Bicycle bells warn pedestrians so everyone stays safe on the road.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c2-eng-ch1-mcq1',
              question: 'How many wheels does a bicycle have? (साइकिल में कितने पहिए होते हैं?)',
              options: ['One', 'Two (2 पहिए)', 'Three', 'Four'],
              correctIndex: 1,
              explanation: '"Bi-cycle" means two wheels (दो पहिए).'
            }
          ]
        },
        {
          id: 'c2-eng-ch2',
          chapterNumber: 2,
          title: 'Picture Reading (Unit 1: Fun with Friends)',
          officialBookCode: 'bemr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bemr102.pdf',
          nepHighlights: 'Visual storytelling, speaking skills, describing activities in park.',
          summaryTextbook: 'Describing pictures of children flying kites, swinging, playing football, and helping a friend.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-eng-ch3',
          chapterNumber: 3,
          title: 'It is Fun (Unit 2: Welcome to My World)',
          officialBookCode: 'bemr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bemr103.pdf',
          nepHighlights: 'Imitating animals: hopping like a rabbit, swimming like a fish, flying like a bird.',
          summaryTextbook: 'Playful movement rhyme where children pretend to fly like birds, leap like frogs, and walk like penguins.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-eng-ch4',
          chapterNumber: 4,
          title: 'Seeing without Seeing (Unit 2: Welcome to My World)',
          officialBookCode: 'bemr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bemr104.pdf',
          nepHighlights: 'Sensory awareness: touch, smell, hearing, empathy for visually challenged friends, Braille basics.',
          summaryTextbook: 'Blindfold sensory games where children recognize objects, flowers, and friends by touch and voice.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-eng-ch5',
          chapterNumber: 5,
          title: 'Come Back Soon (Unit 3: Going Places)',
          officialBookCode: 'bemr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bemr105.pdf',
          nepHighlights: 'Modes of transport: train, bus, boat, airplane, travel experiences.',
          summaryTextbook: 'A traveler sets off on a journey by train and plane while family waves goodbye and says "Come back soon!"',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-eng-ch6',
          chapterNumber: 6,
          title: 'Between Home and School (Unit 3: Going Places)',
          officialBookCode: 'bemr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bemr106.pdf',
          nepHighlights: 'Neighborhood landmarks, bakery, pond, post office, pedestrian road safety.',
          summaryTextbook: 'Observations along the daily morning walk from home to school: passing shops, blooming bougainvillea, and crossing zebra crossing.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-eng-ch7',
          chapterNumber: 7,
          title: 'This is My Town (Unit 3: Going Places)',
          officialBookCode: 'bemr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bemr107.pdf',
          nepHighlights: 'Community helpers: doctor, police, postal worker, market square, clean city.',
          summaryTextbook: 'Rhythmic description of town life: "In my town there is a street, in that street there is a house..."',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-eng-ch8',
          chapterNumber: 8,
          title: 'A Show of Clouds (Unit 4: Life Around Us)',
          officialBookCode: 'bemr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bemr108.pdf',
          nepHighlights: 'Cloud shapes (horses, castles, elephants), monsoon winds, weather changes.',
          summaryTextbook: 'Looking at floating monsoon clouds that morph into galloping horses, huge elephants, and fluffy sheep.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-eng-ch9',
          chapterNumber: 9,
          title: 'My Name (Unit 4: Life Around Us)',
          officialBookCode: 'bemr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bemr109.pdf',
          nepHighlights: 'Self-identity, unique names, writing one’s own name, diversity of names across India.',
          summaryTextbook: 'Celebrating each child’s unique name, origin stories of names, and writing one’s full name proudly.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-eng-ch10',
          chapterNumber: 10,
          title: 'The Crow (Unit 4: Life Around Us)',
          officialBookCode: 'bemr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bemr110.pdf',
          nepHighlights: 'Clever thirsty crow fable, water conservation, persistence and pebble dropping.',
          summaryTextbook: 'The thirsty crow drops pebbles into a narrow pitcher one by one until water level rises high enough to drink.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-eng-ch11',
          chapterNumber: 11,
          title: 'The Smart Monkey (Unit 4: Life Around Us)',
          officialBookCode: 'bemr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bemr111.pdf',
          nepHighlights: 'Wit and intelligence in forest, monkey outsmarting fierce crocodile.',
          summaryTextbook: 'A clever monkey on a jamun tree tricks a greedy crocodile through calm presence of mind.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-eng-ch12',
          chapterNumber: 12,
          title: 'Little Drops of Water (Unit 5: Harmony)',
          officialBookCode: 'bemr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bemr112.pdf',
          nepHighlights: 'Classic poem by Julia Carney: "Little drops of water, little grains of sand, make the mighty ocean and the pleasant land."',
          summaryTextbook: 'Teaches that small acts of kindness and words of love make our earth like the heaven above.',
          exerciseSolutions: [
            {
              id: 'c2-eng-ch12-q1',
              questionNo: 'Poem Moral Q1',
              questionText: 'What makes the mighty ocean according to the poem? (कविता के अनुसार विशाल सागर किससे बनता है?)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Read the opening line: "Little drops of water, little grains of sand...".',
                'चरण 1: छोटी-छोटी पानी की बूँदें मिलकर विशाल सागर बनाती हैं।'
              ],
              finalAnswer: 'Little drops of water make the mighty ocean. (पानी की छोटी बूँदें विशाल समुद्र बनाती हैं।)',
              keyTakeaway: 'Small continuous efforts lead to great achievements.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c2-eng-ch12-mcq1',
              question: 'What do little deeds of kindness do? (दयालुता के छोटे-छोटे कार्य क्या करते हैं?)',
              options: [
                'Make the earth pleasant and happy (धरती को सुंदर और खुशहाल बनाते हैं)',
                'Waste time',
                'Create noise',
                'Nothing'
              ],
              correctIndex: 0,
              explanation: 'Little acts of love and kindness bring peace and joy to everyone.'
            }
          ]
        },
        {
          id: 'c2-eng-ch13',
          chapterNumber: 13,
          title: 'We are all Indians (Unit 5: Harmony)',
          officialBookCode: 'bemr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bemr113.pdf',
          nepHighlights: 'National unity in diversity, multilingual greetings, tricolor flag, pride in India.',
          summaryTextbook: 'Children from Kashmir to Kanyakumari celebrate unity in diversity: speaking different mother tongues, wearing distinct dresses, yet united as Indians.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },

    // 3. Hindi — Sarangi (सारंगी)
    {
      id: 'c2-hindi',
      name: 'Hindi (Sarangi / सारंगी)',
      iconName: 'Sparkles',
      color: '#ec4899',
      description: '26 रोचक पाठ (5 इकाइयाँ): नीमा की दादी, घर, माला की चाँदी की पायल, माँ, थाथू और मैं, चींटा, टिल्लू जी, तीन दोस्त, दुनिया रंग-बिरंगी, कौन, बैंगनी जोजो, तोसिया का सपना, तालाब, बीज, किसान, मूली, बरसात और मेंढक, शेर और चूहे की दोस्ती, आउट, छुपन-छुपाई, हाथी साइकिल चला रहा था, चार दिशाएँ, चंदा मामा, गिरे ताल में चंदा मामा, सबसे बड़ा छाता, और बादल।',
      totalChapters: 26,
      coverImageUrl: 'https://ncert.nic.in/textbook/pdf/bhsr1cc.jpg',
      chapters: [
        {
          id: 'c2-h-ch1',
          chapterNumber: 1,
          title: 'नीमा की दादी (इकाई 1: परिवार)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr101.pdf',
          nepHighlights: 'दादी और पोती का गहरा रिश्ता, स्कूल से आकर बातें साझा करना, आपसी दुलार।',
          summaryTextbook: 'नीमा स्कूल से आते ही सीधे अपनी दादी के पास जाती है और पूरे दिन की सारी बातें विस्तार से बताती है। दादी उसके लिए स्वादिष्ट नाश्ता बनाती हैं।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch2',
          chapterNumber: 2,
          title: 'घर (इकाई 1: परिवार)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr102.pdf',
          nepHighlights: 'घर की सुरक्षा, छत, दीवारें, प्यार और अपनापन।',
          summaryTextbook: 'ईंट और पत्थर से बने मकान को कैसे परिवार का प्यार और साथ एक सुंदर घर में बदल देता है।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch3',
          chapterNumber: 3,
          title: 'माला की चाँदी की पायल (इकाई 1: परिवार)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr103.pdf',
          nepHighlights: 'पायल की छम-छम, नटखट बचपन, उत्सव का माहौल।',
          summaryTextbook: 'माला को नानी से चाँदी की सुंदर पायल उपहार में मिलती है और वह छम-छम नाचते हुए पूरे घर में घूमती है।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch4',
          chapterNumber: 4,
          title: 'माँ (इकाई 1: परिवार)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr104.pdf',
          nepHighlights: 'माँ की ममता, निस्वार्थ सेवा, सुबह जगाना, मीठी थपकी।',
          summaryTextbook: 'माँ के स्नेह, त्याग और वात्सल्य को समर्पित भावपूर्ण बाल कविता।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch5',
          chapterNumber: 5,
          title: 'थाथू और मैं (इकाई 1: परिवार)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr105.pdf',
          nepHighlights: 'दक्षिण भारतीय पारिवारिक परिवेश (थाथू = दादाजी), नारियल का पेड़, समुद्री हवा।',
          summaryTextbook: 'बच्चा अपने थाथू (दादाजी) के साथ समुद्र तट पर टहलने जाता है और शंख-सीपियाँ इकट्ठी करता है।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch6',
          chapterNumber: 6,
          title: 'चींटा (इकाई 1: परिवार)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr106.pdf',
          nepHighlights: 'मेहनती चींटा, भार उठाना, कभी हार न मानना।',
          summaryTextbook: 'नन्हा चींटा अपने से कई गुना भारी अनाज का दाना लेकर दीवार पर चढ़ता है और लगातार कोशिश से सफल होता है।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch7',
          chapterNumber: 7,
          title: 'टिल्लू जी (इकाई 1: परिवार)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr107.pdf',
          nepHighlights: 'हास्य बाल कविता, चुलबुले टिल्लू जी की शैतानियाँ।',
          summaryTextbook: 'टिल्लू जी के मजेदार किस्से और उनकी अनोखी बातों पर बच्चों की हँसी।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch8',
          chapterNumber: 8,
          title: 'तीन दोस्त (इकाई 2: रंग ही रंग)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr108.pdf',
          nepHighlights: 'प्राथमिक रंग (लाल, पीला, नीला), रंगों का मिलना और नए रंग बनना।',
          summaryTextbook: 'लाल, पीले और नीले रंग की दोस्ती—जब लाल और पीला मिलते हैं तो नारंगी बनता है, पीला और नीला मिलकर हरा बनता है।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch9',
          chapterNumber: 9,
          title: 'दुनिया रंग-बिरंगी (इकाई 2: रंग ही रंग)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr109.pdf',
          nepHighlights: 'प्रकृति के विविध रंग: हरा पेड़, नीला गगन, पीली सरसों, लाल गुलाब।',
          summaryTextbook: 'रंगों से भरी सुंदर प्रकृति की खोज और पर्यावरण का अवलोकन।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch10',
          chapterNumber: 10,
          title: 'कौन (इकाई 2: रंग ही रंग)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr110.pdf',
          nepHighlights: 'सोहनलाल द्विवेदी की प्रसिद्ध बाल पहेली कविता, चूहे की कुतरन।',
          summaryTextbook: 'किसने बटन हमारे कुतरे, किसने स्याही को बिखराया? कुतर-कुतर कर कागज़ सारे, रद्दी से घर को भर डाला—पहेली का उत्तर है नटखट चूहा।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch11',
          chapterNumber: 11,
          title: 'बैंगनी जोजो (इकाई 2: रंग ही रंग)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr111.pdf',
          nepHighlights: 'कल्पनाशीलता, बैंगनी रंग का खिलौना जोजो, रचनात्मक सोच।',
          summaryTextbook: 'जोजो नाम का अनोखा खिलौना जो केवल बैंगनी चीजें ही पसंद करता है।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch12',
          chapterNumber: 12,
          title: 'तोसिया का सपना (इकाई 2: रंग ही रंग)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr112.pdf',
          nepHighlights: 'सपनों की जादुई दुनिया, उड़ती मछलियाँ, बातें करते पेड़।',
          summaryTextbook: 'तोसिया रात को सपने में एक ऐसी जादुई दुनिया देखती है जहाँ सब कुछ उल्टे-पुल्टे मजेदार रंगों का होता है।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch13',
          chapterNumber: 13,
          title: 'तालाब (इकाई 3: हरी-भरी धरती)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr113.pdf',
          nepHighlights: 'जलीय जीवन, कमल का फूल, बगुला, मेंढक और स्वच्छ जल।',
          summaryTextbook: 'गाँव के तालाब का मनोहारी दृश्य जहाँ कमल खिलते हैं और बत्तखें तैरती हैं।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch14',
          chapterNumber: 14,
          title: 'बीज (इकाई 3: हरी-भरी धरती)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr114.pdf',
          nepHighlights: 'बीज का अंकुरण, मिट्टी, पानी और धूप से नन्हा पौधा बनना।',
          summaryTextbook: 'मिट्टी में बोया गया एक छोटा बीज कैसे धूप और पानी पाकर अंकुरित होता है और विशाल पेड़ बन जाता है।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch15',
          chapterNumber: 15,
          title: 'किसान (इकाई 3: हरी-भरी धरती)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr115.pdf',
          nepHighlights: 'अन्नदाता किसान, हल चलाना, फसल उगाना, श्रम का सम्मान।',
          summaryTextbook: 'धूप-बरसात में खेतों में पसीना बहाकर देश के लिए अनाज उगाने वाले कर्मठ किसान का वंदन।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch16',
          chapterNumber: 16,
          title: 'मूली (इकाई 3: हरी-भरी धरती)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr116.pdf',
          nepHighlights: 'बड़ी मूली खींचना, एकता में बल, सहयोग।',
          summaryTextbook: 'जमीन में धंसी विशाल मूली को निकालने के लिए दादाजी, दादी, पोती और कुत्ता सब मिलकर ताकत लगाते हैं और मूली बाहर आ जाती है।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch17',
          chapterNumber: 17,
          title: 'बरसात और मेंढक (इकाई 3: हरी-भरी धरती)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr117.pdf',
          nepHighlights: 'टर्र-टर्र की आवाज, बारिश का स्वागत, हरी-भरी धरती।',
          summaryTextbook: 'पहली फुहार पड़ते ही तालाब किनारे मेंढकों का समूह कैसे खुशी से टर्र-टर्र गाने लगता है।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch18',
          chapterNumber: 18,
          title: 'शेर और चूहे की दोस्ती (इकाई 4: मित्रता)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr118.pdf',
          nepHighlights: 'पंचतंत्र की प्रेरक कथा, कोई छोटा या बड़ा नहीं होता, उपकार का बदला।',
          summaryTextbook: 'शेर ने जिस नन्हे चूहे की जान बख्शी थी, उसी चूहे ने शिकारी के जाल को अपने पैने दाँतों से काटकर शेर को आज़ाद कराया।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch19',
          chapterNumber: 19,
          title: 'आउट (इकाई 4: मित्रता)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr119.pdf',
          nepHighlights: 'खेल भावना, नियमों का पालन, हार-जीत को खेल की तरह स्वीकारना।',
          summaryTextbook: 'गली क्रिकेट में आउट होने पर ईमानदारी से अपनी बारी छोड़ना और खेल भावना बनाए रखना।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch20',
          chapterNumber: 20,
          title: 'छुपन-छुपाई (इकाई 4: मित्रता)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr120.pdf',
          nepHighlights: 'पारंपरिक भारतीय खेल, गिनती गिनना, छिपने की जगह ढूँढना।',
          summaryTextbook: 'शाम के समय दोस्तों के साथ छुपम-छुपाई खेलने का मस्ती भरा खेल।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch21',
          chapterNumber: 21,
          title: 'हाथी साइकिल चला रहा था (इकाई 4: मित्रता)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr121.pdf',
          nepHighlights: 'हास्य व कल्पना की उड़ान, बाल कविता।',
          summaryTextbook: 'हल्की-फुल्की मजेदार हास्य कविता जहाँ भारी-भरकम गजराज छोटी सी साइकिल पर पैडल मारते नज़र आते हैं।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch22',
          chapterNumber: 22,
          title: 'चार दिशाएँ (इकाई 5: आकाश)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr122.pdf',
          nepHighlights: 'पूर्व, पश्चिम, उत्तर, दक्षिण; सूरज उगने और डूबने से दिशा ज्ञान।',
          summaryTextbook: 'उगते सूरज की ओर मुँह करके खड़े होने पर सामने पूर्व, पीठ पीछे पश्चिम, बाएँ उत्तर और दाएँ दक्षिण होता है।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch23',
          chapterNumber: 23,
          title: 'चंदा मामा (इकाई 5: आकाश)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr123.pdf',
          nepHighlights: 'चाँद का घटना-बढ़ना (कलाएँ), पूर्णिमा और अमावस्या।',
          summaryTextbook: 'चंदा मामा कभी पतले हँसिए जैसे तो कभी गोल थाली जैसे पूरे चमकते हैं।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch24',
          chapterNumber: 24,
          title: 'गिरे ताल में चंदा मामा (इकाई 5: आकाश)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr124.pdf',
          nepHighlights: 'पानी में परछाई/प्रतिबिंब का विज्ञान, बंदरों का भ्रम।',
          summaryTextbook: 'तालाब के पानी में चाँद का प्रतिबिंब देखकर बंदरों को लगता है कि चंदा मामा पानी में गिर गए हैं और वे उन्हें बचाने की कोशिश करते हैं।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch25',
          chapterNumber: 25,
          title: 'सबसे बड़ा छाता (इकाई 5: आकाश)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr125.pdf',
          nepHighlights: 'नीला आसमान रूपी छाता, सभी जीवों की रक्षा।',
          summaryTextbook: 'पूरी धरती को ढकने वाला नीला विशाल आसमान ही दुनिया का सबसे बड़ा छाता है।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c2-h-ch26',
          chapterNumber: 26,
          title: 'बादल (इकाई 5: आकाश)',
          officialBookCode: 'bhsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/bhsr126.pdf',
          nepHighlights: 'जल चक्र, बादलों का बनना, बिजली चमकना और पानी बरसना।',
          summaryTextbook: 'सूरज की गर्मी से समुद्र का जल भाप बनकर आसमान में बादल बनता है और फिर वर्षा के रूप में लौट आता है।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },

    // 4. Urdu — Shahnai (शहनाई / شہनाئی)
    {
      id: 'c2-urdu',
      name: 'Urdu (Shahnai / شہनाئی)',
      iconName: 'Feather',
      color: '#7c3aed',
      description: '19 Chapters: Elementary Urdu Reading, Vocabulary & Poems',
      totalChapters: 19,
      coverImageUrl: 'https://ncert.nic.in/textbook/pdf/bush1cc.jpg',
      chapters: Array.from({ length: 19 }, (_, i) => ({
        id: `c2-u-ch${i + 1}`,
        chapterNumber: i + 1,
        title: `Sabaq ${i + 1}: Shahnai Urdu Part-II (Lesson ${i + 1})`,
        officialBookCode: 'bush1',
        officialPdfUrl: `https://ncert.nic.in/textbook/pdf/bush1${String(i + 1).padStart(2, '0')}.pdf`,
        nepHighlights: 'Progressive Urdu reading, sight words, short poems and comprehension.',
        summaryTextbook: `Chapter ${i + 1} continues building foundational Urdu reading, sight words, and short stories.`,
        exerciseSolutions: [],
        competencyQuestions: [],
        quiz: []
      }))
    }
  ]
};
