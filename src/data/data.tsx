import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import profilepic from '../images/profilepic.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';


export const homePageMeta: HomepageMeta = {
  title: 'React Resume',
  description: "Resume site for Brandon Worobi",
};

export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];


export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Brandon Worobi`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Metro-Detroit Based <strong className="text-stone-100">Full Stack Software Engineer & Operations Specialist</strong>, currently looking for a new opportunity
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me spending time with my <strong className="text-stone-100">Children</strong>,
        Riding my <strong className="text-stone-100">Bicycle</strong> around Metro-Detroit, or exploring & Camping the beautiful state of{' '}
        <strong className="text-stone-100">Michigan</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Brandon is a seasoned professional with over 15 years of experience in Business Operations and Full Stack Web Development. He possesses a unique blend of technical and operational expertise, having honed his skills in both the corporate world and the US Army.

  As a veteran of the US Army, Brandon learned the importance of leadership, teamwork, and attention to detail, skills that he has carried over into his business career. Throughout his 15 years in the business operations field, John has excelled in managing large-scale projects, streamlining processes, and implementing solutions to improve operational efficiency.

  In addition to his operational experience, Brandon also possesses strong technical skills in Full Stack Web Development. He has developed and maintained complex web applications, and is well-versed in a variety of programming languages and technologies.

  Overall, Brandon is a well-rounded professional with a proven track record of success in both the military and the business world. He is a dedicated and hard-working individual who strives to continuously improve and stay up-to-date with the latest industry trends and advancements.
  `,
  aboutItems: [
    {label: 'Location', text: 'Metro-Detroit', Icon: MapIcon},
    {label: 'Age', text: '444 Months & Counting', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Heinz 57', Icon: FlagIcon},
    {label: 'Interests', text: 'Camping, Reading & Video Gaming', Icon: SparklesIcon},
    {label: 'Study', text: 'Sam Houston State & Beyond', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Open', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'German',
        level: 5,
      },
      {
        name: 'Arabic',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML & CSS',
        level: 9,
      },
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Bootstrap',
        level: 7,
      },
      {
        name: 'JS',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'JS',
        level: 8,
      },
      {
        name: 'Python',
        level: 6,
      },
      {
        name: 'SQL',
        level: 5,
      },
      {
        name: 'PHP',
        level: 5,
      },
    ],
  },
  {
    name: 'Operational Skills',
    skills: [
      {
        name: 'Strategic Planning',
        level: 9,
      },
      {
        name: 'Budget Administration',
        level: 9,
      },
      {
        name: 'Ethical Leadership',
        level: 9,
      },
      {
        name: 'Lean Six Sigma',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Scout Consultatory',
    description: 'Personal Freelancing Site',
    url: 'https://scoutconsutlatory.com',
    image: porfolioImage1,
  },
  {
    title: 'XO Logistics',
    description: 'Website set up and maintained for former employer',
    url: 'https://www.xologistics.io/',
    image: porfolioImage2,
  },
  {
    title: 'XO Cyber',
    description: 'Website set up and maintained for former employer',
    url: 'https://xocyber.io/',
    image: porfolioImage3,
  },
  {
    title: 'CRLaw',
    description: 'Website set up and maintained for Client of former employer',
    url: 'https://crlaw.biz/',
    image: porfolioImage4,
  },
  {
    title: 'Mrs Mary Macs',
    description: 'Present Client for Scout Consultatory',
    url: 'https://mrsmarymacs.com/',
    image: porfolioImage5,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'October 2020',
    location: 'Bloomtech ',
    title: 'Full-Stack Web Development',
    content: <p>JavaScript, HTML, CSS, NodeJS, React, Redux, Python, SQL</p>,
  },
  {
    date: 'January 2016',
    location: 'Sam Houston State University',
    title: 'Bachelor of Business Administration',
    content: <p>Focused on Logisitcs & Supply Chain</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2021 - October 2022',
    location: 'Exectutive Operations',
    title: 'Director of Operations',
    content: (
      <p>
•Liaised with 3 Major Accounts, Supply Vendors & Service providers. (AMZ, FedEx & IT/MSP Clients)
•Started as Operations Manager, Moved up to DOO within 6 months. 
•Oversaw daily operations in both the IT & Logistics side of the company, including staffing, equipment, and technologies.
•Managed company-based web hosting & Built the Company's and Clients websites using WordPress, Shopify, WooCommerce, HTML, CSS & JS.
•Applied the principles of Lean to improve overall operations, including training and daily reporting.
•Lead over 75 Employees with the support of 4 - 5. supervisors and an operations manager, Reported to the COO & CEO.
•Complied with all Compliance regulations and ensured licenses, inspections, and other legal requirements remained up to date.
      </p>
    ),
  },
  {
    date: 'March 2021 - Present',
    location: 'Scout Consultatory',
    title: 'Freelance',
    content: (
      <p>
       An operations and IT/Web consulting business specializing in the cannabis industry that was started out of the pandemic in 2020. 
       We offer expertise in all aspects of business operations, including supply chain management, production efficiency, and IT infrastructure.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Mary N.',
      text: '"I recently hired Brandon for a critical project and was thoroughly impressed with their professionalism and attention to detail. Their exceptional problem-solving skills and ability to meet tight deadlines made them a valuable asset to the progress of my company. I would highly recommend Brandon to anyone looking for a talented and dedicated professional."',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/167.jpg',
    },
    {
      name: 'Nick C',
      text: '"As a former colleague, I can attest to Brandons exceptional work ethic and strong interpersonal skills. They consistently went above and beyond to ensure projects were completed to the highest standard, and were a pleasure to work with. I have no doubt that [Name] will be a valuable asset to any organization."',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/13.jpg',
    },
    {
      name: 'Monica C.',
      text: '"I have had the privilege of working with Brandon on several projects and have been continually impressed by their creativity and technical expertise. Their ability to think outside the box and find innovative solutions to complex problems is unparalleled. I would not hesitate to recommend [Name] to anyone looking for a top-notch professional."',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/66.jpg',
    },
  ],
};



export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for you to pick your posion on how to contact me ',
  items: [
    {
      type: ContactType.Email,
      text: 'Brandon@worobi.com',
      href: 'mailto:brandon@worobi.com',
    },
    {
      type: ContactType.Location,
      text: 'Metro-Detroit, MI',
      href: 'https://www.google.com/maps/place/Detroit+Metropolitan+Area,+MI/@42.6720231,-84.3672283,8z/data=!3m1!4b1!4m6!3m5!1s0x8824eb3ebbb50f79:0x2c296b784b3160f7!8m2!3d42.8105356!4d-83.0790865!16zL20vMDJndDVz',
    },
    {
      type: ContactType.Instagram,
      text: '@revnibbles',
      href: 'https://www.instagram.com/revnibbles/',
    },
    {
      type: ContactType.Github,
      text: 'Brandon Worobi',
      href: 'https://github.com/BrandonWorobi',
    },
  ],
};


export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/brandonworobi'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/21122082/brandon-worobi'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/worobi/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/revnibbles/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/revnibbles'},
];
