import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditNewHeroeComponent } from './edit-new-heroe.component';

const routes: Routes = [
  { path: '', component: EditNewHeroeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditNewHeroeRoutingModule { }
