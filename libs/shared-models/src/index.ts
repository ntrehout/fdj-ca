export interface ITeam {
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
  };
}

export interface ILeague {
  name: string;
  sport: string;
}

export interface IPlayer {
  born: Date;
  name: string;
  position: 'Forward' | 'Midfielder' | 'Defender' | 'Goalkeeper';
  signin: {
    amount: number;
    currency: string;
  };
  thumbnail: string;
}
