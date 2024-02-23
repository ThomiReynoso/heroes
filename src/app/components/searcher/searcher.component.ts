import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
  standalone: true,
  imports: [CommonModule, NgIf, MatFormFieldModule, MatInputModule, MatIconModule, RouterModule, MatAutocompleteModule, NgFor, AsyncPipe],
})
export class SearcherComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private heroFilterChanged: Subject<string> = new Subject<string>();
  query: string = '';

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

  clearSearch(): void {
    this.query = '';
    this.heroFilterChanged.next(this.query);
  }

  displayFn(hero: Hero): string {
    return hero.name;
  }
}
