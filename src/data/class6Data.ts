import type { ClassStageInfo } from './ncertData';

export const CLASS_6_DATA: ClassStageInfo = {
  classNumber: 6,
  stageName: 'Middle',
  ageGroup: '11-12 Years',
  nepFocus: 'Foundational inquiry, activity-based conceptual exploration, bilingual literacy & computational thinking',
  subjects: [
    {
      id: 'c6-maths',
      name: 'Mathematics (गणित प्रकाश - Ganita Prakash)',
      iconName: 'Calculator',
      color: '#4f46e5',
      description: 'New NCERT 2026–27 Ganita Prakash: Patterns, Lines & Angles, Number Play, Fractions, Constructions & Symmetry.',
      totalChapters: 10,
      coverImageUrl: '/book-covers/class6-math-ganita.jpg',
      chapters: [
        {
          id: 'c6-m-ch1',
          chapterNumber: 1,
          title: 'Patterns in Mathematics',
          nepHighlights: 'Exploration of geometric visual patterns, number sequences, and inductive logic.',
          summaryTextbook: 'Patterns in shapes, sequences of numbers, and finding rules that govern geometric designs.',
          officialBookCode: 'fegp1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fegp101.pdf',
          exerciseSolutions: [
            {
              id: 'c6-m-ch1-q1',
              questionNo: 'Exercise 1.1 Q1',
              questionText: 'What comes next in the sequence of triangular numbers: 1, 3, 6, 10, ...?',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Sequence: 1, 3, 6, 10, ...',
              formula: 'T_n = n(n + 1) / 2',
              stepByStepSolution: [
                '1. Look at differences: 3 - 1 = 2, 6 - 3 = 3, 10 - 6 = 4.',
                '2. The difference increases by 1 each step.',
                '3. Next difference is 5, so next number is 10 + 5 = 15.'
              ],
              finalAnswer: '15',
              keyTakeaway: 'Triangular numbers grow by consecutive natural numbers: +2, +3, +4, +5.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c6-m-ch1-qz1',
              question: 'Which of the following is the 5th triangular number?',
              options: ['12', '15', '16', '20'],
              correctIndex: 1,
              explanation: 'The 5th triangular number is 1 + 2 + 3 + 4 + 5 = 15.'
            }
          ]
        },
        {
          id: 'c6-m-ch2',
          chapterNumber: 2,
          title: 'Lines and Angles',
          nepHighlights: 'Hands-on paper folding and everyday observation of rays, intersecting lines, and angle types.',
          summaryTextbook: 'Points, line segments, rays, intersecting and parallel lines, acute, right, obtuse, straight, and reflex angles.',
          officialBookCode: 'fegp1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fegp102.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-m-ch3',
          chapterNumber: 3,
          title: 'Number Play',
          nepHighlights: 'Playful inquiry into divisibility rules, factors, primes, and Indian mathematical history.',
          summaryTextbook: 'Factors, multiples, prime and composite numbers, divisibility tests for 2, 3, 4, 5, 6, 8, 9, 10, 11.',
          officialBookCode: 'fegp1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fegp103.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-m-ch4',
          chapterNumber: 4,
          title: 'Data Handling and Presentation',
          nepHighlights: 'Real-world data collection, tally charts, pictographs, and bar graphs with visual reasoning.',
          summaryTextbook: 'Organising data into tables, pictographs with scale representations, and reading bar charts.',
          officialBookCode: 'fegp1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fegp104.pdf',
          exerciseSolutions: [
            {
              id: 'c6-m-ch4-q1',
              questionNo: 'Figure it Out Page 75 Q1 & Q2',
              questionText: 'What would you do to find the most popular game among Naresh and Navya’s classmates, and which game is it?',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Sports preferences: Hockey (8), Kabaddi (6), Cricket (6), Satoliya (5), Football (4), Badminton (2).',
              formula: 'Highest Frequency = Mode / Most Popular Category',
              stepByStepSolution: [
                '1. Organise the raw collected list into a frequency table using tally marks.',
                '2. Count frequencies: Hockey = 8, Kabaddi = 6, Cricket = 6, Satoliya = 5, Football = 4, Badminton = 2.',
                '3. Identify the highest frequency: 8 corresponds to Hockey.'
              ],
              finalAnswer: 'Hockey (with 8 students)',
              keyTakeaway: 'Organising raw data into a frequency table allows instant identification of the most popular category.'
            },
            {
              id: 'c6-m-ch4-q2',
              questionNo: 'Figure it Out Page 77 Q1',
              questionText: 'Given the shoe sizes of 27 students in ascending order (3,3,3, 4,4,4,4,4,4,4,4,4, 5,5,5,5,5,5,5,5,5,5, 6,6,6,6, 7), find smallest, largest, size 5 count, and size > 4 count.',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: '27 shoe sizes arranged in ascending order.',
              formula: 'Count of occurrences in ordered array.',
              stepByStepSolution: [
                '1. Smallest size is first entry: 3. Largest size is last entry: 7.',
                '2. Count of size 5: There are 10 students wearing size 5.',
                '3. Sizes larger than 4 include sizes 5, 6, and 7: 10 + 4 + 1 = 15 students.'
              ],
              finalAnswer: 'Smallest: 3, Largest: 7, Size 5: 10 students, Size > 4: 15 students',
              keyTakeaway: 'Ascending order prevents omission and makes frequency calculations quick and accurate.'
            },
            {
              id: 'c6-m-ch4-q3',
              questionNo: 'Figure it Out Page 88 Q1',
              questionText: 'How many total vehicles passed through Delhi crossing between 6 AM and 12 Noon according to the bar graph?',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'Hourly traffic: 6-7 AM (150), 7-8 AM (1200), 8-9 AM (1000), 9-10 AM (800), 10-11 AM (700), 11-12 Noon (600).',
              formula: 'Total = Sum of hourly frequencies',
              stepByStepSolution: [
                '1. Add all hourly counts from the bar graph.',
                '2. Total = 150 + 1200 + 1000 + 800 + 700 + 600.',
                '3. Total = 4,450 vehicles.'
              ],
              finalAnswer: '4,450 vehicles',
              keyTakeaway: 'A bar graph scale converts bar heights into concrete values that can be aggregated.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c6-m-ch4-qz1',
              question: 'Which tally mark bundle correctly represents the number 9?',
              options: ['卌 ||||', '|||| |||| |', '卌 卌', '卌 |||'],
              correctIndex: 0,
              explanation: 'A 5-bundle 卌 plus 4 single strokes |||| represents 5 + 4 = 9.'
            },
            {
              id: 'c6-m-ch4-qz2',
              question: 'In a pictograph where 1 🪁 = 100 kites, how many symbols represent 450 kites?',
              options: ['4 full symbols and 1 half symbol', '4 symbols', '5 symbols', '45 symbols'],
              correctIndex: 0,
              explanation: '450 ÷ 100 = 4.5, which is represented by 4 full symbols and 1 half symbol.'
            },
            {
              id: 'c6-m-ch4-qz3',
              question: 'Why are vertical column graphs preferred over horizontal bars for mountain heights?',
              options: ['Mountains rise upwards from the ground', 'Mountains are always green', 'Vertical bars take less ink', 'It is required by calculators'],
              correctIndex: 0,
              explanation: 'Heights naturally grow upward from the ground, making vertical column graphs visually evocative.'
            }
          ]
        },
        {
          id: 'c6-m-ch5',
          chapterNumber: 5,
          title: 'Prime Time',
          nepHighlights: 'Sieve of Eratosthenes, prime factorisation trees, Highest Common Factor (HCF) and LCM.',
          summaryTextbook: 'Deep dive into primes, twin primes, prime factorisation, and calculating HCF and LCM for real applications.',
          officialBookCode: 'fegp1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fegp105.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-m-ch6',
          chapterNumber: 6,
          title: 'Perimeter and Area',
          nepHighlights: 'Visual measurement concepts for boundary lengths and enclosed surfaces using grid papers.',
          summaryTextbook: 'Perimeter of regular polygons and rectangles; calculating area using unit squares and standard formulas.',
          officialBookCode: 'fegp1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fegp106.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-m-ch7',
          chapterNumber: 7,
          title: 'Fractions',
          nepHighlights: 'Visual understanding of proper, improper, mixed fractions and number line representations.',
          summaryTextbook: 'Part of a whole, fraction on the number line, equivalent fractions, simplest form, and addition/subtraction of fractions.',
          officialBookCode: 'fegp1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fegp107.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-m-ch8',
          chapterNumber: 8,
          title: 'Playing with Constructions',
          nepHighlights: 'Practical geometry with ruler and compasses, drawing circles, perpendiculars, and bisectors.',
          summaryTextbook: 'Geometrical instruments, constructing circles of given radius, perpendicular bisectors of line segments, and angles.',
          officialBookCode: 'fegp1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fegp108.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-m-ch9',
          chapterNumber: 9,
          title: 'Symmetry',
          nepHighlights: 'Observing rotational and reflectional balance in nature, traditional Indian art, and geometry.',
          summaryTextbook: 'Line of symmetry, symmetrical figures in nature and rangoli, reflection and symmetry.',
          officialBookCode: 'fegp1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fegp109.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-m-ch10',
          chapterNumber: 10,
          title: 'The Other Side of Zero',
          nepHighlights: 'Conceptual birth of negative integers, real-life elevation/temperatures, and number line movement.',
          summaryTextbook: 'Introduction to negative integers, ordering integers on a number line, and basic addition and subtraction of integers.',
          officialBookCode: 'fegp1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fegp110.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },
    {
      id: 'c6-science',
      name: 'Science (जिज्ञासा / Curiosity - Jigyasa)',
      iconName: 'Sparkles',
      color: '#10b981',
      description: 'New NCERT 2026–27 Textbook Curiosity: Living World, Mindful Eating, Magnets, Motion, Water & Beyond Earth.',
      totalChapters: 12,
      coverImageUrl: '/book-covers/class6-science-curiosity.jpg',
      chapters: [
        {
          id: 'c6-sci-ch1',
          chapterNumber: 1,
          title: 'The Wonderful World of Science',
          nepHighlights: 'Cultivating curiosity, scientific temper, observation, and questioning like a young scientist.',
          summaryTextbook: 'Introduction to scientific inquiry, asking how and why, making hypotheses, and recording observations.',
          officialBookCode: 'fhcu1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhcu101.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-sci-ch2',
          chapterNumber: 2,
          title: 'Diversity in the Living World',
          nepHighlights: 'Exploring biodiversity, classification of plants (herbs, shrubs, trees) and animal habitats.',
          summaryTextbook: 'Habitats of plants and animals, adaptations to desert, aquatic, and mountain environments.',
          officialBookCode: 'fhcu1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhcu102.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-sci-ch3',
          chapterNumber: 3,
          title: 'Mindful Eating: A Path to a Healthy Body',
          nepHighlights: 'Nutritional science, balanced diet, deficiency diseases, and traditional Indian millets (Shree Anna).',
          summaryTextbook: 'Carbohydrates, proteins, fats, vitamins, minerals, dietary fibers, and water requirements.',
          officialBookCode: 'fhcu1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhcu103.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-sci-ch4',
          chapterNumber: 4,
          title: 'Exploring Magnets',
          nepHighlights: 'Discovery of magnets, magnetic vs non-magnetic materials, poles, and magnetic compass.',
          summaryTextbook: 'Poles of a magnet, attraction and repulsion, making simple magnets, and finding directions.',
          officialBookCode: 'fhcu1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhcu104.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-sci-ch5',
          chapterNumber: 5,
          title: 'Measurement of Length and Motion',
          nepHighlights: 'History of standard units (SI), measuring curved lines, and types of motion (rectilinear, circular, periodic).',
          summaryTextbook: 'Standard units of length, measuring instruments, parallax error avoidance, and types of motion.',
          officialBookCode: 'fhcu1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhcu105.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-sci-ch6',
          chapterNumber: 6,
          title: 'Materials Around Us',
          nepHighlights: 'Grouping materials based on appearance, hardness, solubility, density in water, and transparency.',
          summaryTextbook: 'Transparent, translucent, and opaque objects; physical properties of solids, liquids, and gases.',
          officialBookCode: 'fhcu1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhcu106.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-sci-ch7',
          chapterNumber: 7,
          title: 'Temperature and its Measurement',
          nepHighlights: 'Understanding heat sensation vs accurate scientific measurement with clinical & laboratory thermometers.',
          summaryTextbook: 'Scale of temperature (Celsius), construction and reading of laboratory and clinical thermometers.',
          officialBookCode: 'fhcu1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhcu107.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-sci-ch8',
          chapterNumber: 8,
          title: 'A Journey through States of Water',
          nepHighlights: 'Water cycle in nature, evaporation, condensation, precipitation, and groundwater conservation.',
          summaryTextbook: 'States of water, water cycle dynamics, cloud formation, rain, and water conservation practices.',
          officialBookCode: 'fhcu1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhcu108.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-sci-ch9',
          chapterNumber: 9,
          title: 'Methods of Separation in Everyday Life',
          nepHighlights: 'Threshing, winnowing, sieving, sedimentation, decantation, filtration, and evaporation.',
          summaryTextbook: 'Separating solid-solid, solid-liquid mixtures using everyday domestic and scientific techniques.',
          officialBookCode: 'fhcu1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhcu109.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-sci-ch10',
          chapterNumber: 10,
          title: 'Living Creatures: Exploring their Characteristics',
          nepHighlights: 'What makes something alive: respiration, response to stimuli, growth, excretion, and reproduction.',
          summaryTextbook: 'Key life processes, cellular structure foundation, and differentiating living, non-living, and dead matter.',
          officialBookCode: 'fhcu1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhcu110.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-sci-ch11',
          chapterNumber: 11,
          title: 'Nature’s Treasures',
          nepHighlights: 'Sustainable natural resources, forests, soil, water bodies, and ecological balance.',
          summaryTextbook: 'Natural resources, renewable vs non-renewable resources, and individual responsibility in conservation.',
          officialBookCode: 'fhcu1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhcu111.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-sci-ch12',
          chapterNumber: 12,
          title: 'Beyond Earth',
          nepHighlights: 'Solar system, planets, moon phases, constellations, and India’s space exploration achievements.',
          summaryTextbook: 'The Sun, planetary orbits, Earth’s unique features, artificial satellites, and ISRO missions.',
          officialBookCode: 'fhcu1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhcu112.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },
    {
      id: 'c6-social-science',
      name: 'Social Science (Exploring Society: India and Beyond)',
      iconName: 'Compass',
      color: '#0284c7',
      description: 'New NCERT 2026–27 Exploring Society: Geography of Earth, Beginnings of Civilisation, Diversity & Grassroots Governance.',
      totalChapters: 14,
      chapters: [
        {
          id: 'c6-sst-ch1',
          chapterNumber: 1,
          title: 'Locating Places on the Earth',
          nepHighlights: 'Latitudes, longitudes, prime meridian, equator, time zones, and GPS basics.',
          summaryTextbook: 'Understanding globes, grid system of parallels and meridians, calculating local and standard time.',
          officialBookCode: 'fees1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fees101.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-sst-ch2',
          chapterNumber: 2,
          title: 'Oceans and Continents',
          nepHighlights: 'Major landmasses, seven continents, five oceans, and maritime heritage.',
          summaryTextbook: 'Physical distribution of oceans and continents, continental drift overview, and ecological importance of oceans.',
          officialBookCode: 'fees1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fees102.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-sst-ch3',
          chapterNumber: 3,
          title: 'Landforms and Life',
          nepHighlights: 'Mountains, plateaus, and plains; how terrain shapes human settlements and livelihoods.',
          summaryTextbook: 'Internal and external processes forming mountains, plateaus, and plains, and human adaptations.',
          officialBookCode: 'fees1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fees103.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-sst-ch4',
          chapterNumber: 4,
          title: 'Timeline and Sources of History',
          nepHighlights: 'Historical enquiry, archaeological artifacts, inscriptions, coins, and manuscripts.',
          summaryTextbook: 'Chronology, BCE/CE dating systems, primary and secondary sources used by historians.',
          officialBookCode: 'fees1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fees104.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-sst-ch5',
          chapterNumber: 5,
          title: 'India, That Is Bharat',
          nepHighlights: 'Constitutional identity, geography of the subcontinent, and natural boundaries.',
          summaryTextbook: 'The geographic and civilisational boundaries of India, river valleys, and unity across diverse regions.',
          officialBookCode: 'fees1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fees105.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-sst-ch6',
          chapterNumber: 6,
          title: 'The Beginnings of Indian Civilisation',
          nepHighlights: 'Indus-Saraswati (Harappan) civilisation, town planning, metallurgy, trade, and sanitation.',
          summaryTextbook: 'Town planning in Mohenjo-daro and Harappa, granaries, seals, crafts, and reasons for transition.',
          officialBookCode: 'fees1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fees106.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-sst-ch7',
          chapterNumber: 7,
          title: 'India’s Cultural Roots',
          nepHighlights: 'Vedic literature, Upanishads, Buddhist and Jain traditions, and moral philosophy.',
          summaryTextbook: 'Foundational concepts of Dharma, Ahimsa, meditation, early literature, and philosophical inquiry.',
          officialBookCode: 'fees1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fees107.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-sst-ch8',
          chapterNumber: 8,
          title: 'Unity in Diversity, or "Many in the One"',
          nepHighlights: 'Linguistic, culinary, festive, and cultural richness harmonised under shared civilisational ethos.',
          summaryTextbook: 'Appreciating regional diversity across Ladakh, Kerala, North-East, and central plains under Indian unity.',
          officialBookCode: 'fees1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fees108.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-sst-ch9',
          chapterNumber: 9,
          title: 'Family and Community',
          nepHighlights: 'Kinship structures, community mutual aid, interdependence, and civic empathy.',
          summaryTextbook: 'Roles in families, community collaboration, mutual respect, and resolution of conflicts peacefully.',
          officialBookCode: 'fees1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fees109.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-sst-ch10',
          chapterNumber: 10,
          title: 'Grassroots Democracy — Part 1: Governance in Rural Areas',
          nepHighlights: 'Panchayati Raj, Gram Sabha, Gram Panchayat, and direct democracy in action.',
          summaryTextbook: 'Three tiers of Panchayati Raj, functioning of Gram Sabha, village water and sanitation management.',
          officialBookCode: 'fees1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fees110.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-sst-ch11',
          chapterNumber: 11,
          title: 'Grassroots Democracy — Part 2: Governance in Urban Areas',
          nepHighlights: 'Municipal Corporations, ward councillors, civic amenities, and citizen participation.',
          summaryTextbook: 'Municipal administration, waste disposal, public health, road maintenance, and city budgets.',
          officialBookCode: 'fees1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fees111.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-sst-ch12',
          chapterNumber: 12,
          title: 'The Value of Work',
          nepHighlights: 'Dignity of labour, recognition of uncompensated domestic work, and professional equality.',
          summaryTextbook: 'Occupations, essential services, respecting all professions, and equitable division of domestic tasks.',
          officialBookCode: 'fees1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fees112.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-sst-ch13',
          chapterNumber: 13,
          title: 'Economic Activities Around Us',
          nepHighlights: 'Primary, secondary, and tertiary sectors; markets, supply chains, and livelihoods.',
          summaryTextbook: 'Farming, manufacturing, shops, transportation, money, and banking in everyday rural and urban life.',
          officialBookCode: 'fees1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fees113.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-sst-ch14',
          chapterNumber: 14,
          title: 'Special Section: India and Beyond',
          nepHighlights: 'Historical trade routes (Silk Road, spice routes), cultural exchange, and global friendship.',
          summaryTextbook: 'Maritime trade with Southeast Asia, Rome, Central Asia, and transmission of knowledge and values.',
          officialBookCode: 'fees1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fees114.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },
    {
      id: 'c6-english',
      name: 'English (पूर्वी - Poorvi)',
      iconName: 'BookOpen',
      color: '#f59e0b',
      description: 'New NCERT 2026–27 Textbook Poorvi: Fables, Friendship, Nurturing Nature (Neem Baba), Sports & Culture.',
      totalChapters: 10,
      coverImageUrl: '/book-covers/class7-english-honeycomb.png',
      chapters: [
        {
          id: 'c6-eng-ch1',
          chapterNumber: 1,
          title: 'Unit 1 • Ch 1: A Bottle of Dew',
          nepHighlights: 'Indian folk tale about hard work, dedication, agriculture, and wisdom over get-rich-quick greed.',
          summaryTextbook: 'Rama teaches Somadutta that true magic is not in gathering dew, but in cultivating banana plants with persistent diligence.',
          officialBookCode: 'fepr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fepr101.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-eng-ch2',
          chapterNumber: 2,
          title: 'Unit 1 • Ch 2: The Raven and the Fox',
          nepHighlights: 'Classic fable on flattery, cleverness, and self-awareness.',
          summaryTextbook: 'The fox flatters the raven to make him sing, causing the raven to drop the cheese.',
          officialBookCode: 'fepr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fepr102.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-eng-ch3',
          chapterNumber: 3,
          title: 'Unit 2 • Ch 3: Rama to the Rescue',
          nepHighlights: 'Courage, kindness towards animals, and helping those in distress.',
          summaryTextbook: 'A gripping narrative celebrating empathy, presence of mind, and animal rescue.',
          officialBookCode: 'fepr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fepr103.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-eng-ch4',
          chapterNumber: 4,
          title: 'Unit 2 • Ch 4: The Priceless Gift',
          nepHighlights: 'Heartwarming story of sacrifice, respect for soldiers, and true friendship beyond wealth.',
          summaryTextbook: 'Maggie and Mr. Gupta; a poor girl’s hard-earned shilling offered with pure devotion to her fallen brother.',
          officialBookCode: 'fepr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fepr104.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-eng-ch5',
          chapterNumber: 5,
          title: 'Unit 3 • Ch 5: The Olive Tree',
          nepHighlights: 'Respect for elders, enduring trees, nature conservation, and Mediterranean lore.',
          summaryTextbook: 'Story exploring the resilience and generosity of ancient olive trees.',
          officialBookCode: 'fepr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fepr105.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-eng-ch6',
          chapterNumber: 6,
          title: 'Unit 3 • Ch 6: The Voice of the Grass',
          nepHighlights: 'Lyric poem voicing nature’s quiet omnipresence and ecological vitality.',
          summaryTextbook: 'The grass speaks of its silent service covering hills, plains, and graves with green life.',
          officialBookCode: 'fepr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fepr106.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-eng-ch7',
          chapterNumber: 7,
          title: 'Unit 3 • Ch 7: Neem Baba (Interactive MCQs & Story)',
          nepHighlights: 'Grandmother’s conversation with the ancient Neem tree celebrating indigenous Ayurveda and oxygen.',
          summaryTextbook: 'Amber learns how Neem Baba purifies air, cures ailments, repels insects, and stands as a village guardian.',
          officialBookCode: 'fepr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fepr107.pdf',
          exerciseSolutions: [
            {
              id: 'c6-eng-ch7-q1',
              questionNo: 'Page 76 Reading Check Q1',
              questionText: 'Who was talking to the ancient Neem tree?',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Unit 3 Chapter 7 "Neem Baba"',
              stepByStepSolution: [
                '1. In the story, young Amber visits her grandfather’s courtyard.',
                '2. She wonders about the history and benefits of the giant neem tree.',
                '3. The tree communicates its ancient wisdom affectionately as "Neem Baba".'
              ],
              finalAnswer: 'Amber, who affectionately listened to Neem Baba’s wisdom.',
              keyTakeaway: 'The neem tree has been a protective, healing guardian in Indian homes for centuries.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c6-eng-ch7-qz1',
              question: 'Why is Neem Baba called a natural doctor?',
              options: [
                'He treats people in a hospital',
                'His leaves, bark, and seeds have powerful medicinal properties',
                'He prescribes synthetic tablets',
                'He sells medicines in the bazaar'
              ],
              correctIndex: 1,
              explanation: 'Neem is known as a natural pharmacy because its leaves, twigs, bark, and oil possess antimicrobial and healing properties.'
            }
          ]
        },
        {
          id: 'c6-eng-ch8',
          chapterNumber: 8,
          title: 'Unit 4 • Ch 8: Change of Heart / The Way to Success',
          nepHighlights: 'Sportsmanship, overcoming failure, physical fitness, and determination.',
          summaryTextbook: 'Inspiring journey of self-improvement and sportsmanship on the playing field.',
          officialBookCode: 'fepr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fepr108.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-eng-ch9',
          chapterNumber: 9,
          title: 'Unit 5 • Ch 9: That’s What Friends Are For',
          nepHighlights: 'Empathy, loyalty, companionship in animal and human worlds.',
          summaryTextbook: 'Celebrating true friends who stand together during hardships.',
          officialBookCode: 'fepr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fepr109.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-eng-ch10',
          chapterNumber: 10,
          title: 'Unit 5 • Ch 10: The Unlikely Best Friends',
          nepHighlights: 'Inter-species bonds, harmony in animal kingdoms, and breaking prejudices.',
          summaryTextbook: 'An unusual friendship that warms hearts and illustrates affection beyond differences.',
          officialBookCode: 'fepr1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fepr110.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },
    {
      id: 'c6-hindi',
      name: 'Hindi (मल्हार - Malhar)',
      iconName: 'BookOpen',
      color: '#ec4899',
      description: 'New NCERT 2026–27 Textbook Malhar: Deshprem, Bal Sahitya, Dohe, Kahaniyan & Bhasha Bodh.',
      totalChapters: 13,
      coverImageUrl: '/book-covers/class7-hindi-malhar.png',
      chapters: [
        {
          id: 'c6-hin-ch1',
          chapterNumber: 1,
          title: 'मातृभूमि (कविता)',
          nepHighlights: 'देशभक्ति, प्राकृतिक सौंदर्य और भारत भूमि के प्रति कृतज्ञता की प्रेरक कविता।',
          summaryTextbook: 'सोहनलाल द्विवेदी द्वारा रचित कविता में भारत माता के हिमालयी मुकुट, सागर के चरणों और पावन नदियों का वंदन है।',
          officialBookCode: 'fhml1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhml101.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-hin-ch2',
          chapterNumber: 2,
          title: 'गोल (कहानी)',
          nepHighlights: 'हॉकी के जादूगर मेजर ध्यानचंद के जीवन से खेल भावना, लगन और एकाग्रता की सीख।',
          summaryTextbook: 'मेजर ध्यानचंद द्वारा लिखित संस्मरण, जिसमें उन्होंने अपने पहले अंतरराष्ट्रीय मैच और अनुशासन की महत्ता बताई है।',
          officialBookCode: 'fhml1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhml102.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-hin-ch3',
          chapterNumber: 3,
          title: 'पहली बूँद (कविता)',
          nepHighlights: 'वर्षा ऋतु के आगमन पर सूखी धरती के उल्लास और नवजीवन का सुंदर काव्यात्मक वर्णन।',
          summaryTextbook: 'ग्रीष्म की तपन के बाद आकाश से गिरी पहली बूँद से प्रकृति में छाई हरियाली और नवस्फूर्ति का चित्रण।',
          officialBookCode: 'fhml1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhml103.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-hin-ch4',
          chapterNumber: 4,
          title: 'हार की जीत (सुदर्शन)',
          nepHighlights: 'बाबा भारती और डाकू खड़गसिंह का अमर प्रसंग: करुणा और सत्य से हृदय परिवर्तन।',
          summaryTextbook: 'बाबा भारती का घोड़ा सुल्तान डाकू खड़गसिंह छल से छीन लेता है, किंतु बाबा भारती की यह बात कि "इस घटना का किसी से जिक्र मत करना ताकि कोई गरीब पर विश्वास करना न छोड़े", डाकू का हृदय बदल देती है।',
          officialBookCode: 'fhml1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhml104.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-hin-ch5',
          chapterNumber: 5,
          title: 'रहीम के दोहे',
          nepHighlights: 'सदाचार, मधुर वाणी, संगति और जीवन मूल्यों की व्यावहारिक नीति शिक्षा।',
          summaryTextbook: 'कविवर रहीम के कालजयी नीतिपरक दोहे, जैसे "रहिमन देखि बड़ेन को, लघु न दीजिए डारि"।',
          officialBookCode: 'fhml1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhml105.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-hin-ch6',
          chapterNumber: 6,
          title: 'मेरी माँ (रामप्रसाद बिस्मिल)',
          nepHighlights: 'क्रांतिकारी रामप्रसाद बिस्मिल का अपनी माँ के प्रति असीम आदर और देशसेवा का संकल्प।',
          summaryTextbook: 'अमर शहीद बिस्मिल ने अपनी माँ के अगाध धैर्य, त्याग और राष्ट्रप्रेम की प्रेरणा का भावुक वर्णन किया है।',
          officialBookCode: 'fhml1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhml106.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-hin-ch7',
          chapterNumber: 7,
          title: 'बया हमारी चिड़िया रानी',
          nepHighlights: 'प्रकृति प्रेम, पक्षी संरक्षण और पर्यावरण के साथ मानवीय संवेदना का मधुर गीत।',
          summaryTextbook: 'महादेवी वर्मा द्वारा रचित बाल कविता में बया चिड़िया के घोंसले और उसकी सुरक्षा का सुंदर चित्रण है।',
          officialBookCode: 'fhml1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhml107.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-hin-ch8',
          chapterNumber: 8,
          title: 'अनूठा बदला',
          nepHighlights: 'बुद्धिमत्ता, क्षमा और अहिंसा के मार्ग से शत्रुता का समाधान।',
          summaryTextbook: 'रोचक लोककथा जिसमें हिंसा के स्थान पर सूझबूझ और प्रेम से बैरभाव समाप्त किया गया।',
          officialBookCode: 'fhml1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhml108.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-hin-ch9',
          chapterNumber: 9,
          title: 'सावन (कविता)',
          nepHighlights: 'सावन मास की रिमझिम फुहारें, झूले और ग्रामीण भारत के लोक उत्सव।',
          summaryTextbook: 'सावन मास में प्रकृति के सौंदर्य और जन-जीवन के उल्लास का मनोहारी दृश्य।',
          officialBookCode: 'fhml1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhml109.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-hin-ch10',
          chapterNumber: 10,
          title: 'बचपन (कृष्णा सोबती)',
          nepHighlights: 'बदलते युग, वेशभूषा, भोजन और बचपन की मीठी यादों का आत्मीय संस्मरण।',
          summaryTextbook: 'लेखिका कृष्णा सोबती अपने बचपन की शिमला की सैर, ग्रामोफोन, चॉकलेट और चश्मे लगने के अनुभव साझा करती हैं।',
          officialBookCode: 'fhml1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhml110.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-hin-ch11',
          chapterNumber: 11,
          title: 'वो सुबह कभी तो आएगी',
          nepHighlights: 'आशावादिता, समतावादी समाज की कल्पना और मानवीय गरिमा का गीत।',
          summaryTextbook: 'साहिर लुधियानवी का आशा से परिपूर्ण अमर गीत जो भेदभाव मुक्त उज्ज्वल भविष्य की प्रेरणा देता है।',
          officialBookCode: 'fhml1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhml111.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-hin-ch12',
          chapterNumber: 12,
          title: 'संसार पुस्तक है (जवाहरलाल नेहरू)',
          nepHighlights: 'प्रकृति की चट्टानों, पत्थरों और नदियों से पृथ्वी का इतिहास पढ़ने की वैज्ञानिक दृष्टि।',
          summaryTextbook: 'पंडित नेहरू द्वारा अपनी पुत्री इंदिरा को लिखे गए पत्र, जिसमें वे समझाते हैं कि प्रकृति के छोटे-छोटे रोड़े भी धरती की कहानी बताते हैं।',
          officialBookCode: 'fhml1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhml112.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c6-hin-ch13',
          chapterNumber: 13,
          title: 'तिब्बत की लोककथा',
          nepHighlights: 'तिब्बत के भूगोल, जनजीवन, वेशभूषा और लोकविश्वासों से साक्षात्कार।',
          summaryTextbook: 'रोचक तिब्बती लोककथा जो दूरस्थ पर्वतीय संस्कृति और परंपराओं का परिचय देती है।',
          officialBookCode: 'fhml1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/fhml113.pdf',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    }
  ]
};
