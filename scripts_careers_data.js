const fs = require('fs');
const path = require('path');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 10 Detailed Job Roles
const jobs = [
  {
    slug: 'digital-marketing-intern',
    title: 'Digital Marketing Intern',
    category: 'Marketing',
    team: 'Marketing Team',
    type: 'Internship (6 Months)',
    employmentType: 'INTERN',
    location: 'Hyderabad, India (Hybrid)',
    locality: 'Hyderabad',
    country: 'IN',
    experience: 'Fresher / 0-1 Year',
    salaryText: '₹18,000 - ₹28,000 / month (Stipend + PPO track)',
    salaryMin: 18000,
    salaryMax: 28000,
    salaryCurrency: 'INR',
    salaryUnit: 'MONTH',
    datePosted: '2026-08-15',
    validThrough: '2026-12-31',
    summary: 'Kickstart your marketing career by working on live client campaigns across SEO, social media, content marketing, and performance advertising under senior guidance.',
    badgeClass: 'badge-internship',
    overview: 'As a Digital Marketing Intern at Companies Builder, you will not be fetching coffee or doing manual data entry. From week one, you will be embedded inside active client accounts, learning how modern multi-channel digital campaigns are planned, launched, and analyzed. You will work side-by-side with senior growth strategists, copywriters, and developers to understand what drives traffic, engagement, and actual revenue for businesses.',
    responsibilities: [
      'Assist in executing multi-channel digital marketing campaigns across organic search, social media, and paid ads.',
      'Conduct keyword research, competitive benchmarking, and content gap analysis using tools like Ahrefs, SEMrush, and Google Search Console.',
      'Draft engaging social media copy, blog outlines, and promotional messaging aligned with client brand guidelines.',
      'Monitor campaign metrics, track Google Analytics 4 conversion events, and assist in compiling weekly performance dashboards.',
      'Collaborate with developers and designers to test landing page elements and optimize conversion funnels.'
    ],
    requirements: [
      'Bachelor degree or final year student in Marketing, Business, Mass Communication, Computer Science, or a related field.',
      'Strong written and verbal English communication skills with an eye for detail and grammar.',
      'Demonstrated interest in digital marketing through personal projects, coursework, certifications, or previous internships.',
      'Familiarity with basic digital marketing concepts, social media platforms, and Google Search fundamentals.',
      'Curiosity, self-motivation, and eagerness to receive constructive feedback and learn quickly.'
    ],
    niceToHave: [
      'Certifications in Google Analytics (GA4), Google Ads, or HubSpot Inbound Marketing.',
      'Basic knowledge of WordPress or HTML/CSS.',
      'Experience with graphic design tools like Canva or Figma.'
    ],
    learnAndGrow: [
      'Mastery of industry-standard tools: Google Analytics 4, Search Console, Ahrefs, Meta Business Suite, and Google Tag Manager.',
      'Understanding the economics of client acquisition, customer journey mapping, and conversion optimization.',
      'Direct path to a Full-Time Position (PPO) based on performance during the 6-month internship.'
    ]
  },
  {
    slug: 'seo-sem-intern',
    title: 'SEO / SEM Intern',
    category: 'SEO',
    team: 'Marketing Team',
    type: 'Internship (6 Months)',
    employmentType: 'INTERN',
    location: 'Hyderabad, India (Hybrid)',
    locality: 'Hyderabad',
    country: 'IN',
    experience: 'Fresher / 0-1 Year',
    salaryText: '₹18,000 - ₹30,000 / month (Stipend + PPO track)',
    salaryMin: 18000,
    salaryMax: 30000,
    salaryCurrency: 'INR',
    salaryUnit: 'MONTH',
    datePosted: '2026-08-15',
    validThrough: '2026-12-31',
    summary: 'Build deep technical and strategic expertise in organic search (SEO) and paid search marketing (SEM) by managing real websites and search accounts.',
    badgeClass: 'badge-internship',
    overview: 'Search is the most durable demand channel on the internet. As an SEO / SEM Intern at Companies Builder, you will dive into both organic search mechanics and paid Google Ads management. You will work on real client websites across India, discovering how site architecture, Core Web Vitals, semantic content, and targeted search ads combine to produce sustainable business leads.',
    responsibilities: [
      'Perform on-page SEO audits, reviewing title tags, meta descriptions, heading structures, internal links, and URL formatting.',
      'Conduct keyword research and clustering to identify high-intent search queries for diverse client industries.',
      'Learn and assist in setting up Google Search, Display, and Performance Max ad campaigns.',
      'Analyze Google Search Console and GA4 data to spot ranking drops, indexation errors, and CTR improvements.',
      'Participate in backlink prospecting, outreach research, and editorial guest post placement analysis.'
    ],
    requirements: [
      'Recent graduate or final-year student in any discipline with a strong analytical mindset.',
      'Fundamental understanding of how search engines crawl, index, and rank web pages.',
      'Comfortable with spreadsheets (Excel / Google Sheets) and basic data analysis.',
      'Strong research skills and ability to dissect technical problems logically.',
      'Excellent communication and documentation habits.'
    ],
    niceToHave: [
      'Google Ads Search Certification or Google Analytics Certification.',
      'Basic understanding of HTML, CSS, and web page performance.',
      'Experience managing a personal blog, niche website, or campus organization page.'
    ],
    learnAndGrow: [
      'In-depth knowledge of technical SEO, schema markup, Core Web Vitals, and algorithmic search ranking factors.',
      'Hands-on experience managing Google Ads budgets, bid strategies, and negative keyword lists.',
      'Mentorship from senior technical SEO specialists and direct consideration for full-time junior consultant roles.'
    ]
  },
  {
    slug: 'digital-strategy-consultant',
    title: 'Digital Strategy Consultant',
    category: 'Marketing',
    team: 'Marketing Team',
    type: 'Full-time',
    employmentType: 'FULL_TIME',
    location: 'Hyderabad, India (Hybrid / Remote)',
    locality: 'Hyderabad',
    country: 'IN',
    experience: '2 - 5 Years',
    salaryText: '₹7,00,000 - ₹12,00,000 per annum + Performance Bonus',
    salaryMin: 700000,
    salaryMax: 1200000,
    salaryCurrency: 'INR',
    salaryUnit: 'YEAR',
    datePosted: '2026-08-15',
    validThrough: '2026-12-31',
    summary: 'Architect comprehensive multi-channel digital growth strategies that unite web development, SEO, content, and paid acquisition into measurable revenue systems.',
    badgeClass: 'badge-fulltime',
    overview: 'As a Digital Strategy Consultant at Companies Builder, you will serve as the strategic brain behind high-impact client engagements. Rather than executing isolated tactics, you will diagnose client business models, study customer economics, and craft holistic digital growth roadmaps. You will bridge the gap between creative marketing, technical web engineering, and executive business goals.',
    responsibilities: [
      'Lead digital audits for prospective and onboarded clients, evaluating tech stack, search presence, conversion funnels, and competitive landscape.',
      'Develop customized 6-month and 12-month digital growth roadmaps with clear quarterly milestones and ROI forecasts.',
      'Collaborate with developers, SEO specialists, copywriters, and paid media leads to ensure strategic execution aligns with client goals.',
      'Conduct monthly executive strategy presentations, translating complex marketing metrics into actionable business intelligence.',
      'Identify cross-sell and account expansion opportunities based on emerging client needs and market trends.'
    ],
    requirements: [
      '2 to 5 years of experience in digital strategy, account planning, or growth consulting within an agency or consulting environment.',
      'Proven track record of designing multi-channel digital strategies that produced verifiable business growth.',
      'Deep fluency across SEO, content marketing, paid acquisition channels, and website conversion optimization.',
      'Exceptional presentation, storytelling, and client communication skills.',
      'Data-driven mindset with advanced analytical proficiency in GA4, Looker Studio, and marketing attribution models.'
    ],
    niceToHave: [
      'Prior experience working with B2B SaaS, healthcare, real estate, or e-commerce brands in India.',
      'Familiarity with CMS platforms (WordPress, Shopify, Next.js frameworks) and CRO tools.'
    ],
    learnAndGrow: [
      'Strategic autonomy to shape client engagements and lead cross-disciplinary pods.',
      'Executive exposure working directly with founders, CMOs, and business leaders across Hyderabad, Bangalore, and Mumbai.',
      'Fast-track leadership path toward Director of Strategy and Practice Head positions.'
    ]
  },
  {
    slug: 'performance-marketing-consultant',
    title: 'Performance Marketing Consultant',
    category: 'Marketing',
    team: 'Marketing Team',
    type: 'Full-time',
    employmentType: 'FULL_TIME',
    location: 'Hyderabad, India (Hybrid / Remote)',
    locality: 'Hyderabad',
    country: 'IN',
    experience: '3 - 6 Years',
    salaryText: '₹8,00,000 - ₹14,00,000 per annum + Performance Bonus',
    salaryMin: 800000,
    salaryMax: 1400000,
    salaryCurrency: 'INR',
    salaryUnit: 'YEAR',
    datePosted: '2026-08-15',
    validThrough: '2026-12-31',
    summary: 'Lead paid acquisition campaigns across Google Ads, Meta Ads, and LinkedIn, optimizing ad spend, conversion tracking, and return on ad spend (ROAS).',
    badgeClass: 'badge-fulltime',
    overview: 'Performance marketing at Companies Builder is grounded in accountability and measurable return on investment. As a Performance Marketing Consultant, you will oversee paid media campaigns across search, social, and programmatic channels for ambitious SMBs and funded startups. You will treat client ad spend as if it were your own, continuously optimizing bids, testing creative, and verifying attribution.',
    responsibilities: [
      'Plan, build, and scale paid media campaigns across Google Search, Performance Max, Display, Meta Ads (Facebook/Instagram), and LinkedIn Ads.',
      'Manage substantial monthly advertising budgets, ensuring tight cost per acquisition (CPA) and high return on ad spend (ROAS).',
      'Design structured A/B testing frameworks for ad copy, creative formats, audiences, and landing page variations.',
      'Ensure server-side tracking, Meta Conversions API (CAPI), Google Tag Manager, and GA4 events are configured with pinpoint accuracy.',
      'Deliver transparent performance reports highlighting lead quality, pipeline contribution, and unit economics.'
    ],
    requirements: [
      '3 to 6 years of hands-on paid media management experience, ideally within a performance or digital agency.',
      'Demonstrated history of scaling ad spend efficiently while lowering CAC and improving lead-to-opportunity ratios.',
      'Deep technical mastery of Google Ads Editor, Meta Ads Manager, Google Tag Manager, and GA4 attribution.',
      'Analytical rigor and ability to spot trends, anomalies, and attribution discrepancies quickly.',
      'Strong collaborative communication skills when discussing budgets and performance with clients.'
    ],
    niceToHave: [
      'Experience with B2B lead generation via LinkedIn Ads and account-based marketing (ABM).',
      'Knowledge of third-party attribution platforms, CRM integrations (HubSpot, Salesforce), and automated bidding scripts.'
    ],
    learnAndGrow: [
      'Opportunity to manage diverse budgets across Indian and international client accounts.',
      'Direct bonus incentives tied to client retention, account profitability, and performance milestones.',
      'Leadership opportunities to build and mentor a dedicated paid media pod.'
    ]
  },
  {
    slug: 'vp-of-marketing',
    title: 'VP of Marketing',
    category: 'Leadership',
    team: 'Marketing Team',
    type: 'Full-time',
    employmentType: 'FULL_TIME',
    location: 'Hyderabad, India (Hybrid)',
    locality: 'Hyderabad',
    country: 'IN',
    experience: '7+ Years',
    salaryText: '₹22,00,000 - ₹35,00,000 per annum + Performance Incentives',
    salaryMin: 2200000,
    salaryMax: 3500000,
    salaryCurrency: 'INR',
    salaryUnit: 'YEAR',
    datePosted: '2026-08-15',
    validThrough: '2026-12-31',
    summary: 'Lead our marketing organization, shape agency-wide strategic direction across brand and demand generation, and build high-performing delivery teams.',
    badgeClass: 'badge-leadership',
    overview: 'As Vice President of Marketing, you will serve as a core member of the Companies Builder executive leadership team. You will drive both our internal agency growth and the overall excellence of client campaign delivery. You will mentor team leads across SEO, performance marketing, content, and creative strategy, establishing gold-standard methodologies that cement Companies Builder as India premier digital growth partner.',
    responsibilities: [
      'Set the vision, operational standards, and growth goals for the entire marketing department.',
      'Supervise strategic execution across all client marketing accounts, ensuring industry-leading retention and performance results.',
      'Architect and execute Companies Builder own inbound marketing, thought leadership, case study program, and brand recognition.',
      'Recruit, mentor, and foster senior and junior marketing talent, creating a culture of continuous learning and accountability.',
      'Partner closely with the VP of Sales and engineering leadership to develop innovative, high-margin service offerings.'
    ],
    requirements: [
      '7+ years of progressive digital marketing experience, including at least 3 years in a senior leadership or director-level agency role.',
      'Demonstrated success scaling marketing teams, managing agency P&L, and driving long-term client retention.',
      'Authoritative expertise in organic search, performance advertising, content ecosystems, and data analytics.',
      'Inspirational leadership style with proven ability to coach and develop high-caliber strategists.',
      'Strong business acumen and executive presence when dealing with enterprise clients and board members.'
    ],
    niceToHave: [
      'Track record of building marketing agencies or high-growth consulting practices.',
      'Established industry network and public speaking or thought-leadership presence.'
    ],
    learnAndGrow: [
      'Executive equity participation and performance-linked profit sharing.',
      'Direct influence over company roadmap, hiring strategy, and international expansion.',
      'Autonomous mandate to shape one of the fastest-growing digital marketing agencies in South India.'
    ]
  },
  {
    slug: 'director-of-creative-strategy',
    title: 'Director of Creative Strategy',
    category: 'Leadership',
    team: 'Marketing Team',
    type: 'Full-time',
    employmentType: 'FULL_TIME',
    location: 'Hyderabad, India (Hybrid)',
    locality: 'Hyderabad',
    country: 'IN',
    experience: '5 - 8 Years',
    salaryText: '₹16,00,000 - ₹25,00,000 per annum',
    salaryMin: 1600000,
    salaryMax: 2500000,
    salaryCurrency: 'INR',
    salaryUnit: 'YEAR',
    datePosted: '2026-08-15',
    validThrough: '2026-12-31',
    summary: 'Shape the creative and visual vision across client campaigns, guiding brand messaging, landing page UI/UX, and high-converting performance creative.',
    badgeClass: 'badge-leadership',
    overview: 'In an era where algorithms automate bidding and targeting, creative strategy is the primary driver of digital marketing differentiation. As Director of Creative Strategy at Companies Builder, you will champion the intersection of beautiful aesthetic craft and measurable commercial performance. You will guide copywriters, UI/UX designers, and video producers to create brand assets and landing pages that convert browsers into buyers.',
    responsibilities: [
      'Establish the creative vision and brand storytelling standards for client campaigns and agency marketing.',
      'Lead the creative conceptualization of multi-channel ad campaigns, high-converting landing pages, and interactive digital assets.',
      'Translate client commercial goals into persuasive visual concepts, conversion copy, and engaging user journeys.',
      'Collaborate with performance media consultants to analyze creative fatigue and iterate rapidly on winning concepts.',
      'Manage and inspire an in-house team of designers, copywriters, and motion graphic artists.'
    ],
    requirements: [
      '5 to 8 years of creative leadership experience within a digital advertising agency or fast-moving brand.',
      'A standout portfolio demonstrating multi-channel creative campaigns, high-converting web designs, and brand identities.',
      'Deep understanding of performance advertising psychology, typography, color theory, and UX design principles.',
      'Proficiency with modern design workflows (Figma, Adobe Creative Cloud) and creative testing frameworks.',
      'Exceptional leadership, communication, and client pitch capabilities.'
    ],
    niceToHave: [
      'Experience in motion graphics, 3D asset creation, or video direction.',
      'Understanding of front-end development constraints and responsive design principles.'
    ],
    learnAndGrow: [
      'Freedom to build and shape an elite creative department from the ground up.',
      'Competitive executive compensation with performance bonuses and creative awards support.',
      'Direct collaboration with high-growth startup founders and enterprise brand leaders.'
    ]
  },
  {
    slug: 'sales-development-intern',
    title: 'Sales Development Intern',
    category: 'Sales',
    team: 'Sales Team',
    type: 'Internship (6 Months)',
    employmentType: 'INTERN',
    location: 'Hyderabad, India (Hybrid)',
    locality: 'Hyderabad',
    country: 'IN',
    experience: 'Fresher / 0-1 Year',
    salaryText: '₹18,000 - ₹25,000 / month (Stipend + Deal Closing Incentives + PPO)',
    salaryMin: 18000,
    salaryMax: 25000,
    salaryCurrency: 'INR',
    salaryUnit: 'MONTH',
    datePosted: '2026-08-15',
    validThrough: '2026-12-31',
    summary: 'Master the art and science of B2B sales development: prospect research, LinkedIn outreach, cold calling, and pipeline generation with uncapped incentives.',
    badgeClass: 'badge-internship',
    overview: 'Sales development is one of the highest-leverage career tracks in modern business. As a Sales Development Intern at Companies Builder, you will learn how B2B technology and agency services are sold to CEOs, founders, and marketing directors. You will be trained in enterprise prospect qualification, consultative outreach, CRM management, and deal orchestration.',
    responsibilities: [
      'Identify and research high-potential target accounts across key verticals (e-commerce, real estate, B2B SaaS, healthcare).',
      'Execute multi-touch outreach sequences using LinkedIn, personalized email, and phone outreach.',
      'Qualify inbound audit requests and inbound demo leads to understand business needs and budget fit.',
      'Schedule discovery calls and strategic consultations for senior sales consultants.',
      'Maintain disciplined CRM hygiene and update lead records in our sales database.'
    ],
    requirements: [
      'Recent graduate or final-year student with an outgoing personality and passion for business development.',
      'Exceptional spoken and written English communication skills.',
      'High resilience, persistence, and positive attitude when conducting cold outreach.',
      'Active listening skills and the ability to ask probing, intelligent questions.',
      'Eagerness to hit targets and earn monthly performance bonuses.'
    ],
    niceToHave: [
      'Prior experience in campus placement cells, event sponsorships, or direct sales.',
      'Familiarity with LinkedIn Sales Navigator, HubSpot, or Apollo.io.'
    ],
    learnAndGrow: [
      'Comprehensive sales training in consultative closing, objection handling, and pipeline management.',
      'Generous monthly cash incentive bonuses on top of fixed monthly stipend.',
      'Direct path to a full-time Business Development Executive or Consultant role upon successful completion.'
    ]
  },
  {
    slug: 'growth-sales-consultant',
    title: 'Growth & Sales Consultant',
    category: 'Sales',
    team: 'Sales Team',
    type: 'Full-time',
    employmentType: 'FULL_TIME',
    location: 'Hyderabad, India (Hybrid / Remote)',
    locality: 'Hyderabad',
    country: 'IN',
    experience: '2 - 5 Years',
    salaryText: '₹6,00,000 - ₹11,00,000 per annum + Uncapped Commissions',
    salaryMin: 600000,
    salaryMax: 1100000,
    salaryCurrency: 'INR',
    salaryUnit: 'YEAR',
    datePosted: '2026-08-15',
    validThrough: '2026-12-31',
    summary: 'Identify, consult with, and close new client partnerships across web development, SEO, and full-stack digital marketing solutions with uncapped commission earning potential.',
    badgeClass: 'badge-fulltime',
    overview: 'As a Growth & Sales Consultant at Companies Builder, you are not pitching commodity services; you are consulting with business leaders on their revenue growth. You will meet with founders, CMOs, and enterprise decision-makers across India and globally, diagnosing their online bottlenecks and presenting high-converting web and marketing solutions. You will own the full sales cycle from initial discovery to signed contract.',
    responsibilities: [
      'Manage and advance qualified pipeline opportunities through discovery, solution pitch, proposal, and closing.',
      'Conduct consultative discovery sessions with prospective clients to understand their commercial targets, budget, and pain points.',
      'Collaborate with technical and marketing leads to craft custom proposals, scope statements, and pricing plans.',
      'Lead contract negotiations, handle commercial objections, and finalize service agreements.',
      'Achieve and exceed quarterly new business revenue quotas.'
    ],
    requirements: [
      '2 to 5 years of proven quota-carrying B2B sales experience, preferably in digital marketing, web development, IT services, or SaaS.',
      'Demonstrated track record of consistently meeting or exceeding quarterly revenue targets.',
      'Strong grasp of web development cycles, SEO principles, and digital marketing services.',
      'Exceptional consultative selling, proposal writing, and objection-handling capabilities.',
      'Self-driven, competitive work ethic paired with a customer-first relationship mindset.'
    ],
    niceToHave: [
      'Experience selling retained digital services with monthly contract values of ₹50,000 to ₹5,00,000.',
      'Existing network of business relationships in Hyderabad, Bangalore, or Mumbai.'
    ],
    learnAndGrow: [
      'Uncapped commission structure with transparent monthly payouts.',
      'High-performing inbound lead flow generated from our website, SEO tools, and audit programs.',
      'Leadership path toward Sales Team Lead and Regional Practice Head.'
    ]
  },
  {
    slug: 'client-success-consultant',
    title: 'Client Success Consultant',
    category: 'Sales',
    team: 'Sales Team',
    type: 'Full-time',
    employmentType: 'FULL_TIME',
    location: 'Hyderabad, India (Hybrid / Remote)',
    locality: 'Hyderabad',
    country: 'IN',
    experience: '2 - 4 Years',
    salaryText: '₹6,50,000 - ₹10,50,000 per annum + Retention Bonuses',
    salaryMin: 650000,
    salaryMax: 1050000,
    salaryCurrency: 'INR',
    salaryUnit: 'YEAR',
    datePosted: '2026-08-15',
    validThrough: '2026-12-31',
    summary: 'Own post-sale client relationships, lead onboarding, ensure satisfaction, and drive long-term account retention and expansion across our portfolio.',
    badgeClass: 'badge-fulltime',
    overview: 'Long-term client partnerships are the foundation of Companies Builder. As a Client Success Consultant, you will be the trusted strategic advisor and chief advocate for our retained clients. You will orchestrate smooth onboarding, ensure delivery teams meet milestones, conduct quarterly strategic reviews, and identify expansion opportunities that help clients scale their revenue.',
    responsibilities: [
      'Serve as the primary strategic partner and point of contact for an assigned portfolio of client accounts.',
      'Lead seamless client onboarding, aligning expectations, timelines, communication channels, and KPIs.',
      'Facilitate regular progress check-ins, monthly performance reviews, and quarterly business reviews (QBRs).',
      'Collaborate with developers, SEO strategists, and marketing leads to ensure deliverable quality and project momentum.',
      'Monitor account health scores, resolve roadblocks proactively, and drive high net retention rates.'
    ],
    requirements: [
      '2 to 4 years of experience in client success, account management, or agency project management.',
      'Strong familiarity with digital marketing metrics, web development workflows, and agency operations.',
      'High emotional intelligence, empathy, and diplomatic problem-solving skills.',
      'Exceptional organization habits and ability to manage multiple client accounts simultaneously.',
      'Clear, persuasive written and verbal communication.'
    ],
    niceToHave: [
      'Experience using project management tools such as Jira, Asana, ClickUp, or Trello.',
      'Background working with clients across real estate, healthcare, or technology industries.'
    ],
    learnAndGrow: [
      'Quarterly account retention and expansion bonuses.',
      'High-level exposure to diverse business models and growth strategies across multiple industries.',
      'Career progression toward Head of Client Operations and VP of Client Success.'
    ]
  },
  {
    slug: 'vp-of-sales',
    title: 'VP of Sales',
    category: 'Leadership',
    team: 'Sales Team',
    type: 'Full-time',
    employmentType: 'FULL_TIME',
    location: 'Hyderabad, India (Hybrid)',
    locality: 'Hyderabad',
    country: 'IN',
    experience: '7+ Years',
    salaryText: '₹24,00,000 - ₹38,00,000 per annum + Revenue Share',
    salaryMin: 2400000,
    salaryMax: 3800000,
    salaryCurrency: 'INR',
    salaryUnit: 'YEAR',
    datePosted: '2026-08-15',
    validThrough: '2026-12-31',
    summary: 'Build, lead, and scale Companies Builder business development engine, coach sales consultants, forge enterprise partnerships, and drive revenue growth.',
    badgeClass: 'badge-leadership',
    overview: 'As Vice President of Sales, you will be the revenue architect of Companies Builder. You will report directly to executive leadership, setting commercial strategy, designing scalable sales methodologies, coaching sales consultants, and personally closing major enterprise and international partnerships. You will transform Companies Builder from a premier regional agency into a recognized national and global growth powerhouse.',
    responsibilities: [
      'Define, execute, and own the comprehensive sales strategy to achieve ambitious annual revenue targets.',
      'Hire, train, and mentor a high-performing team of sales consultants, SDRs, and account executives.',
      'Refine sales playbooks, objection-handling scripts, pitch decks, and consultative discovery methodologies.',
      'Personally spearhead negotiations with high-value enterprise accounts, strategic agency partnerships, and international retainers.',
      'Collaborate with marketing leadership to align lead generation investments with the highest-converting customer segments.'
    ],
    requirements: [
      '7+ years of B2B sales experience with at least 3 years successfully managing and leading quota-carrying sales teams.',
      'Proven record of driving revenue growth in digital marketing agencies, technology services, or SaaS companies.',
      'Deep mastery of consultative B2B selling, contract negotiation, and sales pipeline mechanics.',
      'Charismatic, inspiring leadership style that motivates salespeople to exceed targets consistently.',
      'Strong financial acumen and experience with sales forecasting, compensation plans, and CRM management.'
    ],
    niceToHave: [
      'Experience expanding digital service sales into North American, European, or Middle Eastern markets.',
      'Strong existing executive network among Indian founders and business leaders.'
    ],
    learnAndGrow: [
      'Executive equity, revenue-share incentives, and uncapped commercial upside.',
      'Autonomous mandate to build and lead the commercial organization of a high-growth company.',
      'Key seat at the executive table shaping company strategy, mergers, and market expansions.'
    ]
  }
];

console.log(`Defined ${jobs.length} roles. Preparing generator.`);
module.exports = { jobs };
