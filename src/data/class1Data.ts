import type { ClassStageInfo } from './ncertData';

export const CLASS_1_DATA: ClassStageInfo = {
  classNumber: 1,
  stageName: 'Foundational',
  ageGroup: '5-6 Years',
  nepFocus: 'Foundational Literacy and Numeracy (FLN), Joyful Play-based Learning, Phonemic Awareness, Picture Stories & Visual Discovery',
  subjects: [
    // 1. English — Mridang (मृदंग)
    {
      id: 'c1-english',
      name: 'English (Mridang / मृदंग)',
      iconName: 'BookOpen',
      color: '#f59e0b',
      description: '9 Thematic Chapters under NEP 2020: Two Little Hands, Greetings, Picture Time, The Cap-seller and the Monkeys, A Farm, Fun with Pictures, The Food We Eat, The Four Seasons, and Anandi’s Rainbow.',
      totalChapters: 9,
      coverImageUrl: 'https://ncert.nic.in/textbook/pdf/aemr1cc.jpg',
      chapters: [
        {
          id: 'c1-eng-ch1',
          chapterNumber: 1,
          title: 'Two Little Hands (Unit 1: My Family and Me)',
          officialBookCode: 'aemr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/aemr101.pdf',
          nepHighlights: 'Action song, body parts awareness (hands, feet, eyes, head), rhythm and cooperative movement.',
          summaryTextbook: 'Engaging action rhyme celebrating body parts: two little hands go clap, clap, clap; two little legs go tap, tap, tap; two little eyes are open wide; and one little head goes side to side.',
          exerciseSolutions: [
            {
              id: 'c1-eng-ch1-q1',
              questionNo: 'Action Rhyme Q1',
              questionText: 'What do the two little hands do in the poem? (कविता में दो छोटे हाथ क्या करते हैं?)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Read the rhyme: "Two little hands go clap, clap, clap".',
                'Step 2: Hands are used for clapping together.',
                'चरण 1: कविता की पंक्ति पढ़ें: "Two little hands go clap, clap, clap".',
                'चरण 2: दोनों हाथ ताली (clap) बजाते हैं।'
              ],
              finalAnswer: 'The two little hands go clap, clap, clap! (दो छोटे हाथ ताली बजाते हैं।)',
              keyTakeaway: 'Hands are used to clap, write, draw, and hold things gently.'
            },
            {
              id: 'c1-eng-ch1-q2',
              questionNo: 'Action Rhyme Q2',
              questionText: 'How many eyes do we have and what do they do? (हमारे पास कितनी आँखें हैं और वे क्या करती हैं?)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: In the poem: "Two little eyes are open wide".',
                'Step 2: We have two eyes and they help us see the colorful world.',
                'चरण 1: हमारे पास 2 आँखें हैं।',
                'चरण 2: आँखें देखने में हमारी सहायता करती हैं।'
              ],
              finalAnswer: 'We have two eyes and they help us to see. (हमारी दो आँखें हैं जो देखने का काम करती हैं।)',
              keyTakeaway: 'Our eyes are important sensory organs that let us see everything around us.'
            }
          ],
          competencyQuestions: [
            {
              id: 'c1-eng-ch1-c1',
              questionNo: 'Body Awareness Task',
              questionText: 'Point to your head and move it side to side as said in the rhyme. Which body part turns side to side? (अपने सिर को छुएँ और दाएँ-बाएँ हिलाएँ। कौन सा अंग दाएँ-बाएँ घूमता है?)',
              difficulty: 'Easy',
              type: 'Competency',
              stepByStepSolution: [
                'Step 1: Locate your head supported by your neck.',
                'Step 2: Gently nod or turn side to side.',
                'चरण 1: अपने सिर को पहचानें जो गर्दन पर टिका होता है।',
                'चरण 2: कविता के अनुसार सिर दाएँ-बाएँ घूमता है।'
              ],
              finalAnswer: 'One little head goes side to side. (सिर दाएँ-बाएँ घूमता है।)',
              keyTakeaway: 'Gross and fine motor coordination develops by singing and acting out rhymes.'
            }
          ],
          quiz: [
            {
              id: 'c1-eng-ch1-mcq1',
              question: 'How many hands do we have? (हमारे कितने हाथ होते हैं?)',
              options: ['One (1)', 'Two (2)', 'Three (3)', 'Four (4)'],
              correctIndex: 1,
              explanation: 'Every human has two little hands (दो हाथ).'
            },
            {
              id: 'c1-eng-ch1-mcq2',
              question: 'What do the two little feet/legs do? (कविता में दो छोटे पैर क्या करते हैं?)',
              options: ['Tap, tap, tap', 'Clap, clap, clap', 'Fly, fly, fly', 'Sleep, sleep, sleep'],
              correctIndex: 0,
              explanation: '"Two little legs go tap, tap, tap" in the rhyme.'
            }
          ]
        },
        {
          id: 'c1-eng-ch2',
          chapterNumber: 2,
          title: 'Greetings (Unit 1: My Family and Me)',
          officialBookCode: 'aemr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/aemr102.pdf',
          nepHighlights: 'Polite words (Good morning, Namaste, Thank you, Bye-bye), daily routine & family greetings.',
          summaryTextbook: 'Teaches children daily social greetings: saying "Good morning" to teachers and elders, "Namaste", "Hello" to friends, and "Thank you" when someone helps.',
          exerciseSolutions: [
            {
              id: 'c1-eng-ch2-q1',
              questionNo: 'Greeting Habits Q1',
              questionText: 'What do you say when you meet your teacher in the morning? (सुबह शिक्षक से मिलने पर आप क्या कहते हैं?)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: When waking up or entering school in the morning, polite greeting is "Good morning".',
                'चरण 1: सुबह मिलने पर शिष्टाचार से "Good morning" या "नमस्ते" कहा जाता है।'
              ],
              finalAnswer: 'We say "Good morning, Teacher!" (हम "गुड मॉर्निंग" या "नमस्ते" कहते हैं।)',
              keyTakeaway: 'Greetings express love, respect, and warmth to everyone we meet.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c1-eng-ch2-mcq1',
              question: 'What do you say when someone gives you a gift? (जब कोई आपको उपहार देता है, तो आप क्या कहते हैं?)',
              options: ['Sorry', 'Thank you (धन्यवाद)', 'Good night', 'No'],
              correctIndex: 1,
              explanation: 'Always say "Thank you" to show gratitude when receiving help or a gift.'
            }
          ]
        },
        {
          id: 'c1-eng-ch3',
          chapterNumber: 3,
          title: 'Picture Time (Unit 2: Life Around Us)',
          officialBookCode: 'aemr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/aemr103.pdf',
          nepHighlights: 'Visual storytelling, vocabulary building, describing neighborhood and classroom objects.',
          summaryTextbook: 'Visual learning through rich illustrations of classroom, playground, school bag, water bottle, pencil, and outdoor trees.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-eng-ch4',
          chapterNumber: 4,
          title: 'The Cap-seller and the Monkeys (Unit 2: Life Around Us)',
          officialBookCode: 'aemr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/aemr104.pdf',
          nepHighlights: 'Classic Indian folk story, clever problem-solving, imitation behavior of monkeys.',
          summaryTextbook: 'A cap-seller rests under a tree. Monkeys take his colorful caps. He notices monkeys imitate him, throws his cap down, and all monkeys throw theirs down too.',
          exerciseSolutions: [
            {
              id: 'c1-eng-ch4-q1',
              questionNo: 'Story Comprehension Q1',
              questionText: 'Who took the cap-seller’s caps when he was sleeping? (टोपी वाले के सोते समय टोपियाँ किसने ले ली थीं?)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: The cap-seller fell asleep under a big banyan tree.',
                'Step 2: Playful monkeys on the branches came down and took the caps.',
                'चरण 1: टोपी बेचने वाला पेड़ के नीचे सो गया।',
                'चरण 2: पेड़ पर बैठे बंदरों ने टोपियाँ उठा लीं।'
              ],
              finalAnswer: 'The monkeys took the caps. (पेड़ पर रहने वाले बंदरों ने टोपियाँ लीं।)',
              keyTakeaway: 'Quick thinking and calm observation solve difficult problems.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c1-eng-ch4-mcq1',
              question: 'How did the cap-seller get his caps back? (टोपी वाले को अपनी टोपियाँ कैसे वापस मिलीं?)',
              options: [
                'He threw stones at monkeys',
                'He threw his own cap on the ground (अपनी टोपी नीचे फेंक दी)',
                'He climbed the tree',
                'He started crying'
              ],
              correctIndex: 1,
              explanation: 'Because monkeys imitate humans, when he threw his cap down, they threw theirs too!'
            }
          ]
        },
        {
          id: 'c1-eng-ch5',
          chapterNumber: 5,
          title: 'A Farm (Unit 2: Life Around Us)',
          officialBookCode: 'aemr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/aemr105.pdf',
          nepHighlights: 'Domestic animals (cows, goats, hens, ducks), animal sounds, rural ecology.',
          summaryTextbook: 'Explores sounds and animals on a farm: cows that moo, ducks that quack, hens that cluck, and dogs that bark.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-eng-ch6',
          chapterNumber: 6,
          title: 'Fun with Pictures (Unit 3: Food)',
          officialBookCode: 'aemr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/aemr106.pdf',
          nepHighlights: 'Color recognition, drawing shapes, matching fruits and vegetables.',
          summaryTextbook: 'Interactive visual picture games matching fruits (mango, banana, apple) and vegetables (carrot, tomato, peas).',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-eng-ch7',
          chapterNumber: 7,
          title: 'The Food We Eat (Unit 3: Food)',
          officialBookCode: 'aemr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/aemr107.pdf',
          nepHighlights: 'Healthy food habits, sharing meals, cleanliness before eating, seasonal fruits.',
          summaryTextbook: 'Teaches children to wash hands before meals, eat fresh green vegetables, drink milk, chew food properly, and share meals with friends.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-eng-ch8',
          chapterNumber: 8,
          title: 'The Four Seasons (Unit 4: Seasons)',
          officialBookCode: 'aemr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/aemr108.pdf',
          nepHighlights: 'Summer, Monsoon (Rainy), Autumn & Winter, clothes suitable for seasons.',
          summaryTextbook: 'Introduces the four seasons in India: hot summer with cool drinks, rainy season with umbrellas and paper boats, pleasant autumn, and cold winter with woollen sweaters.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-eng-ch9',
          chapterNumber: 9,
          title: 'Anandi’s Rainbow (Unit 4: Seasons)',
          officialBookCode: 'aemr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/aemr109.pdf',
          nepHighlights: 'Seven colors of the rainbow (VIBGYOR), imagination, nature drawing.',
          summaryTextbook: 'Anandi wakes up to see a bright, beautiful rainbow across the clear blue sky. She paints her garden flowers using the vibrant colors of the rainbow: violet, indigo, blue, green, yellow, orange, and red.',
          exerciseSolutions: [
            {
              id: 'c1-eng-ch9-q1',
              questionNo: 'Rainbow Comprehension',
              questionText: 'How many colors does a rainbow have? (इंद्रधनुष में कितने रंग होते हैं?)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: A rainbow is made of seven vibrant colors (VIBGYOR).',
                'चरण 1: इंद्रधनुष में 7 रंग होते हैं: बैंगनी, जामुनी, नीला, हरा, पीला, नारंगी और लाल।'
              ],
              finalAnswer: 'A rainbow has 7 colors. (इंद्रधनुष में 7 रंग होते हैं।)',
              keyTakeaway: 'The rainbow appears when sunlight passes through raindrops in the sky.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c1-eng-ch9-mcq1',
              question: 'When do we usually see a rainbow in the sky? (आमतौर पर आसमान में इंद्रधनुष कब दिखाई देता है?)',
              options: [
                'After rain when sun shines (बारिश के बाद जब धूप निकलती है)',
                'In dark night',
                'Inside a room',
                'During deep sleep'
              ],
              correctIndex: 0,
              explanation: 'A rainbow forms when sunlight shines through tiny raindrops in the atmosphere.'
            }
          ]
        }
      ]
    },

    // 2. Mathematics — Joyful-Mathematics (आनंदमय गणित)
    {
      id: 'c1-maths',
      name: 'Mathematics (Joyful-Mathematics / आनंदमय गणित)',
      iconName: 'Calculator',
      color: '#8b5cf6',
      description: '13 Foundational Chapters: Finding the Furry Cat!, What is Long? What is Round?, Mango Treat, Making 10, How Many?, Vegetable Farm, Lina’s Family, Fun with Numbers, Utsav, How do I Spend my Day?, How Many Times?, How Much Can We Spend?, and So Many Toys and Puzzles.',
      totalChapters: 13,
      coverImageUrl: 'https://ncert.nic.in/textbook/pdf/aejm1cc.jpg',
      chapters: [
        {
          id: 'c1-m-ch1',
          chapterNumber: 1,
          title: 'Finding the Furry Cat! (Pre-number Concepts)',
          officialBookCode: 'aejm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/aejm101.pdf',
          nepHighlights: 'Spatial relationships: inside/outside, top/bottom, above/below, near/far, bigger/smaller.',
          summaryTextbook: 'Playful hide-and-seek story tracking a fluffy kitten under the bed, on top of the table, inside the basket, and behind the door to develop spatial spatial awareness.',
          exerciseSolutions: [
            {
              id: 'c1-m-ch1-q1',
              questionNo: 'Spatial Concept Q1',
              questionText: 'Where is the kitten when she sleeps inside her basket? (टोकरी के अंदर बिल्ली का बच्चा कहाँ है?)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Look at the basket boundaries.',
                'Step 2: The kitten is positioned "inside" the basket.',
                'चरण 1: टोकरी की सीमा देखें।',
                'चरण 2: बिल्ली का बच्चा टोकरी के अंदर (inside) है।'
              ],
              finalAnswer: 'The kitten is inside the basket. (बिल्ली का बच्चा टोकरी के अंदर है।)',
              keyTakeaway: 'Understanding position words like inside, outside, top, and bottom builds foundational geometry.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c1-m-ch1-mcq1',
              question: 'Which is bigger: an Elephant or an Ant? (हाथी और चींटी में कौन बड़ा है?)',
              options: ['Elephant (हाथी)', 'Ant (चींटी)', 'Both are same', 'None'],
              correctIndex: 0,
              explanation: 'An elephant is much bigger in size than a small ant.'
            }
          ]
        },
        {
          id: 'c1-m-ch2',
          chapterNumber: 2,
          title: 'What is Long? What is Round? (Shapes & Objects)',
          officialBookCode: 'aejm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/aejm102.pdf',
          nepHighlights: 'Properties of objects: rolling vs sliding, long vs round, circle, sphere, cylinder in daily life.',
          summaryTextbook: 'Children explore everyday objects: a pencil is long and rolls, a coin is round and slides or rolls, a ball rolls, and a ruler slides.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-m-ch3',
          chapterNumber: 3,
          title: 'Mango Treat (Numbers 1 to 9)',
          officialBookCode: 'aejm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/aejm103.pdf',
          nepHighlights: 'Counting objects 1 to 9, one-to-one matching, number symbols, more or less.',
          summaryTextbook: 'Counting delicious ripe mangoes falling from a branch from 1 to 9 with number rhymes and finger counts.',
          exerciseSolutions: [
            {
              id: 'c1-m-ch3-q1',
              questionNo: 'Counting Mangoes',
              questionText: 'Count the fingers on one hand. How many fingers do you see? (अपने एक हाथ की उंगलियाँ गिनें। कितनी हैं?)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Count: 1 (thumb), 2 (index), 3 (middle), 4 (ring), 5 (little).',
                'चरण 1: 1, 2, 3, 4, 5 उंगलियाँ।'
              ],
              finalAnswer: '5 fingers on one hand. (एक हाथ में 5 उंगलियाँ होती हैं।)',
              keyTakeaway: 'Counting establishes a one-to-one correspondence between items and numbers.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c1-m-ch3-mcq1',
              question: 'Which number comes right after 4? (संख्या 4 के ठीक बाद कौन सी संख्या आती है?)',
              options: ['3', '5', '6', '2'],
              correctIndex: 1,
              explanation: 'Counting: 1, 2, 3, 4, 5. So 5 comes immediately after 4.'
            }
          ]
        },
        {
          id: 'c1-m-ch4',
          chapterNumber: 4,
          title: 'Making 10 (Numbers 10 to 20)',
          officialBookCode: 'aejm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/aejm104.pdf',
          nepHighlights: 'Concept of a bundle of 10, ten frame, place value building block, numbers up to 20.',
          summaryTextbook: 'Grouping 10 loose sticks into 1 bundle (ten) and loose sticks (ones). 1 ten and 3 ones make 13.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-m-ch5',
          chapterNumber: 5,
          title: 'How Many? (Addition & Subtraction within 20)',
          officialBookCode: 'aejm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/aejm105.pdf',
          nepHighlights: 'Addition as joining/combining (+), subtraction as taking away (-), zero as nothing left.',
          summaryTextbook: '3 birds sit on a branch, 2 more join -> 3 + 2 = 5 birds. 5 apples in a basket, 2 eaten -> 5 - 2 = 3 apples left.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-m-ch6',
          chapterNumber: 6,
          title: 'Vegetable Farm (Addition & Subtraction Stories)',
          officialBookCode: 'aejm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/aejm106.pdf',
          nepHighlights: 'Story sums, harvesting carrots, tomatoes and cauliflowers, practical word problems.',
          summaryTextbook: 'Counting vegetables harvested from garden plots and solving simple real-life word stories.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-m-ch7',
          chapterNumber: 7,
          title: 'Lina’s Family (Measurement: Length, Weight, Capacity)',
          officialBookCode: 'aejm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/aejm107.pdf',
          nepHighlights: 'Non-standard units (handspan, foot, pace), heavier/lighter, holds more/holds less.',
          summaryTextbook: 'Lina measures table length with handspans, compares heavy watermelon with light lemon, and observes which jug holds more water.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-m-ch8',
          chapterNumber: 8,
          title: 'Fun with Numbers (Numbers 21 to 99)',
          officialBookCode: 'aejm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/aejm108.pdf',
          nepHighlights: 'Counting in tens, 2 tens and 5 ones = 25, writing number names up to 99.',
          summaryTextbook: 'Expanding number sense with beads, tens chains, snakes and ladders board games up to 99.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-m-ch9',
          chapterNumber: 9,
          title: 'Utsav (Patterns with Shapes & Colors)',
          officialBookCode: 'aejm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/aejm109.pdf',
          nepHighlights: 'Repeating patterns (circle, square, circle...), sari borders, rangoli designs, nature patterns.',
          summaryTextbook: 'Festival decorations featuring repeating geometric patterns in torans, rangoli, and flower garlands.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-m-ch10',
          chapterNumber: 10,
          title: 'How do I Spend my Day? (Time & Sequence)',
          officialBookCode: 'aejm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/aejm110.pdf',
          nepHighlights: 'Sequence of daily events: morning wake up, school, afternoon lunch, evening play, night sleep.',
          summaryTextbook: 'Understanding chronology: earlier vs later, day vs night, order of brushing teeth, bathing, and having breakfast.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-m-ch11',
          chapterNumber: 11,
          title: 'How Many Times? (Early Multiplication by Grouping)',
          officialBookCode: 'aejm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/aejm111.pdf',
          nepHighlights: 'Repeated addition, equal groups of 2, 3, or 5 objects.',
          summaryTextbook: '4 plates with 2 laddus each -> 2 + 2 + 2 + 2 = 8 laddus. Introduction to grouping.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-m-ch12',
          chapterNumber: 12,
          title: 'How Much Can We Spend? (Indian Currency Notes & Coins)',
          officialBookCode: 'aejm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/aejm112.pdf',
          nepHighlights: 'Recognizing ₹1, ₹2, ₹5, ₹10, ₹20 coins and notes, buying a pencil or eraser.',
          summaryTextbook: 'Visiting the neighborhood stationery shop to buy a pencil for ₹5 and paying with ₹2 and ₹1 coins.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-m-ch13',
          chapterNumber: 13,
          title: 'So Many Toys and Puzzles (Data Handling)',
          officialBookCode: 'aejm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/aejm113.pdf',
          nepHighlights: 'Sorting objects into categories, counting frequency, answering simple questions from a picture chart.',
          summaryTextbook: 'Counting how many toy cars, how many teddy bears, and how many balls are in the toy chest.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },

    // 3. Hindi — Sarangi (सारंगी)
    {
      id: 'c1-hindi',
      name: 'Hindi (Sarangi / सारंगी)',
      iconName: 'Sparkles',
      color: '#ec4899',
      description: '19 आनंदमय पाठ (5 इकाइयाँ): मीना का परिवार, दादा-दादी, रीना का दिन, रानी भी, मिठाई, तीन साथी, वाह मेरे घोड़े!, खतरे में साँप, आलू की सड़क, झूलम-झूली, भुट्टे, फूली रोटी, मेला, बरखा और मेघा, होली, जन्मदिवस पर पेड़ लगाओ, वायु, कितनी प्यारी है ये दुनिया, और चाँद का बच्चा।',
      totalChapters: 19,
      coverImageUrl: 'https://ncert.nic.in/textbook/pdf/ahsr1cc.jpg',
      chapters: [
        {
          id: 'c1-h-ch1',
          chapterNumber: 1,
          title: 'मीना का परिवार (इकाई 1: परिवार)',
          officialBookCode: 'ahsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ahsr101.pdf',
          nepHighlights: 'परिवार के सदस्यों का परिचय, रिश्तों का सम्मान, घर का परिवेश।',
          summaryTextbook: 'मीना अपने परिवार के सदस्यों से मिलवाती है: उसके दादा-दादी, माता-पिता और छोटा भाई। सभी मिलकर हँसते-खेलते और एक-दूसरे की मदद करते हैं।',
          exerciseSolutions: [
            {
              id: 'c1-h-ch1-q1',
              questionNo: 'पाठ अभ्यास 1',
              questionText: 'मीना के परिवार में कौन-कौन रहता है?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'चरण 1: पाठ में मीना अपने माता-पिता, दादा-दादी और भाई का परिचय कराती है।',
                'चरण 2: वे सब एक साथ प्यार से रहते हैं।'
              ],
              finalAnswer: 'मीना के परिवार में उसके दादा-दादी, माता-पिता और छोटा भाई रहते हैं।',
              keyTakeaway: 'परिवार में सभी सदस्य एक-दूसरे से प्रेम और सम्मान करते हैं।'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c1-h-ch1-mcq1',
              question: 'परिवार में दादा-दादी की क्या भूमिका होती है?',
              options: ['कहानियाँ सुनाना व आशीर्वाद देना', 'झगड़ा करना', 'चुप रहना', 'कुछ नहीं'],
              correctIndex: 0,
              explanation: 'दादा-दादी बच्चों को प्यार, कहानियाँ और अच्छे संस्कार देते हैं।'
            }
          ]
        },
        {
          id: 'c1-h-ch2',
          chapterNumber: 2,
          title: 'दादा-दादी (इकाई 1: परिवार)',
          officialBookCode: 'ahsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ahsr102.pdf',
          nepHighlights: 'बुजुर्गों के प्रति आदर, दादी की मीठी लोरी, दादाजी का चश्मा।',
          summaryTextbook: 'बच्चों का अपने दादा-दादी के साथ आत्मीय संबंध, दादाजी की लाठी, दादी के हाथ की स्वादिष्ट खीर और प्यार भरी कहानियाँ।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-h-ch3',
          chapterNumber: 3,
          title: 'रीना का दिन (इकाई 1: परिवार)',
          officialBookCode: 'ahsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ahsr103.pdf',
          nepHighlights: 'दैनिक दिनचर्या, सुबह उठना, दाँत साफ करना, विद्यालय जाना।',
          summaryTextbook: 'रीना की सुबह से लेकर शाम तक की अच्छी आदतें और स्कूल की गतिविधियाँ।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-h-ch4',
          chapterNumber: 4,
          title: 'रानी भी (इकाई 1: परिवार)',
          officialBookCode: 'ahsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ahsr104.pdf',
          nepHighlights: 'समानता, खेलने की उमंग, छोटे बच्चों का उत्साह।',
          summaryTextbook: 'बड़ी बहन और भाई के साथ छोटी रानी भी खेल में शामिल होना चाहती है और दौड़कर सबको हँसा देती है।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-h-ch5',
          chapterNumber: 5,
          title: 'मिठाई (इकाई 2: जीव-जगत)',
          officialBookCode: 'ahsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ahsr105.pdf',
          nepHighlights: 'चींटी और मिठाई, मिलकर भोजन इकट्ठा करना, सहयोग।',
          summaryTextbook: 'फर्श पर गिरी मिठाई की बूंद को देखकर नन्हीं चींटी कैसे अपने साथियों को बुलाती है और सब मिलकर उसे ले जाते हैं।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-h-ch6',
          chapterNumber: 6,
          title: 'तीन साथी (इकाई 2: जीव-जगत)',
          officialBookCode: 'ahsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ahsr106.pdf',
          nepHighlights: 'दोस्ती, आपसी सहयोग और पशु-पक्षियों की दुनिया।',
          summaryTextbook: 'तीन अलग-अलग जीवों की सच्ची मित्रता और एक-दूसरे की मदद करने की रोचक कहानी।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-h-ch7',
          chapterNumber: 7,
          title: 'वाह, मेरे घोड़े! (इकाई 2: जीव-जगत)',
          officialBookCode: 'ahsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ahsr107.pdf',
          nepHighlights: 'काल्पनिक खेल, काठ का घोड़ा, लयबद्ध बालगीत।',
          summaryTextbook: 'बच्चों का छड़ी या काठ के घोड़े पर बैठकर सरपट दौड़ने का आनंदमयी बालगीत।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-h-ch8',
          chapterNumber: 8,
          title: 'खतरे में साँप (इकाई 2: जीव-जगत)',
          officialBookCode: 'ahsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ahsr108.pdf',
          nepHighlights: 'पर्यावरण संरक्षण, जीवों के प्रति दया, डर से मुक्ति।',
          summaryTextbook: 'साँप को देखकर डरने के बजाय उसे बिना नुकसान पहुँचाए सुरक्षित जंगल की ओर जाने देने की सीख।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-h-ch9',
          chapterNumber: 9,
          title: 'आलू की सड़क (इकाई 3: हमारा खान-पान)',
          officialBookCode: 'ahsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ahsr109.pdf',
          nepHighlights: 'मजेदार बाल कविता, आलू का लुढ़कना, सब्जियों की पहचान।',
          summaryTextbook: 'ठेले से गिरे आलू सड़क पर लुढ़कते-लुढ़कते कैसे बच्चों के खेल का हिस्सा बन जाते हैं।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-h-ch10',
          chapterNumber: 10,
          title: 'झूलम-झूली (इकाई 3: हमारा खान-पान)',
          officialBookCode: 'ahsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ahsr110.pdf',
          nepHighlights: 'पेड़ की डाल पर झूला, प्रकृति का आनंद।',
          summaryTextbook: 'पेड़ों की शाखाओं पर झूले डालकर आम के बगीचे में झूलने का प्यारा दृश्य।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-h-ch11',
          chapterNumber: 11,
          title: 'भुट्टे (इकाई 3: हमारा खान-पान)',
          officialBookCode: 'ahsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ahsr111.pdf',
          nepHighlights: 'भुना हुआ गर्म भुट्टा, नींबू और नमक का स्वाद, बारिश का मौसम।',
          summaryTextbook: 'बरसात के दिनों में अंगीठी पर भुनते भुट्टों की खुशबू और परिवार के साथ खाने का मज़ा।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-h-ch12',
          chapterNumber: 12,
          title: 'फूली रोटी (इकाई 3: हमारा खान-पान)',
          officialBookCode: 'ahsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ahsr112.pdf',
          nepHighlights: 'तवे पर फूलती गोल-गोल रोटी, माँ का दुलार, पौष्टिक भोजन।',
          summaryTextbook: 'माँ कैसे बेलन से गोल-गोल रोटी बनाती है और तवे पर डालते ही वह गुब्बारे जैसी फूल जाती है।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-h-ch13',
          chapterNumber: 13,
          title: 'मेला (इकाई 4: त्योहार और मेले)',
          officialBookCode: 'ahsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ahsr113.pdf',
          nepHighlights: 'गाँव का मेला, खिलौने, जलेबी और चरखी का झूला।',
          summaryTextbook: 'गाँव के मेले में रंग-बिरंगे गुब्बारे, सीटी, मिट्टी के खिलौने और दादाजी की उंगली पकड़कर घूमने का रोमांच।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-h-ch14',
          chapterNumber: 14,
          title: 'बरखा और मेघा (इकाई 4: त्योहार और मेले)',
          officialBookCode: 'ahsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ahsr114.pdf',
          nepHighlights: 'काले बादलों की गड़गड़ाहट, बारिश की बूँदें, कागज़ की नाव।',
          summaryTextbook: 'आसमान में काले बादल आते ही रिमझिम पानी बरसने लगता है और बच्चे पानी में कागज़ की नाव तैराते हैं।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-h-ch15',
          chapterNumber: 15,
          title: 'होली (इकाई 4: त्योहार और मेले)',
          officialBookCode: 'ahsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ahsr115.pdf',
          nepHighlights: 'रंगों का त्योहार, गुलाल, पिचकारी, भाईचारा और मीठी गुझिया।',
          summaryTextbook: 'होली पर रंग और गुलाल लगाने की खुशियाँ, ढोल की थाप और सबको गले लगाने का पारंपरिक संदेश।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-h-ch16',
          chapterNumber: 16,
          title: 'जन्मदिवस पर पेड़ लगाओ (इकाई 4: त्योहार और मेले)',
          officialBookCode: 'ahsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ahsr116.pdf',
          nepHighlights: 'पर्यावरण चेतना, जन्मदिन पर पौधा रोपना, प्रकृति से प्रेम।',
          summaryTextbook: 'जन्मदिन पर केवल मोमबत्ती बुझाने के बजाय एक नया हरा-भरा पौधा लगाने और उसकी देखभाल करने की अनमोल सीख।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-h-ch17',
          chapterNumber: 17,
          title: 'वायु (इकाई 5: हरी-भरी दुनिया)',
          officialBookCode: 'ahsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ahsr117.pdf',
          nepHighlights: 'हवा का महत्व, साँस लेना, पतंग उड़ाना, फिरकी घुमाना।',
          summaryTextbook: 'हवा दिखाई नहीं देती पर हर जगह महसूस होती है—पेड़ों के पत्तों को हिलाती है और पतंग को आसमान में उड़ाती है।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-h-ch18',
          chapterNumber: 18,
          title: 'कितनी प्यारी है ये दुनिया (इकाई 5: हरी-भरी दुनिया)',
          officialBookCode: 'ahsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ahsr118.pdf',
          nepHighlights: 'प्रकृति की सुंदरता, नदियाँ, पहाड़, फूल और तितलियाँ।',
          summaryTextbook: 'सुंदर धरती, महकते फूल, उड़ती तितलियाँ और चहकती चिड़ियों के साथ इस खूबसूरत संसार की प्रशंसा।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c1-h-ch19',
          chapterNumber: 19,
          title: 'चाँद का बच्चा (इकाई 5: हरी-भरी दुनिया)',
          officialBookCode: 'ahsr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ahsr119.pdf',
          nepHighlights: 'कल्पनाशीलता, रात का आकाश, चमकते तारे और चंदा मामा।',
          summaryTextbook: 'रात के समय आकाश में चमकते चाँद और तारों को देखकर बच्चों के मन में उठने वाली मधुर कल्पनाएँ।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },

    // 4. Urdu — Shahnai (शहनाई / شہنائی)
    {
      id: 'c1-urdu',
      name: 'Urdu (Shahnai / شہنائی)',
      iconName: 'Feather',
      color: '#7c3aed',
      description: '18 Chapters: Foundational Urdu Alphabet, Visual Sounds & Stories',
      totalChapters: 18,
      coverImageUrl: 'https://ncert.nic.in/textbook/pdf/aush1cc.jpg',
      chapters: Array.from({ length: 18 }, (_, i) => ({
        id: `c1-u-ch${i + 1}`,
        chapterNumber: i + 1,
        title: `Sabaq ${i + 1}: Shahnai Urdu Part ${i + 1}`,
        officialBookCode: 'aush1',
        officialPdfUrl: `https://ncert.nic.in/textbook/pdf/aush1${String(i + 1).padStart(2, '0')}.pdf`,
        nepHighlights: 'Early foundational Urdu letters, phonetics, and rhyming lines.',
        summaryTextbook: `Chapter ${i + 1} introduces foundational Urdu vocabulary, letter tracing, and playful rhymes.`,
        exerciseSolutions: [],
        competencyQuestions: [],
        quiz: []
      }))
    }
  ]
};
