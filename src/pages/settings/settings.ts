import { HomePage } from './../home/home';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  region:string;
  country:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private Storage:Storage) {

    this.Storage.get('location').then((val) => {
    if(val != null){
  let location = JSON.parse(val);
  this.region = location.region;
  this.country = location.country;
} else {
this.region = 'Colombo';
this.country = 'SL';
}
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm(){
    let location = {
      region: this.region,
      country: this.country
    }
    this.Storage.set('location', JSON.stringify(location));
    this.navCtrl.push(HomePage);
  }
}
