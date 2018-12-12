import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  localeSelected: boolean = false;
  lastBtnEvent: any;

  constructor(private _httpService: HttpService) {}

  locationBtnPressed(event: any) {
    if (this.lastBtnEvent) {
      this.lastBtnEvent['srcElement']['disabled'] = false;
    }
    
    this.localeSelected = true;
    event['srcElement']['disabled'] = true;
    this.lastBtnEvent = event;
  }
}
