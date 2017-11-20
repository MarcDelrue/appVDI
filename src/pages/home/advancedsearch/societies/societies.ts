import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Datastore } from '../../../../services/datastore.service';
import { Company, Category } from '../../../../models/reseauvdiModels.model';


@Component({
  selector: 'page-societies',
  templateUrl: 'societies.html',
})
export class SocietiesPage {
  categories: any;
  societiesReturn: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private datastore: Datastore) {
}
returnSocieties = [{name: '', categorie: ''}];
societies =
[
{name:"Wikibox",categorie:"Bijoux",checked:false},
{name:"Eazzy",categorie:"Parfum & Bougie",checked:false},
{name:"Lazz",categorie:"Confiserie & Chocolat",checked:false},
{name:"Yodel",categorie:"Bijoux",checked:false},
{name:"Thoughtbeat",categorie:"Confiserie & Chocolat",checked:false},
{name:"Skibox",categorie:"Bien être & Diététique",checked:false},
{name:"Avaveo",categorie:"Maison & Déco",checked:false},
{name:"Meezzy",categorie:"Maison & Déco",checked:false},
{name:"Rhybox",categorie:"Bien être & Diététique",checked:false},
{name:"Twinder",categorie:"Puériculture",checked:false},
{name:"Wikibox",categorie:"Cuisine & Terroir",checked:false},
{name:"Livepath",categorie:"Maison & Déco",checked:false},
{name:"Browsedrive",categorie:"Bien être & Diététique",checked:false},
{name:"Vidoo",categorie:"Loisir Créatif & Jeux",checked:false},
{name:"Tagpad",categorie:"Soins & Beauté",checked:false},
{name:"Bluejam",categorie:"Lingerie",checked:false},
{name:"Fatz",categorie:"Maison & Déco",checked:false},
{name:"Photojam",categorie:"Cuisine & Terroir",checked:false},
{name:"Fivebridge",categorie:"Loisir Créatif & Jeux",checked:false},
{name:"Shufflebeat",categorie:"Prêt à Porter & Accessoires",checked:false},
{name:"Skimia",categorie:"Loisir Créatif & Jeux",checked:false},
{name:"Brainlounge",categorie:"Maison & Déco",checked:false},
{name:"Twitterbridge",categorie:"Prêt à Porter & Accessoires",checked:false},
{name:"Cogidoo",categorie:"Prêt à Porter & Accessoires",checked:false},
{name:"Dabshots",categorie:"Bien être & Diététique",checked:false},
{name:"Livetube",categorie:"Maison & Déco",checked:false},
{name:"Agimba",categorie:"Bien être & Diététique",checked:false},
{name:"Wordify",categorie:"Bien être & Diététique",checked:false},
{name:"Topicshots",categorie:"Prêt à Porter & Accessoires",checked:false},
{name:"Photolist",categorie:"Cuisine & Terroir",checked:false},
{name:"Babbleopia",categorie:"Confiserie & Chocolat",checked:false},
{name:"Youspan",categorie:"Soins & Beauté",checked:false},
{name:"Eadel",categorie:"Cuisine & Terroir",checked:false},
{name:"Katz",categorie:"Soins & Beauté",checked:false},
{name:"Aibox",categorie:"Loisir Créatif & Jeux",checked:false},
{name:"Agimba",categorie:"Bijoux",checked:false},
{name:"Fadeo",categorie:"Confiserie & Chocolat",checked:false},
{name:"Ntags",categorie:"Bijoux",checked:false},
{name:"Zoomdog",categorie:"Cuisine & Terroir",checked:false},
{name:"Flashset",categorie:"Bijoux",checked:false},
{name:"Plajo",categorie:"Parfum & Bougie",checked:false},
{name:"Skyndu",categorie:"Loisir Créatif & Jeux",checked:false},
{name:"Meevee",categorie:"Maison & Déco",checked:false},
{name:"Cogilith",categorie:"Cuisine & Terroir",checked:false},
{name:"Zoonder",categorie:"Lingerie",checked:false},
{name:"Bluezoom",categorie:"Parfum & Bougie",checked:false},
{name:"Linklinks",categorie:"Loisir Créatif & Jeux",checked:false},
{name:"Linktype",categorie:"Soins & Beauté",checked:false},
{name:"Camimbo",categorie:"Cuisine & Terroir",checked:false},
{name:"Realbuzz",categorie:"Maison & Déco",checked:false}
];

ngOnInit() {
  if (this.navParams.get("societies") != "Toute les sociétés")
  {
    this.returnSocieties = this.navParams.get("societies");
    for (let soc of this.returnSocieties)
     {
       for (let test of this.societies)
       {
         if (test.name.indexOf(soc.name) != -1)
         {
           test.checked = true;
         }
       }
    }
  }
  console.log(this.navParams.get("categories")[0].name);
  if (this.navParams.get("categories")[0].name != "Toutes les Catégories")
  {
  this.categories = this.navParams.get("categories");
  for(let category of this.categories)
    {
      this.datastore.findRecord(Category, category.id, {include: 'companies'}).subscribe(data=>console.log(data));
    }
  }
  else {
    this.datastore.findAll(Category, {}).subscribe(data=>{
      this.categories = data.getModels();
      console.log(this.categories);
    });
 }
}

updateSocieties(event, type) {
  console.log(type, event);
  if (event == true)
  {
    this.returnSocieties.push(type);
  }
  else
  {
    this.returnSocieties.splice(this.returnSocieties.indexOf(type), 1);
  }
  console.log(this.returnSocieties);
}

addAllCategorie(cat, event)
{
  console.log(cat, event);
  let x = 0;
  for (let remove of this.returnSocieties)
  {
    if (remove.categorie == cat)
    {
      console.log(x);
      this.returnSocieties.splice(x, 1);
    }
    x = x + 1;
  }
  console.log(this.returnSocieties);
  for (let society of this.societies)
  {
    if (event == true && society.categorie == cat)
    {
    //if (this.returnSocieties.indexOf(society.name) == -1)
      this.returnSocieties.push(society);
      society.checked = true;
    }
    if (event == false && society.categorie == cat)
    {
      society.checked = false;
      //this.returnSocieties.splice(this.returnSocieties.indexOf(society.name), 1);
    }
  }
  console.log(this.returnSocieties);
}

goBack() {
  console.log(this.returnSocieties)
    this.navCtrl.getPrevious().data.mysocieties = this.returnSocieties;
    console.log(this.returnSocieties);
    this.navCtrl.pop();
}

}
