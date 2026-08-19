import { ExternalLink, Mail } from 'lucide-react';
import type { ExperienceItem } from '../types/experience.types';

export const navigationLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const interests = [
  {
    image: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Powerlifting',
    text: 'Competed on the UC powerlifting team for several years. Still an avid lifter and intend to keep competing for the foreseeable future.',
  },
  {
    image: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Music',
    text: 'I have been playing guitar for years and love to experiment in DAWs to record my own songs.',
  },
  {
    image: 'https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Warhammer 40k',
    text: 'To let out my inner nerd, I love to play Warhammer 40k.',
  },
  {
    image: 'https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Video Production & Editing',
    text: 'Another interest or personal detail can go here.',
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: 'experience-1',
    image: '/pf_image.JPG',
    period: 'May - August 2023',
    role: 'Infrastructure Operations Intern',
    organization: 'HealthEdge',
    description: '● Resolved service tickets via navigating Linux directories, upgrading company software, and updating customer databases. ● Gained hands-on knowledge of healthcare IT architecture within the industry. ● Wrote and executed shell scripts to automate manual workflows, turning day-long projects into 30-minute tasks.',
  },
  {
    id: 'experience-2',
    image: '/pf_image.JPG',
    period: 'April 2024 - August 2025',
    role: 'Full Stack Developer',
    organization: 'IT Solutions Center',
    description: '● Delivered full-stack features for production sites used by 1,000+ users across multiple client organizations. ● Built and maintained frontend interfaces, backend services, APIs, and database integrations. ● Improved usability, accessibility, and performance through feature enhancements and debugging. ● Delivered projects for clients including Macys, Brooksource, University of Cincinnati, and Ohio Supreme Court. ● Used GitHub for version control and peer code review, resolving 50+ pull requests.',
  },
  {
    id: 'experience-3',
    image: '/pf_image.JPG',
    period: 'January - April 2026',
    role: 'Interactive Applications Intern',
    organization: 'Kinetic Vision',
    description: '● Developed immersive VR applications in Unity Engine, recreating physical environments and interactive systems. ● Built custom object manipulation, 3D annotation, and spatial measurement tools within VR. ● Collaborated directly with clients to gather requirements, communicate progress, and ensure project quality. ● Architected and implemented feature sets for internal and production web applications. ● Participated in Agile development workflows using git-based source control and Jira issue tracking.',
  },
];

export const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jacob-blenis-006251237/',
    icon: ExternalLink,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Blenisj',
    icon: ExternalLink,
  },
  {
    label: 'Email',
    href: 'mailto:hello@example.com',
    icon: Mail,
  },
];
