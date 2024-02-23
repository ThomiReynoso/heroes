import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditNewHeroeRoutingModule } from './edit-new-heroe-routing.module';
import { RouterModule } from '@angular/router';
import { EditNewHeroeComponent } from './edit-new-heroe.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    EditNewHeroeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    EditNewHeroeRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class EditNewHeroeModule { }
