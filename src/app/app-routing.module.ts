import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './views/heroes-list/heroes-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroesListComponent },	 // This URL could also be lazy loaded. But for lack of time, we'll keep it here for now.
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
