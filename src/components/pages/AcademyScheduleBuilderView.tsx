import React, { useState, useEffect, useMemo } from 'react';
import { 
  Calendar, 
  CalendarDays,
  Clock, 
  Plus, 
  Edit2, 
  Trash2, 
  Copy, 
  Download, 
  Upload, 
  RefreshCw, 
  Eye, 
  BookOpen, 
  Search, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  X,
  Zap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { CLASSES_DATA } from '../../data/ncertData';
import { getMergedClassesData } from '../../utils/customChaptersStorage';

export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export type ActivityType = 'LESSON' | 'TEST' | 'QUIZ' | 'STUDIO' | 'REVISION';

export const BCA_SEMESTERS = [
  'BCA-sem1',
  'BCA-sem2',
  'BCA-sem3',
  'BCA-sem4',
  'BCA-sem5',
  'BCA-sem6'
] as const;

export type BcaSemester = typeof BCA_SEMESTERS[number];

export interface CurriculumChapterOption {
  id: string;
  subjectName: string;
  chapterNumber: number;
  title: string;
  summary: string;
  pdfUrl?: string; // Resource Link or Official Lesson Link
  type?: 'THEORY' | 'PRACTICAL';
}

export const BCA_CHAPTERS_MAP: Record<string, CurriculumChapterOption[]> = {
  'BCA-sem1': [
    // 💻 Practical Lessons (https://ignou-study-notes-by-nextsem.web.app/bca/practical/)
    {
      id: 'bca1-practical-portal',
      subjectName: 'BCSL-013 PC Software & Web Lab (Practical)',
      chapterNumber: 0,
      title: '💻 BCA Practical Learning Portal (Interactive Sprints)',
      summary: 'Hands-on practical portal covering Days 1–90 coding sprints, VS Code setups, technical viva checks, and GitHub pushes.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/practical/',
      type: 'PRACTICAL'
    },
    {
      id: 'bca1-practical-day1',
      subjectName: 'BCSL-013 PC Software & Web Lab (Practical)',
      chapterNumber: 1,
      title: '💻 Practical Day 1: HTML Setup & First Webpage Coding Lab',
      summary: 'VS Code HTML5 document structure, heading/paragraph tags, live browser preview, and first Git commit workflow.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/practical/day-1-html-setup-first-webpage/',
      type: 'PRACTICAL'
    },
    {
      id: 'bca1-practical-day2',
      subjectName: 'BCSL-013 PC Software & Web Lab (Practical)',
      chapterNumber: 2,
      title: '💻 Practical Day 2: HTML Headings, Paragraphs & Text Formatting',
      summary: 'Heading hierarchy (h1–h6), semantic typography (strong, em, mark, del), and article formatting lab.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/practical/day-2-html-headings-paragraphs-text-formatting/',
      type: 'PRACTICAL'
    },
    {
      id: 'bca1-practical-day3',
      subjectName: 'BCSL-013 PC Software & Web Lab (Practical)',
      chapterNumber: 3,
      title: '💻 Practical Day 3: HTML Links, Anchor Attributes & Relative Paths',
      summary: 'Hyperlink navigation, absolute vs relative paths, target=_blank, and media embedding.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/practical/day-3-html-links-and-images/',
      type: 'PRACTICAL'
    },
    {
      id: 'bca1-practical-day4',
      subjectName: 'BCSL-013 PC Software & Web Lab (Practical)',
      chapterNumber: 4,
      title: '💻 Practical Day 4: HTML Lists & Tabular Data Representation',
      summary: 'Ordered/unordered nested lists, table elements, thead, tbody, row/column spans, and data grids.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/practical/day-4-html-lists-and-tables/',
      type: 'PRACTICAL'
    },
    {
      id: 'bca1-practical-day5',
      subjectName: 'BCSL-013 PC Software & Web Lab (Practical)',
      chapterNumber: 5,
      title: '💻 Practical Day 5: HTML Forms & Input Elements',
      summary: 'Form controls, text, email, radio, checkbox, native HTML5 validation, and form submission.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/practical/day-5-html-forms-and-input-elements/',
      type: 'PRACTICAL'
    },
    {
      id: 'bca1-practical-day6',
      subjectName: 'BCSL-013 PC Software & Web Lab (Practical)',
      chapterNumber: 6,
      title: '💻 Practical Day 6: Semantic HTML5 Elements & Page Structure',
      summary: 'Header, nav, main, section, article, aside, footer page wireframing for accessibility and SEO.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/practical/day-6-html-semantic-elements-and-page-structure/',
      type: 'PRACTICAL'
    },
    {
      id: 'bca1-practical-day10',
      subjectName: 'BCSL-013 PC Software & Web Lab (Practical)',
      chapterNumber: 10,
      title: '💻 Practical Day 10: Portfolio Milestone Project & Git Deploy',
      summary: 'Full-stack static portfolio development, responsive navigation, and live GitHub Pages release.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/practical/day-10-portfolio-milestone-project/',
      type: 'PRACTICAL'
    },
    {
      id: 'bca1-practical-day20',
      subjectName: 'BCSL-013 PC Software & Web Lab (Practical)',
      chapterNumber: 20,
      title: '💻 Practical Day 20: 🪟 Windows 11 CLI Commands & Terminal Setup',
      summary: 'Command Prompt interpreter (DIR, CD, MKDIR, TREE), batch scripts, environment variables, and Git setup.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/practical/day-20-windows-11-cli-git-setup/',
      type: 'PRACTICAL'
    },

    // 📖 Theoretical Lessons (https://ignou-study-notes-by-nextsem.web.app/bca/)
    {
      id: 'bca1-bcs111-ch1',
      subjectName: 'BCS-111 Computer Basics (Theory)',
      chapterNumber: 1,
      title: 'Unit 1: Computer Hardware & CPU Architecture',
      summary: 'Von Neumann architecture, system bus, registers (PC, ACC, IR), memory hierarchy, cache levels & peripheral devices.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/semester-1/bcs-011-computer-basics/unit-1/lessons/',
      type: 'THEORY'
    },
    {
      id: 'bca1-bcs111-ch2',
      subjectName: 'BCS-111 Computer Basics (Theory)',
      chapterNumber: 2,
      title: 'Unit 2: 🪟 Windows 11 CLI & OS Fundamentals',
      summary: 'Windows CMD command-line interpreter (DIR, CD, MKDIR, TREE), batch scripts & file system permissions.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/semester-1/bcs-011-computer-basics/unit-2-operating-system/',
      type: 'THEORY'
    },
    {
      id: 'bca1-bcs111-ch3',
      subjectName: 'BCS-111 Computer Basics (Theory)',
      chapterNumber: 3,
      title: 'Unit 3: Computer Networks & Internet Protocols',
      summary: 'OSI 7-layer model, TCP/IP stack, DNS, HTTP/HTTPS and IPv4/IPv6 packet structure.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/notes/bcs-011-block-3-unit-1-networking-and-internet/',
      type: 'THEORY'
    },
    {
      id: 'bca1-bcs111-ch4',
      subjectName: 'BCS-111 Computer Basics (Theory)',
      chapterNumber: 4,
      title: 'Unit 4: Concepts in Programming Languages & Compilers',
      summary: 'High-level vs low-level languages, compilers, interpreters, linkers, and algorithm flowcharts.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/notes/bcs-011-unit-3-programming-languages/',
      type: 'THEORY'
    },
    {
      id: 'bca1-bcs012-ch1',
      subjectName: 'BCS-012 Basic Mathematics (Theory)',
      chapterNumber: 1,
      title: 'Unit 1: Determinants & Matrices',
      summary: 'Matrix operations, Cramer rule, inverse of matrix and linear equations solving methods.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/semester-1/bcs-012-basic-mathematics/',
      type: 'THEORY'
    },
    {
      id: 'bca1-bcs012-ch2',
      subjectName: 'BCS-012 Basic Mathematics (Theory)',
      chapterNumber: 2,
      title: 'Unit 2: Differential Calculus & Limits',
      summary: 'Limits, continuity, differentiation techniques and rate of change applications.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/semester-1/bcs-012-basic-mathematics/',
      type: 'THEORY'
    },
    {
      id: 'bca1-begla136-ch1',
      subjectName: 'BEGLA-136 English at Workplace (Theory)',
      chapterNumber: 1,
      title: 'Unit 1: Professional Communication & Business Writing',
      summary: 'Workplace verbal communication, formal email etiquette, report writing, and presentation skills.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/semester-1/begla-136-english/',
      type: 'THEORY'
    }
  ],
  'BCA-sem2': [
    {
      id: 'bca2-mcsl017-lab',
      subjectName: 'MCSL-017 C & Data Structures Lab (Practical)',
      chapterNumber: 1,
      title: '💻 Practical Lab: C Pointers, Memory Allocation & Structs',
      summary: 'Hands-on pointer arithmetic, malloc/free memory control, structs, and terminal algorithms.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/practical/',
      type: 'PRACTICAL'
    },
    {
      id: 'bca2-mcs011-ch1',
      subjectName: 'MCS-011 Problem Solving & Python (Theory)',
      chapterNumber: 1,
      title: 'Unit 1: Python Fundamentals & Data Types',
      summary: 'Interactive Python interpreter, variables, dynamic typing, strings, lists, tuples and dictionaries.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/',
      type: 'THEORY'
    },
    {
      id: 'bca2-mcs011-ch2',
      subjectName: 'MCS-011 Problem Solving & Python (Theory)',
      chapterNumber: 2,
      title: 'Unit 2: Control Flow, Loops & Functions',
      summary: 'Conditional branching, for/while loops, recursion, lambda functions and module imports.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/',
      type: 'THEORY'
    },
    {
      id: 'bca2-mcs012-ch1',
      subjectName: 'MCS-012 Computer Organization (Theory)',
      chapterNumber: 1,
      title: 'Unit 1: Digital Logic & Boolean Algebra',
      summary: 'Logic gates, truth tables, Karnaugh maps, multiplexers and flip-flop circuits.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/',
      type: 'THEORY'
    }
  ],
  'BCA-sem3': [
    {
      id: 'bca3-mcsl025-lab',
      subjectName: 'MCSL-025 Data Structures Lab (Practical)',
      chapterNumber: 1,
      title: '💻 Practical Lab: Linked Lists, Binary Trees & Sorting in C',
      summary: 'Interactive coding lab for singly/doubly linked lists, BST traversals, QuickSort, and time complexity.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/practical/',
      type: 'PRACTICAL'
    },
    {
      id: 'bca3-mcs021-ch1',
      subjectName: 'MCS-021 Data Structures & Algorithms (Theory)',
      chapterNumber: 1,
      title: 'Unit 1: Arrays, Stacks & Queues',
      summary: 'LIFO stack operations, infix-to-postfix conversion, circular queues and deque implementations.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/',
      type: 'THEORY'
    },
    {
      id: 'bca3-mcs023-ch1',
      subjectName: 'MCS-023 Database Management Systems (Theory)',
      chapterNumber: 1,
      title: 'Unit 1: Relational Data Model & SQL Queries',
      summary: 'ER modeling, normalization (1NF, 2NF, 3NF, BCNF), foreign keys and SQL joins.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/',
      type: 'THEORY'
    }
  ],
  'BCA-sem4': [
    {
      id: 'bca4-java-lab',
      subjectName: 'MCS-024 Java Lab (Practical)',
      chapterNumber: 1,
      title: '💻 Practical Lab: Java OOP, Multithreading & Exception Handling',
      summary: 'Hands-on class hierarchy, interface polymorphism, thread lifecycle, and JDBC database connectivity.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/practical/',
      type: 'PRACTICAL'
    },
    {
      id: 'bca4-mcs024-ch1',
      subjectName: 'MCS-024 Java & OOP Technologies (Theory)',
      chapterNumber: 1,
      title: 'Unit 1: OOP Principles & Classes in Java',
      summary: 'Encapsulation, constructors, method overloading, access specifiers and JVM memory architecture.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/',
      type: 'THEORY'
    }
  ],
  'BCA-sem5': [
    {
      id: 'bca5-fullstack-lab',
      subjectName: 'BCSL-056 Full Stack Lab (Practical)',
      chapterNumber: 1,
      title: '💻 Practical Lab: React, Node.js REST APIs & Cloud Deployment',
      summary: 'Full-stack application development, component state, Express routes, and production cloud hosting.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/practical/',
      type: 'PRACTICAL'
    },
    {
      id: 'bca5-bcs051-ch1',
      subjectName: 'BCS-051 Software Engineering (Theory)',
      chapterNumber: 1,
      title: 'Unit 1: Software Development Life Cycle (SDLC)',
      summary: 'Waterfall, Spiral, Agile Scrum sprints, user stories and software feasibility studies.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/',
      type: 'THEORY'
    }
  ],
  'BCA-sem6': [
    {
      id: 'bca6-capstone-lab',
      subjectName: 'BCSP-064 Major Capstone Project (Practical)',
      chapterNumber: 1,
      title: '💻 Practical Capstone: Production Software & Technical Viva Defense',
      summary: 'Industry capstone product build, GitHub code review, documentation, and technical viva voce simulation.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/practical/',
      type: 'PRACTICAL'
    },
    {
      id: 'bca6-bcs062-ch1',
      subjectName: 'BCS-062 E-Commerce & Web Development (Theory)',
      chapterNumber: 1,
      title: 'Unit 1: Modern Web Architecture & REST APIs',
      summary: 'Client-server model, HTTP status codes, JSON payload processing and RESTful endpoints.',
      pdfUrl: 'https://ignou-study-notes-by-nextsem.web.app/bca/',
      type: 'THEORY'
    }
  ]
};

export const ACADEMIC_MONTHS = [
  'April 2026',
  'May 2026',
  'June 2026',
  'July 2026',
  'August 2026',
  'September 2026',
  'October 2026',
  'November 2026',
  'December 2026',
  'January 2027',
  'February 2027',
  'March 2027'
] as const;

export type AcademicMonth = typeof ACADEMIC_MONTHS[number];

export const TIME_SLOTS = [
  '06:00 AM', '06:30 AM',
  '07:00 AM', '07:30 AM',
  '08:00 AM', '08:30 AM',
  '09:00 AM', '09:30 AM',
  '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM',
  '01:00 PM', '01:30 PM',
  '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM',
  '04:00 PM', '04:30 PM',
  '05:00 PM', '05:30 PM',
  '06:00 PM', '06:30 PM',
  '07:00 PM', '07:30 PM',
  '08:00 PM', '08:30 PM',
  '09:00 PM', '09:30 PM',
  '10:00 PM'
];

export const FACULTY_OPTIONS = [
  'Er. Manoj Kumar',
  'Nextsem Academy Faculty',
  'Senior Subject Expert',
  'Visiting Board Examiner',
  'Er. Manoj Kumar (HOD)',
  'Specialist / Mentor'
];

export interface ScheduleItem {
  id: string;
  month?: string;    // e.g. "April 2026" (Starts 1 April 2026)
  dayDate?: number;  // 1 to 30 for day-wise April 2026 calendar
  fullDate?: string; // e.g. "2026-04-01"
  day: DayOfWeek;
  startTime: string; // e.g. "03:00 PM"
  endTime: string;   // e.g. "04:00 PM"
  classNum: number | string;  // 1 to 12 or "BCA-sem1" to "BCA-sem6"
  subject: string;
  lessonTitle: string;
  activityType: ActivityType;
  instructor: string;
  description: string;
  resourceLink?: string; // Optional URL or in-app view link
  status: 'SCHEDULED' | 'LIVE' | 'COMPLETED' | 'DRAFT';
  colorTag?: string;
}

export const MONTH_NAMES_MAP: Record<string, number> = {
  'January': 0, 'February': 1, 'March': 2, 'April': 3,
  'May': 4, 'June': 5, 'July': 6, 'August': 7,
  'September': 8, 'October': 9, 'November': 10, 'December': 11
};

export const ACADEMIC_CALENDAR_MONTHS = [
  'April 2026',
  'May 2026',
  'June 2026',
  'July 2026',
  'August 2026',
  'September 2026',
  'October 2026',
  'November 2026',
  'December 2026'
] as const;

export const parseMonthYear = (monthStr: string = 'April 2026'): { monthIndex: number; year: number; monthName: string } => {
  const parts = monthStr.split(' ');
  const monthName = parts[0] || 'April';
  const year = parseInt(parts[1] || '2026', 10);
  const monthIndex = MONTH_NAMES_MAP[monthName] ?? 3;
  return { monthIndex, year, monthName };
};

export const getDaysInMonth = (monthStr: string = 'April 2026'): number => {
  const { monthIndex, year } = parseMonthYear(monthStr);
  return new Date(year, monthIndex + 1, 0).getDate();
};

export const getDayOfWeekForDate = (dayDate: number, monthStr: string = 'April 2026'): DayOfWeek => {
  const { monthIndex, year } = parseMonthYear(monthStr);
  const d = new Date(year, monthIndex, dayDate);
  const days: DayOfWeek[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[d.getDay()];
};

export const getDayOfWeekForApril2026 = (dayDate: number): DayOfWeek => {
  return getDayOfWeekForDate(dayDate, 'April 2026');
};

// Comprehensive 30-Day Curriculum Plan for Class 1 (April 2026)
// Classes: Mon–Fri 03:00 PM – 04:00 PM | Sat: Weekly Test | Sun: Weekly Leave
export const CLASS_1_APRIL_2026_DAYS: ScheduleItem[] = [
  {
    id: 'apr-2026-c1-d1',
    month: 'April 2026',
    dayDate: 1,
    fullDate: '2026-04-01',
    day: 'Wednesday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Hindi (Sarangi)',
    lessonTitle: 'पाठ 1: मीना का परिवार (इकाई 1: परिवार - चित्र पठन व परिचय)',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'मीना के परिवार का परिचय: दादा-दादी, माता-पिता और छोटा भाई। चित्र-पठन, नए शब्द और परिवार के प्रति आदर व प्रेम।',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/ahsr101.pdf',
    status: 'SCHEDULED',
    colorTag: '#ec4899'
  },
  {
    id: 'apr-2026-c1-d2',
    month: 'April 2026',
    dayDate: 2,
    fullDate: '2026-04-02',
    day: 'Thursday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Mathematics (Joyful)',
    lessonTitle: 'Chapter 1: Finding the Furry Cat! (Pre-number Concepts & Positions)',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'FLN Spatial Awareness: inside/outside, top/bottom, above/below, near/far, and bigger/smaller with playful cat hide-and-seek story.',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aejm101.pdf',
    status: 'SCHEDULED',
    colorTag: '#8b5cf6'
  },
  {
    id: 'apr-2026-c1-d3',
    month: 'April 2026',
    dayDate: 3,
    fullDate: '2026-04-03',
    day: 'Friday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'English (Mridang)',
    lessonTitle: 'Unit 1: Two Little Hands (Action Rhyme & Body Parts Awareness)',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'Action song: Clap hands, tap feet, open eyes wide, and turn head side to side. Rhythm singing, phonemic sounds & motor movement.',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aemr101.pdf',
    status: 'SCHEDULED',
    colorTag: '#f59e0b'
  },
  {
    id: 'apr-2026-c1-d4',
    month: 'April 2026',
    dayDate: 4,
    fullDate: '2026-04-04',
    day: 'Saturday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Weekly Assessment',
    lessonTitle: '📝 Weekly Test 1: Meena’s Family, Furry Cat Positions & Body Parts Rhyme',
    activityType: 'TEST',
    instructor: 'Er. Manoj Kumar',
    description: '15 Interactive questions testing spatial positions, body parts, and family relationships with instant feedback.',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aejm101.pdf',
    status: 'SCHEDULED',
    colorTag: '#ef4444'
  },
  {
    id: 'apr-2026-c1-d5',
    month: 'April 2026',
    dayDate: 5,
    fullDate: '2026-04-05',
    day: 'Sunday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Holiday / Leave',
    lessonTitle: '🌴 Sunday Holiday — Weekly Leave (Rest & Family Time)',
    activityType: 'REVISION',
    instructor: 'Er. Manoj Kumar',
    description: 'Nextsem Academy is on leave. Enjoy family storytelling, creative coloring & outdoor play with parents.',
    status: 'COMPLETED',
    colorTag: '#10b981'
  },
  {
    id: 'apr-2026-c1-d6',
    month: 'April 2026',
    dayDate: 6,
    fullDate: '2026-04-06',
    day: 'Monday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Mathematics (Joyful)',
    lessonTitle: 'Chapter 1: Inside vs Outside Interactive Spatial Sorting',
    activityType: 'STUDIO',
    instructor: 'Er. Manoj Kumar',
    description: 'Hands-on spatial sorting: placing toys inside the basket and playground balls outside on interactive digital canvas.',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aejm101.pdf',
    status: 'SCHEDULED',
    colorTag: '#8b5cf6'
  },
  {
    id: 'apr-2026-c1-d7',
    month: 'April 2026',
    dayDate: 7,
    fullDate: '2026-04-07',
    day: 'Tuesday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'English (Mridang)',
    lessonTitle: 'Unit 1 Chapter 2: Greetings (Saying Good Morning, Hello & Namaste)',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'Daily social etiquette: greeting teachers, family members, friends and neighbors with love and respect.',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aemr102.pdf',
    status: 'SCHEDULED',
    colorTag: '#f59e0b'
  },
  {
    id: 'apr-2026-c1-d8',
    month: 'April 2026',
    dayDate: 8,
    fullDate: '2026-04-08',
    day: 'Wednesday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Hindi (Sarangi)',
    lessonTitle: 'पाठ 2: दादा-दादी (इकाई 1: परिवार - बुजुर्गों का आदर व प्यार)',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'दादाजी का चश्मा, दादी की मीठी लोरी और परिवार के बुजुर्गों का सम्मान करने की सुंदर सीख।',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/ahsr102.pdf',
    status: 'SCHEDULED',
    colorTag: '#ec4899'
  },
  {
    id: 'apr-2026-c1-d9',
    month: 'April 2026',
    dayDate: 9,
    fullDate: '2026-04-09',
    day: 'Thursday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Mathematics (Joyful)',
    lessonTitle: 'Chapter 2: What is Long? What is Round? (Shapes & Objects Exploration)',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'Observing long pencils, round coins, rolling balls and sliding rulers in everyday surroundings.',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aejm102.pdf',
    status: 'SCHEDULED',
    colorTag: '#8b5cf6'
  },
  {
    id: 'apr-2026-c1-d10',
    month: 'April 2026',
    dayDate: 10,
    fullDate: '2026-04-10',
    day: 'Friday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'English (Mridang)',
    lessonTitle: 'Unit 1: Polite Words Workshop (Thank You, Please & Sorry Practice)',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'Interactive conversation practice using polite golden words in classroom and home scenarios.',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aemr102.pdf',
    status: 'SCHEDULED',
    colorTag: '#f59e0b'
  },
  {
    id: 'apr-2026-c1-d11',
    month: 'April 2026',
    dayDate: 11,
    fullDate: '2026-04-11',
    day: 'Saturday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Weekly Assessment',
    lessonTitle: '📝 Weekly Test 2: Long vs Round Shapes & Polite Greetings Dialogue Check',
    activityType: 'TEST',
    instructor: 'Er. Manoj Kumar',
    description: 'Saturday Assessment: Sorting shapes that roll or slide, matching polite words and family roles.',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aejm102.pdf',
    status: 'SCHEDULED',
    colorTag: '#ef4444'
  },
  {
    id: 'apr-2026-c1-d12',
    month: 'April 2026',
    dayDate: 12,
    fullDate: '2026-04-12',
    day: 'Sunday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Holiday / Leave',
    lessonTitle: '🌴 Sunday Holiday — Weekly Leave (Rest & Outdoor Play)',
    activityType: 'REVISION',
    instructor: 'Er. Manoj Kumar',
    description: 'Weekly Sunday Leave: No scheduled academic classes. Rest, recharge and practice creative drawing.',
    status: 'COMPLETED',
    colorTag: '#10b981'
  },
  {
    id: 'apr-2026-c1-d13',
    month: 'April 2026',
    dayDate: 13,
    fullDate: '2026-04-13',
    day: 'Monday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Mathematics (Joyful)',
    lessonTitle: 'Chapter 2: Rolling vs Sliding Interactive Lab Studio',
    activityType: 'STUDIO',
    instructor: 'Er. Manoj Kumar',
    description: 'Testing object physics: ramp test showing why wheels and balls roll while flat blocks slide smoothly.',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aejm102.pdf',
    status: 'SCHEDULED',
    colorTag: '#8b5cf6'
  },
  {
    id: 'apr-2026-c1-d14',
    month: 'April 2026',
    dayDate: 14,
    fullDate: '2026-04-14',
    day: 'Tuesday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'English (Mridang)',
    lessonTitle: 'Unit 2 Chapter 3: Picture Time (Classroom, Bag & Nature Vocabulary)',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'Visual literacy: identifying and naming school bags, bottles, pencils, notebooks, and playground trees.',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aemr103.pdf',
    status: 'SCHEDULED',
    colorTag: '#f59e0b'
  },
  {
    id: 'apr-2026-c1-d15',
    month: 'April 2026',
    dayDate: 15,
    fullDate: '2026-04-15',
    day: 'Wednesday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Hindi (Sarangi)',
    lessonTitle: 'पाठ 3: रीना का दिन (इकाई 1: परिवार - दैनिक दिनचर्या व अच्छी आदतें)',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'सुबह समय पर उठना, दाँत साफ करना, स्नान करना, और विद्यालय जाने की अच्छी आदतें।',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/ahsr103.pdf',
    status: 'SCHEDULED',
    colorTag: '#ec4899'
  },
  {
    id: 'apr-2026-c1-d16',
    month: 'April 2026',
    dayDate: 16,
    fullDate: '2026-04-16',
    day: 'Thursday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Mathematics (Joyful)',
    lessonTitle: 'Chapter 3: Mango Treat (Numbers 1 to 5 Counting & Rhymes)',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'One-to-one counting using sweet mangoes, finger counts, and number song from 1 to 5.',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aejm103.pdf',
    status: 'SCHEDULED',
    colorTag: '#8b5cf6'
  },
  {
    id: 'apr-2026-c1-d17',
    month: 'April 2026',
    dayDate: 17,
    fullDate: '2026-04-17',
    day: 'Friday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'English (Mridang)',
    lessonTitle: 'Unit 2 Chapter 4: The Cap-seller and the Monkeys (Folk Story Reading)',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'Clever problem solving: how the cap-seller outsmarted playful monkeys through imitation.',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aemr104.pdf',
    status: 'SCHEDULED',
    colorTag: '#f59e0b'
  },
  {
    id: 'apr-2026-c1-d18',
    month: 'April 2026',
    dayDate: 18,
    fullDate: '2026-04-18',
    day: 'Saturday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Weekly Assessment',
    lessonTitle: '📝 Weekly Test 3: Numbers 1 to 5 Counting & Cap-seller Story Comprehension',
    activityType: 'TEST',
    instructor: 'Er. Manoj Kumar',
    description: 'Mid-month assessment: counting objects up to 5, story sequence ordering, and vocabulary.',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aejm103.pdf',
    status: 'SCHEDULED',
    colorTag: '#ef4444'
  },
  {
    id: 'apr-2026-c1-d19',
    month: 'April 2026',
    dayDate: 19,
    fullDate: '2026-04-19',
    day: 'Sunday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Holiday / Leave',
    lessonTitle: '🌴 Sunday Holiday — Weekly Leave (Rest & Family Storytelling)',
    activityType: 'REVISION',
    instructor: 'Er. Manoj Kumar',
    description: 'Nextsem Academy is on leave. Enjoy bedtime stories and fun family board games.',
    status: 'COMPLETED',
    colorTag: '#10b981'
  },
  {
    id: 'apr-2026-c1-d20',
    month: 'April 2026',
    dayDate: 20,
    fullDate: '2026-04-20',
    day: 'Monday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Mathematics (Joyful)',
    lessonTitle: 'Chapter 3: Mango Treat (Numbers 6 to 9 & Dot Pattern Matching)',
    activityType: 'STUDIO',
    instructor: 'Er. Manoj Kumar',
    description: 'Counting 6 to 9 ripe mangoes, counting dice dots, and drawing corresponding fruits.',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aejm103.pdf',
    status: 'SCHEDULED',
    colorTag: '#8b5cf6'
  },
  {
    id: 'apr-2026-c1-d21',
    month: 'April 2026',
    dayDate: 21,
    fullDate: '2026-04-21',
    day: 'Tuesday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'English (Mridang)',
    lessonTitle: 'Unit 2 Chapter 4: Monkeys Imitation Game & Rhyme Recitation',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'Playful drama and movement: imitating actions, animal sounds, and joyful class recitation.',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aemr104.pdf',
    status: 'SCHEDULED',
    colorTag: '#f59e0b'
  },
  {
    id: 'apr-2026-c1-d22',
    month: 'April 2026',
    dayDate: 22,
    fullDate: '2026-04-22',
    day: 'Wednesday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Hindi (Sarangi)',
    lessonTitle: 'पाठ 4: रानी भी (इकाई 1: परिवार - खेलने की उमंग व समानता)',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'छोटी रानी का भाई-बहनों के साथ खेल में शामिल होना, दौड़ना, और परिवार में सबको हँसाना।',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/ahsr104.pdf',
    status: 'SCHEDULED',
    colorTag: '#ec4899'
  },
  {
    id: 'apr-2026-c1-d23',
    month: 'April 2026',
    dayDate: 23,
    fullDate: '2026-04-23',
    day: 'Thursday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Mathematics (Joyful)',
    lessonTitle: 'Chapter 4: Making 10 (Bundles of Ten & Foundational Place Value)',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'Tying 10 loose matchsticks into 1 bundle of 10. Foundational understanding of ten.',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aejm104.pdf',
    status: 'SCHEDULED',
    colorTag: '#8b5cf6'
  },
  {
    id: 'apr-2026-c1-d24',
    month: 'April 2026',
    dayDate: 24,
    fullDate: '2026-04-24',
    day: 'Friday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'English (Mridang)',
    lessonTitle: 'Unit 2 Chapter 5: A Farm (Domestic Animals & Animal Sounds)',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'Cows moo, ducks quack, hens cluck, and dogs bark! Exploring life on a green farm.',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aemr105.pdf',
    status: 'SCHEDULED',
    colorTag: '#f59e0b'
  },
  {
    id: 'apr-2026-c1-d25',
    month: 'April 2026',
    dayDate: 25,
    fullDate: '2026-04-25',
    day: 'Saturday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Weekly Assessment',
    lessonTitle: '📝 Weekly Test 4: Making 10 Matchsticks Test & Farm Animal Sounds Quiz',
    activityType: 'TEST',
    instructor: 'Er. Manoj Kumar',
    description: '15-question interactive test: bundle of 10 identification, matching animal sounds to pictures.',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aejm104.pdf',
    status: 'SCHEDULED',
    colorTag: '#ef4444'
  },
  {
    id: 'apr-2026-c1-d26',
    month: 'April 2026',
    dayDate: 26,
    fullDate: '2026-04-26',
    day: 'Sunday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Holiday / Leave',
    lessonTitle: '🌴 Sunday Holiday — Weekly Leave (Rest & Creative Crafts)',
    activityType: 'REVISION',
    instructor: 'Er. Manoj Kumar',
    description: 'Weekly Sunday Leave: Nextsem Academy is closed. Enjoy creative paper folding and rest.',
    status: 'COMPLETED',
    colorTag: '#10b981'
  },
  {
    id: 'apr-2026-c1-d27',
    month: 'April 2026',
    dayDate: 27,
    fullDate: '2026-04-27',
    day: 'Monday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Mathematics (Joyful)',
    lessonTitle: 'Chapter 4: Numbers 10 to 20 Ten-Frame Visual Studio',
    activityType: 'STUDIO',
    instructor: 'Er. Manoj Kumar',
    description: 'Hands-on ten-frame digital grid: placing tokens to form 11, 12, 13, 14, 15 up to 20.',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aejm104.pdf',
    status: 'SCHEDULED',
    colorTag: '#8b5cf6'
  },
  {
    id: 'apr-2026-c1-d28',
    month: 'April 2026',
    dayDate: 28,
    fullDate: '2026-04-28',
    day: 'Tuesday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'English (Mridang)',
    lessonTitle: 'Unit 2 Chapter 5: Animal Friends Spelling & Sound Recognition',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'Spelling practice for cow, hen, duck, goat, horse, and connecting sounds with letters.',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aemr105.pdf',
    status: 'SCHEDULED',
    colorTag: '#f59e0b'
  },
  {
    id: 'apr-2026-c1-d29',
    month: 'April 2026',
    dayDate: 29,
    fullDate: '2026-04-29',
    day: 'Wednesday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Hindi (Sarangi)',
    lessonTitle: 'पाठ 5: मिठाई (इकाई 2: जीव-जगत - चींटी व सहयोग की सीख)',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'नन्हीं चींटी कैसे मिठाई की बूंद को देखकर सबको बुलाती है और सब मिलकर सहयोग करते हैं।',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/ahsr105.pdf',
    status: 'SCHEDULED',
    colorTag: '#ec4899'
  },
  {
    id: 'apr-2026-c1-d30',
    month: 'April 2026',
    dayDate: 30,
    fullDate: '2026-04-30',
    day: 'Thursday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Monthly Comprehensive Review',
    lessonTitle: '🏆 Class 1 April Month FLN Grand Finale & Star Badges Award',
    activityType: 'STUDIO',
    instructor: 'Er. Manoj Kumar',
    description: 'Celebration of April month learning milestones: Shapes, 1–10 Numbers, Action Rhymes & Stories!',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aejm101.pdf',
    status: 'SCHEDULED',
    colorTag: '#10b981'
  }
];

const STORAGE_KEY = 'nextsem_academy_schedule_v3';

// Default pre-populated weekly timetable crafted for Nextsem Academy
const DEFAULT_SCHEDULE_ITEMS: ScheduleItem[] = [
  // Class 1 April 2026 30-Day Calendar Schedule
  ...CLASS_1_APRIL_2026_DAYS,

  // Monday
  {
    id: 'mon-c1-apr',
    month: 'April 2026',
    day: 'Monday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Mathematics (Joyful)',
    lessonTitle: 'Chapter 1: Finding the Furry Cat! (Pre-number Concepts & Spatial Positions)',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'FLN Foundational Learning: Inside/outside, top/bottom, above/below, near/far, and bigger/smaller with playful cat hide-and-seek story.',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aejm101.pdf',
    status: 'SCHEDULED',
    colorTag: '#8b5cf6'
  },
  {
    id: 'mon-1',
    day: 'Monday',
    startTime: '09:00 AM',
    endTime: '10:00 AM',
    classNum: 12,
    subject: 'Physics',
    lessonTitle: 'Chapter 1: Electric Charges & Fields (Gauss Law & Field Lines)',
    activityType: 'STUDIO',
    instructor: 'Er. Manoj Kumar',
    description: '32 Derivations Studio: Vector analysis of electric flux through closed cylindrical surfaces with CBSE marking rubrics.',
    resourceLink: '/chemistry-class12-alcohols-phenols-ethers-page1-2.html',
    status: 'LIVE',
    colorTag: '#4f46e5'
  },
  {
    id: 'mon-2',
    day: 'Monday',
    startTime: '10:30 AM',
    endTime: '11:30 AM',
    classNum: 11,
    subject: 'Accountancy',
    lessonTitle: 'Chapter 5: Accounting Equation & 2-Column Cash Book Posting',
    activityType: 'STUDIO',
    instructor: 'Er. Manoj Kumar',
    description: 'T.S. Grewal Double Entry Book Keeping: Interactive dual-pane transaction ledger with live debit/credit balancing.',
    status: 'SCHEDULED',
    colorTag: '#0284c7'
  },
  {
    id: 'mon-3',
    day: 'Monday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 10,
    subject: 'Mathematics',
    lessonTitle: 'Chapter 8: Introduction to Trigonometry (Values & Identities)',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'Line-by-line NCERT exercise solutions with mnemonic tips for sin, cos, tan angle ratios.',
    status: 'SCHEDULED',
    colorTag: '#f59e0b'
  },
  {
    id: 'mon-4',
    day: 'Monday',
    startTime: '04:30 PM',
    endTime: '05:30 PM',
    classNum: 9,
    subject: 'Hindi',
    lessonTitle: 'Hindi Grammar Complete Mastery: संधि, समास & उपसर्ग',
    activityType: 'QUIZ',
    instructor: 'Er. Manoj Kumar',
    description: '30-Question interactive Vyakaran mastery quiz with instant Sanskrit grammar rule explanations.',
    status: 'SCHEDULED',
    colorTag: '#ec4899'
  },

  // Tuesday
  {
    id: 'tue-1',
    day: 'Tuesday',
    startTime: '09:00 AM',
    endTime: '10:00 AM',
    classNum: 12,
    subject: 'Chemistry',
    lessonTitle: 'Chapter 7: Alcohols, Phenols & Ethers (Kolbe & Reimer-Tiemann)',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'Page-by-page textbook reading with electrophilic aromatic substitution reaction mechanisms.',
    status: 'SCHEDULED',
    colorTag: '#10b981'
  },
  {
    id: 'tue-2',
    day: 'Tuesday',
    startTime: '11:00 AM',
    endTime: '12:00 PM',
    classNum: 9,
    subject: 'Mathematics',
    lessonTitle: 'Chapter 5: Introduction to Euclid Geometry & 12 Circle Theorems',
    activityType: 'STUDIO',
    instructor: 'Er. Manoj Kumar',
    description: 'Interactive geometry canvas: Postulates, axioms & circle chord theorem proofs.',
    status: 'SCHEDULED',
    colorTag: '#8b5cf6'
  },
  {
    id: 'tue-3',
    day: 'Tuesday',
    startTime: '03:30 PM',
    endTime: '04:30 PM',
    classNum: 7,
    subject: 'Science',
    lessonTitle: 'Curiosity Chapter 7: Heat Transfer & Conduction Numerical Studio',
    activityType: 'TEST',
    instructor: 'Er. Manoj Kumar',
    description: 'Midterm practice test on radiation, convection in sea breeze, and clinical thermometer readings.',
    status: 'SCHEDULED',
    colorTag: '#06b6d4'
  },
  {
    id: 'tue-bca-1',
    month: 'April 2026',
    day: 'Tuesday',
    startTime: '05:00 PM',
    endTime: '06:30 PM',
    classNum: 'BCA-sem1',
    subject: 'BCS-111 Computer Basics (Theory)',
    lessonTitle: 'Unit 1: Computer Hardware Architecture & 🪟 Windows 11 CLI Commands',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'Von Neumann Architecture, CPU registers, system bus and interactive Windows CMD terminal commands.',
    resourceLink: 'https://ignou-study-notes-by-nextsem.web.app/bca/semester-1/bcs-011-computer-basics/unit-1/lessons/',
    status: 'LIVE',
    colorTag: '#2563eb'
  },
  {
    id: 'tue-bca-practical-1',
    month: 'April 2026',
    day: 'Tuesday',
    startTime: '07:00 PM',
    endTime: '08:30 PM',
    classNum: 'BCA-sem1',
    subject: 'BCSL-013 PC Software & Web Lab (Practical)',
    lessonTitle: '💻 Practical Day 1: HTML Setup & First Webpage Coding Lab',
    activityType: 'STUDIO',
    instructor: 'Er. Manoj Kumar',
    description: 'Hands-on VS Code HTML5 document structure, live browser preview, and first Git commit workflow.',
    resourceLink: 'https://ignou-study-notes-by-nextsem.web.app/bca/practical/day-1-html-setup-first-webpage/',
    status: 'SCHEDULED',
    colorTag: '#2563eb'
  },
  {
    id: 'tue-c1-apr',
    month: 'April 2026',
    day: 'Tuesday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'English (Mridang)',
    lessonTitle: 'Unit 1: Two Little Hands (Action Rhyme & Body Parts Awareness)',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'Action song: Clap hands, tap feet, open eyes wide, and turn head side to side. Rhythm singing, phonemic sounds, and motor coordination.',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aemr101.pdf',
    status: 'SCHEDULED',
    colorTag: '#f59e0b'
  },

  // Wednesday
  {
    id: 'wed-1',
    day: 'Wednesday',
    startTime: '09:30 AM',
    endTime: '10:30 AM',
    classNum: 12,
    subject: 'History',
    lessonTitle: 'Themes in Indian History: Bhakti-Sufi Traditions (Pages 140–165)',
    activityType: 'TEST',
    instructor: 'Er. Manoj Kumar',
    description: 'CBSE Competency Test Suite: Kabir Bijak verses, Mirabai hymns, and Sufi Khanqah architecture.',
    status: 'SCHEDULED',
    colorTag: '#d97706'
  },
  {
    id: 'wed-bca-2',
    day: 'Wednesday',
    startTime: '11:00 AM',
    endTime: '12:30 PM',
    classNum: 'BCA-sem2',
    subject: 'MCS-011 Problem Solving & Python',
    lessonTitle: 'Control Structures, Iterations & Function Arguments Lab',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'Python algorithm implementation in VS Code, technical viva check, and GitHub repo push verification.',
    status: 'SCHEDULED',
    colorTag: '#0284c7'
  },
  {
    id: 'wed-2',
    day: 'Wednesday',
    startTime: '02:00 PM',
    endTime: '03:00 PM',
    classNum: 6,
    subject: 'Mathematics',
    lessonTitle: 'Ganita Prakash Chapter 4: Data Handling & Bar Graph Studio',
    activityType: 'STUDIO',
    instructor: 'Er. Manoj Kumar',
    description: 'Interactive workbook: Plotting discrete frequencies, finding tallies, and calculating pictograph scales.',
    status: 'SCHEDULED',
    colorTag: '#3b82f6'
  },
  {
    id: 'wed-c1-apr',
    month: 'April 2026',
    day: 'Wednesday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Hindi (Sarangi)',
    lessonTitle: 'पाठ 1: मीना का परिवार (Family Introduction, Relationships & Picture Reading)',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'मीना के परिवार का परिचय: दादा-दादी, माता-पिता और छोटा भाई। चित्र-पठन, नए शब्द और परिवार के प्रति आदर व प्रेम।',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/ahsr101.pdf',
    status: 'SCHEDULED',
    colorTag: '#ec4899'
  },

  // Thursday
  {
    id: 'thu-1',
    day: 'Thursday',
    startTime: '10:00 AM',
    endTime: '11:00 AM',
    classNum: 11,
    subject: 'Economics',
    lessonTitle: 'Statistics for Economics: Chapters 1–3 Measures of Central Tendency',
    activityType: 'TEST',
    instructor: 'Er. Manoj Kumar',
    description: '30 High-yield numerical questions on Mean, Median, and Mode calculation methods with step formulas.',
    status: 'SCHEDULED',
    colorTag: '#04AA6D'
  },
  {
    id: 'thu-2',
    day: 'Thursday',
    startTime: '04:00 PM',
    endTime: '05:00 PM',
    classNum: 8,
    subject: 'Mathematics',
    lessonTitle: 'Chapter 2: Power Play (Exponents & Powers) Diagnostic Quiz',
    activityType: 'QUIZ',
    instructor: 'Er. Manoj Kumar',
    description: 'Class 6–8 Doubt & Diagnostic Studio: Law of negative indices and scientific notation verification.',
    status: 'SCHEDULED',
    colorTag: '#ec4899'
  },
  {
    id: 'thu-bca-3',
    day: 'Thursday',
    startTime: '05:30 PM',
    endTime: '07:00 PM',
    classNum: 'BCA-sem3',
    subject: 'MCS-021 Data Structures',
    lessonTitle: 'Linked Lists, Stacks & Binary Search Trees Benchmark',
    activityType: 'STUDIO',
    instructor: 'Er. Manoj Kumar',
    description: 'Hands-on node traversal algorithms, memory pointers, and time complexity Big-O analysis.',
    status: 'SCHEDULED',
    colorTag: '#7c3aed'
  },
  {
    id: 'thu-c1-apr',
    month: 'April 2026',
    day: 'Thursday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Mathematics (Joyful)',
    lessonTitle: 'Chapter 2: What is Long? What is Round? (Shapes & Rolling vs Sliding Lab)',
    activityType: 'STUDIO',
    instructor: 'Er. Manoj Kumar',
    description: 'Interactive shapes discovery studio: Sorting everyday objects (ball, coin, pencil, eraser) that roll or slide with hands-on 3D visual canvas.',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aejm102.pdf',
    status: 'SCHEDULED',
    colorTag: '#8b5cf6'
  },

  // Friday
  {
    id: 'fri-1',
    day: 'Friday',
    startTime: '09:00 AM',
    endTime: '10:00 AM',
    classNum: 12,
    subject: 'Physics',
    lessonTitle: 'Chapter 2: Electrostatic Potential & Capacitance (Dielectrics)',
    activityType: 'STUDIO',
    instructor: 'Er. Manoj Kumar',
    description: 'All 18 Derivations: Energy stored in parallel plate capacitor with dielectric medium derivation.',
    status: 'SCHEDULED',
    colorTag: '#4f46e5'
  },
  {
    id: 'fri-2',
    day: 'Friday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 9,
    subject: 'Science',
    lessonTitle: 'Physics Units: Motion & Laws of Force Numerical Studio',
    activityType: 'TEST',
    instructor: 'Er. Manoj Kumar',
    description: 'Graphical equation derivations: v = u + at, s = ut + 0.5at², and Newton second law F = ma numericals.',
    status: 'SCHEDULED',
    colorTag: '#8b5cf6'
  },
  {
    id: 'fri-bca-4',
    day: 'Friday',
    startTime: '05:00 PM',
    endTime: '06:30 PM',
    classNum: 'BCA-sem4',
    subject: 'MCS-024 Java Technologies',
    lessonTitle: 'OOP Principles: Polymorphism, Abstract Classes & Interfaces',
    activityType: 'TEST',
    instructor: 'Er. Manoj Kumar',
    description: 'Live code implementation of multi-threaded Java applications and event handling.',
    status: 'SCHEDULED',
    colorTag: '#d97706'
  },
  {
    id: 'fri-c1-apr',
    month: 'April 2026',
    day: 'Friday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'English (Mridang)',
    lessonTitle: 'Unit 1 Chapter 2: Greetings (Social Etiquette, Hello & Thank You Workshop)',
    activityType: 'LESSON',
    instructor: 'Er. Manoj Kumar',
    description: 'Polite daily social greetings: saying "Good morning" to teacher, "Namaste" to elders, "Hello" to friends, and "Thank you".',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aemr102.pdf',
    status: 'SCHEDULED',
    colorTag: '#f59e0b'
  },

  // Saturday
  {
    id: 'sat-1',
    day: 'Saturday',
    startTime: '10:00 AM',
    endTime: '11:30 AM',
    classNum: 12,
    subject: 'All Streams',
    lessonTitle: 'CBSE Board 2026–27 All-India Model Pre-Board Assessment',
    activityType: 'TEST',
    instructor: 'Er. Manoj Kumar',
    description: 'Full 80-mark Summative Assessment covering Class 12 Science, Commerce, and Humanities syllabus.',
    status: 'SCHEDULED',
    colorTag: '#d97706'
  },
  {
    id: 'sat-bca-5',
    day: 'Saturday',
    startTime: '11:30 AM',
    endTime: '01:00 PM',
    classNum: 'BCA-sem5',
    subject: 'BCS-051 Software Engineering',
    lessonTitle: 'SDLC Agile Sprints, UML Diagrams & SRS Specifications',
    activityType: 'QUIZ',
    instructor: 'Er. Manoj Kumar',
    description: 'Software development lifecycle quiz covering Waterfall vs Agile sprints and code verification metrics.',
    status: 'SCHEDULED',
    colorTag: '#059669'
  },
  {
    id: 'sat-2',
    day: 'Saturday',
    startTime: '02:00 PM',
    endTime: '03:30 PM',
    classNum: 7,
    subject: 'Doubt Studio',
    lessonTitle: 'Middle School Live Diagnostic & Doubt Clearing Session',
    activityType: 'REVISION',
    instructor: 'Er. Manoj Kumar',
    description: 'Classes 6th, 7th & 8th Google Auth Doubt Portal: One-on-one conceptual clarification in Maths & Science.',
    status: 'LIVE',
    colorTag: '#10b981'
  },
  {
    id: 'sat-c1-apr',
    month: 'April 2026',
    day: 'Saturday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Weekly Assessment (Class 1)',
    lessonTitle: '📝 Class 1 Weekly Chapter Test (Shapes, Rhymes & Meena’s Family Quiz)',
    activityType: 'TEST',
    instructor: 'Er. Manoj Kumar',
    description: 'Saturday Weekly Test: 15 joyful visual questions on Shapes (Inside/Outside, Long/Round), Body Rhymes, and Meena’s Family story.',
    resourceLink: 'https://ncert.nic.in/textbook/pdf/aejm101.pdf',
    status: 'SCHEDULED',
    colorTag: '#ef4444'
  },

  // Sunday
  {
    id: 'sun-1',
    day: 'Sunday',
    startTime: '10:00 AM',
    endTime: '11:00 AM',
    classNum: 11,
    subject: 'Weekly Review',
    lessonTitle: 'Senior Secondary Weekly Revision & Formula Vault Consolidation',
    activityType: 'REVISION',
    instructor: 'Er. Manoj Kumar',
    description: 'Consolidated formula revision sheets & downloadable summary cards for weekly retention.',
    status: 'SCHEDULED',
    colorTag: '#4f46e5'
  },
  {
    id: 'sun-bca-6',
    day: 'Sunday',
    startTime: '11:30 AM',
    endTime: '01:00 PM',
    classNum: 'BCA-sem6',
    subject: 'BCS-062 E-Commerce & Full Stack',
    lessonTitle: 'Full-Stack Web Architecture, REST APIs & Cloud Deployment',
    activityType: 'STUDIO',
    instructor: 'Er. Manoj Kumar',
    description: 'Capstone portfolio development: React frontend, Node backend, and live Firebase hosting deployment.',
    status: 'SCHEDULED',
    colorTag: '#4f46e5'
  },
  {
    id: 'sun-c1-apr',
    month: 'April 2026',
    day: 'Sunday',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    classNum: 1,
    subject: 'Holiday / Leave',
    lessonTitle: '🌴 Sunday Holiday — Leave / No Classes (Rest & Family Time)',
    activityType: 'REVISION',
    instructor: 'Er. Manoj Kumar',
    description: 'Weekly Sunday Holiday: Nextsem Academy classes are on leave. Students are encouraged to spend time with family, practice creative drawing, and enjoy outdoor play.',
    status: 'COMPLETED',
    colorTag: '#10b981'
  }
];

const DAYS_LIST: DayOfWeek[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

interface AcademyScheduleBuilderViewProps {
  onBack: () => void;
  onNavigateToClass?: (classNum: number | string) => void;
  onOpenInteractiveStudio?: (key: string) => void;
}

export const AcademyScheduleBuilderView: React.FC<AcademyScheduleBuilderViewProps> = ({
  onBack,
  onNavigateToClass,
  onOpenInteractiveStudio
}) => {
  // Load saved schedule items from LocalStorage or fallback to defaults
  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>(() => {
    if (typeof window === 'undefined') return DEFAULT_SCHEDULE_ITEMS;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge defaults so newly added Class 1 schedule items are guaranteed to appear
          const existingIds = new Set(parsed.map((item: ScheduleItem) => item.id));
          const missingDefaults = DEFAULT_SCHEDULE_ITEMS.filter((def) => !existingIds.has(def.id));
          return [...parsed, ...missingDefaults];
        }
      }
    } catch (err) {
      console.error('Failed to parse saved schedule:', err);
    }
    return DEFAULT_SCHEDULE_ITEMS;
  });

  // UI state
  const [viewMode, setViewMode] = useState<'CALENDAR' | 'CMS_EDITOR' | 'STUDENT_PREVIEW'>('CALENDAR');
  const [currentCalendarMonth, setCurrentCalendarMonth] = useState<string>('April 2026');
  const [selectedCalendarDate, setSelectedCalendarDate] = useState<number>(1);
  const [selectedDay, setSelectedDay] = useState<DayOfWeek | 'ALL'>('ALL');
  const [selectedMonthFilter, setSelectedMonthFilter] = useState<string | 'ALL'>('April 2026');
  const [selectedClassFilter, setSelectedClassFilter] = useState<number | string | 'ALL'>(1);
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<ActivityType | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modal State for Add / Edit
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingItem, setEditingItem] = useState<ScheduleItem | null>(null);

  // Form fields
  const [formMonth, setFormMonth] = useState<string>('April 2026');
  const [formDayDate, setFormDayDate] = useState<number | undefined>(1);
  const [formDay, setFormDay] = useState<DayOfWeek>('Wednesday');
  const [formStartTime, setFormStartTime] = useState<string>('03:00 PM');
  const [formEndTime, setFormEndTime] = useState<string>('04:00 PM');
  const [formClassNum, setFormClassNum] = useState<number | string>(1);
  const [formSubject, setFormSubject] = useState<string>('Mathematics (Joyful)');
  const [isCustomSubject, setIsCustomSubject] = useState<boolean>(false);
  const [formLessonTitle, setFormLessonTitle] = useState<string>('');
  const [formActivityType, setFormActivityType] = useState<ActivityType>('LESSON');
  const [formInstructor, setFormInstructor] = useState<string>('Er. Manoj Kumar');
  const [isCustomInstructor, setIsCustomInstructor] = useState<boolean>(false);
  const [formDescription, setFormDescription] = useState<string>('');
  const [formResourceLink, setFormResourceLink] = useState<string>('');
  const [formStatus, setFormStatus] = useState<'SCHEDULED' | 'LIVE' | 'COMPLETED' | 'DRAFT'>('SCHEDULED');
  const [formSelectedChapterId, setFormSelectedChapterId] = useState<string>('');

  // Merged live curriculum data from ncert-alpha.vercel.app/?view=classes
  const mergedCurriculumData = useMemo(() => {
    return getMergedClassesData(CLASSES_DATA);
  }, []);

  // Compute available chapters for the currently selected class / BCA semester in the modal
  const availableCurriculumChapters = useMemo<CurriculumChapterOption[]>(() => {
    // If BCA semester
    if (typeof formClassNum === 'string' && formClassNum.startsWith('BCA')) {
      return BCA_CHAPTERS_MAP[formClassNum] || [];
    }

    // NCERT Class 1 to 12
    const classNum = Number(formClassNum);
    const targetClass = mergedCurriculumData.find((c) => c.classNumber === classNum);
    if (!targetClass) return [];

    const result: CurriculumChapterOption[] = [];
    targetClass.subjects.forEach((subj) => {
      subj.chapters.forEach((ch) => {
        result.push({
          id: `${subj.id}-${ch.id}`,
          subjectName: subj.name,
          chapterNumber: ch.chapterNumber,
          title: `Chapter ${ch.chapterNumber}: ${ch.title}`,
          summary: ch.summaryTextbook || ch.nepHighlights || '',
          pdfUrl: ch.officialPdfUrl
        });
      });
    });

    return result;
  }, [formClassNum, mergedCurriculumData]);

  // Group chapters by subject for easy selection
  const chaptersGroupedBySubject = useMemo(() => {
    const map: Record<string, CurriculumChapterOption[]> = {};
    availableCurriculumChapters.forEach((ch) => {
      if (!map[ch.subjectName]) map[ch.subjectName] = [];
      map[ch.subjectName].push(ch);
    });
    return map;
  }, [availableCurriculumChapters]);

  // Available subject names for quick selection
  const availableSubjectNames = useMemo(() => {
    return Object.keys(chaptersGroupedBySubject);
  }, [chaptersGroupedBySubject]);

  // Month navigation helper for all academic months (April 2026 to December 2026)
  const MONTH_SHORT_LABELS: Record<string, string> = {
    'April 2026': '🌸 Apr',
    'May 2026': '🌿 May',
    'June 2026': '☀️ Jun',
    'July 2026': '🌧️ Jul',
    'August 2026': '🇮🇳 Aug',
    'September 2026': '🌾 Sep',
    'October 2026': '🪔 Oct',
    'November 2026': '🍂 Nov',
    'December 2026': '❄️ Dec'
  };

  const handleSelectCalendarMonth = (newMonth: string) => {
    setCurrentCalendarMonth(newMonth);
    setSelectedMonthFilter(newMonth);
    const maxDays = getDaysInMonth(newMonth);
    const clampedDate = Math.min(selectedCalendarDate, maxDays);
    setSelectedCalendarDate(clampedDate);
    setSelectedDay(getDayOfWeekForDate(clampedDate, newMonth));
  };

  // 1-Click Apply Chapter from Curriculum List (Theory & Practical)
  const handleApplyChapterFromCurriculum = (chapterId: string) => {
    setFormSelectedChapterId(chapterId);
    if (!chapterId) return;

    const ch = availableCurriculumChapters.find((item) => item.id === chapterId);
    if (ch) {
      setFormLessonTitle(ch.title);
      setFormSubject(ch.subjectName);
      if (ch.summary) {
        setFormDescription(ch.summary);
      }
      if (ch.pdfUrl) {
        setFormResourceLink(ch.pdfUrl);
      }
      if (ch.type === 'PRACTICAL' || ch.title.toLowerCase().includes('practical') || ch.subjectName.toLowerCase().includes('lab')) {
        setFormActivityType('STUDIO');
      } else {
        setFormActivityType('LESSON');
      }
      showNotification(`Applied "${ch.title}" from Curriculum!`);
    }
  };

  // Save persistence feedback
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string | null>(null);

  // Auto-sync schedule to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(scheduleItems));
    } catch (err) {
      console.error('Failed to save schedule to localStorage:', err);
    }
  }, [scheduleItems]);

  const showNotification = (msg: string) => {
    setSaveSuccessMsg(msg);
    setTimeout(() => setSaveSuccessMsg(null), 3000);
  };

  // Open modal in Add Mode
  const handleAddNewSlot = (dayDefault?: DayOfWeek, dateDefault?: number, monthDefault?: string) => {
    setEditingItem(null);
    const targetMonth = monthDefault || (viewMode === 'CALENDAR' ? currentCalendarMonth : (selectedMonthFilter !== 'ALL' ? selectedMonthFilter : 'April 2026'));
    setFormMonth(targetMonth);
    const maxDays = getDaysInMonth(targetMonth);
    const targetDate = dateDefault !== undefined ? Math.min(dateDefault, maxDays) : (viewMode === 'CALENDAR' ? Math.min(selectedCalendarDate, maxDays) : undefined);
    setFormDayDate(targetDate);
    if (targetDate) {
      setFormDay(getDayOfWeekForDate(targetDate, targetMonth));
    } else {
      setFormDay(dayDefault || (selectedDay === 'ALL' ? 'Monday' : selectedDay));
    }
    setFormStartTime(selectedClassFilter === 1 || selectedClassFilter === '1' ? '03:00 PM' : '09:00 AM');
    setFormEndTime(selectedClassFilter === 1 || selectedClassFilter === '1' ? '04:00 PM' : '10:00 AM');
    setFormClassNum(selectedClassFilter !== 'ALL' ? selectedClassFilter : 1);
    setFormSubject(selectedClassFilter === 1 || selectedClassFilter === '1' ? 'Mathematics (Joyful)' : 'Mathematics');
    setIsCustomSubject(false);
    setFormLessonTitle('');
    const effectiveDay = targetDate ? getDayOfWeekForDate(targetDate, targetMonth) : (dayDefault || selectedDay);
    setFormActivityType(effectiveDay === 'Saturday' ? 'TEST' : effectiveDay === 'Sunday' ? 'REVISION' : 'LESSON');
    setFormInstructor('Er. Manoj Kumar');
    setIsCustomInstructor(false);
    setFormDescription('');
    setFormResourceLink('');
    setFormStatus('SCHEDULED');
    setFormSelectedChapterId('');
    setIsModalOpen(true);
  };

  // Open modal in Edit Mode
  const handleEditSlot = (item: ScheduleItem) => {
    setEditingItem(item);
    const itemMonth = item.month || 'April 2026';
    setFormMonth(itemMonth);
    setFormDayDate(item.dayDate);
    setFormDay(item.dayDate ? getDayOfWeekForDate(item.dayDate, itemMonth) : item.day);
    setFormStartTime(item.startTime);
    setFormEndTime(item.endTime);
    setFormClassNum(item.classNum);
    setFormSubject(item.subject);
    setIsCustomSubject(false);
    setFormLessonTitle(item.lessonTitle);
    setFormActivityType(item.activityType);
    setFormInstructor(item.instructor);
    setIsCustomInstructor(false);
    setFormDescription(item.description);
    setFormResourceLink(item.resourceLink || '');
    setFormStatus(item.status);
    setFormSelectedChapterId('');
    setIsModalOpen(true);
  };

  // Duplicate an item
  const handleDuplicateSlot = (item: ScheduleItem) => {
    const newItem: ScheduleItem = {
      ...item,
      id: `slot-${Date.now()}`,
      month: item.month || 'April 2026',
      lessonTitle: `${item.lessonTitle} (Copy)`,
      status: 'DRAFT'
    };
    setScheduleItems((prev) => [newItem, ...prev]);
    showNotification('Item duplicated successfully!');
  };

  // Delete an item
  const handleDeleteSlot = (id: string) => {
    if (window.confirm('Are you sure you want to delete this schedule slot?')) {
      setScheduleItems((prev) => prev.filter((item) => item.id !== id));
      showNotification('Schedule slot removed.');
    }
  };

  // Save Modal Form (Insert or Update)
  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formLessonTitle.trim()) {
      alert('Please enter a lesson / quiz title');
      return;
    }

    const resolvedClassNum: number | string =
      typeof formClassNum === 'string' && formClassNum.startsWith('BCA')
        ? formClassNum
        : (!isNaN(Number(formClassNum)) ? Number(formClassNum) : formClassNum);

    const resolvedDay = formDayDate ? getDayOfWeekForDate(formDayDate, formMonth) : formDay;
    const { monthIndex, year } = parseMonthYear(formMonth);
    const resolvedFullDate = formDayDate
      ? `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(formDayDate).padStart(2, '0')}`
      : undefined;

    if (editingItem) {
      // Update existing
      setScheduleItems((prev) =>
        prev.map((item) =>
          item.id === editingItem.id
            ? {
                ...item,
                month: formMonth,
                dayDate: formDayDate,
                fullDate: resolvedFullDate,
                day: resolvedDay,
                startTime: formStartTime,
                endTime: formEndTime,
                classNum: resolvedClassNum,
                subject: formSubject,
                lessonTitle: formLessonTitle.trim(),
                activityType: formActivityType,
                instructor: formInstructor.trim() || 'Er. Manoj Kumar',
                description: formDescription.trim(),
                resourceLink: formResourceLink.trim() || undefined,
                status: formStatus
              }
            : item
        )
      );
      showNotification('Lesson slot updated successfully in WordPress style!');
    } else {
      // Insert new
      const newItem: ScheduleItem = {
        id: `slot-${Date.now()}`,
        month: formMonth,
        dayDate: formDayDate,
        fullDate: resolvedFullDate,
        day: resolvedDay,
        startTime: formStartTime,
        endTime: formEndTime,
        classNum: resolvedClassNum,
        subject: formSubject,
        lessonTitle: formLessonTitle.trim(),
        activityType: formActivityType,
        instructor: formInstructor.trim() || 'Er. Manoj Kumar',
        description: formDescription.trim(),
        resourceLink: formResourceLink.trim() || undefined,
        status: formStatus
      };
      setScheduleItems((prev) => [newItem, ...prev]);
      showNotification('New lesson slot published to timetable!');
    }

    setIsModalOpen(false);
  };

  // Reset to default
  const handleResetDefaults = () => {
    if (window.confirm('Reset all schedule items to Nextsem Academy defaults? Any custom items will be replaced.')) {
      setScheduleItems(DEFAULT_SCHEDULE_ITEMS);
      showNotification('Timetable reset to Nextsem Academy master curriculum.');
    }
  };

  // Export JSON
  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(scheduleItems, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `nextsem-academy-schedule-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showNotification('Schedule exported as JSON backup.');
  };

  // Import JSON
  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (Array.isArray(parsed)) {
          setScheduleItems(parsed);
          showNotification(`Imported ${parsed.length} slots successfully!`);
        } else {
          alert('Invalid schedule JSON file format.');
        }
      } catch (err) {
        alert('Failed to parse JSON file.');
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset file input
  };

  // Filtered Items
  const filteredSchedule = useMemo(() => {
    return scheduleItems.filter((item) => {
      if (selectedMonthFilter !== 'ALL' && (item.month || 'April 2026') !== selectedMonthFilter) return false;
      if (selectedDay !== 'ALL' && item.day !== selectedDay) return false;
      if (selectedClassFilter !== 'ALL' && String(item.classNum) !== String(selectedClassFilter)) return false;
      if (selectedTypeFilter !== 'ALL' && item.activityType !== selectedTypeFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = item.lessonTitle.toLowerCase().includes(q);
        const matchSubject = item.subject.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchInstructor = item.instructor.toLowerCase().includes(q);
        const matchClass = `class ${item.classNum}`.toLowerCase().includes(q) || String(item.classNum).toLowerCase().includes(q);
        const matchMonth = (item.month || 'April 2026').toLowerCase().includes(q);
        return matchTitle || matchSubject || matchDesc || matchInstructor || matchClass || matchMonth;
      }
      return true;
    });
  }, [scheduleItems, selectedMonthFilter, selectedDay, selectedClassFilter, selectedTypeFilter, searchQuery]);

  // Helper activity badge style
  const getActivityBadge = (type: ActivityType, isHoliday?: boolean) => {
    if (isHoliday) {
      return { label: '🌴 Leave / Holiday', color: '#10b981', bg: 'rgba(16, 185, 129, 0.15)' };
    }
    switch (type) {
      case 'LESSON':
        return { label: '📖 Lesson Lecture', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.12)' };
      case 'TEST':
        return { label: '📝 Chapter Test', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.14)' };
      case 'QUIZ':
        return { label: '⚡ Interactive Quiz', color: '#ec4899', bg: 'rgba(236, 72, 153, 0.12)' };
      case 'STUDIO':
        return { label: '🔬 Practical Studio', color: '#10b981', bg: 'rgba(16, 185, 129, 0.12)' };
      case 'REVISION':
        return { label: '🎯 Revision & Viva', color: '#a855f7', bg: 'rgba(168, 85, 247, 0.12)' };
    }
  };

  // Dynamic Calendar Grid Cells for any month (April to December 2026)
  const activeMonthCalendarCells = useMemo(() => {
    const { monthIndex, year, monthName } = parseMonthYear(currentCalendarMonth);
    const totalDays = new Date(year, monthIndex + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, monthIndex, 1).getDay(); // 0 = Sunday, 1 = Monday, ...
    const prevMonthDays = new Date(year, monthIndex, 0).getDate();
    const prevMonthName = monthIndex === 0 ? 'Dec' : Object.keys(MONTH_NAMES_MAP)[monthIndex - 1]?.slice(0, 3) || 'Prev';
    const nextMonthName = monthIndex === 11 ? 'Jan' : Object.keys(MONTH_NAMES_MAP)[monthIndex + 1]?.slice(0, 3) || 'Next';

    const cells: Array<{
      type: 'PAD' | 'DAY';
      dateNum?: number;
      label: string;
      subLabel?: string;
      dayOfWeek: DayOfWeek;
      isCurrentMonth: boolean;
    }> = [];

    const DAYS: DayOfWeek[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Lead-in padding from previous month
    for (let p = firstDayOfWeek - 1; p >= 0; p--) {
      const padDate = prevMonthDays - p;
      const dIndex = (firstDayOfWeek - 1 - p) % 7;
      cells.push({
        type: 'PAD',
        label: String(padDate),
        subLabel: prevMonthName,
        dayOfWeek: DAYS[dIndex],
        isCurrentMonth: false
      });
    }

    // Days of current month (1 to totalDays)
    for (let d = 1; d <= totalDays; d++) {
      const dObj = new Date(year, monthIndex, d);
      const dayOfWeek = DAYS[dObj.getDay()];
      cells.push({
        type: 'DAY',
        dateNum: d,
        label: String(d),
        subLabel: monthName.slice(0, 3),
        dayOfWeek,
        isCurrentMonth: true
      });
    }

    // Trailing padding to fill complete grid row (multiple of 7)
    const remainder = cells.length % 7;
    if (remainder !== 0) {
      const trailingCount = 7 - remainder;
      for (let t = 1; t <= trailingCount; t++) {
        const dObj = new Date(year, monthIndex + 1, t);
        const dayOfWeek = DAYS[dObj.getDay()];
        cells.push({
          type: 'PAD',
          label: String(t),
          subLabel: nextMonthName,
          dayOfWeek,
          isCurrentMonth: false
        });
      }
    }

    return cells;
  }, [currentCalendarMonth]);

  // Quick lookup of tasks for any dayDate in targetMonth
  const getTasksForDate = (dateNum: number, targetMonth: string = currentCalendarMonth) => {
    return scheduleItems.filter((item) => {
      const itemMonth = item.month || 'April 2026';
      if (itemMonth !== targetMonth) return false;
      if (item.dayDate === dateNum) {
        if (selectedClassFilter !== 'ALL' && String(item.classNum) !== String(selectedClassFilter)) return false;
        return true;
      }
      return false;
    });
  };

  // Active tasks for selectedCalendarDate in currentCalendarMonth
  const activeCalendarDayTasks = useMemo(() => {
    const matches = getTasksForDate(selectedCalendarDate, currentCalendarMonth);
    if (matches.length > 0) return matches;

    // Fallback if slot was added without dayDate
    const targetDayOfWeek = getDayOfWeekForDate(selectedCalendarDate, currentCalendarMonth);
    return scheduleItems.filter((item) => {
      const itemMonth = item.month || 'April 2026';
      if (itemMonth === currentCalendarMonth && item.day === targetDayOfWeek) {
        if (selectedClassFilter !== 'ALL' && String(item.classNum) !== String(selectedClassFilter)) return false;
        return true;
      }
      return false;
    });
  }, [scheduleItems, selectedCalendarDate, currentCalendarMonth, selectedClassFilter]);

  return (
    <div style={{
      maxWidth: '1080px',
      margin: '0 auto',
      padding: '0.5rem 0.75rem 3rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '18px'
    }}>

      {/* ── 1. Top Navigation & Action Strip ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <button
          type="button"
          onClick={onBack}
          className="btn btn-outline"
          style={{
            borderRadius: '9999px',
            padding: '7px 16px',
            fontSize: '0.82rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <ArrowLeft size={15} /> Return to Academy Classes
        </button>

        {/* View Mode Toggle: Calendar vs WordPress CMS Editor vs Student Preview */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '9999px',
          padding: '3px',
          gap: '2px'
        }}>
          <button
            type="button"
            onClick={() => {
              setViewMode('CALENDAR');
              setSelectedMonthFilter('April 2026');
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '9999px',
              border: 'none',
              background: viewMode === 'CALENDAR' ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' : 'transparent',
              color: viewMode === 'CALENDAR' ? '#ffffff' : 'var(--text-secondary)',
              fontSize: '0.78rem',
              fontWeight: 800,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              boxShadow: viewMode === 'CALENDAR' ? '0 2px 10px rgba(245, 158, 11, 0.4)' : 'none'
            }}
          >
            <CalendarDays size={14} />
            <span>📅 April 2026 Calendar</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('CMS_EDITOR')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '9999px',
              border: 'none',
              background: viewMode === 'CMS_EDITOR' ? '#10b981' : 'transparent',
              color: viewMode === 'CMS_EDITOR' ? '#ffffff' : 'var(--text-secondary)',
              fontSize: '0.78rem',
              fontWeight: 800,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              boxShadow: viewMode === 'CMS_EDITOR' ? '0 2px 10px rgba(16, 185, 129, 0.4)' : 'none'
            }}
          >
            <Edit2 size={13} />
            <span>WordPress CMS Editor</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('STUDENT_PREVIEW')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '9999px',
              border: 'none',
              background: viewMode === 'STUDENT_PREVIEW' ? '#4f46e5' : 'transparent',
              color: viewMode === 'STUDENT_PREVIEW' ? '#ffffff' : 'var(--text-secondary)',
              fontSize: '0.78rem',
              fontWeight: 800,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              boxShadow: viewMode === 'STUDENT_PREVIEW' ? '0 2px 10px rgba(79, 70, 229, 0.4)' : 'none'
            }}
          >
            <Eye size={13} />
            <span>Student Live Timetable</span>
          </button>
        </div>
      </div>

      {/* ── 2. Toast Notification ── */}
      {saveSuccessMsg && (
        <div style={{
          background: 'rgba(16, 185, 129, 0.15)',
          border: '1px solid #10b981',
          color: '#10b981',
          padding: '10px 16px',
          borderRadius: '12px',
          fontSize: '0.82rem',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          animation: 'fadeIn 0.2s ease-in-out'
        }}>
          <CheckCircle2 size={16} />
          <span>{saveSuccessMsg}</span>
        </div>
      )}

      {viewMode === 'CALENDAR' ? (
        <section style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {/* Calendar Master Hero & Routine Overview Banner */}
          <div style={{
            background: 'linear-gradient(135deg, #0e1b2e 0%, #06111f 100%)',
            border: '1px solid rgba(245, 158, 11, 0.4)',
            borderRadius: '20px',
            padding: '22px 24px',
            color: '#ffffff',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.45)',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                    color: '#ffffff',
                    fontSize: '0.72rem',
                    fontWeight: 900,
                    padding: '3px 12px',
                    borderRadius: '9999px',
                    textTransform: 'uppercase',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    <CalendarDays size={13} /> Academic Session 2026–27
                  </span>
                  <span style={{ fontSize: '0.76rem', color: '#94a3b8', fontWeight: 700 }}>
                    {currentCalendarMonth} • {getDaysInMonth(currentCalendarMonth)} Calendar Days
                  </span>
                </div>

                <h1 style={{ fontSize: '1.5rem', fontWeight: 900, margin: 0, color: '#ffffff', letterSpacing: '-0.02em' }}>
                  Class 1 — {currentCalendarMonth} Interactive Calendar Schedule
                </h1>
                <p style={{ fontSize: '0.86rem', color: '#cbd5e1', margin: '4px 0 0', lineHeight: 1.5 }}>
                  Click any date in the calendar to open that day's scheduled tasks, timings (3–4 PM), chapter tests, and official NCERT links.
                </p>
              </div>

              {/* Class Filter Switcher in Calendar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => setSelectedClassFilter(1)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    background: selectedClassFilter === 1 || selectedClassFilter === '1'
                      ? 'linear-gradient(135deg, #10b981 0%, #04aa6d 100%)'
                      : 'rgba(255, 255, 255, 0.08)',
                    color: '#ffffff',
                    border: '1px solid rgba(16, 185, 129, 0.4)',
                    cursor: 'pointer'
                  }}
                >
                  🎒 Class 1 (FLN NEP)
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedClassFilter('BCA-sem1')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    background: selectedClassFilter === 'BCA-sem1'
                      ? 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'
                      : 'rgba(255, 255, 255, 0.08)',
                    color: '#ffffff',
                    border: '1px solid rgba(37, 99, 235, 0.4)',
                    cursor: 'pointer'
                  }}
                >
                  💻 BCA Sem 1
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedClassFilter('ALL')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    background: selectedClassFilter === 'ALL'
                      ? 'rgba(255, 255, 255, 0.2)'
                      : 'transparent',
                    color: '#cbd5e1',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    cursor: 'pointer'
                  }}
                >
                  🌐 All Classes
                </button>

                <button
                  type="button"
                  onClick={() => handleAddNewSlot(undefined, selectedCalendarDate)}
                  style={{
                    background: '#10b981',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '7px 14px',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <Plus size={14} /> Add Slot for Date
                </button>
              </div>
            </div>

            {/* Routine Summary Badges */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '10px',
              paddingTop: '6px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} style={{ color: '#10b981' }} />
                <span style={{ fontSize: '0.78rem', color: '#e2e8f0' }}>
                  <strong>Mon – Fri (3–4 PM):</strong> Regular Lessons
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1rem' }}>📝</span>
                <span style={{ fontSize: '0.78rem', color: '#e2e8f0' }}>
                  <strong>Saturday (3–4 PM):</strong> Weekly Chapter Test
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1rem' }}>🌴</span>
                <span style={{ fontSize: '0.78rem', color: '#e2e8f0' }}>
                  <strong>Sunday:</strong> Weekly Leave &amp; Rest Day
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1rem' }}>👨‍🏫</span>
                <span style={{ fontSize: '0.78rem', color: '#e2e8f0' }}>
                  <strong>Faculty:</strong> Er. Manoj Kumar (HOD)
                </span>
              </div>
            </div>
          </div>

          {/* 7-Column Calendar Grid */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '20px',
            padding: '16px',
            boxShadow: 'var(--shadow-card)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            {/* Calendar Month & Navigation Title with Month Selector & Prev/Next */}
            {(() => {
              const currentMonthIdx = (ACADEMIC_CALENDAR_MONTHS as readonly string[]).indexOf(currentCalendarMonth);
              return (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                  padding: '8px 12px',
                  background: 'var(--bg-hover)',
                  borderRadius: '14px',
                  border: '1px solid var(--border-color)'
                }}>
                  {/* Left: Prev / Next Navigation & Month Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <button
                        type="button"
                        disabled={currentMonthIdx <= 0}
                        onClick={() => {
                          if (currentMonthIdx > 0) {
                            handleSelectCalendarMonth(ACADEMIC_CALENDAR_MONTHS[currentMonthIdx - 1]);
                          }
                        }}
                        style={{
                          background: currentMonthIdx > 0 ? 'var(--bg-card)' : 'transparent',
                          border: '1px solid var(--border-color)',
                          borderRadius: '8px',
                          padding: '6px 10px',
                          color: currentMonthIdx > 0 ? 'var(--text-primary)' : 'var(--text-muted)',
                          cursor: currentMonthIdx > 0 ? 'pointer' : 'not-allowed',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '0.76rem',
                          fontWeight: 800,
                          opacity: currentMonthIdx > 0 ? 1 : 0.4
                        }}
                        title={currentMonthIdx > 0 ? `Go to ${ACADEMIC_CALENDAR_MONTHS[currentMonthIdx - 1]}` : 'First month'}
                      >
                        <ChevronLeft size={14} /> Prev
                      </button>

                      <button
                        type="button"
                        disabled={currentMonthIdx >= ACADEMIC_CALENDAR_MONTHS.length - 1}
                        onClick={() => {
                          if (currentMonthIdx < ACADEMIC_CALENDAR_MONTHS.length - 1) {
                            handleSelectCalendarMonth(ACADEMIC_CALENDAR_MONTHS[currentMonthIdx + 1]);
                          }
                        }}
                        style={{
                          background: currentMonthIdx < ACADEMIC_CALENDAR_MONTHS.length - 1 ? 'var(--bg-card)' : 'transparent',
                          border: '1px solid var(--border-color)',
                          borderRadius: '8px',
                          padding: '6px 10px',
                          color: currentMonthIdx < ACADEMIC_CALENDAR_MONTHS.length - 1 ? 'var(--text-primary)' : 'var(--text-muted)',
                          cursor: currentMonthIdx < ACADEMIC_CALENDAR_MONTHS.length - 1 ? 'pointer' : 'not-allowed',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '0.76rem',
                          fontWeight: 800,
                          opacity: currentMonthIdx < ACADEMIC_CALENDAR_MONTHS.length - 1 ? 1 : 0.4
                        }}
                        title={currentMonthIdx < ACADEMIC_CALENDAR_MONTHS.length - 1 ? `Go to ${ACADEMIC_CALENDAR_MONTHS[currentMonthIdx + 1]}` : 'Last month'}
                      >
                        Next <ChevronRight size={14} />
                      </button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                        {currentCalendarMonth}
                      </h3>
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        background: 'rgba(245, 158, 11, 0.15)',
                        color: '#f59e0b',
                        border: '1px solid rgba(245, 158, 11, 0.3)'
                      }}>
                        {getDaysInMonth(currentCalendarMonth)} Days • Month {currentMonthIdx >= 0 ? currentMonthIdx + 1 : 1} of 9
                      </span>
                    </div>
                  </div>

                  {/* Right: Quick Jump Dropdown & Add Slot Button */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)' }}>
                      Jump Month:
                    </span>
                    <select
                      value={currentCalendarMonth}
                      onChange={(e) => handleSelectCalendarMonth(e.target.value)}
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid rgba(16, 185, 129, 0.4)',
                        color: 'var(--text-primary)',
                        borderRadius: '8px',
                        padding: '6px 10px',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        outline: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      {ACADEMIC_CALENDAR_MONTHS.map((m) => (
                        <option key={m} value={m}>🗓️ {m} ({getDaysInMonth(m)} Days)</option>
                      ))}
                    </select>

                    <button
                      type="button"
                      onClick={() => handleAddNewSlot(undefined, selectedCalendarDate, currentCalendarMonth)}
                      style={{
                        background: '#10b981',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '6px 12px',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <Plus size={13} /> Add in {currentCalendarMonth.split(' ')[0]}
                    </button>
                  </div>
                </div>
              );
            })()}

            {/* Quick Month Pill Tabs: All 9 Months (April 2026 to December 2026) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              overflowX: 'auto',
              paddingBottom: '4px',
              scrollbarWidth: 'thin'
            }}>
              {ACADEMIC_CALENDAR_MONTHS.map((m) => {
                const isSelectedMonth = currentCalendarMonth === m;
                const shortLabel = MONTH_SHORT_LABELS[m] || m;
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => handleSelectCalendarMonth(m)}
                    style={{
                      whiteSpace: 'nowrap',
                      padding: '5px 12px',
                      borderRadius: '9999px',
                      fontSize: '0.74rem',
                      fontWeight: isSelectedMonth ? 900 : 700,
                      background: isSelectedMonth
                        ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                        : 'var(--bg-hover)',
                      color: isSelectedMonth ? '#ffffff' : 'var(--text-secondary)',
                      border: isSelectedMonth
                        ? '1px solid #10b981'
                        : '1px solid var(--border-color)',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {shortLabel}
                  </button>
                );
              })}
            </div>

            {/* Weekday Names Header Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
              gap: '6px',
              textAlign: 'center'
            }}>
              {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((w, idx) => (
                <div
                  key={w}
                  style={{
                    padding: '8px 2px',
                    fontSize: '0.74rem',
                    fontWeight: 900,
                    borderRadius: '8px',
                    background: idx === 0 ? 'rgba(16, 185, 129, 0.12)' : idx === 6 ? 'rgba(239, 68, 68, 0.12)' : 'var(--bg-hover)',
                    color: idx === 0 ? '#10b981' : idx === 6 ? '#ef4444' : 'var(--text-secondary)',
                    border: idx === 0 ? '1px solid rgba(16, 185, 129, 0.25)' : idx === 6 ? '1px solid rgba(239, 68, 68, 0.25)' : '1px solid var(--border-color)'
                  }}
                >
                  {w}
                </div>
              ))}
            </div>

            {/* Calendar Cells Grid (Dynamic Rows x 7 Columns for Current Month) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
              gap: '6px'
            }}>
              {activeMonthCalendarCells.map((cell, idx) => {
                if (cell.type === 'PAD') {
                  return (
                    <div
                      key={`pad-${idx}`}
                      style={{
                        minHeight: '85px',
                        padding: '8px',
                        borderRadius: '12px',
                        background: 'rgba(0, 0, 0, 0.08)',
                        border: '1px dashed var(--border-color)',
                        opacity: 0.35,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        cursor: 'not-allowed'
                      }}
                    >
                      <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                        {cell.label} {cell.subLabel}
                      </div>
                    </div>
                  );
                }

                const dayNum = cell.dateNum!;
                const isSelected = selectedCalendarDate === dayNum;
                const isSunday = cell.dayOfWeek === 'Sunday';
                const isSaturday = cell.dayOfWeek === 'Saturday';
                const dayTasks = getTasksForDate(dayNum);
                const hasTask = dayTasks.length > 0;
                const primaryTask = dayTasks[0];

                return (
                  <button
                    key={`day-${dayNum}`}
                    type="button"
                    onClick={() => {
                      setSelectedCalendarDate(dayNum);
                      setSelectedDay(cell.dayOfWeek);
                    }}
                    style={{
                      minHeight: '85px',
                      padding: '7px 8px',
                      borderRadius: '12px',
                      border: isSelected
                        ? '2px solid #10b981'
                        : isSunday
                          ? '1px solid rgba(16, 185, 129, 0.35)'
                          : isSaturday
                            ? '1px solid rgba(239, 68, 68, 0.35)'
                            : '1px solid var(--border-color)',
                      background: isSelected
                        ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.22) 0%, rgba(6, 182, 212, 0.12) 100%)'
                        : isSunday
                          ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.06) 0%, rgba(6, 182, 212, 0.03) 100%)'
                          : isSaturday
                            ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.06) 0%, rgba(245, 158, 11, 0.03) 100%)'
                            : 'var(--bg-card)',
                      boxShadow: isSelected
                        ? '0 6px 20px rgba(16, 185, 129, 0.4)'
                        : 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {/* Top Row: Date Number + Active Tag */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                      <span style={{
                        fontSize: '0.88rem',
                        fontWeight: 900,
                        color: isSelected
                          ? '#10b981'
                          : isSunday
                            ? '#059669'
                            : isSaturday
                              ? '#dc2626'
                              : 'var(--text-primary)'
                      }}>
                        {dayNum}
                      </span>

                      {isSelected && (
                        <span style={{
                          fontSize: '0.6rem',
                          fontWeight: 900,
                          padding: '1px 5px',
                          borderRadius: '9999px',
                          background: '#10b981',
                          color: '#ffffff',
                          textTransform: 'uppercase'
                        }}>
                          ACTIVE
                        </span>
                      )}
                    </div>

                    {/* Middle: Content preview badge */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginTop: '4px' }}>
                      {isSunday ? (
                        <div style={{
                          fontSize: '0.64rem',
                          fontWeight: 800,
                          color: '#059669',
                          background: 'rgba(16, 185, 129, 0.15)',
                          borderRadius: '4px',
                          padding: '2px 4px',
                          textAlign: 'center'
                        }}>
                          🌴 Leave
                        </div>
                      ) : isSaturday ? (
                        <div style={{
                          fontSize: '0.64rem',
                          fontWeight: 800,
                          color: '#dc2626',
                          background: 'rgba(239, 68, 68, 0.14)',
                          borderRadius: '4px',
                          padding: '2px 4px',
                          textAlign: 'center'
                        }}>
                          📝 Test 3–4 PM
                        </div>
                      ) : hasTask ? (
                        <div style={{
                          fontSize: '0.63rem',
                          fontWeight: 800,
                          color: '#0284c7',
                          background: 'rgba(56, 189, 248, 0.12)',
                          borderRadius: '4px',
                          padding: '2px 4px',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}>
                          {primaryTask.subject.includes('Math') ? '📐 Math' : primaryTask.subject.includes('English') ? '🔤 English' : primaryTask.subject.includes('Hindi') ? '📖 Hindi' : primaryTask.subject.slice(0, 10)}
                        </div>
                      ) : (
                        <div style={{
                          fontSize: '0.62rem',
                          color: 'var(--text-muted)',
                          padding: '2px 0'
                        }}>
                          Regular Slot
                        </div>
                      )}

                      {/* Time pill */}
                      <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                        {isSunday ? 'Rest Day' : '⏰ 3–4 PM'}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Day Task Inspector (Opens upon clicking any date) ── */}
          <div style={{
            background: 'var(--bg-card)',
            border: '2px solid rgba(16, 185, 129, 0.4)',
            borderRadius: '20px',
            padding: '20px',
            boxShadow: 'var(--shadow-card)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            animation: 'fadeIn 0.2s ease-in-out'
          }}>
            {/* Inspector Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px',
              paddingBottom: '12px',
              borderBottom: '1px solid var(--border-color)'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 900,
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#10b981',
                    border: '1px solid rgba(16, 185, 129, 0.3)'
                  }}>
                    DAY {selectedCalendarDate} OF {getDaysInMonth(currentCalendarMonth)}
                  </span>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: '#4f46e5',
                    background: 'rgba(79, 70, 229, 0.1)',
                    padding: '2px 8px',
                    borderRadius: '6px'
                  }}>
                    {getDayOfWeekForDate(selectedCalendarDate, currentCalendarMonth)}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, margin: 0, color: 'var(--text-primary)' }}>
                  📅 {getDayOfWeekForDate(selectedCalendarDate, currentCalendarMonth)}, {selectedCalendarDate} {currentCalendarMonth}
                </h3>
              </div>

              {/* Prev / Next Date Navigation Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => {
                    const maxDays = getDaysInMonth(currentCalendarMonth);
                    const prev = selectedCalendarDate > 1 ? selectedCalendarDate - 1 : maxDays;
                    setSelectedCalendarDate(prev);
                    setSelectedDay(getDayOfWeekForDate(prev, currentCalendarMonth));
                  }}
                  className="btn btn-outline"
                  style={{
                    borderRadius: '9999px',
                    padding: '6px 14px',
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <ChevronLeft size={14} /> Day {selectedCalendarDate > 1 ? selectedCalendarDate - 1 : getDaysInMonth(currentCalendarMonth)}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const maxDays = getDaysInMonth(currentCalendarMonth);
                    const next = selectedCalendarDate < maxDays ? selectedCalendarDate + 1 : 1;
                    setSelectedCalendarDate(next);
                    setSelectedDay(getDayOfWeekForDate(next, currentCalendarMonth));
                  }}
                  className="btn btn-outline"
                  style={{
                    borderRadius: '9999px',
                    padding: '6px 14px',
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  Day {selectedCalendarDate < getDaysInMonth(currentCalendarMonth) ? selectedCalendarDate + 1 : 1} <ChevronRight size={14} />
                </button>

                <button
                  type="button"
                  onClick={() => handleAddNewSlot(undefined, selectedCalendarDate, currentCalendarMonth)}
                  style={{
                    background: '#10b981',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '6px 14px',
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <Plus size={14} /> Add Slot
                </button>
              </div>
            </div>

            {/* Inspector Tasks List */}
            {activeCalendarDayTasks.length === 0 ? (
              <div style={{
                padding: '2.5rem 1rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px'
              }}>
                <Calendar size={36} style={{ color: 'var(--text-muted)', opacity: 0.5 }} />
                <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  No tasks scheduled for {selectedCalendarDate} April 2026
                </h4>
                <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Click below to create a lesson, chapter test, or practice studio for this date.
                </p>
                <button
                  type="button"
                  onClick={() => handleAddNewSlot(undefined, selectedCalendarDate)}
                  style={{
                    background: '#10b981',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '7px 16px',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    cursor: 'pointer'
                  }}
                >
                  ➕ Schedule Task for Day {selectedCalendarDate}
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {activeCalendarDayTasks.map((task) => {
                  const isLeave = task.subject.toLowerCase().includes('holiday') ||
                    task.subject.toLowerCase().includes('leave') ||
                    task.lessonTitle.toLowerCase().includes('holiday') ||
                    task.lessonTitle.toLowerCase().includes('leave');
                  const actBadge = getActivityBadge(task.activityType, isLeave);

                  return (
                    <div
                      key={task.id}
                      style={{
                        background: isLeave
                          ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)'
                          : 'var(--bg-hover)',
                        border: isLeave
                          ? '1px solid rgba(16, 185, 129, 0.35)'
                          : task.activityType === 'TEST'
                            ? '1px solid rgba(239, 68, 68, 0.35)'
                            : '1px solid var(--border-color)',
                        borderRadius: '16px',
                        padding: '16px 18px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                      }}
                    >
                      {/* Top Row: Timing + Class + Activity Badge */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                          <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            fontSize: '0.78rem',
                            fontWeight: 800,
                            color: 'var(--text-primary)',
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-color)',
                            padding: '4px 10px',
                            borderRadius: '8px'
                          }}>
                            <Clock size={13} style={{ color: '#10b981' }} />
                            <span>{task.startTime} – {task.endTime}</span>
                          </span>

                          <span style={{
                            fontSize: '0.72rem',
                            fontWeight: 800,
                            color: '#ffffff',
                            background: String(task.classNum).startsWith('BCA')
                              ? 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'
                              : 'linear-gradient(135deg, #10b981 0%, #04aa6d 100%)',
                            padding: '3px 8px',
                            borderRadius: '6px'
                          }}>
                            {String(task.classNum).startsWith('BCA') ? task.classNum : `Class ${task.classNum}`}
                          </span>

                          <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                            {task.subject}
                          </span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{
                            fontSize: '0.72rem',
                            fontWeight: 800,
                            color: actBadge.color,
                            background: actBadge.bg,
                            padding: '3px 9px',
                            borderRadius: '9999px',
                            border: `1px solid ${actBadge.color}33`
                          }}>
                            {actBadge.label}
                          </span>

                          <span style={{
                            fontSize: '0.68rem',
                            fontWeight: 800,
                            color: isLeave ? '#10b981' : task.status === 'LIVE' ? '#10b981' : '#f59e0b',
                            background: 'var(--bg-card)',
                            padding: '3px 8px',
                            borderRadius: '9999px',
                            border: '1px solid var(--border-color)'
                          }}>
                            {task.status}
                          </span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div>
                        <h4 style={{ margin: '0 0 6px', fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                          {task.lessonTitle}
                        </h4>
                        <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          {task.description}
                        </p>
                      </div>

                      {/* Faculty & Actions Row */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '10px',
                        paddingTop: '8px',
                        borderTop: '1px solid var(--border-color)'
                      }}>
                        <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                          👨‍🏫 Instructor: <strong>{task.instructor}</strong>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                          {task.resourceLink && (
                            <button
                              type="button"
                              onClick={() => window.open(task.resourceLink, '_blank')}
                              style={{
                                background: 'rgba(16, 185, 129, 0.15)',
                                border: '1px solid rgba(16, 185, 129, 0.35)',
                                color: '#10b981',
                                borderRadius: '8px',
                                padding: '5px 12px',
                                fontSize: '0.76rem',
                                fontWeight: 800,
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '5px'
                              }}
                            >
                              <BookOpen size={13} />
                              <span>Open Official NCERT PDF ↗</span>
                            </button>
                          )}

                          <button
                            type="button"
                            onClick={() => handleEditSlot(task)}
                            style={{
                              background: 'var(--bg-card)',
                              border: '1px solid var(--border-color)',
                              color: 'var(--text-primary)',
                              borderRadius: '8px',
                              padding: '5px 10px',
                              fontSize: '0.76rem',
                              fontWeight: 700,
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}
                          >
                            <Edit2 size={12} />
                            <span>Edit in CMS</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDuplicateSlot(task)}
                            style={{
                              background: 'var(--bg-card)',
                              border: '1px solid var(--border-color)',
                              color: 'var(--text-primary)',
                              borderRadius: '8px',
                              padding: '5px 8px',
                              cursor: 'pointer'
                            }}
                            title="Duplicate Slot"
                          >
                            <Copy size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      ) : (
        <>
          {/* ── 3. WordPress Admin Banner & Management Hub ── */}
          <section style={{
            background: 'linear-gradient(135deg, #0e1b2e 0%, #06111f 100%)',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            borderRadius: '20px',
            padding: '20px 22px',
            color: '#ffffff',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{
                background: '#10b981',
                color: '#002517',
                fontSize: '0.7rem',
                fontWeight: 900,
                padding: '3px 10px',
                borderRadius: '9999px',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <Sparkles size={12} /> WordPress Style Lesson &amp; Timetable Builder
              </span>
              <span style={{ fontSize: '0.74rem', color: '#94a3b8', fontWeight: 600 }}>
                {scheduleItems.length} Total Weekly Slots
              </span>
            </div>

            <h1 style={{ fontSize: '1.45rem', fontWeight: 900, margin: 0, letterSpacing: '-0.02em', color: '#ffffff' }}>
              Day-Wise &amp; Time-Wise Curriculum &amp; Test Planner
            </h1>
            <p style={{ fontSize: '0.84rem', color: '#cbd5e1', margin: '4px 0 0', lineHeight: 1.45 }}>
              Add, edit, rearrange and publish daily subjects, lessons, chapter tests, quizzes, and live derivation studios with instant 0ms localStorage persistence.
            </p>
          </div>

          {/* Action Buttons Toolbar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => handleAddNewSlot()}
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #04aa6d 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                padding: '9px 16px',
                fontSize: '0.82rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)'
              }}
            >
              <Plus size={16} />
              <span>Add New Slot</span>
            </button>

            <button
              type="button"
              onClick={handleExportJson}
              title="Export Schedule as JSON Backup"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                borderRadius: '10px',
                padding: '9px 12px',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <Download size={14} />
              <span>Export</span>
            </button>

            <label
              title="Import Schedule JSON"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                borderRadius: '10px',
                padding: '9px 12px',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <Upload size={14} />
              <span>Import</span>
              <input type="file" accept=".json" onChange={handleImportJson} style={{ display: 'none' }} />
            </label>

            <button
              type="button"
              onClick={handleResetDefaults}
              title="Reset to Nextsem Academy Master Curriculum"
              style={{
                background: 'transparent',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                color: '#f87171',
                borderRadius: '10px',
                padding: '9px 12px',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <RefreshCw size={14} />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── 4. Day Tabs & Filter Strip (WordPress Category Filter Bar) ── */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        
        {/* Quick Routine Presets Strip */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-muted)' }}>
            QUICK PRESETS:
          </span>
          <button
            type="button"
            onClick={() => {
              setSelectedClassFilter(1);
              setSelectedMonthFilter('April 2026');
              setSelectedDay('ALL');
              showNotification('Loaded Class 1 April 2026 Timetable: Mon–Fri 3–4 PM, Sat Test, Sun Leave');
            }}
            style={{
              padding: '5px 12px',
              borderRadius: '9999px',
              fontSize: '0.74rem',
              fontWeight: 800,
              background: (selectedClassFilter === 1 || selectedClassFilter === '1') && selectedMonthFilter === 'April 2026'
                ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                : 'rgba(245, 158, 11, 0.12)',
              color: (selectedClassFilter === 1 || selectedClassFilter === '1') && selectedMonthFilter === 'April 2026'
                ? '#ffffff'
                : '#f59e0b',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>🎒 Class 1 April 2026 (Mon–Fri 3–4 PM | Sat Test | Sun Leave)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setSelectedClassFilter('BCA-sem1');
              setSelectedMonthFilter('April 2026');
              setSelectedDay('ALL');
              showNotification('Loaded BCA Semester 1 (April 2026) Timetable');
            }}
            style={{
              padding: '5px 12px',
              borderRadius: '9999px',
              fontSize: '0.74rem',
              fontWeight: 800,
              background: selectedClassFilter === 'BCA-sem1' && selectedMonthFilter === 'April 2026'
                ? 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'
                : 'rgba(37, 99, 235, 0.12)',
              color: selectedClassFilter === 'BCA-sem1' && selectedMonthFilter === 'April 2026'
                ? '#ffffff'
                : '#38bdf8',
              border: '1px solid rgba(37, 99, 235, 0.35)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>💻 BCA Sem 1 (April 2026 Theory &amp; Lab)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setSelectedClassFilter('ALL');
              setSelectedMonthFilter('ALL');
              setSelectedDay('ALL');
              showNotification('Viewing All Master Timetable Slots');
            }}
            style={{
              padding: '5px 12px',
              borderRadius: '9999px',
              fontSize: '0.74rem',
              fontWeight: 700,
              background: selectedClassFilter === 'ALL' && selectedMonthFilter === 'ALL'
                ? 'var(--bg-hover)'
                : 'transparent',
              color: 'var(--text-muted)',
              border: '1px solid var(--border-color)',
              cursor: 'pointer'
            }}
          >
            <span>🌐 View All Classes</span>
          </button>
        </div>

        {/* Class 1 April Routine Highlight Banner */}
        {(selectedClassFilter === 1 || selectedClassFilter === '1') && (
          <div style={{
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(16, 185, 129, 0.12) 100%)',
            border: '1px solid rgba(245, 158, 11, 0.35)',
            borderRadius: '14px',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.4rem' }}>🎒</span>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <h4 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 800, color: '#f59e0b' }}>
                    Class 1 — April 2026 Master Timetable
                  </h4>
                  <span style={{
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    background: 'rgba(16, 185, 129, 0.2)',
                    color: '#10b981',
                    border: '1px solid rgba(16, 185, 129, 0.3)'
                  }}>
                    FLN NEP 2020
                  </span>
                </div>
                <p style={{ margin: '3px 0 0', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  Classes held <strong>03:00 PM – 04:00 PM</strong> from <strong>Monday to Friday</strong> • <strong>Saturday Chapter Test</strong> (3–4 PM) • <strong>Sunday Weekly Leave</strong>
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button
                type="button"
                onClick={() => handleAddNewSlot('Monday')}
                style={{
                  background: '#10b981',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '6px 12px',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Plus size={13} /> Add Class 1 Slot
              </button>
            </div>
          </div>
        )}

        {/* Day Selector Strip */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          overflowX: 'auto',
          paddingBottom: '4px',
          scrollbarWidth: 'none'
        }}>
          <button
            type="button"
            onClick={() => setSelectedDay('ALL')}
            style={{
              padding: '7px 14px',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: selectedDay === 'ALL' ? 800 : 600,
              border: selectedDay === 'ALL' ? '1px solid #10b981' : '1px solid var(--border-color)',
              background: selectedDay === 'ALL' ? '#10b981' : 'var(--bg-card)',
              color: selectedDay === 'ALL' ? '#ffffff' : 'var(--text-secondary)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              boxShadow: selectedDay === 'ALL' ? '0 2px 10px rgba(16, 185, 129, 0.3)' : 'none'
            }}
          >
            All Days ({scheduleItems.length})
          </button>

          {DAYS_LIST.map((day) => {
            const count = scheduleItems.filter((it) => it.day === day).length;
            const isDayActive = selectedDay === day;

            return (
              <button
                key={day}
                type="button"
                onClick={() => setSelectedDay(day)}
                style={{
                  padding: '7px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.78rem',
                  fontWeight: isDayActive ? 800 : 600,
                  border: isDayActive ? '1px solid #10b981' : '1px solid var(--border-color)',
                  background: isDayActive ? 'linear-gradient(135deg, #10b981 0%, #04aa6d 100%)' : 'var(--bg-card)',
                  color: isDayActive ? '#ffffff' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: isDayActive ? '0 2px 10px rgba(16, 185, 129, 0.3)' : 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>{day}</span>
                <span style={{
                  fontSize: '0.66rem',
                  padding: '1px 6px',
                  borderRadius: '9999px',
                  background: isDayActive ? 'rgba(255, 255, 255, 0.25)' : 'var(--bg-hover)',
                  color: isDayActive ? '#ffffff' : 'var(--text-muted)'
                }}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Secondary Filter & Search Strip */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          {/* Search box */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '10px',
            padding: '6px 12px',
            flex: '1 1 220px',
            maxWidth: '380px'
          }}>
            <Search size={15} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
            <input
              type="text"
              placeholder="Filter topics, subjects, class..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--text-primary)',
                fontSize: '0.8rem',
                fontWeight: 600,
                width: '100%'
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
              >
                <X size={13} />
              </button>
            )}
          </div>

          {/* Class, Month & Activity Filter Dropdowns */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {/* Academic Month Filter (Starting 1 April 2026) */}
            <select
              value={selectedMonthFilter}
              onChange={(e) => setSelectedMonthFilter(e.target.value)}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                borderRadius: '8px',
                padding: '6px 10px',
                fontSize: '0.76rem',
                fontWeight: 700,
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="ALL">📅 All Months (From 1 April 2026)</option>
              {ACADEMIC_MONTHS.map((m) => (
                <option key={m} value={m}>🗓️ {m}</option>
              ))}
            </select>

            {/* Class Filter Dropdown */}
            <select
              value={selectedClassFilter}
              onChange={(e) => {
                const val = e.target.value;
                if (val === 'ALL') setSelectedClassFilter('ALL');
                else if (val.startsWith('BCA')) setSelectedClassFilter(val);
                else setSelectedClassFilter(Number(val));
              }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                borderRadius: '8px',
                padding: '6px 10px',
                fontSize: '0.76rem',
                fontWeight: 700,
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="ALL">All Classes &amp; BCA</option>
              <optgroup label="BCA Semesters">
                {BCA_SEMESTERS.map((sem) => (
                  <option key={sem} value={sem}>{sem}</option>
                ))}
              </optgroup>
              <optgroup label="School Classes (1–12)">
                {[12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((c) => (
                  <option key={c} value={c}>Class {c}</option>
                ))}
              </optgroup>
            </select>

            {/* Activity Type Filter */}
            <select
              value={selectedTypeFilter}
              onChange={(e) => setSelectedTypeFilter(e.target.value as ActivityType | 'ALL')}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                borderRadius: '8px',
                padding: '6px 10px',
                fontSize: '0.76rem',
                fontWeight: 700,
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="ALL">All Content Types</option>
              <option value="LESSON">📖 Lesson Lecture</option>
              <option value="TEST">📝 Chapter Test</option>
              <option value="QUIZ">⚡ Interactive Quiz</option>
              <option value="STUDIO">🔬 Practical Studio</option>
              <option value="REVISION">🎯 Revision &amp; Viva</option>
            </select>
          </div>
        </div>

      </section>

      {/* ── 5. Main Timetable Schedule Grid ── */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        
        {filteredSchedule.length === 0 ? (
          <div style={{
            background: 'var(--bg-card)',
            border: '1px dashed var(--border-color)',
            borderRadius: '16px',
            padding: '3rem 1.5rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px'
          }}>
            <Calendar size={40} style={{ color: 'var(--text-muted)', opacity: 0.5 }} />
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
              No scheduled slots found for current filters
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, maxWidth: '400px' }}>
              Create a new lesson slot or adjust your day/class filter to see planned subjects and quizzes.
            </p>
            <button
              type="button"
              onClick={() => handleAddNewSlot()}
              style={{
                marginTop: '6px',
                background: '#10b981',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                padding: '8px 16px',
                fontSize: '0.8rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Plus size={15} /> Add First Slot
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {filteredSchedule.map((slot) => {
              const isLeaveOrHoliday = slot.subject.toLowerCase().includes('holiday') ||
                slot.subject.toLowerCase().includes('leave') ||
                slot.lessonTitle.toLowerCase().includes('holiday') ||
                slot.lessonTitle.toLowerCase().includes('leave');
              const actBadge = getActivityBadge(slot.activityType, isLeaveOrHoliday);

              return (
                <div
                  key={slot.id}
                  style={{
                    background: isLeaveOrHoliday
                      ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(6, 182, 212, 0.05) 100%)'
                      : 'var(--bg-card)',
                    border: isLeaveOrHoliday
                      ? '1px solid rgba(16, 185, 129, 0.35)'
                      : slot.activityType === 'TEST'
                        ? '1px solid rgba(239, 68, 68, 0.35)'
                        : '1px solid var(--border-color)',
                    borderRadius: '16px',
                    padding: '16px 18px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    boxShadow: 'var(--shadow-card)',
                    transition: 'var(--transition)'
                  }}
                >
                  {/* Top Row: Month Badge + Time Window + Day Badge + Activity Type + Status */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      {/* Academic Month Badge (Starting 1 April 2026) */}
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        color: '#059669',
                        background: 'rgba(16, 185, 129, 0.12)',
                        border: '1px solid rgba(16, 185, 129, 0.28)',
                        padding: '3px 8px',
                        borderRadius: '6px'
                      }}>
                        <span>🗓️</span>
                        <span>{slot.month || 'April 2026'}</span>
                      </span>

                      {/* Time Slot Pill */}
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        color: 'var(--text-primary)',
                        background: 'var(--bg-hover)',
                        border: '1px solid var(--border-color)',
                        padding: '4px 10px',
                        borderRadius: '8px'
                      }}>
                        <Clock size={13} style={{ color: '#10b981' }} />
                        <span>{slot.startTime} – {slot.endTime}</span>
                      </span>

                      {/* Day Pill */}
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        color: '#4f46e5',
                        background: 'rgba(79, 70, 229, 0.1)',
                        padding: '4px 8px',
                        borderRadius: '6px'
                      }}>
                        {slot.day}
                      </span>

                      {/* Class / Semester Badge */}
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        color: '#ffffff',
                        background: String(slot.classNum).startsWith('BCA')
                          ? 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'
                          : 'linear-gradient(135deg, #10b981 0%, #04aa6d 100%)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        boxShadow: String(slot.classNum).startsWith('BCA')
                          ? '0 2px 8px rgba(37, 99, 235, 0.3)'
                          : 'none'
                      }}>
                        {String(slot.classNum).startsWith('BCA') ? slot.classNum : `Class ${slot.classNum}`}
                      </span>

                      {/* Subject Name */}
                      <span style={{
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        color: 'var(--text-primary)'
                      }}>
                        {slot.subject}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {/* Activity Badge */}
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        color: actBadge.color,
                        background: actBadge.bg,
                        padding: '3px 9px',
                        borderRadius: '9999px',
                        border: `1px solid ${actBadge.color}33`
                      }}>
                        {actBadge.label}
                      </span>

                      {/* Status Indicator */}
                      <span style={{
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        color: isLeaveOrHoliday
                          ? '#10b981'
                          : slot.status === 'LIVE' ? '#10b981' : slot.status === 'COMPLETED' ? '#94a3b8' : '#f59e0b',
                        background: isLeaveOrHoliday ? 'rgba(16, 185, 129, 0.12)' : 'var(--bg-hover)',
                        padding: '3px 7px',
                        borderRadius: '9999px',
                        border: isLeaveOrHoliday ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid var(--border-color)',
                        textTransform: 'uppercase'
                      }}>
                        {isLeaveOrHoliday ? '🌴 LEAVE DAY' : slot.status}
                      </span>
                    </div>
                  </div>

                  {/* Middle Row: Lesson Title & Description */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <h3 style={{
                      fontSize: '1rem',
                      fontWeight: 800,
                      margin: 0,
                      color: 'var(--text-primary)',
                      lineHeight: 1.35
                    }}>
                      {slot.lessonTitle}
                    </h3>

                    {slot.description && (
                      <p style={{
                        fontSize: '0.82rem',
                        color: 'var(--text-muted)',
                        margin: 0,
                        lineHeight: 1.45
                      }}>
                        {slot.description}
                      </p>
                    )}
                  </div>

                  {/* Bottom Row: Instructor + Action Controls (WordPress Management) */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '8px',
                    paddingTop: '6px',
                    borderTop: '1px solid var(--border-color)'
                  }}>
                    <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      Instructor: <strong style={{ color: 'var(--text-primary)' }}>{slot.instructor}</strong>
                    </span>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {/* Launch/Open Button */}
                      {onNavigateToClass && (
                        <button
                          type="button"
                          style={{
                            background: isLeaveOrHoliday ? 'rgba(16, 185, 129, 0.1)' : 'var(--bg-hover)',
                            border: isLeaveOrHoliday ? '1px solid rgba(16, 185, 129, 0.25)' : '1px solid var(--border-color)',
                            color: isLeaveOrHoliday ? '#10b981' : String(slot.classNum).startsWith('BCA') ? '#3b82f6' : '#10b981',
                            borderRadius: '8px',
                            padding: '5px 10px',
                            fontSize: '0.74rem',
                            fontWeight: 800,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                          onClick={() => {
                            if (isLeaveOrHoliday) {
                              showNotification('Sunday is a designated weekly holiday / leave day. No active classes!');
                              return;
                            }
                            if (slot.resourceLink && slot.resourceLink.startsWith('http')) {
                              window.open(slot.resourceLink, '_blank');
                            } else if (String(slot.classNum).startsWith('BCA')) {
                              if (slot.activityType === 'STUDIO' || slot.subject.toLowerCase().includes('lab') || slot.lessonTitle.toLowerCase().includes('practical')) {
                                window.open('https://ignou-study-notes-by-nextsem.web.app/bca/practical/', '_blank');
                              } else {
                                window.open('https://ignou-study-notes-by-nextsem.web.app/bca/', '_blank');
                              }
                            } else {
                              onNavigateToClass(slot.classNum);
                            }
                          }}
                        >
                          <BookOpen size={12} />
                          <span>
                            {isLeaveOrHoliday
                              ? '🌴 Sunday Leave / Off'
                              : String(slot.classNum).startsWith('BCA')
                                ? (slot.activityType === 'STUDIO' || slot.subject.toLowerCase().includes('lab') || slot.lessonTitle.toLowerCase().includes('practical')
                                    ? '💻 Open Practical Lab ↗'
                                    : `📖 Open ${slot.classNum} ↗`)
                                : `Open Class ${slot.classNum}`}
                          </span>
                        </button>
                      )}

                      {/* Interactive Studio / Practical Lab Launch Button */}
                      {(slot.activityType === 'STUDIO' || (slot.resourceLink && slot.resourceLink.includes('/practical/'))) && (
                        <button
                          type="button"
                          onClick={() => {
                            if (slot.resourceLink && slot.resourceLink.startsWith('http')) {
                              window.open(slot.resourceLink, '_blank');
                            } else if (String(slot.classNum).startsWith('BCA')) {
                              window.open('https://ignou-study-notes-by-nextsem.web.app/bca/practical/', '_blank');
                            } else if (onOpenInteractiveStudio) {
                              onOpenInteractiveStudio(slot.resourceLink || 'studio');
                            }
                          }}
                          style={{
                            background: 'rgba(16, 185, 129, 0.12)',
                            border: '1px solid rgba(16, 185, 129, 0.3)',
                            color: '#10b981',
                            borderRadius: '8px',
                            padding: '5px 10px',
                            fontSize: '0.74rem',
                            fontWeight: 800,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <Zap size={12} />
                          <span>{String(slot.classNum).startsWith('BCA') ? 'Launch Code Lab ↗' : 'Launch Studio'}</span>
                        </button>
                      )}

                      {/* WordPress Management Buttons (Only visible in CMS Editor Mode) */}
                      {viewMode === 'CMS_EDITOR' && (
                        <>
                          <button
                            type="button"
                            onClick={() => handleEditSlot(slot)}
                            title="Edit this slot (WordPress Style)"
                            style={{
                              background: 'var(--bg-hover)',
                              border: '1px solid var(--border-color)',
                              color: 'var(--text-primary)',
                              borderRadius: '8px',
                              padding: '5px 8px',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center'
                            }}
                          >
                            <Edit2 size={13} />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDuplicateSlot(slot)}
                            title="Duplicate Slot"
                            style={{
                              background: 'var(--bg-hover)',
                              border: '1px solid var(--border-color)',
                              color: 'var(--text-primary)',
                              borderRadius: '8px',
                              padding: '5px 8px',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center'
                            }}
                          >
                            <Copy size={13} />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDeleteSlot(slot.id)}
                            title="Delete Slot"
                            style={{
                              background: 'rgba(239, 68, 68, 0.1)',
                              border: '1px solid rgba(239, 68, 68, 0.25)',
                              color: '#ef4444',
                              borderRadius: '8px',
                              padding: '5px 8px',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center'
                            }}
                          >
                            <Trash2 size={13} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </section>
      </>
      )}

      {/* ── 6. WordPress Style Add / Edit Modal ── */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(6px)',
          zIndex: 500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px'
        }}>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '20px',
            width: '100%',
            maxWidth: '560px',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '22px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            animation: 'fadeIn 0.2s ease-in-out'
          }}>
            {/* Modal Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: '#10b981',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Edit2 size={16} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 900, margin: 0, color: 'var(--text-primary)' }}>
                  {editingItem ? 'Edit Timetable Slot' : 'Add New Timetable Slot'}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '4px'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSaveForm} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              
              {/* Month, Calendar Date, Day, Start & End Time Selection */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
                {/* Academic Month (April to December 2026) */}
                <div>
                  <label style={{ fontSize: '0.74rem', fontWeight: 800, color: '#10b981', display: 'block', marginBottom: '4px' }}>
                    ACADEMIC MONTH (2026 SESSION)
                  </label>
                  <select
                    value={formMonth}
                    onChange={(e) => {
                      const newM = e.target.value;
                      setFormMonth(newM);
                      const maxD = getDaysInMonth(newM);
                      const newDate = formDayDate ? Math.min(formDayDate, maxD) : 1;
                      setFormDayDate(newDate);
                      const newDayOfWeek = getDayOfWeekForDate(newDate, newM);
                      setFormDay(newDayOfWeek);
                      if (newDayOfWeek === 'Saturday') setFormActivityType('TEST');
                      else if (newDayOfWeek === 'Sunday') setFormActivityType('REVISION');
                    }}
                    style={{
                      width: '100%',
                      background: 'var(--bg-hover)',
                      border: '1px solid rgba(16, 185, 129, 0.4)',
                      color: 'var(--text-primary)',
                      padding: '8px 10px',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {ACADEMIC_CALENDAR_MONTHS.map((m) => (
                      <option key={m} value={m}>🗓️ {m}</option>
                    ))}
                  </select>
                </div>

                {/* Specific Calendar Date (Dynamically 1 to 30/31 based on formMonth) */}
                <div>
                  <label style={{ fontSize: '0.74rem', fontWeight: 800, color: '#f59e0b', display: 'block', marginBottom: '4px' }}>
                    CALENDAR DATE (1–{getDaysInMonth(formMonth)} {formMonth.split(' ')[0].toUpperCase()})
                  </label>
                  <select
                    value={formDayDate ?? ''}
                    onChange={(e) => {
                      const val = e.target.value ? Number(e.target.value) : undefined;
                      setFormDayDate(val);
                      if (val) {
                        const dDay = getDayOfWeekForDate(val, formMonth);
                        setFormDay(dDay);
                        if (dDay === 'Saturday') setFormActivityType('TEST');
                        else if (dDay === 'Sunday') setFormActivityType('REVISION');
                      }
                    }}
                    style={{
                      width: '100%',
                      background: 'var(--bg-hover)',
                      border: '1px solid rgba(245, 158, 11, 0.4)',
                      color: 'var(--text-primary)',
                      padding: '8px 10px',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="">-- Generic Day --</option>
                    {Array.from({ length: getDaysInMonth(formMonth) }, (_, i) => i + 1).map((d) => (
                      <option key={d} value={d}>
                        Day {d} {formMonth.split(' ')[0]} ({getDayOfWeekForDate(d, formMonth)})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Day of Week */}
                <div>
                  <label style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    DAY OF WEEK
                  </label>
                  <select
                    value={formDay}
                    onChange={(e) => setFormDay(e.target.value as DayOfWeek)}
                    style={{
                      width: '100%',
                      background: 'var(--bg-hover)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      padding: '8px 10px',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {DAYS_LIST.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                {/* Start Time Selector */}
                <div>
                  <label style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    START TIME
                  </label>
                  <select
                    value={formStartTime}
                    onChange={(e) => setFormStartTime(e.target.value)}
                    style={{
                      width: '100%',
                      background: 'var(--bg-hover)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      padding: '8px 10px',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {TIME_SLOTS.map((t) => (
                      <option key={`start-${t}`} value={t}>⏰ {t}</option>
                    ))}
                  </select>
                </div>

                {/* End Time Selector */}
                <div>
                  <label style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    END TIME
                  </label>
                  <select
                    value={formEndTime}
                    onChange={(e) => setFormEndTime(e.target.value)}
                    style={{
                      width: '100%',
                      background: 'var(--bg-hover)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      padding: '8px 10px',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {TIME_SLOTS.map((t) => (
                      <option key={`end-${t}`} value={t}>⏰ {t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Class & Subject Selectors */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    TARGET CLASS / SEM
                  </label>
                  <select
                    value={formClassNum}
                    onChange={(e) => {
                      const val = e.target.value;
                      setFormClassNum(val.startsWith('BCA') ? val : Number(val));
                      setFormSelectedChapterId('');
                      setIsCustomSubject(false);
                    }}
                    style={{
                      width: '100%',
                      background: 'var(--bg-hover)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      padding: '8px 10px',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <optgroup label="BCA Degree Semesters">
                      {BCA_SEMESTERS.map((sem) => (
                        <option key={sem} value={sem}>{sem}</option>
                      ))}
                    </optgroup>
                    <optgroup label="School Classes (1–12)">
                      {[12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((c) => (
                        <option key={c} value={c}>Class {c}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <label style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--text-muted)' }}>
                      SUBJECT SELECTOR
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsCustomSubject(!isCustomSubject)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#10b981',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      {isCustomSubject ? '← Pick from Syllabus List' : '✍️ + Type Custom Subject'}
                    </button>
                  </div>

                  {isCustomSubject ? (
                    <input
                      type="text"
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      placeholder="e.g. Artificial Intelligence, Robotics..."
                      style={{
                        width: '100%',
                        background: 'var(--bg-hover)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        padding: '8px 10px',
                        borderRadius: '8px',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        outline: 'none'
                      }}
                    />
                  ) : (
                    <select
                      value={formSubject}
                      onChange={(e) => {
                        if (e.target.value === '__CUSTOM__') {
                          setIsCustomSubject(true);
                          setFormSubject('');
                        } else {
                          setFormSubject(e.target.value);
                        }
                      }}
                      style={{
                        width: '100%',
                        background: 'var(--bg-hover)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        padding: '8px 10px',
                        borderRadius: '8px',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        outline: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      {availableSubjectNames.length > 0 ? (
                        <>
                          <optgroup label={`📚 Syllabus Subjects for ${formClassNum}`}>
                            {availableSubjectNames.map((sName) => (
                              <option key={sName} value={sName}>📖 {sName}</option>
                            ))}
                          </optgroup>
                          <option value="__CUSTOM__">✍️ + Type Custom Subject...</option>
                        </>
                      ) : (
                        <>
                          <option value="Mathematics">📖 Mathematics</option>
                          <option value="Science">📖 Science</option>
                          <option value="Physics">📖 Physics</option>
                          <option value="Chemistry">📖 Chemistry</option>
                          <option value="Biology">📖 Biology</option>
                          <option value="Computer Science">📖 Computer Science</option>
                          <option value="English">📖 English</option>
                          <option value="Hindi">📖 Hindi</option>
                          <option value="__CUSTOM__">✍️ + Type Custom Subject...</option>
                        </>
                      )}
                    </select>
                  )}
                </div>
              </div>

              {/* ── Select Chapter from NCERT Curriculum (https://ncert-alpha.vercel.app/?view=classes) ── */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(56, 189, 248, 0.08) 100%)',
                border: '1px solid rgba(16, 185, 129, 0.28)',
                borderRadius: '12px',
                padding: '12px 14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                boxShadow: '0 2px 10px rgba(16, 185, 129, 0.05)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px' }}>
                  <label style={{
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    color: '#10b981',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <BookOpen size={14} />
                    <span>
                      {String(formClassNum).startsWith('BCA')
                        ? `SELECT LESSON / LAB FROM IGNOU BCA CURRICULUM (${availableCurriculumChapters.length} AVAILABLE)`
                        : `SELECT CHAPTER FROM NCERT CURRICULUM (${availableCurriculumChapters.length} AVAILABLE)`}
                    </span>
                  </label>

                  {String(formClassNum).startsWith('BCA') ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <a
                        href="https://ignou-study-notes-by-nextsem.web.app/bca/practical/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open BCA Practical Learning Portal"
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          color: '#2563eb',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '3px',
                          background: 'rgba(37, 99, 235, 0.08)',
                          padding: '2px 6px',
                          borderRadius: '6px'
                        }}
                      >
                        <span>💻 Practical Portal ↗</span>
                      </a>
                      <a
                        href="https://ignou-study-notes-by-nextsem.web.app/bca/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open IGNOU BCA Hub"
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          color: '#10b981',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '3px',
                          background: 'rgba(16, 185, 129, 0.08)',
                          padding: '2px 6px',
                          borderRadius: '6px'
                        }}
                      >
                        <span>📖 BCA Theory Hub ↗</span>
                      </a>
                    </div>
                  ) : (
                    <a
                      href="https://ncert-alpha.vercel.app/?view=classes"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open NCERT Classes Hub"
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: '#0284c7',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <span>ncert-alpha.vercel.app/?view=classes ↗</span>
                    </a>
                  )}
                </div>

                <select
                  value={formSelectedChapterId}
                  onChange={(e) => handleApplyChapterFromCurriculum(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    padding: '9px 12px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="">
                    -- Click to Pick Chapter from Class {formClassNum} Syllabus ({availableCurriculumChapters.length} Total Chapters) --
                  </option>
                  {Object.entries(chaptersGroupedBySubject).map(([subjName, chapters]) => (
                    <optgroup key={subjName} label={`📚 ${subjName} (${chapters.length} Chapters)`}>
                      {chapters.map((ch) => (
                        <option key={ch.id} value={ch.id}>
                          {ch.title}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>

                <div style={{
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <Sparkles size={12} style={{ color: '#f59e0b', flexShrink: 0 }} />
                  <span>1-Click Selection auto-populates Lesson Title, Subject Name, Learning Objectives &amp; Official PDF Link.</span>
                </div>
              </div>

              {/* Activity Type & Status */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    ACTIVITY / CONTENT TYPE
                  </label>
                  <select
                    value={formActivityType}
                    onChange={(e) => setFormActivityType(e.target.value as ActivityType)}
                    style={{
                      width: '100%',
                      background: 'var(--bg-hover)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      padding: '8px 10px',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="LESSON">📖 Lesson / Theory Lecture</option>
                    <option value="TEST">📝 Chapter Test / Assessment</option>
                    <option value="QUIZ">⚡ Interactive Quiz / MCQs</option>
                    <option value="STUDIO">🔬 Practical Studio / Lab</option>
                    <option value="REVISION">🎯 Revision &amp; Doubt Clearing</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    PUBLISH STATUS
                  </label>
                  <select
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value as any)}
                    style={{
                      width: '100%',
                      background: 'var(--bg-hover)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      padding: '8px 10px',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="SCHEDULED">Scheduled</option>
                    <option value="LIVE">Live Now</option>
                    <option value="COMPLETED">Completed</option>
                    <option value="DRAFT">Draft</option>
                  </select>
                </div>
              </div>

              {/* Lesson Title with Quick Preset Selector */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px', flexWrap: 'wrap', gap: '4px' }}>
                  <label style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--text-muted)' }}>
                    LESSON / TEST / QUIZ TITLE *
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ fontSize: '0.68rem', color: '#10b981', fontWeight: 700 }}>Quick Presets:</span>
                    <select
                      onChange={(e) => {
                        if (e.target.value) {
                          setFormLessonTitle(e.target.value);
                          e.target.value = '';
                        }
                      }}
                      defaultValue=""
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        padding: '2px 8px',
                        borderRadius: '6px',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        outline: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="" disabled>-- Pick Title Template --</option>
                      <option value="Chapter 1: Theory Lecture &amp; Core Concepts">📖 Theory Lecture &amp; Core Concepts</option>
                      <option value="Chapter Test: 30 MCQ Diagnostic Assessment">📝 Chapter Test: 30 MCQ Assessment</option>
                      <option value="Formula Vault &amp; Numerical Derivations Studio">🔬 Formula Vault &amp; Derivations Studio</option>
                      <option value="Live Hands-on Coding &amp; PC Practical Assignment">💻 Hands-on Coding &amp; Practical Assignment</option>
                      <option value="Previous Years Board Questions (PYQ) Mastery">🎯 PYQ Exam Questions Solving</option>
                      <option value="Weekly Speed Revision &amp; Doubt Clearing Session">⚡ Weekly Speed Revision &amp; Doubts</option>
                    </select>
                  </div>
                </div>

                <input
                  type="text"
                  required
                  value={formLessonTitle}
                  onChange={(e) => setFormLessonTitle(e.target.value)}
                  placeholder="e.g. Chapter 1: Electric Charges & Fields (32 Derivations Studio)"
                  style={{
                    width: '100%',
                    background: 'var(--bg-hover)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    padding: '8px 10px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    outline: 'none'
                  }}
                />
              </div>

              {/* Description / Instructions with Quick Objectives Preset Selector */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px', flexWrap: 'wrap', gap: '4px' }}>
                  <label style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--text-muted)' }}>
                    LEARNING OBJECTIVES / DESCRIPTION
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ fontSize: '0.68rem', color: '#10b981', fontWeight: 700 }}>Quick Presets:</span>
                    <select
                      onChange={(e) => {
                        if (e.target.value) {
                          setFormDescription(e.target.value);
                          e.target.value = '';
                        }
                      }}
                      defaultValue=""
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        padding: '2px 8px',
                        borderRadius: '6px',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        outline: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="" disabled>-- Pick Objective Template --</option>
                      <option value="Comprehensive textbook theory coverage, key definitions, diagrams, and foundational principles.">📚 Comprehensive Theory &amp; Concepts</option>
                      <option value="Timed diagnostic test with automated scoring, CBSE/NCERT answer keys, and step-by-step rubrics.">📝 Timed Diagnostic Assessment</option>
                      <option value="Hands-on PC lab practical exercise following Er. Manoj Kumar step-by-step verified specifications.">💻 PC Lab Practical Exercise</option>
                      <option value="Consolidated formula revision sheets, mnemonic summaries, and exam pattern high-yield problems.">⚡ Formula Vault &amp; Retentive Revision</option>
                      <option value="Interactive doubt-clearing, viva voce preparation, and student project walkthrough.">🎯 Doubts &amp; Viva Voce Review</option>
                    </select>
                  </div>
                </div>

                <textarea
                  rows={3}
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="Describe chapters covered, derivation rubrics, formulas, or homework tasks..."
                  style={{
                    width: '100%',
                    background: 'var(--bg-hover)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    padding: '8px 10px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Instructor / Faculty Selector */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <label style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--text-muted)' }}>
                    INSTRUCTOR / LEAD FACULTY SELECTOR
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsCustomInstructor(!isCustomInstructor)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#10b981',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      padding: 0
                    }}
                  >
                    {isCustomInstructor ? '← Pick from Faculty List' : '✍️ + Type Custom Faculty'}
                  </button>
                </div>

                {isCustomInstructor ? (
                  <input
                    type="text"
                    value={formInstructor}
                    onChange={(e) => setFormInstructor(e.target.value)}
                    placeholder="e.g. Er. Manoj Kumar, Guest Lecturer..."
                    style={{
                      width: '100%',
                      background: 'var(--bg-hover)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      padding: '8px 10px',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      outline: 'none'
                    }}
                  />
                ) : (
                  <select
                    value={formInstructor}
                    onChange={(e) => {
                      if (e.target.value === '__CUSTOM__') {
                        setIsCustomInstructor(true);
                        setFormInstructor('');
                      } else {
                        setFormInstructor(e.target.value);
                      }
                    }}
                    style={{
                      width: '100%',
                      background: 'var(--bg-hover)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      padding: '8px 10px',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {FACULTY_OPTIONS.map((fName) => (
                      <option key={fName} value={fName}>👨‍🏫 {fName}</option>
                    ))}
                    <option value="__CUSTOM__">✍️ + Type Custom Faculty...</option>
                  </select>
                )}
              </div>

              {/* Modal Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px', marginTop: '8px' }}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    background: 'transparent',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #10b981 0%, #04aa6d 100%)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 18px',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    boxShadow: '0 2px 10px rgba(16, 185, 129, 0.3)'
                  }}
                >
                  {editingItem ? 'Update Slot' : 'Publish Slot'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};
