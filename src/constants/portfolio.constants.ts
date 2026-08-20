import { ExternalLink, Mail } from "lucide-react";
import type { ExperienceItem } from "../types/experience.types";
import healthEdgeImage from "../assets/healthEdge.png";
import ITSCImage from "../assets/uc_itsc_logo.jpg";
import KineticVisionImage from "../assets/KV.png";

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
];

export const skillsAndTools = [
  {
    category: "Frameworks & Libraries",
    items: ["React", "Vite", "Bootstrap", "Material UI", "Three.js", "Unity"],
  },
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C#", "HTML", "CSS"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Jira", "Linux", "Node.js", "SQL"],
  },
];

export const interests = [
  {
    image: "/powerlifting.jpg",
    name: "Powerlifting",
    text: "Competed on the UC powerlifting team for several years. Still an avid lifter and intend to keep competing for the foreseeable future.",
  },
  {
    image: "/bearcat_guitar.jpg",
    name: "Music",
    text: "I have been playing guitar for years and love to experiment in DAWs to record my own songs.",
  },
  {
    image: "/warhammer.jpg",
    name: "Warhammer 40k",
    text: "To let out my inner nerd, I love to play Warhammer 40k.",
  },
  {
    image: "/insta.jpg",
    name: "Video Production & Editing",
    text: "Another interest or personal detail can go here.",
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: "experience-1",
    image: healthEdgeImage,
    period: "May - August 2023",
    role: "Infrastructure Operations Intern",
    organization: "HealthEdge",
    description:
      "● Resolved service tickets via navigating Linux directories, upgrading company software, and updating customer databases. ● Gained hands-on knowledge of healthcare IT architecture within the industry. ● Wrote and executed shell scripts to automate manual workflows, turning day-long projects into 30-minute tasks.",
  },
  {
    id: "experience-2",
    image: ITSCImage,
    period: "April 2024 - August 2025",
    role: "Full Stack Developer",
    organization: "IT Solutions Center",
    description:
      "● Delivered full-stack features for production sites used by 1,000+ users across multiple client organizations. ● Built and maintained frontend interfaces, backend services, APIs, and database integrations. ● Improved usability, accessibility, and performance through feature enhancements and debugging. ● Delivered projects for clients including Macys, Brooksource, University of Cincinnati, and Ohio Supreme Court. ● Used GitHub for version control and peer code review, resolving 50+ pull requests.",
  },
  {
    id: "experience-3",
    image: KineticVisionImage,
    period: "January - April 2026",
    role: "Interactive Applications Intern",
    organization: "Kinetic Vision",
    description:
      "● Developed immersive VR applications in Unity Engine, recreating physical environments and interactive systems. ● Built custom object manipulation, 3D annotation, and spatial measurement tools within VR. ● Collaborated directly with clients to gather requirements, communicate progress, and ensure project quality. ● Architected and implemented feature sets for internal and production web applications. ● Participated in Agile development workflows using git-based source control and Jira issue tracking.",
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
