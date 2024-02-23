import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './views/heroes-list/heroes-list.component';
import { EditNewHeroeComponent } from './views/edit-new-heroe/edit-new-heroe.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroesListComponent },	
  { 
    path: 'edit/:id',
    loadChildren: () => import('./views/edit-new-heroe/edit-new-heroe.module').then(m => m.EditNewHeroeModule)
  },	
  { 
    path: 'new',	
    loadChildren: () => import('./views/edit-new-heroe/edit-new-heroe.module').then(m => m.EditNewHeroeModule)
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
