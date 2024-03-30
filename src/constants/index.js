/** @format */

import {
  laravel,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  fiver,
  B,
  starbucks,
  tesla,
  shopify,
  carrent,
  real_tuk_racing,
  jobit,
  tripguide,
  threejs,
  cricket,
  play_list_master,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  // {
  // 	id: 'projects',
  // 	title: 'Projects',
  // },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Game Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Laravel",
    icon: laravel,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Block-Stars",
    icon: B,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "Developing and maintaining web applications using ReactJS, NodeJS, MySQL, MongoDB, Laravel",
      "DevOps, leveraging CI/CD pipelines, PM2, and Docker for efficient software deployment.",
      "Participating in code reviews and providing constructive feedback to other developers and leading team of junior developers",
    ],
  },

  {
    title: "Software Engineer Intern",
    company_name: "Block-Stars",
    icon: B,
    iconBg: "#383E56",
    date: "July 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using ReactJS, NodeJS, MySQL,Laravel",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      ,
    ],
  },
  {
    title: "FreeLance Game Developer",
    company_name: "FIVER",
    icon: fiver,
    iconBg: "#E6DEDD",
    date: "Jul 2020 - Jan 2022",
    points: [
      "Developing mobile and web games using Unity game engine.",
      "Deploy develop games to play store and web.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Real Tuk Racing",
    description:
      "Mobile game that simulate trishow driving and racing and got 80k downloads in play store.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
    ],
    image: real_tuk_racing,
    source_code_link: "https://www.youtube.com/watch?v=148Byz38_jM",
  },
  {
    name: "3D Fashion",
    description:
      "Web application that enables fasion desiners to chose color combinations for their cloths. This applications has customizable 3D models",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-three-fiber",
        color: "green-text-gradient",
      },
      {
        name: "threeJs",
        color: "blue-text-gradient",
      },
      {
        name: "blender",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://playful-frangollo-62e55c.netlify.app/",
  },
  {
    name: "Playlist Master",
    description:
      "Platforma where users can share the best you tube videos they saw in you tube regarding any field, and create courses using them. Developed usig Next JS and deployed to vcercel and used planet scale for database",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "TailWind",
        color: "pink-text-gradient",
      },
    ],
    image: play_list_master,
    source_code_link: "https://playlist-masters.vercel.app/",
  },
  {
    name: "Cricket App",
    description:
      "Android app that user can gain points by gussing the scores. Used fibase and third party apis for getting score.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Android Studio",
        color: "pink-text-gradient",
      },
    ],
    image: cricket,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.cricket.sample&pli=1",
  },
];

export { services, technologies, experiences, testimonials, projects };
