import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-seattle',
    templateUrl: './seattle.component.html',
    styleUrls: ['./seattle.component.css']
})

export class SeattleComponent implements OnInit {
    localeD: any = {};
    imgURL: string = "https://uploads.visitseattle.org/2016/01/31063349/Photo-Credit-Seattle-Sounders-FC_CLink2_Seattle-Sounders-FC-768x512.jpg"

    constructor(private _httpService: HttpService) { }

    ngOnInit() {
        this.getWeatherData();
    }

    getWeatherData() {
        let observable = this._httpService.getWeatherData("seattle");
        observable.subscribe(data => {
            this.localeD.cityName = "Seattle Sounders, US";
            this.localeD.temp = this.convertKelToFah(data['main']['temp']);
            this.localeD.tempHi = this.convertKelToFah(data['main']['temp_max']);
            this.localeD.tempLo = this.convertKelToFah(data['main']['temp_min']);
            this.localeD.humidity = data['main']['humidity'];
            this.localeD.status = data['weather'][0]['main'];
            this.localeD.imgURL = this.imgURL;
        });
    };

    convertKelToCel(tempK: number): number {
        return Math.round((tempK - 273.15) * 100) / 100;
    }

    convertKelToFah(tempK: number): number {
        return Math.round((((tempK - 273.15) * 9 / 5) + 32) * 100) / 100;
    }
}
