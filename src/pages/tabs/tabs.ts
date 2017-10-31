import { Component } from '@angular/core';

import { SalonPage } from '../salon/salon';
import { FavoritePage } from '../favorite/favorite';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SalonPage;
  tab3Root = FavoritePage;
  //tab4Root = FavoritePage;

  constructor() {

  }
}
