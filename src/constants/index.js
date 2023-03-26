import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  // deepthoughts,
  // sportstracker,
  // monied,
  caterpillar,
  kirklands,
  bluepack,
  carrent,
  jobit,
  tripguide,
  threejs,
  bootstrap,
  cSharp,
  mySql,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "C#",
    icon: cSharp,
  },
  {
    name: "MySQL",
    icon: mySql,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Caterpillar",
    icon: caterpillar,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Ecommerce Admin",
    company_name: "Bluepack Marketing",
    icon: bluepack,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed scripts in Python to send promotional emails that have led to increase of business.",
      "Developed article scraper to collect article titles and content, that would refresh anytime a new article was uploaded to ensure that the company was following trends.",
      "Worked with the production floor to ensure the software put out would flow easy into their process.",
    ],
  },
  {
    title: "Assistant Manager",
    company_name: "Kirklands",
    icon: kirklands,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Conducted opening and closing duties to ensure everything was ready for each shift to run smoothly.",
      "Entrusted to handle companies bank deposits and ensured all information was accurate.",
      "Managed a team of (8) ensuring all duties were completed prior to shift end.",
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
    name: "Monied",
    description:
      "Monied is a fundraising platform for nonprofit organizations. The goal is to help ambitious ideas be brought to life, and bring its community of supporters together",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/william-chalk/Monied",
    live_code_link: "https://aqueous-scrubland-12058.herokuapp.com/",
  },
  {
    name: "Deep Thoughts",
    description:
      "Deep Thoughts is a React.js application that mimics a social media website where users can create an account, manage friendships, and make posts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/william-chalk/DeepThoughts",
    live_code_link: "https://mysterious-lake-82542.herokuapp.com/",
  },
  {
    name: "Ultimate Sports Tracker",
    description:
      "My Ultimate Sports Tracker is an application that generates a sports dashboard where you can see today's games, past games as well as statistics.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/william-chalk/My-Ultimate-Sports-Tracker",
    live_code_link:
      "https://william-chalk.github.io/My-Ultimate-Sports-Tracker/",
  },
];

export { services, technologies, experiences, testimonials, projects };
