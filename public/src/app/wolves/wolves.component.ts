import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-wolves',
    templateUrl: './wolves.component.html',
    styleUrls: ['./wolves.component.css']
})

export class WolvesComponent implements OnInit {
    localeD: any = {};
    imgURL: string = "http://melaman2.com/premierleague/stadiums/Wolverhampton__Molineux_Stadium__aerial-big.jpg"

    constructor(private _httpService: HttpService) { }

    ngOnInit() {
        this.getWeatherData();
    }

    getWeatherData() {
        let observable = this._httpService.getWeatherData("wolverhampton,uk");
        observable.subscribe(data => {
            this.localeD.cityName = "Wolverhampton Wanderers, UK";
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
