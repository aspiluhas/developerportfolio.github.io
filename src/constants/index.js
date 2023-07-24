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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  todolist,
  expensmart,
  youbix,
  portfolio,
  carrent,
  jobit,
  tripguide,
  threejs,
 nextjs,materialui,
 nitrkl,
 stvcs,srpublic
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
    title: "Video Editor",
    icon: mobile,
  },
  {
    title: "Web Designer",
    icon: backend,
  },
  {
    title: "Programmer",
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Material UI",
    icon: materialui,
  },
];

const experiences = [
  {
    title: "National Institute of Technology, Rourkela",
    company_name: "Mechanical Engineering",
    // company_name: "Mechanical Engineering",
    icon: nitrkl,
    iconBg: "#383E56",
    date: "December 2021 - June 2025",
    points: [
      "I am pursuing my Bachelor of Technology (B.Tech) degree at this esteemed college, immersing myself in a world of knowledge and cutting-edge technology.",
      "Despite majoring in mechanical engineering, my passion for software and technology knows no bounds. I proudly identify as a software enthusiast, constantly exploring the digital realm, and honing my programming skills alongside my mechanical studies.",
      "Embracing this unique blend of disciplines, I aspire to bridge the gap between the two worlds, innovating and creating solutions that harmoniously integrate software and mechanics, driving progress in both fields.",
     
    ],
  },
  {
    title: "SR Public School, Kota‐Rajasthan",
    company_name: "94.6%",
    icon: srpublic,
    iconBg: "#E6DEDD",
    date: "May 2020",
    points: [
      "Having graduated from this prestigious school, I cherish the invaluable education and experiences that have shaped my academic journey.",
      "Alongside my school curriculum, I dedicated myself to rigorous JEE coaching, determined to conquer the challenges of the highly competitive exam.",
      
    ],
  },
  {
    title: "St. Vincent's Convent School",
    company_name: "93.2%",
    icon: stvcs,
    iconBg: "#383E56",
    date: "May 2018",
    points: [
      "From the tender days of Lower Kindergarten to the formative years of Class 10, this school has been my nurturing haven of learning and personal growth. Each step of this educational odyssey has left an indelible mark on my journey, shaping me into the person I am today.",
      "Witnessing the remarkable achievements and success stories of past alumni who pursued the challenging path of engineering through the Joint Entrance Examination (JEE), I was captivated by their tenacity and brilliance.",
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
    name: "ExpenseSmart : Expense Tracker",
    description:
      "ExpenseSmart is a cutting-edge expense tracker built using the power of React.js, Material-UI, and Chart.js. It's a feature-rich application designed to revolutionize the way you manage your finances.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "materialui",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      },
    ],
    image: expensmart,
    source_code_link: "https://github.com/aspiluhas/expenseSmart",
  },
  {
    name: "YouBix",
    description:
      "This project offers video‐sharing platform experience, allowing users to consume and interact with video content leveraging the power of ReactJS , Material‐UI and an API for seamless functionality.The YouTube API by Rapid API is used for fetching data from the internet.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "youtubeapi",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
    ],
    image: youbix,
    source_code_link: "https://github.com/aspiluhas/youbixclone",
  },
  {
    name: "Modern Interactive Portfolio",
    description:
      "By combining HTML ,CSS , and JavaScript with modern design , our responsive portfolio website project will effectively present your resume and professional profile.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/aspiluhas/aspilportfolio.github.io",
  },
  {
    name: "FloralTask : A Blossoming To‐Do List",
    description:
      "The website will feature a clean and intuitive UI/UX design for managing your to do items effectively,developed using HTML , CSS , and JavaScript , ensuring a responsive design that adapts to different devices.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/aspiluhas/mitsuritodo.github.io",
  },
];

export { services, technologies, experiences, testimonials, projects };