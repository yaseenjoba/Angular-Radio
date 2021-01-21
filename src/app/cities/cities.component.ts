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
  select(event:any) {
      for(let i=0;i<this.cities.length;i++){
        if(this.cities[i].city===event.target.value){
          this.selected=this.cities[i];
          console.log(this.cities[i]);
        }
      }
  }
}
