# StudyGuide by Nextsem - Monday Offline Teaching Timetable & Admin Management

## 💬 User Original Inputs & Notes (Verbatim)
```markdown
on momday we teach :
3-4 PM 5th class Maths ; 3rd class Maths 2nd class :Maths
4-5 PM Maths of 6th 7th and 8th 
5-6 Maths for 9th and 10th
6-7 Accountancy 11th.
7-8 History 12th
8-9 :30 physics 12th and NIOS
9:30 to 11 PM : BCA 1st sem cs or maths .
npw make an admin panel for above schedule so that on clicking a specific slot the correspoding section on https://ncert-alpha.vercel.app/?view=classes gets open and we can add cahpterwise pdf and notes in it.

http://localhost:3002/ dark and light theme is inconssitent
this does not takes to exact url instead takes to home page
ne-Click Pre-Filling: Clicking + Add Chapter PDF & Notes on any class card switches to the upload tab, automatically selects the target class and subject, and scrolls directly to the upload form. i want pdf to be uploaded from google drive account only from newncert.nextsem@gmail.com account
now also under slot 1 read ch-6 of maths of class 2 3 and 5 and make worksheet from the pdf in exact same manner as is the pdf and place it there too do it one by one from class-5
also update https://ncert-alpha.vercel.app/?class=5&subject=c5-maths&book=part-1 with drive links saved from gogole drive at https://ncert-alpha.vercel.app/?class=5&subject=c5-maths&book=part-1  add all pdfs and images frmo drive folder under this link and also update the download button link to pdf from google drive
this is not nice
@[c:\Users\nextsem\Documents\ncert.nextsem.online\public\pdf\Class 6\6th Jigyasa\fhcu106.pdf] do same for this too class 6th maths 6th chapter
@[c:\Users\nextsem\Documents\ncert.nextsem.online\public\pdf\Class 6\6th Ganita Prakash\fegp106.pdf] do same for this pdf class 6th workbook similiar to this pdf
file:///C:/Users/nextsem/Documents/ncert.nextsem.online/public/pdf/Class%2008/8th%20Ganita%20Prakash%20p1/hegp107.pdf solve page number 165
```

---

## 📅 Monday Master Teaching Schedule & Portal Mapping

| Slot # | Time Window | Classes / Subjects | Direct Route Mapping | In-App / Live Vercel Action |
|---|---|---|---|---|
| **Slot 1** | **03:00 PM – 04:00 PM** | • Class 5: Mathematics<br>• Class 3: Mathematics<br>• Class 2: Mathematics | `?class=5&subject=c5-maths`<br>`?class=3&subject=c3-maths`<br>`?class=2&subject=c2-maths`<br><br>**Ch 6 Worksheets:**<br>• [Class 5 Maths Ch 6 Worksheet](/maths-class5-ch6-dairy-farm-worksheet.html)<br>• [Class 3 Maths Ch 6 Worksheet](/maths-class3-ch6-house-of-hundreds-worksheet.html)<br>• [Class 2 Maths Ch 6 Worksheet](/maths-class2-ch6-festival-decoration-worksheet.html) | In-app Class 5/3/2 chapter view or direct Vercel URL. Add Chapterwise PDF & Notes via Google Drive.<br><br>**Active Interactive Resources:**<br>🥛 [Class 5 Ch 6: Dairy Farm & Multiples Interactive Worksheet](/maths-class5-ch6-dairy-farm-worksheet.html)<br>🏛️ [Class 3 Ch 6: House of Hundreds – I Interactive Worksheet](/maths-class3-ch6-house-of-hundreds-worksheet.html)<br>🪔 [Class 2 Ch 6: Decoration for Festival Interactive Worksheet](/maths-class2-ch6-festival-decoration-worksheet.html) |
| **Slot 2** | **04:00 PM – 05:00 PM** | • Class 6: Mathematics<br>• Class 7: Mathematics<br>• Class 8: Mathematics | `?class=6&subject=c6-maths`<br>`?class=7&subject=c7-maths`<br>`?class=8&subject=c8-maths`<br><br>**Ch 6 Worksheets:**<br>• [Class 6 Maths Ch 6 Worksheet](/maths-class6-ch6-perimeter-and-area-worksheet.html)<br>• [Class 6 Science Ch 6 Worksheet](/science-class6-ch6-materials-around-us-worksheet.html)<br>• [Class 8 Maths Ch 7 Page 165 Solved](/maths-class8-ch7-proportional-reasoning-page165-solutions.html) | In-app Class 6/7/8 chapter view or direct Vercel URL. Add Chapterwise PDF & Notes via Google Drive.<br><br>**Active Interactive Resources:**<br>📐 [Class 6 Ch 6: Perimeter & Area Interactive Workbook](/maths-class6-ch6-perimeter-and-area-worksheet.html)<br>🧪 [Class 6 Ch 6: Materials Around Us Interactive Worksheet](/science-class6-ch6-materials-around-us-worksheet.html) |
| **Slot 3** | **05:00 PM – 06:00 PM** | • Class 9: Mathematics<br>• Class 10: Mathematics | `?class=9&subject=c9-maths`<br>`?class=10&subject=c10-maths` | In-app Class 9/10 chapter view or direct Vercel URL. Add Chapterwise PDF & Notes via Google Drive. |
| **Slot 4** | **06:00 PM – 07:00 PM** | • Class 11: Accountancy (Financial Accounting Part 1 & 2) | `?class=11&subject=c11-accountancy` | In-app Class 11 Accountancy chapter view or direct Vercel URL. Add Chapterwise PDF & Notes via Google Drive. |
| **Slot 5** | **07:00 PM – 08:00 PM** | • Class 12: History (Themes in Indian History Part 1, 2, 3) | `?class=12&subject=c12-history` | In-app Class 12 History chapter view or direct Vercel URL. Add Chapterwise PDF & Notes via Google Drive. |
| **Slot 6** | **08:00 PM – 09:30 PM** | • Class 12: Physics (Parts 1 & 2)<br>• NIOS: Senior Secondary Physics (312) | `?class=12&subject=c12-physics`<br>`?view=nios-books` | In-app Class 12 & NIOS Physics chapter view or direct Vercel URL. Add Chapterwise PDF & Notes via Google Drive. |
| **Slot 7** | **09:30 PM – 11:00 PM** | • BCA 1st Semester: Computer Basics & PC Software (BCS-011 / BCS-111)<br>• BCA 1st Semester: Mathematics (BCS-012) | `/bca/semester-1`<br>`https://ignou-study-notes-by-nextsem.web.app/bca/semester-1` | In-app IGNOU BCA 1st Semester Hub navigation. Add unitwise notes, PDFs & practice solutions. |

---

## ⚡ Direct URL Formats for Teaching & Content Management

- **Classes Gateway**: [https://ncert-alpha.vercel.app/?view=classes](https://ncert-alpha.vercel.app/?view=classes)
- **Localhost Development**: `http://localhost:3002/` (or `http://localhost:3002/?view=classes`)
- **PC Local Network**: `http://192.168.29.170:3002/` (or `http://192.168.29.170:3002/?view=classes`)
- **Admin Panel Access**: In navbar, click **Admin** or use passkey `admin123`
- **Authorized Google Drive Storage**: `newncert.nextsem@gmail.com`
  - Direct Drive Link: [Open Google Drive (newncert.nextsem@gmail.com)](https://accounts.google.com/AccountChooser?Email=newncert.nextsem@gmail.com&continue=https://drive.google.com/drive/my-drive)
  - NCERT Cloud Folder: [Google Drive Shared Folder (1CnGQZwM0BW9FacI0WnbWfq0VffMcnts4)](https://drive.google.com/drive/folders/1CnGQZwM0BW9FacI0WnbWfq0VffMcnts4)
