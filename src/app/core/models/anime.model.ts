export interface AnimeTitle {
  '@type': string;
  '@id': string;
  en: string;
  enJp: string;
  jaJp: string;
  fr: string;
}

export interface Genre {
  '@type': string;
  '@id': string;
  name: string;
  description: string;
  totalMediaCount: number;
  slug: string;
  nsfw: boolean;
}

export interface EpisodeTitle {
  '@type': string;
  '@id': string;
  en: string;
  enJp: string;
  jaJp: string;
  fr: string;
}

export interface Episode {
  '@id': string;
  '@type': string;
  canonicalTitle: string;
  seasonNumber: number;
  number: number;
  synopsis: string;
  airdate: string;
  length: number;
  title: EpisodeTitle;
  thumbnail: unknown[];
}

export interface FigureName {
  '@type': string;
  '@id': string;
  romaji: string;
  english: string;
  native: string;
}

export interface Staff {
  '@id': string;
  '@type': string;
  firstname: string;
  lastname: string;
  birthday: string;
  biography: string;
  role: string;
  voiceActor: boolean;
  language: string;
  website: string;
  image: unknown[];
  slug: string;
}

export interface Figure {
  '@id': string;
  '@type': string;
  description: string;
  role: string;
  staff: Staff;
  slug: string;
  name: FigureName;
  image: unknown[];
}

export interface Anime {
  createdAt: string;
  updatedAt: string;
  slug: string;
  synopsis: string;
  description: string;
  type: string;
  canonicalTitle: string;
  averageRating: number;
  userCount: number;
  upVoteCount: number;
  startDate: string;
  endDate: string;
  nextRelease: string;
  popularityRank: number;
  ratingRank: number;
  ageRating: string;
  ageRatingGuide: string;
  origin: string;
  status: string;
  episodeCount: number;
  nbrSeason: number;
  episodeLength: number;
  totalLength: number;
  youtubeVideoId: string;
  nsfw: boolean;
  title: AnimeTitle;
  genre: Genre[];
  episode: Episode[];
  figure: Figure[];
}
