import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdvancedsearchPage } from '../advancedsearch';

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  callback: any;
  categories = [
   {name :"Toutes les Catégories", checked: false},
   {name :"Bien être & Diététique", checked: false},
   {name :"Bijoux", checked: false},
   {name :"Confiserie & Chocolat", checked: false},
   {name :"Cuisine & Terroir", checked: false},
   {name :"Lingerie", checked: false},
   {name :"Loisir Créatif & Jeux", checked: false},
   {name :"Maison & Déco", checked: false},
   {name :"Parfum & Bougie", checked: false},
   {name :"Prêt à Porter & Accessoires", checked: false},
   {name :"Puériculture", checked: false},
   {name :"Séduction", checked: false},
   {name :"Soins & Beauté", checked: false}];
  categoriesReturn = [];

ngOnInit(){
  this.categoriesReturn = this.navParams.get("categories");
  for (let cat of this.categoriesReturn)
   {
     for (let test of this.categories)
     {
       if (test.name.indexOf(cat) != -1)
         test.checked = true;
     }
   }
}

goBack() {
    this.navCtrl.getPrevious().data.mycategories = this.categoriesReturn;
    console.log("test");
    this.navCtrl.pop();
}

  updateCategories(event, type)
  {
    if (event == true && type == "Toutes les Catégories")
    {
      for (let x of this.categories)
      {
      this.categoriesReturn.splice(this.categoriesReturn.indexOf(x.name), 1);
      x.checked = false;
      }
      this.categories[0].checked = true;
    }
    if (event == true)
      this.categoriesReturn.push(type);
    else
      this.categoriesReturn.splice(this.categoriesReturn.indexOf(type), 1);
    if (this.categories[0].checked == true && type != "Toutes les Catégories")
    {
      this.categories[0].checked = false;
      if (this.categoriesReturn.indexOf("Toutes les Catégories") != -1)
      this.categoriesReturn.splice(this.categoriesReturn.indexOf("Toutes les Catégories"), 1);
    }
    console.log(this.categories);
    console.log(this.categoriesReturn);
  }
}
