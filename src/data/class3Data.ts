import type { ClassStageInfo } from './ncertData';

export const CLASS_3_DATA: ClassStageInfo = {
  classNumber: 3,
  stageName: 'Preparatory',
  ageGroup: '8-9 Years',
  nepFocus: 'Foundational Numeracy, Experiential Math Activities, Visual Geometry, Place Value System, Bilingual Story-based Problems & Real-life Discovery',
  subjects: [
    // 1. Mathematics (Maths Mela / गणित मेला)
    {
      id: 'c3-maths',
      name: 'Mathematics (Maths Mela / गणित मेला)',
      iconName: 'Calculator',
      color: '#0284c7',
      description: '14 Chapters: What’s in a Name, Toy Joy, Double Century, Vacation with My Nani Maa, Fun with Shapes, House of Hundreds, Raksha Bandhan, Fair Share, Filling & Lifting, Give & Take, Time Goes On, and The Surajkund Fair.',
      totalChapters: 14,
      coverImageUrl: '/book-covers/class3-maths-mela.jpg',
      chapters: [
        {
          id: 'c3-m-ch1',
          chapterNumber: 1,
          title: "What’s in a Name? (नाम में क्या है?)",
          officialBookCode: 'cemm1',
          officialPdfUrl: '/pdf/Class 03/3rd Maths Mela/cemm101.pdf',
          nepHighlights: 'Introduction to counting history, tally marks, 1-to-1 correspondence, and why number symbols were invented.',
          summaryTextbook: 'Follows Deba and Deep, cowherds in Tarakeshwar, who used tally marks on the wall to verify all cows returned from grazing. When the number of cows grew, tallying became tedious, motivating the invention of place value and number names.',
          exerciseSolutions: [
            {
              id: 'c3-m-ch1-q1',
              questionNo: 'Page 2 Tally Counting',
              questionText: 'How did Deba and Deep keep track of their cows when they did not know how to count numbers? (देबा और दीप ने बिना गिनती जाने अपनी गायों का हिसाब कैसे रखा?)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Wall marking method used by cowherds',
              stepByStepSolution: [
                'Step 1: When taking cows out in the morning, they made one scratch/mark on the wall for each cow leaving the gate.',
                'Step 2: In the evening when cows returned, they struck out one mark for every cow entering.',
                'Step 3: If all marks were struck out, they knew that no cow was missing.',
                'चरण 1: सुबह जब गायें बाहर जाती थीं, वे दीवार पर प्रत्येक गाय के लिए एक लकीर बनाते थे।',
                'चरण 2: शाम को गायों के वापस आने पर प्रत्येक गाय के लिए एक लकीर काट देते थे।',
                'चरण 3: यदि सभी लकीरें कट जाती थीं, तो इसका अर्थ था कि कोई गाय खोई नहीं है।'
              ],
              finalAnswer: 'They used 1-to-1 matching tally marks on the wall. (उन्होंने दीवार पर एक-से-एक मिलान वाली लकीरों का उपयोग किया।)',
              keyTakeaway: 'Early humans used one-to-one correspondence before formal numeral systems were invented.'
            },
            {
              id: 'c3-m-ch1-q2',
              questionNo: 'Page 5 Number Names',
              questionText: 'Write the number of dots in words and numerals: 2 tens and 7 ones. (2 दहाई और 7 इकाई को अंकों और शब्दों में लिखें।)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: '2 Tens + 7 Ones',
              formula: 'Total = (2 × 10) + 7 = 27',
              stepByStepSolution: [
                'Step 1: 2 tens = 20.',
                'Step 2: 7 ones = 7.',
                'Step 3: 20 + 7 = 27 (Twenty-seven).',
                'चरण 1: 2 दहाई = 20',
                'चरण 2: 7 इकाई = 7',
                'चरण 3: 20 + 7 = 27 (सत्ताईस)'
              ],
              finalAnswer: '27 — Twenty-seven (सत्ताईस)',
              keyTakeaway: 'Numbers from 20 to 99 are formed by combining tens and units.'
            }
          ],
          competencyQuestions: [
            {
              id: 'c3-m-ch1-c1',
              questionNo: 'Competency Task 1',
              questionText: 'Why is counting in groups of 10 easier than counting one by one? (10-10 के समूहों में गिनना एक-एक करके गिनने से आसान क्यों है?)',
              difficulty: 'Medium',
              type: 'Competency',
              stepByStepSolution: [
                'Step 1: Counting individual items takes a long time and has a high chance of miscounting.',
                'Step 2: Grouping in bundles of 10 allows quick addition: 10, 20, 30, 40...',
                'चरण 1: एक-एक वस्तु गिनने में अधिक समय लगता है और भूल होने की संभावना रहती है।',
                'चरण 2: 10-10 के बंडल बनाकर 10, 20, 30... के रूप में आसानी से और तेज़ी से गिना जा सकता है।'
              ],
              finalAnswer: 'Grouping by tens makes counting faster, organized, and error-free.',
              keyTakeaway: 'Base-10 grouping is the foundation of the decimal numeral system.'
            }
          ],
          quiz: [
            {
              id: 'c3-m-ch1-mcq1',
              question: 'What is 3 tens and 5 ones? (3 दहाई और 5 इकाई क्या है?)',
              options: ['305', '53', '35', '8'],
              correctIndex: 2,
              explanation: '3 tens = 30, and 5 ones = 5. So 30 + 5 = 35 (पैंतीस).'
            },
            {
              id: 'c3-m-ch1-mcq2',
              question: 'Which method was used by shepherds long ago to count animals? (पुराने समय में चरवाहे पशुओं को गिनने के लिए किस विधि का उपयोग करते थे?)',
              options: ['Calculators', 'Smartphones', 'Marks on walls or pebbles (कंकड़ या दीवार पर निशान)', 'Digital scales'],
              correctIndex: 2,
              explanation: 'Before numerals were invented, people matched each animal with a pebble or a mark on a wall.'
            }
          ]
        },
        {
          id: 'c3-m-ch2',
          chapterNumber: 2,
          title: 'Toy Joy (खिलौनों का आनंद)',
          officialBookCode: 'cemm1',
          officialPdfUrl: '/pdf/Class 03/3rd Maths Mela/cemm102.pdf',
          nepHighlights: 'Addition and subtraction through toy shopping, token currency, and price comparisons up to ₹100.',
          summaryTextbook: 'Children visit a toy shop, explore toy prices, use combinations of 10-rupee notes and 1-rupee coins to purchase toys, and calculate change returned by the shopkeeper.',
          exerciseSolutions: [
            {
              id: 'c3-m-ch2-q1',
              questionNo: 'Page 11 Toy Cost',
              questionText: 'A teddy bear costs ₹45 and a toy car costs ₹32. How much do both toys cost together? (एक टेडी बियर ₹45 का है और एक खिलौना कार ₹32 की है। दोनों की कुल कीमत कितनी होगी?)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Teddy bear = ₹45, Toy car = ₹32',
              formula: 'Total Cost = Price of Teddy + Price of Car',
              stepByStepSolution: [
                'Step 1: Add the tens: 40 + 30 = ₹70.',
                'Step 2: Add the ones: 5 + 2 = ₹7.',
                'Step 3: Combine total: ₹70 + ₹7 = ₹77.',
                'चरण 1: दहाइयों को जोड़ें: 40 + 30 = ₹70',
                'चरण 2: इकाइयों को जोड़ें: 5 + 2 = ₹7',
                'चरण 3: कुल योग: ₹70 + ₹7 = ₹77'
              ],
              finalAnswer: '₹77',
              keyTakeaway: 'Breaking numbers into tens and ones simplifies mental addition.'
            }
          ],
          competencyQuestions: [
            {
              id: 'c3-m-ch2-c1',
              questionNo: 'Shopping Decision',
              questionText: 'Aman has a ₹50 note. He buys a toy spinner for ₹28. How much change will he get back? (अमन के पास ₹50 का नोट है। उसने ₹28 की चकरी खरीदी। उसे कितने रुपये वापस मिलेंगे?)',
              difficulty: 'Medium',
              type: 'Competency',
              givenData: 'Aman has ₹50, Cost = ₹28',
              formula: 'Change = 50 - 28',
              stepByStepSolution: [
                'Step 1: Subtract 20 from 50 -> 50 - 20 = 30.',
                'Step 2: Subtract remaining 8 -> 30 - 8 = ₹22.',
                'चरण 1: 50 में से 20 घटाएँ -> 50 - 20 = 30',
                'चरण 2: शेष 8 घटाएँ -> 30 - 8 = ₹22'
              ],
              finalAnswer: '₹22 change (वापस मिलेंगे)',
              keyTakeaway: 'Subtracting in steps (tens first, then ones) makes money handling easy.'
            }
          ],
          quiz: [
            {
              id: 'c3-m-ch2-mcq1',
              question: 'Which notes and coins make exactly ₹36? (कौन से नोट और सिक्के मिलकर ठीक ₹36 बनाते हैं?)',
              options: [
                '3 notes of ₹10 and 6 coins of ₹1',
                '2 notes of ₹10 and 5 coins of ₹1',
                '4 notes of ₹10',
                '1 note of ₹20 and 1 coin of ₹5'
              ],
              correctIndex: 0,
              explanation: '3 × 10 = ₹30, plus 6 × 1 = ₹6, total = ₹36.'
            }
          ]
        },
        {
          id: 'c3-m-ch3',
          chapterNumber: 3,
          title: 'Double Century (दोहरा शतक)',
          officialBookCode: 'cemm1',
          officialPdfUrl: '/pdf/Class 03/3rd Maths Mela/cemm103.pdf',
          nepHighlights: 'Place value up to 200, cricket scores, century (100) and double century (200), and number line jumps.',
          summaryTextbook: 'Using cricket match scores and player performances, students learn the concept of century (100 runs), half-century (50 runs), and double century (200 runs), mastering 3-digit numbers.',
          exerciseSolutions: [
            {
              id: 'c3-m-ch3-q1',
              questionNo: 'Page 18 Cricket Scores',
              questionText: 'Rohit scored 96 runs. How many more runs does he need to complete a century? (रोहित ने 96 रन बनाए। शतक पूरा करने के लिए उसे कितने और रन चाहिए?)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Current score = 96, Century = 100 runs',
              formula: 'Runs needed = 100 - Current score',
              stepByStepSolution: [
                'Step 1: Century means 100 runs.',
                'Step 2: Subtract 96 from 100: 100 - 96 = 4.',
                'चरण 1: शतक का अर्थ 100 रन होता है।',
                'चरण 2: 100 में से 96 घटाएँ: 100 - 96 = 4 रन।'
              ],
              finalAnswer: '4 runs (4 रन)',
              keyTakeaway: '1 century = 100 runs. 1 double century = 200 runs.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c3-m-ch3-mcq1',
              question: 'How many runs are in a double century? (एक दोहरे शतक में कितने रन होते हैं?)',
              options: ['100', '150', '200', '250'],
              correctIndex: 2,
              explanation: 'A century is 100 runs, so a double century is 2 × 100 = 200 runs.'
            }
          ]
        },
        {
          id: 'c3-m-ch4',
          chapterNumber: 4,
          title: 'Vacation with My Nani Maa (नानी माँ के साथ छुट्टियाँ)',
          officialBookCode: 'cemm1',
          officialPdfUrl: '/pdf/Class 03/3rd Maths Mela/cemm104.pdf',
          nepHighlights: 'Distance, measuring in spans, footsteps, and meters, journey timelines, and calendar days.',
          summaryTextbook: 'A family journeys to Nani Maa’s village. Along the way, students count kilometers on milestones, calculate travel duration, and measure objects in the village courtyard using non-standard and standard units.',
          exerciseSolutions: [
            {
              id: 'c3-m-ch4-q1',
              questionNo: 'Milestone Calculation',
              questionText: 'A milestone shows 25 km to Rampur. After travelling 10 km, what will the next milestone show? (एक मील के पत्थर पर रामपुर 25 किमी लिखा है। 10 किमी चलने के बाद अगले पत्थर पर क्या लिखा होगा?)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Initial distance = 25 km, Distance covered = 10 km',
              formula: 'Remaining distance = 25 - 10',
              stepByStepSolution: [
                'Step 1: As you travel closer to the destination, distance decreases.',
                'Step 2: 25 km - 10 km = 15 km.',
                'चरण 1: मंज़िल की ओर बढ़ने पर शेष दूरी कम होती जाती है।',
                'चरण 2: 25 किमी - 10 किमी = 15 किमी।'
              ],
              finalAnswer: '15 km (15 किमी)',
              keyTakeaway: 'Milestone markers decrease as distance to destination decreases.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c3-m-ch4-mcq1',
              question: 'Which unit is best to measure the distance between two towns? (दो शहरों के बीच की दूरी मापने के लिए कौन सी इकाई सबसे उपयुक्त है?)',
              options: ['Centimeter (सेमी)', 'Kilometer (किलोमीटर)', 'Handspan (बित्ता)', 'Millimeter (मिमी)'],
              correctIndex: 1,
              explanation: 'Long distances like between cities and towns are measured in kilometers (km).'
            }
          ]
        },
        {
          id: 'c3-m-ch5',
          chapterNumber: 5,
          title: 'Fun with Shapes (आकृतियों का मज़ा)',
          officialBookCode: 'cemm1',
          officialPdfUrl: '/pdf/Class 03/3rd Maths Mela/cemm105.pdf',
          nepHighlights: '2D & 3D shapes: vertices, edges, straight and curved lines, tangrams, and tiling patterns.',
          summaryTextbook: 'Students explore geometric shapes in surrounding objects—boxes, balls, coins, and roofs. They count corners (vertices) and sides (edges), distinguish straight from curved boundaries, and create 7-piece tangram figures.',
          exerciseSolutions: [
            {
              id: 'c3-m-ch5-q1',
              questionNo: 'Page 48 Corners & Edges',
              questionText: 'How many corners and straight edges does a rectangular postcard have? (एक आयताकार पोस्टकार्ड में कितने कोने और कितने सीधे किनारे होते हैं?)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Shape: Rectangle (Postcard)',
              stepByStepSolution: [
                'Step 1: A rectangle has 4 straight sides (edges).',
                'Step 2: The edges meet at 4 corners (vertices).',
                'चरण 1: आयत में 4 सीधी भुजाएँ (किनारे) होती हैं।',
                'चरण 2: ये किनारे 4 कोनों (शीर्षों) पर मिलते हैं।'
              ],
              finalAnswer: '4 corners and 4 edges (4 कोने और 4 किनारे)',
              keyTakeaway: 'Rectangles and squares have 4 straight sides and 4 right-angle corners.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c3-m-ch5-mcq1',
              question: 'Which of the following objects has ONLY curved edges? (इनमें से किस वस्तु में केवल घुमावदार किनारा होता है?)',
              options: ['A brick (ईंट)', 'A coin / bangle (सिक्का / चूड़ी)', 'A dice (पासा)', 'A notebook (कॉपी)'],
              correctIndex: 1,
              explanation: 'Circles like coins and bangles have a continuous curved edge with no corners.'
            }
          ]
        },
        {
          id: 'c3-m-ch6',
          chapterNumber: 6,
          title: 'House of Hundreds – I (सैकड़ों का घर – I)',
          officialBookCode: 'cemm1',
          officialPdfUrl: '/pdf/Class 03/3rd Maths Mela/cemm106.pdf',
          nepHighlights: 'Understanding 3-digit numbers from 100 to 500, place value charts (Hundreds, Tens, Ones), and abacus representation.',
          summaryTextbook: 'Introduces the Hundred block as 10 strips of ten, or 100 unit cubes. Teaches children to read, write, compare, and expand 3-digit numbers up to 500.',
          exerciseSolutions: [
            {
              id: 'c3-m-ch6-q1',
              questionNo: 'Page 68 Place Value',
              questionText: 'What is the place value of 4 in the number 348? (संख्या 348 में 4 का स्थानीय मान क्या है?)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Number = 348',
              formula: '3 Hundreds + 4 Tens + 8 Ones',
              stepByStepSolution: [
                'Step 1: 3 is at the Hundreds place -> Value = 300.',
                'Step 2: 4 is at the Tens place -> Value = 4 × 10 = 40.',
                'Step 3: 8 is at the Ones place -> Value = 8.',
                'चरण 1: 3 सैकड़े के स्थान पर है -> मान = 300',
                'चरण 2: 4 दहाई के स्थान पर है -> मान = 4 × 10 = 40',
                'चरण 3: 8 इकाई के स्थान पर है -> मान = 8'
              ],
              finalAnswer: '40 (चालीस)',
              keyTakeaway: 'The value of a digit depends on its position: hundreds, tens, or ones.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c3-m-ch6-mcq1',
              question: 'Which number is formed by 2 Hundreds, 0 Tens, and 9 Ones? (2 सैकड़ा, 0 दहाई और 9 इकाई से कौन सी संख्या बनेगी?)',
              options: ['290', '209', '902', '29'],
              correctIndex: 1,
              explanation: '2 Hundreds = 200, 0 Tens = 0, 9 Ones = 9. 200 + 0 + 9 = 209.'
            }
          ]
        },
        {
          id: 'c3-m-ch7',
          chapterNumber: 7,
          title: 'Raksha Bandhan (रक्षाबंधन)',
          officialBookCode: 'cemm1',
          officialPdfUrl: '/pdf/Class 03/3rd Maths Mela/cemm107.pdf',
          nepHighlights: 'Addition and subtraction of 2-digit and 3-digit numbers using festive sweet packing and bead counting.',
          summaryTextbook: 'Centres around making Rakhis and packing boxes of sweets for Raksha Bandhan. Teaches children carrying over in addition and borrowing in subtraction through practical distribution contexts.',
          exerciseSolutions: [
            {
              id: 'c3-m-ch7-q1',
              questionNo: 'Page 88 Sweet Box',
              questionText: 'Pooja packed 135 laddoos and Rahul packed 148 laddoos. How many laddoos did they pack altogether? (पूजा ने 135 लड्डू और राहुल ने 148 लड्डू पैक किए। दोनों ने मिलकर कुल कितने लड्डू पैक किए?)',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'Pooja = 135, Rahul = 148',
              formula: 'Total = 135 + 148',
              stepByStepSolution: [
                'Step 1: Add ones: 5 + 8 = 13 (Write 3, carry over 1 to tens).',
                'Step 2: Add tens: 3 + 4 + 1 (carry) = 8.',
                'Step 3: Add hundreds: 1 + 1 = 2.',
                'Step 4: Total = 283 laddoos.',
                'चरण 1: इकाइयों को जोड़ें: 5 + 8 = 13 (3 लिखें, 1 हासिल दहाई पर)',
                'चरण 2: दहाइयों को जोड़ें: 3 + 4 + 1 = 8',
                'चरण 3: सैकड़ों को जोड़ें: 1 + 1 = 2',
                'चरण 4: कुल योग = 283 लड्डू'
              ],
              finalAnswer: '283 laddoos (283 लड्डू)',
              keyTakeaway: 'When the sum of digits in a column exceeds 9, carry over the ten to the next place.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c3-m-ch7-mcq1',
              question: 'What is 150 + 75? (150 + 75 का मान क्या होगा?)',
              options: ['215', '225', '235', '205'],
              correctIndex: 1,
              explanation: '150 + 70 = 220, plus 5 = 225.'
            }
          ]
        },
        {
          id: 'c3-m-ch8',
          chapterNumber: 8,
          title: 'Fair Share (उचित हिस्सा / बराबर बँटवारा)',
          officialBookCode: 'cemm1',
          officialPdfUrl: '/pdf/Class 03/3rd Maths Mela/cemm108.pdf',
          nepHighlights: 'Introduction to equal sharing, grouping, and foundation of division as repeated subtraction.',
          summaryTextbook: 'Children share sweets, marbles, and fruits equally among friends. Explores equal groups, remainder concepts, and introduces division as fair sharing.',
          exerciseSolutions: [
            {
              id: 'c3-m-ch8-q1',
              questionNo: 'Page 110 Sharing Apples',
              questionText: 'There are 18 apples. If they are shared equally among 3 children, how many apples will each child get? (18 सेब 3 बच्चों में बराबर बाँटे जाएँ, तो प्रत्येक बच्चे को कितने सेब मिलेंगे?)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Total apples = 18, Children = 3',
              formula: 'Each child gets = 18 ÷ 3',
              stepByStepSolution: [
                'Step 1: Total items = 18.',
                'Step 2: Divide into 3 equal groups.',
                'Step 3: 3 × 6 = 18, so 18 ÷ 3 = 6.',
                'चरण 1: कुल सेब = 18',
                'चरण 2: 3 बराबर समूहों में बाँटें।',
                'चरण 3: 3 × 6 = 18, अतः 18 ÷ 3 = 6'
              ],
              finalAnswer: '6 apples each (प्रत्येक को 6 सेब)',
              keyTakeaway: 'Division means sharing a collection into equal parts.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c3-m-ch8-mcq1',
              question: 'If 20 candies are put into packets of 4 candies each, how many packets are made? (यदि 20 टॉफियों को 4-4 के पैकेट में रखा जाए, तो कितने पैकेट बनेंगे?)',
              options: ['4 packets', '5 packets', '6 packets', '10 packets'],
              correctIndex: 1,
              explanation: '20 ÷ 4 = 5 packets.'
            }
          ]
        },
        {
          id: 'c3-m-ch9',
          chapterNumber: 9,
          title: 'House of Hundreds – II (सैकड़ों का घर – II)',
          officialBookCode: 'cemm1',
          officialPdfUrl: '/pdf/Class 03/3rd Maths Mela/cemm109.pdf',
          nepHighlights: 'Numbers from 500 to 999, place value, comparing 3-digit numbers using >, <, and = signs.',
          summaryTextbook: 'Extends number concepts to 999. Children explore ascending/descending order, largest and smallest 3-digit numbers, and predecessor/successor concepts.',
          exerciseSolutions: [
            {
              id: 'c3-m-ch9-q1',
              questionNo: 'Page 122 Largest Number',
              questionText: 'Which is the largest 3-digit number? What number comes immediately after it? (3 अंकों की सबसे बड़ी संख्या कौन सी है? इसके ठीक बाद कौन सी संख्या आती है?)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: '3-digit numbers (100 to 999)',
              stepByStepSolution: [
                'Step 1: The largest 3-digit number has 9 in hundreds, tens, and ones: 999.',
                'Step 2: Add 1 to 999: 999 + 1 = 1000 (One Thousand).',
                'Step 3: 1000 is the smallest 4-digit number.',
                'चरण 1: 3 अंकों की सबसे बड़ी संख्या 999 होती है।',
                'चरण 2: 999 में 1 जोड़ने पर: 999 + 1 = 1000 (एक हज़ार)।',
                'चरण 3: 1000 चार अंकों की सबसे छोटी संख्या है।'
              ],
              finalAnswer: '999 is largest 3-digit number; 1000 comes immediately after it.',
              keyTakeaway: '999 + 1 = 1000, which introduces the Thousands place.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c3-m-ch9-mcq1',
              question: 'Which symbol makes the statement true: 675 ___ 657? (कथन को सही बनाने के लिए कौन सा चिह्न आएगा?)',
              options: ['<', '>', '=', '+'],
              correctIndex: 1,
              explanation: 'Both have 6 in hundreds place, but 7 tens is greater than 5 tens. So 675 > 657.'
            }
          ]
        },
        {
          id: 'c3-m-ch10',
          chapterNumber: 10,
          title: 'Fun at Class Party! (कक्षा पार्टी में मज़ा!)',
          officialBookCode: 'cemm1',
          officialPdfUrl: '/pdf/Class 03/3rd Maths Mela/cemm110.pdf',
          nepHighlights: 'Introduction to repeated addition and multiplication tables (2, 3, 4, 5, 10) through party arrangements.',
          summaryTextbook: 'Organizing chairs, tables, glasses, and snacks in rows and columns at a class party. Students see that rows of items represent multiplication (e.g., 4 rows of 5 cups = 4 × 5 = 20 cups).',
          exerciseSolutions: [
            {
              id: 'c3-m-ch10-q1',
              questionNo: 'Page 132 Chair Rows',
              questionText: 'In the classroom, there are 5 rows of chairs with 6 chairs in each row. How many chairs are there in total? (कक्षा में 5 पंक्तियाँ हैं और प्रत्येक पंक्ति में 6 कुर्सियाँ हैं। कुल कितनी कुर्सियाँ हैं?)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: '5 rows, 6 chairs per row',
              formula: 'Total chairs = Rows × Chairs per row',
              stepByStepSolution: [
                'Step 1: Repeated addition: 6 + 6 + 6 + 6 + 6.',
                'Step 2: Multiplication form: 5 × 6.',
                'Step 3: 5 × 6 = 30 chairs.',
                'चरण 1: बार-बार जोड़: 6 + 6 + 6 + 6 + 6',
                'चरण 2: गुणा का रूप: 5 × 6',
                'चरण 3: 5 × 6 = 30 कुर्सियाँ'
              ],
              finalAnswer: '30 chairs (30 कुर्सियाँ)',
              keyTakeaway: 'Multiplication is quick repeated addition of identical groups.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c3-m-ch10-mcq1',
              question: 'Which multiplication fact represents 4 + 4 + 4 + 4 + 4? (4 + 4 + 4 + 4 + 4 को किस गुणा रूप में लिखेंगे?)',
              options: ['4 × 4', '5 × 4', '4 + 5', '5 × 5'],
              correctIndex: 1,
              explanation: 'The number 4 is added 5 times, which is 5 × 4 = 20.'
            }
          ]
        },
        {
          id: 'c3-m-ch11',
          chapterNumber: 11,
          title: 'Filling and Lifting (भरो और उठाओ)',
          officialBookCode: 'cemm1',
          officialPdfUrl: '/pdf/Class 03/3rd Maths Mela/cemm111.pdf',
          nepHighlights: 'Measurement of capacity (Liters and Milliliters) and weight (Grams and Kilograms) using everyday vessels.',
          summaryTextbook: 'Investigating how many cups fill a jug, how many jugs fill a bucket (Capacity in Liters), and comparing heavy vs light objects (Weight in Kilograms & Grams) using pan balances.',
          exerciseSolutions: [
            {
              id: 'c3-m-ch11-q1',
              questionNo: 'Page 142 Water Bucket',
              questionText: 'A water bottle holds 1 liter of water. A bucket needs 8 such bottles to be completely filled. What is the capacity of the bucket? (एक बोतल में 1 लीटर पानी आता है। बाल्टी को पूरा भरने के लिए 8 बोतल पानी चाहिए। बाल्टी की धारिता क्या है?)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Bottle capacity = 1 Liter, Bottles needed = 8',
              stepByStepSolution: [
                'Step 1: 1 bottle = 1 Liter.',
                'Step 2: 8 bottles = 8 × 1 Liter = 8 Liters.',
                'चरण 1: 1 बोतल = 1 लीटर',
                'चरण 2: 8 बोतलें = 8 × 1 लीटर = 8 लीटर'
              ],
              finalAnswer: '8 Liters (8 लीटर)',
              keyTakeaway: 'Liquids are measured in Liters (L) and Milliliters (mL).'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c3-m-ch11-mcq1',
              question: 'Which of the following is measured in Kilograms (kg)? (इनमें से किसे किलोग्राम में मापा जाता है?)',
              options: ['A sack of wheat (गेहूँ की बोरी)', 'Water in a bottle', 'Milk in a cup', 'Length of a pencil'],
              correctIndex: 0,
              explanation: 'Heavy solid objects like a sack of wheat are measured in Kilograms (kg).'
            }
          ]
        },
        {
          id: 'c3-m-ch12',
          chapterNumber: 12,
          title: 'Give and Take (लेना और देना)',
          officialBookCode: 'cemm1',
          officialPdfUrl: '/pdf/Class 03/3rd Maths Mela/cemm112.pdf',
          nepHighlights: 'Mental arithmetic strategies, word problems involving subtraction with regrouping, and daily market transactions.',
          summaryTextbook: 'Deepens understanding of addition and subtraction operations through stories of animal friends trading fruits, checking bills, and solving two-step word problems.',
          exerciseSolutions: [
            {
              id: 'c3-m-ch12-q1',
              questionNo: 'Regrouping Subtraction',
              questionText: 'Subtract 168 from 325. (325 में से 168 घटाइए।)',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: '325 - 168',
              stepByStepSolution: [
                'Step 1: Ones place: 5 - 8 cannot be done. Borrow 1 ten from 2 -> 15 - 8 = 7.',
                'Step 2: Tens place: 1 left. 1 - 6 cannot be done. Borrow 1 hundred from 3 -> 11 - 6 = 5.',
                'Step 3: Hundreds place: 2 left -> 2 - 1 = 1.',
                'Step 4: Result = 157.',
                'चरण 1: इकाई: 5 में से 8 नहीं घट सकता। दहाई से 1 उधार लें -> 15 - 8 = 7',
                'चरण 2: दहाई: 1 बचा। 1 में से 6 नहीं घट सकता। सैकड़े से 1 उधार लें -> 11 - 6 = 5',
                'चरण 3: सैकड़ा: 2 बचा -> 2 - 1 = 1',
                'चरण 4: उत्तर = 157'
              ],
              finalAnswer: '157',
              keyTakeaway: 'Regrouping (borrowing) transfers 10 units from the adjacent higher place value.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c3-m-ch12-mcq1',
              question: 'Find the difference: 200 - 85 = ? (अंतर ज्ञात करें: 200 - 85 = ?)',
              options: ['115', '125', '105', '135'],
              correctIndex: 0,
              explanation: '200 - 80 = 120, and 120 - 5 = 115.'
            }
          ]
        },
        {
          id: 'c3-m-ch13',
          chapterNumber: 13,
          title: 'Time Goes On (समय बीतता जाता है)',
          officialBookCode: 'cemm1',
          officialPdfUrl: '/pdf/Class 03/3rd Maths Mela/cemm113.pdf',
          nepHighlights: 'Reading analog clock hands (Hours & Minutes), daily routine schedules, calendar months, and leap years.',
          summaryTextbook: 'Students learn to read clock hours and half-hours (e.g., 7:30, quarter past 4), calculate event durations, understand days in months (30, 31, 28/29), and organize family birthdays on a calendar.',
          exerciseSolutions: [
            {
              id: 'c3-m-ch13-q1',
              questionNo: 'Page 168 Reading Clocks',
              questionText: 'Where will the hour hand and minute hand point at 4:30? (4:30 बजे घंटे और मिनट की सुई कहाँ होगी?)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Time = 4:30',
              stepByStepSolution: [
                'Step 1: For half past 4, the minute hand points directly at 6 (30 minutes).',
                'Step 2: The hour hand is halfway between 4 and 5.',
                'चरण 1: साढ़े चार बजे मिनट की सुई ठीक 6 पर होती है (30 मिनट)।',
                'चरण 2: घंटे की सुई 4 और 5 के ठीक बीच में होती है।'
              ],
              finalAnswer: 'Minute hand points at 6; Hour hand is midway between 4 and 5.',
              keyTakeaway: 'In 30 minutes, the minute hand covers half the clock dial (from 12 to 6).'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c3-m-ch13-mcq1',
              question: 'How many days are there in the month of July? (जुलाई के महीने में कितने दिन होते हैं?)',
              options: ['28', '30', '31', '29'],
              correctIndex: 2,
              explanation: 'July has 31 days.'
            }
          ]
        },
        {
          id: 'c3-m-ch14',
          chapterNumber: 14,
          title: 'The Surajkund Fair (सूरजकुंड मेला)',
          officialBookCode: 'cemm1',
          officialPdfUrl: '/pdf/Class 03/3rd Maths Mela/cemm114.pdf',
          nepHighlights: 'Data representation, pictographs, tally tables, patterns, symmetry, and real-life fair shopping math.',
          summaryTextbook: 'A grand visit to Haryana’s famous Surajkund Craft Fair! Students observe colorful rangoli and pottery patterns, count visitors at handicraft stalls using tally charts, construct pictographs, and calculate food bills.',
          exerciseSolutions: [
            {
              id: 'c3-m-ch14-q1',
              questionNo: 'Page 180 Fair Pictograph',
              questionText: 'In a pictograph, 1 smiling face (🙂) represents 5 children. If the Pottery Stall has 4 smiling faces, how many children visited that stall? (एक चित्र-आलेख में 1 स्माइली (🙂) = 5 बच्चे। यदि कुम्हार के स्टॉल पर 4 स्माइली बनी हैं, तो वहाँ कितने बच्चे आए?)',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: '1 🙂 = 5 children, Pottery stall = 4 🙂',
              formula: 'Total children = 4 × 5',
              stepByStepSolution: [
                'Step 1: Each symbol represents 5 children.',
                'Step 2: 4 symbols = 4 × 5 = 20 children.',
                'चरण 1: प्रत्येक प्रतीक 5 बच्चों को दर्शाता है।',
                'चरण 2: 4 प्रतीक = 4 × 5 = 20 बच्चे।'
              ],
              finalAnswer: '20 children (20 बच्चे)',
              keyTakeaway: 'In pictographs, a key indicates how many real items each symbol represents.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c3-m-ch14-mcq1',
              question: 'If each star symbol (⭐) represents 10 crafts, what do 6 stars represent? (यदि प्रत्येक तारा (⭐) 10 शिल्पों को दर्शाता है, तो 6 तारे कितने शिल्प दर्शाएँगे?)',
              options: ['16', '60', '600', '26'],
              correctIndex: 1,
              explanation: '6 × 10 = 60 crafts.'
            }
          ]
        }
      ]
    },

    // 2. English (Santoor / सन्तूर)
    {
      id: 'c3-english',
      name: 'English (Santoor / सन्तूर)',
      iconName: 'BookOpen',
      color: '#f97316',
      description: '12 Chapters across 4 Units: Fun with Friends, Toys and Games, Good Food, and The Sky.',
      totalChapters: 12,
      coverImageUrl: '/book-covers/class3-english-santoor.jpg',
      chapters: [
        {
          id: 'c3-e-ch1',
          chapterNumber: 1,
          title: 'Colours',
          officialBookCode: 'cesa1',
          officialPdfUrl: '/pdf/Class 03/3rd Santoor/cesa101.pdf',
          nepHighlights: 'Poetic expression, colour vocabulary, rhyming words, and observation of natural surroundings.',
          summaryTextbook: 'A charming poem introducing vibrant colours in nature—green trees, blue skies, red apples, and yellow sunshine—fostering vocabulary and sensory appreciation.',
          exerciseSolutions: [
            {
              id: 'c3-e-ch1-q1',
              questionNo: 'Reading Comprehension Q1',
              questionText: 'What things in nature are green according to the poem? (कविता के अनुसार प्रकृति में कौन सी वस्तुएँ हरी हैं?)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Read the first stanza about greenery.',
                'Step 2: Identify grass, leaves, and trees mentioned as green.',
                'चरण 1: कविता का पहला छंद पढ़ें।',
                'चरण 2: घास, पत्तियाँ और पेड़ हरे बताए गए हैं।'
              ],
              finalAnswer: 'Grass, leaves, and trees are green in nature.',
              keyTakeaway: 'Observation of surroundings enriches colour vocabulary.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c3-e-ch1-mcq1',
              question: 'Which of the following rhymes with "Blue"?',
              options: ['Red', 'Shoe', 'Green', 'Ball'],
              correctIndex: 1,
              explanation: '"Blue" and "Shoe" have the same ending sound.'
            }
          ]
        },
        {
          id: 'c3-e-ch2',
          chapterNumber: 2,
          title: 'Badal and Moti',
          officialBookCode: 'cesa1',
          officialPdfUrl: '/pdf/Class 03/3rd Santoor/cesa102.pdf',
          nepHighlights: 'Theme of compassion, animal bonding, friendship, and empathetic listening.',
          summaryTextbook: 'Badal, an affectionate young boy, cares for his loyal dog Moti. When Badal is in trouble, Moti’s loyalty and bravery save the day, demonstrating mutual love between humans and pets.',
          exerciseSolutions: [
            {
              id: 'c3-e-ch2-q1',
              questionNo: 'Comprehension Q1',
              questionText: 'Who was Moti and how did Badal take care of him? (मोती कौन था और बादल उसकी देखभाल कैसे करता था?)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Moti was Badal’s faithful pet dog.',
                'Step 2: Badal gave Moti food, milk, and played with him daily.',
                'चरण 1: मोती बादल का वफ़ादार पालतू कुत्ता था।',
                'चरण 2: बादल उसे भोजन, दूध देता था और उसके साथ खेलता था।'
              ],
              finalAnswer: 'Moti was Badal’s pet dog, cared for with food, love, and daily play.',
              keyTakeaway: 'Animals return human kindness with fierce loyalty.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c3-e-ch2-mcq1',
              question: 'What kind of animal was Moti in the story?',
              options: ['A cat', 'A dog', 'A parrot', 'A horse'],
              correctIndex: 1,
              explanation: 'Moti was Badal’s beloved pet dog.'
            }
          ]
        },
        {
          id: 'c3-e-ch3',
          chapterNumber: 3,
          title: 'Best Friends',
          officialBookCode: 'cesa1',
          officialPdfUrl: '/pdf/Class 03/3rd Santoor/cesa103.pdf',
          nepHighlights: 'Peer relationships, empathy, sharing school experiences, and inclusive play.',
          summaryTextbook: 'Highlights the everyday bond between childhood school friends, their shared tiffin, joint drawings, and how they comfort each other when sad.',
          exerciseSolutions: [
            {
              id: 'c3-e-ch3-q1',
              questionNo: 'Exercise Q1',
              questionText: 'What makes two people best friends? (दो लोगों को पक्का दोस्त क्या बनाता है?)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Best friends care for one another, share their belongings, and help each other in times of need.',
                'चरण 1: पक्के दोस्त एक-दूसरे की परवाह करते हैं, चीज़ें साझा करते हैं और ज़रूरत के समय मदद करते हैं।'
              ],
              finalAnswer: 'Caring, sharing, and helping each other makes people best friends.',
              keyTakeaway: 'Friendship thrives on mutual respect and empathy.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-e-ch4',
          chapterNumber: 4,
          title: 'Out in the Garden',
          officialBookCode: 'cesa1',
          officialPdfUrl: '/pdf/Class 03/3rd Santoor/cesa104.pdf',
          nepHighlights: 'Outdoor play, physical well-being, movement action words (verbs), and team spirit.',
          summaryTextbook: 'An energetic action poem encouraging children to play out in the garden with balls, swings, and cheerful games that nurture physical agility.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-e-ch5',
          chapterNumber: 5,
          title: 'Talking Toys',
          officialBookCode: 'cesa1',
          officialPdfUrl: '/pdf/Class 03/3rd Santoor/cesa105.pdf',
          nepHighlights: 'Creative imagination, dialogue delivery, dramatic reading, and storytelling.',
          summaryTextbook: 'In a whimsical toy cupboard, toys come alive at night and discuss their daytime adventures with the children who play with them.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-e-ch6',
          chapterNumber: 6,
          title: 'Paper Boats',
          officialBookCode: 'cesa1',
          officialPdfUrl: '/pdf/Class 03/3rd Santoor/cesa106.pdf',
          nepHighlights: 'Art integration, paper crafting (origami), rainy day nostalgia, and gentle verse.',
          summaryTextbook: 'Inspired by Rabindranath Tagore’s timeless imagery, a child floats paper boats loaded with shiuli flowers down a rainwater stream, hoping someone in distant lands finds them.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-e-ch7',
          chapterNumber: 7,
          title: 'The Big Laddoo',
          officialBookCode: 'cesa1',
          officialPdfUrl: '/pdf/Class 03/3rd Santoor/cesa107.pdf',
          nepHighlights: 'Humorous storytelling, collaboration, sharing food, and sequence of events.',
          summaryTextbook: 'A sweet and humorous tale of rolling a gigantic festive laddoo that requires cooperation and teamwork among forest friends to share fairly.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-e-ch8',
          chapterNumber: 8,
          title: 'Thank God',
          officialBookCode: 'cesa1',
          officialPdfUrl: '/pdf/Class 03/3rd Santoor/cesa108.pdf',
          nepHighlights: 'Gratitude for nature, healthy nutritious food, farmers, and daily blessings.',
          summaryTextbook: 'Expresses grateful appreciation for delicious fruits, nourishing grains, pure water, and the sun that gives life to all crops on earth.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-e-ch9',
          chapterNumber: 9,
          title: 'Madhu’s Wish',
          officialBookCode: 'cesa1',
          officialPdfUrl: '/pdf/Class 03/3rd Santoor/cesa109.pdf',
          nepHighlights: 'Ethical values, contentment, selflessness, adapted from Sudha Murty’s inspirational writings.',
          summaryTextbook: 'Madhu discovers that true happiness comes not from wanting endless luxuries, but from sharing and bringing a smile to someone else’s face.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-e-ch10',
          chapterNumber: 10,
          title: 'Night',
          officialBookCode: 'cesa1',
          officialPdfUrl: '/pdf/Class 03/3rd Santoor/cesa110.pdf',
          nepHighlights: 'Nocturnal nature, soothing bedtime verses, stillness, and celestial wonders.',
          summaryTextbook: 'A gentle poetic depiction of the evening twilight settling into a peaceful starry night as birds nest and children sleep peacefully.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-e-ch11',
          chapterNumber: 11,
          title: 'Chanda Mama Counts the Stars',
          officialBookCode: 'cesa1',
          officialPdfUrl: '/pdf/Class 03/3rd Santoor/cesa111.pdf',
          nepHighlights: 'Whimsical connection between language and math, concept of infinity, and constellation myths.',
          summaryTextbook: 'Chanda Mama tries to count his starry companions every night, only to find more twinkling stars appearing, introducing the magic of uncountable numbers.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-e-ch12',
          chapterNumber: 12,
          title: 'Chandrayaan',
          officialBookCode: 'cesa1',
          officialPdfUrl: '/pdf/Class 03/3rd Santoor/cesa112.pdf',
          nepHighlights: 'Scientific curiosity, national space achievements, Chandrayaan lunar landing, and inspiring young scientists.',
          summaryTextbook: 'Siblings Rani and Prateek learn about India’s historic lunar exploration from their scientist neighbour Nandini Aunty, celebrating India’s Vikram lander and Pragyan rover.',
          exerciseSolutions: [
            {
              id: 'c3-e-ch12-q1',
              questionNo: 'Reading Check Q1',
              questionText: 'What mission were Rani and Prateek excited about? (रानी और प्रतीक किस अभियान को लेकर उत्साहित थे?)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Rani and Prateek were excited about India’s lunar space mission called Chandrayaan.',
                'Step 2: They wanted to learn how the spacecraft reached the moon from scientist Nandini Aunty.',
                'चरण 1: रानी और प्रतीक भारत के चंद्र अभियान ‘चंद्रयान’ को लेकर बहुत उत्साहित थे।',
                'चरण 2: वे वैज्ञानिक नंदिनी आंटी से जानना चाहते थे कि अंतरिक्ष यान चंद्रमा तक कैसे पहुँचा।'
              ],
              finalAnswer: 'India’s Chandrayaan mission to the Moon.',
              keyTakeaway: 'India’s space program inspires scientific thinking and curiosity.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c3-e-ch12-mcq1',
              question: 'Which celestial body did the Chandrayaan mission travel to?',
              options: ['Mars (मंगल)', 'The Moon (चंद्रमा)', 'The Sun (सूर्य)', 'Jupiter (बृहस्पति)'],
              correctIndex: 1,
              explanation: 'Chandrayaan is India’s lunar exploration mission that travelled to the Moon.'
            }
          ]
        }
      ]
    },
    // 3. Hindi (Veena / वीणा)
    {
      id: 'c3-hindi',
      name: 'Hindi (Veena / वीणा)',
      iconName: 'BookMarked',
      color: '#e11d48',
      description: '18 Chapters: सीखो, चींटी, कितने पैर?, बया हमारी चिड़िया रानी!, आम का पेड़, बीरबल की खिचड़ी, मित्र को पत्र, चतुर गीदड़, प्रकृति पर्व – फूलदेई, रस्साकशी, एक जादुई पिटारा, अपना-अपना काम, पेड़ों की अम्मा थिमक्का, किसान की होशियारी, भारत, चंद्रयान, बोलने वाली माँद, हम अनेक किंतु एक।',
      totalChapters: 18,
      coverImageUrl: 'https://ncert.nic.in/textbook/pdf/chve1cc.jpg',
      chapters: [
        {
          id: 'c3-h-ch1',
          chapterNumber: 1,
          title: 'सीखो (कविता)',
          officialBookCode: 'chve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/chve101.pdf',
          nepHighlights: 'प्रकृति से सीख, जीवन मूल्य, पर्यावरण के प्रति संवेदना और नैतिक शिक्षा।',
          summaryTextbook: 'फूलों से नित हँसना सीखो, भौरों से नित गाना। प्रकृति के विभिन्न घटकों (पेड़, हवा, दूध, सूरज, लता) से जीवन जीने की सुंदर सीख दी गई है।',
          exerciseSolutions: [
            {
              id: 'c3-h-ch1-q1',
              questionNo: 'प्रश्न 1',
              questionText: 'फूलों और भौरों से हमें क्या सीख मिलती है?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'चरण 1: फूलों से हमें हर परिस्थिति में मुस्कुराना और खिलखिलाना सीखना चाहिए।',
                'चरण 2: भौरों से हमें सदा प्रसन्न रहकर मधुर गान गाना सीखना चाहिए।'
              ],
              finalAnswer: 'फूलों से सदा हँसना और भौरों से सदा मधुर गाना सीखना चाहिए।',
              keyTakeaway: 'प्रकृति हमारी सबसे अच्छी शिक्षक है।'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c3-h-ch1-mcq1',
              question: 'सूरज की किरणों से हमें क्या सीख मिलती है?',
              options: ['देर तक सोना', 'जगना और जगाना', 'भागना', 'रोना'],
              correctIndex: 1,
              explanation: 'सूरज की किरणें स्वयं जागती हैं और संसार को जगाती हैं।'
            }
          ]
        },
        {
          id: 'c3-h-ch2',
          chapterNumber: 2,
          title: 'चींटी',
          officialBookCode: 'chve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/chve102.pdf',
          nepHighlights: 'परिश्रम, निरंतर प्रयास, एकता और अनुशासन की सीख।',
          summaryTextbook: 'चींटी कितनी छोटी होती है, फिर भी कभी आलस नहीं करती। वह लगातार चलती रहती है और अपने से भारी दाना उठाकर ले जाती है।',
          exerciseSolutions: [
            {
              id: 'c3-h-ch2-q1',
              questionNo: 'प्रश्न 1',
              questionText: 'चींटी से हमें क्या प्रेरणा मिलती है?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'चरण 1: चींटी कभी रुकती नहीं और बिना थके निरंतर परिश्रम करती है।',
                'चरण 2: इससे हमें जीवन में कठिन परिश्रम और अनुशासन की सीख मिलती है।'
              ],
              finalAnswer: 'चींटी से हमें निरंतर परिश्रम, अनुशासन और कभी हार न मानने की प्रेरणा मिलती है।',
              keyTakeaway: 'छोटे जीव भी हमें जीवन का बड़ा पाठ सिखा सकते हैं।'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-h-ch3',
          chapterNumber: 3,
          title: 'कितने पैर?',
          officialBookCode: 'chve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/chve103.pdf',
          nepHighlights: 'जीव-जंतुओं का अवलोकन, गणितीय गणना और भाषा का समन्वय।',
          summaryTextbook: 'विभिन्न पक्षियों और जानवरों के पैरों की संख्या गिनने और उनके चाल-चलन का आनंदमयी वर्णन।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-h-ch4',
          chapterNumber: 4,
          title: 'बया हमारी चिड़िया रानी!',
          officialBookCode: 'chve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/chve104.pdf',
          nepHighlights: 'पक्षियों की जीवन शैली, तिनकों से सुंदर घोंसला बुनना और प्रकृति प्रेम।',
          summaryTextbook: 'बया चिड़िया तिनके-तिनके जोड़कर अपना सुंदर घोंसला बनाती है। बच्चों को उसके घोंसले की कारीगरी और नन्हीं चिड़िया का संसार आकर्षित करता है।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-h-ch5',
          chapterNumber: 5,
          title: 'आम का पेड़',
          officialBookCode: 'chve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/chve105.pdf',
          nepHighlights: 'पेड़ों का महत्व, ऋतु चक्र, मीठे फल और छाया की महत्ता।',
          summaryTextbook: 'एक पुराने आम के पेड़ की कहानी जो सभी को मीठे फल और शीतल छाया देता है तथा पक्षियों को आश्रय प्रदान करता है।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-h-ch6',
          chapterNumber: 6,
          title: 'बीरबल की खिचड़ी',
          officialBookCode: 'chve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/chve106.pdf',
          nepHighlights: 'हाजिरजवाबी, न्याय, विवेक और अकबर-बीरबल की सूझबूझ।',
          summaryTextbook: 'अकबर के दरबार में बीरबल ने किस प्रकार दूर जलती आग से खिचड़ी पकाने का उदाहरण देकर एक निर्धन व्यक्ति को उसका न्याय और पुरस्कार दिलाया।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-h-ch7',
          chapterNumber: 7,
          title: 'मित्र को पत्र',
          officialBookCode: 'chve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/chve107.pdf',
          nepHighlights: 'पत्र लेखन कौशल, आत्मीय संवाद और छुट्टियों के संस्मरण।',
          summaryTextbook: 'एक मित्र अपने दूसरे मित्र को छुट्टियों में किए गए भ्रमण और अनुभवों को पत्र के माध्यम से साझा करता है।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-h-ch8',
          chapterNumber: 8,
          title: 'चतुर गीदड़',
          officialBookCode: 'chve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/chve108.pdf',
          nepHighlights: 'संकट में धैर्य, बुद्धि का प्रयोग और लोक कथा का आनंद।',
          summaryTextbook: 'जब शेर ने गीदड़ को घेर लिया, तो गीदड़ ने अपनी चतुर बुद्धि से अपनी जान कैसे बचाई।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-h-ch9',
          chapterNumber: 9,
          title: 'प्रकृति पर्व – फूलदेई',
          officialBookCode: 'chve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/chve109.pdf',
          nepHighlights: 'भारतीय लोक संस्कृति, उत्तराखंड का बाल पर्व और प्रकृति का वंदन।',
          summaryTextbook: 'उत्तराखंड के प्रसिद्ध फूलदेई त्योहार का वर्णन जिसमें बच्चे घर-घर जाकर देहरी पर फूल रखते हैं और सुख-समृद्धि की मंगलकामना करते हैं।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-h-ch10',
          chapterNumber: 10,
          title: 'रस्साकशी',
          officialBookCode: 'chve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/chve110.pdf',
          nepHighlights: 'खेल भावना, शारीरिक ऊर्जा, टीम वर्क और आपसी सहयोग।',
          summaryTextbook: 'विद्यालय के खेल मैदान पर रस्साकशी के रोमांचक मुकाबले का जीवंत वर्णन।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-h-ch11',
          chapterNumber: 11,
          title: 'एक जादुई पिटारा',
          officialBookCode: 'chve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/chve111.pdf',
          nepHighlights: 'कल्पनाशीलता, रचनात्मक अभिव्यक्ति और जिज्ञासा।',
          summaryTextbook: 'एक जादुई संदूक की कहानी जिसमें से पुरानी स्मृतियाँ और ज्ञान की अनोखी वस्तुएँ बाहर आती हैं।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-h-ch12',
          chapterNumber: 12,
          title: 'अपना-अपना काम',
          officialBookCode: 'chve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/chve112.pdf',
          nepHighlights: 'श्रम की गरिमा, सामाजिक सहयोग और सामुदायिक सहायकों का सम्मान।',
          summaryTextbook: 'संसार में प्रत्येक व्यक्ति का काम महत्वपूर्ण है—चाहे वह किसान हो, बढ़ई हो, डॉक्टर हो या सफाईकर्मी।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-h-ch13',
          chapterNumber: 13,
          title: 'पेड़ों की अम्मा \'थिमक्का\'',
          officialBookCode: 'chve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/chve113.pdf',
          nepHighlights: 'पर्यावरण संरक्षण, पद्मश्री सालूमरदा थिमक्का का प्रेरक जीवन।',
          summaryTextbook: 'कर्नाटक की सालूमरदा थिमक्का की सच्ची कहानी जिन्होंने सैकड़ों बरगद के पेड़ लगाए और उन्हें अपने बच्चों की तरह पाला।',
          exerciseSolutions: [
            {
              id: 'c3-h-ch13-q1',
              questionNo: 'प्रश्न 1',
              questionText: 'सालूमरदा थिमक्का को \'पेड़ों की अम्मा\' क्यों कहा जाता है?',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'चरण 1: थिमक्का ने अपने पति के साथ मिलकर सड़क किनारे सैकड़ों बरगद के पेड़ लगाए।',
                'चरण 2: उन्होंने इन पेड़ों की बच्चों की तरह देखरेख और सिंचाई की।'
              ],
              finalAnswer: 'पेड़ों को बच्चों की तरह पालने और लगाने के कारण उन्हें पेड़ों की अम्मा कहा जाता है।',
              keyTakeaway: 'सच्चा समर्पण धरती को हरा-भरा बना सकता है।'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-h-ch14',
          chapterNumber: 14,
          title: 'किसान की होशियारी',
          officialBookCode: 'chve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/chve114.pdf',
          nepHighlights: 'सूझबूझ, लोक कथा और परिश्रम का फल।',
          summaryTextbook: 'एक मेहनती किसान ने भालू के साथ फसल के बंटवारे में अपनी बुद्धिमानी से हर बार श्रेष्ठ भाग प्राप्त किया।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-h-ch15',
          chapterNumber: 15,
          title: 'भारत (कविता)',
          officialBookCode: 'chve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/chve115.pdf',
          nepHighlights: 'देशभक्ति, प्राकृतिक सौंदर्य, अनेकता में एकता और राष्ट्रीय गौरव।',
          summaryTextbook: 'उत्तर में हिमालय, दक्षिण में हिंद महासागर, गंगा-यमुना की पावन धारा—भारत भूमि के गौरव और सुषमा का गीत।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-h-ch16',
          chapterNumber: 16,
          title: 'चंद्रयान (संवाद)',
          officialBookCode: 'chve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/chve116.pdf',
          nepHighlights: 'वैज्ञानिक चेतना, अंतरिक्ष विज्ञान, भारत की चंद्रमा पर विजय।',
          summaryTextbook: 'बच्चों के बीच चंद्रयान की सफल लैंडिंग, विक्रम लैंडर और प्रज्ञान रोवर के कार्यों पर ज्ञानवर्धक संवाद।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-h-ch17',
          chapterNumber: 17,
          title: 'बोलने वाली माँद',
          officialBookCode: 'chve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/chve117.pdf',
          nepHighlights: 'पंचतंत्र की कथा, सतर्कता और संकट में युक्ति।',
          summaryTextbook: 'गीदड़ ने गुफा के बाहर शेर के पंजों के निशान देखकर माँद से बात करने का नाटक किया और अपनी जान बचाई।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-h-ch18',
          chapterNumber: 18,
          title: 'हम अनेक किंतु एक',
          officialBookCode: 'chve1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/chve118.pdf',
          nepHighlights: 'विविधता में एकता, राष्ट्रीय एकता और बंधुत्व की भावना।',
          summaryTextbook: 'भाषा, वेशभूषा और खान-पान में भिन्न होते हुए भी हम सब भारत माता की संतान हैं और एक सूत्र में बंधे हैं।',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },
    // 4. Environmental Studies (Our Wondrous World / हमारा अद्भुत संसार)
    {
      id: 'c3-evs',
      name: 'Environmental Studies (Our Wondrous World / हमारा अद्भुत संसार)',
      iconName: 'Globe',
      color: '#10b981',
      description: '12 Chapters: Family and Friends, Going to the Mela, Celebrating Festivals, Getting to Know Plants, Plants and Animals Live Together, Living in Harmony, Water—A Precious Gift, Food We Eat, Staying Healthy and Happy, This World of Things, Making Things, Taking Charge of Waste.',
      totalChapters: 12,
      coverImageUrl: 'https://ncert.nic.in/textbook/pdf/ceev1cc.jpg',
      chapters: [
        {
          id: 'c3-evs-ch1',
          chapterNumber: 1,
          title: 'Family and Friends (परिवार और मित्र)',
          officialBookCode: 'ceev1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ceev101.pdf',
          nepHighlights: 'Family structures, inter-generational relationships, community care, and diversity in family living.',
          summaryTextbook: 'Explores diverse family bonds, care for grandparents, helping one another with daily chores, and how mutual affection strengthens families.',
          exerciseSolutions: [
            {
              id: 'c3-evs-ch1-q1',
              questionNo: 'Exercise Q1',
              questionText: 'How do family members help one another? (परिवार के सदस्य एक-दूसरे की मदद कैसे करते हैं?)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Family members share daily household tasks like cooking, cleaning, and caring for young and elderly members.',
                'चरण 1: परिवार के सदस्य भोजन पकाने, सफाई करने और बच्चों व बुजुर्गों की देखभाल में एक-दूसरे की सहायता करते हैं।'
              ],
              finalAnswer: 'By sharing work and caring for each other with love and respect.',
              keyTakeaway: 'Cooperation and love are the bedrock of happy families.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c3-evs-ch1-mcq1',
              question: 'Who makes up a nuclear family?',
              options: ['Only parents and their children', 'Grandparents, uncles, aunts and cousins', 'Only neighbors', 'School teachers'],
              correctIndex: 0,
              explanation: 'A nuclear family typically consists of parents and their children living together.'
            }
          ]
        },
        {
          id: 'c3-evs-ch2',
          chapterNumber: 2,
          title: 'Going to the Mela (मेले की सैर)',
          officialBookCode: 'ceev1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ceev102.pdf',
          nepHighlights: 'Community gatherings, rural fairs, local handicrafts, and safety in crowded spaces.',
          summaryTextbook: 'Children visit a village fair, observe traditional toy stalls, sweet makers, giant wheels, and understand community joy and cultural heritage.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-evs-ch3',
          chapterNumber: 3,
          title: 'Celebrating Festivals (त्योहारों का उल्लास)',
          officialBookCode: 'ceev1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ceev103.pdf',
          nepHighlights: 'Cultural diversity, harvest festivals, special festive foods, and community harmony.',
          summaryTextbook: 'Celebration of Diwali, Eid, Christmas, Baisakhi, Pongal, and Gurpurab, highlighting unity across diverse Indian traditions.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-evs-ch4',
          chapterNumber: 4,
          title: 'Getting to Know Plants (पेड़-पौधों को जानें)',
          officialBookCode: 'ceev1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ceev104.pdf',
          nepHighlights: 'Parts of plants (roots, stem, leaves, flowers), leaf textures, herbal plants, and oxygen producers.',
          summaryTextbook: 'Hands-on discovery of plants around school and home: observing leaf venation, bark rubbings, and learning medicinal uses of Tulsi and Neem.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-evs-ch5',
          chapterNumber: 5,
          title: 'Plants and Animals Live Together (पौधे और पशुओं का सह-जीवन)',
          officialBookCode: 'ceev1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ceev105.pdf',
          nepHighlights: 'Ecosystem interconnectedness, bird nesting in trees, pollinators, and animal shelters.',
          summaryTextbook: 'How birds, squirrels, monkeys, and insects depend on trees for food and shelter, and how plants depend on insects for pollination.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-evs-ch6',
          chapterNumber: 6,
          title: 'Living in Harmony (सद्भाव से रहना)',
          officialBookCode: 'ceev1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ceev106.pdf',
          nepHighlights: 'Compassion for all living beings, stray animal care, coexistence, and environmental balance.',
          summaryTextbook: 'Living peacefully with domestic animals, respecting stray dogs and birds by placing water bowls in summer.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-evs-ch7',
          chapterNumber: 7,
          title: 'Water—A Precious Gift (जल—एक अनमोल उपहार)',
          officialBookCode: 'ceev1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ceev107.pdf',
          nepHighlights: 'Water sources (wells, rivers, rain, taps), water conservation, avoiding wastage, and rainwater harvesting.',
          summaryTextbook: 'Understanding the water cycle, clean drinking water practices, and simple daily habits to prevent tap leakage and conserve every drop.',
          exerciseSolutions: [
            {
              id: 'c3-evs-ch7-q1',
              questionNo: 'Exercise Q1',
              questionText: 'Give two ways you can save water at home. (घर पर पानी बचाने के दो उपाय बताइए।)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Turn off the tap while brushing teeth or applying soap.',
                'Step 2: Reuse vegetable washing water to water potted plants.',
                'चरण 1: ब्रश करते समय नल बंद रखें।',
                'चरण 2: सब्जियां धोने वाले पानी का उपयोग गमलों में डालने के लिए करें।'
              ],
              finalAnswer: 'Turn off running taps and reuse rinse water for plants.',
              keyTakeaway: 'Every drop of fresh water is precious for life on Earth.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-evs-ch8',
          chapterNumber: 8,
          title: 'Food We Eat (हमारा भोजन)',
          officialBookCode: 'ceev1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ceev108.pdf',
          nepHighlights: 'Balanced diet, regional dishes, grains, pulses, fruits, and avoiding food wastage.',
          summaryTextbook: 'Explores where food comes from, hard work of farmers, diversity of Indian cuisine (roti, rice, idli, dhokla), and mindful eating.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-evs-ch9',
          chapterNumber: 9,
          title: 'Staying Healthy and Happy (स्वस्थ और प्रसन्न रहना)',
          officialBookCode: 'ceev1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ceev109.pdf',
          nepHighlights: 'Personal hygiene, hand washing, physical exercise, outdoor play, and mental wellbeing.',
          summaryTextbook: 'Teaches healthy routines: brushing twice, washing hands before eating, proper sleep, yoga, and laughter with friends.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-evs-ch10',
          chapterNumber: 10,
          title: 'This World of Things (चीज़ों की अनोखी दुनिया)',
          officialBookCode: 'ceev1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ceev110.pdf',
          nepHighlights: 'Materials in daily use (wood, clay, metal, plastic, paper), properties, and classification.',
          summaryTextbook: 'Investigating everyday objects, discovering what they are made of, and understanding how natural materials are shaped into useful tools.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-evs-ch11',
          chapterNumber: 11,
          title: 'Making Things (चीज़ें बनाना)',
          officialBookCode: 'ceev1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ceev111.pdf',
          nepHighlights: 'Artisans and craftspersons, potters, weavers, hands-on clay modeling, and creativity.',
          summaryTextbook: 'Learning from local craftspeople: how potters turn clay on wheels, how weavers weave threads, and creating simple clay bowls in class.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c3-evs-ch12',
          chapterNumber: 12,
          title: 'Taking Charge of Waste (कचरा प्रबंधन)',
          officialBookCode: 'ceev1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ceev112.pdf',
          nepHighlights: 'Wet and dry waste segregation, compost making, reducing single-use plastic, and Clean India Mission.',
          summaryTextbook: 'Understanding green and blue dustbins, biodegradable vs non-biodegradable waste, and how young students can keep their surroundings clean.',
          exerciseSolutions: [
            {
              id: 'c3-evs-ch12-q1',
              questionNo: 'Exercise Q1',
              questionText: 'What kind of waste goes into the green dustbin? (हरे कूड़ेदान में किस प्रकार का कचरा डाला जाता है?)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: The green dustbin is for wet, organic, biodegradable kitchen waste.',
                'Step 2: Fruit peels, vegetable scraps, leftover food, and dry leaves go into the green bin for composting.',
                'चरण 1: हरा कूड़ेदान गीले और जैविक कचरे के लिए होता है।',
                'चरण 2: फलों के छिलके, बची हुई सब्जियां और पत्तियां हरे कूड़ेदान में डाली जाती हैं।'
              ],
              finalAnswer: 'Wet, biodegradable organic waste like vegetable and fruit peels.',
              keyTakeaway: 'Segregating waste at source helps in recycling and composting.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        }
      ]
    }
  ]
};
