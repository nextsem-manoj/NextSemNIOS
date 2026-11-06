import type { ClassStageInfo } from './ncertData';

export const CLASS_5_DATA: ClassStageInfo = {
  classNumber: 5,
  stageName: 'Preparatory',
  ageGroup: '10-11 Years',
  nepFocus: 'Foundational Numeracy, Experiential EVS, Bilingual Storytelling, Real-world Observations & Critical Curiosity',
  subjects: [
    // 1. Mathematics (Math Mela / गणित मेला - NEP 2024 eemm1)
    {
      id: 'c5-maths',
      name: 'Mathematics (Math Mela / गणित मेला)',
      iconName: 'Calculator',
      color: '#14b8a6',
      description: '15 Chapters: We the Travellers—I, Fractions, Angles as Turns, We the Travellers—II, Far and Near, The Dairy Farm, Shapes and Patterns, Weight and Capacity, Coconut Farm, Symmetrical Designs, Grandmother\'s Quilt, Racing Seconds, Animal Jumps, Maps and Locations, Data Through Pictures.',
      totalChapters: 15,
      coverImageUrl: 'https://ncert.nic.in/textbook/pdf/eemm1cc.jpg',
      chapters: [
        {
          id: 'c5-m-ch1',
          chapterNumber: 1,
          title: 'We the Travellers—I (हम यात्री—भाग 1)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm101.pdf',
          nepHighlights: 'Large numbers, travel itineraries, distance calculation, speed, multi-digit operations in transit contexts.',
          summaryTextbook: 'Students explore journeys across India—calculating bus and train travel distances, ticketing costs, fuel consumption, and scheduling across diverse landscapes.',
          exerciseSolutions: [
            {
              id: 'c5-m-ch1-q1',
              questionNo: 'Page 5 Journey Math',
              questionText: 'A bus travels from Delhi to Jaipur, covering a distance of 280 km in 5 hours. What is the average speed of the bus per hour? (एक बस दिल्ली से जयपुर 280 किमी की दूरी 5 घंटे में तय करती है। बस की औसत चाल प्रति घंटा क्या है?)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Distance = 280 km, Time = 5 hours',
              formula: 'Speed = Distance ÷ Time',
              stepByStepSolution: [
                'Step 1: Divide total distance by total time taken.',
                'Step 2: 280 ÷ 5 = 56 km/h.',
                'चरण 1: कुल दूरी को कुल समय से भाग दें: 280 ÷ 5 = 56 किमी/घंटा।'
              ],
              finalAnswer: '56 km/h (56 किमी प्रति घंटा)',
              keyTakeaway: 'Average speed equals total distance divided by elapsed travel time.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c5-m-ch1-mcq1',
              question: 'If a train covers 60 km in 1 hour, how far will it travel in 4.5 hours?',
              options: ['240 km', '270 km', '300 km', '180 km'],
              correctIndex: 1,
              explanation: '60 × 4.5 = 270 km.'
            }
          ]
        },
        {
          id: 'c5-m-ch2',
          chapterNumber: 2,
          title: 'Fractions (भिन्न)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm102.pdf',
          nepHighlights: 'Visual fractions, parts of a whole, numerator and denominator, equivalent fractions, comparing halves and quarters.',
          summaryTextbook: 'Using chapatis, chocolate bars, paper folding, and flag designs to understand fractions as equal parts of an object or a collection.',
          exerciseSolutions: [
            {
              id: 'c5-m-ch2-q1',
              questionNo: 'Page 18 Equivalent Fractions',
              questionText: 'What fraction of a pizza remains if 3 out of 8 equal slices are eaten? (यदि एक पिज्जा के 8 बराबर टुकड़ों में से 3 टुकड़े खा लिए जाएँ, तो कितना हिस्सा बचेगा?)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Total slices = 8, Eaten slices = 3',
              formula: 'Remaining = 1 - (3/8) = 5/8',
              stepByStepSolution: [
                'Step 1: Whole pizza = 8/8.',
                'Step 2: Subtract eaten slices: 8 - 3 = 5 slices.',
                'Step 3: Remaining fraction = 5/8.',
                'चरण 1: कुल 8 टुकड़े थे, 3 खा लिए -> 8 - 3 = 5 टुकड़े बचे।',
                'चरण 2: शेष भिन्न = 5/8।'
              ],
              finalAnswer: '5/8 (आठ में से पाँच भाग)',
              keyTakeaway: 'Fraction represents parts considered divided by total equal parts.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch3',
          chapterNumber: 3,
          title: 'Angles as Turns (कोण और मोड़)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm103.pdf',
          nepHighlights: 'Right angles (90°), acute and obtuse angles, quarter turn, half turn, angle tester, clock angles.',
          summaryTextbook: 'Investigating angles in yoga poses, clock hands, opening doors, scissors, and comparing turns made while facing different directions.',
          exerciseSolutions: [
            {
              id: 'c5-m-ch3-q1',
              questionNo: 'Clock Turns',
              questionText: 'What angle is formed by the hands of a clock at 3 o\'clock? (घड़ी में 3 बजे सुइयों के बीच कौन सा कोण बनता है?)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: At 3 o\'clock, the hour hand points to 3 and minute hand points to 12.',
                'Step 2: The angle between 12 and 3 is exactly one-quarter of a circle (90° or Right Angle).',
                'चरण 1: 3 बजे घंटे की सुई 3 पर और मिनट की सुई 12 पर होती है।',
                'चरण 2: यह ठीक 90° का समकोण बनाती है।'
              ],
              finalAnswer: '90° — Right Angle (समकोण)',
              keyTakeaway: 'A quarter turn of 90 degrees creates a right angle.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch4',
          chapterNumber: 4,
          title: 'We the Travellers—II (हम यात्री—भाग 2)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm104.pdf',
          nepHighlights: 'Multi-step arithmetic, money budgeting, currency exchange, hotel tariffs, and group expenses.',
          summaryTextbook: 'Continuing the travel story with travel budgets, hotel room bookings, meal tabs, split expenses, and comparing travel costs between air, rail, and bus routes.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch5',
          chapterNumber: 5,
          title: 'Far and Near (दूर और पास)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm105.pdf',
          nepHighlights: 'Estimating distances, scale on maps (1 cm = 100 km), visual spatial perception, navigation.',
          summaryTextbook: 'Reading Indian state maps, measuring straight-line distance with a ruler, calculating actual ground distance using map scale, and planning shortest road routes.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch6',
          chapterNumber: 6,
          title: 'The Dairy Farm (दुग्धशाला / डेयरी फार्म)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm106.pdf',
          nepHighlights: 'Liquid capacity (liters and milliliters), rate calculation (price per liter), profit and revenue in dairy farming.',
          summaryTextbook: 'A cooperative dairy farm where milk from hundreds of cows is measured, pasteurized, packaged, and sold—calculating daily milk yields, fat percentages, and cooperative earnings.',
          exerciseSolutions: [
            {
              id: 'c5-m-ch6-q1',
              questionNo: 'Dairy Yield Q1',
              questionText: 'A dairy cow gives 12 liters of milk each day. How many liters of milk will 15 cows produce in one week (7 days)? (एक गाय रोज़ 12 लीटर दूध देती है। 15 गायें एक सप्ताह (7 दिन) में कितना दूध देंगी?)',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: '1 cow/day = 12 L, Cows = 15, Days = 7',
              formula: 'Total = 12 × 15 × 7',
              stepByStepSolution: [
                'Step 1: Daily milk by 15 cows = 15 × 12 = 180 liters.',
                'Step 2: Total milk in 7 days = 180 × 7 = 1,260 liters.',
                'चरण 1: 15 गायों का 1 दिन का दूध = 15 × 12 = 180 लीटर।',
                'चरण 2: 7 दिनों का कुल दूध = 180 × 7 = 1,260 लीटर।'
              ],
              finalAnswer: '1,260 Liters (1,260 लीटर)',
              keyTakeaway: 'Multi-step multiplication applies directly to agricultural planning.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch7',
          chapterNumber: 7,
          title: 'Shapes and Patterns (आकृतियाँ और पैटर्न)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm107.pdf',
          nepHighlights: 'Tessellations, tiling patterns without gaps, rotational turns (1/2 turn, 1/4 turn, 1/6 turn), geometric art.',
          summaryTextbook: 'Studying Islamic floor tile designs, rangoli symmetries, which polygons tessellate a flat surface (triangles, hexagons, squares), and rotating patterns.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch8',
          chapterNumber: 8,
          title: 'Weight and Capacity (भार और धारिता)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm108.pdf',
          nepHighlights: 'Units of weight (mg, g, kg, quintal), capacity (mL, L, kL), estimating weights of common items.',
          summaryTextbook: 'Comparing elephant weights with car weights, understanding metric prefixes (kilo-, centi-, milli-), using precision digital scales in shops and grain mandis.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch9',
          chapterNumber: 9,
          title: 'Coconut Farm (नारियल का बाग़)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm109.pdf',
          nepHighlights: 'Array multiplication, tree spacing, harvesting counts, economics of coconut coir and copra.',
          summaryTextbook: 'In a coastal coconut grove, trees are planted in square grids. Students calculate tree counts using row-column multiplication, coconut yield per harvest, and shipment logistics.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch10',
          chapterNumber: 10,
          title: 'Symmetrical Designs (सममित डिज़ाइन)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm110.pdf',
          nepHighlights: 'Multiple lines of symmetry, kaleidoscope optics, rotational invariance, rangoli and mandalas.',
          summaryTextbook: 'Creating intricate mandala designs using mirrors, paper folding, and geometric compasses, exploring how rotational symmetry generates mesmerizing visual patterns.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch11',
          chapterNumber: 11,
          title: 'Grandmother\'s Quilt (दादी की रजाई)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm111.pdf',
          nepHighlights: 'Area and perimeter, square units, patchwork quilt geometry, stitching borders.',
          summaryTextbook: 'Grandmother stitches a quilt using square cloth patches of different colors. Students calculate the total area covered by patches and the ribbon perimeter required for the border.',
          exerciseSolutions: [
            {
              id: 'c5-m-ch11-q1',
              questionNo: 'Area & Perimeter Q1',
              questionText: 'A rectangular quilt is 200 cm long and 150 cm wide. What is its perimeter and area? (एक आयताकार रजाई 200 सेमी लंबी और 150 सेमी चौड़ी है। इसका परिमाप और क्षेत्रफल ज्ञात कीजिए।)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Length = 200 cm, Width = 150 cm',
              formula: 'Perimeter = 2 × (L + W), Area = L × W',
              stepByStepSolution: [
                'Step 1: Perimeter = 2 × (200 + 150) = 2 × 350 = 700 cm (7 meters).',
                'Step 2: Area = 200 × 150 = 30,000 cm² (3 m²).',
                'चरण 1: परिमाप = 2 × (200 + 150) = 700 सेमी (7 मीटर)।',
                'चरण 2: क्षेत्रफल = 200 × 150 = 30,000 वर्ग सेमी।'
              ],
              finalAnswer: 'Perimeter = 700 cm; Area = 30,000 cm²',
              keyTakeaway: 'Perimeter measures the outer boundary, while area measures the flat surface enclosed.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch12',
          chapterNumber: 12,
          title: 'Racing Seconds (दौड़ते सेकंड)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm112.pdf',
          nepHighlights: 'Stopwatch reading, athletic sprint timings, split seconds, heartbeats, and time conversion (hours to minutes to seconds).',
          summaryTextbook: 'Using stopwatches during school sports day races: recording 100-meter sprint times in seconds and tenths of a second, measuring resting vs running pulse rates.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch13',
          chapterNumber: 13,
          title: 'Animal Jumps (जानवरों की छलाँगें)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm113.pdf',
          nepHighlights: 'Multiples, common multiples, Least Common Multiple (LCM) concept through number line leaps (frog, rabbit, deer).',
          summaryTextbook: 'A frog jumps 3 steps at a time, a rabbit jumps 5 steps at a time, and a kangaroo jumps 7 steps. At which stepping stones will they land on the same number together?',
          exerciseSolutions: [
            {
              id: 'c5-m-ch13-q1',
              questionNo: 'Common Multiples Q1',
              questionText: 'A frog jumps 3 steps at a time and a rabbit jumps 5 steps at a time. What is the first stone they will both land on? (एक मेंढक 3-3 कदम कूदता है और खरगोश 5-5 कदम। वे दोनों सबसे पहले किस पत्थर पर मिलेंगे?)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Frog = multiples of 3, Rabbit = multiples of 5',
              formula: 'LCM(3, 5) = 15',
              stepByStepSolution: [
                'Step 1: Multiples of 3: 3, 6, 9, 12, 15, 18...',
                'Step 2: Multiples of 5: 5, 10, 15, 20...',
                'Step 3: The first common number is 15.',
                'चरण 1: 3 के गुणज: 3, 6, 9, 12, 15...',
                'चरण 2: 5 के गुणज: 5, 10, 15...',
                'चरण 3: पहला उभयनिष्ठ गुणज 15 है।'
              ],
              finalAnswer: 'Stone 15 (15वाँ पत्थर)',
              keyTakeaway: 'The Least Common Multiple (LCM) is the smallest shared multiple of two numbers.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch14',
          chapterNumber: 14,
          title: 'Maps and Locations (मानचित्र और स्थान)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm114.pdf',
          nepHighlights: 'Grid coordinates, locating landmarks on city maps, route planning, orientation, map legends.',
          summaryTextbook: 'Reading city road maps with grid letters and numbers (e.g., Hospital at B-4, School at D-2), finding optimal routes between monuments, and understanding map orientation.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-m-ch15',
          chapterNumber: 15,
          title: 'Data Through Pictures (चित्रों द्वारा आँकड़े)',
          officialBookCode: 'eemm1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/eemm115.pdf',
          nepHighlights: 'Bar graphs, pictographs with scale, pie charts, interpreting real-world surveys (weather, sports, school attendance).',
          summaryTextbook: 'Conducting class surveys on favorite books, hobbies, and blood groups, organizing raw data into frequency tables, and plotting proportional horizontal and vertical bar graphs.',
          exerciseSolutions: [
            {
              id: 'c5-m-ch15-q1',
              questionNo: 'Bar Graph Interpretation',
              questionText: 'In a pictograph where 1 book symbol represents 10 books, how many books do 4.5 book symbols represent? (एक चित्रालेख में जहाँ 1 पुस्तक का चिह्न 10 पुस्तकों को दर्शाता है, 4.5 चिह्न कितनी पुस्तकें दर्शाएंगे?)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: '1 symbol = 10 books',
              formula: 'Total = 4.5 × 10 = 45 books',
              stepByStepSolution: [
                'Step 1: 4 full symbols = 4 × 10 = 40 books.',
                'Step 2: 0.5 (half) symbol = 10 ÷ 2 = 5 books.',
                'Step 3: Total = 40 + 5 = 45 books.',
                'चरण 1: 4 पूरे चिह्न = 40 पुस्तकें।',
                'चरण 2: आधा चिह्न = 5 पुस्तकें। कुल = 45 पुस्तकें।'
              ],
              finalAnswer: '45 books (45 पुस्तकें)',
              keyTakeaway: 'Pictograph keys scale symbols to represent larger numbers efficiently.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },

    // 2. Environmental Studies (Looking Around / आस-पास)
    {
      id: 'c5-evs',
      name: 'Environmental Studies (Looking Around / आस-पास)',
      iconName: 'Globe',
      color: '#10b981',
      description: '22 Real-World Units: Super Senses, Snake Charmers, Experiments with Water, Sunita in Space, Seed Germination & Forest Conservation.',
      totalChapters: 22,
      coverImageUrl: '/book-covers/class5-evs-looking-around.png',
      chapters: [
        {
          id: 'c5-evs-ch1',
          chapterNumber: 1,
          title: 'Super Senses (कैसे पहचाना चींटी ने दोस्त को?)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap101.pdf',
          nepHighlights: 'Animal sensory capabilities: ant chemical pheromones, eagle binocular vision, dog scent tracking, silkworm, tiger hearing & night vision.',
          summaryTextbook: 'Explores extraordinary senses in animals: ants leaving scent trails, eagles spotting prey from 2 km away, dogs marking territory with urine smell, and tigers detecting vibrations with whiskers. Includes complete interactive line-by-line story practice.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch1-q1',
              questionNo: 'Super Senses Q1',
              questionText: 'How did the ant recognize its friend and find its way back to its nest?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: As ants move, they leave a chemical scent (pheromone) on the ground.',
                'Step 2: The other ants follow this scent trail using their sensitive antennae.',
                'Step 3: The guard ant recognizes the specific nest odor.'
              ],
              finalAnswer: 'Ants recognize friends and follow trails through distinctive chemical scents (pheromones).',
              keyTakeaway: 'Animals rely on highly specialized senses for survival, navigation, and communication.'
            },
            {
              id: 'c5-evs-ch1-q2',
              questionNo: 'Super Senses Q2 (Birds of Prey)',
              questionText: 'Which birds can see four times as far as humans, and how far can an eagle spot food from the sky?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Kites, eagles, and vultures can see four times as far as human eyes.',
                'Step 2: What humans see from 2 metres away, these birds can spot from 8 metres away.',
                'Step 3: An eagle flying high in the sky can spot a small roti on the ground from 1 to 2 kilometres away.'
              ],
              finalAnswer: 'Kites, eagles, and vultures; eagles can spot food from 1 to 2 kilometres away.',
              keyTakeaway: 'Birds of prey have high-density photoreceptors giving them extraordinary visual magnification.'
            },
            {
              id: 'c5-evs-ch1-q3',
              questionNo: 'Super Senses Q3 (The Tiger)',
              questionText: 'What special super senses make the tiger one of the most successful nocturnal hunters?',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Night Vision: Can see 6 times better in the dark than humans.',
                'Step 2: Whiskers: Sensitive facial hairs detect minute vibrations and air movements.',
                'Step 3: Directional Hearing: Ears rotate independently to catch sound from all directions.',
                'Step 4: Sound Discrimination: Distinguishes rustling leaves from moving prey footsteps.'
              ],
              finalAnswer: 'Night vision (6x human level), sensitive whiskers, rotatable ears, and keen sound discrimination.',
              keyTakeaway: 'Multi-sensory integration enables apex predators to hunt stealthily in total darkness.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch2',
          chapterNumber: 2,
          title: "A Snake Charmer's Story (कहानी सपेरों की)",
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap102.pdf',
          nepHighlights: 'Kalbelia community tradition, venomous vs non-venomous snakes of India (Cobra, Common Krait, Russell’s Viper, Saw-scaled Viper), and wildlife protection laws.',
          summaryTextbook: 'Aryanath tells of the Kalbelia snake charmer heritage, making snakebite medicine from herbs, why snakes lack external ears and feel vibrations, and the Wildlife Protection Act ban on catching snakes.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch2-q1',
              questionNo: 'Snake Venom Facts',
              questionText: 'Name the four types of poisonous snakes found commonly in India.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: India has over 300 snake species, but only 4 are dangerously venomous to humans.',
                'Step 2: 1. Cobra (नाग), 2. Common Krait (करैत), 3. Russell’s Viper (दुबोइया), 4. Saw-scaled Viper (अफ़ाई).'
              ],
              finalAnswer: 'Cobra, Common Krait, Russell’s Viper (Duboiya), and Saw-scaled Viper (Afai).',
              keyTakeaway: 'Snake venom medicine (antivenom) is made from snake venom itself.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch3',
          chapterNumber: 3,
          title: 'From Tasting to Digesting (चखने से पचने तक)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap103.pdf',
          nepHighlights: 'Taste buds (sweet, salty, sour, bitter), salivary amylase breaking down starch, Dr. Beaumont observation of St. Martin’s stomach juices (hydrochloric acid).',
          summaryTextbook: 'Jhumpa and Jhoolan tasting game, role of saliva in turning chewed bread sweet, digestive timeline of various foods in human stomach, and treating dehydration with ORS/glucose drips.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch3-q1',
              questionNo: 'Stomach Digestion',
              questionText: 'Why does bread or boiled rice begin to taste sweet after being chewed thoroughly for 30 seconds?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Saliva contains the digestive enzyme salivary amylase.',
                'Step 2: Amylase breaks down complex starches into simpler sugars (maltose/glucose).',
                'Step 3: Simple sugars stimulate sweet taste receptors on the tongue.'
              ],
              finalAnswer: 'Saliva enzymes convert starch into sugar during thorough chewing.',
              keyTakeaway: 'Digestion begins in the mouth through mechanical chewing and salivary enzymes.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch4',
          chapterNumber: 4,
          title: 'Mangoes Round the Year (खाएं आम बारहों महीने)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap104.pdf',
          nepHighlights: 'Food spoilage vs preservation, fungal growth on bread, making Mamidi Tandra (Aam Papad) in Andhra Pradesh.',
          summaryTextbook: 'Aman and Nitu lunchbox spoilage, observing mold on moist bread over 6 days, and step-by-step sun-drying of ripe mango pulp with jaggery to make Mamidi Tandra.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch4-q1',
              questionNo: 'Food Preservation',
              questionText: 'What methods are used to preserve fruits and vegetables across different seasons?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Sun drying (making aam papad, raisins).',
                'Step 2: Adding salt and oil (pickling mangoes, lemons).',
                'Step 3: Adding high sugar concentration (making jams, jellies).',
                'Step 4: Refrigeration and freezing.'
              ],
              finalAnswer: 'Drying, pickling with salt/oil, sugar syrup preservation, and cold storage.',
              keyTakeaway: 'Removing moisture and creating hypertonic environments inhibits bacterial and fungal growth.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch5',
          chapterNumber: 5,
          title: 'Seeds and Seeds (बीज, बीज, बीज)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap105.pdf',
          nepHighlights: 'Seed germination requirements (air, water, warmth), seed dispersal mechanisms (wind, water, animals, explosive bursting), George de Mestral Velcro discovery.',
          summaryTextbook: 'Gopal chana sprouting experiment, pitcher plant (Nepenthes) catching insects, Velcro invented by observing burdock seeds sticking to dog fur, and seeds traveling across world trade routes (chillies from South America).',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch5-q1',
              questionNo: 'Velcro Discovery',
              questionText: 'How did George de Mestral get the idea to invent Velcro in 1948?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: After a walk with his dog, he noticed burdock seeds clinging tightly to his clothes and dog fur.',
                'Step 2: Under a microscope, he saw thousands of tiny hooks that attached to loops in fabric.',
                'Step 3: He engineered synthetic hook-and-loop strips named Velcro.'
              ],
              finalAnswer: 'By observing tiny hooks on seeds sticking to fur under a microscope (Biomimicry).',
              keyTakeaway: 'Careful observation of nature inspires world-changing engineering inventions.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch6',
          chapterNumber: 6,
          title: 'Every Drop Counts (बूँद-बूँद, दरिया-दरिया)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap106.pdf',
          nepHighlights: 'Ancient rainwater harvesting, Ghadsisar lake in Jaisalmer, Stepwells (Bawdis), customs related to water, Jal Board supply.',
          summaryTextbook: 'King Ghadsi interconnected 9-lake system in 650-year-old Jaisalmer, Al-Biruni travelogue praising Indian water architecture, rooftop rainwater collection in tankas, and contemporary water struggles.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch6-q1',
              questionNo: 'Bawdi Heritage',
              questionText: 'What is a Stepwell (Bawdi) and why were they built along travel trade routes in ancient India?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: A stepwell has flights of stone stairs going down several storeys to the water table.',
                'Step 2: Instead of drawing water with ropes, travelers walked down directly to the cool water.',
                'Step 3: They served as community rest stops and preserved water during severe summer droughts.'
              ],
              finalAnswer: 'Multi-storey stepwells designed for community rainwater storage and thirsty travelers.',
              keyTakeaway: 'Traditional rainwater harvesting systems are eco-friendly, resilient solutions to water scarcity.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch7',
          chapterNumber: 7,
          title: 'Experiments with Water (पानी के प्रयोग)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap107.pdf',
          nepHighlights: 'Floating vs sinking, density, solubility in water, Dead Sea high salinity buoyancy, Mahatma Gandhi Dandi March (1930) for salt law freedom.',
          summaryTextbook: 'Ayesha soap case floating experiment, egg floating in saturated salt water, why people cannot drown in the Dead Sea (300 g salt per liter of water), and evaporating sea water for natural salt.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch7-q1',
              questionNo: 'Dead Sea Buoyancy',
              questionText: 'Why can a person float effortlessly on top of the Dead Sea without swimming?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: The Dead Sea has an extremely high salt concentration (~300 grams of salt per liter of water).',
                'Step 2: This makes the water density much higher than the average human body density.',
                'Step 3: The buoyant upward force exceeds the downward gravitational pull, keeping the body afloat.'
              ],
              finalAnswer: 'High salinity gives the water immense density and buoyant force.',
              keyTakeaway: 'Objects float when their average density is less than the density of the surrounding liquid.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch8',
          chapterNumber: 8,
          title: 'A Treat for Mosquitoes (मच्छरों की दावत?)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap108.pdf',
          nepHighlights: 'Malaria transmission via female Anopheles mosquito, blood test slide diagnosis, Ronald Ross Nobel Prize discovery, Anemia and iron-rich foods.',
          summaryTextbook: 'Rajat, Jaskirat, and Aarti blood test reports showing normal hemoglobin (12-16 g/dL) vs anemia, eating jaggery, amla, and green leafy vegetables, preventing stagnant water breeding, and Ronald Ross mosquito research in Secunderabad.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch8-q1',
              questionNo: 'Malaria Vector',
              questionText: 'Which mosquito spreads malaria and how can we prevent mosquito breeding in our neighborhoods?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Malaria is spread by the female Anopheles mosquito carrying Plasmodium parasites.',
                'Step 2: Prevent breeding by emptying standing water from coolers, pots, and tires.',
                'Step 3: Add fish (Gambusia) to ponds to eat mosquito larvae, or spray oil on stagnant water surfaces.'
              ],
              finalAnswer: 'Female Anopheles mosquito; prevented by eliminating stagnant water and using larvivorous fish/oil.',
              keyTakeaway: 'Disrupting the mosquito lifecycle prevents vector-borne diseases like malaria and dengue.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch9',
          chapterNumber: 9,
          title: 'Up You Go! (कमर सीधी, ऊपर चढ़ो!)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap109.pdf',
          nepHighlights: 'Mountaineering camp leadership at NIM Uttarkashi, Bachendri Pal summit of Mount Everest (Sagarmatha) on 23 May 1984.',
          summaryTextbook: 'Sangeeta Arora diary of Group 7 leader responsibilities, crossing icy rivers with sling and pitons, rappelling down rock cliffs, altitude sickness prevention, and Bachendri Pal historic Everest climb.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch9-q1',
              questionNo: 'Bachendri Pal Landmark',
              questionText: 'Who was the first Indian woman to reach the summit of Mount Everest and in which year?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Bachendri Pal climbed Mount Everest (8848 meters).',
                'Step 2: She stood on the peak on 23rd May 1984 at 1:07 PM.',
                'Step 3: She became the first Indian woman and fifth woman in the world to accomplish this.'
              ],
              finalAnswer: 'Bachendri Pal on 23 May 1984.',
              keyTakeaway: 'Perseverance, fitness, and team leadership overcome the world’s toughest physical challenges.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch10',
          chapterNumber: 10,
          title: 'Walls Tell Stories (बोलती इमारतें)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap110.pdf',
          nepHighlights: 'Golkonda Fort architecture, bastions (burj) for 360° defense, water lift mechanisms using pulleys and bullocks, bronze canons (Aurangzeb siege).',
          summaryTextbook: 'Sridhar, Shailja, and Kalyani explore Golkonda fort in Hyderabad, thick carved stone walls, whispering gallery acoustics, palaces of Qutb Shahi Sultans, and museum preservation of artifacts.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch10-q1',
              questionNo: 'Fort Bastions',
              questionText: 'Why were big holes made in the thick bastions (burj) of Golkonda Fort?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Soldiers looked through small openings to spot attacking enemies from a safe distance.',
                'Step 2: The circular bastions provided panoramic viewing angles without exposing soldiers to enemy arrows or cannonballs.'
              ],
              finalAnswer: 'To observe enemy movements from wide angles while remaining protected behind stone walls.',
              keyTakeaway: 'Ancient forts incorporated sophisticated military engineering and acoustic physics.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch11',
          chapterNumber: 11,
          title: 'Sunita in Space (सुनीता अंतरिक्ष में)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap111.pdf',
          nepHighlights: 'Living in zero gravity on the International Space Station (ISS), Earth gravitation pull, Neil Armstrong 1969 moon walk, Sunita Williams record-breaking spaceflights.',
          summaryTextbook: 'Sunita Williams experiences in space: floating food packets, hair standing straight all the time, seeing Earth globe borders disappear, day/night cycles in orbit, and satellite science.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch11-q1',
              questionNo: 'Zero Gravity Experience',
              questionText: 'Why did Sunita Williams hair keep standing upright while inside the spaceship?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: In orbital spaceflight, the spacecraft and astronauts are in continuous free-fall, experiencing microgravity (weightlessness).',
                'Step 2: Without Earth downward gravity pulling hair down, strands float freely in all directions.'
              ],
              finalAnswer: 'Due to weightlessness (absence of effective gravity pulling it down).',
              keyTakeaway: 'Earth’s gravitational force holds atmospheres, oceans, and living beings securely to the surface.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch12',
          chapterNumber: 12,
          title: 'What if it Finishes...? (खत्म हो जाए तो...?)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap112.pdf',
          nepHighlights: 'Non-renewable fossil fuels (petroleum, diesel, LPG, CNG), petroleum refining fractions, solar & wind renewable alternatives, air pollution impact.',
          summaryTextbook: 'Adalaj stepwell highway traffic jam, exhaust smoke health hazards, petroleum formation over millions of years deep beneath seabed, refinery distillation (kerosene, wax, plastics), and renewable energy solar cookers.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch12-q1',
              questionNo: 'Fossil Fuel Conservation',
              questionText: 'Why are petrol and diesel called non-renewable resources and how can we save fuel daily?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Petroleum takes millions of years of heat and pressure to form beneath Earth and cannot be regenerated quickly.',
                'Step 2: Daily ways to save: switch off vehicle engines at red traffic lights, use bicycles or public metro transport, and carpool.'
              ],
              finalAnswer: 'They take millions of years to form; save fuel by turning off idling engines and using public transit.',
              keyTakeaway: 'Transitioning to renewable clean energy prevents climate change and resource exhaustion.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch13',
          chapterNumber: 13,
          title: 'A Shelter so High! (बसेरा ऊँचाई पर)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap113.pdf',
          nepHighlights: 'Gaurav Jani motorcycle journey to Leh Ladakh cold desert, Changpa tribe nomadic life at Changthang, Pashmina goats, Rebo tents, and Srinagar houseboats (Donga/Shikara).',
          summaryTextbook: 'Traveling from Mumbai to Delhi, Manali, and Ladakh, Changpa rearing high-altitude Pashmina goats producing wool 6 times warmer than sweaters, Rebo woven yak hair tents, and Kashmir wooden ceiling carvings (Khatamband).',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch13-q1',
              questionNo: 'Pashmina Shawl Facts',
              questionText: 'What makes genuine Kashmiri Pashmina shawls world famous for warmth?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Changthangi goats live at extreme cold altitudes (5000 meters, -40°C), growing an ultra-fine undercoat.',
                'Step 2: One goat hair is 6 times thinner than a human hair and cannot be woven on machines.',
                'Step 3: After 250 hours of hand weaving, one plain Pashmina shawl provides the warmth of 6 thick woolen sweaters.'
              ],
              finalAnswer: 'Ultra-fine goat underfur (6x thinner than human hair) handwoven into shawls 6 times warmer than standard sweaters.',
              keyTakeaway: 'Traditional crafts reflect harmony between indigenous communities and extreme environments.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch14',
          chapterNumber: 14,
          title: 'When the Earth Shook! (जब धरती काँपी)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap114.pdf',
          nepHighlights: 'Gujarat Bhuj Earthquake (26 January 2001), earthquake safety protocols (Drop, Cover, Hold On), disaster relief and resilient architecture.',
          summaryTextbook: 'Jasma recounts Republic Day earthquake in Kutch, collapse of stone houses, collective community rescue, rehabilitation by engineers and doctors, and building bamboo/mud quake-resistant homes.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch14-q1',
              questionNo: 'Earthquake Protocol',
              questionText: 'What emergency actions should you take if an earthquake strikes while you are indoors?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Drop under a sturdy table, desk, or bed.',
                'Step 2: Cover your head and neck with your arms.',
                'Step 3: Hold onto the furniture leg until shaking stops.',
                'Step 4: If in an open area, stay away from tall buildings, trees, and electrical poles.'
              ],
              finalAnswer: 'Drop, Cover, and Hold on under sturdy furniture; move to open fields if outdoors.',
              keyTakeaway: 'Disaster preparedness and structural engineering save thousands of lives during earthquakes.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch15',
          chapterNumber: 15,
          title: 'Blow Hot, Blow Cold (उसी से ठंडा उसी से गर्म)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap115.pdf',
          nepHighlights: 'Dr. Zakir Husain story of the Woodcutter and Mian Balishtiye, blowing breath to cool hot potatoes or warm chilled fingers, stethoscope heartbeats, musical wind instruments (Flute, Been, Dholak).',
          summaryTextbook: 'The tiny thumb-sized Mian Balishtiye observes woodcutter blowing air on cold hands to warm them and blowing on hot boiled potatoes to cool them down, understanding that breath temperature depends on comparison with object temperature.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch15-q1',
              questionNo: 'Blowing Temperature Paradox',
              questionText: 'How can our breath make something warmer as well as cooler?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Normal human exhaled breath temperature is around 37°C.',
                'Step 2: When our fingers are cold (15°C in winter), breath is warmer, so blowing warms the hands.',
                'Step 3: When freshly boiled potatoes are 80°C, breath is cooler, so blowing speeds up evaporation and cools the food.'
              ],
              finalAnswer: 'Because breath (~37°C) transfers heat to colder objects and absorbs heat/causes evaporation on hotter objects.',
              keyTakeaway: 'Heat always flows from a higher temperature region to a lower temperature region.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch16',
          chapterNumber: 16,
          title: 'Who will do this Work? (कौन करेगा यह काम?)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap116.pdf',
          nepHighlights: 'Dignity of labour, social equality, eradication of untouchability, Mahatma Gandhi Sabarmati Ashram values, Dr. B.R. Ambedkar constitutional vision.',
          summaryTextbook: 'Investigates sanitation workers cleaning sewers and garbage, Narayan (Babaji) memories of Gandhi ji ashram where all guests cleaned their own toilets, and fighting caste discrimination to build equal societal respect.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch16-q1',
              questionNo: 'Dignity of Labour',
              questionText: 'Why did Mahatma Gandhi insist that every member of Sabarmati Ashram clean their own toilets?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: To destroy caste prejudices and untouchability.',
                'Step 2: To instill the core value that no work or cleaning task is inferior or degrading.',
                'Step 3: To teach self-reliance and deep respect for manual labour.'
              ],
              finalAnswer: 'To eliminate caste discrimination and establish that all honest labor has equal dignity.',
              keyTakeaway: 'Every profession contributing to society deserves equal human respect and dignified working conditions.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch17',
          chapterNumber: 17,
          title: 'Across the Wall (फांद ली दीवार)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap117.pdf',
          nepHighlights: 'Breaking gender stereotypes in sports, Afsana Mansuri and the Nagpada Basketball Association (NBA) Mumbai team, teamwork over individual ego.',
          summaryTextbook: 'Afsana, Zarin, Khushnoor, and Afreen overcome poverty and conservative family objections to become star basketball champions in Mumbai, guided by Coach Noor Khan.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch17-q1',
              questionNo: 'Teamwork Principle',
              questionText: 'What is the most important quality of a great sports team according to Coach Noor Khan?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Playing for the victory of the entire team rather than individual personal scores.',
                'Step 2: Supporting each other through mistakes without blaming teammates.',
                'Step 3: Maintaining trust, mutual respect, and unified focus.'
              ],
              finalAnswer: 'Unity and mutual trust, where every player contributes to the team spirit.',
              keyTakeaway: 'Gender and background cannot limit passion, hard work, and athletic excellence.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch18',
          chapterNumber: 18,
          title: 'No Place for Us? (जाएं तो जाएं कहाँ)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap118.pdf',
          nepHighlights: 'Displacement due to large dam construction (Khedi village, Tehri Dam), rural to urban migration challenges, losing ancestral culture.',
          summaryTextbook: 'Jatrya Bhai displacement from peaceful green Khedi village to Sinduri resettlement and Mumbai city slums, showing the high human cost of development projects and urban hardship.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch18-q1',
              questionNo: 'Dam Displacement',
              questionText: 'What major difficulties did Jatrya Bhai and his village face when displaced for dam construction?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Loss of ancestral farmland, forests, and community river bonding.',
                'Step 2: Resettlement land was rocky and barren with no hospital medicines or proper school teachers.',
                'Step 3: High cost of living in cities where every essential (water, electricity, medicine) costs money.'
              ],
              finalAnswer: 'Loss of livelihoods, broken community ties, inadequate resettlement facilities, and extreme financial stress.',
              keyTakeaway: 'Development projects must prioritize humane, fair rehabilitation for indigenous populations.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch19',
          chapterNumber: 19,
          title: "A Seed tells a Farmer's Story (किसानों की कहानी-बीज की ज़बानी)",
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap119.pdf',
          nepHighlights: 'Organic traditional farming vs modern chemical-intensive farming, hybrid seeds, neem leaves as natural pesticide, Undhiyu festival food in Gujarat.',
          summaryTextbook: 'A Bajra seed in Vanka village Gujarat recalls old farming with wooden ploughs, earthen pot Undhiyu cooking, transition to tractors, costly hybrid seeds, chemical fertilizers depleting soil earthworms, and debt traps.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch19-q1',
              questionNo: 'Traditional vs Chemical Farming',
              questionText: 'Why did traditional farmers preserve seeds in dried gourd (lauki) coated with mud and neem leaves?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Neem leaves act as natural insect repellents and antibacterial shields.',
                'Step 2: Mud-coated dried gourds keep seeds dry and shielded from humidity and pests.',
                'Step 3: This allowed farmers to sow self-preserved indigenous seeds year after year without buying expensive commercial seeds.'
              ],
              finalAnswer: 'To naturally protect indigenous seeds from moisture, insects, and fungal decay.',
              keyTakeaway: 'Sustainable agriculture preserves soil biodiversity and prevents farmer debt cycles.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch20',
          chapterNumber: 20,
          title: "Whose Forests? (किसके जंगल?)",
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap120.pdf',
          nepHighlights: 'Suryamani and Kuduk tribal language movement in Jharkhand, Torang cultural center, Forest Rights Act 2007, chipko spirit.',
          summaryTextbook: 'Girl Star Suryamani journey to become a graduate, opening Torang center in Ranchi to preserve Kuduk songs, herbs, and bamboo crafts, and educating Adivasis about the Forest Rights Act 2007 (right to live on forest land farmed for 25+ years).',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch20-q1',
              questionNo: 'Forest Rights Act 2007',
              questionText: 'What key guarantee does the Right to Forest Act (2007) provide to tribal people (Adivasis)?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: People who have lived in the forest for at least 25 years have legal rights over the forest land and produce.',
                'Step 2: They cannot be forcibly evicted or removed from their ancestral forest homes.',
                'Step 3: Gram Sabhas are empowered to manage forest protection.'
              ],
              finalAnswer: 'Guarantees legal land rights and livelihood security to forest dwellers living there for 25+ years.',
              keyTakeaway: 'Tribal communities are the true protectors and custodians of biodiversity in forests.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch21',
          chapterNumber: 21,
          title: 'Like Father, Like Daughter (किसकी झलक? किसकी छाप?)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap121.pdf',
          nepHighlights: 'Hereditary traits (eye color, dimples, curly hair, height), Gregor Mendel pea plant genetics, Polio as viral infection (not hereditary), identical twins.',
          summaryTextbook: 'Ashima sneezing like her father, Saroja and Suvasini identical twin sisters separated in infancy, Gregor Mendel discovering inherited traits in monastery pea plants, and Pulse Polio vaccination campaigns.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch21-q1',
              questionNo: 'Gregor Mendel Genetics',
              questionText: 'What did Gregor Mendel discover through his experiments on thousands of pea plants?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Pea plants possess traits that come in distinct pairs (e.g., rough/smooth seeds, yellow/green seeds, tall/short stems).',
                'Step 2: Traits are inherited from parent plants in specific dominant and recessive ratios without blending into intermediate mixtures.'
              ],
              finalAnswer: 'Discovered the fundamental laws of genetic inheritance through paired parent traits.',
              keyTakeaway: 'Physical traits are inherited from parents, whereas infections like Polio are caused by viruses and prevented by vaccines.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-evs-ch22',
          chapterNumber: 22,
          title: 'On the Move Again (फिर चला काफ़िला)',
          officialBookCode: 'ehap1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehap122.pdf',
          nepHighlights: 'Seasonal migrant sugarcane farming families (Mukkadam loan agent), interruption of children schooling, Right to Education.',
          summaryTextbook: 'Dhanu family leaving village after Dussehra for 6 months to work at sugarcane factories, living in tire-mat huts, weighing cane carts, Dhanu deep desire to study continuously and become an officer rather than a seasonal laborer.',
          exerciseSolutions: [
            {
              id: 'c5-evs-ch22-q1',
              questionNo: 'Migrant Children Education',
              questionText: 'Why is it crucial to provide flexible schooling for children of seasonal migrant workers?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Seasonal migration forces children to drop out of school for 6 months every year.',
                'Step 2: Without uninterrupted education, they remain trapped in low-wage cycles and debt traps.',
                'Step 3: Residential bridge schools and mobile learning vans ensure continuous Right to Education.'
              ],
              finalAnswer: 'To prevent school dropouts and ensure equal educational opportunities regardless of parental seasonal migration.',
              keyTakeaway: 'Continuous education is the most powerful tool to break generational poverty.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },

    // 3. English (Santoor / संतूर - New NCERT 2026-27)
    {
      id: 'c5-santoor',
      name: 'English (Santoor / संतूर - New NCERT)',
      iconName: 'BookOpen',
      color: '#04AA6D',
      description: 'New NCERT 2026-27 Textbook: Papa’s Spectacles, experiential storytelling, interactive crosswords, phonics, and solved exercises.',
      totalChapters: 10,
      chapters: [
        {
          id: 'c5-santoor-ch1',
          chapterNumber: 1,
          title: "Unit 1: Papa’s Spectacles (पापा के चश्मे)",
          officialBookCode: 'eesa1',
          officialPdfUrl: '/pdf/Class 05/Santoor 5th NEW NCERT/eesa101_solved.pdf',
          nepHighlights: 'Observation skills, prepositions, ascending order logic, crossword antonyms, homophones vs sound contrasts.',
          summaryTextbook: 'Papa misplaces his only pair of spectacles and searches all around the house (pockets, under chair, window sill), only to discover with joy that they were sitting right on top of his head!',
          exerciseSolutions: [
            {
              id: 'c5-san-ch1-q1',
              questionNo: 'Page 2 Let us Think Q1',
              questionText: 'What is Papa searching for?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Papa has lost his reading glasses.',
                'Step 2: It was his only pair and he is searching everywhere.'
              ],
              finalAnswer: 'Papa is searching for his lost spectacles (glasses).',
              keyTakeaway: 'Attentive reading of narrative poetry.'
            },
            {
              id: 'c5-san-ch1-q2',
              questionNo: 'Page 2 Let us Think Q2',
              questionText: 'What are the possible places where Papa can find it?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Look at the places mentioned in the poem.',
                'Step 2: Inside his pockets, under his chair, and near the window.'
              ],
              finalAnswer: 'Inside his pockets, under his chair, and near the window.',
              keyTakeaway: 'Scanning text for specific location clues.'
            },
            {
              id: 'c5-san-ch1-q3',
              questionNo: 'Page 2 Let us Think Q3',
              questionText: 'At last, where does Papa find his lost item?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: The speaker tells Papa to stop searching.',
                'Step 2: The spectacles are found right on top of his head!'
              ],
              finalAnswer: 'Papa finds his spectacles right on top of his head!',
              keyTakeaway: 'Humorous resolution in observational poetry.'
            },
            {
              id: 'c5-san-ch1-q4',
              questionNo: 'Page 3 Ascending Order',
              questionText: 'Arrange Towel, Sari, Handkerchief, Bedsheet in ascending order of size/weight.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Identify smallest object: Handkerchief.',
                'Step 2: Next larger: Towel.',
                'Step 3: Next larger: Sari.',
                'Step 4: Largest/heaviest: Bedsheet.'
              ],
              finalAnswer: 'Handkerchief -> Towel -> Sari -> Bedsheet',
              keyTakeaway: 'Comparative analysis of everyday objects.'
            },
            {
              id: 'c5-san-ch1-q5',
              questionNo: 'Page 6 Prepositions Practice',
              questionText: 'Fill in the blanks: My father has a habit of keeping his spectacles [__] random places and looked [__] the house.',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Keeping at random locations takes preposition "in".',
                'Step 2: Looking all over the premises takes preposition "around".'
              ],
              finalAnswer: 'in random places; looked around the house.',
              keyTakeaway: 'Contextual preposition application.'
            },
            {
              id: 'c5-san-ch1-q6',
              questionNo: 'Page 10 Riddle Just for Fun',
              questionText: 'I go to the market, I lovingly bring you home, I sit in front of you, And I cry, cry, cry. What is it?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: A kitchen food item bought from the vegetable market.',
                'Step 2: When peeled and chopped, it makes your eyes tear up.'
              ],
              finalAnswer: 'An Onion (प्याज़)! 🧅',
              keyTakeaway: 'Figurative riddles connecting daily experiences.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-santoor-ch2',
          chapterNumber: 2,
          title: "Unit 2: Gone with the Scooter (स्कूटर के साथ उड़ गई गेंद)",
          officialBookCode: 'eesa1',
          officialPdfUrl: '/pdf/Class 05/Santoor 5th NEW NCERT/eesa102_solved.pdf',
          nepHighlights: 'Honesty, sportsmanship, adverbs of time and frequency, phonics of long oo, and compound words.',
          summaryTextbook: 'Gopi finds a lost hockey ball in his garden. In the evening, while playing with friends, Jay hits a powerful drive that lands straight into the basket of a passing scooter!',
          exerciseSolutions: [
            {
              id: 'c5-san-ch2-q1',
              questionNo: 'Page 5 Comprehension Q1',
              questionText: 'What was Gopi doing on the veranda?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Check the opening lines of the story.',
                'Step 2: Gopi was sitting in the veranda on a summer afternoon, reading a book.'
              ],
              finalAnswer: 'Gopi was sitting in the veranda, reading a book.',
              keyTakeaway: 'Reading and narrative recall.'
            },
            {
              id: 'c5-san-ch2-q2',
              questionNo: 'Page 5 Comprehension Q2',
              questionText: 'What sound did Gopi hear before he went to the garden?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Gopi heard something rustling past.',
                'Step 2: It landed with a thud in the garden.'
              ],
              finalAnswer: 'He heard something rustling past and falling with a thud in the garden.',
              keyTakeaway: 'Sensory and onomatopoeic vocabulary.'
            },
            {
              id: 'c5-san-ch2-q3',
              questionNo: 'Page 5 Comprehension Q6',
              questionText: 'Why did everyone laugh at the end of the story?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Jay hit the hockey ball with full force.',
                'Step 2: The ball flew past the playground gate and landed right in a passing scooter’s basket, which drove away.'
              ],
              finalAnswer: 'Jay hit the ball so hard that it landed in the basket of a passing scooter and drove away!',
              keyTakeaway: 'Humorous climax in sports fiction.'
            },
            {
              id: 'c5-san-ch2-q4',
              questionNo: 'Page 8 Adverbs Practice',
              questionText: 'Identify the adverb and classify whether it shows frequency or time: "Shama often writes in her diary."',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Locate the modifier word: "often".',
                'Step 2: "Often" answers the question "How many times?".'
              ],
              finalAnswer: 'Adverb: "often" (Adverb of Frequency).',
              keyTakeaway: 'Understanding adverbs of frequency and time.'
            },
            {
              id: 'c5-san-ch2-q5',
              questionNo: 'Page 11 Compound Words',
              questionText: 'Form 3 compound words with "sun" and 3 with "ball".',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Combine "sun" with rise, shine, flower, set.',
                'Step 2: Combine "ball" with foot, base, volley, basket.'
              ],
              finalAnswer: 'Sun: sunrise, sunshine, sunflower, sunset. Ball: football, baseball, volleyball, basketball.',
              keyTakeaway: 'Word compounding in English morphology.'
            },
            {
              id: 'c5-san-ch2-q6',
              questionNo: 'Page 16 Sports Biography',
              questionText: 'Who was Major Dhyan Chand and why is he called the "Wizard of Hockey"?',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: He was India’s legendary hockey captain who won 3 Olympic Gold Medals (1928, 1932, 1936).',
                'Step 2: His magical dribbling and ball control amazed world sports fans.'
              ],
              finalAnswer: 'Major Dhyan Chand won 3 Olympic Golds for India and scored 400+ international goals. His magical ball control earned him the title "The Wizard".',
              keyTakeaway: 'Inspirational sports history of India.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-santoor-ch3',
          chapterNumber: 3,
          title: "Unit 2: The Rainbow (इंद्रधनुष)",
          officialBookCode: 'eesa1',
          officialPdfUrl: '/pdf/Class 05/Santoor 5th NEW NCERT/eesa103_solved.pdf',
          nepHighlights: 'Appreciating nature, compound words, rhyming sound patterns, words functioning as both noun and verb, antonyms starting with S, VIBGYOR color science, and culinary botanical vocabulary in mother tongue.',
          summaryTextbook: 'Christina Rossetti’s timeless poem compares man-made marvels (boats on rivers, ships on seas, and stone bridges) with nature’s supreme wonders: clouds sailing across the sky and the magnificent rainbow that overtops trees to bridge earth with heaven.',
          exerciseSolutions: [
            {
              id: 'c5-san-ch3-q1',
              questionNo: 'Page 28 Comprehension Q1',
              questionText: 'Explain the meaning of the word ‘bow’ used in the poem.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Read stanza 2 of the poem: "But the bow that bridges heaven, And overtops the trees".',
                'Step 2: Understand the poetic imagery of an arching band of colours across the sky.'
              ],
              finalAnswer: 'In the poem, "bow" refers to the rainbow that arches across the sky after rainfall.',
              keyTakeaway: 'Poetic imagery and metaphorical language.'
            },
            {
              id: 'c5-san-ch3-q2',
              questionNo: 'Page 28 Comprehension Q2',
              questionText: 'Which bridge does the poet like more and why?',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: The poet admires river bridges ("as pretty as you please").',
                'Step 2: However, the rainbow overtops the highest trees and builds a celestial road from earth to heaven, making it far prettier than human bridges.'
              ],
              finalAnswer: 'The poet likes the rainbow bridge more because it overtops the trees and builds a road from earth to sky, making it far prettier than man-made river bridges.',
              keyTakeaway: 'Comparative appreciation of natural versus artificial beauty.'
            },
            {
              id: 'c5-san-ch3-q3',
              questionNo: 'Page 28 Comprehension Q3',
              questionText: 'The word ‘these’ is used for different things in stanzas one and two. What are the things for which ‘these’ has been used in each stanza?',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: In stanza 1, "clouds that sail across the sky are prettier far than these" refers to boats and ships.',
                'Step 2: In stanza 2, "the bow that bridges heaven... is prettier far than these" refers to bridges on rivers.'
              ],
              finalAnswer: 'In stanza 1, "these" refers to boats and ships. In stanza 2, "these" refers to bridges built on rivers.',
              keyTakeaway: 'Pronoun reference and poetic cohesion.'
            },
            {
              id: 'c5-san-ch3-q4',
              questionNo: 'Page 28 True or False Q4',
              questionText: 'State whether the statements are True or False: (a) Ships sail on the river. (b) Boats sail on the sea. (c) Bridges are built on the river. (d) A road is built from earth to the sky.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Stanza 1 states: "Boats sail on the rivers, And ships sail on the seas". Therefore, (a) is False and (b) is False.',
                'Step 2: Stanza 2 confirms: "There are bridges on the rivers", making (c) True.',
                'Step 3: The rainbow metaphorically "builds a road from earth to sky", making (d) True.'
              ],
              finalAnswer: '(a) False [Ships sail on seas]. (b) False [Boats sail on rivers]. (c) True. (d) True [Poetic description of rainbow].',
              keyTakeaway: 'Close textual verification and poetic fact-checking.'
            },
            {
              id: 'c5-san-ch3-q5',
              questionNo: 'Page 29 Jumbled Words',
              questionText: 'Rearrange letters to form meaningful words from poem: 1. sial 2. vierr 3. sae 4. oduscl 5. risebgd 6. nhveea 7. eoptvros 8. owb 9. droa',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Unscramble letters by matching with vocabulary in the poem.',
                'Step 2: Identify each word: sail, river, sea, clouds, bridges, heaven, overtops, bow, road.'
              ],
              finalAnswer: '1. SAIL, 2. RIVER, 3. SEA, 4. CLOUDS, 5. BRIDGES, 6. HEAVEN, 7. OVERTOPS, 8. BOW, 9. ROAD.',
              keyTakeaway: 'Spelling mastery and anagram unscrambling.'
            },
            {
              id: 'c5-san-ch3-q6',
              questionNo: 'Page 30 Rhyming Words',
              questionText: 'Give five rhyming words for: Ship, Tree, Bow, Rain, Sun, Sea, Sail, And, Sky, Far.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Group words by identical vowel and terminal consonant phonemes.',
                'Step 2: Provide clean 5-word rhyming clusters for each starter word.'
              ],
              finalAnswer: 'Ship: trip, chip, dip, lip, flip. Tree: see, bee, free, knee, glee. Bow: low, row, glow, show, slow. Rain: train, pain, gain, chain, brain. Sun: run, fun, bun, gun, spun. Sea: tea, pea, flea, plea, key. Sail: tail, mail, pail, rail, nail. And: sand, hand, band, land, stand. Sky: high, fly, cry, try, spy. Far: car, star, jar, bar, tar.',
              keyTakeaway: 'Phonological awareness and rhyming vocabulary.'
            },
            {
              id: 'c5-san-ch3-q7',
              questionNo: 'Page 34 Compound Words',
              questionText: 'Complete the compound words table: tea+cup, wrist+?, arm+?, earth+?, ?+flower, table+cloth, note+?, ?+ring, tooth+?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: A compound word is formed when two root words join together to create a single new word with distinct meaning.',
                'Step 2: Combine: tea+cup=teacup, wrist+watch=wristwatch, arm+chair=armchair, earth+worm=earthworm, sun+flower=sunflower, table+cloth=tablecloth, note+book=notebook, ear+ring=earring, tooth+brush=toothbrush.'
              ],
              finalAnswer: 'teacup, wristwatch, armchair, earthworm, sunflower, tablecloth, notebook, earring, toothbrush.',
              keyTakeaway: 'Morphological compounding in English lexicology.'
            },
            {
              id: 'c5-san-ch3-q8',
              questionNo: 'Page 35 Noun & Verb Dual Use',
              questionText: 'Use the following words in two sentences: once as a noun and once as a verb: cut, bat, picture, cry, filter, dance, plant, paint, fly, face.',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Noun functions as a person, place, thing, or concept.',
                'Step 2: Verb functions as an action, state, or occurrence.'
              ],
              finalAnswer: '1. cut: [N] He got a deep cut. [V] Please cut the apple. 2. bat: [N] Bring the cricket bat. [V] Batsmen bat with patience. 3. picture: [N] She framed a picture. [V] I can picture the mountains. 4. cry: [N] We heard a loud cry. [V] Babies cry when hungry. 5. filter: [N] Change the water filter. [V] Trees filter pollutants. 6. dance: [N] Kathak is a classical dance. [V] Peacocks dance in the rain. 7. plant: [N] Water this tulsi plant. [V] Plant saplings on Earth Day. 8. paint: [N] Buy yellow paint. [V] Artists paint portraits. 9. fly: [N] A fly sat on the table. [V] Birds fly across the sky. 10. face: [N] Wash your face. [V] Face challenges bravely.',
              keyTakeaway: 'Syntactic flexibility of English homographs across parts of speech.'
            },
            {
              id: 'c5-san-ch3-q9',
              questionNo: 'Page 36 Opposites with \'S\'',
              questionText: 'Write opposites starting with letter \'S\': large, weak, fast, rough, dull, curved, finish, addition, complicated, mild, blunt.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Identify antonym for each word that strictly starts with the letter \'S\'.',
                'Step 2: Match with grade-appropriate vocabulary.'
              ],
              finalAnswer: 'large × small, weak × strong, fast × slow, rough × smooth, dull × shiny / sharp, curved × straight, finish × start, addition × subtraction, complicated × simple, mild × severe / strong, blunt × sharp.',
              keyTakeaway: 'Antonyms and alliterative vocabulary constraint.'
            },
            {
              id: 'c5-san-ch3-q10',
              questionNo: 'Page 39 Colour Combinations',
              questionText: 'Identify the resulting mixed colors: 1. red + blue 2. yellow + blue 3. red + yellow 4. red + white 5. red + black 6. red + yellow + blue.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Apply primary and secondary color theory.',
                'Step 2: Red + Blue = Purple, Yellow + Blue = Green, Red + Yellow = Orange, Red + White = Pink, Red + Black = Maroon, Red + Yellow + Blue = Brown.'
              ],
              finalAnswer: '1. purple (p u r p l e), 2. green (g r e e n), 3. orange (o r a n g e), 4. pink (p i n k), 5. maroon (m a r o o n), 6. brown (b r o w n).',
              keyTakeaway: 'Color mixing theory and spectral chromatic synthesis.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-santoor-ch4',
          chapterNumber: 4,
          title: "Unit 2: The Wise Parrot (बुद्धिमान तोता)",
          officialBookCode: 'eesa1',
          officialPdfUrl: '/pdf/Class 05/Santoor 5th NEW NCERT/eesa104_solved.pdf',
          nepHighlights: 'Wisdom vs strength, freedom values, collective nouns, present perfect tense mastery, phonics distinctions ("ai" vs "oi"), and eco-friendly DIY bird feeder.',
          summaryTextbook: 'A wealthy merchant keeps a bright, talkative parrot in a cage of gold. When asked what gift it desires from abroad, the parrot asks to send greetings to its wild forest friends. A wild parrot receives the message and immediately falls to the ground playing dead. When the merchant recounts this sorrowful event, the caged pet understands the secret clue, feigns death, and flies off to freedom when placed on the windowsill!',
          exerciseSolutions: [
            {
              id: 'c5-san-ch4-q1',
              questionNo: 'Page 45 Comprehension Q1',
              questionText: 'Why did the merchant keep the parrot in a cage of gold?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: The merchant was wealthy and loved the parrot dearly.',
                'Step 2: The parrot had a sharp mind and entertained the merchant with delightful stories and songs.'
              ],
              finalAnswer: 'The merchant kept the parrot in a cage of gold because he was rich and treasured the bird dearly for its sharp mind and entertaining songs.',
              keyTakeaway: 'Understanding character motivations in experiential storytelling.'
            },
            {
              id: 'c5-san-ch4-q2',
              questionNo: 'Page 45 Comprehension Q2',
              questionText: 'What made the parrot a favourite pet of the merchant?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Recall the parrot\'s abilities described in paragraph 1 of the story.',
                'Step 2: It possessed a quick wit, sharp mind, and sang beautiful songs.'
              ],
              finalAnswer: 'The parrot was the favourite pet because it had a sharp mind and constantly entertained the merchant with fascinating stories and songs.',
              keyTakeaway: 'Reading comprehension and character traits.'
            },
            {
              id: 'c5-san-ch4-q3',
              questionNo: 'Page 45 Comprehension Q3',
              questionText: 'What message did the parrot ask the merchant to convey to its friends?',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: When the merchant refused to release the bird, it sighed and made an alternate request.',
                'Step 2: It asked him to greet its jungle friends.'
              ],
              finalAnswer: 'The parrot requested: "When you see my friends in the jungle tell them that I send them greetings from my cage."',
              keyTakeaway: 'Textual recall and subtle narrative signaling.'
            },
            {
              id: 'c5-san-ch4-q4',
              questionNo: 'Page 45 Comprehension Q4',
              questionText: 'What happened after the merchant gave the message to the parrots?',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: The merchant spoke to a flight of parrots in the forest.',
                'Step 2: Immediately upon hearing the greeting, one parrot dropped down like a stone.'
              ],
              finalAnswer: 'As soon as the merchant finished speaking, one wild parrot dropped like a stone from the tree and fell to the ground, playing dead as a secret demonstration for escape.',
              keyTakeaway: 'Cause and effect relationships in plot development.'
            },
            {
              id: 'c5-san-ch4-q5',
              questionNo: 'Page 45 Comprehension Q5',
              questionText: 'How did the parrot escape from the cage?',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: The pet parrot heard what its friend did and feigned death on the cage floor.',
                'Step 2: The merchant placed the seemingly dead body on the windowsill.',
                'Step 3: The bird stirred, opened its wings, and flew away.'
              ],
              finalAnswer: 'The parrot feigned death inside its cage. When the merchant placed its body on the windowsill, the bird stirred, stretched its wings, and flew into the open sky.',
              keyTakeaway: 'Critical climax analysis and narrative problem solving.'
            },
            {
              id: 'c5-san-ch4-q6',
              questionNo: 'Page 46 Phrases Paragraph',
              questionText: 'Fill in the blanks with suitable phrases: stand upright, all over, look after, stepped out, went away, came across, about to.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Read the context of the winter morning rescue story.',
                'Step 2: Insert phrases in logical sequential order.'
              ],
              finalAnswer: 'stepped out, all over, came across, about to, stand upright, look after, went away.',
              keyTakeaway: 'Phrasal vocabulary and context-dependent usage.'
            },
            {
              id: 'c5-san-ch4-q7',
              questionNo: 'Page 46 Collective Nouns',
              questionText: 'Complete the sentences with collective nouns: pack, bouquet, army, flock, bunch, flight, swarm.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Parrots -> flight (given)',
                'Step 2: Sheep -> flock, Wolves -> pack, Flowers -> bouquet, Bees -> swarm, Ants -> army, Keys -> bunch.'
              ],
              finalAnswer: '1. flight of parrots, 2. flock of sheep, 3. pack of wolves, 4. bouquet of flowers, 5. swarm of bees, 6. army of ants, 7. bunch of keys.',
              keyTakeaway: 'Collective nouns standard classification in English grammar.'
            },
            {
              id: 'c5-san-ch4-q8',
              questionNo: 'Page 47 & 48 Present Perfect Tense',
              questionText: 'Complete sentences using present perfect tense (Subject + has/have + V3): (a) I ... (visit) Delhi. (b) She ... (draw) pictures. (c) Mr. Joon ... (buy) a car. (d) I ... (complete) homework and my brother ... (revise). (e) They ... (write) letters.',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Use "has" with singular subjects (she, Mr. Joon, brother). Use "have" with I and they.',
                'Step 2: Convert verbs to past participle (V3): visit->visited, draw->drawn, buy->bought, complete->completed, revise->revised, write->written.'
              ],
              finalAnswer: '(a) have visited, (b) has drawn, (c) has bought, (d) have completed / has revised, (e) have written.',
              keyTakeaway: 'Present perfect tense grammatical structure and past participle conjugation.'
            },
            {
              id: 'c5-san-ch4-q9',
              questionNo: 'Page 48 Bird Sanctuaries Listening',
              questionText: 'Answer questions based on the listening paragraph about bird sanctuaries in India.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Sanctuaries are built to protect endangered bird species.',
                'Step 2: India has over 70 bird sanctuaries.',
                'Step 3: Oldest: Vedanthangal (Tamil Nadu). Largest: Bharatpur (Rajasthan).'
              ],
              finalAnswer: '1. Purpose: To protect endangered birds and species. 2. Total in India: More than 70. 3. Oldest: Vedanthangal Bird Sanctuary (Tamil Nadu). 4. Largest: Bharatpur Bird Sanctuary (Rajasthan).',
              keyTakeaway: 'Listening comprehension and Indian geographical environmental awareness.'
            },
            {
              id: 'c5-san-ch4-q10',
              questionNo: 'Page 50 & 51 Bird Feeder Project',
              questionText: 'Identify bird feeder materials and outline steps to make an eco-friendly bird feeder.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Feeder 1 = Recycled Plastic Bottle & Wooden Spoons; Feeder 2 = Earthen Terracotta Saucer; Feeder 3 = Natural Coconut Shell.',
                'Step 2: Clean shell, pierce hanging holes, thread jute rope, fill with millets/grains, hang in safe spot.'
              ],
              finalAnswer: 'Materials: Coconut shell, earthen saucer, or plastic bottle with jute string. Steps: 1. Clean container, 2. Drill hanging holes, 3. Tie sturdy twine, 4. Fill with millets and water, 5. Hang outdoors safely.',
              keyTakeaway: 'Experiential environmental empathy and hands-on maker learning.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-santoor-ch6',
          chapterNumber: 6,
          title: "Unit 3: What a Tank! (पानी की टंकी)",
          officialBookCode: 'eesa1',
          officialPdfUrl: '/pdf/Class 05/Santoor 5th NEW NCERT/eesa106.pdf',
          nepHighlights: 'Ancient Indian water systems (Ooranis, Panam Keni, Tankas), rural Punjab rooftop cement art tanks, English contractions, animal family gender terms, exclamatory sentences with emotions, suffix word-building (-er, -or, -at), and community water awareness poster.',
          summaryTextbook: 'Water conservation is a centuries-old practice in India—from Tamil Nadu\'s Ooranis, Kerala\'s Panam Keni wells, to Rajasthan\'s underground Tankas. In rural Punjab, everyday rooftop overhead tanks become works of art reflecting the owner\'s identity (tractors, bullock carts, roosters, airplanes, and footballs). The chapter also features contractions, animal families, exclamatory sentences, and a story on living a day without water.',
          exerciseSolutions: [
            {
              id: 'c5-san-ch6-q1',
              questionNo: 'Page 68 Comprehension Q1',
              questionText: 'What do we use a water tank for?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Read page 66 of the chapter.',
                'Step 2: Water tanks store hundreds or thousands of litres of water for domestic use, drinking, bathing, and farming.'
              ],
              finalAnswer: 'We use a water tank to store hundreds and thousands of litres of water for daily household needs such as drinking, cooking, bathing, washing, and farming.',
              keyTakeaway: 'Water storage functions and everyday utilities.'
            },
            {
              id: 'c5-san-ch6-q2',
              questionNo: 'Page 68 Comprehension Q2',
              questionText: 'Where is Punjab located on the map of India?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Refer to page 67 paragraph 1.',
                'Step 2: Identify the geographical direction of Punjab.'
              ],
              finalAnswer: 'Punjab is a state located in the northwestern part of India.',
              keyTakeaway: 'Indian geography and regional identity.'
            },
            {
              id: 'c5-san-ch6-q3',
              questionNo: 'Page 68 Comprehension Q3',
              questionText: 'How are the water tanks in Punjab made?',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Refer to page 67 column 2.',
                'Step 2: Frame is made of steel rods, then cement and concrete are used to give the final artistic shape.'
              ],
              finalAnswer: 'The frame of the water tank is first constructed using steel rods. Then cement and concrete are applied to give it the final unique artistic shape before installation on the rooftop.',
              keyTakeaway: 'Construction process and craftsmanship.'
            },
            {
              id: 'c5-san-ch6-q4',
              questionNo: 'Page 68 Comprehension Q4',
              questionText: 'How do the unique shapes of water tanks reflect the identity of the house owners?',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Notice the correlation between occupation/hobby and tank shape on page 67.',
                'Step 2: Farmers have tractor or bullock cart tanks; sports lovers have football tanks.'
              ],
              finalAnswer: 'The shapes reflect the owner’s profession, passions, or interests. For example, a farmer may have a water tank shaped like a tractor, bullock cart, or rooster, while a sports lover might build one shaped like a giant football.',
              keyTakeaway: 'Creative self-expression through folk architecture.'
            },
            {
              id: 'c5-san-ch6-q5',
              questionNo: 'Page 69 Contractions Exercise',
              questionText: 'Write the contractions for: do not, is not, are not, cannot, could not, did not.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Combine the two words.',
                'Step 2: Replace the omitted letters with an apostrophe (\').'
              ],
              finalAnswer: '1. do not = don\'t, 2. is not = isn\'t, 3. are not = aren\'t, 4. cannot = can\'t, 5. could not = couldn\'t, 6. did not = didn\'t.',
              keyTakeaway: 'Punctuation and contractions grammar mastery.'
            },
            {
              id: 'c5-san-ch6-q6',
              questionNo: 'Page 71 Animal Families',
              questionText: 'Identify the young one and mother for: Bull, Lion, Tiger, Rooster, Stallion.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Recall gender and offspring terms in English.',
                'Step 2: Match male, young one, and female pairs.'
              ],
              finalAnswer: '1. Bull – Calf – Cow, 2. Lion – Lion cub – Lioness, 3. Tiger – Tiger cub – Tigress, 4. Rooster – Chick – Hen, 5. Stallion – Foal – Mare.',
              keyTakeaway: 'Biological classification and gender vocabulary.'
            },
            {
              id: 'c5-san-ch6-q7',
              questionNo: 'Page 75 Passage Comprehension Q1-5',
              questionText: 'Answer the 5 multiple choice questions on the story "A Day without Water".',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Read Suma\'s morning experience without running water.',
                'Step 2: Select the correct textual options.'
              ],
              finalAnswer: '1. Why surprised? (b) There was no water in the tap. 2. How managed? (b) Bought bottles and waited for water tankers. 3. Suma\'s promise? (b) To never waste water again. 4. Conservation week activities? (b) Poster-making and planting trees. 5. Suggestion to parents? (c) To fix a rainwater harvesting system.',
              keyTakeaway: 'Narrative listening and environmental conservation awareness.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },

    // 4. English (Marigold Book 5)
    {
      id: 'c5-english',
      name: 'English (Marigold Book 5)',
      iconName: 'BookOpen',
      color: '#f59e0b',
      description: '10 Units of Classical Literature & Fun: Ice-cream Man, Teamwork, Flying Together, Rip Van Winkle, Gulliver’s Travels & Malu Bhalu.',
      totalChapters: 10,
      coverImageUrl: '/book-covers/class5-english-marigold.jpg',
      chapters: [
        {
          id: 'c5-eng-u1',
          chapterNumber: 1,
          title: 'Unit 1: Ice-cream Man & Wonderful Waste!',
          officialBookCode: 'ehmg1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehmg101.pdf',
          nepHighlights: 'Poetic imagery (Rachel Field) & origin story of Avial dish in Travancore, Kerala (waste management).',
          summaryTextbook: 'Rachel Field’s poem "Ice-cream Man" describing summer joy, and the folktale "Wonderful Waste!" where the Maharaja of Travancore commands the royal cook to create the famous dish Avial from vegetable scrap peels.',
          exerciseSolutions: [
            {
              id: 'c5-eng-u1-q1',
              questionNo: 'Reading is Fun Q1',
              questionText: 'In which season is ice-cream most popular, and who feels joyful seeing the Ice-cream Man?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Ice-cream is most popular during the hot summer season.',
                'Step 2: Children and everyone on the city streets feel delighted seeing the cart filled with vanilla, chocolate, and strawberry cones.'
              ],
              finalAnswer: 'Summer season; children and city people feel joyful.',
              keyTakeaway: 'Appreciating sensory descriptions enriches English language reading comprehension.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-eng-u2',
          chapterNumber: 2,
          title: 'Unit 2: Teamwork & Flying Together',
          officialBookCode: 'ehmg1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehmg102.pdf',
          nepHighlights: 'Panchatantra adaptation on listening to wise elders & collective strength against bird hunters.',
          summaryTextbook: 'Jan Nigro poem "Teamwork" on passing the baton in relay races, and Panchatantra tale "Flying Together" about wild geese trapped in a hunter’s net who escape by flying together on the old wise bird’s advice.',
          exerciseSolutions: [
            {
              id: 'c5-eng-u2-q1',
              questionNo: 'Moral Lesson',
              questionText: 'How did the flock of wild geese escape from the hunter’s net in "Flying Together"?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: They pretended to be dead so the hunter would toss them to the ground one by one.',
                'Step 2: When the last goose was thrown, they all flapped their wings and flew away together at once.'
              ],
              finalAnswer: 'By acting dead and taking flight simultaneously as a coordinated team.',
              keyTakeaway: 'United we stand, divided we fall; always respect the wisdom of experienced elders.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-eng-u3',
          chapterNumber: 3,
          title: 'Unit 3: My Shadow & Robinson Crusoe',
          officialBookCode: 'ehmg1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehmg103.pdf',
          nepHighlights: 'Robert Louis Stevenson light and shadow poem, and Daniel Defoe classic adventure novel extract.',
          summaryTextbook: 'R.L. Stevenson’s amusing poem "My Shadow" about a shadow growing tall like an India-rubber ball, and Robinson Crusoe discovering a mysterious solitary human footprint in the sand of his uninhabited island.',
          exerciseSolutions: [
            {
              id: 'c5-eng-u3-q1',
              questionNo: 'Crusoe Adventure',
              questionText: 'Why was Robinson Crusoe terrified upon discovering the single footprint on the sand?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: He had lived alone on the isolated island for many years believing no other humans were present.',
                'Step 2: Finding a print with toes, heel, and exact human shape made him realize cannibals or savages might be nearby.'
              ],
              finalAnswer: 'Because it proved another human had landed on his isolated island.',
              keyTakeaway: 'Suspense and vivid descriptive details make narrative adventure writing thrilling.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-eng-u4',
          chapterNumber: 4,
          title: 'Unit 4: Crying & My Elder Brother',
          officialBookCode: 'ehmg1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehmg104.pdf',
          nepHighlights: 'Galway Kinnell emotional release poem & Munshi Premchand "Bade Bhai Sahab" drama translation.',
          summaryTextbook: 'Poem "Crying" teaching that crying until tears run dry leads to uninhibited laughter, and Munshi Premchand’s masterpiece "My Elder Brother" portraying sibling love, experiential wisdom vs rote bookish exams.',
          exerciseSolutions: [
            {
              id: 'c5-eng-u4-q1',
              questionNo: 'Bade Bhai Sahab Insight',
              questionText: 'What important lesson did Bade Bhai Sahab teach his younger brother who was proud of passing with flying colors?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Academic grades alone do not equal life wisdom or real-world experience.',
                'Step 2: Pride and arrogance lead to downfalls (just as with King Ravana).',
                'Step 3: Elder brothers have the duty to guide and correct younger siblings regardless of class scores.'
              ],
              finalAnswer: 'Life experience and moral character are far greater than memorized exam marks.',
              keyTakeaway: 'Humility and respect for parental experience guide genuine human development.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-eng-u5',
          chapterNumber: 5,
          title: 'Unit 5: The Lazy Frog & Rip Van Winkle',
          officialBookCode: 'ehmg1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehmg105.pdf',
          nepHighlights: 'Humorous poetry on overcoming sloth & Washington Irving Catskill Mountains legend.',
          summaryTextbook: 'The poem "The Lazy Frog" about Fred who refuses to move even for his elderly mother, and Washington Irving’s story of good-natured Rip Van Winkle who falls asleep in the mountains for twenty years.',
          exerciseSolutions: [
            {
              id: 'c5-eng-u5-q1',
              questionNo: 'Rip Van Winkle Legend',
              questionText: 'What strange thing happened to Rip Van Winkle after he drank from the barrel in the Catskill Mountains?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: He fell into a deep sleep upon the mountain slope.',
                'Step 2: When he woke up, his gun was rusty, his dog Wolf was gone, his beard was a foot long, and twenty years had passed in his village.'
              ],
              finalAnswer: 'He slept for 20 years continuously and woke up an old man with a long white beard.',
              keyTakeaway: 'Time moves relentlessly forward; procrastination and idle wandering waste precious years.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-eng-u6',
          chapterNumber: 6,
          title: 'Unit 6: Class Discussion & The Talkative Barber',
          officialBookCode: 'ehmg1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehmg106.pdf',
          nepHighlights: 'Gervase Phinn poem celebrating quiet introverts & Arabian Nights folktale comedy.',
          summaryTextbook: 'Gervase Phinn poem "Class Discussion" appreciating quiet student Jane, and the Arabian Nights tale "The Talkative Barber" about a Sultan in Cashgar driven mad by a chatty barber with six brothers.',
          exerciseSolutions: [
            {
              id: 'c5-eng-u6-q1',
              questionNo: 'Quiet Reflection',
              questionText: 'What did the teacher ask Jane in the poem "Class Discussion" and what was Jane’s graceful reply?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: The teacher noticed everyone was chattering loudly except Jane who stared in silence.',
                'Step 2: Jane calmly replied: "There are many people in this world who are rather quiet by nature."'
              ],
              finalAnswer: 'Jane stated that being quiet and observant is a natural, thoughtful personality quality.',
              keyTakeaway: 'Deep thinkers listen attentively; classrooms must value both vocal and quiet learners.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-eng-u7',
          chapterNumber: 7,
          title: "Unit 7: Topsy-turvy Land & Gulliver's Travels",
          officialBookCode: 'ehmg1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehmg107.pdf',
          nepHighlights: 'H.E. Wilkinson fantasy nonsense poem & Jonathan Swift Brobdingnag giant land adventure.',
          summaryTextbook: 'The imaginative poem "Topsy-turvy Land" where people walk on their heads and seas are made of sand, paired with Gulliver’s voyage to Brobdingnag where giant farmers treat him like a tiny curiosity.',
          exerciseSolutions: [
            {
              id: 'c5-eng-u7-q1',
              questionNo: 'Topsy-Turvy Imagination',
              questionText: 'List three funny inversions that happen in Topsy-turvy Land.',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: People walk upon their heads instead of their feet.',
                'Step 2: The sea is filled with dry sand and children go to school by night.',
                'Step 3: You pay for what you never get and wear your hat upon your feet.'
              ],
              finalAnswer: 'Walking on heads, sea of sand, nighttime school, and hats on feet.',
              keyTakeaway: 'Creative imagination allows writers to invert reality and invent playful worlds.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-eng-u8',
          chapterNumber: 8,
          title: "Unit 8: Nobody's Friend & The Little Bully",
          officialBookCode: 'ehmg1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehmg108.pdf',
          nepHighlights: 'Enid Blyton sharing ethos poem & anti-bullying empathy lesson through seaside crabs and lobsters.',
          summaryTextbook: 'Enid Blyton poem "Nobody’s Friend" contrasting selfish hoarders with generous sharers, and Enid Blyton’s story "The Little Bully" about Hari who pinches classmates until seashore crabs and lobsters pinch him back.',
          exerciseSolutions: [
            {
              id: 'c5-eng-u8-q1',
              questionNo: 'Empathy Awakening',
              questionText: 'Why did Hari stop pinching and pricking children after the seaside picnic?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Big crabs, lobsters, and shrimps pinched Hari with their sharp claws until he cried out in pain.',
                'Step 2: He realized firsthand how terribly his own pinches hurt other boys and girls.',
                'Step 3: He threw away his selfish habits and became empathetic.'
              ],
              finalAnswer: 'Experiencing the severe pain of being pinched made him understand how much he had hurt others.',
              keyTakeaway: 'Empathy—treating others the way you want to be treated—is the foundation of friendship.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-eng-u9',
          chapterNumber: 9,
          title: 'Unit 9: Sing a Song of People & Around the World',
          officialBookCode: 'ehmg1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehmg109.pdf',
          nepHighlights: 'Lois Lenski bustling city rhythm poem & Jules Verne 80-day world voyage across India and America.',
          summaryTextbook: 'Lois Lenski’s poem "Sing a Song of People" capturing crowds in subways and tall elevators, and Jules Verne’s adventure "Around the World in Eighty Days" featuring Phileas Fogg and Passepartout traversing the Pacific railroad.',
          exerciseSolutions: [
            {
              id: 'c5-eng-u9-q1',
              questionNo: 'Global Geography Travel',
              questionText: 'Which famous adventure novel by Jules Verne describes Phileas Fogg’s worldwide journey?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: The novel is titled "Around the World in Eighty Days".',
                'Step 2: The characters travel by steamships, trains, and even an elephant across India and the Americas.'
              ],
              finalAnswer: 'Around the World in Eighty Days by Jules Verne.',
              keyTakeaway: 'Transportation advances historically connected diverse global continents and cultures.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-eng-u10',
          chapterNumber: 10,
          title: 'Unit 10: Malu Bhalu & Who Will be Ningthou?',
          officialBookCode: 'ehmg1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ehmg110.pdf',
          nepHighlights: 'Kamla Bhasin polar bear bravery poem & Manipuri folktale on compassionate democratic leadership.',
          summaryTextbook: 'Kamla Bhasin’s spirited poem "Malu Bhalu" about a young polar bear learning to swim fearlessly in the Arctic, and the Manipuri legend "Who Will be Ningthou?" where princess Sanatombi is chosen ruler for protecting birds, trees, and people.',
          exerciseSolutions: [
            {
              id: 'c5-eng-u10-q1',
              questionNo: 'True Leadership Moral',
              questionText: 'Why did the King and Queen of Manipur choose Princess Sanatombi as the next Ningthou (Ruler)?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Her three brothers showed only brute physical power by piercing their spears into an ancient banyan tree.',
                'Step 2: Sanatombi felt deep pain for the wounded tree and the distressed birds whose nests were destroyed.',
                'Step 3: A true ruler is one who feels the suffering of every human, bird, and living creature in the land.'
              ],
              finalAnswer: 'Because she showed universal compassion and environmental care for all living beings.',
              keyTakeaway: 'True leadership is defined by empathy, environmental stewardship, and justice.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },

    // 4. Hindi (Rimjhim 5 / रिमझिम भाग 5)
    {
      id: 'c5-hindi',
      name: 'Hindi (Rimjhim / रिमझिम भाग 5)',
      iconName: 'Sparkles',
      color: '#ec4899',
      description: '18 साहित्य व कविता पाठ: राख की रस्सी, फ़सलों के त्योहार, खिलौनेवाला, नन्हा फ़नकार, डाकिए की कहानी, चुनौती हिमालय की।',
      totalChapters: 18,
      coverImageUrl: '/book-covers/class5-hindi-rimjhim.jpg',
      chapters: [
        {
          id: 'c5-hin-ch1',
          chapterNumber: 1,
          title: 'पाठ 1: राख की रस्सी (तिब्बती लोककथा)',
          officialBookCode: 'hhrj1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/hhrj101.pdf',
          nepHighlights: 'तिब्बत के 32वें राजा सोंगवत्सन गम्पो के मंत्री लोनपो गार की होशियारी और चतुर लड़की की सूझबूझ।',
          summaryTextbook: 'लोनपो गार अपने सीधे-सादे बेटे की शादी एक समझदार लड़की से कराने के लिए राख की रस्सी बनाने की कठिन शर्त रखते हैं, जिसे लड़की सिल पर जलाकर पूरा कर देती है।',
          exerciseSolutions: [
            {
              id: 'c5-hin-ch1-q1',
              questionNo: 'भोला-भाला प्रश्न 1',
              questionText: 'तिब्बत के मंत्री लोनपो गार अपने बेटे के सीधेपन को लेकर क्यों चिंतित रहते थे?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'चरण 1: लोनपो गार बहुत चालाक और हाजिरजवाब मंत्री थे।',
                'चरण 2: उनका बेटा बहुत सीधा-सादा और भोला था, उसे दुनियादारी की कोई समझ नहीं थी।',
                'चरण 3: वे सोचते थे कि उनके बाद उनके बेटे का काम कैसे चलेगा।'
              ],
              finalAnswer: 'वे अपने बेटे के अत्यधिक सीधेपन और दुनियादारी की नासमझी के कारण चिंतित थे।',
              keyTakeaway: 'बुद्धिमत्ता और सूझबूझ से कठिन से कठिन समस्याओं का समाधान संभव है।'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-hin-ch2',
          chapterNumber: 2,
          title: 'पाठ 2: फ़सलों के त्योहार (लेख)',
          officialBookCode: 'hhrj1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/hhrj102.pdf',
          nepHighlights: 'मकर संक्रांति, पोंगल, लोहड़ी, बिहू, सरहुल जैसे फसल उत्सवों की सांस्कृतिक विविधता।',
          summaryTextbook: 'भारत के विभिन्न प्रांतों में जनवरी माह में फसलों के तैयार होने पर मनाए जाने वाले आनंदोत्सव—बिहार में खिचड़ी/मकर संक्रांति, तमिलनाडु में पोंगल, असम में बिहू और झारखंड में सरहुल का सुंदर वर्णन।',
          exerciseSolutions: [
            {
              id: 'c5-hin-ch2-q1',
              questionNo: 'त्योहारों की समझ',
              questionText: 'भारत में फसलों से जुड़े कौन-कौन से प्रमुख त्योहार विभिन्न राज्यों में मनाए जाते हैं?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'चरण 1: उत्तर भारत (बिहार, यूपी, मध्य प्रदेश): मकर संक्रांति (खिचड़ी)।',
                'चरण 2: पंजाब: लोहड़ी; तमिलनाडु: पोंगल; असम: बिहू।',
                'चरण 3: झारखंड: सरहुल; गुजरात: पतंग पर्व।'
              ],
              finalAnswer: 'मकर संक्रांति, पोंगल, लोहड़ी, बिहू और सरहुल।',
              keyTakeaway: 'भारतीय त्योहार प्रकृति, कृषि और सामाजिक सद्भाव से गहरे जुड़े हैं।'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-hin-ch3',
          chapterNumber: 3,
          title: 'पाठ 3: खिलौनेवाला (कविता - सुभद्रा कुमारी चौहान)',
          officialBookCode: 'hhrj1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/hhrj103.pdf',
          nepHighlights: 'सुभद्रा कुमारी चौहान की राष्ट्रप्रेम व बालमनोविज्ञान कविता, बालक का राम बनकर ताड़का वध करने का संकल्प।',
          summaryTextbook: 'गली में खिलौने वाले की मधुर आवाज सुनकर बालक माँ से पैसे माँगता है, पर वह गुड़िया या मोटर गाड़ी न लेकर तीर-कमान और तलवार लेकर श्री रामचंद्र की तरह असुरों को भगाने की इच्छा व्यक्त करता है।',
          exerciseSolutions: [
            {
              id: 'c5-hin-ch3-q1',
              questionNo: 'कविता से प्रश्न 1',
              questionText: 'बालक खिलौने वाले से कौन-से खिलौने लेना चाहता है और क्यों?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'चरण 1: बालक तीर-कमान और तलवार खरीदना चाहता है।',
                'चरण 2: वह श्री राम की तरह जंगल में जाकर असुरों और ताड़का का संहार करना चाहता है ताकि ऋषि-मुनि शांति से यज्ञ कर सकें।'
              ],
              finalAnswer: 'तीर-कमान और तलवार, ताकि वह मर्यादा पुरुषोत्तम राम की तरह राक्षसों से रक्षा कर सके।',
              keyTakeaway: 'कविता बालमन में साहस, वीरता और धर्मपरायणता की भावना जाग्रत करती है।'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-hin-ch4',
          chapterNumber: 4,
          title: 'पाठ 4: नन्हा फ़नकार (कहानी)',
          officialBookCode: 'hhrj1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/hhrj104.pdf',
          nepHighlights: 'फतेहपुर सीकरी में पत्थर तराशने वाले 10 वर्षीय केशव और शहंशाह अकबर का प्रेरणादायक संवाद।',
          summaryTextbook: 'आगरा से सीकरी आए नन्हें केशव की छैनी-हथौड़े से पत्थर पर घंटी तराशने की लगन देखकर बादशाह अकबर स्वयं उसके पास बैठकर नक्काशी सीखने का विनम्र आग्रह करते हैं।',
          exerciseSolutions: [
            {
              id: 'c5-hin-ch4-q1',
              questionNo: 'कहानी से प्रश्न',
              questionText: 'बादशाह अकबर ने केशव के काम की प्रशंसा करते हुए उससे क्या कहा?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'चरण 1: अकबर ने केशव की नक्काशी को बहुत खूबसूरत और उम्दा बताया।',
                'चरण 2: उन्होंने कहा कि एक दिन तुम बहुत बड़े फनकार (कलाकार) बनोगे और हमारे शाही कारखाने में काम करोगे।'
              ],
              finalAnswer: 'अकबर ने केशव को भविष्य का महान कलाकार बनने का आशीर्वाद दिया।',
              keyTakeaway: 'सच्ची कला और लगन की कद्र हर महान व्यक्ति और शासक करता है।'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-hin-ch5',
          chapterNumber: 5,
          title: 'पाठ 5: जहाँ चाह वहाँ राह (लेख - इला सचानी)',
          officialBookCode: 'hhrj1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/hhrj105.pdf',
          nepHighlights: 'गुजरात की दिव्यांग बेटी इला सचानी द्वारा पैरों की उंगलियों से कसीदाकारी (काठियावाड़ी कशीदा) की विश्वविख्यात मिसाल।',
          summaryTextbook: 'हाथों से काम न कर पाने के बावजूद हार न मानकर पैरों की उंगलियों से सुई में धागा पिरोना सीखकर काठियावाड़ी कशीदाकारी में महारत हासिल करने वाली इला सचानी की अदम्य इच्छाशक्ति का प्रेरक जीवन वृत्त।',
          exerciseSolutions: [
            {
              id: 'c5-hin-ch5-q1',
              questionNo: 'इला की हिम्मत',
              questionText: 'इला सचानी ने अपनी शारीरिक कमजोरी को किस प्रकार अपनी सबसे बड़ी ताकत में बदला?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'चरण 1: इला के दोनों हाथ काम नहीं करते थे।',
                'चरण 2: उसने निरंतर अभ्यास से पैरों की उंगलियों से सुई पकड़ना और कशीदाकारी करना सीखा।',
                'चरण 3: उसने पारंपरिक काठियावाड़ी टांकों में नई डिजाइनें बनाकर सबको चकित कर दिया।'
              ],
              finalAnswer: 'दृढ़ संकल्प और अनवरत अभ्यास से पैरों से अद्भुत कसीदाकारी करके।',
              keyTakeaway: 'दृढ़ इच्छाशक्ति और कठिन परिश्रम से मनुष्य किसी भी शारीरिक बाधा को पार कर सकता है।'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-hin-ch6',
          chapterNumber: 6,
          title: 'पाठ 6: चिट्ठी का सफ़र (लेख)',
          officialBookCode: 'hhrj1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/hhrj106.pdf',
          nepHighlights: 'कबूतरों (हरकारे) से लेकर 6 अंकों वाले पिनकोड (Postal Index Number) और आधुनिक डाक प्रणाली का इतिहास।',
          summaryTextbook: 'पत्र पर सही नाम, पता और पिन कोड का महत्व, 15 अगस्त 1972 से शुरू पिन कोड प्रणाली, हरकारे धावकों का इतिहास और उड़ीसा पुलिस की होमर कबूतर संदेश सेवा का ज्ञानवर्धक विवरण।',
          exerciseSolutions: [
            {
              id: 'c5-hin-ch6-q1',
              questionNo: 'पिन कोड ज्ञान',
              questionText: 'पिन कोड (PIN Code) का पूरा नाम क्या है और इसमें कुल कितने अंक होते हैं?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'चरण 1: पिन कोड का पूरा नाम Postal Index Number (पोस्टल इंडेक्स नंबर) है।',
                'चरण 2: इसमें कुल 6 अंक होते हैं।',
                'चरण 3: पहला अंक क्षेत्र (Region) और अंतिम अंक संबंधित उप-डाकघर को दर्शाता है।'
              ],
              finalAnswer: 'Postal Index Number; इसमें 6 अंक होते हैं।',
              keyTakeaway: 'सटीक पिन कोड लिखने से पत्र बिना किसी विलंब के सही गंतव्य तक पहुँचता है।'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-hin-ch7',
          chapterNumber: 7,
          title: 'पाठ 7: डाकिए की कहानी, कंवरसिंह की ज़बानी (भेंटवार्ता)',
          officialBookCode: 'hhrj1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/hhrj107.pdf',
          nepHighlights: 'हिमाचल प्रदेश के पहाड़ी डाकिए कंवरसिंह का कठिन कर्तव्य, ' + 'बेस्ट पोस्टमैन' + ' राष्ट्रीय पुरस्कार।',
          summaryTextbook: 'शिमला के नेरवा मुख्यालय में तैनात डाक सेवक कंवरसिंह की बर्फ़ीले दुर्गम रास्तों पर डाक पहुँचाने की दास्तान, लुटेरों से डाक थैले बचाते हुए घायल होना और 2004 में राष्ट्रपति द्वारा बेस्ट पोस्टमैन सम्मान प्राप्त करना।',
          exerciseSolutions: [
            {
              id: 'c5-hin-ch7-q1',
              questionNo: 'कंवरसिंह का साक्षात्कार',
              questionText: 'पहाड़ी क्षेत्रों में डाक पहुँचाने में डाकिए को किन-किन मुख्य कठिनाइयों का सामना करना पड़ता है?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'चरण 1: बर्फबारी में मीलों पैदल चलना जिससे पैर सुन्न (गैंग्रीन) होने का खतरा रहता है।',
                'चरण 2: जंगली जानवरों और भूस्खलन का जोखिम।',
                'चरण 3: दूर-दराज के बुजुर्गों तक मनीऑर्डर और पेंशन पहुँचाने का भारी दायित्व।'
              ],
              finalAnswer: 'बर्फबारी, मीलों दुर्गम पैदल यात्रा, भूस्खलन और कड़ाके की ठंड।',
              keyTakeaway: 'कठिन परिस्थितियों में निष्ठापूर्वक कर्तव्य निभाना ही सच्ची राष्ट्रसेवा है।'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-hin-ch8',
          chapterNumber: 8,
          title: 'पाठ 8: वे दिन भी क्या दिन थे (विज्ञान कथा - आइज़क असिमोव)',
          officialBookCode: 'hhrj1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/hhrj108.pdf',
          nepHighlights: 'वर्ष 2155 के भविष्य में रोबोटिक स्क्रीन लर्निंग बनाम 20वीं सदी के सहपाठी स्कूल जीवन की कल्पना।',
          summaryTextbook: 'कुम्मी और रोहित को 138 साल पुरानी एक असली कागजी किताब मिलती है। वे यह जानकर हैरान होते हैं कि पुराने जमाने में बच्चे एक साथ स्कूल की इमारत में जाकर मानवीय अध्यापकों से सीखते थे और मिल-जुलकर खेलते थे।',
          exerciseSolutions: [
            {
              id: 'c5-hin-ch8-q1',
              questionNo: 'भविष्य की शिक्षा',
              questionText: 'कुम्मी को 2155 के अपने मशीनी अध्यापक (कंप्यूटर) की तुलना में पुराने जमाने के स्कूल ज्यादा मजेदार क्यों लगे?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'चरण 1: पुराने स्कूलों में सभी बच्चे एक साथ बैठकर पढ़ते और खेलते थे।',
                'चरण 2: शिक्षक इंसान होते थे जो बच्चों की भावनाओं को समझते थे।',
                'चरण 3: गृहकार्य और पढ़ाई में सहपाठियों का आपसी सहयोग रहता था।'
              ],
              finalAnswer: 'क्योंकि वहाँ सभी बच्चे एक साथ मिलकर पढ़ते, खेलते और मानवीय शिक्षकों से सीखते थे।',
              keyTakeaway: 'सहपाठी संवाद और मानवीय शिक्षक का स्नेह मशीनी स्क्रीन कभी नहीं दे सकती।'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-hin-ch9',
          chapterNumber: 9,
          title: 'पाठ 9: एक माँ की बेबसी (कविता - कुंवर नारायण)',
          officialBookCode: 'hhrj1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/hhrj109.pdf',
          nepHighlights: 'बोलने में असमर्थ मूक-बधिर बच्चे रतन और उसकी माँ की आँखों में झलकती वात्सल्य बेबसी की संवेदनशील अभिव्यक्ति।',
          summaryTextbook: 'कवि कुंवर नारायण बचपन के उस गूंगे बालक रतन को याद करते हैं जो अन्य बच्चों के साथ खेलता था, पर बोल न पाने के कारण सहमा रहता था, और किनारे बैठी उसकी माँ की आँखों में छलकती बेबसी का मार्मिक चित्रण।',
          exerciseSolutions: [
            {
              id: 'c5-hin-ch9-q1',
              questionNo: 'संवेदना प्रश्न',
              questionText: 'रतन के साथ खेलते समय उसकी माँ की आँखों में कौन-सी भावना दिखाई देती थी?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'चरण 1: रतन अन्य बच्चों की तरह बोल नहीं सकता था।',
                'चरण 2: उसकी माँ एकटक उसे देखती रहती थी ताकि उसे कोई कष्ट न हो।',
                'चरण 3: उसकी आँखों में अपने बच्चे के बोल न पाने की गहरी बेबसी और अपार ममता झलकती थी।'
              ],
              finalAnswer: 'अपने मूक बच्चे के प्रति अपार वात्सल्य और गहरे दर्द की बेबसी।',
              keyTakeaway: 'विशेष आवश्यकता वाले बच्चों और उनके परिवारों के प्रति संवेदनशीलता व सहयोग रखना चाहिए।'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-hin-ch10',
          chapterNumber: 10,
          title: 'पाठ 10: एक दिन की बादशाहत (कहानी - जिलानी बानो)',
          officialBookCode: 'hhrj1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/hhrj110.pdf',
          nepHighlights: 'बाल अधिकारों व पारिवारिक बड़ों के व्यवहार को बच्चों के दृष्टिकोण से देखने की हास्यपूर्ण कथा।',
          summaryTextbook: 'आरिफ और सलीम रोज-रोज की पाबंदियों से तंग आकर अब्बा से एक दिन के लिए बड़ों के सभी अधिकार माँग लेते हैं। पूरे दिन वे घर के बड़ों को वही हुक्म देते हैं जो बड़े उन्हें देते थे, जिससे सबको अपनी गलतियों का अहसास होता है।',
          exerciseSolutions: [
            {
              id: 'c5-hin-ch10-q1',
              questionNo: 'बादशाहत का असर',
              questionText: 'एक दिन की बादशाहत मिलने पर आरिफ और सलीम ने घर के बड़ों के साथ कैसा व्यवहार किया?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'चरण 1: उन्होंने अम्मी को सुबह जल्दी उठने और कॉलेज के लिए डाँटा।',
                'चरण 2: उन्होंने अब्बा को मीठी चाय पीने से रोका और अपनी मनपसंद चीजें नाश्ते में बनवाईं।',
                'चरण 3: उन्होंने बड़ों को अहसास कराया कि हर बात पर रोक-टोक बच्चों को कितनी अखरती है।'
              ],
              finalAnswer: 'उन्होंने बड़ों को उन्हीं के कड़े नियमों का पालन करवाकर उनकी अनुचित रोक-टोक का अहसास कराया।',
              keyTakeaway: 'सद्भावपूर्ण पारिवारिक जीवन के लिए बड़ों और बच्चों के बीच आपसी सम्मान आवश्यक है।'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-hin-ch11',
          chapterNumber: 11,
          title: 'पाठ 11: चावल की रोटियाँ (नाटक - पी. आन चिन)',
          officialBookCode: 'hhrj1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/hhrj111.pdf',
          nepHighlights: 'बर्मी नाटक: झूठ बोलने से पैदा होने वाली हास्यास्पद स्थितियाँ और लालच का परिणाम।',
          summaryTextbook: 'कोको अपनी चार स्वादिष्ट चावल की रोटियों को दोस्तों (निनी, मीमी, तिनसू) से छिपाने के लिए एक के बाद एक कई मजेदार झूठ बोलता है, और अंत में उबासी उबासी में रेडियो और चाय के चक्कर में सारी रोटियाँ खो बैठता है।',
          exerciseSolutions: [
            {
              id: 'c5-hin-ch11-q1',
              questionNo: 'नाटक का सार',
              questionText: 'कोको अपनी चावल की रोटियाँ दोस्तों से क्यों छिपाना चाहता था और इसका क्या परिणाम निकला?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'चरण 1: कोको लालची था और सारी रोटियाँ अकेले खाना चाहता था।',
                'चरण 2: रोटियाँ छिपाने के लिए उसने पेट दर्द और रेडियो खराबी के झूठे बहाने बनाए।',
                'चरण 3: अंत में उबासी दुकान वाले चाचा सारी रोटियाँ घर ले गए और कोको भूखा ही रह गया।'
              ],
              finalAnswer: 'अकेले खाने के लालच में; परिणाम यह हुआ कि उसे एक भी रोटी नसीब नहीं हुई।',
              keyTakeaway: 'एक झूठ को छिपाने के लिए सौ झूठ बोलने पड़ते हैं और लालच का अंत सदैव बुरा होता है।'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-hin-ch12',
          chapterNumber: 12,
          title: 'पाठ 12: गुरु और चेला (कविता - सोहनलाल द्विवेदी)',
          officialBookCode: 'hhrj1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/hhrj112.pdf',
          nepHighlights: 'अंधेर नगरी अनबूझ राजा की प्रसिद्ध हास्य-व्यंग्य कविता, टके सेर भाजी टके सेर खाजा।',
          summaryTextbook: 'सोहनलाल द्विवेदी की प्रसिद्ध कविता जहाँ मूर्ख राजा दीवार गिरने के अपराध में एक के बाद एक निर्दोषों को बदलते हुए अंत में अपनी ही गर्दन के नाप की फाँसी पर गुरु की चतुराई से स्वयं चढ़ जाता है।',
          exerciseSolutions: [
            {
              id: 'c5-hin-ch12-q1',
              questionNo: 'अंधेर नगरी व्यंग्य',
              questionText: 'गुरु ने अपने चेले की जान बचाने के लिए क्या युक्ति अपनाई?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'चरण 1: गुरु ने राजा से कहा कि यह फाँसी का ऐसा शुभ मुहूर्त है कि जो इस समय फाँसी चढ़ेगा वह चक्रवर्ती राजा बनेगा।',
                'चरण 2: मूर्ख राजा लालच में आकर चेले को हटाकर स्वयं फाँसी के फंदे पर झूल गया।'
              ],
              finalAnswer: 'शुभ मुहूर्त में फाँसी चढ़कर चक्रवर्ती सम्राट बनने का भ्रम पैदा करके राजा को फाँसी पर चढ़वा दिया।',
              keyTakeaway: 'मूर्ख और विवेकहीन राजा के राज्य में संकट कभी भी आ सकता है; बुद्धि से संकट टलता है।'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-hin-ch13',
          chapterNumber: 13,
          title: 'पाठ 13: स्वामी की दादी (कहानी - आर. के. नारायण)',
          officialBookCode: 'hhrj1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/hhrj113.pdf',
          nepHighlights: 'मालगुडी डेज का बाल चरित्र स्वामीनाथन और उसकी दादी का आत्मीय वार्तालाप।',
          summaryTextbook: 'स्वामी अपनी दादी के पुराने अंधेरे कमरे में बैठकर अपने नए दोस्त राजम के पुलिस उपाधीक्षक पिता की बहादुरी और शेरों के शिकार की कहानियाँ सुनाता है और दादी के अपने दादाजी के किस्सों से उसका प्यारा नोक-झोंक संवाद।',
          exerciseSolutions: [
            {
              id: 'c5-hin-ch13-q1',
              questionNo: 'मालगुडी संवाद',
              questionText: 'स्वामीनाथन अपनी दादी को अपने मित्र राजम के बारे में क्या-क्या खास बातें बताता था?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'चरण 1: राजम के पिता पुलिस उपाधीक्षक (DSP) हैं और उनके पास असली पुलिस वर्दी और बंदूक है।',
                'चरण 2: राजम ने बचपन में जंगल में दो शेरों का डटकर मुकाबला किया था।',
                'चरण 3: वह कक्षा में सबसे होशियार है और हमेशा 90% से अधिक अंक लाता है।'
              ],
              finalAnswer: 'राजम की बहादुरी, पुलिस उपाधीक्षक पिता और पढ़ाई में अव्वल आने की प्रशंसा करता था।',
              keyTakeaway: 'दादा-दादी के साथ बच्चों का संवाद भावनात्मक सुरक्षा और पारिवारिक संबंधों को मजबूत करता है।'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-hin-ch14',
          chapterNumber: 14,
          title: 'पाठ 14: बाघ आया उस रात (कविता - नागार्जुन)',
          officialBookCode: 'hhrj1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/hhrj114.pdf',
          nepHighlights: 'जनकवि नागार्जुन की बाल कविता: मानव बस्तियों में वन्यजीवों के प्रवेश का मनोवैज्ञानिक भय।',
          summaryTextbook: 'पाँच साल का बेटू अपने पिता को चेतावनी देता है कि बाघिन और उसके दो बच्चे झरने के पास रहते हैं, इसलिए रात को बाहर न निकलें क्योंकि बाघ किसी दफ्तर या कॉलेज में काम नहीं करता, वह कभी भी आ सकता है।',
          exerciseSolutions: [
            {
              id: 'c5-hin-ch14-q1',
              questionNo: 'नागार्जुन कविता',
              questionText: 'बालक अपने बाबा को रात के समय बाहर जाने से क्यों मना कर रहा था?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'चरण 1: उसने दिन में झरने के पास बाघिन और उसके बच्चों को देखा था।',
                'चरण 2: उसे भय था कि रात के अंधेरे में बाघ बस्ती की तरफ आ सकता है।'
              ],
              finalAnswer: 'क्योंकि रात के समय बस्ती के पास बाघ के आने का खतरा था।',
              keyTakeaway: 'वनों के कटने से वन्यजीव बस्तियों में आने को विवश होते हैं; पर्यावरण संतुलन अनिवार्य है।'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-hin-ch15',
          chapterNumber: 15,
          title: 'पाठ 15: बिशन की दिलेरी (कहानी - प्रतिभा नाथ)',
          officialBookCode: 'hhrj1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/hhrj115.pdf',
          nepHighlights: 'पहाड़ी बालक बिशन द्वारा शिकारियों की गोली से घायल तीतर पक्षी की जान बचाने का साहसिक प्रयास।',
          summaryTextbook: 'कर्नल दत्ता के फार्म हाउस के पास सेब के बागानों में 10 वर्षीय बिशन शिकारियों द्वारा घायल किए गए तीतर को अपनी जान जोखिम में डालकर झाड़ियों में से बचाता है और दवा-पट्टी कर जीवनदान देता है।',
          exerciseSolutions: [
            {
              id: 'c5-hin-ch15-q1',
              questionNo: 'जीव दया प्रश्न',
              questionText: 'बिशन ने घायल तीतर को शिकारियों से बचाने के लिए क्या-क्या किया?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'चरण 1: उसने घायल तीतर को अपने सीने से चिपकाकर स्वेटर में छिपा लिया।',
                'चरण 2: वह काँटेदार झाड़ियों और पथरीली पगडंडियों पर तेजी से दौड़कर कर्नल दत्ता के फार्म हाउस पहुँचा।',
                'चरण 3: कर्नल दत्ता की मदद से तीतर के पंखों से छर्रे निकाले और दवा लगाकर उसे नया जीवन दिया।'
              ],
              finalAnswer: 'घायल पक्षी को स्वेटर में छिपाकर दौड़ते हुए सुरक्षित पहुँचाया और इलाज कराया।',
              keyTakeaway: 'मूक बेजुबान पक्षियों और वन्यजीवों की रक्षा करना हर जागरूक नागरिक का पुनीत कर्तव्य है।'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-hin-ch16',
          chapterNumber: 16,
          title: 'पाठ 16: पानी रे पानी (लेख - अनुपम मिश्र)',
          officialBookCode: 'hhrj1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/hhrj116.pdf',
          nepHighlights: 'प्रसिद्ध पर्यावरणविद् अनुपम मिश्र का जल संरक्षण, जल चक्र और भूजल रिचार्ज पर विचारोत्तेजक लेख।',
          summaryTextbook: 'अकाल और बाढ़ के अंतर्संबंध, तालाबों को पाटकर कंक्रीट के मकान बनाने की मानवीय भूल, भूजल गुल्लक को वर्षा जल से भरने की आवश्यकता और प्रत्येक नागरिक के जल संरक्षण दायित्व का वैज्ञानिक विश्लेषण।',
          exerciseSolutions: [
            {
              id: 'c5-hin-ch16-q1',
              questionNo: 'भूजल गुल्लक',
              questionText: 'लेखक ने धरती के जल भंडार को ' + 'गुल्लक' + ' क्यों कहा है और हम इसे कैसे भर सकते हैं?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'चरण 1: जिस प्रकार हम गुल्लक में सिक्के जमा करते हैं और जरूरत पर निकालते हैं, उसी प्रकार धरती वर्षा के पानी को सोखकर भूजल भंडार बनाती है।',
                'चरण 2: यदि हम तालाबों को सुरक्षित रखें और रेनवाटर हार्वेस्टिंग करें, तो धरती की जल गुल्लक भरी रहेगी।'
              ],
              finalAnswer: 'क्योंकि धरती वर्षा के जल को संचित रखती है; इसे तालाबों और वर्षा जल संरक्षण से भरा जा सकता है।',
              keyTakeaway: 'जल ही जीवन है; तालाबों और भूजल को रिचार्ज करना ही भविष्य का एकमात्र जीवन बीमा है।'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-hin-ch17',
          chapterNumber: 17,
          title: 'पाठ 17: छोटी-सी हमारी नदी (कविता - रवींद्रनाथ ठाकुर)',
          officialBookCode: 'hhrj1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/hhrj117.pdf',
          nepHighlights: 'गुरुदेव रवींद्रनाथ ठाकुर की नदी और ग्रामीण जीवन की मनोहारी एवं सजीव चित्रात्मक कविता।',
          summaryTextbook: 'गर्मियों में घुटने भर पानी वाली टेढ़ी-मेढ़ी नदी, किनारे पर काँस के सफेद फूल, बच्चों का पानी में मछलियाँ पकड़ना और आषाढ़ में मूसलाधार बारिश से नदी का उफान पर बहना।',
          exerciseSolutions: [
            {
              id: 'c5-hin-ch17-q1',
              questionNo: 'प्राकृतिक छटा',
              questionText: 'आषाढ़ के महीने में नदी का रूप किस प्रकार बदल जाता है?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'चरण 1: आषाढ़ में भारी वर्षा होने से नदी में अथाह जल भर जाता है।',
                'चरण 2: नदी की धार में मतवाला वेग आ जाता है और कलकल-छलछल करता कोलाहल गूँजने लगता है।'
              ],
              finalAnswer: 'नदी जल से लबालब भरकर तीव्र वेग और गर्जना के साथ बहने लगती है।',
              keyTakeaway: 'नदियाँ प्रकृति की जीवन रेखा हैं जो हमारी संस्कृति और ग्रामीण जीवन को सींचती हैं।'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c5-hin-ch18',
          chapterNumber: 18,
          title: 'पाठ 18: चुनौती हिमालय की (यात्रा वर्णन - सुरेखा पण्डीकर)',
          officialBookCode: 'hhrj1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/hhrj118.pdf',
          nepHighlights: 'जवाहरलाल नेहरू की अमरनाथ यात्रा का साहसिक संस्मरण, गहरी बर्फ़ीली खाइयों में गिरकर सकुशल बचना।',
          summaryTextbook: '1916 में कश्मीर भ्रमण के दौरान युवा जवाहरलाल नेहरू, उनके चचेरे भाई और कुली की जोजिला दर्रे से होते हुए अमरनाथ गुफा की बर्फ़ीली यात्रा, दरारों (क्रेवास) में पैर फिसलना और रस्सियों के सहारे रोमांचक बचाव।',
          exerciseSolutions: [
            {
              id: 'c5-hin-ch18-q1',
              questionNo: 'साहसिक संस्मरण',
              questionText: 'जवाहरलाल नेहरू अमरनाथ की दुर्गम यात्रा पर जाते समय किस भयानक दुर्घटना का शिकार होने से बचे?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'चरण 1: ताजी बर्फ से ढकी एक गहरी दरार पर पैर पड़ते ही बर्फ धंस गई।',
                'चरण 2: नेहरू जी सीधे गहरी खाई में लटक गए, परंतु कमर में बंधी मजबूत रस्सी और साथियों की सूझबूझ ने उन्हें सुरक्षित खींच लिया।'
              ],
              finalAnswer: 'बर्फ से ढकी गहरी खाई (क्रेवास) में गिरने पर कमर बंधी रस्सी के सहारे उनकी जान बची।',
              keyTakeaway: 'साहसिक पर्वतारोहण में सुरक्षा उपकरणों और साथियों के समन्वय का सदैव पालन करना चाहिए।'
            }
          ],
          competencyQuestions: [],
          quiz: []
        }
      ]
    }
  ]
};
