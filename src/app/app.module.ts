import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule  } from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

import { FilmesComponent } from './filmes/filmes.component';
import { SeriesComponent } from './series/series.component';
import { MenuComponent } from './menu/menu.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmesComponent,
    SeriesComponent,
    MenuComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
