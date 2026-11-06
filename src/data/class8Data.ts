import type { ClassStageInfo } from './ncertData';

export const CLASS_8_DATA: ClassStageInfo = {
  classNumber: 8,
  stageName: 'Middle',
  ageGroup: '13-14 Years',
  nepFocus: 'Experiential Learning, Critical Enquiry, Integrated Social Sciences & Discovery-based Mathematics',
  subjects: [
    {
      id: 'c8-social-science',
      name: 'Social Science (Exploring Society: India and Beyond)',
      iconName: 'Compass',
      color: '#06b6d4',
      description: 'New NCERT Middle Stage Integrated Social Science — Exploring Society, Historical Roots, Living Resources & Democratic Governance.',
      totalChapters: 12,
      chapters: [
        {
          id: 'c8-soc-ch1',
          chapterNumber: 1,
          title: 'Exploring Society: Foundations of History, Living Resources & Society (समाज का अन्वेषण)',
          nepHighlights: 'Understanding Time & Periodisation, Critique of Colonial Historiography (James Mill), National Archives & Survey Systems, Natural & Sustainable Resources.',
          summaryTextbook: 'Chapter 1 of Exploring Society introduces the foundational methods through which we investigate human society across time and space. (1) How, When and Where: Historical enquiry is not merely memorizing dates of kings and coronations, but discovering how societies evolved, how common people produced food, established markets, traded goods, and organized communities. (2) Critique of Colonial Periodisation: In 1817, Scottish philosopher James Mill published "A History of British India", dividing Indian history on religious lines into Hindu, Muslim, and British periods. Modern historians reject this communal division because diverse faiths and philosophical schools coexisted in every era, and labeling a whole civilization by the religion of its ruling monarch ignores the lives and cultures of millions. (3) Historical Sources & Archives: The British believed that the act of writing was crucial. Specialized archives (e.g., National Archives of India in New Delhi) and Record Rooms in Collectorates and secretariats preserved minutes, correspondence, and treaties. (4) Colonial Surveys: Topographical, revenue, botanical, zoological, anthropological, and decennial Census operations created comprehensive administrative databases. (5) Unofficial Records: The voices of peasants, tribal communities, miners, and daily workers survive through folk songs, regional literature, and personal autobiographies. (6) Living Resources in Society: Classification of resources (Natural, Human-Made, Human Capital), resource conservation, and the 5 principles of Sustainable Development (SDGs).',
          officialBookCode: 'hess1',
          googleDriveFileId: '1CnGQZwM0BW9FacI0WnbWfq0VffMcnts4',
          exerciseSolutions: [
            {
              id: 'c8-soc-ch1-q1',
              questionNo: 'NCERT Textbook Q1',
              questionText: 'What is the problem with the periodisation of Indian history that James Mill offers?',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'James Mill divided Indian history into Hindu, Muslim, and British periods in his 1817 work "A History of British India".',
              stepByStepSolution: [
                '1. Religious Bias: Mill characterized entire historical epochs based solely on the religion of the dominant rulers, which is deeply misleading because multiple religious traditions (Buddhism, Jainism, Sufism, Bhakti, tribal beliefs) coexisted harmoniously across the subcontinent.',
                '2. Neglect of Socio-Economic Realities: Labeling an era as "Hindu" or "Muslim" suggests that the beliefs and practices of ordinary peasants, artisans, and merchants did not matter.',
                '3. Colonial Superiority Complex: Mill portrayed pre-British India as stagnant, superstitious, and barbaric, claiming only British rule could bring enlightenment and civilization — an assumption firmly rejected by evidence-based modern historiography.'
              ],
              finalAnswer: 'Mill’s division was communal, eurocentric, and ignored the diverse, syncretic cultural and socio-economic life of Indian people.',
              keyTakeaway: 'Modern historians divide Indian history into Ancient, Medieval, and Modern / Colonial periods based on broad socio-economic and technological transformations.',
              nepCompetencyNote: 'Develops critical evaluation skills against communal biases in historical sources.'
            },
            {
              id: 'c8-soc-ch1-q2',
              questionNo: 'NCERT Textbook Q2',
              questionText: 'Why did the British preserve official documents and establish record rooms across India?',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'British administrative machinery and documentation practices in colonial India',
              stepByStepSolution: [
                '1. Governance through Written Records: The British believed every instruction, plan, policy decision, agreement, and investigation had to be clearly written down and documented.',
                '2. Institutional Memory: Preserved documents allowed administrators to study past decisions, analyze policy precedents, and debate administrative actions with institutional continuity.',
                '3. Specialized Repositories: Record rooms were attached to every administrative institution (Collectorate, Commissioner’s office, Secretariat, Law Courts), while the National Archives of India and National Museum preserved critical national documents.'
              ],
              finalAnswer: 'To ensure administrative clarity, policy continuity, legal reference, and effective governance across the vast empire.',
              keyTakeaway: 'The British created a comprehensive archival network to maintain continuous bureaucratic surveillance and control.',
              nepCompetencyNote: 'Understanding primary documentary sources and the architecture of administrative archives.'
            },
            {
              id: 'c8-soc-ch1-q3',
              questionNo: 'NCERT Textbook Q3',
              questionText: 'How will the information historians get from old newspapers be different from that found in police reports?',
              difficulty: 'Hard',
              type: 'Exercise',
              givenData: 'Comparative study of official government police reports vs unofficial vernacular press newspapers',
              stepByStepSolution: [
                '1. Perspective and Bias: Police reports were official government documents created to maintain colonial order; they reflected what officials wanted to believe, highlighting state control and downplaying public grievances.',
                '2. Public Voice & Lived Experience: Newspapers were written by journalists, freedom fighters, and social reformers; they reported public sentiment, farmer hardships, high taxation, famine distress, and strikes.',
                '3. Balanced Historiography: Historians cannot rely on police records alone because they silence the subaltern voice. Newspapers provide the counter-narrative of common citizens.'
              ],
              finalAnswer: 'Police reports represent the colonial state’s perspective on law and order, while newspapers capture public dissent, popular emotions, economic distress, and nationalist aspirations.',
              keyTakeaway: 'A complete historical analysis requires cross-referencing state administrative files with independent public media.',
              nepCompetencyNote: 'Distinguishes between official state records and independent civil society sources.'
            },
            {
              id: 'c8-soc-ch1-q4',
              questionNo: 'NCERT Textbook Q4 (Geography & Resources)',
              questionText: 'Explain the concept of Sustainable Development and list three key principles to achieve it in our society.',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'Resource utilization and intergenerational environmental stewardship',
              stepByStepSolution: [
                '1. Definition: Sustainable Development means carefully utilizing resources so that besides meeting the requirements of the present generation, we also conserve and replenish resources for future generations.',
                '2. Principle 1 - Respect and Care for all forms of life (Biodiversity conservation).',
                '3. Principle 2 - Minimize the depletion of non-renewable natural resources by transitioning to renewable energy (solar, wind, hydroelectric).',
                '4. Principle 3 - Reduce, Reuse, Recycle (3Rs) and change personal attitudes and practices toward the environment.'
              ],
              finalAnswer: 'Sustainable development balances current resource needs with ecological conservation for future generations through renewable adoption, waste minimization, and biodiversity protection.',
              keyTakeaway: 'Resource conservation ensures that economic development does not exceed the ecological carrying capacity of Earth.',
              nepCompetencyNote: 'Fosters global citizenship and environmental responsibility aligned with UN SDG 12.'
            }
          ],
          competencyQuestions: [
            {
              id: 'c8-soc-ch1-c1',
              questionNo: 'CBSE Competency Check 1',
              questionText: 'Assertion (A): The British conducted extensive botanical, zoological, and topographical surveys across India in the 19th century.\nReason (R): They believed that a country had to be properly known and mapped before it could be effectively administered and exploited.',
              difficulty: 'Hard',
              type: 'Competency',
              stepByStepSolution: [
                '1. Assess Assertion (A): By the early 19th century, detailed revenue and topographical surveys were conducted in villages to map topography, soil quality, flora, and fauna. Thus, Assertion (A) is True.',
                '2. Assess Reason (R): British colonial administration operated on the doctrine that thorough mapping and survey data were necessary to organize taxation, trade, and strategic control. Thus, Reason (R) is True and directly explains (A).'
              ],
              finalAnswer: 'Both Assertion (A) and Reason (R) are true, and (R) is the correct explanation of (A).',
              keyTakeaway: 'Colonial surveys were designed to map natural and social landscapes for strategic imperial control and revenue optimization.',
              nepCompetencyNote: 'Tests historical reasoning, cause-effect relationships, and analysis of colonial administrative tools.'
            }
          ],
          quiz: [
            {
              id: 'c8-soc-ch1-q1',
              question: 'Who published the three-volume work "A History of British India" in 1817, dividing Indian history into Hindu, Muslim, and British periods?',
              options: ['James Mill', 'Lord Macaulay', 'Warren Hastings', 'James Rennel'],
              correctIndex: 0,
              explanation: 'James Mill, a Scottish economist and political philosopher, published "A History of British India" in 1817.'
            },
            {
              id: 'c8-soc-ch1-q2',
              question: 'Which of the following is considered a primary official repository for preserved colonial government documents and maps in New Delhi?',
              options: ['National Archives of India', 'Asiatic Society Library', 'Victoria Memorial Hall', 'British Council Library'],
              correctIndex: 0,
              explanation: 'The National Archives of India (NAI) in New Delhi preserves millions of official state documents, maps, and administrative proceedings.'
            },
            {
              id: 'c8-soc-ch1-q3',
              question: 'Resources that get renewed or replenished quickly by natural biogeochemical cycles (e.g., solar and wind energy) are called:',
              options: ['Renewable Resources', 'Non-Renewable Resources', 'Ubiquitous Mineral Reserves', 'Abiotic Fossil Fuels'],
              correctIndex: 0,
              explanation: 'Renewable resources are naturally replenished over short cycles and are inexhaustible under sustainable management.'
            }
          ]
        },
        {
          id: 'c8-soc-ch2',
          chapterNumber: 2,
          title: 'From Trade to Territory: The Company Establishes Power',
          nepHighlights: 'East India Company trade monopoly, Battle of Plassey (1757), Battle of Buxar (1764), Doctrine of Lapse & Subsidiary Alliance.',
          summaryTextbook: 'Examines how a commercial trading enterprise (English East India Company) transformed into an imperial political sovereign ruling across the Indian subcontinent.',
          officialBookCode: 'hess1',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c8-soc-ch3',
          chapterNumber: 3,
          title: 'Ruling the Countryside & Resource Systems',
          nepHighlights: 'Permanent Settlement 1793, Ryotwari System (Munro), Mahalwari System (Holt Mackenzie), Indigo Rebellion.',
          summaryTextbook: 'Land revenue extraction mechanisms, cash-crop cultivation (opium and indigo), and resistance of rural cultivators.',
          officialBookCode: 'hess1',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },
    {
      id: 'c8-maths',
      name: 'Mathematics (Ganita)',
      iconName: 'Sparkles',
      color: '#2563eb',
      description: 'NCERT Class 8 Mathematics — Rational Numbers, Linear Equations, Understanding Quadrilaterals, Data Handling & Mensuration.',
      totalChapters: 12,
      chapters: [
        {
          id: 'c8-m-ch1',
          chapterNumber: 1,
          title: 'Rational Numbers (परिमेय संख्याएँ)',
          nepHighlights: 'Closure, Commutative & Associative properties, Distributive law, Additive/Multiplicative inverse, Density property.',
          summaryTextbook: 'Introduces rational numbers in form p/q (q≠0), arithmetic properties on the number line, and finding multiple rational numbers between any two numbers.',
          officialBookCode: 'hemh1',
          exerciseSolutions: [
            {
              id: 'c8-m-ch1-q1',
              questionNo: 'Exercise 1.1 Q1',
              questionText: 'Find 5 rational numbers between 3/5 and 4/5.',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Two rational numbers: 3/5 and 4/5',
              formula: 'Multiply numerator and denominator by (n + 1) = 6',
              stepByStepSolution: [
                'Step 1: For n = 5 numbers, multiply top and bottom by 6.',
                'Step 2: 3/5 = (3 × 6)/(5 × 6) = 18/30.',
                'Step 3: 4/5 = (4 × 6)/(5 × 6) = 24/30.',
                'Step 4: Five numbers between 18/30 and 24/30 are 19/30, 20/30, 21/30, 22/30, 23/30.'
              ],
              finalAnswer: '19/30, 20/30 (2/3), 21/30 (7/10), 22/30 (11/15), 23/30',
              keyTakeaway: 'Between any two rational numbers, there are infinitely many rational numbers (Density Property).',
              nepCompetencyNote: 'Density of rational numbers builds foundations for real analysis.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c8-m-ch2',
          chapterNumber: 2,
          title: 'Linear Equations in One Variable (एक चर वाले रैखिक समीकरण)',
          nepHighlights: 'Solving linear equations with variables on one and both sides, cross-multiplication, and word problems on age/geometry.',
          summaryTextbook: 'Linear equations with degree 1, transposing method, and formulating algebraic models from real-world situations.',
          officialBookCode: 'hemh1',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c8-m-ch3',
          chapterNumber: 3,
          title: 'Understanding Quadrilaterals (चतुर्भुजों को समझना)',
          nepHighlights: 'Angle sum property of convex polygons, types of quadrilaterals (Parallelogram, Rhombus, Rectangle, Square, Trapezium).',
          summaryTextbook: 'Polygon interior and exterior angles (Sum of exterior angles = 360°), properties of diagonals in parallelograms.',
          officialBookCode: 'hemh1',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c8-m-ch4',
          chapterNumber: 4,
          title: 'Data Handling (आँकड़ों का प्रबंधन)',
          nepHighlights: 'Organising data, grouped frequency distribution, Histogram, Pie Chart (Circle Graph), and Probability of random events.',
          summaryTextbook: 'Constructing frequency distribution tables, calculating central angles for pie charts, and analyzing probability.',
          officialBookCode: 'hemh1',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },
    {
      id: 'c8-science',
      name: 'Science (Vigyan)',
      iconName: 'Atom',
      color: '#10b981',
      description: 'NCERT Class 8 Science — Crop Production, Microorganisms, Coal & Petroleum, Combustion, Cell Structure & Forces.',
      totalChapters: 13,
      chapters: [
        {
          id: 'c8-sci-ch1',
          chapterNumber: 1,
          title: 'Crop Production and Management (फसल उत्पादन एवं प्रबंध)',
          nepHighlights: 'Agricultural practices: Soil preparation, Sowing, Manures vs Fertilizers, Irrigation (Drip & Sprinkler), Harvesting & Storage.',
          summaryTextbook: 'Comprehensive study of Kharif (monsoon) vs Rabi (winter) crops, step-by-step agricultural operations, nitrogen fixation by Rhizobium, and modern water-saving irrigation.',
          officialBookCode: 'hesc1',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c8-sci-ch2',
          chapterNumber: 2,
          title: 'Microorganisms: Friend and Foe (सूक्ष्मजीव: मित्र एवं शत्रु)',
          nepHighlights: 'Bacteria, Fungi, Protozoa, Algae, Viruses. Commercial uses (Fermentation, Antibiotics, Vaccines), Pathogens & Food Preservation.',
          summaryTextbook: 'Discovery of microbes, role of yeast in baking and alcohol production, Louis Pasteur (Pasteurisation), Alexander Fleming (Penicillin), and nitrogen cycle.',
          officialBookCode: 'hesc1',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c8-sci-ch3',
          chapterNumber: 3,
          title: 'Coal and Petroleum (कोयला और पेट्रोलियम)',
          nepHighlights: 'Fossil fuel formation (Carbonisation), Fractional distillation of Petroleum, Products of Coal (Coke, Coal Tar, Coal Gas), Conservation.',
          summaryTextbook: 'Non-renewable energy resources, petrochemicals, and conservation guidelines formulated by PCRA (Petroleum Conservation Research Association).',
          officialBookCode: 'hesc1',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },
    {
      id: 'c8-english',
      name: 'English (Honeydew & It So Happened)',
      iconName: 'BookOpen',
      color: '#a855f7',
      description: 'NCERT Class 8 English — Prose, Poetry & Supplementary Reader with grammar and literary devices.',
      totalChapters: 8,
      chapters: [
        {
          id: 'c8-eng-ch1',
          chapterNumber: 1,
          title: 'The Best Christmas Present in the World & The Ant and the Cricket',
          nepHighlights: 'World War I Christmas Truce 1914 narrative, human compassion, moral fable on hard work and foresight.',
          summaryTextbook: 'Story of Jim Macpherson’s poignant letter found in a roll-top desk recounting the moving Christmas Day ceasefire on the Western Front.',
          officialBookCode: 'hehd1',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },
    {
      id: 'c8-hindi',
      name: 'Hindi (Vasant & Bharat Ki Khoj)',
      iconName: 'BookOpenText',
      color: '#f59e0b',
      description: 'NCERT Class 8 Hindi — वसंत भाग-३ एवं भारत की खोज (जवाहरलाल नेहरू).',
      totalChapters: 9,
      chapters: [
        {
          id: 'c8-hin-ch1',
          chapterNumber: 1,
          title: 'लाख की चूड़ियाँ (कामतानाथ)',
          nepHighlights: 'हस्तशिल्प और बदलती ग्रामीण अर्थव्यवस्था, मशीनीकरण के कारण पारंपरिक कारीगरों (बदलू) का संघर्ष।',
          summaryTextbook: 'कामतानाथ जी द्वारा लिखित कहानी जिसमें कांच की चूड़ियों के आगमन से बदलू मनिहार के पारंपरिक लाख की चूड़ी उद्योग पर पड़े प्रभाव का संवेदनशील चित्रण है।',
          officialBookCode: 'hevs1',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },
    {
      id: 'c8-maths',
      name: 'Mathematics (Ganita Prakash / गणित प्रकाश - Grade 8)',
      iconName: 'Calculator',
      color: '#10b981',
      description: 'New NCERT 2026-27 Mathematics — Power Play (Exponents & Powers), Square Roots, Cubes, Algebraic Identities & Geometry.',
      totalChapters: 8,
      chapters: [
        {
          id: 'c8-math-ch2',
          chapterNumber: 2,
          title: 'Unit 2: Power Play — Powers & Exponents (घात और घातांक)',
          officialBookCode: 'hegp1',
          officialPdfUrl: '/pdf/Class 08/8th Ganita Prakash p1/Ganita Prakash-8th p1/hegp1dd/hegp102.pdf',
          nepHighlights: 'Paper folding exponential growth, laws of integral exponents, scientific notation, and astronomical vs microscopic comparisons.',
          summaryTextbook: 'Chapter 2 explores exponential notation through paper folding, discovery of laws of exponents, negative exponents, zero power, and standard scientific form for astronomical and microscopic dimensions.',
          exerciseSolutions: [
            {
              id: 'c8-m-ch2-q1',
              questionNo: '3-Mark Test Q1',
              questionText: 'Evaluate the expression: (1/3)⁻² + (1/4)⁻² + (1/5)⁻².',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: (1/3)⁻² = 3² = 9.',
                'Step 2: (1/4)⁻² = 4² = 16.',
                'Step 3: (1/5)⁻² = 5² = 25.',
                'Step 4: Sum = 9 + 16 + 25 = 50.'
              ],
              finalAnswer: '50',
              keyTakeaway: 'Negative power of a fraction inverts the numerator and denominator.'
            },
            {
              id: 'c8-m-ch2-q2',
              questionNo: '3-Mark Test Q2',
              questionText: 'Find the value of m for which 5ᵐ ÷ 5⁻³ = 5⁵.',
              difficulty: 'Medium',
              type: 'Exercise',
              stepByStepSolution: [
                'Step 1: LHS = 5ᵐ ÷ 5⁻³ = 5ᵐ ⁻ ⁽⁻³⁾ = 5ᵐ ⁺ ³.',
                'Step 2: Equate LHS with RHS: 5ᵐ ⁺ ³ = 5⁵.',
                'Step 3: m + 3 = 5 ⟹ m = 2.'
              ],
              finalAnswer: 'm = 2',
              keyTakeaway: 'In exponent division, subtract the power of the divisor from the dividend.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        }
      ]
    }
  ]
};
