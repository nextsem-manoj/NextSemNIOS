const fs = require('fs');

const mcqs = [
  {
    id: 1,
    page: 3,
    topic: "History of Trade & Indigenous Banking",
    topicCategory: "Ancient Trade & Hundis",
    q: "In ancient and medieval India, which credit instrument was widely used by merchant communities for carrying out transactions involving transfer of money from one person or place to another without physical movement of cash?",
    options: [
      "(A) Hundi and Chitti",
      "(B) Modern Crossed Cheque",
      "(C) Bill of Lading",
      "(D) Reserve Bank Promissory Note"
    ],
    correct: 0,
    exp: "According to NCERT Chapter 1 (Page 3-4), Hundi and Chitti were indigenous credit instruments used in ancient India. The word 'Hundi' is derived from the Sanskrit word meaning 'to collect'. It was a contract warranting payment of money, capable of being negotiated by endorsement.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 3 & 4"
  },
  {
    id: 2,
    page: 4,
    topic: "Types of Hundis (Jokhmi Hundi)",
    topicCategory: "Ancient Trade & Hundis",
    q: "Which specific type of ancient Hundi was drawn against dispatched goods, where if the goods were lost in transit due to shipwreck or perils of the sea, the drawer or holder bore the loss, functioning as an early form of marine insurance?",
    options: [
      "(A) Dhani-jog Hundi",
      "(B) Sah-jog Hundi",
      "(C) Jokhmi Hundi",
      "(D) Firman-jog Hundi"
    ],
    correct: 2,
    exp: "NCERT Table 1.1 (Page 5) classifies 'Jokhmi Hundi' as a Muddati Hundi drawn against dispatched goods. If goods were lost in transit, the drawer/holder absorbed the financial loss, effectively acting as an indigenous marine insurance contract.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 5 (Table 1.1)"
  },
  {
    id: 3,
    page: 5,
    topic: "Merchant Guilds & Municipal Leadership",
    topicCategory: "Ancient Trade & Hundis",
    q: "In ancient and medieval Indian trading cities, the supreme head of the merchant guilds (Mahajans) who exercised substantial influence over civic, commercial, and municipal administration was known as:",
    options: [
      "(A) Nagarseth",
      "(B) Jagat Seth",
      "(C) Kotwal",
      "(D) Subahdar"
    ],
    correct: 0,
    exp: "NCERT Chapter 1 (Page 5) notes that in western India and major trading towns, the merchant corporations were led by an influential community chief designated as 'Nagarseth' who dealt directly with state kings and tax collectors.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 5"
  },
  {
    id: 4,
    page: 6,
    topic: "Major Ancient Trade Centres (Peshawar)",
    topicCategory: "Ancient Trade & Hundis",
    q: "Which ancient Indian trade centre was an important exporting hub for wool and importing hub for war horses, and played a major role in commercial transactions connecting India, China, and Rome in the 1st century A.D.?",
    options: [
      "(A) Taxila",
      "(B) Peshawar",
      "(C) Indraprastha",
      "(D) Mathura"
    ],
    correct: 1,
    exp: "According to NCERT Chapter 1 (Page 6), Peshawar was an important commercial centre for the export of fine wool and the import of horses. It had a massive share in transactions between India, China, and Rome in the 1st century A.D.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 6"
  },
  {
    id: 5,
    page: 7,
    topic: "De-industrialisation under British Rule",
    topicCategory: "Trade History & Colonial Impact",
    q: "What fundamental structural change occurred in the Indian economy with the political consolidation of the British East India Company?",
    options: [
      "(A) India transformed from an importer of primary materials into an exporter of machinery",
      "(B) India was transformed from an exporter of processed manufactured goods into an exporter of raw materials and buyer of British factory goods",
      "(C) India became a self-sufficient socialist agrarian collective",
      "(D) India established exclusive trading monopolies across East Asia"
    ],
    correct: 1,
    exp: "NCERT Page 7 explains that the British used Indian revenues to purchase raw materials and spices, shifting India from an exporter of processed manufactured goods into an exporter of raw materials and an open consumer market for British manufactured goods.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 7"
  },
  {
    id: 6,
    page: 8,
    topic: "Modern Industrial Initiatives (Make in India)",
    topicCategory: "Trade History & Colonial Impact",
    q: "Which prominent national campaign launched by the Government of India in September 2014 was specifically designed to encourage domestic and global companies to manufacture goods in India and transform the nation into a global manufacturing hub?",
    options: [
      "(A) Startup India",
      "(B) Make in India",
      "(C) Digital India",
      "(D) Standup India"
    ],
    correct: 1,
    exp: "NCERT Chapter 1 (Page 8) highlights 'Make in India', launched in September 2014, as a major flagship initiative designed to encourage investment, foster innovation, build best-in-class manufacturing infrastructure, and make India a global manufacturing powerhouse.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 8"
  },
  {
    id: 7,
    page: 9,
    topic: "Concept of Economic Activities",
    topicCategory: "Nature & Purpose of Business",
    q: "Human activities are divided into economic and non-economic activities. An activity is classified as an 'Economic Activity' when it is undertaken:",
    options: [
      "(A) Purely out of religious devotion, affection, or family sympathy",
      "(B) With the primary objective of earning money or a livelihood",
      "(C) Without any expectation of financial or material reward",
      "(D) Exclusively during national festivals and public holidays"
    ],
    correct: 1,
    exp: "NCERT Page 9 defines economic activities as those by which we can earn our livelihood (e.g., a worker in a factory, a doctor in a clinic, a manager in an enterprise). Non-economic activities are motivated by love, sympathy, patriotism, etc.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 9"
  },
  {
    id: 8,
    page: 10,
    topic: "Characteristics of Business: Regularity in Dealings",
    topicCategory: "Nature & Purpose of Business",
    q: "Kunal sold his personal used motorbike to his neighbour at a profit of ₹8,000 to purchase a new sports bike. Why is this transaction NOT considered a 'Business'?",
    options: [
      "(A) Because no profit was earned",
      "(B) Because it involved transfer of a second-hand good",
      "(C) Because business involves regularity in dealings; an isolated single transaction does not constitute business",
      "(D) Because motorbikes cannot legally be traded by individuals"
    ],
    correct: 2,
    exp: "NCERT Page 10 emphasizes 'Regularity in Dealings': Business involves dealings in goods or services on a recurring, regular basis. A single isolated transaction of sale or purchase (e.g., selling one's personal vehicle or furniture) is not a business.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 10"
  },
  {
    id: 9,
    page: 11,
    topic: "Uncertainty of Return & Element of Risk",
    topicCategory: "Nature & Purpose of Business",
    q: "Which essential feature of business refers to the inability to predict or guarantee the exact amount of profit that an enterprise will make during a future period?",
    options: [
      "(A) Regularity of exchange",
      "(B) Profit motive",
      "(C) Uncertainty of return",
      "(D) Legal continuity"
    ],
    correct: 2,
    exp: "NCERT Page 11 states that 'Uncertainty of return' refers to the lack of certainty regarding how much profit the business will make. There is always the possibility of losses being incurred despite the best managerial efforts.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 11"
  },
  {
    id: 10,
    page: 12,
    topic: "Comparison: Transfer of Interest",
    topicCategory: "Business, Profession & Employment",
    q: "In which of the following economic activities is the 'Transfer of Interest' possible with some procedural formalities?",
    options: [
      "(A) Business",
      "(B) Profession",
      "(C) Employment",
      "(D) Both Profession and Employment"
    ],
    correct: 0,
    exp: "NCERT Table 1.1 (Page 12) points out that in a business, transfer of interest is possible with some formalities (e.g., transferring company shares or selling ownership). In a profession or employment, transfer of personal qualification or employment contract is not possible.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 12 (Table 1.1)"
  },
  {
    id: 11,
    page: 12,
    topic: "Professional Regulatory Code of Conduct",
    topicCategory: "Business, Profession & Employment",
    q: "Which of the following characteristics strictly applies to a 'Profession' but NOT necessarily to an ordinary trading business?",
    options: [
      "(A) Freedom to operate without any formal educational qualifications",
      "(B) Mandatory adherence to an ethical code of conduct laid down by a professional body",
      "(C) Complete absence of financial investment",
      "(D) Unlimited transferability of ownership rights"
    ],
    correct: 1,
    exp: "NCERT Table 1.1 (Page 12) states that professionals (such as doctors, lawyers, and chartered accountants) must strictly follow a prescribed ethical code of conduct established by their statutory regulatory bodies.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 12"
  },
  {
    id: 12,
    page: 13,
    topic: "Primary Industry: Genetic Industry",
    topicCategory: "Industry & Classification",
    q: "Industries engaged in the breeding and reproduction of plants and animals for further multiplication and sale (e.g., cattle breeding farms, nurseries, and poultry farms) are classified as:",
    options: [
      "(A) Extractive Industries",
      "(B) Genetic Industries",
      "(C) Manufacturing Industries",
      "(D) Assembling Industries"
    ],
    correct: 1,
    exp: "NCERT Page 13 explicitly defines 'Genetic Industries' as those engaged in breeding plants and animals for their use in further reproduction. Examples include nurseries, cattle farms, poultry farms, and fish hatcheries.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 13"
  },
  {
    id: 13,
    page: 13,
    topic: "Primary Industry: Extractive Industry",
    topicCategory: "Industry & Classification",
    q: "Which classification of industry is concerned with drawing out or collecting useful raw materials directly from natural reservoirs like the earth, sea, or air?",
    options: [
      "(A) Extractive Industry",
      "(B) Synthetical Industry",
      "(C) Assembling Industry",
      "(D) Processing Industry"
    ],
    correct: 0,
    exp: "NCERT Page 13 notes that 'Extractive Industries' extract or draw products from natural sources like soil, air, or water (e.g., farming, mining, hunting, and fishing operations).",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 13"
  },
  {
    id: 14,
    page: 14,
    topic: "Manufacturing Industry: Analytical Industry",
    topicCategory: "Industry & Classification",
    q: "An oil refinery plant that separates and breaks down crude petroleum into different distinct products such as gasoline (petrol), diesel, kerosene, and lubricating oil is an example of an:",
    options: [
      "(A) Analytical Industry",
      "(B) Synthetical Industry",
      "(C) Assembling Industry",
      "(D) Construction Industry"
    ],
    correct: 0,
    exp: "NCERT Page 14 defines an 'Analytical Industry' as one which separates and analyzes different basic elements from the same raw material, as in the case of an oil refinery.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 14"
  },
  {
    id: 15,
    page: 14,
    topic: "Manufacturing Industry: Assembling Industry",
    topicCategory: "Industry & Classification",
    q: "An industrial plant that brings together different manufactured component parts to produce a new finished product, such as a television set, automobile, or computer, is termed an:",
    options: [
      "(A) Processing Industry",
      "(B) Assembling Industry",
      "(C) Synthetical Industry",
      "(D) Extractive Industry"
    ],
    correct: 1,
    exp: "NCERT Page 14 defines an 'Assembling Industry' as one that assembles various finished component parts to produce a new finished product (e.g., cars, TVs, computers). Synthetical industries combine ingredients like chemicals to make cement.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 14"
  },
  {
    id: 16,
    page: 15,
    topic: "Components of Commerce",
    topicCategory: "Commerce & Auxiliaries to Trade",
    q: "Commerce comprises all those activities that facilitate the exchange of goods and services. What are the two broad components into which Commerce is divided?",
    options: [
      "(A) Wholesale and Retail",
      "(B) Industry and Agriculture",
      "(C) Trade and Auxiliaries to Trade",
      "(D) Import and Export"
    ],
    correct: 2,
    exp: "NCERT Page 15 states that Commerce includes two broad types of activities: (1) Trade (actual buying and selling) and (2) Auxiliaries to Trade (support activities assisting the trade process).",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 15"
  },
  {
    id: 17,
    page: 16,
    topic: "Hindrance of Place (Transport)",
    topicCategory: "Commerce & Auxiliaries to Trade",
    q: "Goods are manufactured in specific geographic centres (e.g., tea in Assam, cotton textiles in Gujarat), but demanded across the entire country. Which auxiliary to trade overcomes this 'Hindrance of Place'?",
    options: [
      "(A) Warehousing",
      "(B) Transport and Communication",
      "(C) Insurance",
      "(D) Banking"
    ],
    correct: 1,
    exp: "NCERT Page 16 explains that 'Transport' moves goods from the place of production to the point of consumption, thereby removing the hindrance of place.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 16"
  },
  {
    id: 18,
    page: 16,
    topic: "Hindrance of Time (Warehousing)",
    topicCategory: "Commerce & Auxiliaries to Trade",
    q: "Agricultural commodities like wheat, paddy, and sugar are produced seasonally but consumed round the year. Which auxiliary to trade overcomes this 'Hindrance of Time'?",
    options: [
      "(A) Advertising",
      "(B) Warehousing",
      "(C) Insurance",
      "(D) Transport"
    ],
    correct: 1,
    exp: "NCERT Page 16-17 states that 'Warehousing' provides storage facilities, preserving goods securely until demand arises and thereby overcoming the hindrance of time.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 16-17"
  },
  {
    id: 19,
    page: 17,
    topic: "Hindrance of Risk (Insurance)",
    topicCategory: "Commerce & Auxiliaries to Trade",
    q: "Business entities face constant exposure to financial loss from fire, theft, floods, or transit accidents. Which auxiliary to trade removes the 'Hindrance of Risk' by compensating for covered losses?",
    options: [
      "(A) Insurance",
      "(B) Advertising",
      "(C) Banking",
      "(D) Factoring"
    ],
    correct: 0,
    exp: "NCERT Page 17 explains that 'Insurance' provides protection against risks of loss or damage to goods during storage or transit upon payment of a nominal premium, removing the hindrance of risk.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 17"
  },
  {
    id: 20,
    page: 18,
    topic: "Role of Profit in Business",
    topicCategory: "Business Objectives & Profit Role",
    q: "Profit is an indispensable objective of every business enterprise because:",
    options: [
      "(A) It is the legitimate reward for bearing business risks",
      "(B) It serves as a vital internal source of funds for growth and expansion",
      "(C) It provides an objective index of managerial efficiency and builds market reputation",
      "(D) All of the above"
    ],
    correct: 3,
    exp: "NCERT Page 18 lists multiple justifications for profit: livelihood for the entrepreneur, reward for risk-taking, source of internal finance for expansion, and an index of performance and prestige.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 18"
  },
  {
    id: 21,
    page: 19,
    topic: "Innovation as a Business Objective",
    topicCategory: "Business Objectives & Profit Role",
    q: "Introducing a newly patented lightweight solar battery for smartphones or implementing automated inventory tracking in a warehouse are practical examples of which major business objective?",
    options: [
      "(A) Market standing",
      "(B) Innovation",
      "(C) Worker performance",
      "(D) Public procurement"
    ],
    correct: 1,
    exp: "NCERT Page 19 highlights 'Innovation' as an essential business objective: developing new products or introducing novel methods in production, marketing, and distribution to maintain competitive advantage.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 19"
  },
  {
    id: 22,
    page: 20,
    topic: "Speculative Risk vs Pure Risk",
    topicCategory: "Business Risks & Causes",
    q: "Which of the following is an example of a 'Speculative Risk' in business?",
    options: [
      "(A) Loss caused by a fire in the factory warehouse",
      "(B) Theft of raw materials by miscreants",
      "(C) Fluctuation in market demand due to changes in consumer tastes and fashion",
      "(D) Plant shutdown due to an accidental boiler explosion"
    ],
    correct: 2,
    exp: "NCERT Page 20 explains that 'Speculative risks' involve both the possibility of gain as well as loss (e.g., changes in prices, fashion, or competition). Pure risks (fire, theft, strike) involve only the possibility of loss or no loss.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 20"
  },
  {
    id: 23,
    page: 21,
    topic: "Causes of Business Risk: Human Causes",
    topicCategory: "Business Risks & Causes",
    q: "Financial losses resulting from employee dishonesty, fraud, pilferage, carelessness, or sudden labor strikes are classified under which category of business risk causes?",
    options: [
      "(A) Natural Causes",
      "(B) Human Causes",
      "(C) Economic Causes",
      "(D) Physical Causes"
    ],
    correct: 1,
    exp: "NCERT Page 21 categorizes business risks into Natural, Human, Economic, and Other causes. 'Human causes' arise from human behavior, such as employee dishonesty, carelessness, riots, or strikes.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 21"
  },
  {
    id: 24,
    page: 22,
    topic: "Starting a Business: Selection of Line",
    topicCategory: "Starting a Business Enterprise",
    q: "What is the very first and most fundamental decision an entrepreneur must make before initiating any steps to launch a new business enterprise?",
    options: [
      "(A) Selection of the line of business",
      "(B) Designing the office visiting cards",
      "(C) Arranging bank loans for working capital",
      "(D) Choosing the colour scheme of the factory wall"
    ],
    correct: 0,
    exp: "NCERT Page 22 states that the first decision is the 'Selection of line of business': deciding the nature and type of goods and services to produce or trade based on market demand, technical know-how, and profit prospects.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 22"
  },
  {
    id: 25,
    page: 23,
    topic: "Plant Layout & Physical Facilities",
    topicCategory: "Starting a Business Enterprise",
    q: "The physical design and systematic spatial arrangement of machinery, equipment, work stations, and material handling facilities within a manufacturing factory is referred to as:",
    options: [
      "(A) Line of business",
      "(B) Plant layout",
      "(C) Tax planning",
      "(D) Form of ownership"
    ],
    correct: 1,
    exp: "NCERT Page 23 defines 'Plant layout' as the drawing or physical arrangement showing the layout of machines, equipment, and workstations to ensure the smoothest flow of materials and maximum operational efficiency.",
    ncertRef: "NCERT Class 11 Business Studies, Chapter 1, Page 23"
  }
];

fs.writeFileSync('scripts/kebs101_mcqs.json', JSON.stringify(mcqs, null, 2), 'utf8');
console.log('Successfully saved 25 MCQs to scripts/kebs101_mcqs.json');

// Generate the interactive HTML page
const categories = Array.from(new Set(mcqs.map(m => m.topicCategory)));

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
  <title>Class 11 Business Studies Ch 1: Business, Trade and Commerce — 25 Target MCQs (kebs101.pdf)</title>
  <meta name="description" content="NCERT Class 11 Business Studies Chapter 1: Business, Trade and Commerce (kebs101.pdf). Complete 25 high-yield MCQs covering every concept with instant explanations, NCERT page references, and score tracker." />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📊</text></svg>" />

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
      --cyan: #38bdf8;
      --cyan-glow: rgba(56, 189, 248, 0.2);
      --gold: #f59e0b;
      --gold-glow: rgba(245, 158, 11, 0.2);
      --emerald: #10b981;
      --emerald-glow: rgba(16, 185, 129, 0.2);
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
      --cyan: #0284c7;
      --cyan-glow: rgba(2, 132, 199, 0.15);
      --gold: #d97706;
      --gold-glow: rgba(217, 119, 6, 0.15);
      --emerald: #059669;
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

    /* Top Sticky Header */
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
      background: linear-gradient(135deg, #38bdf8, #0284c7);
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
      border-color: var(--cyan);
      transform: translateY(-1px);
    }
    .score-pill {
      background: rgba(56, 189, 248, 0.15);
      border: 1px solid var(--cyan);
      color: var(--cyan);
      padding: 6px 14px;
      border-radius: 999px;
      font-size: 0.82rem;
      font-weight: 800;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: var(--font-mono);
    }

    /* Hero Banner */
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
      color: var(--cyan);
      font-size: 0.72rem;
      font-weight: 800;
      padding: 3px 10px;
      border-radius: 6px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .hero-tag.gold {
      color: var(--gold);
      border-color: rgba(245, 158, 11, 0.35);
    }
    .hero-tag.emerald {
      color: var(--emerald);
      border-color: rgba(16, 185, 129, 0.35);
    }
    .hero h1 {
      font-size: clamp(1.5rem, 3.8vw, 2.3rem);
      font-weight: 900;
      letter-spacing: -0.02em;
      margin-bottom: 8px;
      background: linear-gradient(135deg, #ffffff 40%, var(--cyan) 100%);
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

    /* Stats Grid */
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
    .info-card:hover {
      border-color: var(--cyan);
      transform: translateY(-2px);
    }
    .info-card .val {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--cyan);
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

    /* Category Filter Bar */
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
    .filter-btn:hover {
      border-color: var(--cyan);
      color: var(--text-main);
    }
    .filter-btn.active {
      background: var(--cyan);
      color: #031024;
      border-color: var(--cyan);
      font-weight: 900;
    }

    /* Main Container */
    .main-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    /* Question Card */
    .mcq-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 24px;
      position: relative;
      transition: all 0.2s ease;
      box-shadow: 0 6px 20px rgba(0,0,0,0.2);
    }
    .mcq-card:hover {
      border-color: var(--border-accent);
    }
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
      border: 1px solid var(--cyan);
      color: var(--cyan);
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
      border-color: var(--cyan);
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
    .opt-btn.correct .feedback-badge {
      display: inline-block;
      background: var(--emerald);
      color: #031024;
    }
    .opt-btn.wrong .feedback-badge {
      display: inline-block;
      background: var(--red);
      color: #fff;
    }

    /* Rationale Tray */
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
      color: var(--cyan);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .rat-text {
      font-size: 0.92rem;
      color: var(--text-main);
      line-height: 1.65;
      margin-bottom: 8px;
    }
    .rat-cite {
      font-size: 0.76rem;
      color: var(--gold);
      font-weight: 700;
      font-family: var(--font-mono);
    }

    /* Floating Navigation Dock */
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
    .dock-btn:hover {
      background: var(--cyan);
      color: #031024;
      transform: translateY(-2px);
    }

    /* Footer */
    footer {
      max-width: 1180px;
      margin: 60px auto 0;
      padding: 24px 20px;
      border-top: 1px solid var(--border);
      text-align: center;
      color: var(--text-dim);
      font-size: 0.82rem;
    }
    footer a { color: var(--cyan); text-decoration: none; font-weight: 700; }
    footer a:hover { text-decoration: underline; }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(4px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 640px) {
      .top-bar { padding: 10px 16px; }
      .mcq-card { padding: 18px 16px; }
      .hero h1 { font-size: 1.45rem; }
    }
  </style>
</head>
<body>

  <!-- Top Sticky Header -->
  <header class="top-bar">
    <div class="top-bar-inner">
      <div class="brand-title">
        <span class="brand-badge">NCERT CLASS 11</span>
        <div>
          <div class="brand-name">Business Studies • Chapter 1: Business, Trade and Commerce</div>
          <div class="brand-sub">kebs101.pdf • 25 Target Multiple Choice Questions</div>
        </div>
      </div>
      <div class="top-controls">
        <div class="score-pill" id="score-counter">
          <span>🎯 Score: 0 / 25</span>
        </div>
        <button class="btn-action" onclick="revealAllAnswers()">
          <span>👁️</span> Reveal All
        </button>
        <button class="btn-action" onclick="resetQuiz()">
          <span>🔄</span> Reset
        </button>
        <button class="btn-action" onclick="toggleTheme()">
          <span id="theme-indicator">🌙</span>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Banner -->
  <section class="hero">
    <div class="hero-meta">
      <span class="hero-tag">Part I • Foundations of Business</span>
      <span class="hero-tag gold">Chapter 1 • Business, Trade and Commerce</span>
      <span class="hero-tag emerald">100% NCERT Verified</span>
    </div>
    <h1>Business, Trade and Commerce — 25 Target Practice MCQs</h1>
    <p class="hero-sub">
      Meticulously crafted question bank based strictly on NCERT textbook file <strong>kebs101.pdf</strong>. Covers Indigenous Banking, Hundis, Trade Centres, Forms of Industry, Commerce, Auxiliaries to Trade, Multiple Objectives of Business, and Business Risks.
    </p>

    <div class="paper-info-grid">
      <div class="info-card">
        <div class="val">25</div>
        <div class="lbl">Total MCQs</div>
      </div>
      <div class="info-card">
        <div class="val">1–25</div>
        <div class="lbl">Book Pages</div>
      </div>
      <div class="info-card">
        <div class="val">100%</div>
        <div class="lbl">NCERT Aligned</div>
      </div>
      <div class="info-card">
        <div class="val">CBSE / CUET</div>
        <div class="lbl">Exam Standard</div>
      </div>
    </div>
  </section>

  <!-- Filter Bar -->
  <div class="filter-bar">
    <button class="filter-btn active" onclick="filterQuestions('all', this)">All Questions (25)</button>
    ${categories.map(c => `<button class="filter-btn" onclick="filterQuestions('${c}', this)">${c}</button>`).join('')}
  </div>

  <!-- Main Question Cards Container -->
  <main class="main-container" id="questions-container">
    ${mcqs.map((m, idx) => `
      <article class="mcq-card" data-category="${m.topicCategory}" id="mcq-card-${m.id}">
        <div class="mcq-top-meta">
          <div style="display:flex; align-items:center; gap:8px;">
            <span class="mcq-badge">Q${m.id} of 25</span>
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
          <div class="rat-title">
            <span>✓ Verified NCERT Explanation</span>
          </div>
          <p class="rat-text">${m.exp}</p>
          <div class="rat-cite">Source: ${m.ncertRef}</div>
        </div>
      </article>
    `).join('')}
  </main>

  <!-- Floating Dock -->
  <div class="floating-dock">
    <button class="dock-btn" title="Back to Top" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">↑</button>
  </div>

  <!-- Footer -->
  <footer>
    <p>
      NCERT Class 11 Business Studies (Part I: Foundations of Business) • Chapter 1: Business, Trade and Commerce (kebs101.pdf)<br>
      Study Guide & Question Bank prepared by <a href="/">NextSem Academy</a> • All Rights Reserved.
    </p>
  </footer>

  <!-- Interactive JavaScript -->
  <script>
    const answeredMap = {};
    const totalCount = 25;

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

      // Reveal rationale
      const rat = document.getElementById('rat-' + qId);
      if (rat) rat.classList.add('revealed');

      updateScore();
    }

    function updateScore() {
      let score = 0;
      Object.keys(answeredMap).forEach(k => {
        if (answeredMap[k]) score++;
      });
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
        if (cat === 'all' || card.getAttribute('data-category') === cat) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }

    function toggleTheme() {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      document.getElementById('theme-indicator').textContent = isLight ? '☀️' : '🌙';
      localStorage.setItem('kebs101_quiz_theme', isLight ? 'light' : 'dark');
    }

    window.addEventListener('DOMContentLoaded', () => {
      const saved = localStorage.getItem('kebs101_quiz_theme');
      if (saved === 'light') {
        document.body.classList.add('light-theme');
        document.getElementById('theme-indicator').textContent = '☀️';
      }
    });
  </script>
</body>
</html>
`;

fs.writeFileSync('public/business-studies-class11-ch1-kebs101-25-mcqs.html', html, 'utf8');
console.log('Successfully generated public/business-studies-class11-ch1-kebs101-25-mcqs.html');
