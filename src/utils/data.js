import SkillImg1 from "../assets/images/figma.png";
import SkillImg2 from "../assets/images/html-5.png";
import SkillImg3 from "../assets/images/css-3.png";
import SkillImg7 from "../assets/images/java-script.png";
import SkillImg4 from "../assets/images/reactjs.png";
import SkillImg5 from "../assets/images/angular.png";
import SkillImg6 from "../assets/images/nodejs.png";
import javascript from "../assets/images/javascript.png"

import user1 from "../assets/images/user.jpg";
import user2 from "../assets/images/user1.jpg";

import logo from "../assets/images/dummy-logo-1.png";
import logo1 from "../assets/images/dummy-logo-2.png";

import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";


import pp1 from "../assets/images/pp1.png";  
import pp2 from "../assets/images/pp2.png";
import pp3 from "../assets/images/pp3.png";
import pp4 from "../assets/images/pp4.png";

// export const serviceData = [
//   {
//     id: 1,
//     title: "Web Development",
//     description:
//       "Ensure your website looks great on any device, with layouts that adapt to different screen sizes seamlessly.",
//   },
//   {
//     id: 2,
//     title: "UI/UX Design",
//     description:
//       "Set up user-friendly CMS solutions like WordPress or custom-built options so clients can manage content easily.",
//   },
//   {
//     id: 3,
//     title: "SEO Optimization",
//     description:
//       "Improve search engine rankings with keyword optimization, content strategy, and performance enhancements.",
//   },
//   {
//     id: 4,
//     title: "Digital Marketing",
//     description:
//       "Refresh outdated websites with modern, appealing designs that align with current brand goals and user expectations.",
//   },
// ];








export const serviceData = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description: "End-to-end development of responsive, high-performance web applications using modern frameworks like React, Node.js, and Express. I build seamless user experiences with clean, maintainable code.",
    icon: "bi-laptop" // Example icon class
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Crafting beautiful, interactive user interfaces with React, Vue.js, and modern CSS. Specializing in responsive design, accessibility, and performance optimization for exceptional user experiences.",
    icon: "bi-display"
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Building robust server-side architectures with Node.js, Express, and Python. Creating secure RESTful APIs, authentication systems, and efficient database interactions.",
    icon: "bi-server"
  },
  {
    id: 4,
    title: "Database Design & Optimization",
    description: "Designing efficient database structures with MongoDB, PostgreSQL, and Firebase. Implementing data modeling, query optimization, and seamless frontend-backend integration.",
    icon: "bi-database"
  },
  // {
  //   id: 5,
  //   title: "UI/UX Implementation",
  //   description: "Translating designs into pixel-perfect, responsive interfaces with attention to detail. Implementing design systems, animations, and ensuring cross-browser compatibility.",
  //   icon: "bi-palette"
  // },
  // {
  //   id: 6,
  //   title: "API Integration",
  //   description: "Connecting applications with third-party services and APIs. Specializing in payment gateways, social media integrations, and custom API development.",
  //   icon: "bi-plug"
  // }
];




// export const recentWorksCats = ["All", "MERN", "React", "Javascript"];

// export const recentWorks = [
//   {
//     id: 0,
//     catId: 1, 
//     title: "TaskMe App",
//     description: "Task manager app ",
//     image: project1,
//   },
//   {
//     id: 1,
//     catId: 1,
//     title: "Notes App",
//     description: "notes making app with user friendly based",
//     image: project2,
//   },
//   {
//     id: 2,
//     catId: 2, 
//     title: "Portfolio",
//     description: "User Portfolio with modern look",
//     image: project3,
//   },
//   {
//     id: 3,
//     catId: 3,
//     title: "Rest Country API",
//     description: "rest country api that fetch data from json and make their details",
//     image: project4,
//   },
// ];



export const recentWorksCategories = [
  { id: 0, name: "All" },
  { id: 1, name: "MERN Stack" },
  { id: 2, name: "React" }, 
  { id: 3, name: "JavaScript" }
];

export const recentWorks = [
  {
    id: 1,
    categoryIds: [1], // MERN Stack
    title: "TaskMe - Task Manager App",
    description: "Full-featured task management application with user authentication, CRUD operations, and real-time updates",
    // technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: pp1,
    // demoUrl: "https://youtube.com",
    // codeUrl: "https://youtube.com"
  },
  {
    id: 2,
    categoryIds: [1], // MERN Stack
    title: "Notes Application",
    description: "Cloud-based note-taking app with rich text editing, categorization, and cross-device synchronization",
    // technologies: ["React", "MongoDB", "Node.js", "Material UI"],
    image: pp2,
    // demoUrl: "https://youtube.com",
    // codeUrl: "https://youtube.com"
  },
  {
    id: 3,
    categoryIds: [2], // React
    title: "Developer Portfolio",
    description: "Modern responsive portfolio showcasing skills, projects and contact information with smooth animations",
    // technologies: ["React", "Framer Motion", "Tailwind CSS"],
    image: pp3,
    // demoUrl: "https://youtube.com", 
    // codeUrl: "https://youtube.com"
  },
  {
    id: 4,
    categoryIds: [3], // JavaScript
    title: "Countries Explorer",
    description: "Interactive dashboard displaying country data from REST API with search, filtering and dark mode",
    // technologies: ["JavaScript", "REST API", "CSS3"],
    image: pp4,
    // demoUrl: "https://youtube.com",
    // codeUrl: "https://youtube.com"
  }
];


// export const experienceData = [
//   {
//     id: 0,
//     year: "2022 - Present",
//     name: "Full-Stack Development",
//     address: "Infosys, Bangalore",
//   },
//   {
//     id: 1,
//     year: "2021 - 2022",
//     name: "Frontend Development Internship",
//     address: "Wipro, Hyderabad",
//   },
//   {
//     id: 2,
//     year: "2020 - 2021",
//     name: "UI/UX Design",
//     address: "Tata Consultancy Services (TCS), Pune",
//   },
// ];


export const experienceData = [
  {
    id: 0,
    year: "2025-Present",
    name: "Full Stack Developer",
    address: "Developing complete web applications using modern technologies including React, Node.js, Express, and MongoDB. ",
  },
  {
    id: 1,
    year: "2024",
    name: "Web Development Fundamentals",
    address: "Built foundation in HTML5, CSS3, and JavaScript through building multiple projects.",
  },
  {
    id: 2,
    year: "2024",
    name: "Data Analytic Training",
    address: "Gained experience in Python, Pandas, NumPy, and visualization tools",
  },
];



export const educationData = [
  {
    id: 0,
    year: "2022 - 2026",
    name: "Computer Science and Engineering",
    address: "Chandigarh Group of College (CGC), Landran , Pursuing comprehensive computer science education with focus on software development.",
  },
  {
    id: 1,
    year: "2020 - 2022",
    name: "Intermediate",
    address: "Dhori DAV Public School, Bokaro , Completed senior secondary education with Computer Science stream.",
  },
  {
    id: 2,
    year: "2020",
    name: "Matriculation ",
    address: "Bharat Singh Public School, Bokaro",
  },
];

// export const skillsData = [
//   {
//     id: 0,
//     image: SkillImg1,
//     title: "Figma",
//     percentage: "90%",
//   },
//   {
//     id: 1,
//     image: SkillImg2,
//     title: "HTML",
//     percentage: "95%",
//   },
//   {
//     id: 2,
//     image: SkillImg3,
//     title: "CSS",
//     percentage: "92%",
//   },
//   {
//     id: 3,
//     image: SkillImg4,
//     title: "React",
//     percentage: "80%",
//   },
//   {
//     id: 4,
//     image: SkillImg5,
//     title: "Angular",
//     percentage: "75%",
//   },

//   {
//     id: 5,
//     image: SkillImg6,
//     title: "Node js ",
//     percentage: "85%",
//   },
// ];

export const skillsData = [
  {
    id: 0,
    image: SkillImg2,
    title: "HTML",
    percentage: "85%",
  },
  {
    id: 1,
    image: SkillImg3,
    title: "CSS",
    percentage: "52%",
  },
  {
    id: 2,
    image: SkillImg7,
    title: "JavaScipt",
    percentage: "50%",
  },
  {
    id: 3,
    image: SkillImg1,
    title: "Figma",
    percentage: "10%",
  },
  
  {
    id: 4,
    image: SkillImg4,
    title: "React",
    percentage: "40%",
  },

  {
    id: 5,
    image: SkillImg6,
    title: "Node js ",
    percentage: "10%",
  },
];

export const testimonialsData = [
  {
    name: "Vasu",
    position: "CEO, TechWave ",
    user: user1,
    logo: logo,
    msg: "The team delivered a high-performance website with a modern design. It boosted our online presence significantly!",
  },
  {
    name: "Maya",
    position: "Founder, Digital Bloom",
    user: user2,
    logo: logo1,
    msg: "Their SEO strategy helped us rank on the first page of search results. Organic traffic and inquiries have doubled!",
  },
  {
    name: "Abhishek",
    position: "CTO, StartUp Junction",
    user: user1,
    logo: logo,
    msg: "The Web app they built is fast, user-friendly, and scalable. It exceeded all our expectations in terms of quality!",
  },
  {
    name: "Sanjeevni",
    position: "COO, GrowthSync ",
    user: user2,
    logo: logo1,
    msg: "Our new website is sleek and responsive. We’ve received positive feedback from users and seen better engagement.",
  },
];