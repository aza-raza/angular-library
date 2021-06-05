import { DetailLivreGuard } from './guard/detail-livre.guard';
import { DetailLivreComponent } from './detail-livre/detail-livre.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListeLivreComponent } from './liste-livre/liste-livre.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'livre/:idLivre', component:DetailLivreComponent, canActivate:[DetailLivreGuard]},
  {path: 'livres', component:ListeLivreComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
