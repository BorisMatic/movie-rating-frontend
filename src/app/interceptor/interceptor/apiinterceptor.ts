import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authKey = localStorage.getItem('auth_key');

        let apiReq = req.clone({url: `http://api.moovies.test/${req.url}`});
        if (authKey) {
            apiReq =  apiReq.clone({
                headers: req.headers
                    .set('Authorization', 'Bearer ' + authKey)
            });
        }
        return next.handle(apiReq);
    }
}
