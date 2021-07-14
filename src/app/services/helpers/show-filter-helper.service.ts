import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ShowFilterHelperService {

    filters: any;

    constructor() {
    }

    public getFilters(query) {
        this.filters = {};

        this.setStarFilter(query);
        this.setAtLeastStarsFilter(query)
        this.setAfterFilter(query);
        this.setOlderThanFilter(query);

        if (Object.keys(this.filters).length === 0) {
            this.filters.search_term = query;
        }

        return this.filters;

    }

    private setStarFilter(query) {
        const regex = /^((?!at least ).)*[0-5] stars/g;
        const matchedData = query.match(regex);
        if (!matchedData) {
            return null;
        }
        const valueRegex = /[0-5]/g;
        this.filters.rating = matchedData[0].match(valueRegex)[0];
    }

    private setAtLeastStarsFilter(query) {
        const regex = /at least [0-5] stars/g;
        const matchedData = query.match(regex);
        if (!matchedData) {
            return null;
        }
        const valueRegex = /[0-5]/g;
        this.filters.min_rating = matchedData[0].match(valueRegex)[0];

    }

    private setAfterFilter(query) {
        const regex = /after 2[0-9][0-9][0-9]/g;
        const matchedData = query.match(regex);
        if (!matchedData) {
            return null;
        }
        const valueRegex = /2[0-9][0-9][0-9]/g;
        this.filters.min_year = matchedData[0].match(valueRegex)[0];
    }

    private setOlderThanFilter(query) {
        const regex = /older than [1-9][0-9]* years/g;
        const matchedData = query.match(regex);
        if (!matchedData) {
            return null;
        }
        const valueRegex = /[1-9][0-9]*/g;
        return matchedData[0].match(valueRegex)[0];
    }
}
