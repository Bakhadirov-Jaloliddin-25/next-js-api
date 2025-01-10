export interface ILink {
  href: string;
  title: string;
}

export interface IBlog {
  id: number;
  title: string;
  content: string;
  author: string;
  date: Date;
  category: string;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: string;
  rating: string;
  thumbnail: string;
}
