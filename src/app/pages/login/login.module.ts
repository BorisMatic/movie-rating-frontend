import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class LoginModule { }
