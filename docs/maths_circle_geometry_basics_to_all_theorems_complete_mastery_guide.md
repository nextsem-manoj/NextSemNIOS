# ⭕ Complete Mastery Guide: Circles — From Absolute Basics to All Key Theorems
## (NCERT Mathematics — Class 9 & Class 10 Foundation)
### 📘 Author: Er. Manoj Kumar | Nextsem Academy

---

## 📌 Table of Contents
1. [🌟 Introduction & Pure Geometric Definition](#1-introduction--pure-geometric-definition)
2. [📐 Core Anatomy of a Circle (Basic Elements)](#2-core-anatomy-of-a-circle-basic-elements)
3. [✂️ Lines & Regions Associated with a Circle](#3-lines--regions-associated-with-a-circle)
   - 3.1 Chord, Secant & Tangent
   - 3.2 Arcs: Minor, Major & Semicircular
   - 3.3 Segments & Sectors
   - 3.4 Concentric, Congruent & Cyclic Figures
4. [🏛️ All Foundational Circle Theorems (Class 9 Ganita Manjari / NCERT)](#4-all-foundational-circle-theorems-class-9)
   - **Theorem 1 & 2:** Equal Chords & Central Angles
   - **Theorem 3 & 4:** Perpendicular from Center to Chord & Bisector
   - **Theorem 5:** Circle Passing through Three Non-Collinear Points
   - **Theorem 6 & 7:** Equal Chords & Distance from Center
   - **Theorem 8:** Central Angle is Double the Inscribed Angle ($\angle AOB = 2\angle APB$)
   - **Theorem 9 & 10:** Angles in the Same Segment & Concyclic Points
   - **Theorem 11, 12 & 13:** Cyclic Quadrilaterals & Exterior Angle Properties
5. [🚀 Advanced Tangent Theorems (Class 10 Bridge)](#5-advanced-tangent-theorems-class-10-bridge)
   - **Theorem 14:** Tangent-Radius Perpendicularity ($OP \perp XY$)
   - **Theorem 15:** Tangents from an External Point ($PA = PB$)
   - **Theorem 16:** Alternate Segment Theorem
6. [🧮 Practical Formula Matrix & Problem-Solving Toolkit](#6-practical-formula-matrix--problem-solving-toolkit)

---

# 1. 🌟 Introduction & Pure Geometric Definition

### 🎯 What is a Circle?
> **Formal Definition:**  
> A **circle** is the collection (or *locus*) of all points in a two-dimensional plane that are at a constant, fixed distance from a fixed point in that plane.

- **Fixed Point:** Called the **Center** (usually denoted as $O$).
- **Fixed Distance:** Called the **Radius** (denoted as $r$).

```
                .  .  .  .
            .               .
          .                   .
         .          O (Center) .
        .           |---------r--------> Point on Circle P(x, y)
         .                    .
          .                  .
            .               .
                .  .  .  .
```

### 📍 The Three Regions in a Plane:
A circle divides the plane into three mutually exclusive regions:
1. **Interior of the Circle:** Points inside where distance from center $< r$ (e.g. $OP < r$).
2. **On the Circle (Circumference / Boundary):** Points where distance $= r$ (e.g. $OP = r$).
3. **Exterior of the Circle:** Points outside where distance $> r$ (e.g. $OP > r$).

The **Circular Region** (or disc) is the union of the circle and its interior.

---

# 2. 📐 Core Anatomy of a Circle (Basic Elements)

| Element | Notation / Formula | Geometric Description |
| :--- | :--- | :--- |
| **Center ($O$)** | Point $O$ | The fixed central point from which all boundary points are equidistant. |
| **Radius ($r$)** | Line segment $OA$ | Line segment joining the center to any point on the circle. |
| **Diameter ($d$)** | $d = 2r$ | The longest chord passing through the center; divides the circle into 2 equal halves. |
| **Circumference ($C$)** | $C = 2\pi r = \pi d$ | The total perimeter or boundary length of the circle. ($\pi \approx \frac{22}{7} \approx 3.14159$). |
| **Area ($A$)** | $A = \pi r^2$ | The total surface measure enclosed within the boundary. |

---

# 3. ✂️ Lines & Regions Associated with a Circle

### 3.1 Chord, Secant & Tangent
1. **Chord:** A straight line segment whose both endpoints lie on the circle (e.g. Segment $AB$).
   - *Key Fact:* The diameter is the **longest chord** in any circle.
2. **Secant:** A straight line that passes through the circle, cutting it at two distinct points.
3. **Tangent:** A straight line in the plane that touches the circle at **exactly one unique point** (called the *Point of Contact*).

```
   SECANT LINE                CHORD SEGMENT              TANGENT LINE
   ------------*---------*----       *-----------*                 |
              /           \         /             \                * Point of Contact
             |      O      |       |       O       |              / \
              \           /         \             /              | O |
               -----------           -------------                \ /
```

---

### 3.2 Arcs: Minor, Major & Semicircular
An **arc** is a continuous piece or portion of a circle between two points $P$ and $Q$:
- **Minor Arc ($\widehat{PQ}$):** The smaller arc (length $< \pi r$, subtending angle $\theta < 180^\circ$).
- **Major Arc ($\widehat{PRQ}$):** The larger arc (length $> \pi r$, subtending reflex angle $> 180^\circ$).
- **Semicircular Arc:** When $P$ and $Q$ are ends of a diameter (length $= \pi r$, subtending $180^\circ$).

---

### 3.3 Segments & Sectors
- **Segment:** The region bounded by a **chord** and either of its arcs:
  - *Minor Segment:* Bounded by chord and minor arc.
  - *Major Segment:* Bounded by chord and major arc.
- **Sector:** The region bounded by **two radii** and the arc enclosed between them:
  - *Area of Sector with angle $\theta$*: $\text{Area} = \frac{\theta}{360^\circ} \times \pi r^2$
  - *Length of Sector Arc*: $L = \frac{\theta}{360^\circ} \times 2\pi r$

```
           SECTOR (Pizza Slice)                     SEGMENT (Flat Cut)
                 .  .  .                                  .  .  .
              .     /\    .                            .    Chord    .
            .      /  \     .                        .  -------------  .
           .      /    \     .                      .    \         /    .
          .      /  θ   \     .                    .      \       /      .
           .    /________\   .                      .      \  O  /      .
            .               .                        .      \   /      .
              .  .  .  .  .                            .  .  \./  .  .
```

---

# 4. 🏛️ All Foundational Circle Theorems (Class 9)

---

### 🔹 Theorem 1: Equal Chords Subtend Equal Angles at the Center
> **Statement:** Equal chords of a circle (or of congruent circles) subtend equal angles at the center.

- **Given:** A circle with center $O$ where chord $AB = \text{chord } CD$.
- **To Prove:** $\angle AOB = \angle COD$.
- **Proof:**
  In $\Delta AOB$ and $\Delta COD$:
  1. $OA = OC$ (Radii of same circle)
  2. $OB = OD$ (Radii of same circle)
  3. $AB = CD$ (Given)
  $\therefore \Delta AOB \cong \Delta COD$ by **SSS Congruence Rule**.
  $\implies \angle AOB = \angle COD$ (CPCTC — Corresponding Parts of Congruent Triangles are Congruent). $\quad\blacksquare$

---

### 🔹 Theorem 2: Converse of Theorem 1
> **Statement:** If the angles subtended by the chords of a circle at the center are equal, then the chords are equal in length.

- **Given:** $\angle AOB = \angle COD$.
- **To Prove:** $AB = CD$.
- **Proof:**
  In $\Delta AOB$ and $\Delta COD$:
  $OA = OC$ (Radii), $\angle AOB = \angle COD$ (Given), $OB = OD$ (Radii).
  $\therefore \Delta AOB \cong \Delta COD$ by **SAS Congruence Rule** $\implies AB = CD$. $\quad\blacksquare$

---

### 🔹 Theorem 3: Perpendicular from Center to Chord Bisects the Chord
> **Statement:** The perpendicular drawn from the center of a circle to a chord bisects the chord into two equal halves.

- **Given:** A circle with center $O$, chord $AB$, and $OM \perp AB$.
- **To Prove:** $AM = MB = \frac{1}{2} AB$.
- **Proof:**
  Join $OA$ and $OB$.
  In right-angled triangles $\Delta OMA$ and $\Delta OMB$:
  1. $\angle OMA = \angle OMB = 90^\circ$ (Given $OM \perp AB$)
  2. Hypotenuse $OA = \text{Hypotenuse } OB$ (Radii of same circle)
  3. Side $OM = OM$ (Common side)
  $\therefore \Delta OMA \cong \Delta OMB$ by **RHS Congruence Criterion**.
  $\implies AM = MB$ (CPCTC). $\quad\blacksquare$

> 💡 **Core Pythagorean Formula:**
> In right $\Delta OMA$:
> $$r^2 = OM^2 + AM^2 \implies r^2 = d^2 + \left(\frac{\text{chord}}{2}\right)^2$$
> Where $r = \text{radius}$, $d = \text{distance from center to chord}$, $\text{chord} = 2\sqrt{r^2 - d^2}$.

---

### 🔹 Theorem 4: Converse of Theorem 3
> **Statement:** The line drawn through the center of a circle to bisect a chord is perpendicular to the chord.

- **Given:** $AM = MB$.
- **To Prove:** $OM \perp AB$ ($\angle OMA = \angle OMB = 90^\circ$).
- **Proof:**
  In $\Delta OMA$ and $\Delta OMB$:
  $OA = OB$ (Radii), $OM = OM$ (Common), $AM = MB$ (Given).
  $\therefore \Delta OMA \cong \Delta OMB$ by **SSS**.
  $\implies \angle OMA = \angle OMB$.
  Since $AMB$ is a straight line, $\angle OMA + \angle OMB = 180^\circ \implies 2\angle OMA = 180^\circ \implies \angle OMA = 90^\circ$. $\quad\blacksquare$

---

### 🔹 Theorem 5: Circle through Three Non-Collinear Points
> **Statement:** There is one and only one circle passing through three given non-collinear points.

- **Proof Intuition:**
  Let three non-collinear points be $A, B, C$.
  Draw the perpendicular bisector of segment $AB$ ($l_1$) and perpendicular bisector of $BC$ ($l_2$).
  Since $A, B, C$ are non-collinear, $l_1$ and $l_2$ are not parallel and intersect at a unique point $O$.
  $OA = OB$ (as $O$ lies on bisector of $AB$) and $OB = OC$ (as $O$ lies on bisector of $BC$).
  $\implies OA = OB = OC = r$.
  Thus, a circle with center $O$ and radius $r$ passes uniquely through $A, B, C$. (Point $O$ is the **Circumcenter**). $\quad\blacksquare$

---

### 🔹 Theorem 6: Equal Chords are Equidistant from the Center
> **Statement:** Equal chords of a circle (or of congruent circles) are equidistant from the center.

- **Given:** $AB = CD$ and $OL \perp AB$, $OM \perp CD$.
- **To Prove:** $OL = OM$.
- **Proof:**
  $AL = \frac{1}{2}AB$ and $CM = \frac{1}{2}CD$ (Perpendicular from center bisects chord).
  Since $AB = CD \implies AL = CM$.
  In right $\Delta OLA$ and $\Delta OMC$:
  1. Hypotenuse $OA = \text{Hypotenuse } OC$ (Radii)
  2. Side $AL = CM$ (Proven above)
  3. $\angle OLA = \angle OMC = 90^\circ$
  $\therefore \Delta OLA \cong \Delta OMC$ by **RHS**.
  $\implies OL = OM$. $\quad\blacksquare$

---

### 🔹 Theorem 7: Converse of Theorem 6
> **Statement:** Chords equidistant from the center of a circle are equal in length.
- If $OL = OM$, then $AB = CD$. (Proved via RHS congruence $\Delta OLA \cong \Delta OMC \implies AL = CM \implies 2AL = 2CM \implies AB = CD$). $\quad\blacksquare$

---

### 🔹 Theorem 8: Central Angle is Double the Inscribed Angle
> **Statement:** The angle subtended by an arc at the center is double the angle subtended by it at any point on the remaining part of the circle.
> $$\angle AOB = 2 \angle APB$$

```
                   P
                  / \
                 /   \
                /     \
               /   O   \
              /  /   \  \
             A-----------B
```

- **Proof:**
  Join $PO$ and extend it to point $Q$.
  In $\Delta OAP$: $OA = OP$ (Radii) $\implies \angle OPA = \angle OAP$.
  Exterior angle $\angle AOQ = \angle OPA + \angle OAP = 2\angle OPA$.  --- (1)
  Similarly in $\Delta OBP$: $OB = OP \implies \angle OPB = \angle OBP$.
  Exterior angle $\angle BOQ = \angle OPB + \angle OBP = 2\angle OPB$.  --- (2)
  Adding (1) and (2):
  $$\angle AOQ + \angle BOQ = 2(\angle OPA + \angle OPB)$$
  $$\angle AOB = 2 \angle APB \quad\blacksquare$$

> 🌟 **Important Corollaries of Theorem 8:**
> 1. **Angle in a Semicircle is $90^\circ$ (Right Angle):**  
>    For a diameter $AB$, the central angle is a straight line $= 180^\circ$.  
>    $\therefore \angle APB = \frac{180^\circ}{2} = 90^\circ$.
> 2. **Angle in a Major Segment is Acute ($< 90^\circ$).**
> 3. **Angle in a Minor Segment is Obtuse ($> 90^\circ$).**

---

### 🔹 Theorem 9: Angles in the Same Segment are Equal
> **Statement:** Angles in the same segment of a circle are equal.
> $$\angle APB = \angle AQB$$

- **Proof:**
  Arc $AB$ subtends $\angle AOB$ at the center.
  By Theorem 8:
  $\angle AOB = 2\angle APB \implies \angle APB = \frac{1}{2}\angle AOB$
  $\angle AOB = 2\angle AQB \implies \angle AQB = \frac{1}{2}\angle AOB$
  $\implies \angle APB = \angle AQB$. $\quad\blacksquare$

---

### 🔹 Theorem 10: Converse of Theorem 9 (Concyclic Points)
> **Statement:** If a line segment joining two points subtends equal angles at two other points lying on the same side of the line containing the segment, the four points lie on a circle (i.e. they are **concyclic**).

---

### 🔹 Theorem 11: Cyclic Quadrilateral (Opposite Angles Sum is $180^\circ$)
> **Statement:** The sum of either pair of opposite angles of a cyclic quadrilateral is $180^\circ$ (Supplementary).
> $$\angle A + \angle C = 180^\circ \quad\text{and}\quad \angle B + \angle D = 180^\circ$$

- **Proof:**
  Let $ABCD$ be a cyclic quadrilateral inscribed in a circle with center $O$.
  Join $OB$ and $OD$.
  1. Angle subtended by minor arc $BCD$ at center: $\angle BOD = 2\angle BAD = 2\angle A$.
  2. Reflex angle subtended by major arc $BAD$ at center: $\text{Reflex }\angle BOD = 2\angle BCD = 2\angle C$.
  Since the sum of angles around point $O$ is $360^\circ$:
  $$\angle BOD + \text{Reflex }\angle BOD = 360^\circ$$
  $$2\angle A + 2\angle C = 360^\circ \implies \angle A + \angle C = 180^\circ$$
  Since sum of all 4 angles in a quadrilateral is $360^\circ$:
  $$\angle B + \angle D = 360^\circ - (\angle A + \angle C) = 360^\circ - 180^\circ = 180^\circ. \quad\blacksquare$$

---

### 🔹 Theorem 12: Converse of Theorem 11
> **Statement:** If the sum of a pair of opposite angles of a quadrilateral is $180^\circ$, then the quadrilateral is cyclic.

---

### 🔹 Theorem 13: Exterior Angle of a Cyclic Quadrilateral
> **Statement:** If one side of a cyclic quadrilateral is produced, then the exterior angle so formed is equal to the interior opposite angle.
> $$\angle \text{CBE} = \angle D \quad (\text{where } AB \text{ is extended to } E)$$

- **Proof:**
  $\angle ABC + \angle D = 180^\circ$ (Opposite angles of cyclic quad).
  $\angle ABC + \angle CBE = 180^\circ$ (Linear pair on straight line $ABE$).
  $\implies \angle CBE = \angle D$. $\quad\blacksquare$

---

# 5. 🚀 Advanced Tangent Theorems (Class 10 Bridge)

---

### 🔹 Theorem 14: Tangent-Radius Perpendicularity
> **Statement:** The tangent at any point of a circle is perpendicular to the radius through the point of contact.
> $$OP \perp XY$$

- **Proof by Contradiction:**
  Take any point $Q$ on tangent line $XY$ other than $P$.
  $Q$ must lie outside the circle (if it were inside, the line would be a secant, not a tangent).
  Therefore, distance $OQ > \text{radius } OP$.
  This holds for *every* point on $XY$ except $P$.
  Hence, $OP$ is the shortest distance from center $O$ to line $XY$.
  Since the shortest distance from a point to a line is the perpendicular distance, $OP \perp XY$. $\quad\blacksquare$

---

### 🔹 Theorem 15: Lengths of Tangents from an External Point
> **Statement:** The lengths of tangents drawn from an external point to a circle are equal.
> $$PA = PB$$

```
               A *
                / \
               /   \
        P ----*     * O (Center)
               \   /
                \ /
               B *
```

- **Proof:**
  Join $OA, OB$ and $OP$.
  In right triangles $\Delta OAP$ and $\Delta OBP$:
  1. $\angle OAP = \angle OBP = 90^\circ$ (Radius $\perp$ Tangent)
  2. Hypotenuse $OP = OP$ (Common hypotenuse)
  3. $OA = OB$ (Radii of same circle)
  $\therefore \Delta OAP \cong \Delta OBP$ by **RHS**.
  $\implies PA = PB$ (CPCTC).
  *Additional deductions:*
  - $\angle APO = \angle BPO$ ($OP$ is the angle bisector of $\angle APB$).
  - $\angle AOP = \angle BOP$ ($OP$ bisects central angle $\angle AOB$).
  - $\angle APB + \angle AOB = 180^\circ$ (Opposite angles of quadrilateral $OAPB$ are supplementary). $\quad\blacksquare$

---

### 🔹 Theorem 16: Alternate Segment Theorem
> **Statement:** If a chord is drawn through the point of contact of a tangent to a circle, the angles which this chord makes with the given tangent are equal respectively to the angles subtended by the chord in the corresponding alternate segments.

---

# 6. 🧮 Practical Formula Matrix & Problem-Solving Toolkit

| Property / Value | Formula | Key Notes |
| :--- | :--- | :--- |
| **Chord Length from Distance** | $L = 2\sqrt{r^2 - d^2}$ | $r = \text{radius}$, $d = \text{distance from center}$ |
| **Distance to Chord from Center** | $d = \sqrt{r^2 - (L/2)^2}$ | Useful for two parallel chords problems |
| **Arc Length ($\theta^\circ$)** | $l = \frac{\theta}{360} \times 2\pi r$ | Linear distance along arc |
| **Sector Area ($\theta^\circ$)** | $\text{Area} = \frac{\theta}{360} \times \pi r^2 = \frac{1}{2} l r$ | Area of slice with angle $\theta$ |
| **Segment Area** | $\text{Area} = \text{Area of Sector} - \text{Area of } \Delta OAB$ | Area $= \frac{\theta}{360}\pi r^2 - \frac{1}{2}r^2\sin\theta$ |
| **Angle in Semicircle** | $\angle = 90^\circ$ | Always forms a right-angled triangle |
| **External Tangent Length** | $PA = \sqrt{OP^2 - r^2}$ | Derived via Pythagorean Theorem on $\Delta OAP$ |
| **Cyclic Quad Angle Sum** | $\angle A + \angle C = 180^\circ$ | Opposite angles are supplementary |

---
*Created with ❤️ by Nextsem Academy — Dedicated to 100% conceptual clarity & academic excellence.*
