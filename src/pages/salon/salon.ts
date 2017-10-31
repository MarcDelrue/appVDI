import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-salon',
  templateUrl: 'salon.html'
})
export class SalonPage {
  isFavo ="md-heart-outline";
  all = ["ay","ay","ay","ay","ay","ay","ay","ay","ay"]
  constructor(public navCtrl: NavController) {

  }
  switchFavo() {
    if (this.isFavo == "md-heart-outline")
      this.isFavo = "md-heart";
    else
      this.isFavo = "md-heart-outline";
  }
}
