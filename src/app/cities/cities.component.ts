import { Observable } from 'rxjs';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  cities: any
  constructor(private data: DataService) { }
  selectedCity: any;
  ngOnInit(): void {
    this.data.getInfo().subscribe(d => { this.cities = d; });
  }
  select(value: any) {
    console.log(value)
    this.selectedCity = value;
    console.log(this.selectedCity);
  }

}
