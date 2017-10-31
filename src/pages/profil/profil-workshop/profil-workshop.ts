import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilInvitationPage } from '../profil-invitation/profil-invitation';

@Component({
  selector: 'page-profil-workshop',
  templateUrl: 'profil-workshop.html',
})
export class ProfilWorkshopPage {

  isFavo = "md-heart-outline"
  for = [0,0,0,0,0,0];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToInvitation(){
    this.navCtrl.push(ProfilInvitationPage);
  }

  switchFavo() {
    if (this.isFavo == "md-heart-outline")
      this.isFavo = "md-heart";
    else
      this.isFavo = "md-heart-outline";
  }

}
