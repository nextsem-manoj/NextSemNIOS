import type { ClassStageInfo } from './ncertData';

export const CLASS_7_DATA: ClassStageInfo = {
  classNumber: 7,
  stageName: 'Middle',
  ageGroup: '12-13 Years',
  nepFocus: 'Experiential learning, ethical decision making, literature appreciation & science inquiry',
  subjects: [
    {
      id: 'c7-hindi',
      name: 'Hindi (मल्हार - Malhar)',
      iconName: 'BookOpen',
      color: '#ec4899',
      description: 'New NCERT 2026-27 Textbook Malhar - Poems, Stories, Ethical Dialogues & Grammar.',
      totalChapters: 10,
      coverImageUrl: '/book-covers/class7-hindi-malhar.png',
      chapters: [
        {
          id: 'c7-hin-ch1',
          chapterNumber: 1,
          title: 'माँ, कह एक कहानी (Maithili Sharan Gupt)',
          nepHighlights: 'Dialogue poem from Yashodhara highlighting compassion, animal protection & justice (रक्षक भक्षक से बड़ा है).',
          summaryTextbook: 'राष्ट्रकवि मैथिलीशरण गुप्त द्वारा रचित "माँ, कह एक कहानी" यशोधरा और राहुल के मध्य एक संवादपरक कविता है। इसमें सिद्धार्थ (भगवान बुद्ध) द्वारा एक घायल हंस की रक्षा और अहंकारी शिकारी देवदत्त से न्याय की विजय का मार्मिक चित्रण है।',
          officialBookCode: 'ghml1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ghml101.pdf',
          googleDriveFileId: '1P2wazajXAjZ8tl4HRWDm5yHo-Lax3L0L',
          exerciseSolutions: [
            {
              id: 'c7-hin-ch1-q1',
              questionNo: 'मेरी समझ से Q1',
              questionText: 'कविता में घायल पक्षी की कहानी का मुख्य उद्देश्य क्या है?',
              difficulty: 'Easy',
              type: 'Competency',
              givenData: 'माँ यशोधरा और पुत्र राहुल के बीच संवाद',
              stepByStepSolution: [
                '१. कविता में सिद्धार्थ उपवन में टहल रहे थे जब एक घायल हंस आकर गिरा।',
                '२. सिद्धार्थ ने उस हंस को उठाया और उसकी जान बचाई।',
                '३. शिकारी ने उस पर अपना अधिकार जताया, लेकिन सिद्धार्थ ने देने से मना कर दिया।',
                '४. राहुल ने निर्णय दिया कि मारने वाले (भक्षक) से बचाने वाला (रक्षक) सदा बड़ा होता है और न्याय दया का पक्ष लेता है।'
              ],
              finalAnswer: 'करुणा, अहिंसा और यह नैतिक सिद्धांत स्थापित करना कि रक्षक सदैव भक्षक से श्रेष्ठ होता है।',
              keyTakeaway: 'न्याय सदैव करुणा और जीवन की रक्षा का पक्ष लेता है (न्याय दया का दानी)।'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c7-hin-ch1-qz1',
              question: '"माँ, कह एक कहानी" कविता किस महाकाव्य/काव्य-कृति से ली गई है?',
              options: ['साकेत', 'यशोधरा', 'भारत-भारती', 'पंचवटी'],
              correctIndex: 1,
              explanation: 'यह कविता राष्ट्रकवि मैथिलीशरण गुप्त की प्रसिद्ध काव्य-कृति "यशोधरा" से ली गई है।'
            },
            {
              id: 'c7-hin-ch1-qz2',
              question: 'हंस को किसने तीर मारकर घायल किया था?',
              options: ['सिद्धार्थ ने', 'आखेटक (शिकारी) ने', 'राहुल ने', 'राजा ने'],
              correctIndex: 1,
              explanation: 'आकाश में उड़ते हुए हंस को एक आखेटक (शिकारी) ने तीखे बाण (खर-शर) से घायल किया था।'
            }
          ]
        },
        {
          id: 'c7-hin-ch2',
          chapterNumber: 2,
          title: 'दादी माँ (Dadi Maa)',
          nepHighlights: 'Emotional relationship with grandparents and village traditions.',
          summaryTextbook: 'लेखक की अपनी दादी माँ के प्रति अगाध स्नेह और उनके ममतामयी, परोपकारी चरित्र का चित्रण।',
          officialBookCode: 'ghml1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/ghml102.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },
    {
      id: 'c7-english',
      name: 'English (पूर्वी - Poorvi)',
      iconName: 'BookOpen',
      color: '#38bdf8',
      description: 'New NCERT 2026-27 Textbook Poorvi: Learning Together, The Day the River Spoke, Try Again, Three Days to See & Language Lab.',
      totalChapters: 5,
      coverImageUrl: '/book-covers/class7-english-poorvi.png',
      chapters: [
        {
          id: 'c7-eng-u1',
          chapterNumber: 1,
          title: 'Unit 1: Learning Together (The Day the River Spoke • Try Again • Three Days to See)',
          nepHighlights: 'Gender equity and right to school, perseverance (King Bruce & 9 spider attempts), sensory appreciation and empathy for differently-abled learners (Helen Keller), prepositions vs. adverbs, modal verbs, and assistive technology.',
          summaryTextbook: 'Unit 1 "Learning Together" (0773CH01 / gepr101) brings together three iconic literary works: Kamala Nair\'s evocative story "The Day the River Spoke" chronicling young Jahnavi\'s brave steps towards education guided by the river; Eliza Cook\'s narrative ballad "Try Again" immortalizing King Bruce and the Scottish spider\'s perseverance; and Helen Keller\'s moving essay "Three Days to See" imploring the seeing to appreciate their five senses, alongside comprehensive grammar on prepositions, adverbs, modals, and Digital India assistive tools.',
          officialBookCode: 'gepr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/gepr101.pdf',
          exerciseSolutions: [
            {
              id: 'c7-eng-u1-q1',
              questionNo: 'Textbook Reflection Q1',
              questionText: 'What did the River tell Jahnavi when she doubted whether a girl could go to school and do what boys do?',
              difficulty: 'Easy',
              type: 'Competency',
              givenData: 'Conversation between Jahnavi and the River',
              stepByStepSolution: [
                '1. The River reassured Jahnavi by stating that little girls can do as much as little boys.',
                '2. The River gave the practical example that little girls swim just as fast as little boys in the river.',
                '3. The River advised her to slip quietly into the schoolroom and listen attentively, reminding her that fulfilling her dream was up to her own initiative.'
              ],
              finalAnswer: 'The River told her that little girls can do as much as little boys, pointing out that they swim just as fast, and encouraged her to take the first brave step to visit the school.',
              keyTakeaway: 'Self-belief and initiative are essential to overcoming social barriers to education.'
            },
            {
              id: 'c7-eng-u1-q2',
              questionNo: 'Textbook Reflection Q2',
              questionText: 'Why did Eliza Cook describe the spider\'s journey in such minute detail in the poem "Try Again"?',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'Poetic devices and 9 attempts of the spider',
              stepByStepSolution: [
                '1. The poet counted every single slip, fall, and steady climb through nine brave attempts.',
                '2. This detailed portrayal builds emotional tension ("Ah me! \'tis an anxious minute") as the spider gets closer to its web.',
                '3. It serves as a visual metaphor showing that true perseverance requires patience through repeated setbacks before triumph on the tenth attempt.'
              ],
              finalAnswer: 'To illustrate the realism of struggle and emphasize that success does not come instantly, but through patient, relentless effort.',
              keyTakeaway: 'Failures are milestones on the road to success.'
            }
          ],
          competencyQuestions: [
            {
              id: 'c7-eng-u1-cbq1',
              questionNo: 'Competency HOTS Q1',
              questionText: 'Compare how tactile touch empowered Helen Keller to experience the beauty of nature versus the casual sight of her seeing friend who saw "nothing in particular".',
              difficulty: 'Hard',
              type: 'Competency',
              givenData: 'Essay "Three Days to See" by Helen Keller',
              stepByStepSolution: [
                '1. Helen Keller engaged deep tactile awareness, feeling the delicate symmetry of leaves, smooth birch bark, rough pine bark, and vibrations of singing birds.',
                '2. Her friend took her eyesight for granted, walking for an hour through the woods without actively noticing anything.',
                '3. Keller highlights that sensory organs are truly valuable only when combined with conscious mindfulness and genuine appreciation.'
              ],
              finalAnswer: 'Keller used active touch with curiosity and wonder, while people with sight often become passive observers and take their senses for granted.',
              keyTakeaway: 'Mindfulness and appreciation transform ordinary sensory experiences into extraordinary discoveries.'
            }
          ],
          quiz: [
            {
              id: 'c7-eng-u1-qz1',
              question: 'In "The Day the River Spoke", what did Jahnavi want to become when she grew up?',
              options: ['A boat builder', 'A village teacher who invites all little girls to school', 'A marine explorer', 'A train driver'],
              correctIndex: 1,
              explanation: 'Jahnavi promised her mother that when she grew up, she would become a teacher and visit every house in the village to bring all little girls to school.'
            },
            {
              id: 'c7-eng-u1-qz2',
              question: 'How many brave attempts did the spider make in the poem "Try Again" before succeeding on the next try?',
              options: ['Three attempts', 'Six attempts', 'Nine brave attempts', 'Twelve attempts'],
              correctIndex: 2,
              explanation: 'The poem counts: "Till up and down, now fast, now slow, Nine brave attempts were counted" — succeeding on the 10th attempt.'
            },
            {
              id: 'c7-eng-u1-qz3',
              question: 'Which sense did Helen Keller declare must be the most delightful of all human senses?',
              options: ['Sense of taste', 'Sense of smell', 'Sense of sight', 'Sense of touch'],
              correctIndex: 2,
              explanation: 'Helen Keller affirmed: "Make the most of every sense... But of all the senses, I am sure that sight must be the most delightful."'
            }
          ]
        }
      ]
    },
    {
      id: 'c7-maths',
      name: 'Mathematics (गणित प्रकाश - Ganita Prakash)',
      iconName: 'Calculator',
      color: '#3b82f6',
      description: 'New NCERT 2026-27 Ganita Prakash Parts I & II — Numbers, Fractions, Data, Equations, Geometry & Algebra.',
      totalChapters: 15,
      coverImageUrl: '/book-covers/class7-math-ganita.png',
      chapters: [
        {
          id: 'c7-mat-ch1',
          chapterNumber: 1,
          title: 'Integers & Number Systems (पूर्णांक)',
          nepHighlights: 'Properties of addition, subtraction, multiplication, and division of positive and negative integers.',
          summaryTextbook: 'Comprehensive coverage of integer arithmetic, absolute values, and real-life temperature/depth models from Ganita Prakash Part I.',
          officialBookCode: 'gegp1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/gegp101.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c7-mat-ch6',
          chapterNumber: 6,
          title: 'Number Play (संख्याओं का खेल - Ganita Prakash)',
          nepHighlights: 'Parity rules (Even/Odd), Magic Squares (Lo Shu & Chautīsā Yantra at Khajuraho), Virahāṅka–Fibonacci sequence (poetic meter & nature), and Cryptarithms.',
          summaryTextbook: 'Grade 7 Ganita Prakash Part I Chapter 6: Numbers tell us things, tallness rule, parity sums/products, 3x3 magic squares (magic sum 15, center 5), Khajuraho 4x4 Chautīsā Yantra (magic sum 34), historical Indian mathematics (Virahāṅka c. 700 CE, Pingala, Hemachandra), and cryptarithms (letters for digits).',
          officialBookCode: 'gegp1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/gegp106.pdf',
          googleDriveFileId: '',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },
    {
      id: 'c7-social-science',
      name: 'Social Science (Exploring Society: India and Beyond)',
      iconName: 'Compass',
      color: '#06b6d4',
      description: 'New NCERT 2026-27 Integrated Social Science — Geographical Diversity of India, Historical Roots, Governance & Society.',
      totalChapters: 20,
      coverImageUrl: '/book-covers/class7-social-science-exploring.png',
      chapters: [
        {
          id: 'c7-soc-ch1',
          chapterNumber: 1,
          title: 'Geographical Diversity of India (भारत की भौगोलिक विविधता)',
          nepHighlights: 'Major physical divisions of India: The Northern Mountain Wall (Himalayas), Indo-Gangetic Plains, Peninsular Plateau, Thar Desert, Coastal Belts & Island Groups.',
          summaryTextbook: 'Chapter 1 of Exploring Society introduces India’s diverse and majestic physical landscape. Bounded by the towering Himalayas in the north, the Indian Ocean to the south, the Arabian Sea to the west, and the Bay of Bengal to the east, India exhibits extraordinary geomorphological variation: (1) The Himalayas with three parallel ranges (Himadri, Himachal, Shivalik) acting as a climatic barrier and perennial river source; (2) The Great Northern Plains formed by alluvium deposits from Indus, Ganga, and Brahmaputra, serving as the nation’s agricultural granary; (3) The Peninsular Plateau (Central Highlands and Deccan Plateau), ancient and rich in coal, iron, and bauxite; (4) The Great Indian Desert (Thar) with shifting sand dunes (Barchans); (5) The Western & Eastern Coastal Plains; and (6) Island groups of Lakshadweep (coral atolls) and Andaman & Nicobar (volcanic peaks).',
          officialBookCode: 'gees1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/gees101.pdf',
          googleDriveFileId: '1CnGQZwM0BW9FacI0WnbWfq0VffMcnts4',
          exerciseSolutions: [
            {
              id: 'c7-soc-ch1-q1',
              questionNo: 'NCERT Textbook Q1',
              questionText: 'Name the three parallel ranges of the Himalayas and describe the distinct features of each range.',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'Himalayan mountain system in northern India',
              stepByStepSolution: [
                '1. Himadri (Great Himalayas / Inner Himalayas): The northernmost and highest continuous range (average height > 6,000 m), crowned by eternal snow peaks (Mt. Everest, Kanchenjunga) and major glaciers (Gangotri, Yamunotri).',
                '2. Himachal (Lesser Himalayas / Middle Himalayas): Lies south of Himadri (height 3,700–4,500 m), famous for rugged terrain, dense pine/deodar forests, and picturesque hill resorts (Shimla, Kullu, Manali, Darjeeling).',
                '3. Shivalik (Outer Himalayas): The southernmost and lowest range (height 900–1,100 m), composed of unconsolidated river sediments; features broad longitudinal valleys known as "Duns" (e.g., Dehradun, Kotli Dun).'
              ],
              finalAnswer: 'Himadri (Highest snow peaks & glaciers), Himachal (Scenic valleys & hill stations), and Shivalik (Lowest range with flat-bottomed Duns).',
              keyTakeaway: 'The three parallel Himalayan ranges step down from perpetual snow to forested valleys and outer sedimentary foothills.',
              nepCompetencyNote: 'Demonstrates spatial awareness and morphological understanding of plate tectonic uplift.'
            },
            {
              id: 'c7-soc-ch1-q2',
              questionNo: 'NCERT Textbook Q2',
              questionText: 'Differentiate between the Western Ghats and the Eastern Ghats with respect to continuity, elevation, and rainfall.',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'Peninsular Plateau coastal escarpments',
              stepByStepSolution: [
                '1. Continuity: Western Ghats (Sahyadri) are continuous and can be crossed only through passes (Thal Ghat, Bhor Ghat, Pal Ghat). Eastern Ghats are discontinuous and dissected by major eastward-flowing rivers (Mahanadi, Godavari, Krishna, Kaveri).',
                '2. Elevation: Western Ghats are higher (average 900–1,600 m, peak: Anamudi 2,695 m). Eastern Ghats are lower (average 600 m, peak: Mahendragiri 1,501 m).',
                '3. Rainfall: Western Ghats receive heavy orographic rainfall from southwest monsoon winds on their western slopes. Eastern Ghats receive lower rainfall, mostly during retreating northeast monsoons.'
              ],
              finalAnswer: 'Western Ghats are continuous, higher, and receive heavy orographic rain; Eastern Ghats are discontinuous, lower, and dissected by river deltas.',
              keyTakeaway: 'Western Ghats form a solid water divide for the peninsular river systems of southern India.',
              nepCompetencyNote: 'Comparative geographical analysis of peninsular relief and monsoon precipitation.'
            },
            {
              id: 'c7-soc-ch1-q3',
              questionNo: 'NCERT Textbook Q3',
              questionText: 'Why are the Northern Plains of India the most densely populated region in the country?',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Indo-Gangetic-Brahmaputra alluvial plains',
              stepByStepSolution: [
                '1. Fertile Alluvial Soil: Continuous deposition of silt and alluvium by the Ganga, Indus, and Brahmaputra river systems makes the land extremely productive for intensive agriculture.',
                '2. Perennial Water Supply: Fed by snow-fed Himalayan rivers, ensuring round-the-year water availability for drinking, irrigation, and industry.',
                '3. Flat Terrain: Level topography makes construction of transport networks (roads, railways), canals, and residential townships easy and cost-effective.',
                '4. Favourable Climate: Supports multi-cropping (Kharif, Rabi, Zaid), attracting vast agricultural and industrial communities.'
              ],
              finalAnswer: 'Due to highly fertile alluvial soil, perennial water from Himalayan rivers, flat terrain for transport, and ideal conditions for intensive agriculture.',
              keyTakeaway: 'Flat alluvial plains provide the highest carrying capacity for human population and food grain production.',
              nepCompetencyNote: 'Interlinks physical geography with human demography and economic activity.'
            },
            {
              id: 'c7-soc-ch1-q4',
              questionNo: 'NCERT Textbook Q4',
              questionText: 'Compare the origin, location, and characteristics of the Lakshadweep Islands and the Andaman & Nicobar Islands.',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'Indian island groups in Arabian Sea and Bay of Bengal',
              stepByStepSolution: [
                '1. Location: Lakshadweep lies in the Arabian Sea off the coast of Kerala. Andaman & Nicobar Islands lie in the Bay of Bengal extending from north to south.',
                '2. Origin: Lakshadweep islands are of Coral origin (atolls built by microscopic polyps). Andaman & Nicobar are of Submerged Mountain Peak / Tectonic origin (some volcanic, e.g., Barren Island).',
                '3. Size & Count: Lakshadweep is smaller in area (32 sq km, ~36 islands, capital: Kavaratti). Andaman & Nicobar is larger (572 islands with dense equatorial rainforests, capital: Port Blair).'
              ],
              finalAnswer: 'Lakshadweep (Arabian Sea, Coral atolls, compact) vs Andaman & Nicobar (Bay of Bengal, submerged volcanic ridges, expansive rainforests).',
              keyTakeaway: 'India possesses both coral reef island ecosystems in the west and volcanic tectonic island chains in the east.',
              nepCompetencyNote: 'Differentiates biological coral formations from tectonic or volcanic archipelagos.'
            },
            {
              id: 'c7-soc-ch1-q5',
              questionNo: 'NCERT Textbook Q5',
              questionText: 'Why is the Peninsular Plateau described as a "Storehouse of Minerals"?',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Ancient crystalline Peninsular shield of India',
              stepByStepSolution: [
                '1. Ancient Crystalline Rock: Composed of Archean gneisses, granites, and Dharwar metamorphic rocks formed billions of years ago.',
                '2. Chota Nagpur Plateau: Holds India’s richest deposits of high-grade iron ore, coal (Gondwana coalfields), bauxite, mica, and copper.',
                '3. Deccan Lava Plateau: The black regur soil region contains minerals and supports vital industrial and commercial agricultural activities.',
                '4. Southern Plateau: Contains rich reserves of manganese, gold (Kolar), chromite, and limestone essential for manufacturing.'
              ],
              finalAnswer: 'Because its ancient igneous and metamorphic formations contain massive reserves of iron ore, coal, bauxite, manganese, and mica.',
              keyTakeaway: 'The Peninsular shield is India’s primary supplier of industrial raw materials and metallic ores.',
              nepCompetencyNote: 'Relates geological age and rock composition with economic mineral concentration.'
            }
          ],
          competencyQuestions: [
            {
              id: 'c7-soc-ch1-cbq1',
              questionNo: 'Competency Hot Q1',
              questionText: 'How do the Himalayas act as a vital climatic barrier for the Indian subcontinent during winter and summer seasons?',
              difficulty: 'Hard',
              type: 'Competency',
              givenData: 'Himalayan geographical barrier effect',
              stepByStepSolution: [
                '1. Winter Protection: The towering Himalayan wall blocks the freezing, biting cold winds blowing southward from Central Asia and Siberia, keeping Northern India relatively temperate.',
                '2. Summer Monsoon Trapping: During the southwest monsoon season, the Himalayas block moisture-laden monsoon winds from escaping northward into Tibet, forcing them to rise and shed copious rain over India.',
                '3. Perennial River Source: Glaciers act as natural water towers that feed perennial rivers like the Ganga, Yamuna, and Brahmaputra through the dry summer season.'
              ],
              finalAnswer: 'They block arctic Siberian winds in winter and trap southwest monsoon winds in summer to cause widespread rainfall across India.',
              keyTakeaway: 'Without the Himalayas, the Indian subcontinent would be a cold, arid desert similar to Central Asia.',
              nepCompetencyNote: 'Analyzes macro-climatic barrier dynamics and precipitation mechanics.'
            },
            {
              id: 'c7-soc-ch1-cbq2',
              questionNo: 'Competency Hot Q2',
              questionText: 'A farmer in the Thar Desert and a farmer in the Gangetic Plains face entirely different farming challenges. Analyze the geographical reasons.',
              difficulty: 'Medium',
              type: 'Competency',
              givenData: 'Comparative study: Thar Desert vs Gangetic Plain',
              stepByStepSolution: [
                '1. Rainfall & Moisture: Thar receives scarce rainfall (<25 cm/year) with high evaporation; Gangetic plains receive abundant monsoon rain (>100 cm/year).',
                '2. Soil Type: Thar has loose sandy soil with low water retention; Gangetic plain has fine alluvium (Khadar/Bhangar) rich in humus and moisture retention.',
                '3. Irrigation Access: Thar relies on canals (Indira Gandhi Canal) or deep underground aquifers (Tankas); Gangetic plains have dense perennial river canals and high water tables.'
              ],
              finalAnswer: 'Thar has sandy arid soil with acute water scarcity; the Gangetic plain has deep alluvial soil with perennial river irrigation and high fertility.',
              keyTakeaway: 'Landforms directly dictate water availability, soil type, and agricultural livelihoods in a region.',
              nepCompetencyNote: 'Evaluates environmental adaptation and agro-ecological diversity in India.'
            }
          ],
          quiz: [
            {
              id: 'c7-soc-ch1-qz1',
              question: 'Which is the highest and northernmost continuous range of the Himalayas?',
              options: ['Himadri (Greater Himalayas)', 'Himachal (Lesser Himalayas)', 'Shivalik (Outer Himalayas)', 'Aravalli Range'],
              correctIndex: 0,
              explanation: 'Himadri (Greater Himalayas) is the highest continuous mountain range in the world with an average altitude exceeding 6,000 metres.'
            },
            {
              id: 'c7-soc-ch1-qz2',
              question: 'What are flat-bottomed longitudinal valleys situated between Himachal and Shivalik ranges called?',
              options: ['Passes (Ghats)', 'Duns (e.g. Dehradun)', 'Estuaries', 'Atolls'],
              correctIndex: 1,
              explanation: 'The longitudinal valleys between the Lesser Himalayas and Shivaliks are known as "Duns" (e.g., Dehradun, Kotli Dun, Patli Dun).'
            },
            {
              id: 'c7-soc-ch1-qz3',
              question: 'Which plateau in India is exceptionally rich in minerals like iron ore, coal, and bauxite?',
              options: ['Malwa Plateau', 'Chota Nagpur Plateau', 'Deccan Lava Trap', 'Ladakh Plateau'],
              correctIndex: 1,
              explanation: 'The Chota Nagpur Plateau (Jharkhand, Odisha, Chhattisgarh, West Bengal) is India’s mineral heartland, possessing vast deposits of coal and iron ore.'
            },
            {
              id: 'c7-soc-ch1-qz4',
              question: 'The Lakshadweep Islands located in the Arabian Sea are primarily of what origin?',
              options: ['Volcanic Rock', 'Coral Atoll Origin', 'Glacial Moraine', 'Continental Shelf Break'],
              correctIndex: 1,
              explanation: 'Lakshadweep Islands are small coral islands formed by the accumulation of calcium carbonate skeletons of coral polyps (atolls).'
            },
            {
              id: 'c7-soc-ch1-qz5',
              question: 'Which of the following rivers flows westwards into the Arabian Sea through a rift valley?',
              options: ['Ganga', 'Godavari', 'Narmada', 'Kaveri'],
              correctIndex: 2,
              explanation: 'The Narmada (along with Tapi) flows westward through a tectonic rift valley between the Vindhya and Satpura ranges into the Arabian Sea.'
            }
          ]
        },
        {
          id: 'c7-soc-ch2',
          chapterNumber: 2,
          title: 'Understanding the Weather (मौसम को समझना)',
          nepHighlights: 'Atmospheric layers (Troposphere 6-18km), 5 weather elements, traditional cues (ants, frogs, pine cones), IMD 1875 & motto (ādityāt jāyate vriṣhṭi), weather instruments (Thermometer, Rain Gauge, Barometer, Wind Vane/Sock, Anemometer, Hygrometer), AWS Sikkim 4800m & IMD warning color codes.',
          summaryTextbook: 'Chapter 2 explores the dynamic elements shaping the Earth’s weather in the troposphere (the layer extending 6 to 18 km). It details the 5 fundamental elements of weather: Temperature, Precipitation, Atmospheric Pressure, Wind, and Humidity. It explains traditional observations (ants shifting eggs to high ground, frogs croaking, pine cones closing in humidity), and modern meteorological science led by IMD (established 1875 with motto "ādityāt jāyate vriṣhṭi" from Manusmṛiti). Covers key instruments: thermometers (°C and °F, daily range and mean daily temperature), rain gauges (cylinder funnel in mm), barometers measuring pressure in millibars (normal 1013 mb vs depressions <1000 mb, and low 650 mb at Khardung La 5600m), wind vanes and airfield wind socks, cup anemometers for wind speed, and hygrometers measuring relative humidity (dry 20-40% vs humid 60-80%). Concludes with Automated Weather Stations (e.g. NDMA’s high-altitude AWS at 4800m in Sikkim) and the IMD 4-tier color alert system (Green, Yellow, Orange, Red).',
          officialBookCode: 'gees1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/gees102.pdf',
          exerciseSolutions: [
            {
              id: 'c7-soc-ch2-q1',
              questionNo: 'NCERT Activity Q1 (Matching)',
              questionText: 'Match the instrument with the weather element it measures: (1) Hygrometer, (2) Anemometer, (3) Barometer, (4) Thermometer, (5) Rain gauge.',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: '5 scientific weather instruments and their elements',
              stepByStepSolution: [
                '1. Hygrometer → (d) Humidity (measures relative humidity of air).',
                '2. Anemometer → (c) Wind direction and speed (rotates cups to measure speed in km/h).',
                '3. Barometer → (b) Atmospheric pressure (measured in millibars / mb).',
                '4. Thermometer → (e) Temperature (measured in Celsius or Fahrenheit).',
                '5. Rain gauge → (a) Precipitation (measures depth of collected rainfall in mm).'
              ],
              finalAnswer: '1-d, 2-c, 3-b, 4-e, 5-a',
              keyTakeaway: 'Each weather element requires a specialized instrument calibrated to international meteorological standards.'
            },
            {
              id: 'c7-soc-ch2-q2',
              questionNo: 'NCERT Textbook Q2',
              questionText: 'Jyotsna is deciding what clothes to pack for her school trip to Mumbai in June. She looks at the weather forecast, which predicts 29°C and 84% humidity. What would be your advice to her?',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'Weather forecast: 29°C temperature, 84% relative humidity',
              stepByStepSolution: [
                '1. High Relative Humidity (84%): When humidity is high, the rate of sweat evaporation from the human body slows down drastically because the surrounding air is already near saturation.',
                '2. Cooling Effect Reduced: Sweat does not evaporate quickly, leading to a sticky, uncomfortable sensation.',
                '3. Fabric Recommendation: Light, loose-fitting, breathable cotton clothes that absorb perspiration and allow air circulation.',
                '4. Monsoonal Precaution: In June, Mumbai experiences heavy monsoon rainfall; packing an umbrella, raincoat, and waterproof footwear is essential.'
              ],
              finalAnswer: 'Pack loose, breathable cotton clothes to stay comfortable in high humidity, along with rain gear (umbrella and raincoat) for June monsoons.',
              keyTakeaway: 'High humidity impedes sweat evaporation, requiring loose breathable fabrics to maintain body cooling.'
            },
            {
              id: 'c7-soc-ch2-q3',
              questionNo: 'NCERT Textbook Q3',
              questionText: 'Where should students install a rain gauge among: vegetable garden, school building terrace, open ground on raised platform, compound wall, or laboratory verandah?',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'Rain gauge site selection options',
              stepByStepSolution: [
                '1. Best Site: Option 3 — Open ground with an elevated platform.',
                '2. Reason 1 (No Obstruction): It is clear of trees, building walls, or roof gutters that could block raindrops or funnel extra runoff water into the collector.',
                '3. Reason 2 (Stable Flat Platform): Prevents the rain gauge from tipping over or tilting with strong winds.',
                '4. Flaws of other options: Garden has plants splashing water; compound wall risks falling; verandah roof blocks rain; terrace may experience excessive wind turbulence.'
              ],
              finalAnswer: 'Open ground with an elevated platform, as it ensures zero obstruction and prevents water splash or wind tipping.',
              keyTakeaway: 'Rain gauges must be positioned in clear open terrain on a flat raised base for true precipitation measurement.'
            }
          ],
          competencyQuestions: [
            {
              id: 'c7-soc-ch2-cbq1',
              questionNo: 'Competency HOTS Q1',
              questionText: 'Explain why atmospheric pressure drops at high altitudes like Khardung La (5600m), and how human bodies adapt to this change.',
              difficulty: 'Hard',
              type: 'Competency',
              givenData: 'High altitude atmospheric pressure (~650 mb)',
              stepByStepSolution: [
                '1. Thinner Air Column: Atmospheric pressure is the weight of the air column above. As altitude increases, there is less air above us, reducing pressure to ~650 mb at Khardung La compared to 1013 mb at sea level.',
                '2. Low Oxygen Partial Pressure: The air is thinner with fewer oxygen molecules per breath, causing breathlessness, fatigue, and dizziness.',
                '3. Acclimatisation: Humans adapt by pausing gradually during ascent, allowing the bone marrow to produce more red blood cells (erythrocytes) and hemoglobin to transport sufficient oxygen.'
              ],
              finalAnswer: 'Pressure drops because the air column overhead is smaller and thinner; the body adapts through gradual acclimatisation and increased red blood cell production.',
              keyTakeaway: 'Acclimatisation is vital for surviving low atmospheric pressure and hypoxic conditions at high altitudes.'
            }
          ],
          quiz: [
            {
              id: 'c7-soc-ch2-qz1',
              question: 'In which atmospheric layer do almost all weather phenomena occur?',
              options: ['Stratosphere', 'Troposphere', 'Mesosphere', 'Thermosphere'],
              correctIndex: 1,
              explanation: 'The troposphere (6 to 18 km) is closest to Earth and contains the air and moisture responsible for all weather.'
            },
            {
              id: 'c7-soc-ch2-qz2',
              question: 'What is the official motto of the India Meteorological Department (IMD)?',
              options: ['Satyameva Jayate', 'Ādityāt jāyate vriṣhṭi', 'Yogakshemam Vahamyaham', 'Dharmo Rakshati Rakshitah'],
              correctIndex: 1,
              explanation: 'The IMD motto is "Ādityāt jāyate vriṣhṭi" (From the sun arises rain), taken from the ancient text Manusmṛiti.'
            }
          ]
        },
        {
          id: 'c7-soc-part2-ch1',
          chapterNumber: 3,
          title: 'Part 2 - Ch 1: The Story of Indian Farming (भारतीय कृषि की कहानी)',
          nepHighlights: 'Indian agrarian heritage (Krishi Parashara, Kalibangan 2800 BCE perpendicular furrows for intercropping), 3 cropping seasons (Kharif/Kedāra, Rabi/Haimana, Zaid/Graiṣhmika), 6 major Indian soils & soil profile, indigenous water structures (Eris, Kuhls, Johads, Surangams, Ahar-Pyne, Bamboo drip), Pokkali rice & Kulaghar models, 100% organic Sikkim, and government farmer support (PM-KISAN, e-NAM, Soil Health Card).',
          summaryTextbook: 'New NCERT 2026-27 Exploring Society Grade 7 Part 2 Chapter 1 (gees201): Deep exploration of Indian agriculture as an ancient, evolving ecosystem. Traces agrarian roots from Harappan Kalibangan furrowed fields and classical texts (Rigveda, Arthashastra, Krishi Parashara, Amarakosha). Analyzes the 3 cropping rhythms (Kharif, Rabi, Zaid) and why Kerala grows rice while Punjab grows wheat. Details the 6 major Indian soils (Alluvial, Black/Regur, Red & Yellow, Laterite, Arid, Forest/Alpine) and soil conservation methods. Contrasts rain-fed agriculture (50% vulnerability) with ingenious traditional water harvesting (Eris in Tamil Nadu, Kuhls in Himachal, Surangams in Kerala, Bamboo drip in Meghalaya) and modern micro-irrigation (Drip & Sprinkler). Evaluates seed sovereignty (heirloom vs HYVs), ecological pathways (Goa\'s Kulaghar, Kerala\'s saline Pokkali rice, Sikkim\'s 100% organic model), and government interventions (PM-KISAN, PMFBY, Soil Health Card, e-NAM).',
          officialBookCode: 'gees2',
          officialPdfUrl: '/pdf/Class 07/7th SST part-2/gees201.pdf',
          coverImageUrl: '/book-covers/class7-social-science-part2-gees2.jpg',
          exerciseSolutions: [
            {
              id: 'c7-soc-p2-ch1-q1',
              questionNo: 'NCERT Textbook Q1',
              questionText: 'Why do farmers in Kerala grow rice while farmers in Punjab grow mostly wheat? What would happen if they swapped?',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'Agroclimatic adaptation of rice in Kerala vs wheat in Punjab',
              stepByStepSolution: [
                '1. Kerala Agro-Climate: Rice (Paddy) is a tropical, moisture-intensive Kharif crop requiring high temperatures (>25°C), high humidity, and continuous standing water (>150-200 cm rainfall). Kerala receives heavy rainfall from both the Southwest and Northeast monsoons, and its coastal lowlands provide ideal flooded terrain.',
                '2. Punjab Agro-Climate: Wheat is a temperate Rabi crop requiring cool temperatures (10°C–15°C) during vegetative growth, moderate moisture (50–75 cm), and bright sunny dry weather during ripening. Punjab\'s cold continental winter and fertile alluvial soil suit wheat cultivation perfectly.',
                '3. Impact if Swapped: If Kerala tried to grow winter wheat, high humidity and continuous tropical warmth would cause fungal blights and failure of grain filling. If Punjab planted rice during winter, freezing winter frost would kill the paddy seedlings.'
              ],
              finalAnswer: 'Kerala grows rice due to high heat and heavy monsoons; Punjab grows wheat due to cool continental winters and alluvial soil. Swapping primary seasonal crops would result in complete crop failure due to unsuitable temperatures and moisture.',
              keyTakeaway: 'Crop distribution in India is fundamentally governed by climatic parameters: temperature range, daylight duration, and water availability.',
              nepCompetencyNote: 'Demonstrates spatial ecological reasoning and agro-climatic comparative analysis.'
            },
            {
              id: 'c7-soc-p2-ch1-q2',
              questionNo: 'NCERT Textbook Q2 (Matching)',
              questionText: 'Match the following: (a) Kharif crops, (b) Rabi crops, (c) Alluvial soil, (d) Terrace farming, (e) Alpine soil, (f) Zaid crops with their descriptions.',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: '6 agricultural concepts and their characteristics',
              stepByStepSolution: [
                '(a) Kharif crops → (ii) Crops grown during the monsoon (sown June–July with monsoon arrival, e.g. Paddy, Maize).',
                '(b) Rabi crops → (i) Crops during the winter (sown Oct–Dec and harvested in spring, e.g. Wheat, Mustard).',
                '(c) Alluvial soil → (v) Soil rich in nutrients deposited by rivers (Indus, Ganga, Brahmaputra floodplains).',
                '(d) Terrace farming → (vi) Method of farming on hillsides (cutting step terraces to stop soil runoff).',
                '(e) Alpine soil → (iii) Thin, rough, and rocky soil found in mountainous regions (Himalayan slopes).',
                '(f) Zaid crops → (iv) Crops grown in summer (short dry season March–June, e.g. Watermelon, Cucumber).'
              ],
              finalAnswer: '(a)-(ii), (b)-(i), (c)-(v), (d)-(vi), (e)-(iii), (f)-(iv)',
              keyTakeaway: 'Mastering cropping rhythms and soil classifications is fundamental to understanding Indian geographical diversity.'
            },
            {
              id: 'c7-soc-p2-ch1-q3',
              questionNo: 'NCERT Textbook Q3',
              questionText: 'Why do certain crops thrive in specific regions?',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'Regional crop suitability across India',
              stepByStepSolution: [
                '1. Temperature and Photoperiod: Different plants require distinct temperature thresholds for germination, flowering, and ripening (e.g. Saffron requires Kashmir temperate cold; Cotton requires 210 frost-free days).',
                '2. Rainfall and Moisture Availability: High rainfall zones sustain water-loving crops (paddy, jute, tea), whereas semi-arid zones support drought-tolerant millets (jowar, bajra).',
                '3. Soil Composition and Drainage: Black soil retains moisture for cotton; laterite soil is acidic and well-drained for tea and coffee; alluvial soil provides rich potash and lime for wheat and sugarcane.',
                '4. Land Relief and Topography: Mountain slopes prevent water stagnation for tea roots, while flat deltas retain water for paddy.'
              ],
              finalAnswer: 'Crops thrive in specific regions due to the optimal alignment of temperature, rainfall, soil fertility/drainage, and topographical relief.',
              keyTakeaway: 'Regional agricultural specialization optimizes nature\'s local environmental strengths.'
            },
            {
              id: 'c7-soc-p2-ch1-q4',
              questionNo: 'NCERT Textbook Q4',
              questionText: 'How has modern technology helped farmers?',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'Technological innovations in Indian agriculture',
              stepByStepSolution: [
                '1. Farm Mechanization: Tractors, transplanters, combine harvesters, and laser land-levelers reduce back-breaking manual labor and speed up planting and harvesting.',
                '2. Micro-Irrigation Systems: Drip and sprinkler systems deliver water and dissolved nutrients directly to plant roots, saving 50–70% water and stopping weed proliferation.',
                '3. Satellite Weather Advisory: Weather satellites and smartphone applications (Kisan Suvidha) give early warnings about cyclones, hailstorms, and unseasonal rains.',
                '4. Precision Agriculture & Drones: Agricultural drones survey crop vigor, detect pest infestations early, and apply targeted bio-sprays without human chemical exposure.',
                '5. Digital Mandis & Direct Support: Platforms like e-NAM eliminate exploitative middlemen, and Direct Benefit Transfers (PM-KISAN) provide transparent income support.'
              ],
              finalAnswer: 'Technology has elevated agriculture through efficient mechanization, water-saving micro-irrigation, satellite weather alerts, drone surveillance, and transparent digital trading.',
              keyTakeaway: 'Modern agricultural technology maximizes resource efficiency while mitigating environmental and market risks.'
            },
            {
              id: 'c7-soc-p2-ch1-q5',
              questionNo: 'NCERT Textbook Q5',
              questionText: 'Why is sustainable agriculture important? Write a short note on this.',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'Concept and necessity of sustainable farming',
              stepByStepSolution: [
                '1. Definition: Sustainable agriculture involves food production practices that satisfy human nutritional needs without depleting natural ecosystems or harming future generations.',
                '2. Soil Health Preservation: Continuous use of synthetic chemical fertilizers destroys earthworms and microbial diversity, turning soil alkaline or saline. Sustainable practices (crop rotation, green manuring, jeevamrit) nurture living soil.',
                '3. Water Resource Protection: Conserves depleting groundwater reserves through rainwater catchment and micro-irrigation, preventing aquifer exhaustion.',
                '4. Elimination of Toxic Residues: Avoids hazardous chemical pesticides that poison village drinking water tables and cause rural health crises.',
                '5. Economic Sovereignty: Natural farming utilizes on-farm biological inputs (cow dung, urine, neem decoctions), liberating small farmers from crippling debt traps.'
              ],
              finalAnswer: 'Sustainable agriculture is vital because it preserves living soil fertility, saves scarce groundwater, prevents chemical toxicity in the food chain, and frees farmers from debt cycles.',
              keyTakeaway: 'Sustainable farming balances human food security with long-term ecological and economic resilience.'
            }
          ],
          competencyQuestions: [
            {
              id: 'c7-soc-p2-ch1-cbq1',
              questionNo: 'Competency HOTS Q1',
              questionText: 'Evaluate the archaeological evidence from Harappan Kalibangan regarding intercropping, and explain how this ancient practice aligns with modern sustainable agronomy.',
              difficulty: 'Hard',
              type: 'Competency',
              givenData: 'Kalibangan (2800 BCE) perpendicular furrow patterns',
              stepByStepSolution: [
                '1. Archaeological Proof: At Kalibangan (Rajasthan, c. 2800 BCE), archaeologists uncovered ploughed field impressions with perpendicular grid furrows: wide furrows running east-west crossed by narrow furrows running north-south.',
                '2. Agronomic Purpose: Wide furrows were used for taller crops (like mustard) and narrow furrows for shorter crops (like chickpea/gram), avoiding sunlight competition.',
                '3. Synergy with Sustainable Farming: Growing a cereal or oilseed alongside a leguminous crop fixes atmospheric nitrogen, breaks pest life-cycles, provides insurance against total crop failure, and optimizes land use.'
              ],
              finalAnswer: 'Kalibangan proves that Indian farmers developed scientific intercropping 4,800 years ago, creating natural nitrogen replenishment and ecological risk-hedging that modern sustainable agriculture champions today.',
              keyTakeaway: 'Ancient Indian farming embodied sophisticated ecological knowledge that remains directly relevant to modern agro-ecology.'
            }
          ],
          quiz: [
            {
              id: 'c7-soc-p2-ch1-qz1',
              question: 'At which Harappan archaeological site were perpendicular furrows discovered, proving intercropping over 4,800 years ago?',
              options: ['Lothal', 'Kalibangan', 'Mohenjo-daro', 'Dholavira'],
              correctIndex: 1,
              explanation: 'Kalibangan in Rajasthan revealed perpendicular furrow grids dating back to 2800 BCE, indicating double cropping.'
            },
            {
              id: 'c7-soc-p2-ch1-qz2',
              question: 'Which Indian state became the world\'s first 100% organic state in 2016?',
              options: ['Kerala', 'Sikkim', 'Goa', 'Uttarakhand'],
              correctIndex: 1,
              explanation: 'Sikkim eliminated synthetic chemical inputs to become the world\'s first 100% certified organic agricultural state.'
            },
            {
              id: 'c7-soc-p2-ch1-qz3',
              question: 'What is the traditional gravity-fed surface water diversion channel called in Himachal Pradesh?',
              options: ['Kuhl', 'Johad', 'Kund', 'Eri'],
              correctIndex: 0,
              explanation: 'Kuhls are traditional community channels in Himachal Pradesh that divert glacial runoff along mountain contours to terraced fields.'
            }
          ]
        }
      ]
    },
    {
      id: 'c7-sanskrit',
      name: 'Sanskrit (दीपकम - Deepakam)',
      iconName: 'BookOpen',
      color: '#9333ea',
      description: 'New NCERT 2026-27 Textbook Deepakam — Sanskrit Literature, Shlokas, Subhashitani & Grammar.',
      totalChapters: 15,
      coverImageUrl: '/book-covers/class7-sanskrit-deepakam.png',
      chapters: [
        {
          id: 'c7-sk-ch1',
          chapterNumber: 1,
          title: 'प्रथमो भागः: सुभाषितानि (Subhashitani)',
          nepHighlights: 'Ancient Sanskrit moral maxims, wisdom on truth, knowledge, character & self-discipline.',
          summaryTextbook: 'दीपकम (कक्षा 7) पाठ 1: संस्कृत के कालजयी सुभाषित जो सत्य, विद्या, शील, और विनम्रता का व्यावहारिक महत्व सिखाते हैं।',
          officialBookCode: 'gsde1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/gsde101.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },
    {
      id: 'c7-science',
      name: 'Science (Curiosity / जिज्ञासा)',
      iconName: 'Atom',
      color: '#10b981',
      description: 'New NCERT 2026-27 Curiosity — Nutrition, Heat, Acids, Bases & Salts, Physical & Chemical Changes, Adolescence & Life Inquiry.',
      totalChapters: 12,
      coverImageUrl: '/book-covers/class7-science-curiosity.png',
      chapters: [
        {
          id: 'c7-sci-ch1',
          chapterNumber: 1,
          title: 'Nutrition in Plants (पादपों में पोषण)',
          nepHighlights: 'Autotrophic & Heterotrophic nutrition, photosynthesis experiment & stomatal mechanisms.',
          summaryTextbook: 'Explores how green plants synthesize food using chlorophyll, sunlight, carbon dioxide, and water.',
          officialBookCode: 'gecu1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/gecu101.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c7-sci-ch6',
          chapterNumber: 6,
          title: 'Adolescence: A Stage of Growth and Change (किशोरवय: वृद्धि और परिवर्तन की एक अवस्था)',
          nepHighlights: 'Physical, emotional & biological transitions (ages 10–19), secondary sexual characteristics, Adam’s apple, puberty, menstrual hygiene, nutrition (Iron & B12), and substance abuse awareness.',
          summaryTextbook: 'New NCERT Curiosity Grade 7 Chapter 6: Deep exploration of adolescent growth spurts, voice box (Adam’s apple), hormonal regulation, menstruation, personal hygiene, and saying NO to harmful substances.',
          officialBookCode: 'gecu1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/gecu106.pdf',
          googleDriveFileId: '',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c7-sci-ch7',
          chapterNumber: 7,
          title: 'Heat Transfer in Nature (प्रकृति में ऊष्मा का स्थानांतरण)',
          nepHighlights: 'Three modes of heat transfer (Conduction, Convection, Radiation), good conductors vs insulators, sea breeze & land breeze convection currents, solar radiation across vacuum, water cycle & infiltration, aquifers, Varahamihira Brihatsamhita meteorology, and Ladakhi ice stupas for water conservation.',
          summaryTextbook: 'New NCERT Curiosity Grade 7 Chapter 7 (gecu107): Comprehensive exploration of thermal energy transfer. Details conduction in solids with particle vibration and materials classification; convection in fluids with hot air expansion and coastal land-sea breezes; radiation requiring no medium with solar heating and color absorption; water infiltration into groundwater aquifers; and ancient Indian meteorological heritage by Varahamihira alongside modern winter ice stupas in Ladakh.',
          officialBookCode: 'gecu1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/gecu107.pdf',
          googleDriveFileId: '',
          exerciseSolutions: [
            {
              id: 'c7-sci-ch7-q1',
              questionNo: 'Exercise Q1(i)',
              questionText: 'Your father bought a saucepan made of two different materials, A and B. Material A is the cooking bowl and B is the handle. What are their properties? (सॉसपैन के भाग A और B के क्या गुण होने चाहिए?)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Part A is the cooking surface and must conduct heat quickly from the flame to the food.',
                'Step 2: Part B is the handle and must be a poor conductor (insulator) so that it can be held safely without burning hands.',
                'चरण 1: भाग A पकाने वाला बर्तन है, इसलिए यह ऊष्मा का सुचालक (Good Conductor) होना चाहिए।',
                'चरण 2: भाग B हत्था (हैंडल) है, इसलिए यह ऊष्मा का कुचालक (Poor Conductor) होना चाहिए।'
              ],
              finalAnswer: 'A is a good conductor and B is a poor conductor of heat (A ऊष्मा का सुचालक और B कुचालक है).',
              keyTakeaway: 'Cooking pans pair high-conductivity metals with low-conductivity plastic or wood handles.'
            },
            {
              id: 'c7-sci-ch7-q2',
              questionNo: 'Exercise Q1(iii)',
              questionText: 'A smoke detector is a device that detects smoke and sounds an alarm. Where is the most suitable place to fit this device in your room? (कमरे में धुआँ संसूचक लगाने का सबसे उपयुक्त स्थान कौन सा है?)',
              difficulty: 'Easy',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: Smoke consists of hot air and burning gases that expand and become lighter than cool room air.',
                'Step 2: Due to convection currents, warm smoke rises immediately to the ceiling.',
                'चरण 1: धुआँ गर्म और हल्का होता है।',
                'चरण 2: संवहन के कारण गर्म धुआँ हमेशा ऊपर उठकर छत के पास एकत्र होता है।'
              ],
              finalAnswer: 'On the ceiling (छत पर)',
              keyTakeaway: 'Convection causes hot gases to rise upwards toward ceilings.'
            }
          ],
          competencyQuestions: [
            {
              id: 'c7-sci-ch7-c1',
              questionNo: 'Coastal Climate Task',
              questionText: 'Explain why windows in coastal houses face the sea, and distinguish between sea breeze and land breeze. (तटीय घरों की खिड़कियाँ समुद्र की ओर क्यों होती हैं?)',
              difficulty: 'Medium',
              type: 'Competency',
              stepByStepSolution: [
                'Step 1: During daytime, land heats up faster than the sea. Warm air over land rises, drawing in a refreshing cool sea breeze.',
                'Step 2: Windows face the sea to capture this cool daytime sea breeze directly.',
                'Step 3: At night, land cools faster than the sea, causing cooler air from land to blow towards the sea (land breeze).',
                'चरण 1: दिन में भूमि समुद्र से तेज गर्म होती है, जिससे समुद्र से भूमि की ओर ठंडी हवा (समुद्र समीर) चलती है।',
                'चरण 2: रात में भूमि तेजी से ठंडी होती है, जिससे भूमि से समुद्र की ओर ठंडी हवा (थल समीर) चलती है।'
              ],
              finalAnswer: 'Sea breeze brings daytime cooling from sea to land; land breeze blows from land to sea at night.',
              keyTakeaway: 'Differential heating and cooling rates of land vs water drive coastal wind convection.'
            }
          ],
          quiz: [
            {
              id: 'c7-sci-ch7-mcq1',
              question: 'Which method of heat transfer does NOT require any material medium? (ऊष्मा स्थानांतरण की कौन सी विधि माध्यम पर निर्भर नहीं करती?)',
              options: ['Conduction (चालन)', 'Convection (संवहन)', 'Radiation (विकिरण)', 'Infiltration (अंतःस्रवण)'],
              correctIndex: 2,
              explanation: 'Radiation transfers thermal energy via electromagnetic waves and can travel across the vacuum of space.'
            },
            {
              id: 'c7-sci-ch7-mcq2',
              question: 'Through which material does water seep the fastest? (किस पदार्थ से पानी का रिसाव सबसे तेज गति से होता है?)',
              options: ['Clay (चिकनी मिट्टी)', 'Gravel (बजरी)', 'Sand (रेत)', 'Fine silt (गाद)'],
              correctIndex: 1,
              explanation: 'Gravel has larger, interconnected voids between particles, allowing maximum seepage speed.'
            }
          ]
        },
        {
          id: 'c7-sci-ch9',
          chapterNumber: 9,
          title: 'Life Processes in Animals (जंतुओं में जैव प्रक्रम)',
          nepHighlights: 'Alimentary canal (Mouth to Anus, 6m small intestine villi, peristalsis, Beaumont stomach discovery, celiac disease & millets), Ruminants (rumen & 8h cud chewing), Birds (gizzard with grit), Respiratory system (Alveoli, Diaphragm & Ribs mechanics, Limewater CO2 test, Breathing vs Respiration, Gills in fish, dual respiration in frogs, moist skin in earthworms).',
          summaryTextbook: 'New NCERT Curiosity Grade 7 Chapter 9 (gecu109): In-depth exploration of animal life processes. Traces the human digestive journey from mechanical teeth crushing to enzyme action, nutrient absorption across small intestine villi, and water absorption in large intestine. Investigates respiration word equation (Glucose + Oxygen -> CO2 + Water + Energy), breathing mechanics via balloon-diaphragm models, gas percentages (Inhaled 21% O2 vs Exhaled 16% O2), and diverse respiratory organs across fishes, amphibians, and earthworms.',
          officialBookCode: 'gecu1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/gecu109.pdf',
          googleDriveFileId: '',
          exerciseSolutions: [
            {
              id: 'c7-sci-ch9-q1',
              questionNo: 'NCERT Q1',
              questionText: 'Complete the journey of food through the alimentary canal by filling up the boxes with appropriate parts.',
              difficulty: 'Easy',
              type: 'Competency',
              givenData: 'Food -> Mouth -> [ ? ] -> Stomach -> [ ? ] -> [ ? ] -> Rectum -> Anus',
              stepByStepSolution: [
                '1. Food is crushed in the Mouth and pushed into the Oesophagus (Food Pipe).',
                '2. From the Oesophagus, peristaltic waves push it into the Stomach.',
                '3. Churned food enters the Small Intestine (~6m) for complete digestion & absorption via villi.',
                '4. Undigested residue moves into the Large Intestine (~1.5m) for water absorption.',
                '5. Stool is stored in the Rectum and egested through the Anus.'
              ],
              finalAnswer: 'Food -> Mouth -> Oesophagus -> Stomach -> Small Intestine -> Large Intestine -> Rectum -> Anus.',
              keyTakeaway: 'The alimentary canal is a continuous muscular tube starting at the mouth and terminating at the anus.'
            },
            {
              id: 'c7-sci-ch9-q3',
              questionNo: 'NCERT Q3',
              questionText: 'What is the role of the diaphragm in breathing?',
              difficulty: 'Easy',
              type: 'Competency',
              givenData: 'Options: (i) To filter air (ii) To produce sound (iii) To help in inhalation and exhalation (iv) To absorb oxygen',
              stepByStepSolution: [
                '1. During inhalation, the diaphragm contracts and moves downwards, increasing chest volume.',
                '2. During exhalation, the diaphragm relaxes and moves upwards, decreasing chest volume.'
              ],
              finalAnswer: '(iii) To help in inhalation and exhalation.',
              keyTakeaway: 'Diaphragm muscular movement regulates thoracic cavity pressure and volume for lung ventilation.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c7-sci-ch9-qz1',
              question: 'Which is the longest part of the human alimentary canal?',
              options: ['Large intestine', 'Small intestine', 'Oesophagus', 'Stomach'],
              correctIndex: 1,
              explanation: 'The small intestine is nearly 6 metres long, making it the longest section of the alimentary canal.'
            },
            {
              id: 'c7-sci-ch9-qz2',
              question: 'Which chamber in a cow stores partially chewed grass for later rumination?',
              options: ['Gizzard', 'Rumen', 'Villi', 'Alveoli'],
              correctIndex: 1,
              explanation: 'Ruminants store partially swallowed grass in the rumen, returning it as cud for rumination.'
            }
          ]
        }
      ]
    },
    {
      id: 'c7-arts',
      name: 'Arts (कृति - Kriti)',
      iconName: 'Palette',
      color: '#f43f5e',
      description: 'New NCERT 2026-27 Art Education Textbook Kriti — Visual Arts, Folk Traditions, Crafts & Creative Expression.',
      totalChapters: 20,
      coverImageUrl: '/book-covers/class7-arts-kriti.png',
      chapters: [
        {
          id: 'c7-art-ch1',
          chapterNumber: 1,
          title: 'Unit 1: Exploring Visual Arts & Indian Folk Forms',
          nepHighlights: 'Appreciation of traditional folk art, colors, clay modeling, and creative crafts.',
          summaryTextbook: 'New NCERT Kriti Class VII: Introduction to Indian folk painting styles, color wheel principles, and hands-on artistic creations.',
          officialBookCode: 'gekr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/gekr101.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },
    {
      id: 'c7-physical-education',
      name: 'Physical Education and Well Being (खेल यात्रा - Khel Yatra)',
      iconName: 'Activity',
      color: '#059669',
      description: 'New NCERT 2026-27 Physical Education & Well Being — Yoga, Athletics, Indigenous Indian Games, Nutrition & Mental Health.',
      totalChapters: 6,
      coverImageUrl: '/book-covers/class7-pe-khelyatra.png',
      chapters: [
        {
          id: 'c7-pe-ch1',
          chapterNumber: 1,
          title: 'Chapter 1: Physical Fitness, Yoga & Indigenous Games (शारीरिक तंदुरुस्ती एवं योग)',
          nepHighlights: 'Holistic health, Pranayama, Asanas, and indigenous games of India (Kabaddi, Kho-Kho, Mallakhamb).',
          summaryTextbook: 'New NCERT Khel Yatra Class VII Chapter 1: Fundamentals of physical fitness, cardiovascular endurance, yogic practices, and traditional Indian outdoor sports.',
          officialBookCode: 'geky1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/geky101.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },
    {
      id: 'c7-vocational',
      name: 'Vocational Education (कौशल बोध - Kaushal Bodh)',
      iconName: 'Briefcase',
      color: '#0284c7',
      description: 'New NCERT 2026-27 Vocational Education — Hands-on Trades, Digital Literacy, Agriculture & Life Skills.',
      totalChapters: 7,
      coverImageUrl: '/book-covers/class7-vocational-kaushalbodh.png',
      chapters: [
        {
          id: 'c7-ve-ch1',
          chapterNumber: 1,
          title: 'Chapter 1: Introduction to World of Skills & Practical Trades (कौशल की दुनिया)',
          nepHighlights: 'Vocational exposure, bagless days, hands-on experiential learning, and community crafts.',
          summaryTextbook: 'New NCERT Kaushal Bodh Class VII Chapter 1: Understanding vocational skills, practical workshop techniques, sustainable livelihoods, and self-reliance.',
          officialBookCode: 'gekb1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/gekb101.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },
    {
      id: 'c7-urdu',
      name: 'Urdu (ख्याल - Khayal)',
      iconName: 'BookOpen',
      color: '#7c3aed',
      description: 'New NCERT 2026-27 Urdu Textbook Khayal — Poetry, Prose, Cultural Heritage & Grammar.',
      totalChapters: 14,
      coverImageUrl: '/book-covers/class7-urdu-khayal.png',
      chapters: [
        {
          id: 'c7-ur-ch1',
          chapterNumber: 1,
          title: 'Chapter 1: Hamd & Classic Urdu Poetry (حمد و نظم)',
          nepHighlights: 'Poetic appreciation, literary expressions, ethical narratives, and linguistic vocabulary.',
          summaryTextbook: 'New NCERT Khayal Class VII Chapter 1: Hamd and inspirational verse reflecting nature, gratitude, and moral excellence.',
          officialBookCode: 'guky1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/guky101.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    }
  ]
};
