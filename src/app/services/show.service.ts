import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Show} from '../interfaces/show';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Actor} from "../interfaces/actor";

@Injectable({
    providedIn: 'root'
})
export class ShowService {

    constructor(private httpClient: HttpClient) {
    }

    public list(params: any): Observable<HttpResponse<Show[]>> {
        return this.httpClient
            .get<Show[]>('v1/show', {params: params, observe: 'response'})
            .pipe(
                map((o: HttpResponse<any[]>) => {
                        o.body.map((sp): Show => ({
                            id: sp.id,
                            title: sp.title,
                            image_id: sp.image_id,
                            description: sp.description,
                            releaseDate: sp.releaseDate,
                            rating: sp.rating,
                            type: sp.type,
                            total_votes: sp.total_votes,
                            total_points: sp.total_points,
                            actors: sp.actors.map((a): Actor => ({
                                first_name: a.first_name,
                                last_name: a.last_name
                            }))
                        }));
                        return o;
                    }
                ));

    }

    public rate(id: number, rating: number) {
        return this.httpClient
            .put('v1/show/rate?id=' + id, {rating: rating});
    }


}
