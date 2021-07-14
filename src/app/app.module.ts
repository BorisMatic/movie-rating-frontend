import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {ThemeModule} from './theme/theme.module';
import {InterceptorModule} from './interceptor/interceptor/interceptor.module';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from "@angular/common";
import {MatTabsModule} from "@angular/material/tabs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        BrowserModule,
        ThemeModule,
        InterceptorModule,
        HttpClientModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
