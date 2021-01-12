import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  cities=['Hebron','Ramallah',"Tulkarem"]
  constructor() { }
  selectedCity:any;
  ngOnInit(): void {
  }
  select(value:any){
    console.log(value)
    this.selectedCity=value;
    console.log(this.selectedCity);
  }

}
