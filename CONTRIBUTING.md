# 🤝 Contributing to StudyGuide by Nextsem

Thank you for your interest in contributing to **StudyGuide by Nextsem**! 

We welcome contributions from educators, students, and open-source enthusiasts to expand solution coverage, refine step-by-step mathematical proofs, and update NEP 2020 Competency-Based Questions.

---

## 🛠️ How to Contribute

### 1. Adding / Updating NCERT Solutions
All NCERT chapter solutions and data are maintained in `src/data/ncertData.ts`.

When adding or editing a solution entry:
- Ensure step-by-step clarity.
- Use clean formatting for formulas and equations.
- Include a **NEP 2020 Competency Question** for each chapter.
- Provide practical real-world context or key takeaways.

### 2. Code Contribution Guidelines
1. **Fork & Clone**:
   ```bash
   git clone https://github.com/nextsemacademy-max/NCERT_solutions_by_Nextsem.git
   ```
2. **Create a Feature Branch**:
   ```bash
   git checkout -b feature/class-10-maths-ch6
   ```
3. **Commit Changes**:
   Follow semantic commit messages:
   - `feat: add Class 10 Maths Chapter 6 solutions`
   - `fix: correct formatting in Physics Chapter 3 numericals`
   - `docs: update NEP 2020 guidelines`

4. **Verify Build**:
   Make sure TypeScript compiles cleanly without error:
   ```bash
   npm run build
   ```

5. **Submit a Pull Request (PR)**:
   Describe your changes clearly and link any relevant issue.

---

## 📐 Formatting Standards for Math & Science

- **Steps**: Number steps sequentially (Step 1, Step 2...).
- **Given Data**: Clearly state given parameters before calculations.
- **Final Answer**: Highlight the final answer clearly with units (e.g., `Final Answer: 25 m/s²`).
- **Diagrams**: Use descriptive visual notes where diagrams are referenced.

Thank you for helping make quality NCERT education accessible to millions of students! 🚀
