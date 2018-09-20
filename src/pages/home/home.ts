import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  location: { city: string};
  weather: any;

  constructor(private storage: Storage, public navCtrl: NavController, private WeatherProvider: WeatherProvider) {
    this.storage.get('locations')       //ionic nosql database name is locations
    .then((val) => {
      if(val !=null){
        this.location = JSON.parse(val);
      } else{
        this.location = {city:'colombo'};
      }

      this.WeatherProvider.getWeather(this.location.city)
      .subscribe( weathers => {
        this.weather = weathers;
      });
    });

  }
}

