import { DataService } from './../data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit {
//  // hebron= ['hebron FM','marah FM','Al houria FM','Al rabia'];
//  hebron:any;
//   Ramallah:any;
//   Tulkarem :any;
  @Input() Selected_city:any;
  selectedStation:any;
  constructor(private data:DataService) { }
  temp:any;
  ngOnInit(): void {
    this.data.getInfo().subscribe((d)=> this.temp=d);
  }
  select(value:any)
  {
    this.selectedStation=value;
  }

}
