webpackJsonp([0],{

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 199;

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__salon_salon__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorite_favorite__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    //tab4Root = FavoritePage;
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__salon_salon__["a" /* SalonPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__favorite_favorite__["a" /* FavoritePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/tabs/tabs.html"*/'<ion-tabs class="test" color="vdi">\n  <ion-tab [root]="tab1Root" tabTitle="Chercher" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Salon" tabIcon="calendar"></ion-tab>\n  <!-- <ion-tab [root]="tab3Root" tabTitle="Recommandation" tabIcon="ios-thumbs-up-outline"></ion-tab> -->\n  <ion-tab [root]="tab3Root" tabTitle="Favoris" tabIcon="md-heart-outline"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_datastore_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_reseauvdiModels_model__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SalonPage = (function () {
    function SalonPage(navCtrl, datastore) {
        this.navCtrl = navCtrl;
        this.datastore = datastore;
        this.loading = false;
        this.isFavo = "md-heart-outline";
        this.events = [];
    }
    SalonPage.prototype.ngOnInit = function () {
        this.loading = true;
        this.findOpenDoor('none');
    };
    SalonPage.prototype.findOpenDoor = function (event) {
        var _this = this;
        this.datastore.findAll(__WEBPACK_IMPORTED_MODULE_3__models_reseauvdiModels_model__["c" /* Event */], { include: 'user,company' }).subscribe(function (data) {
            _this.loading = false;
            _this.events = data.getModels();
            if (event != "none")
                event.complete();
            console.log(_this.events);
        });
    };
    SalonPage.prototype.switchFavo = function () {
        if (this.isFavo == "md-heart-outline")
            this.isFavo = "md-heart";
        else
            this.isFavo = "md-heart-outline";
    };
    return SalonPage;
}());
SalonPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-salon',template:/*ion-inline-start:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/salon/salon.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Salons\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="findOpenDoor($event)">\n    <ion-refresher-content\n    pullingText="Tirer pour rafraichir..."\n    refreshingText="En raffraichissement...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-card padding *ngFor=\'let event of events\'>\n    <div class="threebutton">\n    <div style="text-align: left">\n      <ion-icon name="ios-pin"></ion-icon>\n      <label>{{event.city}}</label>\n    </div>\n    <div style="text-align: right">\n      <ion-icon name="md-calendar"></ion-icon>\n      <label>{{event.date | date: "dd/MM/yy"}}</label>\n    </div>\n  </div>\n  <div *ngIf=\'event.showbanner\'>\n  <img src=\'assets/img/selfie.jpg\'>\n  <label>Description: </label>\n  <div>{{event.description}}</div>\n  </div>\n  <hr>\n  <div class="row threebutton">\n      <button ion-fab class="invitbutton" (click)=\'event.showbanner = !event.showbanner\'><ion-icon name="ios-information" style="font-size: 40px"></ion-icon></button>\n      <button ion-fab class="invitbutton" (click)=\'switchFavo()\'><ion-icon name={{isFavo}}></ion-icon></button>\n  </div>\n  </ion-card>\n</ion-content>\n<img src="assets/img/Wedges.gif" class="loading" *ngIf="loading">\n'/*ion-inline-end:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/salon/salon.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_datastore_service__["a" /* Datastore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_datastore_service__["a" /* Datastore */]) === "function" && _b || Object])
], SalonPage);

var _a, _b;
//# sourceMappingURL=salon.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoritePage = (function () {
    function FavoritePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.shownGroup = null;
        this.typeFavorite = [
            { title: 'VDI', list: [{ name: 'Martine', date: 'Energetix' }, { name: 'Marielle', date: 'Swipe' }, { name: 'Pierre', date: 'Texam' }] },
            { title: 'Société', list: [{ name: 'Jenny Lane', date: 'Bijoux' }, { name: 'Graine de Plaisir', date: 'Séduction' }, { name: 'Partylite', date: 'Parfum & Bijoux' }] },
            { title: 'Salon', list: [{ name: '26 Montboucher', date: '06/08/17' }, { name: '49 St Haire', date: '06/08/17' }, { name: '85 Rocheserviere', date: '06/08/17' }] }
        ];
    }
    FavoritePage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    FavoritePage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    return FavoritePage;
}());
FavoritePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-favorite',template:/*ion-inline-start:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/favorite/favorite.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Favoris\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-item *ngFor="let d of typeFavorite; let i = index" text-wrap [ngClass]="{active: isGroupShown(i)}">\n      <button ion-button full class="no-background" (click)="toggleGroup(i)"><label class="searchParams">{{d.title}} <ion-icon color="vdi" item-right [name]="isGroupShown(i) ? \'ios-arrow-up\' : \'ios-arrow-down\'"></ion-icon></label></button>\n      <p *ngFor="let x of d.list">\n        <span *ngIf="isGroupShown(i)" class="threebutton">\n          <label color=\'vdi\'>{{x.name}}</label>\n          <label color=\'vdi\'>{{x.date}}</label>\n        </span>\n      </p>\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/favorite/favorite.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], FavoritePage);

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_haversine__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_haversine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_haversine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profil_profil__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__advancedsearch_advancedsearch__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_admob_free__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_datastore_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_reseauvdiModels_model__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, geolocation, _haversineService, navParams, alertCtrl, admobFree, datastore) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this._haversineService = _haversineService;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.admobFree = admobFree;
        this.datastore = datastore;
        this.loading = true;
        this.vdilist = [{ "id": 1, "first_name": "Robbie", "last_name": "Blackley", "gender": "Male", "categories": "Garden", "enterprise": "Oozz", "location": "17017 Schiller Point", "city": "Lubień Kujawski" },
            { "id": 2, "first_name": "Alex", "last_name": "Hamlett", "gender": "Male", "categories": "Tools", "enterprise": "Topicstorm", "location": "92 Toban Park", "city": "Purral" },
            { "id": 3, "first_name": "Rolfe", "last_name": "Tidswell", "gender": "Female", "categories": "Outdoors", "enterprise": "Jabbertype", "location": "8 Bunting Point", "city": "Paris 08" },
            { "id": 4, "first_name": "Fee", "last_name": "Cordero", "gender": "Male", "categories": "Games", "enterprise": "Devpulse", "location": "5231 Butternut Avenue", "city": "Bukuru" },
            { "id": 5, "first_name": "Thea", "last_name": "Dumbrall", "gender": "Female", "categories": "Baby", "enterprise": "Vitz", "location": "73 Dwight Alley", "city": "Longqiao" },
            { "id": 6, "first_name": "Kathye", "last_name": "Danko", "gender": "Male", "categories": "Baby", "enterprise": "Oloo", "location": "45 Corry Street", "city": "Chaykovskaya" },
            { "id": 7, "first_name": "Corene", "last_name": "Tibb", "gender": "Female", "categories": "Home", "enterprise": "Zoombox", "location": "1 Mallory Point", "city": "Lakha Nëvre" },
            { "id": 8, "first_name": "Tabor", "last_name": "Lympany", "gender": "Male", "categories": "Music", "enterprise": "Jaxworks", "location": "14375 Scott Lane", "city": "Chengguan" },
            { "id": 9, "first_name": "Wayne", "last_name": "Please", "gender": "Male", "categories": "Toys", "enterprise": "Aivee", "location": "2 Dorton Junction", "city": "Si Wilai" },
            { "id": 10, "first_name": "Immanuel", "last_name": "Tedman", "gender": "Female", "categories": "Electronics", "enterprise": "Fivechat", "location": "702 Forster Drive", "city": "Outapi" },
            { "id": 11, "first_name": "Hiram", "last_name": "Sandbach", "gender": "Male", "categories": "Garden", "enterprise": "Thoughtbeat", "location": "1 Ramsey Court", "city": "Surubim" },
            { "id": 12, "first_name": "Fawne", "last_name": "Shand", "gender": "Female", "categories": "Music", "enterprise": "Abata", "location": "7484 Montana Alley", "city": "Boniewo" },
            { "id": 13, "first_name": "Fawne", "last_name": "Size", "gender": "Female", "categories": "Music", "enterprise": "Bubbletube", "location": "36115 Fordem Drive", "city": "Benito Juarez" },
            { "id": 14, "first_name": "Dinnie", "last_name": "Veart", "gender": "Female", "categories": "Health", "enterprise": "BlogXS", "location": "4758 Barnett Pass", "city": "Nglengkir" },
            { "id": 15, "first_name": "Cosetta", "last_name": "Ordemann", "gender": "Female", "categories": "Sports", "enterprise": "Brainverse", "location": "55394 Lotheville Terrace", "city": "Viale" },
            { "id": 16, "first_name": "Gussi", "last_name": "Crown", "gender": "Female", "categories": "Movies", "enterprise": "Yodo", "location": "70126 Linden Center", "city": "Qiping" },
            { "id": 17, "first_name": "Valry", "last_name": "Stanmer", "gender": "Female", "categories": "Industrial", "enterprise": "Zoombeat", "location": "3514 Blaine Circle", "city": "Póvoa de Penela" },
            { "id": 18, "first_name": "Paten", "last_name": "Showen", "gender": "Male", "categories": "Industrial", "enterprise": "Photobug", "location": "9 Scott Alley", "city": "Chantilly" },
            { "id": 19, "first_name": "Itch", "last_name": "Lipgens", "gender": "Male", "categories": "Automotive", "enterprise": "Rhynyx", "location": "8 Spaight Alley", "city": "Vylkove" },
            { "id": 20, "first_name": "Randall", "last_name": "Moohan", "gender": "Male", "categories": "Books", "enterprise": "Livefish", "location": "0 Almo Junction", "city": "Spånga" }];
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.datastore.findAll(__WEBPACK_IMPORTED_MODULE_8__models_reseauvdiModels_model__["d" /* User */], { include: 'companies' }).subscribe(function (data) {
            console.log(data.getModels());
            _this.vdilist = (data.getModels());
        });
        this.createAd();
        this.geolocation.getCurrentPosition().then(function (resp) {
            //this.calculateDist(resp.coords.latitude, resp.coords.longitude);
            console.log(resp.coords.latitude, resp.coords.longitude);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        setTimeout(function () { return _this.loading = false; }, 3000);
    };
    HomePage.prototype.createAd = function () {
        var bannerConfig = {
            // add your config here
            // for the sake of this example we will just use the test config
            isTesting: true,
            autoShow: true
        };
        this.admobFree.banner.config(bannerConfig);
        this.admobFree.banner.prepare()
            .then(function () {
            // banner Ad is ready
            // if we set autoShow to false, then we will need to call the show method here
        })
            .catch(function (e) { return console.log(e); });
    };
    HomePage.prototype.goToProfil = function (vdi) {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profil_profil__["a" /* ProfilPage */], { vdi: vdi });
    };
    HomePage.prototype.advancedsearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__advancedsearch_advancedsearch__["a" /* AdvancedsearchPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="centertable">\n      <ion-input class="searchInput" placeholder="Rechercher une société, un(e) conseiler(ère)" style="padding-left: 10px" [(ngModel)]="filter"></ion-input>\n      <button class="searchFilter" (click)="advancedsearch()">Filtre</button>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <label>{{ vdilist?.length }} conseillers(ères) localisés: </label>\n  <table style="margin: auto; font-weight: bold">\n  <tr *ngFor="let vdi of vdilist | spipe: filter" class="row" (click)="goToProfil(vdi)" [ngClass]="{\'boi\': vdi.gender == \'Male\', \'gurl\': vdi.gender == \'Female\'}">\n    <td style="width: 20vw;" class="centertable">\n      <img class="imgthumbnail" src="assets/img/selfie.jpg">\n    </td>\n    <td style="width: 18vw; font-size: 18px" class="centertable">\n      <div class="searchParams">\n        {{ vdi.first_name }}\n      </div>\n    </td>\n    <td style="width: 50vw; padding-top: 10px;" class="centertable">\n      <ul>\n        <div class="searchParams" style="font-size: 13px">{{ vdi.categories }}</div>\n        <div class="searchParams" style="font-size: 13px; padding-left: 13px;">{{ vdi.enterprise }}</div>\n        <div class="searchParams" style="font-size: 13px; padding-left: 26px;">{{ vdi.city }}</div>\n      </ul>\n    </td>\n    <td style="width: 10vw;" class="centertable">\n      <ion-icon name="ios-arrow-forward" color="vdi" style="font-size: 20px"></ion-icon>\n    </td>\n  </tr>\n  </table>\n</ion-content>\n<img src="assets/img/Wedges.gif" class="loading" *ngIf="loading">\n'/*ion-inline-end:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/home/home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_datastore_service__["a" /* Datastore */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_haversine__["HaversineService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_haversine__["HaversineService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_admob_free__["a" /* AdMobFree */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_admob_free__["a" /* AdMobFree */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_datastore_service__["a" /* Datastore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_datastore_service__["a" /* Datastore */]) === "function" && _g || Object])
], HomePage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profil_invitation_profil_invitation__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilPage = (function () {
    function ProfilPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.isFavo = "md-heart-outline";
        this.apps = "P";
    }
    ProfilPage.prototype.ngOnInit = function () {
        var test = this.navParams.get("vdi");
        console.log(test);
    };
    ProfilPage.prototype.goToInvitation = function (reason) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profil_invitation_profil_invitation__["a" /* ProfilInvitationPage */], { reason: reason });
    };
    ProfilPage.prototype.switchFavo = function () {
        if (this.isFavo == "md-heart-outline")
            this.isFavo = "md-heart";
        else
            this.isFavo = "md-heart-outline";
    };
    ProfilPage.prototype.contact = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
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
            handler: function (data) {
                _this.goToInvitation(data);
            }
        });
        alert.present();
    };
    return ProfilPage;
}());
ProfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profil',template:/*ion-inline-start:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/profil/profil.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profil</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <ion-segment [(ngModel)]="apps">\n    <ion-segment-button value="P">\n      Profil\n    </ion-segment-button>\n    <ion-segment-button value="A">\n      Porte ouverte\n    </ion-segment-button>\n    <ion-segment-button value="G">\n      Galerie\n    </ion-segment-button>\n    <ion-segment-button value="E">\n      Emploi\n    </ion-segment-button>\n  </ion-segment>\n  <page-profil-cover *ngIf="apps == \'P\'"></page-profil-cover>\n  <page-profil-workshop *ngIf="apps == \'A\'"></page-profil-workshop>\n  <page-profil-photos *ngIf="apps == \'G\'"></page-profil-photos>\n  <page-profil-jobs *ngIf="apps == \'E\'"></page-profil-jobs>\n      <!-- <button ion-fab (click)=\'contact()\'>\n          <ion-icon name="md-mail"></ion-icon>\n      </button>\n      <button ion-fab>\n          <ion-icon name="md-share"></ion-icon>\n      </button>\n      <button ion-fab (click)="switchFavo()">\n          <ion-icon name={{isFavo}}></ion-icon>\n      </button> -->\n  <!-- <ion-fab right middle>\n    <button ion-fab color="vdi"><ion-icon name="add"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab color="vdi" (click)=\'contact()\'><ion-icon name="md-mail"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="bottom">\n      <ion-fab>\n        <button mini ion-fab color="vdi"><ion-icon name="md-share"></ion-icon></button>\n        <ion-fab-list side="left">\n          <button ion-fab color="vdi"><ion-icon name="logo-facebook"></ion-icon></button>\n          <button ion-fab color="vdi"><ion-icon name="logo-twitter"></ion-icon></button>\n          <button ion-fab color="vdi"><ion-icon name="logo-instagram"></ion-icon></button>\n          <button ion-fab color="vdi"><ion-icon name="logo-googleplus"></ion-icon></button>\n        </ion-fab-list>\n        <ion-fab-list side="bottom">\n          <button ion-fab color="vdi"><ion-icon name="ios-chatboxes"></ion-icon></button>\n          <button ion-fab color="vdi"><img class="icon icons8-Facebook-Messenger-Filled" width="25" height="25" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADW0lEQVRoQ92a61EUQRDHuyNQIhAz0AiUCMQIOCKQDNQMIAIhAiECIQI1AjECMYK2/ls968ze7E7PY2Huumo/UOw8ftOP6e49pj0R3hMOagYiIodE9IaIXumDv/H4ck9EeH7oc8fM+LtaqkB08++IaKObL9kQoC6J6KYGqghEAT4qQMnm58YA6HMJUBaIiDwnog9E9Knl7iNzYf4LZn6wrmMGERHY/teI3VvXyn0PvvOemWF6STGBiAh84EtytnVeOGVmmNyiJEGeGMJtPgmzCNIJhAlmFkREjtUnUlp9zP/DZ65jC0ZBNLx+JyJEqZ4EUex1LDzPgXwjorc9EXh7uWXmo+netkA684u5s9xy/hjIr0e8K0qVfs/ML/3BAciOaCMaxaYgPfvGVHuBr4wgmkf9KdX1E407cPmYD9IyDfmrUe+MiE4KIO+ISAyRc3R6H+RcM9uCdYMhA4RL9kQEeZIV5icRAR4FmSW3Q4aM9/9XiCJyqxVeDUgA4SYywGDcGZLDzICDCnO473yNwD9qbvIoRAIGY2AJ57D1TAhM/cDMB1MQ2GSNzOZBMzBXKNBcuqH1DtKiLGHmQRm+RmpAkmm2B4Pq79ovmBQCoT/bIlqCBBAaxk+Y+cJytDUQgyYiGkFm+cyyuPfOFAINCUQRnOwlM58uzafQSImyNaHz/mbmoeXkm1Zu1BohRAThFSYz7WPNmpxCwJzQCyiVaNTKuUeumHkjIgh90MJSyr8F0wgC8NF7xHqzD9FGATDGIlMTRHSq0YRbc4yUubnWDRFhE84PLBDBoiKCG9t6AKn5t3MtjEjc7q5ZVuqYGA8/RC+ghaDFOs61y/VIcAHHKkR0+F60OLIV5xjDrltjV2v2I2aGmY4y10XJvVNWPPytqQPfmNWIOj0uNjSPc2/6tYGQLR/GuvS71mlEcy7and//3q+zkYJiZw3zSpYJyc8K6jPW9KU1BHzieBqhYouYQBSmpvAqAUQnZWP9ntgjCLSAEhjZuFl6AgkaEWYCfbEHEGTU+HiDOt78FXcK2goENQpMAZkxiizUGi5LdlWj+4WD+/UDerdBmpGrhWSKEptQRGLODoeEPTfbUClMqUa6AVjMtRY0MvRme9BAjY8gpic/3JeaRu04s2nVLrT2+H/IUXNCHvp2FAAAAABJRU5ErkJggg=="></button>\n        </ion-fab-list>\n      </ion-fab>\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <button ion-fab color="vdi" (click)="switchFavo()"><ion-icon name={{isFavo}}></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab> -->\n</ion-content>\n'/*ion-inline-end:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/profil/profil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ProfilPage);

;
//# sourceMappingURL=profil.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedsearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories_categories__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__societies_societies__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdvancedsearchPage = (function () {
    function AdvancedsearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchParams = 'c';
        this.searchAround = "Autour de moi";
        this.societies = [{ name: "Toutes les sociétés", categorie: 'Toutes Les catégories' }];
        this.categories = [{ name: "Toutes les Catégories" }];
        this.allCategories = ["Bien être & Diététique", "Bijoux", "Confiserie & Chocolat", "Cuisine & Terroir", "Lingerie", "Loisir Créatif & Jeux", "Maison & Déco", "Parfum & Bougie", "Prêt à Porter & Accessoires", "Puériculture", "Séduction", "Soins & Beauté"];
        this.departement = ["Autour de moi", "Toute la France", "Autre pays", "Alsace", "Aquitaine", "Auvergne", "Basse-Normandie", "Bourgogne", "Bretagne", "Centre", "Champagne-Ardenne", "Corse", "Franche-Comté", "Guadeloupe", "Guyane", "Haute-Normandie",
            "Languedoc-Roussillon", "Limousin", "Lorraine", "Midi-pyrennées", "Nord-Pas-de-Calais", "Pays-de-la-Loire", "Picardie", "Poitou-Charentes", "Preovence-alpes-Cote-dazur",
            "Rhones-Alpes", "Ile-de-france"];
        this.radius = 0;
    }
    AdvancedsearchPage.prototype.ionViewWillEnter = function () {
        if (this.navParams.get('mycategories'))
            this.categories = this.navParams.get('mycategories');
        console.log(this.categories);
        if (this.navParams.get('mysocieties'))
            this.societies = this.navParams.get('mysocieties');
    };
    AdvancedsearchPage.prototype.goToCategories = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__categories_categories__["a" /* CategoriesPage */], { categories: this.categories });
    };
    AdvancedsearchPage.prototype.goToSocieties = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__societies_societies__["a" /* SocietiesPage */], { categories: this.categories, societies: this.societies });
    };
    AdvancedsearchPage.prototype.removeAll = function () {
        if (this.categories.length > 1) {
            var index = this.categories.findIndex(function (i) { return i.name === "Toutes les Catégories"; });
            if (index != -1)
                this.categories.splice(index, 1);
        }
    };
    return AdvancedsearchPage;
}());
AdvancedsearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-advancedsearch',template:/*ion-inline-start:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/home/advancedsearch/advancedsearch.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Recherche avancée</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item no-lines>\n    <ion-input class="searchInput" placeholder="Rechercher une société, un(e) conseiler(ère)" style="padding-left: 10px"></ion-input>\n  </ion-item>\n  <hr>\n  <ion-list radio-group [(ngModel)]="searchParams">\n  <ion-item no-lines>\n    <ion-label class="searchParams">Conseillers/ières</ion-label>\n    <ion-radio value="c"></ion-radio>\n  </ion-item>\n  <ion-item no-lines>\n    <ion-label class="searchParams">Portes ouvertes</ion-label>\n    <ion-radio value="po"></ion-radio>\n  </ion-item>\n</ion-list>\n<hr>\n  <ion-item no-lines>\n    <ion-select [(ngModel)]="searchAround" class="searchParams" style="max-width: 100% !important; margin: auto">\n      <ion-option *ngFor="let onebyone of departement; let i = index" value="{{onebyone}}">{{ onebyone }}</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-range *ngIf="searchAround == \'Autour de moi\'" min="0" max="100" pin="true" name="size" step="5" [(ngModel)]="radius">\n    <ion-label style="width: 38vw;" class="searchParams" range-left >Rayon {{radius}} km :</ion-label>\n  </ion-range>\n  <ion-input *ngIf="searchAround==\'Autre pays\'" placeholder="Quel pays ?"></ion-input>\n  <hr>\n  <ion-item no-lines>\n    <button class="styledbutton" (click)="goToCategories()"><label class="searchParams">Catégories <ion-icon name="ios-arrow-forward" color="vdi"></ion-icon></label></button>\n  </ion-item>\n  <ion-item *ngIf="categories[0]" no-lines>\n    <ion-list class="searchParams" *ngFor="let test of categories">{{test.name}}</ion-list>\n  </ion-item>\n  <hr>\n  <ion-item no-lines>\n    <button class="styledbutton" (click)=\'goToSocieties()\'><label class="searchParams">Sociétés <ion-icon name="ios-arrow-forward" color="vdi"></ion-icon></label></button>\n  </ion-item>\n  <ion-item *ngIf="categories[0].name == \'Toutes les Catégories\' && societies[1] == null && societies[0].name == \'Toutes les sociétés\'" no-lines>\n    <ion-list class="searchParams">Toutes les Sociétés</ion-list>\n  </ion-item>\n  <div *ngIf="categories[0].names == \'Toutes les Catégories\' && societies[1] != null" no-lines>\n    <div *ngFor=\'let cat of allCategories\'>\n      <label class="searchParams" *ngIf="cat != \'Toutes les Catégories\'">{{ cat.name }}</label>\n        <ion-item *ngIf="societies[0]" no-lines>\n          <ion-list class="searchParams" style="color: #999" *ngFor="let test of societies"><span *ngIf="test.categorie == cat">{{test.name}}</span></ion-list>\n        </ion-item>\n    </div>\n  </div>\n  <div *ngIf="categories[0].name != \'Toutes les Catégories\'">\n    <div *ngFor=\'let cat of categories\'>\n      <label class="searchParams" *ngIf="cat != \'Toutes les Catégories\'">{{ cat.name }}</label>\n          <ion-list style="color: #999" *ngFor="let test of societies"><span *ngIf="test.categorie == cat">{{test.name}}</span></ion-list>\n    </div>\n  </div>\n  <hr>\n  <div class="text-on-center">\n    <button ion-button class="searchbutton">Lancer la recherche</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/home/advancedsearch/advancedsearch.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], AdvancedsearchPage);

//# sourceMappingURL=advancedsearch.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_datastore_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_reseauvdiModels_model__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriesPage = (function () {
    function CategoriesPage(navCtrl, navParams, datastore) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datastore = datastore;
        this.loading = false;
        this.categories = [
            { name: "Toutes les Catégories" },
        ];
        this.categoriesReturn = [];
    }
    CategoriesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.datastore.findAll(__WEBPACK_IMPORTED_MODULE_3__models_reseauvdiModels_model__["a" /* Category */], {}).subscribe(function (data) {
            _this.loading = false;
            var categoriesLoad = data.getModels();
            for (var _i = 0, categoriesLoad_1 = categoriesLoad; _i < categoriesLoad_1.length; _i++) {
                var category = categoriesLoad_1[_i];
                console.log(category);
                _this.categories.push(category);
            }
            console.log(_this.categories);
            console.log(_this.categoriesReturn = _this.navParams.get("categories"));
            for (var _a = 0, _b = _this.categoriesReturn; _a < _b.length; _a++) {
                var cat = _b[_a];
                for (var _c = 0, _d = _this.categories; _c < _d.length; _c++) {
                    var test = _d[_c];
                    if (test.name.indexOf(cat.name) != -1)
                        test.checked = true;
                }
            }
        });
    };
    CategoriesPage.prototype.goBack = function () {
        this.navCtrl.getPrevious().data.mycategories = this.categoriesReturn;
        this.navCtrl.pop();
    };
    CategoriesPage.prototype.updateCategories = function (event, type) {
        if (event == true && type.name == "Toutes les Catégories") {
            for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
                var x = _a[_i];
                this.categoriesReturn.splice(this.categoriesReturn.indexOf(x.name), 1);
                x.checked = false;
            }
            this.categories[0].checked = true;
        }
        if (event == true)
            this.categoriesReturn.push(type);
        else
            this.categoriesReturn.splice(this.categoriesReturn.indexOf(type.name), 1);
        if (this.categories[0].checked == true && type.name != "Toutes les Catégories") {
            this.categories[0].checked = false;
            if (this.categoriesReturn.findIndex(function (i) { return i.name === "Toutes les Catégories"; }) != -1)
                this.categoriesReturn.splice(this.categoriesReturn.findIndex(function (i) { return i.name === "Toutes les Catégories"; }), 1);
        }
        console.log(this.categories);
        console.log(this.categoriesReturn);
    };
    return CategoriesPage;
}());
CategoriesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-categories',template:/*ion-inline-start:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/home/advancedsearch/categories/categories.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Sélectionné une/des catégorie(s)</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list no-lines>\n    <ion-item *ngFor="let categorie of categories">\n      <ion-label class="searchParams">{{ categorie.name }}</ion-label>\n      <ion-checkbox (ngModelChange)="updateCategories($event, categorie)" [(ngModel)]="categorie.checked"></ion-checkbox>\n    </ion-item>\n</ion-list>\n<hr>\n<div class="text-on-center">\n  <button ion-button class="searchbutton" (click)="goBack()">Confirmer</button>\n</div>\n</ion-content>\n<img src="assets/img/Wedges.gif" class="loading" *ngIf="loading">\n'/*ion-inline-end:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/home/advancedsearch/categories/categories.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_datastore_service__["a" /* Datastore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_datastore_service__["a" /* Datastore */]) === "function" && _c || Object])
], CategoriesPage);

var _a, _b, _c;
//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocietiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_datastore_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_reseauvdiModels_model__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocietiesPage = (function () {
    function SocietiesPage(navCtrl, navParams, datastore) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datastore = datastore;
        this.returnSocieties = [{ name: '', categorie: '' }];
        this.societies = [
            { name: "Wikibox", categorie: "Bijoux", checked: false },
            { name: "Eazzy", categorie: "Parfum & Bougie", checked: false },
            { name: "Lazz", categorie: "Confiserie & Chocolat", checked: false },
            { name: "Yodel", categorie: "Bijoux", checked: false },
            { name: "Thoughtbeat", categorie: "Confiserie & Chocolat", checked: false },
            { name: "Skibox", categorie: "Bien être & Diététique", checked: false },
            { name: "Avaveo", categorie: "Maison & Déco", checked: false },
            { name: "Meezzy", categorie: "Maison & Déco", checked: false },
            { name: "Rhybox", categorie: "Bien être & Diététique", checked: false },
            { name: "Twinder", categorie: "Puériculture", checked: false },
            { name: "Wikibox", categorie: "Cuisine & Terroir", checked: false },
            { name: "Livepath", categorie: "Maison & Déco", checked: false },
            { name: "Browsedrive", categorie: "Bien être & Diététique", checked: false },
            { name: "Vidoo", categorie: "Loisir Créatif & Jeux", checked: false },
            { name: "Tagpad", categorie: "Soins & Beauté", checked: false },
            { name: "Bluejam", categorie: "Lingerie", checked: false },
            { name: "Fatz", categorie: "Maison & Déco", checked: false },
            { name: "Photojam", categorie: "Cuisine & Terroir", checked: false },
            { name: "Fivebridge", categorie: "Loisir Créatif & Jeux", checked: false },
            { name: "Shufflebeat", categorie: "Prêt à Porter & Accessoires", checked: false },
            { name: "Skimia", categorie: "Loisir Créatif & Jeux", checked: false },
            { name: "Brainlounge", categorie: "Maison & Déco", checked: false },
            { name: "Twitterbridge", categorie: "Prêt à Porter & Accessoires", checked: false },
            { name: "Cogidoo", categorie: "Prêt à Porter & Accessoires", checked: false },
            { name: "Dabshots", categorie: "Bien être & Diététique", checked: false },
            { name: "Livetube", categorie: "Maison & Déco", checked: false },
            { name: "Agimba", categorie: "Bien être & Diététique", checked: false },
            { name: "Wordify", categorie: "Bien être & Diététique", checked: false },
            { name: "Topicshots", categorie: "Prêt à Porter & Accessoires", checked: false },
            { name: "Photolist", categorie: "Cuisine & Terroir", checked: false },
            { name: "Babbleopia", categorie: "Confiserie & Chocolat", checked: false },
            { name: "Youspan", categorie: "Soins & Beauté", checked: false },
            { name: "Eadel", categorie: "Cuisine & Terroir", checked: false },
            { name: "Katz", categorie: "Soins & Beauté", checked: false },
            { name: "Aibox", categorie: "Loisir Créatif & Jeux", checked: false },
            { name: "Agimba", categorie: "Bijoux", checked: false },
            { name: "Fadeo", categorie: "Confiserie & Chocolat", checked: false },
            { name: "Ntags", categorie: "Bijoux", checked: false },
            { name: "Zoomdog", categorie: "Cuisine & Terroir", checked: false },
            { name: "Flashset", categorie: "Bijoux", checked: false },
            { name: "Plajo", categorie: "Parfum & Bougie", checked: false },
            { name: "Skyndu", categorie: "Loisir Créatif & Jeux", checked: false },
            { name: "Meevee", categorie: "Maison & Déco", checked: false },
            { name: "Cogilith", categorie: "Cuisine & Terroir", checked: false },
            { name: "Zoonder", categorie: "Lingerie", checked: false },
            { name: "Bluezoom", categorie: "Parfum & Bougie", checked: false },
            { name: "Linklinks", categorie: "Loisir Créatif & Jeux", checked: false },
            { name: "Linktype", categorie: "Soins & Beauté", checked: false },
            { name: "Camimbo", categorie: "Cuisine & Terroir", checked: false },
            { name: "Realbuzz", categorie: "Maison & Déco", checked: false }
        ];
    }
    SocietiesPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.navParams.get("societies") != "Toute les sociétés") {
            this.returnSocieties = this.navParams.get("societies");
            for (var _i = 0, _a = this.returnSocieties; _i < _a.length; _i++) {
                var soc = _a[_i];
                for (var _b = 0, _c = this.societies; _b < _c.length; _b++) {
                    var test = _c[_b];
                    if (test.name.indexOf(soc.name) != -1) {
                        test.checked = true;
                    }
                }
            }
        }
        console.log(this.navParams.get("categories")[0].name);
        if (this.navParams.get("categories")[0].name != "Toutes les Catégories") {
            this.categories = this.navParams.get("categories");
            for (var _d = 0, _e = this.categories; _d < _e.length; _d++) {
                var category = _e[_d];
                this.datastore.findRecord(__WEBPACK_IMPORTED_MODULE_3__models_reseauvdiModels_model__["a" /* Category */], category.id, { include: 'companies' }).subscribe(function (data) { return console.log(data); });
            }
        }
        else {
            this.datastore.findAll(__WEBPACK_IMPORTED_MODULE_3__models_reseauvdiModels_model__["a" /* Category */], {}).subscribe(function (data) {
                _this.categories = data.getModels();
                console.log(_this.categories);
            });
        }
    };
    SocietiesPage.prototype.updateSocieties = function (event, type) {
        console.log(type, event);
        if (event == true) {
            this.returnSocieties.push(type);
        }
        else {
            this.returnSocieties.splice(this.returnSocieties.indexOf(type), 1);
        }
        console.log(this.returnSocieties);
    };
    SocietiesPage.prototype.addAllCategorie = function (cat, event) {
        console.log(cat, event);
        var x = 0;
        for (var _i = 0, _a = this.returnSocieties; _i < _a.length; _i++) {
            var remove = _a[_i];
            if (remove.categorie == cat) {
                console.log(x);
                this.returnSocieties.splice(x, 1);
            }
            x = x + 1;
        }
        console.log(this.returnSocieties);
        for (var _b = 0, _c = this.societies; _b < _c.length; _b++) {
            var society = _c[_b];
            if (event == true && society.categorie == cat) {
                //if (this.returnSocieties.indexOf(society.name) == -1)
                this.returnSocieties.push(society);
                society.checked = true;
            }
            if (event == false && society.categorie == cat) {
                society.checked = false;
                //this.returnSocieties.splice(this.returnSocieties.indexOf(society.name), 1);
            }
        }
        console.log(this.returnSocieties);
    };
    SocietiesPage.prototype.goBack = function () {
        console.log(this.returnSocieties);
        this.navCtrl.getPrevious().data.mysocieties = this.returnSocieties;
        console.log(this.returnSocieties);
        this.navCtrl.pop();
    };
    return SocietiesPage;
}());
SocietiesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-societies',template:/*ion-inline-start:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/home/advancedsearch/societies/societies.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Choisissez une/des société(s)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list no-lines>\n    <ion-card *ngFor="let categorie of categories">\n      <label padding class="searchParams">{{ categorie.name }}</label><ion-checkbox style="float: right; padding: 5px 15px 0 0;" (ionChange)="addAllCategorie(categorie, $event.checked)"></ion-checkbox>\n      <div *ngFor="let society of societies">\n      <ion-item *ngIf="society.categorie == categorie">\n        <ion-label class="searchParams">{{ society.name }}</ion-label>\n        <ion-checkbox (ngModelChange)="updateSocieties($event, society)" [(ngModel)]="society.checked"></ion-checkbox>\n      </ion-item>\n    </div>\n    </ion-card>\n</ion-list>\n<hr>\n<div class="text-on-center">\n  <button ion-button class="searchbutton" (click)="goBack()">Confirmer</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/home/advancedsearch/societies/societies.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_datastore_service__["a" /* Datastore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_datastore_service__["a" /* Datastore */]) === "function" && _c || Object])
], SocietiesPage);

var _a, _b, _c;
//# sourceMappingURL=societies.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(338);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_deeplinks__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_haversine__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_haversine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_haversine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_unique_device_id__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_admob_free__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_jsonapi__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_jsonapi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_jsonapi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_salon_salon__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_favorite_favorite__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profil_profil__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_profil_profil_cover_profil_cover__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_profil_profil_workshop_profil_workshop__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_profil_profil_photos_profil_photos__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_profil_profil_jobs_profil_jobs__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profil_profil_invitation_profil_invitation__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_home_advancedsearch_advancedsearch__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_home_advancedsearch_categories_categories__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_home_advancedsearch_societies_societies__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_datastore_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipe_search_pipe__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pipe_orderBy__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_salon_salon__["a" /* SalonPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_favorite_favorite__["a" /* FavoritePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_profil_profil__["a" /* ProfilPage */],
            __WEBPACK_IMPORTED_MODULE_26__pipe_orderBy__["a" /* ArraySortPipe */],
            __WEBPACK_IMPORTED_MODULE_25__pipe_search_pipe__["a" /* SearchPipe */],
            __WEBPACK_IMPORTED_MODULE_16__pages_profil_profil_cover_profil_cover__["a" /* ProfilCoverPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_profil_profil_workshop_profil_workshop__["a" /* ProfilWorkshopPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_profil_profil_photos_profil_photos__["a" /* ProfilPhotosPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_profil_profil_jobs_profil_jobs__["a" /* ProfilJobsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_profil_profil_invitation_profil_invitation__["a" /* ProfilInvitationPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_home_advancedsearch_advancedsearch__["a" /* AdvancedsearchPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_home_advancedsearch_categories_categories__["a" /* CategoriesPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_home_advancedsearch_societies_societies__["a" /* SocietiesPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_10_angular2_jsonapi__["JsonApiModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_salon_salon__["a" /* SalonPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_favorite_favorite__["a" /* FavoritePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_profil_profil__["a" /* ProfilPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_profil_profil_cover_profil_cover__["a" /* ProfilCoverPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_profil_profil_workshop_profil_workshop__["a" /* ProfilWorkshopPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_profil_profil_photos_profil_photos__["a" /* ProfilPhotosPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_profil_profil_jobs_profil_jobs__["a" /* ProfilJobsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_profil_profil_invitation_profil_invitation__["a" /* ProfilInvitationPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_home_advancedsearch_advancedsearch__["a" /* AdvancedsearchPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_home_advancedsearch_categories_categories__["a" /* CategoriesPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_home_advancedsearch_societies_societies__["a" /* SocietiesPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_24__services_datastore_service__["a" /* Datastore */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_deeplinks__["a" /* Deeplinks */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_haversine__["HaversineService"],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_admob_free__["a" /* AdMobFree */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_deeplinks__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profil_profil__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_unique_device_id__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, _config, deeplinks, uniqueDeviceID) {
        var _this = this;
        this._config = _config;
        this.deeplinks = deeplinks;
        this.uniqueDeviceID = uniqueDeviceID;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.initiateParams();
        });
        this._config.set('backButtonText', 'Retour');
    }
    MyApp.prototype.initiateParams = function () {
        this.deeplinks.routeWithNavController(this.navChild, {
            '/vdi/:vdiId': __WEBPACK_IMPORTED_MODULE_5__pages_profil_profil__["a" /* ProfilPage */]
        }).subscribe(function (match) {
            console.log('Successfully routed', match);
        }, function (nomatch) {
            console.log('Unmatched Route', nomatch);
        });
        this.uniqueDeviceID.get()
            .then(function (uuid) {
            console.log("olilol " + uuid);
            localStorage.setItem('UserDevice', uuid);
        })
            .catch(function (error) { return console.log(error); });
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n<!-- <div style="z-index: 999">{{error}}</div> -->\n'/*ion-inline-end:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/app/app.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Config */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Config */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_deeplinks__["a" /* Deeplinks */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_deeplinks__["a" /* Deeplinks */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_unique_device_id__["a" /* UniqueDeviceID */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_unique_device_id__["a" /* UniqueDeviceID */]) === "function" && _f || Object])
], MyApp);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilInvitationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilInvitationPage = (function () {
    function ProfilInvitationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilInvitationPage.prototype.ngOnInit = function () {
        this.object = this.navParams.get('reason');
    };
    return ProfilInvitationPage;
}());
ProfilInvitationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profil-invitation',template:/*ion-inline-start:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/profil/profil-invitation/profil-invitation.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Contact</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n  <ion-item>\n    <ion-label left class="searchParams label_left" floating>Objet</ion-label>\n    <ion-input [(ngModel)]="object"></ion-input>\n  </ion-item>\n</ion-card>\n<ion-card>\n<ion-item>\n  <ion-label left class="searchParams label_left" floating>Prénom</ion-label>\n  <ion-input></ion-input>\n</ion-item>\n</ion-card>\n<ion-card>\n<ion-item>\n  <ion-label left class="searchParams label_left" floating>Nom</ion-label>\n  <ion-input></ion-input>\n</ion-item>\n</ion-card>\n<ion-card>\n<ion-item>\n  <ion-label left class="searchParams label_left" floating>Ville</ion-label>\n  <ion-input></ion-input>\n</ion-item>\n</ion-card>\n<ion-card>\n<ion-item>\n  <ion-label left class="searchParams label_left" floating>Téléphone</ion-label>\n  <ion-input></ion-input>\n</ion-item>\n</ion-card>\n<ion-card>\n<ion-item>\n  <ion-label left class="searchParams label_left" floating>Email</ion-label>\n  <ion-input></ion-input>\n</ion-item>\n</ion-card>\n<ion-card>\n<ion-item>\n  <ion-label left class="searchParams label_left" floating>Message</ion-label>\n  <ion-textarea rows=\'4\'></ion-textarea>\n</ion-item>\n</ion-card>\n<div class="text-on-center" style="margin: 30px 0 0 0">\n<button class="styledbutton"><label>Envoyer <ion-icon name="ios-arrow-forward" color="vdi"></ion-icon></label></button>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/profil/profil-invitation/profil-invitation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ProfilInvitationPage);

//# sourceMappingURL=profil-invitation.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Datastore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jsonapi__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jsonapi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jsonapi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_reseauvdiModels_model__ = __webpack_require__(56);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var config = {
    baseUrl: 'https://staging-vdi-api.herokuapp.com',
    models: {
        categories: __WEBPACK_IMPORTED_MODULE_3__models_reseauvdiModels_model__["a" /* Category */],
        compagnies: __WEBPACK_IMPORTED_MODULE_3__models_reseauvdiModels_model__["b" /* Company */],
        users: __WEBPACK_IMPORTED_MODULE_3__models_reseauvdiModels_model__["d" /* User */],
        events: __WEBPACK_IMPORTED_MODULE_3__models_reseauvdiModels_model__["c" /* Event */],
    }
};
var Datastore = (function (_super) {
    __extends(Datastore, _super);
    function Datastore(http) {
        return _super.call(this, http) || this;
    }
    return Datastore;
}(__WEBPACK_IMPORTED_MODULE_2_angular2_jsonapi__["JsonApiDatastore"]));
Datastore = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jsonapi__["JsonApiDatastoreConfig"])(config),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], Datastore);

var _a;
//# sourceMappingURL=datastore.service.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Company; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Company = (function (_super) {
    __extends(Company, _super);
    function Company() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Company;
}(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["JsonApiModel"]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", Number)
], Company.prototype, "category_id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["BelongsTo"])(),
    __metadata("design:type", Category)
], Company.prototype, "category", void 0);
Company = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["JsonApiModelConfig"])({
        type: 'companies'
    })
], Company);

var Category = (function (_super) {
    __extends(Category, _super);
    function Category() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Category;
}(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["JsonApiModel"]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["HasMany"])(),
    __metadata("design:type", Array)
], Category.prototype, "companies", void 0);
Category = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["JsonApiModelConfig"])({
        type: 'categories'
    })
], Category);

var Event = (function (_super) {
    __extends(Event, _super);
    function Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Event;
}(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["JsonApiModel"]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], Event.prototype, "date", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], Event.prototype, "city", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], Event.prototype, "description", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["BelongsTo"])(),
    __metadata("design:type", User)
], Event.prototype, "user", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["BelongsTo"])(),
    __metadata("design:type", Company)
], Event.prototype, "company", void 0);
Event = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["JsonApiModelConfig"])({
        type: 'events'
    })
], Event);

var User = (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return User;
}(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["JsonApiModel"]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], User.prototype, "first_name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], User.prototype, "full_name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", Number)
], User.prototype, "phone_number", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], User.prototype, "city", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], User.prototype, "zip_code", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], User.prototype, "country", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], User.prototype, "full_address", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], User.prototype, "description", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], User.prototype, "job_offer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["BelongsTo"])(),
    __metadata("design:type", Company)
], User.prototype, "compagny", void 0);
User = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["JsonApiModelConfig"])({
        type: 'users'
    })
], User);

//# sourceMappingURL=reseauvdiModels.model.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilCoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_deeplinks__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profil_invitation_profil_invitation__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(601);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilCoverPage = (function () {
    function ProfilCoverPage(navCtrl, navParams, deeplinks, alertCtrl, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.deeplinks = deeplinks;
        this.alertCtrl = alertCtrl;
        this.socialSharing = socialSharing;
        this.isFavo = "md-heart-outline";
    }
    ProfilCoverPage.prototype.goToInvitation = function (reason) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profil_invitation_profil_invitation__["a" /* ProfilInvitationPage */], { reason: reason });
    };
    ProfilCoverPage.prototype.switchFavo = function () {
        if (this.isFavo == "md-heart-outline")
            this.isFavo = "md-heart";
        else
            this.isFavo = "md-heart-outline";
    };
    ProfilCoverPage.prototype.shareItem = function (item) {
        // this code is to use the social sharing plugin
        // message, subject, file, url
        this.socialSharing.share("Check this item:  reseauvdi://reseauvdi.com/vdi/" + item.id)
            .then(function () {
        })
            .catch(function () {
        });
    };
    ProfilCoverPage.prototype.contact = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
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
            handler: function (data) {
                _this.goToInvitation(data);
            }
        });
        alert.present();
    };
    return ProfilCoverPage;
}());
ProfilCoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profil-cover',template:/*ion-inline-start:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/profil/profil-cover/profil-cover.html"*/'<div class="text-on-center" style="margin: 15px 0 30px 0">\n<button class="styledbutton"><label>Boutique en ligne <ion-icon name="ios-arrow-forward" color="vdi"></ion-icon></label></button>\n</div>\n<ion-row padding>\n<!-- <div class="float-column">\n  <a class="deeplinks" href="https://www.facebook.com/marc.delrue.9"><ion-icon name="logo-facebook"></ion-icon></a>\n  <a class="deeplinks" href="https://twitter.com/oui"><ion-icon name="logo-twitter"></ion-icon></a>\n  <a class="deeplinks" href="https://www.instagram.com/test/"><ion-icon name="logo-instagram"></ion-icon></a>\n  <a class="deeplinks" ><ion-icon name="logo-pinterest"></ion-icon></a>\n</div> -->\n  <img class="profilPic" src="assets/img/selfie.jpg">\n</ion-row>\n<div class="text-on-center">\n  <label>\n    Prénom Nom\n  </label>\n</div>\n<p>\nBonjour, je vous propose de découvrir mon\nunivers de soins et beauté ! Produits de qualité\n100% naturel et bio !\n</p>\n<hr>\n<div class="row threebutton">\n    <button ion-fab class="invitbutton" (click)=\'contact()\'><ion-icon name="md-mail"></ion-icon></button>\n    <button ion-fab class="invitbutton" (click)=\'switchFavo()\'><ion-icon name={{isFavo}}></ion-icon></button>\n    <button ion-fab class="invitbutton" (click)="shareItem(\'test\')"><ion-icon name="md-share"></ion-icon></button>\n</div>\n'/*ion-inline-end:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/profil/profil-cover/profil-cover.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_deeplinks__["a" /* Deeplinks */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_deeplinks__["a" /* Deeplinks */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */]) === "function" && _e || Object])
], ProfilCoverPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profil-cover.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilWorkshopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profil_invitation_profil_invitation__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilWorkshopPage = (function () {
    function ProfilWorkshopPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isFavo = "md-heart-outline";
        this.for = [0, 0, 0, 0, 0, 0];
    }
    ProfilWorkshopPage.prototype.goToInvitation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profil_invitation_profil_invitation__["a" /* ProfilInvitationPage */]);
    };
    ProfilWorkshopPage.prototype.switchFavo = function () {
        if (this.isFavo == "md-heart-outline")
            this.isFavo = "md-heart";
        else
            this.isFavo = "md-heart-outline";
    };
    return ProfilWorkshopPage;
}());
ProfilWorkshopPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profil-workshop',template:/*ion-inline-start:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/profil/profil-workshop/profil-workshop.html"*/'<div class="card" padding *ngFor="let test of for">\n  <div class="container">\n    <h4 style="color: #753F63;"><b>Porte ouverte</b></h4>\n      <div class="threebutton">\n        <div>\n          <ion-icon name="md-calendar" style="margin-right: 10px"></ion-icon>\n          <label>28-07-17</label>\n        </div>\n        <div>\n          <ion-icon name="md-time"></ion-icon>\n          <label>15h00</label>\n        </div>\n      </div>\n      <div style="width: 100%; text-align: left">\n        <ion-icon name="md-pin" style="margin-right: 13px"></ion-icon>\n        <label>92 RD 943 Tilques 62500</label>\n      </div>\n      <div *ngIf="showDesc" class="animatest">\n        <hr>\n        <label>Description:</label>\n        <p>\n          Venez ça sera bien\n        </p>\n        <hr>\n          <div class="text-on-center">\n            <label class="searchParams">S\'inscrire</label>\n            </div>\n          <ion-item>\n            <ion-label left class="searchParams label_left" style="font-size: 15px;" floating>Prénom</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label left class="searchParams label_left" style="font-size: 15px;" floating>Email</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label left class="searchParams label_left" style="font-size: 15px;" floating>Téléphone</ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n          <div padding class="text-on-center">\n          <button class="styledbutton"><label>Envoyer <ion-icon name="ios-arrow-forward" color="vdi"></ion-icon></label></button>\n          </div>\n      </div>\n      <!-- <div class="text-on-center" style="margin: 30px 0 0 0">\n      <button class="styledbutton" (click)="goToInvitation()"><label>Je demande une invitation <ion-icon name="ios-arrow-forward" color="vdi"></ion-icon></label></button>\n      </div> -->\n      <hr>\n      <div class="row threebutton">\n          <button ion-fab class="invitbutton" (click)="showDesc = !showDesc"><ion-icon name="ios-information" style="font-size: 40px"></ion-icon></button>\n          <button ion-fab class="invitbutton" (click)="switchFavo()"><ion-icon name={{isFavo}}></ion-icon></button>\n      </div>\n  </div>\n</div>\n'/*ion-inline-end:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/profil/profil-workshop/profil-workshop.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ProfilWorkshopPage);

//# sourceMappingURL=profil-workshop.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPhotosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profil_invitation_profil_invitation__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilPhotosPage = (function () {
    function ProfilPhotosPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.images = ["assets/img/tour.jpeg", "assets/img/tour.jpeg", "assets/img/tour.jpeg", "assets/img/selfie.jpg", "assets/img/selfie.jpg"];
        this.isFavo = "md-heart-outline";
    }
    ProfilPhotosPage.prototype.goToInvitation = function (reason) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profil_invitation_profil_invitation__["a" /* ProfilInvitationPage */], { reason: reason });
    };
    ProfilPhotosPage.prototype.switchFavo = function () {
        if (this.isFavo == "md-heart-outline")
            this.isFavo = "md-heart";
        else
            this.isFavo = "md-heart-outline";
    };
    ProfilPhotosPage.prototype.contact = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
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
            handler: function (data) {
                _this.goToInvitation(data);
            }
        });
        alert.present();
    };
    return ProfilPhotosPage;
}());
ProfilPhotosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profil-photos',template:/*ion-inline-start:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/profil/profil-photos/profil-photos.html"*/'<ion-slides pager style="background-image: url(\'assets/img/thumbnail.jpg\'); background-size: cover; height: 76vh;">\n  <ion-slide *ngFor="let image of images">\n    <img style=\'height: auto; width: auto; max-width: 100vw; max-height: 100vh;\' src="{{image}}">\n  </ion-slide>\n</ion-slides>\n<hr>\n<div class="row threebutton">\n    <button ion-fab class="invitbutton" (click)=\'contact()\'><ion-icon name="md-mail"></ion-icon></button>\n    <button ion-fab class="invitbutton" (click)=\'switchFavo()\'><ion-icon name={{isFavo}}></ion-icon></button>\n    <button ion-fab class="invitbutton" (click)=\'ee\'><ion-icon name="md-share"></ion-icon></button>\n</div>\n'/*ion-inline-end:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/profil/profil-photos/profil-photos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ProfilPhotosPage);

//# sourceMappingURL=profil-photos.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilJobsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profil_invitation_profil_invitation__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilJobsPage = (function () {
    function ProfilJobsPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.isFavo = "md-heart-outline";
    }
    ProfilJobsPage.prototype.goToInvitation = function (reason) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profil_invitation_profil_invitation__["a" /* ProfilInvitationPage */], { reason: reason });
    };
    ProfilJobsPage.prototype.switchFavo = function () {
        if (this.isFavo == "md-heart-outline")
            this.isFavo = "md-heart";
        else
            this.isFavo = "md-heart-outline";
    };
    ProfilJobsPage.prototype.contact = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
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
            handler: function (data) {
                _this.goToInvitation(data);
            }
        });
        alert.present();
    };
    return ProfilJobsPage;
}());
ProfilJobsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profil-jobs',template:/*ion-inline-start:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/profil/profil-jobs/profil-jobs.html"*/'<p style="margin-top: 30px">\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet\n</p>\n<button ion-button style="width: 90vw; background: #753F63">Je postule</button>\n<hr>\n<div class="row threebutton">\n    <button ion-fab class="invitbutton" (click)=\'contact()\'><ion-icon name="md-mail"></ion-icon></button>\n    <button ion-fab class="invitbutton" (click)=\'switchFavo()\'><ion-icon name={{isFavo}}></ion-icon></button>\n    <button ion-fab class="invitbutton" (click)=\'ee\'><ion-icon name="md-share"></ion-icon></button>\n</div>\n'/*ion-inline-end:"/home/delrue/PROJETS/IWAGENCY/ReseauVDI/appvdi/src/pages/profil/profil-jobs/profil-jobs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ProfilJobsPage);

//# sourceMappingURL=profil-jobs.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, term) {
        if (term == null) {
            return value;
        }
        return value.filter(function (item) {
            if (item.first_name)
                return item.first_name.toUpperCase().includes(term.toUpperCase()) || item.categories.toUpperCase().includes(term.toUpperCase()) || item.enterprise.toUpperCase().includes(term.toUpperCase());
        });
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: "spipe"
    })
], SearchPipe);

//# sourceMappingURL=search.pipe.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArraySortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ArraySortPipe = (function () {
    function ArraySortPipe() {
    }
    ArraySortPipe.prototype.transform = function (array, args) {
        array.sort(function (a, b) {
            if (a < b) {
                return -1;
            }
            else if (a > b) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    return ArraySortPipe;
}());
ArraySortPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: "orderby"
    })
], ArraySortPipe);

//# sourceMappingURL=orderBy.js.map

/***/ })

},[320]);
//# sourceMappingURL=main.js.map