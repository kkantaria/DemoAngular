import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  listing: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Mcleod  Mueller"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
