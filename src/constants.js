// Services Section Logo's
import AI from './assets/service_logo/AI.png';
import WAD from './assets/service_logo/WAD.png';
import UIUX from './assets/service_logo/UIUX.png';
import API from './assets/service_logo/API.png';
import CWD from './assets/service_logo/CWD.png';

// Experience Section Logo's
import Freelance from './assets/company_logo/Freelance.png'
import Intern from './assets/company_logo/InernshipStudio.jpg'
import Orinson from './assets/company_logo/Orinson.png'
import Topper from './assets/company_logo/TopperW.jpg'
import Codsoft from './assets/company_logo/CodSoft.jpg'
import Bharat from './assets/company_logo/BharatI.png'
import Lava from './assets/company_logo/Lava.jpg'
import PMKK from './assets/company_logo/PMKK.jpg'

// Education Section Logo's
import GCT from './assets/education_logo/GCT.jpeg'
import NIT from './assets/education_logo/NIT.png'
import BCA from './assets/education_logo/BCA.jpg'
import IDBPS from './assets/education_logo/IDBPS.png'
import High from './assets/education_logo/High.jpg'

// Project Section Logo's
import Dhaba from './assets/work_logo/Dhaba.png'
import Colour from './assets/work_logo/ColorPre.jpg'
import Ecommmrce from './assets/work_logo/Ecommerce.jpg'
import Calculator from './assets/work_logo/calculator.jpg'
import Weather from './assets/work_logo/Whether.jpg'
import Landing from './assets/work_logo/landing.png'
import Expenses from './assets/work_logo/expense.jpg'
import Counter from './assets/work_logo/wordCounter.png'
import Resizer from './assets/work_logo/Resizer.jpg'
import CRUD from './assets/work_logo/CRUD.jpg'
import Registration from './assets/work_logo/Registration.jpg'
import Portfolio from './assets/work_logo/Portfolio.jpg'
import BootsrapT from './assets/work_logo/Bootsrap.png'
import AgeC from './assets/work_logo/Age.jpg'
import SarkariR from './assets/work_logo/Sarkari.jpg'


// Services
export const services = [

  // AI based Development
  {
    id: 4,
    icon: AI,
    title: "AI Based Projects",
    description:
      "Creating smart AI-driven applications including chatbots, automation systems, and intelligent web solutions to solve real-world problems efficiently."

  },

  // Web Application Development
  {
    id: 3,
    icon: WAD,
    title: "Web Application Development",
    description:
      "Build scalable, responsive, and high-performance web applications using MERN stack tailored to your business needs.",
  },

  // Responsive UI/UX
  {
    id: 2,
    icon: UIUX,
    title: "Responsive UI/UX Design",
    description:
      "Create modern and intuitive user interfaces that work seamlessly on all devices to enhance user experience.",
  },

  // API Integration
  {
    id: 1,
    icon: API,
    title: "API Integration & Backend",
    description:
      "Design and integrate robust APIs, handle databases, and ensure secure and smooth backend operations.",
  },

  // Custom Solution
  {
    id: 0,
    icon: CWD,
    title: "Custom Web Solutions",
    description:
      "Deliver tailor-made web solutions like e-commerce platforms, landing pages, and SaaS applications.",
  },
];

// Skills
export const SkillsInfo = [

  // Frontend Development
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
    ],
  },

  // Backend & Databases
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 70 },
      { name: "REST API", level: 85 },
    ],
  },

  // Programming Languages & Data Structures
  {
    title: "Programming",
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "PHP", level: 40 },
      { name: "C", level: 60 },
      { name: "Python", level: 45 },
      { name: "Data Structures", level: 70 },
    ],
  },

  // Tools
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Canva", level: 80 },
      { name: "Netlify", level: 90 },
      { name: "Vercel", level: 75 },
    ],
  },

  // Other Skills
  {
    title: "Other Skills",
    skills: [
      { name: "Problem Solving", level: 85 },
      { name: "Voice Communication", level: 40 },
      { name: "Chat Communication", level: 80 },
      { name: "Teamwork", level: 82 },
      { name: "Time Management", level: 78 },
    ],
  },
];

// Experiences
export const experiences = [

  // Freelancer Use
  {
    id: 7,
    img: Freelance,
    role: "FullStack Developer",
    company: "Freelancer (Self-employed)",
    date: "Feb-Till now, 2025",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "React.Js",
      "Node.Js",
      "Express.Js",
      "Tailwind CSS",
      "MongoDB",
      "MySQL"
    ],
  },
  // Intern Use
  {
    id: 6,
    img: Intern,
    role: "Fullstack Development",
    company: "Internship Sudio (Remote)",
    date: "Aug-Feb, 2025",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "React.Js",
      "Node.Js",
      "Express.Js",
      "Tailwind CSS",
      "MySQL",
      "MongoDB",
    ],
  },

  // Orinson Use
  {
    id: 5,
    img: Orinson,
    role: "Fullstack Development",
    company: "Orinson (Remote)",
    date: "Sep-Oct, 2024",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "React.Js",
      "Node.Js",
      "Express.Js",
      "MongoDB",
    ],
  },

  // Topper Use
  {
    id: 4,
    img: Topper,
    role: "Web Development",
    company: "TopperWorld (Remote)",
    date: "May-Jun, 2024",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "React.Js",
      "Node.Js",
      "Express.Js",
      "MongoDB",
    ],
  },

  // CodSoft Use
  {
    id: 3,
    img: Codsoft,
    role: "Web Development",
    company: "CodSoft (Remote)",
    date: "Aug-Feb, 2025",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "React.Js",
      "Node.Js",
      "Express.Js",
      "MongoDB",
    ],
  },

  // Bharat Use
  {
    id: 2,
    img: Bharat,
    role: "Fullstack Development",
    company: "BharatIntern (Remote)",
    date: "Feb-Mar, 2024",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "React.Js",
      "Node.Js",
      "Express.Js",
      "Tailwind CSS",
      "MongoDB",
    ],
  },

  // Lava Use
  {
    id: 1,
    img: Lava,
    role: "Mobile Manufacuring",
    company: "Lava International Ltd. (Onsite)",
    date: "Sep-Mar, 2021",
    skills: [
      "Body Assamble",
      "Components Soldring",
      "QR Scanning",
      "Box Weight",
    ],
  },

  // PMKK Use
  {
    id: 0,
    img: PMKK,
    role: "FTCP (Electronics)",
    company: "Rohtas-PMKK (Onsite)",
    date: "Feb-Apr, 2020",
    skills: [
      "Computer fundamental",
      "MS-Office",
      "OS Installation/Deletion",
      "Hardware & Networking",
      "Hardware Troubleshooting",
    ],
  },
];

// Education
export const education = [

  // GCT Use
  {
    id: 4,
    img: GCT,
    school: "GCT in Namakkal (Tamilnadu)",
    date: "Sep-Oct, 2023",
    desc: "I left it reason teaching language problem.",
    degree: "MCA",
  },

  // NIT Use
  {
    id: 3,
    img: NIT,
    school: "NIMCET Prepration",
    date: "Sep-Jun, 2023",
    Percentage: "NIT Krukshetra (alloted)",
    desc: "I cancelled admission reason financial problems.",
    degree: "MCA",
  },

  // BCA Use
  {
    id: 2,
    img: BCA,
    school: "Shershah College, Sasaram",
    date: "2018-2021",
    Percentage: "71%",
    desc: "Passed in Sep. 2022 (Session late + COVID-19)",
    degree: "BCA",
  },

  // IDBPS Use
  {
    id: 1,
    img: IDBPS,
    school: "I.D.B.P.S College, Garhnokha",
    date: "2016-2018",
    Percentage: "46%",
    desc: "Science with Mathematics.",
    degree: "BSEB(XII)",
  },

  // High Use
  {
    id: 0,
    img: High,
    school: "U.M School, Hathini",
    date: "2015-2016",
    Percentage: "60%",
    desc: "Hindi, English, Maths, Science, S.Science, Sanskrit",
    degree: "BSEB(X)",
  },
];

// Projects
export const projects = [

  // Rohtas Dhaba
  {
    id: 14,
    title: "Resturant",
    image: Dhaba,
    tags: ["HTML", "CSS", "Tailwind", "JavaScript", "React.JS", "Node.js", "Express.Js", "Jwt", "APIs", "MongoDB"],
    github: "https://github.com/httpsashu404/rohtas-dhaba",
    webapp: "https://rohtasdhaba.netlify.app/",
  },

  // color predicution
  {
    id: 13,
    title: "Color Prediction Game",
    image: Colour,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/httpsashu404/ColorPredictionGame",
    webapp: "https://httpsashu404.github.io/ColorPredictionGame/",
  },

  // e-commerce
  {
    id: 12,
    title: "E-Commerce",
    image: Ecommmrce,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.JS", "Node.js", "Express.Js", "APIs", "MongoDB", "Razorpay"],
    github: "https://github.com/httpsashu404/E-commerce_part2",
    webapp: "https://zenmartbyashu.netlify.app/",
  },

  // React Calculator
  {
    id: 11,
    title: "React Calculator",
    image: Calculator,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "React JS"],
    github: "https://github.com/httpsashu404/Calculator",
    webapp: "https://calcwithashu.netlify.app/",
  },

  // Weather Forcast
  {
    id: 10,
    title: "Weather Forcast",
    image: Weather,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "APIs"],
    github: "https://github.com/httpsashu404/Weather-forcaste",
    webapp: "https://httpsashu404.github.io/Weather-forcaste/",
  },

  // Landing page
  {
    id: 9,
    title: "Landing Page",
    image: Landing,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/httpsashu404/LandingPage",
    webapp: "https://httpsashu404.github.io/LandingPage/",
  },

  // Expenses Tracker
  {
    id: 8,
    title: "Expenses Tracker",
    image: Expenses,
    tags: ["HTML", "CSS", "JavaScript", "React.JS", "Node.js", "Express.Js", "APIs", "MongoDB"],
    github: "https://github.com/httpsashu404/Money-Tracker",
    webapp: "https://moneytrackerwithashu.netlify.app/",
  },

  // Word Counter
  {
    id: 7,
    title: "Word Counter",
    image: Counter,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Bootstrap", "React JS"],
    github: "https://github.com/httpsashu404/WordCounter",
    webapp: "https://wordcounterwithashu.netlify.app/",
  },

  // Registraion Setup
  {
    id: 6,
    title: "Registration Setup",
    image: Registration,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.JS", "Node.js", "Express.Js", "APIs", "MongoDB"],
    github: "https://github.com/httpsashu404/Registration",
    webapp: "https://registrationwithashu.netlify.app/",
  },

  // Image Resizer
  {
    id: 5,
    title: "Image Resizer",
    image: Resizer,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.JS"],
    github: "https://github.com/httpsashu404/IMS",
    webapp: "https://imgresizewithashu.netlify.app/",
  },

  // MERN CRUD Operation
  {
    id: 4,
    title: "Simple CRUD System",
    image: CRUD,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.JS", "Node.js", "Express.Js", "APIs", "MongoDB"],
    github: "https://github.com/httpsashu404/ImageResizer",
    webapp: "https://imswithashu.netlify.app/",
  },

  // PortFolio
  {
    id: 3,
    title: "First Porfolio",
    image: Portfolio,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.JS"],
    github: "https://github.com/httpsashu404/Portfolio",
    webapp: "https://httpsashu404.netlify.app/",
  },

  // Age Calculator page
  {
    id: 2,
    title: "Age Calculator",
    image: AgeC,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/httpsashu404/DOB-Calculator",
    webapp: "https://httpsashu404.github.io/DOB-Calculator/",
  },

  // Bootstrap Tutorials page
  {
    id: 1,
    title: "Bootstrap Tutorials",
    image: BootsrapT,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/httpsashu404/Bootstrap-Tutorials",
    webapp: "https://httpsashu404.github.io/Bootstrap-Tutorials/",
  },

  // Sarkari result page
  {
    id: 0,
    title: "Sarkari Result",
    image: SarkariR,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/httpsashu404/Sarkari-result",
    webapp: "https://httpsashu404.github.io/Sarkari-result/",
  },
];  