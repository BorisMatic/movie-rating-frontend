import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../../../../services/login.service";
import {getLocaleEraNames} from "@angular/common";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private loginService: LoginService,
        private router: Router,
    ) {
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            username: ['', Validators.compose([Validators.required])],
            password: ['', Validators.required]
        });
    }

    login() {
        this.loginService.login(this.form.value).subscribe(value => {
            localStorage.setItem('auth_key', value.token);
            this.router.navigate(['/']);
        });
    }
}
