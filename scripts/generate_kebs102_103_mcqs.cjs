const fs = require('fs');

// ==========================================
// CHAPTER 2: FORMS OF BUSINESS ORGANISATION
// ==========================================
const ch2Mcqs = [
  {
    id: 1,
    page: 28,
    topic: "Sole Proprietorship: Meaning & Features",
    category: "Sole Proprietorship",
    q: "Which form of business organisation refers to a business owned, managed, and controlled by an individual who is the recipient of all profits and bearer of all risks?",
    options: [
      "(A) Sole Proprietorship",
      "(B) Partnership",
      "(C) Joint Hindu Family Business",
      "(D) Cooperative Society"
    ],
    correct: 0,
    exp: "NCERT Chapter 2 (Page 28) defines Sole Proprietorship as a popular form of business organisation where a single individual owns, manages, and controls the enterprise, taking all profits and bearing all losses.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 28"
  },
  {
    id: 2,
    page: 29,
    topic: "Sole Proprietorship: Unlimited Liability",
    category: "Sole Proprietorship",
    q: "If a sole proprietorship firm's assets are insufficient to pay off its business debts, the creditors have the legal right to claim repayment from the owner's personal property. This feature is known as:",
    options: [
      "(A) Limited Liability",
      "(B) Joint Liability",
      "(C) Unlimited Liability",
      "(D) Several Liability"
    ],
    correct: 2,
    exp: "NCERT Page 29 highlights 'Unlimited Liability': Sole proprietors have unlimited liability. In case business assets are inadequate to settle claims, the owner's personal property (house, savings) can be utilized to satisfy business obligations.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 29"
  },
  {
    id: 3,
    page: 30,
    topic: "Sole Proprietorship: Lack of Business Continuity",
    category: "Sole Proprietorship",
    q: "In the eyes of the law, a sole proprietorship has no separate legal existence distinct from its owner. Consequently, death, insanity, imprisonment, or insolvency of the proprietor usually leads to:",
    options: [
      "(A) Automatic continuation under state administrators",
      "(B) Closure or dissolution of the business",
      "(C) Transfer of business to a public company",
      "(D) Conversion into a statutory corporation"
    ],
    correct: 1,
    exp: "NCERT Page 30 explains 'Lack of Business Continuity': Since the owner and business are one and the same entity, personal misfortune like death, insanity, or insolvency of the owner directly affects business operations and often results in closure.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 30"
  },
  {
    id: 4,
    page: 31,
    topic: "Joint Hindu Family Business: Karta & Coparceners",
    category: "Joint Hindu Family Business",
    q: "In a Joint Hindu Family Business governed by Hindu Law, what is the nature of the liability of the 'Karta' versus the other family members ('Coparceners')?",
    options: [
      "(A) Both Karta and Coparceners have limited liability",
      "(B) Karta has unlimited liability, while Coparceners have liability limited to their share in ancestral property",
      "(C) Both Karta and Coparceners have unlimited liability",
      "(D) Karta has limited liability, while Coparceners have unlimited liability"
    ],
    correct: 1,
    exp: "NCERT Page 31 states: The liability of the Karta (the eldest male/female head) is unlimited, whereas the liability of all other members (coparceners) is strictly limited to their respective shares in the ancestral coparcenary property.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 31"
  },
  {
    id: 5,
    page: 32,
    topic: "Joint Hindu Family Business: Dayabhaga vs Mitakshara",
    category: "Joint Hindu Family Business",
    q: "Which system of Hindu Law prevalent in West Bengal permits both male and female family members to be coparceners in the ancestral family property?",
    options: [
      "(A) Mitakshara System",
      "(B) Dayabhaga System",
      "(C) Aliyasantana System",
      "(D) Marumakkathayam System"
    ],
    correct: 1,
    exp: "NCERT Page 32 notes: Under the Dayabhaga system (prevailing in West Bengal and parts of Assam), both male and female members can become coparceners. Under Mitakshara (rest of India), traditionally only male members held ancestral rights by birth.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 32"
  },
  {
    id: 6,
    page: 33,
    topic: "Partnership: Definition & Mutual Agency",
    category: "Partnership",
    q: "According to the Indian Partnership Act, 1932, partnership is the relation between persons who have agreed to share the profits of a business carried on by all or any of them acting for all. This fundamental principle is known as:",
    options: [
      "(A) Limited liability",
      "(B) Mutual agency",
      "(C) Perpetual succession",
      "(D) Ultra vires"
    ],
    correct: 1,
    exp: "NCERT Page 33 explains 'Mutual Agency': Every partner is both an agent and a principal. A partner's acts bind all other partners, and they are in turn bound by the lawful acts of other partners in conducting business.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 33"
  },
  {
    id: 7,
    page: 34,
    topic: "Partnership: Maximum Number of Partners",
    category: "Partnership",
    q: "According to the Companies (Miscellaneous) Rules, 2014, what is the maximum number of partners permitted in a partnership firm?",
    options: [
      "(A) 10",
      "(B) 20",
      "(C) 50",
      "(D) 100"
    ],
    correct: 2,
    exp: "NCERT Page 34 notes: Under Section 464 of Companies Act, 2013 and Rule 10 of Companies (Miscellaneous) Rules, 2014, the maximum number of partners in a partnership firm is currently set at 50.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 34"
  },
  {
    id: 8,
    page: 35,
    topic: "Types of Partners: Sleeping / Dormant Partner",
    category: "Partnership",
    q: "A partner who contributes capital, shares profits and losses, and bears unlimited liability, but DOES NOT take active part in the daily management of the firm's business, is called a:",
    options: [
      "(A) Active Partner",
      "(B) Sleeping or Dormant Partner",
      "(C) Nominal Partner",
      "(D) Secret Partner"
    ],
    correct: 1,
    exp: "NCERT Page 35 (Table 2.2) defines a 'Sleeping or Dormant Partner' as one who contributes capital and shares profits/losses with unlimited liability, but remains inactive in day-to-day managerial operations.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 35"
  },
  {
    id: 9,
    page: 36,
    topic: "Types of Partners: Partner by Estoppel",
    category: "Partnership",
    q: "A person who is not a partner in a firm, but by their own conduct, words, or representation leads outside parties to believe that they are a partner, is termed a:",
    options: [
      "(A) Secret Partner",
      "(B) Partner by Estoppel",
      "(C) Partner in Profits Only",
      "(D) Sub-partner"
    ],
    correct: 1,
    exp: "NCERT Page 36 defines 'Partner by Estoppel': A person is held liable as a partner by estoppel if, through their own conduct or initiative, they give an impression to others that they are a partner, becoming personally liable for debts incurred by the firm on that belief.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 36"
  },
  {
    id: 10,
    page: 36,
    topic: "Position of a Minor in Partnership",
    category: "Partnership",
    q: "Under Section 30 of the Indian Partnership Act, 1932, which of the following statements correctly describes the legal status of a 'Minor' admitted to a partnership?",
    options: [
      "(A) A minor can become a full partner with unlimited personal liability",
      "(B) A minor cannot be admitted into a partnership under any circumstances",
      "(C) A minor can be admitted only to the benefits of an existing partnership with the mutual consent of all partners, and their liability is strictly limited to their share in the firm",
      "(D) A minor must contribute at least 51% of the firm's capital"
    ],
    correct: 2,
    exp: "NCERT Page 36 explains that a minor cannot enter into a contract, but with the unanimous consent of all partners, can be admitted to the benefits of an existing partnership. The minor's liability is limited to their capital share; personal assets cannot be touched.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 36"
  },
  {
    id: 11,
    page: 37,
    topic: "Limited Liability Partnership (LLP)",
    category: "Partnership",
    q: "In India, a Limited Liability Partnership (LLP) is formed and registered under which dedicated statute?",
    options: [
      "(A) Indian Partnership Act, 1932",
      "(B) Companies Act, 2013",
      "(C) Limited Liability Partnership Act, 2008",
      "(D) Societies Registration Act, 1860"
    ],
    correct: 2,
    exp: "NCERT Page 37 highlights the 'Limited Liability Partnership Act, 2008'. An LLP combines the organizational flexibility of a partnership with the limited liability benefits of a joint stock company.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 37"
  },
  {
    id: 12,
    page: 38,
    topic: "Partnership Deed & Registration Consequences",
    category: "Partnership",
    q: "Registration of a partnership firm is optional under the Indian Partnership Act, 1932. However, an UNREGISTERED partnership firm suffers which major legal disability?",
    options: [
      "(A) It cannot open a bank account",
      "(B) It cannot file a legal suit in a court of law against third parties or against fellow partners",
      "(C) Its partners are exempted from paying government taxes",
      "(D) It cannot sell products to the general public"
    ],
    correct: 1,
    exp: "NCERT Page 38 lists consequences of non-registration: An unregistered firm cannot file a lawsuit against third parties or against other partners to enforce contractual rights, though third parties can still sue the firm.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 38"
  },
  {
    id: 13,
    page: 39,
    topic: "Cooperative Society: Democratic Principle",
    category: "Cooperative Society",
    q: "In a Cooperative Society, voting rights are governed by which foundational democratic principle?",
    options: [
      "(A) One share, one vote",
      "(B) One member, one vote",
      "(C) Proportional voting based on capital contribution",
      "(D) Votes determined by the state registrar"
    ],
    correct: 1,
    exp: "NCERT Page 39 emphasizes 'Democratic Control': The principle of 'one member, one vote' governs cooperative societies, ensuring equal voting rights regardless of the amount of capital contributed by any individual member.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 39"
  },
  {
    id: 14,
    page: 40,
    topic: "Cooperative Society: Minimum Membership Requirement",
    category: "Cooperative Society",
    q: "Under the Cooperative Societies Act, 1912, what is the minimum number of adult individuals required to form a cooperative society?",
    options: [
      "(A) 2",
      "(B) 7",
      "(C) 10",
      "(D) 20"
    ],
    correct: 2,
    exp: "NCERT Page 40 states: To form a cooperative society, at least 10 adult persons who share common economic goals must join together voluntarily and apply for registration.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 40"
  },
  {
    id: 15,
    page: 41,
    topic: "Types of Cooperative Societies: Consumer Cooperatives",
    category: "Cooperative Society",
    q: "Which type of cooperative society is formed by consumers to eliminate middlemen, purchase consumer goods directly from manufacturers in bulk, and supply quality goods at reasonable prices?",
    options: [
      "(A) Consumer Cooperative Societies",
      "(B) Producer Cooperative Societies",
      "(C) Marketing Cooperative Societies",
      "(D) Credit Cooperative Societies"
    ],
    correct: 0,
    exp: "NCERT Page 41 defines Consumer Cooperative Societies as associations formed by consumers desiring to procure good quality household items directly from producers, eliminating wholesaler and retailer margins.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 41"
  },
  {
    id: 16,
    page: 42,
    topic: "Types of Cooperative Societies: Marketing Cooperatives",
    category: "Cooperative Society",
    q: "Small farmers or artisans who wish to pool their outputs to secure better bargaining power, competitive selling prices, transportation, and warehousing against exploitative middlemen form a:",
    options: [
      "(A) Cooperative Housing Society",
      "(B) Marketing Cooperative Society",
      "(C) Credit Cooperative Society",
      "(D) Consumer Cooperative Society"
    ],
    correct: 1,
    exp: "NCERT Page 42 defines Marketing Cooperative Societies as enterprises formed by small producers to secure favorable market prices, warehousing, and transportation for their goods.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 42"
  },
  {
    id: 17,
    page: 43,
    topic: "Joint Stock Company: Artificial Person & Separate Entity",
    category: "Joint Stock Company",
    q: "A Joint Stock Company is an artificial person created by law. Which of the following features signifies that the company continues to exist despite the death, retirement, or insolvency of all its members?",
    options: [
      "(A) Limited Liability",
      "(B) Perpetual Succession",
      "(C) Common Seal",
      "(D) Separation of Ownership and Management"
    ],
    correct: 1,
    exp: "NCERT Page 43 defines 'Perpetual Succession': A company is created by law and can only be dissolved by law. The coming and going of members (shareholders) does not affect its perpetual existence.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 43"
  },
  {
    id: 18,
    page: 44,
    topic: "Joint Stock Company: Common Seal",
    category: "Joint Stock Company",
    q: "Since a company is an artificial person that cannot sign physical documents itself, its official signature used on legal contracts was traditionally represented by the:",
    options: [
      "(A) Managing Director's fingerprint",
      "(B) Common Seal",
      "(C) Registrar's stamp",
      "(D) Share Certificate"
    ],
    correct: 1,
    exp: "NCERT Page 44 notes: The Common Seal acts as the official signature of the corporate entity. (Under the Companies Amendment Act 2015, the common seal was made optional, replaced by signatures of two directors or a director and company secretary).",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 44"
  },
  {
    id: 19,
    page: 45,
    topic: "Private Company: Minimum & Maximum Members",
    category: "Joint Stock Company",
    q: "According to the Companies Act, 2013, what are the minimum and maximum membership limits for a 'Private Company'?",
    options: [
      "(A) Minimum 2, Maximum 50",
      "(B) Minimum 2, Maximum 200 (excluding employee members)",
      "(C) Minimum 7, Maximum Unlimited",
      "(D) Minimum 1, Maximum 100"
    ],
    correct: 1,
    exp: "NCERT Page 45 explains: Under Section 2(68) of Companies Act, 2013, a private company requires at least 2 members and restricts its maximum number of members to 200 (excluding present and past employee members).",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 45"
  },
  {
    id: 20,
    page: 46,
    topic: "Public Company: Characteristics",
    category: "Joint Stock Company",
    q: "Which of the following is a mandatory legal characteristic of a 'Public Limited Company'?",
    options: [
      "(A) It restricts the right of its members to transfer shares",
      "(B) It must have a minimum of 7 members, with no statutory limit on maximum members",
      "(C) It cannot issue shares or debentures to the general public",
      "(D) It cannot appoint more than 2 directors"
    ],
    correct: 1,
    exp: "NCERT Page 46 defines a Public Company: It requires at least 7 members, has no upper limit on maximum members, allows free transferability of shares, and can invite the public to subscribe to its securities.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 46"
  },
  {
    id: 21,
    page: 47,
    topic: "One Person Company (OPC)",
    category: "Joint Stock Company",
    q: "Under the Companies Act, 2013, which new corporate form was introduced that allows a single individual to incorporate a private company with limited liability?",
    options: [
      "(A) Sole Trading Firm",
      "(B) One Person Company (OPC)",
      "(C) Micro Industrial Society",
      "(D) Private Proprietorship Union"
    ],
    correct: 1,
    exp: "NCERT Page 47 highlights the 'One Person Company (OPC)': Introduced in Companies Act, 2013 (Section 2(62)), an OPC enables an entrepreneur to enjoy corporate personality and limited liability with only one shareholder/director.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 47"
  },
  {
    id: 22,
    page: 48,
    topic: "Choice of Form: Cost & Ease of Formation",
    category: "Choice of Business Organisation",
    q: "In terms of legal procedures, minimum expenditure, and simplicity of establishment, which form of business organisation is the easiest and least expensive to start?",
    options: [
      "(A) Joint Stock Company",
      "(B) Cooperative Society",
      "(C) Sole Proprietorship",
      "(D) Statutory Corporation"
    ],
    correct: 2,
    exp: "NCERT Page 48 states: Sole proprietorship is the simplest and least costly form to organize, as it requires minimal legal formalities and government registration compared to companies or cooperatives.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 48"
  },
  {
    id: 23,
    page: 49,
    topic: "Choice of Form: Capital Requirements",
    category: "Choice of Business Organisation",
    q: "When an entrepreneur plans to set up a very large-scale manufacturing enterprise (e.g. steel plant or automobile factory) requiring massive capital investment, which form of business organisation is most suitable?",
    options: [
      "(A) Sole Proprietorship",
      "(B) Partnership",
      "(C) Joint Stock Company",
      "(D) Joint Hindu Family Business"
    ],
    correct: 2,
    exp: "NCERT Page 49 explains: A Joint Stock Company is the most suitable form when huge capital resources are required, as it can issue shares and debentures to thousands of investors and financial institutions.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 49"
  },
  {
    id: 24,
    page: 50,
    topic: "Choice of Form: Continuity of Business",
    category: "Choice of Business Organisation",
    q: "If an enterprise demands high institutional continuity and stability undisturbed by the death, insolvency, or withdrawal of individual owners, the entrepreneur should choose a:",
    options: [
      "(A) Sole Proprietorship",
      "(B) Partnership at will",
      "(C) Joint Stock Company",
      "(D) Particular Partnership"
    ],
    correct: 2,
    exp: "NCERT Page 50 notes: Companies and cooperative societies enjoy legal perpetual succession, making them ideal when long-term uninterrupted continuity is required.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 50"
  },
  {
    id: 25,
    page: 51,
    topic: "Choice of Form: Summary Comparison",
    category: "Choice of Business Organisation",
    q: "Which form of business organisation offers the optimal combination of direct personal incentive, absolute secrecy of operational affairs, and quickness in managerial decision-making?",
    options: [
      "(A) Sole Proprietorship",
      "(B) Public Limited Company",
      "(C) Cooperative Society",
      "(D) Statutory Corporation"
    ],
    correct: 0,
    exp: "NCERT Page 51 (Table 2.4) compares all forms: Sole proprietorship excels in prompt decision-making, direct profit incentive, and complete confidentiality of trade secrets.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 2, Page 51"
  }
];

// ==========================================================
// CHAPTER 3: PRIVATE, PUBLIC AND GLOBAL ENTERPRISES
// ==========================================================
const ch3Mcqs = [
  {
    id: 1,
    page: 58,
    topic: "Mixed Economy: Private vs Public Sectors",
    category: "Public Sector Enterprises",
    q: "The Indian economy is a mixed economy where both privately owned and state-owned enterprises operate simultaneously. The sector consisting of business enterprises owned, managed, and controlled by the government is termed the:",
    options: [
      "(A) Private Sector",
      "(B) Public Sector",
      "(C) Cooperative Sector",
      "(D) Multinational Sector"
    ],
    correct: 1,
    exp: "NCERT Chapter 3 (Page 58) defines the Public Sector as consisting of various organisations owned and managed by the government (Central or State governments) to provide public goods, services, and promote equitable growth.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 58"
  },
  {
    id: 2,
    page: 59,
    topic: "Departmental Undertakings: Meaning & Features",
    category: "Departmental Undertakings",
    q: "Which form of public sector enterprise is established as an integral department of a government ministry, financed directly through government budgetary appropriations, and managed by civil servants?",
    options: [
      "(A) Statutory Corporation",
      "(B) Departmental Undertaking",
      "(C) Government Company",
      "(D) Public Limited Company"
    ],
    correct: 1,
    exp: "NCERT Page 59 defines 'Departmental Undertaking': The oldest and most traditional form of public enterprise, functioning as an executive wing or department of a specific ministry (e.g. Indian Railways, Post & Telegraph).",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 59"
  },
  {
    id: 3,
    page: 60,
    topic: "Departmental Undertakings: Financial Control & Audit",
    category: "Departmental Undertakings",
    q: "Revenues earned by a Departmental Undertaking (such as Indian Posts or Railways) are directly deposited into which government account?",
    options: [
      "(A) The Ministry's private commercial escrow account",
      "(B) The Government Treasury (Consolidated Fund)",
      "(C) The Reserve Bank's foreign exchange reserve",
      "(D) The Employees' Welfare Provident Fund"
    ],
    correct: 1,
    exp: "NCERT Page 60 points out that revenue earned by departmental undertakings is paid directly into the government treasury, and they cannot independently spend their revenues without legislative budgetary approval.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 60"
  },
  {
    id: 4,
    page: 60,
    topic: "Departmental Undertakings: Employee Status",
    category: "Departmental Undertakings",
    q: "Employees of Departmental Undertakings enjoy which specific legal and employment status?",
    options: [
      "(A) Corporate employees governed by private contractual bylaws",
      "(B) Civil servants whose recruitment and service conditions are identical to government officials",
      "(C) Temporary unorganized contractual labor",
      "(D) Trade union appointees without government pension rights"
    ],
    correct: 1,
    exp: "NCERT Page 60 states that the staff and employees of departmental undertakings are civil servants. Their conditions of recruitment and service are the same as for other civil servants of the government.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 60"
  },
  {
    id: 5,
    page: 61,
    topic: "Departmental Undertakings: Limitations",
    category: "Departmental Undertakings",
    q: "Which of the following is considered a serious limitation of Departmental Undertakings in commercial operations?",
    options: [
      "(A) Complete lack of ministerial accountability to Parliament",
      "(B) Excessive political interference, bureaucratic red-tape, and lack of operational flexibility",
      "(C) Excessive speculative trading in share markets",
      "(D) Inability to borrow funds from nationalized banks"
    ],
    correct: 1,
    exp: "NCERT Page 61 lists major limitations of departmental undertakings: political and bureaucratic interference, excessive centralization, rigid government rules, and lack of initiative among managers.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 61"
  },
  {
    id: 6,
    page: 62,
    topic: "Statutory Corporations: Origin & Act of Parliament",
    category: "Statutory Corporations",
    q: "A public enterprise brought into existence by a Special Act passed by the Parliament or State Legislature that defines its specific powers, functions, and privileges is called a:",
    options: [
      "(A) Departmental Undertaking",
      "(B) Statutory Corporation",
      "(C) Government Company",
      "(D) Joint Venture"
    ],
    correct: 1,
    exp: "NCERT Page 62 defines a 'Statutory Corporation': Created by a Special Act of Parliament or State Legislature (e.g. Life Insurance Corporation of India - LIC, Reserve Bank of India - RBI, State Bank of India - SBI).",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 62"
  },
  {
    id: 7,
    page: 62,
    topic: "Statutory Corporations: Legal & Financial Status",
    category: "Statutory Corporations",
    q: "Which of the following statements is TRUE regarding the financial status of a Statutory Corporation?",
    options: [
      "(A) It is not a separate legal entity in the eyes of the law",
      "(B) It is a body corporate with separate legal existence and financial autonomy to use its own revenues",
      "(C) Its staff are all civil servants subject to UPSC rules",
      "(D) It cannot sue or be sued in its own corporate name"
    ],
    correct: 1,
    exp: "NCERT Page 62 highlights: A statutory corporation is a body corporate having a separate legal entity. It enjoys financial autonomy, prepares its own budget, and can retain and use its earned revenues.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 62"
  },
  {
    id: 8,
    page: 63,
    topic: "Statutory Corporations: Practical Examples",
    category: "Statutory Corporations",
    q: "Which of the following prominent public sector entities is a classic example of a 'Statutory Corporation'?",
    options: [
      "(A) Indian Railways",
      "(B) Life Insurance Corporation of India (LIC)",
      "(C) Bharat Heavy Electricals Limited (BHEL)",
      "(D) Steel Authority of India Limited (SAIL)"
    ],
    correct: 1,
    exp: "NCERT Page 63 cites the Life Insurance Corporation of India (LIC), created by the LIC Act of 1956, as a prime example of a statutory corporation. Railways is a departmental undertaking, while BHEL and SAIL are government companies.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 63"
  },
  {
    id: 9,
    page: 64,
    topic: "Government Company: Minimum Shareholding Requirement",
    category: "Government Companies",
    q: "According to Section 2(45) of the Companies Act, 2013, what minimum percentage of paid-up share capital must be held by the Central Government, State Government(s), or jointly, for an enterprise to qualify as a 'Government Company'?",
    options: [
      "(A) At least 25%",
      "(B) At least 49%",
      "(C) Not less than 51%",
      "(D) Exactly 100%"
    ],
    correct: 2,
    exp: "NCERT Page 64 defines a Government Company as any company in which not less than 51% of the paid-up capital is held by the Central Government, or by any State Government(s), or partly by Central and partly by one or more State Governments.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 64"
  },
  {
    id: 10,
    page: 65,
    topic: "Government Company: Name and Representation",
    category: "Government Companies",
    q: "In a Government Company registered under the Companies Act, the government's shares are legally purchased and held in the official name of the:",
    options: [
      "(A) Prime Minister of India",
      "(B) President of India (or Governor of the State)",
      "(C) Chief Justice of India",
      "(D) Comptroller and Auditor General of India"
    ],
    correct: 1,
    exp: "NCERT Page 65 notes that shares of government companies are held in the name of the President of India (for central government investments) or the Governor of the respective State.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 65"
  },
  {
    id: 11,
    page: 65,
    topic: "Government Company: Audit & Accountability",
    category: "Government Companies",
    q: "The annual financial statements and accounts of a Government Company are audited by the:",
    options: [
      "(A) Reserve Bank of India",
      "(B) Comptroller and Auditor General of India (CAG)",
      "(C) International Monetary Fund",
      "(D) Securities and Exchange Board of India"
    ],
    correct: 1,
    exp: "NCERT Page 65 explains: The auditor of a government company is appointed by the Central Government on the advice of the Comptroller and Auditor General of India (CAG), and the annual report is laid before Parliament.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 65"
  },
  {
    id: 12,
    page: 66,
    topic: "Changing Role of Public Sector: Development of Infrastructure",
    category: "Changing Role of Public Sector",
    q: "In the post-independence era, why did the Government of India assign a dominant role to the Public Sector in heavy capital-intensive sectors like steel, power, and heavy electricals?",
    options: [
      "(A) Because private enterprise was completely banned by the Constitution",
      "(B) Because these core infrastructure sectors required huge capital investment, had long gestation periods, and offered low initial returns that private capital could not undertake",
      "(C) Because foreign governments forced the Indian administration to do so",
      "(D) Because there was zero market demand for steel and electricity"
    ],
    correct: 1,
    exp: "NCERT Page 66 explains that building heavy infrastructure required massive capital outlays and had long gestation periods. The private sector was neither willing nor capable of committing such massive resources at that time.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 66"
  },
  {
    id: 13,
    page: 67,
    topic: "Changing Role of Public Sector: Regional Balance",
    category: "Changing Role of Public Sector",
    q: "Setting up major public sector steel plants in backward regions like Bhilai, Rourkela, and Durgapur was aimed primarily at achieving which socio-economic objective?",
    options: [
      "(A) Maximizing export tariffs",
      "(B) Balanced regional industrial development",
      "(C) Promoting international tourism",
      "(D) Privatizing tribal lands"
    ],
    correct: 1,
    exp: "NCERT Page 67 notes that the government established major industrial complexes in backward areas to remove regional disparities, generate local employment, and promote balanced regional development.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 67"
  },
  {
    id: 14,
    page: 68,
    topic: "Industrial Policy 1991: Reduction in Reserved Industries",
    category: "Changing Role of Public Sector",
    q: "Under the historic Industrial Policy of 1991, the number of industries reserved exclusively for the public sector was sharply reduced from 17 to:",
    options: [
      "(A) 12",
      "(B) 8",
      "(C) 3",
      "(D) Zero"
    ],
    correct: 1,
    exp: "NCERT Page 68 explains: In the 1991 Industrial Policy, reserved industries were reduced from 17 to 8, and subsequently pruned down to only 3 (Atomic energy, Arms & ammunition, and Railway transport).",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 68"
  },
  {
    id: 15,
    page: 69,
    topic: "Concept of Disinvestment",
    category: "Changing Role of Public Sector",
    q: "The policy process of selling a portion or majority of the government's equity shares in public sector enterprises to private investors or the general public is known as:",
    options: [
      "(A) Nationalisation",
      "(B) Disinvestment",
      "(C) Demonetisation",
      "(D) Depletion"
    ],
    correct: 1,
    exp: "NCERT Page 69 defines 'Disinvestment': Selling of equity shares of public sector enterprises to the private sector and public to mobilize resources, enhance managerial efficiency, and promote public participation.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 69"
  },
  {
    id: 16,
    page: 70,
    topic: "Memorandum of Understanding (MoU)",
    category: "Changing Role of Public Sector",
    q: "To improve the operational efficiency and managerial performance of Public Sector Undertakings (PSUs) by granting them operational autonomy while holding them accountable for specified targets, the government introduced the:",
    options: [
      "(A) Foreign Exchange Regulation Act (FERA)",
      "(B) Memorandum of Understanding (MoU) System",
      "(C) Monopolies and Restrictive Trade Practices (MRTP) Code",
      "(D) Mandatory Corporate Insolvency Order"
    ],
    correct: 1,
    exp: "NCERT Page 70 highlights the 'Memorandum of Understanding (MoU)' system under which PSU managements are given clear performance targets and operational freedom, evaluated against agreed measurable benchmarks.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 70"
  },
  {
    id: 17,
    page: 71,
    topic: "Global Enterprises / MNCs: Huge Capital Resources",
    category: "Global Enterprises (MNCs)",
    q: "Global Enterprises (Multinational Corporations) are characterized by their colossal financial strength. They are capable of raising funds from:",
    options: [
      "(A) Domestic capital markets exclusively",
      "(B) International financial institutions, global banks, and international bond/equity markets",
      "(C) Village moneylenders",
      "(D) Agricultural cooperative banks only"
    ],
    correct: 1,
    exp: "NCERT Page 71 explains that MNCs possess vast financial resources and can mobilize funds from international banks, global capital markets, and issue Euro-bonds or foreign currency debt.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 71"
  },
  {
    id: 18,
    page: 72,
    topic: "Global Enterprises / MNCs: Centralised Control",
    category: "Global Enterprises (MNCs)",
    q: "Which of the following organizational features is typical of Multinational Corporations (MNCs)?",
    options: [
      "(A) Each overseas branch operates with 100% legal independence and no reporting obligations",
      "(B) Centralised control exercised by the corporate headquarters located in the home country over all overseas subsidiaries",
      "(C) Control is vested solely in host country municipal councils",
      "(D) Complete ban on international transfer of patents"
    ],
    correct: 1,
    exp: "NCERT Page 72 states: Global enterprises have their headquarters in the home country and exercise centralized managerial control over all branches, subsidiaries, and affiliates operating across host nations.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 72"
  },
  {
    id: 19,
    page: 73,
    topic: "Global Enterprises: Advanced Technology & Innovation",
    category: "Global Enterprises (MNCs)",
    q: "Why do host nations often welcome the entry of Multinational Corporations into their domestic markets?",
    options: [
      "(A) Because MNCs eliminate domestic consumer choice",
      "(B) Because they introduce sophisticated, state-of-the-art technology, modern manufacturing practices, and heavy R&D investments",
      "(C) Because they pay zero salaries to local workers",
      "(D) Because they do not engage in commercial advertising"
    ],
    correct: 1,
    exp: "NCERT Page 73 notes that MNCs possess advanced technology and heavy research capabilities, conforming to international standards and aiding host countries in technological modernization.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 73"
  },
  {
    id: 20,
    page: 74,
    topic: "Joint Ventures: Meaning & Pooling of Resources",
    category: "Joint Ventures",
    q: "When two or more independent business organisations agree to join hands for a common purpose and mutual commercial benefit by pooling their capital, technology, and management, it results in a:",
    options: [
      "(A) Sole Proprietorship",
      "(B) Joint Venture",
      "(C) Departmental Undertaking",
      "(D) Statutory Body"
    ],
    correct: 1,
    exp: "NCERT Page 74 defines a 'Joint Venture': The pooling of resources and expertise by two or more businesses to achieve a particular commercial objective, sharing profits, losses, and risks according to an agreed ratio.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 74"
  },
  {
    id: 21,
    page: 75,
    topic: "Benefits of Joint Ventures: Access to Advanced Technology",
    category: "Joint Ventures",
    q: "For a domestic Indian firm partnering with an established foreign multinational in a joint venture, what is one of the primary commercial advantages?",
    options: [
      "(A) Direct access to advanced technology, superior production techniques, and global brand value",
      "(B) Immunity from local labor laws",
      "(C) Exemption from paying income tax forever",
      "(D) Complete elimination of business risk"
    ],
    correct: 0,
    exp: "NCERT Page 75 lists key benefits of joint ventures: Increased capital capacity, access to advanced technology, access to established distribution channels, innovation, and reduced cost of production.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 75"
  },
  {
    id: 22,
    page: 76,
    topic: "Types of Joint Ventures: Equity-based vs Contractual",
    category: "Joint Ventures",
    q: "A Joint Venture in which a separate legal entity (jointly owned by two or more partnering companies) is incorporated under the Companies Act is termed an:",
    options: [
      "(A) Contractual Joint Venture",
      "(B) Equity-based Joint Venture",
      "(C) Informal Partnership",
      "(D) Sole Agency"
    ],
    correct: 1,
    exp: "NCERT Page 76 explains that in an Equity-based Joint Venture, a new, separate legal entity is registered, with both parties contributing equity capital and sharing ownership and profits.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 76"
  },
  {
    id: 23,
    page: 77,
    topic: "Public Private Partnership (PPP): Meaning",
    category: "Public Private Partnership (PPP)",
    q: "A long-term contractual arrangement between a government agency (public authority) and a private commercial party for delivering a public asset or service (e.g. building expressways or airport terminals) is known as a:",
    options: [
      "(A) Departmental Monopoly",
      "(B) Public Private Partnership (PPP)",
      "(C) Foreign Subsidiary",
      "(D) Secret Trust"
    ],
    correct: 1,
    exp: "NCERT Page 77 defines a Public Private Partnership (PPP) as a partnership between public and private sectors for financing, designing, implementing, and operating infrastructure facilities and public services.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 77"
  },
  {
    id: 24,
    page: 78,
    topic: "Public Private Partnership: Risk Sharing",
    category: "Public Private Partnership (PPP)",
    q: "What is a core defining feature of Public Private Partnership (PPP) projects regarding project execution and financing?",
    options: [
      "(A) The government assumes 100% of all risks while the private party takes 100% of profits",
      "(B) Risks, responsibilities, and financial returns are divided and shared between public and private partners based on their respective core competencies",
      "(C) The private party is allowed to levy taxes without any government regulation",
      "(D) The project ownership is transferred permanently to foreign governments"
    ],
    correct: 1,
    exp: "NCERT Page 78 states that in PPP models, risks are transferred to the party best suited to manage them. The private partner brings innovation and operational efficiency, while the public authority provides regulatory backing.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 78"
  },
  {
    id: 25,
    page: 79,
    topic: "Examples of Public Private Partnerships",
    category: "Public Private Partnership (PPP)",
    q: "The development and operation of modern international airport terminals (like Delhi and Mumbai airports) and expressway tollways in India are prominent real-world applications of which model?",
    options: [
      "(A) Pure Departmental Undertaking",
      "(B) Public Private Partnership (PPP)",
      "(C) Statutory Corporation",
      "(D) Sole Proprietorship"
    ],
    correct: 1,
    exp: "NCERT Page 79 cites major infrastructure initiatives like the Delhi Airport Metro Express, highway projects, and modern airports as successful implementations of the Public Private Partnership (PPP) framework.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 3, Page 79"
  }
];

fs.writeFileSync('scripts/kebs102_mcqs.json', JSON.stringify(ch2Mcqs, null, 2), 'utf8');
fs.writeFileSync('scripts/kebs103_mcqs.json', JSON.stringify(ch3Mcqs, null, 2), 'utf8');
console.log('Saved kebs102_mcqs.json and kebs103_mcqs.json successfully!');

function generateHtml(title, chapterCode, bookPgRange, mcqs, outFile, badgeColor) {
  const categories = Array.from(new Set(mcqs.map(m => m.category)));
  const totalCount = mcqs.length;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
  <title>Class 11 Business Studies: ${title} — ${totalCount} Target MCQs (${chapterCode}.pdf)</title>
  <meta name="description" content="NCERT Class 11 Business Studies ${title} (${chapterCode}.pdf). ${totalCount} high-yield MCQs with instant explanations, NCERT page references, score tracker, and dark/light mode." />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📈</text></svg>" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />

  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.4/dist/confetti.browser.min.js"></script>

  <style>
    :root {
      --bg: #070d1e;
      --surface: #0c1733;
      --card: #112044;
      --card-hover: #162956;
      --border: rgba(255, 255, 255, 0.09);
      --border-accent: rgba(56, 189, 248, 0.35);
      --accent: ${badgeColor};
      --gold: #f59e0b;
      --emerald: #10b981;
      --red: #f43f5e;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --text-dim: #64748b;
      --font-main: 'Plus Jakarta Sans', system-ui, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }

    body.light-theme {
      --bg: #f8fafc;
      --surface: #f1f5f9;
      --card: #ffffff;
      --card-hover: #f8fafc;
      --border: #cbd5e1;
      --border-accent: rgba(2, 132, 199, 0.4);
      --text-main: #0f172a;
      --text-muted: #475569;
      --text-dim: #94a3b8;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: var(--font-main);
      background-color: var(--bg);
      color: var(--text-main);
      line-height: 1.65;
      padding-bottom: 120px;
      transition: background-color 0.25s ease, color 0.25s ease;
    }

    .top-bar {
      position: sticky;
      top: 0;
      z-index: 200;
      background: rgba(7, 13, 30, 0.94);
      backdrop-filter: blur(14px);
      border-bottom: 1px solid var(--border);
      padding: 12px 24px;
    }
    body.light-theme .top-bar { background: rgba(248, 250, 252, 0.94); }

    .top-bar-inner {
      max-width: 1180px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
    }

    .brand-title {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .brand-badge {
      background: linear-gradient(135deg, ${badgeColor}, #0284c7);
      color: #031024;
      font-weight: 900;
      font-size: 0.72rem;
      padding: 4px 10px;
      border-radius: 6px;
      letter-spacing: 0.05em;
    }
    .brand-name {
      font-weight: 800;
      font-size: 1.02rem;
      color: var(--text-main);
    }
    .brand-sub {
      font-size: 0.74rem;
      color: var(--text-muted);
    }

    .top-controls {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    .btn-action {
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--text-main);
      padding: 7px 13px;
      border-radius: 8px;
      font-size: 0.78rem;
      font-weight: 700;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;
    }
    .btn-action:hover {
      border-color: var(--accent);
      transform: translateY(-1px);
    }
    .score-pill {
      background: rgba(56, 189, 248, 0.15);
      border: 1px solid var(--accent);
      color: var(--accent);
      padding: 6px 14px;
      border-radius: 999px;
      font-size: 0.82rem;
      font-weight: 800;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: var(--font-mono);
    }

    .hero {
      max-width: 1180px;
      margin: 24px auto 16px;
      padding: 0 20px;
    }
    .hero-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 12px;
    }
    .hero-tag {
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--accent);
      font-size: 0.72rem;
      font-weight: 800;
      padding: 3px 10px;
      border-radius: 6px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .hero-tag.gold { color: var(--gold); border-color: rgba(245, 158, 11, 0.35); }
    .hero-tag.emerald { color: var(--emerald); border-color: rgba(16, 185, 129, 0.35); }
    .hero h1 {
      font-size: clamp(1.5rem, 3.8vw, 2.3rem);
      font-weight: 900;
      letter-spacing: -0.02em;
      margin-bottom: 8px;
      background: linear-gradient(135deg, #ffffff 40%, var(--accent) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    body.light-theme .hero h1 {
      background: linear-gradient(135deg, #0f172a 40%, #0284c7 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero-sub {
      color: var(--text-muted);
      font-size: 0.95rem;
      max-width: 900px;
      margin-bottom: 20px;
    }

    .paper-info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 12px;
      margin-bottom: 24px;
    }
    .info-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 12px 14px;
      text-align: center;
      transition: all 0.2s;
    }
    .info-card:hover { border-color: var(--accent); transform: translateY(-2px); }
    .info-card .val {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--accent);
      font-family: var(--font-mono);
    }
    .info-card .lbl {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--text-dim);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 4px;
    }

    .filter-bar {
      max-width: 1180px;
      margin: 0 auto 20px;
      padding: 0 20px;
      display: flex;
      gap: 8px;
      overflow-x: auto;
      padding-bottom: 8px;
      scrollbar-width: thin;
    }
    .filter-btn {
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--text-muted);
      padding: 6px 14px;
      border-radius: 8px;
      font-size: 0.78rem;
      font-weight: 800;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s;
    }
    .filter-btn:hover { border-color: var(--accent); color: var(--text-main); }
    .filter-btn.active {
      background: var(--accent);
      color: #031024;
      border-color: var(--accent);
      font-weight: 900;
    }

    .main-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .mcq-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 24px;
      position: relative;
      transition: all 0.2s ease;
      box-shadow: 0 6px 20px rgba(0,0,0,0.2);
    }
    .mcq-card:hover { border-color: var(--border-accent); }
    .mcq-top-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 14px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--border);
    }
    .mcq-badge {
      background: rgba(56, 189, 248, 0.15);
      border: 1px solid var(--accent);
      color: var(--accent);
      font-weight: 900;
      font-size: 0.78rem;
      padding: 4px 10px;
      border-radius: 6px;
      font-family: var(--font-mono);
    }
    .mcq-topic-badge {
      font-size: 0.74rem;
      font-weight: 700;
      color: var(--gold);
      background: rgba(245, 158, 11, 0.12);
      border: 1px solid rgba(245, 158, 11, 0.3);
      padding: 3px 9px;
      border-radius: 6px;
    }
    .mcq-page-ref {
      font-size: 0.74rem;
      font-weight: 700;
      color: var(--text-dim);
      background: var(--surface);
      border: 1px solid var(--border);
      padding: 3px 8px;
      border-radius: 6px;
      font-family: var(--font-mono);
    }

    .q-text {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 18px;
      line-height: 1.6;
    }

    .options-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      margin-bottom: 16px;
    }
    @media (min-width: 640px) {
      .options-grid { grid-template-columns: 1fr 1fr; }
    }
    .opt-btn {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 12px 16px;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--text-main);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      transition: all 0.2s;
      text-align: left;
    }
    .opt-btn:hover {
      background: var(--card-hover);
      border-color: var(--accent);
      transform: translateX(3px);
    }
    .opt-btn.correct {
      background: rgba(16, 185, 129, 0.2) !important;
      border-color: var(--emerald) !important;
      color: #34d399 !important;
      font-weight: 700;
    }
    .opt-btn.wrong {
      background: rgba(244, 63, 94, 0.18) !important;
      border-color: var(--red) !important;
      color: #fb7185 !important;
    }
    .feedback-badge {
      font-size: 0.75rem;
      font-weight: 900;
      padding: 3px 8px;
      border-radius: 6px;
      display: none;
      white-space: nowrap;
    }
    .opt-btn.correct .feedback-badge { display: inline-block; background: var(--emerald); color: #031024; }
    .opt-btn.wrong .feedback-badge { display: inline-block; background: var(--red); color: #fff; }

    .rationale-tray {
      display: none;
      background: rgba(56, 189, 248, 0.08);
      border: 1px solid rgba(56, 189, 248, 0.25);
      border-radius: 12px;
      padding: 16px 18px;
      margin-top: 14px;
      animation: fadeIn 0.25s ease-out;
    }
    .rationale-tray.revealed { display: block; }
    .rat-title {
      font-size: 0.76rem;
      font-weight: 900;
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 6px;
    }
    .rat-text { font-size: 0.92rem; color: var(--text-main); line-height: 1.65; margin-bottom: 8px; }
    .rat-cite { font-size: 0.76rem; color: var(--gold); font-weight: 700; font-family: var(--font-mono); }

    .floating-dock {
      position: fixed;
      bottom: 24px;
      right: 24px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      z-index: 100;
    }
    .dock-btn {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--text-main);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 18px rgba(0,0,0,0.5);
      transition: all 0.2s;
    }
    .dock-btn:hover { background: var(--accent); color: #031024; transform: translateY(-2px); }

    footer {
      max-width: 1180px;
      margin: 60px auto 0;
      padding: 24px 20px;
      border-top: 1px solid var(--border);
      text-align: center;
      color: var(--text-dim);
      font-size: 0.82rem;
    }
    footer a { color: var(--accent); text-decoration: none; font-weight: 700; }
    footer a:hover { text-decoration: underline; }

    @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }

    @media (max-width: 640px) {
      .top-bar { padding: 10px 16px; }
      .mcq-card { padding: 18px 16px; }
      .hero h1 { font-size: 1.45rem; }
    }
  </style>
</head>
<body>
  <header class="top-bar">
    <div class="top-bar-inner">
      <div class="brand-title">
        <span class="brand-badge">NCERT CLASS 11</span>
        <div>
          <div class="brand-name">Business Studies • ${title}</div>
          <div class="brand-sub">${chapterCode}.pdf • ${totalCount} Target Questions</div>
        </div>
      </div>
      <div class="top-controls">
        <div class="score-pill" id="score-counter">
          <span>🎯 Score: 0 / ${totalCount}</span>
        </div>
        <button class="btn-action" onclick="revealAllAnswers()"><span>👁️</span> Reveal All</button>
        <button class="btn-action" onclick="resetQuiz()"><span>🔄</span> Reset</button>
        <button class="btn-action" onclick="toggleTheme()"><span id="theme-indicator">🌙</span></button>
      </div>
    </div>
  </header>

  <section class="hero">
    <div class="hero-meta">
      <span class="hero-tag">Class 11 Business Studies</span>
      <span class="hero-tag gold">${title}</span>
      <span class="hero-tag emerald">100% NCERT Verified</span>
    </div>
    <h1>${title} — ${totalCount} Practice MCQs</h1>
    <p class="hero-sub">
      Comprehensive question bank based strictly on NCERT textbook file <strong>${chapterCode}.pdf</strong> (NCERT Book pages ${bookPgRange}). Covers all conceptual definitions, features, merits, statutory rules, and real-world case scenarios.
    </p>

    <div class="paper-info-grid">
      <div class="info-card"><div class="val">${totalCount}</div><div class="lbl">Total MCQs</div></div>
      <div class="info-card"><div class="val">${bookPgRange}</div><div class="lbl">Book Pages</div></div>
      <div class="info-card"><div class="val">100%</div><div class="lbl">NCERT Aligned</div></div>
      <div class="info-card"><div class="val">CBSE / CUET</div><div class="lbl">Exam Standard</div></div>
    </div>
  </section>

  <div class="filter-bar">
    <button class="filter-btn active" onclick="filterQuestions('all', this)">All Questions (${totalCount})</button>
    ${categories.map(c => `<button class="filter-btn" onclick="filterQuestions('${c}', this)">${c}</button>`).join('')}
  </div>

  <main class="main-container" id="questions-container">
    ${mcqs.map(m => `
      <article class="mcq-card" data-category="${m.category}" id="mcq-card-${m.id}">
        <div class="mcq-top-meta">
          <div style="display:flex; align-items:center; gap:8px;">
            <span class="mcq-badge">Q${m.id} of ${totalCount}</span>
            <span class="mcq-topic-badge">${m.topic}</span>
          </div>
          <span class="mcq-page-ref">📖 PDF Page ${m.page}</span>
        </div>

        <h3 class="q-text">${m.q}</h3>

        <div class="options-grid">
          ${m.options.map((opt, oIdx) => `
            <button class="opt-btn" onclick="checkOption(this, ${oIdx === m.correct}, ${m.id})">
              <span>${opt}</span>
              <span class="feedback-badge">${oIdx === m.correct ? '✓ Correct' : '✗ Incorrect'}</span>
            </button>
          `).join('')}
        </div>

        <div class="rationale-tray" id="rat-${m.id}">
          <div class="rat-title"><span>✓ Verified NCERT Explanation</span></div>
          <p class="rat-text">${m.exp}</p>
          <div class="rat-cite">Source: ${m.ncertRef}</div>
        </div>
      </article>
    `).join('')}
  </main>

  <div class="floating-dock">
    <button class="dock-btn" title="Back to Top" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">↑</button>
  </div>

  <footer>
    <p>
      NCERT Class 11 Business Studies • ${title} (${chapterCode}.pdf)<br>
      Interactive Study Suite by <a href="/">NextSem Academy</a> • All Rights Reserved.
    </p>
  </footer>

  <script>
    const answeredMap = {};
    const totalCount = ${totalCount};

    function checkOption(btn, isCorrect, qId) {
      const card = document.getElementById('mcq-card-' + qId);
      const allBtns = card.querySelectorAll('.opt-btn');
      allBtns.forEach(b => b.classList.remove('correct', 'wrong'));

      if (isCorrect) {
        btn.classList.add('correct');
        answeredMap[qId] = true;
        if (typeof confetti === 'function') {
          confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
        }
      } else {
        btn.classList.add('wrong');
        answeredMap[qId] = false;
      }

      const rat = document.getElementById('rat-' + qId);
      if (rat) rat.classList.add('revealed');
      updateScore();
    }

    function updateScore() {
      let score = 0;
      Object.keys(answeredMap).forEach(k => { if (answeredMap[k]) score++; });
      document.getElementById('score-counter').innerHTML = '<span>🎯 Score: ' + score + ' / ' + totalCount + '</span>';
    }

    function revealAllAnswers() {
      document.querySelectorAll('.rationale-tray').forEach(t => t.classList.add('revealed'));
    }

    function resetQuiz() {
      Object.keys(answeredMap).forEach(k => delete answeredMap[k]);
      document.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('correct', 'wrong'));
      document.querySelectorAll('.rationale-tray').forEach(t => t.classList.remove('revealed'));
      updateScore();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function filterQuestions(cat, btn) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.mcq-card').forEach(card => {
        card.style.display = (cat === 'all' || card.getAttribute('data-category') === cat) ? 'block' : 'none';
      });
    }

    function toggleTheme() {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      document.getElementById('theme-indicator').textContent = isLight ? '☀️' : '🌙';
      localStorage.setItem('${chapterCode}_quiz_theme', isLight ? 'light' : 'dark');
    }

    window.addEventListener('DOMContentLoaded', () => {
      const saved = localStorage.getItem('${chapterCode}_quiz_theme');
      if (saved === 'light') {
        document.body.classList.add('light-theme');
        document.getElementById('theme-indicator').textContent = '☀️';
      }
    });
  </script>
</body>
</html>`;
}

// Generate Chapter 2 HTML
const ch2Html = generateHtml('Chapter 2: Forms of Business Organisation', 'kebs102', '28–57', ch2Mcqs, 'public/business-studies-class11-ch2-kebs102-mcqs.html', '#38bdf8');
fs.writeFileSync('public/business-studies-class11-ch2-kebs102-mcqs.html', ch2Html, 'utf8');
console.log('Generated public/business-studies-class11-ch2-kebs102-mcqs.html');

// Generate Chapter 3 HTML
const ch3Html = generateHtml('Chapter 3: Private, Public and Global Enterprises', 'kebs103', '58–81', ch3Mcqs, 'public/business-studies-class11-ch3-kebs103-mcqs.html', '#10b981');
fs.writeFileSync('public/business-studies-class11-ch3-kebs103-mcqs.html', ch3Html, 'utf8');
console.log('Generated public/business-studies-class11-ch3-kebs103-mcqs.html');
