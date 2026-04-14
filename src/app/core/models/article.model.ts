export interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  langue: string;
  createdAt: string;
  content: string;
  slug: string;
}

export interface ArticleCollection {
  'hydra:member': Article[];
}
