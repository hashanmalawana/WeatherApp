import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  city: string;

  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveform(){
    let location = {city: this.city};
    this.storage.set('locations', JSON.stringify(location))
    .then((val) => {
      this.navCtrl.setRoot(HomePage);
    });

  }

}
