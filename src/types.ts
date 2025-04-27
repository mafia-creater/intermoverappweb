export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Screenshot {
  id: number;
  src: string;
  alt: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}