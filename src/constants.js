// Skills Section Logos
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github3.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel2.png";

// Project Section Images
import BistroBossRestaurant from "./assets/Project _Image/Bistro Boss resturent.png";
import OnlineTutorBooking from "./assets/Project _Image/Online Tutor Booking.png";
import Rinterio from "./assets/Project _Image/Rinterio.png";
import ParcelPilot from "./assets/Project _Image/ParcelPilot.png";



// Skills Information
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Material UI", logo: materialuiLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [{ name: "JavaScript", logo: javascriptLogo }],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

// Projects Information
export const projects = [
  {
    id: 0,
    title: "Bistro Boss Restaurant",
    description:
      " Bistro Boss is a sleek, responsive restaurant web application designed to provide a seamless experience for browsing menus, placing orders, and making secure online payments.\n\nWith role-based dashboards, analytics, and dynamic features, it’s a complete solution for modern restaurant management and online food ordering.",
    image: BistroBossRestaurant,
    tags: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "React JS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Firebase",
      "Stripe",
    ],
    github: "https://github.com/shariful8523/Bistro-Boss-Restaurant-Client",
    webapp: "https://bistro-boss-restorent-cb0b2.web.app/",
  },
  {
    id: 1,
    title: "Parcel Pilot - A Parcel Delivery System",
     description:
    "Parcel Pilot is a modern, fast, and secure door-to-door parcel delivery system across Bangladesh. It features role-based dashboards for Admins, Riders, and Users, real-time parcel tracking, OTP-secured deliveries, and dynamic parcel management. Designed to streamline logistics with efficiency and reliability.",
    image: ParcelPilot,
    tags: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "React JS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Firebase",
      "Stripe",
    ],
    github: "https://github.com/shariful8523/Parcel-Pilot-Client",
    webapp: "https://parcel-pilot-client.vercel.app",
  },
  {
    id: 2,
    title: "Online Tutor Booking System",
    description:
      "Welcome to the Online Tutor Booking System — a platform designed to connect users with tutors across different languages. This system streamlines the process of finding, reviewing, and booking tutors, making language learning accessible, interactive, and engaging.\n\nThis project was developed as part of Assignment Category 14 and showcases key skills in full-stack development, including authentication, responsive design, and an enhanced user experience.",
    image: OnlineTutorBooking,
    tags: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "React JS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Firebase",
    ],
    github:
      "https://github.com/shariful8523/online-tutorbooking-client-side?tab=readme-ov-file",
    webapp: "https://online-tutorbooking.web.app/",
  },
  {
    id: 3,
    title: "Rinterio – Modern Architectural Landing Page",
    description:
      "Rinterio is a modern, responsive landing page template designed to showcase architectural designs, particularly barn houses. It highlights services, portfolio, and contact information with an elegant and user-friendly interface.",
    image: Rinterio,
    tags: ["HTML", "CSS", "Tailwind CSS"],
    github:
      "https://github.com/shariful8523/Rinterio-Modern-Architectural-Landing-Page",
    webapp:
      "https://shariful8523.github.io/Rinterio-Modern-Architectural-Landing-Page",
  },
];
