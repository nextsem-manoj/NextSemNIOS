# Class 9 Physics: Motion & Force (Distance, Speed, Acceleration, Average Speed & Force)
## Comprehensive Question Bank, Formulations & Step-by-Step Solutions

- **Target Grade:** CBSE & NCERT Class 9th (Physics)
- **Key Chapters:** Motion & Laws of Motion (Forces & Motion)
- **Key Concepts:**
  1. Distance & Displacement (दूरी और विस्थापन)
  2. Speed & Velocity (चाल और वेग)
  3. Average Speed & Average Velocity (औसत चाल और औसत वेग)
  4. Acceleration, Retardation & Equations of Motion (त्वरण और मंदन)
  5. Force & Newton's Second Law of Motion ($F = ma$, संवेग, जड़त्व)
- **Interactive Application:** [`public/class9-physics-motion-force-numericals-questions.html`](file:///c:/Users/nextsem/Documents/ncert.nextsem.online/public/class9-physics-motion-force-numericals-questions.html)
- **Localhost Preview:** `http://localhost:3002/class9-physics-motion-force-numericals-questions.html`
- **PC Network IP Preview:** `http://192.168.29.175:3002/class9-physics-motion-force-numericals-questions.html`

---

## 📐 Fundamental Formula Reference Table

| Quantity | Formula | SI Unit | Vector / Scalar |
| :--- | :--- | :---: | :---: |
| **Distance ($s$)** | Total path length | $\text{meter (m)}$ | Scalar |
| **Displacement ($\Delta x$)** | Shortest path from Initial to Final | $\text{meter (m)}$ | Vector |
| **Speed ($v$)** | $v = \frac{s}{t}$ | $\text{m/s}$ or $\text{km/h}$ | Scalar |
| **Average Speed ($v_{avg}$)** | $v_{avg} = \frac{\text{Total Distance}}{\text{Total Time}}$ | $\text{m/s}$ | Scalar |
| **Average Speed (Equal Distances)** | $v_{avg} = \frac{2v_1v_2}{v_1 + v_2}$ | $\text{m/s}$ | Harmonic Mean |
| **Average Speed (Equal Times)** | $v_{avg} = \frac{v_1 + v_2}{2}$ | $\text{m/s}$ | Arithmetic Mean |
| **Velocity ($\vec{v}$)** | $\vec{v} = \frac{\text{Displacement}}{t}$ | $\text{m/s}$ | Vector |
| **Acceleration ($a$)** | $a = \frac{v - u}{t}$ | $\text{m/s}^2$ | Vector |
| **1st Equation of Motion** | $v = u + at$ | - | Velocity-Time |
| **2nd Equation of Motion** | $s = ut + \frac{1}{2}at^2$ | - | Position-Time |
| **3rd Equation of Motion** | $v^2 - u^2 = 2as$ | - | Position-Velocity |
| **Linear Momentum ($p$)** | $p = m \cdot v$ | $\text{kg}\cdot\text{m/s}$ | Vector |
| **Newton's 2nd Law ($F$)** | $F = m \cdot a = \frac{m(v - u)}{t}$ | $\text{Newton (N)}$ | Vector ($1\text{ N} = 1\text{ kg}\cdot\text{m/s}^2$) |

> [!TIP]
> **Unit Conversion Golden Rule:**
> To convert $\text{km/h} \to \text{m/s}$, multiply by $\frac{5}{18}$.
> To convert $\text{m/s} \to \text{km/h}$, multiply by $\frac{18}{5} = 3.6$.

---

## 📌 Section 1: Conceptual & Fundamental MCQs (1 Mark Each)

### Q1. Farmer on Square Field (Displacement vs Distance)
**Question:** A farmer moves along the boundary of a square field of side $10\text{ m}$ in $40\text{ s}$. What will be the magnitude of displacement of the farmer at the end of $2\text{ minutes } 20\text{ seconds}$ from his initial position?
- **Answer:** **$10\sqrt{2}\text{ m} \approx 14.14\text{ m}$**
- **Working:**
  - Total time = $140\text{ s}$. Time for 1 round = $40\text{ s}$.
  - Rounds completed = $140 / 40 = 3.5\text{ rounds}$.
  - In 3 full rounds, displacement = $0$. In $0.5$ round, the farmer is at the opposite diagonal corner.
  - $\text{Displacement} = \sqrt{10^2 + 10^2} = \sqrt{200} = 10\sqrt{2}\text{ m} \approx 14.14\text{ m}$.

---

### Q2. Zero Displacement with Non-Zero Distance
**Question:** Can an object have zero displacement even if it has moved through a non-zero distance?
- **Answer:** **Yes**.
- **Explanation:** Distance is the actual length of the path traversed. Displacement is the difference between final and initial position. If an object returns to its starting point (e.g. throws a ball up and catches it, or completes a circular lap), $\text{Distance} > 0$ while $\text{Displacement} = 0$.

---

### Q3. Average Speed vs Average Velocity Equivalence
**Question:** Under what condition is the magnitude of average velocity equal to average speed?
- **Answer:** When an object travels in a **straight line in a single, unchanging direction** (without reversing or changing path).

---

### Q4. Acceleration in Uniform Circular Motion
**Question:** Does an object in uniform circular motion have acceleration?
- **Answer:** **Yes, it has non-zero centripetal acceleration.**
- **Explanation:** Even though the speed is constant, the direction of motion changes continuously at every point on the circle. Since velocity is a vector, changing direction means velocity is changing $\implies a \ne 0$.

---

### Q5. Quantitative Measure of Inertia
**Question:** Which property of a body determines its inertia?
- **Answer:** **Mass ($m$)**.
- **Explanation:** The inertia of an object is measured quantitatively by its mass. Heavier objects have greater inertia and require larger forces to change their state of motion.

---

### Q6. Direction of Net Force & Acceleration
**Question:** What is the relation between the direction of net force and acceleration?
- **Answer:** Acceleration is always in the **exact same direction as the net applied unbalanced force** ($F = ma$).

---

## ⚡ Section 2: Speed & Average Speed Solved Numericals

### Q9. Round Trip Average Speed (Abdul's Drive to School)
**Problem:** Abdul drives to school at an average speed of $20\text{ km/h}$. On his return trip along the same route, the average speed is $30\text{ km/h}$. What is the average speed for the entire round trip?
- **Given:** $v_1 = 20\text{ km/h}$, $v_2 = 30\text{ km/h}$. Let one-way distance = $d$.
- **Time going ($t_1$):** $d / 20\text{ h}$.
- **Time returning ($t_2$):** $d / 30\text{ h}$.
- **Total Distance:** $2d$.
- **Total Time:** $\frac{d}{20} + \frac{d}{30} = \frac{5d}{60} = \frac{d}{12}\text{ h}$.
- **Average Speed:**
  $$v_{avg} = \frac{\text{Total Distance}}{\text{Total Time}} = \frac{2d}{\frac{d}{12}} = 2d \times \frac{12}{d} = \mathbf{24\text{ km/h}}$$
- *Shortcut:* $\frac{2 v_1 v_2}{v_1 + v_2} = \frac{2 \times 20 \times 30}{50} = \mathbf{24\text{ km/h}}$.

---

### Q10. Average Speed for Two Equal Time Halves
**Problem:** A bus travels the first half of its journey time at $40\text{ km/h}$ and the second half at $60\text{ km/h}$. Find its average speed.
- **Given:** Time for each half = $t$.
- **Distance 1:** $s_1 = 40t$.
- **Distance 2:** $s_2 = 60t$.
- **Total Distance:** $100t$. Total Time = $2t$.
- **Average Speed:**
  $$v_{avg} = \frac{100t}{2t} = \mathbf{50\text{ km/h}}$$

---

### Q11. Athlete on Circular Track
**Problem:** An athlete completes one round of a circular track of diameter $200\text{ m}$ in $40\text{ s}$. Find the distance and displacement at $2\text{ min } 20\text{ s}$ ($140\text{ s}$).
- **Radius ($r$):** $100\text{ m}$.
- **Number of rounds:** $140 / 40 = 3.5\text{ rounds}$.
- **Distance:** $3.5 \times (2 \pi r) = 3.5 \times \left(2 \times \frac{22}{7} \times 100\right) = \mathbf{2200\text{ m}}$.
- **Displacement:** After $3.5$ rounds, the athlete is at the diametrically opposite point:
  $$\text{Displacement} = \text{Diameter} = \mathbf{200\text{ m}}$$

---

## 🚗 Section 3: Acceleration & Equations of Motion Numericals

### Q14. Deceleration of a Bus
**Problem:** A bus decreases its speed from $80\text{ km/h}$ to $60\text{ km/h}$ in $5\text{ s}$. Find its acceleration.
- $u = 80 \times \frac{5}{18} = \frac{200}{9}\text{ m/s} \approx 22.22\text{ m/s}$.
- $v = 60 \times \frac{5}{18} = \frac{150}{9}\text{ m/s} \approx 16.67\text{ m/s}$.
- $a = \frac{v - u}{t} = \frac{\frac{150 - 200}{9}}{5} = \frac{-50}{45} = \mathbf{-1.11\text{ m/s}^2}$ (Retardation of $1.11\text{ m/s}^2$).

---

### Q15. Car Accelerating from Rest
**Problem:** A car starts from rest ($u = 0$) and attains $72\text{ km/h}$ ($20\text{ m/s}$) in $10\text{ s}$. Find acceleration and distance covered.
- $a = \frac{20 - 0}{10} = \mathbf{2\text{ m/s}^2}$.
- $s = ut + \frac{1}{2}at^2 = 0 + \frac{1}{2}(2)(10)^2 = \mathbf{100\text{ m}}$.

---

### Q16. Stopping Distance Under Braking Retardation
**Problem:** Brakes applied to a car produce an opposing acceleration of $6\text{ m/s}^2$ ($a = -6\text{ m/s}^2$). It stops ($v = 0$) in $t = 2\text{ s}$. Calculate stopping distance.
- $v = u + at \implies 0 = u - 6(2) \implies u = 12\text{ m/s}$.
- $s = ut + \frac{1}{2}at^2 = (12)(2) + \frac{1}{2}(-6)(2)^2 = 24 - 12 = \mathbf{12\text{ m}}$.

---

### Q17. Vertical Throw Under Gravity
**Problem:** A stone thrown upward at $u = 5\text{ m/s}$ experiences downward acceleration $g = 10\text{ m/s}^2$ ($a = -10\text{ m/s}^2$). Find maximum height and time to reach peak.
- At highest point, $v = 0$.
- $v^2 - u^2 = 2as \implies 0 - 25 = 2(-10)h \implies h = \frac{25}{20} = \mathbf{1.25\text{ m}}$.
- $v = u + at \implies 0 = 5 - 10t \implies t = \frac{5}{10} = \mathbf{0.5\text{ s}}$.

---

## 🎯 Section 4: Force & Newton's Second Law ($F = ma$)

### Q21. Force Comparison
**Problem:** Which requires greater force: accelerating $2\text{ kg}$ at $5\text{ m/s}^2$ or $4\text{ kg}$ at $2\text{ m/s}^2$?
- $F_1 = 2 \times 5 = \mathbf{10\text{ N}}$.
- $F_2 = 4 \times 2 = \mathbf{8\text{ N}}$.
- Accelerating the $2\text{ kg}$ mass at $5\text{ m/s}^2$ requires greater force ($10\text{ N} > 8\text{ N}$).

---

### Q22. Fielder Catching a Cricket Ball
**Problem:** A cricket ball of mass $150\text{ g}$ ($0.15\text{ kg}$) moving at $20\text{ m/s}$ is stopped ($v = 0$) in $0.1\text{ s}$. Find impulse and average force.
- Change in Momentum $\Delta p = m(v - u) = 0.15(0 - 20) = \mathbf{-3\text{ kg}\cdot\text{m/s}}$.
- Average Force $F = \frac{\Delta p}{t} = \frac{-3}{0.1} = \mathbf{-30\text{ N}}$ (Resisting force of $30\text{ N}$).

---

### Q23. Bullet Penetrating Wooden Block
**Problem:** A $10\text{ g}$ ($0.01\text{ kg}$) bullet at $150\text{ m/s}$ strikes a block and stops in $0.03\text{ s}$. Find penetration distance and resisting force.
- $a = \frac{0 - 150}{0.03} = -5000\text{ m/s}^2$.
- $v^2 - u^2 = 2as \implies 0 - (150)^2 = 2(-5000)s \implies s = \frac{22500}{10000} = \mathbf{2.25\text{ m}}$.
- $F = ma = 0.01 \times (-5000) = \mathbf{-50\text{ N}}$ (Resistive force of $50\text{ N}$).

---

### Q25. Force on Coupled Masses
**Problem:** A force of $5\text{ N}$ gives mass $m_1$ an acceleration of $10\text{ m/s}^2$ and $m_2$ an acceleration of $20\text{ m/s}^2$. What acceleration will the same force produce if both masses are tied together?
- $m_1 = \frac{5}{10} = 0.5\text{ kg}$.
- $m_2 = \frac{5}{20} = 0.25\text{ kg}$.
- Total Mass $M = m_1 + m_2 = 0.75\text{ kg} = \frac{3}{4}\text{ kg}$.
- $a = \frac{F}{M} = \frac{5}{0.75} = \frac{20}{3} \approx \mathbf{6.67\text{ m/s}^2}$.
