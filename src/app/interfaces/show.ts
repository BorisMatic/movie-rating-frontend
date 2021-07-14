import {Actor} from './actor';
import {MovieType} from '../enums/movie-type.enum';

export interface Show {
    id: number;
    title: string;
    image_id: string;
    description: string;
    releaseDate: string;
    rating: number;
    type: MovieType;
    actors: Actor[];
    total_votes: number;
    total_points: number;
}
