import { CLASS_1_DATA } from './class1Data';
import { CLASS_2_DATA } from './class2Data';
import { CLASS_3_DATA } from './class3Data';
import { CLASS_4_DATA } from './class4Data';
import { CLASS_5_DATA } from './class5Data';
import { CLASS_6_DATA } from './class6Data';
import { CLASS_7_DATA } from './class7Data';
import { CLASS_8_DATA } from './class8Data';
import { CLASS_9_DATA } from './class9Data';

export interface QuestionSolution {
  id: string;
  questionNo: string;
  questionText: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  type: 'Exercise' | 'Exemplar' | 'Competency';
  givenData?: string;
  formula?: string;
  stepByStepSolution: string[];
  finalAnswer: string;
  keyTakeaway: string;
  nepCompetencyNote?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Chapter {
  id: string;
  chapterNumber: number;
  title: string;
  nepHighlights: string;
  summaryTextbook: string;
  officialPdfUrl?: string;
  googleDriveFileId?: string;
  googleDriveUrl?: string;
  coverImageUrl?: string;
  officialBookCode?: string;
  exerciseSolutions: QuestionSolution[];
  competencyQuestions: QuestionSolution[];
  quiz: QuizQuestion[];
}

export interface Subject {
  id: string;
  name: string;
  iconName: string;
  color: string;
  description: string;
  totalChapters: number;
  coverImageUrl?: string;
  chapters: Chapter[];
}

export interface ClassStageInfo {
  classNumber: number;
  stageName: 'Foundational' | 'Preparatory' | 'Middle' | 'Secondary' | 'Senior Secondary';
  ageGroup: string;
  nepFocus: string;
  subjects: Subject[];
}

export const CLASSES_DATA: ClassStageInfo[] = [
  // Class 10 (Secondary Stage - Focus on Board Exams & CBQs)
  {
    classNumber: 10,
    stageName: 'Secondary',
    ageGroup: '15-16 Years',
    nepFocus: 'Critical Thinking, Conceptual Application, 50%+ Competency Questions',
    subjects: [
      {
        id: 'c10-maths',
        name: 'Mathematics',
        iconName: 'Calculator',
        color: '#4f46e5',
        description: 'Real Numbers, Polynomials, Quadratic Equations, Trigonometry & Geometry.',
        totalChapters: 14,
        coverImageUrl: '/book-covers/class10-maths.png',
        chapters: [
          {
            id: 'c10-m-ch1',
            chapterNumber: 1,
            title: 'Real Numbers',
            nepHighlights: 'Focus on Fundamental Theorem of Arithmetic & Irrationality proofs using proof by contradiction.',
            summaryTextbook: `Under the NEP 2020 rationalized syllabus, Chapter 1 covers the Fundamental Theorem of Arithmetic (every composite number can be expressed as a product of primes uniquely) and proofs of irrationality for numbers like √2, √3, √5. Euclid's Division Lemma has been rationalized to streamline focus on prime factorization applications.`,
            officialBookCode: 'jemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh101.pdf',
            exerciseSolutions: [
              {
                id: 'c10-m-ch1-q1',
                questionNo: 'Exercise 1.1 Q1',
                questionText: 'Express each number as a product of its prime factors: (i) 140 (ii) 156 (iii) 3825.',
                difficulty: 'Easy',
                type: 'Exercise',
                givenData: 'Numbers: 140, 156, 3825',
                formula: 'N = p₁ᵃ × p₂ᵇ × p₃ᶜ...',
                stepByStepSolution: [
                  'Step 1: Divide 140 by smallest prime number 2 -> 140 ÷ 2 = 70.',
                  'Step 2: Divide 70 by 2 -> 70 ÷ 2 = 35.',
                  'Step 3: Divide 35 by 5 -> 35 ÷ 5 = 7.',
                  'Step 4: 7 is prime -> 7 ÷ 7 = 1.',
                  'Step 5: Prime factors of 140 = 2 × 2 × 5 × 7 = 2² × 5 × 7.'
                ],
                finalAnswer: '140 = 2² × 5 × 7 | 156 = 2² × 3 × 13 | 3825 = 3² × 5² × 17',
                keyTakeaway: 'The prime factorization of any composite number is unique, except for the order of factors.',
                nepCompetencyNote: 'Essential for cryptography and digital security algorithms.'
              },
              {
                id: 'c10-m-ch1-q2',
                questionNo: 'Exercise 1.1 Q2',
                questionText: 'Find the LCM and HCF of 26 and 91 and verify that LCM × HCF = product of the two numbers.',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: 'Two numbers: a = 26, b = 91',
                formula: 'HCF(a, b) × LCM(a, b) = a × b',
                stepByStepSolution: [
                  'Step 1: Prime factorize 26 = 2 × 13.',
                  'Step 2: Prime factorize 91 = 7 × 13.',
                  'Step 3: HCF(26, 91) = Common factor with lowest exponent = 13.',
                  'Step 4: LCM(26, 91) = Product of greatest powers of all prime factors = 2 × 7 × 13 = 182.',
                  'Step 5: Verification -> HCF × LCM = 13 × 182 = 2366.',
                  'Step 6: Product of numbers = 26 × 91 = 2366. Hence Verified!'
                ],
                finalAnswer: 'HCF = 13, LCM = 182. Verification: 13 × 182 = 2366 = 26 × 91',
                keyTakeaway: 'The formula HCF × LCM = a × b holds true for ANY two positive integers.',
                nepCompetencyNote: 'Applied in gear teeth ratio synchronization and frequency alignment.'
              },
              {
                id: 'c10-m-ch1-q3',
                questionNo: 'Exercise 1.2 Q1',
                questionText: 'Prove that √5 is irrational.',
                difficulty: 'Hard',
                type: 'Competency',
                givenData: 'Assume √5 is rational, i.e., √5 = a/b where a and b are co-prime integers (b ≠ 0).',
                formula: 'Proof by Contradiction Method',
                stepByStepSolution: [
                  'Step 1: Squaring both sides -> 5 = a²/b²  =>  a² = 5b²  --- (Equation 1).',
                  'Step 2: Since 5 divides a², by Theorem 1.3, 5 must also divide a.',
                  'Step 3: Let a = 5c for some integer c.',
                  'Step 4: Substitute a = 5c in Equation 1 -> (5c)² = 5b²  =>  25c² = 5b²  =>  b² = 5c².',
                  'Step 5: This means 5 divides b², so 5 must also divide b.',
                  'Step 6: From Steps 2 and 5, 5 is a common factor of both a and b. This contradicts our assumption that a and b are co-prime!',
                  'Step 7: Therefore, √5 is irrational. Hence proved.'
                ],
                finalAnswer: '√5 is proven irrational by contradiction.',
                keyTakeaway: 'A rational number cannot equal an irrational square root.',
                nepCompetencyNote: 'Builds formal logical deduction and proof techniques needed for Computer Science logic.'
              }
            ],
            competencyQuestions: [
              {
                id: 'c10-m-ch1-cbq1',
                questionNo: 'NEP CBQ Case Study 1',
                questionText: 'A traffic signal engineer is setting 3 warning lights to flash at intervals of 12 seconds, 15 seconds, and 20 seconds respectively. If they all flash together at 8:00 AM, at what time will they next flash together?',
                difficulty: 'Medium',
                type: 'Competency',
                givenData: 'Intervals: t₁ = 12s, t₂ = 15s, t₃ = 20s. Initial time = 8:00 AM',
                formula: 'Next simultaneous event = LCM(t₁, t₂, t₃)',
                stepByStepSolution: [
                  'Step 1: 12 = 2² × 3',
                  'Step 2: 15 = 3 × 5',
                  'Step 3: 20 = 2² × 5',
                  'Step 4: LCM(12, 15, 20) = 2² × 3 × 5 = 4 × 3 × 5 = 60 seconds (1 minute).',
                  'Step 5: Add 1 minute to 8:00 AM -> 8:01 AM.'
                ],
                finalAnswer: 'The lights will next flash together at 8:01:00 AM.',
                keyTakeaway: 'Real-world periodic events repeating simultaneously require LCM calculation.',
                nepCompetencyNote: 'Direct application of real number prime factorization in urban signal engineering.'
              }
            ],
            quiz: [
              {
                id: 'q1',
                question: 'If HCF(306, 657) = 9, what is LCM(306, 657)?',
                options: ['22338', '22340', '12450', '30600'],
                correctIndex: 0,
                explanation: 'LCM = (306 × 657) / 9 = 201042 / 9 = 22338.'
              },
              {
                id: 'q2',
                question: 'Which of the following is an irrational number?',
                options: ['3.14', '22/7', '√7', '√16'],
                correctIndex: 2,
                explanation: '√7 cannot be expressed as p/q where p, q are integers because 7 is not a perfect square.'
              }
            ]
          },
          {
            id: 'c10-m-ch2',
            chapterNumber: 2,
            title: 'Polynomials',
            officialBookCode: 'jemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh102.pdf',
            nepHighlights: 'Relationship between zeroes and coefficients of quadratic polynomials.',
            summaryTextbook: 'Covers geometrical meaning of zeroes of a polynomial, degree of polynomials, and relations between roots α, β and coefficients of ax² + bx + c = 0.',
            exerciseSolutions: [
              {
                id: 'c10-m-ch2-q1',
                questionNo: 'Exercise 2.1 Q1',
                questionText: 'Find zeroes of quadratic polynomial x² - 2x - 8 and verify the relationship between zeroes and coefficients.',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: 'Polynomial: p(x) = x² - 2x - 8',
                formula: 'α + β = -b/a,  α × β = c/a',
                stepByStepSolution: [
                  'Step 1: Factorize x² - 4x + 2x - 8 = x(x - 4) + 2(x - 4) = (x - 4)(x + 2).',
                  'Step 2: Zeroes are α = 4 and β = -2.',
                  'Step 3: Sum of zeroes = α + β = 4 + (-2) = 2. Formula -b/a = -(-2)/1 = 2. (Verified)',
                  'Step 4: Product of zeroes = α × β = 4 × (-2) = -8. Formula c/a = -8/1 = -8. (Verified)'
                ],
                finalAnswer: 'Zeroes are 4 and -2. Relationships verified.',
                keyTakeaway: 'Zeroes are the x-intercepts of the polynomial graph.',
                nepCompetencyNote: 'Parabolic trajectories in sports and satellite dishes use polynomial zeroes.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-m-ch3',
            chapterNumber: 3,
            title: 'Pair of Linear Equations in Two Variables',
            officialBookCode: 'jemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh103.pdf',
            nepHighlights: 'Graphical method, Substitution & Elimination algebraic methods for a₁x + b₁y + c₁ = 0.',
            summaryTextbook: 'Covers consistency conditions (a₁/a₂ ≠ b₁/b₂ for unique solution; a₁/a₂ = b₁/b₂ = c₁/c₂ for infinitely many; a₁/a₂ = b₁/b₂ ≠ c₁/c₂ for no solution), and solving real-world word problems.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-m-ch4',
            chapterNumber: 4,
            title: 'Quadratic Equations',
            officialBookCode: 'jemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh104.pdf',
            nepHighlights: 'Quadratic Formula x = (-b ± √(b² - 4ac)) / 2a & Nature of Roots (Discriminant D = b² - 4ac).',
            summaryTextbook: 'Covers standard form ax² + bx + c = 0 (a ≠ 0), factorization by splitting middle term, quadratic formula, and discriminant test (D > 0: two distinct real roots, D = 0: two equal real roots, D < 0: no real roots).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-m-ch5',
            chapterNumber: 5,
            title: 'Arithmetic Progressions',
            officialBookCode: 'jemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh105.pdf',
            nepHighlights: 'nth Term an = a + (n - 1)d & Sum of First n Terms Sn = n/2 [2a + (n - 1)d].',
            summaryTextbook: 'Introduces arithmetic sequences, first term a, common difference d, finding general nth term, sum of first n positive integers Sn = n(n+1)/2, and daily life financial savings applications.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-m-ch6',
            chapterNumber: 6,
            title: 'Triangles',
            officialBookCode: 'jemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh106.pdf',
            nepHighlights: 'Basic Proportionality Theorem (Thales Theorem) & Similarity Criteria (AAA, SSS, SAS).',
            summaryTextbook: 'Covers proof of BPT (if a line is drawn parallel to one side of triangle intersecting other two sides, it divides them in the same ratio), converse of BPT, and similarity theorems with applications.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-m-ch7',
            chapterNumber: 7,
            title: 'Coordinate Geometry',
            officialBookCode: 'jemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh107.pdf',
            nepHighlights: 'Distance Formula d = √[(x₂ - x₁)² + (y₂ - y₁)²] & Section Formula P = ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n)).',
            summaryTextbook: 'Covers finding distance between two points, collinearity test, mid-point formula, and internal division of line segment in given ratio m:n.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-m-ch8',
            chapterNumber: 8,
            title: 'Introduction to Trigonometry',
            officialBookCode: 'jemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh108.pdf',
            nepHighlights: 'Trigonometric Ratios (sin, cos, tan, cosec, sec, cot) & Pythagorean Identity sin²θ + cos²θ = 1.',
            summaryTextbook: 'Examines right-angled triangle ratio definitions, trigonometric table values for 0°, 30°, 45°, 60°, 90°, and fundamental trigonometric identities 1 + tan²θ = sec²θ and 1 + cot²θ = cosec²θ.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-m-ch9',
            chapterNumber: 9,
            title: 'Some Applications of Trigonometry',
            officialBookCode: 'jemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh109.pdf',
            nepHighlights: 'Angle of Elevation, Angle of Depression & Heights and Distances.',
            summaryTextbook: 'Solves real-world height and distance problems involving towers, buildings, ships, and mountains using single and double right-triangle trigonometric models.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-m-ch10',
            chapterNumber: 10,
            title: 'Circles',
            officialBookCode: 'jemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh110.pdf',
            nepHighlights: 'Tangent at any point is perpendicular to radius & Tangents from external point are equal in length.',
            summaryTextbook: 'Proves that the tangent to a circle is perpendicular to the radius through the point of contact, and the lengths of tangents drawn from an external point to a circle are equal.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-m-ch11',
            chapterNumber: 11,
            title: 'Areas Related to Circles',
            officialBookCode: 'jemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh111.pdf',
            nepHighlights: 'Area of Sector (θ/360 × πr²), Length of Arc (θ/360 × 2πr) & Area of Segment.',
            summaryTextbook: 'Covers perimeter and area of circle, area of minor and major sectors of angle θ, and area of minor and major segments of a circle.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-m-ch12',
            chapterNumber: 12,
            title: 'Surface Areas and Volumes',
            officialBookCode: 'jemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh112.pdf',
            nepHighlights: 'Surface Areas & Volumes of Combinations of Solids (Cubes, Cuboids, Spheres, Hemispheres, Cylinders, Cones).',
            summaryTextbook: 'Examines finding total surface area and volume of combined composite solids formed by joining two or more basic three-dimensional shapes.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-m-ch13',
            chapterNumber: 13,
            title: 'Statistics',
            officialBookCode: 'jemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh113.pdf',
            nepHighlights: 'Mean of Grouped Data (Direct, Assumed Mean methods), Mode & Median.',
            summaryTextbook: 'Covers Mean x̄ = ∑fᵢxᵢ / ∑fᵢ, Assumed Mean method x̄ = a + ∑fᵢdᵢ / ∑fᵢ, Mode = l + [(f₁ - f₀)/(2f₁ - f₀ - f₂)] × h, and Median = l + [(n/2 - cf)/f] × h.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-m-ch14',
            chapterNumber: 14,
            title: 'Probability',
            officialBookCode: 'jemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh114.pdf',
            nepHighlights: 'Classical Probability P(E) = Number of outcomes favorable / Total number of outcomes & Complementary Events P(E) + P(not E) = 1.',
            summaryTextbook: 'Covers theoretical probability, elementary events, impossible events (P = 0), sure events (P = 1), coin tosses, dice rolls, and standard 52-card deck probability problems.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },
      {
        id: 'c10-science',
        name: 'Science',
        iconName: 'Atom',
        color: '#059669',
        description: 'Chemical Reactions, Acids Bases & Salts, Metals & Non-metals, Carbon Compounds, Life Processes, Control & Coordination, Reproduction, Heredity, Light, Eye, Electricity, Magnetic Effects & Environment.',
        totalChapters: 13,
        coverImageUrl: '/book-covers/class10-science.png',
        chapters: [
          {
            id: 'c10-s-ch1',
            chapterNumber: 1,
            title: 'Chemical Reactions and Equations',
            officialBookCode: 'jesc1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc101.pdf',
            nepHighlights: 'Balancing chemical equations using Law of Conservation of Mass, Redox reactions, Corrosion & Rancidity prevention.',
            summaryTextbook: 'Explains physical vs chemical changes, balancing chemical equations, types of chemical reactions (combination, decomposition, displacement, double displacement, precipitation, neutralization, oxidation and reduction), and real-life oxidation effects (corrosion of metals, rancidity of fats and oils).',
            exerciseSolutions: [
              {
                id: 'c10-s-ch1-q1',
                questionNo: 'Exercise 1.1 Q1',
                questionText: 'Why should a magnesium ribbon be cleaned before burning in air?',
                difficulty: 'Easy',
                type: 'Exercise',
                givenData: 'Magnesium ribbon exposed to atmospheric oxygen',
                formula: '2Mg + O₂ → 2MgO',
                stepByStepSolution: [
                  'Step 1: Magnesium is a reactive metal.',
                  'Step 2: When exposed to moist air, it forms a protective coating of basic Magnesium Oxide (MgO) on its surface.',
                  'Step 3: This oxide layer prevents further reaction with oxygen.',
                  'Step 4: Cleaning with sandpaper removes this oxide layer so magnesium can burn freely with a brilliant white flame.'
                ],
                finalAnswer: 'To remove the protective basic magnesium oxide layer from its surface.',
                keyTakeaway: 'Surface oxide layers inhibit chemical combustion reactions.',
                nepCompetencyNote: 'Lab safety and surface preparation standard in industrial chemistry.'
              },
              {
                id: 'c10-s-ch1-q2',
                questionNo: 'Exercise 1.1 Q2',
                questionText: 'Balance the chemical equation: Fe + H₂O → Fe₃O₄ + H₂',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: 'Unbalanced equation: Fe + H₂O → Fe₃O₄ + H₂',
                formula: 'Law of Conservation of Mass (Atoms of reactants = Atoms of products)',
                stepByStepSolution: [
                  'Step 1: Count atoms -> Left: Fe=1, H=2, O=1. Right: Fe=3, H=2, O=4.',
                  'Step 2: Balance Fe atoms by putting coefficient 3 before Fe -> 3Fe + H₂O → Fe₃O₄ + H₂.',
                  'Step 3: Balance O atoms by putting coefficient 4 before H₂O -> 3Fe + 4H₂O → Fe₃O₄ + H₂.',
                  'Step 4: Balance H atoms by putting coefficient 4 before H₂ -> 3Fe + 4H₂O → Fe₃O₄ + 4H₂.',
                  'Step 5: Final count -> Fe: 3=3, H: 8=8, O: 4=4. Balanced!'
                ],
                finalAnswer: '3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)',
                keyTakeaway: 'Mass can neither be created nor destroyed in a chemical reaction.',
                nepCompetencyNote: 'Stoichiometry is fundamental to green chemical manufacturing.'
              }
            ],
            competencyQuestions: [
              {
                id: 'c10-s-ch1-cbq1',
                questionNo: 'NEP CBQ Experiment Analysis',
                questionText: 'Rohan added shiny brown copper turnings to silver nitrate solution in a test tube. After 20 minutes, the solution turned blue and silver glitter appeared on the turnings. Explain with a balanced equation.',
                difficulty: 'Hard',
                type: 'Competency',
                givenData: 'Reactants: Copper turnings Cu(s) + Silver Nitrate AgNO₃(aq)',
                formula: 'Single Displacement Reaction: A + BC → AC + B',
                stepByStepSolution: [
                  'Step 1: Copper is more reactive than Silver in the Reactivity Series.',
                  'Step 2: Copper displaces silver from Silver Nitrate solution forming Copper(II) Nitrate and Silver metal.',
                  'Step 3: Equation: Cu(s) + 2AgNO₃(aq) → Cu(NO₃)₂(aq) + 2Ag(s).',
                  'Step 4: The solution turns blue due to formation of Cu²⁺ ions [Cu(NO₃)₂] and silver metal deposits on copper.'
                ],
                finalAnswer: 'Cu(s) + 2AgNO₃(aq) → Cu(NO₃)₂(aq) (Blue) + 2Ag(s) (Silver deposit)',
                keyTakeaway: 'A more reactive metal displaces a less reactive metal from its salt solution.',
                nepCompetencyNote: 'Reactivity series applications in electroplating and metallurgy recycling.'
              }
            ],
            quiz: [
              {
                id: 'sq1',
                question: 'Which gas is evolved when zinc reacts with dilute sulfuric acid?',
                options: ['Oxygen', 'Hydrogen', 'Carbon dioxide', 'Nitrogen'],
                correctIndex: 1,
                explanation: 'Zn + H₂SO₄ → ZnSO₄ + H₂↑ (Hydrogen gas pops with a flame test).'
              }
            ]
          },
          {
            id: 'c10-s-ch2',
            chapterNumber: 2,
            title: 'Acids, Bases and Salts',
            officialBookCode: 'jesc1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc102.pdf',
            nepHighlights: 'pH scale (0-14), universal indicators, chlor-alkali process, Plaster of Paris & Baking Soda.',
            summaryTextbook: 'Examines chemical properties of acids and bases, reaction with metals, carbonates and hydrogen carbonates, neutralization, dilution exothermic nature, pH scale measurement, importance of pH in everyday life (digestive system, tooth decay, soil testing), and manufacturing of Bleaching Powder, Baking Soda, Washing Soda, and Plaster of Paris (CaSO4·½H2O).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-s-ch3',
            chapterNumber: 3,
            title: 'Metals and Non-metals',
            officialBookCode: 'jesc1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc103.pdf',
            nepHighlights: 'Reactivity series, ionic bond formation, metallurgy (roasting & calcination), electrolytic refining & alloys.',
            summaryTextbook: 'Covers physical and chemical properties of metals/non-metals, amphoteric oxides, reactivity series of metals (K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Hg > Ag > Au), ionic compound properties (high melting point, electrical conductivity in molten state), extraction of metals from ores (calcination, roasting, thermite process), electrolytic refining of copper, and alloy compositions (brass, bronze, solder, stainless steel, amalgam).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-s-ch4',
            chapterNumber: 4,
            title: 'Carbon and its Compounds',
            officialBookCode: 'jesc1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc104.pdf',
            nepHighlights: 'Covalent bonding, tetravalency, catenation, homologous series, functional groups & soaps/micelles.',
            summaryTextbook: 'Examines versatility of carbon (catenation, tetravalency), saturated and unsaturated hydrocarbons (alkanes CnH2n+2, alkenes CnH2n, alkynes CnH2n-2), functional groups (alcohols, aldehydes, ketones, carboxylic acids), homologous series, chemical properties (combustion, oxidation, addition, substitution), properties of ethanol and ethanoic acid (esterification & saponification), and cleansing action of soaps and detergents via micelle formation.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-s-ch5',
            chapterNumber: 5,
            title: 'Life Processes',
            officialBookCode: 'jesc1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc105.pdf',
            nepHighlights: 'Autotrophic/Heterotrophic nutrition, Aerobic vs Anaerobic respiration, Double circulation in heart & Nephron excretion.',
            summaryTextbook: 'Covers four fundamental life processes in living organisms: Nutrition (photosynthesis in plants, human digestive system with enzymes like pepsin, trypsin, lipase, salivary amylase), Respiration (breakdown of glucose into pyruvate, ATP generation), Transportation (human heart structure, double circulation, xylem vs phloem transport, transpiration pull), and Excretion (structure and functioning of nephron in kidneys, urine formation, hemodialysis artificial kidney).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-s-ch6',
            chapterNumber: 6,
            title: 'Control and Coordination',
            officialBookCode: 'jesc1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc106.pdf',
            nepHighlights: 'Neuron structure, reflex arc, human brain (forebrain, midbrain, hindbrain), plant phytohormones & endocrine glands.',
            summaryTextbook: 'Examines animal nervous system (sensory/motor neurons, synapse, reflex action and reflex arc), human brain anatomy and cerebellum/medulla functions, plant movements (tropic vs nastic, phototropism, geotropism, hydrotropism, thigmotropism), phytohormones (auxin, gibberellin, cytokinin, abscisic acid), and animal endocrine system (pituitary growth hormone, thyroid thyroxin, pancreas insulin, adrenal adrenaline, gonads testosterone/estrogen).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-s-ch7',
            chapterNumber: 7,
            title: 'How do Organisms Reproduce?',
            officialBookCode: 'jesc1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc107.pdf',
            nepHighlights: 'Asexual reproduction modes, flower reproductive anatomy, human reproduction & contraception methods.',
            summaryTextbook: 'Covers importance of DNA replication and variation in evolution, asexual reproduction modes (binary/multiple fission in Amoeba/Plasmodium, fragmentation in Spirogyra, regeneration in Planaria, budding in Hydra/Yeast, vegetative propagation, spore formation in Rhizopus), sexual reproduction in flowering plants (stamen, carpel, pollination, double fertilization), human male and female reproductive systems, menstrual cycle, fertilization and embryo development, and reproductive health & contraception methods (barrier, chemical, surgical tubectomy/vasectomy).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-s-ch8',
            chapterNumber: 8,
            title: 'Heredity',
            officialBookCode: 'jesc1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc108.pdf',
            nepHighlights: 'Mendel’s Laws of Inheritance, Monohybrid (3:1) & Dihybrid (9:3:3:1) crosses, XX/XY Sex Determination.',
            summaryTextbook: 'Examines transmission of inherited traits across generations, Gregor Johann Mendel experiments on garden pea (Pisum sativum), Law of Dominance, Law of Segregation, Law of Independent Assortment, monohybrid phenotypic ratio (3:1) and genotypic ratio (1:2:1), dihybrid cross (9:3:3:1), how traits get expressed via cellular DNA proteins, and sex determination mechanism in human beings (XX female, XY male determining offspring sex).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-s-ch9',
            chapterNumber: 9,
            title: 'Light – Reflection and Refraction',
            officialBookCode: 'jesc1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc109.pdf',
            nepHighlights: 'Mirror formula 1/f = 1/v + 1/u, Lens formula 1/f = 1/v - 1/u, Snell’s Law (sin i / sin r = n) & Power of Lens P = 1/f (Dioptre).',
            summaryTextbook: 'Covers laws of reflection, spherical mirrors (concave and convex ray diagrams for image formation), sign convention (New Cartesian), mirror formula and magnification m = -v/u = h\'/h, refraction of light through rectangular glass slab, refractive index, Snell\'s law of refraction, spherical lenses (convex and concave ray diagrams), lens formula and magnification m = v/u, and optical power of lens P = 1/f (in metres) with SI unit Dioptre (D).',
            exerciseSolutions: [
              {
                id: 'c10-s-ch9-q1',
                questionNo: 'NCERT Textbook Q1 (Page 168)',
                questionText: 'A concave mirror produces three times magnified (enlarged) real image of an object placed at 10 cm in front of it. Where is the image located?',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: 'Object distance u = -10 cm. Magnification m = -3 (real and inverted image).',
                formula: 'm = -v / u',
                stepByStepSolution: [
                  'Step 1: Write given values with Cartesian sign convention: u = -10 cm, m = -3 (real image has negative magnification).',
                  'Step 2: Use magnification formula: m = -v / u => -3 = -v / (-10).',
                  'Step 3: -3 = v / 10 => v = -3 × 10 = -30 cm.'
                ],
                finalAnswer: 'The image is located at 30 cm in front of the concave mirror (on the same side as the object).',
                keyTakeaway: 'For real images formed by concave mirrors, image distance v is always negative.',
                nepCompetencyNote: 'Tests precision in using the Cartesian sign convention for linear magnification.'
              },
              {
                id: 'c10-s-ch9-q2',
                questionNo: 'NCERT Textbook Q2 (Page 186)',
                questionText: 'A convex lens of focal length 15 cm forms an image at 30 cm on the other side of the lens. Find the position of the object and the magnification produced.',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: 'Convex lens: f = +15 cm, v = +30 cm (real image on other side)',
                formula: '1/f = 1/v - 1/u  and  m = +v/u',
                stepByStepSolution: [
                  'Step 1: Lens formula: 1/u = 1/v - 1/f',
                  'Step 2: Substitute values: 1/u = 1/30 - 1/15 = (1 - 2) / 30 = -1/30 => u = -30 cm.',
                  'Step 3: Magnification: m = v / u = +30 / (-30) = -1.0.'
                ],
                finalAnswer: 'Object distance u = -30 cm (at 2F₁). Magnification m = -1.0 (real, inverted, same size).',
                keyTakeaway: 'When an object is placed at 2F₁ of a convex lens, the image is formed at 2F₂ with 1:1 size.',
                nepCompetencyNote: 'Mathematical verification of standard lens ray diagram positions.'
              }
            ],
            competencyQuestions: [
              {
                id: 'c10-s-ch9-cbq1',
                questionNo: 'CBSE Board 2024 High-Yield Numericals',
                questionText: 'An optical device X has a power of -2.5 D. (i) Identify the nature of device X and calculate its focal length. (ii) If an object is placed at 20 cm in front of it, calculate the image position and magnification.',
                difficulty: 'Hard',
                type: 'Competency',
                givenData: 'Power P = -2.5 D, object distance u = -20 cm',
                formula: 'P = 1/f (m) => f = 1/P, and 1/f = 1/v - 1/u',
                stepByStepSolution: [
                  'Step 1: Since power is negative (-2.5 D), device X is a Concave (Diverging) Lens.',
                  'Step 2: Focal length f = 1 / P = 1 / (-2.5) = -0.4 m = -40 cm.',
                  'Step 3: Using lens formula: 1/v = 1/f + 1/u = 1/(-40) + 1/(-20) = -1/40 - 2/40 = -3/40 => v = -40/3 = -13.33 cm.',
                  'Step 4: Magnification m = v / u = (-40/3) / (-20) = +40/60 = +2/3 = +0.67.'
                ],
                finalAnswer: 'Device X is a Concave Lens with f = -40 cm. The image is formed at 13.33 cm in front of the lens (Virtual, Erect, m = +0.67).',
                keyTakeaway: 'Concave lenses always form a virtual, erect, and diminished image with negative focal length.',
                nepCompetencyNote: 'Integrated multi-concept problem combining power, focal length, lens formula, and magnification.'
              }
            ],
            quiz: [
              {
                id: 'lq1',
                question: 'Which type of mirror is used by a dentist to see an enlarged image of teeth?',
                options: ['Concave Mirror', 'Convex Mirror', 'Plane Mirror', 'Cylindrical Mirror'],
                correctIndex: 0,
                explanation: 'When teeth are placed between the pole and focus of a concave mirror, it forms a virtual, erect, and magnified image.'
              },
              {
                id: 'lq2',
                question: 'The refractive index of water is 1.33 and that of glass is 1.50. The speed of light is maximum in:',
                options: ['Vacuum / Air', 'Water', 'Glass', 'Diamond'],
                correctIndex: 0,
                explanation: 'Speed of light is inversely proportional to refractive index (v = c/n). In vacuum/air, n ≈ 1, so light travels fastest at 3 × 10⁸ m/s.'
              },
              {
                id: 'lq3',
                question: 'A student prescribed a corrective lens of power +2.0 D has a focal length of:',
                options: ['+50 cm', '-50 cm', '+20 cm', '+100 cm'],
                correctIndex: 0,
                explanation: 'f = 100 / P (in cm) = 100 / (+2.0) = +50 cm (Convex lens).'
              }
            ]
          },
          {
            id: 'c10-s-ch10',
            chapterNumber: 10,
            title: 'The Human Eye and the Colourful World',
            officialBookCode: 'jesc1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc110.pdf',
            nepHighlights: 'Myopia, Hypermetropia, Presbyopia, Prism dispersion (VIBGYOR), Rainbow formation, Atmospheric refraction & Tyndall effect.',
            summaryTextbook: 'Examines structure and functioning of human eye (cornea, iris, pupil, crystalline lens, ciliary muscles, retina, optic nerve), power of accommodation, defects of vision and optical corrections (myopia with concave lens, hypermetropia with convex lens, presbyopia with bifocal lens), refraction through triangular glass prism, dispersion of white light into spectrum (VIBGYOR), recombination of spectrum, formation of primary rainbow, atmospheric refraction phenomena (twinkling of stars, advance sunrise and delayed sunset by 2 minutes), and scattering of light (Tyndall effect, blue color of clear sky, reddish appearance of sun at sunrise and sunset).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-s-ch11',
            chapterNumber: 11,
            title: 'Electricity',
            officialBookCode: 'jesc1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc111.pdf',
            nepHighlights: 'Ohm’s Law V = IR, Factors affecting Resistance R = ρ(l/A), Series vs Parallel combinations & Joule’s Law of Heating H = I²Rt.',
            summaryTextbook: 'Covers electric current I = Q/t (Ampere), electric potential difference V = W/Q (Volt), circuit diagram components, Ohm’s law V = IR, resistance and factors affecting resistance (length l, area of cross-section A, resistivity ρ in Ω·m), temperature dependence, resistors in series (Rs = R1 + R2 + R3) vs resistors in parallel (1/Rp = 1/R1 + 1/R2 + 1/R3), heating effect of electric current (Joule\'s law H = I²Rt = VIt = V²t/R), electric power P = VI = I²R = V²/R (Watt), and commercial unit of electrical energy (1 kWh = 3.6 × 10⁶ Joules).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-s-ch12',
            chapterNumber: 12,
            title: 'Magnetic Effects of Electric Current',
            officialBookCode: 'jesc1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc112.pdf',
            nepHighlights: 'Right-Hand Thumb Rule, Magnetic field of Solenoid, Fleming’s Left-Hand Rule & Domestic Electric Circuits (Live, Neutral, Earth wire).',
            summaryTextbook: 'Examines Hans Christian Oersted experiment, magnetic field and field lines properties (closed continuous loops, do not cross each other), magnetic field due to straight current-carrying conductor (Right-Hand Thumb Rule), circular loop and solenoid, electromagnet vs permanent magnet, force on current-carrying conductor in magnetic field, Fleming\'s Left-Hand Rule, and domestic electric circuits (220V, 50Hz, live wire red, neutral wire black, earth wire green for safety grounding, electric fuse, overloading, and short-circuiting).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-s-ch13',
            chapterNumber: 13,
            title: 'Our Environment',
            officialBookCode: 'jesc1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc113.pdf',
            nepHighlights: 'Ecosystem components (Biotic & Abiotic), 10% Energy Flow Law, Biological Magnification & Ozone layer depletion (CFCs / Montreal Protocol).',
            summaryTextbook: 'Covers ecosystem structure (producers, primary/secondary/tertiary consumers, decomposers), food chains and food webs, Lindeman\'s 10% law of energy transfer between successive trophic levels (90% lost as heat and metabolic processes), unidirectional energy flow, biological magnification of non-biodegradable pesticides (e.g. DDT) accumulating in top predators and humans, ozone layer depletion by chlorofluorocarbons (CFCs) and Montreal Protocol freeze, and biodegradable vs non-biodegradable solid waste management.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },
      {
        id: 'c10-social-science',
        name: 'Social Science',
        iconName: 'Globe',
        color: '#0284c7',
        description: 'Contemporary India-II (Geography), Democratic Politics-II (Civics), Understanding Economic Development & India & Contemporary World-II (History).',
        totalChapters: 21,
        coverImageUrl: '/book-covers/class10-social-science.png',
        chapters: [
          {
            id: 'c10-sst-geo-ch1',
            chapterNumber: 1,
            title: 'Resources and Development (Geography - Contemporary India II)',
            officialBookCode: 'jess1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jess101.pdf',
            nepHighlights: 'Resource planning in India, Sustainable Development, Land use & Soil conservation.',
            summaryTextbook: 'Covers types of resources, resource planning in India, land degradation and conservation measures, and soil classification (Alluvial, Black, Red and Yellow, Laterite, Arid, Forest soils).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-sst-his-ch1',
            chapterNumber: 2,
            title: 'The Rise of Nationalism in Europe (History - India & Contemporary World II)',
            officialBookCode: 'jess2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jess201.pdf',
            nepHighlights: 'Frédéric Sorrieu utopian vision, French Revolution, Unification of Germany & Italy, Romanticism.',
            summaryTextbook: 'Examines 19th-century European nation-states, liberal nationalism, Zollverein, Treaty of Vienna (1815), Giuseppe Mazzini, Otto von Bismarck, and visual allegories (Marianne & Germania).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-sst-civ-ch1',
            chapterNumber: 3,
            title: 'Power Sharing (Civics - Democratic Politics II)',
            officialBookCode: 'jess3',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jess301.pdf',
            nepHighlights: 'Belgium accommodation model vs Sri Lanka majoritarianism, Horizontal & Vertical power sharing.',
            summaryTextbook: 'Contrasts ethnic composition of Belgium and Sri Lanka, majoritarian measures in Sri Lanka causing civil war vs Belgian power-sharing model ensuring stability, and prudential vs moral reasons.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-sst-eco-ch1',
            chapterNumber: 4,
            title: 'Development (Economics - Understanding Economic Development)',
            officialBookCode: 'jess4',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jess401.pdf',
            nepHighlights: 'Per Capita Income, Human Development Index (HDI), Public Facilities & Sustainable Development.',
            summaryTextbook: 'Explains diverse development goals, World Bank national income criteria vs UNDP Human Development Report (Life Expectancy, Literacy, Infant Mortality Rate), and groundwater depletion.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },
      {
        id: 'c10-english',
        name: 'English (First Flight & Footprints)',
        iconName: 'BookOpen',
        color: '#f59e0b',
        description: 'First Flight (Prose & Poems) and Footprints without Feet Supplementary Reader.',
        totalChapters: 19,
        coverImageUrl: '/book-covers/class10-english.png',
        chapters: [
          {
            id: 'c10-eng-ff-ch1',
            chapterNumber: 1,
            title: 'A Letter to God (First Flight)',
            officialBookCode: 'jeef1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jeef101.pdf',
            nepHighlights: 'Unwavering faith, irony of human nature & postmaster compassion by G.L. Fuentes.',
            summaryTextbook: 'Lencho, a hardworking peasant, writes a letter to God requesting 100 pesos after a hailstorm destroys his corn crop. Generous post office employees collect 70 pesos, but Lencho suspects them of stealing the rest.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-eng-fp-ch1',
            chapterNumber: 2,
            title: 'A Triumph of Surgery (Footprints without Feet)',
            officialBookCode: 'jeep1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jeep101.pdf',
            nepHighlights: 'Pampered pets, veterinary wisdom & lifestyle healing by James Herriot.',
            summaryTextbook: 'Mrs. Pumphrey overfeeds her pet dog Tricki until it falls seriously ill. Dr. Herriot cures Tricki at his surgery with natural exercise and strict diet without surgery or medicine.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },
      {
        id: 'c10-hindi',
        name: 'Hindi (क्षितिज एवं कृतिका)',
        iconName: 'Book',
        color: '#e11d48',
        description: 'क्षितिज भाग 2 (Kshitij Part 2) एवं कृतिका भाग 2 (Kritika Part 2) Supplementary Reader.',
        totalChapters: 17,
        coverImageUrl: '/book-covers/class10-hindi.png',
        chapters: [
          {
            id: 'c10-hin-ks-ch1',
            chapterNumber: 1,
            title: 'सूरदास के पद (क्षितिज भाग 2)',
            officialBookCode: 'jhks1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jhks101.pdf',
            nepHighlights: 'भ्रमरगीत, गोपियों का विरह-वेदना एवं उद्धव के योग-संदेश पर प्रेम की विजय।',
            summaryTextbook: 'सूरसागर के भ्रमरगीत से संकलित पद जहाँ गोपियाँ उद्धव के योग और ज्ञान मार्ग को नकारकर श्रीकृष्ण के प्रति अपने अनन्य और निष्कपट प्रेम को सर्वोपरि सिद्ध करती हैं।',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c10-hin-kr-ch1',
            chapterNumber: 2,
            title: 'माता का आँचल (शिवपूजन सहाय - कृतिका भाग 2)',
            officialBookCode: 'jhkr1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/jhkr101.pdf',
            nepHighlights: 'ग्रामीण अंचल, बाल सुलभ क्रीड़ाएँ एवं माँ के आँचल में सुरक्षा का भाव।',
            summaryTextbook: 'लेखक के बचपन का आत्मीय संस्मरण जहाँ भोलानाथ अपने पिता के साथ दिनभर खेलते हुए भी भय और संकट के समय केवल माँ की गोद में ही शांति पाता है।',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      }
    ]
  },
  // Class 11 (Senior Secondary Stage - Commerce, Science & Arts Streams)
  {
    classNumber: 11,
    stageName: 'Senior Secondary',
    ageGroup: '16-17 Years',
    nepFocus: 'Conceptual Foundation, Financial Literacy, Double Entry Principles & Practical Auditing',
    subjects: [
      {
        id: 'c11-accountancy',
        name: 'Accountancy (Financial Accounting)',
        iconName: 'Building2',
        color: '#2563eb',
        description: 'Financial Accounting I & II (NEP 2026-27): Double Entry Bookkeeping, Journal, Ledger, BRS, Depreciation, Final Accounts & Computerized Accounting.',
        totalChapters: 11,
        coverImageUrl: '/book-covers/accountancy-p1.png',
        chapters: [
          {
            id: 'c11-acc-ch1',
            chapterNumber: 1,
            title: 'Introduction to Accounting & Basic Terms',
            nepHighlights: 'Understanding Accounting concepts, qualitative characteristics & financial terminology.',
            summaryTextbook: 'Covers definition of accounting, objectives, accounting process, branch types (Financial, Cost, Management), and key terms like Assets, Liabilities, Capital, Revenues, and Expenses.',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keac101.pdf',
            officialBookCode: 'keac1',
            exerciseSolutions: [
              {
                id: 'c11-acc-ch1-q1',
                questionNo: 'Exercise 1.1 Q1',
                questionText: 'Explain the internal and external users of accounting information with examples and their specific data requirements.',
                difficulty: 'Easy',
                type: 'Exercise',
                givenData: 'Classification of stakeholders requiring financial statements.',
                formula: 'Stakeholders = Internal Users (Owners, Management, Employees) + External Users (Investors, Creditors, Banks, Tax Authorities, Regulatory Bodies)',
                stepByStepSolution: [
                  'Step 1: Internal Users - (a) Owners / Shareholders (evaluate return on investment, net profit margins and solvency), (b) Management (strategic planning, pricing, budgeting and cost control), (c) Employees / Trade Unions (assess profitability for bonus claims, wage increments, and job security).',
                  'Step 2: External Users - (a) Investors & Financial Analysts (decide whether to buy, hold, or sell shares), (b) Banks & Short/Long-Term Creditors (evaluate debt repayment capacity, liquidity ratios and creditworthiness), (c) Tax Authorities like GST & Income Tax Department (assess statutory tax liabilities, TDS and compliance), (d) Customers & Public (judge corporate social responsibility, product warranty longevity, and fair pricing).',
                  'Step 3: Conclusion - Accounting information serves as the universally standardized quantitative language of business for operational governance and external accountability.'
                ],
                finalAnswer: 'Internal users utilize accounting reports for internal planning and control; external users utilize published financial statements to assess investment safety, creditworthiness, and tax compliance.',
                keyTakeaway: 'To be effective, accounting information must possess four fundamental qualitative characteristics: Relevance, Reliability, Comparability, and Understandability.',
                nepCompetencyNote: 'Core financial literacy competency under NEP 2020 commerce and entrepreneurship curriculum.'
              },
              {
                id: 'c11-acc-ch1-q2',
                questionNo: 'Exercise 1.1 Q2',
                questionText: 'Classify the following items into Assets, Liabilities, Capital, Revenue, or Expense with reasons: (i) Bank Overdraft, (ii) Prepaid Insurance, (iii) Goodwill, (iv) Outstanding Wages, (v) Sales Commission Received, (vi) Bad Debts.',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: 'Financial ledger items for business classification.',
                formula: 'Modern Accounting Classification: Assets (Economic Resources), Liabilities (Obligations), Capital (Owner Equity), Revenue (Earnings from Operations), Expenses (Costs of Generating Revenue)',
                stepByStepSolution: [
                  'Step 1: (i) Bank Overdraft -> Current Liability (Short-term debt payable to bank on demand).',
                  'Step 2: (ii) Prepaid Insurance -> Current Asset (Future economic benefit already paid for before availing service).',
                  'Step 3: (iii) Goodwill -> Non-Current Intangible Asset (Reputation and brand value yielding competitive economic advantage).',
                  'Step 4: (iv) Outstanding Wages -> Current Liability (Services consumed by business during the period but payment is pending).',
                  'Step 5: (v) Sales Commission Received -> Revenue (Inflow of economic benefits earned through commercial agency activities).',
                  'Step 6: (vi) Bad Debts -> Expense / Loss (Irrecoverable receivables written off as a cost of doing credit business).'
                ],
                finalAnswer: 'Bank Overdraft & Outstanding Wages = Liabilities | Prepaid Insurance & Goodwill = Assets | Sales Commission = Revenue | Bad Debts = Expense/Loss.',
                keyTakeaway: 'Correct classification of transactions into Assets/Liabilities/Revenue/Expenses is essential to avoid errors of principle in financial statements.',
                nepCompetencyNote: 'Practical balance sheet literacy and corporate auditing classification.'
              }
            ],
            competencyQuestions: [
              {
                id: 'c11-acc-ch1-cbq1',
                questionNo: 'NEP Case Study CBQ 1',
                questionText: 'A boutique tech startup founder claims: "My bank balance increased by ₹10,00,000 this year, therefore my net profit for the year is exactly ₹10,00,000." Critique this statement using fundamental accounting concepts.',
                difficulty: 'Hard',
                type: 'Competency',
                givenData: 'Cash balance increase = ₹10,00,000.',
                formula: 'Cash Inflow ≠ Profit | Profit = Revenue - Expenses (under Accrual Concept) | Cash Inflow = Operating Cash + Financing Cash (Loans/Capital) + Investing Cash',
                stepByStepSolution: [
                  'Step 1: Cash balance can increase due to non-revenue financing activities such as taking a bank loan or introducing fresh partner capital, none of which constitute operational profit.',
                  'Step 2: Under the Accrual Principle, revenues earned and expenses incurred determine Net Profit regardless of whether cash has actually been received or paid.',
                  'Step 3: If ₹8,00,000 of the ₹10,00,000 cash came from a 5-year bank loan and ₹2,00,000 from customer advance for next year, the actual current year profit could be zero or even negative.',
                  'Step 4: Conclusion: Profit measures operational performance over an accounting period, while Cash Flow tracks liquidity movement.'
                ],
                finalAnswer: 'The founder statement is incorrect. Cash increase measures liquidity change, which includes loans, capital infusions, and advances, whereas Net Profit is determined by matching recognized revenue against incurred expenses.',
                keyTakeaway: 'Profit is a measure of value creation (Accrual basis), while Cash is a measure of liquidity (Cash flow).',
                nepCompetencyNote: 'Essential financial acumen for startup founders and future business managers.'
              }
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Which qualitative characteristic of accounting information is violated if a company arbitrarily changes its inventory valuation method every year without disclosure?',
                options: ['Comparability', 'Reliability', 'Understandability', 'Materiality'],
                correctIndex: 0,
                explanation: 'Comparability requires consistency in applying accounting policies from year to year so stakeholders can compare multi-year performance.'
              },
              {
                id: 'q2',
                question: 'A financial obligation that may arise depending on the outcome of an uncertain future event (e.g. pending court lawsuit) is classified as:',
                options: ['Current Liability', 'Contingent Liability', 'Fixed Liability', 'Fictitious Asset'],
                correctIndex: 1,
                explanation: 'A Contingent Liability is not an established liability today but depends on a future event; it is disclosed as a footnote to the Balance Sheet under the Full Disclosure Principle.'
              }
            ]
          },
          {
            id: 'c11-acc-ch2',
            chapterNumber: 2,
            title: 'Theory Base of Accounting & Concepts',
            nepHighlights: 'GAAP, Going Concern, Accrual Basis, Matching Principle & Accounting Standards.',
            summaryTextbook: 'Discusses Generally Accepted Accounting Principles (GAAP), Business Entity, Money Measurement, Going Concern, Accounting Period, Historical Cost, Dual Aspect, Matching Principle, and Ind AS.',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keac102.pdf',
            officialBookCode: 'keac1',
            exerciseSolutions: [
              {
                id: 'c11-acc-ch2-q1',
                questionNo: 'Exercise 2.1 Q1',
                questionText: 'State the Dual Aspect Principle and derive the fundamental Accounting Equation. Demonstrate its validity with 3 distinct business transactions.',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: 'Fundamental mathematical model of double entry bookkeeping.',
                formula: 'Assets = Liabilities + Capital (Owner Equity)',
                stepByStepSolution: [
                  'Step 1: Principle - Every business transaction has a two-fold aspect: a Debit of equal amount and a Credit of equal amount.',
                  'Step 2: Transaction 1 (Started business with cash ₹2,00,000): Assets (Cash +₹2,00,000) = Liabilities (₹0) + Capital (+₹2,00,000). Both sides = ₹2,00,000.',
                  'Step 3: Transaction 2 (Purchased Machinery on credit from ABC Ltd for ₹50,000): Assets (Machinery +₹50,000) = Liabilities (Creditors +₹50,000) + Capital (₹2,00,000). Both sides = ₹2,50,000.',
                  'Step 4: Transaction 3 (Paid creditor ABC Ltd ₹20,000 cash): Assets (Cash -₹20,000 -> Total Assets ₹2,30,000) = Liabilities (Creditors -₹20,000 -> Total Liabilities ₹30,000) + Capital (₹2,00,000). Both sides = ₹2,30,000.'
                ],
                finalAnswer: 'Accounting Equation: Assets = Liabilities + Capital. Verified across all three transactions.',
                keyTakeaway: 'The double entry system guarantees that total debits always equal total credits, ensuring the Balance Sheet always balances.',
                nepCompetencyNote: 'Fundamental mathematical balance principle for corporate auditing.'
              },
              {
                id: 'c11-acc-ch2-q2',
                questionNo: 'Exercise 2.1 Q2',
                questionText: 'Explain the Principle of Conservatism (Prudence) with 3 practical examples in financial accounting.',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: 'Prudence concept guidelines under GAAP.',
                formula: 'Do not anticipate profits, but provide for all possible losses.',
                stepByStepSolution: [
                  'Step 1: Definition - The Conservatism/Prudence principle dictates that an accountant should never anticipate future profits, but must provide for all probable and anticipated future losses.',
                  'Step 2: Example 1 - Valuation of Closing Stock at "Cost Price or Net Realizable Value (Market Price), whichever is lower".',
                  'Step 3: Example 2 - Creating a "Provision for Doubtful Debts" against trade receivables in anticipation of default.',
                  'Step 4: Example 3 - Disclosing pending legal compensation suits against the firm as Contingent Liabilities in footnotes rather than booking an expense immediately.'
                ],
                finalAnswer: 'Prudence ensures financial statements do not overstate assets or profits, presenting a true and cautious view of solvency.',
                keyTakeaway: 'Under-recording losses or over-recording assets leads to misleading financial statements and unlawful dividend distributions.',
                nepCompetencyNote: 'Risk assessment & conservative corporate valuation standard.'
              }
            ],
            competencyQuestions: [
              {
                id: 'c11-acc-ch2-cbq1',
                questionNo: 'NEP Case Study CBQ 1',
                questionText: 'A pharmaceutical company invested ₹50,00,000 in developing a new drug. The scientists estimate a 90% chance of clinical trial success. Can the company recognize the ₹50,00,000 as an intangible asset and show an anticipated profit of ₹1,00,00,000 on its Balance Sheet? Justify under Ind AS / GAAP.',
                difficulty: 'Hard',
                type: 'Competency',
                givenData: 'R&D expenditure = ₹50,00,000; Expected future revenue = ₹1,00,00,000; Clinical trial in progress.',
                formula: 'Prudence Principle + Revenue Recognition (AS-9 / Ind AS 38)',
                stepByStepSolution: [
                  'Step 1: Under the Conservatism (Prudence) Principle and Revenue Recognition concept, anticipated profits cannot be booked until realized through an actual commercial sale contract.',
                  'Step 2: Under Ind AS 38 (Intangible Assets), research phase expenses must be charged to Profit & Loss immediately as an expense; development costs can only be capitalized once commercial viability and regulatory approval are fully achieved.',
                  'Step 3: Since clinical trials are pending, the ₹1,00,00,000 anticipated profit cannot be recorded, and uncertain R&D costs must be expensed.'
                ],
                finalAnswer: 'No. Anticipated profits cannot be booked prior to realization (Prudence & Realisation Concepts). Research costs must be expensed until regulatory approval and technical feasibility are proven.',
                keyTakeaway: 'Prudence prevents deceptive asset inflation and premature profit recognition.',
                nepCompetencyNote: 'Modern corporate governance and regulatory compliance in high-tech R&D industries.'
              }
            ],
            quiz: [
              {
                id: 'q1',
                question: 'According to which accounting concept is the owner treated as an outside creditor to the extent of his invested capital?',
                options: ['Business Entity Concept', 'Money Measurement Concept', 'Going Concern Concept', 'Cost Concept'],
                correctIndex: 0,
                explanation: 'The Business Entity Concept treats the business and its owner as two distinct legal entities. Capital introduced by the owner is therefore treated as a liability of the business towards the owner.'
              },
              {
                id: 'q2',
                question: 'Recording transactions on the date of occurrence rather than when actual cash is received or paid is known as:',
                options: ['Cash Basis of Accounting', 'Accrual Basis of Accounting', 'Single Entry Basis', 'Hybrid Basis'],
                correctIndex: 1,
                explanation: 'Accrual Basis recognizes revenues when earned and expenses when incurred, matching revenues with related expenses in the same accounting period.'
              }
            ]
          },
          {
            id: 'c11-acc-ch3',
            chapterNumber: 3,
            title: 'Recording of Transactions - I (Accounting Equation & Rules of Dr/Cr)',
            nepHighlights: 'T.S. Grewal 2026-27 Solutions: Transaction analysis using Accounting Equation, Balance Sheet preparation & Rules of Debit/Credit.',
            summaryTextbook: 'Focuses on analyzing business transactions, effect on Assets, Liabilities, and Capital, and application of Rules of Debit and Credit (Personal, Real, Nominal & Modern asset/liability approach). Features full step-by-step solutions for T.S. Grewal (2026-2027 Edition).',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keac103.pdf',
            officialBookCode: 'keac1',
            exerciseSolutions: [
              {
                id: 'c11-acc-ch3-tsg-q1',
                questionNo: 'T.S. Grewal 2026-27 Q1',
                questionText: 'What will be the effect of the following on the Accounting Equation?\n(i) Started business with cash ₹45,000.\n(ii) Opened a Bank Account with a deposit of ₹4,500.\n(iii) Bought goods from M/s Sun & Co. for ₹11,200.',
                difficulty: 'Easy',
                type: 'Exercise',
                givenData: '3 introductory business transactions affecting Cash, Bank, Stock, Creditors, and Capital.',
                formula: 'Assets (Cash + Bank + Stock) = Liabilities (Creditors) + Capital',
                stepByStepSolution: [
                  'Step 1: Transaction (i) - Started business with cash ₹45,000:\n  - Assets: Cash (+₹45,000)\n  - Liabilities: ₹0 | Capital: (+₹45,000)\n  - Equation: Cash ₹45,000 = Capital ₹45,000.',
                  'Step 2: Transaction (ii) - Opened Bank Account with deposit of ₹4,500:\n  - Assets: Cash (-₹4,500), Bank (+₹4,500)\n  - Liabilities: ₹0 | Capital: ₹45,000\n  - New Equation: Cash ₹40,500 + Bank ₹4,500 = Capital ₹45,000.',
                  'Step 3: Transaction (iii) - Bought goods from M/s Sun & Co. for ₹11,200 on credit:\n  - Assets: Stock (+₹11,200)\n  - Liabilities: Creditors (M/s Sun & Co.) (+₹11,200) | Capital: ₹45,000\n  - Final Equation: Cash ₹40,500 + Bank ₹4,500 + Stock ₹11,200 = Creditors ₹11,200 + Capital ₹45,000.',
                  'Step 4: Total Verification:\n  - Total Assets = ₹40,500 + ₹4,500 + ₹11,200 = ₹56,200\n  - Total Liabilities + Capital = ₹11,200 + ₹45,000 = ₹56,200. (Balanced!)'
                ],
                finalAnswer: 'Total Assets = ₹56,200 (Cash ₹40,500 + Bank ₹4,500 + Stock ₹11,200) | Liabilities = ₹11,200 | Capital = ₹45,000.',
                keyTakeaway: 'Depositing cash into bank shifts liquidity between asset heads without altering total assets or capital.',
                nepCompetencyNote: 'Foundational double-entry modeling for commerce students.'
              },
              {
                id: 'c11-acc-ch3-tsg-q2',
                questionNo: 'T.S. Grewal 2026-27 Q2',
                questionText: 'Show the Accounting Equation for the following transactions:\n(i) Gopinath started business with cash ₹25,000.\n(ii) Purchased goods from Shyam ₹10,000.\n(iii) Sold goods to Sohan costing ₹1,800 for ₹1,500.\n(iv) Gopinath withdrew from business ₹5,000.',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: 'Transactions involving capital, credit purchases, sale of goods at a LOSS, and drawings.',
                formula: 'Assets (Cash + Stock + Debtors) = Liabilities (Creditors) + Capital',
                stepByStepSolution: [
                  'Step 1: Transaction (i) - Started business with cash ₹25,000:\n  - Cash (+₹25,000) = Capital (+₹25,000).',
                  'Step 2: Transaction (ii) - Purchased goods from Shyam ₹10,000 on credit:\n  - Stock (+₹10,000) = Creditors (+₹10,000) + Capital (₹25,000).\n  - New Equation: Cash ₹25,000 + Stock ₹10,000 = Creditors ₹10,000 + Capital ₹25,000.',
                  'Step 3: Transaction (iii) - Sold goods to Sohan costing ₹1,800 for ₹1,500 on credit (Loss = ₹300):\n  - Stock (-₹1,800), Debtors (+₹1,500) = Capital (-₹300 loss).\n  - New Equation: Cash ₹25,000 + Stock ₹8,200 + Debtors ₹1,500 = Creditors ₹10,000 + Capital ₹24,700.',
                  'Step 4: Transaction (iv) - Gopinath withdrew from business for personal use ₹5,000:\n  - Cash (-₹5,000) = Capital (-₹5,000 drawings).\n  - Final Equation: Cash ₹20,000 + Stock ₹8,200 + Debtors ₹1,500 = Creditors ₹10,000 + Capital ₹19,700.',
                  'Step 5: Verification:\n  - Total Assets = ₹20,000 + ₹8,200 + ₹1,500 = ₹29,700\n  - Liabilities + Capital = ₹10,000 + ₹19,700 = ₹29,700. (Balanced!)'
                ],
                finalAnswer: 'Total Assets = ₹29,700 (Cash ₹20,000 + Stock ₹8,200 + Debtors ₹1,500) | Liabilities = ₹10,000 | Capital = ₹19,700.',
                keyTakeaway: 'Loss on sale of goods (Cost ₹1,800 - Price ₹1,500 = Loss ₹300) directly reduces Owner Capital.',
                nepCompetencyNote: 'Loss recognition and drawings impact on equity.'
              }
            ],
            competencyQuestions: [
              {
                id: 'c11-acc-ch3-cbq1',
                questionNo: 'NEP Case Study CBQ 1',
                questionText: 'On 31st March, a company has Total Assets of ₹12,00,000 and Owner’s Capital of ₹7,50,000. During the year, the owner introduced fresh capital of ₹1,00,000 and made drawings of ₹60,000. If the total profit earned during the year was ₹1,80,000, calculate: (i) Total Outside Liabilities, (ii) Capital at the beginning of the year.',
                difficulty: 'Hard',
                type: 'Competency',
                givenData: 'Total Assets = ₹12,00,000; Closing Capital = ₹7,50,000; Fresh Capital = ₹1,00,000; Drawings = ₹60,000; Profit = ₹1,80,000.',
                formula: 'Outside Liabilities = Total Assets - Closing Capital | Closing Capital = Opening Capital + Fresh Capital + Profit - Drawings',
                stepByStepSolution: [
                  'Step 1: Outside Liabilities = Total Assets (₹12,00,000) - Closing Capital (₹7,50,000) = ₹4,50,000.',
                  'Step 2: Use Capital Equation: Closing Capital = Opening Capital + Fresh Capital + Net Profit - Drawings.',
                  'Step 3: Substitute values: 7,50,000 = Opening Capital + 1,00,000 + 1,80,000 - 60,000.',
                  'Step 4: 7,50,000 = Opening Capital + 2,20,000 -> Opening Capital = 7,50,000 - 2,20,000 = ₹5,30,000.'
                ],
                finalAnswer: '(i) Total Outside Liabilities = ₹4,50,000 | (ii) Opening Capital = ₹5,30,000',
                keyTakeaway: 'The accounting equation allows reverse calculation of missing financial metrics for forensic auditing.',
                nepCompetencyNote: 'Analytical financial problem solving and capital adequacy calculation.'
              }
            ],
            quiz: [
              {
                id: 'q1',
                question: 'If a business purchases goods worth ₹50,000 on credit, what is the net effect on the Accounting Equation?',
                options: ['Assets increase by ₹50,000, Liabilities increase by ₹50,000', 'Assets increase by ₹50,000, Capital increases by ₹50,000', 'Assets decrease by ₹50,000, Liabilities decrease by ₹50,000', 'No change in total assets'],
                correctIndex: 0,
                explanation: 'Purchasing goods on credit increases Stock (Asset) by ₹50,000 and increases Creditors (Liability) by ₹50,000, keeping the equation balanced.'
              },
              {
                id: 'q2',
                question: 'Which of the following accounts will have a Debit normal balance?',
                options: ['Prepaid Rent', 'Creditors', 'Capital', 'Sales'],
                correctIndex: 0,
                explanation: 'Prepaid Rent is a Current Asset because it represents an unconsumed service already paid for; all asset accounts carry a Debit normal balance.'
              }
            ]
          },
          {
            id: 'c11-acc-ch4',
            chapterNumber: 4,
            title: 'Recording of Transactions - II (Journal, Ledger & Special Purpose Books)',
            nepHighlights: 'Journalizing transactions, posting to T-accounts (Ledger), Cash Book, and balancing accounts.',
            summaryTextbook: 'Covers format of Journal, journalizing entries (trade discount vs cash discount, bad debts, GST entries), posting to Ledger accounts, Cash Book (Single & Double column), Subsidiary Books, and balancing ledger accounts.',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keac104.pdf',
            officialBookCode: 'keac1',
            exerciseSolutions: [
              {
                id: 'c11-acc-ch4-q1',
                questionNo: 'Exercise 4.1 Q1',
                questionText: 'Pass Journal Entries in the books of Vikas Enterprises:\n(i) Purchased goods list price ₹1,00,000 from Rajesh subject to 20% trade discount and 5% cash discount. Paid 60% amount immediately by cheque.\n(ii) Sold goods to Mohan costing ₹30,000 at a profit of 20% on cost less 10% trade discount.\n(iii) Mohan became insolvent and a dividend of 60 paise in a rupee was received from his estate in full settlement.\n(iv) Goods worth ₹10,000 destroyed by fire. Insurance company admitted claim of ₹7,500.\n(v) Goods costing ₹5,000 given away as charity.',
                difficulty: 'Hard',
                type: 'Exercise',
                givenData: '5 complex trade journal entries including discounts, bad debts, insurance claims and non-sale inventory reduction.',
                formula: 'Trade discount is deducted on invoice; Cash discount is calculated only on the cash/cheque amount actually paid.',
                stepByStepSolution: [
                  'Step 1: Txn (i) -> List Price = ₹1,00,000 - 20% TD (₹20,000) = Net Purchase ₹80,000. 60% paid = ₹48,000. Cash Discount = 5% of ₹48,000 = ₹2,400. Net Bank paid = ₹45,600. Unpaid due to Rajesh = 40% of ₹80,000 = ₹32,000.\nEntry: Purchases A/c Dr. ₹80,000 | To Bank A/c ₹45,600 | To Discount Received A/c ₹2,400 | To Rajesh A/c ₹32,000.',
                  'Step 2: Txn (ii) -> Cost = ₹30,000 + 20% Profit (₹6,000) = ₹36,000 list price. Less 10% TD (₹3,600) = Net Sale ₹32,400.\nEntry: Mohan A/c Dr. ₹32,400 | To Sales A/c ₹32,400.',
                  'Step 3: Txn (iii) -> Total debt due from Mohan = ₹32,400. Cash received (60%) = ₹19,440. Bad Debts (40%) = ₹12,960.\nEntry: Cash/Bank A/c Dr. ₹19,440 | Bad Debts A/c Dr. ₹12,960 | To Mohan A/c ₹32,400.',
                  'Step 4: Txn (iv) -> Total loss = ₹10,000. Claim admitted = ₹7,500. Loss on fire = ₹2,500.\nEntry: Insurance Co. / Claim A/c Dr. ₹7,500 | Loss by Fire A/c Dr. ₹2,500 | To Purchases A/c ₹10,000.',
                  'Step 5: Txn (v) -> Goods given as charity reduced at cost.\nEntry: Charity A/c Dr. ₹5,000 | To Purchases A/c ₹5,000.'
                ],
                finalAnswer: 'All 5 transactions journalized with proper debit/credit equality, discount splits, and inventory adjustments.',
                keyTakeaway: 'When goods are distributed as samples, charity, or lost by fire, Purchases Account is credited at original cost price.',
                nepCompetencyNote: 'Commercial transaction recording and statutory tax audit standards.'
              },
              {
                id: 'c11-acc-ch4-q2',
                questionNo: 'Exercise 4.1 Q2',
                questionText: 'Record the following transactions in a Two-Column Cash Book (Cash & Bank) of M/s Modern Traders:\nMarch 1: Cash in hand ₹12,000, Bank overdraft ₹15,000.\nMarch 5: Received cheque from Sunita for ₹8,000 and deposited into bank on same day.\nMarch 10: Cash withdrawn from bank for office use ₹4,000.\nMarch 15: Paid salaries to staff by cheque ₹6,000.\nMarch 20: Cheque received from Sunita returned dishonoured by bank, bank charges ₹50.\nMarch 28: Cash sales ₹10,000 out of which ₹8,000 deposited into bank on same day.\nMarch 31: Withdrew cash from bank for personal use of proprietor ₹2,000.',
                difficulty: 'Hard',
                type: 'Exercise',
                givenData: 'Cash & Bank column transactions with Contra entries and cheque dishonour.',
                formula: 'Receipts side = Debit (Cash & Bank) | Payments side = Credit (Cash & Bank) | Contra entry = marked with "C"',
                stepByStepSolution: [
                  'Step 1: March 1 -> Debit Cash column ₹12,000 (To Balance b/d) | Credit Bank column ₹15,000 (By Balance b/d - Overdraft).',
                  'Step 2: March 5 -> Debit Bank column ₹8,000 (To Sunita).',
                  'Step 3: March 10 (Contra) -> Debit Cash column ₹4,000 (To Bank A/c [C]) | Credit Bank column ₹4,000 (By Cash A/c [C]).',
                  'Step 4: March 15 -> Credit Bank column ₹6,000 (By Salaries A/c).',
                  'Step 5: March 20 -> Cheque dishonour: Credit Bank column ₹8,000 (By Sunita) and Credit Bank column ₹50 (By Bank Charges A/c).',
                  'Step 6: March 28 -> Debit Cash column ₹2,000, Debit Bank column ₹8,000 (To Sales A/c).',
                  'Step 7: March 31 -> Credit Bank column ₹2,000 (By Drawings A/c).',
                  'Step 8: Balancing -> Cash Debit Total = ₹18,000, Cash Credit Total = ₹0 -> Cash Balance c/d = ₹18,000 in hand.\nBank Credit Total = ₹15,000 + ₹4,000 + ₹6,000 + ₹8,000 + ₹50 + ₹2,000 = ₹35,050. Bank Debit Total = ₹8,000 + ₹8,000 = ₹16,000 -> Net Bank Overdraft Balance c/d = ₹19,050.'
                ],
                finalAnswer: 'Closing Cash in Hand = ₹18,000 (Debit balance) | Closing Bank Overdraft = ₹19,050 (Credit balance).',
                keyTakeaway: 'When a customer cheque previously deposited is dishonoured, the customer account is debited and bank column is credited.',
                nepCompetencyNote: 'Daily cash treasury and commercial banking reconciliation.'
              }
            ],
            competencyQuestions: [
              {
                id: 'c11-acc-ch4-cbq1',
                questionNo: 'NEP Case Study CBQ 1',
                questionText: 'An electronics dealer buys 10 laptops from Dell for ₹5,00,000 with 18% IGST. He uses 1 laptop in his office, gives 1 laptop to a school as a charitable CSR donation, and sells the remaining 8 laptops at 25% profit on cost with 18% IGST. What is the net Output IGST payable to the government after Input Tax Credit (ITC) adjustment?',
                difficulty: 'Hard',
                type: 'Competency',
                givenData: '10 laptops @ ₹50,000 each = ₹5,00,000. Total Input IGST paid = ₹90,000. 1 used in office (Capital Asset), 1 given in charity (ITC blocked under Sec 17(5)), 8 sold @ 25% profit.',
                formula: 'Eligible ITC = Total ITC - Blocked ITC on Charity | Output GST = Sale Price × 18% | Net Payable = Output GST - Eligible ITC',
                stepByStepSolution: [
                  'Step 1: Total Input Tax paid = 18% of ₹5,00,000 = ₹90,000 (₹9,000 per laptop).',
                  'Step 2: For the 1 laptop given as charity: Under GST Law Sec 17(5), ITC is blocked on goods given as free gifts/charity -> Reverse ITC of ₹9,000. For office laptop: ITC of ₹9,000 is eligible. Eligible ITC = ₹90,000 - ₹9,000 = ₹81,000.',
                  'Step 3: Sale of 8 laptops: Cost = 8 × ₹50,00,000 / 10 = ₹4,00,000. Profit (25%) = ₹1,00,000. Sale Value = ₹5,00,000.',
                  'Step 4: Output IGST collected = 18% of ₹5,00,000 = ₹90,000.',
                  'Step 5: Net IGST Payable = Output IGST (₹90,000) - Eligible Input IGST (₹81,000) = ₹9,000.'
                ],
                finalAnswer: 'Net Output IGST payable to government = ₹9,000 (after reversing ₹9,000 blocked ITC on charity laptop).',
                keyTakeaway: 'GST input tax credit must be reversed when inventory is destroyed, stolen, or given as gift/charity.',
                nepCompetencyNote: 'Real-world commercial GST calculation and input tax credit optimization.'
              }
            ],
            quiz: [
              {
                id: 'q1',
                question: 'When a debt previously written off as a Bad Debt is subsequently recovered, which account must be credited in the Journal entry?',
                options: ['Customer / Debtor Account', 'Bad Debts Recovered Account', 'Profit & Loss Account', 'Cash Account'],
                correctIndex: 1,
                explanation: 'Since the debtor account was already closed upon write-off, the recovery represents a gain and is credited to Bad Debts Recovered Account.'
              },
              {
                id: 'q2',
                question: 'Which of the following transactions is entered in both the Cash and Bank columns of a Two-Column Cash Book?',
                options: ['Cash deposited into bank', 'Cash withdrawn by proprietor for personal use', 'Cheque received from a debtor and endorsed to a creditor', 'Payment made to a creditor by cash'],
                correctIndex: 0,
                explanation: 'Depositing cash into bank or withdrawing cash from bank for office use affects both Cash and Bank accounts simultaneously, creating a Contra Entry.'
              }
            ]
          },
          {
            id: 'c11-acc-ch5',
            chapterNumber: 5,
            title: 'Bank Reconciliation Statement (BRS)',
            nepHighlights: 'Causes of difference between Cash Book and Passbook balance; BRS preparation.',
            summaryTextbook: 'Covers reasons for discrepancy between Cash Book bank balance and Bank Passbook balance (timing differences & errors), and preparation of BRS starting from Cash Book/Passbook balances or overdrafts.',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keac105.pdf',
            officialBookCode: 'keac1',
            exerciseSolutions: [
              {
                id: 'c11-acc-ch5-q1',
                questionNo: 'Exercise 5.1 Q1',
                questionText: 'Prepare a Bank Reconciliation Statement (BRS) of M/s Dynamic Traders as on 31st March from the following information:\n1. Balance as per Cash Book (Dr. Favourable) ₹45,000.\n2. Cheques issued to creditors amounting to ₹12,000 were not presented for payment until 5th April.\n3. Cheques deposited into bank of ₹9,000 were cleared and credited by bank only on 4th April.\n4. Direct deposit made by a customer into our bank account ₹6,500 not recorded in Cash Book.\n5. Bank charges debited by bank ₹350 not entered in Cash Book.\n6. Interest on investments collected by bank ₹2,200 not recorded in Cash Book.\n7. Insurance premium of ₹1,800 paid directly by bank as per standing instructions not entered in Cash Book.',
                difficulty: 'Hard',
                type: 'Exercise',
                givenData: 'Cash Book Debit Balance = ₹45,000 with 6 reconciling timing differences.',
                formula: 'BRS: Starting from Cash Book (Dr.) -> Add items increasing Passbook, Deduct items decreasing Passbook',
                stepByStepSolution: [
                  'Step 1: Start with Favourable Balance as per Cash Book = ₹45,000.',
                  'Step 2: Additions (+):\n  (a) Cheques issued but not presented -> +₹12,000\n  (b) Direct deposit by customer -> +₹6,500\n  (c) Interest collected by bank -> +₹2,200\n  Total Additions = +₹20,700. Subtotal = ₹45,000 + ₹20,700 = ₹65,700.',
                  'Step 3: Deductions (-):\n  (a) Cheques deposited but not cleared -> -₹9,000\n  (b) Bank charges debited by bank -> -₹350\n  (c) Insurance premium paid by standing order -> -₹1,800\n  Total Deductions = -₹11,150.',
                  'Step 4: Balance as per Bank Passbook = ₹65,700 - ₹11,150 = ₹54,550 (Credit / Favourable Balance).'
                ],
                finalAnswer: 'Balance as per Bank Passbook (Cr. Favourable) = ₹54,550.',
                keyTakeaway: 'BRS is not a ledger account but a memorandum statement prepared periodically to reconcile timing differences.',
                nepCompetencyNote: 'Commercial banking reconciliation and internal cash audit verification.'
              },
              {
                id: 'c11-acc-ch5-q2',
                questionNo: 'Exercise 5.1 Q2',
                questionText: 'Prepare BRS starting from Overdraft (Credit / Unfavourable Balance) as per Cash Book ₹20,000 as on 30th June:\n(i) Cheques issued ₹8,000 of which cheques of ₹3,000 were presented.\n(ii) Cheques deposited ₹10,000 of which cheques of ₹4,000 were collected.\n(iii) Bank debited interest on overdraft ₹800.\n(iv) A customer cheque of ₹2,500 deposited was dishonoured, advice received on 2nd July.',
                difficulty: 'Hard',
                type: 'Exercise',
                givenData: 'Cash Book Overdraft (Cr.) = ₹20,000.',
                formula: 'Under Overdraft method (Plus/Minus format): Overdraft in Minus column; additions in Plus, deductions in Minus.',
                stepByStepSolution: [
                  'Step 1: Starting Overdraft as per Cash Book = (-) ₹20,000.',
                  'Step 2: Item (i) -> Cheques issued but not presented = ₹8,000 - ₹3,000 = ₹5,000 (+) [Increases passbook balance relative to cash book].',
                  'Step 3: Item (ii) -> Cheques deposited but not cleared = ₹10,000 - ₹4,000 = ₹6,000 (-) [Decreases passbook balance relative to cash book].',
                  'Step 4: Item (iii) -> Interest on overdraft debited by bank = ₹800 (-).',
                  'Step 5: Item (iv) -> Cheque dishonoured debited by bank = ₹2,500 (-).',
                  'Step 6: Net calculation -> Plus total = ₹5,000 | Minus total = ₹20,000 + ₹6,000 + ₹800 + ₹2,500 = ₹29,300.\nDifference = ₹29,300 - ₹5,000 = ₹24,300 (Overdraft as per Bank Passbook).'
                ],
                finalAnswer: 'Overdraft (Debit Balance) as per Bank Passbook = ₹24,300.',
                keyTakeaway: 'In Passbook, a Debit balance represents an Overdraft (liability to bank), whereas a Credit balance represents Favourable deposits.',
                nepCompetencyNote: 'Treasury risk management and overdraft facility monitoring.'
              }
            ],
            competencyQuestions: [
              {
                id: 'c11-acc-ch5-cbq1',
                questionNo: 'NEP Case Study CBQ 1',
                questionText: 'An accountant prepares BRS and adjusts the Cash Book before drafting final accounts. Why is it mandatory to prepare an "Amended Cash Book" for errors and omissions before preparing the final Balance Sheet at the close of financial year?',
                difficulty: 'Medium',
                type: 'Competency',
                givenData: 'BRS timing differences vs genuine Cash Book omissions (bank charges, direct credits).',
                formula: 'Amended Cash Book records unrecorded genuine transactions prior to BRS reconciliation.',
                stepByStepSolution: [
                  'Step 1: Timing differences (unpresented cheques, uncleared cheques) resolve naturally with time and do not require journal entries in the Cash Book.',
                  'Step 2: Omissions and errors (bank interest, bank charges, direct deposits by clients, dishonoured cheques) are actual financial events known only upon receiving the bank statement.',
                  'Step 3: If an Amended Cash Book is not prepared, the firm’s final accounts will show incorrect cash/bank balances and omit legitimate expenses/incomes, violating the True and Fair View under GAAP.',
                  'Step 4: After amending the Cash Book, the BRS is prepared ONLY for unpresented and uncleared timing differences.'
                ],
                finalAnswer: 'Preparing an Amended Cash Book ensures that all actual unrecorded incomes, expenses, and dishonours are incorporated into the ledger before closing books for statutory audit.',
                keyTakeaway: 'Only genuine errors and omissions are entered in the Amended Cash Book; timing differences are reconciled solely in BRS.',
                nepCompetencyNote: 'Statutory balance sheet auditing and annual book closure procedure.'
              }
            ],
            quiz: [
              {
                id: 'q1',
                question: 'When starting a Bank Reconciliation Statement with a Debit Balance as per Cash Book, cheques deposited into bank but not yet credited by the bank will be:',
                options: ['Added', 'Deducted', 'Ignored', 'Multiplied by interest rate'],
                correctIndex: 1,
                explanation: 'Depositing a cheque increased the Cash Book balance, but the Bank Passbook has not received the credit yet. To reconcile to the lower Passbook balance, this amount must be deducted.'
              },
              {
                id: 'q2',
                question: 'A Debit balance in the Bank Statement / Passbook indicates:',
                options: ['Favourable balance (Asset)', 'Overdraft / Unfavourable balance (Liability)', 'Zero balance', 'Cash in hand'],
                correctIndex: 1,
                explanation: 'From the bank’s perspective, the customer is a debtor when they have overdrawn; hence a Debit balance in Passbook represents an Overdraft.'
              }
            ]
          },
          {
            id: 'c11-acc-ch6',
            chapterNumber: 6,
            title: 'Trial Balance & Rectification of Errors',
            nepHighlights: 'Preparation of Trial Balance, Types of Errors (Omission, Commission, Principle, Compensating), and Suspense Account.',
            summaryTextbook: 'Explains objectives and preparation of Trial Balance, errors disclosed vs not disclosed by Trial Balance, and two-sided / one-sided error rectification entries before and after preparing Suspense Account.',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keac106.pdf',
            officialBookCode: 'keac1',
            exerciseSolutions: [
              {
                id: 'c11-acc-ch6-q1',
                questionNo: 'Exercise 6.1 Q1',
                questionText: 'Pass Rectification Entries for the following errors identified after the preparation of Trial Balance (using Suspense Account where necessary):\n(i) Credit sale of goods to Mohan ₹7,000 was posted to the credit of his account.\n(ii) Purchase of furniture for ₹15,000 was debited to Purchases Account.\n(iii) Sales return book was overcast by ₹1,000.\n(iv) A payment of ₹4,500 to creditor Suresh was wrongly debited to Ramesh Account.\n(v) Discount allowed ₹500 to a customer was omitted from being posted to Discount Account.',
                difficulty: 'Hard',
                type: 'Exercise',
                givenData: '5 typical accounting errors (one-sided, two-sided, principle, casting).',
                formula: 'Rectification Entry = Reverse the wrong debit/credit + Post the correct debit/credit. For one-sided errors, balance with Suspense Account.',
                stepByStepSolution: [
                  'Step 1: Error (i) -> Mohan A/c was credited instead of debited by ₹7,000. Double the amount to correct debit: Mohan A/c Dr. ₹14,000 | To Suspense A/c ₹14,000.',
                  'Step 2: Error (ii) [Error of Principle] -> Furniture (Asset) debited to Purchases (Revenue Expense). Entry: Furniture A/c Dr. ₹15,000 | To Purchases A/c ₹15,000 (No Suspense A/c needed as both sides balanced).',
                  'Step 3: Error (iii) [One-sided casting error] -> Sales Return has debit balance and is overcast by ₹1,000. Credit Sales Return to reduce: Suspense A/c Dr. ₹1,000 | To Sales Return A/c ₹1,000.',
                  'Step 4: Error (iv) [Posting to wrong personal account] -> Suresh should be debited, Ramesh wrongly debited. Entry: Suresh A/c Dr. ₹4,500 | To Ramesh A/c ₹4,500.',
                  'Step 5: Error (v) [One-sided omission in nominal account] -> Debit Discount Allowed to restore omitted debit: Discount Allowed A/c Dr. ₹500 | To Suspense A/c ₹500.'
                ],
                finalAnswer: 'All 5 errors rectified through dual-aspect journal entries and Suspense Account postings.',
                keyTakeaway: 'Errors of Principle and complete omission do NOT cause disagreement in the Trial Balance.',
                nepCompetencyNote: 'Forensic bookkeeping and rectification auditing.'
              },
              {
                id: 'c11-acc-ch6-q2',
                questionNo: 'Exercise 6.1 Q2',
                questionText: 'Differentiate between Error of Principle and Error of Commission with illustrative examples.',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: 'Classification of accounting errors.',
                formula: 'Error of Principle = Violation of GAAP | Error of Commission = Clerical / Calculation mistake',
                stepByStepSolution: [
                  'Step 1: Error of Principle - Occurs when a fundamental rule of accounting is violated, such as treating a Capital Expenditure as Revenue Expenditure (e.g. wages paid for installation of machinery debited to Wages A/c instead of Machinery A/c).',
                  'Step 2: Error of Commission - Occurs due to clerical negligence, wrong casting, wrong subsidiary book recording, or posting wrong amount to the correct class of accounts (e.g. credit sale of ₹5,400 recorded as ₹4,500 in Sales Book).',
                  'Step 3: Impact on Trial Balance - Errors of Principle never affect the agreement of Trial Balance; Errors of Commission may or may not affect Trial Balance agreement depending on whether they are one-sided or two-sided.'
                ],
                finalAnswer: 'Error of Principle violates accounting fundamentals (Capital vs Revenue); Error of Commission is a clerical/arithmetical error.',
                keyTakeaway: 'Errors of principle distort both the Profit & Loss statement and the Balance Sheet.',
                nepCompetencyNote: 'Accounting quality control and compliance verification.'
              }
            ],
            competencyQuestions: [
              {
                id: 'c11-acc-ch6-cbq1',
                questionNo: 'NEP Case Study CBQ 1',
                questionText: 'An auditor reviews the books of an enterprise where the Trial Balance matched perfectly with total debits of ₹50,00,000 = total credits of ₹50,00,000. Can the auditor certify that the books are 100% free from errors? List 4 major types of errors that escape detection by a matching Trial Balance.',
                difficulty: 'Hard',
                type: 'Competency',
                givenData: 'Trial Balance total debits = Total credits = ₹50,00,000.',
                formula: 'Trial Balance proves ARITHMETICAL accuracy only, not complete correctness.',
                stepByStepSolution: [
                  'Step 1: No. A matching Trial Balance is only prima facie proof of arithmetical accuracy, not conclusive proof of total error-free accounting.',
                  'Step 2: Undisclosed Error 1 - Error of Complete Omission: A transaction completely omitted from both debit and credit (e.g. cash sale of ₹50,000 completely forgotten).',
                  'Step 3: Undisclosed Error 2 - Error of Principle: Violating GAAP (e.g. extension of building debited to Repairs A/c).',
                  'Step 4: Undisclosed Error 3 - Compensating Errors: One error is counterbalanced by an equal and opposite error in another account.',
                  'Step 5: Undisclosed Error 4 - Error of Original Entry: Wrong figure written in the prime book of entry on both debit and credit.'
                ],
                finalAnswer: 'No. A matching Trial Balance proves only arithmetical equality. Complete omission, errors of principle, compensating errors, and errors of original entry escape detection.',
                keyTakeaway: 'Auditors must conduct substantive testing beyond checking Trial Balance equality.',
                nepCompetencyNote: 'Professional skepticism and auditing standards for CA/CPA foundation.'
              }
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Wages paid for the construction of an office building debited to Wages Account is an example of:',
                options: ['Error of Principle', 'Error of Omission', 'Compensating Error', 'Error of Commission'],
                correctIndex: 0,
                explanation: 'Wages for asset construction is a Capital Expenditure that must be added to Building Account. Debiting it to Wages (Revenue Expense) violates the fundamental accounting principle.'
              },
              {
                id: 'q2',
                question: 'When the totals of a Trial Balance do not agree, the difference is temporarily placed in which account until errors are located?',
                options: ['Suspense Account', 'Capital Account', 'Drawings Account', 'Profit & Loss Account'],
                correctIndex: 0,
                explanation: 'A Suspense Account is a temporary ledger account opened to balance the Trial Balance so final accounts can proceed while accountants locate the one-sided errors.'
              }
            ]
          },
          {
            id: 'c11-acc-ch7',
            chapterNumber: 7,
            title: 'Depreciation, Provisions and Reserves',
            nepHighlights: 'Straight Line Method (SLM), Written Down Value Method (WDV), Provision for Depreciation, and Reserves.',
            summaryTextbook: 'Covers concept and causes of depreciation, SLM vs WDV methods of calculation, Asset Account and Provision for Depreciation Account preparation, and Revenue Reserves vs Capital Reserves.',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keac107.pdf',
            officialBookCode: 'keac1',
            exerciseSolutions: [
              {
                id: 'c11-acc-ch7-q1',
                questionNo: 'Exercise 7.1 Q1',
                questionText: 'M/s Sharma & Sons purchased a machine on 1st April 2020 for ₹2,00,000 and spent ₹20,000 on its installation. On 1st October 2021, another machine was purchased for ₹1,00,000. On 1st October 2022, the first machine purchased on 1st April 2020 was sold for ₹1,40,000. Depreciation is charged @ 10% p.a. on the Straight Line Method (SLM). Accounts are closed on 31st March every year. Prepare Machinery Account for 3 years (2020-21, 2021-22, 2022-23).',
                difficulty: 'Hard',
                type: 'Exercise',
                givenData: 'Machine 1 Cost = ₹2,20,000 (purchased 01-Apr-2020, sold 01-Oct-2022 for ₹1,40,000); Machine 2 Cost = ₹1,00,000 (purchased 01-Oct-2021); SLM Rate = 10% p.a.',
                formula: 'Annual Dep (SLM) = Original Cost × Rate | Machine 1 Annual Dep = ₹22,000 | Machine 2 Annual Dep = ₹10,000',
                stepByStepSolution: [
                  'Step 1: Year 2020-21 -> Machine 1 Dep (Full Year) = 10% of ₹2,20,000 = ₹22,000. Balance c/d at 31-Mar-2021 = ₹1,98,000.',
                  'Step 2: Year 2021-22 -> Machine 1 Dep = ₹22,000. Machine 2 purchased on 01-Oct-2021 (6 months dep) = 10% of ₹1,00,000 × (6/12) = ₹5,000. Total Dep = ₹27,000. Balance c/d at 31-Mar-2022: Machine 1 = ₹1,76,000; Machine 2 = ₹95,000. Total = ₹2,71,000.',
                  'Step 3: Year 2022-23 (Sale of Machine 1 on 01-Oct-2022):\n  (a) Dep on Machine 1 for 6 months (01-Apr to 01-Oct) = ₹22,000 × (6/12) = ₹11,000.\n  (b) Book Value of Machine 1 on date of sale = ₹1,76,000 - ₹11,000 = ₹1,65,000.\n  (c) Sale Price = ₹1,40,000. Loss on Sale = ₹1,65,000 - ₹1,40,000 = ₹25,000 (Debited to P&L A/c).',
                  'Step 4: Year 2022-23 Dep on Machine 2 (Full Year) = ₹10,000. Balance c/d of Machine 2 at 31-Mar-2023 = ₹95,000 - ₹10,000 = ₹85,000.'
                ],
                finalAnswer: 'Loss on Sale of Machine 1 = ₹25,000 | Balance of Machinery Account as on 31st March 2023 = ₹85,000.',
                keyTakeaway: 'Under SLM, depreciation is always calculated on the original acquisition cost of the asset throughout its life.',
                nepCompetencyNote: 'Fixed asset management, disposal accounting, and depreciation schedules.'
              },
              {
                id: 'c11-acc-ch7-q2',
                questionNo: 'Exercise 7.1 Q2',
                questionText: 'Distinguish between Provision and Reserve on the basis of: (i) Nature, (ii) Purpose, (iii) Effect on Profit, (iv) Investment outside business, (v) Creation obligation.',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: 'Key distinction between Provisions and Reserves under Companies Act & GAAP.',
                formula: 'Provision = Charge against profit (mandatory) | Reserve = Appropriation of profit (discretionary)',
                stepByStepSolution: [
                  'Step 1: (i) Nature - Provision is an estimated charge to cover a known liability whose exact amount cannot be determined with certainty. Reserve is an appropriation of accumulated profits to strengthen financial position.',
                  'Step 2: (ii) Purpose - Provision is made for specific anticipated losses/depreciation. Reserve is created for general expansion or unforeseen future contingencies.',
                  'Step 3: (iii) Effect on Profit - Provision reduces Net Profit (debited to P&L A/c). Reserve divides already earned Net Profit (debited to P&L Appropriation).',
                  'Step 4: (iv) Investment Outside - Provisions are never invested outside in securities. Reserves can be invested outside the business (Reserve Fund).',
                  'Step 5: (v) Creation Obligation - Provision is mandatory by law even if there is a net loss. Reserve is created only when there is sufficient profit.'
                ],
                finalAnswer: 'Provisions are mandatory charges against profit for known liabilities; Reserves are voluntary appropriations of retained profit for financial strength.',
                keyTakeaway: 'Dividends can only be distributed out of free reserves, never out of provisions.',
                nepCompetencyNote: 'Corporate solvency management and capital reserve structuring.'
              }
            ],
            competencyQuestions: [
              {
                id: 'c11-acc-ch7-cbq1',
                questionNo: 'NEP Case Study CBQ 1',
                questionText: 'Why does the Indian Income Tax Act 1961 recognize the Written Down Value (WDV) method for tax deductions on corporate plant and machinery while disallowing the Straight Line Method (SLM)? Analyze from a taxation and technological obsolescence perspective.',
                difficulty: 'Hard',
                type: 'Competency',
                givenData: 'Income Tax Act Sec 32 and technological depreciation patterns.',
                formula: 'Under WDV: Higher tax shield in early years when repair costs are low; lower tax shield in later years when maintenance costs surge.',
                stepByStepSolution: [
                  'Step 1: Combined Cost Equalization - In early years, asset repair costs are minimal while WDV depreciation is high. In later years, repair costs rise while WDV depreciation declines. The total charge (Depreciation + Repairs) to profit remains nearly constant year-on-year.',
                  'Step 2: Technological Obsolescence - High-tech equipment loses maximum economic value in its initial 2-3 years. WDV enables companies to write off significant value early, shielding cash flows from tax.',
                  'Step 3: Tax Code Standardization - WDV applies to a "Block of Assets", simplifying tax audits without tracking individual scrap values.',
                  'Step 4: Conclusion - WDV incentivizes capital investment and prevents asset overvaluation.'
                ],
                finalAnswer: 'WDV ensures a uniform combined burden of depreciation plus maintenance across the asset life, provides higher early tax shields against technological obsolescence, and matches the statutory block of assets system under Section 32 of the Income Tax Act.',
                keyTakeaway: 'WDV aligns accounting depreciation with true economic obsolescence and cash flow protection.',
                nepCompetencyNote: 'Corporate tax planning and capital budgeting decisions.'
              }
            ],
            quiz: [
              {
                id: 'q1',
                question: 'When a Provision for Depreciation Account is maintained, the Asset Account is always shown in the Balance Sheet at:',
                options: ['Written Down Value', 'Original Acquisition Cost', 'Market Value / Scrap Value', 'Net Realizable Value'],
                correctIndex: 1,
                explanation: 'When a separate Provision for Depreciation Account is kept, annual depreciation is accumulated in the Provision Account, leaving the Asset Account at its original historical cost.'
              },
              {
                id: 'q2',
                question: 'Which of the following is an example of a Capital Reserve?',
                options: ['General Reserve', 'Premium received on Issue of Shares', 'Divisible Dividend Reserve', 'Workmen Compensation Reserve'],
                correctIndex: 1,
                explanation: 'Securities Premium received on share issues arises from capital financing activities and cannot be used for general cash dividend payouts; it is a Capital Reserve.'
              }
            ]
          },
          {
            id: 'c11-acc-ch8',
            chapterNumber: 8,
            title: 'Financial Statements - I (Trading, Profit & Loss A/c & Balance Sheet)',
            nepHighlights: 'Distinction between Capital and Revenue Expenditure, Trading Account, P&L Account, Operating Profit & Balance Sheet.',
            summaryTextbook: 'Covers Capital vs Revenue expenditure, preparation of Trading Account for Gross Profit/Loss, Profit & Loss Account for Net Profit, Operating Profit determination, and marshalling of Balance Sheet (in order of liquidity and permanence).',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keac201.pdf',
            officialBookCode: 'keac2',
            exerciseSolutions: [
              {
                id: 'c11-acc-ch8-q1',
                questionNo: 'Exercise 8.1 Q1',
                questionText: 'From the following information, prepare the Trading Account of M/s Surya Enterprises for the year ended 31st March 2024:\nOpening Stock ₹30,000, Purchases ₹1,80,000, Purchases Return ₹5,000, Sales ₹3,20,000, Sales Return ₹10,000, Carriage Inwards ₹8,000, Freight & Duty ₹6,000, Wages ₹22,000, Factory Power ₹4,000, Closing Stock ₹45,000.\nCalculate Gross Profit and Cost of Goods Sold (COGS).',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: 'Direct manufacturing & trade balances for Trading Account.',
                formula: 'COGS = Opening Stock + Net Purchases + Direct Expenses - Closing Stock | Gross Profit = Net Sales - COGS',
                stepByStepSolution: [
                  'Step 1: Calculate Net Sales = Sales (₹3,20,000) - Sales Return (₹10,000) = ₹3,10,000.',
                  'Step 2: Calculate Net Purchases = Purchases (₹1,80,000) - Purchases Return (₹5,000) = ₹1,75,000.',
                  'Step 3: Total Direct Expenses = Carriage Inwards (₹8,000) + Freight & Duty (₹6,000) + Wages (₹22,000) + Factory Power (₹4,000) = ₹40,000.',
                  'Step 4: COGS = Opening Stock (₹30,000) + Net Purchases (₹1,75,000) + Direct Expenses (₹40,000) - Closing Stock (₹45,000) = ₹2,00,000.',
                  'Step 5: Gross Profit = Net Sales (₹3,10,000) - COGS (₹2,00,000) = ₹1,10,000.'
                ],
                finalAnswer: 'Gross Profit = ₹1,10,000 | Cost of Goods Sold (COGS) = ₹2,00,000.',
                keyTakeaway: 'Only direct costs incurred to bring goods to saleable condition/location enter the Trading Account.',
                nepCompetencyNote: 'Cost of goods sold computation and operational profit margins.'
              },
              {
                id: 'c11-acc-ch8-q2',
                questionNo: 'Exercise 8.1 Q2',
                questionText: 'Classify each of the following into Capital Expenditure, Revenue Expenditure, or Deferred Revenue Expenditure with reasons:\n(i) ₹50,000 spent on overhaul of a second-hand machine before putting it to use.\n(ii) ₹10,000 spent on annual painting and whitewashing of the factory building.\n(iii) ₹2,00,000 spent on launching a nationwide advertising campaign for a new product.\n(iv) Legal expenses of ₹15,000 incurred to defend a title lawsuit on existing land.',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: '4 business outlays requiring economic classification.',
                formula: 'Capital = Increases earning capacity / life of asset | Revenue = Maintains existing earning capacity | Deferred Revenue = Heavy revenue expense yielding multi-year benefits',
                stepByStepSolution: [
                  'Step 1: (i) Machine overhaul before use -> Capital Expenditure (essential to make the capital asset functional, increases future earning capacity).',
                  'Step 2: (ii) Annual whitewashing -> Revenue Expenditure (routine maintenance expense to preserve asset in working condition).',
                  'Step 3: (iii) Nationwide product launch advertising -> Deferred Revenue Expenditure (heavy promotional outlay whose benefit accrues over 3-5 future years).',
                  'Step 4: (iv) Legal defense of land title -> Revenue Expenditure (incurred to maintain and defend existing property rights, does not add any new asset value).'
                ],
                finalAnswer: '(i) Capital Expenditure, (ii) Revenue Expenditure, (iii) Deferred Revenue Expenditure, (iv) Revenue Expenditure.',
                keyTakeaway: 'All initial expenses necessary to put a fixed asset into working condition are capitalized.',
                nepCompetencyNote: 'Capital budgeting vs revenue accounting distinction under GAAP.'
              }
            ],
            competencyQuestions: [
              {
                id: 'c11-acc-ch8-cbq1',
                questionNo: 'NEP Case Study CBQ 1',
                questionText: 'A corporate CFO presents an Operating Profit of ₹8,00,000 and a Net Profit of ₹12,00,000. The board of directors notes that non-operating income of ₹5,00,000 came from the sale of an old commercial plot. Which metric (Operating Profit or Net Profit) provides a more reliable assessment of the company’s ongoing core business health? Justify.',
                difficulty: 'Hard',
                type: 'Competency',
                givenData: 'Operating Profit = ₹8,00,000; Net Profit = ₹12,00,000; One-time land sale gain = ₹5,00,000.',
                formula: 'Operating Profit = Gross Profit - Operating Expenses | Net Profit = Operating Profit + Non-Operating Incomes - Non-Operating Expenses',
                stepByStepSolution: [
                  'Step 1: Operating Profit measures the profitability derived purely from the company’s core commercial activities (production, sales, administration).',
                  'Step 2: Net Profit includes extraordinary, one-off, non-recurring items such as profit on sale of fixed assets or winning a legal lawsuit.',
                  'Step 3: The ₹5,00,000 gain on land is a non-recurring capital event that cannot be duplicated in regular operational years.',
                  'Step 4: Therefore, Operating Profit (₹8,00,000) is the superior indicator of sustainable business performance, core cash generation, and executive operational efficiency.'
                ],
                finalAnswer: 'Operating Profit is the more reliable metric because it isolates recurring operational performance from abnormal, one-time windfalls like fixed asset sales.',
                keyTakeaway: 'Core operational viability must always be evaluated using Operating Profit rather than bottom-line Net Profit inflated by non-operating windfalls.',
                nepCompetencyNote: 'Financial analysis, investor valuation, and corporate earnings quality assessment.'
              }
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Custom duty paid on the import of raw materials is debited to which account?',
                options: ['Profit & Loss Account', 'Trading Account', 'Balance Sheet', 'Custom Duty Asset Account'],
                correctIndex: 1,
                explanation: 'Custom duty on raw materials is a direct acquisition cost of inventory and is debited to Trading Account as part of Cost of Goods Sold.'
              },
              {
                id: 'q2',
                question: 'The arrangement of assets and liabilities in the Balance Sheet in a specific sequence (liquidity or permanence) is known as:',
                options: ['Grouping', 'Marshalling', 'Balancing', 'Posting'],
                correctIndex: 1,
                explanation: 'Marshalling refers to the systematic presentation of assets and liabilities in the Balance Sheet either in the order of liquidity or in the order of permanence.'
              }
            ]
          },
          {
            id: 'c11-acc-ch9',
            chapterNumber: 9,
            title: 'Financial Statements - II (Adjustments in Financial Statements)',
            nepHighlights: 'Trading Account, Profit & Loss Account, Balance Sheet, and Adjustments (Closing Stock, Outstanding/Prepaid, Bad Debts, Depreciation).',
            summaryTextbook: 'Covers objective of final accounts with adjustments, Gross Profit calculation via Trading Account, Net Profit via P&L Account, and preparation of Balance Sheet with adjustments for Closing Stock, Outstanding/Prepaid expenses, Accrued Income, Provision for Doubtful Debts, and Manager’s Commission.',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keac202.pdf',
            officialBookCode: 'keac2',
            exerciseSolutions: [
              {
                id: 'c11-acc-ch9-q1',
                questionNo: 'Exercise 9.1 Q1',
                questionText: 'From the following Trial Balance of M/s Aniket Traders as on 31st March 2023, prepare Trading and Profit & Loss Account for the year ended 31st March 2023 and a Balance Sheet as on that date:\nDebit Balances: Opening Stock ₹40,000, Purchases ₹1,60,000, Wages ₹25,000, Carriage Inward ₹5,000, Salaries ₹30,000, Rent ₹12,000, Sundry Debtors ₹80,000, Plant & Machinery ₹1,00,000, Cash at Bank ₹28,000, Drawings ₹15,000.\nCredit Balances: Sales ₹3,00,000, Sundry Creditors ₹45,000, Capital ₹1,50,000.\nAdjustments:\n1. Closing Stock valued at ₹50,000.\n2. Outstanding Wages ₹3,000, Prepaid Rent ₹2,000.\n3. Depreciate Plant & Machinery @ 10% p.a.\n4. Create a Provision for Doubtful Debts @ 5% on Debtors.',
                difficulty: 'Hard',
                type: 'Exercise',
                givenData: 'Complete Trial Balance with 4 vital balance sheet adjustments.',
                formula: 'Gross Profit = Sales + Closing Stock - (Opening Stock + Net Purchases + Direct Expenses) | Net Profit = Gross Profit + Indirect Incomes - Indirect Expenses',
                stepByStepSolution: [
                  'Step 1: Trading Account:\n  - Debit: Opening Stock ₹40,000, Purchases ₹1,60,000, Wages (₹25,000 + ₹3,000 O/s = ₹28,000), Carriage Inward ₹5,000. Total Debits = ₹2,33,000.\n  - Credit: Sales ₹3,00,000, Closing Stock ₹50,000. Total Credits = ₹3,50,000.\n  - Gross Profit c/d = ₹3,50,000 - ₹2,33,000 = ₹1,17,000.',
                  'Step 2: Profit & Loss Account:\n  - Credit: Gross Profit b/d = ₹1,17,000.\n  - Debit: Salaries ₹30,000, Rent (₹12,000 - ₹2,000 Prepaid = ₹10,000), Dep on Machinery (10% of ₹1,00,000 = ₹10,000), Provision for Doubtful Debts (5% of ₹80,000 = ₹4,000). Total Indirect Expenses = ₹54,000.\n  - Net Profit transferred to Capital = ₹1,17,000 - ₹54,000 = ₹63,000.',
                  'Step 3: Balance Sheet as on 31st March 2023:\n  - Liabilities: Capital (Opening ₹1,50,000 + Net Profit ₹63,000 - Drawings ₹15,000 = ₹1,98,000) + Sundry Creditors ₹45,000 + Outstanding Wages ₹3,000. Total Liabilities = ₹2,46,000.\n  - Assets: Plant & Machinery (₹1,00,000 - ₹10,000 Dep = ₹90,000) + Sundry Debtors (₹80,000 - ₹4,000 Provision = ₹76,000) + Closing Stock ₹50,000 + Cash at Bank ₹28,000 + Prepaid Rent ₹2,000. Total Assets = ₹2,46,000.'
                ],
                finalAnswer: 'Gross Profit = ₹1,17,000 | Net Profit = ₹63,000 | Balance Sheet Total = ₹2,46,000 (Both sides equal).',
                keyTakeaway: 'Adjustments outside the trial balance have a double effect: one in Trading/P&L Account and one in the Balance Sheet.',
                nepCompetencyNote: 'Annual financial statement preparation and solvency reporting.'
              },
              {
                id: 'c11-acc-ch9-q2',
                questionNo: 'Exercise 9.1 Q2',
                questionText: 'Explain the calculation of Manager’s Commission: (i) Before charging such commission, and (ii) After charging such commission, with mathematical formulas and an example of Net Profit = ₹1,10,000 at 10% commission.',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: 'Net Profit before commission = ₹1,10,000; Commission Rate = 10%.',
                formula: 'Before: Commission = Net Profit × (Rate / 100) | After: Commission = Net Profit × [Rate / (100 + Rate)]',
                stepByStepSolution: [
                  'Step 1: Case (i) Before charging commission -> Commission = ₹1,10,000 × (10 / 100) = ₹11,000. Net profit after commission = ₹99,000.',
                  'Step 2: Case (ii) After charging commission -> Commission = ₹1,10,000 × (10 / 110) = ₹10,000. Net profit after commission = ₹1,00,000.',
                  'Step 3: Verification of Case (ii) -> 10% of Net Profit after commission (10% of ₹1,00,000) = ₹10,000. Hence verified!'
                ],
                finalAnswer: 'Commission Before Charging = ₹11,000 | Commission After Charging = ₹10,000.',
                keyTakeaway: 'The "After Charging" formula ensures the commission paid equals the stated percentage of the final residual net profit.',
                nepCompetencyNote: 'Executive compensation modeling and incentive accounting.'
              }
            ],
            competencyQuestions: [
              {
                id: 'c11-acc-ch9-cbq1',
                questionNo: 'NEP Case Study CBQ 1',
                questionText: 'If Closing Stock appears INSIDE the Trial Balance, how does its accounting treatment differ from when it appears as an Adjustment OUTSIDE the Trial Balance? Explain the accounting rationale.',
                difficulty: 'Hard',
                type: 'Competency',
                givenData: 'Closing stock inside Trial Balance vs outside in adjustments.',
                formula: 'Inside TB = Already adjusted in Purchases (Adjusted Purchases) | Outside TB = Requires double entry adjustment',
                stepByStepSolution: [
                  'Step 1: When Closing Stock appears OUTSIDE the Trial Balance: It has not been through the double entry system yet. It must be credited to Trading Account (to reduce cost of goods sold) and debited to Current Assets in the Balance Sheet.',
                  'Step 2: When Closing Stock appears INSIDE the Trial Balance: It means the entry "Closing Stock A/c Dr. To Purchases A/c" has ALREADY been passed in the ledger. The Purchases figure in the trial balance is "Adjusted Purchases" (Cost of Goods Sold).',
                  'Step 3: In this case, Closing Stock is NOT shown in the Trading Account; it is shown ONLY on the Asset side of the Balance Sheet.'
                ],
                finalAnswer: 'Closing Stock inside Trial Balance is shown ONLY as an Asset in the Balance Sheet because it is already adjusted against Purchases. Closing Stock outside Trial Balance affects both Trading Account (Credit) and Balance Sheet (Assets).',
                keyTakeaway: 'Items inside the Trial Balance require single posting; adjustments outside require dual posting.',
                nepCompetencyNote: 'Advanced financial reporting and corporate audit preparation.'
              }
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Which of the following is a Direct Expense debited to the Trading Account?',
                options: ['Carriage Outward', 'Carriage Inward', 'Salaries to office staff', 'Audit Fees'],
                correctIndex: 1,
                explanation: 'Carriage Inward is freight paid on bringing raw materials/goods into the factory/shop and is a Direct Expense debited to Trading Account. Carriage Outward is a selling expense debited to P&L Account.'
              },
              {
                id: 'q2',
                question: 'Net Profit is calculated by preparing:',
                options: ['Trading Account', 'Profit & Loss Account', 'Balance Sheet', 'Trial Balance'],
                correctIndex: 1,
                explanation: 'The Profit & Loss Account matches Gross Profit and other indirect revenues against operating/administrative/financial expenses to determine Net Profit.'
              }
            ]
          },
          {
            id: 'c11-acc-ch10',
            chapterNumber: 10,
            title: 'Accounts from Incomplete Records (Single Entry System)',
            nepHighlights: 'Statement of Affairs method, Conversion to Double Entry, and Profit determination.',
            summaryTextbook: 'Explains features and limitations of incomplete records, Statement of Affairs method to ascertain profit/loss, comparison of Opening and Closing Capitals adjusted for drawings and fresh capital.',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keac203.pdf',
            officialBookCode: 'keac2',
            exerciseSolutions: [
              {
                id: 'c11-acc-ch10-q1',
                questionNo: 'Exercise 10.1 Q1',
                questionText: 'Manoj keeps incomplete records. His position as on 1st April 2022 and 31st March 2023 was as follows:\n1st April 2022: Cash in hand ₹5,000, Bank balance ₹20,000, Stock ₹45,000, Debtors ₹30,000, Furniture ₹20,000, Creditors ₹25,000.\n31st March 2023: Cash in hand ₹8,000, Bank balance ₹15,000, Stock ₹60,000, Debtors ₹40,000, Furniture ₹20,000, Creditors ₹30,000.\nDuring the year, Manoj introduced ₹10,000 as additional capital and withdrew ₹2,000 per month for household expenses. Depreciate furniture @ 10% and create provision for doubtful debts @ 5% on closing debtors. Calculate Net Profit or Loss for the year.',
                difficulty: 'Hard',
                type: 'Exercise',
                givenData: 'Opening assets/liabilities, closing assets/liabilities, drawings = ₹2,000 × 12 = ₹24,000, fresh capital = ₹10,000, year-end adjustments.',
                formula: 'Capital = Assets - Liabilities | Adjusted Profit = Closing Capital + Drawings - Fresh Capital - Opening Capital - Expenses/Depreciation',
                stepByStepSolution: [
                  'Step 1: Opening Statement of Affairs (as on 01-Apr-2022):\n  - Total Assets = Cash ₹5,000 + Bank ₹20,000 + Stock ₹45,000 + Debtors ₹30,000 + Furniture ₹20,000 = ₹1,20,000.\n  - Less Creditors = ₹25,000.\n  - Opening Capital = ₹1,20,000 - ₹25,000 = ₹95,000.',
                  'Step 2: Closing Statement of Affairs (as on 31-Mar-2023 before adjustments):\n  - Total Assets = Cash ₹8,000 + Bank ₹15,000 + Stock ₹60,000 + Debtors ₹40,000 + Furniture ₹20,000 = ₹1,43,000.\n  - Less Creditors = ₹30,000.\n  - Closing Capital (Unadjusted) = ₹1,43,000 - ₹30,000 = ₹1,13,000.',
                  'Step 3: Statement of Profit or Loss for the year ended 31st March 2023:\n  - Closing Capital: ₹1,13,000\n  - Add Drawings (₹2,000 × 12): +₹24,000\n  - Subtotal: ₹1,37,000\n  - Less Additional Capital introduced: -₹10,000\n  - Adjusted Closing Capital: ₹1,27,000\n  - Less Opening Capital: -₹95,000\n  - Profit before adjustments: ₹32,000.',
                  'Step 4: Less Year-End Adjustments:\n  - Depreciation on Furniture (10% of ₹20,000) = -₹2,000\n  - Provision for Doubtful Debts (5% of ₹40,000) = -₹2,000\n  - Net Profit for the year = ₹32,000 - ₹4,000 = ₹28,000.'
                ],
                finalAnswer: 'Opening Capital = ₹95,000 | Unadjusted Closing Capital = ₹1,13,000 | Net Profit for the year = ₹28,000.',
                keyTakeaway: 'The Statement of Affairs method deduces profit by comparing beginning and ending net worth adjusted for owner withdrawals and capital additions.',
                nepCompetencyNote: 'Small business auditing and informal sector financial reconciliation.'
              },
              {
                id: 'c11-acc-ch10-q2',
                questionNo: 'Exercise 10.1 Q2',
                questionText: 'Differentiate between a Balance Sheet and a Statement of Affairs on the basis of: (i) Source of data, (ii) Reliability, (iii) Objective, (iv) Trial Balance support.',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: 'Comparative analysis of Double Entry Balance Sheet vs Single Entry Statement of Affairs.',
                formula: 'Balance Sheet = Derived from balanced ledger accounts | Statement of Affairs = Derived from estimates and physical verification',
                stepByStepSolution: [
                  'Step 1: (i) Source of Data - Balance Sheet is prepared strictly from ledger accounts maintained under double entry system. Statement of Affairs is prepared from incomplete records, physical stock counts, and owner estimates.',
                  'Step 2: (ii) Reliability - Balance Sheet is highly reliable and accepted by courts, tax authorities, and banks. Statement of Affairs has low reliability because of unverified missing transactions.',
                  'Step 3: (iii) Objective - Balance Sheet depicts true and fair financial position on a specific date. Statement of Affairs is primarily prepared to discover the missing opening/closing capital figures.',
                  'Step 4: (iv) Trial Balance Support - Balance Sheet is preceded by a verified Trial Balance. Statement of Affairs cannot have a Trial Balance because dual aspects were not recorded.'
                ],
                finalAnswer: 'Balance Sheet is a fully verified double-entry statement of financial health; Statement of Affairs is an estimated balance sheet prepared from incomplete records.',
                keyTakeaway: 'Statement of Affairs is a tool of necessity when complete double entry books are absent.',
                nepCompetencyNote: 'Financial forensic investigation and MSME accounting transformation.'
              }
            ],
            competencyQuestions: [
              {
                id: 'c11-acc-ch10-cbq1',
                questionNo: 'NEP Case Study CBQ 1',
                questionText: 'A neighborhood supermarket merchant maintaining single entry books applies for a ₹20,00,000 MSME expansion loan from a nationalized bank. Why does the bank loan officer reject the loan application until the merchant provides converted Double Entry financial statements with Total Debtors and Total Creditors Accounts? Explain the risks of Single Entry records to lending institutions.',
                difficulty: 'Hard',
                type: 'Competency',
                givenData: 'MSME loan application of ₹20,00,000 based on incomplete single entry records.',
                formula: 'Credit Risk Analysis: Incomplete records obscure cash embezzlement, unrecorded liabilities, and distorted profit figures.',
                stepByStepSolution: [
                  'Step 1: Incomplete records fail to track vital nominal accounts (operating overheads, bad debts, discounts) and unrecorded cash sales, preventing accurate debt-service coverage ratio (DSCR) analysis.',
                  'Step 2: Without Total Debtors and Total Creditors accounts, the bank cannot verify receivables turnover, aged debtor defaults, or supplier payment discipline.',
                  'Step 3: In Single Entry, there is no Trial Balance to detect arithmetic errors, theft, or deliberate capital inflation.',
                  'Step 4: Converting to double entry via Total Debtors/Creditors accounts enables reliable Trading and P&L statements, ensuring the bank’s loan is secured against verified operational cash flows.'
                ],
                finalAnswer: 'Banks require double-entry financial statements to verify true profitability, credit turnover, cash flows, and debt service capacity; single entry records carry high risk of unrecorded liabilities and capital misstatement.',
                keyTakeaway: 'Double entry conversion is mandatory for formal credit access and institutional loan appraisal.',
                nepCompetencyNote: 'MSME banking appraisal, credit rating, and commercial loan compliance.'
              }
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Capital at the beginning of an accounting year under the Single Entry System is determined by preparing:',
                options: ['Opening Statement of Affairs', 'Closing Statement of Affairs', 'Cash Book', 'Total Debtors Account'],
                correctIndex: 0,
                explanation: 'An Opening Statement of Affairs lists assets and liabilities as on the first day of the financial year to find Opening Capital (Assets - Liabilities).'
              },
              {
                id: 'q2',
                question: 'Under the Single Entry System, Net Profit is calculated as:',
                options: ['Closing Capital + Drawings - Additional Capital - Opening Capital', 'Closing Capital - Drawings + Additional Capital - Opening Capital', 'Opening Capital + Closing Capital - Drawings', 'Total Assets - Total Liabilities'],
                correctIndex: 0,
                explanation: 'Drawings represent capital withdrawn during the year (added back) and Additional Capital represents fresh owner funds (subtracted) to determine true operational net profit.'
              }
            ]
          },
          {
            id: 'c11-acc-ch11',
            chapterNumber: 11,
            title: 'Applications of Computers in Accounting & Spreadsheet Software',
            nepHighlights: 'Computerized Accounting Systems (CAS), DBMS, Spreadsheets (Excel/LibreOffice) for Payroll & Financial Modeling.',
            summaryTextbook: 'Introduces components of Computerized Accounting Systems (CAS), comparison between Manual and Electronic Accounting, database design for accounting, Electronic Spreadsheets formulas (SUM, AVERAGE, IF, LOOKUP, PMT), and CAS security & audit trails.',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keac204.pdf',
            officialBookCode: 'keac2',
            exerciseSolutions: [
              {
                id: 'c11-acc-ch11-q1',
                questionNo: 'Exercise 11.1 Q1',
                questionText: 'Explain the fundamental differences between Manual Accounting Systems and Computerized Accounting Systems (CAS) on the parameters of: (i) Speed & Accuracy, (ii) Data Processing, (iii) Real-Time Reporting, (iv) Storage & Security, (v) Audit Trail.',
                difficulty: 'Easy',
                type: 'Exercise',
                givenData: 'Comparative study of Manual vs Computerized Accounting.',
                formula: 'CAS = Hardware + Software + Data + People + Procedures (Automated Ledger Posting & Trial Balance Generation)',
                stepByStepSolution: [
                  'Step 1: (i) Speed & Accuracy - Manual systems are slow and prone to human calculation errors. CAS processes millions of transactions with 100% arithmetic accuracy in microseconds.',
                  'Step 2: (ii) Data Processing - In Manual systems, transactions must be manually journalized, posted to ledgers, and balanced. In CAS, entering a voucher once automatically updates all corresponding ledgers, Trial Balance, and Balance Sheet instantly.',
                  'Step 3: (iii) Real-Time Reporting - CAS generates on-demand real-time financial statements, cash flows, and aged debtors reports at any moment without waiting for financial year-end.',
                  'Step 4: (iv) Storage & Security - Manual records occupy physical space and are vulnerable to physical damage. CAS stores encrypted data in secure cloud/local databases with role-based access control.',
                  'Step 5: (v) Audit Trail - CAS maintains automated logs tracking timestamp, user ID, and IP address for every entry creation, modification, or deletion, enhancing statutory transparency.'
                ],
                finalAnswer: 'CAS eliminates manual posting duplication, ensures instantaneous real-time reporting, provides automated data validation, and enforces encrypted audit trails.',
                keyTakeaway: 'In CAS, only the primary transaction voucher needs to be recorded; all subsequent ledger postings and financial reports are generated automatically.',
                nepCompetencyNote: 'Digital enterprise systems and modern ERP accounting workflow.'
              },
              {
                id: 'c11-acc-ch11-q2',
                questionNo: 'Exercise 11.1 Q2',
                questionText: 'Demonstrate how electronic spreadsheets (e.g. MS Excel) can be utilized to automate a corporate Employee Payroll Sheet with Basic Pay, Dearness Allowance (DA @ 50%), House Rent Allowance (HRA @ 20%), Provident Fund (PF @ 12%), and Net Salary calculation.',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: 'Payroll formulas: Gross Salary = Basic + DA + HRA | Deductions = PF | Net Salary = Gross Salary - Deductions.',
                formula: 'DA = Basic * 0.50 | HRA = Basic * 0.20 | PF = (Basic + DA) * 0.12 | Net Salary = Gross - PF',
                stepByStepSolution: [
                  'Step 1: Spreadsheet Column Setup:\n  - Column A: Employee ID\n  - Column B: Employee Name\n  - Column C: Basic Pay (e.g. cell C2 = ₹50,000)\n  - Column D: DA formula = `=C2*0.50` (Result = ₹25,000)\n  - Column E: HRA formula = `=C2*0.20` (Result = ₹10,000)\n  - Column F: Gross Pay formula = `=SUM(C2:E2)` (Result = ₹85,000)',
                  'Step 2: Deductions & Net Salary:\n  - Column G: PF formula = `=(C2+D2)*0.12` (Result = 12% of ₹75,000 = ₹9,000)\n  - Column H: Net Salary formula = `=F2-G2` (Result = ₹85,000 - ₹9,000 = ₹76,000).',
                  'Step 3: Autofill Feature - Dragging the formula handle down the columns calculates payroll for thousands of employees automatically in seconds.'
                ],
                finalAnswer: 'For Basic Pay ₹50,000: DA = ₹25,000, HRA = ₹10,000, Gross = ₹85,000, PF = ₹9,000, Net Salary = ₹76,000. Automated across all employees via cell formulas.',
                keyTakeaway: 'Spreadsheet formulas enable rapid payroll batch calculations, automated tax deductions, and error-free bank transfer files.',
                nepCompetencyNote: 'Practical payroll automation, financial modeling, and spreadsheet engineering.'
              }
            ],
            competencyQuestions: [
              {
                id: 'c11-acc-ch11-cbq1',
                questionNo: 'NEP Case Study CBQ 1',
                questionText: 'A manufacturing firm migrates from off-the-shelf accounting software (like Tally Basic) to a Customized Enterprise Resource Planning (ERP) suite (like SAP / Oracle Financials). What are the key business triggers that necessitate this migration, and what internal data control risks must the firm manage during the transition?',
                difficulty: 'Hard',
                type: 'Competency',
                givenData: 'Off-the-shelf software vs Customized ERP migration.',
                formula: 'ERP Integration: Real-time synchronization across Supply Chain, Inventory, Production, HR, and Multi-Currency Financials.',
                stepByStepSolution: [
                  'Step 1: Migration Triggers - Off-the-shelf packages cannot handle complex multi-location inventory, automated assembly line costing, multi-currency global transactions, custom workflow approvals, or integrated CRM/SCM pipelines.',
                  'Step 2: Scalability & Customization - An ERP suite allows bespoke database architecture, automated IoT inventory tracking, and seamless cross-departmental data feeds into accounting ledgers.',
                  'Step 3: Control Risks During Transition - (a) Data corruption / loss during legacy data migration, (b) Staff resistance and steep learning curves leading to entry backlogs, (c) Inadequate segregation of duties allowing unauthorized override, (d) System downtime during go-live phase.',
                  'Step 4: Risk Mitigation - Implementing parallel runs (running both old and new systems concurrently for 1-2 quarters), strict data validation scripts, and comprehensive user access matrix governance.'
                ],
                finalAnswer: 'Migration is driven by multi-branch complexity, custom supply-chain workflows, and automated costing; control risks include data migration errors and access privilege overlaps, mitigated through parallel runs and access matrix controls.',
                keyTakeaway: 'ERP systems transform accounting from historical recording to predictive operational intelligence.',
                nepCompetencyNote: 'Enterprise digital architecture, corporate governance, and information systems auditing.'
              }
            ],
            quiz: [
              {
                id: 'q1',
                question: 'Which Excel/Spreadsheet formula calculates the periodic loan repayment amount based on constant payments and a constant interest rate?',
                options: ['=PV()', '=FV()', '=PMT()', '=NPV()'],
                correctIndex: 2,
                explanation: 'The =PMT(rate, nper, pv, [fv], [type]) function calculates the constant periodic payment for a loan based on interest rate, number of periods, and principal present value.'
              },
              {
                id: 'q2',
                question: 'A database software where data is organized into structured tables consisting of rows (records) and columns (attributes) is known as:',
                options: ['Spreadsheet File', 'Relational Database Management System (RDBMS)', 'Flat File System', 'Text Document'],
                correctIndex: 1,
                explanation: 'An RDBMS (like MySQL, PostgreSQL, Oracle) organizes accounting entities into related tables linked by primary and foreign keys.'
              }
            ]
          }
        ]
      },
      {
        id: 'c11-economics-stats',
        name: 'Economics (Statistics & Indian Economic Development)',
        iconName: 'BarChart3',
        color: '#04AA6D',
        description: 'NCERT Textbooks (kest1 & keec1) Rationalized 2026-27: Statistics for Economics and Indian Economic Development.',
        totalChapters: 6,
        coverImageUrl: '/book-covers/class11-economics-stats.jpg',
        chapters: [
          {
            id: 'c11-stats-ch1',
            chapterNumber: 1,
            title: 'Introduction to Economics & Statistics',
            nepHighlights: 'Definition of Economics (Alfred Marshall), Scarcity & Choice, Economic Activities & Functions of Statistics.',
            summaryTextbook: 'Covers ordinary business of life, consumer, seller, producer, employee, employer, scarcity as root of economic problems, alternative uses of resources, 3 divisions (consumption, production, distribution), and qualitative vs quantitative data.',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kest101.pdf',
            officialBookCode: 'kest1',
            exerciseSolutions: [
              {
                id: 'c11-stats-ch1-q1',
                questionNo: 'Exercise 1 Q1(i)',
                questionText: 'Mark the statement as True or False: "Statistics can only deal with quantitative data."',
                difficulty: 'Easy',
                type: 'Exercise',
                givenData: 'Scope of statistics in handling economic data.',
                stepByStepSolution: [
                  'Step 1: In economics, most data are quantitative (measurable in numbers like tonnes of rice, incomes, prices).',
                  'Step 2: However, economics also systematically uses qualitative data (attributes like gender, health status, skill levels).',
                  'Step 3: Hence, the statement that statistics ONLY deals with quantitative data is FALSE.'
                ],
                finalAnswer: 'False. Statistics also uses qualitative information (attributes) stored and analysed systematically.',
                keyTakeaway: 'Statistics processes both quantitative variables and qualitative attributes.',
                nepCompetencyNote: 'Conceptual understanding of statistical attributes vs variables.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-stats-ch2',
            chapterNumber: 2,
            title: 'Collection of Data',
            nepHighlights: 'Primary vs Secondary sources, Questionnaire design rules, Modes of survey, Census vs Sampling & NSSO.',
            summaryTextbook: 'Explains primary data, secondary data, rules for framing questionnaires (no leading questions or double negatives), personal interview, mailing and telephone surveys, pilot surveys, random vs non-random sampling, sampling vs non-sampling errors, Census of India and NSSO (Sarvekshana).',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kest102.pdf',
            officialBookCode: 'kest1',
            exerciseSolutions: [
              {
                id: 'c11-stats-ch2-q1',
                questionNo: 'Exercise 2 Q10',
                questionText: 'Suppose there are 10 students in your class. You want to select three out of them. How many samples are possible?',
                difficulty: 'Medium',
                type: 'Exercise',
                formula: 'Number of Samples = nCr = 10C3 = 10! / (3! * 7!)',
                stepByStepSolution: [
                  'Step 1: Formula for selecting r items out of n without replacement is nCr = n! / (r! * (n-r)!).',
                  'Step 2: 10C3 = (10 × 9 × 8) / (3 × 2 × 1).',
                  'Step 3: (720) / (6) = 120 possible samples.'
                ],
                finalAnswer: '120 distinct samples are possible.',
                keyTakeaway: 'Random sampling can draw 120 different 3-student combinations from 10 students.',
                nepCompetencyNote: 'Mathematical sampling frame fundamentals.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-stats-ch3',
            chapterNumber: 3,
            title: 'Organisation of Data',
            nepHighlights: 'Raw data classification (Spatial, Chronological, Qualitative, Quantitative), Discrete vs Continuous variables, Class intervals & Bivariate tables.',
            summaryTextbook: 'Covers classification of raw data, discrete vs continuous variables, frequency distributions, class marks ((L1+L2)/2), class width, inclusive vs exclusive methods with 0.5 adjustment factor, tally marks, loss of information, frequency array, and bivariate frequency distributions.',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kest103.pdf',
            officialBookCode: 'kest1',
            exerciseSolutions: [
              {
                id: 'c11-stats-ch3-q1',
                questionNo: 'Exercise 3 Q1(i)',
                questionText: 'The class midpoint is equal to: (a) The average of the upper class limit and lower class limit (b) Product (c) Ratio (d) None',
                difficulty: 'Easy',
                type: 'Exercise',
                formula: 'Class Midpoint = (Upper Class Limit + Lower Class Limit) / 2',
                stepByStepSolution: [
                  'Step 1: By statistical definition, class midpoint (class mark) is the middle value of the class interval.',
                  'Step 2: It is calculated as (Upper Limit + Lower Limit) / 2.',
                  'Step 3: Correct alternative is (a).'
                ],
                finalAnswer: '(a) The average of the upper class limit and the lower class limit.',
                keyTakeaway: 'Class mark m = (L1 + L2) / 2 represents the entire class in grouped calculations.',
                nepCompetencyNote: 'Formula mastery for grouped frequency distributions.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-stats-ch4',
            chapterNumber: 4,
            title: 'Presentation of Data',
            nepHighlights: 'Textual, Tabular (8 parts: Stubs, Captions, Body), Geometric diagrams (Bar, Pie Chart) & Frequency diagrams (Histogram for Mode, Ogives for Median, Time Series).',
            summaryTextbook: 'Details textual, tabular and diagrammatic presentations, parts of a table (Table Number, Title, Captions, Stubs, Body, Units, Source, Note), Simple/Multiple/Component bar charts, Pie chart (Central angle = % × 3.6°), Histogram (locates Mode), Frequency polygon/curve, Ogives (intersection locates Median), and Arithmetic line graphs (Time series).',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kest104.pdf',
            officialBookCode: 'kest1',
            exerciseSolutions: [
              {
                id: 'c11-stats-ch4-q1',
                questionNo: 'Exercise 4 Q2',
                questionText: 'Data represented through a histogram can help in finding graphically the: (i) mean (ii) mode (iii) median (iv) all the above',
                difficulty: 'Easy',
                type: 'Exercise',
                stepByStepSolution: [
                  'Step 1: A histogram consists of rectangles whose area is proportional to class frequency.',
                  'Step 2: By drawing diagonal intersecting lines across the top corners of the highest modal bar to the adjacent bars and dropping a perpendicular to the X-axis, the value of the Mode is obtained.',
                  'Step 3: Hence, Histogram graphically locates the Mode (option ii).'
                ],
                finalAnswer: '(ii) Mode.',
                keyTakeaway: 'Histogram gives Mode graphically; Ogives intersection gives Median.',
                nepCompetencyNote: 'Graphical estimation of measures of central tendency.'
              }
            ],
            competencyQuestions: [],
                        quiz: []
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
        id: 'c11-history',
        name: 'History (Themes in World History)',
        iconName: 'Landmark',
        color: '#d97706',
        description: 'Themes in World History (NCERT kehs1 2026-27): Early Societies, Writing & City Life, Roman Empire, Nomadic Empires, The Three Orders, Changing Cultural Traditions, Displacing Indigenous Peoples & Paths to Modernisation.',
        totalChapters: 7,
        coverImageUrl: '/book-covers/class11-history-themes-in-world-history.png',
        chapters: [
          {
            id: 'c11-hist-ch1',
            chapterNumber: 1,
            title: 'Theme 1: Writing and City Life',
            nepHighlights: 'Mesopotamian civilisation, Euphrates irrigation canals, significance of urbanism, division of labour, the Warka Head (Uruk <3000 BCE), Bronze Age metallurgy & cuneiform tablets.',
            summaryTextbook: 'Chapter 1 explores the emergence of the world’s earliest cities and writing in Mesopotamia (modern Iraq). (1) Geography & Agriculture: Southern Mesopotamia is a desert, yet the Euphrates and Tigris deposited fertile silt, and natural overflow channels acted as irrigation canals watering wheat, barley, peas, and lentils, outperforming Roman agriculture. (2) Significance of Urbanism: Cities thrive when economies expand into manufactures, trade, and services, ending self-sufficiency. (3) Division of Labour: Stone seal carvers, bronze smiths, and charcoal gatherers depend on mutual interdependence. (4) The Warka Head: A world-famous white marble sculpture at Uruk (<3000 BCE) with lapis lazuli, shell, and bitumen inlays, illustrating long-distance trade and specialized craftsmanship. (5) Writing & Records: Cuneiform tablets recorded city transactions and administrative distributions.',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kehs101.pdf',
            officialBookCode: 'kehs1',
            exerciseSolutions: [
              {
                id: 'c11-hist-ch1-q1',
                questionNo: 'Q1',
                type: 'Exercise',
                questionText: 'Why do we say that it was NOT natural fertility and high levels of food production that were the causes of early urbanisation?',
                                givenData: 'Agriculture in southern Mesopotamia was the most productive in the ancient world, yet cities required more than rural prosperity.',
                                stepByStepSolution: [
                  '1. Natural fertility and surplus food are necessary prerequisites, but they cannot create a city on their own.',
                  '2. An urban economy becomes viable only when the economic sphere expands beyond food production into crafts, manufactures, trade, metallurgy, and coordinated services.',
                  '3. City populations cease to be self-sufficient and depend on continuous exchange, requiring division of labour, transport over waterways, centralized storage, and administrative command systems with written records.'
                ],
                keyTakeaway: 'Rural food surplus provides the biological foundation, but urbanism is defined by division of labour, trade, manufacture, and administrative coordination.',
                                difficulty: 'Medium',
                finalAnswer: 'Early urbanisation was driven by the emergence of non-food economic sectors (manufactures, trade, crafts), division of labour, transport logistics, and centralized administrative coordination with written records—not merely rural agricultural fertility.',
                nepCompetencyNote: 'Distinguishes between necessary biological conditions and sufficient socio-economic institutions in historical civilisations.'
              },
              {
                id: 'c11-hist-ch1-q2',
                questionNo: 'Q2',
                type: 'Exercise',
                questionText: 'Explain with an example why "division of labour is a mark of urban life".',
                                givenData: 'In ancient Mesopotamian cities, artisans specialized in singular crafts.',
                                stepByStepSolution: [
                  '1. In cities, individuals cease to be self-sufficient and perform specialized tasks, depending entirely on others for tools and raw materials.',
                  '2. The NCERT seal carver specializes in fine carving. He cannot smelt bronze tools himself, nor does he know where to mine colored stones.',
                  '3. The bronze toolmaker does not prospect for copper or tin in distant mountains, and relies on fuel gatherers for charcoal. This dense web of interdependence is the hallmark of urban society.'
                ],
                keyTakeaway: 'Division of labour creates permanent mutual interdependence, linking craftsmen, merchants, miners, and herders in an urban economic web.',
                                difficulty: 'Easy',
                finalAnswer: 'Division of labour creates permanent mutual interdependence where specialized artisans rely continuously on others for tools, materials, and fuel, as illustrated by the stone seal carver who cannot forge bronze tools or prospect for stones.',
                nepCompetencyNote: 'Applies economic concepts of specialization and interdependence to ancient historical societies.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-hist-ch2',
            chapterNumber: 2,
            title: 'Theme 2: An Empire Across Three Continents',
            nepHighlights: 'Roman Empire across Europe, North Africa & Middle East, Mediterranean economy, Pax Romana, slavery and Late Antiquity.',
            summaryTextbook: 'Covers the political, cultural and administrative institutions of the Roman Empire spanning three continents.',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kehs102.pdf',
                        officialBookCode: 'kehs1',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-hist-ch3',
            chapterNumber: 3,
            title: 'Theme 3: Nomadic Empires',
            nepHighlights: 'The Mongols under Genghis Khan, steppe pastoral nomadic confederations, Yasa law code, military organisation & transcontinental trade routes.',
            summaryTextbook: 'Examines how nomadic steppe pastoralists constructed the largest contiguous land empire in world history.',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kehs103.pdf',
                        officialBookCode: 'kehs1',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-hist-ch4',
            chapterNumber: 4,
            title: 'Theme 4: The Three Orders',
            nepHighlights: 'Feudal Western Europe (9th–16th centuries): Clergy, Nobility & Peasantry, manorial system, rise of towns and the crisis of the 14th century.',
            summaryTextbook: 'Socio-economic structures of medieval Western Europe and the transitions leading to early modern institutions.',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kehs104.pdf',
                        officialBookCode: 'kehs1',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-hist-ch5',
            chapterNumber: 5,
            title: 'Theme 5: Changing Cultural Traditions',
            nepHighlights: 'European Renaissance (14th–17th centuries), humanism, universities, printing press, realism in art, scientific revolution and Protestant Reformation.',
            summaryTextbook: 'Intellectual and cultural transformations in Italy and Northern Europe reinterpreting Greco-Roman heritage.',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kehs105.pdf',
                        officialBookCode: 'kehs1',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-hist-ch6',
            chapterNumber: 6,
            title: 'Theme 6: Displacing Indigenous Peoples',
            nepHighlights: 'Colonial settlements in North America and Australia, dispossession of Native Americans and First Nations, treaties and gold rushes.',
            summaryTextbook: 'Historical trajectories of European settler colonies and their impact on indigenous cultures and ecosystems.',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kehs106.pdf',
                        officialBookCode: 'kehs1',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-hist-ch7',
            chapterNumber: 7,
            title: 'Theme 7: Paths to Modernisation',
            nepHighlights: 'Comparative modernization of East Asia: Meiji Restoration, industrialization, militarism and post-war resurgence in Japan; Opium Wars, 1911 Revolution, May Fourth Movement, CCP and Deng Xiaoping reforms in China.',
            summaryTextbook: 'Comparative historical analysis of how Japan and China responded to Western imperial pressures.',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kehs107.pdf',
                        officialBookCode: 'kehs1',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },
      {
        id: 'c11-maths',
        name: 'Mathematics',
        iconName: 'Calculator',
        color: '#4f46e5',
        description: 'Sets, Relations & Functions, Trigonometric Functions, Complex Numbers, Permutations & Combinations, Binomial, Sequences, Calculus & Probability.',
        totalChapters: 14,
        coverImageUrl: '/book-covers/class11-maths.jpg',
        chapters: [
          {
            id: 'c11-m-ch1',
            chapterNumber: 1,
            title: 'Sets',
            officialBookCode: 'kemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kemh101.pdf',
            nepHighlights: 'Representation of Sets, Empty Set, Finite/Infinite Sets, Subsets, Power Set, Universal Set, Venn Diagrams & Operations on Sets.',
            summaryTextbook: 'Covers set theory foundation, unions, intersections, complements, and practical applications in logic and mathematics.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-m-ch2',
            chapterNumber: 2,
            title: 'Relations and Functions',
            officialBookCode: 'kemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kemh102.pdf',
            nepHighlights: 'Cartesian Product of Sets, Relations, Domain, Codomain, Range, and Functions (Polynomial, Rational, Modulus, Signum).',
            summaryTextbook: 'Covers mathematical mapping, relation definitions, graphical representations of real functions, and algebra of functions.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-m-ch3',
            chapterNumber: 3,
            title: 'Trigonometric Functions',
            officialBookCode: 'kemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kemh103.pdf',
            nepHighlights: 'Angles in Radian and Degree measures, Sign of Trigonometric Functions, Sum and Difference identities.',
            summaryTextbook: 'Covers unit circle trigonometry, transformation formulas, multiple/submultiple angles, and trigonometric identities.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-m-ch4',
            chapterNumber: 4,
            title: 'Complex Numbers and Quadratic Equations',
            officialBookCode: 'kemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kemh104.pdf',
            nepHighlights: 'Imaginary unit i, algebraic properties of complex numbers, Argand plane and quadratic equations with negative discriminant.',
            summaryTextbook: 'Covers fundamental theorem of algebra, modulus and conjugate of complex numbers, and solutions in complex number system.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-m-ch5',
            chapterNumber: 5,
            title: 'Linear Inequalities',
            officialBookCode: 'kemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kemh105.pdf',
            nepHighlights: 'Algebraic solutions of linear inequalities in one variable and graphical representation on number line.',
            summaryTextbook: 'Covers properties of inequalities, boundary conditions, and real-world constraint modeling.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-m-ch6',
            chapterNumber: 6,
            title: 'Permutations and Combinations',
            officialBookCode: 'kemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kemh106.pdf',
            nepHighlights: 'Fundamental Principle of Counting, Factorial notation n!, Permutations nPr and Combinations nCr derivations.',
            summaryTextbook: 'Covers counting principles, arrangement of distinct and repeating objects, and selection problems.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-m-ch7',
            chapterNumber: 7,
            title: 'Binomial Theorem',
            officialBookCode: 'kemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kemh107.pdf',
            nepHighlights: 'Pascal’s Triangle, Statement and proof of Binomial Theorem for positive integral indices.',
            summaryTextbook: 'Covers binomial coefficients, expansion properties, general and middle terms in algebraic expansions.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-m-ch8',
            chapterNumber: 8,
            title: 'Sequences and Series',
            officialBookCode: 'kemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kemh108.pdf',
            nepHighlights: 'Geometric Progression (G.P.), general term of a G.P., sum of n terms of a G.P., Geometric Mean (G.M.).',
            summaryTextbook: 'Covers sequences, series, geometric progressions, and relationship between Arithmetic Mean and Geometric Mean.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-m-ch9',
            chapterNumber: 9,
            title: 'Straight Lines',
            officialBookCode: 'kemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kemh109.pdf',
            nepHighlights: 'Slope of a line, various forms of equations of a line (slope-intercept, two-point, intercept), distance of a point from a line.',
            summaryTextbook: 'Covers 2D coordinate geometry, angle between two lines, parallel and perpendicular line conditions, and general equation of a line.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-m-ch10',
            chapterNumber: 10,
            title: 'Conic Sections',
            officialBookCode: 'kemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kemh110.pdf',
            nepHighlights: 'Sections of a cone: Circle, Ellipse, Parabola, Hyperbola, standard equations and properties (eccentricity, latus rectum).',
            summaryTextbook: 'Covers geometric locus derivations, focal properties, and planetary orbit applications of conic sections.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-m-ch11',
            chapterNumber: 11,
            title: 'Introduction to Three Dimensional Geometry',
            officialBookCode: 'kemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kemh111.pdf',
            nepHighlights: 'Coordinate axes and planes in 3D space, coordinates of a point, distance formula between two points, section formula.',
            summaryTextbook: 'Foundation of 3D space geometry, octants, spatial coordinate visualization, and vectors preview.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-m-ch12',
            chapterNumber: 12,
            title: 'Limits and Derivatives',
            officialBookCode: 'kemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kemh112.pdf',
            nepHighlights: 'Intuitive idea of limit, standard limits of algebraic and trigonometric functions, derivative as rate of change, algebra of derivatives.',
            summaryTextbook: 'Core gateway into Calculus: limits evaluation, sandwich theorem, product rule, quotient rule, and basic differentiation.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-m-ch13',
            chapterNumber: 13,
            title: 'Statistics',
            officialBookCode: 'kemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kemh113.pdf',
            nepHighlights: 'Measures of Dispersion: Range, Mean Deviation, Variance and Standard Deviation of ungrouped and grouped data.',
            summaryTextbook: 'Covers data distribution analysis, deviation from mean/median, standard deviation calculation, and analysis of frequency distributions.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-m-ch14',
            chapterNumber: 14,
            title: 'Probability',
            officialBookCode: 'kemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kemh114.pdf',
            nepHighlights: 'Random experiments, sample space, events (mutually exclusive, exhaustive), axiomatic approach to probability.',
            summaryTextbook: 'Modern axiomatic probability theory, addition theorem of probability P(A∪B) = P(A) + P(B) - P(A∩B), and event likelihoods.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },
      {
        id: 'c11-physics',
        name: 'Physics',
        iconName: 'Zap',
        color: '#7c3aed',
        description: 'Units & Measurements, Kinematics, Laws of Motion, Work Energy Power, Gravitation, Thermodynamics, Oscillations & Waves.',
        totalChapters: 14,
        coverImageUrl: '/book-covers/class11-physics.jpg',
        chapters: [
          {
            id: 'c11-p-ch1',
            chapterNumber: 1,
            title: 'Units and Measurements',
            officialBookCode: 'keph1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keph101.pdf',
            nepHighlights: 'SI base and derived units, dimensional analysis, principle of homogeneity, significant figures and error estimation.',
            summaryTextbook: 'Covers measurement systems, dimensional formulas, checking correctness of physical equations, and deduction of physical relations.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-p-ch2',
            chapterNumber: 2,
            title: 'Motion in a Straight Line',
            officialBookCode: 'keph1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keph102.pdf',
            nepHighlights: 'Position, path length and displacement, average velocity and speed, instantaneous velocity, acceleration, kinematic equations by calculus.',
            summaryTextbook: '1D kinematics, position-time and velocity-time graphs, uniform acceleration derivations, and free fall under gravity.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-p-ch3',
            chapterNumber: 3,
            title: 'Motion in a Plane',
            officialBookCode: 'keph1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keph103.pdf',
            nepHighlights: 'Scalar and vector quantities, vector algebra, projectile motion trajectory, range, maximum height, uniform circular motion centripetal acceleration.',
            summaryTextbook: '2D kinematics, resolution of vectors, dot and cross product preview, projectile motion mathematics, and centripetal dynamics.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-p-ch4',
            chapterNumber: 4,
            title: 'Laws of Motion',
            officialBookCode: 'keph1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keph104.pdf',
            nepHighlights: 'Newton’s three laws of motion, momentum conservation, impulse, static and kinetic friction, dynamics of uniform circular motion.',
            summaryTextbook: 'Free body diagrams, banking of curved roads, friction mechanics, equilibrium of concurrent forces, and rocket propulsion principles.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-p-ch5',
            chapterNumber: 5,
            title: 'Work, Energy and Power',
            officialBookCode: 'keph1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keph105.pdf',
            nepHighlights: 'Work-Energy Theorem, kinetic and potential energy, conservation of mechanical energy, conservative vs non-conservative forces, elastic/inelastic collisions in 1D & 2D.',
            summaryTextbook: 'Covers work done by constant and variable forces, spring potential energy, power output, and collision momentum-energy balance.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-p-ch6',
            chapterNumber: 6,
            title: 'System of Particles and Rotational Motion',
            officialBookCode: 'keph1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keph106.pdf',
            nepHighlights: 'Center of mass of a 2-particle system, momentum conservation of center of mass, torque, angular momentum, moment of inertia of basic shapes.',
            summaryTextbook: 'Rotational kinematics and dynamics, equilibrium of rigid bodies, comparison of linear and rotational motions, and angular momentum conservation.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-p-ch7',
            chapterNumber: 7,
            title: 'Gravitation',
            officialBookCode: 'keph1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keph107.pdf',
            nepHighlights: 'Universal Law of Gravitation, Kepler’s laws of planetary motion, acceleration due to gravity variation with altitude/depth, gravitational potential energy, escape speed, orbital speed of satellites.',
            summaryTextbook: 'Newtonian gravitation, planetary orbits, geo-stationary and polar satellites, and weightlessness phenomena.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-p-ch8',
            chapterNumber: 8,
            title: 'Mechanical Properties of Solids',
            officialBookCode: 'keph2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keph201.pdf',
            nepHighlights: 'Stress-strain relationship, Hooke’s law, Young’s modulus, bulk modulus, shear modulus, elastic potential energy stored in a stretched wire.',
            summaryTextbook: 'Elastic behavior of materials, stress-strain curve, yield point, tensile strength, and structural engineering applications.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-p-ch9',
            chapterNumber: 9,
            title: 'Mechanical Properties of Fluids',
            officialBookCode: 'keph2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keph202.pdf',
            nepHighlights: 'Pascal’s law, hydraulic lift, Archimedes’ principle, streamline flow, Bernoulli’s theorem and applications, surface tension, viscosity, Stokes’ law.',
            summaryTextbook: 'Hydrostatics and hydrodynamics, continuity equation, Torricelli’s law, venturi meter, Magnus effect, and capillary rise.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-p-ch10',
            chapterNumber: 10,
            title: 'Thermal Properties of Matter',
            officialBookCode: 'keph2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keph203.pdf',
            nepHighlights: 'Thermal expansion of solids/liquids/gases, specific heat capacity, calorimetry, latent heat, heat transfer (conduction, convection, radiation), Newton’s law of cooling.',
            summaryTextbook: 'Temperature measurement, anomalous expansion of water, phase changes, thermal conductivity, and blackbody radiation laws.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-p-ch11',
            chapterNumber: 11,
            title: 'Thermodynamics',
            officialBookCode: 'keph2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keph204.pdf',
            nepHighlights: 'Zeroth, First, and Second laws of thermodynamics, isothermal, adiabatic, isobaric and isochoric processes, work done in gas expansion.',
            summaryTextbook: 'Thermal equilibrium, internal energy, state variables, cyclic processes, heat engines, and reversible/irreversible processes.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-p-ch12',
            chapterNumber: 12,
            title: 'Kinetic Theory',
            officialBookCode: 'keph2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keph205.pdf',
            nepHighlights: 'Equation of state of a perfect gas, kinetic interpretation of temperature, degrees of freedom, law of equipartition of energy, mean free path.',
            summaryTextbook: 'Molecular model of an ideal gas, pressure derivation P = 1/3 ρ v_rms^2, specific heats of gases, and Avogadro’s number.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-p-ch13',
            chapterNumber: 13,
            title: 'Oscillations',
            officialBookCode: 'keph2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keph206.pdf',
            nepHighlights: 'Periodic motion, Simple Harmonic Motion (SHM) kinematics and dynamics, simple pendulum time period, energy in SHM.',
            summaryTextbook: 'SHM equation of motion, spring-mass oscillations, phase angle, kinetic and potential energy transformations, and resonance.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-p-ch14',
            chapterNumber: 14,
            title: 'Waves',
            officialBookCode: 'keph2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keph207.pdf',
            nepHighlights: 'Transverse and longitudinal waves, speed of wave motion, Newton-Laplace formula, principle of superposition, standing waves, beats.',
            summaryTextbook: 'Progressive waves, reflection of waves, stationary waves in strings and organ pipes, harmonics, and acoustic beat frequencies.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },
      {
        id: 'c11-chemistry',
        name: 'Chemistry',
        iconName: 'FlaskConical',
        color: '#ef4444',
        description: 'Basic Concepts, Atomic Structure, Periodic Classification, Chemical Bonding, Thermodynamics, Equilibrium, Redox & Organic Chemistry.',
        totalChapters: 9,
        coverImageUrl: '/book-covers/class11-chemistry.jpg',
        chapters: [
          {
            id: 'c11-ch-ch1',
            chapterNumber: 1,
            title: 'Some Basic Concepts of Chemistry',
            officialBookCode: 'kech1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kech101.pdf',
            nepHighlights: 'Mole concept, molar mass, empirical and molecular formula, stoichiometry and stoichiometric calculations, limiting reagent.',
            summaryTextbook: 'Nature of matter, laws of chemical combination, Dalton’s atomic theory, atomic and molecular masses, and concentration terms (Molarity, Molality, Mole fraction).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-ch-ch2',
            chapterNumber: 2,
            title: 'Structure of Atom',
            officialBookCode: 'kech1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kech102.pdf',
            nepHighlights: 'Bohr’s model of hydrogen atom, de Broglie relation, Heisenberg uncertainty principle, quantum mechanical model (orbitals, quantum numbers, Aufbau, Hund’s, Pauli).',
            summaryTextbook: 'Discovery of subatomic particles, photoelectric effect, dual behavior of matter and light, shapes of s, p, d orbitals, and electronic configurations of elements.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-ch-ch3',
            chapterNumber: 3,
            title: 'Classification of Elements and Periodicity in Properties',
            officialBookCode: 'kech1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kech103.pdf',
            nepHighlights: 'Modern periodic law and table, periodic trends in properties of elements (atomic radii, ionic radii, ionization enthalpy, electron gain enthalpy, electronegativity).',
            summaryTextbook: 'Genesis of periodic classification, s, p, d, f block electronic configurations, anomalous properties of second period elements, and chemical reactivity trends.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-ch-ch4',
            chapterNumber: 4,
            title: 'Chemical Bonding and Molecular Structure',
            officialBookCode: 'kech1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kech104.pdf',
            nepHighlights: 'Lewis dot structures, VSEPR theory for molecular shapes, Valence Bond Theory (VBT), hybridization (sp, sp2, sp3, sp3d), Molecular Orbital Theory (MOT) of homonuclear diatomics, hydrogen bonding.',
            summaryTextbook: 'Ionic vs covalent bonding, dipole moments, resonance structures, bond order and magnetic behavior via MOT, and inter/intra-molecular hydrogen bonding.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-ch-ch5',
            chapterNumber: 5,
            title: 'Chemical Thermodynamics',
            officialBookCode: 'kech1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kech105.pdf',
            nepHighlights: 'Concepts of system and surroundings, first law (internal energy, enthalpy), Hess’s law of constant heat summation, spontaneity, entropy, Gibbs energy change ΔG = ΔH - TΔS.',
            summaryTextbook: 'Extensive and intensive properties, heat capacity, enthalpy of reaction/formation/combustion, second and third laws of thermodynamics, and spontaneity criteria.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-ch-ch6',
            chapterNumber: 6,
            title: 'Equilibrium',
            officialBookCode: 'kech1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kech106.pdf',
            nepHighlights: 'Law of chemical equilibrium, equilibrium constant Kc and Kp, Le Chatelier’s principle, ionic equilibrium (acids, bases, pH scale, buffer solutions, common ion effect, solubility product Ksp).',
            summaryTextbook: 'Dynamic chemical equilibrium, factors affecting equilibrium (concentration, temperature, pressure, catalyst), Arrhenius, Bronsted-Lowry and Lewis acid-base theories, and salt hydrolysis.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-ch-ch7',
            chapterNumber: 7,
            title: 'Redox Reactions',
            officialBookCode: 'kech2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kech201.pdf',
            nepHighlights: 'Concept of oxidation and reduction, oxidation number rules, balancing redox reactions (oxidation number method & ion-electron method), electrochemical cell basics.',
            summaryTextbook: 'Redox reactions as electron transfer reactions, redox couples, electrode processes, and practical applications in battery electrochemistry.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-ch-ch8',
            chapterNumber: 8,
            title: 'Organic Chemistry: Some Basic Principles and Techniques',
            officialBookCode: 'kech2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kech202.pdf',
            nepHighlights: 'IUPAC nomenclature of organic compounds, structural and stereoisomerism, inductive, electromeric, resonance and hyperconjugation effects, homolytic and heterolytic fission, reactive intermediates (carbocations, carbanions, free radicals).',
            summaryTextbook: 'Classification of organic compounds, electronic displacement effects, types of organic reactions (substitution, addition, elimination, rearrangement), and purification methods.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-ch-ch9',
            chapterNumber: 9,
            title: 'Hydrocarbons',
            officialBookCode: 'kech2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kech203.pdf',
            nepHighlights: 'Alkanes (conformations of ethane, free radical halogenation), Alkenes (geometrical isomerism, Markovnikov’s addition), Alkynes (acidity, addition reactions), Arenes (aromaticity Huckel’s rule, electrophilic aromatic substitution).',
            summaryTextbook: 'Preparation, physical and chemical properties of aliphatic and aromatic hydrocarbons, mechanism of electrophilic addition/substitution, and carcinogenic polycyclic aromatics.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },
      {
        id: 'c11-biology',
        name: 'Biology',
        iconName: 'Dna',
        color: '#10b981',
        description: 'Diversity in Living World, Plant & Animal Anatomy, Cell Structure & Division, Plant Physiology & Human Physiology.',
        totalChapters: 19,
        coverImageUrl: '/book-covers/class11-biology.jpg',
        chapters: [
          {
            id: 'c11-bio-ch1',
            chapterNumber: 1,
            title: 'The Living World',
            officialBookCode: 'kebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebo101.pdf',
            nepHighlights: 'Characteristics of living organisms, biodiversity, binomial nomenclature (Linnaeus), taxonomic categories from species to kingdom.',
            summaryTextbook: 'Covers definition of life, growth, reproduction, metabolism, consciousness, taxonomic hierarchy, and classification principles.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bio-ch2',
            chapterNumber: 2,
            title: 'Biological Classification',
            officialBookCode: 'kebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebo102.pdf',
            nepHighlights: 'Whittaker’s Five Kingdom Classification: Monera, Protista, Fungi, Plantae, Animalia, plus Viruses, Viroids, Prions and Lichens.',
            summaryTextbook: 'Characteristics of bacteria, archaebacteria, cyanobacteria, dinoflagellates, protozoans, fungi reproduction and life cycles.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bio-ch3',
            chapterNumber: 3,
            title: 'Plant Kingdom',
            officialBookCode: 'kebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebo103.pdf',
            nepHighlights: 'Classification of plants into Algae, Bryophytes, Pteridophytes, Gymnosperms and Angiosperms with life cycles.',
            summaryTextbook: 'Pigmentation in algae (Chlorophyceae, Phaeophyceae, Rhodophyceae), alternation of generations, vascular cryptogams, and naked-seeded gymnosperms.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bio-ch4',
            chapterNumber: 4,
            title: 'Animal Kingdom',
            officialBookCode: 'kebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebo104.pdf',
            nepHighlights: 'Levels of organisation, symmetry, coelom, non-chordata phyla (Porifera to Echinodermata) and Chordata classification (Cyclostomata to Mammalia).',
            summaryTextbook: 'Diagnostic anatomical features of major animal phyla, body plans, segmentation, notochord development, and vertebrate classes.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bio-ch5',
            chapterNumber: 5,
            title: 'Morphology of Flowering Plants',
            officialBookCode: 'kebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebo105.pdf',
            nepHighlights: 'Morphological modifications of root, stem, leaf; inflorescence (racemose/cymose), flower structure, fruit, seed, and floral families (Solanaceae).',
            summaryTextbook: 'Vegetative and reproductive structures of angiosperms, floral formula, placentation types, and economic importance of plant families.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bio-ch6',
            chapterNumber: 6,
            title: 'Anatomy of Flowering Plants',
            officialBookCode: 'kebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebo106.pdf',
            nepHighlights: 'Meristematic and permanent tissues (parenchyma, collenchyma, sclerenchyma, xylem, phloem), tissue systems, internal anatomy of dicot and monocot roots, stems, leaves.',
            summaryTextbook: 'Microscopic plant histology, vascular bundle arrangements, stomatal apparatus, and structural tissue specialization.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bio-ch7',
            chapterNumber: 7,
            title: 'Structural Organisation in Animals',
            officialBookCode: 'kebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebo107.pdf',
            nepHighlights: 'Animal tissues (Epithelial, Connective, Muscular, Neural) and organ morphology and anatomy of Frog (Rana tigrina).',
            summaryTextbook: 'Histology of animal tissues, digestive, circulatory, respiratory, nervous, and reproductive systems of frog.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bio-ch8',
            chapterNumber: 8,
            title: 'Cell: The Unit of Life',
            officialBookCode: 'kebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebo108.pdf',
            nepHighlights: 'Cell theory, prokaryotic vs eukaryotic cells, fluid mosaic model of plasma membrane, cell organelles (nucleus, ER, Golgi, lysosomes, mitochondria, plastids, ribosomes, cytoskeleton).',
            summaryTextbook: 'Ultrastructure of plant and animal cells, endomembrane system, semiautonomous organelles, chromosome morphology, and centromere types.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bio-ch9',
            chapterNumber: 9,
            title: 'Biomolecules',
            officialBookCode: 'kebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebo109.pdf',
            nepHighlights: 'Chemical constituents of living cells, biomacromolecules: carbohydrates, proteins, lipids, nucleic acids, dynamic state of body constituents, enzyme action and kinetics.',
            summaryTextbook: 'Primary and secondary metabolites, amino acid peptide bonds, DNA/RNA nucleotide structure, protein primary/secondary/tertiary structures, and enzyme inhibition.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bio-ch10',
            chapterNumber: 10,
            title: 'Cell Cycle and Cell Division',
            officialBookCode: 'kebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebo110.pdf',
            nepHighlights: 'Phases of cell cycle (Interphase G1, S, G2 and M Phase), Mitosis (karyokinesis & cytokinesis), Meiosis I and II, crossing over and significance.',
            summaryTextbook: 'Equational vs reductional cell division, spindle apparatus, prophase I substages (leptotene to diakinesis), chiasmata formation, and genetic variation.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bio-ch11',
            chapterNumber: 11,
            title: 'Photosynthesis in Higher Plants',
            officialBookCode: 'kebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebo111.pdf',
            nepHighlights: 'Chloroplast pigments, Light reactions (PS I and PS II, cyclic & non-cyclic photophosphorylation), Chemiosmotic hypothesis, Dark reactions (Calvin C3 cycle, Hatch-Slack C4 pathway, photorespiration).',
            summaryTextbook: 'Biochemistry of solar energy capture, ATP/NADPH synthesis, RuBisCO enzyme dual activity, Kranz anatomy, and Blackman’s law of limiting factors.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bio-ch12',
            chapterNumber: 12,
            title: 'Respiration in Plants',
            officialBookCode: 'kebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebo112.pdf',
            nepHighlights: 'Cellular respiration, Glycolysis (EMP pathway), fermentation, TCA / Krebs cycle, Electron Transport System (ETS), oxidative phosphorylation, respiratory quotient (RQ).',
            summaryTextbook: 'Aerobic vs anaerobic catabolism of glucose, ATP accounting yield (36-38 ATP), amphibolic pathway nature of respiration, and substrate RQ values.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bio-ch13',
            chapterNumber: 13,
            title: 'Plant Growth and Development',
            officialBookCode: 'kebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebo113.pdf',
            nepHighlights: 'Phases of plant growth, differentiation, dedifferentiation, redifferentiation, plant growth regulators (Auxins, Gibberellins, Cytokinins, Ethylene, Abscisic Acid).',
            summaryTextbook: 'Sigmoid growth curve, plasticity in plants, discovery and physiological effects of phytohormones in agriculture and horticulture.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bio-ch14',
            chapterNumber: 14,
            title: 'Breathing and Exchange of Gases',
            officialBookCode: 'kebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebo114.pdf',
            nepHighlights: 'Respiratory organs in animals, human respiratory system, mechanism of breathing, respiratory volumes and capacities (TV, IRV, ERV, RV, VC), gas transport (O2, CO2), respiratory disorders.',
            summaryTextbook: 'Alveolar gas diffusion, partial pressures of oxygen and carbon dioxide, oxygen dissociation curve, and disorders like Asthma, Emphysema, and Occupational Lung Disease.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bio-ch15',
            chapterNumber: 15,
            title: 'Body Fluids and Circulation',
            officialBookCode: 'kebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebo115.pdf',
            nepHighlights: 'Composition of blood, blood groups (ABO, Rh), lymph, human circulatory system, cardiac cycle, ECG (P-QRS-T wave), double circulation, regulation of cardiac activity, hypertension.',
            summaryTextbook: 'Cardiac anatomy, pacemaker SAN/AVN, blood clotting cascade, coronary circulation, atherosclerosis, and systemic cardiovascular health.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bio-ch16',
            chapterNumber: 16,
            title: 'Excretory Products and their Elimination',
            officialBookCode: 'kebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebo116.pdf',
            nepHighlights: 'Ammonotelism, ureotelism, uricotelism, human excretory system, nephron histology, urine formation (filtration, reabsorption, secretion), counter current mechanism, RAAS regulation.',
            summaryTextbook: 'Glomerular filtration rate (GFR), Henle’s loop countercurrent multiplier, ADH and aldosterone hormonal feedback, micturition, and hemodialysis.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bio-ch17',
            chapterNumber: 17,
            title: 'Locomotion and Movement',
            officialBookCode: 'kebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebo117.pdf',
            nepHighlights: 'Types of movement, muscle anatomy, sliding filament theory of muscle contraction, skeletal system (axial and appendicular skeleton, 206 bones), joints, disorders.',
            summaryTextbook: 'Actin and myosin cross-bridge cycle, neuromuscular junction, synovial joints classification, and musculoskeletal disorders (Myasthenia gravis, Tetany, Arthritis, Osteoporosis, Gout).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bio-ch18',
            chapterNumber: 18,
            title: 'Neural Control and Coordination',
            officialBookCode: 'kebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebo118.pdf',
            nepHighlights: 'Neuron structure, generation and conduction of nerve impulse (action potential), synaptic transmission (electrical and chemical synapses), central nervous system (forebrain, midbrain, hindbrain).',
            summaryTextbook: 'Resting membrane potential, Na+/K+ pump, neurotransmitters, cerebrum, cerebellum, medulla oblongata functions, and reflex arcs.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bio-ch19',
            chapterNumber: 19,
            title: 'Chemical Coordination and Integration',
            officialBookCode: 'kebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebo119.pdf',
            nepHighlights: 'Endocrine glands and hormones (Pituitary, Thyroid, Parathyroid, Adrenal, Pancreas, Gonads), mechanism of hormone action (peptide vs steroid hormones), endocrine disorders.',
            summaryTextbook: 'Hypothalamic releasing factors, feedback hormonal loops, insulin and glucagon glucose homeostasis, secondary messengers (cAMP), and disorders like Diabetes, Goitre, Dwarfism.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },
      {
        id: 'c11-business-studies',
        name: 'Business Studies',
        iconName: 'Briefcase',
        color: '#d97706',
        description: 'Business Foundation, Forms of Business Organisations, Public Private Global Enterprises, Business Services, Finance, Internal & International Trade.',
        totalChapters: 10,
        coverImageUrl: '/book-covers/class11-business-studies.jpg',
        chapters: [
          {
            id: 'c11-bs-ch1',
            chapterNumber: 1,
            title: 'Business, Trade and Commerce',
            officialBookCode: 'kebs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebs101.pdf',
            nepHighlights: 'History of Trade & Commerce in India (Indigenous Banking, Hundi), concept and characteristics of business, classification (Industry & Commerce), business risk.',
            summaryTextbook: 'Maritime trade routes (Silk Route), role of indigenous bankers, primary/secondary/tertiary industries, trade and auxiliaries to trade (transport, banking, insurance, warehousing, advertising).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bs-ch2',
            chapterNumber: 2,
            title: 'Forms of Business Organisations',
            officialBookCode: 'kebs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebs102.pdf',
            nepHighlights: 'Sole Proprietorship, Joint Hindu Family Business, Partnership (types, registration), Cooperative Societies, Joint Stock Company (Private vs Public, OPC).',
            summaryTextbook: 'Comparative evaluation of business forms, liability criteria, continuity, capital requirements, and choice of enterprise structure.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bs-ch3',
            chapterNumber: 3,
            title: 'Public, Private and Global Enterprises',
            officialBookCode: 'kebs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebs103.pdf',
            nepHighlights: 'Forms of Public Sector Enterprises (Departmental Undertakings, Statutory Corporations, Government Company), changing role of public sector, Global Enterprises (MNCs), Joint Ventures, Public Private Partnership (PPP).',
            summaryTextbook: 'Features, merits and limitations of public corporations, post-1991 disinvestment policy, multinational corporations operations, and infrastructure PPP models.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bs-ch4',
            chapterNumber: 4,
            title: 'Business Services',
            officialBookCode: 'kebs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebs104.pdf',
            nepHighlights: 'Nature of services (5 Is), Banking (commercial banks functions, e-banking, RTGS, NEFT, IMPS), Insurance (principles, life, fire, marine), Postal and telecom services.',
            summaryTextbook: 'Intangibility, inconsistency, inseparability of services, types of bank accounts, digital payments ecosystem, and fundamental insurance principles (Utmost Good Faith, Insurable Interest, Indemnity, Subrogation).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bs-ch5',
            chapterNumber: 5,
            title: 'Emerging Modes of Business',
            officialBookCode: 'kebs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebs105.pdf',
            nepHighlights: 'e-Business concept and scope (B2B, B2C, C2C), benefits and limitations of e-Business, online transactions and payment gateways, security risks, Business Process Outsourcing (BPO).',
            summaryTextbook: 'Digital commerce platforms, electronic data interchange (EDI), cybersecurity protocols, ethical outsourcing, and supply chain digitization.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bs-ch6',
            chapterNumber: 6,
            title: 'Social Responsibilities of Business and Business Ethics',
            officialBookCode: 'kebs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebs106.pdf',
            nepHighlights: 'Concept of Social Responsibility, arguments for and against, responsibility towards stakeholders (shareholders, workers, consumers, government, community), environmental protection, business ethics.',
            summaryTextbook: 'Corporate Social Responsibility (CSR under Companies Act 2013), eco-friendly corporate practices, pollution control, and moral values in corporate governance.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bs-ch7',
            chapterNumber: 7,
            title: 'Sources of Business Finance',
            officialBookCode: 'kebs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebs107.pdf',
            nepHighlights: 'Owner’s Funds (Equity Shares, Preference Shares, Retained Earnings, GDRs, ADRs) vs Borrowed Funds (Debentures, Commercial Banks, Financial Institutions, Trade Credit, Public Deposits, Inter-Corporate Deposits).',
            summaryTextbook: 'Capital requirements (fixed and working capital), merits and limitations of financial instruments, venture capital, and angel investor funding ecosystem.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bs-ch8',
            chapterNumber: 8,
            title: 'Small Business and Enterprises',
            officialBookCode: 'kebs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebs108.pdf',
            nepHighlights: 'Micro, Small and Medium Enterprises (MSMED Act definition by investment & turnover), role of small business in rural India, governmental assistance (NSIC, DIC, NABARD), Startup India scheme, Intellectual Property Rights (IPR).',
            summaryTextbook: 'Entrepreneurship development, rural industrialization, MSME capital incentives, Patents, Trademarks, Copyrights, and startup incubation support.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bs-ch9',
            chapterNumber: 9,
            title: 'Internal Trade',
            officialBookCode: 'kebs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebs109.pdf',
            nepHighlights: 'Wholesale Trade vs Retail Trade, services of wholesalers and retailers, types of retailing (Itinerant retailers, Fixed shop small/large: Departmental Stores, Chain Stores, Mail Order Houses), Goods and Services Tax (GST).',
            summaryTextbook: 'Domestic trade mechanics, retail supply chain intermediaries, consumer cooperatives, supermarkets, and one-nation-one-tax GST implementation.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-bs-ch10',
            chapterNumber: 10,
            title: 'International Business',
            officialBookCode: 'kebs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kebs110.pdf',
            nepHighlights: 'Domestic vs International Business, scope and benefits of export-import trade, export procedure and documents (Letter of Credit, Bill of Lading), import procedure, World Trade Organisation (WTO), IMF and World Bank.',
            summaryTextbook: 'Global business environment, foreign trade policy, customs clearance procedures, EXIM documentation, and international economic institutions.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },
      {
        id: 'c11-computer-science',
        name: 'Computer Science',
        iconName: 'Cpu',
        color: '#06b6d4',
        description: 'Computer System, Encoding Schemes, Emerging Trends, Problem Solving, Python Programming (Functions, Strings, Lists, Tuples, Dictionaries) & Societal Impacts.',
        totalChapters: 11,
        coverImageUrl: '/book-covers/class11-computer-science.jpg',
        chapters: [
          {
            id: 'c11-cs-ch1',
            chapterNumber: 1,
            title: 'Computer System',
            officialBookCode: 'kecs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kecs101.pdf',
            nepHighlights: 'Components of a computer system (CPU, memory, primary & secondary storage), software types (system, application), operating system functions, bus architecture.',
            summaryTextbook: 'Von Neumann computer architecture, RAM, ROM, cache memory, hard disks, SSDs, and system software role.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-cs-ch2',
            chapterNumber: 2,
            title: 'Encoding Schemes and Number System',
            officialBookCode: 'kecs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kecs102.pdf',
            nepHighlights: 'Number systems (Binary, Octal, Decimal, Hexadecimal), base conversions, character encoding standards (ASCII, ISCII, UNICODE UTF-8, UTF-32).',
            summaryTextbook: 'Positional number systems, binary arithmetic, and multi-lingual global character representation via Unicode.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-cs-ch3',
            chapterNumber: 3,
            title: 'Emerging Trends',
            officialBookCode: 'kecs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kecs103.pdf',
            nepHighlights: 'Artificial Intelligence (AI), Machine Learning (ML), Natural Language Processing (NLP), Immersive Experience (AR, VR), Robotics, Big Data, Internet of Things (IoT), Cloud Computing, Grid Computing, Blockchains.',
            summaryTextbook: 'Modern paradigm shifts in computing, cloud service models (IaaS, PaaS, SaaS), smart sensor networks, and decentralized ledger technology.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-cs-ch4',
            chapterNumber: 4,
            title: 'Introduction to Problem Solving',
            officialBookCode: 'kecs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kecs104.pdf',
            nepHighlights: 'Problem solving cycle (analyzing problem, developing algorithm, coding, testing & debugging), representation of algorithms (flowcharts, pseudocode), decomposition.',
            summaryTextbook: 'Computational thinking methodology, step-by-step logic design, flowchart symbols, and algorithmic verification.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-cs-ch5',
            chapterNumber: 5,
            title: 'Getting Started with Python',
            officialBookCode: 'kecs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kecs105.pdf',
            nepHighlights: 'Python basics, interactive vs script mode, tokens (keywords, identifiers, literals, operators, delimiters), data types (int, float, complex, bool, string, list, tuple, dict), variables and type conversion.',
            summaryTextbook: 'Python language features, dynamic typing, input() and print() statements, operators precedence, and expression evaluation.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-cs-ch6',
            chapterNumber: 6,
            title: 'Flow of Control',
            officialBookCode: 'kecs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kecs106.pdf',
            nepHighlights: 'Selection statements (if, if-else, if-elif-else), nested conditionals, iteration statements (for loop with range(), while loop), loop control (break, continue).',
            summaryTextbook: 'Algorithmic branch execution, conditional logic trees, counter and sentinel controlled loops, and pattern printing algorithms.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-cs-ch7',
            chapterNumber: 7,
            title: 'Functions',
            officialBookCode: 'kecs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kecs107.pdf',
            nepHighlights: 'Built-in functions, functions in modules (math, random), user-defined functions def, arguments and parameters (default, positional), return statement, variable scope (local vs global).',
            summaryTextbook: 'Modular programming in Python, code reusability, function call stack frames, and parameter passing mechanisms.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-cs-ch8',
            chapterNumber: 8,
            title: 'Strings',
            officialBookCode: 'kecs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kecs108.pdf',
            nepHighlights: 'String indexing and slicing, immutability of strings, string operators (+, *, in, not in), string methods (len, lower, upper, isalnum, isalpha, isdigit, strip, replace, split, count, find).',
            summaryTextbook: 'Text processing algorithms, string traversal with loops, palindrome checking, and formatted string outputs.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-cs-ch9',
            chapterNumber: 9,
            title: 'Lists',
            officialBookCode: 'kecs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kecs109.pdf',
            nepHighlights: 'List creation, indexing, slicing, mutability of lists, nested lists, list methods (append, extend, insert, pop, remove, clear, index, count, sort, reverse), linear search.',
            summaryTextbook: 'Linear sequence structures, list comprehension, copy vs reference aliasing, and statistical aggregations.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-cs-ch10',
            chapterNumber: 10,
            title: 'Tuples and Dictionaries',
            officialBookCode: 'kecs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kecs110.pdf',
            nepHighlights: 'Tuples (creation, immutability, operations, methods), Dictionaries (key-value pairs, mutability, methods: keys, values, items, get, update, pop), frequency table algorithms.',
            summaryTextbook: 'Associative array structures, hash mapping principles, immutable records with tuples, and dictionary lookups.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-cs-ch11',
            chapterNumber: 11,
            title: 'Societal Impacts',
            officialBookCode: 'kecs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kecs111.pdf',
            nepHighlights: 'Digital footprint, digital society and netizen etiquette, data protection and privacy, cybercrime (phishing, spoofing, hacking, cyberbullying), IT Act 2000, e-Waste management, green computing.',
            summaryTextbook: 'Cyber safety guidelines, intellectual property rights, open-source software licensing (GPL, Creative Commons), and responsible digital citizenship.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },
      {
        id: 'c11-english',
        name: 'English Core (Hornbill & Snapshots)',
        iconName: 'BookOpen',
        color: '#f59e0b',
        description: 'Hornbill Prose & Poetry (The Portrait of a Lady, We’re Not Afraid to Die, Discovering Tut, Silk Road) & Snapshots Supplementary Reader.',
        totalChapters: 13,
        coverImageUrl: '/book-covers/class11-english-hornbill.jpg',
        chapters: [
          {
            id: 'c11-eng-h1',
            chapterNumber: 1,
            title: 'The Portrait of a Lady (Khushwant Singh) & A Photograph',
            officialBookCode: 'kehb1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kehb101.pdf',
            nepHighlights: 'Khushwant Singh’s tender memoir of his grandmother in rural Punjab and city life; Shirley Toulson nostalgic poem on her mother’s childhood photograph.',
            summaryTextbook: 'Explores filial bonds across three generations, quiet spirituality, sparrow feeding, and coping with bereavement.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-eng-h2',
            chapterNumber: 2,
            title: 'We’re Not Afraid to Die... if We Can All Be Together',
            officialBookCode: 'kehb1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kehb102.pdf',
            nepHighlights: 'Gordon Cook & Alan East real-life maritime survival story aboard Wavewalker in the stormy southern Indian Ocean.',
            summaryTextbook: 'Exemplifies human grit, seamanship, collective family courage, and landing at Ile Amsterdam island.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-eng-h3',
            chapterNumber: 3,
            title: 'Discovering Tut: The Saga Continues (A.R. Williams) & The Laburnum Top',
            officialBookCode: 'kehb1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kehb103.pdf',
            nepHighlights: 'Forensic CT scan of Egyptian boy pharaoh Tutankhamun’s mummy; Ted Hughes poem of goldfinch bringing life to quiet laburnum tree.',
            summaryTextbook: 'Egyptology archaeology, modern non-invasive medical imaging, and poetic symbolism of maternal energy.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-eng-h4',
            chapterNumber: 4,
            title: 'The Voice of the Rain (Walt Whitman) & Childhood (Markus Natten)',
            officialBookCode: 'kehb1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kehb104.pdf',
            nepHighlights: 'Walt Whitman lyric poem of rain describing cyclical water cycle; Markus Natten introspective poem on losing childhood innocence to rational maturity.',
            summaryTextbook: 'Nature’s eternal cleansing cycle, personification in poetry, and adolescent psychological transitions.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-eng-h5',
            chapterNumber: 5,
            title: 'The Adventure (Jayant Narlikar)',
            officialBookCode: 'kehb1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kehb105.pdf',
            nepHighlights: 'Prof. Gangadharpant Gaitonde sci-fi alternate history narrative exploring catastrophic theory and quantum bifurcation at Battle of Panipat.',
            summaryTextbook: 'Indian science fiction blending historical Maratha victory alternate timelines with quantum physics many-worlds hypothesis.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-eng-h6',
            chapterNumber: 6,
            title: 'Silk Road (Nick Middleton) & Father to Son (Elizabeth Jennings)',
            officialBookCode: 'kehb1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kehb106.pdf',
            nepHighlights: 'High-altitude Tibetan travelogue journeying from Ravu to Mount Kailash Kora; Elizabeth Jennings poem on intergenerational emotional disconnect.',
            summaryTextbook: 'Geography and cultural endurance across Himalayan salt flats, and father-son emotional reconciliation themes.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-eng-s1',
            chapterNumber: 7,
            title: 'Snapshots: The Summer of the Beautiful White Horse (William Saroyan)',
            officialBookCode: 'kesp1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kesp101.pdf',
            nepHighlights: 'Armenian Garoghlanian tribe values of honesty and pride through young boys Aram and Mourad borrowing John Byro’s white horse.',
            summaryTextbook: 'Conscience, moral dilemma, joyful equine gallops, and tribal integrity triumphing over temptation.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-eng-s2',
            chapterNumber: 8,
            title: 'Snapshots: The Address (Marga Minco)',
            officialBookCode: 'kesp1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kesp102.pdf',
            nepHighlights: 'Post-WWII Holocaust emotional trauma: Daughter visits 46 Marconi Lane to recover deceased mother’s treasured household belongings.',
            summaryTextbook: 'Painful memories of wartime displacement, callous hoarding by acquaintance Mrs. Dorling, and decision to let go of the past.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-eng-s3',
            chapterNumber: 9,
            title: 'Snapshots: Mother’s Day (J.B. Priestley)',
            officialBookCode: 'kesp1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kesp103.pdf',
            nepHighlights: 'Humorous British domestic drama: Fortune-teller Mrs. Fitzgerald swaps personalities with submissive homemaker Mrs. Pearson to teach self-respect.',
            summaryTextbook: 'Satire on domestic exploitation of housewives, family responsibility, and asserting dignity within home.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-eng-s4',
            chapterNumber: 10,
            title: 'Snapshots: Birth (A.J. Cronin)',
            officialBookCode: 'kesp1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kesp104.pdf',
            nepHighlights: 'Young doctor Andrew Manson heroic medical resuscitation of stillborn baby and desperate mother Susan Morgan in Welsh mining town Blaenelly.',
            summaryTextbook: 'Medical ethics, relentless clinical perseverance with hot and cold water basins, and ecstatic triumph of saving life.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-eng-s5',
            chapterNumber: 11,
            title: 'Snapshots: The Tale of Melon City (Vikram Seth)',
            officialBookCode: 'kesp1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kesp105.pdf',
            nepHighlights: 'Narrative poem mocking absurd governance, fickle public opinion, and laissez-faire state resulting in a melon being crowned king.',
            summaryTextbook: 'Witty political satire on blind adherence to procedural bureaucracy and whimsical autocratic justice.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },
      {
        id: 'c11-political-science',
        name: 'Political Science',
        iconName: 'Building',
        color: '#0284c7',
        description: 'Indian Constitution at Work (Rights, Elections, Executive, Judiciary, Federalism) & Political Theory (Freedom, Equality, Justice, Secularism).',
        totalChapters: 10,
        coverImageUrl: '/book-covers/class11-political-science.jpg',
        chapters: [
          {
            id: 'c11-pol-ch1',
            chapterNumber: 1,
            title: 'Constitution: Why and How? & Philosophy of the Constitution',
            officialBookCode: 'keps1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keps101.pdf',
            nepHighlights: 'Constituent Assembly debates, functions of a constitution, basic structure, institutional balance, and democratic preamble values.',
            summaryTextbook: 'Why societies need constitutions, authority of Indian constitution, moral commitments, and secular democratic vision.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-pol-ch2',
            chapterNumber: 2,
            title: 'Rights in the Indian Constitution',
            officialBookCode: 'keps1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keps102.pdf',
            nepHighlights: 'Fundamental Rights (Articles 14-32), Directive Principles of State Policy (DPSP), relationship between FRs and DPSPs, constitutional writs.',
            summaryTextbook: 'Bill of rights necessity, right to equality, freedom, religious liberty, cultural rights, and legal protection under Supreme Court writs.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-pol-ch3',
            chapterNumber: 3,
            title: 'Election and Representation',
            officialBookCode: 'keps1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keps103.pdf',
            nepHighlights: 'Elections & Democracy, First Past the Post (FPTP) system vs Proportional Representation (PR), Election Commission of India autonomy, electoral reforms.',
            summaryTextbook: 'Comparative electoral systems, reservation of constituencies, free and fair election safeguards, and universal adult franchise.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-pol-ch4',
            chapterNumber: 4,
            title: 'Executive',
            officialBookCode: 'keps1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keps104.pdf',
            nepHighlights: 'Parliamentary vs Presidential executive, President of India powers, Prime Minister and Council of Ministers, permanent executive (civil service bureaucracy).',
            summaryTextbook: 'Executive accountability to legislature, discretionary powers of President, collective responsibility, and administrative bureaucracy.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-pol-ch5',
            chapterNumber: 5,
            title: 'Legislature',
            officialBookCode: 'keps1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keps105.pdf',
            nepHighlights: 'Bicameral legislature need, Rajya Sabha vs Lok Sabha powers, lawmaking procedure, parliamentary oversight instruments (Question Hour, Committees).',
            summaryTextbook: 'Functions of parliament, money bills vs ordinary bills, parliamentary privileges, and anti-defection law.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-pol-ch6',
            chapterNumber: 6,
            title: 'Judiciary',
            officialBookCode: 'keps1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keps106.pdf',
            nepHighlights: 'Independence of judiciary, Supreme Court jurisdiction (original, appellate, advisory), Judicial Review, Judicial Activism & Public Interest Litigation (PIL).',
            summaryTextbook: 'Hierarchy of courts, collegium appointment system, fundamental rights enforcement, and judiciary-legislature relations.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-pol-ch7',
            chapterNumber: 7,
            title: 'Federalism',
            officialBookCode: 'keps1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keps107.pdf',
            nepHighlights: 'Federalism with strong central government, 7th Schedule legislative lists (Union, State, Concurrent), interstate disputes, Special provisions (Article 371).',
            summaryTextbook: 'Centre-state administrative and financial relations, role of Governors, emergency powers, and demands for state autonomy.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-pol-ch8',
            chapterNumber: 8,
            title: 'Local Governments',
            officialBookCode: 'keps1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keps108.pdf',
            nepHighlights: '73rd and 74th Constitutional Amendments, Panchayati Raj three-tier structure, Municipalities, women’s reservation, grassroots democracy empowerment.',
            summaryTextbook: 'Decentralization of power, Gram Sabha, State Election Commission, State Finance Commission, and community governance challenges.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-pol-ch9',
            chapterNumber: 9,
            title: 'Political Theory: An Introduction, Freedom & Equality',
            officialBookCode: 'keps2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keps201.pdf',
            nepHighlights: 'Meaning of political theory, negative vs positive liberty, Harm Principle (J.S. Mill), formal vs substantive equality, affirmative action.',
            summaryTextbook: 'Political philosophy foundations, limits on state power, social justice, and addressing structural inequalities.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-pol-ch10',
            chapterNumber: 10,
            title: 'Social Justice, Rights, Citizenship, Nationalism & Secularism',
            officialBookCode: 'keps2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/keps202.pdf',
            nepHighlights: 'Rawls’ Theory of Justice (Veil of Ignorance), human rights universal declaration, inclusive citizenship, democratic secularism model.',
            summaryTextbook: 'Distributive justice, rights vs claims, national self-determination limits, and Indian vs Western models of secularism.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },
      {
        id: 'c11-geography',
        name: 'Geography',
        iconName: 'Compass',
        color: '#10b981',
        description: 'Fundamentals of Physical Geography (Earth’s Interior, Plate Tectonics, Landforms, Atmosphere, Oceans & Biodiversity).',
        totalChapters: 14,
        coverImageUrl: '/book-covers/class11-geography.jpg',
        chapters: [
          {
            id: 'c11-geo-ch1',
            chapterNumber: 1,
            title: 'Geography as a Discipline',
            officialBookCode: 'kegy1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kegy101.pdf',
            nepHighlights: 'Nature and scope of geography as an integrating empirical discipline, branches of physical and human geography.',
            summaryTextbook: 'Spatial patterns, human-environment interactions, physical geography components, and cartographic methods.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-geo-ch2',
            chapterNumber: 2,
            title: 'The Origin and Evolution of the Earth',
            officialBookCode: 'kegy1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kegy102.pdf',
            nepHighlights: 'Origin of universe (Big Bang theory), star and planet formation, terrestrial vs Jovian planets, evolution of lithosphere, atmosphere and oceans.',
            summaryTextbook: 'Cosmology, solar system nebular hypothesis, degassing, origin of water bodies, and biological life beginnings.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-geo-ch3',
            chapterNumber: 3,
            title: 'Interior of the Earth',
            officialBookCode: 'kegy1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kegy103.pdf',
            nepHighlights: 'Sources of information (direct & indirect: seismic waves P & S waves), internal layers (Crust, Mantle, Core), shadow zones, volcanoes and volcanic landforms.',
            summaryTextbook: 'Seismology, Mohorovicic and Gutenberg discontinuities, asthenosphere, intrusive igneous bodies (batholiths, laccoliths, sills, dykes).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-geo-ch4',
            chapterNumber: 4,
            title: 'Distribution of Oceans and Continents',
            officialBookCode: 'kegy1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kegy104.pdf',
            nepHighlights: 'Continental Drift Theory (Alfred Wegener: jigsaw fit, fossils, tillite), seafloor spreading, Plate Tectonics theory, major and minor tectonic plates, plate boundaries.',
            summaryTextbook: 'Convection currents in mantle, divergent, convergent and transform plate boundaries, paleomagnetism, and earthquake distributions.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-geo-ch5',
            chapterNumber: 5,
            title: 'Geomorphic Processes',
            officialBookCode: 'kegy1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kegy105.pdf',
            nepHighlights: 'Endogenic vs exogenic forces, weathering (physical, chemical, biological), mass wasting (landslides, mudflows), erosion and deposition.',
            summaryTextbook: 'Diastrophism, volcanism, soil formation processes (pedogenesis), soil horizons, and erosion factors.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-geo-ch6',
            chapterNumber: 6,
            title: 'Landforms and their Evolution',
            officialBookCode: 'kegy1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kegy106.pdf',
            nepHighlights: 'Erosional and depositional landforms by running water (valleys, meanders, oxbows, deltas), groundwater (karst caves, stalactites), glaciers, waves, and wind (dunes, mushroom rocks).',
            summaryTextbook: 'Geomorphic agents landscape evolution, youthful/mature/old stages of river valleys, and coastal erosional platforms.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-geo-ch7',
            chapterNumber: 7,
            title: 'Composition and Structure of Atmosphere',
            officialBookCode: 'kegy1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kegy107.pdf',
            nepHighlights: 'Gaseous composition, water vapor and dust particles, atmospheric layers (Troposphere, Stratosphere with ozone, Mesosphere, Thermosphere, Exosphere).',
            summaryTextbook: 'Atmospheric density, temperature lapse rate, weather phenomena containment in troposphere, and ionosphere radio wave transmission.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-geo-ch8',
            chapterNumber: 8,
            title: 'Solar Radiation, Heat Balance and Temperature',
            officialBookCode: 'kegy1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kegy108.pdf',
            nepHighlights: 'Insolation variability factors, heating mechanisms (conduction, convection, advection), Earth’s heat budget, factors controlling temperature distribution, temperature inversion.',
            summaryTextbook: 'Shortwave solar radiation vs longwave terrestrial radiation, albedo of Earth, isotherms, and seasonal heat surpluses/deficits.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-geo-ch9',
            chapterNumber: 9,
            title: 'Atmospheric Circulation and Weather Systems',
            officialBookCode: 'kegy1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kegy109.pdf',
            nepHighlights: 'Atmospheric pressure belts, Coriolis force, planetary winds (Trade winds, Westerlies, Polar easterlies), air masses, fronts, extra-tropical cyclones and tropical cyclones.',
            summaryTextbook: 'Hadley, Ferrel and Polar cells, jet streams, cyclone eye formation, and seasonal monsoonal wind reversals.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-geo-ch10',
            chapterNumber: 10,
            title: 'Water in the Atmosphere',
            officialBookCode: 'kegy1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kegy110.pdf',
            nepHighlights: 'Humidity (absolute, relative), dew point, condensation forms (dew, frost, fog, clouds: cirrus, cumulus, stratus, nimbus), precipitation types (convectional, orographic, cyclonic).',
            summaryTextbook: 'Evaporation and condensation physics, cloud classifications, rain shadow zones, and world precipitation distribution.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-geo-ch11',
            chapterNumber: 11,
            title: 'World Climate and Climate Change',
            officialBookCode: 'kegy1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kegy111.pdf',
            nepHighlights: 'Koeppen’s scheme of climatic classification (Groups A, B, C, D, E, H), global warming, greenhouse gases, historical climate records.',
            summaryTextbook: 'Empirical climatic classification based on temperature and precipitation, rising sea levels, and anthropogenic climate crisis.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-geo-ch12',
            chapterNumber: 12,
            title: 'Water (Oceans)',
            officialBookCode: 'kegy1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kegy112.pdf',
            nepHighlights: 'Hydrological cycle, ocean floor relief (continental shelf, continental slope, deep sea plain, oceanic trenches), ocean temperature and salinity factors.',
            summaryTextbook: 'Bathymetry, ocean thermal vertical profile (thermocline), salinity variations in landlocked seas, and underwater mineral resources.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-geo-ch13',
            chapterNumber: 13,
            title: 'Movements of Ocean Water',
            officialBookCode: 'kegy1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kegy113.pdf',
            nepHighlights: 'Waves anatomy and energy, Tides (gravitational forces of sun and moon, spring & neap tides), Ocean Currents (warm & cold currents, planetary wind drivers, climate influence).',
            summaryTextbook: 'Tidal range, ocean circulation gyres (Gulf Stream, Kuroshio, Labrador), upwelling, and fishing grounds at current confluence zones.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c11-geo-ch14',
            chapterNumber: 14,
            title: 'Biodiversity and Conservation',
            officialBookCode: 'kegy1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/kegy114.pdf',
            nepHighlights: 'Levels of biodiversity (genetic, species, ecosystem), ecological and economic importance, loss of biodiversity, hotspot regions, conservation strategies.',
            summaryTextbook: 'Global biodiversity distribution, endangered species protection, IUCN red list categories, and in-situ vs ex-situ conservation.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      }
,
    ]
  },
  // Class 12 (Senior Secondary Stage - Science, Commerce & Arts Streams)
  {
    classNumber: 12,
    stageName: 'Senior Secondary',
    ageGroup: '17-18 Years',
    nepFocus: 'Advanced Derivations, Problem Solving, Higher Order Thinking Skills (HOTS) & Board/Entrance Foundation',
    subjects: [
      {
        id: 'c12-maths',
        name: 'Mathematics',
        iconName: 'Calculator',
        color: '#4f46e5',
        description: 'Relations & Functions, Inverse Trig, Matrices, Determinants, Calculus, Vectors, 3D Geometry, LPP & Probability.',
        totalChapters: 13,
        coverImageUrl: '/book-covers/math-p1.png',
        chapters: [
          {
            id: 'c12-m-ch1',
            chapterNumber: 1,
            title: 'Relations & Functions',
            officialBookCode: 'lemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lemh101.pdf',
            nepHighlights: 'Types of Relations (Reflexive, Symmetric, Transitive) & One-One, Onto Functions.',
            summaryTextbook: 'Covers equivalence relations, injective and surjective mapping, and domain-range transformations for senior secondary board exams.',
            exerciseSolutions: [
              {
                id: 'c12-m-ch1-q1',
                questionNo: 'Exercise 1.1 Q1',
                questionText: 'Determine whether the relation R in the set A = {1, 2, 3, ..., 14} defined as R = {(x, y) : 3x - y = 0} is reflexive, symmetric or transitive.',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: 'A = {1, 2, ..., 14}, R = {(x, y) : y = 3x}',
                formula: 'Reflexive: (x,x) ∈ R, Symmetric: (x,y)∈R ⇒ (y,x)∈R, Transitive: (x,y)∈R & (y,z)∈R ⇒ (x,z)∈R',
                stepByStepSolution: [
                  'Step 1: Write elements of R -> R = {(1,3), (2,6), (3,9), (4,12)}.',
                  'Step 2: Check Reflexivity -> (1,1) ∉ R because 3(1) - 1 = 2 ≠ 0. Hence, R is NOT reflexive.',
                  'Step 3: Check Symmetry -> (1,3) ∈ R since 3(1)-3=0, but (3,1) ∉ R since 3(3)-1=8 ≠ 0. Hence, R is NOT symmetric.',
                  'Step 4: Check Transitivity -> (1,3) ∈ R and (3,9) ∈ R, but (1,9) ∉ R since 3(1)-9=-6 ≠ 0. Hence, R is NOT transitive.'
                ],
                finalAnswer: 'Relation R is neither reflexive, nor symmetric, nor transitive.',
                keyTakeaway: 'A relation must satisfy all three properties to be an Equivalence Relation.',
                nepCompetencyNote: 'Relational algebra in computer database design relies directly on relation properties.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-m-ch2',
            chapterNumber: 2,
            title: 'Inverse Trigonometric Functions',
            officialBookCode: 'lemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lemh102.pdf',
            nepHighlights: 'Principal Value Branches, Domain and Range restrictions of Inverse Trig functions.',
            summaryTextbook: 'Covers definition, domain, range, principal values of sin⁻¹x, cos⁻¹x, tan⁻¹x, and simplification of inverse trigonometric expressions.',
            exerciseSolutions: [
              {
                id: 'c12-m-ch2-q1',
                questionNo: 'Exercise 2.1 Q1',
                questionText: 'Find the principal value of sin⁻¹(-1/2).',
                difficulty: 'Easy',
                type: 'Exercise',
                givenData: 'y = sin⁻¹(-1/2)',
                formula: 'sin⁻¹(-x) = -sin⁻¹(x) for x ∈ [-1, 1]',
                stepByStepSolution: [
                  'Step 1: Let y = sin⁻¹(-1/2) ⇒ sin(y) = -1/2.',
                  'Step 2: We know sin(π/6) = 1/2, so sin(-π/6) = -1/2.',
                  'Step 3: Principal value branch of sin⁻¹x is [-π/2, π/2].',
                  'Step 4: Since -π/6 ∈ [-π/2, π/2], the principal value is -π/6.'
                ],
                finalAnswer: 'Principal Value = -π/6',
                keyTakeaway: 'Principal value branch ensures inverse trigonometric relations are single-valued functions.',
                nepCompetencyNote: 'Essential for phase shift calculations in AC electrical circuits and signal processing.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-m-ch3',
            chapterNumber: 3,
            title: 'Matrices',
            officialBookCode: 'lemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lemh103.pdf',
            nepHighlights: 'Matrix Multiplication non-commutativity, Transpose properties & Symmetric Matrices.',
            summaryTextbook: 'Covers matrix algebra, addition, scalar multiplication, matrix multiplication AB ≠ BA, transpose (Aᵀ), and symmetric (A = Aᵀ) & skew-symmetric (A = -Aᵀ) matrices.',
            exerciseSolutions: [
              {
                id: 'c12-m-ch3-q1',
                questionNo: 'Exercise 3.2 Q1',
                questionText: 'If A = [[2, 4], [3, 2]] and B = [[1, 3], [-2, 5]], find A + B and AB.',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: 'Matrices A (2x2) and B (2x2)',
                formula: 'Addition: [aᵢⱼ + bᵢⱼ] | Multiplication: Row by Column dot product',
                stepByStepSolution: [
                  'Step 1: A + B = [[2+1, 4+3], [3-2, 2+5]] = [[3, 7], [1, 7]].',
                  'Step 2: AB row 1 col 1 = 2(1) + 4(-2) = 2 - 8 = -6.',
                  'Step 3: AB row 1 col 2 = 2(3) + 4(5) = 6 + 20 = 26.',
                  'Step 4: AB row 2 col 1 = 3(1) + 2(-2) = 3 - 4 = -1.',
                  'Step 5: AB row 2 col 2 = 3(3) + 2(5) = 9 + 10 = 19.'
                ],
                finalAnswer: 'A + B = [[3, 7], [1, 7]] | AB = [[-6, 26], [-1, 19]]',
                keyTakeaway: 'Matrix multiplication is row-by-column product and is not commutative in general.',
                nepCompetencyNote: 'Linear algebra matrices form the foundation of computer graphics transformation and AI neural network weights.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-m-ch4',
            chapterNumber: 4,
            title: 'Determinants',
            officialBookCode: 'lemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lemh104.pdf',
            nepHighlights: 'Area of Triangle using Determinants, Minors, Cofactors & Inverse Matrix A⁻¹ = (adj A) / |A|.',
            summaryTextbook: 'Covers expansion of determinants, area of triangle with vertices (x₁,y₁), (x₂,y₂), (x₃,y₃), minors, cofactors, adjoint of matrix, and solving linear equations AX = B using matrix inverse.',
            exerciseSolutions: [
              {
                id: 'c12-m-ch4-q1',
                questionNo: 'Exercise 4.3 Q1',
                questionText: 'Find the area of the triangle with vertices (1, 0), (6, 0), (4, 3) using determinants.',
                difficulty: 'Easy',
                type: 'Exercise',
                givenData: 'Vertices: (1, 0), (6, 0), (4, 3)',
                formula: 'Area = 1/2 |det([[x₁, y₁, 1], [x₂, y₂, 1], [x₃, y₃, 1]])|',
                stepByStepSolution: [
                  'Step 1: Set up matrix: [[1, 0, 1], [6, 0, 1], [4, 3, 1]].',
                  'Step 2: Expand along Row 1 -> 1(0 - 3) - 0 + 1(18 - 0) = -3 + 18 = 15.',
                  'Step 3: Area = 1/2 × |15| = 15/2 = 7.5 sq units.'
                ],
                finalAnswer: 'Area of Triangle = 7.5 square units',
                keyTakeaway: 'Determinant magnitude represents scaling of area/volume transformations.',
                nepCompetencyNote: 'GIS spatial mapping algorithms compute geographic parcel areas using matrix determinants.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-m-ch5',
            chapterNumber: 5,
            title: 'Continuity & Differentiability',
            officialBookCode: 'lemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lemh105.pdf',
            nepHighlights: 'Derivatives of Implicit Functions, Logarithmic Differentiation & Chain Rule.',
            summaryTextbook: 'Covers derivative of parametric functions, second order derivatives, and continuity of trigonometric & exponential functions.',
            exerciseSolutions: [
              {
                id: 'c12-m-ch5-q1',
                questionNo: 'Exercise 5.2 Q1',
                questionText: 'Differentiate sin(x² + 5) with respect to x.',
                difficulty: 'Easy',
                type: 'Exercise',
                givenData: 'y = sin(x² + 5)',
                formula: 'Chain Rule: d/dx[f(g(x))] = f\'(g(x)) × g\'(x)',
                stepByStepSolution: [
                  'Step 1: Let u = x² + 5, so y = sin(u).',
                  'Step 2: dy/du = cos(u) = cos(x² + 5).',
                  'Step 3: du/dx = d/dx(x² + 5) = 2x.',
                  'Step 4: By Chain Rule -> dy/dx = dy/du × du/dx = cos(x² + 5) × 2x = 2x cos(x² + 5).'
                ],
                finalAnswer: 'dy/dx = 2x cos(x² + 5)',
                keyTakeaway: 'Differentiate the outer function first, then multiply by derivative of inner function.',
                nepCompetencyNote: 'Calculus derivatives quantify rate of change in physics, AI gradient descent, and economics.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-m-ch6',
            chapterNumber: 6,
            title: 'Application of Derivatives',
            officialBookCode: 'lemh1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lemh106.pdf',
            nepHighlights: 'Increasing/Decreasing Functions, Maxima & Minima First/Second Derivative Tests.',
            summaryTextbook: 'Covers rate of change of quantities, increasing and decreasing intervals (f\'(x) > 0), local maxima & minima using second derivative test f\'\'(x), and real-world optimization problems.',
            exerciseSolutions: [
              {
                id: 'c12-m-ch6-q1',
                questionNo: 'Exercise 6.5 Q1',
                questionText: 'Find the maximum and minimum values of f(x) = (2x - 1)² + 3.',
                difficulty: 'Easy',
                type: 'Exercise',
                givenData: 'Function f(x) = (2x - 1)² + 3',
                formula: '(2x - 1)² ≥ 0 for all real x',
                stepByStepSolution: [
                  'Step 1: Note that (2x - 1)² is a square, so (2x - 1)² ≥ 0 for all x ∈ ℝ.',
                  'Step 2: Minimum value of (2x - 1)² is 0, occurring when 2x - 1 = 0 ⇒ x = 1/2.',
                  'Step 3: Therefore, minimum value of f(x) = 0 + 3 = 3.',
                  'Step 4: As x → ∞, f(x) → ∞, so there is no maximum value.'
                ],
                finalAnswer: 'Minimum value = 3 at x = 1/2. No maximum value.',
                keyTakeaway: 'Optimization identifies peak performance points in physical & economic systems.',
                nepCompetencyNote: 'Cost minimization and profit maximization in business economics rely on derivative optimization.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-m-ch7',
            chapterNumber: 7,
            title: 'Integrals',
            officialBookCode: 'lemh2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lemh201.pdf',
            nepHighlights: 'Integration by Substitution, Partial Fractions, Integration by Parts & Definite Integral Properties.',
            summaryTextbook: 'Covers indefinite integrals as anti-derivatives, integration methods, standard integrals, and Fundamental Theorem of Calculus with definite integral properties ∫ₐᵇ f(x)dx = ∫ₐᵇ f(a+b-x)dx.',
            exerciseSolutions: [
              {
                id: 'c12-m-ch7-q1',
                questionNo: 'Exercise 7.1 Q1',
                questionText: 'Find an anti-derivative (or integral) of sin(2x) with respect to x.',
                difficulty: 'Easy',
                type: 'Exercise',
                givenData: 'Function f(x) = sin(2x)',
                formula: '∫ sin(ax) dx = -(1/a) cos(ax) + C',
                stepByStepSolution: [
                  'Step 1: We know d/dx[cos(2x)] = -2 sin(2x).',
                  'Step 2: Therefore, d/dx[-(1/2) cos(2x)] = sin(2x).',
                  'Step 3: Thus, anti-derivative of sin(2x) = -(1/2) cos(2x) + C.'
                ],
                finalAnswer: '∫ sin(2x) dx = -(1/2) cos(2x) + C',
                keyTakeaway: 'Integration is the inverse process of differentiation.',
                nepCompetencyNote: 'Integrals calculate total accumulated quantity over time in physics and finance.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-m-ch8',
            chapterNumber: 8,
            title: 'Application of Integrals',
            officialBookCode: 'lemh2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lemh202.pdf',
            nepHighlights: 'Area under simple curves (lines, circles, parabolas, ellipses) using vertical & horizontal strips.',
            summaryTextbook: 'Covers finding bounded region area between a curve y = f(x) and x-axis using ∫ₐᵇ y dx, and area enclosed between circles x² + y² = r² and lines/parabolas.',
            exerciseSolutions: [
              {
                id: 'c12-m-ch8-q1',
                questionNo: 'Exercise 8.1 Q1',
                questionText: 'Find the area of the region bounded by the curve y² = x and the lines x = 1, x = 4 and the x-axis in the first quadrant.',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: 'Curve y = √x, bounds x = 1 to x = 4 in 1st quadrant',
                formula: 'Area = ∫₁⁴ y dx = ∫₁⁴ √x dx',
                stepByStepSolution: [
                  'Step 1: Write y in terms of x -> y = √x = x^(1/2).',
                  'Step 2: Integrate -> ∫ x^(1/2) dx = (2/3) x^(3/2).',
                  'Step 3: Apply limits 1 to 4 -> (2/3) [4^(3/2) - 1^(3/2)].',
                  'Step 4: 4^(3/2) = (2²)^(3/2) = 2³ = 8.',
                  'Step 5: Area = (2/3) [8 - 1] = (2/3) × 7 = 14/3 sq units.'
                ],
                finalAnswer: 'Area = 14/3 square units',
                keyTakeaway: 'Definite integrals compute exact non-polygonal planar areas enclosed by curves.',
                nepCompetencyNote: 'Used in civil engineering to calculate reservoir water volume and irregular land parcel areas.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-m-ch9',
            chapterNumber: 9,
            title: 'Differential Equations',
            officialBookCode: 'lemh2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lemh203.pdf',
            nepHighlights: 'Order & Degree of DE, Variable Separable Method & First Order Linear DE dy/dx + Py = Q.',
            summaryTextbook: 'Covers order and degree of differential equations, general vs particular solutions, variable separable method, and linear differential equations using Integrating Factor IF = e^(∫P dx).',
            exerciseSolutions: [
              {
                id: 'c12-m-ch9-q1',
                questionNo: 'Exercise 9.6 Q1',
                questionText: 'Find the general solution of the differential equation dy/dx + 2y = sin(x).',
                difficulty: 'Hard',
                type: 'Exercise',
                givenData: 'Linear DE: dy/dx + Py = Q with P = 2, Q = sin(x)',
                formula: 'IF = e^(∫P dx) | Solution: y × IF = ∫(Q × IF) dx + C',
                stepByStepSolution: [
                  'Step 1: Identify P = 2, Q = sin(x).',
                  'Step 2: Calculate IF = e^(∫ 2 dx) = e^(2x).',
                  'Step 3: Write solution equation -> y · e^(2x) = ∫ sin(x) · e^(2x) dx + C.',
                  'Step 4: Evaluate ∫ e^(2x) sin(x) dx by parts -> (e^(2x)/5)(2 sin x - cos x).',
                  'Step 5: General Solution -> y = (1/5)(2 sin x - cos x) + C e^(-2x).'
                ],
                finalAnswer: 'y = (1/5)(2 sin x - cos x) + C e^(-2x)',
                keyTakeaway: 'Integrating Factor simplifies linear differential equations into integrable exact differentials.',
                nepCompetencyNote: 'Differential equations model population growth, viral epidemic spread, and radioactive decay.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-m-ch10',
            chapterNumber: 10,
            title: 'Vector Algebra',
            officialBookCode: 'lemh2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lemh204.pdf',
            nepHighlights: 'Dot Product (Scalar), Cross Product (Vector), Direction Cosines & Unit Vectors.',
            summaryTextbook: 'Covers vector addition, magnitude |a⃗|, unit vector â = a⃗/|a⃗|, scalar product a⃗·b⃗ = |a⃗||b⃗|cosθ, and vector product a⃗×b⃗ = |a⃗||b⃗|sinθ n̂.',
            exerciseSolutions: [
              {
                id: 'c12-m-ch10-q1',
                questionNo: 'Exercise 10.2 Q1',
                questionText: 'Find the magnitude of vector a⃗ = î + ĵ + k̂.',
                difficulty: 'Easy',
                type: 'Exercise',
                givenData: 'Vector a⃗ = î + ĵ + k̂',
                formula: '|a⃗| = √(x² + y² + z²)',
                stepByStepSolution: [
                  'Step 1: Identify components x = 1, y = 1, z = 1.',
                  'Step 2: Apply magnitude formula -> |a⃗| = √(1² + 1² + 1²).',
                  'Step 3: |a⃗| = √(1 + 1 + 1) = √3.'
                ],
                finalAnswer: '|a⃗| = √3',
                keyTakeaway: 'Vector magnitude is the Euclidean distance from origin in 3D space.',
                nepCompetencyNote: 'Essential for 3D game physics engines, robotics velocity vectors, and navigation systems.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-m-ch11',
            chapterNumber: 11,
            title: 'Three Dimensional Geometry',
            officialBookCode: 'lemh2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lemh205.pdf',
            nepHighlights: 'Vector and Cartesian equations of a Line, Shortest Distance between Skew Lines.',
            summaryTextbook: 'Covers direction cosines l, m, n, direction ratios a, b, c, line equation r⃗ = a⃗ + λb⃗, and shortest distance d = |(a⃗₂-a⃗₁)·(b⃗₁×b⃗₂)| / |b⃗₁×b⃗₂| between skew lines.',
            exerciseSolutions: [
              {
                id: 'c12-m-ch11-q1',
                questionNo: 'Exercise 11.2 Q1',
                questionText: 'Show that the line through points (1, -1, 2) and (3, 4, -2) is perpendicular to the line through points (0, 3, 2) and (3, 5, 6).',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: 'Line 1 points A(1,-1,2), B(3,4,-2) | Line 2 points C(0,3,2), D(3,5,6)',
                formula: 'Perpendicular condition: a₁a₂ + b₁b₂ + c₁c₂ = 0',
                stepByStepSolution: [
                  'Step 1: Direction ratios of Line 1 (AB) -> a₁ = 3-1=2, b₁ = 4-(-1)=5, c₁ = -2-2=-4.',
                  'Step 2: Direction ratios of Line 2 (CD) -> a₂ = 3-0=3, b₂ = 5-3=2, c₂ = 6-2=4.',
                  'Step 3: Calculate dot product -> a₁a₂ + b₁b₂ + c₁c₂ = 2(3) + 5(2) + (-4)(4).',
                  'Step 4: = 6 + 10 - 16 = 0.',
                  'Step 5: Since dot product of direction ratios is 0, the two lines are perpendicular.'
                ],
                finalAnswer: 'Lines are perpendicular because a₁a₂ + b₁b₂ + c₁c₂ = 0.',
                keyTakeaway: 'Two 3D lines are orthogonal if the scalar product of their direction vectors vanishes.',
                nepCompetencyNote: 'Used in satellite orbit trajectory design and 3D architectural CAD modeling.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-m-ch12',
            chapterNumber: 12,
            title: 'Linear Programming',
            officialBookCode: 'lemh2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lemh206.pdf',
            nepHighlights: 'Formulation of LPP, Feasible Region & Corner Point Method for Max/Min Z = ax + by.',
            summaryTextbook: 'Covers mathematical formulation of Linear Programming Problems (LPP), objective function Z = ax + by, linear constraints, bounded feasible region, and Corner Point Theorem for optimal solution.',
            exerciseSolutions: [
              {
                id: 'c12-m-ch12-q1',
                questionNo: 'Exercise 12.1 Q1',
                questionText: 'Maximize Z = 3x + 4y subject to constraints x + y ≤ 4, x ≥ 0, y ≥ 0.',
                difficulty: 'Easy',
                type: 'Exercise',
                givenData: 'Objective Z = 3x + 4y | Constraints: x + y ≤ 4, x ≥ 0, y ≥ 0',
                formula: 'Corner Point Method: Evaluate Z at all feasible polygon vertices',
                stepByStepSolution: [
                  'Step 1: Plot boundary line x + y = 4. Intercepts are (4,0) and (0,4).',
                  'Step 2: Feasible region is triangle bounded by (0,0), (4,0), (0,4).',
                  'Step 3: Evaluate Z at Corner Points:\n- At (0,0): Z = 3(0) + 4(0) = 0\n- At (4,0): Z = 3(4) + 4(0) = 12\n- At (0,4): Z = 3(0) + 4(4) = 16.',
                  'Step 4: Maximum value of Z is 16 at point (0, 4).'
                ],
                finalAnswer: 'Maximum Z = 16 at x = 0, y = 4',
                keyTakeaway: 'The optimal value of an LPP always occurs at one of the corner points of the feasible region.',
                nepCompetencyNote: 'Supply chain resource allocation and diet optimization use Linear Programming.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-m-ch13',
            chapterNumber: 13,
            title: 'Probability',
            officialBookCode: 'lemh2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lemh207.pdf',
            nepHighlights: 'Conditional Probability P(A|B), Multiplication Theorem, Bayes’ Theorem & Independent Events.',
            summaryTextbook: 'Covers conditional probability P(A|B) = P(A∩B)/P(B), independent events P(A∩B) = P(A)P(B), Theorem of Total Probability, and Bayes’ Theorem P(Eᵢ|A) = [P(Eᵢ)P(A|Eᵢ)] / ∑[P(Eₖ)P(A|Eₖ)].',
            exerciseSolutions: [
              {
                id: 'c12-m-ch13-q1',
                questionNo: 'Exercise 13.1 Q1',
                questionText: 'Given that E and F are events such that P(E) = 0.6, P(F) = 0.3 and P(E ∩ F) = 0.2, find P(E|F) and P(F|E).',
                difficulty: 'Easy',
                type: 'Exercise',
                givenData: 'P(E) = 0.6, P(F) = 0.3, P(E ∩ F) = 0.2',
                formula: 'P(E|F) = P(E ∩ F) / P(F) | P(F|E) = P(E ∩ F) / P(E)',
                stepByStepSolution: [
                  'Step 1: P(E|F) = P(E ∩ F) / P(F) = 0.2 / 0.3 = 2/3.',
                  'Step 2: P(F|E) = P(E ∩ F) / P(E) = 0.2 / 0.6 = 2/6 = 1/3.'
                ],
                finalAnswer: 'P(E|F) = 2/3 | P(F|E) = 1/3',
                keyTakeaway: 'Conditional probability computes event likelihood given prior knowledge of another event.',
                nepCompetencyNote: 'Bayes’ theorem is the foundation of machine learning naive bayes classifiers and medical diagnostic accuracy.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },
      {
        id: 'c12-physics',
        name: 'Physics',
        iconName: 'Zap',
        color: '#7c3aed',
        description: 'Electrostatics, Current Electricity, Magnetism, Optics & Modern Physics.',
        totalChapters: 14,
        coverImageUrl: '/book-covers/physics-p1.png',
        chapters: [
          {
            id: 'c12-p-ch1',
            chapterNumber: 1,
            title: 'Electric Charges & Fields',
            officialBookCode: 'leph1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leph101.pdf',
            nepHighlights: 'Coulomb’s Law in Vector form & Gauss’s Law flux applications.',
            summaryTextbook: 'Covers electric charge quantization, Coulomb’s Law, electric field intensity due to dipoles, electric flux, and Gauss’s Theorem with application to sphere, infinite wire, and sheet.',
            exerciseSolutions: [
              {
                id: 'c12-p-ch1-q1',
                questionNo: 'Exercise 1.1 Q1',
                questionText: 'What is the force between two small charged spheres having charges of 2 × 10⁻⁷ C and 3 × 10⁻⁷ C placed 30 cm apart in air?',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: 'q₁ = 2 × 10⁻⁷ C, q₂ = 3 × 10⁻⁷ C, r = 30 cm = 0.3 m, k = 9 × 10⁹ N·m²/C²',
                formula: 'Coulomb’s Law: F = (k × q₁ × q₂) / r²',
                stepByStepSolution: [
                  'Step 1: Convert distance to SI units -> r = 0.3 m.',
                  'Step 2: Substitute values -> F = (9 × 10⁹ × 2 × 10⁻⁷ × 3 × 10⁻⁷) / (0.3)²',
                  'Step 3: Numerator = 54 × 10⁻⁵ = 5.4 × 10⁻⁴ N·m².',
                  'Step 4: Denominator = 0.09 m².',
                  'Step 5: F = (5.4 × 10⁻⁴) / 0.09 = 6 × 10⁻³ N.'
                ],
                finalAnswer: 'F = 6 × 10⁻³ N (Repulsive force)',
                keyTakeaway: 'Like charges repel with electrostatic force proportional to inverse square of distance.',
                nepCompetencyNote: 'Core foundation for semiconductor electrostatic controls.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-p-ch2',
            chapterNumber: 2,
            title: 'Electrostatic Potential & Capacitance',
            officialBookCode: 'leph1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leph102.pdf',
            nepHighlights: 'Equipotential surfaces, energy stored in capacitors & dielectric polarization.',
            summaryTextbook: 'Covers electric potential due to point charge & dipoles, potential energy of system of charges, parallel plate capacitor, and dielectrics.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-p-ch3',
            chapterNumber: 3,
            title: 'Current Electricity',
            officialBookCode: 'leph1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leph103.pdf',
            nepHighlights: 'Ohm’s Law derivation, Drift Velocity & Kirchhoff’s Loop Rules.',
            summaryTextbook: 'Examines internal resistance of cells, Wheatstone bridge, meter bridge, and electrical energy and power.',
            exerciseSolutions: [
              {
                id: 'c12-p-ch3-q1',
                questionNo: 'Exercise 3.1 Q1',
                questionText: 'The storage battery of a car has an emf of 12 V. If the internal resistance of the battery is 0.4 Ω, what is the maximum current that can be drawn from the battery?',
                difficulty: 'Easy',
                type: 'Exercise',
                givenData: 'E = 12 V, r = 0.4 Ω, R = 0 (for maximum current)',
                formula: 'I_max = E / r',
                stepByStepSolution: [
                  'Step 1: Maximum current is drawn when external resistance R = 0.',
                  'Step 2: Formula -> I_max = E / (R + r) = 12 / (0 + 0.4).',
                  'Step 3: I_max = 12 / 0.4 = 30 A.'
                ],
                finalAnswer: 'I_max = 30 A',
                keyTakeaway: 'Internal resistance limits the maximum short-circuit current of an electrochemical cell.',
                nepCompetencyNote: 'Critical metric for EV battery design and safety fuse ratings.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-p-ch4',
            chapterNumber: 4,
            title: 'Moving Charges & Magnetism',
            officialBookCode: 'leph1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leph104.pdf',
            nepHighlights: 'Biot-Savart Law, Ampere’s Circuital Law & Cyclotron acceleration.',
            summaryTextbook: 'Covers Lorentz magnetic force, motion of charged particle in magnetic field, magnetic dipole moment, and moving coil galvanometer.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-p-ch5',
            chapterNumber: 5,
            title: 'Magnetism & Matter',
            officialBookCode: 'leph1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leph105.pdf',
            nepHighlights: 'Earth’s magnetic elements, diamagnetic, paramagnetic & ferromagnetic materials.',
            summaryTextbook: 'Examines bar magnet as equivalent solenoid, Gauss’s Law for magnetism, magnetic properties of materials, and hysteresis loop.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-p-ch6',
            chapterNumber: 6,
            title: 'Electromagnetic Induction',
            officialBookCode: 'leph1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leph106.pdf',
            nepHighlights: 'Faraday’s Law of EMI, Lenz’s Law & Eddy Currents.',
            summaryTextbook: 'Covers magnetic flux, motional electromotive force, self-inductance (L), mutual inductance (M), and AC generator principles.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-p-ch7',
            chapterNumber: 7,
            title: 'Alternating Current',
            officialBookCode: 'leph1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leph107.pdf',
            nepHighlights: 'Series LCR circuit resonance, Quality factor Q & AC Transformer efficiency.',
            summaryTextbook: 'Covers peak and RMS values of AC current and voltage, phasors, reactance, impedance, LCR circuit resonance, LC oscillations, and power in AC circuits.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-p-ch8',
            chapterNumber: 8,
            title: 'Electromagnetic Waves',
            officialBookCode: 'leph1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leph108.pdf',
            nepHighlights: 'Displacement current, Maxwell’s Equations & Electromagnetic Spectrum.',
            summaryTextbook: 'Examines need for displacement current, transverse nature of EM waves, momentum and radiation pressure, and EM spectrum (Radio, Microwave, IR, UV, X-Ray, Gamma).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-p-ch9',
            chapterNumber: 9,
            title: 'Ray Optics & Optical Instruments',
            officialBookCode: 'leph2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leph201.pdf',
            nepHighlights: 'Total Internal Reflection, Refraction at spherical surfaces & Astronomical Telescope.',
            summaryTextbook: 'Covers reflection by spherical mirrors, Snell’s Law, lens maker’s formula, thin lenses in contact, dispersion through prism, compound microscope, and astronomical telescope.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-p-ch10',
            chapterNumber: 10,
            title: 'Wave Optics',
            officialBookCode: 'leph2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leph202.pdf',
            nepHighlights: 'Huygens’ Wave Principle, Young’s Double Slit Experiment (YDSE) & Diffraction.',
            summaryTextbook: 'Covers wave front derivation of reflection & refraction laws, coherent sources, interference fringe width β = λD/d, and single slit diffraction.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-p-ch11',
            chapterNumber: 11,
            title: 'Dual Nature of Radiation & Matter',
            officialBookCode: 'leph2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leph203.pdf',
            nepHighlights: 'Einstein’s Photoelectric Equation, Work Function & de Broglie Wavelength.',
            summaryTextbook: 'Examines photoelectric effect experimental observations, threshold frequency, stopping potential, photon energy E = hν, and de Broglie wavelength λ = h/p.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-p-ch12',
            chapterNumber: 12,
            title: 'Atoms',
            officialBookCode: 'leph2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leph204.pdf',
            nepHighlights: 'Alpha particle scattering, Rutherford model & Bohr postulate line spectra.',
            summaryTextbook: 'Covers Geiger-Marsden experiment, impact parameter, distance of closest approach, Bohr quantisation of angular momentum L = nh/2π, and hydrogen energy levels.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-p-ch13',
            chapterNumber: 13,
            title: 'Nuclei',
            officialBookCode: 'leph2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leph205.pdf',
            nepHighlights: 'Nuclear Density constant, Mass Defect, Binding Energy curve & Nuclear Fission/Fusion.',
            summaryTextbook: 'Covers nuclear composition, nuclear radius R = R₀ A^(1/3), Einstein mass-energy relation E = mc², mass defect Δm, binding energy per nucleon, and nuclear reactor basics.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-p-ch14',
            chapterNumber: 14,
            title: 'Semiconductor Electronics',
            officialBookCode: 'leph2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leph206.pdf',
            nepHighlights: 'Energy Bands (VBM/CBM), p-n Junction Diode V-I characteristics & Half/Full Wave Rectifier.',
            summaryTextbook: 'Covers intrinsic vs extrinsic semiconductors (n-type and p-type), p-n junction formation, depletion layer, forward & reverse bias, diode rectifiers, and LED/Solar Cell applications.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },
      {
        id: 'c12-chemistry',
        name: 'Chemistry',
        iconName: 'FlaskConical',
        color: '#059669',
        description: 'Solutions, Electrochemistry, Chemical Kinetics, Coordination Compounds & Organic Chemistry.',
        totalChapters: 10,
        coverImageUrl: '/book-covers/chemistry-p1.png',
        chapters: [
          {
            id: 'c12-chem-ch1',
            chapterNumber: 1,
            title: 'Solutions',
            officialBookCode: 'lech1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lech101.pdf',
            nepHighlights: 'Raoult’s Law for volatile liquids & Colligative Properties (Osmotic Pressure, Elevation of Boiling Point).',
            summaryTextbook: 'Covers Henry’s Law, ideal & non-ideal solutions, positive and negative deviations, abnormal molar mass and Van ’t Hoff factor.',
            exerciseSolutions: [
              {
                id: 'c12-chem-ch1-q1',
                questionNo: 'Exercise 1.1 Q1',
                questionText: 'Calculate the mass percentage of benzene (C₆H₆) and carbon tetrachloride (CCl₄) if 22 g of benzene is dissolved in 122 g of carbon tetrachloride.',
                difficulty: 'Easy',
                type: 'Exercise',
                givenData: 'Mass of C₆H₆ = 22 g, Mass of CCl₄ = 122 g',
                formula: 'Mass % = (Mass of solute / Total mass of solution) × 100',
                stepByStepSolution: [
                  'Step 1: Calculate total mass of solution = 22 g + 122 g = 144 g.',
                  'Step 2: Mass % of C₆H₆ = (22 / 144) × 100 = 15.28%.',
                  'Step 3: Mass % of CCl₄ = 100% - 15.28% = 84.72%.'
                ],
                finalAnswer: 'Mass % of Benzene = 15.28% | Mass % of CCl₄ = 84.72%',
                keyTakeaway: 'Total solution mass is the sum of solute and solvent masses.',
                nepCompetencyNote: 'Foundation for pharmaceutical solution concentration compounding.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-chem-ch2',
            chapterNumber: 2,
            title: 'Electrochemistry',
            officialBookCode: 'lech1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lech102.pdf',
            nepHighlights: 'Nernst Equation EMF calculation, Kohlrausch Law & Fuel Cells.',
            summaryTextbook: 'Covers galvanic cells, Nernst equation E = E° - (RT/nF)lnQ, molar conductivity Λm, electrolysis laws, and batteries.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-chem-ch3',
            chapterNumber: 3,
            title: 'Chemical Kinetics',
            officialBookCode: 'lech1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lech103.pdf',
            nepHighlights: 'Integrated Rate Laws (First Order k = 2.303/t log[A]₀/[A]), Half-life t₁/₂ & Arrhenius Activation Energy Ea.',
            summaryTextbook: 'Covers rate of reaction, order & molecularity, integrated rate equations, pseudo first-order reactions, temperature dependence, and collision theory.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-chem-ch4',
            chapterNumber: 4,
            title: 'The d and f-Block Elements',
            officialBookCode: 'lech1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lech104.pdf',
            nepHighlights: 'Transition elements oxidation states, Lanthanoid contraction & Potassium Permanganate KMnO₄ reactions.',
            summaryTextbook: 'Examines electronic configurations, general trends in 3d series, catalytic properties, alloy formation, and actinoids contraction.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-chem-ch5',
            chapterNumber: 5,
            title: 'Coordination Compounds',
            officialBookCode: 'lech1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lech105.pdf',
            nepHighlights: 'IUPAC Naming of Complexes, Werner’s Theory, Valence Bond Theory VBT & Crystal Field Theory CFT splitting Δo.',
            summaryTextbook: 'Covers ligands, coordination number, isomerism (linkage, ionization, optical), bonding theories, and biological importance of complexes.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-chem-ch6',
            chapterNumber: 6,
            title: 'Haloalkanes & Haloarenes',
            officialBookCode: 'lech2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lech201.pdf',
            nepHighlights: 'SN1 vs SN2 Substitution Mechanisms, Inversion of Configuration & Wurtz-Fittig Reaction.',
            summaryTextbook: 'Covers nomenclature, C-X bond nature, preparation methods, physical & chemical properties, stereochemical aspects, and polyhalogen compounds.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-chem-ch7',
            chapterNumber: 7,
            title: 'Alcohols, Phenols & Ethers',
            officialBookCode: 'lech2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lech202.pdf',
            nepHighlights: 'Hydroboration-Oxidation, Reimer-Tiemann Reaction & Williamson Ether Synthesis.',
            summaryTextbook: 'Examines acidity of phenols, Kolbe’s reaction, mechanism of dehydration of alcohols to alkenes/ethers, and electrophilic aromatic substitutions.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-chem-ch8',
            chapterNumber: 8,
            title: 'Aldehydes, Ketones & Carboxylic Acids',
            officialBookCode: 'lech2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lech203.pdf',
            nepHighlights: 'Nucleophilic Addition Mechanism, Aldol Condensation, Cannizzaro Reaction & HVZ Reaction.',
            summaryTextbook: 'Covers carbonyl reactivity, Tollens’ & Fehling’s tests, iodoform test, Clemmensen & Wolff-Kishner reductions, and acidic strength of carboxylic acids.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-chem-ch9',
            chapterNumber: 9,
            title: 'Amines',
            officialBookCode: 'lech2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lech204.pdf',
            nepHighlights: 'Basic strength order of Amines in aqueous phase, Gabriel Phthalimide Synthesis & Diazonium Salts synthetic applications.',
            summaryTextbook: 'Covers classification, Hoffmann bromamide degradation, Hinsberg test, carbylamine reaction, and diazo coupling reactions.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-chem-ch10',
            chapterNumber: 10,
            title: 'Biomolecules',
            officialBookCode: 'lech2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lech205.pdf',
            nepHighlights: 'D-Glucose structure, Peptide bond in Proteins, DNA double helix structure & Enzyme denaturation.',
            summaryTextbook: 'Examines carbohydrates (monosaccharides, disaccharides, polysaccharides), amino acids, zwitterions, primary/secondary/tertiary protein structures, vitamins, and nucleic acids (DNA/RNA).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },
      {
        id: 'c12-biology',
        name: 'Biology',
        iconName: 'Dna',
        color: '#ec4899',
        description: 'Reproduction, Genetics & Evolution, Biology in Human Welfare & Biotechnology.',
        totalChapters: 13,
        coverImageUrl: '/book-covers/biology.png',
        chapters: [
          {
            id: 'c12-bio-ch1',
            chapterNumber: 1,
            title: 'Sexual Reproduction in Flowering Plants',
            officialBookCode: 'lebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebo101.pdf',
            nepHighlights: 'Microsporogenesis, Megasporogenesis & Double Fertilization mechanisms.',
            summaryTextbook: 'Covers stamen, microsporangium, pollen grain, pistil, megasporangium (ovule), embryo sac development, pollination, and apomixis.',
            exerciseSolutions: [
              {
                id: 'c12-bio-ch1-q1',
                questionNo: 'Exercise 1.1 Q1',
                questionText: 'What is triple fusion? Where and how does it take place? Name the nuclei involved in triple fusion.',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: 'Process: Double fertilization in angiosperms',
                formula: 'Male Gamete (n) + Polar Nuclei (2n) → Primary Endosperm Nucleus (3n)',
                stepByStepSolution: [
                  'Step 1: Triple fusion is the fusion of three haploid nuclei.',
                  'Step 2: It takes place inside the embryo sac of the ovule in angiosperm plants.',
                  'Step 3: One haploid male gamete (n) fuses with two polar nuclei (n + n = 2n) present in the central cell.',
                  'Step 4: This results in the formation of a triploid Primary Endosperm Nucleus (PEN, 3n) which develops into nutrient endosperm.'
                ],
                finalAnswer: 'Fusion of 1 male gamete (n) with 2 polar nuclei (2n) inside the embryo sac forming triploid endosperm (3n).',
                keyTakeaway: 'Double fertilization (Syngamy + Triple Fusion) is unique to angiosperms.',
                nepCompetencyNote: 'Key mechanism in agricultural seed yield optimization and crop breeding.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-bio-ch2',
            chapterNumber: 2,
            title: 'Human Reproduction',
            officialBookCode: 'lebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebo102.pdf',
            nepHighlights: 'Spermatogenesis, Oogenesis & Menstrual Cycle hormonal regulation.',
            summaryTextbook: 'Covers male and female reproductive systems, gametogenesis, fertilization, blastocyst implantation, pregnancy, and parturition.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-bio-ch3',
            chapterNumber: 3,
            title: 'Reproductive Health',
            officialBookCode: 'lebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebo103.pdf',
            nepHighlights: 'Contraceptive methods, STIs & Assisted Reproductive Technologies (ART: IVF, ZIFT, GIFT).',
            summaryTextbook: 'Examines reproductive health strategies, population explosion, birth control, medical termination of pregnancy (MTP), and infertility treatments.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-bio-ch4',
            chapterNumber: 4,
            title: 'Principles of Inheritance & Variation',
            officialBookCode: 'lebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebo104.pdf',
            nepHighlights: 'Mendelian Monohybrid/Dihybrid Ratios, Linkage & Pedigree Analysis.',
            summaryTextbook: 'Covers Mendel’s Laws, incomplete dominance, codominance, chromosomal theory of inheritance, sex determination, and genetic disorders.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-bio-ch5',
            chapterNumber: 5,
            title: 'Molecular Basis of Inheritance',
            officialBookCode: 'lebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebo105.pdf',
            nepHighlights: 'DNA Replication, Transcription, Lac Operon model & DNA Fingerprinting.',
            summaryTextbook: 'Examines search for genetic material, RNA world, genetic code, translation, regulation of gene expression, and Human Genome Project.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-bio-ch6',
            chapterNumber: 6,
            title: 'Evolution',
            officialBookCode: 'lebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebo106.pdf',
            nepHighlights: 'Adaptive Radiation, Hardy-Weinberg Principle & Human Evolution timeline.',
            summaryTextbook: 'Covers origin of life, evidences for evolution, Darwinian theory of natural selection, speciation, and mechanism of evolution.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-bio-ch7',
            chapterNumber: 7,
            title: 'Human Health & Disease',
            officialBookCode: 'lebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebo107.pdf',
            nepHighlights: 'Innate & Acquired Immunity, Antibody structure & Cancer/AIDS pathophysiology.',
            summaryTextbook: 'Examines common human diseases (typhoid, pneumonia, malaria, ringworm), immune system components, vaccines, and drug/alcohol abuse.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-bio-ch8',
            chapterNumber: 8,
            title: 'Microbes in Human Welfare',
            officialBookCode: 'lebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebo108.pdf',
            nepHighlights: 'Sewage Treatment Plant (STP), Biogas plant production & Biocontrol agents.',
            summaryTextbook: 'Covers microbes in household products, industrial fermentation, biofertilizers, and integrated pest management.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-bio-ch9',
            chapterNumber: 9,
            title: 'Biotechnology: Principles & Processes',
            officialBookCode: 'lebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebo109.pdf',
            nepHighlights: 'Restriction Enzymes (EcoRI), Gel Electrophoresis, PCR amplification & Bioreactors.',
            summaryTextbook: 'Covers recombinant DNA technology tools, cloning vectors (pBR322), competent host transformation, and downstream processing.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-bio-ch10',
            chapterNumber: 10,
            title: 'Biotechnology & Its Applications',
            officialBookCode: 'lebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebo110.pdf',
            nepHighlights: 'Bt Cotton (Cry proteins), RNA interference (RNAi) & Genetically Engineered Insulin.',
            summaryTextbook: 'Examines agricultural applications, gene therapy, transgenic animals, molecular diagnosis, and biopiracy ethics.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-bio-ch11',
            chapterNumber: 11,
            title: 'Organisms & Populations',
            officialBookCode: 'lebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebo111.pdf',
            nepHighlights: 'Population Growth Models (Exponential vs Logistic), Age Pyramids & Species Interactions.',
            summaryTextbook: 'Covers organism adaptations to abiotic factors, population attributes (natality, mortality, density), and interspecific relationships (mutualism, competition, predation, parasitism).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-bio-ch12',
            chapterNumber: 12,
            title: 'Ecosystem',
            officialBookCode: 'lebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebo112.pdf',
            nepHighlights: 'Energy Flow 10% Law, Ecological Pyramids & Primary/Secondary Productivity.',
            summaryTextbook: 'Covers ecosystem structure and function, decomposition steps, food chains and food webs, and ecosystem services.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-bio-ch13',
            chapterNumber: 13,
            title: 'Biodiversity & Conservation',
            officialBookCode: 'lebo1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebo113.pdf',
            nepHighlights: 'Species-Area Relationship (log S = log C + Z log A), Evil Quartet of Extinction & In-situ vs Ex-situ Conservation.',
            summaryTextbook: 'Examines genetic, species & ecological diversity, latitudinal gradients, biodiversity loss causes, national parks, biosphere reserves, and sacred groves.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },
      {
        id: 'c12-cs',
        name: 'Computer Science',
        iconName: 'Code',
        color: '#0284c7',
        description: 'Python Functions, File Handling, Stacks, Relational Databases (SQL) & Computer Networks.',
        totalChapters: 13,
        coverImageUrl: '/book-covers/cs-textbook.png',
        chapters: [
          {
            id: 'c12-cs-ch1',
            chapterNumber: 1,
            title: 'Exception Handling in Python',
            officialBookCode: 'lecs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lecs101.pdf',
            nepHighlights: 'Try-Except-Else-Finally blocks & Raising custom User-Defined Exceptions.',
            summaryTextbook: 'Covers syntax errors vs exceptions, handling built-in exceptions (ZeroDivisionError, ValueError, TypeError), and catch-all except clauses.',
            exerciseSolutions: [
              {
                id: 'c12-cs-ch1-q1',
                questionNo: 'Exercise 1.1 Q1',
                questionText: 'Write a Python function `safe_divide(a, b)` that catches ZeroDivisionError and returns None if b is zero.',
                difficulty: 'Easy',
                type: 'Exercise',
                givenData: 'Input values a and b',
                formula: 'Try-Except Error Handling',
                stepByStepSolution: [
                  'Step 1: Start `try:` block.',
                  'Step 2: Calculate `return a / b`.',
                  'Step 3: Catch `except ZeroDivisionError:`.',
                  'Step 4: Print error message and return `None`.'
                ],
                finalAnswer: 'def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        print("Error: Division by zero!")\n        return None',
                keyTakeaway: 'Exception handling prevents program termination on unexpected runtime inputs.',
                nepCompetencyNote: 'Essential robust programming paradigm in enterprise backend software systems.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-cs-ch2',
            chapterNumber: 2,
            title: 'File Handling in Python',
            officialBookCode: 'lecs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lecs102.pdf',
            nepHighlights: 'Text, Binary (Pickle) & CSV File Operations (open, read, write, append, seek, tell).',
            summaryTextbook: 'Covers file access modes (r, w, a, rb, wb), readlines(), write(), pickle.dump() & load(), and csv.reader() & writer().',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-cs-ch3',
            chapterNumber: 3,
            title: 'Stack Data Structure',
            officialBookCode: 'lecs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lecs103.pdf',
            nepHighlights: 'LIFO principle, Push, Pop, Peek operations & Expression evaluation.',
            summaryTextbook: 'Covers Linear Data Structures, Stack implementation using Python Lists, Overflow & Underflow conditions.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-cs-ch4',
            chapterNumber: 4,
            title: 'Queue Data Structure',
            officialBookCode: 'lecs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lecs104.pdf',
            nepHighlights: 'FIFO principle, Enqueue, Dequeue operations & Deque implementation.',
            summaryTextbook: 'Covers Linear Queue implementation using Lists, Front and Rear pointers, and Circular Queue basics.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-cs-ch5',
            chapterNumber: 5,
            title: 'Sorting Techniques',
            officialBookCode: 'lecs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lecs105.pdf',
            nepHighlights: 'Bubble Sort, Selection Sort & Insertion Sort algorithmic complexities O(n²).',
            summaryTextbook: 'Examines step-by-step pass logic, comparisons, swaps, and time-space efficiency analysis.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-cs-ch6',
            chapterNumber: 6,
            title: 'Searching Techniques',
            officialBookCode: 'lecs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lecs106.pdf',
            nepHighlights: 'Linear Search O(n) vs Binary Search O(log n) divide and conquer.',
            summaryTextbook: 'Covers search conditions, precondition of sorted arrays for Binary Search, and middle index computation.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-cs-ch7',
            chapterNumber: 7,
            title: 'Understanding Data',
            officialBookCode: 'lecs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lecs107.pdf',
            nepHighlights: 'Structured, Unstructured & Semi-structured data, Data Collection & Data Cleaning.',
            summaryTextbook: 'Examines data storage scale (KB to YB), data privacy, statistical measures (mean, median, mode), and data visualization basics.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-cs-ch8',
            chapterNumber: 8,
            title: 'Database Concepts',
            officialBookCode: 'lecs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lecs108.pdf',
            nepHighlights: 'RDBMS relational model, Candidate Keys, Primary Key, Foreign Key & Referential Integrity.',
            summaryTextbook: 'Covers database management system advantages, relation attributes, tuples, cardinality, degree, and relational algebra operations.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-cs-ch9',
            chapterNumber: 9,
            title: 'Structured Query Language (SQL)',
            officialBookCode: 'lecs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lecs109.pdf',
            nepHighlights: 'DDL vs DML statements, DUAL table, GROUP BY, HAVING & Single-row/Aggregate functions.',
            summaryTextbook: 'Covers MySQL queries: CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, SELECT with WHERE, ORDER BY, LIKE, BETWEEN, and JOINs.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-cs-ch10',
            chapterNumber: 10,
            title: 'Computer Networks',
            officialBookCode: 'lecs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lecs110.pdf',
            nepHighlights: 'LAN/MAN/WAN topologies (Star, Bus, Tree), Network Devices (Hub, Switch, Router) & OSI/TCP-IP models.',
            summaryTextbook: 'Examines transmission media (Twisted Pair, Coaxial, Optical Fiber, Infrared, Microwave, Radio Waves), IP addressing, and MAC addresses.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-cs-ch11',
            chapterNumber: 11,
            title: 'Data Communication',
            officialBookCode: 'lecs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lecs111.pdf',
            nepHighlights: 'Bandwidth (Hz, bps), Modulation techniques & Switching (Circuit vs Packet).',
            summaryTextbook: 'Covers data transmission modes (Simplex, Half-Duplex, Full-Duplex), collision domains, and packet routing protocols.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-cs-ch12',
            chapterNumber: 12,
            title: 'Security Aspects',
            officialBookCode: 'lecs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lecs112.pdf',
            nepHighlights: 'Cyber Threats (Phishing, Malware, Ransomware), Firewalls & IT Act Digital Safety.',
            summaryTextbook: 'Examines data encryption, digital signatures, SSL/HTTPS certificates, cyber ethics, net etiquette, and e-waste management.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-cs-ch13',
            chapterNumber: 13,
            title: 'Project Based Learning',
            officialBookCode: 'lecs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lecs113.pdf',
            nepHighlights: 'Python & MySQL integration, Real-world Capstone Software Development Lifecycle.',
            summaryTextbook: 'Covers mysql.connector library, cursor operations, database CRUD frontend integration, and software documentation standards.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },
      {
        id: 'c12-english',
        name: 'English Core',
        iconName: 'BookOpen',
        color: '#f59e0b',
        description: 'Flamingo Prose & Poetry, Vistas Supplementary Reader & Advanced Writing Skills.',
        totalChapters: 14,
        coverImageUrl: '/book-covers/english-flamingo.png',
        chapters: [
          {
            id: 'c12-eng-ch1',
            chapterNumber: 1,
            title: 'The Last Lesson (Flamingo)',
            officialBookCode: 'lefl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lefl101.pdf',
            nepHighlights: 'Linguistic chauvinism, mother tongue heritage & value of education in times of conflict.',
            summaryTextbook: 'Set during Franco-Prussian War (1870), Franz realizes the importance of learning French when an order from Berlin bans teaching French in Alsace & Lorraine schools.',
            exerciseSolutions: [
              {
                id: 'c12-eng-ch1-q1',
                questionNo: 'Exercise 1.1 Q1',
                questionText: 'What change did the order from Berlin cause in school that day?',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: 'Order from Berlin enforcing German language in Alsace schools',
                formula: 'Theme: Cultural Identity & Love for Mother Tongue',
                stepByStepSolution: [
                  'Step 1: The order created a solemn and quiet atmosphere, like a Sunday morning.',
                  'Step 2: M. Hamel wore his fine Sunday clothes (green coat and black silk cap).',
                  'Step 3: Village elders (Hauser, former mayor, former postmaster) sat quietly on the back benches to honor French.',
                  'Step 4: M. Hamel delivered his last lesson with extreme patience and wrote "Vive La France!" on the blackboard.'
                ],
                finalAnswer: 'It imposed silence, emotional gravity, and made everyone realize the value of their native language.',
                keyTakeaway: 'Language is the key to a nation’s freedom and cultural preservation.',
                nepCompetencyNote: 'NEP 2020 strongly emphasizes multilingualism and mother tongue preservation.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-ch2',
            chapterNumber: 2,
            title: 'Lost Spring (Flamingo)',
            officialBookCode: 'lefl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lefl102.pdf',
            nepHighlights: 'Child labor, vicious cycle of poverty, ragpickers of Seemapuri & bangle makers of Firozabad.',
            summaryTextbook: 'Anees Jung exposes grinding poverty and traditions that condemn children like Saheb-e-Alam and Mukesh to a life of exploitation.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-ch3',
            chapterNumber: 3,
            title: 'Deep Water (Flamingo)',
            officialBookCode: 'lefl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lefl103.pdf',
            nepHighlights: 'Overcoming deep-seated childhood phobia, perseverance, resilience & psychological courage.',
            summaryTextbook: 'William Douglas recounts his childhood terror of water after a near-drowning accident at YMCA pool and how he conquered it through dedicated training.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-ch4',
            chapterNumber: 4,
            title: 'The Rattrap (Flamingo)',
            officialBookCode: 'lefl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lefl104.pdf',
            nepHighlights: 'Human kindness, redemption, metaphorical world rattrap & transformative power of empathy.',
            summaryTextbook: 'Selma Lagerlöf’s story of a peddler who believes the world is a giant rattrap, redeemed by the unconditional compassion of Edla Willmansson.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-ch5',
            chapterNumber: 5,
            title: 'Indigo (Flamingo)',
            officialBookCode: 'lefl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lefl105.pdf',
            nepHighlights: 'Champaran satyagraha (1917), civil disobedience, self-reliance & peasant leadership by Mahatma Gandhi.',
            summaryTextbook: 'Louis Fischer details how Gandhi championed the cause of exploited sharecroppers in Champaran, marking the beginning of India’s civil disobedience movement.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-ch6',
            chapterNumber: 6,
            title: 'Poets and Pancakes (Flamingo)',
            officialBookCode: 'lefl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lefl106.pdf',
            nepHighlights: 'Behind the scenes at Gemini Studios, Indian film industry history & literary satire by Asokamitran.',
            summaryTextbook: 'Asokamitran recounts his humorous experiences in the makeup department of Gemini Studios, portraying Subbu, the office boy, and Stephen Spender’s visit.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-ch7',
            chapterNumber: 7,
            title: 'The Interview (Flamingo)',
            officialBookCode: 'lefl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lefl107.pdf',
            nepHighlights: 'Journalistic interview ethics, celebrity privacy & intellectual discourse with Umberto Eco.',
            summaryTextbook: 'Christopher Silvester explores the functions and controversies of interviews, featuring Mukund Padmanabhan’s insightful interview with scholar Umberto Eco.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-ch8',
            chapterNumber: 8,
            title: 'Going Places (Flamingo)',
            officialBookCode: 'lefl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lefl108.pdf',
            nepHighlights: 'Adolescent hero-worship, daydreaming vs harsh working-class realities by A.R. Barton.',
            summaryTextbook: 'A.R. Barton explores teenage fantasy through Sophie, who daydreams about meeting Irish football prodigy Danny Casey despite her realistic socio-economic bounds.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          // Vistas (Supplementary) Chapters (levt101 - levt106)
          {
            id: 'c12-eng-vistas-ch1',
            chapterNumber: 1,
            title: 'The Third Level (Vistas)',
            officialBookCode: 'levt1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/levt101.pdf',
            nepHighlights: 'Escapism from modern anxiety, psychological time-travel narrative & 1890s nostalgia.',
            summaryTextbook: 'Charley discovers a mysterious third level at Grand Central Station, leading back to 1894 Galesburg, Illinois.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-vistas-ch2',
            chapterNumber: 2,
            title: 'The Tiger King (Vistas)',
            officialBookCode: 'levt1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/levt102.pdf',
            nepHighlights: 'Satire on power, eco-criticism & human arrogance vs divine fate.',
            summaryTextbook: 'Satirical story of the Maharaja of Pratibandapuram who hunts 99 tigers to defy an astrological prophecy of dying by a tiger.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-vistas-ch3',
            chapterNumber: 3,
            title: 'Journey to the End of the Earth (Vistas)',
            officialBookCode: 'levt1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/levt103.pdf',
            nepHighlights: 'Climate change, Antarctic ecology, ecosystem sensitivity & Students on Ice programme.',
            summaryTextbook: 'Tishani Doshi reflects on visiting Antarctica to understand Earth’s past, present, and fragile future.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-vistas-ch4',
            chapterNumber: 4,
            title: 'The Enemy (Vistas)',
            officialBookCode: 'levt1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/levt104.pdf',
            nepHighlights: 'Professional ethics vs narrow nationalism, medical duty & universal human compassion.',
            summaryTextbook: 'Dr. Sadao Hoki saves an injured American POW during WWII, choosing human medical ethics over national enmity.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-vistas-ch5',
            chapterNumber: 5,
            title: 'On the Face of It (Vistas)',
            officialBookCode: 'levt1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/levt105.pdf',
            nepHighlights: 'Empathy towards physically challenged individuals, overcoming isolation & optimism.',
            summaryTextbook: 'Play depicting the bond between young Derry (half-burnt face) and old Mr. Lamb (tin leg), transforming Derry’s outlook on life.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-vistas-ch6',
            chapterNumber: 6,
            title: 'Memories of Childhood (Vistas)',
            officialBookCode: 'levt1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/levt106.pdf',
            nepHighlights: 'Autobiographical accounts of social discrimination, resilience & education as empowerment.',
            summaryTextbook: 'Features "The Cutting of My Long Hair" by Zitkala-Sa and "We Too are Human Beings" by Bama highlighting indigenous & caste struggles.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          // Kaleidoscope (Elective) Chapters (lekl101 - lekl121)
          {
            id: 'c12-eng-kaleidoscope-ch1',
            chapterNumber: 1,
            title: 'I Sell My Dreams (Short Stories)',
            officialBookCode: 'lekl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lekl101.pdf',
            nepHighlights: 'Magical realism, prophecy & interpretation of human destiny in Gabriel Garcia Marquez’s fiction.',
            summaryTextbook: 'Short story by Gabriel Garcia Marquez about Frau Frieda who lived by predicting the future through her dreams.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-kaleidoscope-ch2',
            chapterNumber: 2,
            title: 'Eveline (Short Stories)',
            officialBookCode: 'lekl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lekl102.pdf',
            nepHighlights: 'Paralysis of choice, familial obligation vs personal freedom in James Joyce’s Dubliners.',
            summaryTextbook: 'Story by James Joyce exploring 19-year-old Eveline’s emotional conflict when deciding to elope with Frank to Buenos Aires.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-kaleidoscope-ch3',
            chapterNumber: 3,
            title: 'A Wedding in Brownsville (Short Stories)',
            officialBookCode: 'lekl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lekl103.pdf',
            nepHighlights: 'Holocaust trauma, Jewish diaspora memory & psychological haunting by Isaac Bashevis Singer.',
            summaryTextbook: 'Dr. Solomon Margolin attends a wedding in Brooklyn and encounters Raizel, his lost childhood love from Poland.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-kaleidoscope-ch4',
            chapterNumber: 4,
            title: 'Tomorrow (Short Stories)',
            officialBookCode: 'lekl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lekl104.pdf',
            nepHighlights: 'Parental hope, obsession & tragic isolation in Joseph Conrad’s seaside narrative.',
            summaryTextbook: 'Old Captain Hagberd lives in perpetual expectation that his long-lost son Harry will return "tomorrow".',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-kaleidoscope-ch5',
            chapterNumber: 5,
            title: 'One Centimetre (Short Stories)',
            officialBookCode: 'lekl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lekl105.pdf',
            nepHighlights: 'Maternal dignity, integrity & moral values in contemporary Chinese literature by Bi Feiyu.',
            summaryTextbook: 'Tao Ying strives to preserve her self-respect and teach her son Xiao Lin moral honesty during a bus fare dispute.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-kaleidoscope-ch6',
            chapterNumber: 6,
            title: 'A Lecture Upon the Shadow (Poetry)',
            officialBookCode: 'lekl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lekl106.pdf',
            nepHighlights: 'Metaphysical conceit, symbolic shadows & love’s clarity by John Donne.',
            summaryTextbook: 'John Donne uses morning and afternoon shadows as metaphors for growing and fading romantic love.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-kaleidoscope-ch7',
            chapterNumber: 7,
            title: 'Poems by Milton (Poetry)',
            officialBookCode: 'lekl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lekl107.pdf',
            nepHighlights: 'Puritan theology, stoicism & devotion in John Milton’s "On His Blindness" & "On Time".',
            summaryTextbook: 'Includes Milton’s sonnets reflecting on his loss of sight and divine patience.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-kaleidoscope-ch8',
            chapterNumber: 8,
            title: 'Poems by Blake (Poetry)',
            officialBookCode: 'lekl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lekl108.pdf',
            nepHighlights: 'Romantic symbolism, dualism of innocence vs experience in William Blake’s poetry.',
            summaryTextbook: 'Contains Blake’s contrast between "The Divine Image" and "The Human Abstract".',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-kaleidoscope-ch9',
            chapterNumber: 9,
            title: 'Kubla Khan (Poetry)',
            officialBookCode: 'lekl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lekl109.pdf',
            nepHighlights: 'Poetic inspiration, pleasure-dome imagery & Romantic imagination by Samuel Taylor Coleridge.',
            summaryTextbook: 'Coleridge’s dream fragment depicting the exotic pleasure-dome built by Kubla Khan in Xanadu.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-kaleidoscope-ch10',
            chapterNumber: 10,
            title: 'Trees (Poetry)',
            officialBookCode: 'lekl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lekl110.pdf',
            nepHighlights: 'Feminist ecology & liberation of nature from domestic imprisonment by Adrienne Rich.',
            summaryTextbook: 'Adrienne Rich’s poem describing trees breaking free from indoor houses to return to the forest.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-kaleidoscope-ch11',
            chapterNumber: 11,
            title: 'The Wild Swans at Coole (Poetry)',
            officialBookCode: 'lekl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lekl111.pdf',
            nepHighlights: 'Aging, permanence of nature vs human mortality by W.B. Yeats.',
            summaryTextbook: 'W.B. Yeats reflects on 19 years of watching 59 swans at Coole Park, pondering personal change.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-kaleidoscope-ch12',
            chapterNumber: 12,
            title: 'Time and Time Again (Poetry)',
            officialBookCode: 'lekl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lekl112.pdf',
            nepHighlights: 'Temporal cycles, urban rhythm & Indian philosophical time by A.K. Ramanujan.',
            summaryTextbook: 'A.K. Ramanujan explores clock towers, natural disasters, and the persistent rhythm of history.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-kaleidoscope-ch13',
            chapterNumber: 13,
            title: 'Blood (Poetry)',
            officialBookCode: 'lekl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lekl113.pdf',
            nepHighlights: 'Ancestral roots, decaying feudal grandeur & maternal lineage by Kamala Das.',
            summaryTextbook: 'Kamala Das laments the decay of her ancestral house and tribute to her great-grandmother.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-kaleidoscope-ch14',
            chapterNumber: 14,
            title: 'Freedom (Non-Fiction)',
            officialBookCode: 'lekl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lekl114.pdf',
            nepHighlights: 'Political vs individual freedom, social responsibility by George Bernard Shaw.',
            summaryTextbook: 'Essay by George Bernard Shaw analyzing false vs true freedom in modern civilized society.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-kaleidoscope-ch15',
            chapterNumber: 15,
            title: 'The Mark on the Wall (Non-Fiction)',
            officialBookCode: 'lekl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lekl115.pdf',
            nepHighlights: 'Stream of consciousness narrative, psychological reflection by Virginia Woolf.',
            summaryTextbook: 'Virginia Woolf’s interior monologue triggered by observing a small dark mark on her wall.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-kaleidoscope-ch16',
            chapterNumber: 16,
            title: 'Film-making (Non-Fiction)',
            officialBookCode: 'lekl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lekl116.pdf',
            nepHighlights: 'Cinematography as visual art, director’s craft & realism by Ingmar Bergman.',
            summaryTextbook: 'Swedish film director Ingmar Bergman shares personal insights into cinema as a medium of emotion.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-kaleidoscope-ch17',
            chapterNumber: 17,
            title: 'Why the Novel Matters (Non-Fiction)',
            officialBookCode: 'lekl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lekl117.pdf',
            nepHighlights: 'Literary philosophy, celebration of physical life by D.H. Lawrence.',
            summaryTextbook: 'D.H. Lawrence argues that the novel is the supreme human instrument for understanding living man.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-kaleidoscope-ch18',
            chapterNumber: 18,
            title: 'The Argumentative Indian (Non-Fiction)',
            officialBookCode: 'lekl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lekl118.pdf',
            nepHighlights: 'Indian tradition of debate, pluralism & intellectual democracy by Amartya Sen.',
            summaryTextbook: 'Nobel laureate Amartya Sen examines India’s long history of public reasoning, dialogue, and skepticism.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-kaleidoscope-ch19',
            chapterNumber: 19,
            title: 'On Science Fiction (Non-Fiction)',
            officialBookCode: 'lekl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lekl119.pdf',
            nepHighlights: 'Futurism, technological ethics & speculative fiction by Isaac Asimov.',
            summaryTextbook: 'Isaac Asimov discusses the evolution and necessity of science fiction in a rapidly changing world.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-kaleidoscope-ch20',
            chapterNumber: 20,
            title: 'Chandalika (Drama)',
            officialBookCode: 'lekl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lekl120.pdf',
            nepHighlights: 'Caste emancipation, spiritual rebirth & human dignity by Rabindranath Tagore.',
            summaryTextbook: 'Tagore’s dance drama depicting Prakriti, an untouchable girl, whose sense of human worth is awakened by Ananda.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eng-kaleidoscope-ch21',
            chapterNumber: 21,
            title: 'Broken Images (Drama)',
            officialBookCode: 'lekl1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lekl121.pdf',
            nepHighlights: 'Post-colonial linguistic conflict, identity & digital technology in theater by Girish Karnad.',
            summaryTextbook: 'Girish Karnad’s one-act play about Manjula, a Kannada writer who achieves fame writing in English, confronted by her own digital image.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },
      {
        id: 'c12-accountancy',
        name: 'Accountancy',
        iconName: 'Building2',
        color: '#1e40af',
        description: 'Partnership Accounting, Reconstitution of Partnership, Company Accounts & Cash Flow.',
        totalChapters: 10,
        coverImageUrl: '/book-covers/accountancy-p1.png',
        chapters: [
          // Part 1: Financial Accounting / Partnership (leac101 - leac104)
          {
            id: 'c12-acc-p1-ch1',
            chapterNumber: 1,
            title: 'Accounting for Partnership: Basic Concepts',
            officialBookCode: 'leac1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leac101.pdf',
            nepHighlights: 'Partnership Deed clauses, Profit & Loss Appropriation Account & Interest on Capital.',
            summaryTextbook: 'Covers provisions of Indian Partnership Act 1932 in absence of deed, fixed vs fluctuating capital accounts, past adjustments, and guarantee of profits.',
            exerciseSolutions: [
              {
                id: 'c12-acc-ch1-q1',
                questionNo: 'Exercise 1.1 Q1',
                questionText: 'A and B are partners sharing profits in ratio 3:2 with capitals of ₹5,00,000 and ₹3,00,000. Interest on capital is allowed @ 6% p.a. Calculate interest on capital for each partner.',
                difficulty: 'Easy',
                type: 'Exercise',
                givenData: 'Capital A = ₹5,00,000, Capital B = ₹3,00,000, Rate = 6% p.a.',
                formula: 'Interest on Capital = Capital Amount × (Rate / 100)',
                stepByStepSolution: [
                  'Step 1: Interest for A = 5,00,000 × (6 / 100) = ₹30,000.',
                  'Step 2: Interest for B = 3,00,000 × (6 / 100) = ₹18,000.',
                  'Step 3: Total Interest on Capital debited to P&L Appropriation = ₹48,000.'
                ],
                finalAnswer: 'Interest on Capital: A = ₹30,000 | B = ₹18,000',
                keyTakeaway: 'Interest on capital is an appropriation of profit and allowed only when firm earns profit.',
                nepCompetencyNote: 'Essential for small business partnership financial auditing.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-acc-p1-ch2',
            chapterNumber: 2,
            title: 'Reconstitution of a Partnership Firm: Admission of a Partner',
            officialBookCode: 'leac1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leac102.pdf',
            nepHighlights: 'Sacrificing Ratio, Goodwill Valuation methods (Average Profit, Super Profit, Capitalisation) & Revaluation Account.',
            summaryTextbook: 'Covers calculation of new profit sharing ratio, accounting treatment of goodwill (AS-26), revaluation of assets and reassessment of liabilities, and adjustment of partner capitals.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-acc-p1-ch3',
            chapterNumber: 3,
            title: 'Reconstitution of a Partnership Firm: Retirement/Death of a Partner',
            officialBookCode: 'leac1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leac103.pdf',
            nepHighlights: 'Gaining Ratio calculation, Partner Loan Account settlement & Deceased partner share of profit till date of death.',
            summaryTextbook: 'Covers gaining ratio, treatment of goodwill on retirement/death, revaluation account, payment to retiring partner or executor of deceased partner, and Section 37 provisions.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-acc-p1-ch4',
            chapterNumber: 4,
            title: 'Dissolution of Partnership Firm',
            officialBookCode: 'leac1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leac104.pdf',
            nepHighlights: 'Realisation Account preparation, Settlement of Accounts (Section 48) & Partner Loan Account.',
            summaryTextbook: 'Covers difference between dissolution of partnership vs dissolution of firm, closure of books of account, preparation of Realisation Account, Partner Capital Accounts, and Bank/Cash Account.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          // Part 2: Company Accounts & Financial Statement Analysis (leac201 - leac206)
          {
            id: 'c12-acc-p2-ch5',
            chapterNumber: 5,
            title: 'Accounting for Share Capital',
            officialBookCode: 'leac2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leac201.pdf',
            nepHighlights: 'Issue of Shares at Par/Premium, Pro-rata Allotment, Calls in Arrears/Advance & Forfeiture and Reissue of Shares.',
            summaryTextbook: 'Covers categories of share capital, minimum subscription (90%), oversubscription and pro-rata allotment, journal entries for forfeiture and re-issue, and transfer to Capital Reserve.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-acc-p2-ch6',
            chapterNumber: 6,
            title: 'Issue and Redemption of Debentures',
            officialBookCode: 'leac2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leac202.pdf',
            nepHighlights: 'Debentures issued as Collateral Security, Issue conditions from Redemption perspective & Writing off Discount/Loss on Issue.',
            summaryTextbook: 'Covers types of debentures, accounting entries for issue of debentures with redemption terms (at par, discount, premium), interest on debentures, and Debenture Redemption Reserve (DRR).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-acc-p2-ch7',
            chapterNumber: 7,
            title: 'Financial Statements of a Company',
            officialBookCode: 'leac2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leac203.pdf',
            nepHighlights: 'Schedule III Part I Balance Sheet Format, Major Heads & Sub-heads & Statement of Profit and Loss.',
            summaryTextbook: 'Covers preparation and presentation of Balance Sheet and Statement of Profit and Loss of corporate enterprises as per Schedule III of Companies Act 2013, with Notes to Accounts.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-acc-p2-ch8',
            chapterNumber: 8,
            title: 'Analysis of Financial Statements',
            officialBookCode: 'leac2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leac204.pdf',
            nepHighlights: 'Comparative Statements, Common Size Statements, Tools of Financial Analysis & Limitations.',
            summaryTextbook: 'Covers objectives, significance and limitations of financial analysis, horizontal analysis (Comparative Balance Sheet and P&L), and vertical analysis (Common Size Balance Sheet and P&L).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-acc-p2-ch9',
            chapterNumber: 9,
            title: 'Accounting Ratios',
            officialBookCode: 'leac2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leac205.pdf',
            nepHighlights: 'Liquidity Ratios (Current, Quick), Solvency Ratios (Debt-Equity), Activity Ratios (Inventory Turnover) & Profitability Ratios (Gross Profit, ROI).',
            summaryTextbook: 'Covers computation and managerial interpretation of Liquidity, Solvency, Turnover, and Profitability ratios to assess solvency, efficiency, and financial health.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-acc-p2-ch10',
            chapterNumber: 10,
            title: 'Cash Flow Statement',
            officialBookCode: 'leac2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leac206.pdf',
            nepHighlights: 'AS-3 (Revised) Indirect Method: Operating Activities, Investing Activities & Financing Activities.',
            summaryTextbook: 'Covers preparation of Cash Flow Statement under AS-3 Indirect Method, calculation of operating profit before working capital changes, tax paid, and net increase/decrease in cash & cash equivalents.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },
      {
        id: 'c12-bs',
        name: 'Business Studies',
        iconName: 'Briefcase',
        color: '#d97706',
        description: 'Principles of Management, Business Environment, Financial Markets & Marketing Management.',
        totalChapters: 12,
        coverImageUrl: '/book-covers/class12-business-studies.jpg',
        chapters: [
          // Part 1: Principles and Functions of Management (lebs101 - lebs108)
          {
            id: 'c12-bs-p1-ch1',
            chapterNumber: 1,
            title: 'Nature and Significance of Management',
            officialBookCode: 'lebs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebs101.pdf',
            nepHighlights: 'Management characteristics, Objectives (Organizational, Social, Personal), Art vs Science vs Profession & Coordination essence.',
            summaryTextbook: 'Examines management definition, efficiency vs effectiveness, levels of management (Top, Middle, Supervisory), and coordination as the essence of management.',
            exerciseSolutions: [
              {
                id: 'c12-bs-ch1-q1',
                questionNo: 'Exercise 1.1 Q1',
                questionText: 'Differentiate between Effectiveness and Efficiency in management with a suitable example.',
                difficulty: 'Medium',
                type: 'Exercise',
                givenData: 'Management performance parameters',
                formula: 'Effectiveness = End Result | Efficiency = Minimum Cost & Resources',
                stepByStepSolution: [
                  'Step 1: Effectiveness means completing the task on time, regardless of cost.',
                  'Step 2: Efficiency means completing the task with minimum cost and zero wastage of resources.',
                  'Step 3: Example: A manager producing 10,000 units on time but at double the budget is Effective but Inefficient.'
                ],
                finalAnswer: 'Effectiveness focuses on end results; Efficiency focuses on cost minimization.',
                keyTakeaway: 'Successful management requires a balance of both effectiveness and efficiency.',
                nepCompetencyNote: 'Core leadership competency in corporate management & startup operations.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-bs-p1-ch2',
            chapterNumber: 2,
            title: 'Principles of Management',
            officialBookCode: 'lebs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebs102.pdf',
            nepHighlights: 'Henri Fayol’s 14 Principles of General Management & F.W. Taylor’s Scientific Management Techniques.',
            summaryTextbook: 'Covers nature and significance of management principles, Fayol’s principles (Unity of Command, Scalar Chain, Espirit de Corps), and Taylor’s scientific techniques (Time Study, Motion Study, Differential Piece Wage System).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-bs-p1-ch3',
            chapterNumber: 3,
            title: 'Business Environment',
            officialBookCode: 'lebs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebs103.pdf',
            nepHighlights: 'Dimensions of Business Environment (PESTLE: Economic, Social, Technological, Political, Legal) & Demonetization / LPG Reforms.',
            summaryTextbook: 'Covers meaning, features and importance of business environment, macro environmental dimensions, and impact of government policy changes on business and industry in India.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-bs-p1-ch4',
            chapterNumber: 4,
            title: 'Planning',
            officialBookCode: 'lebs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebs104.pdf',
            nepHighlights: 'Planning Process steps, Importance & Limitations of Planning, Single-use vs Standing Plans.',
            summaryTextbook: 'Covers setting objectives, developing premises, identifying & evaluating alternatives, selecting best plan, and types of plans (Objectives, Strategies, Policies, Procedures, Rules, Budgets).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-bs-p1-ch5',
            chapterNumber: 5,
            title: 'Organising',
            officialBookCode: 'lebs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebs105.pdf',
            nepHighlights: 'Functional vs Divisional Organizational Structure, Formal vs Informal Organization, Delegation & Decentralization.',
            summaryTextbook: 'Covers organising steps, departmentalization, span of management, delegation elements (Authority, Responsibility, Accountability), and importance of decentralization.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-bs-p1-ch6',
            chapterNumber: 6,
            title: 'Staffing',
            officialBookCode: 'lebs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebs106.pdf',
            nepHighlights: 'Staffing Process, Internal vs External Sources of Recruitment, Selection Process Steps & Training vs Development.',
            summaryTextbook: 'Examines staffing as part of Human Resource Management, recruitment sources (campus placement, advertising, agencies), selection tests & interviews, and on-the-job vs off-the-job training methods.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-bs-p1-ch7',
            chapterNumber: 7,
            title: 'Directing',
            officialBookCode: 'lebs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebs107.pdf',
            nepHighlights: 'Elements of Directing (Supervision, Motivation, Leadership, Communication), Maslow’s Need Hierarchy & Leadership Styles.',
            summaryTextbook: 'Covers principles of directing, Maslow’s hierarchy of needs, financial & non-financial incentives, autocratic/democratic/laissez-faire leadership styles, and communication barriers.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-bs-p1-ch8',
            chapterNumber: 8,
            title: 'Controlling',
            officialBookCode: 'lebs1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebs108.pdf',
            nepHighlights: 'Controlling Process steps, Relationship between Planning & Controlling, Critical Point Control (CPC) & Management by Exception (MBE).',
            summaryTextbook: 'Covers setting performance standards, measurement of actual performance, comparing actual with standards, analyzing deviations (CPC & MBE), and taking corrective action.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          // Part 2: Business Finance and Marketing (lebs201 - lebs204)
          {
            id: 'c12-bs-p2-ch9',
            chapterNumber: 9,
            title: 'Financial Management',
            officialBookCode: 'lebs2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebs201.pdf',
            nepHighlights: 'Financial Decisions (Investment, Financing, Dividend), Capital Structure (Trading on Equity) & Working Capital determinants.',
            summaryTextbook: 'Covers objectives of financial management (wealth maximization), factors affecting capital budgeting, financial planning, leverage, and fixed & working capital requirements.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-bs-p2-ch10',
            chapterNumber: 10,
            title: 'Financial Markets',
            officialBookCode: 'lebs2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebs202.pdf',
            nepHighlights: 'Money Market Instruments (Treasury Bills, Commercial Paper, Call Money) vs Capital Market (Primary vs Secondary) & SEBI Objectives.',
            summaryTextbook: 'Covers functions of financial markets, stock exchange trading & settlement procedure (Demat, Depository, NSDL, CDSL), and Securities and Exchange Board of India (SEBI) regulatory functions.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-bs-p2-ch11',
            chapterNumber: 11,
            title: 'Marketing Management',
            officialBookCode: 'lebs2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebs203.pdf',
            nepHighlights: 'Marketing Philosophies (Production, Product, Selling, Marketing, Societal) & Marketing Mix 4Ps (Product, Price, Place, Promotion).',
            summaryTextbook: 'Covers marketing vs selling, branding, packaging, labelling, factors determining price, channels of distribution, and promotion mix (Advertising, Personal Selling, Sales Promotion, Public Relations).',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-bs-p2-ch12',
            chapterNumber: 12,
            title: 'Consumer Protection',
            officialBookCode: 'lebs2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/lebs204.pdf',
            nepHighlights: 'Consumer Protection Act 2019, 6 Consumer Rights, Consumer Responsibilities & Three-tier Redressal Machinery (District, State, National).',
            summaryTextbook: 'Covers importance of consumer protection, rights (Safety, Information, Choice, Heard, Redressal, Consumer Education), relief available to consumers, and role of consumer NGOs.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },
      {
        id: 'c12-economics',
        name: 'Economics',
        iconName: 'TrendingUp',
        color: '#059669',
        description: 'Introductory Macroeconomics (National Income, Banking) & Indian Economic Development.',
        totalChapters: 14,
        coverImageUrl: '/book-covers/class12-economics.jpg',
        chapters: [
          // Part 1: Introductory Macroeconomics (leec101 - leec106)
          {
            id: 'c12-eco-p1-ch1',
            chapterNumber: 1,
            title: 'Introduction to Macroeconomics',
            officialBookCode: 'leec1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leec101.pdf',
            nepHighlights: 'Micro vs Macro Economics distinction, Capitalist Economy structure, Economic Agents & Great Depression of 1929 context.',
            summaryTextbook: 'Introduces emergence of macroeconomics, John Maynard Keynes, four sectors of the economy (households, firms, government, external), and aggregate economic indicators.',
            exerciseSolutions: [
              {
                id: 'c12-eco-ch1-q1',
                questionNo: 'Exercise 1.1 Q1',
                questionText: 'Distinguish between Microeconomics and Macroeconomics.',
                difficulty: 'Easy',
                type: 'Exercise',
                givenData: 'Economic study domains',
                formula: 'Micro = Individual units | Macro = Economy as a whole',
                stepByStepSolution: [
                  'Step 1: Microeconomics studies individual economic units (e.g. price of a single good, demand of a consumer).',
                  'Step 2: Macroeconomics studies aggregates of the entire economy (e.g. national income, inflation, aggregate demand).',
                  'Step 3: Main instruments: Micro uses Supply & Demand; Macro uses Aggregate Supply & Aggregate Demand.'
                ],
                finalAnswer: 'Microeconomics analyzes individual economic units; Macroeconomics analyzes whole economy aggregates.',
                keyTakeaway: 'Macroeconomic policies govern national fiscal health and interest rates.',
                nepCompetencyNote: 'Essential for understanding RBI monetary policy and union budget dynamics.'
              }
            ],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eco-p1-ch2',
            chapterNumber: 2,
            title: 'National Income Accounting',
            officialBookCode: 'leec1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leec102.pdf',
            nepHighlights: 'Circular Flow of Income (Two Sector Model) & Value Added, Income, Expenditure Methods, Real vs Nominal GDP & GDP Deflator.',
            summaryTextbook: 'Covers final vs intermediate goods, gross vs net investment, depreciation, basic identities of national income (GDP, GNP, NDP, NNP at MP & FC), and GDP as an indicator of welfare.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eco-p1-ch3',
            chapterNumber: 3,
            title: 'Money and Banking',
            officialBookCode: 'leec1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leec103.pdf',
            nepHighlights: 'Functions of Money, High Powered Money (M1, M2, M3, M4), Credit Creation by Commercial Banks & RBI Monetary Policy tools.',
            summaryTextbook: 'Covers barter system drawbacks, demand and supply of money, money multiplier (1/LRR), functions of Central Bank, and quantitative vs qualitative credit control measures.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eco-p1-ch4',
            chapterNumber: 4,
            title: 'Determination of Income and Employment',
            officialBookCode: 'leec1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leec104.pdf',
            nepHighlights: 'Aggregate Demand & Components, Consumption Function C = c̄ + bY, Investment Multiplier k = 1/(1-MPC) & Excess vs Deficient Demand correction.',
            summaryTextbook: 'Covers propensity to consume (APC, MPC) and save (APS, MPS), effective demand principle, short-run fixed price Keynesian equilibrium (AD = AS or S = I), and inflationary/deflationary gap.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eco-p1-ch5',
            chapterNumber: 5,
            title: 'Government Budget and the Economy',
            officialBookCode: 'leec1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leec105.pdf',
            nepHighlights: 'Objectives of Budget, Revenue vs Capital Receipts & Expenditure, Fiscal Deficit, Revenue Deficit, Primary Deficit & Measures to reduce deficit.',
            summaryTextbook: 'Covers classification of government receipts (Tax/Non-tax) and expenditure (developmental vs non-developmental), budget deficits implications, and economic stabilization role.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eco-p1-ch6',
            chapterNumber: 6,
            title: 'Open Economy Macroeconomics',
            officialBookCode: 'leec1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leec106.pdf',
            nepHighlights: 'Balance of Payments (Current & Capital Account, Autonomous vs Accommodating items), Foreign Exchange Rate determination (Fixed, Flexible, Managed Floating).',
            summaryTextbook: 'Covers BoP surplus/deficit, merchandise trade balance vs invisibles balance, foreign exchange rate determination by demand and supply, appreciation vs depreciation.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          // Part 2: Indian Economic Development (leec201 - leec208)
          {
            id: 'c12-eco-p2-ch7',
            chapterNumber: 7,
            title: 'Indian Economy on the Eve of Independence',
            officialBookCode: 'leec2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leec201.pdf',
            nepHighlights: 'Colonial exploitation of Agriculture (Zamindari system), Commercialisation of Crops, De-industrialization of Handicrafts & Demographic Profile in 1947.',
            summaryTextbook: 'Covers state of Indian economy under British rule: stagnant agriculture, decay of handicrafts, adverse foreign trade composition, literacy, and introduction of Railways in 1850.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eco-p2-ch8',
            chapterNumber: 8,
            title: 'Indian Economy (1950–1990)',
            officialBookCode: 'leec2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leec202.pdf',
            nepHighlights: 'Goals of 5-Year Plans (Growth, Modernisation, Self-reliance, Equity), Land Reforms, Green Revolution (HYV Seeds) & IPR 1956.',
            summaryTextbook: 'Covers mixed economy model, Planning Commission (1950) headed by PC Mahalanobis, agrarian reforms (abolition of intermediaries, land ceiling), Green Revolution phases, and IPR 1956.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eco-p2-ch9',
            chapterNumber: 9,
            title: 'Liberalisation, Privatisation and Globalisation: An Appraisal',
            officialBookCode: 'leec2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leec203.pdf',
            nepHighlights: '1991 BoP Crisis triggers, NEP 1991 Reforms: Deregulation of Industrial sector, Financial sector, Disinvestment, WTO Agreements & Outsourcing.',
            summaryTextbook: 'Examines economic crisis of 1991 (forex reserve depletion), structural adjustment reforms, dismantling of industrial licensing, tax reforms, privatization of PSUs, and WTO.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eco-p2-ch10',
            chapterNumber: 10,
            title: 'Human Capital Formation in India',
            officialBookCode: 'leec2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leec204.pdf',
            nepHighlights: 'Sources of Human Capital (Education, Health, On-the-job training, Migration, Information), Human Capital vs Human Development & Right to Education (RTE).',
            summaryTextbook: 'Covers distinction between physical capital and human capital, economic growth linkage, regulatory bodies (UGC, AICTE, NCERT, ICMR), and challenges in Indian education and healthcare.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eco-p2-ch11',
            chapterNumber: 11,
            title: 'Rural Development',
            officialBookCode: 'leec2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leec205.pdf',
            nepHighlights: 'Rural Credit (NABARD, SHGs, Microcredit), Agricultural Marketing reforms (APMC, e-NAM) & Diversification (Horticulture, Organic Farming, Dairy).',
            summaryTextbook: 'Examines rural poverty alleviation, institutional credit expansion, self-help groups (SHGs), agricultural market infrastructure, and benefits of organic farming for sustainable rural livelihoods.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eco-p2-ch12',
            chapterNumber: 12,
            title: 'Employment: Growth, Informalisation and Other Issues',
            officialBookCode: 'leec2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leec206.pdf',
            nepHighlights: 'Worker-Population Ratio (WPR), Formal vs Informal Sector Employment, Informalisation of Workforce & Types of Unemployment.',
            summaryTextbook: 'Covers economic participation rates across rural/urban and gender divides, self-employed vs regular salaried vs casual wage laborers, jobless growth trends, and MGNREGA.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eco-p2-ch13',
            chapterNumber: 13,
            title: 'Environment and Sustainable Development',
            officialBookCode: 'leec2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leec207.pdf',
            nepHighlights: 'Carrying Capacity, Absorptive Capacity, Global Warming, Ozone Depletion & Sustainable Development strategies (Solar Power, Wind, Bio-composting, CNG).',
            summaryTextbook: 'Covers functions of the environment, environmental degradation causes, Brundtland Commission definition of sustainable development, and traditional eco-friendly practices.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-eco-p2-ch14',
            chapterNumber: 14,
            title: 'Comparative Development Experiences of India and its Neighbours',
            officialBookCode: 'leec2',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/leec208.pdf',
            nepHighlights: 'Development Indicators comparison: India vs China vs Pakistan (GDP growth rate, Sectoral contribution, HDI, Great Leap Forward 1958, One Child Policy).',
            summaryTextbook: 'Comparative analysis of development path chosen by India, China, and Pakistan from 1950s onwards: China’s Great Leap Forward (GLF) and Commune system, Pakistan’s development plans, and demographic HDI indicators.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },
      {
        id: 'c12-geography',
        name: 'Geography (भूगोल)',
        iconName: 'Compass',
        color: '#10b981',
        description: 'Fundamentals of Human Geography & India: People and Economy, plus Class 12 Board Exam 64/3/1 Solved Paper with Hidden Answers.',
        totalChapters: 3,
        coverImageUrl: '/book-covers/class12-geography.jpg',
        chapters: [
          {
            id: 'c12-geo-paper-64-3-1',
            chapterNumber: 0,
            title: 'CBSE Board Exam 2024: Solved Paper (Code 64/3/1) with Hidden Answers',
            officialBookCode: 'paper-64-3-1',
            officialPdfUrl: '/cbse-class12-geography-64-3-1-paper-solutions.html',
            nepHighlights: 'All 30 Questions (17 MCQs, Source Passages, Short & Long Answers, World & India Maps) solved with hidden answers.',
            summaryTextbook: 'Interactive self-testing studio with instant MCQ feedback, expandable step-by-step marking schemes, and bilingual English-Hindi text.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-geo-ch1',
            chapterNumber: 1,
            title: 'Human Geography: Nature and Scope (मानव भूगोल: प्रकृति एवं विषय क्षेत्र)',
            officialBookCode: 'legy1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/legy101.pdf',
            nepHighlights: 'Environmental Determinism, Possibilism, and Neo-Determinism (Griffith Taylor).',
            summaryTextbook: 'Covers humanization of nature, naturalization of humans, and schools of thought in human geography.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-geo-ch2',
            chapterNumber: 2,
            title: 'The World Population: Distribution, Density and Growth (विश्व जनसंख्या)',
            officialBookCode: 'legy1',
            officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/legy102.pdf',
            nepHighlights: 'Demographic Transition Theory, Crude Birth/Death Rates, and Population Pyramids.',
            summaryTextbook: 'Patterns of population distribution, density factors (geographical, economic, socio-cultural), and stages of demographic transition.',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },
      {
        id: 'c12-political-science',
        name: 'Political Science (समकालीन विश्व राजनीति)',
        iconName: 'Globe',
        color: '#04AA6D',
        description: 'दो ध्रुवीयता का अंत, समकालीन विश्व में अमेरिकी वर्चस्व, सत्ता के वैकल्पिक केंद्र, दक्षिण एशिया, अंतरराष्ट्रीय संगठन एवं सुरक्षा।',
        totalChapters: 7,
        coverImageUrl: '/book-covers/class12-political-science.jpg',
        chapters: [
          {
            id: 'c12-pol-ch1',
            chapterNumber: 1,
            title: 'दो ध्रुवीयता का अंत (The End of Bipolarity)',
            officialBookCode: 'lhps1',
            officialPdfUrl: '/pdf/Class 12/12th Samkalin Vishwa Rajniti/lhps101.pdf',
            nepHighlights: 'बर्लिन की दीवार का गिरना, सोवियत संघ का विघटन (1991), गोर्बाचेव के सुधार (ग्लासनोस्त व पेरेस्त्रोइका), शॉक थेरेपी, भारत-रूस संबंध।',
            summaryTextbook: 'शीतयुद्ध के चरम प्रतीक बर्लिन की दीवार के गिरने (1989) से लेकर सोवियत संघ के विघटन (दिसंबर 1991) तक की घटनाओं का विश्लेषण। द्वि-ध्रुवीय विश्व के पतन, शॉक थेरेपी की नीति और नए स्वतंत्र राज्यों पर इसके प्रभाव का अध्ययन।',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-pol-ch2',
            chapterNumber: 2,
            title: 'सत्ता के समकालीन केंद्र (Contemporary Centres of Power)',
            officialBookCode: 'lhps1',
            officialPdfUrl: '/pdf/Class 12/12th Samkalin Vishwa Rajniti/lhps102.pdf',
            nepHighlights: 'यूरोपीय संघ (EU), आसियान (ASEAN), चीन का आर्थिक उत्थान, ब्रिक्स (BRICS), अमेरिकी वर्चस्व को चुनौती।',
            summaryTextbook: 'अमेरिकी एकध्रुवीय वर्चस्व को संतुलित करने वाले नए शक्ति केंद्रों का विश्लेषण - यूरोपीय संघ की एकीकरण यात्रा, दक्षिण-पूर्व एशिया में आसियान की भूमिका और चीन की आर्थिक शक्ति का वैश्विक प्रभाव।',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-pol-ch3',
            chapterNumber: 3,
            title: 'समकालीन दक्षिण एशिया (South Asia in the Contemporary World)',
            officialBookCode: 'lhps1',
            officialPdfUrl: '/pdf/Class 12/12th Samkalin Vishwa Rajniti/lhps103.pdf',
            nepHighlights: 'SAARC, भारत-पाक संबंध, श्रीलंका जातीय संघर्ष, नेपाल-बांग्लादेश की राजनीति, परमाणु संपन्न पड़ोसी।',
            summaryTextbook: 'दक्षिण एशिया के देशों की आंतरिक राजनीति और पारस्परिक संबंधों का विश्लेषण - भारत-पाकिस्तान तनाव, श्रीलंका में जातीय संघर्ष, नेपाल में लोकतंत्र की यात्रा और SAARC की संभावनाएं व सीमाएं।',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-pol-ch4',
            chapterNumber: 4,
            title: 'अंतर्राष्ट्रीय संगठन (International Organisations)',
            officialBookCode: 'lhps1',
            officialPdfUrl: '/pdf/Class 12/12th Samkalin Vishwa Rajniti/lhps104.pdf',
            nepHighlights: 'संयुक्त राष्ट्र संघ (UNO), सुरक्षा परिषद, IMF, विश्व बैंक, WTO एवं भारत की स्थायी सदस्यता की माँग।',
            summaryTextbook: 'वैश्विक शांति और विकास के लिए बनाए गए अंतर्राष्ट्रीय संगठनों की संरचना, कार्य और सीमाओं का विश्लेषण। संयुक्त राष्ट्र सुरक्षा परिषद में सुधार और भारत की स्थायी सदस्यता की दावेदारी।',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-pol-ch5',
            chapterNumber: 5,
            title: 'समकालीन विश्व में सुरक्षा (Security in the Contemporary World)',
            officialBookCode: 'lhps1',
            officialPdfUrl: '/pdf/Class 12/12th Samkalin Vishwa Rajniti/lhps105.pdf',
            nepHighlights: 'पारंपरिक बनाम अपारंपरिक सुरक्षा, आतंकवाद, परमाणु प्रसार, मानव सुरक्षा, सहयोगी सुरक्षा एवं भारत की सुरक्षा नीति।',
            summaryTextbook: 'सुरक्षा की पारंपरिक अवधारणा (सैन्य खतरे) से अपारंपरिक अवधारणाओं (आतंकवाद, पर्यावरण, महामारी, मानव तस्करी) की ओर वैश्विक बदलाव। सहयोगी सुरक्षा के सिद्धांत और भारत की सुरक्षा नीति का विश्लेषण।',
            exerciseSolutions: [
              {
                id: 'c12-pol-ch5-q1',
                questionNo: 'NCERT Q1',
                questionText: 'सुरक्षा की पारंपरिक और अपारंपरिक धारणा में क्या मुख्य अंतर है? (What is the key difference between traditional and non-traditional notions of security?)',
                difficulty: 'Medium',
                type: 'Exercise',
                stepByStepSolution: [
                  '1. खतरे का स्रोत (Source of Threat): पारंपरिक सुरक्षा में खतरा मुख्य रूप से किसी बाहरी संप्रभु राष्ट्र के सैन्य आक्रमण से होता है। जबकि अपारंपरिक सुरक्षा में खतरे सीमाओं के पार से आते हैं—जैसे आतंकवाद, भुखमरी, वैश्विक निर्धनता, महामारियाँ (COVID/HIV) और जलवायु परिवर्तन।',
                  '2. सुरक्षा का केंद्र बिंदु (Referent Object): पारंपरिक सुरक्षा का केंद्रबिंदु \'राज्य\' (State) तथा उसकी सीमा व संप्रभुता होती है। अपारंपरिक सुरक्षा का केंद्रबिंदु \'व्यक्ति\' (मानव सुरक्षा) तथा समस्त मानव जाति (वैश्विक सुरक्षा) होती है।',
                  '3. समाधान के उपाय (Methods): पारंपरिक सुरक्षा में सैन्य शक्ति, शक्ति संतुलन, गठबंधन और युद्ध की तैयारी मुख्य उपाय हैं। अपारंपरिक सुरक्षा में अंतरराष्ट्रीय सहयोग, संयुक्त राष्ट्र, विश्व स्वास्थ्य संगठन जैसी संस्थाएँ, मानवाधिकार और कूटनीति मुख्य साधन हैं।'
                ],
                finalAnswer: 'पारंपरिक सुरक्षा राज्य-केंद्रित एवं सैन्य खतरों से संबंधित है; जबकि अपारंपरिक सुरक्षा मानव-केंद्रित एवं बहुआयामी वैश्विक खतरों से संबंधित है।',
                keyTakeaway: 'Traditional security focuses on state survival via military means, whereas non-traditional security prioritizes human well-being and transnational cooperation.'
              },
              {
                id: 'c12-pol-ch5-q2',
                questionNo: 'NCERT Q2',
                questionText: '\'शक्ति संतुलन\' (Balance of Power) से आप क्या समझते हैं? कोई देश इसे कैसे कायम रखता है?',
                difficulty: 'Medium',
                type: 'Exercise',
                stepByStepSolution: [
                  '1. शक्ति संतुलन की अवधारणा: शक्ति संतुलन का अभिप्राय यह है कि कोई भी पड़ोसी राष्ट्र या प्रतिद्वंद्वी इतना अधिक शक्तिशाली न हो जाए कि वह भविष्य में अन्य राष्ट्रों की संप्रभुता या स्वतंत्रता को कुचल सके।',
                  '2. सैन्य विस्तार व आधुनिकीकरण: राष्ट्र अपनी थलसेना, नौसेना एवं वायुसेना को आधुनिक शस्त्रों, मिसाइल प्रणालियों और तकनीक से सशक्त बनाए रखते हैं।',
                  '3. आर्थिक सुदृढ़ता: आधुनिक सैन्य शक्ति का आधार मजबूत अर्थव्यवस्था है; आर्थिक रूप से संपन्न देश ही लंबे समय तक रक्षा अनुसंधान और हथियार उत्पादन को वहन कर सकता है।',
                  '4. गठबंधन निर्माण (Alliance Building): समान सुरक्षा हितों वाले मित्र राष्ट्रों के साथ रणनीतिक व सैन्य समझौते करना ताकि आक्रमण की स्थिति में संयुक्त रूप से जवाब दिया जा सके।'
                ],
                finalAnswer: 'शक्ति संतुलन पड़ोसी देशों के बीच सैन्य, आर्थिक और तकनीकी सामर्थ्य का ऐसा संतुलन है जिससे कोई एक देश प्रभुत्व स्थापित न कर सके।',
                keyTakeaway: 'Balance of power is maintained through military modernization, robust economic growth, and diplomatic alliance formation.'
              },
              {
                id: 'c12-pol-ch5-q3',
                questionNo: 'NCERT Q3',
                questionText: 'सैन्य खतरे की स्थिति में किसी देश की सरकार के पास कौन-से तीन बुनियादी विकल्प होते हैं? (Three choices in war)',
                difficulty: 'Easy',
                type: 'Exercise',
                stepByStepSolution: [
                  '1. आत्मसमर्पण करना (Surrender): युद्ध में होने वाले जान-माल के भारी नुकसान से बचने के लिए बिना लड़े शत्रु की मांगें स्वीकार कर लेना (हालाँकि कोई भी स्वाभिमानी राष्ट्र इसे औपचारिक नीति नहीं बनाता)।',
                  '2. अपरोध की नीति (Deterrence): शत्रु को यह आभास करा देना कि युद्ध करने की स्थिति में उसे ऐसा असहनीय और विनाशकारी नुकसान उठाना पड़ेगा जिसकी भरपाई संभव नहीं होगी, जिससे वह आक्रमण का विचार ही त्याग दे।',
                  '3. रक्षा करना (Defence): यदि युद्ध छिड़ ही जाए तो अपनी पूर्ण सैन्य शक्ति से आक्रमणकारी का मुकाबला करना और उसके सैन्य उद्देश्यों को पराजित करना ताकि अपनी सीमाओं की रक्षा हो सके।'
                ],
                finalAnswer: 'युद्ध के समय तीन विकल्प होते हैं: आत्मसमर्पण (Surrender), अपरोध (Deterrence) और रक्षा (Defence)।',
                keyTakeaway: 'Deterrence aims at preventing war altogether; Defence aims at limiting or defeating the aggressor once war begins.'
              },
              {
                id: 'c12-pol-ch5-q4',
                questionNo: 'NCERT Q4',
                questionText: 'भारत की सुरक्षा नीति के चार प्रमुख घटकों का संक्षिप्त विवरण दीजिए। (Four Pillars of India\'s Security Strategy)',
                difficulty: 'Hard',
                type: 'Exercise',
                stepByStepSolution: [
                  '1. पहला घटक - सैन्य क्षमता सुदृढ़ करना: पड़ोसी देशों (चीन और पाकिस्तान) के साथ हुए युद्धों को देखते हुए भारत ने आधुनिक सेना तैयार की तथा 1974 व 1998 में परमाणु परीक्षण कर विश्वसनीय निवारक क्षमता हासिल की।',
                  '2. दूसरा घटक - अंतरराष्ट्रीय नियमों और संस्थाओं का समर्थन: जवाहरलाल नेहरू के नेतृत्व में गुटनिरपेक्षता (NAM) को बढ़ावा दिया, सार्वभौमिक निःशस्त्रीकरण की वकालत की तथा संयुक्त राष्ट्र (UN) के शांति अभियानों में सक्रिय योगदान दिया।',
                  '3. तीसरा घटक - आंतरिक सुरक्षा और लोकतांत्रिक एकता: पूर्वोत्तर (मिजोरम, नागालैंड), पंजाब और कश्मीर में अलगाववादी आंदोलनों को लोकतांत्रिक ढांचे के अंतर्गत संवाद व समझौते द्वारा हल कर राष्ट्रीय एकता को सुरक्षित रखा।',
                  '4. चौथा घटक - तीव्र एवं समावेशी आर्थिक विकास: देश को निर्धनता, भुखमरी और असमानता से उबारने के लिए आर्थिक सुधार करना, क्योंकि आर्थिक रूप से कमजोर राष्ट्र सच्चे अर्थों में सुरक्षित नहीं हो सकता।'
                ],
                finalAnswer: 'भारत की सुरक्षा नीति सैन्य मजबूती, अंतरराष्ट्रीय सहयोग, आंतरिक एकता और तीव्र आर्थिक विकास के चार स्तंभों पर टिकी है।',
                keyTakeaway: 'India combines hard power (military deterrence) with soft power (international multilateralism) and domestic economic resilience.'
              }
            ],
            competencyQuestions: [
              {
                id: 'c12-pol-ch5-cq1',
                questionNo: 'NEP Case-Study 1',
                questionText: 'केस स्टडी: 11 सितंबर 2001 (9/11) को अमेरिका पर हुए आतंकवादी हमले ने वैश्विक सुरक्षा की किस पारंपरिक धारणा को पूरी तरह बदल दिया?',
                difficulty: 'Medium',
                type: 'Competency',
                stepByStepSolution: [
                  '1. 9/11 से पूर्व शक्तिशाली पश्चिमी देश यह मानते थे कि उनकी विशाल सेनाएं, भौगोलिक दूरी और आधुनिक मिसाइलें उन्हें बाहरी हमलों से पूर्णतः सुरक्षित रखती हैं।',
                  '2. 9/11 हमले ने सिद्ध किया कि गैर-राज्यीय कर्ता (Non-State Actors / Terrorist Networks) सामान्य यात्री विमानों को हथियार बनाकर दुनिया के सबसे शक्तिशाली देश को उसकी ही धरती पर भारी नुकसान पहुँचा सकते हैं।',
                  '3. इसके परिणामस्वरूप सुरक्षा की अपारंपरिक धारणा में \'अंतरराष्ट्रीय आतंकवाद\' सबसे बड़ा वैश्विक खतरा बनकर उभरा, जिसके विरुद्ध अंतरराष्ट्रीय खुफिया सहयोग और कड़े वित्तीय प्रतिबंध आवश्यक हो गए।'
                ],
                finalAnswer: '9/11 ने साबित किया कि पारंपरिक सेना और परमाणु हथियार आतंकवाद जैसे असममित अपारंपरिक खतरों से अकेले सुरक्षा प्रदान नहीं कर सकते।',
                keyTakeaway: 'Terrorism shifted security doctrine from interstate military warfare to non-state transnational asymmetric threat management.'
              },
              {
                id: 'c12-pol-ch5-cq2',
                questionNo: 'CBSE HOTS 2',
                questionText: 'अभिकथन (A): भारत ने 1968 की परमाणु अप्रसार संधि (NPT) पर हस्ताक्षर करने से इनकार कर दिया। कारण (R): यह संधि उन देशों को परमाणु अधिकार देती है जिन्होंने 1 जनवरी 1967 से पूर्व परीक्षण कर लिया था और अन्य पर पूर्ण प्रतिबंध लगाती है।',
                difficulty: 'Medium',
                type: 'Competency',
                stepByStepSolution: [
                  '1. विश्लेषण: भारत सदैव सार्वभौमिक और भेदभाव-रहित निःशस्त्रीकरण का समर्थक रहा है।',
                  '2. NPT संधि विश्व को परमाणु \'सम्पन्न\' (P-5 देश) और परमाणु \'विहीन\' देशों में बाँटती है, जो समानता के सिद्धांत के विरुद्ध है।',
                  '3. अतः दोनों कथन सत्य हैं तथा कारण (R), अभिकथन (A) की सही व्याख्या करता है।'
                ],
                finalAnswer: 'सही उत्तर: (A) और (R) दोनों सत्य हैं और (R), (A) की सही व्याख्या करता है।',
                keyTakeaway: 'India opposes discriminatory nuclear cartels (like NPT) while committing to a No-First-Use (NFU) credible minimum deterrence.'
              }
            ],
            quiz: [
              {
                id: 'c12-pol-ch5-qz1',
                question: 'सुरक्षा का सबसे बुनियादी अर्थ क्या है? (What is the fundamental meaning of security?)',
                options: [
                  'अत्यधिक हथियारों का भंडारण',
                  'खतरों से आज़ादी (Freedom from threats)',
                  'अन्य देशों पर सैन्य विजय',
                  'किसी भी संधि पर हस्ताक्षर न करना'
                ],
                correctIndex: 1,
                explanation: 'सुरक्षा का बुनियादी अर्थ खतरों से मुक्ति है, विशेषकर उन खतरों से जो संप्रभुता और जीवन को नष्ट कर सकते हैं।'
              },
              {
                id: 'c12-pol-ch5-qz2',
                question: 'युद्ध की आशंका को रोकने के लिए अपनी सैन्य क्षमता दिखाकर शत्रु को हमला न करने के लिए विवश करना क्या कहलाता है?',
                options: [
                  'अपरोध (Deterrence)',
                  'आत्मसमर्पण (Surrender)',
                  'रक्षा (Defence)',
                  'तुष्टिकरण (Appeasement)'
                ],
                correctIndex: 0,
                explanation: 'अपरोध (Deterrence) का उद्देश्य युद्ध शुरू होने से पहले ही शत्रु को यह समझाना है कि आक्रमण की कीमत असहनीय होगी।'
              },
              {
                id: 'c12-pol-ch5-qz3',
                question: 'जैविक हथियार संधि (BWC) किस वर्ष में सम्पन्न हुई थी?',
                options: [
                  '1968',
                  '1972',
                  '1992',
                  '1998'
                ],
                correctIndex: 1,
                explanation: 'BWC पर 1972 में हस्ताक्षर हुए जिसमें जैविक हथियारों के उत्पादन और भंडारण पर पूर्ण प्रतिबंध लगाया गया।'
              },
              {
                id: 'c12-pol-ch5-qz4',
                question: 'रासायनिक हथियार संधि (CWC) किस वर्ष हस्ताक्षरित हुई?',
                options: [
                  '1972',
                  '1985',
                  '1992',
                  '2001'
                ],
                correctIndex: 2,
                explanation: 'CWC 1992 में सम्पन्न हुई और 181 से अधिक राष्ट्रों ने रासायनिक हथियारों को प्रतिबंधित करने का संकल्प लिया।'
              },
              {
                id: 'c12-pol-ch5-qz5',
                question: 'मानव सुरक्षा (Human Security) की अवधारणा में मुख्य रूप से किसकी रक्षा पर बल दिया जाता है?',
                options: [
                  'केवल राज्य और उसकी सीमाओं की',
                  'व्यक्तियों और मानव समुदाय की (Individuals and Humanity)',
                  'राजनीतिक दलों की',
                  'बहुराष्ट्रीय निगमों की'
                ],
                correctIndex: 1,
                explanation: 'मानव सुरक्षा का केंद्र बिंदु राज्य के स्थान पर आम व्यक्ति होता है; इसमें अभाव से मुक्ति (Freedom from want) व भय से मुक्ति शामिल है।'
              },
              {
                id: 'c12-pol-ch5-qz6',
                question: 'भारत ने अपना दूसरा सफल पोखरण परमाणु परीक्षण किस वर्ष किया था?',
                options: [
                  '1974',
                  '1991',
                  '1998',
                  '2004'
                ],
                correctIndex: 2,
                explanation: 'मई 1998 में भारत ने 5 सफल भूमिगत परमाणु परीक्षण कर अपनी न्यूनतम विश्वसनीय परमाणु निवारक क्षमता स्थापित की।'
              }
            ]
          },
          {
            id: 'c12-pol-ch6',
            chapterNumber: 6,
            title: 'पर्यावरण और प्राकृतिक संसाधन (Environment and Natural Resources)',
            officialBookCode: 'lhps1',
            officialPdfUrl: '/pdf/Class 12/12th Samkalin Vishwa Rajniti/lhps106.pdf',
            nepHighlights: 'जलवायु परिवर्तन, रियो सम्मेलन (1992), क्योटो प्रोटोकॉल, पेरिस समझौता (2015), स्वदेशी अधिकार, भारत की पर्यावरण नीति।',
            summaryTextbook: 'वैश्विक पर्यावरणीय संकट और प्राकृतिक संसाधनों पर बढ़ते दबाव का विश्लेषण। रियो पृथ्वी सम्मेलन, क्योटो प्रोटोकॉल और पेरिस जलवायु समझौते के माध्यम से विकसित-विकासशील देशों के बीच समान परंतु विभेदित उत्तरदायित्व का सिद्धांत।',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-pol-ch7',
            chapterNumber: 7,
            title: 'वैश्वीकरण (Globalisation)',
            officialBookCode: 'lhps1',
            officialPdfUrl: '/pdf/Class 12/12th Samkalin Vishwa Rajniti/lhps107.pdf',
            nepHighlights: 'वैश्वीकरण की अवधारणा, आर्थिक एकीकरण, WTO, बहुराष्ट्रीय कंपनियाँ, भारत पर वैश्वीकरण का प्रभाव, विरोध और आलोचना।',
            summaryTextbook: 'वैश्वीकरण की अवधारणा, उसके आर्थिक, सांस्कृतिक और राजनैतिक आयामों का विश्लेषण। WTO, बहुराष्ट्रीय कंपनियों और वित्तीय बाजारों के प्रभाव तथा विकासशील देशों पर वैश्वीकरण के सकारात्मक-नकारात्मक प्रभावों का अध्ययन।',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      },
      {
        id: 'c12-history',
        name: 'History (भारतीय इतिहास के कुछ विषय)',
        iconName: 'Landmark',
        color: '#d97706',
        description: 'Themes in Indian History Parts I, II & III (भारतीय इतिहास के कुछ विषय भाग 1, 2 व 3): Harappa, Early States, Kinship, Thinkers & Stupas, Travellers, Bhakti-Sufi, Vijayanagara, Peasants & Mughals, Colonialism, 1857 Revolt, Mahatma Gandhi, Partition & Framing Constitution.',
        totalChapters: 12,
        coverImageUrl: '/book-covers/class12-history.jpg',
        chapters: [
          {
            id: 'c12-hist-ch1',
            chapterNumber: 1,
            title: 'ईंटें, मनके तथा अस्थियाँ — हड़प्पा सभ्यता (Bricks, Beads and Bones — The Harappan Civilisation)',
            officialBookCode: 'lehs1',
            officialPdfUrl: '/pdf/Class 12/12th Themes in Indian History-I/lehs101.pdf',
            nepHighlights: 'सिंधु घाटी सभ्यता, मुहरें, नगर नियोजन, मोहनजोदड़ो का दुर्ग व निचला शहर, विशाल स्नानागार, मनके निर्माण व चन्हुदड़ो, मुहरबंदियाँ, बाट व माप, लिपि, सामाजिक विषमताएं व सभ्यता का अंत।',
            summaryTextbook: 'हड़प्पा अथवा सिंधु घाटी सभ्यता की पुरातात्विक खोज, नगर योजना, जल निकास प्रणाली, शिल्प उत्पादन, सामाजिक एवं आर्थिक जीवन, व्यापारिक संबंध और सभ्यता के पतन के पुरातात्विक साक्ष्यों का समग्र विश्लेषण।',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-hist-ch2',
            chapterNumber: 2,
            title: 'राजा, किसान और नगर — आरंभिक राज्य और अर्थव्यवस्थाएं (Kings, Farmers and Towns)',
            officialBookCode: 'lehs1',
            officialPdfUrl: '/pdf/Class 12/12th Themes in Indian History-I/lehs102.pdf',
            nepHighlights: 'सोलह महाजनपद, मगध का उत्कर्ष, मौर्य साम्राज्य (चंद्रगुप्त, अशोक के अभिलेख व धम्म), कुषाण व गुप्त कालीन राजा, अग्रहार अनुदान, जेम्स प्रिंसेप द्वारा ब्राह्मी व खरोष्ठी लिपि का पढ़ना।',
            summaryTextbook: 'ईसा पूर्व छठी शताब्दी से छठी शताब्दी ईस्वी तक राजनीतिक और आर्थिक इतिहास। 16 महाजनपदों, मौर्य साम्राज्य के प्रशासन, भूमिदान, व्यापारिक श्रेणियों और अभिलेखीय साक्ष्यों की सीमाओं का अध्ययन।',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-hist-ch3',
            chapterNumber: 3,
            title: 'बंधुत्व, जाति तथा वर्ग — आरंभिक समाज (Kinship, Caste and Class — Early Societies)',
            officialBookCode: 'lehs1',
            officialPdfUrl: '/pdf/Class 12/12th Themes in Indian History-I/lehs103.pdf',
            nepHighlights: 'महाभारत का समालोचनात्मक संस्करण (वी.एस. सुखथाणकर), पितृवंशिकता, विवाह के नियम व 8 प्रकार, गोत्र प्रणाली, वर्ण व्यवस्था, जाति और सामाजिक गतिशीलता, एकलव्य व मातंग जातक, स्त्रीधन व संपत्ति अधिकार।',
            summaryTextbook: 'महाभारत के वृहद विश्लेषण द्वारा प्राचीन भारतीय समाज में परिवार, विवाह, जाति, वर्ण, सामाजिक विषमताएं, महिलाओं की स्थिति और शक्ति के स्रोतों का गहन ऐतिहासिक मूल्यांकन।',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-hist-ch4',
            chapterNumber: 4,
            title: 'विचारक, विश्वास और इमारतें — सांस्कृतिक विकास (Thinkers, Beliefs and Buildings)',
            officialBookCode: 'lehs1',
            officialPdfUrl: '/pdf/Class 12/12th Themes in Indian History-I/lehs104.pdf',
            nepHighlights: 'सांची का स्तूप और शाहजहाँ बेगम का संरक्षण, यज्ञ व दार्शनिक वाद-विवाद, महावीर स्वामी व जैन धर्म के सिद्धांत, गौतम बुद्ध की शिक्षाएं व बौद्ध संघ, हीनयान-महायान, अमरावती व सांची स्तूप की तुलना, आरंभिक मंदिर।',
            summaryTextbook: 'ईसा पूर्व प्रथम सहस्राब्दी में विश्व और भारत में बौद्धिक व धार्मिक क्रांति। वैदिक परंपराएं, जैन धर्म के त्रिरत्न, बौद्ध धर्म का प्रसार, स्तूप वास्तुकला और मूर्तिकला के प्रतीकों का विस्तृत अध्ययन।',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-hist-ch5',
            chapterNumber: 5,
            title: 'यात्रियों के नज़रिए — समाज के बारे में उनकी समझ (Through the Eyes of Travellers)',
            officialBookCode: 'lhhs2',
            officialPdfUrl: '/pdf/Class 12/12th Bharatiya Itihas ke kuchh Vishay-II/lhhs201.pdf',
            nepHighlights: 'अल-बिरूनी और किताब-उल-हिंद (संस्कृत ज्ञान, जाति व्यवस्था), इब्न बतूता और रिहला (पान, नारियल, डाक व्यवस्था, दिल्ली नगर), फ़्राँस्वा बर्नियर और ट्रेवल्स इन द मुग़ल एम्पायर (भू-स्वामित्व की तुलना, कारखाना व्यवस्था)।',
            summaryTextbook: 'दसवीं से सत्रहवीं शताब्दी के मध्य भारत आए विदेशी यात्रियों के यात्रा वृत्तांतों द्वारा तत्कालीन भारतीय समाज, व्यापार, नगरों, संचार व्यवस्था, सती प्रथा और प्रशासनिक तंत्र का ऐतिहासिक अध्ययन।',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-hist-ch6',
            chapterNumber: 6,
            title: 'भक्ति-सूफ़ी परंपराएँ — धार्मिक विश्वासों में बदलाव और श्रद्धा ग्रंथ (Bhakti-Sufi Traditions)',
            officialBookCode: 'lhhs2',
            officialPdfUrl: '/pdf/Class 12/12th Bharatiya Itihas ke kuchh Vishay-II/lhhs202.pdf',
            nepHighlights: 'अलवार व नयनार संत (नलदिरव्यप्रबंधम), लिंगायत/वीरशैव आंदोलन (बसवन्ना), कर्नाटक व तमिलनाडु के मंदिर, चिश्ती सूफ़ी सिलसिला (ख्वाजा मुईनुद्दीन चिश्ती, खानकाह, ज़ियारत, कव्वाली), कबीर, गुरु नानक और मीराबाई के पद।',
            summaryTextbook: 'आठवीं से अठारहवीं शताब्दी के मध्य भक्ति और सूफ़ी आंदोलनों का विकास। सगुण और निर्गुण उपासना, जाति-विरोधी सामाजिक सुधार, क्षेत्रीय भाषाओं में साहित्य सृजन और धार्मिक समन्वय का समग्र विश्लेषण।',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-hist-ch7',
            chapterNumber: 7,
            title: 'एक साम्राज्य की राजधानी: विजयनगर (An Imperial Capital: Vijayanagara)',
            officialBookCode: 'lhhs2',
            officialPdfUrl: '/pdf/Class 12/12th Bharatiya Itihas ke kuchh Vishay-II/lhhs203.pdf',
            nepHighlights: 'हरिहर व बुक्का द्वारा स्थापना (1336), हम्पी की खोज (कर्नल कॉलिन मैकेंज़ी), कृष्णदेव राय का शासनकाल, महानवमी डिब्बा, विरुपक्ष व विट्ठल मंदिर, गोपुरम, कमल महल, जल संपदा (कमलपुरम जलाशय, हीरिया नहर), अमर-नायक प्रणाली, तालीकोटा का युद्ध (1565)।',
            summaryTextbook: 'चौदहवीं से सोलहवीं सदी तक दक्षिण भारत के गौरवशाली विजयनगर साम्राज्य की राजनीतिक संरचना, किलेबंदी, स्थापत्य कला, शाही केंद्र, धार्मिक परंपराएं और पतन के कारणों का अध्ययन।',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-hist-ch8',
            chapterNumber: 8,
            title: 'किसान, ज़मींदार और राज्य — कृषि समाज और मुग़ल साम्राज्य (Peasants, Zamindars and the State)',
            officialBookCode: 'lhhs2',
            officialPdfUrl: '/pdf/Class 12/12th Bharatiya Itihas ke kuchh Vishay-II/lhhs204.pdf',
            nepHighlights: 'आइन-ए-अकबरी (अबुल फज़ल), खुद-काश्त व पाहि-काश्त किसान, मुग़ल भू-राजस्व प्रणाली (जब्त, नस्क, कंकूत), सिंचाई के साधन (रहट), पंचायत और ग्राम मुखिया (मुकद्दम), ज़मींदारों के अधिकार व खिदमत, जंगलवासी और वनवासी।',
            summaryTextbook: 'सोलहवीं-सत्रहवीं शताब्दी में मुग़ल कालीन कृषि व्यवस्था, ग्रामीण समुदाय की संरचना, महिलाओं की भूमिका, वनवासियों का जीवन और अकबर के समय के सांख्यिकीय दस्तावेज़ आइन-ए-अकबरी का ऐतिहासिक मूल्यांकन।',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-hist-ch9',
            chapterNumber: 9,
            title: 'उपनिवेशवाद और देहात — सरकारी अभिलेखों का अध्ययन (Colonialism and the Countryside)',
            officialBookCode: 'lehs3',
            officialPdfUrl: '/pdf/Class 12/12th Themes in Indian History-III/lehs301.pdf',
            nepHighlights: 'बंगाल में इस्तमरारी (स्थायी) बंदोबस्त (1793, लॉर्ड कॉर्नवालिस), सूर्यास्त विधि, जोतदारों का उदय, राजमहल की पहाड़ियों में पहाड़िया बनाम संथाल (कुदाल और हल की लड़ाई), दामिन-इ-कोह, दक्कन दंगा आयोग रिपोर्ट (1875), रैयतवाड़ी व्यवस्था।',
            summaryTextbook: 'ईस्ट इंडिया कंपनी के औपनिवेशिक शासन का भारतीय ग्रामीण समाज और कृषक वर्ग पर प्रभाव। स्थायी व रैयतवाड़ी बंदोबस्त, ज़मींदारों की नीलामी, जनजातीय प्रतिरोध और साहूकारों के विरुद्ध कृषक विद्रोहों का आधिकारिक अभिलेखों द्वारा अध्ययन।',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-hist-ch10',
            chapterNumber: 10,
            title: 'विद्रोही और राज — 1857 का आंदोलन और उसके व्याख्यान (Rebels and the Raj — 1857 Revolt)',
            officialBookCode: 'lehs3',
            officialPdfUrl: '/pdf/Class 12/12th Themes in Indian History-III/lehs302.pdf',
            nepHighlights: 'मेरठ छावनी से क्रांति का आरंभ (10 मई 1857), चर्बी वाले कारतूस, बहादुर शाह ज़फ़र, नाना साहेब, रानी लक्ष्मीबाई, कुँवर सिंह, मौलवी अहमदुल्ला शाह, अवध का अधिग्रहण (1856, वाजिद अली शाह), विद्रोहियों की घोषणाएं, ब्रिटिश दमन और चित्रकला (इन मेमोरियम, रिलीफ ऑफ लखनऊ)।',
            summaryTextbook: '1857 के प्रथम स्वतंत्रता संग्राम के कारण, प्रसार, विद्रोही दृष्टिकोण, नेतृत्व, विभिन्न सामाजिक वर्गों की भागीदारी और विद्रोह के बाद भारत में ब्रिटिश नीतियों में आए युगांतकारी परिवर्तनों का व्यापक विश्लेषण।',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-hist-ch11',
            chapterNumber: 11,
            title: 'महात्मा गाँधी और राष्ट्रीय आंदोलन — सविनय अवज्ञा और उससे आगे (Mahatma Gandhi and the Nationalist Movement)',
            officialBookCode: 'lehs3',
            officialPdfUrl: '/pdf/Class 12/12th Themes in Indian History-III/lehs303.pdf',
            nepHighlights: 'दक्षिण अफ्रीका से वापसी (1915), चंपारण, खेड़ा, अहमदाबाद मिल मजदूर, रॉलेट एक्ट व जलियांवाला बाग (1919), असहयोग आंदोलन व खिलाफत, चौरी-चौरा, दांडी मार्च व नमक सत्याग्रह (1930), गोलमेज सम्मेलन, भारत छोड़ो आंदोलन (1942), प्रत्यक्ष कार्यवाही दिवस, स्वतंत्रता और विभाजन।',
            summaryTextbook: 'महात्मा गाँधी के नेतृत्व में भारतीय राष्ट्रीय आंदोलन का जन-आंदोलन में रूपांतरण। सत्याग्रह की तकनीकें, अहिंसा का दर्शन, विभिन्न जनांदोलन और निजी पत्रों, भाषणों व आत्मकथाओं से इतिहास निर्माण की पद्धतियाँ।',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          },
          {
            id: 'c12-hist-ch12',
            chapterNumber: 12,
            title: 'संविधान का निर्माण — एक नए युग की शुरुआत (Framing the Constitution)',
            officialBookCode: 'lehs3',
            officialPdfUrl: '/pdf/Class 12/12th Themes in Indian History-III/lehs304.pdf',
            nepHighlights: 'संविधान सभा का गठन (1946), उद्देश्य प्रस्ताव (जवाहरलाल नेहरू), डॉ. बी.आर. अंबेडकर व प्रारूप समिति, बी.एन. राव व एस.एन. मुखर्जी, केंद्र बनाम राज्य की शक्तियां (संघ सूची, राज्य सूची, समवर्ती सूची), पृथक निर्वाचिका पर बहस, राष्ट्रभाषा पर विवाद (आर.वी. धुलेकर) और हिंदुस्तानी की भूमिका।',
            summaryTextbook: 'स्वतंत्र भारत के संविधान निर्माण की ऐतिहासिक यात्रा (1946-1949)। संविधान सभा में अधिकारों, संघवाद, अल्पसंख्यक सुरक्षा और राष्ट्रभाषा पर हुए जीवंत ऐतिहासिक वाद-विवादों का विश्लेषण।',
            exerciseSolutions: [],
            competencyQuestions: [],
            quiz: []
          }
        ]
      }
    ]
  },
  CLASS_1_DATA,
  CLASS_2_DATA,
  CLASS_3_DATA,
  CLASS_4_DATA,
  CLASS_5_DATA,
  CLASS_6_DATA,
  CLASS_7_DATA,
  CLASS_8_DATA,
  CLASS_9_DATA
];

export const ALL_CLASSES_SUMMARY = [
  { classNum: 1, name: 'Class 1', stage: 'Foundational', badgeColor: 'nep', icon: 'Smile' },
  { classNum: 2, name: 'Class 2', stage: 'Foundational', badgeColor: 'nep', icon: 'Smile' },
  { classNum: 3, name: 'Class 3', stage: 'Preparatory', badgeColor: 'amber', icon: 'BookOpen' },
  { classNum: 4, name: 'Class 4', stage: 'Preparatory', badgeColor: 'amber', icon: 'BookOpen' },
  { classNum: 5, name: 'Class 5', stage: 'Preparatory', badgeColor: 'amber', icon: 'BookOpen' },
  { classNum: 6, name: 'Class 6', stage: 'Middle', badgeColor: 'primary', icon: 'Compass' },
  { classNum: 7, name: 'Class 7', stage: 'Middle', badgeColor: 'primary', icon: 'Compass' },
  { classNum: 8, name: 'Class 8', stage: 'Middle', badgeColor: 'primary', icon: 'Compass' },
  { classNum: 9, name: 'Class 9', stage: 'Secondary', badgeColor: 'primary', icon: 'GraduationCap' },
  { classNum: 10, name: 'Class 10', stage: 'Secondary', badgeColor: 'primary', icon: 'Award' },
  { classNum: 11, name: 'Class 11', stage: 'Senior Secondary', badgeColor: 'nep', icon: 'Cpu' },
  { classNum: 12, name: 'Class 12', stage: 'Senior Secondary', badgeColor: 'nep', icon: 'Trophy' },
];
