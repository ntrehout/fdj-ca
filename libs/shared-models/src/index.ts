export interface Team {
  name: string;
  thumbnail: string;
  banner: string;
  descriptionEN: string;
  descriptionFR: string;
  website: string;
  facebook: string;
  twitter: string;
  instagram: string;
  youtube: string;
  stadium: {
    name: string;
    location: string;
    capacity: number;
    thumbnail: string;
  }
}

export interface League {
  name: string;
  sport: string;
}

export interface Player {
  born: Date;
  name: string;
  position: 'Forward' | 'Midfielder' | 'Defender' | 'Goalkeeper';
  signin: {
    amount: number;
    currency: string;
  }
  thumbnail: string;
}
