import { EMPTY, Observable} from 'rxjs';
import { Ilivre } from 'src/models/livre';
import { LivreService } from './../services/livre/livre.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-livre',
  templateUrl: './detail-livre.component.html',
  styleUrls: ['./detail-livre.component.css']
})
export class DetailLivreComponent implements OnInit {

  constructor(private route:ActivatedRoute, private serviceLivre:LivreService) { }
  livre$ :Observable<Ilivre>=EMPTY
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('idLivre');
    //on appelle le backend pour récuperer le détail du livre
    this.livre$ = this.serviceLivre.getLivreById(Number(id));
        
    console.log(id)
  }

}
