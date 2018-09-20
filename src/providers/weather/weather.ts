import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
apikey = '272350c672214bb285c101240182009';
url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
  this.url = 'http://api.apixu.com/v1/current.json?key=272350c672214bb285c101240182009&q=Colombo'
  }

 getWeather(region, country){
    return this.http.get(this.url+'/'+region+'/'+country+'.json')
    .map(res => res.json());
  }
}
