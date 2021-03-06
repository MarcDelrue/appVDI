import { Component } from '@angular/core';
import { Config, Platform, Nav, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Deeplinks } from '@ionic-native/deeplinks';
import { SalonPage } from '../pages/salon/salon';
import { FavoritePage } from '../pages/favorite/favorite';
import { HomePage } from '../pages/home/home';
import { ProfilPage } from '../pages/profil/profil';
import { ProfilCoverPage } from '../pages/profil/profil-cover/profil-cover';
import { ProfilWorkshopPage } from '../pages/profil/profil-workshop/profil-workshop';
import { ProfilPhotosPage } from '../pages/profil/profil-photos/profil-photos';
import { ProfilJobsPage } from '../pages/profil/profil-jobs/profil-jobs';
import { ProfilInvitationPage } from '../pages/profil/profil-invitation/profil-invitation';
import { AdvancedsearchPage } from '../pages/home/advancedsearch/advancedsearch';
import { CategoriesPage } from '../pages/home/advancedsearch/categories/categories';
import { SocietiesPage } from '../pages/home/advancedsearch/societies/societies';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  error: string;
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private _config: Config, private deeplinks: Deeplinks, private uniqueDeviceID: UniqueDeviceID) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.initiateParams();
    });
    this._config.set('backButtonText', 'Retour');
  }

initiateParams(){
  this.deeplinks.routeWithNavController(this.navChild, {
  	        '/vdi/:vdiId': ProfilPage
  	      }).subscribe((match) => {
  	        console.log('Successfully routed', match);
  	      }, (nomatch) => {
  	        console.log('Unmatched Route', nomatch);
  	      });

  this.uniqueDeviceID.get()
  .then((uuid: any) => {
    console.log("olilol " + uuid);
    localStorage.setItem('UserDevice', uuid);
  })
  .catch((error: any) => console.log(error));
 }
}
