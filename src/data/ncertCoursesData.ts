// NCERT Courses & Units database
export interface NcertUnit {
  fileName: string;
  displayName: string;
  noteKey: string;        // unique key for our notes page
  ncertPdfUrl: string;    // official PDF from ncert.nic.in
  localPdfPath: string;   // fallback path under /public/ncert-pdfs/
  isInteractive?: boolean;
}

export interface NcertBlock {
  name: string;
  units: NcertUnit[];
}

export interface NcertSubject {
  code: string;
  name: string;
  class: string;
  emoji: string;
  color: string;
  blocks: NcertBlock[];
}

// Base URL for NCERT textbook PDFs
const NCERT = 'https://ncert.nic.in/textbook/pdf';

export const ncertSubjects: NcertSubject[] = [
  // ─── 11th Class ────────────────────────────────────────────────
  {
    code: "ACCT-11",
    name: "Financial Accounting-I",
    class: "11th Class",
    emoji: "📊",
    color: "#3b82f6",
    blocks: [
      {
        name: "Part 1 — Financial Accounting-I Chapters",
        units: [
          {
            fileName: "keac101.pdf",
            displayName: "Chapter 1: Introduction to Accounting",
            noteKey: "accounting-chapter-1",
            ncertPdfUrl: `${NCERT}/keac101.pdf`,
            localPdfPath: "Class 11/Financial Accounting-I/keac101.pdf"
          },
          {
            fileName: "keac102.pdf",
            displayName: "Chapter 2: Theory Base of Accounting",
            noteKey: "accounting-chapter-2",
            ncertPdfUrl: `${NCERT}/keac102.pdf`,
            localPdfPath: "Class 11/Financial Accounting-I/keac102.pdf"
          },
          {
            fileName: "keac103.pdf",
            displayName: "Chapter 3: Recording of Transactions-I",
            noteKey: "accounting-chapter-3",
            ncertPdfUrl: `${NCERT}/keac103.pdf`,
            localPdfPath: "Class 11/Financial Accounting-I/keac103.pdf"
          },
          {
            fileName: "keac104.pdf",
            displayName: "Chapter 4: Recording of Transactions-II",
            noteKey: "accounting-chapter-4",
            ncertPdfUrl: `${NCERT}/keac104.pdf`,
            localPdfPath: "Class 11/Financial Accounting-I/keac104.pdf"
          },
          {
            fileName: "keac105.pdf",
            displayName: "Chapter 5: Bank Reconciliation Statement",
            noteKey: "accounting-chapter-5",
            ncertPdfUrl: `${NCERT}/keac105.pdf`,
            localPdfPath: "Class 11/Financial Accounting-I/keac105.pdf"
          },
          {
            fileName: "keac106.pdf",
            displayName: "Chapter 6: Trial Balance and Rectification of Errors",
            noteKey: "accounting-chapter-6",
            ncertPdfUrl: `${NCERT}/keac106.pdf`,
            localPdfPath: "Class 11/Financial Accounting-I/keac106.pdf"
          },
          {
            fileName: "keac107.pdf",
            displayName: "Chapter 7: Depreciation, Provisions and Reserves",
            noteKey: "accounting-chapter-7",
            ncertPdfUrl: `${NCERT}/keac107.pdf`,
            localPdfPath: "Class 11/Financial Accounting-I/keac107.pdf"
          },
          {
            fileName: "keac1ps.pdf",
            displayName: "Chapter 8: Practical Problems & Solutions",
            noteKey: "accounting-chapter-8",
            ncertPdfUrl: `${NCERT}/keac1ps.pdf`,
            localPdfPath: "Class 11/Financial Accounting-I/keac1ps.pdf"
          }
        ]
      }
    ]
  },
  {
    code: "ECO-11",
    name: "Economics — Indian Economic Development",
    class: "11th Class",
    emoji: "📈",
    color: "#10b981",
    blocks: [
      {
        name: "Block 1 — Development Experience & Policies",
        units: [
          {
            fileName: "Indian Economy on the Eve of Independence.pdf",
            displayName: "Chapter 1: Indian Economy on the Eve of Independence",
            noteKey: "economics-11-chapter-1",
            ncertPdfUrl: `${NCERT}/keec101.pdf`,
            localPdfPath: "Class 11/Economics/keec101.pdf"
          },
          {
            fileName: "Indian Economy 1950-1990.pdf",
            displayName: "Chapter 2: Indian Economy 1950–1990",
            noteKey: "economics-11-chapter-2",
            ncertPdfUrl: `${NCERT}/keec102.pdf`,
            localPdfPath: "Class 11/Economics/keec102.pdf"
          },
          {
            fileName: "Liberalisation Privatisation and Globalisation.pdf",
            displayName: "Chapter 3: Liberalisation, Privatisation & Globalisation",
            noteKey: "economics-11-chapter-3",
            ncertPdfUrl: `${NCERT}/keec103.pdf`,
            localPdfPath: "Class 11/Economics/keec103.pdf"
          }
        ]
      },
      {
        name: "Block 2 — Current Challenges & Future Prospects",
        units: [
          {
            fileName: "Poverty.pdf",
            displayName: "Chapter 4: Poverty",
            noteKey: "economics-11-chapter-4",
            ncertPdfUrl: `${NCERT}/keec104.pdf`,
            localPdfPath: "Class 11/Economics/keec104.pdf"
          },
          {
            fileName: "Human Capital Formation in India.pdf",
            displayName: "Chapter 5: Human Capital Formation in India",
            noteKey: "economics-11-chapter-5",
            ncertPdfUrl: `${NCERT}/keec105.pdf`,
            localPdfPath: "Class 11/Economics/keec105.pdf"
          },
          {
            fileName: "Rural Development.pdf",
            displayName: "Chapter 6: Rural Development",
            noteKey: "economics-11-chapter-6",
            ncertPdfUrl: `${NCERT}/keec106.pdf`,
            localPdfPath: "Class 11/Economics/keec106.pdf"
          },
          {
            fileName: "Employment Growth Informalisation and Other Issues.pdf",
            displayName: "Chapter 7: Employment — Growth, Informalisation & Issues",
            noteKey: "economics-11-chapter-7",
            ncertPdfUrl: `${NCERT}/keec107.pdf`,
            localPdfPath: "Class 11/Economics/keec107.pdf"
          },
          {
            fileName: "Infrastructure.pdf",
            displayName: "Chapter 8: Infrastructure",
            noteKey: "economics-11-chapter-8",
            ncertPdfUrl: `${NCERT}/keec108.pdf`,
            localPdfPath: "Class 11/Economics/keec108.pdf"
          },
          {
            fileName: "Environment and Sustainable Development.pdf",
            displayName: "Chapter 9: Environment & Sustainable Development",
            noteKey: "economics-11-chapter-9",
            ncertPdfUrl: `${NCERT}/keec109.pdf`,
            localPdfPath: "Class 11/Economics/keec109.pdf"
          }
        ]
      }
    ]
  },
  {
    code: "HIST-11",
    name: "Themes in World History (विश्व इतिहास के कुछ विषय)",
    class: "11th Class",
    emoji: "📜",
    color: "#a855f7",
    blocks: [
      {
        name: "विषय 4 — बदलती हुई सांस्कृतिक परंपराएँ / तीन वर्ग",
        units: [
          {
            fileName: "khhs104.pdf",
            displayName: "विषय 4: तीन वर्ग / बदलती सांस्कृतिक परंपराएँ (खोज, मेनर, नाइट, पादरी)",
            noteKey: "history-11-chapter-4",
            ncertPdfUrl: `${NCERT}/khhs104.pdf`,
            localPdfPath: "Class 11/11th itihas/khhs104.pdf",
            isInteractive: true
          }
        ]
      }
    ]
  },

  // ─── 12th Class ────────────────────────────────────────────────
  {
    code: "PHYS-12",
    name: "Physics Part-1",
    class: "12th Class",
    emoji: "⚡",
    color: "#f59e0b",
    blocks: [
      {
        name: "Block 1 — Electrodynamics",
        units: [
          {
            fileName: "Current Electricity.pdf",
            displayName: "Chapter 3: Current Electricity",
            noteKey: "physics-chapter-3",
            ncertPdfUrl: `${NCERT}/leph103.pdf`,
            localPdfPath: "Class 12/Physics/leph103.pdf"
          },
          {
            fileName: "leph107.pdf",
            displayName: "Chapter 7: Alternating Current (AC Circuits, Resonance & Transformers)",
            noteKey: "physics-12-chapter-7",
            ncertPdfUrl: `${NCERT}/leph107.pdf`,
            localPdfPath: "Class 12/12th Physics Part-I/leph107.pdf",
            isInteractive: true
          }
        ]
      }
    ]
  },
  {
    code: "HIST-12-II",
    name: "Themes in Indian History-II",
    class: "12th Class",
    emoji: "📜",
    color: "#a855f7",
    blocks: [
      {
        name: "Part II — Themes in Indian History-II Chapters",
        units: [
          {
            fileName: "lhhs201.pdf",
            displayName: "अध्याय 5: यात्रियों के नज़रिए — समाज के बारे में उनकी समझ (अल-बिरूनी, इब्न बतूता, बर्नियर)",
            noteKey: "history-12-chapter-5",
            ncertPdfUrl: `${NCERT}/lhhs201.pdf`,
            localPdfPath: "Class 12/12th Bharatiya Itihas ke kuchh Vishay-II/lhhs201.pdf",
            isInteractive: true
          }
        ]
      }
    ]
  },
  {
    code: "HIST-12",
    name: "History — Themes in Indian History Part-III",
    class: "12th Class",
    emoji: "🏛️",
    color: "#a855f7",
    blocks: [
      {
        name: "Block 1 — Colonialism & Nation-Building",
        units: [
          {
            fileName: "Colonialism and the Countryside.pdf",
            displayName: "Chapter 10: Colonialism & the Countryside",
            noteKey: "history-12-chapter-10",
            ncertPdfUrl: `${NCERT}/lhis301.pdf`,
            localPdfPath: "Class 12/History/lhis301.pdf"
          },
          {
            fileName: "Rebels and the Raj 1857 Revolt.pdf",
            displayName: "Chapter 11: Rebels & the Raj — 1857 Revolt",
            noteKey: "history-12-chapter-11",
            ncertPdfUrl: `${NCERT}/lhis302.pdf`,
            localPdfPath: "Class 12/History/lhis302.pdf"
          },
          {
            fileName: "Colonial Cities.pdf",
            displayName: "Chapter 12: Colonial Cities",
            noteKey: "history-12-chapter-12",
            ncertPdfUrl: `${NCERT}/lhis303.pdf`,
            localPdfPath: "Class 12/History/lhis303.pdf"
          }
        ]
      },
      {
        name: "Block 2 — Mahatma Gandhi & Partition",
        units: [
          {
            fileName: "Mahatma Gandhi and the Nationalist Movement.pdf",
            displayName: "Chapter 13: Mahatma Gandhi & the Nationalist Movement",
            noteKey: "history-12-chapter-13",
            ncertPdfUrl: `${NCERT}/lhis304.pdf`,
            localPdfPath: "Class 12/History/lhis304.pdf"
          },
          {
            fileName: "Understanding Partition.pdf",
            displayName: "Chapter 14: Understanding Partition",
            noteKey: "history-12-chapter-14",
            ncertPdfUrl: `${NCERT}/lhis305.pdf`,
            localPdfPath: "Class 12/History/lhis305.pdf"
          },
          {
            fileName: "Framing the Constitution.pdf",
            displayName: "Chapter 15: Framing the Constitution",
            noteKey: "history-12-chapter-15",
            ncertPdfUrl: `${NCERT}/lhis306.pdf`,
            localPdfPath: "Class 12/History/lhis306.pdf"
          }
        ]
      }
    ]
  },

  // ─── NIOS Secondary (Class 10) ──────────────────────────────────
  {
    code: "NIOS-MATH-211",
    name: "NIOS Mathematics (211)",
    class: "10th Class",
    emoji: "📐",
    color: "#3b82f6",
    blocks: [
      {
        name: "मॉड्यूल 1: बीजगणित (Module 1: Algebra)",
        units: [
          {
            fileName: "Chapter-1.pdf",
            displayName: "पाठ 1: संख्या निकाय (Number Systems)",
            noteKey: "nios-math-chapter-1",
            ncertPdfUrl: "https://nios.ac.in",
            localPdfPath: "NIOS/Mathematics (211)/Chapter-1.pdf",
            isInteractive: true
          }
        ]
      }
    ]
  }
];
