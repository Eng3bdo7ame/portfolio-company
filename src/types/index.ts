// -------- Partners --------
export interface AboutSection {
  id?: number;
  image: string;
  title: string;
  description: string | React.ReactNode;
  button?: string;
  reverse?: boolean;
  counter?: boolean;
  background?: string;
}

// -------- Partners --------
export interface Partner {
  id: number;
  title: string;
  image: string;
}

export interface Client {
  id: number;
  title: string;
  image: string;
}

// components/Card.tsx
export interface Service {
  id: number;
  image: string;
  icon: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  benefits: string[];
  discover?: React.ReactNode;
}
