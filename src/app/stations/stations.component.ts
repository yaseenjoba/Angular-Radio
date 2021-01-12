import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit {
  hebron= ['hebron FM','marah FM','Al houria FM','Al rabia'];
  Ramallah= ['Ajyal FM','aroba FM','raya FM','Amoaj FM'];
  Tulkarem =['Alfajer','Kl elnas'];
  @Input() Selected_city:any;
  selectedStation:any;
  constructor() { }

  ngOnInit(): void {
  }
  select(value:any)
  {
    this.selectedStation=value;
  }

}
