import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    lastBtnEvent: any;
    selectedLocale: string;

    constructor(private _httpService: HttpService) {}

    locationBtnPressed(event: any, locale: string) {
        if (this.lastBtnEvent) {
            this.lastBtnEvent['srcElement']['disabled'] = false;
        }
        console.log(event);
        
        event['srcElement']['disabled'] = true;
        this.lastBtnEvent = event;
        switch (locale) {
            case "sanjose":
                this.selectedLocale = "San Jose";
                break;
            default:
                break;
        };
    }
}
