import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ArraySortPipe } from '../../app/pipe/orderBy';
import { SearchPipe } from '../../app/pipe/search.pipe';
import { HaversineService, GeoCoord } from "ng2-haversine";
import { ProfilPage } from "../profil/profil";
import { AdvancedsearchPage } from "./advancedsearch/advancedsearch";
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loading : boolean = true;
  constructor(public navCtrl: NavController, private geolocation: Geolocation, private _haversineService: HaversineService, private navParams: NavParams, private alertCtrl: AlertController, private admobFree: AdMobFree) {
  }


  vdilist = [{"id":1,"first_name":"Robbie","last_name":"Blackley","gender":"Male","categories":"Garden","enterprise":"Oozz","location":"17017 Schiller Point","city":"Lubień Kujawski"},
{"id":2,"first_name":"Alex","last_name":"Hamlett","gender":"Male","categories":"Tools","enterprise":"Topicstorm","location":"92 Toban Park","city":"Purral"},
{"id":3,"first_name":"Rolfe","last_name":"Tidswell","gender":"Female","categories":"Outdoors","enterprise":"Jabbertype","location":"8 Bunting Point","city":"Paris 08"},
{"id":4,"first_name":"Fee","last_name":"Cordero","gender":"Male","categories":"Games","enterprise":"Devpulse","location":"5231 Butternut Avenue","city":"Bukuru"},
{"id":5,"first_name":"Thea","last_name":"Dumbrall","gender":"Female","categories":"Baby","enterprise":"Vitz","location":"73 Dwight Alley","city":"Longqiao"},
{"id":6,"first_name":"Kathye","last_name":"Danko","gender":"Male","categories":"Baby","enterprise":"Oloo","location":"45 Corry Street","city":"Chaykovskaya"},
{"id":7,"first_name":"Corene","last_name":"Tibb","gender":"Female","categories":"Home","enterprise":"Zoombox","location":"1 Mallory Point","city":"Lakha Nëvre"},
{"id":8,"first_name":"Tabor","last_name":"Lympany","gender":"Male","categories":"Music","enterprise":"Jaxworks","location":"14375 Scott Lane","city":"Chengguan"},
{"id":9,"first_name":"Wayne","last_name":"Please","gender":"Male","categories":"Toys","enterprise":"Aivee","location":"2 Dorton Junction","city":"Si Wilai"},
{"id":10,"first_name":"Immanuel","last_name":"Tedman","gender":"Female","categories":"Electronics","enterprise":"Fivechat","location":"702 Forster Drive","city":"Outapi"},
{"id":11,"first_name":"Hiram","last_name":"Sandbach","gender":"Male","categories":"Garden","enterprise":"Thoughtbeat","location":"1 Ramsey Court","city":"Surubim"},
{"id":12,"first_name":"Fawne","last_name":"Shand","gender":"Female","categories":"Music","enterprise":"Abata","location":"7484 Montana Alley","city":"Boniewo"},
{"id":13,"first_name":"Fawne","last_name":"Size","gender":"Female","categories":"Music","enterprise":"Bubbletube","location":"36115 Fordem Drive","city":"Benito Juarez"},
{"id":14,"first_name":"Dinnie","last_name":"Veart","gender":"Female","categories":"Health","enterprise":"BlogXS","location":"4758 Barnett Pass","city":"Nglengkir"},
{"id":15,"first_name":"Cosetta","last_name":"Ordemann","gender":"Female","categories":"Sports","enterprise":"Brainverse","location":"55394 Lotheville Terrace","city":"Viale"},
{"id":16,"first_name":"Gussi","last_name":"Crown","gender":"Female","categories":"Movies","enterprise":"Yodo","location":"70126 Linden Center","city":"Qiping"},
{"id":17,"first_name":"Valry","last_name":"Stanmer","gender":"Female","categories":"Industrial","enterprise":"Zoombeat","location":"3514 Blaine Circle","city":"Póvoa de Penela"},
{"id":18,"first_name":"Paten","last_name":"Showen","gender":"Male","categories":"Industrial","enterprise":"Photobug","location":"9 Scott Alley","city":"Chantilly"},
{"id":19,"first_name":"Itch","last_name":"Lipgens","gender":"Male","categories":"Automotive","enterprise":"Rhynyx","location":"8 Spaight Alley","city":"Vylkove"},
{"id":20,"first_name":"Randall","last_name":"Moohan","gender":"Male","categories":"Books","enterprise":"Livefish","location":"0 Almo Junction","city":"Spånga"}];

  ngOnInit()
  {
    this.createAd();
    this.geolocation.getCurrentPosition().then((resp) => {
      //this.calculateDist(resp.coords.latitude, resp.coords.longitude);
      console.log(resp.coords.latitude, resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    setTimeout(()=>this.loading = false, 3000);
  }

  createAd() {
    let bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
        isTesting: true,
        autoShow: true
      };
      this.admobFree.banner.config(bannerConfig);
      this.admobFree.banner.prepare()
  .then(() => {
    // banner Ad is ready
    // if we set autoShow to false, then we will need to call the show method here
  })
  .catch(e => console.log(e));
  }

  goToProfil(vdi) {
//     let alert = this.alertCtrl.create({
//   title: 'Profil de' + vdi.first_name,
//   buttons: [
//     {
//       text: 'Information',
//       handler: () => {
//         this.navCtrl.push(ProfilPage, {vdi: vdi});
//       }
//     },
//     {
//       text: 'Je demande une invitation',
//       handler: () => {
//         this.navCtrl.push(ProfilPage, {vdi: vdi});
//       }
//     },
//     {
//       text: 'Annuler',
//       handler: () => {
//         console.log('Disagree clicked');
//       }
//     }
//   ]
// });
//
// alert.present();
this.navCtrl.push(ProfilPage, {vdi: vdi});
  }

  advancedsearch() {
    this.navCtrl.push(AdvancedsearchPage);
  }

  // calculateDist(lat, lng){
  // let getLocation: GeoCoord = {latitude: lat,longitude: lng};
  // let i = 0;
  // for (let each of this.positions) {
  //   let test = this._haversineService.getDistanceInKilometers(this.positions[i], getLocation);
  //   this.distance[i] = test.toFixed(1);
  //   i = i + 1;
  //   }
  // }
}
