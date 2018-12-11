import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  @Input () location: string;
  // @Input () humidity: string;
  // @Input () tempAvg: string;
  // @Input () tempHi: string;
  // @Input () tempLo: string;
  // @Input () status: string;

  constructor() { }

  ngOnInit() {
  }
}
