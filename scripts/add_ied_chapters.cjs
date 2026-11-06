const fs = require('fs');

const targetPath = 'src/data/ncertData.ts';
let content = fs.readFileSync(targetPath, 'utf8');

const targetAnchor = "id: 'c11-stats-ch4',";
if (!content.includes(targetAnchor)) {
  console.error('Target anchor not found!');
  process.exit(1);
}

const closingTag = "quiz: []\r\n          }\r\n        ]\r\n      },\r\n\r\n      {\r\n        id: 'c11-history',";
const closingTagLF = "quiz: []\n          }\n        ]\n      },\n\n      {\n        id: 'c11-history',";

const iedChapters = `            quiz: []
          },
          {
            id: 'c11-ied-ch1',
            chapterNumber: 1,
            title: 'Indian Economy on the Eve of Independence',
            nepHighlights: 'Agricultural stagnation, Zamindari revenue system, Commercialisation of agriculture, Decline of indigenous handicrafts, Drain of wealth, Demographic transition (1921), Occupational structure & Railways (1850).',
            summaryTextbook: 'Chapter 1 examines the state of the Indian economy prior to 1947 under British colonial rule: (1) Low economic growth with per capita growth <0.5%, (2) Agricultural stagnation under Zamindari revenue system and forced commercialisation (indigo), (3) De-industrialisation destroying world-famous handloom handicrafts and turning India into raw material exporter and finished goods importer, (4) Foreign trade monopoly with Britain draining wealth, (5) Demographic indicators: Infant mortality of 218 per 1000, literacy rate <16% (female 7%), and 1921 Year of the Great Divide, (6) Occupational structure with 70-75% in agriculture, (7) Infrastructure: Introduction of railways in 1850 broke geographical barriers but fostered colonial commercial exploitation.',
            officialPdfUrl: '/pdf/Class 11/11th Indian Economic Dev Micoroeconomics/keec101.pdf',
            officialBookCode: 'keec1',
            exerciseSolutions: [
              {
                id: 'c11-ied-ch1-q1',
                questionNo: 'Exercise 1 Q1',
                questionText: 'What was the focus of the economic policies pursued by the colonial government in India? What were the impacts of these policies?',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: 'Colonial economic administration objectives and domestic repercussions.',
                stepByStepSolution: [
                  'Step 1: The primary focus was the protection and promotion of the economic interests of Great Britain, rather than the development of the Indian economy.',
                  'Step 2: Impact 1 - Transformation of India into a mere supplier of raw materials (cotton, jute, indigo) for expanding modern industries in Britain.',
                  'Step 3: Impact 2 - Transformation of India into a captive consumer market for finished industrial goods manufactured in Britain.',
                  'Step 4: Impact 3 - Complete destruction of traditional handicraft and artisan sectors without replacing them with modern domestic manufacturing.'
                ],
                finalAnswer: 'Colonial economic policies subordinated India’s domestic economy to British imperial interests, causing de-industrialisation, chronic poverty, and rural stagnation.',
                keyTakeaway: 'Colonial policies engineered India as an exporter of raw materials and importer of British finished manufactured goods.',
                nepCompetencyNote: 'Structural analysis of colonial exploitation and trade policy.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-ied-ch2',
            chapterNumber: 2,
            title: 'Indian Economy (1950–1990)',
            nepHighlights: 'Planning Commission (1950), Five Year Plans goals (Growth, Modernisation, Self-reliance, Equity), Land Reforms, Green Revolution, IPR 1956 & Import Substitution.',
            summaryTextbook: 'Chapter 2 examines economic planning from 1950 to 1990: (1) Mixed economy chosen combining socialist welfare with capitalist initiative, (2) Planning Commission established in 1950 with PM Jawaharlal Nehru and PC Mahalanobis architect, (3) 4 core goals: Growth (GDP expansion), Modernisation (technology adoption & social equality for women), Self-reliance (avoiding foreign dependence), and Equity (reducing disparities), (4) Land reforms: Abolition of intermediaries (freeing 200 lakh tenants) and land ceiling legislation, (5) Green Revolution: Introduction of HYV seeds, fertilizers and irrigation achieving food security and marketable surplus, (6) Industrial Policy Resolution 1956: 3 categories (Schedule A State monopoly, Schedule B State-led mixed, Schedule C Private with licensing), (7) Karve Committee (1955) and SSI protection, (8) Trade policy: Import substitution using tariffs and quotas.',
            officialPdfUrl: '/pdf/Class 11/11th Indian Economic Dev Micoroeconomics/keec102.pdf',
            officialBookCode: 'keec1',
            exerciseSolutions: [
              {
                id: 'c11-ied-ch2-q1',
                questionNo: 'Exercise 2 Q1',
                questionText: 'Define a Plan. Why did India opt for economic planning after independence?',
                difficulty: 'Easy',
                type: 'Exercise',
                givenData: 'Concept of national economic planning and post-independence development imperatives.',
                stepByStepSolution: [
                  'Step 1: A plan spells out how the resources of a nation should be allocated to achieve specified general goals as well as specific sector-wise targets over a specified period (typically five years).',
                  'Step 2: India opted for planning because colonial rule had left behind extreme poverty, stagnation, and lack of capital in the private sector.',
                  'Step 3: State-directed comprehensive planning was essential to mobilize domestic savings, build heavy infrastructure (steel, dams, power), and guarantee equitable distribution.'
                ],
                finalAnswer: 'A plan is a resource allocation roadmap over a fixed period. India chose planning to overcome colonial backwardness, build heavy industries, and ensure growth with social justice.',
                keyTakeaway: 'Economic planning mobilized limited national resources towards priority infrastructure and social equity under Five Year Plans.',
                nepCompetencyNote: 'Understanding macro-economic resource mobilization and planned development.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },

      {
        id: 'c11-history',`;

if (content.includes(closingTag)) {
  content = content.replace(closingTag, iedChapters.replace(/\n/g, '\r\n'));
  fs.writeFileSync(targetPath, content, 'utf8');
  console.log('Successfully inserted IED chapters with CRLF!');
} else if (content.includes(closingTagLF)) {
  content = content.replace(closingTagLF, iedChapters);
  fs.writeFileSync(targetPath, content, 'utf8');
  console.log('Successfully inserted IED chapters with LF!');
} else {
  console.error('Could not find closing tag!');
}
