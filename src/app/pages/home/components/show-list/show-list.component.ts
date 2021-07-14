import {Component, Input, OnInit} from '@angular/core';
import {ShowService} from "../../../../services/show.service";
import {environment} from "../../../../../environments/environment";
import {Show} from "../../../../interfaces/show";
import {MovieType} from '../../../../enums/movie-type.enum';

@Component({
    selector: 'app-show-list',
    templateUrl: './show-list.component.html',
    styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
    private totalCount = 0;
    private pageSize = 0;
    private currentPage = 1;
    private pageCount = 0;
    private offset = 0;
    public showList = [];
    public hasMoreItems = false;
    @Input() showType = MovieType.Movie;
    public baseUrl = environment.baseUrl;
    public _filterParams:any = {};

    @Input() set filterParams(value: any) {
        this._filterParams = value;
        this.resetPagination();
        this.search();
    }

    get filterParams(): any {
        return this._filterParams;
    }

    constructor(
        private showService: ShowService
    ) {
    }

    ngOnInit(): void {
    }

    private search() {
        const filters = {
            type: this.showType,
            page: this.currentPage,
            expand: 'actors',
            ...this.filterParams
        };
        this.showService.list(filters).subscribe(value => {
            this.showList = this.showList.concat(value.body);
            this.totalCount = Number(value.headers.get('X-Pagination-Total-Count'));
            this.pageSize = Number(value.headers.get('X-Pagination-Per-Page'));
            this.currentPage = Number(value.headers.get('X-Pagination-Current-Page'));
            this.pageCount = Number(value.headers.get('X-Pagination-Page-Count'));
            this.hasMoreItems = this.currentPage < this.pageCount;
        });
    }

    loadMore() {
        this.currentPage++;
        this.search();
    }

    private resetPagination() {
        this.showList = [];
        this.totalCount = 0;
        this.pageSize = 0;
        this.currentPage = 1;
        this.pageCount = 0;
        this.offset = 0;
        this.hasMoreItems = false;
    }

    changeRating(rating: any, show: Show) {
        this.showService.rate(show.id, show.rating).subscribe(value => {
            console.log(value);
        });
    }
}
