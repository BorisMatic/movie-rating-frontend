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
        this.getAtLeastStarsFilter(query)
        this.getAfterFilter(query);
        this.getOlderThanFilter(query);

        if (Object.keys(this.filters).length === 0) {
            this.filters.search_term = query;
        }

        return this.filters;

    }

    private setStarFilter(query) {
        const regex = /[0-5] stars/g;
        const matchedData = query.match(regex);
        if (!matchedData) {
            return null;
        }
        const valueRegex = /[0-5]/g;
        const value = matchedData[0].match(valueRegex)[0];
        this.filters.rating = value;
    }

    private getAtLeastStarsFilter(query) {
        const regex = /at least [0-5] stars/g;
        const matchedData = query.match(regex);
        if (!matchedData) {
            return null;
        }
        const valueRegex = /[0-5]/g;
        return matchedData[0].match(valueRegex)[0];
    }

    private getAfterFilter(query) {
        const regex = /after 2[0-9][0-9][0-9]/g;
        const matchedData = query.match(regex);
        if (!matchedData) {
            return null;
        }
        const valueRegex = /2[0-9][0-9][0-9]/g;
        return matchedData[0].match(valueRegex)[0];
    }

    private getOlderThanFilter(query) {
        const regex = /older than [1-9][0-9]* years/g;
        const matchedData = query.match(regex);
        if (!matchedData) {
            return null;
        }
        const valueRegex = /[1-9][0-9]*/g;
        return matchedData[0].match(valueRegex)[0];
    }
}
