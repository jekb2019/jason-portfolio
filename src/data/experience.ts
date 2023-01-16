import wdccLogo from '../assets/images/history/wdcc_logo.png';
import rosterlabLogo from '../assets/images/history/rosterlab_logo.png';
import youtubeLogo from '../assets/images/history/youtube_logo.png';
import csHealthLogo from '../assets/images/history/cshealth_logo.png';
// import takaLogo from '../assets/images/history/taka_logo.png';
// import nwnwLogo from '../assets/images/history/nwnw_logo.png';

type Experience = {
  logoImg: string;
  roleTitle: string;
  organization: string;
  url: string;
  displayedUrl: string;
  period: string;
  workingType: string;
  description: string;
  skills?: string[];
  technologies?: string[];
};

export const experience: Experience[] = [
  {
    logoImg: rosterlabLogo,
    roleTitle: 'Frontend Developer',
    organization: 'RosterLab',
    url: 'https://www.rosterlab.com/',
    displayedUrl: 'rosterlab.com',
    period: 'Dec 2022 - Present',
    workingType: 'Full-time',
    description:
      'RosterLab uses state-of-the-art artificial intelligence techniques to build exceptional rosters for hospital staff.',
    skills: [
      'Software development',
      'Team work',
      'Collaboration with design team',
      'Agile methodologies',
    ],
    technologies: [
      'React.js',
      'Typescript',
      'Javascript',
      'AWS',
      'Gatsby.js',
      'Zustand',
      'Git',
    ],
  },
  {
    logoImg: youtubeLogo,
    roleTitle: 'Youtube Creator',
    organization: 'Star Coding (별코딩) Channel',
    url: 'https://www.youtube.com/@starcoding',
    displayedUrl: 'youtube.com/@starcoding',
    period: 'May 2021 - Present',
    workingType: '',
    description:
      'Star Coding (별코딩) is a korean-language channel where I upload coding tutorials. I like creating videos teaching front-end stacks including React.js, Javascript, and HTML/CSS',
  },
  {
    logoImg: wdccLogo,
    roleTitle: 'Associate Project Director',
    organization: 'WDCC - Web Development & Consulting Club',
    url: 'https://wdcc.co.nz/',
    displayedUrl: 'wdcc.co.nz',
    period: 'Jul 2021 - Aug 2022',
    workingType: 'Voluntary',
    description:
      'Web Development & Consulting Club provides opportunities for passionate students to gain industry experience by establishing pro bono projects on website design and development and to give back to the local community by offering our services.',
    skills: [
      'Process improvement',
      'Strategic planning',
      'Management',
      'Agile methodologies',
    ],
  },
  {
    logoImg: csHealthLogo,
    roleTitle: 'Web Designer / Wix Developer',
    organization: 'CS HealthCare',
    url: 'https://www.cshealthnz.com/',
    displayedUrl: 'cshealthnz.com',
    period: 'May 2020 - Nov 2020',
    workingType: 'Part-time',
    description:
      'CS HealthCare is an eCommerce mall for oriental clinic equipment.',
    skills: ['Website design', 'Website builder'],
    technologies: ['Wix', 'Photoshop', 'Illustrator'],
  },
  //   {
  //     logoImg: takaLogo,
  //     roleTitle: 'Golf Course Driving Range and Proshop Attendant',
  //     organization: 'Takapuna Golf Course',
  //     url: 'https://www.tgolf.co.nz/',
  //     displayedUrl: 'tgolf.co.nz',
  //     period: 'May 2017 - Apr 2021',
  //     workingType: 'Part-time',
  //     description: '',
  //     skills: ['Customer service', 'Driving range maintenance', 'Retail clerk'],
  //   },
  //   {
  //     logoImg: nwnwLogo,
  //     roleTitle: 'Mathematics Tutor',
  //     organization: "Number Works'n Words",
  //     url: 'https://numberworksnwords.com/',
  //     displayedUrl: 'numberworksnwords.com',
  //     period: 'May 2016 - Nov 2017',
  //     workingType: 'Part-time',
  //     description: '',
  //     skills: ['Teaching', 'Communication'],
  //   },
];
