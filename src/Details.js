// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import nextjs from "./assets/techstack/Next-JS.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";
import MaleFashion from "./imgs/Screenshot 2025-03-07 052451.png";
import Movies from "./imgs/Screenshot 2025-03-07 051954.png";
import Market from "./imgs/Screenshot 2025-03-07 052121.png";
import gaming from "./imgs/Screenshot 2025-03-07 133322.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Pavan MG",
  tagline: "I build things for web",
  img: profile,
  about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Frontend Development",
    Company: "Goo-Web",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jan 2022 - Present",
  },
  {
    Position: "Bachelor of Arts, Surveying Department",
    Company: `Faculty of Arts, Mansoura University`,
    Location: "Egypt",
    Type: "Full Time",
    Duration: "Aug 2022 - 2026",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  // postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  nextjs: nextjs,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Male Fashion Shop",
    image: MaleFashion,
    description: `showcases modern men's fashion, offering a variety of clothing and accessories. It has a clean, user-friendly design for a comfortable shopping experience. The project was built using HTML, CSS, JavaScript, and React, with additional styling done through Bootstrap.`,
    techstack: "HTML/CSS, JavaScript , React , Bootstrap",
    previewLink: "https://male-fashion-gamma.vercel.app/",
    githubLink: "https://github.com/Ahmed-Ibrahem12/male-fashion",
  },
  {
    title: "Movies Site",
    image: Movies,
    description: `A movie streaming site offering a wide selection of films. It features a clean design, allowing users to browse and discover movies easily. Built using React, HTML, CSS, JavaScript, with styling done using Tailwind CSS and state management through Redux.`,
    techstack: "HTML/CSS, JavaScript , React , Redux , Tailwind",
    previewLink: "https://ody-movies.vercel.app/",
    githubLink: "https://github.com/Ahmed-Ibrahem12/redux-movies",
  },
  {
    title: "Gaming Hub",
    image: gaming,
    description: `gaming platform showcasing a variety of games. It features a modern and attractive design with different sections to display games and easy navigation. The site is built using HTML and CSS`,
    techstack: "HTML/CSS",
    previewLink: "https://gaming-page-pi.vercel.app/",
    githubLink: "https://github.com/Ahmed-Ibrahem12/gaming-page",
  },
  {
    title: "Market",
    image: Market,
    description: `An e-commerce platform showcasing various products for sale. It has a modern design, with easy navigation for browsing items. Developed with React, HTML, CSS, JavaScript, styled using Tailwind CSS, and state management handled by Redux.`,
    techstack: "HTML/CSS, JavaScript , React , Redux , Tailwind",
    previewLink: "https://ody-market.vercel.app/",
    githubLink: "https://github.com/Ahmed-Ibrahem12/Market",
  },
  //   {
  //     title: "Project title 4",
  //     image: projectImage4,
  //     description: `This is sample project description random things are here in description This is sample
  // project lorem ipsum generator for dummy content`,
  //     techstack: "HTML/CSS, JavaScript",
  //     previewLink: "https://google.com",
  //     githubLink: "https://github.com",
  //   },
  //   {
  //     title: "Project title 5",
  //     image: projectImage5,
  //     description: `This is sample project description random things are here in description This is sample
  // project lorem ipsum generator for dummy content`,
  //     techstack: "HTML/CSS, JavaScript",
  //     previewLink: "https://google.com",
  //     githubLink: "https://github.com",
  //   },
  //   {
  //     title: "Project title 6",
  //     image: projectImage6,
  //     description: `This is sample project description random things are here in description This is sample
  // project lorem ipsum generator for dummy content`,
  //     techstack: "HTML/CSS, JavaScript",
  //     previewLink: "https://google.com",
  //     githubLink: "https://github.com",
  //   },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "Ahmedibrahem8642@gmail.com",
  phone: "+0201153025370",
};
