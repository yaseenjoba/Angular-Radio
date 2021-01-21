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
  audio:any;
  state=false;
  constructor(private data: DataService) { }
  ngOnInit(): void {
  }
  select(value: any) {
    console.log(value);
   this.audio =new Audio("https://streaming.zaytonatube.com/test2.aac");
    this.audio.play();
    this.state=true;
  }
  pauseAudio(){
    if(this.state){
      this.audio.pause();
    }else this.audio.play();
    this.state=!this.state;
    
  }

}
