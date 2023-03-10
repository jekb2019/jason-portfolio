import uoaLogo from '../assets/images/history/uoa_logo.png';
import msLogo from '../assets/images/history/ms_logo.png';

type Education = {
  logoImg: string;
  institution: string;
  major: string;
  periods: string[];
};

export const education: Education[] = [
  {
    logoImg: uoaLogo,
    institution: 'University of Auckland',
    major: 'Bachelor of Engineering (Honours), Software Engineering',
    periods: [
      'Feb 2022 - Nov 2023 (Part-time study)',
      'Jan 2018 - Nov 2021 (Full-time study)',
    ],
  },
];

export const certificates: Education[] = [
  {
    logoImg: msLogo,
    institution: 'Microsoft Certified: Azure Fundamentals',
    major: 'Microsoft AZ-900 | Issued 2021',
    periods: [],
  },
];
