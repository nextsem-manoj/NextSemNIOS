import React, { useState, useEffect } from 'react';
import { ArrowLeft, Compass, Play, Pause, RotateCcw, ChevronLeft, ChevronRight, CheckCircle2, Award, BookOpen, Layers } from 'lucide-react';
import type { Chapter } from '../../data/ncertData';

interface EuclidGeometryInteractiveViewProps {
  chapter?: Chapter;
  onBack: () => void;
}

export const EuclidGeometryInteractiveView: React.FC<EuclidGeometryInteractiveViewProps> = ({
  onBack
}) => {
  const [activeTab, setActiveTab] = useState<'postulates' | 'theorems' | 'axioms' | 'construction' | 'quiz'>('theorems');
  const [selectedTheorem, setSelectedTheorem] = useState<number>(1);
  const [theoremAnimStep, setTheoremAnimStep] = useState<number>(0);
  const [isTheoremAutoPlaying, setIsTheoremAutoPlaying] = useState<boolean>(false);

  // Postulate 1 state: 2 draggable / clickable points
  const [p1Start] = useState<{ x: number; y: number }>({ x: 80, y: 140 });
  const [p1End, setP1End] = useState<{ x: number; y: number }>({ x: 320, y: 70 });
  const [p1LineDrawn, setP1LineDrawn] = useState(true);

  // Postulate 2 state: Terminated line extension
  const [p2Length, setP2Length] = useState(120);

  // Postulate 3 state: Center and Radius
  const [p3Radius, setP3Radius] = useState(65);
  const [p3Center] = useState({ x: 200, y: 110 });

  // Postulate 4 state: Right angle rotation
  const [p4Angle, setP4Angle] = useState(0);

  // Postulate 5 state: Angle 1 and Angle 2
  const [p5Angle1, setP5Angle1] = useState(70);
  const [p5Angle2, setP5Angle2] = useState(85);

  // Proposition 1.1 Equilateral Triangle Construction Step (0 to 3)
  const [constructionStep, setConstructionStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  // Quiz state
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<Record<number, number>>({});

  // Active postulate tab (1 to 5)
  const [activePostulate, setActivePostulate] = useState<1 | 2 | 3 | 4 | 5>(1);

  // Auto-play Construction
  useEffect(() => {
    let interval: any;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setConstructionStep((prev) => {
          if (prev >= 3) {
            setIsAutoPlaying(false);
            return 3;
          }
          return prev + 1;
        });
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Reset theorem animation step when theorem changes
  useEffect(() => {
    setTheoremAnimStep(0);
    setIsTheoremAutoPlaying(false);
  }, [selectedTheorem]);

  // Auto-play Theorem Animation
  useEffect(() => {
    let interval: any;
    if (isTheoremAutoPlaying) {
      interval = setInterval(() => {
        setTheoremAnimStep((prev) => {
          if (prev >= 4) {
            setIsTheoremAutoPlaying(false);
            return 4;
          }
          return prev + 1;
        });
      }, 2200);
    }
    return () => clearInterval(interval);
  }, [isTheoremAutoPlaying]);

  // Handle Canvas click for Postulate 1
  const handleP1CanvasClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    setP1End({ x, y });
    setP1LineDrawn(false);
    setTimeout(() => setP1LineDrawn(true), 50);
  };

  const p5Sum = p5Angle1 + p5Angle2;
  const p5WillIntersectLeft = p5Sum < 180;
  const p5IsParallel = p5Sum === 180;

  // 12 Foundational Geometry & Circle Theorems (In Order from NCERT Chapter)
  const theoremsData = [
    {
      id: 1,
      name: 'Theorem 1: Circumcircle of 3 Non-Collinear Points',
      shortTitle: 'Circumcircle (3 Points)',
      statement: 'There is one and only one (unique) circle passing through three non-collinear points.',
      given: 'Three non-collinear points A, B, and C on a plane.',
      toProve: 'There exists a unique circle passing through all three points A, B, and C.',
      method: 'Perpendicular Bisectors & Unique Circumcentre O',
      proofSteps: [
        {
          step: 'Step 1: Given Non-Collinear Points',
          statement: 'Identify three distinct non-collinear points A, B, and C on the plane. Join segments AB and AC.',
          reason: 'Postulate 1 (Line between two points)'
        },
        {
          step: 'Step 2: Construct Perpendicular Bisector of AB',
          statement: 'Draw the perpendicular bisector of segment AB. Any point lying on this line is equidistant from A and B (OA = OB).',
          reason: 'Geometric locus property of perpendicular bisector'
        },
        {
          step: 'Step 3: Construct Perpendicular Bisector of AC',
          statement: 'Draw the perpendicular bisector of segment AC. Any point on this line is equidistant from A and C (OA = OC).',
          reason: 'Geometric locus property of perpendicular bisector'
        },
        {
          step: 'Step 4: Unique Intersection Point O',
          statement: 'Since A, B, C are non-collinear, lines AB and AC are not parallel. Their perpendicular bisectors intersect at exactly one unique point O. At O: OA = OB = OC = radius r.',
          reason: 'Theorem 5.1 (Uniqueness of line intersection) & Transitive Axiom 1'
        },
        {
          step: 'Step 5: Draw Circumcircle',
          statement: 'With centre O and radius r = OA, draw the circle. It passes precisely through A, B, and C. Since O and r are unique, the circumcircle is unique! ∎',
          reason: 'Postulate 3 (Circle with centre O and radius r) 🏆'
        }
      ]
    },
    {
      id: 2,
      name: 'Theorem 2: Equal Chords Subtend Equal Angles at Centre',
      shortTitle: 'Equal Chords ➔ Equal Angles',
      statement: 'Equal chords of a circle subtend equal angles at the centre of the circle.',
      given: 'A circle with centre O, where chord AB = chord CD.',
      toProve: 'Angle ∠AOB = Angle ∠COD.',
      method: 'SSS Triangle Congruence Rule',
      proofSteps: [
        {
          step: 'Step 1: Circle & Equal Chords',
          statement: 'Consider a circle with centre O having two equal chords AB = CD.',
          reason: 'Given'
        },
        {
          step: 'Step 2: Connect Radii to Vertices',
          statement: 'Join OA, OB, OC, and OD to form two triangles ΔAOB and ΔCOD.',
          reason: 'Postulate 1'
        },
        {
          step: 'Step 3: Equal Radii & Given Chords',
          statement: 'In ΔAOB and ΔCOD: OA = OC (radii), OB = OD (radii), and AB = CD (given).',
          reason: 'Definition of circle radii & Given'
        },
        {
          step: 'Step 4: SSS Congruence Proof',
          statement: 'By SSS Congruence Criterion, ΔAOB ≅ ΔCOD.',
          reason: 'SSS Congruence Rule'
        },
        {
          step: 'Step 5: Conclusion via CPCTC',
          statement: 'Therefore, corresponding angles ∠AOB = ∠COD. Equal chords subtend equal angles at the centre! ∎',
          reason: 'CPCTC (Corresponding Parts of Congruent Triangles) 🏆'
        }
      ]
    },
    {
      id: 3,
      name: 'Theorem 3: Converse of Equal Angles at Centre',
      shortTitle: 'Equal Angles ➔ Equal Chords',
      statement: 'If the angles subtended by two chords of a circle at the centre are equal, then the chords are equal in length.',
      given: 'A circle with centre O where ∠AOB = ∠COD.',
      toProve: 'Chord AB = Chord CD.',
      method: 'SAS Triangle Congruence Rule',
      proofSteps: [
        {
          step: 'Step 1: Given Equal Angles at Centre',
          statement: 'In circle O, chords AB and CD subtend equal central angles: ∠AOB = ∠COD.',
          reason: 'Given'
        },
        {
          step: 'Step 2: Inspect Triangles ΔAOB & ΔCOD',
          statement: 'Observe triangles ΔAOB and ΔCOD with radiating radii OA, OB, OC, and OD.',
          reason: 'Construction'
        },
        {
          step: 'Step 3: Apply Radii & Angle Equality',
          statement: 'OA = OC (radii), included angle ∠AOB = ∠COD (given), and OB = OD (radii).',
          reason: 'Radii equality & Given'
        },
        {
          step: 'Step 4: SAS Congruence Proof',
          statement: 'By SAS Congruence Rule, ΔAOB ≅ ΔCOD.',
          reason: 'SAS Congruence Rule'
        },
        {
          step: 'Step 5: Conclusion via CPCTC',
          statement: 'Therefore, base chord AB = base chord CD. Chords are equal in length! ∎',
          reason: 'CPCTC 🏆'
        }
      ]
    },
    {
      id: 4,
      name: 'Theorem 4: Perpendicular from Centre Bisects Chord',
      shortTitle: 'Perpendicular from Centre',
      statement: 'The perpendicular drawn from the centre of a circle to a chord bisects the chord.',
      given: 'A circle with centre O and a chord AB, with OM ⊥ AB.',
      toProve: 'AM = MB (Point M is the midpoint of chord AB).',
      method: 'RHS Right-Angle Congruence Rule',
      proofSteps: [
        {
          step: 'Step 1: Circle with Perpendicular OM',
          statement: 'Drop perpendicular segment OM from centre O onto chord AB such that OM ⊥ AB (∠OMA = ∠OMB = 90°).',
          reason: 'Given'
        },
        {
          step: 'Step 2: Draw Radii OA and OB',
          statement: 'Join OA and OB to create two right-angled triangles ΔOMA and ΔOMB.',
          reason: 'Postulate 1'
        },
        {
          step: 'Step 3: Evaluate Right Triangles',
          statement: 'In right ΔOMA and right ΔOMB: ∠OMA = ∠OMB = 90°, Hypotenuse OA = OB (radii), and leg OM = OM (common).',
          reason: 'RHS conditions satisfied'
        },
        {
          step: 'Step 4: RHS Congruence Proof',
          statement: 'By RHS Congruence Criterion, ΔOMA ≅ ΔOMB.',
          reason: 'RHS Rule'
        },
        {
          step: 'Step 5: Conclusion via CPCTC',
          statement: 'Therefore, AM = MB. The perpendicular OM exactly bisects the chord AB! ∎',
          reason: 'CPCTC 🏆'
        }
      ]
    },
    {
      id: 5,
      name: 'Theorem 5: Line from Centre to Midpoint is Perpendicular',
      shortTitle: 'Midpoint to Centre ➔ 90°',
      statement: 'The line drawn through the centre of a circle to bisect a chord is perpendicular to the chord.',
      given: 'A circle with centre O and chord AB, where M is the midpoint of AB (AM = MB).',
      toProve: 'OM ⊥ AB (∠OMA = ∠OMB = 90°).',
      method: 'SSS Congruence & Linear Pair Axiom',
      proofSteps: [
        {
          step: 'Step 1: Given Midpoint M on Chord',
          statement: 'Let M be the midpoint of chord AB in circle O such that AM = MB. Join line segment OM.',
          reason: 'Given'
        },
        {
          step: 'Step 2: Form Triangles ΔOMA and ΔOMB',
          statement: 'Join OA and OB to form ΔOMA and ΔOMB.',
          reason: 'Postulate 1'
        },
        {
          step: 'Step 3: SSS Congruence Proof',
          statement: 'In ΔOMA and ΔOMB: OA = OB (radii), AM = MB (given), and OM = OM (common). By SSS, ΔOMA ≅ ΔOMB.',
          reason: 'SSS Rule'
        },
        {
          step: 'Step 4: Angle Equality via CPCTC',
          statement: 'Therefore, ∠OMA = ∠OMB.',
          reason: 'CPCTC'
        },
        {
          step: 'Step 5: Linear Pair Calculation',
          statement: 'Since AB is a straight line: ∠OMA + ∠OMB = 180° ➔ 2∠OMA = 180° ➔ ∠OMA = 90°. Hence OM ⊥ AB! ∎',
          reason: 'Linear Pair Axiom 🏆'
        }
      ]
    },
    {
      id: 6,
      name: 'Theorem 6: Equal Chords are Equidistant from Centre',
      shortTitle: 'Equal Chords ➔ Equal Distances',
      statement: 'Equal chords of a circle (or of congruent circles) are equidistant from the centre.',
      given: 'Circle with centre O, chord AB = chord CD, with distances OL ⊥ AB and OM ⊥ CD.',
      toProve: 'Distance OL = Distance OM.',
      method: 'Half-Chord Bisection & RHS Congruence',
      proofSteps: [
        {
          step: 'Step 1: Equal Chords & Perpendicular Distances',
          statement: 'Given equal chords AB = CD. Draw perpendiculars OL ⊥ AB and OM ⊥ CD from centre O.',
          reason: 'Given'
        },
        {
          step: 'Step 2: Half-Chord Relation',
          statement: 'By Theorem 4, OL bisects AB and OM bisects CD: AL = ½AB and CM = ½CD.',
          reason: 'Theorem 4'
        },
        {
          step: 'Step 3: Half-Segments are Equal',
          statement: 'Since AB = CD, dividing by 2 gives AL = CM (Axiom 7: halves of equals are equal).',
          reason: 'Axiom 7'
        },
        {
          step: 'Step 4: RHS Congruence on ΔOLA & ΔOMC',
          statement: 'In right ΔOLA and right ΔOMC: ∠OLA = ∠OMC = 90°, Hypotenuse OA = OC (radii), and AL = CM. Hence ΔOLA ≅ ΔOMC.',
          reason: 'RHS Congruence'
        },
        {
          step: 'Step 5: Distance Equality Proven',
          statement: 'Therefore, OL = OM. Equal chords are equidistant from the centre! ∎',
          reason: 'CPCTC 🏆'
        }
      ]
    },
    {
      id: 7,
      name: 'Theorem 7: Chords Equidistant from Centre are Equal',
      shortTitle: 'Equal Distances ➔ Equal Chords',
      statement: 'Chords of a circle that are equidistant from the centre are equal in length.',
      given: 'In circle O, perpendicular distances OL = OM, where OL ⊥ AB and OM ⊥ CD.',
      toProve: 'Chord AB = Chord CD.',
      method: 'RHS Congruence & Double-Length Axiom',
      proofSteps: [
        {
          step: 'Step 1: Given Equal Distances OL = OM',
          statement: 'Chords AB and CD are at equal perpendicular distances from centre O: OL = OM.',
          reason: 'Given'
        },
        {
          step: 'Step 2: Right Triangles ΔOLA & ΔOMC',
          statement: 'Join OA and OC. In right ΔOLA and right ΔOMC: ∠OLA = ∠OMC = 90°, OA = OC (radii), and OL = OM (given).',
          reason: 'RHS conditions'
        },
        {
          step: 'Step 3: RHS Congruence Proof',
          statement: 'By RHS Congruence, ΔOLA ≅ ΔOMC.',
          reason: 'RHS Rule'
        },
        {
          step: 'Step 4: Half-Segment Equality via CPCTC',
          statement: 'Therefore, AL = CM.',
          reason: 'CPCTC'
        },
        {
          step: 'Step 5: Double Both Sides (Axiom 6)',
          statement: 'Since OL ⊥ AB and OM ⊥ CD bisect chords: AB = 2AL and CD = 2CM. Since AL = CM, 2AL = 2CM ➔ AB = CD! ∎',
          reason: 'Axiom 6 (Doubles of equals are equal) 🏆'
        }
      ]
    },
    {
      id: 8,
      name: 'Theorem 8: Inscribed Angle Subtended by Arc is Half of Central Angle',
      shortTitle: 'Central Angle = 2 × Inscribed Angle',
      statement: 'The angle subtended by an arc at the centre is double the angle subtended by it at any point on the remaining part of the circle (∠AOB = 2∠APB).',
      given: 'An arc AB subtending central angle ∠AOB and angle ∠APB at point P on the circumference.',
      toProve: '∠AOB = 2∠APB.',
      method: 'Isosceles Radii & Exterior Angle Theorem',
      proofSteps: [
        {
          step: 'Step 1: Arc & Inscribed Angle Setup',
          statement: 'Arc AB subtends central angle ∠AOB at centre O and inscribed angle ∠APB at point P on the circle.',
          reason: 'Given'
        },
        {
          step: 'Step 2: Construction - Draw Diameter Ray POQ',
          statement: 'Join PO and extend ray through O to point Q.',
          reason: 'Postulate 1 & 2'
        },
        {
          step: 'Step 3: Left Triangle ΔOPA Exterior Angle',
          statement: 'In ΔOPA, OA = OP (radii) ➔ ∠OPA = ∠OAP. Exterior angle ∠AOQ = ∠OPA + ∠OAP = 2∠OPA (Equation 1).',
          reason: 'Exterior Angle Theorem'
        },
        {
          step: 'Step 4: Right Triangle ΔOPB Exterior Angle',
          statement: 'In ΔOPB, OB = OP (radii) ➔ ∠OPB = ∠OBP. Exterior angle ∠BOQ = ∠OPB + ∠OBP = 2∠OPB (Equation 2).',
          reason: 'Exterior Angle Theorem'
        },
        {
          step: 'Step 5: Add Both Equations',
          statement: '∠AOQ + ∠BOQ = 2(∠OPA + ∠OPB) ➔ ∠AOB = 2∠APB. Central angle is exactly double the inscribed angle! ∎',
          reason: 'Axiom 2 (Adding equals) 🏆'
        }
      ]
    },
    {
      id: 9,
      name: 'Theorem 9: Angles in the Same Segment of a Circle are Equal',
      shortTitle: 'Angles in Same Segment Equal',
      statement: 'Angles in the same segment of a circle are equal to one another (∠APB = ∠AQB).',
      given: 'Angles ∠APB and ∠AQB subtended by the same chord AB in the same major segment.',
      toProve: '∠APB = ∠AQB.',
      method: 'Application of Theorem 8 Central Angle Relation',
      proofSteps: [
        {
          step: 'Step 1: Two Inscribed Angles from Base AB',
          statement: 'Points P and Q lie in the same segment of circle O subtended by base chord AB.',
          reason: 'Given'
        },
        {
          step: 'Step 2: Central Angle Link for ∠APB',
          statement: 'By Theorem 8, the central angle ∠AOB = 2∠APB ➔ ∠APB = ½∠AOB (Equation 1).',
          reason: 'Theorem 8'
        },
        {
          step: 'Step 3: Central Angle Link for ∠AQB',
          statement: 'By Theorem 8, the central angle ∠AOB = 2∠AQB ➔ ∠AQB = ½∠AOB (Equation 2).',
          reason: 'Theorem 8'
        },
        {
          step: 'Step 4: Equate Half-Values (Axiom 1)',
          statement: 'Both ∠APB and ∠AQB are equal to the same value (½∠AOB).',
          reason: 'Axiom 1'
        },
        {
          step: 'Step 5: Conclusion',
          statement: 'Therefore, ∠APB = ∠AQB. All angles subtended in the same circular segment are strictly equal! ∎',
          reason: 'Hence Proved 🏆'
        }
      ]
    },
    {
      id: 10,
      name: 'Theorem 10: Concyclic Points Condition',
      shortTitle: 'Concyclic Points Condition',
      statement: 'If a line segment joining two points subtends equal angles at two other points lying on the same side of the line, the four points lie on a circle (they are concyclic).',
      given: 'Line segment AB subtending equal angles at C and D on the same side: ∠ACB = ∠ADB.',
      toProve: 'Points A, B, C, and D are concyclic (lie on the same circle).',
      method: 'Proof by Contradiction via Circumcircle',
      proofSteps: [
        {
          step: 'Step 1: Draw Circumcircle through A, B, C',
          statement: 'Draw the unique circle passing through three non-collinear points A, B, and C (Theorem 1).',
          reason: 'Theorem 1'
        },
        {
          step: 'Step 2: Assume Point D is NOT on Circle',
          statement: 'Suppose point D does not lie on this circle. Let the circle intersect line AD at point D\'. Join D\'B.',
          reason: 'Hypothesis for contradiction'
        },
        {
          step: 'Step 3: Angles in Same Segment on Circle',
          statement: 'Since A, B, C, D\' lie on the circle, ∠ACB = ∠AD\'B by Theorem 9.',
          reason: 'Theorem 9'
        },
        {
          step: 'Step 4: Contradiction with Given Angle',
          statement: 'We are given ∠ACB = ∠ADB ➔ ∠ADB = ∠AD\'B. In ΔBDD\', an exterior angle cannot equal the interior angle unless D\' coincides with D.',
          reason: 'Exterior Angle Inequality'
        },
        {
          step: 'Step 5: Conclusion - Points are Concyclic',
          statement: 'Therefore, point D must lie on the circle. Points A, B, C, and D are concyclic! ∎',
          reason: 'Hence Proved (Q.E.D.) 🏆'
        }
      ]
    },
    {
      id: 11,
      name: 'Theorem 11: Opposite Angles of Cyclic Quadrilateral Sum to 180°',
      shortTitle: 'Cyclic Quad Opposite Angles = 180°',
      statement: 'The sum of either pair of opposite angles of a cyclic quadrilateral is 180° (supplementary).',
      given: 'A cyclic quadrilateral ABCD inscribed in circle O.',
      toProve: '∠A + ∠C = 180° and ∠B + ∠D = 180°.',
      method: 'Central Reflex Angle & 360° Total Angle Division',
      proofSteps: [
        {
          step: 'Step 1: Cyclic Quadrilateral ABCD',
          statement: 'Consider quadrilateral ABCD with all four vertices lying on circle O.',
          reason: 'Given'
        },
        {
          step: 'Step 2: Join Centre Radii OB and OD',
          statement: 'Connect OB and OD to split the circle into minor arc BCD and major arc BAD.',
          reason: 'Postulate 1'
        },
        {
          step: 'Step 3: Central Angles Subtended',
          statement: 'By Theorem 8: ∠BOD = 2∠A (Equation 1) and Reflex ∠BOD = 2∠C (Equation 2).',
          reason: 'Theorem 8'
        },
        {
          step: 'Step 4: Sum of Angles Around Centre O',
          statement: '∠BOD + Reflex ∠BOD = 360° ➔ 2∠A + 2∠C = 360° ➔ 2(∠A + ∠C) = 360° ➔ ∠A + ∠C = 180°.',
          reason: 'Full circle angle sum = 360°'
        },
        {
          step: 'Step 5: Other Opposite Pair Also 180°',
          statement: 'Total quad angles sum = 360° ➔ ∠B + ∠D = 360° - (∠A + ∠C) = 360° - 180° = 180°! ∎',
          reason: 'Quadrilateral Angle Sum Property 🏆'
        }
      ]
    },
    {
      id: 12,
      name: 'Theorem 12: Converse of Cyclic Quadrilateral Theorem',
      shortTitle: 'Opposite Sum 180° ➔ Cyclic Quad',
      statement: 'If the sum of a pair of opposite angles of a quadrilateral is 180°, then the quadrilateral is cyclic (all four vertices lie on a circle).',
      given: 'Quadrilateral ABCD where ∠B + ∠D = 180° (or ∠A + ∠C = 180°).',
      toProve: 'Quadrilateral ABCD is cyclic.',
      method: 'Proof by Contradiction with Circumcircle',
      proofSteps: [
        {
          step: 'Step 1: Draw Circle through A, B, C',
          statement: 'By Theorem 1, draw a unique circle passing through vertices A, B, and C.',
          reason: 'Theorem 1'
        },
        {
          step: 'Step 2: Assume Vertex D is NOT on Circle',
          statement: 'Suppose vertex D does not lie on the circle. Let line AD meet the circle at D\'. Join CD\'.',
          reason: 'Hypothesis for contradiction'
        },
        {
          step: 'Step 3: Cyclic Property of ABCD\'',
          statement: 'ABCD\' is cyclic ➔ ∠B + ∠AD\'C = 180° (Theorem 11).',
          reason: 'Theorem 11'
        },
        {
          step: 'Step 4: Contradiction with Given Supplementary Angle',
          statement: 'We are given ∠B + ∠ADC = 180° ➔ ∠AD\'C = ∠ADC. This is impossible in ΔCDD\' unless point D\' coincides with D.',
          reason: 'Exterior Angle Property'
        },
        {
          step: 'Step 5: Conclusion - Quadrilateral is Cyclic',
          statement: 'Therefore, point D must lie on the circle. Quadrilateral ABCD is strictly cyclic! ∎',
          reason: 'Hence Proved (Q.E.D.) 🏆'
        }
      ]
    }
  ];

  const quizQuestions = [

    {
      id: 1,
      q: 'Which of Euclid’s postulates states that "All right angles are equal to one another"?',
      options: ['Postulate 1', 'Postulate 2', 'Postulate 4', 'Postulate 5'],
      correct: 2,
      explanation: 'Postulate 4 states that all right angles (90°) are congruent and equal to one another regardless of their position or orientation.'
    },
    {
      id: 2,
      q: 'In Euclid\'s 5th Postulate, if the sum of two interior angles on the same side is less than 180°, what happens to the two lines?',
      options: [
        'They remain parallel forever',
        'They meet on the same side where the sum is < 180°',
        'They meet on the opposite side where the sum is > 180°',
        'They form concentric circles'
      ],
      correct: 1,
      explanation: 'If a line falling on two straight lines makes interior angles on the same side sum to less than 2 right angles (< 180°), the lines will intersect on that very side when extended indefinitely.'
    },
    {
      id: 3,
      q: 'According to Euclid\'s Axiom 1: "Things which are equal to the same thing are..."',
      options: ['Unequal to each other', 'Double of each other', 'Equal to one another', 'Perpendicular to each other'],
      correct: 2,
      explanation: 'If A = C and B = C, then A = B (Transitive property of equality).'
    },
    {
      id: 4,
      q: 'How many distinct straight lines can pass through two distinct points?',
      options: ['Infinitely many', 'Exactly two', 'Exactly one unique line', 'Zero'],
      correct: 2,
      explanation: 'Axiom 5.1 (Given two distinct points, there is a unique line that passes through them).'
    }
  ];

  return (
    <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0.5rem 0.5rem 2.5rem' }}>
      
      {/* Top Header Card */}
      <div style={{
        background: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%)',
        borderRadius: '20px',
        padding: '24px 20px',
        color: '#ffffff',
        marginBottom: '1.25rem',
        boxShadow: '0 10px 28px rgba(5, 150, 105, 0.3)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Decorative Rings */}
        <div style={{
          position: 'absolute',
          right: '-40px',
          top: '-40px',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          border: '3px dashed rgba(255,255,255,0.18)',
          pointerEvents: 'none'
        }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <button
            onClick={onBack}
            style={{
              background: 'rgba(255, 255, 255, 0.18)',
              border: '1px solid rgba(255, 255, 255, 0.35)',
              color: '#ffffff',
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <ArrowLeft size={16} /> Back to Chapters
          </button>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 900,
            background: 'rgba(0,0,0,0.3)',
            padding: '4px 10px',
            borderRadius: '9999px',
            letterSpacing: '0.05em'
          }}>
            NCERT RATIONALIZED 2026-27
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '6px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'rgba(255,255,255,0.22)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Compass size={26} color="#ffffff" />
          </div>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Introduction to Euclid's Geometry
            </h1>
            <p style={{ margin: '2px 0 0', fontSize: '0.84rem', opacity: 0.9 }}>
              Interactive 5 Postulates Lab, 7 Axioms & 3D Geometric Construction (Ch 5 • iemh105)
            </p>
          </div>
        </div>

        {/* Sub Navigation Pill Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginTop: '18px',
          overflowX: 'auto',
          paddingBottom: '4px'
        }}>
          {[
            { id: 'theorems', label: '📐 12 Theorems & Proofs', icon: BookOpen },
            { id: 'postulates', label: '🌟 5 Postulates Lab', icon: Compass },
            { id: 'construction', label: '📐 Proposition 1.1 (Δ)', icon: Layers },
            { id: 'axioms', label: '📜 7 Axioms Deck', icon: BookOpen },
            { id: 'quiz', label: '⚡ Interactive Quiz', icon: Award }
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  background: isActive ? '#ffffff' : 'rgba(255,255,255,0.18)',
                  color: isActive ? '#064e3b' : '#ffffff',
                  border: isActive ? '1px solid #ffffff' : '1px solid rgba(255,255,255,0.25)',
                  padding: '7px 14px',
                  borderRadius: '10px',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.15)' : 'none'
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: 5 POSTULATES INTERACTIVE SIMULATOR */}
      {activeTab === 'postulates' && (
        <div>
          {/* Postulate Selector Tabs */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '6px',
            marginBottom: '1rem'
          }}>
            {[1, 2, 3, 4, 5].map((num) => {
              const isSelected = activePostulate === num;
              return (
                <button
                  key={num}
                  onClick={() => setActivePostulate(num as any)}
                  style={{
                    padding: '10px 4px',
                    borderRadius: '12px',
                    background: isSelected ? 'var(--bg-card)' : 'var(--bg-secondary)',
                    border: isSelected ? '2px solid #059669' : '1px solid var(--border-color)',
                    color: isSelected ? '#059669' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    textAlign: 'center',
                    fontWeight: 800,
                    fontSize: '0.82rem',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div>Postulate {num}</div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 600, opacity: 0.8 }}>
                    {num === 1 && 'Line Segment'}
                    {num === 2 && 'Infinite Line'}
                    {num === 3 && 'Circle Radius'}
                    {num === 4 && 'Right Angles'}
                    {num === 5 && 'Parallel Lines'}
                  </div>
                </button>
              );
            })}
          </div>

          {/* POSTULATE 1: LINE PASSING THROUGH 2 POINTS */}
          {activePostulate === 1 && (
            <div className="glass-card" style={{
              padding: '20px',
              borderRadius: '16px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-card)',
              marginBottom: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Postulate 1: Straight Line between 2 Points
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  💡 Click anywhere on canvas to move Point B
                </span>
              </div>
              <p style={{ margin: '0 0 12px', fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 600, lineHeight: 1.5 }}>
                "A straight line may be drawn from any one point to any other point."
              </p>

              {/* Interactive SVG Canvas */}
              <div style={{
                background: 'var(--bg-secondary)',
                borderRadius: '14px',
                border: '1px solid var(--border-color)',
                padding: '10px',
                display: 'flex',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <svg
                  width="100%"
                  height="220"
                  viewBox="0 0 400 220"
                  style={{ cursor: 'crosshair', maxWidth: '400px' }}
                  onClick={handleP1CanvasClick}
                >
                  {/* Grid Lines */}
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(100, 116, 139, 0.15)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="400" height="220" fill="url(#grid)" />

                  {/* Connected Line with Draw Animation */}
                  {p1LineDrawn && (
                    <line
                      x1={p1Start.x}
                      y1={p1Start.y}
                      x2={p1End.x}
                      y2={p1End.y}
                      stroke="#059669"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeDasharray="400"
                      strokeDashoffset="0"
                      style={{ transition: 'all 0.35s ease-out' }}
                    />
                  )}

                  {/* Point A */}
                  <circle cx={p1Start.x} cy={p1Start.y} r="7" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
                  <text x={p1Start.x - 18} y={p1Start.y + 5} fill="var(--text-primary)" fontSize="13" fontWeight="bold">Point A</text>

                  {/* Point B */}
                  <circle cx={p1End.x} cy={p1End.y} r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
                  <text x={p1End.x + 12} y={p1End.y + 5} fill="var(--text-primary)" fontSize="13" fontWeight="bold">Point B ({p1End.x}, {p1End.y})</text>
                </svg>
              </div>

              <div style={{ marginTop: '12px', background: 'rgba(5, 150, 105, 0.08)', padding: '10px 14px', borderRadius: '10px', fontSize: '0.8rem', color: 'var(--text-primary)' }}>
                <strong>Key Insight (Axiom 5.1):</strong> Given two distinct points A and B, there is <strong>exactly one unique</strong> line passing through them. An infinite number of lines can pass through point A alone, but only ONE passes through both A and B!
              </div>
            </div>
          )}

          {/* POSTULATE 2: TERMINATED LINE PRODUCED INDEFINITELY */}
          {activePostulate === 2 && (
            <div className="glass-card" style={{
              padding: '20px',
              borderRadius: '16px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-card)',
              marginBottom: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#059669', textTransform: 'uppercase' }}>
                  Postulate 2: Terminated Line Produced Indefinitely
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Line Segment ➔ Infinite Line
                </span>
              </div>
              <p style={{ margin: '0 0 12px', fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                "A terminated line can be produced indefinitely in both directions."
              </p>

              {/* Slider Controls */}
              <div style={{ marginBottom: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                  <span>Line Extension Width: {p2Length * 2} px</span>
                  <button
                    onClick={() => {
                      let cur = 40;
                      const t = setInterval(() => {
                        cur += 15;
                        if (cur >= 180) {
                          setP2Length(180);
                          clearInterval(t);
                        } else {
                          setP2Length(cur);
                        }
                      }, 50);
                    }}
                    style={{
                      background: '#059669',
                      color: '#ffffff',
                      border: 'none',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Play size={12} /> Animate Extension
                  </button>
                </div>
                <input
                  type="range"
                  min="40"
                  max="190"
                  value={p2Length}
                  onChange={(e) => setP2Length(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#059669' }}
                />
              </div>

              {/* SVG Canvas */}
              <div style={{
                background: 'var(--bg-secondary)',
                borderRadius: '14px',
                border: '1px solid var(--border-color)',
                padding: '10px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <svg width="100%" height="160" viewBox="0 0 400 160" style={{ maxWidth: '400px' }}>
                  {/* Extended Infinite Ray Left & Right (Dashed) */}
                  <line
                    x1={200 - p2Length}
                    y1={80}
                    x2={200 + p2Length}
                    y2={80}
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeDasharray="6 4"
                  />
                  {/* Arrows on both ends */}
                  <polygon points={`${200 - p2Length - 8},80 ${200 - p2Length},75 ${200 - p2Length},85`} fill="#10b981" />
                  <polygon points={`${200 + p2Length + 8},80 ${200 + p2Length},75 ${200 + p2Length},85`} fill="#10b981" />

                  {/* Core Terminated Line Segment AB */}
                  <line x1="140" y1="80" x2="260" y2="80" stroke="#059669" strokeWidth="6" />
                  <circle cx="140" cy="80" r="7" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
                  <text x="134" y="62" fill="var(--text-primary)" fontSize="13" fontWeight="bold">A</text>
                  <circle cx="260" cy="80" r="7" fill="#ef4444" stroke="#fff" strokeWidth="2" />
                  <text x="254" y="62" fill="var(--text-primary)" fontSize="13" fontWeight="bold">B</text>

                  <text x="175" y="115" fill="#059669" fontSize="12" fontWeight="bold">Line Segment AB</text>
                </svg>
              </div>

              <div style={{ marginTop: '12px', background: 'rgba(5, 150, 105, 0.08)', padding: '10px 14px', borderRadius: '10px', fontSize: '0.8rem' }}>
                <strong>Modern Geometry Note:</strong> What Euclid called a "terminated line" is known today as a <strong>line segment</strong>. When extended indefinitely in both directions, it becomes a continuous <strong>straight line</strong>.
              </div>
            </div>
          )}

          {/* POSTULATE 3: CIRCLE WITH ANY CENTER AND RADIUS */}
          {activePostulate === 3 && (
            <div className="glass-card" style={{
              padding: '20px',
              borderRadius: '16px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-card)',
              marginBottom: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#059669', textTransform: 'uppercase' }}>
                  Postulate 3: Circle with Center & Radius
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Radius r = {p3Radius} px
                </span>
              </div>
              <p style={{ margin: '0 0 12px', fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                "A circle can be drawn with any centre and any radius."
              </p>

              {/* Slider for radius */}
              <div style={{ marginBottom: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                  <span>Adjust Circle Radius: {p3Radius} px</span>
                  <span style={{ color: '#059669' }}>Diameter = {p3Radius * 2} px</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="95"
                  value={p3Radius}
                  onChange={(e) => setP3Radius(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#059669' }}
                />
              </div>

              {/* SVG Canvas */}
              <div style={{
                background: 'var(--bg-secondary)',
                borderRadius: '14px',
                border: '1px solid var(--border-color)',
                padding: '10px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <svg width="100%" height="220" viewBox="0 0 400 220" style={{ maxWidth: '400px' }}>
                  {/* Compass Animation Needle */}
                  <line x1={p3Center.x} y1={p3Center.y} x2={p3Center.x + p3Radius} y2={p3Center.y} stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4 2" />
                  
                  {/* Dynamic Circle */}
                  <circle
                    cx={p3Center.x}
                    cy={p3Center.y}
                    r={p3Radius}
                    fill="rgba(5, 150, 105, 0.12)"
                    stroke="#059669"
                    strokeWidth="3"
                  />

                  {/* Center Point O */}
                  <circle cx={p3Center.x} cy={p3Center.y} r="6" fill="#ef4444" stroke="#fff" strokeWidth="2" />
                  <text x={p3Center.x - 8} y={p3Center.y - 12} fill="var(--text-primary)" fontSize="13" fontWeight="bold">Center O</text>

                  {/* Radius Label */}
                  <circle cx={p3Center.x + p3Radius} cy={p3Center.y} r="5" fill="#f59e0b" stroke="#fff" strokeWidth="1.5" />
                  <text x={p3Center.x + (p3Radius / 2) - 8} y={p3Center.y - 8} fill="#f59e0b" fontSize="12" fontWeight="bold">r</text>
                </svg>
              </div>

              <div style={{ marginTop: '12px', background: 'rgba(5, 150, 105, 0.08)', padding: '10px 14px', borderRadius: '10px', fontSize: '0.8rem' }}>
                <strong>Geometric Compass Construction:</strong> This postulate gives the mathematical justification for using a compass in compass-and-straightedge constructions!
              </div>
            </div>
          )}

          {/* POSTULATE 4: ALL RIGHT ANGLES ARE EQUAL */}
          {activePostulate === 4 && (
            <div className="glass-card" style={{
              padding: '20px',
              borderRadius: '16px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-card)',
              marginBottom: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#059669', textTransform: 'uppercase' }}>
                  Postulate 4: Congruence of All Right Angles
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Rotation θ = {p4Angle}°
                </span>
              </div>
              <p style={{ margin: '0 0 12px', fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                "All right angles are equal to one another (each measuring exactly 90°)."
              </p>

              {/* Slider for rotation */}
              <div style={{ marginBottom: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                  <span>Rotate Orientation: {p4Angle}°</span>
                  <span style={{ color: '#059669' }}>Both angles remain exactly 90°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={p4Angle}
                  onChange={(e) => setP4Angle(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#059669' }}
                />
              </div>

              {/* SVG Comparison */}
              <div style={{
                background: 'var(--bg-secondary)',
                borderRadius: '14px',
                border: '1px solid var(--border-color)',
                padding: '10px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <svg width="100%" height="180" viewBox="0 0 400 180" style={{ maxWidth: '400px' }}>
                  {/* Fixed Right Angle 1 */}
                  <g transform="translate(100, 100)">
                    <line x1="0" y1="0" x2="60" y2="0" stroke="#3b82f6" strokeWidth="3.5" />
                    <line x1="0" y1="0" x2="0" y2="-60" stroke="#3b82f6" strokeWidth="3.5" />
                    <rect x="0" y="-16" width="16" height="16" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="1.5" />
                    <text x="24" y="-24" fill="#3b82f6" fontSize="12" fontWeight="bold">90°</text>
                    <text x="-20" y="30" fill="var(--text-primary)" fontSize="12" fontWeight="bold">Angle 1 (Standard)</text>
                  </g>

                  {/* Rotated Right Angle 2 */}
                  <g transform={`translate(280, 100) rotate(${p4Angle})`}>
                    <line x1="0" y1="0" x2="60" y2="0" stroke="#10b981" strokeWidth="3.5" />
                    <line x1="0" y1="0" x2="0" y2="-60" stroke="#10b981" strokeWidth="3.5" />
                    <rect x="0" y="-16" width="16" height="16" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="1.5" />
                    <text x="24" y="-24" fill="#10b981" fontSize="12" fontWeight="bold">90°</text>
                  </g>
                  <text x="230" y="160" fill="var(--text-primary)" fontSize="12" fontWeight="bold">Angle 2 (Rotated {p4Angle}°)</text>
                </svg>
              </div>
            </div>
          )}

          {/* POSTULATE 5: PARALLEL POSTULATE (THE FAMOUS INTERSECTING POSTULATE) */}
          {activePostulate === 5 && (
            <div className="glass-card" style={{
              padding: '20px',
              borderRadius: '16px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-card)',
              marginBottom: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#059669', textTransform: 'uppercase' }}>
                  Postulate 5: The Famous Parallel Postulate
                </span>
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 900,
                  padding: '3px 8px',
                  borderRadius: '6px',
                  background: p5IsParallel ? '#10b981' : p5WillIntersectLeft ? '#ef4444' : '#3b82f6',
                  color: '#ffffff'
                }}>
                  {p5IsParallel ? 'PARALLEL (Sum = 180°)' : p5WillIntersectLeft ? 'INTERSECTS LEFT (Sum < 180°)' : 'INTERSECTS RIGHT (Sum > 180°)'}
                </span>
              </div>
              <p style={{ margin: '0 0 12px', fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                "If a straight line falling on two straight lines makes the interior angles on the same side less than two right angles (&lt; 180°), the two lines, if produced indefinitely, meet on that side."
              </p>

              {/* Angle Sliders */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, marginBottom: '4px' }}>
                    <span>Interior ∠1: {p5Angle1}°</span>
                  </div>
                  <input
                    type="range"
                    min="45"
                    max="115"
                    value={p5Angle1}
                    onChange={(e) => setP5Angle1(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#059669' }}
                  />
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, marginBottom: '4px' }}>
                    <span>Interior ∠2: {p5Angle2}°</span>
                  </div>
                  <input
                    type="range"
                    min="45"
                    max="115"
                    value={p5Angle2}
                    onChange={(e) => setP5Angle2(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#059669' }}
                  />
                </div>
              </div>

              <div style={{
                textAlign: 'center',
                padding: '8px',
                borderRadius: '8px',
                background: 'rgba(5, 150, 105, 0.08)',
                marginBottom: '12px',
                fontSize: '0.85rem',
                fontWeight: 800
              }}>
                Sum of Interior Angles on Left = ∠1 + ∠2 = {p5Angle1}° + {p5Angle2}° = <span style={{ color: p5Sum < 180 ? '#ef4444' : p5Sum === 180 ? '#10b981' : '#3b82f6' }}>{p5Sum}°</span>
                {p5Sum < 180 && ' (< 180° ➔ Lines meet on the LEFT side!)'}
                {p5Sum === 180 && ' (= 180° ➔ Lines are strictly PARALLEL!)'}
                {p5Sum > 180 && ' (> 180° ➔ Lines meet on the RIGHT side!)'}
              </div>

              {/* Interactive SVG Transversal Canvas */}
              <div style={{
                background: 'var(--bg-secondary)',
                borderRadius: '14px',
                border: '1px solid var(--border-color)',
                padding: '10px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <svg width="100%" height="240" viewBox="0 0 400 240" style={{ maxWidth: '400px' }}>
                  {/* Transversal Line t */}
                  <line x1="200" y1="15" x2="200" y2="235" stroke="#f59e0b" strokeWidth="3.5" />
                  <text x="208" y="28" fill="#f59e0b" fontSize="12" fontWeight="bold">Transversal Line (t)</text>

                  {(() => {
                    const cot1 = 1 / Math.tan((p5Angle1 * Math.PI) / 180);
                    const cot2 = 1 / Math.tan((p5Angle2 * Math.PI) / 180);
                    const cotSum = cot1 + cot2;

                    // Calculate Intersection Point P
                    let intersectX: number | null = null;
                    let intersectY: number | null = null;
                    if (Math.abs(cotSum) > 0.0001) {
                      const deltaX = 100 / cotSum;
                      intersectX = 200 - deltaX;
                      intersectY = 75 + deltaX * cot1;
                    }

                    // Line 1 (Top line through (200, 75))
                    // y(x) = 75 + (200 - x) * cot1
                    const l1_left_x = 25;
                    const l1_left_y = 75 + (200 - l1_left_x) * cot1;
                    const l1_right_x = 375;
                    const l1_right_y = 75 + (200 - l1_right_x) * cot1;

                    // Line 2 (Bottom line through (200, 175))
                    // y(x) = 175 - (200 - x) * cot2
                    const l2_left_x = 25;
                    const l2_left_y = 175 - (200 - l2_left_x) * cot2;
                    const l2_right_x = 375;
                    const l2_right_y = 175 - (200 - l2_right_x) * cot2;

                    return (
                      <>
                        {/* Line 1 (l) */}
                        <line x1={l1_left_x} y1={l1_left_y} x2={l1_right_x} y2={l1_right_y} stroke="#3b82f6" strokeWidth="3.5" />
                        <text x="380" y={l1_right_y + 4} fill="#3b82f6" fontSize="12" fontWeight="bold">Line l</text>

                        {/* Line 2 (m) */}
                        <line x1={l2_left_x} y1={l2_left_y} x2={l2_right_x} y2={l2_right_y} stroke="#10b981" strokeWidth="3.5" />
                        <text x="380" y={l2_right_y + 4} fill="#10b981" fontSize="12" fontWeight="bold">Line m</text>

                        {/* Intersection Marker */}
                        {intersectX !== null && intersectY !== null && intersectX >= -50 && intersectX <= 450 && (
                          <g>
                            <circle cx={intersectX} cy={intersectY} r="9" fill="rgba(239, 68, 68, 0.25)" stroke="#ef4444" strokeWidth="2.5" />
                            <circle cx={intersectX} cy={intersectY} r="4" fill="#ef4444" />
                            <text
                              x={intersectX > 200 ? intersectX - 110 : intersectX + 12}
                              y={intersectY - 8}
                              fill="#ef4444"
                              fontSize="11"
                              fontWeight="bold"
                            >
                              📍 Point P (Lines Meet)
                            </text>
                          </g>
                        )}

                        {/* Transversal Intersection Points */}
                        <circle cx="200" cy="75" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                        <circle cx="200" cy="175" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />

                        {/* Interior Angle 1 Shading / Text */}
                        <text x="145" y="102" fill="#f59e0b" fontSize="12" fontWeight="bold">∠1 = {p5Angle1}°</text>

                        {/* Interior Angle 2 Shading / Text */}
                        <text x="145" y="162" fill="#f59e0b" fontSize="12" fontWeight="bold">∠2 = {p5Angle2}°</text>
                      </>
                    );
                  })()}
                </svg>
              </div>

              <div style={{ marginTop: '12px', background: 'rgba(5, 150, 105, 0.08)', padding: '10px 14px', borderRadius: '10px', fontSize: '0.8rem' }}>
                <strong>Playfair's Parallel Axiom:</strong> For every line <em>l</em> and for every point <em>P</em> not lying on <em>l</em>, there exists a <strong>unique line <em>m</em></strong> passing through <em>P</em> and parallel to <em>l</em>!
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: PROPOSITION 1.1 EQUILATERAL TRIANGLE CONSTRUCTION */}
      {activeTab === 'construction' && (
        <div className="glass-card" style={{
          padding: '20px',
          borderRadius: '16px',
          border: '1px solid var(--border-color)',
          background: 'var(--bg-card)',
          marginBottom: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#059669', textTransform: 'uppercase' }}>
              Proposition 1.1: Constructing an Equilateral Triangle
            </span>
            <button
              onClick={() => {
                setConstructionStep(0);
                setIsAutoPlaying(true);
              }}
              style={{
                background: '#059669',
                color: '#ffffff',
                border: 'none',
                padding: '4px 12px',
                borderRadius: '8px',
                fontSize: '0.75rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Play size={12} /> Auto Play All Steps
            </button>
          </div>

          <p style={{ margin: '0 0 14px', fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 600 }}>
            "To construct an equilateral triangle on a given finite straight line segment AB using ruler and compass."
          </p>

          {/* Construction Step Selector */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', marginBottom: '14px' }}>
            {[
              { step: 0, label: '1. Line AB' },
              { step: 1, label: '2. Circle A' },
              { step: 2, label: '3. Circle B' },
              { step: 3, label: '4. Join C (ΔABC)' }
            ].map((s) => (
              <button
                key={s.step}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setConstructionStep(s.step);
                }}
                style={{
                  padding: '8px 4px',
                  borderRadius: '10px',
                  background: constructionStep === s.step ? '#059669' : 'var(--bg-secondary)',
                  color: constructionStep === s.step ? '#ffffff' : 'var(--text-secondary)',
                  border: '1px solid var(--border-color)',
                  fontWeight: 800,
                  fontSize: '0.75rem',
                  cursor: 'pointer'
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* SVG Geometric Construction Canvas */}
          <div style={{
            background: 'var(--bg-secondary)',
            borderRadius: '14px',
            border: '1px solid var(--border-color)',
            padding: '10px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <svg width="100%" height="260" viewBox="0 0 400 260" style={{ maxWidth: '400px' }}>
              {/* Radius r = 100 px, Point A = (150, 180), Point B = (250, 180) */}
              {/* Point C = (200, 180 - 100 * sqrt(3)/2) = (200, 180 - 86.6) = (200, 93.4) */}
              
              {/* Step 1: Draw Circle with center A and radius AB */}
              {constructionStep >= 1 && (
                <circle
                  cx="150"
                  cy="180"
                  r="100"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />
              )}

              {/* Step 2: Draw Circle with center B and radius BA */}
              {constructionStep >= 2 && (
                <circle
                  cx="250"
                  cy="180"
                  r="100"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />
              )}

              {/* Step 3: Equilateral Triangle Shading and Sides */}
              {constructionStep === 3 && (
                <polygon
                  points="150,180 250,180 200,93.4"
                  fill="rgba(5, 150, 105, 0.25)"
                  stroke="#059669"
                  strokeWidth="3.5"
                />
              )}

              {/* Base Line AB */}
              <line x1="150" y1="180" x2="250" y2="180" stroke="#059669" strokeWidth="4" />

              {/* Triangle Sides AC and BC if step 3 */}
              {constructionStep === 3 && (
                <>
                  <line x1="150" y1="180" x2="200" y2="93.4" stroke="#3b82f6" strokeWidth="3" />
                  <line x1="250" y1="180" x2="200" y2="93.4" stroke="#10b981" strokeWidth="3" />
                </>
              )}

              {/* Points */}
              <circle cx="150" cy="180" r="6" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
              <text x="135" y="202" fill="var(--text-primary)" fontSize="13" fontWeight="bold">A</text>

              <circle cx="250" cy="180" r="6" fill="#10b981" stroke="#fff" strokeWidth="2" />
              <text x="255" y="202" fill="var(--text-primary)" fontSize="13" fontWeight="bold">B</text>

              {constructionStep >= 2 && (
                <>
                  <circle cx="200" cy="93.4" r="6" fill="#ef4444" stroke="#fff" strokeWidth="2" />
                  <text x="194" y="80" fill="#ef4444" fontSize="13" fontWeight="bold">C (Intersection)</text>
                </>
              )}
            </svg>
          </div>

          {/* Step Explanation Text */}
          <div style={{ marginTop: '12px', background: 'rgba(5, 150, 105, 0.08)', padding: '12px 16px', borderRadius: '10px', fontSize: '0.84rem' }}>
            {constructionStep === 0 && (
              <div><strong>Step 1:</strong> Start with a given line segment <strong>AB</strong> of finite length.</div>
            )}
            {constructionStep === 1 && (
              <div><strong>Step 2 (Postulate 3):</strong> Draw a circle with center <strong>A</strong> and radius <strong>AB</strong>. Every point on this circle is at distance AB from A.</div>
            )}
            {constructionStep === 2 && (
              <div><strong>Step 3 (Postulate 3):</strong> Draw another circle with center <strong>B</strong> and radius <strong>BA</strong>. Let the two circles intersect at point <strong>C</strong>.</div>
            )}
            {constructionStep === 3 && (
              <div>
                <strong>Step 4 (Axiom 1 Proof):</strong> Join AC and BC. Since AC = AB (radii of circle A) and BC = AB (radii of circle B), by Euclid's Axiom 1, <strong>AC = BC = AB</strong>. Hence, <strong>ΔABC is an Equilateral Triangle!</strong> 🏆
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB: 12 THEOREMS & PROOFS EXPLORER */}
      {activeTab === 'theorems' && (
        <div>
          {/* Theorem Selector Grid (1 to 12) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
            gap: '6px',
            marginBottom: '1.25rem'
          }}>
            {theoremsData.map((th) => {
              const isSelected = selectedTheorem === th.id;
              return (
                <button
                  key={th.id}
                  onClick={() => setSelectedTheorem(th.id)}
                  style={{
                    padding: '8px 6px',
                    borderRadius: '10px',
                    background: isSelected ? '#059669' : 'var(--bg-secondary)',
                    color: isSelected ? '#ffffff' : 'var(--text-primary)',
                    border: isSelected ? '1px solid #047857' : '1px solid var(--border-color)',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    textAlign: 'center',
                    lineHeight: 1.25,
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ opacity: isSelected ? 1 : 0.7, fontSize: '0.68rem' }}>#{th.id}</div>
                  <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{th.shortTitle}</div>
                </button>
              );
            })}
          </div>

          {/* Active Theorem Card */}
          {(() => {
            const th = theoremsData.find((t) => t.id === selectedTheorem) || theoremsData[0];
            return (
              <div className="glass-card" style={{
                padding: '22px 20px',
                borderRadius: '18px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-card)',
                marginBottom: '1rem'
              }}>
                {/* Header info */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '6px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#059669', textTransform: 'uppercase' }}>
                    {th.name}
                  </span>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '3px 9px',
                    borderRadius: '6px',
                    background: 'rgba(5, 150, 105, 0.12)',
                    color: '#059669'
                  }}>
                    {th.method}
                  </span>
                </div>

                <h2 style={{ margin: '0 0 10px', fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.4 }}>
                  "{th.statement}"
                </h2>

                {/* Given & To Prove Box */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px',
                  background: 'var(--bg-secondary)',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  fontSize: '0.82rem',
                  marginBottom: '14px'
                }}>
                  <div>
                    <strong style={{ color: '#059669' }}>Given:</strong> {th.given}
                  </div>
                  <div>
                    <strong style={{ color: '#3b82f6' }}>To Prove:</strong> {th.toProve}
                  </div>
                </div>

                {/* Interactive Animation Control Bar */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'var(--bg-secondary)',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  marginBottom: '14px',
                  flexWrap: 'wrap',
                  gap: '8px',
                  border: '1px solid var(--border-color)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => setTheoremAnimStep((prev) => Math.max(0, prev - 1))}
                      disabled={theoremAnimStep === 0}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '8px',
                        background: theoremAnimStep === 0 ? 'rgba(255,255,255,0.05)' : 'var(--bg-card)',
                        color: theoremAnimStep === 0 ? 'var(--text-muted)' : 'var(--text-primary)',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        cursor: theoremAnimStep === 0 ? 'default' : 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <ChevronLeft size={15} /> Prev Step
                    </button>
                    <button
                      onClick={() => setIsTheoremAutoPlaying(!isTheoremAutoPlaying)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '8px',
                        background: isTheoremAutoPlaying ? '#ef4444' : '#059669',
                        color: '#ffffff',
                        border: 'none',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        boxShadow: '0 2px 8px rgba(5,150,105,0.3)'
                      }}
                    >
                      {isTheoremAutoPlaying ? <><Pause size={15} /> Pause</> : <><Play size={15} /> Play Animation</>}
                    </button>
                    <button
                      onClick={() => setTheoremAnimStep((prev) => Math.min(4, prev + 1))}
                      disabled={theoremAnimStep === 4}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '8px',
                        background: theoremAnimStep === 4 ? 'rgba(255,255,255,0.05)' : 'var(--bg-card)',
                        color: theoremAnimStep === 4 ? 'var(--text-muted)' : 'var(--text-primary)',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        cursor: theoremAnimStep === 4 ? 'default' : 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      Next Step <ChevronRight size={15} />
                    </button>
                    <button
                      onClick={() => { setTheoremAnimStep(0); setIsTheoremAutoPlaying(false); }}
                      style={{
                        padding: '6px 10px',
                        borderRadius: '8px',
                        background: 'var(--bg-card)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <RotateCcw size={14} /> Reset
                    </button>
                  </div>
                  
                  {/* Step indicator */}
                  <span style={{ fontSize: '0.78rem', fontWeight: 900, color: '#059669', background: 'rgba(5, 150, 105, 0.1)', padding: '4px 10px', borderRadius: '8px' }}>
                    Visual Proof Step {theoremAnimStep + 1} of 5
                  </span>
                </div>

                {/* Dynamic Animated SVG Geometric Canvas */}
                <div style={{
                  background: 'var(--bg-secondary)',
                  borderRadius: '16px',
                  border: '1px solid var(--border-color)',
                  padding: '14px',
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  position: 'relative'
                }}>
                  <svg width="100%" height="240" viewBox="0 0 400 240" style={{ maxWidth: '400px' }}>
                    {/* THEOREM 1: CIRCUMCIRCLE OF 3 NON-COLLINEAR POINTS */}
                    {th.id === 1 && (
                      <g>
                        {/* Step 4 & 5: Circumcircle */}
                        {theoremAnimStep >= 4 && (
                          <circle cx="200" cy="120" r="85" fill="rgba(5, 150, 105, 0.12)" stroke="#059669" strokeWidth="3.5" />
                        )}

                        {/* Step 1: Segments AB and AC */}
                        {theoremAnimStep >= 1 && (
                          <>
                            <line x1="140" y1="50" x2="130" y2="175" stroke="#3b82f6" strokeWidth="2.5" />
                            <line x1="140" y1="50" x2="280" y2="145" stroke="#10b981" strokeWidth="2.5" />
                          </>
                        )}

                        {/* Step 2: Perpendicular Bisector of AB */}
                        {theoremAnimStep >= 2 && (
                          <line x1="60" y1="108" x2="300" y2="116" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 3" />
                        )}

                        {/* Step 3: Perpendicular Bisector of AC */}
                        {theoremAnimStep >= 3 && (
                          <line x1="240" y1="30" x2="160" y2="210" stroke="#10b981" strokeWidth="2" strokeDasharray="4 3" />
                        )}

                        {/* Step 3 & 4: Radii OA, OB, OC */}
                        {theoremAnimStep >= 3 && (
                          <>
                            <line x1="200" y1="120" x2="140" y2="50" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
                            <line x1="200" y1="120" x2="130" y2="175" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
                            <line x1="200" y1="120" x2="280" y2="145" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
                          </>
                        )}

                        {/* Circumcentre O */}
                        {theoremAnimStep >= 3 && (
                          <g>
                            <circle cx="200" cy="120" r="7" fill="#ef4444" stroke="#fff" strokeWidth="2" />
                            <text x="210" y="125" fill="#ef4444" fontSize="13" fontWeight="bold">O (Centre)</text>
                          </g>
                        )}

                        {/* Points A, B, C */}
                        <circle cx="140" cy="50" r="6" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
                        <text x="135" y="38" fill="var(--text-primary)" fontSize="13" fontWeight="bold">A</text>
                        <circle cx="130" cy="175" r="6" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
                        <text x="110" y="185" fill="var(--text-primary)" fontSize="13" fontWeight="bold">B</text>
                        <circle cx="280" cy="145" r="6" fill="#10b981" stroke="#fff" strokeWidth="2" />
                        <text x="290" y="152" fill="var(--text-primary)" fontSize="13" fontWeight="bold">C</text>

                        {theoremAnimStep >= 4 && (
                          <text x="120" y="225" fill="#059669" fontSize="12" fontWeight="bold">🏆 Unique Circumcircle (OA = OB = OC = r)</text>
                        )}
                      </g>
                    )}

                    {/* THEOREM 2: EQUAL CHORDS SUBTEND EQUAL ANGLES */}
                    {th.id === 2 && (
                      <g>
                        <circle cx="200" cy="120" r="85" fill="none" stroke="var(--border-color)" strokeWidth="2" />
                        <circle cx="200" cy="120" r="5" fill="#ef4444" />
                        <text x="205" y="115" fill="var(--text-primary)" fontSize="12" fontWeight="bold">O</text>

                        {/* Chords AB and CD */}
                        <line x1="120" y1="80" x2="120" y2="160" stroke="#3b82f6" strokeWidth="3.5" />
                        <text x="95" y="125" fill="#3b82f6" fontSize="12" fontWeight="bold">AB</text>
                        <line x1="280" y1="80" x2="280" y2="160" stroke="#10b981" strokeWidth="3.5" />
                        <text x="290" y="125" fill="#10b981" fontSize="12" fontWeight="bold">CD</text>

                        {/* Step >= 1: Radii */}
                        {theoremAnimStep >= 1 && (
                          <>
                            <line x1="200" y1="120" x2="120" y2="80" stroke="#3b82f6" strokeWidth="1.8" />
                            <line x1="200" y1="120" x2="120" y2="160" stroke="#3b82f6" strokeWidth="1.8" />
                            <line x1="200" y1="120" x2="280" y2="80" stroke="#10b981" strokeWidth="1.8" />
                            <line x1="200" y1="120" x2="280" y2="160" stroke="#10b981" strokeWidth="1.8" />
                          </>
                        )}

                        {/* Step >= 2: Triangles Shading */}
                        {theoremAnimStep >= 2 && (
                          <>
                            <polygon points="200,120 120,80 120,160" fill="rgba(59, 130, 246, 0.2)" />
                            <polygon points="200,120 280,80 280,160" fill="rgba(16, 185, 129, 0.2)" />
                          </>
                        )}

                        {/* Step >= 3 & 4: Angle Arcs */}
                        {theoremAnimStep >= 3 && (
                          <>
                            <path d="M 180,110 A 25 25 0 0 0 180,130" fill="none" stroke="#f59e0b" strokeWidth="3" />
                            <path d="M 220,110 A 25 25 0 0 1 220,130" fill="none" stroke="#f59e0b" strokeWidth="3" />
                            <text x="155" y="125" fill="#f59e0b" fontSize="11" fontWeight="bold">θ₁</text>
                            <text x="230" y="125" fill="#f59e0b" fontSize="11" fontWeight="bold">θ₂</text>
                          </>
                        )}

                        {theoremAnimStep >= 4 && (
                          <text x="110" y="225" fill="#059669" fontSize="12" fontWeight="bold">🏆 ΔAOB ≅ ΔCOD ➔ ∠AOB = ∠COD</text>
                        )}
                      </g>
                    )}

                    {/* THEOREM 3: CONVERSE EQUAL ANGLES ➔ EQUAL CHORDS */}
                    {th.id === 3 && (
                      <g>
                        <circle cx="200" cy="120" r="85" fill="none" stroke="var(--border-color)" strokeWidth="2" />
                        <circle cx="200" cy="120" r="5" fill="#ef4444" />
                        <text x="205" y="115" fill="var(--text-primary)" fontSize="12" fontWeight="bold">O</text>

                        {/* Radii & Given Equal Angles */}
                        <line x1="200" y1="120" x2="120" y2="80" stroke="#3b82f6" strokeWidth="2" />
                        <line x1="200" y1="120" x2="120" y2="160" stroke="#3b82f6" strokeWidth="2" />
                        <line x1="200" y1="120" x2="280" y2="80" stroke="#10b981" strokeWidth="2" />
                        <line x1="200" y1="120" x2="280" y2="160" stroke="#10b981" strokeWidth="2" />
                        <path d="M 180,110 A 25 25 0 0 0 180,130" fill="none" stroke="#f59e0b" strokeWidth="3" />
                        <path d="M 220,110 A 25 25 0 0 1 220,130" fill="none" stroke="#f59e0b" strokeWidth="3" />
                        <text x="155" y="125" fill="#f59e0b" fontSize="11" fontWeight="bold">θ</text>
                        <text x="230" y="125" fill="#f59e0b" fontSize="11" fontWeight="bold">θ</text>

                        {/* Step >= 2: Chords Drawn */}
                        {theoremAnimStep >= 2 && (
                          <>
                            <line x1="120" y1="80" x2="120" y2="160" stroke="#3b82f6" strokeWidth="3.5" />
                            <line x1="280" y1="80" x2="280" y2="160" stroke="#10b981" strokeWidth="3.5" />
                          </>
                        )}

                        {/* Step >= 3: SAS Shading */}
                        {theoremAnimStep >= 3 && (
                          <>
                            <polygon points="200,120 120,80 120,160" fill="rgba(59, 130, 246, 0.2)" />
                            <polygon points="200,120 280,80 280,160" fill="rgba(16, 185, 129, 0.2)" />
                          </>
                        )}

                        {theoremAnimStep >= 4 && (
                          <text x="110" y="225" fill="#059669" fontSize="12" fontWeight="bold">🏆 ΔAOB ≅ ΔCOD (SAS) ➔ Chord AB = CD</text>
                        )}
                      </g>
                    )}

                    {/* THEOREM 4: PERPENDICULAR FROM CENTRE BISECTS CHORD */}
                    {th.id === 4 && (
                      <g>
                        <circle cx="200" cy="120" r="85" fill="none" stroke="var(--border-color)" strokeWidth="2" />
                        <circle cx="200" cy="120" r="5" fill="#ef4444" />
                        <text x="205" y="112" fill="var(--text-primary)" fontSize="12" fontWeight="bold">O</text>

                        {/* Chord AB */}
                        <line x1="130" y1="170" x2="270" y2="170" stroke="#3b82f6" strokeWidth="3.5" />
                        <text x="115" y="175" fill="#3b82f6" fontSize="12" fontWeight="bold">A</text>
                        <text x="275" y="175" fill="#3b82f6" fontSize="12" fontWeight="bold">B</text>

                        {/* Step >= 1: OM Perpendicular */}
                        {theoremAnimStep >= 1 && (
                          <>
                            <line x1="200" y1="120" x2="200" y2="170" stroke="#ef4444" strokeWidth="3" />
                            <rect x="200" y="156" width="14" height="14" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="1.5" />
                            <circle cx="200" cy="170" r="5" fill="#ef4444" />
                            <text x="205" y="188" fill="#ef4444" fontSize="12" fontWeight="bold">M</text>
                          </>
                        )}

                        {/* Step >= 2: Radii OA and OB */}
                        {theoremAnimStep >= 2 && (
                          <>
                            <line x1="200" y1="120" x2="130" y2="170" stroke="#10b981" strokeWidth="2" />
                            <line x1="200" y1="120" x2="270" y2="170" stroke="#10b981" strokeWidth="2" />
                          </>
                        )}

                        {/* Step >= 3: RHS Shading */}
                        {theoremAnimStep >= 3 && (
                          <>
                            <polygon points="200,120 130,170 200,170" fill="rgba(59, 130, 246, 0.2)" />
                            <polygon points="200,120 270,170 200,170" fill="rgba(16, 185, 129, 0.2)" />
                          </>
                        )}

                        {theoremAnimStep >= 4 && (
                          <text x="120" y="225" fill="#059669" fontSize="12" fontWeight="bold">🏆 ΔOMA ≅ ΔOMB (RHS) ➔ AM = MB</text>
                        )}
                      </g>
                    )}

                    {/* THEOREM 5: MIDPOINT TO CENTRE IS PERPENDICULAR */}
                    {th.id === 5 && (
                      <g>
                        <circle cx="200" cy="120" r="85" fill="none" stroke="var(--border-color)" strokeWidth="2" />
                        <circle cx="200" cy="120" r="5" fill="#ef4444" />
                        <text x="205" y="112" fill="var(--text-primary)" fontSize="12" fontWeight="bold">O</text>

                        {/* Chord AB with Midpoint M */}
                        <line x1="130" y1="170" x2="270" y2="170" stroke="#3b82f6" strokeWidth="3.5" />
                        <circle cx="200" cy="170" r="5" fill="#ef4444" />
                        <text x="195" y="188" fill="#ef4444" fontSize="12" fontWeight="bold">M (Midpoint)</text>

                        {/* Step >= 1: Join OM */}
                        {theoremAnimStep >= 1 && (
                          <line x1="200" y1="120" x2="200" y2="170" stroke="#ef4444" strokeWidth="3" />
                        )}

                        {/* Step >= 2: Radii */}
                        {theoremAnimStep >= 2 && (
                          <>
                            <line x1="200" y1="120" x2="130" y2="170" stroke="#10b981" strokeWidth="2" />
                            <line x1="200" y1="120" x2="270" y2="170" stroke="#10b981" strokeWidth="2" />
                          </>
                        )}

                        {/* Step >= 3: SSS Triangles */}
                        {theoremAnimStep >= 3 && (
                          <>
                            <polygon points="200,120 130,170 200,170" fill="rgba(59, 130, 246, 0.2)" />
                            <polygon points="200,120 270,170 200,170" fill="rgba(16, 185, 129, 0.2)" />
                          </>
                        )}

                        {/* Step >= 4: Linear Pair Box */}
                        {theoremAnimStep >= 4 && (
                          <>
                            <rect x="200" y="156" width="14" height="14" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="1.5" />
                            <text x="105" y="225" fill="#059669" fontSize="12" fontWeight="bold">🏆 2∠OMA = 180° ➔ ∠OMA = 90° (OM ⊥ AB)</text>
                          </>
                        )}
                      </g>
                    )}

                    {/* THEOREM 6: EQUAL CHORDS ARE EQUIDISTANT FROM CENTRE */}
                    {th.id === 6 && (
                      <g>
                        <circle cx="200" cy="120" r="85" fill="none" stroke="var(--border-color)" strokeWidth="2" />
                        <circle cx="200" cy="120" r="5" fill="#ef4444" />
                        <text x="205" y="112" fill="var(--text-primary)" fontSize="12" fontWeight="bold">O</text>

                        {/* Equal Chords AB and CD */}
                        <line x1="130" y1="65" x2="270" y2="65" stroke="#3b82f6" strokeWidth="3.5" />
                        <text x="95" y="70" fill="#3b82f6" fontSize="12" fontWeight="bold">AB</text>
                        <line x1="130" y1="175" x2="270" y2="175" stroke="#10b981" strokeWidth="3.5" />
                        <text x="95" y="180" fill="#10b981" fontSize="12" fontWeight="bold">CD</text>

                        {/* Step >= 1: Distances OL and OM */}
                        {theoremAnimStep >= 1 && (
                          <>
                            <line x1="200" y1="120" x2="200" y2="65" stroke="#f59e0b" strokeWidth="3" />
                            <line x1="200" y1="120" x2="200" y2="175" stroke="#f59e0b" strokeWidth="3" />
                            <rect x="200" y="65" width="12" height="12" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" />
                            <rect x="200" y="163" width="12" height="12" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" />
                            <text x="205" y="60" fill="#f59e0b" fontSize="11" fontWeight="bold">L</text>
                            <text x="205" y="190" fill="#f59e0b" fontSize="11" fontWeight="bold">M</text>
                          </>
                        )}

                        {/* Step >= 2 & 3: Half-Segments and Radii */}
                        {theoremAnimStep >= 2 && (
                          <>
                            <line x1="200" y1="120" x2="130" y2="65" stroke="#3b82f6" strokeWidth="1.8" />
                            <line x1="200" y1="120" x2="130" y2="175" stroke="#10b981" strokeWidth="1.8" />
                          </>
                        )}

                        {theoremAnimStep >= 4 && (
                          <text x="110" y="225" fill="#059669" fontSize="12" fontWeight="bold">🏆 ΔOLA ≅ ΔOMC (RHS) ➔ Distance OL = OM</text>
                        )}
                      </g>
                    )}

                    {/* THEOREM 7: CHORDS EQUIDISTANT FROM CENTRE ARE EQUAL */}
                    {th.id === 7 && (
                      <g>
                        <circle cx="200" cy="120" r="85" fill="none" stroke="var(--border-color)" strokeWidth="2" />
                        <circle cx="200" cy="120" r="5" fill="#ef4444" />
                        <text x="205" y="112" fill="var(--text-primary)" fontSize="12" fontWeight="bold">O</text>

                        {/* Equal Distances OL = OM */}
                        <line x1="200" y1="120" x2="200" y2="65" stroke="#f59e0b" strokeWidth="3.5" />
                        <line x1="200" y1="120" x2="200" y2="175" stroke="#f59e0b" strokeWidth="3.5" />
                        <text x="205" y="95" fill="#f59e0b" fontSize="11" fontWeight="bold">d</text>
                        <text x="205" y="150" fill="#f59e0b" fontSize="11" fontWeight="bold">d</text>

                        {/* Step >= 1: Chords */}
                        {theoremAnimStep >= 1 && (
                          <>
                            <line x1="130" y1="65" x2="270" y2="65" stroke="#3b82f6" strokeWidth="3" />
                            <line x1="130" y1="175" x2="270" y2="175" stroke="#10b981" strokeWidth="3" />
                          </>
                        )}

                        {/* Step >= 2: Radii */}
                        {theoremAnimStep >= 2 && (
                          <>
                            <line x1="200" y1="120" x2="130" y2="65" stroke="#3b82f6" strokeWidth="1.8" />
                            <line x1="200" y1="120" x2="130" y2="175" stroke="#10b981" strokeWidth="1.8" />
                          </>
                        )}

                        {theoremAnimStep >= 4 && (
                          <text x="100" y="225" fill="#059669" fontSize="12" fontWeight="bold">🏆 AL = CM ➔ 2AL = 2CM ➔ Chord AB = CD</text>
                        )}
                      </g>
                    )}

                    {/* THEOREM 8: INSCRIBED ANGLE IS HALF CENTRAL ANGLE */}
                    {th.id === 8 && (
                      <g>
                        <circle cx="200" cy="120" r="85" fill="none" stroke="var(--border-color)" strokeWidth="2" />
                        <circle cx="200" cy="120" r="5" fill="#ef4444" />
                        <text x="208" y="125" fill="#ef4444" fontSize="12" fontWeight="bold">O</text>

                        {/* Points A, B, P */}
                        <circle cx="130" cy="175" r="5" fill="#3b82f6" />
                        <text x="115" y="185" fill="#3b82f6" fontSize="12" fontWeight="bold">A</text>
                        <circle cx="270" cy="175" r="5" fill="#3b82f6" />
                        <text x="280" y="185" fill="#3b82f6" fontSize="12" fontWeight="bold">B</text>
                        <circle cx="200" cy="35" r="5" fill="#10b981" />
                        <text x="195" y="25" fill="#10b981" fontSize="12" fontWeight="bold">P</text>

                        {/* Inscribed Angle APB */}
                        <line x1="130" y1="175" x2="200" y2="35" stroke="#10b981" strokeWidth="2.5" />
                        <line x1="270" y1="175" x2="200" y2="35" stroke="#10b981" strokeWidth="2.5" />

                        {/* Central Angle AOB */}
                        <line x1="200" y1="120" x2="130" y2="175" stroke="#3b82f6" strokeWidth="2.5" />
                        <line x1="200" y1="120" x2="270" y2="175" stroke="#3b82f6" strokeWidth="2.5" />

                        {/* Step >= 1: Diameter line POQ */}
                        {theoremAnimStep >= 1 && (
                          <line x1="200" y1="35" x2="200" y2="205" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 3" />
                        )}

                        {/* Step >= 3 & 4: Angle Arcs */}
                        {theoremAnimStep >= 3 && (
                          <>
                            <path d="M 185,55 A 25 25 0 0 0 215,55" fill="none" stroke="#10b981" strokeWidth="3" />
                            <text x="195" y="68" fill="#10b981" fontSize="11" fontWeight="bold">x</text>
                            <path d="M 175,140 A 35 35 0 0 0 225,140" fill="none" stroke="#3b82f6" strokeWidth="3" />
                            <text x="192" y="155" fill="#3b82f6" fontSize="11" fontWeight="bold">2x</text>
                          </>
                        )}

                        {theoremAnimStep >= 4 && (
                          <text x="110" y="228" fill="#059669" fontSize="12" fontWeight="bold">🏆 Central Angle ∠AOB = 2 × Inscribed ∠APB</text>
                        )}
                      </g>
                    )}

                    {/* THEOREM 9: ANGLES IN SAME SEGMENT ARE EQUAL */}
                    {th.id === 9 && (
                      <g>
                        <circle cx="200" cy="120" r="85" fill="none" stroke="var(--border-color)" strokeWidth="2" />
                        
                        {/* Base chord AB */}
                        <line x1="130" y1="175" x2="270" y2="175" stroke="#f59e0b" strokeWidth="3.5" />
                        <text x="115" y="185" fill="#f59e0b" fontSize="12" fontWeight="bold">A</text>
                        <text x="275" y="185" fill="#f59e0b" fontSize="12" fontWeight="bold">B</text>

                        {/* Angle 1 from P */}
                        <circle cx="150" cy="45" r="5" fill="#3b82f6" />
                        <text x="145" y="35" fill="#3b82f6" fontSize="12" fontWeight="bold">P</text>
                        <line x1="130" y1="175" x2="150" y2="45" stroke="#3b82f6" strokeWidth="2" />
                        <line x1="270" y1="175" x2="150" y2="45" stroke="#3b82f6" strokeWidth="2" />

                        {/* Angle 2 from Q */}
                        <circle cx="250" cy="45" r="5" fill="#10b981" />
                        <text x="250" y="35" fill="#10b981" fontSize="12" fontWeight="bold">Q</text>
                        <line x1="130" y1="175" x2="250" y2="45" stroke="#10b981" strokeWidth="2" />
                        <line x1="270" y1="175" x2="250" y2="45" stroke="#10b981" strokeWidth="2" />

                        {/* Step >= 2: Centre Links */}
                        {theoremAnimStep >= 2 && (
                          <>
                            <circle cx="200" cy="120" r="4" fill="#ef4444" />
                            <line x1="200" y1="120" x2="130" y2="175" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
                            <line x1="200" y1="120" x2="270" y2="175" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
                          </>
                        )}

                        {theoremAnimStep >= 4 && (
                          <text x="110" y="225" fill="#059669" fontSize="12" fontWeight="bold">🏆 ∠APB = ½∠AOB = ∠AQB (Same Segment)</text>
                        )}
                      </g>
                    )}

                    {/* THEOREM 10: CONCYCLIC POINTS */}
                    {th.id === 10 && (
                      <g>
                        {theoremAnimStep >= 1 && (
                          <circle cx="200" cy="120" r="85" fill="rgba(5, 150, 105, 0.12)" stroke="#059669" strokeWidth="3" />
                        )}
                        <line x1="130" y1="175" x2="270" y2="175" stroke="#3b82f6" strokeWidth="3" />
                        <text x="115" y="185" fill="#3b82f6" fontSize="12" fontWeight="bold">A</text>
                        <text x="275" y="185" fill="#3b82f6" fontSize="12" fontWeight="bold">B</text>
                        
                        <circle cx="150" cy="45" r="5" fill="#3b82f6" />
                        <text x="145" y="35" fill="#3b82f6" fontSize="12" fontWeight="bold">C</text>
                        <line x1="130" y1="175" x2="150" y2="45" stroke="#3b82f6" strokeWidth="2" />
                        <line x1="270" y1="175" x2="150" y2="45" stroke="#3b82f6" strokeWidth="2" />

                        <circle cx="250" cy="45" r="5" fill="#10b981" />
                        <text x="250" y="35" fill="#10b981" fontSize="12" fontWeight="bold">D</text>
                        <line x1="130" y1="175" x2="250" y2="45" stroke="#10b981" strokeWidth="2" />
                        <line x1="270" y1="175" x2="250" y2="45" stroke="#10b981" strokeWidth="2" />

                        {theoremAnimStep >= 4 && (
                          <text x="100" y="225" fill="#059669" fontSize="12" fontWeight="bold">🏆 Points A, B, C, D are strictly Concyclic!</text>
                        )}
                      </g>
                    )}

                    {/* THEOREM 11: CYCLIC QUADRILATERAL OPPOSITE ANGLES */}
                    {th.id === 11 && (
                      <g>
                        <circle cx="200" cy="120" r="85" fill="none" stroke="var(--border-color)" strokeWidth="2" />
                        <circle cx="200" cy="120" r="5" fill="#ef4444" />
                        <text x="205" y="112" fill="var(--text-primary)" fontSize="11" fontWeight="bold">O</text>

                        {/* Cyclic Quadrilateral ABCD */}
                        <polygon points="140,55 260,60 270,170 130,165" fill="rgba(5, 150, 105, 0.15)" stroke="#059669" strokeWidth="3" />
                        <text x="130" y="45" fill="var(--text-primary)" fontSize="12" fontWeight="bold">A</text>
                        <text x="270" y="55" fill="var(--text-primary)" fontSize="12" fontWeight="bold">B</text>
                        <text x="280" y="180" fill="var(--text-primary)" fontSize="12" fontWeight="bold">C</text>
                        <text x="115" y="175" fill="var(--text-primary)" fontSize="12" fontWeight="bold">D</text>

                        {/* Step >= 2: Radii to B and D */}
                        {theoremAnimStep >= 2 && (
                          <>
                            <line x1="200" y1="120" x2="260" y2="60" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
                            <line x1="200" y1="120" x2="130" y2="165" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
                          </>
                        )}

                        {theoremAnimStep >= 4 && (
                          <text x="90" y="225" fill="#059669" fontSize="12" fontWeight="bold">🏆 2∠A + 2∠C = 360° ➔ ∠A + ∠C = 180°</text>
                        )}
                      </g>
                    )}

                    {/* THEOREM 12: CONVERSE OF CYCLIC QUADRILATERAL */}
                    {th.id === 12 && (
                      <g>
                        <polygon points="140,55 260,60 270,170 130,165" fill="rgba(5, 150, 105, 0.15)" stroke="#059669" strokeWidth="3" />
                        <text x="130" y="45" fill="var(--text-primary)" fontSize="12" fontWeight="bold">A</text>
                        <text x="270" y="55" fill="var(--text-primary)" fontSize="12" fontWeight="bold">B</text>
                        <text x="280" y="180" fill="var(--text-primary)" fontSize="12" fontWeight="bold">C</text>
                        <text x="115" y="175" fill="var(--text-primary)" fontSize="12" fontWeight="bold">D</text>

                        {theoremAnimStep >= 1 && (
                          <circle cx="200" cy="120" r="85" fill="none" stroke="#059669" strokeWidth="3" strokeDasharray="4 3" />
                        )}

                        {theoremAnimStep >= 4 && (
                          <text x="100" y="225" fill="#059669" fontSize="12" fontWeight="bold">🏆 ∠B + ∠D = 180° ➔ Quadrilateral is Cyclic!</text>
                        )}
                      </g>
                    )}
                  </svg>
                </div>

                {/* Step-by-Step Proof Table with Active Step Highlight */}
                <h3 style={{ fontSize: '0.92rem', fontWeight: 800, margin: '0 0 10px', color: 'var(--text-primary)' }}>
                  📖 Step-by-Step Animated Mathematical Proof:
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                  {th.proofSteps.map((s, sIdx) => {
                    const isStepActive = sIdx === theoremAnimStep;
                    return (
                      <div
                        key={sIdx}
                        onClick={() => setTheoremAnimStep(sIdx)}
                        style={{
                          background: isStepActive ? 'rgba(5, 150, 105, 0.14)' : 'var(--bg-secondary)',
                          borderLeft: isStepActive ? '5px solid #059669' : '3px solid var(--border-color)',
                          padding: '10px 14px',
                          borderRadius: '0 10px 10px 0',
                          fontSize: '0.82rem',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          transform: isStepActive ? 'translateX(4px)' : 'none'
                        }}
                      >
                        <div style={{ fontWeight: 800, color: isStepActive ? '#059669' : 'var(--text-primary)', marginBottom: '3px', display: 'flex', justifyContent: 'space-between' }}>
                          <span>{s.step}</span>
                          {isStepActive && <span style={{ fontSize: '0.7rem', color: '#059669', background: 'rgba(5,150,105,0.2)', padding: '2px 6px', borderRadius: '4px' }}>Active Step</span>}
                        </div>
                        <div style={{ color: 'var(--text-primary)', marginBottom: '4px', lineHeight: 1.4 }}>
                          {s.statement}
                        </div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                          <strong>Reason:</strong> {s.reason}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* TAB 3: 7 AXIOMS DECK */}
      {activeTab === 'axioms' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
          {[
            {
              num: 1,
              title: 'Things equal to the same thing are equal to one another',
              formula: 'If A = C and B = C ➔ A = B',
              example: 'If weight of box A = 5 kg and box B = 5 kg, then Box A = Box B.'
            },
            {
              num: 2,
              title: 'If equals are added to equals, the wholes are equal',
              formula: 'If A = B ➔ A + C = B + C',
              example: 'If 5 = 5, then 5 + 3 = 5 + 3 (8 = 8).'
            },
            {
              num: 3,
              title: 'If equals are subtracted from equals, the remainders are equal',
              formula: 'If A = B ➔ A - C = B - C',
              example: 'If 10 = 10, then 10 - 4 = 10 - 4 (6 = 6).'
            },
            {
              num: 4,
              title: 'Things which coincide with one another are equal to one another',
              formula: 'Geometric Superposition Principle',
              example: 'If two line segments completely overlap end-to-end, their lengths are identical.'
            },
            {
              num: 5,
              title: 'The whole is greater than the part',
              formula: 'Whole > Part (If C is inside A, then A > C)',
              example: 'A whole pizza is always larger than any individual slice of that pizza.'
            },
            {
              num: 6,
              title: 'Things which are double of the same things are equal to one another',
              formula: 'If A = B ➔ 2A = 2B',
              example: 'If x = y, then 2x = 2y.'
            },
            {
              num: 7,
              title: 'Things which are halves of the same things are equal to one another',
              formula: 'If A = B ➔ A/2 = B/2',
              example: 'If x = y, then x/2 = y/2.'
            }
          ].map((axiom) => (
            <div
              key={axiom.num}
              className="glass-card"
              style={{
                padding: '16px 18px',
                borderRadius: '14px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-card)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 900, color: '#059669' }}>
                  Axiom {axiom.num}
                </span>
                <span style={{ fontSize: '0.72rem', background: 'rgba(5, 150, 105, 0.1)', color: '#059669', padding: '2px 8px', borderRadius: '6px', fontWeight: 800 }}>
                  {axiom.formula}
                </span>
              </div>
              <h3 style={{ margin: '0 0 6px', fontSize: '0.94rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                "{axiom.title}"
              </h3>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                💡 <strong>Example:</strong> {axiom.example}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: INTERACTIVE QUIZ & KNOWLEDGE CHECK */}
      {activeTab === 'quiz' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
          {quizQuestions.map((q, idx) => {
            const userSelected = selectedQuizAnswers[q.id];
            const isAnswered = userSelected !== undefined;
            const isCorrect = userSelected === q.correct;

            return (
              <div
                key={q.id}
                className="glass-card"
                style={{
                  padding: '18px 20px',
                  borderRadius: '16px',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-card)'
                }}
              >
                <div style={{ fontSize: '0.78rem', fontWeight: 900, color: '#059669', marginBottom: '6px' }}>
                  Question {idx + 1} of {quizQuestions.length}
                </div>
                <h4 style={{ margin: '0 0 12px', fontSize: '0.94rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.4 }}>
                  {q.q}
                </h4>

                {/* Option Buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px', marginBottom: '10px' }}>
                  {q.options.map((opt, optIdx) => {
                    const isOptionSelected = userSelected === optIdx;
                    let btnBg = 'var(--bg-secondary)';
                    let btnBorder = '1px solid var(--border-color)';
                    let btnColor = 'var(--text-primary)';

                    if (isAnswered) {
                      if (optIdx === q.correct) {
                        btnBg = 'rgba(16, 185, 129, 0.18)';
                        btnBorder = '2px solid #10b981';
                        btnColor = '#059669';
                      } else if (isOptionSelected) {
                        btnBg = 'rgba(239, 68, 68, 0.18)';
                        btnBorder = '2px solid #ef4444';
                        btnColor = '#dc2626';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={isAnswered}
                        onClick={() => {
                          setSelectedQuizAnswers((prev) => ({ ...prev, [q.id]: optIdx }));
                        }}
                        style={{
                          padding: '10px 14px',
                          borderRadius: '10px',
                          background: btnBg,
                          border: btnBorder,
                          color: btnColor,
                          fontSize: '0.84rem',
                          fontWeight: 700,
                          textAlign: 'left',
                          cursor: isAnswered ? 'default' : 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <span style={{ marginRight: '8px', fontWeight: 900 }}>{String.fromCharCode(65 + optIdx)}.</span> {opt}
                      </button>
                    );
                  })}
                </div>

                {/* Feedback note */}
                {isAnswered && (
                  <div style={{
                    padding: '10px 14px',
                    borderRadius: '10px',
                    background: isCorrect ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    fontSize: '0.8rem',
                    color: isCorrect ? '#065f46' : '#991b1b',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px'
                  }}>
                    <CheckCircle2 size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong>{isCorrect ? 'Correct! 🎉' : 'Incorrect.'}</strong> {q.explanation}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
