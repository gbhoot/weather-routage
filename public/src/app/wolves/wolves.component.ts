import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wolves',
  templateUrl: './wolves.component.html',
  styleUrls: ['./wolves.component.css']
})
export class WolvesComponent implements OnInit {
  locationD: any = {};
  imgUrl: string;
  constructor() { }

  ngOnInit() {
    this.locationD.humidity = 25;
    this.locationD.tempAvg = 30;
    this.locationD.tempHi = 28;
    this.locationD.tempLo = 20;
    this.locationD.status = "always cloudy";
    this.locationD.imageUrl = "https://i2-prod.birminghammail.co.uk/incoming/article9927958.ece/ALTERNATES/s615b/JS70684896.jpg"
  }

}
