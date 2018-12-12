import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-sanjose',
    templateUrl: './sanjose.component.html',
    styleUrls: ['./sanjose.component.css']
})

export class SanjoseComponent implements OnInit {
    localeD: any = {};
    imgURL: string = "https://sanjose-mp7static.mlsdigital.net/styles/image_default/s3/images/AvayaStadium_SideAerial_2.png?165WcihZVZgwU2tVYPy9iSlcEkmX9JN7&itok=XoP6mGFJ&c=0ec1450fb9916a93b74f909a22096fa1"

    constructor(private _httpService: HttpService) { }

    ngOnInit() {
        this.getWeatherData();
    }

    getWeatherData() {
        let observable = this._httpService.getWeatherData("san jose,us");
        observable.subscribe(data => {
            this.localeD.cityName = "San Jose Earthquakes, US";
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
