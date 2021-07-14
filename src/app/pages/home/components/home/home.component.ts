import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {ShowFilterHelperService} from '../../../../services/helpers/show-filter-helper.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    searchForm: FormGroup;
    debounceTime = 100;
    filterParams = {};

    constructor(
        private formBuilder: FormBuilder,
        private showFilterHelper: ShowFilterHelperService
    ) {
    }

    ngOnInit(): void {
        this.initForm();
        this.addSearchListener();
    }

    private initForm() {
        this.searchForm = this.formBuilder.group({
            text: '',
            type: '',
        });
    }

    private addSearchListener() {
        this.searchForm.controls['text'].valueChanges
            .pipe(debounceTime(this.debounceTime), distinctUntilChanged())
            .subscribe(query => {
                if (query.length > 2) {
                    this.filterParams = this.showFilterHelper.getFilters(query);
                }
                if (query.length === 0) {
                    this.filterParams = this.showFilterHelper.getFilters(query);
                }
            });
    }
}
