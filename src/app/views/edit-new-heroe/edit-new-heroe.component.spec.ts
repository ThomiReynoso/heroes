import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewHeroeComponent } from './edit-new-heroe.component';

describe('EditNewHeroeComponent', () => {
  let component: EditNewHeroeComponent;
  let fixture: ComponentFixture<EditNewHeroeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditNewHeroeComponent]
    });
    fixture = TestBed.createComponent(EditNewHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
