import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {APIInterceptor} from './apiinterceptor';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true
    }
  ]
})
export class InterceptorModule {
}
