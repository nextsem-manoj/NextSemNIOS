const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/data/class9Data.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Target chunk for Chapter 4 and Chapter 5
const targetChunk = `        {
          id: 'c9-m-ch4',
          chapterNumber: 4,
          title: 'Linear Equations in Two Variables',
          officialBookCode: 'iemh1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iemh104.pdf',
          nepHighlights: 'Standard form ax + by + c = 0, Infinitely many solutions & Straight line graphs.',
          summaryTextbook: 'Examines linear equations with two variables, finding solutions (x, y) satisfying ax + by + c = 0, and graphical representation as straight lines parallel to axes or intersecting.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },
        {
          id: 'c9-m-ch5',
          chapterNumber: 5,
          title: 'Introduction to Euclid\\'s Geometry',
          officialBookCode: 'iemh1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iemh105.pdf',
          nepHighlights: 'Euclid’s Axioms, 5 Postulates & History of Greek / Vedic Geometry.',
          summaryTextbook: 'Covers undefined terms (point, line, plane), Euclid’s 7 axioms, 5 postulates (especially 5th parallel postulate), and equivalent versions.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: []
        },`;

const replacementChunk = `        {
          id: 'c9-m-ch4',
          chapterNumber: 4,
          title: 'Exploring Algebraic Identities',
          officialBookCode: 'iemh1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iemh104.pdf',
          nepHighlights: 'Algebra tiles, Geometric dissections of identities (a+b)³, a²-b², consecutive squares patterns & rational expressions.',
          summaryTextbook: 'Examines algebraic identities through geometric models, algebra tiles, factorisation of quadratic and cubic polynomials, numerical invariants of consecutive squares, and simplification of rational expressions with domain restrictions.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c9-m-ch4-q1',
              question: 'In the algebra tiles model representing (2x + 3)(3x + 1), what is the total count of tiles of each type used?',
              options: [
                '6 tiles of x², 11 tiles of x, 3 unit tiles',
                '5 tiles of x², 9 tiles of x, 4 unit tiles',
                '6 tiles of x², 5 tiles of x, 3 unit tiles',
                '6 tiles of x², 12 tiles of x, 4 unit tiles'
              ],
              correctIndex: 0,
              explanation: '(2x + 3)(3x + 1) = 6x² + 11x + 3. The rectangle decomposes into 6 square tiles of x², 11 rectangular tiles of x, and 3 unit square tiles of 1.'
            },
            {
              id: 'c9-m-ch4-q2',
              question: 'For any three consecutive squares, let P(n) = (n-1)² + (n+1)² - 2n². What is the value of P(999)?',
              options: ['2', '0', '4', '1998'],
              correctIndex: 0,
              explanation: 'Algebraic expansion: (n² - 2n + 1) + (n² + 2n + 1) - 2n² = 2n² + 2 - 2n² = 2. It is an invariant identity equal to 2 for all n.'
            },
            {
              id: 'c9-m-ch4-q3',
              question: 'If a real number plus its reciprocal equals 10/3 (with x > 1), what is the exact value of x³ + 1/x³?',
              options: ['730 / 27', '1000 / 27', '820 / 27', '640 / 27'],
              correctIndex: 0,
              explanation: 'Using identity (x + 1/x)³ = x³ + 1/x³ + 3(x + 1/x): (10/3)³ - 3(10/3) = 1000/27 - 10 = 730/27.'
            },
            {
              id: 'c9-m-ch4-q4',
              question: 'If a + b + c = 5 and ab + bc + ca = 10, calculate the value of a³ + b³ + c³ - 3abc.',
              options: ['-25', '25', '-50', '0'],
              correctIndex: 0,
              explanation: 'a² + b² + c² = 5² - 2(10) = 5. Then a³ + b³ + c³ - 3abc = (a + b + c)[(a² + b² + c²) - (ab + bc + ca)] = 5(5 - 10) = -25.'
            },
            {
              id: 'c9-m-ch4-q5',
              question: 'Why is n³ - n always divisible by 6 for every positive integer n ≥ 2?',
              options: [
                'Because n³ - n = (n-1)n(n+1) is the product of 3 consecutive integers, which always contains a multiple of 2 and a multiple of 3.',
                'Because n³ - n is always an even number ending in 6.',
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
          title: 'I’m Up and Down, and Round and Round (Circles)',
          officialBookCode: 'iemh1',
          officialPdfUrl: 'https://ncert.nic.in/textbook/pdf/iemh105.pdf',
          nepHighlights: 'Circle symmetries, Circumcentre of acute/obtuse triangles, Baudhāyana-Pythagoras chord distances & Cyclic quadrilaterals.',
          summaryTextbook: 'Covers continuous symmetries of a circle, circumcentre location for acute, right, and obtuse triangles, Baudhāyana-Pythagoras chord distance theorems, angle subtended by an arc at the centre vs circumference, and concyclicity of cyclic quadrilaterals.',
          exerciseSolutions: [],
          competencyQuestions: [],
          quiz: [
            {
              id: 'c9-m-ch5-q1',
              question: 'For an obtuse-angled triangle △ABC with ∠ABC = 120°, where does the circumcentre O lie, and what is central angle ∠AOC subtended by minor arc AC?',
              options: [
                'Outside the triangle; ∠AOC = 120°',
                'Inside the triangle; ∠AOC = 240°',
                'At the midpoint of the longest side; ∠AOC = 90°',
                'Outside the triangle; ∠AOC = 60°'
              ],
              correctIndex: 0,
              explanation: 'The circumcentre of an obtuse triangle lies strictly outside the triangle. Central reflex angle subtended by arc ABC is 2 × 120° = 240°, so minor ∠AOC = 360° - 240° = 120°.'
            },
            {
              id: 'c9-m-ch5-q2',
              question: 'Two parallel chords of lengths 24 cm and 10 cm are on the SAME side of the centre in a circle. If the distance between them is 7 cm, what is the radius?',
              options: ['13 cm', '15 cm', '12 cm', '17 cm'],
              correctIndex: 0,
              explanation: 'In right triangles: r² = d² + 12² and r² = (d+7)² + 5². Equating yields d² + 144 = d² + 14d + 74 ⇒ 14d = 70 ⇒ d = 5 cm. Radius r = √(5² + 12²) = 13 cm.'
            },
            {
              id: 'c9-m-ch5-q3',
              question: 'Point P is an interior point of a circle with centre O. Which chord passing through P has the strictly minimum length?',
              options: [
                'The chord perpendicular to OP',
                'The chord passing through the centre O (the diameter)',
                'The chord inclined at 45° to OP',
                'All chords through P have the exact same length'
              ],
              correctIndex: 0,
              explanation: 'Chord length is 2√(r² - d²), which is minimized when distance d from the centre is maximized. The maximum distance of any chord passing through P is OP, which occurs when the chord is perpendicular to OP.'
            },
            {
              id: 'c9-m-ch5-q4',
              question: 'In cyclic quadrilateral ABCD, side CD is extended to E. If exterior angle ∠ADE = 82° and ∠BAC = 38°, what is the measure of ∠BCA?',
              options: ['60°', '82°', '44°', '52°'],
              correctIndex: 0,
              explanation: 'Exterior angle of a cyclic quad equals interior opposite angle: ∠ABC = ∠ADE = 82°. In △ABC, ∠BCA = 180° - (82° + 38°) = 60°.'
            },
            {
              id: 'c9-m-ch5-q5',
              question: 'Why must every parallelogram inscribed in a circle be a rectangle?',
              options: [
                'Because opposite angles in a parallelogram are equal (∠A = ∠C), and in a cyclic quad they sum to 180°, forcing 2∠A = 180° ⇒ ∠A = 90°.',
                'Because a parallelogram always has equal diagonals.',
                'Because the sides of a parallelogram are tangent to the circle.',
                'Because parallel lines cannot intersect a circle.'
              ],
              correctIndex: 0,
              explanation: 'In a parallelogram ∠A = ∠C. In a cyclic quadrilateral ∠A + ∠C = 180°. Hence 2∠A = 180° ⇒ ∠A = 90°. A parallelogram with a right angle is a rectangle.'
            }
          ]
        },`;

if (content.includes(targetChunk)) {
  content = content.replace(targetChunk, replacementChunk);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Successfully updated class9Data.ts!');
} else {
  console.error('Target chunk not found in class9Data.ts');
}
