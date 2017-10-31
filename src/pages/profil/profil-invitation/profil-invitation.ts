import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-profil-invitation',
  templateUrl: 'profil-invitation.html',
})
export class ProfilInvitationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  object: string;

  ngOnInit()
  {
    this.object = this.navParams.get('reason');
  }
}
