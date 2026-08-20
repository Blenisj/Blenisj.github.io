import { ExternalLink, Mail } from "lucide-react";
import healthEdgeImage from "../assets/healthEdge.png";
import ITSCImage from "../assets/uc_itsc_logo.jpg";
import KineticVisionImage from "../assets/KV.png";
import UCImage from "../assets/uc_logo.png";

export const navigationLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

export const projects = [
  {
    slug: "Delta-Sync",
    title: "Delta Sync",
    description:
      'Web application and mod for the racing simulator "Assetto Corsa".',
    technologies: ["React", "Python", "Vite", "Google Firebase"],
    details:
      "In Assetto Corsa, competition is a large part of the player base, but trying to improve can be difficult, especially for new players. Delta Sync is a publicly available web application and mod for Assetto Corsa. Its goal is to give feedback to players on where and how they can improve their lap times by collecting telemetry data as they play the game. Using the games built-in Python library, the mod will collect data such as throttle, brake, gear, and speed, from laps completed by the player. Data is sent to a Google Firestore database, and later accessed by the web application. The web app utilizes technologies such as Vite and Node.js to display the users data in comparison with other players times using telemetry graphs. Delta Sync is the optimal tool for any player of Assetto Corsa, whether a newcomer or a veteran.",
  },
  {
    slug: "team-eval",
    title: "Team Evaluation Refactor",
    description:
      "Refactored entire front end UI of a team evaluation site from Angular to React",
    technologies: ["JavaScript", "React", "CSS"],
    details:
      "Use this page to describe the project goals, your contribution, the technical decisions you made, and what you learned.",
  },
  {
    slug: "second-person",
    title: "2nd Person",
    description:
      "Created a melee action game with unique camera mechanics and combat system.",
    technologies: ["Unity", "C#"],
    details:
      "Use this page for a deeper case study covering the problem, implementation, challenges, results, and future improvements.",
  },
  {
    slug: "portfolio",
    title: "This Portfolio",
    description:
      "Created this portfolio website to showcase my skills, projects, and experiences.",
    technologies: ["React", "TypeScript", "Vite", "CSS"],
    details:
      "This project showcases my skills and serves as a central hub for my portfolio.",
  },
];

export const skillsAndTools = [
  {
    category: "Frameworks & Libraries",
    items: [
      "React.js",
      "Node.js",
      "Babylon.js",
      "Vite",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    category: "Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "C#",
      "C++",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git",
      "Agile",
      "CI/CD Pipelines",
      "Jira",
      "Linux",
      "Docker",
      "Unity Engine",
      "Unreal Engine",
    ],
  },
];

//TODO: crop images and potentially add more
export const interests = [
  {
    image: "/powerlifting.jpg",
    images: [
      "/powerlifting.jpg",
      "/PL2.jpg",
      "/PF3.jpg",
      "/PF4.jpg",
      "/PF5.jpg",
    ],
    name: "Powerlifting",
    text: "Competed on the UC powerlifting team for several years. Still an avid lifter and intend to keep competing for the foreseeable future.",
    links: [] as { label: string; href: string }[],
  },
  {
    image: "/bearcat_guitar.jpg",
    images: ["/bearcat_guitar.jpg", "/IMG_1812.MOV", "/M1.JPG"],
    name: "Music",
    text: "I have been playing guitar for years and love to experiment in DAWs to record my own songs.",
    links: [] as { label: string; href: string }[],
  },
  {
    image: "/warhammer.jpg",
    images: ["/H1.JPG", "/H2.JPG", "/H3.JPG"],
    name: "Hobbies",
    text: "To let out my inner nerd, I love to play Warhammer 40k.",
    links: [] as { label: string; href: string }[],
  },
  {
    image: "/insta.jpg",
    images: ["/0309(4).mp4", "/0803(1).mp4"],
    name: "Video Production & Editing",
    text: "Another interest or personal detail can go here.",
    links: [] as { label: string; href: string }[],
  },
];

export const experiences = [
  {
    id: "experience-1",
    image: healthEdgeImage,
    period: "May - August 2023",
    role: "Infrastructure Operations Intern",
    organization: "HealthEdge",
    description:
      "Resolved service tickets across Linux systems, software upgrades, and customer databases, and automated manual workflows with shell scripts that turned day-long projects into 30-minute tasks.",
  },
  {
    id: "experience-2",
    image: ITSCImage,
    period: "April 2024 - August 2025",
    role: "Full Stack Developer",
    organization: "IT Solutions Center",
    description:
      "Built and maintained full-stack features, APIs, and database integrations for production sites used by 1,000+ users at clients including Macy's, Brooksource, the University of Cincinnati, and the Ohio Supreme Court.",
  },
  {
    id: "experience-3",
    image: KineticVisionImage,
    period: "January - April 2026",
    role: "Interactive Applications Intern",
    organization: "Kinetic Vision",
    description:
      "Developed immersive Unity VR applications with custom object manipulation, 3D annotation, and measurement tools, working directly with clients in an Agile workflow.",
  },
  {
    id: "experience-4",
    image: UCImage,
    period: "August 2021 - April 2026",
    role: "Graduation",
    organization: "University of Cincinnati",
    description:
      "Completed a 5 year degree in Information Technology: Game Development and Simulation at the University of Cincinnati with a GPA of 3.55",
  },
];

export const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jacob-blenis-006251237/",
    icon: ExternalLink,
  },
  {
    label: "GitHub",
    href: "https://github.com/Blenisj",
    icon: ExternalLink,
  },
  {
    label: "Email",
    href: "mailto:hello@example.com",
    icon: Mail,
  },
];
