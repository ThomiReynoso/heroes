import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent {

  constructor(private heroService: HeroService) {
  }

  public heroesListObs$?: Observable<Hero[]> = this.heroService.getHeroes();

  remove(id: number) {
    console.log("remove", id);
  }

}
