import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesListComponent } from './heroes-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { SearcherComponent } from 'src/app/components/searcher/searcher.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeroesListComponent', () => {
  let component: HeroesListComponent;
  let fixture: ComponentFixture<HeroesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesListComponent ],
      imports: [ HttpClientTestingModule, MatSnackBarModule, MatDialogModule, SearcherComponent, RouterModule.forRoot([]), MatListModule, BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(HeroesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
