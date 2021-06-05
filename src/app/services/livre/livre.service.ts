import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilivre } from 'src/models/livre';
import {Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor(private http:HttpClient) { }
  getAllLivre():Observable<Ilivre[]>{
    return this.http.get<Ilivre[]>('api/livres').pipe(
      map(l=>l)
    )
  }

  getLivreByCategories(categorie:string):Observable<Ilivre[]>{
      return this.getAllLivre().pipe(
        map(x=>x.filter(p=>p.Category==categorie))
      )
  }

  getLivreById(id:number):Observable<Ilivre>{
    return this.getAllLivre().pipe(
      map(livres=>
        {
          return livres.find(p=>p.id==id) as Ilivre
        })
    )

  }
}
