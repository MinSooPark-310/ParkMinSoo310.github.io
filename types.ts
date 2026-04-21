export interface ProjectReview {
  id: string;
  artist: string;
  album: string;
  title: string;
  coverImage: string;
  description: string;
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  tracks: string[];
}

export interface SectionData {
  id: string;
  title: string;
  titleEn: string;
  image: string;
  description: string;
}

export type SectionId = 'about-life' | 'about-music' | 'review' | 'playlist' | 'contact';
