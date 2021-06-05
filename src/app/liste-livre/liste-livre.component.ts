import { EMPTY, Observable, observable } from 'rxjs';
import { CategorieService } from './../services/categorie/categorie.service';
import { LivreService } from './../services/livre/livre.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Ilivre } from 'src/models/livre';

@Component({
  selector: 'app-liste-livre',
  templateUrl: './liste-livre.component.html',
  styleUrls: ['./liste-livre.component.css']
})
export class ListeLivreComponent implements OnInit{

  titre:string = "La liste des livres";
  WidthImg = 60;
  HeightImg = 80;
  affichage : boolean = true;
  livres$ : Observable<Ilivre[]>=EMPTY
  listCategorie: string[]=[];
  CategorieId: string ="all";

  constructor(private serviceLivre: LivreService, private serviceCategorie: CategorieService) {
    console.log('constructor');
  }
  ngOnInit(): void {
    this.getAllLivres()
    this.listCategorie = this.serviceCategorie.getAllCategories()
   }


  onclick(){
    this.affichage = !this.affichage
  }

  ChangeCategory(){
    console.log(this.CategorieId)
    if(this.CategorieId == 'all'){
          this.getAllLivres();
    }else{
      this.livres$ = this.serviceLivre.getLivreByCategories(this.CategorieId)
    }
 
  }

  onNotify(event:number){
    alert(event);
  }

  private getAllLivres(){
    return this.livres$ = this.serviceLivre.getAllLivre()
              
  }

}
