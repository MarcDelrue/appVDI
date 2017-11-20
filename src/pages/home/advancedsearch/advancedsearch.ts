import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { CategoriesPage } from "./categories/categories";
import { SocietiesPage } from "./societies/societies";

@Component({
  selector: 'page-advancedsearch',
  templateUrl: 'advancedsearch.html',
})
export class AdvancedsearchPage {
  searchParams = 'c';
  searchAround="Autour de moi";
  societies = [{name: "Toutes les sociétés", categorie: 'Toutes Les catégories'}];
  categories = [{name: "Toutes les Catégories"}];
  allCategories = [ "Bien être & Diététique", "Bijoux", "Confiserie & Chocolat", "Cuisine & Terroir", "Lingerie", "Loisir Créatif & Jeux", "Maison & Déco", "Parfum & Bougie", "Prêt à Porter & Accessoires", "Puériculture", "Séduction", "Soins & Beauté"];
  departement = ["Autour de moi", "Toute la France", "Autre pays", "Alsace", "Aquitaine", "Auvergne", "Basse-Normandie", "Bourgogne", "Bretagne", "Centre", "Champagne-Ardenne", "Corse", "Franche-Comté", "Guadeloupe", "Guyane", "Haute-Normandie",
  "Languedoc-Roussillon", "Limousin", "Lorraine", "Midi-pyrennées", "Nord-Pas-de-Calais", "Pays-de-la-Loire", "Picardie", "Poitou-Charentes", "Preovence-alpes-Cote-dazur",
  "Rhones-Alpes", "Ile-de-france"];
  radius = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    if (this.navParams.get('mycategories'))
      this.categories = this.navParams.get('mycategories');
    console.log(this.categories);
    if (this.navParams.get('mysocieties'))
      this.societies = this.navParams.get('mysocieties');
  }

  goToCategories()
  {
    this.navCtrl.push(CategoriesPage, {categories: this.categories});
  }

  goToSocieties()
  {
    this.navCtrl.push(SocietiesPage, {categories: this.categories, societies: this.societies});
  }

  removeAll()
  {
    if (this.categories.length > 1) {
      let index = this.categories.findIndex(i => i.name === "Toutes les Catégories");
      if (index != -1)
      this.categories.splice(index, 1);
    }
  }
}
