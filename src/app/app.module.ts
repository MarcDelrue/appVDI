import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';
import { Deeplinks } from '@ionic-native/deeplinks';
import { HaversineService } from "ng2-haversine";
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { SocialSharing } from '@ionic-native/social-sharing';
import { JsonApiModule } from 'angular2-jsonapi';

import { SalonPage } from '../pages/salon/salon';
import { FavoritePage } from '../pages/favorite/favorite';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilPage } from '../pages/profil/profil';
import { ProfilCoverPage } from '../pages/profil/profil-cover/profil-cover';
import { ProfilWorkshopPage } from '../pages/profil/profil-workshop/profil-workshop';
import { ProfilPhotosPage } from '../pages/profil/profil-photos/profil-photos';
import { ProfilJobsPage } from '../pages/profil/profil-jobs/profil-jobs';
import { ProfilInvitationPage } from '../pages/profil/profil-invitation/profil-invitation';
import { AdvancedsearchPage } from '../pages/home/advancedsearch/advancedsearch';
import { CategoriesPage } from '../pages/home/advancedsearch/categories/categories';
import { SocietiesPage } from '../pages/home/advancedsearch/societies/societies';

import { Datastore } from '../services/datastore.service';
import { SearchPipe } from './pipe/search.pipe';
import { ArraySortPipe } from './pipe/orderBy';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    SalonPage,
    FavoritePage,
    HomePage,
    TabsPage,
    ProfilPage,
    ArraySortPipe,
    SearchPipe,
    ProfilCoverPage,
    ProfilWorkshopPage,
    ProfilPhotosPage,
    ProfilJobsPage,
    ProfilInvitationPage,
    AdvancedsearchPage,
    CategoriesPage,
    SocietiesPage
  ],
  imports: [
    JsonApiModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SalonPage,
    FavoritePage,
    HomePage,
    ProfilPage,
    TabsPage,
    ProfilCoverPage,
    ProfilWorkshopPage,
    ProfilPhotosPage,
    ProfilJobsPage,
    ProfilInvitationPage,
    AdvancedsearchPage,
    CategoriesPage,
    SocietiesPage
  ],
  providers: [
    Datastore,
    StatusBar,
    SocialSharing,
    SplashScreen,
    Geolocation,
    Deeplinks,
    HaversineService,
    AdMobFree,
    UniqueDeviceID,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
