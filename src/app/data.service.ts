import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getInfo(){
    return this.http.get('https://api.mocki.io/v1/5d8e9629');
  }
}
