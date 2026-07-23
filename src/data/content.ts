// Central content store for the Accredian Enterprise page clone.
// Keeping copy here keeps the section components presentational and reusable.

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Accredian Edge", href: "#accredian-edge" },
  { label: "CAT", href: "#cat" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
];

export const HERO = {
  eyebrow: "Corporate Learning, Reimagined",
  titleLine1: "Next-Gen",
  titleAccent1: "Expertise",
  titleLine2: "For Your",
  titleAccent2: "Enterprise",
  subtitle: "Cultivate high-performance teams through expert learning.",
  bullets: ["Tailored Solutions", "Industry Insights", "Expert Guidance"],
  cta: "Enquire Now",
};

export const STATS = [
  {
    value: "10K+",
    label: "Professionals Trained For Exceptional Career Success",
  },
  {
    value: "200+",
    label: "Sessions Delivered With Unmatched Learning Excellence",
  },
  {
    value: "5K+",
    label: "Active Learners Engaged In Dynamic Courses",
  },
];

export const PARTNER_LOGOS = [
  "Reliance Industries",
  "HCL",
  "IBM",
  "CRIF",
  "ADP",
  "Bayer",
];

export const CLIENT_INDUSTRIES = [
  {
    name: "BFSI",
    description: "Upskilling risk, analytics and digital banking teams.",
  },
  {
    name: "IT & Technology",
    description: "Cloud, AI and engineering programs for product teams.",
  },
  {
    name: "Healthcare",
    description: "Data and process training for clinical operations staff.",
  },
  {
    name: "Retail & FMCG",
    description: "Customer analytics and digital commerce enablement.",
  },
  {
    name: "Manufacturing",
    description: "Operations excellence and Industry 4.0 readiness.",
  },
  {
    name: "Consulting",
    description: "Leadership and strategic decision-making cohorts.",
  },
];

export const CLIENT_LOGOS = [
  "Reliance Industries",
  "HCL",
  "IBM",
  "CRIF",
  "ADP",
  "Bayer",
  "Genpact",
  "Wipro",
];

export type EdgeProgram = {
  title: string;
  description: string;
  icon: "bulb" | "brain" | "people" | "chart" | "gear" | "globe" | "card";
};

export const EDGE_PROGRAMS: EdgeProgram[] = [
  {
    title: "Product & Innovation Hub",
    description: "Product thinking, discovery and go-to-market fundamentals.",
    icon: "bulb",
  },
  {
    title: "Gen-AI Mastery",
    description: "Applied generative AI skills for real business workflows.",
    icon: "brain",
  },
  {
    title: "Leadership Elevation",
    description: "Executive presence, decision-making and team leadership.",
    icon: "people",
  },
  {
    title: "Tech & Data Insights",
    description: "Analytics, machine learning and data-driven strategy.",
    icon: "chart",
  },
  {
    title: "Operations Excellence",
    description: "Process design, efficiency and quality management.",
    icon: "gear",
  },
  {
    title: "Digital Enterprise",
    description: "Digital transformation across legacy enterprise systems.",
    icon: "globe",
  },
  {
    title: "Fintech Innovation Lab",
    description: "Payments, risk and emerging fintech infrastructure.",
    icon: "card",
  },
];

export const COURSE_SEGMENTATION = [
  {
    title: "Program Specific",
    description: "Certificate, Executive, Post Graduate Certificate",
    image: "/images/segment-program.svg",
  },
  {
    title: "Industry Specific",
    description: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    image: "/images/segment-industry.svg",
  },
  {
    title: "Topic Specific",
    description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    image: "/images/segment-topic.svg",
  },
  {
    title: "Level Specific",
    description: "Senior Leadership, Mid-Career Professionals, Freshers",
    image: "/images/segment-level.svg",
  },
];

export const WHO_SHOULD_JOIN = [
  {
    title: "Tech Professionals",
    description: "Enhance expertise, embrace tech, drive innovation.",
    included: true,
  },
  {
    title: "Non-Tech Professionals",
    description: "Adapt digitally, collaborate in tech environments.",
    included: false,
  },
  {
    title: "Emerging Professionals",
    description: "Develop powerful skills for rapid career growth.",
    included: true,
  },
  {
    title: "Senior Professionals",
    description: "Strengthen leadership, enhance strategic decisions.",
    included: true,
  },
];

export const CAT_FRAMEWORK = [
  {
    step: "Concept",
    description: "Foundational knowledge for deep subject understanding.",
  },
  {
    step: "Application",
    description: "Practical implementation through real-world scenarios.",
  },
  {
    step: "Tools",
    description: "Resources and techniques for effective skill mastery.",
  },
];

export const DELIVER_RESULTS = [
  {
    number: "1",
    title: "Assess & Benchmark",
    description:
      "We evaluate current skill levels and benchmark them against industry standards.",
  },
  {
    number: "2",
    title: "Design & Deliver",
    description:
      "Cohorts move through live sessions, projects and guided practice on real tools.",
  },
  {
    number: "3",
    title: "Track & Certify",
    description:
      "Progress is tracked against outcomes, with certification on completion.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We understand your team's goals, skill gaps and timelines in an initial consultation.",
  },
  {
    step: "02",
    title: "Custom Curriculum",
    description:
      "Programs are mapped to your industry, tools and seniority levels using the CAT framework.",
  },
  {
    step: "03",
    title: "Cohort Delivery",
    description:
      "Expert-led live sessions, hands-on labs and applied projects, delivered on your schedule.",
  },
  {
    step: "04",
    title: "Impact Reporting",
    description:
      "You receive completion data, assessment scores and skill-growth reporting after every cohort.",
  },
];

export const FAQS = [
  {
    question: "Who are Accredian Enterprise programs designed for?",
    answer:
      "Our programs are built for organizations upskilling tech and non-tech teams alike, from emerging professionals to senior leaders across IT, BFSI, healthcare, retail and manufacturing.",
  },
  {
    question: "Are the courses customized for our industry?",
    answer:
      "Yes. Every engagement starts with a discovery call so we can tailor the curriculum, case studies and tools to your industry and business context.",
  },
  {
    question: "What is the CAT framework?",
    answer:
      "CAT stands for Concept, Application and Tools — our three-step approach that pairs foundational knowledge with real-world practice and hands-on tooling.",
  },
  {
    question: "Do you offer both online and on-site training?",
    answer:
      "We deliver live virtual cohorts, on-site workshops and blended formats depending on what works best for your team's schedule and location.",
  },
  {
    question: "How do you measure training impact?",
    answer:
      "Each cohort is tracked against assessment scores, completion rates and applied-project outcomes, with a summary report shared after the program.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "The tailored curriculum helped our engineering managers apply new tools within weeks of finishing the program.",
    name: "Head of L&D",
    company: "Financial Services Company",
  },
  {
    quote:
      "Accredian's cohort format kept our non-tech teams engaged while still covering practical, job-ready skills.",
    name: "VP, People & Culture",
    company: "Retail Enterprise",
  },
  {
    quote:
      "The CAT framework gave structure to what used to be a scattered internal training effort.",
    name: "Director, Operations",
    company: "Manufacturing Group",
  },
];

export const CONTACT = {
  email: "enterprise@accredian.com",
  address: "4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana",
  socials: ["Facebook", "LinkedIn", "Twitter", "Instagram", "YouTube"],
};
