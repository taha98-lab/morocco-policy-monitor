import { Language } from '../types';

export interface SourceLink {
  label: string;
  url?: string;
  note?: string;
}

export interface SectionSources {
  title: string;
  items: SourceLink[];
}

export interface ReportSectionData {
  id: string;
  title: string;
  subheading?: string;
  paragraphs?: string[];
  table?: {
    headers: string[];
    rows: (string | number)[][];
  };
  listItems?: string[];
  subsections?: {
    title: string;
    tagline?: string;
    content?: string[];
    potentialIndicatorsTitle?: string;
    potentialIndicators?: string[];
    primarySource: SourceLink;
  }[];
  quote?: string;
  sources?: SectionSources;
}

export interface SpecialReport {
  id: string;
  slug: string;
  category: 'special' | 'policy' | 'research' | 'forum';
  categoryLabel: string;
  briefNumber: string;
  title: string;
  subtitle: string;
  edition: string;
  date: string;
  coveragePeriod: string;
  nextUpdate: string;
  author: string;
  editorialPrinciple: {
    tagline: string;
    quote: string;
    explanation: string;
  };
  executiveSummary: {
    title: string;
    paragraphs: string[];
    keyQuestions: {
      attractivePromise: string;
      measureEvidence: string;
    };
  };
  sections: ReportSectionData[];
  sourcesPanelTitle: string;
  sourcesPanelDesc: string;
  hideSourcesBtn: string;
  showSourcesBtn: string;
}

export interface ReportSummaryItem {
  id: string;
  category: 'special' | 'policy' | 'research' | 'forum';
  briefNumber: string;
  title: string;
  subtitle: string;
  date: string;
  author: string;
  status: 'published' | 'forthcoming' | 'in_research';
  statusLabel: string;
  summary: string;
  tags: string[];
}

export interface ReportCategoryItem {
  id: 'special' | 'policy' | 'research' | 'forum';
  name: string;
  nameAr: string;
  nameFr: string;
  badge: string;
  description: string;
  descriptionAr: string;
  descriptionFr: string;
  iconType: string;
  reports: ReportSummaryItem[];
}

export const REPORT_CATEGORIES_DATA: Record<Language, ReportCategoryItem[]> = {
  en: [
    {
      id: 'special',
      name: 'Special Reports',
      nameAr: 'التقارير الخاصة',
      nameFr: 'Rapports Spéciaux',
      badge: 'Major Civic Milestones',
      description: 'Comprehensive, deep-dive investigations into milestone national events, electoral processes, and institutional transformations.',
      descriptionAr: 'تحقيقات ودراسات استقصائية معمقة حول المحطات الوطنية الكبرى، والعمليات الانتخابية، والتحولات المؤسساتية.',
      descriptionFr: 'Analyses approfondies et dossiers d’envergure consacrés aux échéances nationales majeures, processus électoraux et réformes institutionnelles.',
      iconType: 'ShieldCheck',
      reports: [
        {
          id: 'election-brief-001',
          category: 'special',
          briefNumber: 'Election Brief 001',
          title: "Morocco's 2026 Legislative Elections",
          subtitle: 'What Is at Stake, What Parties Are Proposing, and What to Monitor',
          date: '22 September 2026',
          author: 'Taha Khobizi',
          status: 'published',
          statusLabel: 'Published · Pre-election edition',
          summary: 'Baseline analysis of the 23 September 2026 legislative vote. Tracks 15.8M voters, 395 seats, and quantified commitments across RNI, PAM, Istiqlal, USFP, PPS, and PJD with verified primary sources.',
          tags: ['Elections 2026', 'Parliament', 'Party Manifestos', 'Labour Market', 'Primary Sources'],
        },
      ],
    },
    {
      id: 'policy',
      name: 'Policy Reports',
      nameAr: 'تقارير السياسات العمومية',
      nameFr: 'Rapports de Politiques Publiques',
      badge: 'Sectoral Audits',
      description: 'Rigorous empirical audits evaluating the execution, budgetary fidelity, and outcomes of government sectoral policies.',
      descriptionAr: 'تقارير تدقيق قطاعية لتقييم مستويات الإنجاز والاعتمادات المالية والآثار الملموسة للبرامج الحكومية.',
      descriptionFr: 'Audits empiriques rigoureux évaluant l’exécution budgétaire et l’impact réel des politiques sectorielles de l’État.',
      iconType: 'Building2',
      reports: [],
    },
    {
      id: 'research',
      name: 'Research Briefs',
      nameAr: 'الموجزات البحثية',
      nameFr: 'Notes de Recherche',
      badge: 'Methodology & Data',
      description: 'Methodological notes, statistical breakdowns, and conceptual frameworks examining national data series and audit protocols.',
      descriptionAr: 'مذكرات منهجية، وتفكيك إحصائي، وأطر مفاهيمية لفحص السلاسل البيانية الوطنية وبروتوكولات التدقيق.',
      descriptionFr: 'Notes méthodologiques et éclairages statistiques examinant les séries de données nationales et protocoles d’audit.',
      iconType: 'FileText',
      reports: [],
    },
    {
      id: 'forum',
      name: 'Forum Briefs',
      nameAr: 'موجزات المنتدى المدني',
      nameFr: 'Briefs du Forum',
      badge: 'Civic Dialogue',
      description: 'Syntheses of public policy deliberations, parliamentary scrutiny records, citizen petitions, and institutional accountability debates.',
      descriptionAr: 'خلاصات النقاش العمومي حول السياسات العامة، وتتبع المساءلة البرلمانية، والعرائض المدنية، وتقارير الشفافية.',
      descriptionFr: 'Synthèses des débats de politiques publiques, questions parlementaires, pétitions citoyennes et reddition des comptes.',
      iconType: 'Vote',
      reports: [],
    },
  ],
  fr: [
    {
      id: 'special',
      name: 'Rapports Spéciaux',
      nameAr: 'التقارير الخاصة',
      nameFr: 'Rapports Spéciaux',
      badge: 'Grandes Échéances Civiques',
      description: 'Analyses approfondies et dossiers d’envergure consacrés aux échéances nationales majeures, processus électoraux et réformes institutionnelles.',
      descriptionAr: 'تحقيقات ودراسات استقصائية معمقة حول المحطات الوطنية الكبرى، والعمليات الانتخابية، والتحولات المؤسساتية.',
      descriptionFr: 'Analyses approfondies et dossiers d’envergure consacrés aux échéances nationales majeures, processus électoraux et réformes institutionnelles.',
      iconType: 'ShieldCheck',
      reports: [
        {
          id: 'election-brief-001',
          category: 'special',
          briefNumber: 'Brief Électoral 001',
          title: 'Élections Législatives Marocaines de 2026',
          subtitle: 'Enjeux, propositions des partis et grille de suivi des engagements',
          date: '22 septembre 2026',
          author: 'Taha Khobizi',
          status: 'published',
          statusLabel: 'Publié · Édition pré-électorale',
          summary: 'Audit de référence du scrutin législatif du 23 septembre 2026. Analyse 15,8M d’électeurs, 395 sièges et les engagements chiffrés du RNI, PAM, Istiqlal, USFP, PPS et PJD avec sources primaires vérifiées.',
          tags: ['Législatives 2026', 'Parlement', 'Programmes Partisans', 'Emploi', 'Sources Primaires'],
        },
      ],
    },
    {
      id: 'policy',
      name: 'Rapports de Politiques Publiques',
      nameAr: 'تقارير السياسات العمومية',
      nameFr: 'Rapports de Politiques Publiques',
      badge: 'Audits Sectoriels',
      description: 'Audits empiriques rigoureux évaluant l’exécution budgétaire et l’impact réel des politiques sectorielles de l’État.',
      descriptionAr: 'تقارير تدقيق قطاعية لتقييم مستويات الإنجاز والاعتمادات المالية والآثار الملموسة للبرامج الحكومية.',
      descriptionFr: 'Audits empiriques rigoureux évaluant l’exécution budgétaire et l’impact réel des politiques sectorielles de l’État.',
      iconType: 'Building2',
      reports: [],
    },
    {
      id: 'research',
      name: 'Notes de Recherche',
      nameAr: 'الموجزات البحثية',
      nameFr: 'Notes de Recherche',
      badge: 'Méthodologie & Données',
      description: 'Notes méthodologiques et éclairages statistiques examinant les séries de données nationales et protocoles d’audit.',
      descriptionAr: 'مذكرات منهجية، وتفكيك إحصائي، وأطر مفاهيمية لفحص السلاسل البيانية الوطنية وبروتوكولات التدقيق.',
      descriptionFr: 'Notes méthodologiques et éclairages statistiques examinant les séries de données nationales et protocoles d’audit.',
      iconType: 'FileText',
      reports: [],
    },
    {
      id: 'forum',
      name: 'Briefs du Forum',
      nameAr: 'موجزات المنتدى المدني',
      nameFr: 'Briefs du Forum',
      badge: 'Débat Civique & Reddition',
      description: 'Synthèses des débats de politiques publiques, questions parlementaires, pétitions citoyennes et reddition des comptes.',
      descriptionAr: 'خلاصات النقاش العمومي حول السياسات العامة، وتتبع المساءلة البرلمانية، والعرائض المدنية، وتقارير الشفافية.',
      descriptionFr: 'Synthèses des débats de politiques publiques, questions parlementaires, pétitions citoyennes et reddition des comptes.',
      iconType: 'Vote',
      reports: [],
    },
  ],
  ar: [
    {
      id: 'special',
      name: 'التقارير الخاصة',
      nameAr: 'التقارير الخاصة',
      nameFr: 'Rapports Spéciaux',
      badge: 'المحطات الوطنية الكبرى',
      description: 'تحقيقات ودراسات استقصائية معمقة حول المحطات الوطنية الكبرى، والعمليات الانتخابية، والتحولات المؤسساتية.',
      descriptionAr: 'تحقيقات ودراسات استقصائية معمقة حول المحطات الوطنية الكبرى، والعمليات الانتخابية، والتحولات المؤسساتية.',
      descriptionFr: 'Analyses approfondies et dossiers d’envergure consacrés aux échéances nationales majeures, processus électoraux et réformes institutionnelles.',
      iconType: 'ShieldCheck',
      reports: [
        {
          id: 'election-brief-001',
          category: 'special',
          briefNumber: 'الموجز الانتخابي 001',
          title: 'الانتخابات التشريعية المغربية 2026',
          subtitle: 'الرهانات المؤسساتية، التزامات الأحزاب، ومعايير التتبع المدني',
          date: '22 شتنبر 2026',
          author: 'طه خوبيزي',
          status: 'published',
          statusLabel: 'منشور · نسخة ما قبل الاقتراع',
          summary: 'دراسة مرجعية مفصلة لاستحقاق 23 شتنبر 2026. تتبع معطيات 15.8 مليون ناخب، 395 مقعداً، وتدقيق التزامات أحزاب الأحرار والبام والاستقلال والاتحاد والتقدم والعدالة والتنمية.',
          tags: ['تشريعيات 2026', 'مجلس النواب', 'البرامج الحزبية', 'سوق الشغل', 'المصادر الأولية'],
        },
      ],
    },
    {
      id: 'policy',
      name: 'تقارير السياسات العمومية',
      nameAr: 'تقارير السياسات العمومية',
      nameFr: 'Rapports de Politiques Publiques',
      badge: 'التدقيق القطاعي',
      description: 'تقارير تدقيق قطاعية لتقييم مستويات الإنجاز والاعتمادات المالية والآثار الملموسة للبرامج الحكومية.',
      descriptionAr: 'تقارير تدقيق قطاعية لتقييم مستويات الإنجاز والاعتمادات المالية والآثار الملموسة للبرامج الحكومية.',
      descriptionFr: 'Audits empiriques rigoureux évaluant l’exécution budgétaire et l’impact réel des politiques sectorielles de l’État.',
      iconType: 'Building2',
      reports: [],
    },
    {
      id: 'research',
      name: 'الموجزات البحثية',
      nameAr: 'الموجزات البحثية',
      nameFr: 'Notes de Recherche',
      badge: 'المنهجية والبيانات',
      description: 'مذكرات منهجية، وتفكيك إحصائي، وأطر مفاهيمية لفحص السلاسل البيانية الوطنية وبروتوكولات التدقيق.',
      descriptionAr: 'مذكرات منهجية، وتفكيك إحصائي، وأطر مفاهيمية لفحص السلاسل البيانية الوطنية وبروتوكولات التدقيق.',
      descriptionFr: 'Notes méthodologiques et éclairages statistiques examinant les séries de données nationales et protocoles d’audit.',
      iconType: 'FileText',
      reports: [],
    },
    {
      id: 'forum',
      name: 'موجزات المنتدى المدني',
      nameAr: 'موجزات المنتدى المدني',
      nameFr: 'Briefs du Forum',
      badge: 'الحوار والمساءلة',
      description: 'خلاصات النقاش العمومي حول السياسات العامة، وتتبع المساءلة البرلمانية، والعرائض المدنية، وتقارير الشفافية.',
      descriptionAr: 'خلاصات النقاش العمومي حول السياسات العامة، وتتبع المساءلة البرلمانية، والعرائض المدنية، وتقارير الشفافية.',
      descriptionFr: 'Synthèses des débats de politiques publiques, questions parlementaires, pétitions citoyennes et reddition des comptes.',
      iconType: 'Vote',
      reports: [],
    },
  ],
};

export const ELECTION_BRIEF_001: Record<Language, SpecialReport> = {
  en: {
    id: 'election-brief-001',
    slug: 'moroccos-2026-legislative-elections',
    category: 'special',
    categoryLabel: 'Special Reports',
    briefNumber: 'Election Brief 001',
    title: "Morocco's 2026 Legislative Elections",
    subtitle: 'What Is at Stake, What Parties Are Proposing, and What to Monitor',
    edition: 'Pre-election edition',
    date: '22 September 2026',
    coveragePeriod: '2026 legislative election',
    nextUpdate: 'Post-election results and parliamentary composition',
    author: 'Taha Khobizi',
    editorialPrinciple: {
      tagline: 'MPM EDITORIAL PRINCIPLE',
      quote: 'Promises are political claims. Implementation is a factual question. Outcomes require evidence.',
      explanation: "Morocco Policy Monitor's role is to keep those three things separate. This report records publicly documented commitments and establishes a baseline against which implementation can be monitored after the election.",
    },
    executiveSummary: {
      title: 'Executive Summary',
      paragraphs: [
        'Morocco heads to the polls on 23 September 2026 to elect the 395 members of the House of Representatives. This is the country’s 12th legislative election since independence.',
        'According to official electoral figures, 15,801,162 voters are registered, while 7,288 candidates are competing through 1,850 candidate lists across 27 political parties (with the Interior Ministry noting 28 formations when counting an electoral coalition and two independent candidate lists).',
        'The election takes place against a backdrop of major economic and social challenges: employment, purchasing power, education, healthcare, housing, youth integration, and regional disparities dominate party manifestos.',
        'Employment is particularly central. Under the HCP’s previous labour-market survey, Morocco ended 2025 with a national unemployment rate of 13%, including 37.2% among youth aged 15–24. Under the HCP’s new 2026 labour-force survey methodology, unemployment stood at 9.5% in Q2 2026 (27.2% for youth aged 15–24).',
        'Several parties have responded with quantified job targets: RNI pledges approximately 1,000,000 jobs; PAM commits to at least 1,000,000 net jobs with an estimated 350 billion MAD five-year programme; USFP sets explicit targets for national, youth, and female unemployment alongside industrial job quotas.',
        'This report does not rank parties, endorse candidates, or predict election outcomes. Instead, Morocco Policy Monitor records what parties have publicly committed to, identifies which commitments can be measured, and establishes a rigorous baseline for post-election tracking.',
      ],
      keyQuestions: {
        attractivePromise: 'Which party makes the most attractive promise?',
        measureEvidence: 'What has been promised, how can it be measured, and what evidence will show whether it was implemented?',
      },
    },
    sourcesPanelTitle: 'Evidence & Verified Primary Sources',
    sourcesPanelDesc: 'Direct institutional links and official party programmes referenced in this section:',
    showSourcesBtn: 'View Primary Sources & Citations',
    hideSourcesBtn: 'Hide Sources',
    sections: [
      {
        id: 'glance',
        title: '1. The Election at a Glance',
        table: {
          headers: ['Indicator', 'Official 2026 Data'],
          rows: [
            ['Election date', '23 September 2026'],
            ['Institution elected', 'House of Representatives (Chambre des Représentants)'],
            ['Total parliamentary seats', '395'],
            ['Registered voters', '15,801,162'],
            ['Official number of participating parties', '27'],
            ['Candidate lists', '1,850'],
            ['Total candidates', '7,288'],
            ['Female candidates', '2,658 (36.5%)'],
            ['Sitting parliamentarians seeking re-election', '227'],
          ],
        },
        paragraphs: [
          'The 395 seats are divided between 305 local constituency seats and 90 regional seats.',
          'The official electoral figures record 1,615 local lists and 235 regional lists. The regional lists are reserved exclusively for women and contain 1,783 candidates. In total, women account for 2,658 of the registered candidacies.',
          'The electorate is composed of approximately 54% men and 46% women. Urban residents represent 55% of registered voters and rural residents 45%. More than 29% of registered voters are aged 60 or above, while citizens aged 18–24 represent approximately 4% of the electoral roll.',
          'These figures provide important context for the campaign: youth employment and civic participation are prominent themes in party manifestos, yet the youngest registered age group represents only a small fraction of the formal electoral roll.',
        ],
        sources: {
          title: 'Section Sources: Electoral Framework & Official Figures',
          items: [
            { label: 'Official 2026 Legislative Elections Portal — Maroc.ma', url: 'https://www.elections.ma/' },
            { label: 'Official election figures — 15,801,162 registered voters and candidate statistics', url: 'https://www.maroc.ma/' },
            { label: 'Official candidate-list statistics — Maroc.ma', url: 'https://www.maroc.ma/' },
          ],
        },
      },
      {
        id: 'system',
        title: "2. How Morocco's Electoral System Works",
        paragraphs: [
          'The House of Representatives consists of 395 members:',
          'The electoral quotient is calculated using the number of registered voters in a constituency divided by the number of seats available. Seats that remain after the initial quotient allocation are distributed according to the largest-remainder rule.',
          'Once a list has won a certain number of seats, candidates are elected strictly according to their order on that list.',
          'This structure means that the 2026 election combines a national political contest with a large number of constituency-level contests. With 7,288 candidates competing for 395 seats, the national average exceeds 18 candidacies per seat.',
        ],
        listItems: [
          '305 seats are elected through local electoral constituencies.',
          '90 seats are elected through regional constituencies (reserved for women candidates).',
          'Voters vote for closed lists of candidates rather than individual candidates.',
          'Seats are distributed through proportional representation using the largest-remainder method.',
          'There is no preferential voting or split-ticket voting (panachage).',
        ],
        sources: {
          title: 'Section Sources: Electoral System Mechanics',
          items: [
            { label: 'How the electoral system works — Chambre des Représentants', url: 'https://www.chambredesrepresentants.ma/' },
            { label: 'Loi organique n° 27-11 relative à la Chambre des Représentants — Secrétariat Général du Gouvernement', url: 'http://www.sgg.gov.ma/' },
          ],
        },
      },
      {
        id: 'issues',
        title: '3. What Is the Election Being Contested Over?',
        paragraphs: [
          'There is no single issue defining the 2026 election. Across party programmes and campaign discourse, eight recurring policy pillars dominate:',
        ],
        subsections: [
          {
            title: 'Employment',
            tagline: 'The most quantifiable theme of the campaign',
            content: [
              'The 2025 HCP labour-market results recorded 193,000 jobs created, but unemployment remained high at 13%, with youth unemployment at 37.2%.',
              'The new HCP labour-force survey introduced in 2026 produces a different statistical baseline: in Q2 2026, unemployment was recorded at 9.5% nationally (27.2% for 15–24-year-olds).',
              'The methodology shift means the two series are not directly interchangeable. MPM identifies the specific HCP methodology whenever labour indicators are tracked.',
            ],
            primarySource: { label: 'HCP — Employment, Activity and Unemployment (2025 Annual Results & Q2 2026)', url: 'https://www.hcp.ma/' },
          },
          {
            title: 'Purchasing Power & Cost of Living',
            tagline: 'Wages, inflation, pensions, and direct social aid',
            content: [
              'Parties address minimum wage increases, income tax brackets, pensions, price stabilization for essential food commodities, and direct cash transfers (Aide Sociale Directe). The core policy question: How does economic growth translate into household living standards?',
            ],
            primarySource: { label: 'Bank Al-Maghrib Annual Reports & Monetary Policy Reports', url: 'https://www.bkam.ma/' },
          },
          {
            title: 'Education, Healthcare & Housing',
            tagline: 'The foundational pillars of the Social State (L’État Social)',
            content: [
              'Proposals address school dropout rates, teacher training, university reform, healthcare staffing, territorial hospital networks, wait times, and direct housing purchase subsidies (Daam Sakane).',
            ],
            primarySource: { label: 'Cour des Comptes — Audits on Public Health & Education', url: 'https://www.courdescomptes.ma/' },
          },
          {
            title: 'Water, Energy, Food Security & Territorial Justice',
            tagline: 'Structural long-term challenges',
            content: [
              'Water scarcity, emergency seawater desalination plants, water highway interconnections, energy transition, food sovereignty, and closing regional disparities between coastal and inland provinces occupy an unprecedented share of party commitments.',
            ],
            primarySource: { label: 'Ministry of Equipment and Water — National Water Plan (PNE 2050)', url: 'https://www.equipement.gov.ma/' },
          },
        ],
      },
      {
        id: 'economic-context',
        title: '4. The Economic Context: Baseline Data',
        paragraphs: [
          'The next government will inherit an economy combining major infrastructure and investment acceleration with persistent structural labour-market challenges.',
          'According to HCP’s annual 2025 results (previous survey methodology):',
        ],
        listItems: [
          'National economy created 193,000 net jobs.',
          'Overall unemployment stood at 13.0%.',
          'Youth unemployment (aged 15–24) reached 37.2%.',
          'Female unemployment reached 20.5%.',
          'Underemployment rose to 10.9%.',
          'Sectoral balance: Services (+123,000), Construction (+64,000), Industry (+46,000), Agriculture & Fishing (-41,000 due to severe drought).',
        ],
        subheading: 'New 2026 Labour Force Survey Baseline (Q2 2026):',
        table: {
          headers: ['Indicator (New HCP 2026 Survey)', 'Rate / Share'],
          rows: [
            ['National unemployment rate', '9.5%'],
            ['Youth unemployment (aged 15–24)', '27.2%'],
            ['Female unemployment rate', '14.8%'],
            ['Male unemployment rate', '8.1%'],
            ['National labour-force participation rate', '42.2%'],
            ['Male labour-force participation', '66.5%'],
            ['Female labour-force participation', '18.1%'],
          ],
        },
        sources: {
          title: 'Section Sources: Economic and Labour-Market Data',
          items: [
            { label: 'HCP — Employment, Activity and Unemployment: 2025 Annual Results', url: 'https://www.hcp.ma/' },
            { label: 'HCP — 2026 Labour Force Survey / Q2 2026 results', url: 'https://www.hcp.ma/' },
          ],
        },
      },
      {
        id: 'party-proposals',
        title: '5. What Are the Major Parties Proposing?',
        paragraphs: [
          'Morocco Policy Monitor does not reproduce full political manifestos. Instead, this section extracts quantified, measurable commitments from parliamentary parties.',
          'The figures below are recorded strictly as party commitments, not as independent economic forecasts or feasibility ratings.',
        ],
        subsections: [
          {
            title: '5.1 Rassemblement National des Indépendants — RNI',
            tagline: 'Programme 2026–2031: "Dignity and Opportunities for All"',
            content: [
              'Focuses on employment, private investment acceleration, economic inclusion, and youth opportunities.',
              'Pledges the creation of approximately 1,000,000 jobs over the 5-year mandate, alongside public-sector wage valorisation, social state consolidation, and female workforce incentives.',
            ],
            potentialIndicatorsTitle: 'Potential MPM Monitor Indicators:',
            potentialIndicators: [
              'Net jobs created annually (HCP)',
              'National and youth unemployment rates',
              'Female labour participation rate',
              'Public vs. private investment share (Investment Charter)',
              'Beneficiaries of targeted employment programs',
            ],
            primarySource: { label: 'RNI — Programme 2026–2031', url: 'https://www.rni.ma/' },
          },
          {
            title: '5.2 Parti Authenticité et Modernité — PAM',
            tagline: 'Electoral Programme 2026: 5 Major Pacts & 20 Commitments',
            content: [
              'Estimates the total budgetary envelope for its 5-year programme at 350 Billion MAD.',
              'Commits to creating at least 1,000,000 net jobs during the parliamentary term.',
              'Five Pacts: Purchasing Power, Youth Integration, Citizenship & Public Services, Strategic Security, Sustainable Growth.',
              'Allocates 50 Billion MAD specifically to the Youth Pact, including a "First Employment Contract" (Contrat Premier Emploi) targeting 500,000 young people over 5 years.',
            ],
            potentialIndicatorsTitle: 'Potential MPM Monitor Indicators:',
            potentialIndicators: [
              'Net jobs created & First Employment Contract beneficiaries',
              'Actual budget expenditures vs. 350 MMDH target',
              'Youth enterprise funding disbursements',
              'Vocational training integration rate',
              'Youth unemployment trajectory',
            ],
            primarySource: { label: 'PAM — Electoral Programme 2026', url: 'https://pam.ma/' },
          },
          {
            title: "5.3 Parti de l'Istiqlal — PI",
            tagline: 'Programme 2026–2031: "Watani Moustaqbali" (My National Future)',
            content: [
              'Focuses on purchasing power, social mobility, strategic sovereignty, family protection, and governance.',
              'Flagship employment scheme: "Tajribati" — providing young job seekers with a 6-to-18-month paid professional experience with social security coverage and mentorship.',
              '"Afaq" initiative: guaranteeing that no young graduate or job seeker remains without work, training, or civic support for more than 6 months.',
              'Targeted training of 100,000 digital and technological talents.',
            ],
            potentialIndicatorsTitle: 'Potential MPM Monitor Indicators:',
            potentialIndicators: [
              'Beneficiaries enrolled in Tajribati and placement completion rates',
              'Transition rate from Tajribati internships to permanent contracts',
              'Afaq coverage latency (time to placement)',
              'Number of certified graduates from digital talent training',
            ],
            primarySource: { label: 'Parti de l’Istiqlal — Programme 2026–2031', url: 'https://istiqlal.ma/' },
          },
          {
            title: '5.4 Union Socialiste des Forces Populaires — USFP',
            tagline: '20 Commitments / 2026 Programme: Strong State, Productive Economy, Social Justice',
            content: [
              'Structures proposals around 20 commitments across 3 axes with explicit quantitative thresholds:',
              '• National unemployment reduced below 8.0%',
              '• Youth unemployment reduced below 10.0%',
              '• Female unemployment reduced below 15.0%',
              '• Female labour force participation raised above 30.0%',
              '• 250,000 new industrial jobs created',
              '• 200,000 young people entering employment or entrepreneurship annually',
              '• Financial support for 50,000 youth-led enterprises over 5 years',
              '• 80% post-training employment insertion rate',
              '• 10% quota of public procurement reserved for innovative startups and SMEs',
            ],
            potentialIndicatorsTitle: 'Potential MPM Monitor Indicators:',
            potentialIndicators: [
              'National, youth, and female unemployment rates',
              'Female activity rate vs. 30% target',
              'Industrial jobs created (Ministry of Industry & HCP)',
              'Startup share in state procurement (Marchés publics)',
              'Survival rate of supported youth enterprises',
            ],
            primarySource: { label: 'USFP — 20 Commitments / Electoral Programme 2026', url: 'https://www.usfp.ma/' },
          },
          {
            title: '5.5 Parti du Progrès et du Socialisme — PPS',
            tagline: 'Programme 2027–2031: Economic, Social and Institutional Renewal',
            content: [
              'Headline industrial commitment: Creation of 500,000 industrial jobs over 5 years.',
              'Targeting an increase in manufacturing industry’s contribution to 20% of national GDP.',
              'Strong emphasis on territorial equity, reindustrialization of neglected provinces, and youth civic training.',
            ],
            potentialIndicatorsTitle: 'Potential MPM Monitor Indicators:',
            potentialIndicators: [
              'Manufacturing share of GDP (HCP national accounts)',
              'Net industrial employment growth',
              'Regional distribution of industrial investments',
              'Real purchasing power and wage progression',
            ],
            primarySource: { label: 'PPS — Official 2026 campaign platform and programme', url: 'https://pps.ma/' },
          },
          {
            title: '5.6 Parti de la Justice et du Développement — PJD',
            tagline: 'Electoral Programme 2026: Good Governance, Ethics, and Economic Equity',
            content: [
              'Addresses institutional transparency, anti-corruption enforcement, purchasing power, and social protection sustainability.',
              'Employment approach prioritizes young people not in employment, education, or training (NEET), entrepreneurship micro-financing, and the formalisation of informal economic activities.',
            ],
            potentialIndicatorsTitle: 'Potential MPM Monitor Indicators:',
            potentialIndicators: [
              'NEET youth population trajectory',
              'Micro-enterprise registration and formalization rates',
              'Public procurement transparency and SME quota access',
              'Direct social aid targeting efficiency',
            ],
            primarySource: { label: 'PJD — Electoral Programme 2026', url: 'https://pjd.ma/' },
          },
        ],
        sources: {
          title: 'Section Sources: Official Political Party Manifestos',
          items: [
            { label: 'RNI — Programme 2026–2031', url: 'https://www.rni.ma/' },
            { label: 'PAM — Electoral Programme 2026', url: 'https://pam.ma/' },
            { label: 'Parti de l’Istiqlal — Programme 2026–2031', url: 'https://istiqlal.ma/' },
            { label: 'USFP — 20 Commitments / Electoral Programme 2026', url: 'https://www.usfp.ma/' },
            { label: 'PPS — Official 2026 campaign platform and programme', url: 'https://pps.ma/' },
            { label: 'PJD — Electoral Programme 2026', url: 'https://pjd.ma/' },
          ],
        },
      },
      {
        id: 'monitoring-cycle',
        title: '6. From Political Promise to Measurable Policy: The 8 Stages',
        paragraphs: [
          'A central objective of Morocco Policy Monitor is to distinguish between a political promise and an implemented public policy.',
          'An announced commitment travels through eight distinct institutional stages before affecting citizens:',
        ],
        listItems: [
          'Stage 1 — Political Commitment: A party announces a campaign promise.',
          'Stage 2 — Government Programme: Following coalition negotiations, the commitment is formally written into the Declaration of Government Policy (Article 88 of Constitution).',
          'Stage 3 — Budgetary Allocation: Funds are legally opened in the annual Loi de Finances.',
          'Stage 4 — Legal or Regulatory Action: Organic laws, regular laws, decrees, or ministerial orders are drafted and enacted.',
          'Stage 5 — Administrative Implementation: The designated public agency or ministerial department deploys the program.',
          'Stage 6 — Output: Concrete units delivered (e.g. number of schools built, credits granted).',
          'Stage 7 — Outcome: Measurable real-world change in citizen conditions (e.g. drop in illiteracy, rise in formal jobs).',
          'Stage 8 — Long-Term Impact: Sustainable transformation of macroeconomic or social indicators.',
        ],
        quote: 'An announced programme is not an implemented programme. And implementation is not automatically equivalent to policy success.',
      },
      {
        id: 'integrity',
        title: '7. Electoral Integrity, Independent Observation & Verification',
        paragraphs: [
          'The 23 September 2026 election is monitored by a substantial network of accredited independent observers.',
          'According to the National Human Rights Council (CNDH), 26 Moroccan NGOs, 1 national institution, and 30 international bodies received official accreditation.',
          'The CNDH deployed 783 observers from the Council itself, alongside 2,023 observers from accredited Moroccan civil-society NGOs.',
          'For Morocco Policy Monitor, this reinforces the absolute editorial necessity of separating established facts from campaign rhetoric, allegations, and unverified partisan claims.',
        ],
        sources: {
          title: 'Section Sources: Electoral Observation & Integrity',
          items: [
            { label: 'CNDH — Over 3,000 observers accredited for the 23 September election', url: 'https://www.cndh.ma/' },
            { label: 'Commission Spéciale d’Accréditation des Observateurs des Élections — CNDH', url: 'https://www.cndh.ma/' },
          ],
        },
      },
    ],
  },
  fr: {
    id: 'election-brief-001',
    slug: 'elections-legislatives-maroc-2026',
    category: 'special',
    categoryLabel: 'Rapports Spéciaux',
    briefNumber: 'Brief Électoral 001',
    title: 'Élections Législatives Marocaines de 2026',
    subtitle: 'Enjeux, propositions des partis et grille de suivi des engagements',
    edition: 'Édition pré-électorale',
    date: '22 septembre 2026',
    coveragePeriod: 'Élections législatives du 23 septembre 2026',
    nextUpdate: 'Résultats électoraux et composition de la Chambre des Représentants',
    author: 'Taha Khobizi',
    editorialPrinciple: {
      tagline: 'PRINCIPE ÉDITORIAL DU MPM',
      quote: 'Une promesse est une déclaration politique. L’exécution est une question factuelle. L’impact exige des preuves.',
      explanation: 'Le rôle de Morocco Policy Monitor est de maintenir ces trois dimensions strictement séparées. Ce brief consigne les engagements publiquement chiffrés et établit une base de référence factuelle pour le contrôle citoyen post-électoral.',
    },
    executiveSummary: {
      title: 'Synthèse Exécutive',
      paragraphs: [
        'Le Maroc se rend aux urnes le 23 septembre 2026 pour élire les 395 membres de la Chambre des Représentants. Il s’agit du 12e scrutin législatif de l’histoire du pays depuis l’indépendance.',
        'Selon les données électorales officielles, 15 801 162 électeurs sont inscrits sur les listes électorales, et 7 288 candidats concourent à travers 1 850 listes présentées par 27 partis politiques (le ministère de l’Intérieur recensant 28 formations en intégrant une alliance électorale et deux listes de sans appartenance politique).',
        'Le scrutin se tient dans un contexte de défis socio-économiques majeurs : l’emploi, le pouvoir d’achat, la santé, l’éducation, le logement, l’insertion des jeunes et la réduction des disparités territoriales dominent les programmes partisans.',
        'L’emploi constitue le cœur névralgique de la campagne. Selon l’ancienne méthodologie annuelle du HCP, le Maroc a clôturé 2025 avec un taux de chômage national de 13 %, culminant à 37,2 % chez les jeunes de 15 à 24 ans. Selon la nouvelle Enquête Nationale sur l’Emploi introduite par le HCP en 2026, le chômage s’est établi à 9,5 % au deuxième trimestre 2026 (27,2 % chez les jeunes).',
        'Plusieurs formations ont formulé des objectifs quantifiés : le RNI avance la création d’environ 1 000 000 d’emplois ; le PAM s’engage sur au moins 1 000 000 d’emplois nets adossés à une enveloppe quinquennale estimée à 350 MMDH ; l’USFP fixe des cibles précises de taux de chômage et de création d’emplois industriels.',
        'Ce rapport ne classe pas les partis, ne formule aucune consigne de vote et ne prédit aucun résultat électoral. Morocco Policy Monitor enregistre les engagements publics, identifie les métriques vérifiables et pose la référence pour le suivi des politiques publiques au cours de la législature 2026–2031.',
      ],
      keyQuestions: {
        attractivePromise: 'Quel parti formule la promesse la plus séduisante ?',
        measureEvidence: 'Qu’a-t-il été promis ? Comment cela se mesure-t-il ? Et quelles preuves primaires permettront d’en auditer l’exécution ?',
      },
    },
    sourcesPanelTitle: 'Sources Primaires & Justificatifs Officiels',
    sourcesPanelDesc: 'Liens institutionnels directs et programmes officiels des partis référencés dans cette section :',
    showSourcesBtn: 'Consulter les sources primaires et citations',
    hideSourcesBtn: 'Masquer les sources',
    sections: [
      {
        id: 'glance',
        title: '1. Le Scrutin en Chiffres Clés',
        table: {
          headers: ['Indicateur', 'Données Officielles 2026'],
          rows: [
            ['Date du scrutin', '23 septembre 2026'],
            ['Institution élue', 'Chambre des Représentants'],
            ['Sièges à pourvoir', '395'],
            ['Électeurs inscrits', '15 801 162'],
            ['Partis politiques participants', '27'],
            ['Listes de candidatures', '1 850'],
            ['Total des candidats', '7 288'],
            ['Candidatures féminines', '2 658 (36,5 %)'],
            ['Députés sortants candidats à leur réélection', '227'],
          ],
        },
        paragraphs: [
          'Les 395 sièges se répartissent entre 305 sièges au titre des circonscriptions électorales locales et 90 sièges au titre des circonscriptions régionales.',
          'Les statistiques officielles recensent 1 615 listes locales et 235 listes régionales. Les listes régionales sont exclusivement réservées aux femmes et comptent 1 783 candidates, portant le total des candidatures féminines à 2 658.',
          'Le corps électoral se compose d’environ 54 % d’hommes et 46 % de femmes. Les électeurs urbains représentent 55 % des inscrits et les ruraux 45 %. Plus de 29 % des inscrits ont 60 ans et plus, alors que la tranche des 18–24 ans ne représente qu’environ 4 % du corps électoral.',
          'Ces chiffres éclairent la campagne : alors que l’emploi des jeunes figure au premier rang des promesses électorales, les jeunes adultes ne représentent qu’une part très marginale des inscrits.',
        ],
        sources: {
          title: 'Sources de la section : Cadre électoral & chiffres officiels',
          items: [
            { label: 'Portail officiel des élections législatives 2026 — Elections.ma', url: 'https://www.elections.ma/' },
            { label: 'Chiffres officiels du scrutin — 15 801 162 inscrits et statistiques des candidats', url: 'https://www.maroc.ma/' },
            { label: 'Statistiques officielles des listes de candidatures — Maroc.ma', url: 'https://www.maroc.ma/' },
          ],
        },
      },
      {
        id: 'system',
        title: '2. Fonctionnement du Système Électoral Marocain',
        paragraphs: [
          'La Chambre des Représentants compte 395 députés élus au scrutin de liste au suffrage universel direct :',
          'Le quotient électoral est calculé en divisant le nombre d’électeurs inscrits dans la circonscription par le nombre de sièges à pourvoir. Les sièges non attribués au quotient sont affectés selon la règle du plus fort reste.',
          'Lorsqu’une liste remporte des sièges, les candidats sont proclamés élus strictement selon leur ordre de présentation sur la liste.',
          'Avec 7 288 candidats pour 395 sièges, la moyenne nationale dépasse 18 candidats par siège à pourvoir.',
        ],
        listItems: [
          '305 sièges élus au sein des circonscriptions électorales locales.',
          '90 sièges élus au sein des circonscriptions régionales réservées aux femmes.',
          'Scrutin de liste bloquée sans vote préférentiel ni panachage.',
          'Répartition proportionnelle selon la méthode du plus fort reste.',
        ],
        sources: {
          title: 'Sources de la section : Fonctionnement du scrutin',
          items: [
            { label: 'Fonctionnement du système électoral — Chambre des Représentants', url: 'https://www.chambredesrepresentants.ma/' },
            { label: 'Loi organique n° 27-11 relative à la Chambre des Représentants — Secrétariat Général du Gouvernement', url: 'http://www.sgg.gov.ma/' },
          ],
        },
      },
      {
        id: 'issues',
        title: '3. Les Grands Axes du Débat Électoral',
        paragraphs: [
          'Aucun enjeu unique n’écrase le scrutin de 2026. L’analyse comparative des manifestes et discours électoraux met en évidence quatre priorités structurantes :',
        ],
        subsections: [
          {
            title: 'Emploi et insertion professionnelle',
            tagline: 'L’axe le plus mesurable et auditable de la campagne',
            content: [
              'En 2025, l’économie a créé 193 000 emplois selon le HCP, mais le taux de chômage culminait à 13 % (37,2 % chez les 15–24 ans).',
              'La nouvelle méthodologie 2026 de l’Enquête Emploi du HCP établit le chômage à 9,5 % au T2 2026 (27,2 % pour les jeunes). MPM veille à spécifier la méthodologie statistique pour chaque indicateur afin de prévenir toute confusion d’interprétation.',
            ],
            primarySource: { label: 'HCP — Résultats annuels de l’emploi 2025 & Enquête T2 2026', url: 'https://www.hcp.ma/' },
          },
          {
            title: 'Pouvoir d’achat et coût de la vie',
            tagline: 'Salaires, fiscalité des ménages, retraites et transferts directs',
            content: [
              'Revalorisation du SMIG/SMAG, aménagement de l’IR, réforme des retraites et pérennisation de l’Aide Sociale Directe : comment la croissance se matérialise-t-elle dans le revenu réel des ménages ?',
            ],
            primarySource: { label: 'Bank Al-Maghrib — Rapports annuels & Notes sur la politique monétaire', url: 'https://www.bkam.ma/' },
          },
          {
            title: 'Éducation, santé publique et logement',
            tagline: 'Les piliers de l’État Social',
            content: [
              'Lutte contre le décrochage scolaire, réhabilitation des hôpitaux de proximité, réduction des délais de rendez-vous médicaux et déploiement du programme d’aide directe au logement (Daam Sakane).',
            ],
            primarySource: { label: 'Cour des comptes — Rapports annuels sur les services publics de santé et d’éducation', url: 'https://www.courdescomptes.ma/' },
          },
          {
            title: 'Stress hydrique, transition énergétique et équité territoriale',
            tagline: 'Défis souverains de long terme',
            content: [
              'Gestion de la sécheresse structurelle, stations de dessalement de l’eau de mer, autoroutes de l’eau et réduction des disparités régionales entre littoral atlantique et provinces de l’intérieur.',
            ],
            primarySource: { label: 'Ministère de l’Équipement et de l’Eau — Plan National de l’Eau 2050', url: 'https://www.equipement.gov.ma/' },
          },
        ],
      },
      {
        id: 'economic-context',
        title: '4. Contexte Économique : Les Données de Référence',
        paragraphs: [
          'Le prochain gouvernement hérite d’une dynamique d’investissements majeurs dans les infrastructures, conjuguée à des tensions persistantes sur le marché du travail.',
          'Données annuelles 2025 du HCP (ancienne méthodologie) :',
        ],
        listItems: [
          '193 000 postes d’emploi créés en net.',
          'Taux de chômage national : 13,0 %.',
          'Chômage des jeunes de 15 à 24 ans : 37,2 %.',
          'Taux de chômage féminin : 20,5 %.',
          'Taux de sous-emploi : 10,9 %.',
          'Évolution sectorielle : Services (+123 000), BTP (+64 000), Industrie (+46 000), Agriculture et Pêche (-41 000 en raison de la sécheresse prolongée).',
        ],
        subheading: 'Nouvelle Enquête Nationale sur l’Emploi (T2 2026) :',
        table: {
          headers: ['Indicateur (Nouvelle Enquête HCP 2026)', 'Valeur observée'],
          rows: [
            ['Taux de chômage national', '9,5 %'],
            ['Taux de chômage des jeunes (15–24 ans)', '27,2 %'],
            ['Taux de chômage féminin', '14,8 %'],
            ['Taux de chômage masculin', '8,1 %'],
            ['Taux d’activité national', '42,2 %'],
            ['Taux d’activité masculin', '66,5 %'],
            ['Taux d’activité féminin', '18,1 %'],
          ],
        },
        sources: {
          title: 'Sources de la section : Données macroéconomiques et marché du travail',
          items: [
            { label: 'HCP — Activité, Emploi et Chômage : Résultats annuels 2025', url: 'https://www.hcp.ma/' },
            { label: 'HCP — Nouvelle Enquête Emploi / Résultats du 2e trimestre 2026', url: 'https://www.hcp.ma/' },
          ],
        },
      },
      {
        id: 'party-proposals',
        title: '5. Que Proposent les Principaux Partis ?',
        paragraphs: [
          'Morocco Policy Monitor ne synthétise pas des manifestes partisans intégraux. Cette section consigne les engagements publiquement chiffrés et vérifiables des partis parlementaires.',
          'Les données ci-dessous sont enregistrées comme engagements politiques déclarés, et non comme prévisions vérifiées ou validations de faisabilité.',
        ],
        subsections: [
          {
            title: '5.1 Rassemblement National des Indépendants — RNI',
            tagline: 'Programme 2026–2031 : « Dignité et Opportunités pour Tous »',
            content: [
              'Met l’accent sur la création d’emplois, l’investissement privé, l’inclusion des jeunes et la consolidation des piliers de l’État Social.',
              'Annonce un objectif de création d’environ 1 000 000 d’emplois au cours de la mandature, accompagné d’accords de revalorisation salariale et de soutien à l’activité féminine.',
            ],
            potentialIndicatorsTitle: 'Indicateurs de suivi MPM :',
            potentialIndicators: [
              'Créations nettes annuelles d’emplois (HCP)',
              'Taux de chômage national et des jeunes',
              'Taux d’activité des femmes',
              'Part des investissements privés (Charte de l’investissement)',
              'Effectifs bénéficiaires des programmes d’emploi dédiés',
            ],
            primarySource: { label: 'RNI — Programme 2026–2031', url: 'https://www.rni.ma/' },
          },
          {
            title: '5.2 Parti Authenticité et Modernité — PAM',
            tagline: 'Programme Électoral 2026 : 5 Pactes Majeurs et 20 Engagements',
            content: [
              'Évalue le coût global de son programme quinquennal à 350 MMDH (milliards de dirhams).',
              'S’engage sur la création d’au moins 1 000 000 d’emplois nets pendant la mandature.',
              '5 Pactes : Pouvoir d’achat, Insertion des jeunes, Citoyenneté et services publics, Sécurité stratégique, Croissance durable.',
              'Alloue 50 MMDH spécifiquement au Pacte Jeunesse, incluant un « Contrat Premier Emploi » ciblant 500 000 jeunes sur 5 ans.',
            ],
            potentialIndicatorsTitle: 'Indicateurs de suivi MPM :',
            potentialIndicators: [
              'Créations nettes d’emplois et bénéficiaires du Contrat Premier Emploi',
              'Exécution budgétaire réelle par rapport aux 350 MMDH annoncés',
              'Financements octroyés aux micro-entreprises de jeunes',
              'Taux d’insertion professionnelle des diplômés de la formation',
            ],
            primarySource: { label: 'PAM — Programme Électoral 2026', url: 'https://pam.ma/' },
          },
          {
            title: '5.3 Parti de l’Istiqlal — PI',
            tagline: 'Programme 2026–2031 : « Watani Moustaqbali » (Mon Avenir National)',
            content: [
              'Articulé autour du pouvoir d’achat, des services publics, du développement économique, de la souveraineté stratégique et de la famille.',
              'Programme phare d’insertion : « Tajribati », offrant aux jeunes une première expérience professionnelle indemnisée de 6 à 18 mois avec couverture sociale et tutorat.',
              'Dispositif « Afaq » : garantie qu’aucun jeune diplômé ne demeure sans emploi, formation ou accompagnement pendant plus de 6 mois.',
              'Formation ciblée de 100 000 talents dans les métiers du numérique.',
            ],
            potentialIndicatorsTitle: 'Indicateurs de suivi MPM :',
            potentialIndicators: [
              'Bénéficiaires insérés dans le programme Tajribati',
              'Taux de conversion des stages Tajribati en emplois stables',
              'Délai moyen d’orientation des diplômés vers le dispositif Afaq',
              'Nombre de diplômés certifiés dans les filières du numérique',
            ],
            primarySource: { label: 'Parti de l’Istiqlal — Programme 2026–2031', url: 'https://istiqlal.ma/' },
          },
          {
            title: '5.4 Union Socialiste des Forces Populaires — USFP',
            tagline: '20 Engagements / Programme 2026 : État Fort, Économie Productive, Justice Sociale',
            content: [
              'Formule des cibles quantitatives précises :',
              '• Taux de chômage national abaissé sous la barre des 8,0 %',
              '• Chômage des jeunes ramené sous les 10,0 %',
              '• Chômage féminin ramené sous les 15,0 %',
              '• Taux d’activité des femmes porté au-delà de 30,0 %',
              '• 250 000 emplois industriels créés',
              '• 200 000 jeunes insérés annuellement dans l’emploi ou l’entrepreneuriat',
              '• Financement et accompagnement de 50 000 entreprises de jeunes sur 5 ans',
              '• 80 % de taux d’insertion post-formation professionnelle',
              '• Quota de 10 % de la commande publique réservé aux startups et PME innovantes',
            ],
            potentialIndicatorsTitle: 'Indicateurs de suivi MPM :',
            potentialIndicators: [
              'Trajectoire des taux de chômage national, jeunes et femmes',
              'Taux d’activité féminine comparé au seuil de 30 %',
              'Créations nettes d’emplois industriels (HCP et Ministère de l’Industrie)',
              'Part des startups dans les marchés publics de l’État',
            ],
            primarySource: { label: 'USFP — 20 Engagements / Programme Électoral 2026', url: 'https://www.usfp.ma/' },
          },
          {
            title: '5.5 Parti du Progrès et du Socialisme — PPS',
            tagline: 'Programme 2027–2031 : Renouveau Économique, Social et Institutionnel',
            content: [
              'Objectif industriel de référence : création de 500 000 emplois industriels sur 5 ans.',
              'Élévation de la contribution de l’industrie manufacturière à 20 % du PIB.',
              'Priorité à l’équité territoriale, à la réindustrialisation des bassins régionaux et à l’insertion civique des jeunes.',
            ],
            potentialIndicatorsTitle: 'Indicateurs de suivi MPM :',
            potentialIndicators: [
              'Part de l’industrie manufacturière dans le PIB national',
              'Créations nettes d’emplois dans les filières industrielles',
              'Répartition régionale des investissements industriels',
            ],
            primarySource: { label: 'PPS — Programme électoral et plateforme de campagne 2026', url: 'https://pps.ma/' },
          },
          {
            title: '5.6 Parti de la Justice et du Développement — PJD',
            tagline: 'Programme Électoral 2026 : Gouvernance, Éthique Publique et Équité Économique',
            content: [
              'Priorité à la probité administrative, à la lutte contre la rente et la corruption, et à la pérennité budgétaire des transferts sociaux.',
              'Approche de l’emploi centrée sur les jeunes sans emploi ni formation (NEET), le micro-crédit productif et l’intégration de l’économie informelle.',
            ],
            potentialIndicatorsTitle: 'Indicateurs de suivi MPM :',
            potentialIndicators: [
              'Évolution de la proportion des jeunes NEET',
              'Immatriculation et formalisation des micro-entreprises',
              'Transparence de la commande publique',
              'Ciblage équitable de l’Aide Sociale Directe',
            ],
            primarySource: { label: 'PJD — Programme Électoral 2026', url: 'https://pjd.ma/' },
          },
        ],
        sources: {
          title: 'Sources de la section : Programmes officiels des partis',
          items: [
            { label: 'RNI — Programme 2026–2031', url: 'https://www.rni.ma/' },
            { label: 'PAM — Programme Électoral 2026', url: 'https://pam.ma/' },
            { label: 'Parti de l’Istiqlal — Programme 2026–2031', url: 'https://istiqlal.ma/' },
            { label: 'USFP — 20 Engagements / Programme Électoral 2026', url: 'https://www.usfp.ma/' },
            { label: 'PPS — Plateforme de campagne et programme officiel 2026', url: 'https://pps.ma/' },
            { label: 'PJD — Programme Électoral 2026', url: 'https://pjd.ma/' },
          ],
        },
      },
      {
        id: 'monitoring-cycle',
        title: '6. De la Promesse Politique à la Politique Publique : Le Cycle en 8 Étapes',
        paragraphs: [
          'La mission de Morocco Policy Monitor consiste à distinguer rigoureusement un engagement électoral d’une politique publique effectivement exécutée.',
          'Une promesse traverse huit étapes institutionnelles distinctes :',
        ],
        listItems: [
          'Étape 1 — Engagement partisan : Déclaration publique ou promesse de campagne.',
          'Étape 2 — Programme gouvernemental : Intégration formelle dans la Déclaration de politique générale (Article 88 de la Constitution).',
          'Étape 3 — Traduction budgétaire : Inscription et vote des lignes de crédits dans la Loi de finances annuelle.',
          'Étape 4 — Dispositif juridique : Promulgation des lois ou décrets d’application au Bulletin Officiel.',
          'Étape 5 — Mise en œuvre administrative : Déploiement opérationnel par les ministères et établissements publics.',
          'Étape 6 — Livrable (Output) : Réalisations concrètes mesurables (infrastructures livrées, effectifs formés).',
          'Étape 7 — Résultat (Outcome) : Amélioration mesurable de la situation réelle des citoyens.',
          'Étape 8 — Impact de long terme : Transformation structurelle des équilibres économiques et sociaux.',
        ],
        quote: 'Un programme annoncé n’est pas un programme exécuté. Et l’exécution d’une dépense ne garantit pas automatiquement l’amélioration de la situation des citoyens.',
      },
      {
        id: 'integrity',
        title: '7. Intégrité Électorale, Observation Indépendante et Protocole de Vérification',
        paragraphs: [
          'Le scrutin du 23 septembre 2026 fait l’objet d’un dispositif élargi d’observation électorale indépendante.',
          'D’après le Conseil National des Droits de l’Homme (CNDH), 26 ONG marocaines, 1 institution nationale et 30 organisations internationales ont reçu leur accréditation officielle.',
          'Le CNDH a mobilisé 783 observateurs du Conseil, aux côtés de 2 023 observateurs issus des associations marocaines accréditées.',
          'Pour Morocco Policy Monitor, cette architecture confirme l’impératif démocratique de distinguer faits vérifiés, allégations partisanes et conclusions institutionnelles indépendantes.',
        ],
        sources: {
          title: 'Sources de la section : Observation électorale & intégrité du scrutin',
          items: [
            { label: 'CNDH — Plus de 3 000 observateurs accrédités pour le scrutin du 23 septembre', url: 'https://www.cndh.ma/' },
            { label: 'Commission Spéciale d’Accréditation des Observateurs des Élections — CNDH', url: 'https://www.cndh.ma/' },
          ],
        },
      },
    ],
  },
  ar: {
    id: 'election-brief-001',
    slug: 'moroccos-2026-legislative-elections-ar',
    category: 'special',
    categoryLabel: 'التقارير الخاصة',
    briefNumber: 'الموجز الانتخابي 001',
    title: 'الانتخابات التشريعية المغربية 2026',
    subtitle: 'الرهانات المؤسساتية، التزامات الأحزاب، ومعايير التتبع المدني',
    edition: 'نسخة ما قبل الاقتراع',
    date: '22 شتنبر 2026',
    coveragePeriod: 'استحقاق 23 شتنبر 2026 لانتخاب مجلس النواب',
    nextUpdate: 'نتائج الاقتراع والتركيبة البرلمانية الجديدة',
    author: 'طه خوبيزي',
    editorialPrinciple: {
      tagline: 'المبدأ التحريري للمرصد',
      quote: 'الوعود تصريحات سياسية، والتنفيذ واقعة خاضعة للتحقق، والأثر يتطلب أدلة ملموسة.',
      explanation: 'تتمثل مهمة مرصد السياسات العمومية في الفصل الصارم بين الأبعاد الثلاثة. يوثق هذا الموجز الالتزامات المعلنة رسمياً بالأرقام، ويؤسس قاعدة إسناد مرجعية لتتبع السياسات العمومية طيلة الولاية التشريعية 2026–2031.',
    },
    executiveSummary: {
      title: 'الخلاصة التنفيذية',
      paragraphs: [
        'يتوجه الناخبون المغاربة إلى صناديق الاقتراع يوم 23 شتنبر 2026 لانتخاب أعضاء مجلس النواب الـ 395، في الاستحقاق التشريعي الثاني عشر منذ استقلال المملكة.',
        'بحسب المعطيات الرسمية، يبلغ عدد المسجلين في اللوائح الانتخابية 15,801,162 ناخباً، ويتنافس 7,288 مترشحاً ومترشحة من خلال 1,850 لائحة ترشيح مقدمة من لدن 27 حزباً سياسياً (فيما تشير وزارة الداخلية إلى 28 هيئة باحتساب تحالف انتخابي ولائحتين لمستقلين).',
        'تجرى الانتخابات في سياق اقتصادي واجتماعي يتسم بتحديات هيكلية كبرى: قضايا التشغيل، والقدرة الشرائية، والتعليم، والصحة، والسكن، وإدماج الشباب، والعدالة المجالية تتصدر أولويات البرامج الانتخابية.',
        'يشكل ملف التشغيل حجر الزاوية في الحملة؛ فبحسب المنهجية السنوية السابقة للمندوبية السامية للتخطيط، أنهى المغرب سنة 2025 بمعدل بطالة وطني بلغ 13%، ووصل إلى 37.2% لدى الشباب (15–24 سنة). أما وفق المنهجية الجديدة لبحث التشغيل المعتمدة في 2026، فقد بلغ معدل البطالة 9.5% خلال الفصل الثاني من 2026 (27.2% لدى الشباب).',
        'قدمت الأحزاب وعوداً متباينة بالأرقام: يلتزم حزب التجمع الوطني للأحرار بإحداث نحو 1,000,000 منصب شغل؛ ويلتزم حزب الأصالة والمعاصرة بمليون منصب شغل صافٍ على الأقل مع رصد غلاف مالي يناهز 350 مليار درهم؛ في حين حدد الاتحاد الاشتراكي أهدافاً كمية دقيقة لمعدلات البطالة والتشغيل الصناعي.',
        'لا يهدف هذا التقرير إلى تفضيل حزب على آخر أو تقديم توجيه تصويتي أو توقع النتائج؛ بل يوثق الالتزامات المعلنة رسمياً، ويحدد المؤشرات القابلة للقياس، ويضع قاعدة بيانات صلبة تمكن المواطن من مساءلة السياسات العمومية بعد الانتخابات.',
      ],
      keyQuestions: {
        attractivePromise: 'أي حزب يطرح الوعد الأكثر جاذبية للناخبين؟',
        measureEvidence: 'ما الذي وُعد به بدقة؟ كيف يمكن قياسه؟ وما هي الأدلة والمصادر الرسمية التي ستثبت تنفيذه؟',
      },
    },
    sourcesPanelTitle: 'الأدلة والمصادر الرسمية الأولية المعتمدة',
    sourcesPanelDesc: 'روابط رسمية ومباشرة للوثائق الدستورية، والإحصائيات المؤسساتية، والبرامج الحزبية الأصلية:',
    showSourcesBtn: 'عرض المصادر الأولية والمراجع الرسمية',
    hideSourcesBtn: 'إخفاء المصادر',
    sections: [
      {
        id: 'glance',
        title: '1. المعطيات الرقمية الأساسية للاقتراع',
        table: {
          headers: ['المؤشر', 'المعطى الرسمي 2026'],
          rows: [
            ['تاريخ الاقتراع', '23 شتنبر 2026'],
            ['المؤسسة المنتخبة', 'مجلس النواب'],
            ['إجمالي مقاعد المجلس', '395 مقعداً'],
            ['عدد الناخبين المسجلين', '15,801,162 ناخباً'],
            ['عدد الأحزاب المشاركة رسمياً', '27 حزباً'],
            ['إجمالي لوائح الترشيح', '1,850 لائحة'],
            ['إجمالي المترشحين والمترشحات', '7,288 مترشحاً'],
            ['الترشيحات النسوية', '2,658 مترشحة (36.5%)'],
            ['النواب الممارسون المرشحون مجدداً', '227 نائباً'],
          ],
        },
        paragraphs: [
          'تتوزع المقاعد الـ 395 بين 305 مقاعد برسم الدوائر الانتخابية المحلية، و90 مقعداً برسم الدوائر الانتخابية الجهوية.',
          'سجلت الإحصائيات الرسمية 1,615 لائحة محلية و235 لائحة جهوية. تخصص اللوائح الجهوية حصرياً للنساء وتضم 1,783 مترشحة، ليصل إجمالي الترشيحات النسوية إلى 2,658 مترشحة.',
          'يتكون الهيئة الناخبة من نحو 54% من الرجال و46% من النساء. ويمثل سكان الوسط الحضري 55% من المسجلين مقابل 45% في الوسط القروي. كما يمثل البالغون 60 سنة فما فوق أكثر من 29% من المسجلين، بينما لا تمثل فئة الشباب (18–24 سنة) سوى نحو 4% من مجموع الهيئة الناخبة.',
          'تكشف هذه المعطيات عن مفارقة بارزة: يحظى تشغيل الشباب وإدماجهم بالحيز الأكبر من الوعود الانتخابية، في حين يشكل الشباب أصغر شريحة مسجلة فعلياً في اللوائح الانتخابية.',
        ],
        sources: {
          title: 'مصادر القسم: الإطار الانتخابي والإحصائيات الرسمية',
          items: [
            { label: 'البوابة الرسمية للانتخابات التشريعية 2026 — Elections.ma', url: 'https://www.elections.ma/' },
            { label: 'الإحصائيات الرسمية للاقتراع — 15,801,162 ناخباً ومعطيات الترشيح', url: 'https://www.maroc.ma/' },
            { label: 'الإحصائيات الرسمية للوائح الترشيح — Maroc.ma', url: 'https://www.maroc.ma/' },
          ],
        },
      },
      {
        id: 'system',
        title: '2. قواعد وآليات المنظومة الانتخابية المغربية',
        paragraphs: [
          'يتألف مجلس النواب من 395 عضواً ينتخبون بالاقتراع العام المباشر عن طريق الاقتراع باللائحة:',
          'يحسب القاسم الانتخابي على أساس قسمة عدد الناخبين المسجلين في الدائرة على عدد المقاعد المخصصة لها، وتوزع المقاعد المتبقية بناءً على قاعدة أكبر البقايا.',
          'يتم إعلان فوز المترشحين بحسب ترتيبهم التسلسلي في اللائحة المعنية.',
          'بتنافس 7,288 مترشحاً على 395 مقعداً، يتجاوز المعدل الوطني 18 ترشيحاً لكل مقعد نيابي.',
        ],
        listItems: [
          '305 مقاعد تنتخب برسم الدوائر الانتخابية المحلية.',
          '90 مقعداً تنتخب برسم الدوائر الانتخابية الجهوية المخصصة للنساء.',
          'التصويت باللائحة المغلقة دون إمكانية التصويت التفضيلي أو التشطيب أو مزج اللوائح.',
          'توزيع المقاعد وفق التمثيل النسبي حسب قاعدة أكبر البقايا.',
        ],
        sources: {
          title: 'مصادر القسم: قواعد النظام الانتخابي',
          items: [
            { label: 'كيفية عمل النظام الانتخابي — مجلس النواب', url: 'https://www.chambredesrepresentants.ma/' },
            { label: 'القانون التنظيمي رقم 27.11 المتعلق بمجلس النواب — الأمانة العامة للحكومة', url: 'http://www.sgg.gov.ma/' },
          ],
        },
      },
      {
        id: 'issues',
        title: '3. المحاور الجوهرية للتنافس الانتخابي',
        paragraphs: [
          'لا توجد قضية أحادية تطغى على استحقاق 2026، بل تتقاطع اهتمامات البرامج الحزبية حول محاور هيكلية جامعة:',
        ],
        subsections: [
          {
            title: 'التشغيل وإحداث فرص الشغل',
            tagline: 'المحور الأكثر قابلية للقياس والتدقيق في الحملة',
            content: [
              'سجلت المندوبية السامية للتخطيط إحداث 193,000 منصب شغل سنة 2025، غير أن البطالة استقرت عند 13% (37.2% لدى الشباب).',
              'تطرح المنهجية الجديدة لمسح التشغيل لعام 2026 قاعدة إحصائية مغايرة: 9.5% بطالة وطنية في الفصل الثاني من 2026 (27.2% لدى الشباب). يحرص المرصد على توضيح المنهجية المعتمدة تفادياً لأي لبس مقارن.',
            ],
            primarySource: { label: 'المندوبية السامية للتخطيط — النتائج السنوية للتشغيل 2025 ومسح الفصل الثاني 2026', url: 'https://www.hcp.ma/' },
          },
          {
            title: 'القدرة الشرائية وتكاليف المعيشة',
            tagline: 'الأجور، الضرائب، التقاعد، وبرامج الدعم المباشر',
            content: [
              'تتناول برامج الأحزاب تحسين الحد الأدنى للأجور، مراجعة الضريبة على الدخل، إصلاح أنظمة التقاعد، وضمان استدامة الدعم الاجتماعي المباشر: كيف ينعكس النمو الاقتصادي على الدخل الحقيقي للأسر؟',
            ],
            primarySource: { label: 'بنك المغرب — التقارير السنوية ومذكرات السياسة النقدية', url: 'https://www.bkam.ma/' },
          },
          {
            title: 'التعليم والصحة والسكن',
            tagline: 'دعامات الدولة الاجتماعية',
            content: [
              'الحد من الهدر المدرسي، تعميم مدارس الريادة، تأهيل المراكز الاستشفائية، تقليص آجال المواعيد الطبية، وتنزيل برنامج الدعم المباشر لاقتناء السكن الرئيسي (دعم سكن).',
            ],
            primarySource: { label: 'المجلس الأعلى للحسابات — التقارير السنوية حول قطاعي الصحة والتعليم', url: 'https://www.courdescomptes.ma/' },
          },
          {
            title: 'الإجهاد المائي، الطاقة، والعدالة المجالية',
            tagline: 'التحديات الاستراتيجية الكبرى للمملكة',
            content: [
              'تدبير الجفاف الهيكلي، تسريع محطات تحلية مياه البحر، الربط المائي بين الأحواض، والانتقال الطاقي، مع تقليص الفوارق بين المحور الساحلي والمناطق الجبلية والقروية.',
            ],
            primarySource: { label: 'وزارة التجهيز والماء — المخطط الوطني للماء 2050', url: 'https://www.equipement.gov.ma/' },
          },
        ],
      },
      {
        id: 'economic-context',
        title: '4. السياق الاقتصادي: البيانات المرجعية الأساسية',
        paragraphs: [
          'سترث الحكومة المقبلة اقتصاداً يجمع بين تسريع وتيرة الاستثمارات الكبرى في البنية التحتية وضغوطات هيكلية مستمرة في سوق الشغل.',
          'النتائج السنوية لعام 2025 للمندوبية السامية للتخطيط (وفق المنهجية السابقة):',
        ],
        listItems: [
          'إحداث 193,000 منصب شغل صافٍ.',
          'معدل البطالة الوطني: 13.0%.',
          'معدل البطالة لدى الشباب (15–24 سنة): 37.2%.',
          'معدل البطالة في صفوف النساء: 20.5%.',
          'معدل الشغل الناقص: 10.9%.',
          'توزيع مناصب الشغل حسب القطاعات: الخدمات (+123,000)، البناء والأشغال العمومية (+64,000)، الصناعة (+46,000)، الفلاحة والصيد البحري (-41,000 بسبب الجفاف).',
        ],
        subheading: 'المؤشرات المرجعية وفق البحث الوطني الجديد للتشغيل (الفصل الثاني 2026):',
        table: {
          headers: ['المؤشر (وفق المنهجية الجديدة 2026)', 'النسبة المسجلة'],
          rows: [
            ['معدل البطالة على المستوى الوطني', '9.5%'],
            ['معدل بطالة الشباب (15–24 سنة)', '27.2%'],
            ['معدل البطالة لدى الإناث', '14.8%'],
            ['معدل البطالة لدى الذكور', '8.1%'],
            ['معدل النشاط الإجمالي', '42.2%'],
            ['معدل النشاط لدى الذكور', '66.5%'],
            ['معدل النشاط لدى الإناث', '18.1%'],
          ],
        },
        sources: {
          title: 'مصادر القسم: معطيات الاقتصاد وسوق الشغل',
          items: [
            { label: 'المندوبية السامية للتخطيط — وضعية سوق الشغل: النتائج السنوية لعام 2025', url: 'https://www.hcp.ma/' },
            { label: 'المندوبية السامية للتخطيط — البحث الوطني الجديد حول التشغيل / نتائج الفصل الثاني 2026', url: 'https://www.hcp.ma/' },
          ],
        },
      },
      {
        id: 'party-proposals',
        title: '5. ماذا تقترح الأحزاب السياسية الكبرى؟',
        paragraphs: [
          'لا يستعرض مرصد السياسات العمومية البرامج الانتخابية الكاملة، بل يقتصر هذا القسم على حصر الالتزامات المحددة بالأرقام والقابلة للقياس والتدقيق.',
          'البيانات المدرجة أدناه مسجلة بصفتها التزامات حزبية معلنة، وليست توقعات اقتصادية مستقلة أو تقييماً لقابليتها للتطبيق.',
        ],
        subsections: [
          {
            title: '5.1 التجمع الوطني للأحرار (RNI)',
            tagline: 'برنامج 2026–2031: «الكرامة والفرص للجميع»',
            content: [
              'يركز على التشغيل، وتحفيز الاستثمار الخاص، والإدماج الاقتصادي للشباب، واستكمال أوراش الدولة الاجتماعية.',
              'يلتزم بإحداث نحو 1,000,000 منصب شغل خلال الولاية التشريعية، مع مواصلة مسار الحوار الاجتماعي والزيادة في الأجور ودعم نشاط المرأة.',
            ],
            potentialIndicatorsTitle: 'مؤشرات التتبع المقترحة للمرصد:',
            potentialIndicators: [
              'مناصب الشغل الصافية المحدثة سنوياً (المندوبية السامية للتخطيط)',
              'تطور معدلي البطالة الوطني وبطالة الشباب',
              'معدل نشاط النساء في سوق الشغل',
              'حصة الاستثمار الخاص مقارنة بالعام (ميثاق الاستثمار)',
            ],
            primarySource: { label: 'التجمع الوطني للأحرار — البرنامج الانتخابي 2026–2031', url: 'https://www.rni.ma/' },
          },
          {
            title: '5.2 حزب الأصالة والمعاصرة (PAM)',
            tagline: 'البرنامج الانتخابي 2026: 5 تعاقدات كبرى و20 التزاماً',
            content: [
              'يقدر الغلاف المالي الإجمالي لتنزيل برنامجه الخماسي بنحو 350 مليار درهم.',
              'يلتزم بإحداث ما لا يقل عن 1,000,000 منصب شغل صافٍ طيلة الولاية التشريعية.',
              'خمسة تعاقدات: القدرة الشرائية، إدماج الشباب، المواطنة والخدمات العمومية، الأمن الاستراتيجي، والنمو المستدام.',
              'يخصص 50 مليار درهم لميثاق الشباب متضمناً «عقد الشغل الأول» الذي يستهدف 500,000 شاب وشابة على مدى 5 سنوات.',
            ],
            potentialIndicatorsTitle: 'مؤشرات التتبع المقترحة للمرصد:',
            potentialIndicators: [
              'مناصب الشغل المحدثة ومستفيدي عقد الشغل الأول',
              'الإنفاق الميزانياتي الفعلي مقارنة بـ 350 مليار درهم المعلنة',
              'التمويلات الموجهة للمقاولات الشبابية',
              'نسبة إدماج خريجي التكوين المهني',
            ],
            primarySource: { label: 'حزب الأصالة والمعاصرة — البرنامج الانتخابي 2026', url: 'https://pam.ma/' },
          },
          {
            title: '5.3 حزب الاستقلال (PI)',
            tagline: 'برنامج 2026–2031: «وطني مستقبلي»',
            content: [
              'يتمحور حول حماية القدرة الشرائية، تجويد الخدمات العمومية، السيادة الاستراتيجية، وتقوية الأسرة.',
              'إطلاق برنامج «تجربتي» لتمكين الشباب من أول تجربة مهنية مؤدى عنها لمدة تتراوح بين 6 و18 شهراً مع التغطية الاجتماعية.',
              'إطلاق مبادرة «آفاق» لضمان عدم بقاء أي شاب حامل شهادة أو باحث عن عمل لأكثر من 6 أشهر دون فرصة تكوين أو مواكبة.',
              'تكوين 100,000 كفاءة رقمية في مهن التكنولوجيا الحديثة.',
            ],
            potentialIndicatorsTitle: 'مؤشرات التتبع المقترحة للمرصد:',
            potentialIndicators: [
              'المستفيدون من برنامج تجربتي ونسب إتمام التدريب',
              'نسبة تحويل تدريبات تجربتي إلى عقود عمل دائمة',
              'مدة مواكبة خريجي الجامعات ضمن مبادرة آفاق',
              'عدد الخريجين الحاصلين على شواهد الكفاءة الرقمية',
            ],
            primarySource: { label: 'حزب الاستقلال — البرنامج الانتخابي 2026–2031', url: 'https://istiqlal.ma/' },
          },
          {
            title: '5.4 الاتحاد الاشتراكي للقوات الشعبية (USFP)',
            tagline: '20 التزاماً / برنامج 2026: دولة قوية، اقتصاد منتج، وعدالة اجتماعية',
            content: [
              'يصيغ مقترحاته وفق أهداف كمية محددة بدقة:',
              '• خفض معدل البطالة الوطني إلى ما دون 8.0%',
              '• خفض بطالة الشباب إلى ما دون 10.0%',
              '• خفض بطالة النساء إلى ما دون 15.0%',
              '• رفع معدل نشاط النساء إلى ما فوق 30.0%',
              '• إحداث 250,000 منصب شغل صناعي',
              '• إدماج 200,000 شاب سنوياً في سوق الشغل أو المقاولاتية',
              '• تمويل ومواكبة 50,000 مقاولة شبابية على مدى 5 سنوات',
              '• بلوغ نسبة إدماج 80% لخريجي التكوين المهني',
              '• تخصيص حصة 10% من الصفقات العمومية للمقاولات الناشئة والمبتكرة',
            ],
            potentialIndicatorsTitle: 'مؤشرات التتبع المقترحة للمرصد:',
            potentialIndicators: [
              'مسار مؤشرات البطالة الوطنية ولدى الشباب والنساء',
              'معدل نشاط الإناث مقارنة بهدف 30%',
              'مناصب الشغل الصناعية المحدثة (وزارة الصناعة والمندوبية)',
              'حصة المقاولات الناشئة في الصفقات العمومية للدولة',
            ],
            primarySource: { label: 'الاتحاد الاشتراكي — 20 التزاماً / البرنامج الانتخابي 2026', url: 'https://www.usfp.ma/' },
          },
          {
            title: '5.5 حزب التقدم والاشتراكية (PPS)',
            tagline: 'برنامج 2027–2031: تعاقد جديد من أجل اقتصاد قوي ومجتمع متضامن',
            content: [
              'يلتزم بإحداث 500,000 منصب شغل صناعي على مدى 5 سنوات.',
              'رفع مساهمة الصناعة التحويلية في الناتج الداخلي الخام إلى 20%.',
              'التأكيد على العدالة المجالية وإعادة توطين الأنشطة الإنتاجية في المناطق ذات الخصاص، مع إدماج الشباب في الحياة العامة.',
            ],
            potentialIndicatorsTitle: 'مؤشرات التتبع المقترحة للمرصد:',
            potentialIndicators: [
              'حصة الصناعة في الناتج الداخلي الخام (الحسابات الوطنية للمندوبية)',
              'مناصب الشغل الصافية المحدثة في القطاعات الصناعية',
              'التوزيع الجهوي للاستثمارات الصناعية',
            ],
            primarySource: { label: 'حزب التقدم والاشتراكية — المنصة والبرنامج الانتخابي 2026', url: 'https://pps.ma/' },
          },
          {
            title: '5.6 حزب العدالة والتنمية (PJD)',
            tagline: 'البرنامج الانتخابي 2026: النزاهة المؤسساتية، محاربة الفساد، والعدالة الاجتماعية',
            content: [
              'يركز على النزاهة والشفافية ومحاربة اقتصاد الريع والاحتكار، وحماية ديمومة التحويلات الاجتماعية الموجهة للفئات الهشة.',
              'مقاربة التشغيل تركز على فئة الشباب خارج التعليم والتكوين والعمل (NEET)، القروض الصغرى المنتجة، وإدماج القطاع غير المهيكل.',
            ],
            potentialIndicatorsTitle: 'مؤشرات التتبع المقترحة للمرصد:',
            potentialIndicators: [
              'تطور فئة الشباب خارج منظومة التعليم والتكوين والعمل (NEET)',
              'نسبة إدماج وتصريح المقاولات الصغرى والمهن الحرة',
              'مؤشرات الشفافية في الصفقات العمومية',
              'دقة استهداف المستفيدين من الدعم الاجتماعي المباشر',
            ],
            primarySource: { label: 'حزب العدالة والتنمية — البرنامج الانتخابي 2026', url: 'https://pjd.ma/' },
          },
        ],
        sources: {
          title: 'مصادر القسم: البرامج الرسمية المعتمدة للأحزاب',
          items: [
            { label: 'التجمع الوطني للأحرار — البرنامج الانتخابي 2026–2031', url: 'https://www.rni.ma/' },
            { label: 'حزب الأصالة والمعاصرة — البرنامج الانتخابي 2026', url: 'https://pam.ma/' },
            { label: 'حزب الاستقلال — البرنامج الانتخابي 2026–2031', url: 'https://istiqlal.ma/' },
            { label: 'الاتحاد الاشتراكي — 20 التزاماً / البرنامج الانتخابي 2026', url: 'https://www.usfp.ma/' },
            { label: 'حزب التقدم والاشتراكية — منصة الحملة والبرنامج الرسمي 2026', url: 'https://pps.ma/' },
            { label: 'حزب العدالة والتنمية — البرنامج الانتخابي 2026', url: 'https://pjd.ma/' },
          ],
        },
      },
      {
        id: 'monitoring-cycle',
        title: '6. من الوعد السياسي إلى السياسة العمومية: دورة التتبع في 8 مراحل',
        paragraphs: [
          'يتمثل الهدف المحوري لمرصد السياسات العمومية في التمييز الدقيق بين الوعود السياسية والسياسات العمومية المنفذة فعلياً على أرض الواقع.',
          'يمر الالتزام الانتخابي بثماني مراحل مؤسساتية متمايزة:',
        ],
        listItems: [
          'المرحلة 1 — الالتزام الحزبي: إعلان المقترح ضمن البرنامج الانتخابي أو الحملة.',
          'المرحلة 2 — البرنامج الحكومي: إدراج الالتزام رسمياً في التصريح الحكومي (الفصل 88 من الدستور).',
          'المرحلة 3 — الاعتماد المالي: فتح وتصويت بنود الاعتمادات في قانون المالية السنوي.',
          'المرحلة 4 — المقتضى القانوني: سن القوانين التنظيمية أو العادية أو المراسيم التطبيقية في الجريدة الرسمية.',
          'المرحلة 5 — التنزيل الإداري: شروع الوزارات والمؤسسات العمومية المختصة في التنفيذ.',
          'المرحلة 6 — الإنجاز المادي (Output): الوحدات المنجزة القابلة للحصر المادي (بناء مدارس، عدد المستفيدين).',
          'المرحلة 7 — الأثر الملموس (Outcome): التغير الفعلي الإيجابي في معيشة المواطنين (انخفاض الأمية، ارتفاع الشغل اللائق).',
          'المرحلة 8 — الأثر الهيكلي المستدام: التحول الإيجابي في المؤشرات الاجتماعية والاقتصادية الكبرى.',
        ],
        quote: 'البرنامج المعلن ليس برنامجاً منفذاً. وصرف الاعتمادات المالية لا يضمن تلقائياً تحسن واقع المواطنين دون أثر ملموس مثبت بالأدلة.',
      },
      {
        id: 'integrity',
        title: '7. النزاهة الانتخابية والملاحظة المستقلة وضوابط التحقق',
        paragraphs: [
          'يخضع اقتراع 23 شتنبر 2026 لملاحظة مستقلة واسعة من لدن شبكات وطنية ودولية معتمدة.',
          'أعلن المجلس الوطني لحقوق الإنسان (CNDH) اعتماد 26 منظمة غير حكومية مغربية ومؤسسة وطنية واحدة، إلى جانب 30 هيئة ومنظمة دولية.',
          'عبأ المجلس الوطني 783 ملاحظاً من أطره، بالإضافة إلى 2,023 ملاحظاً يمثلون الجمعيات الوطنية المعتمدة.',
          'يؤكد هذا الإطار التزام مرصد السياسات العمومية بالفرز الصارم بين الوقائع الموثقة، والادعاءات الحزبية، والخلاصات المؤسساتية المستقلة.',
        ],
        sources: {
          title: 'مصادر القسم: الملاحظة الانتخابية والنزاهة',
          items: [
            { label: 'المجلس الوطني لحقوق الإنسان — اعتماد أزيد من 3,000 ملاحظ وملاحظة لانتخابات 23 شتنبر', url: 'https://www.cndh.ma/' },
            { label: 'اللجنة الخاصة لاعتماد ملاحظي الانتخابات — CNDH', url: 'https://www.cndh.ma/' },
          ],
        },
      },
    ],
  },
};
