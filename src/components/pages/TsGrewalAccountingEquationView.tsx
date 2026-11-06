import React, { useState } from 'react';
import {
  ArrowLeft,
  ExternalLink,
  Scale,
  Copy,
  Check,
  BookOpen,
  FileSpreadsheet,
  Award,
  Sparkles,
  Calculator,
  Search,
  ChevronDown,
  ChevronUp,
  BookmarkCheck,
  Layers,
  HelpCircle,
  Lightbulb,
  Receipt,
  FileText,
  Download,
  Eye,
  X,
  FolderOpen
} from 'lucide-react';

interface TsGrewalPdfFile {
  id: string;
  number: string;
  title: string;
  category: 'Full Manual' | 'Foundation' | 'Recording' | 'BRS & Trial Balance' | 'Final Accounts';
  size: string;
  topics: string;
  filename: string;
}

const TS_GREWAL_PDF_FILES: TsGrewalPdfFile[] = [
  {
    id: 'solutions-manual',
    number: 'Full Book',
    title: 'Class 11 Complete Solutions Manual (T.S. Grewal)',
    category: 'Full Manual',
    size: '4.82 MB',
    topics: 'Verified step-by-step solutions for all numerical questions across all chapters.',
    filename: 'Account-Class-11-Solutions-TS-Grewal-2018.pdf'
  },
  {
    id: 'ch2-terms',
    number: 'Chapter 2',
    title: 'Basic Accounting Terms',
    category: 'Foundation',
    size: '8.6 KB',
    topics: 'Business Entity, Capital, Drawings, Assets, Liabilities, Revenue, Bad Debts, and Discounts.',
    filename: 'Chapter-2-----Basic-Accounting-Terms.pdf'
  },
  {
    id: 'ch5-equation',
    number: 'Chapter 5',
    title: 'Accounting Equation (Assets = Liabilities + Capital)',
    category: 'Foundation',
    size: '1.23 MB',
    topics: 'Dual-aspect formula, prepaid/outstanding adjustments, drawings, and revenue impact.',
    filename: 'Chapter-5-----Accounting-Equation.pdf'
  },
  {
    id: 'ch6-rules-short',
    number: 'Chapter 6 (Guide)',
    title: 'Rules of Debit & Credit (Procedure Guide)',
    category: 'Foundation',
    size: '561 KB',
    topics: 'Traditional (Personal, Real, Nominal) vs Modern (Assets, Liab, Capital, Exp, Rev) rules.',
    filename: 'Chapter-6-----Accounting-Procedures-----Rules-of-Debit-and-Credit.pdf'
  },
  {
    id: 'ch6-rules-full',
    number: 'Chapter 6 (Full)',
    title: 'Rules of Debit & Credit (Comprehensive Edition)',
    category: 'Foundation',
    size: '2.23 MB',
    topics: 'Extended worked illustrations, T-shape account classification, and rules practice.',
    filename: 'Ch-6 Accounting procedure rules of debit and credit.pdf'
  },
  {
    id: 'ch7-vouchers-short',
    number: 'Chapter 7 (Guide)',
    title: 'Origin of Transactions: Source Documents & Vouchers',
    category: 'Recording',
    size: '569 KB',
    topics: 'Invoices, Cash Memo, Debit Note, Credit Note, Cheques, Supporting & Accounting Vouchers.',
    filename: 'Chapter-7-----Origin-of-Transactions-----Source-Documents-and-Preparation-of-Voucher.pdf'
  },
  {
    id: 'ch7-vouchers-full',
    number: 'Chapter 7 (Full)',
    title: 'Source Documents & Vouchers (Expanded Workbook)',
    category: 'Recording',
    size: '11.54 MB',
    topics: 'High-resolution practical voucher templates, cash vouchers, transfer vouchers.',
    filename: 'Ch-7 Origin of Transactions -Source Documents and preparation of vouchers.pdf'
  },
  {
    id: 'ch8-journal-ledger',
    number: 'Chapter 8 (Guide)',
    title: 'Journal & Ledger (Books of Original & Principal Entry)',
    category: 'Recording',
    size: '5.99 MB',
    topics: 'Chronological recording, Compound Entries, Trade/Cash Discount, GST, Ledger balancing.',
    filename: 'Chapter-8-----Journal-and-Ledger.pdf'
  },
  {
    id: 'ch8-journal-master',
    number: 'Chapter 8 (Master)',
    title: 'Journal Master Practical Problem Book',
    category: 'Recording',
    size: '36.40 MB',
    topics: 'Complete comprehensive collection of complex journal entries, GST reversals, bad debts.',
    filename: 'Ch-8 Journal.pdf'
  },
  {
    id: 'ch9-cash-book',
    number: 'Chapter 9',
    title: 'Special Purpose Books I – Cash Book',
    category: 'Recording',
    size: '2.79 MB',
    topics: 'Single Column, Double Column (Cash & Bank), Contra Entries [C], and Petty Cash Book.',
    filename: 'Chapter-9-----Special-Purpose-Books-I-----Cash-Book.pdf'
  },
  {
    id: 'ch10-other-books',
    number: 'Chapter 10',
    title: 'Special Purpose Books II – Other Subsidiary Books',
    category: 'Recording',
    size: '5.23 MB',
    topics: 'Purchases Book, Sales Book, Returns Inward/Outward Books, and Journal Proper.',
    filename: 'Chapter-10-----Special-Purpose-Books-II-----Other-Books.pdf'
  },
  {
    id: 'ch11-brs',
    number: 'Chapter 11',
    title: 'Bank Reconciliation Statement (BRS)',
    category: 'BRS & Trial Balance',
    size: '1.97 MB',
    topics: 'Timing differences, direct bank credits/debits, cheques unpresented, Amended Cash Book.',
    filename: 'Chapter-11-----Bank-Reconciliation-Statement.pdf'
  },
  {
    id: 'ch12-trial-balance',
    number: 'Chapter 12',
    title: 'Trial Balance & Arithmetical Accuracy',
    category: 'BRS & Trial Balance',
    size: '1.36 MB',
    topics: 'Debit and Credit balance extraction, Disclosed vs Undisclosed errors, Suspense Account.',
    filename: 'Chapter-12-----Trial-Balance.pdf'
  },
  {
    id: 'ch13-depreciation',
    number: 'Chapter 13',
    title: 'Depreciation, Provisions & Reserves',
    category: 'BRS & Trial Balance',
    size: '3.21 MB',
    topics: 'Straight Line Method (SLM), Written Down Value (WDV), Provision for Depreciation.',
    filename: 'Chapter-13-----Depreciation.pdf'
  },
  {
    id: 'ch15-depreciation-master',
    number: 'Chapter 15 (Master)',
    title: 'Depreciation Master Practical Problem Set',
    category: 'BRS & Trial Balance',
    size: '63.49 MB',
    topics: 'Heavy problem collection with asset purchase/sales, partial scrap disposal, and Provision.',
    filename: 'Ch-15 Depreciation.pdf'
  },
  {
    id: 'ch15-bills-exchange',
    number: 'Chapter 15',
    title: 'Accounting for Bills of Exchange',
    category: 'Final Accounts',
    size: '3.34 MB',
    topics: 'Drawer, Drawee, Payee, 3 Days of Grace, Discounting, Endorsement, Dishonour, Renewal.',
    filename: 'Chapter-15-----Accounting-for-Bills-of-Exchange.pdf'
  },
  {
    id: 'ch16-rectification',
    number: 'Chapter 16',
    title: 'Rectification of Errors',
    category: 'Final Accounts',
    size: '2.56 MB',
    topics: 'Before Trial Balance corrections, Suspense Account rectifications, Errors of Principle.',
    filename: 'Chapter-16-----Rectification-of-Errors.pdf'
  },
  {
    id: 'ch17-final-accounts',
    number: 'Chapter 17',
    title: 'Financial Statements of Sole Proprietorship',
    category: 'Final Accounts',
    size: '2.02 MB',
    topics: 'Trading Account (Gross Profit), Profit & Loss Account (Net Profit), Balance Sheet.',
    filename: 'Chapter-17-----Financial-Statements-of-Sole-Proprietorship.pdf'
  },
  {
    id: 'ch18-adjustments',
    number: 'Chapter 18',
    title: 'Adjustments in Preparation of Financial Statements',
    category: 'Final Accounts',
    size: '5.27 MB',
    topics: 'Closing stock, Outstanding expenses, Bad debts & Provision for Doubtful Debts.',
    filename: 'Chapter-18-----Adjustments-in-Preparation-of-Financial-Statements.pdf'
  },
  {
    id: 'ch19-single-entry',
    number: 'Chapter 19',
    title: 'Accounts from Incomplete Records (Single Entry System)',
    category: 'Final Accounts',
    size: '962 KB',
    topics: 'Statement of Affairs method, Opening/Closing capital computation, and Profit/Loss.',
    filename: 'Chapter-19-----Accounts-from-Incomplete-Records-----Single-Entry-System.pdf'
  },
  {
    id: 'ch20-npo',
    number: 'Chapter 20',
    title: 'Financial Statements of Not-for-Profit Organisations (NPO)',
    category: 'Final Accounts',
    size: '4.14 MB',
    topics: 'Receipts & Payments Account, Income & Expenditure Account, Balance Sheet, Subscriptions.',
    filename: 'Chapter-20-----Financial-Statements-of-Not-for-Profit-Organisations.pdf'
  }
];

interface TsGrewalAccountingEquationViewProps {
  onBack: () => void;
}

interface ChapterItem {
  number: number;
  title: string;
  category: 'Foundation' | 'Recording & Ledger' | 'Trial Balance & BRS' | 'Financial Statements';
  nepWeightage: string;
  summary: string;
  keyTopics: string[];
  goldenRuleOrFormula: string;
  practicalTip: string;
}

const TS_GREWAL_18_CHAPTERS: ChapterItem[] = [
  {
    number: 1,
    title: 'Basic Accounting Terms',
    category: 'Foundation',
    nepWeightage: '4–6 Marks (High Frequency MCQ & Definitions)',
    summary: 'Core language of business covering Business Entity, Capital, Drawings, Assets (Current/Non-Current/Fictitious), Liabilities, Revenue, Expenditure, Bad Debts, and Discounts.',
    keyTopics: ['Capital vs Drawings', 'Tangible vs Intangible Assets', 'Current vs Non-Current Liabilities', 'Trade Discount vs Cash Discount', 'Solvent vs Insolvent'],
    goldenRuleOrFormula: 'Capital = Total Assets - External Liabilities | Trade Discount is deducted in invoice but never recorded in journal.',
    practicalTip: 'Cash discount is recorded in Cash Book/Journal, while Trade discount only reduces gross invoice price.'
  },
  {
    number: 2,
    title: 'Theory Base of Accounting, GAAPs & AS',
    category: 'Foundation',
    nepWeightage: '4–6 Marks (Conceptual Foundation)',
    summary: 'Fundamental accounting assumptions (Going Concern, Consistency, Accrual) and core accounting principles (Prudence, Matching, Dual Aspect, Historical Cost, Materiality).',
    keyTopics: ['Going Concern Assumption', 'Accrual Concept', 'Prudence / Conservatism Principle', 'Matching Principle', 'Business Entity Concept', 'IFRS & Ind AS'],
    goldenRuleOrFormula: 'Prudence Principle: Anticipate no profits, but provide for all possible future losses.',
    practicalTip: 'Closing stock is valued at Cost Price or Net Realizable Value (Market Price), whichever is lower (Prudence Concept).'
  },
  {
    number: 3,
    title: 'Accounting Equation',
    category: 'Foundation',
    nepWeightage: '6–8 Marks (Core Practical Problem)',
    summary: 'Mathematical representation of the dual aspect principle where every transaction affects at least two items while keeping Assets = Liabilities + Capital balanced.',
    keyTopics: ['Fundamental Equation', 'Effects of Revenues & Expenses on Capital', 'Outstanding & Prepaid Expenses', 'Accrued & Unearned Income', 'Drawings & Fresh Capital'],
    goldenRuleOrFormula: 'Assets = Liabilities + Capital | Capital (Closing) = Capital (Opening) + Additional Capital + Net Profit - Drawings',
    practicalTip: 'Expenses reduce capital; Incomes increase capital; Outstanding expenses create a liability and reduce capital.'
  },
  {
    number: 4,
    title: 'Rules of Debit and Credit',
    category: 'Foundation',
    nepWeightage: '4–6 Marks (Classification of Accounts)',
    summary: 'Classification of accounts under Traditional English Approach (Personal, Real, Nominal) and Modern American Approach (Assets, Liabilities, Capital, Revenue, Expenses).',
    keyTopics: ['Personal Accounts (Natural, Artificial, Representative)', 'Real Accounts (Tangible/Intangible)', 'Nominal Accounts', 'Modern Classification Rules'],
    goldenRuleOrFormula: 'Traditional: Debit the Receiver / Credit the Giver • Debit what comes in / Credit what goes out • Debit all expenses / Credit all incomes.',
    practicalTip: 'Under modern approach: Assets & Expenses increase with Debit (+Dr); Liabilities, Capital & Revenues increase with Credit (+Cr).'
  },
  {
    number: 5,
    title: 'Origin of Transactions – Source Documents & Vouchers',
    category: 'Foundation',
    nepWeightage: '3–4 Marks (Objective & Practical Vouchers)',
    summary: 'Evidence of business transactions including Cash Memo, Invoice/Bill, Receipt, Pay-in-Slip, Cheque, Debit Note, Credit Note, and preparation of Accounting Vouchers.',
    keyTopics: ['Debit Note vs Credit Note', 'Supporting Vouchers', 'Cash Vouchers (Debit/Credit)', 'Transfer / Non-Cash Vouchers'],
    goldenRuleOrFormula: 'Debit Note is sent to a supplier when goods are returned; Credit Note is sent to a customer when goods are received back.',
    practicalTip: 'Every accounting entry in books of primary entry must be substantiated by a verified source document voucher.'
  },
  {
    number: 6,
    title: 'Journal & Goods and Services Tax (GST)',
    category: 'Recording & Ledger',
    nepWeightage: '8–10 Marks (High Priority Core Skill)',
    summary: 'Book of original entry recording financial transactions chronologically with compound entries, discount calculations, bad debts recovered, charity, loss by fire, and GST.',
    keyTopics: ['Compound Journal Entries', 'Trade Discount & Cash Discount Entries', 'Bad Debts & Recovery', 'Goods Distributed as Charity/Samples', 'CGST, SGST & IGST Accounting'],
    goldenRuleOrFormula: 'Intra-State: Input CGST Dr. + Input SGST Dr. | Inter-State: Input IGST Dr. | Output GST is a liability (Cr.).',
    practicalTip: 'GST is calculated on Net Selling Price (List Price - Trade Discount).'
  },
  {
    number: 7,
    title: 'Ledger',
    category: 'Recording & Ledger',
    nepWeightage: '4–6 Marks (Principal Book of Accounts)',
    summary: 'Principal book of accounts containing classified summaries of transactions in T-shaped ledger accounts, folio cross-referencing, and account balancing.',
    keyTopics: ['Posting from Journal to Ledger', 'Ruling of Ledger Account', 'Balancing of Real, Personal & Nominal Accounts', 'Carried Down (c/d) vs Brought Down (b/d)'],
    goldenRuleOrFormula: 'Debit balance means Dr. total > Cr. total (Asset or Expense); Credit balance means Cr. total > Dr. total (Liability, Capital, or Income).',
    practicalTip: 'Nominal accounts are not balanced at year-end; they are directly transferred to Trading and Profit & Loss Account.'
  },
  {
    number: 8,
    title: 'Special Purpose Books I – Cash Book',
    category: 'Recording & Ledger',
    nepWeightage: '6–8 Marks (Practical Cash & Bank Accounting)',
    summary: 'Recording all cash receipts and payments using Single Column Cash Book, Double Column Cash Book (with Bank column), Contra entries, and Petty Cash Book.',
    keyTopics: ['Simple Cash Book', 'Double Column Cash Book (Cash & Bank)', 'Contra Entries [C]', 'Dishonour of Cheques & Bank Charges', 'Petty Cash Book on Imprest System'],
    goldenRuleOrFormula: 'Contra Entry occurs when a transaction involves both Cash and Bank (e.g. Cash deposited into Bank or withdrawn for office use).',
    practicalTip: 'Cash column always shows a debit balance; Bank column can show a credit balance (Bank Overdraft).'
  },
  {
    number: 9,
    title: 'Special Purpose Books II – Other Books',
    category: 'Recording & Ledger',
    nepWeightage: '4–6 Marks (Subsidiary Books)',
    summary: 'Maintenance of Purchases Book, Sales Book, Purchases Return Book, Sales Return Book, and Journal Proper for non-repetitive transactions.',
    keyTopics: ['Purchases Book (Credit Purchases of Goods)', 'Sales Book (Credit Sales of Goods)', 'Returns Inward & Outward Books', 'Journal Proper Entries'],
    goldenRuleOrFormula: 'Cash purchases of goods and purchases of assets (cash or credit) are NEVER recorded in the Purchases Book.',
    practicalTip: 'Purchases Book records ONLY credit purchases of goods meant for resale.'
  },
  {
    number: 10,
    title: 'Bank Reconciliation Statement (BRS)',
    category: 'Trial Balance & BRS',
    nepWeightage: '6–8 Marks (High Yield Practical)',
    summary: 'Reconciling differences between the bank balance shown in Cash Book and the bank passbook due to timing differences and accounting errors.',
    keyTopics: ['Cheques issued but not presented', 'Cheques deposited but not collected', 'Direct bank charges & interest', 'Favourable vs Overdraft Balances', 'Amended Cash Book Method'],
    goldenRuleOrFormula: 'Starting with Cash Book Debit balance: Add cheques issued not presented, Direct deposits by customer; Less cheques deposited not cleared, Bank charges.',
    practicalTip: 'Bank Passbook is a copy of customer account in the bank ledger; its credit balance represents cash asset of the customer.'
  },
  {
    number: 11,
    title: 'Trial Balance',
    category: 'Trial Balance & BRS',
    nepWeightage: '4–6 Marks (Arithmetical Accuracy)',
    summary: 'Statement showing debit and credit balances of all ledger accounts to verify arithmetical accuracy and facilitate preparation of financial statements.',
    keyTopics: ['Objectives of Trial Balance', 'Balance Method vs Total Method', 'Errors Disclosed by Trial Balance', 'Errors NOT Disclosed (Omission, Commission, Principle, Compensating)', 'Suspense Account'],
    goldenRuleOrFormula: 'Total of Debit Balances = Total of Credit Balances | Suspense Account is opened to balance the Trial Balance temporarily.',
    practicalTip: 'An agreed trial balance is proof of arithmetical accuracy only, not conclusive proof of complete accounting accuracy.'
  },
  {
    number: 12,
    title: 'Depreciation',
    category: 'Trial Balance & BRS',
    nepWeightage: '6–8 Marks (SLM vs WDV Practical)',
    summary: 'Permanent and gradual reduction in the book value of fixed assets due to wear and tear, passage of time, or obsolescence.',
    keyTopics: ['Straight Line Method (SLM / Fixed Instalment)', 'Written Down Value Method (WDV / Reducing Balance)', 'Provision for Depreciation Account', 'Asset Disposal Account'],
    goldenRuleOrFormula: 'SLM Dep = (Cost of Asset - Estimated Scrap Value) / Useful Life | Under WDV, depreciation is calculated on opening written down value each year.',
    practicalTip: 'When Provision for Depreciation A/c is maintained, the Asset Account always appears at its original cost throughout its life.'
  },
  {
    number: 13,
    title: 'Provisions and Reserves',
    category: 'Trial Balance & BRS',
    nepWeightage: '3–4 Marks (Theory & Definitions)',
    summary: 'Understanding charge against profit (Provision) vs appropriation of profit (Reserve), General Reserve, Specific Reserve, Capital Reserve, and Secret Reserve.',
    keyTopics: ['Provision vs Reserve Difference', 'Revenue Reserves vs Capital Reserves', 'General Reserve vs Specific Reserve', 'Secret Reserve creation'],
    goldenRuleOrFormula: 'Provision is a charge against profit (created even if there is loss); Reserve is an appropriation of profit (created only when profit exists).',
    practicalTip: 'Provision for Doubtful Debts is created on Good Debtors (Total Debtors - Further Bad Debts).'
  },
  {
    number: 14,
    title: 'Bills of Exchange',
    category: 'Financial Statements',
    nepWeightage: '4–6 Marks (Commercial Instruments)',
    summary: 'Unconditional order in writing addressed by drawer to drawee to pay a certain sum of money, Promissory Notes, Endorsement, Discounting, and Dishonour.',
    keyTopics: ['Drawer, Drawee, Payee', 'Days of Grace & Maturity Date', 'Discounting with Bank', 'Endorsement & Collection', 'Dishonour & Noting Charges', 'Renewal & Retirement'],
    goldenRuleOrFormula: 'Maturity Date = Bill Term + 3 Days of Grace | Noting Charges are borne by Drawee (the defaulting party).',
    practicalTip: 'If maturity date falls on a gazetted public holiday, the due date will be the preceding business day.'
  },
  {
    number: 15,
    title: 'Rectification of Errors',
    category: 'Financial Statements',
    nepWeightage: '6–8 Marks (High Priority Core Skill)',
    summary: 'Identification and correction of errors in accounting records before Trial Balance, after Trial Balance with Suspense Account, and in subsequent periods.',
    keyTopics: ['One-sided Errors vs Two-sided Errors', 'Errors of Principle vs Clerical Errors', 'Suspense Account Rectification', 'Profit and Loss Adjustment Account'],
    goldenRuleOrFormula: 'To rectify: (1) Find What Was Done, (2) Find What Should Have Been Done, (3) Pass the Corrective Adjusting Entry.',
    practicalTip: 'Revenue expense debited to Asset account is an Error of Principle and does NOT affect the agreement of Trial Balance.'
  },
  {
    number: 16,
    title: 'Financial Statements of Sole Proprietorship (Without Adjustments)',
    category: 'Financial Statements',
    nepWeightage: '8–10 Marks (Master Financial Reporting)',
    summary: 'Preparation of Trading Account (Gross Profit/Loss), Profit and Loss Account (Net Profit/Loss), and Balance Sheet with marshalling order of liquidity and permanence.',
    keyTopics: ['Capital vs Revenue Expenditure/Receipts', 'Cost of Goods Sold (COGS)', 'Operating Profit vs Net Profit', 'Balance Sheet Marshalling (Liquidity & Permanence)'],
    goldenRuleOrFormula: 'COGS = Opening Stock + Net Purchases + Direct Expenses - Closing Stock | Gross Profit = Net Sales - COGS',
    practicalTip: 'Wages and Freight inward are direct expenses (Trading A/c); Salaries and Freight outward are indirect expenses (P&L A/c).'
  },
  {
    number: 17,
    title: 'Financial Statements with Adjustments',
    category: 'Financial Statements',
    nepWeightage: '10–12 Marks (Highest Weightage in Class 11)',
    summary: 'Comprehensive financial reporting incorporating 10 vital year-end adjustments with dual effects on Trading/P&L Account and Balance Sheet.',
    keyTopics: [
      'Closing Stock',
      'Outstanding & Prepaid Expenses',
      'Accrued & Unearned Income',
      'Depreciation & Interest on Capital',
      'Bad Debts & Provision for Doubtful Debts',
      'Provision for Discount on Debtors',
      'Manager\'s Commission (Before/After Charging)',
      'Abnormal Loss of Stock by Fire/Theft'
    ],
    goldenRuleOrFormula: 'Every adjustment item given outside Trial Balance must have TWO effects (Dual Aspect: 1 Debit + 1 Credit).',
    practicalTip: 'Provision for Doubtful Debts = (Sundry Debtors - Further Bad Debts) × Rate / 100.'
  },
  {
    number: 18,
    title: 'Accounts from Incomplete Records (Single Entry System)',
    category: 'Financial Statements',
    nepWeightage: '4–6 Marks (Single Entry Accounting)',
    summary: 'Ascertainment of profit or loss by small entities using Statement of Affairs method, opening/closing capital calculations, and conversion method.',
    keyTopics: ['Double Entry vs Single Entry', 'Statement of Affairs', 'Calculation of Profit/Loss', 'Adjusted Capital Calculation'],
    goldenRuleOrFormula: 'Profit = Closing Capital + Drawings - Additional Capital - Opening Capital',
    practicalTip: 'Statement of Affairs is prepared like a Balance Sheet to calculate the balancing figure as Capital on a particular date.'
  }
];

export const TsGrewalAccountingEquationView: React.FC<TsGrewalAccountingEquationViewProps> = ({ onBack }) => {
  const [activeMainTab, setActiveMainTab] = useState<'PDF_VAULT' | 'CASH_BOOK_Q5' | 'CHAPTERS' | 'EQUATION' | 'RULES' | 'FINAL_ACCOUNTS' | 'FLASHCARDS'>('PDF_VAULT');
  const [selectedPdfUrl, setSelectedPdfUrl] = useState<string | null>(null);
  const [selectedPdfTitle, setSelectedPdfTitle] = useState<string>('');
  const [pdfFilter, setPdfFilter] = useState<string>('ALL');
  const [pdfSearch, setPdfSearch] = useState<string>('');
  const [equationTab, setEquationTab] = useState<number | 'ALL'>('ALL');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [expandedChapter, setExpandedChapter] = useState<number | null>(8);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredChapters = TS_GREWAL_18_CHAPTERS.filter((ch) => {
    const matchesCat = selectedCategory === 'ALL' || ch.category === selectedCategory;
    const matchesSearch =
      ch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ch.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ch.keyTopics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      ch.goldenRuleOrFormula.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '1rem 0.5rem 3rem' }}>
      
      {/* Top Header Navigation Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onBack}
            className="btn btn-outline"
            style={{ padding: '8px 16px', borderRadius: '9999px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <ArrowLeft size={16} /> Back to Accounts
          </button>
          <div>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#3b82f6', fontWeight: 800 }}>
              Class 11 Accountancy • Sultan Chand & Sons Edition
            </span>
            <h1 style={{ fontSize: '1.35rem', fontWeight: 900, margin: '2px 0 0 0', color: 'var(--text-primary)' }}>
              T.S. Grewal's Double Entry Book Keeping
            </h1>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ background: '#10b981', color: '#000000', fontSize: '0.75rem', fontWeight: 900, padding: '4px 10px', borderRadius: '6px' }}>
            PAGE 10.44 SOLVED
          </span>
          <a
            href="https://commercemine.com/11th-accounting-equation-question-no-1-to-5-ts-grewal-solution-2025-2026/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8rem',
              color: '#3b82f6',
              textDecoration: 'none',
              padding: '6px 12px',
              borderRadius: '8px',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.2)'
            }}
          >
            <span>CommerceMine Solutions ↗</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* Hero Banner with Modern Double Entry Theme */}
      <div style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 40%, #2563eb 100%)',
        borderRadius: '18px',
        padding: '24px 20px',
        color: '#ffffff',
        marginBottom: '1.5rem',
        boxShadow: '0 8px 24px rgba(30, 58, 138, 0.25)',
        border: '1px solid rgba(255, 255, 255, 0.15)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Scale size={24} style={{ color: '#fbbf24' }} />
            </div>
            <div>
              <div style={{ fontWeight: 900, fontSize: '1.25rem', color: '#ffffff' }}>
                Class 11 Double Entry Book Keeping Hub
              </div>
              <div style={{ fontSize: '0.82rem', color: '#93c5fd', fontWeight: 700 }}>
                CBSE & Rationalized NEP Edition 2026–2027 • T.S. Grewal Financial Accounting
              </div>
            </div>
          </div>
          <span style={{ fontSize: '0.75rem', fontWeight: 900, background: '#fbbf24', color: '#000', padding: '4px 12px', borderRadius: '9999px' }}>
            TWO-COLUMN CASH BOOK Q5 SOLVED
          </span>
        </div>

        {/* Fundamental Accounting Formula Header Pill */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.25)',
          padding: '12px 16px',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '10px'
        }}>
          <div style={{ fontFamily: 'monospace', fontSize: '1.1rem', fontWeight: 900, color: '#fef08a' }}>
            Cash Balance: ₹ 1,350 | Bank Balance: ₹ 1,39,600
          </div>
          <div style={{ fontSize: '0.8rem', color: '#e0f2fe', fontWeight: 600 }}>
            Contra Entries [C] • Discount Allowed & Received • Bank Reconciled
          </div>
        </div>

        <p style={{ fontSize: '0.85rem', color: '#e2e8f0', margin: 0, lineHeight: 1.5 }}>
          Explore full detailed step-by-step solutions for <strong>Question 5: Two-Column Cash Book (Page 10.44)</strong>, complete 18 chapters curriculum roadmap, interactive Accounting Equation solvers, and Final Accounts adjustment formulas.
        </p>
      </div>

      {/* Main Feature Tabs */}
      <div style={{
        display: 'flex',
        gap: '8px',
        overflowX: 'auto',
        paddingBottom: '8px',
        marginBottom: '1.5rem',
        borderBottom: '1px solid var(--border-color)'
      }}>
        {[
          { id: 'PDF_VAULT', label: '📂 Chapter PDFs & Solutions (21 Files)', icon: FolderOpen },
          { id: 'CASH_BOOK_Q5', label: '📒 Two-Column Cash Book (Q5 Solved)', icon: Receipt },
          { id: 'CHAPTERS', label: '📚 18 Chapters Index', icon: BookOpen },
          { id: 'EQUATION', label: '⚖️ Accounting Equation (Q1–Q5)', icon: Calculator },
          { id: 'RULES', label: '📜 Golden Rules & GST', icon: Layers },
          { id: 'FINAL_ACCOUNTS', label: '📊 Final Accounts & Adjustments', icon: FileSpreadsheet },
          { id: 'FLASHCARDS', label: '💡 Quick Revision & FAQs', icon: Lightbulb }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeMainTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveMainTab(tab.id as any)}
              style={{
                padding: '10px 18px',
                borderRadius: '10px',
                fontWeight: 800,
                fontSize: '0.85rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                border: isActive ? '1px solid #3b82f6' : '1px solid var(--border-color)',
                background: isActive ? '#2563eb' : 'var(--bg-card)',
                color: isActive ? '#ffffff' : 'var(--text-primary)',
                transition: 'all 0.2s ease',
                boxShadow: isActive ? '0 4px 12px rgba(37, 99, 235, 0.25)' : 'none'
              }}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* TAB: CHAPTER PDFS & SOLUTIONS REPOSITORY (21 OFFICIAL FILES)              */}
      {/* ========================================================================= */}
      {activeMainTab === 'PDF_VAULT' && (
        <div>
          {/* Master Full Book Solutions Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(4, 170, 109, 0.15) 0%, rgba(37, 99, 235, 0.1) 100%)',
            border: '2px solid #04AA6D',
            borderRadius: '16px',
            padding: '20px',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px'
          }}>
            <div>
              <span style={{ background: '#04AA6D', color: '#ffffff', fontSize: '0.75rem', fontWeight: 900, padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                ⭐ Featured Master Manual
              </span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 900, margin: '6px 0 4px 0', color: 'var(--text-primary)' }}>
                T.S. Grewal Class 11 Complete Solutions Manual (2018–2026 Edition)
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0, maxWidth: '650px', lineHeight: 1.5 }}>
                Fully worked-out solutions, working notes, ledger balancing, and adjustment entries for all textbook chapters. File size: 4.82 MB.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  setSelectedPdfUrl('/pdf/Class 11/T S Grewal/Account-Class-11-Solutions-TS-Grewal-2018.pdf');
                  setSelectedPdfTitle('Complete Class 11 Solutions Manual (T.S. Grewal)');
                }}
                className="btn btn-primary"
                style={{ background: '#04AA6D', color: '#ffffff', padding: '8px 16px', borderRadius: '8px', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px', border: 'none', cursor: 'pointer' }}
              >
                <Eye size={15} /> Read Solutions Online
              </button>
              <a
                href="/pdf/Class 11/T S Grewal/Account-Class-11-Solutions-TS-Grewal-2018.pdf"
                download
                className="btn btn-outline"
                style={{ padding: '8px 16px', borderRadius: '8px', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}
              >
                <Download size={15} /> Download PDF (4.8 MB)
              </a>
              <a
                href="/ts-grewal-class11.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ padding: '8px 16px', borderRadius: '8px', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', borderColor: '#3b82f6', color: '#3b82f6' }}
              >
                <span>Standalone Page ↗</span>
              </a>
            </div>
          </div>

          {/* Search & Category Filter Toolbar */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '14px',
            marginBottom: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}>
            <div style={{ flex: 1, minWidth: '220px', position: 'relative' }}>
              <input
                type="text"
                placeholder="Search chapters, topics (e.g. BRS, Depreciation, Journal, Cash Book)..."
                value={pdfSearch}
                onChange={(e) => setPdfSearch(e.target.value)}
                style={{
                  width: '100%',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  padding: '8px 12px 8px 32px',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem',
                  outline: 'none'
                }}
              />
              <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
            </div>

            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['ALL', 'Foundation', 'Recording', 'BRS & Trial Balance', 'Final Accounts'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setPdfFilter(cat)}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    border: pdfFilter === cat ? '1px solid #3b82f6' : '1px solid var(--border-color)',
                    background: pdfFilter === cat ? '#3b82f6' : 'var(--bg-secondary)',
                    color: pdfFilter === cat ? '#ffffff' : 'var(--text-secondary)'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Chapter Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '14px',
            marginBottom: '2rem'
          }}>
            {TS_GREWAL_PDF_FILES.filter((item) => {
              const matchesCat = pdfFilter === 'ALL' || item.category === pdfFilter;
              const matchesSearch = item.title.toLowerCase().includes(pdfSearch.toLowerCase()) ||
                                    item.topics.toLowerCase().includes(pdfSearch.toLowerCase()) ||
                                    item.number.toLowerCase().includes(pdfSearch.toLowerCase());
              return matchesCat && matchesSearch;
            }).map((item) => {
              const fullPdfUrl = `/pdf/Class 11/T S Grewal/${encodeURIComponent(item.filename).replace(/%2F/g, '/')}`;
              return (
                <div
                  key={item.id}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '12px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3b82f6', background: 'rgba(59, 130, 246, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                        {item.number}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, fontFamily: 'monospace' }}>
                        {item.size}
                      </span>
                    </div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 800, margin: '0 0 6px 0', color: 'var(--text-primary)', lineHeight: 1.35 }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: '0 0 14px 0', lineHeight: 1.45 }}>
                      {item.topics}
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '8px', borderTop: '1px solid var(--border-color)', paddingTop: '10px' }}>
                    <button
                      onClick={() => {
                        setSelectedPdfUrl(fullPdfUrl);
                        setSelectedPdfTitle(item.title);
                      }}
                      style={{
                        flex: 1,
                        background: '#04AA6D',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '6px 10px',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '4px'
                      }}
                    >
                      <Eye size={13} /> Read PDF
                    </button>
                    <a
                      href={fullPdfUrl}
                      download
                      style={{
                        flex: 1,
                        background: 'var(--bg-secondary)',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '6px',
                        padding: '6px 10px',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        textAlign: 'center',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '4px'
                      }}
                    >
                      <Download size={13} /> Download
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Embedded PDF Viewer Modal inside Tab */}
          {selectedPdfUrl && (
            <div style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.85)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}>
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                width: '100%',
                maxWidth: '1050px',
                height: '88vh',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                boxShadow: '0 12px 40px rgba(0,0,0,0.8)'
              }}>
                <div style={{
                  padding: '12px 18px',
                  borderBottom: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'var(--bg-secondary)'
                }}>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                      {selectedPdfTitle}
                    </h3>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                      {selectedPdfUrl}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <a
                      href={selectedPdfUrl}
                      download
                      className="btn btn-outline"
                      style={{ padding: '6px 12px', fontSize: '0.75rem', borderRadius: '6px', textDecoration: 'none' }}
                    >
                      <Download size={13} /> Download
                    </a>
                    <a
                      href={selectedPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-blue"
                      style={{ padding: '6px 12px', fontSize: '0.75rem', borderRadius: '6px', textDecoration: 'none', background: '#3b82f6', color: '#fff' }}
                    >
                      <ExternalLink size={13} /> Open Tab
                    </a>
                    <button
                      onClick={() => setSelectedPdfUrl(null)}
                      style={{
                        background: 'rgba(239, 68, 68, 0.15)',
                        border: '1px solid #ef4444',
                        color: '#ef4444',
                        borderRadius: '6px',
                        padding: '6px 12px',
                        fontWeight: 800,
                        fontSize: '0.75rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <X size={14} /> Close
                    </button>
                  </div>
                </div>
                <div style={{ flex: 1, background: '#000000' }}>
                  <iframe
                    src={selectedPdfUrl}
                    title={selectedPdfTitle}
                    style={{ width: '100%', height: '100%', border: 'none' }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 0: TWO-COLUMN CASH BOOK (QUESTION 5 SOLVED) - PAGE 10.44 */}
      {/* ========================================================================= */}
      {activeMainTab === 'CASH_BOOK_Q5' && (
        <div>
          {/* Question 5 Card */}
          <div className="glass-card" style={{ padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)', background: 'var(--bg-card)', marginBottom: '1.5rem' }}>
            
            {/* Badge & Copy Action */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ background: '#2563eb', color: '#ffffff', fontWeight: 800, fontSize: '0.8rem', padding: '4px 10px', borderRadius: '6px' }}>
                  T.S. GREWAL 2026–2027 • CHAPTER 8
                </span>
                <span style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', fontWeight: 800, fontSize: '0.78rem', padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  Page 10.44 • Practical Problem #5
                </span>
              </div>
              <button
                onClick={() => handleCopy(
                  'Two-Column Cash Book (March 2026) Solution:\nTotal Debit Receipts = Cash ₹50,650 | Bank ₹1,98,000\nTotal Credit Payments = Cash ₹49,300 | Bank ₹58,400\nClosing Balances (31st March 2026):\nCash in Hand Balance c/d = ₹ 1,350\nCash at Bank Balance c/d = ₹ 1,39,600\nDiscount Allowed = ₹ 400 | Discount Received = ₹ 100',
                  'cashbook-q5'
                )}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', fontWeight: 700 }}
              >
                {copiedId === 'cashbook-q5' ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                {copiedId === 'cashbook-q5' ? 'Copied Solution' : 'Copy Solution'}
              </button>
            </div>

            {/* Problem Title & Heading */}
            <h2 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '8px', color: 'var(--text-primary)' }}>
              Two-Column Cash Book (Cash and Bank Columns)
            </h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.5 }}>
              <strong>5.</strong> Record the following transactions in Double Column Cash Book and balance the book on <strong>31st March, 2026</strong>:
            </p>

            {/* Given Question Transactions Table from Textbook */}
            <div style={{ background: 'var(--bg-hover)', borderRadius: '12px', padding: '16px', marginBottom: '20px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontWeight: 800, fontSize: '0.85rem', color: '#3b82f6', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                📋 Question Transactions (March 2026):
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.88rem', lineHeight: 1.6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px' }}>
                  <span><strong>March 1</strong> — Cash in Hand (₹ 12,750) & Cash at Bank (₹ 72,400)</span>
                  <span style={{ fontWeight: 700 }}>₹ 12,750 / ₹ 72,400</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px' }}>
                  <span><strong>March 4</strong> — Received from Asha cash ₹ 1,200 and a cheque for ₹ 3,200, allowed discount ₹ 400</span>
                  <span style={{ fontWeight: 700 }}>₹ 1,200 (Cash) + ₹ 3,200 (Bank)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px' }}>
                  <span><strong>March 5</strong> — Sold personal car for ₹ 1,00,000 and deposited in firm's Bank Account</span>
                  <span style={{ fontWeight: 700 }}>₹ 1,00,000 (Bank)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px' }}>
                  <span><strong>March 7</strong> — Paid salary to staff by cheque</span>
                  <span style={{ fontWeight: 700 }}>₹ 25,600 (Bank)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px' }}>
                  <span><strong>March 9</strong> — Withdrawn cash from bank for office use <em>(Contra Entry [C])</em></span>
                  <span style={{ fontWeight: 700 }}>₹ 21,900</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px' }}>
                  <span><strong>March 12</strong> — Interest paid by bank on bank balance</span>
                  <span style={{ fontWeight: 700 }}>₹ 1,200 (Bank)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px' }}>
                  <span><strong>March 16</strong> — Purchased furniture in cash</span>
                  <span style={{ fontWeight: 700 }}>₹ 16,500 (Cash)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px' }}>
                  <span><strong>March 21</strong> — Paid to Mohan & Co. by cheque ₹ 10,900, discount received ₹ 100</span>
                  <span style={{ fontWeight: 700 }}>₹ 10,900 (Bank)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px' }}>
                  <span><strong>March 24</strong> — Proprietor withdrew from office cash for his personal use <em>(Drawings)</em></span>
                  <span style={{ fontWeight: 700 }}>₹ 11,600 (Cash)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px' }}>
                  <span><strong>March 29</strong> — Sold goods to Manoj for cash</span>
                  <span style={{ fontWeight: 700 }}>₹ 14,800 (Cash)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span><strong>March 31</strong> — Deposited cash in bank <em>(Contra Entry [C])</em></span>
                  <span style={{ fontWeight: 700 }}>₹ 21,200</span>
                </div>
              </div>
            </div>

            {/* Official Answer Box from Textbook */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(5, 150, 105, 0.2) 100%)',
              border: '1.5px solid rgba(16, 185, 129, 0.4)',
              borderRadius: '12px',
              padding: '14px 18px',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#10b981', textTransform: 'uppercase' }}>
                  ✓ Official Textbook Answer (T.S. Grewal Page 10.44)
                </div>
                <div style={{ fontWeight: 900, fontSize: '1.1rem', color: 'var(--text-primary)', marginTop: '2px' }}>
                  [Ans.: Cash Balance — ₹ 1,350; Bank Balance — ₹ 1,39,600.]
                </div>
              </div>
              <span style={{ background: '#10b981', color: '#ffffff', fontWeight: 900, fontSize: '0.75rem', padding: '4px 12px', borderRadius: '9999px' }}>
                100% VERIFIED
              </span>
            </div>

            {/* MASTER TWO-COLUMN CASH BOOK LEDGER TABLE */}
            <h3 style={{ fontSize: '1.08rem', fontWeight: 800, marginBottom: '10px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileText size={18} style={{ color: '#3b82f6' }} /> Double Column Cash Book of the Firm (For March 2026)
            </h3>

            <div style={{ overflowX: 'auto', marginBottom: '20px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <table style={{ width: '100%', minWidth: '850px', borderCollapse: 'collapse', fontSize: '0.83rem', textAlign: 'center' }}>
                <thead>
                  {/* Top Super Headers: Dr. (Receipts) vs Cr. (Payments) */}
                  <tr style={{ background: 'rgba(59, 130, 246, 0.2)', borderBottom: '1px solid rgba(59, 130, 246, 0.3)' }}>
                    <th colSpan={6} style={{ padding: '8px', color: '#2563eb', fontWeight: 900, fontSize: '0.9rem', borderRight: '2px solid var(--border-color)' }}>
                      Dr. (Receipts Side)
                    </th>
                    <th colSpan={6} style={{ padding: '8px', color: '#ef4444', fontWeight: 900, fontSize: '0.9rem' }}>
                      Cr. (Payments Side)
                    </th>
                  </tr>
                  <tr style={{ background: 'var(--bg-hover)', borderBottom: '2px solid var(--border-color)', fontWeight: 800 }}>
                    <th style={{ padding: '10px 6px', width: '65px' }}>Date</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left' }}>Particulars</th>
                    <th style={{ padding: '10px 4px', width: '35px' }}>L.F.</th>
                    <th style={{ padding: '10px 6px', width: '70px', color: '#d97706' }}>Discount (₹)</th>
                    <th style={{ padding: '10px 8px', width: '85px', color: '#10b981' }}>Cash (₹)</th>
                    <th style={{ padding: '10px 8px', width: '95px', color: '#3b82f6', borderRight: '2px solid var(--border-color)' }}>Bank (₹)</th>
                    
                    <th style={{ padding: '10px 6px', width: '65px' }}>Date</th>
                    <th style={{ padding: '10px 8px', textAlign: 'left' }}>Particulars</th>
                    <th style={{ padding: '10px 4px', width: '35px' }}>L.F.</th>
                    <th style={{ padding: '10px 6px', width: '70px', color: '#d97706' }}>Discount (₹)</th>
                    <th style={{ padding: '10px 8px', width: '85px', color: '#10b981' }}>Cash (₹)</th>
                    <th style={{ padding: '10px 8px', width: '95px', color: '#3b82f6' }}>Bank (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1: March 1 Opening Balances */}
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td>2026<br />Mar 1</td>
                    <td style={{ textAlign: 'left', fontWeight: 700 }}>To Balance b/d</td>
                    <td>-</td>
                    <td>-</td>
                    <td style={{ fontWeight: 800, color: '#10b981' }}>12,750</td>
                    <td style={{ fontWeight: 800, color: '#3b82f6', borderRight: '2px solid var(--border-color)' }}>72,400</td>
                    
                    <td>2026<br />Mar 7</td>
                    <td style={{ textAlign: 'left', fontWeight: 700 }}>By Salaries A/c</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td style={{ fontWeight: 800, color: '#ef4444' }}>25,600</td>
                  </tr>

                  {/* Row 2: March 4 & March 9 */}
                  <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-hover)' }}>
                    <td>Mar 4</td>
                    <td style={{ textAlign: 'left', fontWeight: 700 }}>To Asha (Cash & Cheque)</td>
                    <td>-</td>
                    <td style={{ color: '#d97706', fontWeight: 700 }}>400</td>
                    <td style={{ fontWeight: 800, color: '#10b981' }}>1,200</td>
                    <td style={{ fontWeight: 800, color: '#3b82f6', borderRight: '2px solid var(--border-color)' }}>3,200</td>
                    
                    <td>Mar 9</td>
                    <td style={{ textAlign: 'left', fontWeight: 700 }}>By Cash A/c <span style={{ background: '#9333ea', color: '#ffffff', padding: '1px 5px', borderRadius: '4px', fontSize: '0.7rem' }}>C</span></td>
                    <td style={{ fontWeight: 800, color: '#9333ea' }}>C</td>
                    <td>-</td>
                    <td>-</td>
                    <td style={{ fontWeight: 800, color: '#ef4444' }}>21,900</td>
                  </tr>

                  {/* Row 3: March 5 & March 16 */}
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td>Mar 5</td>
                    <td style={{ textAlign: 'left', fontWeight: 700 }}>To Capital A/c (Personal car)</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td style={{ fontWeight: 800, color: '#3b82f6', borderRight: '2px solid var(--border-color)' }}>1,00,000</td>
                    
                    <td>Mar 16</td>
                    <td style={{ textAlign: 'left', fontWeight: 700 }}>By Furniture A/c</td>
                    <td>-</td>
                    <td>-</td>
                    <td style={{ fontWeight: 800, color: '#ef4444' }}>16,500</td>
                    <td>-</td>
                  </tr>

                  {/* Row 4: March 9 & March 21 */}
                  <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-hover)' }}>
                    <td>Mar 9</td>
                    <td style={{ textAlign: 'left', fontWeight: 700 }}>To Bank A/c <span style={{ background: '#9333ea', color: '#ffffff', padding: '1px 5px', borderRadius: '4px', fontSize: '0.7rem' }}>C</span></td>
                    <td style={{ fontWeight: 800, color: '#9333ea' }}>C</td>
                    <td>-</td>
                    <td style={{ fontWeight: 800, color: '#10b981' }}>21,900</td>
                    <td style={{ borderRight: '2px solid var(--border-color)' }}>-</td>
                    
                    <td>Mar 21</td>
                    <td style={{ textAlign: 'left', fontWeight: 700 }}>By Mohan & Co. (Cheque)</td>
                    <td>-</td>
                    <td style={{ color: '#d97706', fontWeight: 700 }}>100</td>
                    <td>-</td>
                    <td style={{ fontWeight: 800, color: '#ef4444' }}>10,900</td>
                  </tr>

                  {/* Row 5: March 12 & March 24 */}
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td>Mar 12</td>
                    <td style={{ textAlign: 'left', fontWeight: 700 }}>To Interest A/c (Bank interest)</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td style={{ fontWeight: 800, color: '#3b82f6', borderRight: '2px solid var(--border-color)' }}>1,200</td>
                    
                    <td>Mar 24</td>
                    <td style={{ textAlign: 'left', fontWeight: 700 }}>By Drawings A/c (Personal)</td>
                    <td>-</td>
                    <td>-</td>
                    <td style={{ fontWeight: 800, color: '#ef4444' }}>11,600</td>
                    <td>-</td>
                  </tr>

                  {/* Row 6: March 29 & March 31 */}
                  <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-hover)' }}>
                    <td>Mar 29</td>
                    <td style={{ textAlign: 'left', fontWeight: 700 }}>To Sales A/c (Cash sales)</td>
                    <td>-</td>
                    <td>-</td>
                    <td style={{ fontWeight: 800, color: '#10b981' }}>14,800</td>
                    <td style={{ borderRight: '2px solid var(--border-color)' }}>-</td>
                    
                    <td>Mar 31</td>
                    <td style={{ textAlign: 'left', fontWeight: 700 }}>By Bank A/c <span style={{ background: '#9333ea', color: '#ffffff', padding: '1px 5px', borderRadius: '4px', fontSize: '0.7rem' }}>C</span></td>
                    <td style={{ fontWeight: 800, color: '#9333ea' }}>C</td>
                    <td>-</td>
                    <td style={{ fontWeight: 800, color: '#ef4444' }}>21,200</td>
                    <td>-</td>
                  </tr>

                  {/* Row 7: March 31 Contra & Balance c/d */}
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td>Mar 31</td>
                    <td style={{ textAlign: 'left', fontWeight: 700 }}>To Cash A/c <span style={{ background: '#9333ea', color: '#ffffff', padding: '1px 5px', borderRadius: '4px', fontSize: '0.7rem' }}>C</span></td>
                    <td style={{ fontWeight: 800, color: '#9333ea' }}>C</td>
                    <td>-</td>
                    <td>-</td>
                    <td style={{ fontWeight: 800, color: '#3b82f6', borderRight: '2px solid var(--border-color)' }}>21,200</td>
                    
                    <td>Mar 31</td>
                    <td style={{ textAlign: 'left', fontWeight: 900, color: '#10b981' }}>By Balance c/d (Closing)</td>
                    <td>-</td>
                    <td>-</td>
                    <td style={{ fontWeight: 900, color: '#10b981', background: 'rgba(16, 185, 129, 0.15)' }}>1,350</td>
                    <td style={{ fontWeight: 900, color: '#10b981', background: 'rgba(16, 185, 129, 0.15)' }}>1,39,600</td>
                  </tr>

                  {/* Grand Totals Row */}
                  <tr style={{ background: 'rgba(59, 130, 246, 0.12)', fontWeight: 900, borderTop: '2px solid #3b82f6' }}>
                    <td></td>
                    <td style={{ textAlign: 'left', fontWeight: 900, color: '#2563eb' }}>TOTALS</td>
                    <td></td>
                    <td style={{ color: '#d97706', fontWeight: 900 }}>400</td>
                    <td style={{ color: '#10b981', fontWeight: 900, fontSize: '0.9rem' }}>50,650</td>
                    <td style={{ color: '#3b82f6', fontWeight: 900, fontSize: '0.9rem', borderRight: '2px solid var(--border-color)' }}>1,98,000</td>
                    
                    <td></td>
                    <td style={{ textAlign: 'left', fontWeight: 900, color: '#2563eb' }}>TOTALS</td>
                    <td></td>
                    <td style={{ color: '#d97706', fontWeight: 900 }}>100</td>
                    <td style={{ color: '#10b981', fontWeight: 900, fontSize: '0.9rem' }}>50,650</td>
                    <td style={{ color: '#3b82f6', fontWeight: 900, fontSize: '0.9rem' }}>1,98,000</td>
                  </tr>

                  {/* April 1 Opening Balance b/d Row */}
                  <tr style={{ background: 'rgba(16, 185, 129, 0.08)', fontWeight: 800 }}>
                    <td>Apr 1</td>
                    <td style={{ textAlign: 'left', color: '#10b981' }}>To Balance b/d (Opening)</td>
                    <td></td>
                    <td>-</td>
                    <td style={{ fontWeight: 900, color: '#10b981' }}>1,350</td>
                    <td style={{ fontWeight: 900, color: '#3b82f6', borderRight: '2px solid var(--border-color)' }}>1,39,600</td>
                    
                    <td colSpan={6}></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* DETAILED TRANSACTION-BY-TRANSACTION MATHEMATICAL EXPLANATIONS */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', marginBottom: '20px' }}>
              
              {/* Cash Column Balancing Card */}
              <div style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                <div style={{ fontWeight: 900, fontSize: '0.95rem', color: '#10b981', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calculator size={18} /> Cash Column Balancing Step:
                </div>
                <div style={{ fontSize: '0.84rem', lineHeight: 1.6 }}>
                  <div><strong>1. Total Receipts (Debit Cash):</strong></div>
                  <div style={{ fontFamily: 'monospace', color: '#10b981', fontWeight: 700 }}>
                    ₹12,750 (Opening) + ₹1,200 (Asha) + ₹21,900 (Bank Withdrawn [C]) + ₹14,800 (Sales) = <strong>₹ 50,650</strong>
                  </div>
                  <div style={{ marginTop: '6px' }}><strong>2. Total Payments (Credit Cash):</strong></div>
                  <div style={{ fontFamily: 'monospace', color: '#ef4444', fontWeight: 700 }}>
                    ₹16,500 (Furniture) + ₹11,600 (Drawings) + ₹21,200 (Bank Deposit [C]) = <strong>₹ 49,300</strong>
                  </div>
                  <div style={{ marginTop: '8px', padding: '6px 10px', background: 'rgba(16, 185, 129, 0.15)', borderRadius: '6px' }}>
                    <strong>Closing Cash Balance c/d</strong> = ₹ 50,650 - ₹ 49,300 = <span style={{ color: '#10b981', fontWeight: 900 }}>₹ 1,350</span>
                  </div>
                </div>
              </div>

              {/* Bank Column Balancing Card */}
              <div style={{ background: 'rgba(59, 130, 246, 0.08)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                <div style={{ fontWeight: 900, fontSize: '0.95rem', color: '#3b82f6', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calculator size={18} /> Bank Column Balancing Step:
                </div>
                <div style={{ fontSize: '0.84rem', lineHeight: 1.6 }}>
                  <div><strong>1. Total Receipts (Debit Bank):</strong></div>
                  <div style={{ fontFamily: 'monospace', color: '#3b82f6', fontWeight: 700 }}>
                    ₹72,400 (Opening) + ₹3,200 (Asha cheque) + ₹1,00,000 (Capital/Car) + ₹1,200 (Interest) + ₹21,200 (Cash Deposit [C]) = <strong>₹ 1,98,000</strong>
                  </div>
                  <div style={{ marginTop: '6px' }}><strong>2. Total Payments (Credit Bank):</strong></div>
                  <div style={{ fontFamily: 'monospace', color: '#ef4444', fontWeight: 700 }}>
                    ₹25,600 (Salaries) + ₹21,900 (Office Cash Withdrawn [C]) + ₹10,900 (Mohan & Co.) = <strong>₹ 58,400</strong>
                  </div>
                  <div style={{ marginTop: '8px', padding: '6px 10px', background: 'rgba(59, 130, 246, 0.15)', borderRadius: '6px' }}>
                    <strong>Closing Bank Balance c/d</strong> = ₹ 1,98,000 - ₹ 58,400 = <span style={{ color: '#3b82f6', fontWeight: 900 }}>₹ 1,39,600</span>
                  </div>
                </div>
              </div>

            </div>

            {/* SPECIAL ACCOUNTING NOTES FOR EXAMS */}
            <div style={{ background: 'var(--bg-hover)', borderRadius: '12px', padding: '16px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontWeight: 800, fontSize: '0.88rem', color: '#d97706', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Award size={18} /> Crucial Accounting Points & Notes to Accounts:
              </div>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.84rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                <li>
                  <strong>Contra Entries [C] on March 9 & March 31:</strong> When cash is withdrawn from bank for office use (March 9) or cash is deposited into bank (March 31), both Cash and Bank accounts are affected simultaneously in the Cash Book, so letter <strong>[C]</strong> is entered in the Ledger Folio (L.F.) column. No separate ledger posting is required.
                </li>
                <li>
                  <strong>March 4 Cheque Received from Asha:</strong> Since no subsequent date of depositing Asha's cheque is given in the problem, it is assumed as deposited into the bank on the same date (March 4) in accordance with standard CBSE accounting convention.
                </li>
                <li>
                  <strong>March 5 Sale of Personal Car:</strong> The car belonged to the proprietor privately. Depositing the sale proceeds into the firm's bank account constitutes an introduction of additional capital by the owner (`To Capital A/c` in Bank column: ₹1,00,000).
                </li>
                <li>
                  <strong>Discount Columns Totaling:</strong> Discount Allowed column (₹400) and Discount Received column (₹100) are simply totaled and NOT balanced. They are posted to Discount Allowed A/c (Dr.) and Discount Received A/c (Cr.) in the General Ledger.
                </li>
              </ul>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 1: ALL 18 CHAPTERS INDEX */}
      {/* ========================================================================= */}
      {activeMainTab === 'CHAPTERS' && (
        <div>
          {/* Search & Category Filter Bar */}
          <div style={{
            background: 'var(--bg-card)',
            padding: '16px',
            borderRadius: '14px',
            border: '1px solid var(--border-color)',
            marginBottom: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--bg-hover)', padding: '8px 14px', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
              <Search size={18} style={{ color: 'var(--text-muted)' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 18 Chapters by name, topic, or formula (e.g. Depreciation, BRS, Journal, Final Accounts)..."
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: 'var(--text-primary)',
                  fontSize: '0.88rem',
                  width: '100%',
                  fontWeight: 600
                }}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 800 }}>
                  Clear
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto' }}>
              {['ALL', 'Foundation', 'Recording & Ledger', 'Trial Balance & BRS', 'Financial Statements'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    border: selectedCategory === cat ? '1px solid #3b82f6' : '1px solid var(--border-color)',
                    background: selectedCategory === cat ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
                    color: selectedCategory === cat ? '#3b82f6' : 'var(--text-muted)'
                  }}
                >
                  {cat === 'ALL' ? 'All (18 Chapters)' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Chapters List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filteredChapters.map((ch) => {
              const isExpanded = expandedChapter === ch.number;
              return (
                <div
                  key={ch.number}
                  className="glass-card"
                  style={{
                    borderRadius: '14px',
                    border: isExpanded ? '1.5px solid #3b82f6' : '1px solid var(--border-color)',
                    background: 'var(--bg-card)',
                    overflow: 'hidden',
                    boxShadow: isExpanded ? '0 6px 18px rgba(59, 130, 246, 0.12)' : 'var(--shadow-card)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {/* Header Row */}
                  <div
                    onClick={() => setExpandedChapter(isExpanded ? null : ch.number)}
                    style={{
                      padding: '16px 20px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      background: isExpanded ? 'rgba(59, 130, 246, 0.05)' : 'transparent'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1 }}>
                      <div style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: isExpanded ? '#2563eb' : 'rgba(59, 130, 246, 0.12)',
                        color: isExpanded ? '#ffffff' : '#3b82f6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 900,
                        fontSize: '0.95rem',
                        flexShrink: 0
                      }}>
                        {ch.number}
                      </div>
                      <div>
                        <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          {ch.category} • {ch.nepWeightage}
                        </div>
                        <div style={{ fontWeight: 800, fontSize: '1.02rem', color: 'var(--text-primary)', margin: '2px 0 0' }}>
                          Chapter {ch.number}: {ch.title}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {ch.number === 8 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveMainTab('CASH_BOOK_Q5');
                          }}
                          style={{
                            background: '#10b981',
                            color: '#ffffff',
                            border: 'none',
                            padding: '6px 12px',
                            borderRadius: '8px',
                            fontSize: '0.75rem',
                            fontWeight: 800,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <Receipt size={13} />
                          <span>Q5 Solved</span>
                        </button>
                      )}
                      {ch.number === 3 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveMainTab('EQUATION');
                          }}
                          style={{
                            background: '#2563eb',
                            color: '#ffffff',
                            border: 'none',
                            padding: '6px 12px',
                            borderRadius: '8px',
                            fontSize: '0.75rem',
                            fontWeight: 800,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <Calculator size={13} />
                          <span>Q1–Q5 Solutions</span>
                        </button>
                      )}
                      {isExpanded ? <ChevronUp size={20} color="#3b82f6" /> : <ChevronDown size={20} color="var(--text-muted)" />}
                    </div>
                  </div>

                  {/* Expanded Breakdown */}
                  {isExpanded && (
                    <div style={{ padding: '0 20px 20px 20px', borderTop: '1px solid var(--border-color)', background: 'var(--bg-card)' }}>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: '14px 0 12px', lineHeight: 1.6 }}>
                        {ch.summary}
                      </p>

                      {/* Golden Rule / Formula Box */}
                      <div style={{
                        background: 'rgba(59, 130, 246, 0.08)',
                        border: '1px solid rgba(59, 130, 246, 0.25)',
                        borderRadius: '10px',
                        padding: '12px 16px',
                        marginBottom: '12px'
                      }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#2563eb', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Sparkles size={14} /> Golden Principle / Key Formula
                        </div>
                        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'monospace' }}>
                          {ch.goldenRuleOrFormula}
                        </div>
                      </div>

                      {/* Key Topics Badges */}
                      <div style={{ marginBottom: '12px' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '6px' }}>
                          CORE TOPICS COVERED:
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {ch.keyTopics.map((topic, i) => (
                            <span
                              key={i}
                              style={{
                                background: 'var(--bg-hover)',
                                border: '1px solid var(--border-color)',
                                padding: '4px 10px',
                                borderRadius: '6px',
                                fontSize: '0.78rem',
                                fontWeight: 600,
                                color: 'var(--text-primary)'
                              }}
                            >
                              ✓ {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Exam Tip */}
                      <div style={{
                        background: 'rgba(16, 185, 129, 0.08)',
                        border: '1px solid rgba(16, 185, 129, 0.25)',
                        borderRadius: '10px',
                        padding: '10px 14px',
                        fontSize: '0.82rem',
                        color: '#10b981',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <Award size={16} style={{ flexShrink: 0 }} />
                        <span><strong>Exam Key Tip:</strong> {ch.practicalTip}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: ACCOUNTING EQUATION SOLVER (QUESTIONS 1 TO 5) */}
      {/* ========================================================================= */}
      {activeMainTab === 'EQUATION' && (
        <div>
          {/* Question Sub-tabs */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px', marginBottom: '1.5rem' }}>
            {(['ALL', 1, 2, 3, 4, 5] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setEquationTab(tab)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  border: equationTab === tab ? '1px solid #3b82f6' : '1px solid var(--border-color)',
                  background: equationTab === tab ? '#2563eb' : 'var(--bg-card)',
                  color: equationTab === tab ? '#ffffff' : 'var(--text-primary)',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab === 'ALL' ? '🌟 All Questions (1–5)' : `Question ${tab}`}
              </button>
            ))}
          </div>

          {/* QUESTION 1 */}
          {(equationTab === 'ALL' || equationTab === 1) && (
            <div className="glass-card" style={{ padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)', background: 'var(--bg-card)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ background: '#3b82f6', color: '#ffffff', fontWeight: 800, fontSize: '0.8rem', padding: '4px 10px', borderRadius: '6px' }}>
                  T.S. Grewal 2026-27 • Question 1
                </span>
                <button
                  onClick={() => handleCopy('Started business with cash ₹45,000; Opened Bank Account deposit ₹4,500; Bought goods from M/s Sun & Co. ₹11,200.\nTotal Assets = ₹56,200 | Liabilities = ₹11,200 | Capital = ₹45,000', 'q1')}
                  style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem' }}
                >
                  {copiedId === 'q1' ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                  {copiedId === 'q1' ? 'Copied' : 'Copy'}
                </button>
              </div>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '12px', color: 'var(--text-primary)' }}>
                What will be the effect of the following on the Accounting Equation?
              </h3>

              <div style={{ background: 'var(--bg-hover)', padding: '12px 16px', borderRadius: '10px', fontSize: '0.9rem', marginBottom: '16px', lineHeight: 1.6 }}>
                <div><strong>(i)</strong> Started business with cash <strong>₹45,000</strong></div>
                <div><strong>(ii)</strong> Opened a Bank Account with a deposit of <strong>₹4,500</strong></div>
                <div><strong>(iii)</strong> Bought goods from M/s. Sun & Co. for <strong>₹11,200</strong></div>
              </div>

              {/* Table Solution */}
              <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'center' }}>
                  <thead>
                    <tr style={{ background: 'rgba(59, 130, 246, 0.15)', borderBottom: '2px solid rgba(59, 130, 246, 0.3)' }}>
                      <th style={{ padding: '10px 8px', textAlign: 'left' }}>S.No</th>
                      <th style={{ padding: '10px 8px', textAlign: 'left' }}>Transactions</th>
                      <th style={{ padding: '10px 8px' }}>Cash (₹)</th>
                      <th style={{ padding: '10px 8px' }}>+</th>
                      <th style={{ padding: '10px 8px' }}>Bank (₹)</th>
                      <th style={{ padding: '10px 8px' }}>+</th>
                      <th style={{ padding: '10px 8px' }}>Stock (₹)</th>
                      <th style={{ padding: '10px 8px' }}>=</th>
                      <th style={{ padding: '10px 8px' }}>Creditors (₹)</th>
                      <th style={{ padding: '10px 8px' }}>+</th>
                      <th style={{ padding: '10px 8px' }}>Capital (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>(i)</td>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>Started business with cash</td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+45,000</td>
                      <td></td>
                      <td>-</td>
                      <td></td>
                      <td>-</td>
                      <td>=</td>
                      <td>-</td>
                      <td></td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+45,000</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-hover)' }}>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>(ii)</td>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>Opened a Bank Account with deposit</td>
                      <td style={{ padding: '10px 8px', color: '#ef4444', fontWeight: 700 }}>-4,500</td>
                      <td></td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+4,500</td>
                      <td></td>
                      <td>-</td>
                      <td>=</td>
                      <td>-</td>
                      <td></td>
                      <td>-</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', fontWeight: 700 }}>
                      <td colSpan={2} style={{ padding: '8px', textAlign: 'left', color: '#3b82f6' }}>New Equation</td>
                      <td>40,500</td>
                      <td>+</td>
                      <td>4,500</td>
                      <td></td>
                      <td>-</td>
                      <td>=</td>
                      <td>-</td>
                      <td>+</td>
                      <td>45,000</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-hover)' }}>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>(iii)</td>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>Bought goods from M/s. Sun & Co.</td>
                      <td>-</td>
                      <td></td>
                      <td>-</td>
                      <td></td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+11,200</td>
                      <td>=</td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+11,200</td>
                      <td></td>
                      <td>-</td>
                    </tr>
                    <tr style={{ background: 'rgba(16, 185, 129, 0.1)', fontWeight: 800, borderTop: '2px solid #10b981' }}>
                      <td colSpan={2} style={{ padding: '10px 8px', textAlign: 'left', color: '#10b981' }}>Final Equation</td>
                      <td>40,500</td>
                      <td>+</td>
                      <td>4,500</td>
                      <td>+</td>
                      <td>11,200</td>
                      <td>=</td>
                      <td>11,200</td>
                      <td>+</td>
                      <td>45,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Verification Box */}
              <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', padding: '14px 18px', fontSize: '0.88rem' }}>
                <div style={{ fontWeight: 800, color: '#10b981', marginBottom: '6px' }}>
                  ✓ Final Verification & Balance:
                </div>
                <div><strong>Total Assets</strong> = Cash (₹40,500) + Bank (₹4,500) + Stock (₹11,200) = <strong>₹56,200</strong></div>
                <div><strong>Total Liabilities + Capital</strong> = Creditors (₹11,200) + Capital (₹45,000) = <strong>₹56,200</strong></div>
              </div>
            </div>
          )}

          {/* QUESTION 2 */}
          {(equationTab === 'ALL' || equationTab === 2) && (
            <div className="glass-card" style={{ padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)', background: 'var(--bg-card)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ background: '#3b82f6', color: '#ffffff', fontWeight: 800, fontSize: '0.8rem', padding: '4px 10px', borderRadius: '6px' }}>
                  T.S. Grewal 2026-27 • Question 2
                </span>
                <button
                  onClick={() => handleCopy('Gopinath started business with cash ₹25,000; Purchased goods from Shyam ₹10,000; Sold goods to Sohan costing ₹1,800 for ₹1,500; Gopinath withdrew ₹5,000.\nTotal Assets = ₹29,700 | Liabilities = ₹10,000 | Capital = ₹19,700', 'q2')}
                  style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem' }}
                >
                  {copiedId === 'q2' ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                  {copiedId === 'q2' ? 'Copied' : 'Copy'}
                </button>
              </div>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '12px', color: 'var(--text-primary)' }}>
                Show the Accounting Equation for the following transactions:
              </h3>

              <div style={{ background: 'var(--bg-hover)', padding: '12px 16px', borderRadius: '10px', fontSize: '0.9rem', marginBottom: '16px', lineHeight: 1.6 }}>
                <div><strong>(i)</strong> Gopinath started business with cash <strong>₹25,000</strong></div>
                <div><strong>(ii)</strong> Purchased goods from Shyam <strong>₹10,000</strong></div>
                <div><strong>(iii)</strong> Sold goods to Sohan costing <strong>₹1,800</strong> for <strong>₹1,500</strong></div>
                <div><strong>(iv)</strong> Gopinath withdrew from business <strong>₹5,000</strong></div>
              </div>

              {/* Table Solution */}
              <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'center' }}>
                  <thead>
                    <tr style={{ background: 'rgba(59, 130, 246, 0.15)', borderBottom: '2px solid rgba(59, 130, 246, 0.3)' }}>
                      <th style={{ padding: '10px 8px', textAlign: 'left' }}>S.No</th>
                      <th style={{ padding: '10px 8px', textAlign: 'left' }}>Transactions</th>
                      <th style={{ padding: '10px 8px' }}>Cash (₹)</th>
                      <th style={{ padding: '10px 8px' }}>+</th>
                      <th style={{ padding: '10px 8px' }}>Stock (₹)</th>
                      <th style={{ padding: '10px 8px' }}>+</th>
                      <th style={{ padding: '10px 8px' }}>Debtors (₹)</th>
                      <th style={{ padding: '10px 8px' }}>=</th>
                      <th style={{ padding: '10px 8px' }}>Creditors (₹)</th>
                      <th style={{ padding: '10px 8px' }}>+</th>
                      <th style={{ padding: '10px 8px' }}>Capital (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>(i)</td>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>Gopinath started business</td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+25,000</td>
                      <td></td>
                      <td>-</td>
                      <td></td>
                      <td>-</td>
                      <td>=</td>
                      <td>-</td>
                      <td></td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+25,000</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-hover)' }}>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>(ii)</td>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>Purchased goods from Shyam</td>
                      <td>-</td>
                      <td></td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+10,000</td>
                      <td></td>
                      <td>-</td>
                      <td>=</td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+10,000</td>
                      <td></td>
                      <td>-</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', fontWeight: 700 }}>
                      <td colSpan={2} style={{ padding: '8px', textAlign: 'left', color: '#3b82f6' }}>New Equation</td>
                      <td>25,000</td>
                      <td>+</td>
                      <td>10,000</td>
                      <td>+</td>
                      <td>-</td>
                      <td>=</td>
                      <td>10,000</td>
                      <td>+</td>
                      <td>25,000</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-hover)' }}>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>(iii)</td>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>Sold goods to Sohan at loss (₹300)</td>
                      <td>-</td>
                      <td></td>
                      <td style={{ padding: '10px 8px', color: '#ef4444', fontWeight: 700 }}>-1,800</td>
                      <td>+</td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+1,500</td>
                      <td>=</td>
                      <td>-</td>
                      <td>+</td>
                      <td style={{ padding: '10px 8px', color: '#ef4444', fontWeight: 700 }}>-300</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', fontWeight: 700 }}>
                      <td colSpan={2} style={{ padding: '8px', textAlign: 'left', color: '#3b82f6' }}>New Equation</td>
                      <td>25,000</td>
                      <td>+</td>
                      <td>8,200</td>
                      <td>+</td>
                      <td>1,500</td>
                      <td>=</td>
                      <td>10,000</td>
                      <td>+</td>
                      <td>24,700</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-hover)' }}>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>(iv)</td>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>Gopinath withdrew cash</td>
                      <td style={{ padding: '10px 8px', color: '#ef4444', fontWeight: 700 }}>-5,000</td>
                      <td></td>
                      <td>-</td>
                      <td></td>
                      <td>-</td>
                      <td>=</td>
                      <td>-</td>
                      <td>+</td>
                      <td style={{ padding: '10px 8px', color: '#ef4444', fontWeight: 700 }}>-5,000</td>
                    </tr>
                    <tr style={{ background: 'rgba(16, 185, 129, 0.1)', fontWeight: 800, borderTop: '2px solid #10b981' }}>
                      <td colSpan={2} style={{ padding: '10px 8px', textAlign: 'left', color: '#10b981' }}>Final Equation</td>
                      <td>20,000</td>
                      <td>+</td>
                      <td>8,200</td>
                      <td>+</td>
                      <td>1,500</td>
                      <td>=</td>
                      <td>10,000</td>
                      <td>+</td>
                      <td>19,700</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Verification Box */}
              <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', padding: '14px 18px', fontSize: '0.88rem' }}>
                <div style={{ fontWeight: 800, color: '#10b981', marginBottom: '6px' }}>
                  ✓ Final Verification & Balance:
                </div>
                <div><strong>Total Assets</strong> = Cash (₹20,000) + Stock (₹8,200) + Debtors (₹1,500) = <strong>₹29,700</strong></div>
                <div><strong>Total Liabilities + Capital</strong> = Creditors (₹10,000) + Capital (₹19,700) = <strong>₹29,700</strong></div>
              </div>
            </div>
          )}

          {/* QUESTION 3 */}
          {(equationTab === 'ALL' || equationTab === 3) && (
            <div className="glass-card" style={{ padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)', background: 'var(--bg-card)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ background: '#3b82f6', color: '#ffffff', fontWeight: 800, fontSize: '0.8rem', padding: '4px 10px', borderRadius: '6px' }}>
                  T.S. Grewal 2026-27 • Question 3
                </span>
                <button
                  onClick={() => handleCopy('Started business with cash ₹50,000 and goods ₹30,000; Purchased goods for cash ₹30,000 and on credit for ₹20,000 from Karan; Sold goods costing ₹40,000 for ₹55,000 for cash.\nTotal Assets = ₹95,000 | Liabilities = ₹20,000 | Capital = ₹95,000', 'q3')}
                  style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem' }}
                >
                  {copiedId === 'q3' ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                  {copiedId === 'q3' ? 'Copied' : 'Copy'}
                </button>
              </div>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '12px', color: 'var(--text-primary)' }}>
                Show the Accounting Equation on the basis of the following transactions:
              </h3>

              <div style={{ background: 'var(--bg-hover)', padding: '12px 16px', borderRadius: '10px', fontSize: '0.9rem', marginBottom: '16px', lineHeight: 1.6 }}>
                <div><strong>(i)</strong> Started business with cash <strong>₹50,000</strong> and goods <strong>₹30,000</strong></div>
                <div><strong>(ii)</strong> Purchased goods for cash <strong>₹30,000</strong> and on credit for <strong>₹20,000</strong> from Karan</div>
                <div><strong>(iii)</strong> Goods costing <strong>₹40,000</strong> were sold for <strong>₹55,000</strong> for cash</div>
              </div>

              {/* Table Solution */}
              <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'center' }}>
                  <thead>
                    <tr style={{ background: 'rgba(59, 130, 246, 0.15)', borderBottom: '2px solid rgba(59, 130, 246, 0.3)' }}>
                      <th style={{ padding: '10px 8px', textAlign: 'left' }}>S.No</th>
                      <th style={{ padding: '10px 8px', textAlign: 'left' }}>Transactions</th>
                      <th style={{ padding: '10px 8px' }}>Cash (₹)</th>
                      <th style={{ padding: '10px 8px' }}>+</th>
                      <th style={{ padding: '10px 8px' }}>Stock (₹)</th>
                      <th style={{ padding: '10px 8px' }}>=</th>
                      <th style={{ padding: '10px 8px' }}>Creditors (₹)</th>
                      <th style={{ padding: '10px 8px' }}>+</th>
                      <th style={{ padding: '10px 8px' }}>Capital (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>(i)</td>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>Started business with cash & goods</td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+50,000</td>
                      <td>+</td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+30,000</td>
                      <td>=</td>
                      <td>-</td>
                      <td>+</td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+80,000</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-hover)' }}>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>(ii)</td>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>Purchased goods (Cash ₹30k, Credit ₹20k)</td>
                      <td style={{ padding: '10px 8px', color: '#ef4444', fontWeight: 700 }}>-30,000</td>
                      <td>+</td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+50,000</td>
                      <td>=</td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+20,000</td>
                      <td>+</td>
                      <td>-</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', fontWeight: 700 }}>
                      <td colSpan={2} style={{ padding: '8px', textAlign: 'left', color: '#3b82f6' }}>New Equation</td>
                      <td>20,000</td>
                      <td>+</td>
                      <td>80,000</td>
                      <td>=</td>
                      <td>20,000</td>
                      <td>+</td>
                      <td>80,000</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-hover)' }}>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>(iii)</td>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>Sold goods for cash at profit (₹15,000)</td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+55,000</td>
                      <td></td>
                      <td style={{ padding: '10px 8px', color: '#ef4444', fontWeight: 700 }}>-40,000</td>
                      <td>=</td>
                      <td>-</td>
                      <td>+</td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+15,000</td>
                    </tr>
                    <tr style={{ background: 'rgba(16, 185, 129, 0.1)', fontWeight: 800, borderTop: '2px solid #10b981' }}>
                      <td colSpan={2} style={{ padding: '10px 8px', textAlign: 'left', color: '#10b981' }}>Final Equation</td>
                      <td>75,000</td>
                      <td>+</td>
                      <td>40,000</td>
                      <td>=</td>
                      <td>20,000</td>
                      <td>+</td>
                      <td>95,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Verification Box */}
              <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', padding: '14px 18px', fontSize: '0.88rem' }}>
                <div style={{ fontWeight: 800, color: '#10b981', marginBottom: '6px' }}>
                  ✓ Final Verification & Balance:
                </div>
                <div><strong>Total Assets</strong> = Cash (₹75,000) + Stock (₹40,000) = <strong>₹1,15,000</strong></div>
                <div><strong>Total Liabilities + Capital</strong> = Creditors (₹20,000) + Capital (₹95,000) = <strong>₹1,15,000</strong></div>
              </div>
            </div>
          )}

          {/* QUESTION 4 */}
          {(equationTab === 'ALL' || equationTab === 4) && (
            <div className="glass-card" style={{ padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)', background: 'var(--bg-card)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ background: '#3b82f6', color: '#ffffff', fontWeight: 800, fontSize: '0.8rem', padding: '4px 10px', borderRadius: '6px' }}>
                  T.S. Grewal 2026-27 • Question 4
                </span>
                <button
                  onClick={() => handleCopy('Started business with cash ₹1,00,000; Purchased goods ₹20,000 for cash and ₹30,000 on credit; Sold goods for cash ₹10,000 and on credit ₹15,000 costing ₹12,000 and ₹18,000 respectively.\nTotal Assets = ₹1,25,000 | Liabilities = ₹30,000 | Capital = ₹95,000', 'q4')}
                  style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem' }}
                >
                  {copiedId === 'q4' ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                  {copiedId === 'q4' ? 'Copied' : 'Copy'}
                </button>
              </div>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '12px', color: 'var(--text-primary)' }}>
                What will be the effect of the following on the Accounting Equation?
              </h3>

              <div style={{ background: 'var(--bg-hover)', padding: '12px 16px', borderRadius: '10px', fontSize: '0.9rem', marginBottom: '16px', lineHeight: 1.6 }}>
                <div><strong>(i)</strong> Started business with cash <strong>₹1,00,000</strong></div>
                <div><strong>(ii)</strong> Purchased goods <strong>₹20,000</strong> for cash and <strong>₹30,000</strong> on credit</div>
                <div><strong>(iii)</strong> Sold goods for cash <strong>₹10,000</strong> and on credit <strong>₹15,000</strong> costing <strong>₹12,000</strong> and <strong>₹18,000</strong> respectively</div>
              </div>

              {/* Table Solution */}
              <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'center' }}>
                  <thead>
                    <tr style={{ background: 'rgba(59, 130, 246, 0.15)', borderBottom: '2px solid rgba(59, 130, 246, 0.3)' }}>
                      <th style={{ padding: '10px 8px', textAlign: 'left' }}>S.No</th>
                      <th style={{ padding: '10px 8px', textAlign: 'left' }}>Transactions</th>
                      <th style={{ padding: '10px 8px' }}>Cash (₹)</th>
                      <th style={{ padding: '10px 8px' }}>+</th>
                      <th style={{ padding: '10px 8px' }}>Stock (₹)</th>
                      <th style={{ padding: '10px 8px' }}>+</th>
                      <th style={{ padding: '10px 8px' }}>Debtors (₹)</th>
                      <th style={{ padding: '10px 8px' }}>=</th>
                      <th style={{ padding: '10px 8px' }}>Creditors (₹)</th>
                      <th style={{ padding: '10px 8px' }}>+</th>
                      <th style={{ padding: '10px 8px' }}>Capital (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>(i)</td>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>Started business with cash</td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+1,00,000</td>
                      <td></td>
                      <td>-</td>
                      <td></td>
                      <td>-</td>
                      <td>=</td>
                      <td>-</td>
                      <td></td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+1,00,000</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-hover)' }}>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>(ii)</td>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>Purchased goods (Cash ₹20k, Credit ₹30k)</td>
                      <td style={{ padding: '10px 8px', color: '#ef4444', fontWeight: 700 }}>-20,000</td>
                      <td>+</td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+50,000</td>
                      <td></td>
                      <td>-</td>
                      <td>=</td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+30,000</td>
                      <td></td>
                      <td>-</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', fontWeight: 700 }}>
                      <td colSpan={2} style={{ padding: '8px', textAlign: 'left', color: '#3b82f6' }}>New Equation</td>
                      <td>80,000</td>
                      <td>+</td>
                      <td>50,000</td>
                      <td>+</td>
                      <td>-</td>
                      <td>=</td>
                      <td>30,000</td>
                      <td>+</td>
                      <td>1,00,000</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-hover)' }}>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>(iii)</td>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>Sold goods at loss (Cash -₹2k, Credit -₹3k)</td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+10,000</td>
                      <td>+</td>
                      <td style={{ padding: '10px 8px', color: '#ef4444', fontWeight: 700 }}>-30,000</td>
                      <td>+</td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+15,000</td>
                      <td>=</td>
                      <td>-</td>
                      <td>+</td>
                      <td style={{ padding: '10px 8px', color: '#ef4444', fontWeight: 700 }}>-5,000</td>
                    </tr>
                    <tr style={{ background: 'rgba(16, 185, 129, 0.1)', fontWeight: 800, borderTop: '2px solid #10b981' }}>
                      <td colSpan={2} style={{ padding: '10px 8px', textAlign: 'left', color: '#10b981' }}>Final Equation</td>
                      <td>90,000</td>
                      <td>+</td>
                      <td>20,000</td>
                      <td>+</td>
                      <td>15,000</td>
                      <td>=</td>
                      <td>30,000</td>
                      <td>+</td>
                      <td>95,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Verification Box */}
              <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', padding: '14px 18px', fontSize: '0.88rem' }}>
                <div style={{ fontWeight: 800, color: '#10b981', marginBottom: '6px' }}>
                  ✓ Final Verification & Balance:
                </div>
                <div><strong>Total Assets</strong> = Cash (₹90,000) + Stock (₹20,000) + Debtors (₹15,000) = <strong>₹1,25,000</strong></div>
                <div><strong>Total Liabilities + Capital</strong> = Creditors (₹30,000) + Capital (₹95,000) = <strong>₹1,25,000</strong></div>
              </div>
            </div>
          )}

          {/* QUESTION 5 */}
          {(equationTab === 'ALL' || equationTab === 5) && (
            <div className="glass-card" style={{ padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)', background: 'var(--bg-card)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ background: '#3b82f6', color: '#ffffff', fontWeight: 800, fontSize: '0.8rem', padding: '4px 10px', borderRadius: '6px' }}>
                  T.S. Grewal 2026-27 • Question 5
                </span>
                <button
                  onClick={() => handleCopy('Mohit started business ₹50,000; Purchased goods ₹30,000; Sold goods costing ₹10,000 for ₹12,000; Bought furniture on credit ₹2,000; Paid creditor ₹15,000; Paid salary ₹1,000.\nTotal Assets = ₹58,000 | Liabilities = ₹7,000 | Capital = ₹51,000', 'q5')}
                  style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem' }}
                >
                  {copiedId === 'q5' ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                  {copiedId === 'q5' ? 'Copied' : 'Copy'}
                </button>
              </div>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '12px', color: 'var(--text-primary)' }}>
                Mohit has the following transactions, show accounting equation:
              </h3>

              <div style={{ background: 'var(--bg-hover)', padding: '12px 16px', borderRadius: '10px', fontSize: '0.9rem', marginBottom: '16px', lineHeight: 1.6 }}>
                <div><strong>(a)</strong> Business started with cash <strong>₹50,000</strong></div>
                <div><strong>(b)</strong> Purchased goods from Rita <strong>₹20,000</strong></div>
                <div><strong>(c)</strong> Cash purchases of goods <strong>₹10,000</strong></div>
                <div><strong>(d)</strong> Goods costing <strong>₹10,000</strong> sold for <strong>₹12,000</strong></div>
                <div><strong>(e)</strong> Bought furniture on credit <strong>₹2,000</strong></div>
                <div><strong>(f)</strong> Paid cash to a creditor <strong>₹15,000</strong></div>
                <div><strong>(g)</strong> Salary paid <strong>₹1,000</strong></div>
              </div>

              {/* Table Solution */}
              <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'center' }}>
                  <thead>
                    <tr style={{ background: 'rgba(59, 130, 246, 0.15)', borderBottom: '2px solid rgba(59, 130, 246, 0.3)' }}>
                      <th style={{ padding: '10px 8px', textAlign: 'left' }}>S.No</th>
                      <th style={{ padding: '10px 8px', textAlign: 'left' }}>Transactions</th>
                      <th style={{ padding: '10px 8px' }}>Cash (₹)</th>
                      <th style={{ padding: '10px 8px' }}>+</th>
                      <th style={{ padding: '10px 8px' }}>Stock (₹)</th>
                      <th style={{ padding: '10px 8px' }}>+</th>
                      <th style={{ padding: '10px 8px' }}>Furn (₹)</th>
                      <th style={{ padding: '10px 8px' }}>=</th>
                      <th style={{ padding: '10px 8px' }}>Creditors (₹)</th>
                      <th style={{ padding: '10px 8px' }}>+</th>
                      <th style={{ padding: '10px 8px' }}>Capital (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>(i)</td>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>Started business with cash</td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+50,000</td>
                      <td></td>
                      <td>-</td>
                      <td></td>
                      <td>-</td>
                      <td>=</td>
                      <td>-</td>
                      <td></td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+50,000</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-hover)' }}>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>(ii)</td>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>Purchased goods from Rita</td>
                      <td>-</td>
                      <td></td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+20,000</td>
                      <td></td>
                      <td>-</td>
                      <td>=</td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+20,000</td>
                      <td></td>
                      <td>-</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', fontWeight: 700 }}>
                      <td colSpan={2} style={{ padding: '8px', textAlign: 'left', color: '#3b82f6' }}>New Equation</td>
                      <td>50,000</td>
                      <td>+</td>
                      <td>20,000</td>
                      <td>+</td>
                      <td>-</td>
                      <td>=</td>
                      <td>20,000</td>
                      <td>+</td>
                      <td>50,000</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-hover)' }}>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>(iii)</td>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>Cash purchases of goods</td>
                      <td style={{ padding: '10px 8px', color: '#ef4444', fontWeight: 700 }}>-10,000</td>
                      <td>+</td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+10,000</td>
                      <td></td>
                      <td>-</td>
                      <td>=</td>
                      <td>-</td>
                      <td></td>
                      <td>-</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', fontWeight: 700 }}>
                      <td colSpan={2} style={{ padding: '8px', textAlign: 'left', color: '#3b82f6' }}>New Equation</td>
                      <td>40,000</td>
                      <td>+</td>
                      <td>30,000</td>
                      <td>+</td>
                      <td>-</td>
                      <td>=</td>
                      <td>20,000</td>
                      <td>+</td>
                      <td>50,000</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-hover)' }}>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>(iv)</td>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>Sold goods at profit (₹2,000)</td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+12,000</td>
                      <td></td>
                      <td style={{ padding: '10px 8px', color: '#ef4444', fontWeight: 700 }}>-10,000</td>
                      <td></td>
                      <td>-</td>
                      <td>=</td>
                      <td>-</td>
                      <td>+</td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+2,000</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', fontWeight: 700 }}>
                      <td colSpan={2} style={{ padding: '8px', textAlign: 'left', color: '#3b82f6' }}>New Equation</td>
                      <td>52,000</td>
                      <td>+</td>
                      <td>20,000</td>
                      <td>+</td>
                      <td>-</td>
                      <td>=</td>
                      <td>20,000</td>
                      <td>+</td>
                      <td>52,000</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-hover)' }}>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>(v)</td>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>Bought furniture on credit</td>
                      <td>-</td>
                      <td></td>
                      <td>-</td>
                      <td>+</td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+2,000</td>
                      <td>=</td>
                      <td style={{ padding: '10px 8px', color: '#10b981', fontWeight: 700 }}>+2,000</td>
                      <td></td>
                      <td>-</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', fontWeight: 700 }}>
                      <td colSpan={2} style={{ padding: '8px', textAlign: 'left', color: '#3b82f6' }}>New Equation</td>
                      <td>52,000</td>
                      <td>+</td>
                      <td>20,000</td>
                      <td>+</td>
                      <td>2,000</td>
                      <td>=</td>
                      <td>22,000</td>
                      <td>+</td>
                      <td>52,000</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-hover)' }}>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>(vi)</td>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>Paid cash to a creditor</td>
                      <td style={{ padding: '10px 8px', color: '#ef4444', fontWeight: 700 }}>-15,000</td>
                      <td></td>
                      <td>-</td>
                      <td></td>
                      <td>-</td>
                      <td>=</td>
                      <td style={{ padding: '10px 8px', color: '#ef4444', fontWeight: 700 }}>-15,000</td>
                      <td></td>
                      <td>-</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', fontWeight: 700 }}>
                      <td colSpan={2} style={{ padding: '8px', textAlign: 'left', color: '#3b82f6' }}>New Equation</td>
                      <td>37,000</td>
                      <td>+</td>
                      <td>20,000</td>
                      <td>+</td>
                      <td>2,000</td>
                      <td>=</td>
                      <td>7,000</td>
                      <td>+</td>
                      <td>52,000</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-hover)' }}>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>(vii)</td>
                      <td style={{ padding: '10px 8px', textAlign: 'left' }}>Salary paid (expense)</td>
                      <td style={{ padding: '10px 8px', color: '#ef4444', fontWeight: 700 }}>-1,000</td>
                      <td></td>
                      <td>-</td>
                      <td></td>
                      <td>-</td>
                      <td>=</td>
                      <td>-</td>
                      <td>+</td>
                      <td style={{ padding: '10px 8px', color: '#ef4444', fontWeight: 700 }}>-1,000</td>
                    </tr>
                    <tr style={{ background: 'rgba(16, 185, 129, 0.1)', fontWeight: 800, borderTop: '2px solid #10b981' }}>
                      <td colSpan={2} style={{ padding: '10px 8px', textAlign: 'left', color: '#10b981' }}>Final Equation</td>
                      <td>36,000</td>
                      <td>+</td>
                      <td>20,000</td>
                      <td>+</td>
                      <td>2,000</td>
                      <td>=</td>
                      <td>7,000</td>
                      <td>+</td>
                      <td>51,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Verification Box */}
              <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', padding: '14px 18px', fontSize: '0.88rem' }}>
                <div style={{ fontWeight: 800, color: '#10b981', marginBottom: '6px' }}>
                  ✓ Final Verification & Balance:
                </div>
                <div><strong>Total Assets</strong> = Cash (₹36,000) + Stock (₹20,000) + Furniture (₹2,000) = <strong>₹58,000</strong></div>
                <div><strong>Total Liabilities + Capital</strong> = Creditors (₹7,000) + Capital (₹51,000) = <strong>₹58,000</strong></div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: GOLDEN RULES & GST REFERENCE */}
      {/* ========================================================================= */}
      {activeMainTab === 'RULES' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Traditional vs Modern Comparison */}
          <div className="glass-card" style={{ padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)', background: 'var(--bg-card)' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '16px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Scale size={20} style={{ color: '#3b82f6' }} /> Traditional Approach (English Rules)
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
              <div style={{ background: 'rgba(59, 130, 246, 0.08)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                <div style={{ fontWeight: 900, fontSize: '0.95rem', color: '#2563eb', marginBottom: '6px' }}>1. Personal Accounts</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Natural, Artificial & Representative persons</div>
                <div style={{ background: 'var(--bg-card)', padding: '8px 12px', borderRadius: '8px', fontWeight: 800, fontSize: '0.85rem' }}>
                  <span style={{ color: '#10b981' }}>Debit the Receiver</span> | <span style={{ color: '#ef4444' }}>Credit the Giver</span>
                </div>
              </div>

              <div style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <div style={{ fontWeight: 900, fontSize: '0.95rem', color: '#10b981', marginBottom: '6px' }}>2. Real Accounts</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Tangible & Intangible Assets and Properties</div>
                <div style={{ background: 'var(--bg-card)', padding: '8px 12px', borderRadius: '8px', fontWeight: 800, fontSize: '0.85rem' }}>
                  <span style={{ color: '#10b981' }}>Debit What Comes In</span> | <span style={{ color: '#ef4444' }}>Credit What Goes Out</span>
                </div>
              </div>

              <div style={{ background: 'rgba(245, 158, 11, 0.08)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <div style={{ fontWeight: 900, fontSize: '0.95rem', color: '#d97706', marginBottom: '6px' }}>3. Nominal Accounts</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Expenses, Losses, Incomes & Gains</div>
                <div style={{ background: 'var(--bg-card)', padding: '8px 12px', borderRadius: '8px', fontWeight: 800, fontSize: '0.85rem' }}>
                  <span style={{ color: '#10b981' }}>Debit All Expenses & Losses</span> | <span style={{ color: '#ef4444' }}>Credit All Incomes & Gains</span>
                </div>
              </div>
            </div>
          </div>

          {/* Modern American Classification */}
          <div className="glass-card" style={{ padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)', background: 'var(--bg-card)' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '16px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Layers size={20} style={{ color: '#10b981' }} /> Modern Approach (American Rules)
            </h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.86rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-hover)', borderBottom: '2px solid var(--border-color)' }}>
                    <th style={{ padding: '10px 12px' }}>Account Classification</th>
                    <th style={{ padding: '10px 12px' }}>Increase Effect</th>
                    <th style={{ padding: '10px 12px' }}>Decrease Effect</th>
                    <th style={{ padding: '10px 12px' }}>Normal Closing Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 700 }}>1. Assets (Cash, Bank, Stock, Debtors, Plant)</td>
                    <td style={{ padding: '10px 12px', color: '#10b981', fontWeight: 800 }}>Debit (+Dr)</td>
                    <td style={{ padding: '10px 12px', color: '#ef4444', fontWeight: 800 }}>Credit (-Cr)</td>
                    <td style={{ padding: '10px 12px', fontWeight: 700 }}>Debit Balance</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-hover)' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 700 }}>2. Liabilities (Creditors, Loan, Overdraft, Outstanding)</td>
                    <td style={{ padding: '10px 12px', color: '#ef4444', fontWeight: 800 }}>Credit (+Cr)</td>
                    <td style={{ padding: '10px 12px', color: '#10b981', fontWeight: 800 }}>Debit (-Dr)</td>
                    <td style={{ padding: '10px 12px', fontWeight: 700 }}>Credit Balance</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 700 }}>3. Capital / Owner's Equity</td>
                    <td style={{ padding: '10px 12px', color: '#ef4444', fontWeight: 800 }}>Credit (+Cr)</td>
                    <td style={{ padding: '10px 12px', color: '#10b981', fontWeight: 800 }}>Debit (-Dr)</td>
                    <td style={{ padding: '10px 12px', fontWeight: 700 }}>Credit Balance</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-hover)' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 700 }}>4. Revenues & Incomes (Sales, Rent Received, Commission)</td>
                    <td style={{ padding: '10px 12px', color: '#ef4444', fontWeight: 800 }}>Credit (+Cr)</td>
                    <td style={{ padding: '10px 12px', color: '#10b981', fontWeight: 800 }}>Debit (-Dr)</td>
                    <td style={{ padding: '10px 12px', fontWeight: 700 }}>Credit Balance</td>
                  </tr>
                  <tr style={{ background: 'rgba(59, 130, 246, 0.05)' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 700 }}>5. Expenses & Losses (Purchases, Salaries, Rent, Bad Debts)</td>
                    <td style={{ padding: '10px 12px', color: '#10b981', fontWeight: 800 }}>Debit (+Dr)</td>
                    <td style={{ padding: '10px 12px', color: '#ef4444', fontWeight: 800 }}>Credit (-Cr)</td>
                    <td style={{ padding: '10px 12px', fontWeight: 700 }}>Debit Balance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* GST Accounting Framework */}
          <div className="glass-card" style={{ padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)', background: 'var(--bg-card)' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '14px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileSpreadsheet size={20} style={{ color: '#f59e0b' }} /> GST Accounting Matrix
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
              <div style={{ background: 'var(--bg-hover)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontWeight: 800, color: '#10b981', marginBottom: '4px' }}>Input GST (On Purchases & Expenses)</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Treated as an <strong>Asset</strong> (Input Tax Credit):</div>
                <div style={{ fontFamily: 'monospace', fontSize: '0.84rem', background: 'var(--bg-card)', padding: '8px 10px', borderRadius: '6px' }}>
                  • Input CGST A/c ...Dr<br />
                  • Input SGST A/c ...Dr<br />
                  • Input IGST A/c ...Dr
                </div>
              </div>

              <div style={{ background: 'var(--bg-hover)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontWeight: 800, color: '#ef4444', marginBottom: '4px' }}>Output GST (On Sales & Incomes)</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Treated as a <strong>Current Liability</strong>:</div>
                <div style={{ fontFamily: 'monospace', fontSize: '0.84rem', background: 'var(--bg-card)', padding: '8px 10px', borderRadius: '6px' }}>
                  • To Output CGST A/c<br />
                  • To Output SGST A/c<br />
                  • To Output IGST A/c
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: FINAL ACCOUNTS & 10 MASTER ADJUSTMENTS */}
      {/* ========================================================================= */}
      {activeMainTab === 'FINAL_ACCOUNTS' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Key Financial Formulas */}
          <div className="glass-card" style={{ padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)', background: 'var(--bg-card)' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '14px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calculator size={20} style={{ color: '#2563eb' }} /> Master Formulas for Financial Statements
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
              <div style={{ background: 'rgba(59, 130, 246, 0.08)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                <div style={{ fontWeight: 800, fontSize: '0.85rem', color: '#2563eb' }}>Cost of Goods Sold (COGS)</div>
                <div style={{ fontSize: '0.84rem', fontWeight: 700, fontFamily: 'monospace', marginTop: '4px' }}>
                  = Opening Stock + Net Purchases + Direct Expenses - Closing Stock
                </div>
              </div>

              <div style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <div style={{ fontWeight: 800, fontSize: '0.85rem', color: '#10b981' }}>Gross Profit</div>
                <div style={{ fontSize: '0.84rem', fontWeight: 700, fontFamily: 'monospace', marginTop: '4px' }}>
                  = Net Sales (Sales - Sales Return) - COGS
                </div>
              </div>

              <div style={{ background: 'rgba(245, 158, 11, 0.08)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <div style={{ fontWeight: 800, fontSize: '0.85rem', color: '#d97706' }}>Operating Profit</div>
                <div style={{ fontSize: '0.84rem', fontWeight: 700, fontFamily: 'monospace', marginTop: '4px' }}>
                  = Gross Profit - Operating Expenses (Admin + Selling & Distribution)
                </div>
              </div>

              <div style={{ background: 'rgba(139, 92, 246, 0.08)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                <div style={{ fontWeight: 800, fontSize: '0.85rem', color: '#8b5cf6' }}>Manager's Commission (After Charging)</div>
                <div style={{ fontSize: '0.84rem', fontWeight: 700, fontFamily: 'monospace', marginTop: '4px' }}>
                  = Net Profit (before commission) × Rate / (100 + Rate)
                </div>
              </div>
            </div>
          </div>

          {/* 10 Major Adjustments Matrix */}
          <div className="glass-card" style={{ padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)', background: 'var(--bg-card)' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '14px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BookmarkCheck size={20} style={{ color: '#10b981' }} /> The 10 Master Adjustments (Dual Effects)
            </h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.84rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-hover)', borderBottom: '2px solid var(--border-color)' }}>
                    <th style={{ padding: '10px 12px' }}>Adjustment Item</th>
                    <th style={{ padding: '10px 12px' }}>Effect 1 (Trading / P&L A/c)</th>
                    <th style={{ padding: '10px 12px' }}>Effect 2 (Balance Sheet)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 700 }}>1. Closing Stock</td>
                    <td style={{ padding: '10px 12px' }}>Credit side of Trading Account</td>
                    <td style={{ padding: '10px 12px', color: '#10b981', fontWeight: 700 }}>Asset side (Current Assets)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-hover)' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 700 }}>2. Outstanding Expenses</td>
                    <td style={{ padding: '10px 12px' }}>Add to respective expense (Trading/P&L)</td>
                    <td style={{ padding: '10px 12px', color: '#ef4444', fontWeight: 700 }}>Liability side (Current Liabilities)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 700 }}>3. Prepaid / Unexpired Expenses</td>
                    <td style={{ padding: '10px 12px' }}>Deduct from respective expense (Trading/P&L)</td>
                    <td style={{ padding: '10px 12px', color: '#10b981', fontWeight: 700 }}>Asset side (Current Assets)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-hover)' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 700 }}>4. Accrued / Outstanding Income</td>
                    <td style={{ padding: '10px 12px' }}>Add to respective income on Credit of P&L</td>
                    <td style={{ padding: '10px 12px', color: '#10b981', fontWeight: 700 }}>Asset side (Current Assets)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 700 }}>5. Unearned Income (Received in advance)</td>
                    <td style={{ padding: '10px 12px' }}>Deduct from respective income on Credit of P&L</td>
                    <td style={{ padding: '10px 12px', color: '#ef4444', fontWeight: 700 }}>Liability side (Current Liabilities)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-hover)' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 700 }}>6. Depreciation on Fixed Assets</td>
                    <td style={{ padding: '10px 12px' }}>Debit side of Profit & Loss Account</td>
                    <td style={{ padding: '10px 12px' }}>Deduct from respective asset on Asset side</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 700 }}>7. Interest on Capital</td>
                    <td style={{ padding: '10px 12px' }}>Debit side of Profit & Loss Account</td>
                    <td style={{ padding: '10px 12px', color: '#10b981', fontWeight: 700 }}>Add to Capital on Liability side</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-hover)' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 700 }}>8. Further Bad Debts & Prov for Doubtful Debts</td>
                    <td style={{ padding: '10px 12px' }}>Debit side of Profit & Loss Account</td>
                    <td style={{ padding: '10px 12px' }}>Deduct from Debtors on Asset side</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 700 }}>9. Provision for Discount on Debtors</td>
                    <td style={{ padding: '10px 12px' }}>Debit side of Profit & Loss Account</td>
                    <td style={{ padding: '10px 12px' }}>Deduct from Good Debtors on Asset side</td>
                  </tr>
                  <tr style={{ background: 'rgba(59, 130, 246, 0.05)' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 700 }}>10. Manager's Commission Payable</td>
                    <td style={{ padding: '10px 12px' }}>Debit side of Profit & Loss Account</td>
                    <td style={{ padding: '10px 12px', color: '#ef4444', fontWeight: 700 }}>Liability side (Current Liabilities)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: FLASHCARDS & HIGH YIELD REVISION */}
      {/* ========================================================================= */}
      {activeMainTab === 'FLASHCARDS' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
          {[
            {
              q: 'Why is closing stock valued at cost or net realizable value whichever is lower?',
              a: 'As per the Prudence (Conservatism) principle, anticipating no future profits but providing for all possible future losses.'
            },
            {
              q: 'What is a Contra Entry in a Two-Column Cash Book?',
              a: 'A transaction affecting both Cash and Bank accounts simultaneously (e.g., cash deposited into bank or withdrawn for office use). It is marked with [C].'
            },
            {
              q: 'Why are nominal accounts not balanced at the end of the year?',
              a: 'Because nominal accounts (expenses and revenues) are temporary accounts transferred directly to Trading and Profit & Loss A/c to determine net profit/loss.'
            },
            {
              q: 'What is the fundamental difference between a Provision and a Reserve?',
              a: 'A Provision is a charge against profit for a known liability whose amount cannot be determined with substantial accuracy. A Reserve is an appropriation of profit to strengthen financial position.'
            },
            {
              q: 'State the formula for Adjusted Purchases.',
              a: 'Adjusted Purchases = Opening Stock + Net Purchases - Closing Stock. When given in Trial Balance, Closing Stock appears in Balance Sheet only.'
            },
            {
              q: 'What is the treatment of drawings of goods by the proprietor for personal use?',
              a: 'Drawings A/c is debited and Purchases A/c is credited at cost price (reduces stock/purchases at cost).'
            }
          ].map((card, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: '20px',
                borderRadius: '14px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '12px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', fontWeight: 800, color: '#3b82f6', marginBottom: '8px' }}>
                  <HelpCircle size={15} /> QUESTION #{i + 1}
                </div>
                <div style={{ fontWeight: 800, fontSize: '0.94rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                  {card.q}
                </div>
              </div>
              <div style={{ background: 'rgba(59, 130, 246, 0.08)', padding: '12px', borderRadius: '8px', fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5, borderLeft: '3px solid #2563eb' }}>
                <strong style={{ color: '#2563eb' }}>Answer:</strong> {card.a}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer Navigation */}
      <div style={{
        marginTop: '2.5rem',
        padding: '20px',
        borderRadius: '16px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        textAlign: 'center'
      }}>
        <h4 style={{ margin: '0 0 8px 0', fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)' }}>
          📚 T.S. Grewal Double Entry Book Keeping Series (Class 11)
        </h4>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
          Explore complete chapter solutions, financial formulas, and accounting equation solvers.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
          <button
            onClick={() => setActiveMainTab('CASH_BOOK_Q5')}
            style={{ padding: '6px 14px', borderRadius: '8px', background: activeMainTab === 'CASH_BOOK_Q5' ? '#10b981' : 'var(--bg-hover)', color: activeMainTab === 'CASH_BOOK_Q5' ? '#fff' : 'var(--text-primary)', border: '1px solid var(--border-color)', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}
          >
            Two-Column Cash Book (Q5)
          </button>
          <button
            onClick={() => setActiveMainTab('CHAPTERS')}
            style={{ padding: '6px 14px', borderRadius: '8px', background: activeMainTab === 'CHAPTERS' ? '#3b82f6' : 'var(--bg-hover)', color: activeMainTab === 'CHAPTERS' ? '#fff' : 'var(--text-primary)', border: '1px solid var(--border-color)', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}
          >
            18 Chapters Directory
          </button>
          <button
            onClick={() => setActiveMainTab('EQUATION')}
            style={{ padding: '6px 14px', borderRadius: '8px', background: activeMainTab === 'EQUATION' ? '#3b82f6' : 'var(--bg-hover)', color: activeMainTab === 'EQUATION' ? '#fff' : 'var(--text-primary)', border: '1px solid var(--border-color)', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}
          >
            Questions 1 to 5 Solutions
          </button>
          <button
            onClick={() => setActiveMainTab('RULES')}
            style={{ padding: '6px 14px', borderRadius: '8px', background: activeMainTab === 'RULES' ? '#3b82f6' : 'var(--bg-hover)', color: activeMainTab === 'RULES' ? '#fff' : 'var(--text-primary)', border: '1px solid var(--border-color)', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}
          >
            Golden Rules & GST
          </button>
          <button
            onClick={() => setActiveMainTab('FINAL_ACCOUNTS')}
            style={{ padding: '6px 14px', borderRadius: '8px', background: activeMainTab === 'FINAL_ACCOUNTS' ? '#3b82f6' : 'var(--bg-hover)', color: activeMainTab === 'FINAL_ACCOUNTS' ? '#fff' : 'var(--text-primary)', border: '1px solid var(--border-color)', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}
          >
            Final Accounts Adjustments
          </button>
        </div>
      </div>

    </div>
  );
};
