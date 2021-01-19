import { Observable } from 'rxjs';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  cities: any;
  selected: any;
  constructor(private data: DataService) { }
  ngOnInit(): void {
    this.data.getCitiesAndStations().subscribe(d => {
      this.cities = d;
      console.log(this.cities);
    });

  }
  select(value: any) {
    this.selected = value;
    console.log(this.selected);
  }

}
