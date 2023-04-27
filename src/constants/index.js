import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  ai,
  ae,
  pr,
  ps,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  firebase,
  git,
  figma,
  wordpress,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  cc,
  vsc,
  tiktok,
} from "../assets";

import avt1 from "../assets/avatar1.jpg";
import avt2 from "../assets/avatar2.jpg";
import avt3 from "../assets/avatar3.jfif";
import project1 from "../assets/portfolio1.png";
import project2 from "../assets/portfolio2.png";
import project3 from "../assets/portfolio4.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Graphic Designer",
    icon: mobile,
  },
  {
    title: "Video Editor",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "WordPress",
    icon: wordpress,
  },
  {
    name: "Illustrator",
    icon: ai,
  },
];

const experiences = [
  {
    title: "Web Application Develop",
    company_name: "React",
    icon: vsc,
    iconBg: "#383E56",
    date: "2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "UI/UX Design",
    company_name: "Figma",
    icon: shopify,
    iconBg: "#383E56",
    date: "2021 - Present",
    points: [
      "Design & organized web applications features using Figma and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Translate designs to code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Graphic Illustration Design",
    company_name: "Adobe Creative Cloud",
    icon: cc,
    iconBg: "#E6DEDD",
    date: "2018 - Present",
    points: [
      "Create modern attractive template for website.",
      "Design logo, banners, posters, thumbnails, brand awareness, and everything matched your requirements.",
      "Publications such as pakages, clothes, brochures, etc .",
      "Material, flat, minimalism, abstract design.",
    ],
  },
  {
    title: "Video & Content Edit",
    company_name: "Youtube & Tiktok",
    icon: tiktok,
    iconBg: "#E6DEDD",
    date: "2015 - Present",
    points: [
      "Content edit & management, suitable for any platform.",
      "Create intro & outro perfectly fit your profile.",
      "2D & 3D transition, stunning effects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Professional design, clean and good-looking. Hope for the next co-opporation.",
    name: "Son Anh Nguyen",
    designation: "CFO",
    company: "HA Smart",
    image: avt1,
  },
  {
    testimonial:
      "Awesome works, really cute and modern design! A little bit in a nick of time but the result still worthy.",
    name: "Huyen Trang Nguyen",
    designation: "COO",
    company: "DEF Corp",
    image: avt2,
  },
  {
    testimonial: "Great job! Very nice design, simple but effective.",
    name: "Ly Nguyen",
    designation: "CTO",
    company: "Sunhouse Co., LTD",
    image: avt3,
  },
];

const projects = [
  {
    name: "Restaurant App",
    description:
      "Web-based platform that allows users to search, book, and manage food products, providing a convenient and efficient solution for online food order & delivery.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "googlefirebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/zeph1697/restaurant-app",
    link: "https://zeph1697.github.io/restaurant-app/",
  },
  {
    name: "Portfolio",
    description:
      "Responsive portfolio in flat modern material design showcases my projects.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailjs",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/zeph1697/portfolio",
    link: "https://zeph1697.github.io/portfolio/",
  },
  {
    name: "Fitness Website",
    description:
      "A comprehensive website platform that allows users to choose task, training level, and offers curated recommendations for people who wants to keep the shape nicely.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "multi-page",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/zeph1697/fitness-website",
    link: "https://zeph1697.github.io/fitness-website/",
  },
];

export { services, technologies, experiences, testimonials, projects };
