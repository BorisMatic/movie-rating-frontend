import {NgModule} from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShowListComponent } from './components/show-list/show-list.component';
import {MatTabsModule} from "@angular/material/tabs";
import {CommonModule} from "@angular/common";
import {NgxStarRatingModule} from "ngx-star-rating";

const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
    declarations: [HomeComponent, ShowListComponent],
    imports: [
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        FormsModule,
        MatTabsModule,
        CommonModule,
        NgxStarRatingModule,
    ]
})
export class HomeModule {
}
