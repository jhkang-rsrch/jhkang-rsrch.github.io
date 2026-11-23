// All site content lives in this file.
// A value is either a plain string (same in both languages) or { en, ko }.
// After editing, push to main: GitHub Actions rebuilds and deploys the site.

export const site = {
  url: 'https://jhkang-rsrch.github.io',
  name: { en: 'Juheon Kang', ko: '강주헌' },
  altName: { en: '강주헌', ko: 'Juheon Kang' },
  role: {
    en: 'Ph.D. Student, Department of Artificial Intelligence',
    ko: '인공지능학과 석·박사통합과정',
  },
  affiliation: { en: 'University of Seoul', ko: '서울시립대학교' },
  description: {
    en: 'Juheon Kang is a Ph.D. student at the University of Seoul working on AI safety, interpretability, and LLM red-teaming.',
    ko: '서울시립대학교 인공지능학과 강주헌의 홈페이지. AI safety, interpretability, LLM red-teaming을 연구합니다.',
  },
  bio: [
    {
      en: 'I am a Ph.D. student in the Department of Artificial Intelligence at the University of Seoul, advised by Prof. Wonseok Hwang at IDA.L Lab. With a background in mathematics and philosophy, I study how AI systems can be made safe, robust, and transparent.',
      ko: '서울시립대학교 인공지능학과 석·박사통합과정에 재학 중이며, IDA.L 연구실에서 황원석 교수님의 지도를 받고 있습니다. 수학과 철학을 전공한 배경을 바탕으로 AI 시스템을 안전하고 강건하며 투명하게 만드는 방법을 연구합니다.',
    },
    {
      en: 'My work spans mechanistic interpretability and neuron-level analysis of deep models, LLM evaluation and red-teaming, and sensitive-information detection and de-identification. I also apply LLMs to law, scientific discovery with protein language models, and education.',
      ko: 'Mechanistic interpretability와 뉴런 단위 분석, LLM 평가와 red-teaming, 민감정보 탐지와 비식별화를 주로 다룹니다. 법률, protein language model을 활용한 과학적 발견, 교육 분야에 LLM을 적용하는 연구도 함께 하고 있습니다.',
    },
  ],
  interests: [
    { en: 'AI Safety & Alignment', ko: 'AI Safety & Alignment' },
    { en: 'Mechanistic Interpretability', ko: 'Mechanistic Interpretability' },
    { en: 'LLM Evaluation & Red-Teaming', ko: 'LLM 평가 · Red-Teaming' },
    { en: 'De-identification', ko: '민감정보 비식별화' },
    { en: 'Robustness', ko: 'Robustness' },
    { en: 'Legal NLP', ko: 'Legal NLP' },
  ],
  // Leave a link empty ('') to hide its button.
  links: {
    email: '2715wngjs@uos.ac.kr',
    github: 'https://github.com/jhkang-rsrch',
    scholar: '',
    blog: 'https://blog.naver.com/math_honey',
    lab: 'https://uos-nlp.notion.site/',
  },
};

export const news = [
  { date: 'Dec 2026', text: { en: 'FTC to be presented at ACCV 2026.', ko: 'ACCV 2026에서 FTC 발표 예정.' } },
  { date: 'Oct 2026', text: { en: 'Two papers at EMNLP 2026: Q-CAT in the main conference and one in Findings.', ko: 'EMNLP 2026에 논문 2편 게재 (Q-CAT은 Main, 1편은 Findings).' } },
  { date: 'Jun 2026', text: { en: 'Oral presentation of HERALD at CISC-S 2026.', ko: 'CISC-S 2026에서 HERALD 구두 발표.' } },
  { date: 'Mar 2026', text: { en: 'Oral paper and student volunteer at EACL 2026 in Rabat, Morocco.', ko: 'EACL 2026(모로코 라바트) 구두 발표 논문 게재 및 학생 자원봉사 참여.' } },
  { date: 'Dec 2025', text: { en: 'Received the Deputy Prime Minister and Minister of Science and ICT Award.', ko: '부총리 겸 과학기술정보통신부장관상 수상.' } },
  { date: 'Nov 2025', text: { en: 'Oral presentation of K-SNAC at the ASE 2025 Workshop.', ko: 'ASE 2025 Workshop에서 K-SNAC 구두 발표.' } },
  { date: 'Nov 2025', text: { en: 'Ranked 28th of 187 teams at the AI Hacking Defense Competition (ACDC).', ko: 'AI 해킹방어대회(ACDC) 187팀 중 28위.' } },
  { date: 'Aug 2025', text: { en: 'Third place at the KISIA Cybersecurity Developer Hackathon.', ko: 'KISIA 정보보호 개발자 해커톤 장려상 수상.' } },
];

const FIRST = { en: 'First author', ko: '제1저자' };
const FIRST_CORR = { en: 'First and corresponding author', ko: '제1저자 · 교신저자' };
const CO = { en: 'Co-author', ko: '공저자' };
const ORAL = { en: 'Oral', ko: '구두 발표' };

export const publications = [
  {
    title: 'FTC: Fourier Transcoder for Monosemantic Sparse Feature Decomposition in Vision Language Models',
    venue: 'ACCV 2026',
    detail: 'Asian Conference on Computer Vision',
    role: FIRST, date: 'Dec 2026',
  },
  {
    title: 'Q-CAT: A Non-Parametric Query Filtering System for Prohibited Content in Dynamic Enterprise Environments',
    venue: 'EMNLP 2026',
    detail: { en: 'Main Conference, Long Paper', ko: 'Main Conference, Long Paper' },
    role: FIRST, date: 'Oct 2026',
  },
  {
    title: '"I" can easily jailbreak LLMs',
    venue: 'EMNLP 2026',
    detail: 'Findings, Long Paper',
    role: CO, date: 'Oct 2026',
  },
  {
    title: 'When Noise Speaks: A Hidden Risk in Frame-Based Video AI Models',
    venue: 'TIIS',
    detail: 'KSII Transactions on Internet and Information Systems (SCIE)',
    role: FIRST_CORR, date: '2026',
    links: [{ label: 'Code', url: 'https://github.com/jhkang-rsrch/When-Noise-Speaks' }],
  },
  {
    title: 'HERALD: A Sensitive Information De-identification Pipeline with Selective LLM Invocation',
    venue: 'CISC-S 2026',
    detail: { en: 'Korea Institute of Information Security and Cryptology', ko: '한국정보보호학회 하계학술대회' },
    role: FIRST, badge: ORAL, date: 'Jun 2026',
  },
  {
    title: 'Efficient Many-Shot Jailbreaking via Weight Patching',
    venue: 'KCC 2026',
    detail: { en: 'Korea Computer Congress', ko: '한국컴퓨터종합학술대회' },
    role: CO, date: 'Jun 2026',
  },
  {
    title: 'Taxation Perspectives from Large Language Models: A Case Study on Additional Tax Penalties',
    venue: 'EACL 2026',
    detail: 'Main Conference, Long Paper',
    role: CO, badge: ORAL, date: 'Mar 2026',
  },
  {
    title: 'K-SNAC: Robust Neuron Coverage for OOD Generalization and Test Adequacy',
    venue: 'ASE 2025 Workshop',
    detail: 'ASEW',
    role: FIRST_CORR, badge: ORAL, date: 'Nov 2025',
  },
];

export const projects = [
  {
    name: 'RFantibody + AlphaFold3 GUI',
    text: {
      en: 'Web interface that runs RFantibody and AlphaFold3 antibody design from the browser, packaged with Docker.',
      ko: 'RFantibody와 AlphaFold3 기반 항체 설계를 브라우저에서 실행하는 웹 인터페이스. Docker로 한 번에 설치.',
    },
    links: [
      { label: 'GitHub', url: 'https://github.com/jhkang-rsrch/rfantibody-gui' },
      { label: { en: 'Write-up', ko: '소개 글' }, url: '/posts/rfantibody-gui/' },
    ],
  },
  {
    name: 'When Noise Speaks',
    text: {
      en: 'Videos whose single frames look like noise while a message appears only through motion. Frame-based video models miss it; people read it at once.',
      ko: '프레임 하나하나는 noise처럼 보이지만 움직임 속에서만 메시지가 드러나는 영상. 프레임 기반 비디오 모델은 읽지 못하고 사람은 바로 읽음.',
    },
    links: [{ label: 'GitHub', url: 'https://github.com/jhkang-rsrch/When-Noise-Speaks' }],
  },
  {
    name: 'PIGEON',
    text: {
      en: 'Neuron activation coverage metrics that account for activation distributions, and how well they track robustness.',
      ko: 'Activation 분포를 반영한 neuron coverage 지표와, 이 지표가 robustness와 얼마나 함께 움직이는지 분석.',
    },
    links: [{ label: 'GitHub', url: 'https://github.com/jhkang-rsrch/project_pigeon' }],
  },
  {
    name: 'Moving Sofa Problem Solver',
    text: {
      en: 'Differentiable optimization that searches for the largest shape able to turn an L-shaped corridor.',
      ko: 'L자 복도를 통과할 수 있는 가장 넓은 도형을 미분 가능한 최적화로 탐색.',
    },
    links: [{ label: 'GitHub', url: 'https://github.com/jhkang-rsrch/moving_sofa_problem' }],
  },
  {
    name: 'KTL TestMate',
    text: {
      en: 'Processing-time prediction, recommendation, and natural-language consultation for KTL test applications.',
      ko: 'KTL 시험 신청의 처리 기간 예측, 추천, 자연어 상담 서비스.',
    },
    links: [{ label: 'GitHub', url: 'https://github.com/jhkang-rsrch/Tyranno' }],
  },
  {
    name: 'Trustworthy AI Exercises',
    text: {
      en: 'FGSM and PGD attacks, DeepXplore testing, and Marabou verification on MNIST and CIFAR-10.',
      ko: 'MNIST와 CIFAR-10에서의 FGSM, PGD 공격, DeepXplore testing, Marabou verification 실습.',
    },
    links: [{ label: 'GitHub', url: 'https://github.com/jhkang-rsrch/trustworthy-ai-exercises' }],
  },
];

export const awards = [
  {
    date: 'Dec 2025',
    title: { en: 'Best Award (Deputy Prime Minister and Minister of Science and ICT Award)', ko: '부총리 겸 과학기술정보통신부장관상 (최우수상)' },
    note: 'AI Security Talent Development Program',
  },
  {
    date: 'Aug 2025',
    title: { en: 'Third Place of 71 Teams, KISIA Cybersecurity Developer Hackathon', ko: '제3회 KISIA 정보보호 개발자 해커톤 장려상 (71팀 중 3위)' },
  },
  {
    date: 'Jul 2025',
    title: { en: 'Best Paper Award, Seoul Cyber University AI Competition', ko: '서울사이버대학교 제3회 인공지능온라인 경진대회 최우수상' },
  },
  {
    date: 'Mar 2018',
    title: { en: 'Top-Ranked Admission, University of Seoul', ko: '서울시립대학교 수학과 논술전형 수석 입학' },
  },
];

export const grants = [
  {
    date: { en: 'Sep 2025 – Aug 2026', ko: '2025.09 – 2026.08' },
    title: { en: 'Robustness of Bayesian-Theoretic NLP Models', ko: '베이지안 관점 이론 기반 자연어 모델 강건성 지표 개발' },
    role: { en: 'Principal Investigator', ko: '연구책임자' },
    note: { en: "NRF Master's Student Research Grant, University of Seoul", ko: '한국연구재단 석사과정생연구장려금지원사업, 서울시립대학교' },
  },
  {
    date: { en: 'Sep 2025 – Aug 2028', ko: '2025.09 – 2028.08' },
    title: { en: 'Meta-AI Alignment Techniques for Safe AI', ko: '안전한 AI를 위한 메타 AI 정렬 기술' },
    role: { en: 'Co-investigator', ko: '참여연구원' },
    note: { en: 'NRF Mid-career Researcher Program (Creative Research), University of Seoul', ko: '한국연구재단 우수연구-중견연구(창의연구형), 서울시립대학교' },
  },
  {
    date: { en: 'Mar 2025 – Dec 2028', ko: '2025.03 – 2028.12' },
    title: { en: 'Substrate-specific AI-based Enzyme Engineering', ko: '기질 특이적 AI 기반 고활성 신규 효소공학기술 개발' },
    role: { en: 'Co-investigator', ko: '참여연구원' },
    note: { en: 'NRF Synthetic Biology Core Technology Development Program, KAIST', ko: '한국연구재단 합성생물학핵심기술개발사업, KAIST' },
  },
  {
    date: { en: 'Nov 2025 – May 2026', ko: '2025.11 – 2026.05' },
    title: { en: 'Non-parametric Language Model Research', ko: '비모수적 언어모델을 활용한 반제약적 생성 연구' },
    role: { en: 'Research Assistant', ko: '연구보조원' },
    note: { en: 'University of Seoul', ko: '서울시립대학교' },
  },
];

export const patents = [
  {
    date: 'Feb 2026',
    title: 'Method and System for Managing Security',
    note: { en: 'Korean Patent Application No. 10-2026-0028484. Co-inventor.', ko: '대한민국 특허출원 제10-2026-0028484호 · 공동발명자' },
  },
  {
    date: 'Jan 2026',
    title: 'Intelligent Data Loss Prevention System and Method via Proxy and LLM-based Context Analysis',
    note: { en: 'Korean Patent Application No. 10-2026-0008449. Co-inventor.', ko: '대한민국 특허출원 제10-2026-0008449호 · 공동발명자' },
  },
];

export const scholarships = [
  {
    date: { en: '2025 – Present', ko: '2025 – 현재' },
    title: { en: 'AI Seoul Tech Graduate Scholarship', ko: 'AI 서울테크 대학원 장학금' },
    note: { en: 'Seoul Future Talent Foundation', ko: '서울미래인재재단' },
  },
  {
    date: '2018 – 2022',
    title: { en: 'National Scholarship for Science and Engineering', ko: '국가우수장학금 (이공계)' },
    note: { en: 'Full undergraduate tuition', ko: '학부 등록금 전액' },
  },
];

export const education = [
  {
    date: { en: 'Mar 2025 – Present', ko: '2025.03 – 현재' },
    title: { en: 'University of Seoul', ko: '서울시립대학교' },
    note: { en: 'M.S. / Ph.D. Integrated Program in Artificial Intelligence. GPA 4.46 / 4.5', ko: '인공지능학과 석·박사통합과정 · 평점 4.46 / 4.5' },
  },
  {
    date: { en: 'Mar 2018 – Feb 2022', ko: '2018.03 – 2022.02' },
    title: { en: 'University of Seoul', ko: '서울시립대학교' },
    note: { en: 'B.S. in Mathematics and B.A. in Philosophy (double major). GPA 3.83 / 4.5', ko: '수학과 이학사 · 철학과 문학사 (복수전공) · 평점 3.83 / 4.5' },
  },
];

export const experience = [
  {
    date: { en: 'Jun 2023 – Aug 2024', ko: '2023.06 – 2024.08' },
    title: { en: 'Researcher, I Hate Flying Bugs Co., Ltd.', ko: '(주)아이헤이트플라잉버그스 연구원' },
    note: {
      en: 'Developed AI-powered digital textbook content and authored mathematics problems for middle and high school curricula.',
      ko: 'AI 디지털교과서 콘텐츠 개발, 중·고등 수학 문항 설계 및 집필',
    },
  },
  {
    date: 'Mar 2026',
    title: { en: 'Student Volunteer, EACL 2026', ko: 'EACL 2026 학생 자원봉사' },
    note: { en: 'Rabat, Morocco. Registration, poster sessions, and AV support.', ko: '모로코 라바트 · 등록, 포스터 세션, AV 지원' },
  },
];

export const contact = {
  emails: [
    { label: { en: 'Academic', ko: '학교' }, value: '2715wngjs@uos.ac.kr' },
    { label: { en: 'Personal', ko: '개인' }, value: 'jhkang.researcher@gmail.com' },
  ],
  phone: '+82-10-2782-2239',
  office: {
    en: 'Room 419, Changgong Hall, University of Seoul',
    ko: '서울시립대학교 창공관 419호',
  },
  lab: {
    name: 'IDA.L Lab',
    url: 'https://uos-nlp.notion.site/',
    text: {
      en: 'Department of Artificial Intelligence, Graduate School, University of Seoul',
      ko: '서울시립대학교 일반대학원 인공지능학과',
    },
  },
  advisor: {
    name: { en: 'Prof. Wonseok Hwang', ko: '황원석 교수' },
    url: 'https://scholar.google.com/citations?user=M13_WdcAAAAJ',
  },
};

// Timeline for the History page, newest first. `major: true` shows the title in bold.
export const history = [
  {
    year: '2026',
    items: [
      { date: 'Dec', major: true, title: { en: 'FTC at ACCV 2026', ko: 'ACCV 2026 FTC 발표' }, note: { en: 'First author', ko: '제1저자' } },
      { date: 'Oct', major: true, title: { en: 'Two papers at EMNLP 2026', ko: 'EMNLP 2026 논문 2편 게재' }, note: { en: 'Q-CAT (Main, first author) and "I" can easily jailbreak LLMs (Findings)', ko: 'Q-CAT (Main, 제1저자), "I" can easily jailbreak LLMs (Findings)' } },
      { date: 'Jun', title: { en: 'Oral presentation at CISC-S 2026 and a paper at KCC 2026', ko: 'CISC-S 2026 구두 발표, KCC 2026 논문 게재' }, note: 'HERALD · Efficient Many-Shot Jailbreaking via Weight Patching' },
      { date: 'Mar', major: true, title: { en: 'Oral paper and student volunteer at EACL 2026', ko: 'EACL 2026 구두 발표 논문 게재, 학생 자원봉사' }, note: { en: 'Rabat, Morocco', ko: '모로코 라바트' } },
      { date: 'Feb', title: { en: 'Patent application: Method and System for Managing Security', ko: '특허출원: Method and System for Managing Security' } },
      { date: 'Jan', title: { en: 'Patent application: Intelligent Data Loss Prevention System', ko: '특허출원: Intelligent Data Loss Prevention System' } },
      { date: '', title: { en: 'When Noise Speaks accepted to TIIS', ko: 'When Noise Speaks, TIIS 게재 확정' }, note: { en: 'First and corresponding author', ko: '제1저자 · 교신저자' } },
    ],
  },
  {
    year: '2025',
    items: [
      { date: 'Dec', major: true, title: { en: 'Deputy Prime Minister and Minister of Science and ICT Award', ko: '부총리 겸 과학기술정보통신부장관상' }, note: 'AI Security Talent Development Program' },
      { date: 'Nov', major: true, title: { en: 'Oral presentation at the ASE 2025 Workshop', ko: 'ASE 2025 Workshop 구두 발표' }, note: 'K-SNAC: Robust Neuron Coverage for OOD Generalization and Test Adequacy' },
      { date: 'Nov', title: { en: 'Ranked 28th of 187 teams at the AI Hacking Defense Competition (ACDC)', ko: 'AI 해킹방어대회(ACDC) 187팀 중 28위' } },
      { date: 'Sep', title: { en: 'Attended REAL SUMMIT 2025 (Samsung SDS)', ko: 'REAL SUMMIT 2025 (삼성SDS) 참석' } },
      { date: 'Aug', title: { en: 'Third place at the KISIA Cybersecurity Developer Hackathon', ko: '제3회 KISIA 정보보호 개발자 해커톤 장려상' } },
      { date: 'Aug', title: { en: 'OpenAI GPT-OSS-20B Red-Teaming Challenge', ko: 'OpenAI GPT-OSS-20B Red-Teaming Challenge 참가' }, note: "Pandora's Prompts for LLMs" },
      { date: 'Jul', title: { en: 'Best Paper Award, Seoul Cyber University AI Competition', ko: '서울사이버대학교 제3회 인공지능온라인 경진대회 최우수상' } },
      { date: 'Mar', major: true, title: { en: 'Entered the graduate program in Artificial Intelligence, University of Seoul', ko: '서울시립대학교 일반대학원 인공지능학과 입학' } },
      { date: 'Mar', title: { en: 'Transferred to the B.S. program in AI, Seoul Cyber University (junior standing)', ko: '서울사이버대학교 인공지능학과 3학년 편입학' } },
      { date: 'Feb', title: { en: 'Seoul Citizen Reporter in Artificial Intelligence', ko: '서울시민기자단 인공지능 분야 활동 시작' } },
    ],
  },
  {
    year: '2022 – 2024',
    items: [
      { date: { en: 'Oct 2024 – Feb 2025', ko: '2024.10 – 2025.02' }, title: { en: 'Intern, Department Office of Materials Science and Engineering, University of Seoul', ko: '서울시립대학교 신소재공학과 학과사무실 인턴' } },
      { date: { en: 'Jun 2023 – Aug 2024', ko: '2023.06 – 2024.08' }, title: { en: 'Researcher, I Hate Flying Bugs Co., Ltd.', ko: '(주)아이헤이트플라잉버그스 연구원' }, note: { en: 'AI digital textbook content and mathematics problems', ko: 'AI 디지털교과서 콘텐츠, 수학 문항 개발' } },
      { date: '', title: { en: 'Served in the Republic of Korea Army', ko: '대한민국 육군 복무' } },
    ],
  },
  {
    year: '2018 – 2022',
    items: [
      { date: { en: 'Feb 2022', ko: '2022.02' }, major: true, title: { en: 'Graduated from the University of Seoul', ko: '서울시립대학교 졸업' }, note: { en: 'B.S. in Mathematics and B.A. in Philosophy', ko: '수학과 이학사 · 철학과 문학사' } },
      { date: { en: 'Dec 2020', ko: '2020.12' }, title: { en: 'Second place at a startup pitching competition', ko: '실전창업교육 피칭대회 2위' } },
      { date: { en: 'Aug 2019', ko: '2019.08' }, title: { en: 'Completed the 5th NIMS Industrial Mathematics Academy', ko: '국가수리과학연구소 산업수학아카데미 5회 수료' } },
      { date: { en: 'Feb 2019', ko: '2019.02' }, title: { en: 'Completed the 4th NIMS Industrial Mathematics Academy', ko: '국가수리과학연구소 산업수학아카데미 4회 수료' } },
      { date: { en: 'Mar 2018', ko: '2018.03' }, major: true, title: { en: 'Entered the University of Seoul as the top-ranked applicant', ko: '서울시립대학교 수학과 논술전형 수석 입학' } },
    ],
  },
];
