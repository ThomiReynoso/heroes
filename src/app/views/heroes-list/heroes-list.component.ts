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

  constructor(private heroService: HeroService){
  }

  public heroesListObs$?: Observable<Hero[]> = this.heroService.heroes$;

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe();
  }

  remove(id: number): void {
    this.heroService.deleteHero(id).subscribe();
  }

}
