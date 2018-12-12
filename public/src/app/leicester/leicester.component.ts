import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-leicester',
    templateUrl: './leicester.component.html',
    styleUrls: ['./leicester.component.css']
})

export class LeicesterComponent implements OnInit {
    localeD: any = {};
    imgURL: string = "https://c1.staticflickr.com/9/8296/8003815874_65daec65c8_m.jpg"

    constructor(private _httpService: HttpService) { }

    ngOnInit() {
        this.getWeatherData();
    }

    getWeatherData() {
        let observable = this._httpService.getWeatherData("leicester,uk");
        observable.subscribe(data => {
            this.localeD.cityName = "Leicester City Foxes, UK";
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
