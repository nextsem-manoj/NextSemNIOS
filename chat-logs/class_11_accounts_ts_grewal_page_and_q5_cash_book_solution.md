# Class 11 Accountancy • T.S. Grewal Double Entry Book Keeping & Question 5 Two-Column Cash Book Solution

**Date:** 2026-09-06  
**Conversation Objective:** `make a page for class 11 under that make a page for accounts 11th ts grewal's` & `solve q5 and put it under the newly made page with detailed step wise solution`

---

## 📋 Summary of Actions Taken

1. **Created Dedicated T.S. Grewal Class 11 Accountancy Master Hub (`TsGrewalAccountingEquationView.tsx`)**:
   - Added `T.S. GREWAL: DOUBLE ENTRY BOOK KEEPING (XI)` as the 3rd book option inside [`src/components/SubjectBooksView.tsx`](file:///c:/Users/manojkmr2403/Documents/ncert.nextsem.online/src/components/SubjectBooksView.tsx) under Class 11 Accountancy.
   - Wired direct routing in [`src/App.tsx`](file:///c:/Users/manojkmr2403/Documents/ncert.nextsem.online/src/App.tsx) and dynamic desktop breadcrumb navigation: `Home` ❯ `NCERT Books` ❯ `Class 11` ❯ `Accountancy` ❯ `T.S. Grewal's Double Entry`.

2. **Solved Question 5: Two-Column Cash Book (Page 10.44 • Double Entry Book Keeping CBSE XI)**:
   - **Transaction-by-Transaction Analysis**:
     - **March 1**: Opening balances — Cash in Hand (₹12,750) & Cash at Bank (₹72,400) entered on Debit (Receipts) side (`To Balance b/d`).
     - **March 4**: Received from Asha cash ₹1,200 and cheque ₹3,200, discount allowed ₹400 (`To Asha` -> Cash: ₹1,200, Bank: ₹3,200, Disc: ₹400).
     - **March 5**: Sale of proprietor's personal car deposited into firm's bank account (`To Capital A/c` in Bank column: ₹1,00,000).
     - **March 7**: Paid salary to staff by cheque (`By Salaries A/c` in Bank column: ₹25,600).
     - **March 9**: Cash withdrawn from bank for office use — **Contra Entry [C]** (`To Bank A/c [C]` in Cash: ₹21,900 & `By Cash A/c [C]` in Bank: ₹21,900).
     - **March 12**: Interest paid by bank on bank balance (`To Interest A/c` in Bank column: ₹1,200).
     - **March 16**: Purchased furniture in cash (`By Furniture A/c` in Cash column: ₹16,500).
     - **March 21**: Paid to Mohan & Co. by cheque ₹10,900, discount received ₹100 (`By Mohan & Co.` in Bank: ₹10,900, Disc: ₹100).
     - **March 24**: Proprietor withdrew from office cash for personal use (`By Drawings A/c` in Cash column: ₹11,600).
     - **March 29**: Sold goods to Manoj for cash (`To Sales A/c` in Cash column: ₹14,800).
     - **March 31**: Deposited cash into bank — **Contra Entry [C]** (`To Cash A/c [C]` in Bank: ₹21,200 & `By Bank A/c [C]` in Cash: ₹21,200).
   - **Balancing & Mathematical Verification**:
     - **Cash Receipts Total**: ₹ 12,750 + ₹ 1,200 + ₹ 21,900 + ₹ 14,800 = **₹ 50,650**
     - **Cash Payments Total**: ₹ 16,500 + ₹ 11,600 + ₹ 21,200 = **₹ 49,300**
     - **Closing Cash in Hand (`By Balance c/d`)** = ₹ 50,650 - ₹ 49,300 = **₹ 1,350**
     - **Bank Receipts Total**: ₹ 72,400 + ₹ 3,200 + ₹ 1,00,000 + ₹ 1,200 + ₹ 21,200 = **₹ 1,98,000**
     - **Bank Payments Total**: ₹ 25,600 + ₹ 21,900 + ₹ 10,900 = **₹ 58,400**
     - **Closing Cash at Bank (`By Balance c/d`)** = ₹ 1,98,000 - ₹ 58,400 = **₹ 1,39,600**
     - **Discount Columns**: Discount Allowed = ₹ 400 | Discount Received = ₹ 100
     - **Textbook Match**: Matches `[Ans.: Cash Balance — ₹ 1,350; Bank Balance — ₹ 1,39,600.]` 100%!

3. **Complete 18 Chapters Curriculum Integration**:
   - Chapter 1: Basic Accounting Terms
   - Chapter 2: Theory Base of Accounting, GAAPs & AS
   - Chapter 3: Accounting Equation (Questions 1 to 5 Solved)
   - Chapter 4: Rules of Debit and Credit
   - Chapter 5: Origin of Transactions – Source Documents & Vouchers
   - Chapter 6: Journal & GST
   - Chapter 7: Ledger
   - Chapter 8: Special Purpose Books I – Cash Book (Question 5 Solved)
   - Chapter 9: Special Purpose Books II – Other Books
   - Chapter 10: Bank Reconciliation Statement (BRS)
   - Chapter 11: Trial Balance
   - Chapter 12: Depreciation
   - Chapter 13: Provisions and Reserves
   - Chapter 14: Bills of Exchange
   - Chapter 15: Rectification of Errors
   - Chapter 16: Financial Statements (Without Adjustments)
   - Chapter 17: Financial Statements with Adjustments
   - Chapter 18: Accounts from Incomplete Records (Single Entry System)

4. **Verification**:
   - `npx tsc --noEmit` passed with 0 errors.
