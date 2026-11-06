import type { ClassStageInfo } from './ncertData';

export const CLASS_9_DATA: ClassStageInfo = {
  classNumber: 9,
  stageName: 'Secondary',
  ageGroup: '14-15 Years',
  nepFocus: 'Foundational Proofs, Scientific Inquiry, Algebraic Reasoning, Real-world Problem Solving & Multilingual Literacy',
  subjects: [
    {
      id: 'c9-maths',
      name: 'Mathematics (Ganita Manjari)',
      iconName: 'Calculator',
      color: '#4f46e5',
      description: 'Number Systems, Polynomials, Coordinate Geometry, Linear Equations, Lines & Angles, Triangles, Circles, Heron\'s Formula, Surface Areas & Volumes, Statistics.',
      totalChapters: 12,
      coverImageUrl: '/book-covers/class9-maths-ganita-manjari.png',
      chapters: [
        {
          id: 'c9-m-ch1',
          chapterNumber: 1,
          title: 'Number Systems',
          officialBookCode: 'iemh1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iemh101.pdf',
          nepHighlights: 'Irrational numbers on real number line, Real numbers with decimal expansions & Laws of Exponents.',
          summaryTextbook: 'Covers natural numbers, whole numbers, integers, rational numbers (p/q, qâ‰ 0), locating âˆš2, âˆš3, âˆš5 on the number line using spiral method, terminating vs non-terminating recurring decimals, operations on real numbers, and rationalizing the denominator.',
          exerciseSolutions: [
            {
              id: 'c9-m-ch1-q1',
              questionNo: 'Exercise 1.1 Q1',
              questionText: 'Is zero a rational number? Can you write it in the form p/q, where p and q are integers and q â‰  0?',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'Number: 0',
              formula: 'Rational number definition: p/q with integers p, q and q â‰  0',
              stepByStepSolution: [
                'Step 1: Yes, 0 is a rational number.',
                'Step 2: It can be written as 0/1, 0/2, 0/-5, etc. where p = 0 is an integer and q = 1, 2, -5 is a non-zero integer.',
                'Step 3: Hence, 0 satisfies all conditions of a rational number p/q.'
              ],
              finalAnswer: 'Yes, 0 is a rational number and can be written as 0/1.',
              keyTakeaway: 'Zero is a rational integer because its denominator can be any non-zero integer.',
              nepCompetencyNote: 'Essential conceptual base for coordinate plane origin representations.'
            },
            {
              id: 'c9-m-ch1-q2',
              questionNo: 'Exercise 1.3 Q1',
              questionText: 'Express 0.6Ì„ (0.666...) in the form p/q, where p and q are integers and q â‰  0.',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'Recurring decimal: x = 0.6666...',
              formula: 'Multiply by 10â¿ where n is number of repeating digits',
              stepByStepSolution: [
                'Step 1: Let x = 0.666...  (Equation 1)',
                'Step 2: Since 1 digit is repeating, multiply by 10 -> 10x = 6.666... (Equation 2)',
                'Step 3: Subtract Eq 1 from Eq 2 -> 10x - x = 6.666... - 0.666...',
                'Step 4: 9x = 6  =>  x = 6/9 = 2/3.'
              ],
              finalAnswer: '0.6Ì„ = 2/3',
              keyTakeaway: 'Every recurring decimal represents a rational number p/q.',
              nepCompetencyNote: 'Floating point decimal to fraction conversions in software engineering.'
            }
          ],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-m-ch2',
          chapterNumber: 2,
          title: 'Polynomials',
          officialBookCode: 'iemh1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iemh102.pdf',
          nepHighlights: 'Zeroes of a Polynomial, Remainder Theorem, Factor Theorem & Algebraic Identities.',
          summaryTextbook: 'Covers polynomials in one variable, degree, coefficients, zeroes of polynomial p(x), Factor Theorem: (x - a) is factor if p(a) = 0, factorization of quadratic & cubic polynomials using splitting middle term and identities (x+y+z)Â², (xÂ±y)Â³, xÂ³+yÂ³+zÂ³-3xyz.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-m-ch3',
          chapterNumber: 3,
          title: 'Coordinate Geometry',
          officialBookCode: 'iemh1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iemh103.pdf',
          nepHighlights: 'Cartesian plane, x-axis (Abscissa), y-axis (Ordinate) & 4 Quadrants.',
          summaryTextbook: 'Introduces RenÃ© Descartes coordinate system, origin (0,0), axes, signs in 4 quadrants (+,+) (+,-) (-,-) (-,+), and plotting points in the Cartesian plane.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-m-ch4',
          chapterNumber: 4,
          title: 'Exploring Algebraic Identities',
          officialBookCode: 'iemh1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iemh104.pdf',
          nepHighlights: 'Algebra tiles, Geometric dissections of identities (a+b)Â³, aÂ²-bÂ², consecutive squares patterns & rational expressions.',
          summaryTextbook: 'Examines algebraic identities through geometric models, algebra tiles, factorisation of quadratic and cubic polynomials, numerical invariants of consecutive squares, and simplification of rational expressions with domain restrictions.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c9-m-ch4-q1',
              question: 'In the algebra tiles model representing (2x + 3)(3x + 1), what is the total count of tiles of each type used?',
              options: [
                '6 tiles of xÂ², 11 tiles of x, 3 unit tiles',
                '5 tiles of xÂ², 9 tiles of x, 4 unit tiles',
                '6 tiles of xÂ², 5 tiles of x, 3 unit tiles',
                '6 tiles of xÂ², 12 tiles of x, 4 unit tiles'
              ],
              correctIndex: 0,
              explanation: '(2x + 3)(3x + 1) = 6xÂ² + 11x + 3. The rectangle decomposes into 6 square tiles of xÂ², 11 rectangular tiles of x, and 3 unit square tiles of 1.'
            },
            {
              id: 'c9-m-ch4-q2',
              question: 'For any three consecutive squares, let P(n) = (n-1)Â² + (n+1)Â² - 2nÂ². What is the value of P(999)?',
              options: ['2', '0', '4', '1998'],
              correctIndex: 0,
              explanation: 'Algebraic expansion: (nÂ² - 2n + 1) + (nÂ² + 2n + 1) - 2nÂ² = 2nÂ² + 2 - 2nÂ² = 2. It is an invariant identity equal to 2 for all n.'
            },
            {
              id: 'c9-m-ch4-q3',
              question: 'If a real number plus its reciprocal equals 10/3 (with x > 1), what is the exact value of xÂ³ + 1/xÂ³?',
              options: ['730 / 27', '1000 / 27', '820 / 27', '640 / 27'],
              correctIndex: 0,
              explanation: 'Using identity (x + 1/x)Â³ = xÂ³ + 1/xÂ³ + 3(x + 1/x): (10/3)Â³ - 3(10/3) = 1000/27 - 10 = 730/27.'
            },
            {
              id: 'c9-m-ch4-q4',
              question: 'If a + b + c = 5 and ab + bc + ca = 10, calculate the value of aÂ³ + bÂ³ + cÂ³ - 3abc.',
              options: ['-25', '25', '-50', '0'],
              correctIndex: 0,
              explanation: 'aÂ² + bÂ² + cÂ² = 5Â² - 2(10) = 5. Then aÂ³ + bÂ³ + cÂ³ - 3abc = (a + b + c)[(aÂ² + bÂ² + cÂ²) - (ab + bc + ca)] = 5(5 - 10) = -25.'
            },
            {
              id: 'c9-m-ch4-q5',
              question: 'Why is nÂ³ - n always divisible by 6 for every positive integer n â‰¥ 2?',
              options: [
                'Because nÂ³ - n = (n-1)n(n+1) is the product of 3 consecutive integers, which always contains a multiple of 2 and a multiple of 3.',
                'Because nÂ³ - n is always an even number ending in 6.',
                'Because testing n = 2 gives 6 and n = 3 gives 24.',
                'Because all cubic numbers are multiples of 6.'
              ],
              correctIndex: 0,
              explanation: 'In any 3 consecutive integers, at least one is even and exactly one is a multiple of 3. Since gcd(2,3) = 1, their product is divisible by 6.'
            }
          ]
        },
        {
          id: 'c9-m-ch5',
          chapterNumber: 5,
          title: 'Iâ€™m Up and Down, and Round and Round (Circles)',
          officialBookCode: 'iemh1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iemh105.pdf',
          nepHighlights: 'Circle symmetries, Circumcentre of acute/obtuse triangles, BaudhÄyana-Pythagoras chord distances & Cyclic quadrilaterals.',
          summaryTextbook: 'Covers continuous symmetries of a circle, circumcentre location for acute, right, and obtuse triangles, BaudhÄyana-Pythagoras chord distance theorems, angle subtended by an arc at the centre vs circumference, and concyclicity of cyclic quadrilaterals.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c9-m-ch5-q1',
              question: 'For an obtuse-angled triangle â–³ABC with âˆ ABC = 120Â°, where does the circumcentre O lie, and what is central angle âˆ AOC subtended by minor arc AC?',
              options: [
                'Outside the triangle; âˆ AOC = 120Â°',
                'Inside the triangle; âˆ AOC = 240Â°',
                'At the midpoint of the longest side; âˆ AOC = 90Â°',
                'Outside the triangle; âˆ AOC = 60Â°'
              ],
              correctIndex: 0,
              explanation: 'The circumcentre of an obtuse triangle lies strictly outside the triangle. Central reflex angle subtended by arc ABC is 2 Ã— 120Â° = 240Â°, so minor âˆ AOC = 360Â° - 240Â° = 120Â°.'
            },
            {
              id: 'c9-m-ch5-q2',
              question: 'Two parallel chords of lengths 24 cm and 10 cm are on the SAME side of the centre in a circle. If the distance between them is 7 cm, what is the radius?',
              options: ['13 cm', '15 cm', '12 cm', '17 cm'],
              correctIndex: 0,
              explanation: 'In right triangles: rÂ² = dÂ² + 12Â² and rÂ² = (d+7)Â² + 5Â². Equating yields dÂ² + 144 = dÂ² + 14d + 74 â‡’ 14d = 70 â‡’ d = 5 cm. Radius r = âˆš(5Â² + 12Â²) = 13 cm.'
            },
            {
              id: 'c9-m-ch5-q3',
              question: 'Point P is an interior point of a circle with centre O. Which chord passing through P has the strictly minimum length?',
              options: [
                'The chord perpendicular to OP',
                'The chord passing through the centre O (the diameter)',
                'The chord inclined at 45Â° to OP',
                'All chords through P have the exact same length'
              ],
              correctIndex: 0,
              explanation: 'Chord length is 2âˆš(rÂ² - dÂ²), which is minimized when distance d from the centre is maximized. The maximum distance of any chord passing through P is OP, which occurs when the chord is perpendicular to OP.'
            },
            {
              id: 'c9-m-ch5-q4',
              question: 'In cyclic quadrilateral ABCD, side CD is extended to E. If exterior angle âˆ ADE = 82Â° and âˆ BAC = 38Â°, what is the measure of âˆ BCA?',
              options: ['60Â°', '82Â°', '44Â°', '52Â°'],
              correctIndex: 0,
              explanation: 'Exterior angle of a cyclic quad equals interior opposite angle: âˆ ABC = âˆ ADE = 82Â°. In â–³ABC, âˆ BCA = 180Â° - (82Â° + 38Â°) = 60Â°.'
            },
            {
              id: 'c9-m-ch5-q5',
              question: 'Why must every parallelogram inscribed in a circle be a rectangle?',
              options: [
                'Because opposite angles in a parallelogram are equal (âˆ A = âˆ C), and in a cyclic quad they sum to 180Â°, forcing 2âˆ A = 180Â° â‡’ âˆ A = 90Â°.',
                'Because a parallelogram always has equal diagonals.',
                'Because the sides of a parallelogram are tangent to the circle.',
                'Because parallel lines cannot intersect a circle.'
              ],
              correctIndex: 0,
              explanation: 'In a parallelogram âˆ A = âˆ C. In a cyclic quadrilateral âˆ A + âˆ C = 180Â°. Hence 2âˆ A = 180Â° â‡’ âˆ A = 90Â°. A parallelogram with a right angle is a rectangle.'
            }
          ]
        },
        {
          id: 'c9-m-ch6',
          chapterNumber: 6,
          title: 'Lines and Angles',
          officialBookCode: 'iemh1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iemh106.pdf',
          nepHighlights: 'Linear Pair Axiom, Vertically Opposite Angles, Transversal & Angle Sum Theorem (180Â°).',
          summaryTextbook: 'Covers intersecting and non-intersecting lines, pairs of angles (adjacent, linear pair, vertically opposite), parallel lines and transversal (corresponding, alternate interior, interior on same side), and angle sum property of triangles.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-m-ch7',
          chapterNumber: 7,
          title: 'Triangles',
          officialBookCode: 'iemh1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iemh107.pdf',
          nepHighlights: 'Congruence Criteria (SAS, ASA, AAS, SSS, RHS) & Properties of Isosceles Triangles.',
          summaryTextbook: 'Examines triangle congruence criteria SAS, ASA, AAS, SSS, RHS, proving angles opposite to equal sides are equal, and sides opposite to equal angles are equal.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-m-ch8',
          chapterNumber: 8,
          title: 'Quadrilaterals',
          officialBookCode: 'iemh1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iemh108.pdf',
          nepHighlights: 'Properties of Parallelograms & Mid-Point Theorem with converse.',
          summaryTextbook: 'Covers angle sum property of quadrilateral (360Â°), types of quadrilaterals (trapezium, parallelogram, rectangle, rhombus, square), diagonal properties of parallelograms, and Mid-point theorem.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-m-ch9',
          chapterNumber: 9,
          title: 'Circles',
          officialBookCode: 'iemh1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iemh109.pdf',
          nepHighlights: 'Angle subtended by chord at center, Angle in semicircle is 90Â° & Cyclic Quadrilaterals.',
          summaryTextbook: 'Covers chords, perpendicular from center bisects chord, equal chords equidistant from center, angle subtended by arc at center is double the angle at remaining circle, angles in same segment are equal, and opposite angles of cyclic quadrilateral sum to 180Â°.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-m-ch10',
          chapterNumber: 10,
          title: 'Heron\'s Formula',
          officialBookCode: 'iemh1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iemh110.pdf',
          nepHighlights: 'Area of triangle Area = âˆš[s(s-a)(s-b)(s-c)] with semi-perimeter s = (a+b+c)/2.',
          summaryTextbook: 'Covers finding area of scalene, isosceles, and equilateral triangles when only lengths of three sides are known without needing altitude height.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-m-ch11',
          chapterNumber: 11,
          title: 'Surface Areas and Volumes',
          officialBookCode: 'iemh1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iemh111.pdf',
          nepHighlights: 'Surface Area & Volume of Right Circular Cone (Ï€rl, 1/3 Ï€rÂ²h) and Sphere / Hemisphere (4Ï€rÂ², 4/3 Ï€rÂ³).',
          summaryTextbook: 'Covers curved surface area, total surface area, and volume formulas for cones, spheres, and hemispheres under rationalized NEP curriculum.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-m-ch12',
          chapterNumber: 12,
          title: 'Statistics',
          officialBookCode: 'iemh1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iemh112.pdf',
          nepHighlights: 'Graphical Representation: Bar Graphs, Histograms (with varying widths) & Frequency Polygons.',
          summaryTextbook: 'Examines data presentation, continuous class intervals, constructing histograms with uniform and varying class widths, and plotting frequency polygons.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },
    {
      id: 'c9-science',
      name: 'Science (Exploration)',
      iconName: 'Atom',
      color: '#059669',
      description: 'Matter in Surroundings, Atoms & Molecules, Cell Structure, Tissues, Motion, Laws of Motion, Gravitation, Work & Energy, Sound.',
      totalChapters: 12,
      coverImageUrl: '/book-covers/class9-science-exploration.png',
      chapters: [
        {
          id: 'c9-s-ch1',
          chapterNumber: 1,
          title: 'Matter in Our Surroundings',
          officialBookCode: 'iesc1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iesc101.pdf',
          nepHighlights: 'States of Matter (Solid, Liquid, Gas), Diffusion, Latent Heat & Evaporation cooling effect.',
          summaryTextbook: 'Covers physical nature of matter, kinetic energy of particles, interconversion of states (melting, boiling, sublimation, deposition), latent heat of fusion/vaporization, and factors affecting evaporation.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-s-ch2',
          chapterNumber: 2,
          title: 'Is Matter Around Us Pure',
          officialBookCode: 'iesc1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iesc102.pdf',
          nepHighlights: 'Mixtures vs Pure Substances, Solutions, Colloids (Tyndall Effect) & Suspensions.',
          summaryTextbook: 'Covers homogeneous vs heterogeneous mixtures, concentration of solutions (mass %, volume %), colloidal solutions, Browninan motion, Tyndall effect, and elements vs compounds.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-s-ch3',
          chapterNumber: 3,
          title: 'Tissues in Action (à¤Šà¤¤à¤•: à¤•à¤¾à¤°à¥à¤¯à¤ªà¥à¤°à¤£à¤¾à¤²à¥€ à¤®à¥‡à¤‚)',
          officialBookCode: 'iesc1',
          officialPdfUrl: '/pdf/Class 09/9th science_NEW/Exploration/iesc1dd/iesc103.pdf',
          nepHighlights: 'Plant & Animal tissues, Meristems (Apical, Lateral, Intercalary), Complex Vascular bundles (Xylem/Phloem), Epithelial, Connective (Bone, Cartilage, Ligament, Tendon, Blood), Muscle (Striated, Smooth, Cardiac) & Joint Biomechanics.',
          summaryTextbook: 'New NCERT 2026 Exploration Class 9 Chapter 3: Cellular specialization, meristematic vs permanent plant tissues, tree debarking physiology, sugarcane intercalary regrowth, annual ring dendrochronology, simple squamous alveolar diffusion, connective tissue matrix, cardiac fatigue resistance, and musculoskeletal jump biomechanics.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-s-ch4',
          chapterNumber: 4,
          title: 'Structure of the Atom',
          officialBookCode: 'iesc1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iesc104.pdf',
          nepHighlights: 'Thomson, Rutherford & Bohr atomic models, Valency, Isotopes & Isobars.',
          summaryTextbook: 'Covers subatomic particles (electrons, protons, neutrons), Rutherford Î±-scattering experiment and nuclear model, Bohr-Bury electronic configuration rules (2nÂ²), valence electrons, atomic number Z, mass number A, isotopes (C-12/C-14, U-235) and applications.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-s-ch5',
          chapterNumber: 5,
          title: 'The Fundamental Unit of Life',
          officialBookCode: 'iesc1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iesc105.pdf',
          nepHighlights: 'Prokaryotic vs Eukaryotic cells, Plasma Membrane (Osmosis/Diffusion), Cell Organelles.',
          summaryTextbook: 'Covers Robert Hooke discovery, cell theory, plant cell vs animal cell, nucleus, chromosomes (DNA/genes), endoplasmic reticulum (RER/SER), Golgi apparatus, lysosomes (suicide bags), mitochondria (powerhouse), plastids (chloroplasts), and vacuoles.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-s-ch6',
          chapterNumber: 6,
          title: 'How Forces Affect Motion (बल गति को कैसे प्रभावित करते हैं)',
          officialBookCode: 'iesc1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iesc106.pdf',
          nepHighlights: 'Newton’s 3 Laws of Motion, Balanced vs Unbalanced Forces, Friction Mechanics (Activities 6.1-6.2), Galileo’s Inertia, F=ma, Momentum p=mv, Impulse & Automotive Safety (Airbags, Catching Cricket Ball), Rocket Launches & Chandrayaan-3 Retro-firing.',
          summaryTextbook: 'New NCERT 2026-27 Exploration Class 9 Chapter 6 (iesc106): Explores the fundamental causes of motion. Investigates balanced and unbalanced forces, the nature of friction as an essential force for walking and propulsion, Galileo’s thought experiments establishing inertia, Newton’s first law of motion, second law of motion (F=ma) relating force, mass, and acceleration, momentum and impulse in collision dynamics, and Newton’s third law action-reaction pairs in rocket liftoffs, boat rowing, and gun recoils.',
          exerciseSolutions: [
            {
              id: 'c9-s-ch6-q4',
              questionNo: 'NCERT Q4 (Snake Boat Race)',
              questionText: 'While practising for the snake boat race (Vallam kali in Kerala), 100 oarsmen row together: 95 row backward to propel the boat forward, while 5 mistakenly row in the opposite direction. If each applies 200 N, what is the net force on the snake boat?',
              difficulty: 'Easy',
              type: 'Competency',
              givenData: 'Forward oarsmen = 95, Opposing oarsmen = 5, Force per person = 200 N',
              stepByStepSolution: [
                '1. Total forward force = 95 × 200 N = 19,000 N.',
                '2. Total opposing backward force = 5 × 200 N = 1,000 N.',
                '3. Net force F_net = 19,000 N - 1,000 N = 18,000 N in the forward direction.'
              ],
              finalAnswer: '18,000 N in the forward direction.',
              keyTakeaway: 'Forces in opposite directions subtract to give the net resultant force.'
            },
            {
              id: 'c9-s-ch6-q12',
              questionNo: 'NCERT Q12 (Bullet Stopping Force)',
              questionText: 'A bullet of mass 50 g moving with a speed of 100 m/s penetrates 50 cm into a heavy wooden block before stopping. Estimate the stopping force.',
              difficulty: 'Medium',
              type: 'Competency',
              givenData: 'm = 50 g = 0.05 kg, u = 100 m/s, v = 0, s = 50 cm = 0.5 m',
              stepByStepSolution: [
                '1. Using third equation of motion: v² - u² = 2as.',
                '2. 0 - (100)² = 2 × a × 0.5 => -10,000 = 1.0 × a => a = -10,000 m/s².',
                '3. Stopping force F = ma = 0.05 kg × (-10,000 m/s²) = -500 N.'
              ],
              finalAnswer: '500 N opposing the motion.',
              keyTakeaway: 'The decelerating force is the product of mass and retardation.'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c9-s-ch6-qz1',
              question: 'Why do fielders in cricket pull their hands backwards while catching a fast ball?',
              options: [
                'To increase ball momentum',
                'To apply a larger force on the ball',
                'To increase contact time, reducing deceleration and impact force',
                'To catch the ball faster'
              ],
              correctIndex: 2,
              explanation: 'Increasing the time interval over which the ball stops reduces its acceleration, drastically lowering the impact force on the fielder’s hands.'
            },
            {
              id: 'c9-s-ch6-qz2',
              question: 'Action and reaction forces according to Newton’s Third Law of Motion:',
              options: [
                'Act on the same object and cancel each other',
                'Act on two different interacting objects simultaneously',
                'Act at different times',
                'Always produce equal accelerations regardless of mass'
              ],
              correctIndex: 1,
              explanation: 'Action and reaction forces always act on two different interacting bodies, so they cannot cancel each other.'
            }
          ]
        },
        {
          id: 'c9-s-ch7',
          chapterNumber: 7,
          title: 'Motion',
          officialBookCode: 'iesc1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iesc107.pdf',
          nepHighlights: 'Distance vs Displacement, Uniform vs Non-Uniform Motion, Equations of Motion (v=u+at, s=ut+Â½atÂ², vÂ²=uÂ²+2as).',
          summaryTextbook: 'Covers speed, velocity, acceleration a = (v-u)/t, distance-time graphs, velocity-time graphs, derivation of equations of motion using graphical method, and uniform circular motion v = 2Ï€r/t.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-s-ch8',
          chapterNumber: 8,
          title: 'Force and Laws of Motion',
          officialBookCode: 'iesc1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iesc108.pdf',
          nepHighlights: 'Newtonâ€™s 3 Laws of Motion, Inertia & Mass, Momentum p = mv & F = ma.',
          summaryTextbook: 'Covers balanced and unbalanced forces, First Law of Motion (Galileo inertia), Second Law of Motion (rate of change of momentum F = dp/dt = ma), Third Law of Motion (action-reaction pairs), and conservation of linear momentum.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-s-ch9',
          chapterNumber: 9,
          title: 'Gravitation',
          officialBookCode: 'iesc1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iesc109.pdf',
          nepHighlights: 'Universal Law of Gravitation F = G(Mm/dÂ²), Free Fall, Acceleration due to gravity g & Archimedesâ€™ Principle.',
          summaryTextbook: 'Covers importance of gravitational law, free fall, variation of g on Earth and Moon (g_moon = 1/6 g_earth), mass vs weight, thrust and pressure P = F/A, buoyancy, Archimedesâ€™ principle, and relative density.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-s-ch10',
          chapterNumber: 10,
          title: 'Work and Energy',
          officialBookCode: 'iesc1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iesc110.pdf',
          nepHighlights: 'Work W = FÂ·s, Kinetic Energy Ek = Â½mvÂ², Potential Energy Ep = mgh & Law of Conservation of Energy.',
          summaryTextbook: 'Covers scientific concept of work, unit of work (Joule), positive, negative and zero work, forms of energy, transformation of energy, mechanical energy conservation in free fall, power P = W/t (Watt), and commercial unit of energy (1 kWh = 3.6 Ã— 10â¶ J).',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-s-ch11',
          chapterNumber: 11,
          title: 'Sound',
          officialBookCode: 'iesc1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iesc111.pdf',
          nepHighlights: 'Sound as longitudinal wave (Compressions & Rarefactions), Speed of Sound, Echo & Ultrasound applications.',
          summaryTextbook: 'Covers sound production by vibrating objects, propagation medium necessity (sound cannot travel in vacuum), wavelength Î», frequency Î½, time period T, amplitude, pitch and loudness, reflection of sound, echo (minimum 17.2 m), reverberation, audible human range (20 Hz - 20 kHz), infrasound, ultrasound (SONAR, medical imaging), and human ear structure.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-s-ch12',
          chapterNumber: 12,
          title: 'Improvement in Food Resources',
          officialBookCode: 'iesc1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iesc112.pdf',
          nepHighlights: 'Crop Variety Improvement, Crop Production Management (Manure, Fertilizers, Irrigation) & Animal Husbandry.',
          summaryTextbook: 'Covers hybridization, genetically modified crops, macro/micronutrients, compost and vermicompost, biological pest control, cropping patterns (mixed cropping, intercropping, crop rotation), cattle farming (milch vs draught), poultry farming, fish production (marine vs inland/composite aquaculture), and bee-keeping (apiculture, Italian bee Apis mellifera).',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },
    {
      id: 'c9-english',
      name: 'English (Kaveri)',
      iconName: 'BookOpen',
      color: '#f59e0b',
      description: 'Kaveri (Textbook of English for Grade 9), Beehive & Moments Supplementary Reader.',
      totalChapters: 18,
      coverImageUrl: '/book-covers/class9-english-kaveri.png',
      chapters: [
        {
          id: 'c9-eng-bh-ch1',
          chapterNumber: 1,
          title: 'The Fun They Had (Beehive)',
          officialBookCode: 'iebe1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iebe101.pdf',
          nepHighlights: 'Future of education in year 2157, AI mechanical teachers vs human classrooms by Isaac Asimov.',
          summaryTextbook: 'Margie and Tommy discover a printed book from centuries past and reflect on the joy of human teachers, classrooms, and social learning compared to their robotic homeschool screens.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-eng-bh-ch2',
          chapterNumber: 2,
          title: 'The Sound of Music (Beehive)',
          officialBookCode: 'iebe1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iebe102.pdf',
          nepHighlights: 'Perseverance against sensory impairment (Evelyn Glennie) & Shehnai maestro Bismillah Khan.',
          summaryTextbook: 'Part I portrays profoundly deaf percussionist Evelyn Glennie who feels music through her body. Part II celebrates Ustad Bismillah Khan who elevated the shehnai from weddings to classical concert stage.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-eng-bh-ch3',
          chapterNumber: 3,
          title: 'The Little Girl (Beehive)',
          officialBookCode: 'iebe1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iebe103.pdf',
          nepHighlights: 'Father-daughter emotional relationship, overcoming childhood fear & empathy by Katherine Mansfield.',
          summaryTextbook: 'Kezia fears her strict father until a night when her mother is hospitalized and her father comforts her tenderly, revealing his caring heart.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-eng-bh-ch4',
          chapterNumber: 4,
          title: 'A Truly Beautiful Mind (Beehive)',
          officialBookCode: 'iebe1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iebe104.pdf',
          nepHighlights: 'Albert Einstein biographical sketch, Special Theory of Relativity & Pacifist World Citizen.',
          summaryTextbook: 'Narrates Einsteinâ€™s unconventional school days, patent office breakthrough in 1905 (E=mcÂ²), General Theory of Relativity in 1915, Nobel Prize in 1921, and lifelong crusade for world peace.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-eng-bh-ch5',
          chapterNumber: 5,
          title: 'The Snake and the Mirror (Beehive)',
          officialBookCode: 'iebe1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iebe105.pdf',
          nepHighlights: 'Humorous narration, vanity vs fear of death by Vaikom Muhammad Basheer.',
          summaryTextbook: 'A young homeopathic doctor is trapped by a cobra in his rented room, saved when the snake admires its own reflection in a mirror.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-eng-bh-ch6',
          chapterNumber: 6,
          title: 'My Childhood (Beehive)',
          officialBookCode: 'iebe1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iebe106.pdf',
          nepHighlights: 'Dr. A.P.J. Abdul Kalam childhood in Rameswaram, communal harmony & Wings of Fire excerpt.',
          summaryTextbook: 'Dr. Kalam recounts his humble upbringing, inspiring parents, multi-faith friendships with Ramanadha Sastry, Aravindan and Sivaprakasan, and the wisdom of science teacher Sivasubramania Iyer.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-eng-bh-ch7',
          chapterNumber: 7,
          title: 'Reach for the Top (Beehive)',
          officialBookCode: 'iebe1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iebe107.pdf',
          nepHighlights: 'Female empowerment: Santosh Yadav (Everest mountaineer) & Maria Sharapova (Wimbledon champion).',
          summaryTextbook: 'Part I follows Santosh Yadav, first woman to scale Mt. Everest twice. Part II charts Maria Sharapovaâ€™s sacrifice moving from Siberia to Florida at age 9 to become world number one tennis star.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-eng-bh-ch8',
          chapterNumber: 8,
          title: 'Kathmandu (Beehive)',
          officialBookCode: 'iebe1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iebe108.pdf',
          nepHighlights: 'Travelogue: Pashupatinath & Baudhnath Stupa contrasts, bansuri flute seller by Vikram Seth.',
          summaryTextbook: 'Vikram Seth vividly contrasts the febrile chaotic atmosphere of sacred Hindu Pashupatinath temple with the tranquil Buddhist Baudhnath stupa, enchanted by a street flute seller.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-eng-bh-ch9',
          chapterNumber: 9,
          title: 'If I Were You (Beehive)',
          officialBookCode: 'iebe1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iebe109.pdf',
          nepHighlights: 'Quick wit, presence of mind & dramatic suspense by Douglas James.',
          summaryTextbook: 'Playwright Gerrard outsmarts a murderous intruder who wants to steal his identity, locking him inside a cupboard before calling the police.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },
    {
      id: 'c9-hindi',
      name: 'Hindi (गंगा / Ganga)',
      iconName: 'Book',
      color: '#e11d48',
      description: 'गंगा (कक्षा 9 के लिए हिंदी की नवीन पाठ्यपुस्तक - राष्ट्रीय शिक्षा नीति 2020), 12 संपूर्ण अध्याय (गद्य एवं काव्य खंड)।',
      totalChapters: 12,
      coverImageUrl: '/book-covers/ihga1cc.jpg',
      chapters: [
        {
          id: 'c9-hin-ch1',
          chapterNumber: 1,
          title: 'दो बैलों की कथा (प्रेमचंद)',
          officialBookCode: 'ihga1',
          officialPdfUrl: '/pdf/Class 09/Ganga-9th/ihga101.pdf',
          nepHighlights: 'पशु-प्रेम, स्वाधीनता संग्राम का प्रतीकात्मक चित्रण, मूक भाषा में विचार-विनिम्य एवं मुंशी प्रेमचंद का यथार्थवाद।',
          summaryTextbook: 'झूरी के दो सीधे और स्वाभिमानी बैल—हीरा और मोती। ग्या के अत्याचार, कांजीहौस की दीवार तोड़कर अन्य मूक पशुओं को मुक्त कराना और अंत्तः अपने मालिक्के प्रति अटूट निष्ठा की अमर कथा।',
          exerciseSolutions: [
            {
              id: 'c9-hin-ch1-q1',
              questionNo: 'रचना से संवाद (प्रश्न 1)',
              questionText: 'कांजीहौस्में कैद पशुओं की हाज़िरी क्यों ली जाती होगी? / Why was roll call taken for animals in the cattle pound?',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'संद्र्भ: कांजीहौस्व्यवस्था एवं पशु गणना / Context: Cattle pound administration',
              formula: 'गद्य विश्लेषण एवं सामाजिक व्यवस्था / Prose analysis & civic observation',
              stepByStepSolution: [
                'चरण 1 (Step 1): कांजीहौस एक प्रकार की पशु-जेल होती थी, जहाँ लावारिस्व पकड़े गए पशुओं को रखा जाता था। (The cattle pound acted as an animal prison for stray and impounded cattle.)',
                'चरण 2 (Step 2): हाज़िरी लेने से यह सुनिश्चित होता था कि कोई पशु भाग तो नहीं ग्या या किसी की मृत्यु तो नहीं हो गई। (Daily attendance ensured that no animal had escaped or died in confinement.)',
                'चरण 3 (Step 3): पशुओं की सटीक संख्या और नीलामी के स्म्य उनके हिसाब-किताब के लिए भी दैनिक हाज़िरी आवश्यक थी। (Accurate counting was essential for institutional accountability and auction records.)'
              ],
              finalAnswer: 'कांजीहौस्में पशुओं की सही संख्या जान्ने, सुरक्षा सुनिश्चित करने और किसी के भागने या मरने का हिसाब्रखने के लिए हाज़िरी ली जाती थी।',
              keyTakeaway: 'संस्थागत व्यवस्था और रिकॉर्ड-कीपिंग की ऐतिहासिक स्मझ। (Understanding civic record-keeping and humane animal management.)',
              nepCompetencyNote: 'CRITICAL_THINKING: पशु-संवेदना और प्रशासनिक व्यवस्था के बीच संतुलन का विश्लेषण।'
            },
            {
              id: 'c9-hin-ch1-q2',
              questionNo: 'रचना से संवाद (प्रश्न 2)',
              questionText: 'छोटी बच्ची को बैलों के प्रति प्रेम क्यों उमड़ आया? / Why did the young girl feel deep affection towards the bullocks?',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'पात्र: भैरव की अनाथ/सौतेली माँ की प्रताड़ित बेटी / Character: The motherless little girl',
              formula: 'स्मानुभूति (Empathy) एवं भावनात्मक सामंजस्य',
              stepByStepSolution: [
                'चरण 1 (Step 1): बच्ची की माँ मर चुकी थी और सौतेली माँ उसे रात-दिन मारती-पीटती व प्रताड़ित करती थी। (The motherless girl was constantly mistreated by her stepmother.)',
                'चरण 2 (Step 2): उसने देखा कि हीरा और मोती भी यहाँ भूख और बेबसी की मार झेल रहे हैं तथा ग्या उन्हें डंडों से पीटता है। (She saw that Heera and Moti were similarly starving and beaten by Gaya.)',
                'चरण 3 (Step 3): दोनों का दुःख एक स्मान था; अतः स्मान दुःख और अनाथपन की भावना ने बच्ची के मन में बैलों के प्रति गहरा वात्सल्य और प्रेम जगा दिया। (Shared suffering and empathy bridged the emotional bond between the girl and the voiceless animals.)'
              ],
              finalAnswer: 'दोनों के दुःख और प्रताड़ना की स्थिति एक जैसी थी, इसलिए बच्ची को बैलों से आत्मिक लगाव और प्रेम्हो ग्या।',
              keyTakeaway: 'स्मानुभूति (Empathy) भाषा की सीमाओं से प्रे आत्माओं को जोड़ती है।',
              nepCompetencyNote: 'SOCIO_EMOTIONAL: बाल मनोविज्ञान और स्मानुभूति की स्मझ।'
            }
          ],
          competencyQuestions: [
            {
              id: 'c9-hin-ch1-cbq1',
              questionNo: 'क्षमता-आधारित प्रश्न (CBQ 1)',
              questionText: 'प्रेमचंद ने गधे को "सद्गुणों की प्राकाष्ठा" कहकर मानव स्माज के किस दोगलेपन प्र तीखा व्यंग्य किया है? / How does Premchand satirize societal hypocrisy through the donkey’s virtues?',
              difficulty: 'Hard',
              type: 'Competency',
              givenData: 'सद्गुण: सहनशीलता, क्रोध का अभाव, सुख-दुःख में एक स्मान रहना।',
              formula: 'व्यंग्य विधा (Satirical Interpretation) एवं जीवन मूल्य',
              stepByStepSolution: [
                'चरण 1 (Step 1): ऋषि-मुनियों के स्मान सीधापन, अत्यधिक सहनशीलता और कभी क्रोध न करना गधे के सर्वोच्च गुण हैं। (The donkey exhibits patience, endurance, and equanimity akin to sages.)',
                'चरण 2 (Step 2): स्माज में जो व्यक्ति जितना सीधा और शांत होता है, लोग उसे उतना ही "मूर्ख" या "कमज़ोर" मानकर उसका शोषण करते हैं। (In human society, extreme simplicity and calmness are unfairly branded as foolishness, inviting exploitation.)',
                'चरण 3 (Step 3): लेखक व्यंग्य करते हैं कि आज की भौतिकवादी दुनिया में सीधेपन और सद्गुणों का स्म्मान्नहीं, ब्ल्कि चालाकी का बोलबाला है। (Premchand highlights that worldly success often misidentifies virtue as weakness.)'
              ],
              finalAnswer: 'लेखक ने सीधेपन को मूर्खता स्मझे जाने की मानवीय विकृति प्र कटाक्ष किया है कि अत्यधिक सीधा होना दुनिया में जीने के लिए उप्युक्त नहीं स्मझा जाता।',
              keyTakeaway: 'नैतिक मूल्यों और व्यावहारिक दुनिया के द्वंद्व की गहरी स्मझ।',
              nepCompetencyNote: 'ETHICAL_REASONING: नैतिक मूल्यों और सामाजिक विडंबना का दार्शनिक विश्लेषण।'
            }
          ],
          quiz: [
            {
              id: 'c9-hin-ch1-qz1',
              question: 'हीरा और मोती किस जाति के बैल थे? / Which breed did Heera and Moti belong to?',
              options: ['पछाईं (Pachhain)', 'साहीवाल (Sahiwal)', 'नागौरी (Nagori)', 'हरियाणवी (Haryanvi)'],
              correctIndex: 0,
              explanation: 'प्रेमचंद की कहानी में स्पष्ट उल्लेख है कि दोनों बैल पछाईं जाति के थे, देखने में सुंद्र और काम्में चौकस।'
            },
            {
              id: 'c9-hin-ch1-qz2',
              question: 'कांजीहौस की दीवार टूटने प्र सबसे अंत्में कौन से जानवर वहाँ से नहीं भागे? / Which animals refused to flee when the pound wall broke?',
              options: ['घोड़ियाँ', 'बकरियाँ', 'गधे (Donkeys)', 'भैंसें'],
              correctIndex: 2,
              explanation: 'दोनों गधे दीवार टूटने के बाद भी वहीं अड़े रहे क्योंकि उन्हें डर था कि भागे तो पकड़े जाने प्र फिर मार पड़ेगी।'
            }
          ]
        },
        {
          id: 'c9-hin-ch2',
          chapterNumber: 2,
          title: 'क्या लिखूँ? (पदुमलाल पुन्नालाल बख्शी)',
          officialBookCode: 'ihga1',
          officialPdfUrl: '/pdf/Class 09/Ganga-9th/ihga102.pdf',
          nepHighlights: 'निबंध लेखन कला, आलोचनात्मक सोच (Critical Thinking), अभिव्यक्ति की स्वतंत्रता एवं विष्य च्यन की विधा।',
          summaryTextbook: 'पदुमलाल पुन्नालाल बख्शी का ल्लित निबंध जिस्में लेखक निबंध लिखने की मनोदशा, विभिन्न दृष्टिकोणों और मौलिक चिंतन प्र विचार करता है।',
          exerciseSolutions: [
            {
              id: 'c9-hin-ch2-q1',
              questionNo: 'रचना से संवाद (प्रश्न 1)',
              questionText: 'लेखक्के सामने निबंध लिखने में सबसे बड़ी कठिनाई क्या थी? / What was the primary obstacle faced by the author in essay writing?',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'विधा: ल्लित निबंध / Subject: The artistic process of essay writing',
              formula: 'विष्य और शैली का स्मन्व्य / Harmonizing theme and personal voice',
              stepByStepSolution: [
                'चरण 1 (Step 1): लेखक्को दो सहेलियों नमिता और अमिता के आग्रह प्र "दूर के ढोल सुहावने होते हैं" और "स्माज सुधार" प्र निबंध लिखना था। (The author was tasked to write on prescribed topics.)',
                'चरण 2 (Step 2): सबसे बड़ी स्मस्या यह थी कि विष्य गंभीर थे और लेखक्को स्मझ नहीं आ रहा था कि वह विचारों को संक्षेप में बाँधे या विस्तार दे। (Balancing brevity with depth was a major intellectual challenge.)',
                'चरण 3 (Step 3): मौलिक विचार और आकर्षक शैली का सामंजस्य बैठाना ही लेखक्की मुख्य कठिनाई थी। (Achieving original expression without becoming clichéd was the core struggle.)'
              ],
              finalAnswer: 'विष्य के अनुकूल उप्युक्त विचार, मौलिक दृष्टिकोण और संक्षिप्त व प्रभावशाली शैली का च्यन करना सबसे बड़ी कठिनाई थी।',
              keyTakeaway: 'सच्चा लेखन बाहरी दबाव से नहीं, ब्ल्कि आंत्रिक प्रेरणा और स्पष्ट चिंतन से उपजता है।',
              nepCompetencyNote: 'CREATIVE_EXPRESSION: रचनात्मक लेखन प्रक्रिया और विचार-प्रबंधन।'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c9-hin-ch2-qz1',
              question: '‘दूर के ढोल सुहावने होते हैं’ का वास्तविक भावार्थ क्या है? / What does the idiom signify?',
              options: ['दूर की वस्तुएँ आकर्षित करती हैं प्र पास जाने प्र वास्तविक्ता प्ता चलती है', 'ढोल की आवाज़ दूर तक जाती है', 'दूर रहना अच्छा है', 'संगीत दूर से ही सुन्ना चाहिए'],
              correctIndex: 0,
              explanation: 'यह्लोकोक्ति इंगित करती है कि जो वस्तु दूर से आकर्षक लगती है, वह निकट आने प्र उतनी सुखद्या दोषरहित नहीं होती।'
            }
          ]
        },
        {
          id: 'c9-hin-ch3',
          chapterNumber: 3,
          title: 'संवादहीन (शेखर जोशी)',
          officialBookCode: 'ihga1',
          officialPdfUrl: '/pdf/Class 09/Ganga-9th/ihga103.pdf',
          nepHighlights: 'आधुनिक जीवन में संवादहीनता, सामाजिक संवेदनशीलता, मानवीय रिश्तों का बिखराव एवं मनोवैज्ञानिक गहराई।',
          summaryTextbook: 'शेखर जोशी की संवेदनशील कहानी जो आधुनिक स्माज में आत्मीयता के अभाव और आपसी संवाद टूटने की पीड़ा को उजाग्र करती है।',
          exerciseSolutions: [
            {
              id: 'c9-hin-ch3-q1',
              questionNo: 'रचना से संवाद (प्रश्न 1)',
              questionText: 'कहानी का शीर्षक ‘संवादहीन’ किस्मानसिक और सामाजिक अवस्था को रेखांकित करता है? / What socio-psychological state does the title "Samvadhin" underscore?',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'विष्य: आधुनिक एकाकीपन / Modern alienation and emotional breakdown',
              formula: 'मनोवैज्ञानिक विश्लेषण / Psycho-social analysis',
              stepByStepSolution: [
                'चरण 1 (Step 1): संवाद केवल शब्दों का बोलना नहीं, ब्ल्कि दिलों का जुड़ना और सुख-दुःख साझा करना है। (Communication is not mere exchange of words, but emotional connection.)',
                'चरण 2 (Step 2): कहानी में पात्र एक ही छत के नीचे या स्माज में साथ रहकर भी भावनात्मक रूप से एक-दूसरे से कटे हुए हैं। (Characters co-exist physically but remain emotionally estranged.)',
                'चरण 3 (Step 3): यह शीर्षक आधुनिक मनुष्य के अकेलेपन और संवेदनहीनता की त्रासदी को स्पष्ट करता है। (The title highlights contemporary alienation.)'
              ],
              finalAnswer: 'यह शीर्षक भौतिक निकटता के बावजूद दिलों की दूरी और आपसी बातचीत व संवेदनशीलता के अभाव को द्र्शाता है।',
              keyTakeaway: 'सार्थक संवाद ही स्माज और रिश्तों को जीवित्रखता है।',
              nepCompetencyNote: 'INTERPERSONAL_SKILLS: मानवीय संवेदना और प्रभावी संवाद का म्हत्व।'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c9-hin-ch3-qz1',
              question: 'शेखर जोशी का संबंध मुख्य रूप से किस साहित्यिक आंदोलन से रहा है? / Which literary movement was Shekhar Joshi associated with?',
              options: ['नई कहानी आंदोलन (Nayi Kahani Movement)', 'प्रगतिवाद', 'छायावाद', 'प्र्योगवाद'],
              correctIndex: 0,
              explanation: 'शेखर जोशी नई कहानी आंदोलन के प्रमुख हस्ताक्षर हैं, जिन्होंने आम जनजीवन की बारीकियों को चित्रित किया।'
            }
          ]
        },
        {
          id: 'c9-hin-ch4',
          chapterNumber: 4,
          title: 'ऐसी भी बातें होती हैं: लता मंगेशकर से साक्षात्कार (यतींद्र मिश्र)',
          officialBookCode: 'ihga1',
          officialPdfUrl: '/pdf/Class 09/Ganga-9th/ihga104.pdf',
          nepHighlights: 'साक्षात्कार विधा, भारतीय संगीत प्रंप्रा, लता मंगेशकर का जीवन-संघर्ष एवं कला के प्रति स्मर्पण।',
          summaryTextbook: 'यतींद्र मिश्र द्वारा स्वर कोकिला ‘भारत्रत्न’ लता मंगेशकर से लिया ग्या आत्मीय साक्षात्कार जिस्में संगीत, साधना, रियाज़ और जीवन के दुर्लभ संस्मरण उजाग्र होते हैं।',
          exerciseSolutions: [
            {
              id: 'c9-hin-ch4-q1',
              questionNo: 'रचना से संवाद (प्रश्न 1)',
              questionText: 'लता मंगेशकर के अनुसार गायन में सफलता का मूल मंत्र क्या है? / What is the key to musical excellence according to Lata Mangeshkar?',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'साक्षात्कार अंश / Excerpt from the interview',
              formula: 'कला साधना एवं अनुशासन / Discipline in artistic dedication',
              stepByStepSolution: [
                'चरण 1 (Step 1): निरंत्र और कठोर रियाज़ (अभ्यास)। (Relentless and disciplined daily practice.)',
                'चरण 2 (Step 2): सुर और शब्दों के भाव को पूरी आत्मा से म्हसूस करना। (Immersing oneself fully into lyrical emotion and melody.)',
                'चरण 3 (Step 3): गुरुओं के प्रति आद्र और संगीत के प्रति आजीवन शिष्य बने रहने का विनम्र भाव। (Humility and lifelong dedication as a learner.)'
              ],
              finalAnswer: 'अनवरत्रियाज़, सुरों के प्रति स्मर्पण, शब्दों की शुद्धता और असीम विनम्रता ही संगीत्में सर्वोच्चता का मूल मंत्र है।',
              keyTakeaway: 'म्हानता प्रतिभा के साथ-साथ अटूट अनुशासन और विनम्रता से अर्जित होती है।',
              nepCompetencyNote: 'ARTISTIC_APPRECIATION: भारतीय संगीत संस्कृति और कला-साधना का मूल्य।'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c9-hin-ch4-qz1',
              question: 'लता मंगेशकर को भारत का कौन सा सर्वोच्च नाग्रिक स्म्मान प्राप्त हुआ? / Which highest civilian award was conferred upon Lata Mangeshkar?',
              options: ['भारत्रत्न (Bharat Ratna)', 'पद्म श्री', 'पद्म भूषण', 'साहित्य अकादमी'],
              correctIndex: 0,
              explanation: 'लता मंगेशकर को वर्ष 2001 में भारत का सर्वोच्च नाग्रिक स्म्मान ‘भारत्रत्न’ प्रदान किया ग्या था।'
            }
          ]
        },
        {
          id: 'c9-hin-ch5',
          chapterNumber: 5,
          title: 'आखिरी चट्टान तक (मोहन राकेश)',
          officialBookCode: 'ihga1',
          officialPdfUrl: '/pdf/Class 09/Ganga-9th/ihga105.pdf',
          nepHighlights: 'यात्रा-वृत्तांत विधा, कन्याकुमारी का भौगोलिक एवं प्राकृतिक सौंद्र्य, सूर्यास्त का जीवंत चित्रण।',
          summaryTextbook: 'मोहन राकेश का कन्याकुमारी यात्रा का सजीव और काव्यात्मक्यात्रा-वृत्तांत जिस्में तीनों स्मुद्रों के संगम, सूर्यास्त के जादुई रंगों और अंतिम चट्टान तक्की पद्यात्रा का रोमांच है।',
          exerciseSolutions: [
            {
              id: 'c9-hin-ch5-q1',
              questionNo: 'रचना से संवाद (प्रश्न 1)',
              questionText: 'कन्याकुमारी के सूर्यास्त और सूर्योद्य का लेखक ने किस प्रकार वर्णन किया है? / How did Mohan Rakesh depict sunset and sunrise at Kanyakumari?',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'स्थान: कन्याकुमारी साग्र संगम / Setting: Confluence of oceans at Kanyakumari',
              formula: 'प्राकृतिक बिंब विधान / Visual imagery in travelogue',
              stepByStepSolution: [
                'चरण 1 (Step 1): लेखक ने क्षितिज प्र ढलते सूर्य और आकाश में रंगों के जादुई प्रिवर्तन (सुनहरा, सिंदूरी, बैंगनी) का मनोहारी चित्रण किया। (The author captured the rapid transformation of golden, crimson, and violet hues on the ocean horizon.)',
                'चरण 2 (Step 2): अरब साग्र, बंगाल की खाड़ी और हिंद म्हासाग्र के संगम प्र पानी की लहरों में सूर्य के प्रतिबिंब को जीवंत्रूप में प्रस्तुत किया। (The interplay of waves at the three-sea confluence mirrored celestial brilliance.)',
                'चरण 3 (Step 3): प्रकृति का यह दृश्य लेखक्के मन में विस्म्य और शांति की अनुभूति जगाता है। (The spectacle inspired profound awe and introspective stillness.)'
              ],
              finalAnswer: 'लेखक ने रंगों की विविधता, लहरों के स्पंदन और क्षितिज के विस्तार का अत्यंत सजीव, काव्यात्मक और चित्रात्मक वर्णन किया है।',
              keyTakeaway: 'प्रकृति का अवलोकन मनुष्य को जीवन के सौंद्र्य और विशालता से जोड़ता है।',
              nepCompetencyNote: 'ENVIRONMENTAL_AWARENESS: भारत की प्राकृतिक विविधता और भौगोलिक सौंद्र्य का संवेदन।'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c9-hin-ch5-qz1',
              question: '‘आखिरी चट्टान तक’ किस साहित्यिक विधा की रचना है? / What literary genre is "Aakhiri Chattan Tak"?',
              options: ['यात्रा-वृत्तांत (Travelogue)', 'उपन्यास', 'नाटक', 'संस्मरण'],
              correctIndex: 0,
              explanation: 'यह्मोहन राकेश द्वारा रचित प्रसिद्ध्यात्रा-वृत्तांत (Travelogue) है।'
            }
          ]
        },
        {
          id: 'c9-hin-ch6',
          chapterNumber: 6,
          title: 'रीढ़ की हड्डी (जगदीश्चंद्र माथुर)',
          officialBookCode: 'ihga1',
          officialPdfUrl: '/pdf/Class 09/Ganga-9th/ihga106.pdf',
          nepHighlights: 'एकांकी विधा, स्त्री-शिक्षा, सामाजिक रूढ़ियों व दहेज-प्रथा प्र प्रहार, उमा का स्वाभिमान।',
          summaryTextbook: 'जगदीश्चंद्र माथुर का प्रसिद्ध सामाजिक नाटक/एकांकी जिस्में सुशिक्षित्युवती उमा पारंप्रिक विवाह व्यवस्था, लड़कियों की खरीद-फरोख्त जैसी मानसिक्ता और दिखावे के संकीर्ण रवैये को सशक्त उत्त्र देती है।',
          exerciseSolutions: [
            {
              id: 'c9-hin-ch6-q1',
              questionNo: 'रचना से संवाद (प्रश्न 1)',
              questionText: '‘रीढ़ की हड्डी’ शीर्षक्की सार्थक्ता स्पष्ट कीजिए। / Explain the significance of the title "Reedh Ki Haddi" (Backbone).',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'प्रतीक: रीढ़ की हड्डी (आत्मस्म्मान, चारित्रिक दृढ़ता) / Symbolism of backbone',
              formula: 'लाक्षणिक अर्थ एवं सामाजिक व्यंग्य / Metaphorical satire',
              stepByStepSolution: [
                'चरण 1 (Step 1): शारीरिक रूप से: शंकर झुक्कर चलता है और उसकी शारीरिक बनावट में रीढ़ की हड्डी कमज़ोर्या दोषपूर्ण है। (Physically, Shankar lacks an upright posture and has spinal weakness.)',
                'चरण 2 (Step 2): नैतिक रूप से: शंकर का कोई स्वतंत्र व्यक्तित्व, स्वाभिमान्या चरित्र नहीं है; वह पिता की संकीर्ण सोच का मात्र कठपुतली है। (Morally and socially, he lacks character and independence—having no "moral backbone".)',
                'चरण 3 (Step 3): सामाजिक रूप से: जिस स्माज में स्त्रियों को वस्तु स्मझा जाए और्युवकों में चरित्र की रीढ़ न हो, वह स्माज पंगु है। (A society that dehumanizes educated women lacks societal strength.)'
              ],
              finalAnswer: 'यह शीर्षक शंकर के शारीरिक दोष के साथ-साथ उसके खोखले चरित्र, कायरता और स्माज की संकीर्ण मानसिक्ता प्र दोहरा तीखा व्यंग्य करता है।',
              keyTakeaway: 'चारित्रिक दृढ़ता और स्वाभिमान ही जीवन की वास्तविक "रीढ़ की हड्डी" है।',
              nepCompetencyNote: 'GENDER_SENSITIZATION: लैंगिक स्मानता, स्त्री-शिक्षा और सामाजिक रूढ़ियों का उन्मूलन।'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c9-hin-ch6-qz1',
              question: 'उमा ने अपनी शिक्षा का सच छिपाने से क्यों इनकार कर दिया? / Why did Uma refuse to hide her educational qualifications?',
              options: ['स्वाभिमान और सत्यनिष्ठा के कारण (Integrity & Self-respect)', 'क्रोध के कारण', 'पिता के कहने प्र', 'लड़के को डराने के लिए'],
              correctIndex: 0,
              explanation: 'उमा स्वाभिमानी थी; वह विवाह के लिए अपनी उच्च शिक्षा को छिपाकर खुद को बाज़ारू वस्तु की त्रह पेश करना अपमानजनक मानती थी।'
            }
          ]
        },
        {
          id: 'c9-hin-ch7',
          chapterNumber: 7,
          title: 'मैं और मेरा देश (कन्हैयालाल मिश्र \'प्रभाकर\')',
          officialBookCode: 'ihga1',
          officialPdfUrl: '/pdf/Class 09/Ganga-9th/ihga107.pdf',
          nepHighlights: 'नाग्रिक्कर्तव्य, राष्ट्रप्रेम, व्यक्तिगत आचरण से देश का स्म्मान, स्वामी रामतीर्थ का प्रेरक प्रसंग।',
          summaryTextbook: 'कन्हैयालाल मिश्र ‘प्रभाकर’ का राष्ट्रीय चेतना से ओत-प्रोत निबंध जो सिखाता है कि हर नाग्रिक्का कर्म देश के गौरव से जुड़ा है; ह्मारे छोटे-से-छोटे आचरण से देश का सिर ऊँचा या नीचा होता है।',
          exerciseSolutions: [
            {
              id: 'c9-hin-ch7-q1',
              questionNo: 'रचना से संवाद (प्रश्न 1)',
              questionText: 'जापान में स्वामी रामतीर्थ को फल ढूँढते देख जापानी युवक ने क्या किया और क्यों? / What did the Japanese youth do upon seeing Swami Ramtirtha searching for fruits?',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'प्रसंग: स्वामी रामतीर्थ की जापान्यात्रा / Anecdote of Swami Ramtirtha in Japan',
              formula: 'राष्ट्रभक्ति और आतिथ्य सत्कार / Civic patriotism in action',
              stepByStepSolution: [
                'चरण 1 (Step 1): जापानी युवक ने दूर से ताज़े फल खरीदकर स्वामीजी को भेंट किए और पैसे लेने से इनकार कर दिया। (The youth brought fresh fruits from afar and refused to accept any money.)',
                'चरण 2 (Step 2): उसने केवल्यह प्रार्थना की कि स्वामीजी अपने देश जाकर्यह न कहें कि जापान में अच्छे फल नहीं मिलते। (He only requested Swami Ramtirtha never to say that good fruits are not available in Japan.)',
                'चरण 3 (Step 3): युवक्का उद्देश्य अपने देश के स्म्मान की रक्षा करना था। (The young man prioritized his nation\'s honor above personal profit.)'
              ],
              finalAnswer: 'जापानी युवक ने स्वामीजी को मुफ्त फल भेंट किए ताकि कोई विदेशी मेह्मान उसके देश की बदनामी न करे।',
              keyTakeaway: 'प्रत्येक नाग्रिक अपने आचरण से अपने राष्ट्र का सच्चा प्रतिनिधि (राजदूत) होता है।',
              nepCompetencyNote: 'CIVIC_VALUES: नाग्रिक चेतना, राष्ट्रीय गौरव और व्यक्तिगत उत्त्रदायित्व।'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c9-hin-ch7-qz1',
              question: 'लेखक्के अनुसार देश का गौरव किससे बढ़ता है? / How is a nation\'s honor elevated according to the author?',
              options: ['नाग्रिकों के उत्कृष्ट और शिष्ट आचरण से (Through noble civic conduct)', 'केवल बड़ी-बड़ी बातों से', 'सैनिक शक्ति से', 'धन-दौलत से'],
              correctIndex: 0,
              explanation: 'लेखक्के अनुसार नाग्रिकों का नैतिक, ईमानदार और अनुशासित आचरण ही देश की प्रतिष्ठा को विश्व में ऊँचा उठाता है।'
            }
          ]
        },
        {
          id: 'c9-hin-ch8',
          chapterNumber: 8,
          title: 'पद (रैदास)',
          officialBookCode: 'ihga1',
          officialPdfUrl: '/pdf/Class 09/Ganga-9th/ihga108.pdf',
          nepHighlights: 'भक्तिकाल, निर्गुण भक्ति, स्मता और सामाजिक सद्भाव, "अब कैसे छूटे राम नाम रट लागी"।',
          summaryTextbook: 'संत्रैदास के भक्ति पद जिनमें प्रभु और भक्त के अन्न्य संबंध (चंदन-पानी, घन-मोरा, मोती-धागा, दीपक-बाती) का मर्मस्प्र्शी वर्णन है तथा प्रभु की स्मद्र्शी कृपा का गुणगान है।',
          exerciseSolutions: [
            {
              id: 'c9-hin-ch8-q1',
              questionNo: 'रचना से संवाद (प्रश्न 1)',
              questionText: 'रैदास ने अपने प्रभु और स्व्यं की तुलना किन-किन प्रतीकों से की है? / Which metaphors did Raidas use to compare the Divine with himself?',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'पद: "प्रभु जी तुम चंदन ह्म पानी" / Poem: Metaphorical pairs of devotion',
              formula: 'काव्य बिंब एवं भक्ति रस / Poetic symbolism in Bhakti poetry',
              stepByStepSolution: [
                'चरण 1 (Step 1): चंदन और पानी – जैसे चंदन की सुगंध पानी के अंग-अंग में स्मा जाती है। (Sandalwood & Water)',
                'चरण 2 (Step 2): घन (बादल) और मोर – जैसे घने बादलों को देखकर वन का मोर नाच उठता है। (Clouds & Peacock)',
                'चरण 3 (Step 3): चंद्रमा और चकोर – जैसे चकोर पक्षी एकटक चंद्रमा को निहारता है। (Moon & Chakor bird)',
                'चरण 4 (Step 4): दीपक और बाती, मोती और धागा, स्वामी और दास। (Lamp & Wick, Pearl & Thread, Master & Servant)'
              ],
              finalAnswer: 'रैदास ने प्रभु को चंदन, बादल, चाँद, मोती और स्वामी तथा स्व्यं को पानी, मोर, चकोर, धागा और दास बताया है।',
              keyTakeaway: 'भक्त और ईश्वर का संबंध द्वैत्में भी अद्वैत की त्रह एकाकार है।',
              nepCompetencyNote: 'CULTURAL_HERITAGE: भक्तिकालीन साहित्य और संत काव्य प्रंप्रा का आस्वादन।'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c9-hin-ch8-qz1',
              question: '‘जाकी अंग-अंग बास स्मानी’ में ‘बास’ का अर्थ क्या है? / What does "Baas" signify?',
              options: ['सुगंध (Fragrance)', 'निवास', 'कपड़ा', 'हवा'],
              correctIndex: 0,
              explanation: 'यहाँ ‘बास’ का अर्थ चंदन की मनभावन सुगंध (सुवास) से है जो पानी के कण-कण में घुल जाती है।'
            }
          ]
        },
        {
          id: 'c9-hin-ch9',
          chapterNumber: 9,
          title: 'राम-लक्ष्मण-प्रशुराम संवाद (तुलसीदास)',
          officialBookCode: 'ihga1',
          officialPdfUrl: '/pdf/Class 09/Ganga-9th/ihga109.pdf',
          nepHighlights: 'अवधी भाषा का माधुर्य, रामचरित्मानस (बालकांड), वीर एवं रौद्र रस, लक्ष्मण का वाकचातुर्य।',
          summaryTextbook: 'सीता स्व्यंवर में शिव-धनुष टूटने के पश्चात क्रोधी प्रशुराम का आगमन, लक्ष्मण के तीखे व्यंग्य बाण तथा मर्यादा पुरुषोत्त्म श्रीराम के शांत व मधुर वचनों का म्हाकाव्यात्मक प्रसंग।',
          exerciseSolutions: [
            {
              id: 'c9-hin-ch9-q1',
              questionNo: 'रचना से संवाद (प्रश्न 1)',
              questionText: 'प्रशुराम के क्रोध करने प्र लक्ष्मण ने धनुष के टूट जाने के लिए कौन-कौन से त्र्क दिए? / What arguments did Lakshmana present defending the broken bow?',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'काव्यांश: रामचरित्मानस बालकांड / Context: Bal Kanda, Ramcharitmanas',
              formula: 'तार्किक संवाद्विश्लेषण / Argumentative poetic discourse',
              stepByStepSolution: [
                'चरण 1 (Step 1): बचपन में ह्मने खेल-खेल में न जाने कितनी धनुहियाँ तोड़ीं, तब मुनिराज ने कभी ऐसा क्रोध नहीं किया। (We broke countless little bows in childhood without any rage from you.)',
                'चरण 2 (Step 2): यह पुराना और जीर्ण-शीर्ण धनुष था, इसके टूटने से क्या लाभ्या क्या हानि? (This was an ancient bow; what profit or loss could its breaking cause?)',
                'चरण 3 (Step 3): श्रीराम ने तो इसे नए के धोखे से केवल छुआ था, यह तो छूते ही स्वतः टूट ग्या, इस्में रघुनाथ का कोई दोष नहीं है। (Rama merely touched it thinking it was new; it broke on its own.)'
              ],
              finalAnswer: 'लक्ष्मण ने धनुष के पुराने होने, बचपन में खेल-खेल में धनुहियाँ तोड़ने और श्रीराम के छूते ही टूटने का त्र्क दिया।',
              keyTakeaway: 'तार्किक वाकचातुर्य और आत्मरक्षा में निडर अभिव्यक्ति की मिसाल।',
              nepCompetencyNote: 'CRITICAL_LITERACY: शास्त्रीय अवधी काव्य और संवाद-कौशल का विश्लेषण।'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c9-hin-ch9-qz1',
              question: '‘राम-लक्ष्मण-प्रशुराम संवाद’ रामचरित्मानस के किस कांड से उद्धृत है? / From which Kanda is this dialogue taken?',
              options: ['बालकांड (Bal Kanda)', 'अयोध्याकांड', 'अरण्यकांड', 'सुंद्रकांड'],
              correctIndex: 0,
              explanation: 'यह अमर प्रसंग गोस्वामी तुलसीदास कृत श्रीरामचरित्मानस के बालकांड से लिया ग्या है।'
            }
          ]
        },
        {
          id: 'c9-hin-ch10',
          chapterNumber: 10,
          title: 'भारति, ज्य, विज्यकरे! (सूर्यकांत्त्रिपाठी \'निराला\')',
          officialBookCode: 'ihga1',
          officialPdfUrl: '/pdf/Class 09/Ganga-9th/ihga110.pdf',
          nepHighlights: 'सरस्वती वंदना, नव जाग्रण, ज्ञान का प्रकाश एवं छायावादी काव्य की ओजस्वी भाषा।',
          summaryTextbook: 'म्हाप्राण निराला की ज्ञानदायिनी माँ भारती (सरस्वती) की ओजपूर्ण वंदना जो अज्ञान के अंधकार को मिटाकर स्वतंत्रता, ज्ञान और नव-जाग्रण का प्रकाश फैलाने का आह्वान करती है।',
          exerciseSolutions: [
            {
              id: 'c9-hin-ch10-q1',
              questionNo: 'रचना से संवाद (प्रश्न 1)',
              questionText: 'कवि माँ सरस्वती से किस प्रकार के वरदान की याचना करता है? / What boon does the poet seek from Goddess Saraswati?',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'कविता: भारति, ज्य, विज्यकरे / Theme: Invocation of enlightenment',
              formula: 'काव्य भावार्थ / Interpretation of national resurgence',
              stepByStepSolution: [
                'चरण 1 (Step 1): अज्ञान के बंधनों को काटकर अंत्र में ज्ञान का अमर प्रकाश भरने की प्रार्थना। (Dispelling darkness and ignorance with divine wisdom.)',
                'चरण 2 (Step 2): भारत्में नव-चेतना, स्वतंत्रता और आत्मब्ल का संचार करना। (Infusing national resurgence and moral courage.)',
                'चरण 3 (Step 3): वाणी में सत्य, माधुर्य और अमरत्व का वरदान। (Granting truth, sweetness, and fearlessness in human expression.)'
              ],
              finalAnswer: 'कवि माँ सरस्वती से अज्ञान के अंधकार को नष्ट करने, ज्ञान की ज्योति जलाने और भारत को नव-जाग्रण का वरदान देने की प्रार्थना करते हैं।',
              keyTakeaway: 'ज्ञान ही प्राधीनता और संकीर्णता से मुक्ति का एकमात्र द्वार है।',
              nepCompetencyNote: 'AESTHETIC_SENSE: छायावादी राष्ट्रीय काव्य और भावात्मक जाग्रण।'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c9-hin-ch10-qz1',
              question: '‘भारति, ज्य, विज्यकरे!’ में ‘भारति’ किसे संबोधित है? / Whom does "Bharati" address?',
              options: ['विद्या की देवी सरस्वती (Goddess Saraswati)', 'भारत्माता', 'गंगा नदी', 'प्रकृति'],
              correctIndex: 0,
              explanation: '‘भारति’ वाग्देवी माँ सरस्वती का प्रसिद्ध नाम्है, जो ज्ञान और कला की अधिष्ठात्री हैं।'
            }
          ]
        },
        {
          id: 'c9-hin-ch11',
          chapterNumber: 11,
          title: 'झाँसी की रानी (सुभद्रा कुमारी चौहान)',
          officialBookCode: 'ihga1',
          officialPdfUrl: '/pdf/Class 09/Ganga-9th/ihga111.pdf',
          nepHighlights: 'वीर रस, 1857 का प्रथम स्वतंत्रता संग्राम, वीरांगना लक्ष्मीबाई का अदम्य शौर्य, "खूब्लड़ी मर्दानी वह तो झाँसी वाली रानी थी"।',
          summaryTextbook: 'कव्यित्री सुभद्रा कुमारी चौहान की अमर वीर रस कविता जो 1857 के स्वतंत्रता संग्राम्में वीरांगना रानी लक्ष्मीबाई के शौर्य, स्वाभिमान, देशभक्ति और सर्वोच्च ब्लिदान का यशोगान करती है।',
          exerciseSolutions: [
            {
              id: 'c9-hin-ch11-q1',
              questionNo: 'रचना से संवाद (प्रश्न 1)',
              questionText: '‘सिंहासन हिल उठे राजवंशों ने भृकुटी तानी थी’ पंक्ति से कव्यित्री का क्या आश्य है? / What did the poet signify by "Sinhasan hil uthe"?',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'ऐतिहासिक पृष्ठभूमि: 1857 की क्रांति / Historical backdrop of 1857 rebellion',
              formula: 'ऐतिहासिक्काव्य विश्लेषण / Socio-historical poetic analysis',
              stepByStepSolution: [
                'चरण 1 (Step 1): अंग्रेजों की हड़प नीति (Doctrine of Lapse) से भारतीय देशी राजाओं में भारी असंतोष फैल ग्या था। (British annexation policies had agitated Indian royal states.)',
                'चरण 2 (Step 2): ब्रिटिश ईस्ट इंडिया कंपनी के सिंहासन डगमगाने लगे क्योंकि भारत के गुलाम राजाओं ने विद्रोह का बिगुल फूंक दिया था। (The colonial throne trembled as rulers united in open defiance.)',
                'चरण 3 (Step 3): यह पंक्ति भारतीय स्वाधीनता के प्रथम संगठित विद्रोह के जन-उभार को रेखांकित करती है। (It marks the awakening of Indian national consciousness.)'
              ],
              finalAnswer: 'ब्रिटिश हुकूमत के अत्याचारों के विरुद्ध भारतीय राजाओं में विद्रोह की ज्वाला भड़क उठी और ब्रिटिश शासन की जड़ें हिलने लगीं।',
              keyTakeaway: 'स्वाधीनता और आत्मस्म्मान के लिए एकजुट संघर्ष ही क्रांति की नींव बनता है।',
              nepCompetencyNote: 'PATRIOTIC_VALUES: स्वतंत्रता सेनानियों के त्याग और ऐतिहासिक संघर्ष का मूल्यांकन।'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c9-hin-ch11-qz1',
              question: 'रानी लक्ष्मीबाई का बचपन में क्या नाम था? / What was Rani Lakshmibai called in childhood?',
              options: ['छबीली (Chhabili)', 'कल्याणी', 'पद्मिनी', 'भारती'],
              correctIndex: 0,
              explanation: 'कविता में उल्लेख है: "कानपुर के नाना की मुँहबोली बहन छबीली थी, लक्ष्मीबाई नाम पिता की वह संतान अकेली थी।"'
            }
          ]
        },
        {
          id: 'c9-hin-ch12',
          chapterNumber: 12,
          title: 'घर की याद (भवानीप्रसाद मिश्र)',
          officialBookCode: 'ihga1',
          officialPdfUrl: '/pdf/Class 09/Ganga-9th/ihga112.pdf',
          nepHighlights: 'पारिवारिक प्रेम, 1942 का भारत छोड़ो आंदोलन, जेल की यातना में सावन से संवाद, संवेदनशीलता।',
          summaryTextbook: 'भवानीप्रसाद मिश्र की जेल प्रवास्में रचित्मर्मस्प्र्शी कविता जिस्में घनघोर वर्षा के बीच कवि को अपने घर, स्नेह्म्यी माँ, ब्लिष्ठ व जिंदादिल पिता तथा भाई-बहनों की याद सताती है और वह सावन को दूत बनाकर माता-पिता तक अपना कुशल-क्षेम पहुँचाते हैं।',
          exerciseSolutions: [
            {
              id: 'c9-hin-ch12-q1',
              questionNo: 'रचना से संवाद (प्रश्न 1)',
              questionText: 'कवि ने सावन को क्या संदेश अपने माता-पिता तक पहुँचाने के लिए कहा? / What message did the poet entrust the clouds to deliver to his parents?',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'काव्य संद्र्भ: जेल में सावन से आत्मीय संवाद / Context: Solitary imprisonment & message to family',
              formula: 'संवेदनशील पारिवारिक अभिव्यक्ति / Poetic empathy and filial devotion',
              stepByStepSolution: [
                'चरण 1 (Step 1): कवि सावन से कहते हैं कि तुम जितना चाहो ब्रस लो, प्र मेरे माता-पिता की आँखों से आँसू नहीं ब्रसने चाहिए। (Rain as much as you will, but let not tears fall from my parents\' eyes.)',
                'चरण 2 (Step 2): उन्हें जाकर कहना कि भवानी जेल में बहुत्मजे में है, लिखता-पढ़ता है और खुश्रहता है। (Tell them Bhawani is joyful, reading, writing, and spinning yarn.)',
                'चरण 3 (Step 3): मेरी बीमारी, सन्नाटे और निराशा की बातें छिपा लेना ताकि वे दुःखी न हों। (Conceal my despair and loneliness so they remain comforted.)'
              ],
              finalAnswer: 'कवि ने सावन से कहा कि वह्माता-पिता को उसकी कुशलता और आनंद का स्माचार दे तथा उसकी पीड़ा और उदासी को छिपा ले ताकि वे रोएं नहीं।',
              keyTakeaway: 'माता-पिता के प्रति अगाध प्रेम और देशहित्में क्ष्टों को सहने का अदम्य साहस।',
              nepCompetencyNote: 'EMOTIONAL_INTELLIGENCE: पारिवारिक मूल्यों, त्याग और मातृ-पितृ भक्ति की गहरी अनुभूति।'
            }
          ],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c9-hin-ch12-qz1',
              question: 'कवि भवानीप्रसाद मिश्र ने अपने पिता की कौन सी विशेषताएँ बताई हैं? / Which attributes of his father did the poet highlight?',
              options: ['वृद्ध होकर भी फुर्तीले, मौत के आगे न हिचकने वाले और हँस्मुख (Vibrant, fearless & cheerful)', 'गंभीर और क्रोधी', 'कमज़ोर और शांत', 'धार्मिक और संन्यासी'],
              correctIndex: 0,
              explanation: 'कवि कहते हैं: "पिताजी जिनको बुढ़ापा एक्क्षण भी नहीं व्यापा, जो अभी भी दौड़ जाएं, जो अभी भी खिलखिलाएं, मौत के आगे न हिचकें, शेर के आगे न बिचकें।"'
            }
          ]
        }
      ]
    },
    {
      id: 'c9-social-science',
      name: 'Social Science (Understanding Society)',
      iconName: 'Globe',
      color: '#0284c7',
      description: 'Understanding Society: India and Beyond (Social Science Textbook for Grade 9 Part 1) & Contemporary India.',
      totalChapters: 20,
      coverImageUrl: '/book-covers/class9-social-science-understanding-society.png',
      chapters: [
        {
          id: 'c9-sst-his-ch1',
          chapterNumber: 1,
          title: 'The French Revolution (History)',
          officialBookCode: 'iess1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iess101.pdf',
          nepHighlights: 'Storming of Bastille (1789), Three Estates, Declaration of Rights of Man & Citizen.',
          summaryTextbook: 'Examines French society during late 18th century, Reign of Terror (Robespierre), abolition of slavery, and rise of Napoleon Bonaparte.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-sst-his-ch2',
          chapterNumber: 2,
          title: 'Socialism in Europe and the Russian Revolution (History)',
          officialBookCode: 'iess1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iess102.pdf',
          nepHighlights: 'Liberals, Radicals, Conservatives, Bolsheviks (Lenin) & October Revolution 1917.',
          summaryTextbook: 'Covers Russian Empire in 1914, 1905 Bloody Sunday, February Revolution in Petrograd, Soviet Union formation, and Stalin\'s collectivisation.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-sst-his-ch3',
          chapterNumber: 3,
          title: 'Nazism and the Rise of Hitler (History)',
          officialBookCode: 'iess1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iess103.pdf',
          nepHighlights: 'Weimar Republic collapse, Great Depression, Nazi ideology & Holocaust crimes against humanity.',
          summaryTextbook: 'Examines Hitlerâ€™s destruction of democracy, racial state worldview, youth in Nazi Germany, propaganda machinery, and the Holocaust.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-sst-geo-ch4',
          chapterNumber: 4,
          title: 'India â€“ Size and Location (Geography)',
          officialBookCode: 'iess2',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iess201.pdf',
          nepHighlights: 'Latitudinal & Longitudinal extent (8Â°4\'N to 37Â°6\'N, 68Â°7\'E to 97Â°25\'E), Standard Meridian 82Â°30\'E.',
          summaryTextbook: 'Covers Indiaâ€™s geographical size (3.28 million sq km), 7th largest country, coastline (7516.6 km), neighbors, and strategic central location on Indian Ocean.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-sst-geo-ch5',
          chapterNumber: 5,
          title: 'Physical Features of India (Geography)',
          officialBookCode: 'iess2',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iess202.pdf',
          nepHighlights: 'Plate Tectonics, The Himalayas, Northern Plains, Peninsular Plateau, Indian Desert, Coastal Plains & Islands.',
          summaryTextbook: 'Examines geological formation of Indian landmass from Gondwanaland, Himadri, Himachal, Shiwaliks, Bhabar, Terai, Bhangar, Khadar, Western/Eastern Ghats, and Lakshadweep/Andaman islands.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-sst-geo-ch6',
          chapterNumber: 6,
          title: 'Drainage (Geography)',
          officialBookCode: 'iess2',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iess203.pdf',
          nepHighlights: 'Himalayan Rivers (Indus, Ganga, Brahmaputra) vs Peninsular Rivers (Narmada, Tapi, Godavari, Krishna).',
          summaryTextbook: 'Covers drainage basins, water divides, drainage patterns (dendritic, trellis, rectangular, radial), freshwater lakes, and river pollution control.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-sst-civ-ch7',
          chapterNumber: 7,
          title: 'What is Democracy? Why Democracy? (Civics)',
          officialBookCode: 'iess3',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iess301.pdf',
          nepHighlights: 'Free & Fair Electoral Competition, One Person One Vote One Value, Rule of Law & Democratic Accountability.',
          summaryTextbook: 'Examines definition of democracy through real-world case studies (Pakistan Musharraf, China elections, Zimbabwe Mugabe) and arguments for and against democracy.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-sst-civ-ch8',
          chapterNumber: 8,
          title: 'Constitutional Design (Civics)',
          officialBookCode: 'iess3',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iess302.pdf',
          nepHighlights: 'Democratic Constitution in South Africa (Nelson Mandela) & Making of Indian Constitution.',
          summaryTextbook: 'Covers struggle against Apartheid in South Africa, role of Constituent Assembly, Drafting Committee (Dr. B.R. Ambedkar), and Preamble guiding values (Sovereign, Socialist, Secular, Democratic Republic).',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-sst-eco-ch9',
          chapterNumber: 9,
          title: 'The Story of Village Palampur (Economics)',
          officialBookCode: 'iess4',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iess401.pdf',
          nepHighlights: '4 Factors of Production (Land, Labor, Physical Capital, Human Capital), Green Revolution & Non-farm activities.',
          summaryTextbook: 'Introduces basic economic concepts through hypothetical village Palampur, multiple cropping, HYV seeds, tubewell irrigation, and transport/dairy/small-scale manufacturing.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-sst-eco-ch10',
          chapterNumber: 10,
          title: 'People as Resource (Economics)',
          officialBookCode: 'iess4',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iess402.pdf',
          nepHighlights: 'Human Capital Formation (Education & Health investment), Economic Activities & Unemployment types.',
          summaryTextbook: 'Examines story of Sakal vs Vilas, primary/secondary/tertiary sectors, seasonal vs disguised unemployment, and youth skill empowerment.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        }
      ]
    },
    {
      id: 'c9-hindi-grammar',
      name: 'Hindi Grammar (हिंदी व्याकरण)',
      iconName: 'BookMarked',
      color: '#e11d48',
      description: 'CBSE & NCERT कक्षा 9 संपूर्ण हिंदी व्याकरण: उपसर्ग, प्रत्यय, 6 समास व विग्रह, अर्थ के आधार पर 8 वाक्य भेद, शब्दालंकार व अर्थालंकार एवं 20 अभ्यास प्रश्नोत्तरी।',
      totalChapters: 5,
      coverImageUrl: '/book-covers/class9-hindi-ganga.png',
      chapters: [
        {
          id: 'c9-hg-ch1',
          chapterNumber: 1,
          title: 'शब्द निर्माण — उपसर्ग एवं प्रत्यय (Prefix & Suffix)',
          officialBookCode: 'ihgv1',
          officialPdfUrl: '/pdf/Class 09/Ganga-9th/ihga101.pdf',
          nepHighlights: 'उपसर्ग के 3 प्रकार (संस्कृत तत्सम, हिंदी तद्भव, उर्दू/फ़ारसी) तथा कृत् प्रत्यय (कृदंत) व तद्धित प्रत्यय के नियम व शब्द निर्माण।',
          summaryTextbook: 'शब्दांश जो किसी मूल शब्द के आरंभ में जुड़कर अर्थ में नवीनता लाते हैं, उन्हें उपसर्ग कहते हैं (जैसे अति+अंत=अत्यंत, दुर्+गुण=दुर्गुण)। शब्दांश जो शब्द के अंत में जुड़कर नए शब्द बनाते हैं, उन्हें प्रत्यय कहते हैं। क्रिया/धातु से जुड़ने वाले प्रत्यय कृत् (जैसे लिख्+आवट=लिखावट) तथा संज्ञा/सर्वनाम/विशेषण से जुड़ने वाले तद्धित प्रत्यय (जैसे समाज+इक=सामाजिक) कहलाते हैं।',
          exerciseSolutions: [
            {
              id: 'c9-hg-ch1-q1',
              questionNo: 'अभ्यास प्रश्न 1 (उपसर्ग विच्छेद)',
              questionText: 'निम्नलिखित शब्दों में से उपसर्ग और मूल शब्द अलग कीजिए: अत्यंत, प्रत्येक, दुर्गुण, निर्धन, बेईमान।',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'शब्द: अत्यंत, प्रत्येक, दुर्गुण, निर्धन, बेईमान',
              formula: '[उपसर्ग] + [मूल शब्द] = [नवीन शब्द]',
              stepByStepSolution: [
                '1. अत्यंत = अति + अंत (संस्कृत उपसर्ग अति = अधिक)',
                '2. प्रत्येक = प्रति + एक (संस्कृत उपसर्ग प्रति = हर एक)',
                '3. दुर्गुण = दुर् + गुण (संस्कृत उपसर्ग दुर् = बुरा/कठिन)',
                '4. निर्धन = निर् + धन (संस्कृत उपसर्ग निर् = बिना/रहित)',
                '5. बेईमान = बे + ईमान (उर्दू/फ़ारसी उपसर्ग बे = बिना)'
              ],
              finalAnswer: 'अति+अंत, प्रति+एक, दुर्+गुण, निर्+धन, बे+ईमान।',
              keyTakeaway: 'उपसर्ग सदैव शब्द के आरंभ में जुड़कर उसके मूल अर्थ को परिष्कृत अथवा विलोम करते हैं।',
              nepCompetencyNote: 'MORPHOLOGICAL_ANALYSIS: शब्दांश विश्लेषण एवं संधि नियमों की व्यावहारिक समझ।'
            },
            {
              id: 'c9-hg-ch1-q2',
              questionNo: 'अभ्यास प्रश्न 2 (प्रत्यय भेद पहचान)',
              questionText: 'पढ़ाकू, लिखावट, सुंदरता तथा अपनापन में प्रयुक्त प्रत्यय और उनके भेद (कृत् या तद्धित) स्पष्ट कीजिए।',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'शब्द: पढ़ाकू, लिखावट, सुंदरता, अपनापन',
              formula: 'धातु + कृत् प्रत्यय = कृदंत | संज्ञा/सर्वनाम/विशेषण + तद्धित प्रत्यय = तद्धितांत',
              stepByStepSolution: [
                '1. पढ़ाकू = पढ़् (धातु) + आक (कृत् प्रत्यय - कर्तावाचक)',
                '2. लिखावट = लिख् (धातु) + आवट (कृत् प्रत्यय - भाववाचक)',
                '3. सुंदरता = सुंदर (विशेषण) + ता (तद्धित प्रत्यय - भाववाचक)',
                '4. अपनापन = अपना (सर्वनाम) + पन (तद्धित प्रत्यय - भाववाचक)'
              ],
              finalAnswer: 'पढ़ाकू (कृत्), लिखावट (कृत्), सुंदरता (तद्धित), अपनापन (तद्धित)।',
              keyTakeaway: 'क्रिया पदों के मूल रूप (धातु) से जुड़ने वाले प्रत्यय कृत् होते हैं, अन्य सभी तद्धित प्रत्यय होते हैं।',
              nepCompetencyNote: 'LINGUISTIC_CLASSIFICATION: व्याकरणिक कोटियों के आधार पर प्रत्यय विभेदन।'
            }
          ],
          competencyQuestions: [
            {
              id: 'c9-hg-ch1-cbq1',
              questionNo: 'योग्यता-आधारित प्रश्न (CBQ 1)',
              questionText: 'क्या एक ही शब्द में उपसर्ग और प्रत्यय दोनों का एक साथ प्रयोग संभव है? उदाहरण सहित सिद्ध कीजिए।',
              difficulty: 'Hard',
              type: 'Competency',
              givenData: 'व्याकरणिक सिद्धांत: संयुक्त शब्द निर्माण',
              formula: '[उपसर्ग] + [मूल शब्द] + [प्रत्यय] = [संयुक्त शब्द]',
              stepByStepSolution: [
                'चरण 1: हाँ, हिंदी में अनेक ऐसे शब्द हैं जिनमें उपसर्ग और प्रत्यय दोनों का एक साथ प्रयोग होता है।',
                'चरण 2: उदाहरण 1 - अपमानित = अप (उपसर्ग) + मान (मूल शब्द) + इत (प्रत्यय)।',
                'चरण 3: उदाहरण 2 - स्वतंत्रता = स्व (उपसर्ग) + तंत्र (मूल शब्द) + ता (प्रत्यय)।',
                'चरण 4: उदाहरण 3 - सुलभता = सु (उपसर्ग) + लभ (मूल शब्द) + ता (प्रत्यय)।'
              ],
              finalAnswer: 'हाँ, उपसर्ग व प्रत्यय का संयुक्त प्रयोग संभव है; जैसे अपमानित (अप + मान + इत) तथा स्वतंत्रता (स्व + तंत्र + ता)।',
              keyTakeaway: 'भाषा में शब्द संपदा के विस्तार हेतु उपसर्ग और प्रत्यय का एक साथ समन्वय किया जाता है।',
              nepCompetencyNote: 'SYNTHESIS_AND_APPLICATION: जटिल पद संरचना और भाषा निर्माण की गहन दक्षता।'
            }
          ],
          quiz: [
            {
              id: 'c9-hg-ch1-qz1',
              question: "'अत्यंत' शब्द में कौन सा उपसर्ग प्रयुक्त हुआ है?",
              options: ['अत', 'अति', 'अत्य', 'आ'],
              correctIndex: 1,
              explanation: "अत्यंत शब्द 'अति + अंत' के योग से बना है, जिसमें 'अति' संस्कृत का उपसर्ग है।"
            },
            {
              id: 'c9-hg-ch1-qz2',
              question: "'सामाजिक' शब्द में मूल शब्द और प्रत्यय का सही युग्म कौन सा है?",
              options: ['समाज + इक', 'समाज + क', 'समा + जिक', 'समाजिक + ई'],
              correctIndex: 0,
              explanation: "समाज + इक = सामाजिक। 'इक' प्रत्यय जुड़ने पर प्रथम स्वर 'अ' का 'आ' में वृद्धि-रूपांतरण हो जाता है।"
            },
            {
              id: 'c9-hg-ch1-qz3',
              question: "'लिखावट' शब्द में कौन सा प्रत्यय जुड़ा है?",
              options: ['आवट', 'वट', 'ट', 'आठ'],
              correctIndex: 0,
              explanation: "लिख् (धातु) + आवट = लिखावट। यह एक भाववाचक कृत् प्रत्यय है।"
            },
            {
              id: 'c9-hg-ch1-qz4',
              question: "उर्दू/फ़ारसी का उपसर्ग छाँटिए:",
              options: ['अति', 'दुर्', 'बे', 'प्रति'],
              correctIndex: 2,
              explanation: "'बे' (जैसे बेईमान, बेकसूर, बेपरवाह) उर्दू/फ़ारसी का निषेधवाची उपसर्ग है।"
            }
          ]
        },
        {
          id: 'c9-hg-ch2',
          chapterNumber: 2,
          title: 'समास एवं समास-विग्रह (Compound Words: 6 Types)',
          officialBookCode: 'ihgv2',
          officialPdfUrl: '/pdf/Class 09/Ganga-9th/ihga101.pdf',
          nepHighlights: 'पूर्व पद व उत्तर पद की प्रधानता, अव्ययीभाव, तत्पुरुष, कर्मधारय, द्विगु, द्वंद्व एवं बहुव्रीहि समास के नियम, विग्रह व पहचान की अचूक ट्रिक्स।',
          summaryTextbook: 'दो या दो से अधिक शब्दों के मेल से नए सार्थक शब्द बनाने की प्रक्रिया को समास कहते हैं। समास के 6 भेद हैं: 1. अव्ययीभाव (पूर्व पद प्रधान/अव्यय - यथाशक्ति), 2. तत्पुरुष (उत्तर पद प्रधान, कारक विभक्ति लोप - राजपुत्र), 3. कर्मधारय (विशेषण-विशेष्य या उपमेय-उपमान - नीलकमल), 4. द्विगु (प्रथम पद संख्यावाची - चौराहा), 5. द्वंद्व (दोनों पद प्रधान - माता-पिता), 6. बहुव्रीहि (अन्य पद प्रधान - दशानन)।',
          exerciseSolutions: [
            {
              id: 'c9-hg-ch2-q1',
              questionNo: 'अभ्यास प्रश्न 1 (समास विग्रह व भेद)',
              questionText: 'निम्नलिखित समस्त पदों का विग्रह कर समास का नाम लिखिए: यथाशक्ति, राजपुत्र, पीतांबर, चौराहा, माता-पिता, नीलकंठ।',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'समस्त पद: यथाशक्ति, राजपुत्र, पीतांबर, चौराहा, माता-पिता, नीलकंठ',
              formula: 'विग्रह प्रक्रिया एवं पद प्रधानता के नियम',
              stepByStepSolution: [
                '1. यथाशक्ति = शक्ति के अनुसार (अव्ययीभाव समास - पूर्व पद प्रधान व अव्यय)',
                '2. राजपुत्र = राजा का पुत्र (संबंध तत्पुरुष समास - कारक चिह्न का लोप)',
                '3. पीतांबर = पीला है जो अंबर (कर्मधारय समास - विशेषण-विशेष्य संबंध)',
                '4. चौराहा = चार राहों का समाहार (द्विगु समास - पूर्व पद संख्यावाची)',
                '5. माता-पिता = माता और पिता (द्वंद्व समास - दोनों पद प्रधान)',
                '6. नीलकंठ = नीला है कंठ जिसका अर्थात् शिव (बहुव्रीहि समास - अन्य पद प्रधान)'
              ],
              finalAnswer: 'यथाशक्ति (अव्ययीभाव), राजपुत्र (तत्पुरुष), पीतांबर (कर्मधारय), चौराहा (द्विगु), माता-पिता (द्वंद्व), नीलकंठ (बहुव्रीहि)।',
              keyTakeaway: 'विग्रह करने पर प्रयुक्त योजक व अर्थ से ही समास के भेद का यथार्थ निर्धारण होता है।',
              nepCompetencyNote: 'STRUCTURAL_SEMANTICS: पद प्रधानता और समाहार संबंध का यथार्थ विश्लेषण।'
            },
            {
              id: 'c9-hg-ch2-q2',
              questionNo: 'अभ्यास प्रश्न 2 (तत्पुरुष समास के कारक भेद)',
              questionText: 'रोगमुक्त, देशभक्ति, तथा वनवास में तत्पुरुष समास के कौन-से कारक भेद हैं?',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'शब्द: रोगमुक्त, देशभक्ति, वनवास',
              formula: 'कारक चिह्न संबंध: से (अलग), के लिए, में/पर',
              stepByStepSolution: [
                '1. रोगमुक्त = रोग से मुक्त -> अपादान तत्पुरुष (अलग होने का भाव)',
                '2. देशभक्ति = देश के लिए भक्ति -> संप्रदान तत्पुरुष (के लिए विभक्ति)',
                '3. वनवास = वन में वास -> अधिकरण तत्पुरुष (में/पर विभक्ति)'
              ],
              finalAnswer: 'रोगमुक्त (अपादान तत्पुरुष), देशभक्ति (संप्रदान तत्पुरुष), वनवास (अधिकरण तत्पुरुष)।',
              keyTakeaway: 'तत्पुरुष समास के विग्रह में जो कारक विभक्ति निकलती है, वही उसका तत्पुरुष भेद कहलाती है।',
              nepCompetencyNote: 'CASE_SYSTEM_CORRELATION: कारक विभक्तियों एवं समास विग्रह का अंतर्संबंध।'
            }
          ],
          competencyQuestions: [
            {
              id: 'c9-hg-ch2-cbq1',
              questionNo: 'योग्यता-आधारित प्रश्न (CBQ 1)',
              questionText: "'पीतांबर' शब्द कर्मधारय और बहुव्रीहि दोनों समासों का उदाहरण कैसे हो सकता है? विग्रह द्वारा सिद्ध कीजिए।",
              difficulty: 'Hard',
              type: 'Competency',
              givenData: 'शब्द: पीतांबर',
              formula: 'कर्मधारय (विशेषण-विशेष्य) बनाम बहुव्रीहि (अन्य पद प्रधान)',
              stepByStepSolution: [
                'चरण 1: कर्मधारय के रूप में - जब विग्रह "पीला है जो अंबर (वस्त्र)" किया जाए, तो यहाँ पीला विशेषण और अंबर विशेष्य है। अतः यह कर्मधारय समास है।',
                'चरण 2: बहुव्रीहि के रूप में - जब विग्रह "पीले हैं अंबर जिसके अर्थात् श्रीकृष्ण/विष्णु" किया जाए, तो दोनों पद मिलकर तीसरे विशेष व्यक्ति की ओर संकेत करते हैं। अतः यह बहुव्रीहि समास है।',
                'निष्कर्ष: परीक्षा में समास का भेद सदैव छात्र द्वारा किए गए विग्रह पर निर्भर करता है।'
              ],
              finalAnswer: 'विग्रह "पीला है जो अंबर" करने पर कर्मधारय तथा "पीले हैं अंबर जिसके अर्थात् श्रीकृष्ण" करने पर बहुव्रीहि समास होता है।',
              keyTakeaway: 'विग्रह का स्वरूप ही समास के वास्तविक भेद का निर्धारण करता है।',
              nepCompetencyNote: 'AMBIGUITY_RESOLUTION: संदर्भाधारित विग्रह एवं बहुअर्थी समास समाधान।'
            }
          ],
          quiz: [
            {
              id: 'c9-hg-ch2-qz1',
              question: "'यथाशक्ति' शब्द का सही समास विग्रह एवं भेद क्या है?",
              options: ['जैसी शक्ति (कर्मधारय)', 'शक्ति के अनुसार (अव्ययीभाव)', 'शक्ति और यथा (द्वंद्व)', 'पूरी शक्ति (तत्पुरुष)'],
              correctIndex: 1,
              explanation: "यथाशक्ति का विग्रह 'शक्ति के अनुसार' होता है और पूर्व पद 'यथा' अव्यय होने से यह अव्ययीभाव समास है।"
            },
            {
              id: 'c9-hg-ch2-qz2',
              question: "'दशानन' में कौन सा समास है?",
              options: ['कर्मधारय', 'बहुव्रीहि', 'तत्पुरुष', 'द्विगु'],
              correctIndex: 1,
              explanation: "दस हैं आनन (मुख) जिसके अर्थात् रावण। तीसरे पद की प्रधानता के कारण यह बहुव्रीहि समास है।"
            },
            {
              id: 'c9-hg-ch2-qz3',
              question: "'चौराहा' में पूर्व पद संख्यावाची होने के कारण कौन सा समास है?",
              options: ['द्वंद्व समास', 'द्विगु समास', 'कर्मधारय समास', 'तत्पुरुष समास'],
              correctIndex: 1,
              explanation: "चौराहा = चार राहों का समाहार। पूर्व पद संख्यावाची विशेषण होने से यह द्विगु समास है।"
            },
            {
              id: 'c9-hg-ch2-qz4',
              question: "'रोगमुक्त' का सही समास विग्रह क्या होगा?",
              options: ['रोग और मुक्त', 'रोग से मुक्त', 'रोग का मुक्त', 'रोग में मुक्त'],
              correctIndex: 1,
              explanation: "रोग से मुक्त (अपादान तत्पुरुष समास - अलग होने के अर्थ में 'से' विभक्ति)।"
            }
          ]
        },
        {
          id: 'c9-hg-ch3',
          chapterNumber: 3,
          title: 'अर्थ की दृष्टि से वाक्य भेद (8 Types of Sentences)',
          officialBookCode: 'ihgv3',
          officialPdfUrl: '/pdf/Class 09/Ganga-9th/ihga101.pdf',
          nepHighlights: 'विधानवाचक, निषेधवाचक, आज्ञावाचक, प्रश्नवाचक, विस्मयादिवाचक, इच्छावाचक, संदेहवाचक एवं संकेतवाचक वाक्यों की पहचान तथा परस्पर रूपांतरण।',
          summaryTextbook: 'सार्थक शब्दों का व्यवस्थित समूह जो भाव प्रकट करे, वाक्य कहलाता है। अर्थ के आधार पर वाक्य के 8 भेद होते हैं: 1. विधानवाचक (सीधी सूचना - सूर्य पूर्व में उगता है), 2. निषेधवाचक (नकार - मैं नहीं जाऊँगा), 3. आज्ञावाचक (आदेश/अनुरोध - तुम बाहर जाओ), 4. प्रश्नवाचक (जिज्ञासा - क्या तुमने पढ़ा?), 5. विस्मयादिवाचक (आश्चर्य/हर्ष - वाह! सुंदर दृश्य है), 6. इच्छावाचक (शुभकामना - यात्रा मंगलमय हो), 7. संदेहवाचक (संभावना - शायद आज वर्षा हो), 8. संकेतवाचक (शर्त - यदि परिश्रम करोगे तो सफल होगे)।',
          exerciseSolutions: [
            {
              id: 'c9-hg-ch3-q1',
              questionNo: 'अभ्यास प्रश्न 1 (वाक्य भेद पहचान)',
              questionText: 'निम्नलिखित वाक्यों के अर्थ की दृष्टि से भेद लिखिए: (क) शायद आज धूप निकले। (ख) ईश्वर तुम्हें दीर्घायु करे। (ग) अरे! तुम कब आए?',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'वाक्य: शायद आज धूप निकले | ईश्वर तुम्हें दीर्घायु करे | अरे! तुम कब आए?',
              formula: 'वाक्य लक्षण एवं भाव पहचान',
              stepByStepSolution: [
                '1. "शायद आज धूप निकले।" -> संदेह या संभावना का बोध कराने के कारण यह संदेहवाचक वाक्य है।',
                '2. "ईश्वर तुम्हें दीर्घायु करे।" -> आशीर्वाद व शुभकामना का बोध कराने से यह इच्छावाचक वाक्य है।',
                '3. "अरे! तुम कब आए?" -> आश्चर्य का भाव व्यक्त करने के कारण यह विस्मयादिवाचक वाक्य है।'
              ],
              finalAnswer: '(क) संदेहवाचक, (ख) इच्छावाचक, (ग) विस्मयादिवाचक।',
              keyTakeaway: 'वाक्य में प्रयुक्त सूचक शब्द (शायद, ईश्वर करे, अरे) वाक्य के भेद को तुरंत स्पष्ट कर देते हैं।',
              nepCompetencyNote: 'PRAGMATIC_AWARENESS: व्यावहारिक संदर्भों में सम्प्रेषणीय आशय की पहचान।'
            },
            {
              id: 'c9-hg-ch3-q2',
              questionNo: 'अभ्यास प्रश्न 2 (वाक्य रूपांतरण)',
              questionText: '"रोहन पुस्तक पढ़ता है।" इस विधानवाचक वाक्य को (i) निषेधवाचक, (ii) प्रश्नवाचक, तथा (iii) आज्ञावाचक में बदलिए।',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'मूल वाक्य: रोहन पुस्तक पढ़ता है। (विधानवाचक)',
              formula: 'रूपांतरण नियम: निषेध (नहीं जोड़ना), प्रश्न (क्या जोड़ना), आज्ञा (आदेशात्मक क्रिया)',
              stepByStepSolution: [
                '1. निषेधवाचक: रोहन पुस्तक नहीं पढ़ता है।',
                '2. प्रश्नवाचक: क्या रोहन पुस्तक पढ़ता है?',
                '3. आज्ञावाचक: रोहन, पुस्तक पढ़ो!'
              ],
              finalAnswer: 'निषेधवाचक: रोहन पुस्तक नहीं पढ़ता है। प्रश्नवाचक: क्या रोहन पुस्तक पढ़ता है? आज्ञावाचक: रोहन, पुस्तक पढ़ो!',
              keyTakeaway: 'वाक्य रूपांतरण में मूल अर्थ और काल का संतुलन बनाए रखते हुए अभीष्ट भाव में ढालना चाहिए।',
              nepCompetencyNote: 'SYNTACTIC_TRANSFORMATION: वाक्य संरचना रूपांतरण एवं भाषा प्रवाह।'
            }
          ],
          competencyQuestions: [
            {
              id: 'c9-hg-ch3-cbq1',
              questionNo: 'योग्यता-आधारित प्रश्न (CBQ 1)',
              questionText: 'संदेहवाचक और संकेतवाचक वाक्य में क्या मूलभूत अंतर है? उदाहरण देकर स्पष्ट कीजिए।',
              difficulty: 'Hard',
              type: 'Competency',
              givenData: 'तुलना: संदेहवाचक बनाम संकेतवाचक',
              formula: 'संदेह (संभावना/अनिर्णय) बनाम संकेत (कारण-कार्य शर्त)',
              stepByStepSolution: [
                'चरण 1: संदेहवाचक वाक्य में किसी कार्य के होने की संभावना या अनिश्चय होता है; जैसे - "शायद आज वर्षा हो।" यहाँ परिणाम अनिश्चित है।',
                'चरण 2: संकेतवाचक वाक्य में एक क्रिया का होना दूसरी क्रिया की शर्त पर निर्भर करता है (यदि... तो); जैसे - "यदि वर्षा होती, तो फसल अच्छी होती।" यहाँ कारण और कार्य का निश्चित संबंध है।',
                'निष्कर्ष: संदेहवाचक में अनिश्चय का भाव है, जबकि संकेतवाचक में शर्त और निर्भरता का भाव है।'
              ],
              finalAnswer: 'संदेहवाचक में कार्य की अनिश्चित संभावना (शायद) होती है, जबकि संकेतवाचक में एक क्रिया दूसरी क्रिया पर शर्तबद्ध (यदि-तो) होती है।',
              keyTakeaway: 'संदेह केवल संभावना दर्शाता है, जबकि संकेत दो घटनाओं के बीच कार्य-कारण संबंध स्थापित करता है।',
              nepCompetencyNote: 'CRITICAL_DISCRIMINATION: सूक्ष्म व्याकरणिक भावों का तार्किक विभेदीकरण।'
            }
          ],
          quiz: [
            {
              id: 'c9-hg-ch3-qz1',
              question: '"आपकी यात्रा मंगलमय हो!" यह वाक्य किस भेद के अंतर्गत आता है?',
              options: ['विधानवाचक', 'इच्छावाचक', 'आज्ञावाचक', 'संकेतवाचक'],
              correctIndex: 1,
              explanation: 'शुभकामना, आशीर्वाद या मंगल कामना व्यक्त करने वाले वाक्य इच्छावाचक कहलाते हैं।'
            },
            {
              id: 'c9-hg-ch3-qz2',
              question: '"यदि तुम कठिन परिश्रम करोगे, तो प्रथम आओगे।" यह वाक्य है:',
              options: ['संकेतवाचक', 'संदेहवाचक', 'इच्छावाचक', 'विधानवाचक'],
              correctIndex: 0,
              explanation: 'एक क्रिया (प्रथम आना) दूसरी क्रिया (कठिन परिश्रम) पर निर्भर होने के कारण यह संकेतवाचक वाक्य है।'
            },
            {
              id: 'c9-hg-ch3-qz3',
              question: '"शायद आज शाम को तेज आँधी आए।" वाक्य भेद है:',
              options: ['संदेहवाचक', 'विधानवाचक', 'आज्ञावाचक', 'विस्मयादिवाचक'],
              correctIndex: 0,
              explanation: "'शायद' शब्द कार्य के होने में अनिश्चय/संभावना दर्शाता है, अतः यह संदेहवाचक वाक्य है।"
            },
            {
              id: 'c9-hg-ch3-qz4',
              question: '"वाह! कितना सुंदर और मनमोहक दृश्य है।" यह वाक्य है:',
              options: ['विस्मयादिवाचक', 'प्रश्नवाचक', 'आज्ञावाचक', 'विधानवाचक'],
              correctIndex: 0,
              explanation: "'वाह!' शब्द हर्ष और विस्मय का भाव प्रकट करता है, अतः यह विस्मयादिवाचक वाक्य है।"
            }
          ]
        },
        {
          id: 'c9-hg-ch4',
          chapterNumber: 4,
          title: 'अलंकार — शब्दालंकार एवं अर्थालंकार (Figures of Speech)',
          officialBookCode: 'ihgv4',
          officialPdfUrl: '/pdf/Class 09/Ganga-9th/ihga101.pdf',
          nepHighlights: 'अनुप्रास, यमक, श्लेष (शब्दालंकार) तथा उपमा, रूपक, उत्प्रेक्षा, अतिशयोक्ति, मानवीकरण (अर्थालंकार) के लक्षण, वाचक शब्द व काव्य उदाहरण।',
          summaryTextbook: 'काव्य की शोभा बढ़ाने वाले धर्मों को अलंकार कहते हैं (अलम् + कार = आभूषण)। इसके दो मुख्य भेद हैं: 1. शब्दालंकार - अनुप्रास (वर्ण की आवृत्ति - चारु चंद्र की चंचल किरणें), यमक (शब्द की आवृत्ति व भिन्न अर्थ - कनक कनक ते सौ गुनी), श्लेष (एक शब्द के अनेक अर्थ - रहिमन पानी राखिए)। 2. अर्थालंकार - उपमा (सा, सी, सरिस द्वारा तुलना - पीपर पात सरिस मन डोला), रूपक (अभेद आरोप - चरन कमल बंदौ हरिराई), उत्प्रेक्षा (मानो, जनु संभावना - सिर फट गया मानो अरुण रंग का घड़ा हो), अतिशयोक्ति (बढ़ा-चढ़ाकर वर्णन - हनुमान की पूँछ में लगन न पाई आग), मानवीकरण (प्रकृति पर मानवीय चेष्टा - मेघ आए बड़े बन-ठन के)।',
          exerciseSolutions: [
            {
              id: 'c9-hg-ch4-q1',
              questionNo: 'अभ्यास प्रश्न 1 (अलंकार पहचान)',
              questionText: 'निम्नलिखित पंक्तियों में प्रयुक्त अलंकार का नाम एवं कारण बताइए: (क) चारु चंद्र की चंचल किरणें। (ख) काली घटा का घमंड घटा।',
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'काव्य पंक्तियाँ: (क) चारु चंद्र की चंचल किरणें | (ख) काली घटा का घमंड घटा',
              formula: 'वर्ण आवृत्ति = अनुप्रास | शब्द आवृत्ति व भिन्न अर्थ = यमक',
              stepByStepSolution: [
                '1. "चारु चंद्र की चंचल किरणें" में \'च\' वर्ण की आवृत्ति एक से अधिक बार हुई है। अतः यहाँ अनुप्रास अलंकार है।',
                '2. "काली घटा का घमंड घटा" में \'घटा\' शब्द दो बार आया है। पहली घटा का अर्थ \'काले बादल\' तथा दूसरी घटा का अर्थ \'कम होना\' है। अतः यहाँ यमक अलंकार है।'
              ],
              finalAnswer: '(क) अनुप्रास अलंकार (\'च\' वर्ण की आवृत्ति), (ख) यमक अलंकार (\'घटा\' शब्द के दो भिन्न अर्थ)।',
              keyTakeaway: 'वर्ण की आवृत्ति अनुप्रास बनाती है जबकि पूरे शब्द की आवृत्ति भिन्न अर्थों के साथ यमक बनाती है।',
              nepCompetencyNote: 'POETIC_DEVICES: काव्यात्मक सौंदर्य एवं शब्द चमत्कारों की पहचान।'
            },
            {
              id: 'c9-hg-ch4-q2',
              questionNo: 'अभ्यास प्रश्न 2 (उपमा के 4 अंग)',
              questionText: '"पीपर पात सरिस मन डोला" पंक्ति में उपमा अलंकार के चारों अंग (उपमेय, उपमान, साधारण धर्म, वाचक शब्द) स्पष्ट कीजिए।',
              difficulty: 'Medium',
              type: 'Exercise',
              givenData: 'काव्य पंक्ति: पीपर पात सरिस मन डोला',
              formula: 'उपमा के 4 अंग: 1. उपमेय (जिसकी तुलना हो), 2. उपमान (जिससे तुलना हो), 3. साधारण धर्म (समान गुण), 4. वाचक शब्द (समानता सूचक पद)',
              stepByStepSolution: [
                '1. उपमेय = मन (जिसकी तुलना की जा रही है)',
                '2. उपमान = पीपर पात (पीपल का पत्ता, जिससे तुलना की जा रही है)',
                '3. साधारण धर्म = डोला (चंचलता या हिलना-डोलना, जो दोनों में समान गुण है)',
                '4. वाचक शब्द = सरिस (समानता प्रकट करने वाला शब्द)'
              ],
              finalAnswer: 'उपमेय: मन, उपमान: पीपर पात, साधारण धर्म: डोला, वाचक शब्द: सरिस (पूर्णोपमा अलंकार)।',
              keyTakeaway: 'उपमा अलंकार में वाचक शब्द (सा, सी, सम, सरिस, जैसा) तुलना को प्रत्यक्ष स्थापित करते हैं।',
              nepCompetencyNote: 'ANALYTICAL_LITERARY_DECONSTRUCTION: अलंकारिक संरचना का अवयववार विश्लेषण।'
            }
          ],
          competencyQuestions: [
            {
              id: 'c9-hg-ch4-cbq1',
              questionNo: 'योग्यता-आधारित प्रश्न (CBQ 1)',
              questionText: 'उपमा, रूपक और उत्प्रेक्षा अलंकार में क्या अंतर है? एक ही विषय पर तीनों के उदाहरण देकर समझाइए।',
              difficulty: 'Hard',
              type: 'Competency',
              givenData: 'अलंकार त्रयी: उपमा, रूपक, उत्प्रेक्षा',
              formula: 'उपमा (समानता/तुलना) -> रूपक (अभेद/वही मान लेना) -> उत्प्रेक्षा (कल्पना/संभावना)',
              stepByStepSolution: [
                '1. उपमा (तुलना): "मुख चंद्रमा के समान सुंदर है।" (यहाँ मुख और चंद्रमा में समानता दिखाई गई है, वाचक शब्द \'समान\')।',
                '2. रूपक (अभेद आरोप): "मुख ही चंद्रमा है।" (यहाँ मुख पर चंद्रमा का सीधा अभेद आरोप कर दिया गया, कोई तुलनात्मक शब्द नहीं)।',
                '3. उत्प्रेक्षा (संभावना): "मानो मुख चंद्रमा हो।" (यहाँ मुख में चंद्रमा होने की कल्पना या संभावना की गई है, वाचक शब्द \'मानो\')।'
              ],
              finalAnswer: 'उपमा में दो वस्तुओं की तुलना (सा/समान), रूपक में दोनों को एक मान लिया जाना (अभेद), तथा उत्प्रेक्षा में संभावना की कल्पना (मानो/जनु) की जाती है।',
              keyTakeaway: 'उपमा तुलना है, रूपक तादात्म्य (एक रूप) है, और उत्प्रेक्षा संभावना है।',
              nepCompetencyNote: 'AESTHETIC_EVALUATION: साहित्यिक अलंकारों का तुलनात्मक एवं दार्शनिक विश्लेषण।'
            }
          ],
          quiz: [
            {
              id: 'c9-hg-ch4-qz1',
              question: '"काली घटा का घमंड घटा" में कौन सा अलंकार है?',
              options: ['अनुप्रास अलंकार', 'यमक अलंकार', 'श्लेष अलंकार', 'उपमा अलंकार'],
              correctIndex: 1,
              explanation: "'घटा' शब्द दो बार आया है और दोनों बार अर्थ अलग है (पहला: काले बादल, दूसरा: कम होना)। अतः यमक अलंकार है।"
            },
            {
              id: 'c9-hg-ch4-qz2',
              question: '"मैया मैं तो चंद्र-खिलौना लैहों" में कौन सा अलंकार है?',
              options: ['उपमा अलंकार', 'रूपक अलंकार', 'उत्प्रेक्षा अलंकार', 'अतिशयोक्ति अलंकार'],
              correctIndex: 1,
              explanation: 'चंद्रमा पर खिलौने का अभेद आरोप कर दिया गया है (चंद्रमा रूपी खिलौना), अतः रूपक अलंकार है।'
            },
            {
              id: 'c9-hg-ch4-qz3',
              question: '"सिर फट गया उसका वहीं, मानो अरुण रंग का घड़ा हो" में प्रयुक्त अलंकार है:',
              options: ['उपमा', 'रूपक', 'उत्प्रेक्षा', 'मानवीकरण'],
              correctIndex: 2,
              explanation: "'मानो' वाचक शब्द के माध्यम से उपमेय में उपमान की संभावना व्यक्त की गई है, अतः उत्प्रेक्षा अलंकार है।"
            },
            {
              id: 'c9-hg-ch4-qz4',
              question: '"मेघ आए बड़े बन-ठन के सँवर के" में कौन सा अलंकार है?',
              options: ['मानवीकरण अलंकार', 'अतिशयोक्ति अलंकार', 'यमक अलंकार', 'श्लेष अलंकार'],
              correctIndex: 0,
              explanation: 'निर्जीव बादलों पर मनुष्य की तरह सजने-संवरने (मानवीय क्रिया) का आरोप होने से मानवीकरण अलंकार है।'
            }
          ]
        },
        {
          id: 'c9-hg-ch5',
          chapterNumber: 5,
          title: 'संपूर्ण व्याकरण महा-अभ्यास एवं 20 MCQs टेस्ट (Master Practice Quiz & Studio)',
          officialBookCode: 'ihgv5',
          officialPdfUrl: '/pdf/Class 09/Ganga-9th/ihga101.pdf',
          nepHighlights: 'कक्षा 9 बोर्ड परीक्षा पैटर्न पर आधारित 20 व्यापक बहुविकल्पीय प्रश्न (MCQs), रिक्त स्थान पूर्ति एवं उच्च-स्तरीय योग्यता आधारित प्रश्न (CBQs)।',
          summaryTextbook: 'कक्षा 9 हिंदी व्याकरण के चारों मुख्य स्तंभों (उपसर्ग-प्रत्यय, समास, वाक्य भेद, अलंकार) का संपूर्ण संकलन। परीक्षा में शत-प्रतिशत अंक प्राप्त करने हेतु 20 बहुविकल्पीय प्रश्न, अभ्यास कार्य तथा योग्यता-आधारित प्रश्नोत्तर।',
          exerciseSolutions: [
            {
              id: 'c9-hg-ch5-q1',
              questionNo: 'महा-अभ्यास प्रश्न 1 (त्रिफला व रोगमुक्त)',
              questionText: "'त्रिफला' तथा 'रोगमुक्त' का समास विग्रह कीजिए और भेद बताइए।",
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'शब्द: त्रिफला, रोगमुक्त',
              formula: 'समास विग्रह नियम',
              stepByStepSolution: [
                '1. त्रिफला = तीन फलों का समाहार (द्विगु समास)',
                '2. रोगमुक्त = रोग से मुक्त (अपादान तत्पुरुष समास)'
              ],
              finalAnswer: 'त्रिफला (द्विगु समास), रोगमुक्त (अपादान तत्पुरुष समास)।',
              keyTakeaway: 'विग्रह का यथार्थ रूप ही समास के सही भेद का निर्णय करता है।',
              nepCompetencyNote: 'COMPREHENSIVE_REVIEW: संपूर्ण व्याकरण अवधारणाओं का समन्वित अभ्यास।'
            },
            {
              id: 'c9-hg-ch5-q2',
              questionNo: 'महा-अभ्यास प्रश्न 2 (अनादर व लिखावट)',
              questionText: "'अनादर' में उपसर्ग तथा 'लिखावट' में प्रत्यय अलग कीजिए।",
              difficulty: 'Easy',
              type: 'Exercise',
              givenData: 'शब्द: अनादर, लिखावट',
              formula: 'उपसर्ग + मूल शब्द | मूल शब्द + प्रत्यय',
              stepByStepSolution: [
                '1. अनादर = अन् + आदर (उपसर्ग: अन्)',
                '2. लिखावट = लिख् + आवट (प्रत्यय: आवट)'
              ],
              finalAnswer: 'अनादर में उपसर्ग \'अन्\' तथा लिखावट में प्रत्यय \'आवट\' है।',
              keyTakeaway: 'स्वर से आरंभ होने वाले शब्दों में \'अन्\' उपसर्ग जुड़ता है (अन् + आदर = अनादर)।',
              nepCompetencyNote: 'PHONOLOGICAL_ACCURACY: स्वर संधि एवं उपसर्ग संयोजन की सूक्ष्मता।'
            }
          ],
          competencyQuestions: [
            {
              id: 'c9-hg-ch5-cbq1',
              questionNo: 'व्याकरण महा-दक्षता प्रश्न (CBQ 1)',
              questionText: 'कक्षा 9 व्याकरण के चारों स्तंभों का किसी भी गद्य या काव्य पाठ को समझने में क्या योगदान है?',
              difficulty: 'Hard',
              type: 'Competency',
              givenData: 'भाषा कौशल: पठन, बोध एवं अभिव्यक्ति',
              formula: 'व्याकरण = भाषा का नियमबद्ध विज्ञान',
              stepByStepSolution: [
                '1. उपसर्ग-प्रत्यय नए शब्दों के अर्थ ग्रहण और शब्द भंडार को समृद्ध करते हैं।',
                '2. समास भाषा में संक्षिप्तीकरण और प्रभावशीलता लाता है।',
                '3. वाक्य भेद वक्ता के वास्तविक मंतव्य और मनोभाव (आज्ञा, संदेह, संकेत आदि) को स्पष्ट करते हैं।',
                '4. अलंकार काव्य में सौंदर्य, आकर्षण और गहन भाव-संप्रेषण उत्पन्न करते हैं।'
              ],
              finalAnswer: 'व्याकरण के चारों स्तंभ विद्यार्थियों को शुद्ध वाचन, सटीक अर्थ-ग्रहण और प्रभावशाली काव्यात्मक अभिव्यक्ति में पूर्ण सक्षम बनाते हैं।',
              keyTakeaway: 'व्याकरण केवल परीक्षा का विषय नहीं, अपितु भाषा की आत्मा और संप्रेषण की आधारशिला है।',
              nepCompetencyNote: 'HOLISTIC_LANGUAGE_PROFICIENCY: समग्र भाषाई दक्षता एवं आलोचनात्मक अभिव्यक्ति।'
            }
          ],
          quiz: [
            {
              id: 'c9-hg-ch5-qz1',
              question: "'अत्यंत' शब्द में कौन सा उपसर्ग जुड़ा है?",
              options: ['अत', 'अति', 'अत्य', 'आ'],
              correctIndex: 1,
              explanation: "अति + अंत = अत्यंत (यण् संधि के नियम से इ + अ = य्)।"
            },
            {
              id: 'c9-hg-ch5-qz2',
              question: "'दशानन' में कौन सा समास है?",
              options: ['कर्मधारय', 'बहुव्रीहि', 'तत्पुरुष', 'द्विगु'],
              correctIndex: 1,
              explanation: "दस हैं आनन (मुख) जिसके अर्थात् रावण (बहुव्रीहि समास)।"
            },
            {
              id: 'c9-hg-ch5-qz3',
              question: "'तरनि तनूजा तट तमाल तरुवर बहु छाए' में कौन सा अलंकार है?",
              options: ['यमक', 'अनुप्रास', 'श्लेष', 'रूपक'],
              correctIndex: 1,
              explanation: "'त' वर्ण की बार-बार आवृत्ति होने से अनुप्रास अलंकार है।"
            },
            {
              id: 'c9-hg-ch5-qz4',
              question: "'भगवान आपका कल्याण करे।' यह वाक्य किस भेद का उदाहरण है?",
              options: ['आज्ञावाचक', 'इच्छावाचक', 'विस्मयादिवाचक', 'विधानवाचक'],
              correctIndex: 1,
              explanation: "शुभकामना और आशीर्वाद व्यक्त करने के कारण यह इच्छावाचक वाक्य है।"
            }
          ]
        }
      ]
    }
  ]
};

