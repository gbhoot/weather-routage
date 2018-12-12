import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    apiKey = "18251ea94528a83a77e7be206298e6be"
    urlLink = ("https://api.openweathermap.org/data/2.5/"+
        "weather?appid="+ this.apiKey +"&q=");

    constructor(private _http: HttpClient) { }

    getWeatherData(locale: string) {
        let fullLink = this.urlLink + locale;
        return this._http.get(fullLink);
    }
}
