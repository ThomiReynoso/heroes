import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-new-heroe',
  templateUrl: './edit-new-heroe.component.html',
  styleUrls: ['./edit-new-heroe.component.scss']
})
export class EditNewHeroeComponent implements OnInit, OnDestroy {
  routeSubs?: Subscription;
  isEditing: boolean = false;
  heroeId?: number;
  heroeForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(''),
    age: new FormControl(null)
  });
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService,
  ) { }



  ngOnInit(): void {
    this.routeSubs = this.route.params.subscribe(params => {
      this.heroeId = Number(params['id']);

      if (this.heroeId) {
        this.isEditing = true;
        this.heroService.getHeroById(this.heroeId).subscribe((heroe: Hero) => {
          this.heroeForm?.patchValue(heroe);
        });
    }})
  }

  ngOnDestroy(): void {
    this.routeSubs?.unsubscribe();
  }

  saveHero() {
    const updatedHero = this.heroeForm.value;
    this.heroService.updateHero(updatedHero).subscribe(()=> this.goBack())
  }

  goBack() {
    this.router.navigate(['/heroes']);
  }
}
