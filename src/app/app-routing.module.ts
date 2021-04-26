import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmesComponent } from './filmes/filmes.component';
import { SeriesComponent } from './series/series.component';
const routes: Routes = [
  {
  //Home
   path: '',
   component: HomeComponent
  },
  //Filmes
  {
    path: 'filmes',
    component: FilmesComponent
  },
  //Series
  {
    path: 'series',
    component: SeriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



