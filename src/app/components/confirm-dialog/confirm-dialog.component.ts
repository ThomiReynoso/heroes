import { Component, Inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import {MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogData } from 'src/app/models/dialogData';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: DialogData
  ) { }

  onConfirm(): void {
    this.dialogRef.close(true);
  }   

  onCancel(): void { 
    this.dialogRef.close();
  }
}
