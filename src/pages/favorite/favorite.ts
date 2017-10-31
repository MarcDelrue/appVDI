import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html'
})
export class FavoritePage {

  constructor(public navCtrl: NavController) {

  }
  shownGroup = null;
  typeFavorite = [
    {title: 'VDI', list: [{name: 'Martine', date: 'Energetix'}, {name: 'Marielle', date: 'Swipe'}, {name: 'Pierre', date: 'Texam'}]},
    {title: 'Société', list: [{name: 'Jenny Lane', date: 'Bijoux'},{name: 'Graine de Plaisir', date: 'Séduction'},{name: 'Partylite', date: 'Parfum & Bijoux'}]},
    {title: 'Salon', list: [{name: '26 Montboucher', date: '06/08/17'},{name: '49 St Haire', date: '06/08/17'},{name: '85 Rocheserviere', date: '06/08/17'}]}
];

toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup === group;
};

}
