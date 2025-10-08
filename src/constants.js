// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github3.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel2.png';

// Project Section Image

import BistroBossResturent from './assets/Project _Image/Bistro Boss resturent.png'
import OnlineTutorBooking from './assets/Project _Image/Online Tutor Booking.png'
import Rinterio  from './assets/Project _Image/Rinterio.png'



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo }, 
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
     
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];


// Project Section


export const projects = [
    {
      id: 0,
      title: "Bistro Boss Restaurant",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: BistroBossResturent,
      tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React JS", "Node.js", "Express.js", "Mongodb", "JWT", "Firebase", "Stripe", ],
      github: "https://github.com/shariful8523/Bistro-Boss-Restaurant-Client",
      webapp: "https://bistro-boss-restorent-cb0b2.web.app/",
    },
    {
      id: 1,
      title: "Online Tutor Booking System",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: OnlineTutorBooking,
      tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React JS", "Node.js", "Express.js", "Mongodb", "JWT", "Firebase",  ],
      github: "https://github.com/shariful8523/online-tutorbooking-client-side?tab=readme-ov-file",
      webapp: "https://online-tutorbooking.web.app/",
    },
    {
      id: 2,
      title: "Rinterio – Modern Architectural Landing Page",
      description:
        "Rinterio is a modern, responsive landing page template designed to showcase architectural designs, particularly barn houses. It highlights services, portfolio, and contact information with an elegant and user-friendly interface.",
      image: Rinterio,
      tags: ["HTML", "CSS", "Tailwind CSS" ],
      github: "https://github.com/shariful8523/Rinterio-Modern-Architectural-Landing-Page",
      webapp: "https://shariful8523.github.io/Rinterio-Modern-Architectural-Landing-Page",
    }
    
  ];  