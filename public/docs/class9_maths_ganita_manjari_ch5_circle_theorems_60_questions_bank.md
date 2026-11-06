# 📐 NCERT Class 9 Mathematics (Ganita Manjari Part I)
# Chapter 5: "I’m Up and Down, and Round and Round" (Circle Geometry)
## 🎯 Complete 60-Question Bank (5 Questions per Theorem: Numerical & Theoretical)

---

## 📑 Table of Contents
1. [Theorem 1: Unique Circle Through Three Non-Collinear Points](#theorem-1-unique-circle-through-three-non-collinear-points)
2. [Theorem 2: Equal Chords Subtend Equal Angles at Centre](#theorem-2-equal-chords-subtend-equal-angles-at-centre)
3. [Theorem 3: Chords Subtending Equal Angles at Centre are Equal](#theorem-3-chords-subtending-equal-angles-at-centre-are-equal)
4. [Theorem 4: Line from Centre to Midpoint of Chord is Perpendicular](#theorem-4-line-from-centre-to-midpoint-of-chord-is-perpendicular)
5. [Theorem 5: Perpendicular from Centre to Chord Bisects the Chord](#theorem-5-perpendicular-from-centre-to-chord-bisects-the-chord)
6. [Theorem 6: Equal Chords are Equidistant from the Centre](#theorem-6-equal-chords-are-equidistant-from-the-centre)
7. [Theorem 7: Chords Equidistant from Centre are Equal in Length](#theorem-7-chords-equidistant-from-centre-are-equal-in-length)
8. [Theorem 8: Longer Chords are Closer to the Centre](#theorem-8-longer-chords-are-closer-to-the-centre)
9. [Theorem 9: Angle Subtended by Arc at Centre is Double that at Any Point on Circle](#theorem-9-angle-subtended-by-arc-at-centre-is-double)
10. [Theorem 10: Equal Angles on Same Side of Segment Implies Concyclicity](#theorem-10-equal-angles-on-same-side-implies-concyclicity)
11. [Theorem 11: Opposite Angles of a Cyclic Quadrilateral Add Up to 180°](#theorem-11-opposite-angles-of-a-cyclic-quadrilateral-are-supplementary)
12. [Theorem 12: Supplementary Opposite Angles Implies Cyclic Quadrilateral](#theorem-12-supplementary-opposite-angles-implies-cyclic)

---

## Theorem 1: Unique Circle Through Three Non-Collinear Points
> **Statement:** *There is one and only one circle passing through three given non-collinear points.*

#### **Q1.1 (Theoretical - Foundation)**
**Question:** Why can no circle pass through three distinct collinear points $P, Q,$ and $R$? Explain using the concept of perpendicular bisectors.  
**Solution:**  
The center of any circle passing through $P$ and $Q$ must lie on the perpendicular bisector of segment $PQ$ ($L_1$). Similarly, the center of any circle passing through $Q$ and $R$ must lie on the perpendicular bisector of segment $QR$ ($L_2$). Since $P, Q, R$ lie on the same straight line, the perpendicular lines $L_1$ and $L_2$ are parallel and never intersect. Therefore, there is no common center, and no circle can pass through three collinear points.

#### **Q1.2 (Numerical - Circumradius Calculation)**
**Question:** In $\Delta ABC$, $\angle B = 90^\circ$, $AB = 6\text{ cm}$, and $BC = 8\text{ cm}$. Find the radius and area of the unique circle passing through vertices $A, B,$ and $C$.  
**Solution:**  
By Pythagoras theorem, the hypotenuse $AC = \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = 10\text{ cm}$.  
In a right-angled triangle, the circumcentre lies at the midpoint of the hypotenuse, so the circumradius $R = \frac{AC}{2} = \frac{10}{2} = \mathbf{5\text{ cm}}$.  
Area of the circumcircle $= \pi R^2 = \pi \times 5^2 = \mathbf{25\pi\text{ cm}^2 \approx 78.57\text{ cm}^2}$.

#### **Q1.3 (Theoretical - Construction Logic)**
**Question:** Describe the geometric construction steps to find the center of a circular coin or broken bangle that has no visible center mark.  
**Solution:**  
1. Choose any three distinct points $A, B, C$ on the circular boundary.
2. Draw chords $AB$ and $BC$.
3. Construct the perpendicular bisectors of chord $AB$ and chord $BC$ using a compass.
4. The unique point of intersection $O$ of these two perpendicular bisectors is the exact center of the circle.

#### **Q1.4 (Numerical - Equilateral Triangle Circumradius)**
**Question:** An equilateral triangle $PQR$ of side length $12\text{ cm}$ is inscribed in a circle. Calculate the radius of this unique circumcircle.  
**Solution:**  
For an equilateral triangle of side $a$, altitude $h = \frac{\sqrt{3}}{2}a = \frac{\sqrt{3}}{2} \times 12 = 6\sqrt{3}\text{ cm}$.  
The circumcentre coincides with the centroid, which divides the altitude in a $2:1$ ratio.  
Radius $R = \frac{2}{3}h = \frac{2}{3} \times 6\sqrt{3} = \mathbf{4\sqrt{3}\text{ cm} \approx 6.928\text{ cm}}$.

#### **Q1.5 (Theoretical - Combinatorial Points)**
**Question:** Given 5 points in a plane such that no three points are collinear. How many distinct circles can be uniquely drawn using sets of 3 points chosen from these 5 points?  
**Solution:**  
By Theorem 1, any 3 non-collinear points uniquely define 1 circle.  
Total distinct circles $= \binom{5}{3} = \frac{5 \times 4 \times 3}{3 \times 2 \times 1} = \mathbf{10\text{ circles}}$.

---

## Theorem 2: Equal Chords Subtend Equal Angles at Centre
> **Statement:** *Equal chords of a circle subtend equal angles at the centre.*

#### **Q2.1 (Theoretical - Proof Breakdown)**
**Question:** State the congruence criterion used to prove Theorem 2 and write down the step-by-step proof for two chords $AB = CD$ in a circle with center $O$.  
**Solution:**  
In $\Delta AOB$ and $\Delta COD$:
1. $OA = OC$ (Radii of the same circle)
2. $OB = OD$ (Radii of the same circle)
3. $AB = CD$ (Given equal chords)  
By **SSS Congruence Criterion**, $\Delta AOB \cong \Delta COD$.  
Hence, $\angle AOB = \angle COD$ (CPCTC — Corresponding Parts of Congruent Triangles are Congruent).

#### **Q2.2 (Numerical - Central Angle Application)**
**Question:** In a circle of radius $10\text{ cm}$, two equal chords $AB$ and $CD$ each subtend an angle of $70^\circ$ at the center $O$. If a third chord $EF$ is equal in length to $AB$, find the measure of $\angle EOF$ and the reflex angle $\angle EOF$.  
**Solution:**  
By Theorem 2, equal chords subtend equal angles at the centre.  
Since $EF = AB = CD$, $\angle EOF = \mathbf{70^\circ}$.  
Reflex $\angle EOF = 360^\circ - 70^\circ = \mathbf{290^\circ}$.

#### **Q2.3 (Numerical - Regular Polygon Chords)**
**Question:** A regular hexagon $ABCDEF$ is inscribed in a circle with center $O$. What is the angle subtended by each chord-side at the center $O$?  
**Solution:**  
A regular hexagon has 6 equal sides (chords).  
By Theorem 2, all 6 equal chords subtend equal angles at the center.  
Total central angle $= 360^\circ$.  
Angle subtended by each chord $= \frac{360^\circ}{6} = \mathbf{60^\circ}$.

#### **Q2.4 (Theoretical - Concentric Circles Case)**
**Question:** Two concentric circles have center $O$. A line intersects the outer circle at $A, D$ and the inner circle at $B, C$. Show why $\angle AOB = \angle COD$.  
**Solution:**  
In the outer circle, $OA = OD$ (outer radius). In the inner circle, $OB = OC$ (inner radius).  
Perpendicular from $O$ to line $AD$ bisects both $AD$ and $BC$, giving $AB = CD$.  
In $\Delta AOB$ and $\Delta DOC$, $OA = OD$, $OB = OC$, and $AB = CD$.  
By SSS congruence, $\Delta AOB \cong \Delta DOC \implies \mathbf{\angle AOB = \angle COD}$.

#### **Q2.5 (Numerical - Chord Triangle Calculation)**
**Question:** In a circle with center $O$, chord $AB = \text{radius } r$. What is the measure of the angle subtended by $AB$ at the center?  
**Solution:**  
In $\Delta AOB$, $OA = r$, $OB = r$, and $AB = r$.  
Thus, $\Delta AOB$ is an equilateral triangle.  
Therefore, $\angle AOB = \mathbf{60^\circ}$.

---

## Theorem 3: Chords Subtending Equal Angles at Centre are Equal
> **Statement:** *Chords of a circle that subtend equal angles at the centre are equal in length (Converse of Theorem 2).*

#### **Q3.1 (Theoretical - Converse Congruence Proof)**
**Question:** Prove that if $\angle AOB = \angle COD$ in a circle with center $O$, then chord $AB = \text{chord } CD$. Which congruence rule is applied?  
**Solution:**  
In $\Delta AOB$ and $\Delta COD$:
1. $OA = OC$ (Radii of the same circle)
2. $\angle AOB = \angle COD$ (Given)
3. $OB = OD$ (Radii of the same circle)  
By **SAS Congruence Criterion**, $\Delta AOB \cong \Delta COD$.  
Therefore, $AB = CD$ (by CPCTC).

#### **Q3.2 (Numerical - Sector Perimeter)**
**Question:** Two chords $PQ$ and $RS$ in a circle of radius $14\text{ cm}$ subtend angles of $90^\circ$ and $90^\circ$ at the center $O$ respectively. Find the lengths of chords $PQ$ and $RS$.  
**Solution:**  
In $\Delta POQ$, $\angle POQ = 90^\circ$, $OP = OQ = 14\text{ cm}$.  
By Pythagoras theorem, $PQ = \sqrt{14^2 + 14^2} = 14\sqrt{2}\text{ cm} \approx \mathbf{19.8\text{ cm}}$.  
Since $\angle ROS = 90^\circ = \angle POQ$, by Theorem 3, $RS = PQ = \mathbf{14\sqrt{2}\text{ cm}}$.

#### **Q3.3 (Numerical - Angle Algebra)**
**Question:** Chords $AB$ and $CD$ subtend angles $(3x + 15)^\circ$ and $(5x - 25)^\circ$ at the center of a circle. If the two chords are known to be equal, find the value of $x$ and the central angle.  
**Solution:**  
Since $AB = CD$, by Theorem 2/3, their central angles are equal:  
$3x + 15 = 5x - 25 \implies 2x = 40 \implies \mathbf{x = 20}$.  
Central Angle $= 3(20) + 15 = \mathbf{75^\circ}$.

#### **Q3.4 (Theoretical - Intersecting Diameters)**
**Question:** If two diameters $AB$ and $CD$ of a circle intersect at center $O$, prove that chords $AC, BD, AD, BC$ form a rectangle.  
**Solution:**  
Since $AB$ and $CD$ are straight line diameters, $\angle AOC = \angle BOD$ (vertically opposite angles).  
By Theorem 3, chord $AC = \text{chord } BD$.  
Similarly, $\angle AOD = \angle BOC \implies \text{chord } AD = \text{chord } BC$.  
Opposite sides are equal, making $ADBC$ a parallelogram. Since diagonals $AB = CD$ (both diameters), $ADBC$ is a **rectangle**.

#### **Q3.5 (Numerical - Segment Area Application)**
**Question:** Chords $AB$ and $CD$ in a circle of radius $6\text{ cm}$ subtend $120^\circ$ each at center $O$. Calculate the exact length of chord $AB$.  
**Solution:**  
Draw perpendicular $OM \perp AB$. In right $\Delta OMA$, $\angle AOM = 60^\circ$, $OA = 6\text{ cm}$.  
$AM = OA \sin 60^\circ = 6 \times \frac{\sqrt{3}}{2} = 3\sqrt{3}\text{ cm}$.  
$AB = 2 \times AM = 2 \times 3\sqrt{3} = \mathbf{6\sqrt{3}\text{ cm} \approx 10.392\text{ cm}}$.

---

## Theorem 4: Line from Centre to Midpoint of Chord is Perpendicular
> **Statement:** *The line joining the centre of a circle and the midpoint of a chord of the circle is perpendicular to the chord.*

#### **Q4.1 (Theoretical - Isosceles Triangle Median Property)**
**Question:** Let $M$ be the midpoint of chord $AB$ in a circle with center $O$. Prove that $OM \perp AB$.  
**Solution:**  
In $\Delta OMA$ and $\Delta OMB$:
1. $OA = OB$ (Radii)
2. $AM = MB$ ($M$ is midpoint)
3. $OM = OM$ (Common side)  
By SSS congruence, $\Delta OMA \cong \Delta OMB \implies \angle OMA = \angle OMB$.  
Since $\angle OMA + \angle OMB = 180^\circ$ (Linear pair), $\angle OMA = \angle OMB = \mathbf{90^\circ}$.  
Thus, $OM \perp AB$.

#### **Q4.2 (Numerical - Distance from Centre)**
**Question:** A chord $AB$ of length $16\text{ cm}$ is drawn in a circle of radius $10\text{ cm}$. Line segment $OM$ connects the center $O$ to the midpoint $M$ of $AB$. Find the length of $OM$.  
**Solution:**  
Since $M$ is the midpoint, $AM = \frac{16}{2} = 8\text{ cm}$.  
By Theorem 4, $\angle OMA = 90^\circ$.  
In right $\Delta OMA$: $OM = \sqrt{OA^2 - AM^2} = \sqrt{10^2 - 8^2} = \sqrt{100 - 64} = \sqrt{36} = \mathbf{6\text{ cm}}$.

#### **Q4.3 (Numerical - Finding Circle Radius)**
**Question:** The midpoint $M$ of a chord of length $24\text{ cm}$ is at a distance of $5\text{ cm}$ from the center $O$. Find the radius and diameter of the circle.  
**Solution:**  
$AM = 12\text{ cm}$, $OM = 5\text{ cm}$.  
Radius $r = \sqrt{OM^2 + AM^2} = \sqrt{5^2 + 12^2} = \sqrt{25 + 144} = \sqrt{169} = \mathbf{13\text{ cm}}$.  
Diameter $= 2 \times 13 = \mathbf{26\text{ cm}}$.

#### **Q4.4 (Theoretical - Parallel Chords Midpoint Locus)**
**Question:** Prove that the line joining the midpoints of two parallel chords of a circle passes through the center of the circle.  
**Solution:**  
Let $M$ and $N$ be midpoints of parallel chords $AB$ and $CD$. By Theorem 4, $OM \perp AB$ and $ON \perp CD$. Since $AB \parallel CD$, the line perpendicular to $AB$ at $M$ is also perpendicular to $CD$. Since through $O$ only one line can be perpendicular to both parallel lines, $M, O, N$ are collinear. Hence, line $MN$ passes through the center $O$.

#### **Q4.5 (Numerical - Segment Height)**
**Question:** A circular arch has a span (chord) of $48\text{ m}$ and its center is $7\text{ m}$ below the chord's midpoint. Find the radius of the circle forming the arch.  
**Solution:**  
Half-span $AM = 24\text{ m}$, distance $OM = 7\text{ m}$.  
Radius $R = \sqrt{24^2 + 7^2} = \sqrt{576 + 49} = \sqrt{625} = \mathbf{25\text{ m}}$.

---

## Theorem 5: Perpendicular from Centre to Chord Bisects the Chord
> **Statement:** *The perpendicular from the centre of a circle to a chord of the circle bisects the chord (Converse of Theorem 4).*

#### **Q5.1 (Theoretical - RHS Congruence Proof)**
**Question:** If $OL \perp AB$ where $O$ is the center and $AB$ is a chord, prove that $AL = LB$.  
**Solution:**  
In right-angled triangles $\Delta OLA$ and $\Delta OLB$:
1. $\angle OLA = \angle OLB = 90^\circ$ (Given $OL \perp AB$)
2. Hypotenuse $OA = \text{Hypotenuse } OB$ (Radii)
3. $OL = OL$ (Common side)  
By **RHS Congruence Criterion**, $\Delta OLA \cong \Delta OLB$.  
Therefore, $AL = LB$ (by CPCTC), which means $OL$ bisects chord $AB$.

#### **Q5.2 (Numerical - Chord Length from Radius & Distance)**
**Question:** (From PDF Ex 5.5) Find the length of a chord of a circle where the radius is $7\text{ cm}$ and perpendicular distance from the center is $6\text{ cm}$.  
**Solution:**  
Formula: $\text{Chord Length } L = 2\sqrt{r^2 - d^2}$.  
$L = 2\sqrt{7^2 - 6^2} = 2\sqrt{49 - 36} = \mathbf{2\sqrt{13}\text{ cm} \approx 7.211\text{ cm}}$.

#### **Q5.3 (Numerical - Two Parallel Chords on Opposite Sides)**
**Question:** In a circle of radius $5\text{ cm}$, two parallel chords $AB$ and $CD$ have lengths $6\text{ cm}$ and $8\text{ cm}$ respectively and lie on opposite sides of the center. Find the distance between the chords.  
**Solution:**  
Distance of $AB$ from center: $d_1 = \sqrt{5^2 - 3^2} = 4\text{ cm}$.  
Distance of $CD$ from center: $d_2 = \sqrt{5^2 - 4^2} = 3\text{ cm}$.  
Since they are on opposite sides of the center, total distance $= d_1 + d_2 = 4 + 3 = \mathbf{7\text{ cm}}$.

#### **Q5.4 (Numerical - Two Parallel Chords on Same Side)**
**Question:** In the same circle ($r = 5\text{ cm}$), if chords of length $6\text{ cm}$ and $8\text{ cm}$ lie on the **same side** of the center, find the distance between them.  
**Solution:**  
Total distance $= d_1 - d_2 = 4 - 3 = \mathbf{1\text{ cm}}$.

#### **Q5.5 (Theoretical - Concentric Circles Intercept Property)**
**Question:** A straight line cuts two concentric circles of center $O$ at points $A, B, C, D$ in order. Prove that $AB = CD$.  
**Solution:**  
Draw perpendicular $OM \perp AD$.  
By Theorem 5, $OM$ bisects outer chord $AD \implies AM = MD$.  
Similarly, $OM$ bisects inner chord $BC \implies BM = MC$.  
Subtracting: $AM - BM = MD - MC \implies \mathbf{AB = CD}$.

---

## Theorem 6: Equal Chords are Equidistant from the Centre
> **Statement:** *Chords of a circle having the same length are all at the same distance from the centre of the circle.*

#### **Q6.1 (Theoretical - Baudhāyana-Pythagoras Proof)**
**Question:** (From PDF Ex 5.4 Q1) Use the Baudhāyana–Pythagoras theorem to show why equal chords must be equidistant from the center.  
**Solution:**  
Let chords $AB = CD = 2a$. Radius $= r$.  
By Theorem 5, half-lengths are $a$.  
Distance of $AB$ from center: $d_1 = \sqrt{r^2 - a^2}$.  
Distance of $CD$ from center: $d_2 = \sqrt{r^2 - a^2}$.  
Since $r$ and $a$ are identical for both chords, $d_1 = d_2$. Hence, equal chords are equidistant from the center.

#### **Q6.2 (Numerical - Distance Equivalence)**
**Question:** Two chords $AB$ and $CD$ of length $18\text{ cm}$ each are drawn in a circle of radius $15\text{ cm}$. Find the perpendicular distance of each chord from the center.  
**Solution:**  
Half-chord $a = 9\text{ cm}$, radius $r = 15\text{ cm}$.  
Distance $d = \sqrt{15^2 - 9^2} = \sqrt{225 - 81} = \sqrt{144} = \mathbf{12\text{ cm}}$.

#### **Q6.3 (Numerical - Intersecting Equal Chords Angle)**
**Question:** Two equal chords $AB$ and $CD$ intersect at point $X$ inside a circle of center $O$. If $OM \perp AB$ and $ON \perp CD$, prove that $OX$ bisects $\angle MXN$.  
**Solution:**  
By Theorem 6, $OM = ON$. In right $\Delta OMX$ and $\Delta ONX$:
$OM = ON$, Hypotenuse $OX = OX$, $\angle OMX = \angle ONX = 90^\circ$.  
By RHS congruence, $\Delta OMX \cong \Delta ONX \implies \mathbf{\angle OXM = \angle OXN}$.

#### **Q6.4 (Theoretical - Tangent Limit Case)**
**Question:** Explain what happens to the distance of a chord from the center as the chord length approaches 0 (a single point).  
**Solution:**  
Formula $d = \sqrt{r^2 - (\text{length}/2)^2}$. As chord length $\rightarrow 0$, $d = \sqrt{r^2 - 0} = \mathbf{r}$ (the radius of the circle). The chord becomes a tangent touching at 1 point.

#### **Q6.5 (Numerical - Chord Grid Layout)**
**Question:** In a circle of radius $13\text{ cm}$, four chords of equal length $10\text{ cm}$ form a square. What is the perpendicular distance of each side from the center?  
**Solution:**  
Half-length $a = 5\text{ cm}$, radius $r = 13\text{ cm}$.  
Perpendicular distance $d = \sqrt{13^2 - 5^2} = \sqrt{169 - 25} = \sqrt{144} = \mathbf{12\text{ cm}}$.

---

## Theorem 7: Chords Equidistant from Centre are Equal in Length
> **Statement:** *Chords of a circle that are equidistant from the centre have the same length (Converse of Theorem 6).*

#### **Q7.1 (Theoretical - Converse RHS Proof)**
**Question:** Prove that if $OM = ON$ (where $OM \perp AB$ and $ON \perp CD$), then $AB = CD$.  
**Solution:**  
In right $\Delta OMA$ and $\Delta ONC$:
$OM = ON$ (Given), $OA = OC$ (Radii), $\angle OMA = \angle ONC = 90^\circ$.  
By RHS, $\Delta OMA \cong \Delta ONC \implies AM = CN$.  
By Theorem 5, $AB = 2AM$ and $CD = 2CN$.  
Therefore, $\mathbf{AB = CD}$.

#### **Q7.2 (Numerical - Finding Unknown Chord Length)**
**Question:** In a circle of radius $25\text{ cm}$, chord $AB$ is at distance $7\text{ cm}$ from the center. Chord $CD$ is also at distance $7\text{ cm}$ from the center. Find the length of chord $CD$.  
**Solution:**  
Half-length of $CD = \sqrt{25^2 - 7^2} = \sqrt{625 - 49} = \sqrt{576} = 24\text{ cm}$.  
Total length $CD = 2 \times 24 = \mathbf{48\text{ cm}}$.

#### **Q7.3 (Numerical - Unknown Distance Equation)**
**Question:** Chords $AB$ and $CD$ are at distances $(2x + 1)\text{ cm}$ and $(3x - 4)\text{ cm}$ from the center. If both chords have equal length $30\text{ cm}$ in a circle of radius $17\text{ cm}$, find $x$.  
**Solution:**  
By Theorem 6/7, distances must be equal:  
$2x + 1 = 3x - 4 \implies \mathbf{x = 5}$.  
Distance $= 2(5) + 1 = 11\text{ cm}$ (Check: $\sqrt{17^2 - 15^2} = \sqrt{289 - 225} = 8\text{ cm}$).

#### **Q7.4 (Theoretical - Line of Centers in Intersecting Circles)**
**Question:** Two congruent circles of radius $r$ intersect such that their common chord is at distance $d$ from each center. Show that the common chord length is $2\sqrt{r^2 - d^2}$.  
**Solution:**  
Since the line of centers is the perpendicular bisector of the common chord, each circle has the same chord at distance $d$. By Theorem 7, half-chord $= \sqrt{r^2 - d^2}$, and total chord length $= \mathbf{2\sqrt{r^2 - d^2}}$.

#### **Q7.5 (Numerical - Rhombus Inscribed Property)**
**Question:** If the four sides of a quadrilateral inscribed in a circle are all at an equal distance of $4\text{ cm}$ from the center, what type of quadrilateral is it?  
**Solution:**  
By Theorem 7, all four chords are equal in length, making it an equilateral cyclic quadrilateral, which must be a **Square**.

---

## Theorem 8: Longer Chords are Closer to the Centre
> **Statement:** *Let AB and DE be two chords of a circle with centre C. If $AB > DE$, then the distance from C to AB is strictly less than the distance from C to DE.*

#### **Q8.1 (Theoretical - Algebraic Proof)**
**Question:** Prove Theorem 8 algebraically using the relation $d = \sqrt{r^2 - \left(\frac{L}{2}\right)^2}$.  
**Solution:**  
Let chords have lengths $L_1 = AB$ and $L_2 = DE$ with $L_1 > L_2$.  
$\implies \frac{L_1}{2} > \frac{L_2}{2} \implies \left(\frac{L_1}{2}\right)^2 > \left(\frac{L_2}{2}\right)^2$.  
Subtracting from $r^2$: $r^2 - \left(\frac{L_1}{2}\right)^2 < r^2 - \left(\frac{L_2}{2}\right)^2$.  
Taking square roots: $d_1 < d_2$.  
Thus, the longer chord $AB$ is closer to the center than $DE$.

#### **Q8.2 (Numerical - Distance Comparison)**
**Question:** A circle of radius $10\text{ cm}$ has three chords: $A$ (length $12\text{ cm}$), $B$ (length $16\text{ cm}$), and $C$ (length $19.6\text{ cm}$). Calculate their distances from the center and order them from closest to farthest.  
**Solution:**  
- $d_A = \sqrt{10^2 - 6^2} = \sqrt{64} = 8\text{ cm}$
- $d_B = \sqrt{10^2 - 8^2} = \sqrt{36} = 6\text{ cm}$
- $d_C = \sqrt{10^2 - 9.8^2} = \sqrt{100 - 96.04} = \sqrt{3.96} \approx 1.99\text{ cm}$  
**Order from closest to farthest:** **Chord C ($1.99\text{ cm}$) < Chord B ($6\text{ cm}$) < Chord A ($8\text{ cm}$)**.

#### **Q8.3 (Theoretical - PDF Exercise 5.4 Q3 Counterexample)**
**Question:** (From PDF Ex Set 5.4 Q3) If the distance of chord $AB$ from the center is twice the distance of chord $CD$, can we conclude that $CD = 2AB$? Explain why or why not.  
**Solution:**  
**No**, chord length is not inversely proportional to distance.  
Example: In a circle of $r = 5$:
- If $d_1 = 3$, $CD = 2\sqrt{5^2 - 3^2} = 8\text{ cm}$.
- If $d_2 = 2 \times 3 = 6 > 5$ (outside circle!).  
- If $d_1 = 2 \implies CD = 2\sqrt{25 - 4} = 2\sqrt{21} \approx 9.165$. If $d_2 = 4 \implies AB = 2\sqrt{25 - 16} = 6$.  
Here $\frac{CD}{AB} = \frac{9.165}{6} \approx 1.527 \neq 2$.

#### **Q8.4 (Theoretical - Diameter as Maximum Chord)**
**Question:** Why is the diameter the longest possible chord of a circle?  
**Solution:**  
The distance from the center to a diameter is $d = 0$. By Theorem 8, as distance $d$ reaches its minimum value ($0$), the chord length reaches its maximum value $L = 2\sqrt{r^2 - 0^2} = 2r = \text{Diameter}$.

#### **Q8.5 (Numerical - Ordering Chords by Angle)**
**Question:** Two chords subtend angles of $45^\circ$ and $110^\circ$ at the center. Which chord is closer to the center?  
**Solution:**  
The chord subtending $110^\circ$ is longer than the chord subtending $45^\circ$. By Theorem 8, the longer chord is closer to the center. Therefore, the chord subtending **$110^\circ$ is closer**.

---

## Theorem 9: Angle Subtended by Arc at Centre is Double
> **Statement:** *The angle subtended by an arc at the centre of the circle is double the angle subtended by the arc at any point on the circle outside the arc.*  
> *Corollaries: (1) Angles in the same segment are equal. (2) Angle in a semicircle is 90°.*

#### **Q9.1 (Numerical - Direct Application)**
**Question:** In a circle with center $O$, arc $AB$ subtends $\angle AOB = 130^\circ$ at the center. Point $C$ lies on the major arc. Find $\angle ACB$.  
**Solution:**  
By Theorem 9: $\angle ACB = \frac{1}{2} \angle AOB = \frac{130^\circ}{2} = \mathbf{65^\circ}$.

#### **Q9.2 (Numerical - Angle in Semicircle with Triangle)**
**Question:** $AB$ is a diameter of a circle with center $O$. $C$ is a point on the circle such that $\angle BAC = 35^\circ$. Find $\angle ABC$.  
**Solution:**  
By Corollary of Theorem 9, angle in a semicircle $\angle ACB = 90^\circ$.  
In $\Delta ABC$: $\angle ABC = 180^\circ - (90^\circ + 35^\circ) = \mathbf{55^\circ}$.

#### **Q9.3 (Numerical - Reflex Angle Minor Arc)**
**Question:** Point $D$ lies on the minor arc $AB$. If $\angle AOB = 110^\circ$ at center $O$, find $\angle ADB$.  
**Solution:**  
Reflex $\angle AOB = 360^\circ - 110^\circ = 250^\circ$.  
By Theorem 9, $\angle ADB = \frac{1}{2}(\text{reflex } \angle AOB) = \frac{250^\circ}{2} = \mathbf{125^\circ}$.

#### **Q9.4 (Numerical - Angles in Same Segment - Fig 5.26 in PDF)**
**Question:** (From PDF Fig 5.26) In a circle, chord $AB$ subtends angles at points $C$ and $D$ on the same side. If $\angle ACB = 100^\circ$, find $\angle ADB = x$.  
**Solution:**  
By Corollary to Theorem 9 (angles subtended by the same arc in the same segment are equal):  
$\angle ADB = \angle ACB \implies \mathbf{x = 100^\circ}$.

#### **Q9.5 (Theoretical - Proof of Angle in Semicircle)**
**Question:** Prove that the angle subtended by a diameter at any point on the circle is $90^\circ$.  
**Solution:**  
A diameter is a straight line segment passing through the center, so it subtends a straight angle of $180^\circ$ at the center.  
By Theorem 9, the angle at any point on the circle $= \frac{1}{2} \times 180^\circ = \mathbf{90^\circ}$.

---

## Theorem 10: Equal Angles on Same Side Implies Concyclicity
> **Statement:** *If a line segment AB subtends equal angles at two other points C, D on the same side of AB, then points A, B, C, D are concyclic (lie on a circle).*

#### **Q10.1 (Theoretical - Exterior Angle Contradiction Proof)**
**Question:** Explain how the exterior angle theorem is used to prove Theorem 10 by contradiction when assuming point $D$ is outside the circle.  
**Solution:**  
Draw circle through $A, B, C$. If $D$ is outside, ray $AD$ cuts the circle at $E$.  
Then $\angle AEB = \angle ACB$ (angles in same segment).  
In $\Delta BED$, $\angle AEB$ is an exterior angle, so $\angle AEB > \angle ADB$.  
This means $\angle ACB > \angle ADB$, which contradicts the given fact that $\angle ACB = \angle ADB$.  
Hence, $D$ cannot be outside. Similarly, $D$ cannot be inside. Thus $D$ lies on the circle.

#### **Q10.2 (Numerical - Right Angled Triangles on Same Hypotenuse)**
**Question:** Two right-angled triangles $\Delta ABC$ and $\Delta ADC$ have a common hypotenuse $AC$. Prove that $A, B, C, D$ are concyclic, and find $\angle BDC$ if $\angle BAC = 40^\circ$.  
**Solution:**  
$\angle ABC = \angle ADC = 90^\circ$ on the same side of hypotenuse $AC$.  
By Theorem 10, $A, B, C, D$ lie on a circle with diameter $AC$.  
$\angle BDC$ and $\angle BAC$ are angles in the same segment subtended by chord $BC$.  
Therefore, $\angle BDC = \angle BAC = \mathbf{40^\circ}$.

#### **Q10.3 (Numerical - Angle Check for Concyclicity)**
**Question:** Segment $PQ$ subtends $\angle PRQ = 62^\circ$ and $\angle PSQ = 62^\circ$ where $R$ and $S$ lie on the same side of $PQ$. Are points $P, Q, R, S$ concyclic?  
**Solution:**  
Yes, since $R$ and $S$ are on the same side of $PQ$ and $\angle PRQ = \angle PSQ = 62^\circ$, by Theorem 10, points $P, Q, R, S$ are **concyclic**.

#### **Q10.4 (Theoretical - Self-Crossing 4-Gon)**
**Question:** If diagonals $AC$ and $BD$ of a quadrilateral intersect at $P$ such that $PA \cdot PC = PB \cdot PD$, prove that $A, B, C, D$ are concyclic.  
**Solution:**  
$PA \cdot PC = PB \cdot PD \implies \frac{PA}{PB} = \frac{PD}{PC}$.  
In $\Delta PAB$ and $\Delta PDC$, $\angle APB = \angle DPC$ (vertically opposite).  
By SAS similarity, $\Delta PAB \sim \Delta PDC \implies \angle PAB = \angle PDC$ (i.e., $\angle CAB = \angle CDB$).  
By Theorem 10, $A, B, C, D$ are concyclic.

#### **Q10.5 (Numerical - Trapezium Concyclicity)**
**Question:** An isosceles trapezium $ABCD$ has $AB \parallel CD$ and $AD = BC$. Show that $A, B, C, D$ are concyclic.  
**Solution:**  
In an isosceles trapezium, $\Delta ACD \cong \Delta BDC$ (by SAS: $AD = BC, \angle ADC = \angle BCD, CD = CD$).  
Thus, $\angle CAD = \angle CBD$.  
By Theorem 10, segment $CD$ subtends equal angles at $A$ and $B$ on the same side.  
Hence, $A, B, C, D$ are **concyclic**.

---

## Theorem 11: Opposite Angles of a Cyclic Quadrilateral are Supplementary
> **Statement:** *The sum of two opposite angles of a cyclic quadrilateral is 180°.*

#### **Q11.1 (Theoretical - Complete 360° Center Angle Proof)**
**Question:** Write down the formal proof of Theorem 11 using the reflex central angles.  
**Solution:**  
Let $ABCD$ be a cyclic quadrilateral inscribed in circle with center $O$.  
- Arc $BCD$ subtends reflex $\angle BOD$ at center and $\angle BAD$ at circle $\implies \angle BAD = \frac{1}{2}(\text{reflex } \angle BOD)$.  
- Arc $BAD$ subtends $\angle BOD$ at center and $\angle BCD$ at circle $\implies \angle BCD = \frac{1}{2}(\angle BOD)$.  
Adding: $\angle BAD + \angle BCD = \frac{1}{2}(\text{reflex } \angle BOD + \angle BOD) = \frac{1}{2}(360^\circ) = \mathbf{180^\circ}$.

#### **Q11.2 (Numerical - Finding Angles in Cyclic Quadrilateral)**
**Question:** In cyclic quadrilateral $ABCD$, $\angle A = (2x + 4)^\circ$ and $\angle C = (3x - 14)^\circ$. Find the values of $x, \angle A,$ and $\angle C$.  
**Solution:**  
By Theorem 11, $\angle A + \angle C = 180^\circ$:  
$(2x + 4) + (3x - 14) = 180 \implies 5x - 10 = 180 \implies 5x = 190 \implies \mathbf{x = 38}$.  
$\angle A = 2(38) + 4 = \mathbf{80^\circ}$.  
$\angle C = 3(38) - 14 = \mathbf{100^\circ}$.

#### **Q11.3 (Numerical - Exterior Angle of Cyclic Quadrilateral)**
**Question:** One side $AB$ of a cyclic quadrilateral $ABCD$ is extended to point $E$. If $\angle CBE = 75^\circ$, find the measure of the opposite interior angle $\angle ADC$.  
**Solution:**  
$\angle ABC + \angle CBE = 180^\circ \implies \angle ABC = 180^\circ - 75^\circ = 105^\circ$.  
By Theorem 11, $\angle ADC = 180^\circ - \angle ABC = 180^\circ - 105^\circ = \mathbf{75^\circ}$.  
*(Key Rule: Exterior angle of a cyclic quadrilateral equals the interior opposite angle).*

#### **Q11.4 (Theoretical - Cyclic Parallelogram is a Rectangle)**
**Question:** Prove that any cyclic parallelogram must be a rectangle.  
**Solution:**  
In a parallelogram, opposite angles are equal: $\angle A = \angle C$.  
In a cyclic quadrilateral, opposite angles are supplementary: $\angle A + \angle C = 180^\circ$.  
$\implies \angle A + \angle A = 180^\circ \implies 2\angle A = 180^\circ \implies \angle A = 90^\circ$.  
A parallelogram with one right angle is a **rectangle**.

#### **Q11.5 (Numerical - Diagonal Angle Intersections)**
**Question:** In cyclic quadrilateral $ABCD$, diagonals intersect at $O$. If $\angle DBC = 55^\circ$ and $\angle BAC = 45^\circ$, find $\angle BCD$.  
**Solution:**  
$\angle CAD = \angle DBC = 55^\circ$ (angles in same segment).  
$\angle DAB = \angle BAC + \angle CAD = 45^\circ + 55^\circ = 100^\circ$.  
By Theorem 11, $\angle BCD = 180^\circ - \angle DAB = 180^\circ - 100^\circ = \mathbf{80^\circ}$.

---

## Theorem 12: Supplementary Opposite Angles Implies Cyclic
> **Statement:** *If two opposite angles of a quadrilateral add up to 180°, then the vertices of the quadrilateral are concyclic (Converse of Theorem 11).*

#### **Q12.1 (Theoretical - Existence & Contradiction Proof)**
**Question:** Explain the proof of Theorem 12 using a fourth point $E$ on the circle.  
**Solution:**  
Let $ABCD$ have $\angle A + \angle C = 180^\circ$. Draw circle through non-collinear points $A, B, D$.  
If $C$ is not on the circle, line $CD$ intersects the circle at $E$.  
Then $ABED$ is cyclic $\implies \angle A + \angle BED = 180^\circ$.  
Given $\angle A + \angle BCD = 180^\circ \implies \angle BED = \angle BCD$.  
In $\Delta BCE$, exterior angle $\angle BED > \angle BCD$, a contradiction unless $E$ coincides with $C$.  
Thus $C$ must lie on the circle, making $ABCD$ cyclic.

#### **Q12.2 (Numerical - PDF Exercise on Quadrilateral Validity)**
**Question:** (From PDF Page 22) A quadrilateral has angles $\angle A = 80^\circ, \angle B = 110^\circ, \angle C = 100^\circ, \angle D = 70^\circ$. Can a circle be drawn through all four vertices? Explain why or why not.  
**Solution:**  
Check opposite pairs:  
1. $\angle A + \angle C = 80^\circ + 100^\circ = 180^\circ$.  
2. $\angle B + \angle D = 110^\circ + 70^\circ = 180^\circ$.  
Since both pairs of opposite angles add up to $180^\circ$, by Theorem 12, the quadrilateral **is cyclic and a circle can uniquely pass through all four vertices**.

#### **Q12.3 (Numerical - Invalid Cyclic Check)**
**Question:** Quadrilateral $PQRS$ has angles $\angle P = 95^\circ, \angle Q = 85^\circ, \angle R = 90^\circ, \angle S = 90^\circ$. Is $PQRS$ a cyclic quadrilateral?  
**Solution:**  
Check opposite angles: $\angle P + \angle R = 95^\circ + 90^\circ = 185^\circ \neq 180^\circ$.  
By Theorem 12, since opposite angles are not supplementary, $PQRS$ is **not cyclic**.

#### **Q12.4 (Theoretical - Cyclic Rhombus is a Square)**
**Question:** Prove that a cyclic rhombus must be a square.  
**Solution:**  
In a rhombus, opposite angles are equal: $\angle A = \angle C$.  
Since it is cyclic, $\angle A + \angle C = 180^\circ \implies 2\angle A = 180^\circ \implies \angle A = 90^\circ$.  
A rhombus with all right angles ($90^\circ$) is a **Square**.

#### **Q12.5 (Numerical - Perpendicular Bisector Intersection)**
**Question:** In quadrilateral $ABCD$, $\angle B = 90^\circ$ and $\angle D = 90^\circ$. If $AB = 8\text{ cm}, BC = 6\text{ cm},$ and $CD = 5\text{ cm}$, find the length of side $AD$ and the radius of the circumcircle.  
**Solution:**  
$\angle B + \angle D = 90^\circ + 90^\circ = 180^\circ \implies ABCD$ is cyclic with diagonal $AC$ as diameter.  
In right $\Delta ABC$: $AC = \sqrt{8^2 + 6^2} = \sqrt{64 + 36} = 10\text{ cm}$.  
In right $\Delta ADC$: $AD = \sqrt{AC^2 - CD^2} = \sqrt{10^2 - 5^2} = \sqrt{100 - 25} = \sqrt{75} = \mathbf{5\sqrt{3}\text{ cm} \approx 8.66\text{ cm}}$.  
Radius of circumcircle $R = \frac{AC}{2} = \frac{10}{2} = \mathbf{5\text{ cm}}$.
