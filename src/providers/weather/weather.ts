import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherProvider {

  apiKey: string;

    constructor(public http: HttpClient) {
      this.apiKey = '23a2708addb747059a133758181204';
    }

    getWeather(city) {
      return this.http.get('http://api.apixu.com/v1/current.json?key='+this.apiKey+'&q='+city);
    }

}
