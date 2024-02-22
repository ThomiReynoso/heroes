import { Component, OnInit } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private heroFilterChanged: Subject<string> = new Subject<string>();

  constructor(private heroesService: HeroService) {
  }

  ngOnInit(): void {
    this.heroes$ = this.heroFilterChanged.pipe(
      debounceTime(200), 
      distinctUntilChanged(),
      switchMap(searchTerm => this.heroesService.filterHeroes(searchTerm))
    ) 
  }

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.heroFilterChanged.next(inputElement.value);
  }
}
