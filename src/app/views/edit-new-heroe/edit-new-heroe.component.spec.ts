import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewHeroeComponent } from './edit-new-heroe.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

describe('EditNewHeroeComponent', () => {
  let component: EditNewHeroeComponent;
  let fixture: ComponentFixture<EditNewHeroeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditNewHeroeComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, MatSnackBarModule, BrowserAnimationsModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
    });
    fixture = TestBed.createComponent(EditNewHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
