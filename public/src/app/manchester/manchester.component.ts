import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-manchester',
    templateUrl: './manchester.component.html',
    styleUrls: ['./manchester.component.css']
})

export class ManchesterComponent implements OnInit {
    localeD: any = {};
    imgURL: string = "https://images-na.ssl-images-amazon.com/images/I/81vnwsuYyvL._SL1200_.jpg"

    constructor(private _httpService: HttpService) { }

    ngOnInit() {
        this.getWeatherData();
    }

    getWeatherData() {
        let observable = this._httpService.getWeatherData("manchester,uk");
        observable.subscribe(data => {
            this.localeD.cityName = "Manchester United, UK";
            this.localeD.temp = this.convertKelToCel(data['main']['temp']);
            this.localeD.tempHi = this.convertKelToCel(data['main']['temp_max']);
            this.localeD.tempLo = this.convertKelToCel(data['main']['temp_min']);
            this.localeD.humidity = data['main']['humidity'];
            this.localeD.status = data['weather'][0]['main'];
            this.localeD.imgURL = this.imgURL;
        });
    };

    convertKelToCel(tempK: number): number {
        return Math.round((tempK - 273.15) * 100) / 100;
    }
}
