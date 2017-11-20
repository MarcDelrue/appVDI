import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Datastore } from '../../services/datastore.service';
import { Event } from '../../models/reseauvdiModels.model';

@Component({
  selector: 'page-salon',
  templateUrl: 'salon.html'
})
export class SalonPage {
  loading = false;
  isFavo ="md-heart-outline";
  events = [];
  constructor(public navCtrl: NavController, private datastore: Datastore) {}

  ngOnInit() {
    this.loading = true
    this.findOpenDoor('none');
  }

  findOpenDoor(event)
  {
    this.datastore.findAll(Event, {include: 'user,company'}).subscribe(data=>{
      this.loading = false;
      this.events = data.getModels();
      if (event != "none")
      event.complete();
      console.log(this.events);
    });
  }

  switchFavo() {
    if (this.isFavo == "md-heart-outline")
      this.isFavo = "md-heart";
    else
      this.isFavo = "md-heart-outline";
  }
}
