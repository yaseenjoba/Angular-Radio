import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { StationsComponent } from './stations/stations.component';
import { PlayComponent } from './play/play.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    StationsComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,HttpClient]
})
export class AppModule { }
