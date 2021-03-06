import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProfilCoverPage } from './profil-cover/profil-cover'
import { ProfilInvitationPage } from './profil-invitation/profil-invitation';
import { Deeplinks } from '@ionic-native/deeplinks';

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  isFavo ="md-heart-outline";
  apps = "P";

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ngOnInit(){
    let test = this.navParams.get("vdi");
    console.log(test);
  }

  goToInvitation(reason){
    this.navCtrl.push(ProfilInvitationPage, {reason : reason});
  }

  switchFavo() {
    if (this.isFavo == "md-heart-outline")
      this.isFavo = "md-heart";
    else
      this.isFavo = "md-heart-outline";
  }

  public contact() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Vous souhaitez contacter ce profil');

    alert.addInput({
      type: 'radio',
      label: 'pour des informations sur les produits',
      value: 'Informations sur les produits',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'pour organiser une vente entre amis',
      value: 'Organiser une vente entre amis',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'pour participer à un événement',
      value: 'Participer à un événement',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: "pour postuler à l'offre d'emploi",
      value: "Postuler à l'offre d'emploi",
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'pour des échanges professionnels',
      value: 'échanges professionnels',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'autres',
      value: '',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.goToInvitation(data);
      }
    });
    alert.present();
  }

};
