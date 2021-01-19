import { DataService } from './../data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit {
  @Input() selectedCity: any;
  selectedStation: any;
  constructor(private data: DataService) { }
  ngOnInit(): void {
  }
  select(value: any) {
    this.selectedStation = value;
  }

}
