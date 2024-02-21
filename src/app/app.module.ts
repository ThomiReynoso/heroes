import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesListComponent } from './views/heroes-list/heroes-list.component';
import { EditNewHeroeComponent } from './views/edit-new-heroe/edit-new-heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    EditNewHeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
