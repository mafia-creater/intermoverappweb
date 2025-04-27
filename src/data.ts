import { Feature, Screenshot, SocialLink } from './types';

export const features: Feature[] = [
  {
    id: 1,
    title: 'Personalized Onboarding',
    description: 'Tailored experience to help you get settled in Bologna based on your specific needs and preferences.',
    icon: 'Compass'
  },
  {
    id: 2,
    title: 'Community Forum',
    description: 'Connect with other international students, ask questions, and share experiences about life in Bologna.',
    icon: 'Users'
  },
  {
    id: 3,
    title: 'Local Events',
    description: 'Discover and join events, meetups, and activities happening around Bologna to make the most of your stay.',
    icon: 'Calendar'
  },
  {
    id: 4,
    title: 'City Resources',
    description: 'Find essential information about transportation, healthcare, administrative procedures, and more.',
    icon: 'Map'
  },
  {
    id: 5,
    title: 'Housing Listings',
    description: 'Browse through verified housing options that match your budget and preferences in different neighborhoods.',
    icon: 'Home'
  }
];

export const screenshots: Screenshot[] = [
  {
    id: 1,
    src: 'https://fra.cloud.appwrite.io/v1/storage/buckets/67f6a9e4000ec696b0bd/files/680e09a100210b7c436b/view?project=67e04a47000d2aa438b3&mode=admin',
    alt: 'Bologna Student Companion Onboarding Screen'
  },
  {
    id: 2,
    src: 'https://fra.cloud.appwrite.io/v1/storage/buckets/67f6a9e4000ec696b0bd/files/680e098d00170bc8c3e3/view?project=67e04a47000d2aa438b3&mode=admin',
    alt: 'Bologna Student Companion Community Forum'
  },
  {
    id: 3,
    src: 'https://fra.cloud.appwrite.io/v1/storage/buckets/67f6a9e4000ec696b0bd/files/680e099b002e8ef02950/view?project=67e04a47000d2aa438b3&mode=admin',
    alt: 'Bologna Student Companion Events Screen'
  },
  {
    id: 4,
    src: 'https://fra.cloud.appwrite.io/v1/storage/buckets/67f6a9e4000ec696b0bd/files/680e0981003380396d9b/view?project=67e04a47000d2aa438b3&mode=admin',
    alt: 'Bologna Student Companion City Resources Map'
  }
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'Github'
  },
  {
    id: 2,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'Linkedin'
  },
  {
    id: 3,
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: 'Mail'
  }
];