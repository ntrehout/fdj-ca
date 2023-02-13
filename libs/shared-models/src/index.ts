import { Observable } from "rxjs";
import { GetAllQueryParams } from "./types/query-params.types";

export interface ITeam {
  _id: string;
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
  players: string[];
}

export interface ILeague {
  name: string;
  sport: string;
  teams: string[];
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

export type Response<T> = SuccessResponse<T> | ErrorResponse;

export type BaseResponse = {
  timestamp: string;
};

export type SuccessResponse<T> = {
  success: true;
  data: T;
  statusCode: number;
} & BaseResponse;
export type ErrorResponse = {
  success: false;
  error: {
    message: string;
  };
  statusCode: number;
} & BaseResponse;

export interface ICrudService<T> {
  getAll(query: GetAllQueryParams<T>): Observable<unknown>;
  getManyByIDs(ids: string[]): Observable<unknown>;
  getManyByName(name: string): Observable<unknown>;
  getOneByID(id: string): Observable<unknown>;
}

export * from './types/query-params.types';
