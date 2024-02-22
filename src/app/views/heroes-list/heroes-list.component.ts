import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  public heroesListObs$?: Observable<Hero[]>;

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroesListObs$ = this.heroService.getHeroes();
  }

  remove(id: number) {
    console.log("remove", id);
  }

}
