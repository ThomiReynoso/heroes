import { Component } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent {
  heroes: Hero[] = [];
  filtroNombre: string = '';
  private filtroNombreChanged: Subject<string> = new Subject<string>();

  constructor(private heroesService: HeroService) {
    this.filtroNombreChanged.pipe(
      debounceTime(200), 
      distinctUntilChanged()
    ).subscribe((filtro: string) => {
      this.filtrarHeroes(filtro);
    });
  }

  filtrarHeroes(filtro: string) {
    this.heroesService.filterHeroes(filtro).subscribe(
      (heroes: Hero[]) => {
        this.heroes = heroes;
      },
      (error: any) => {
        console.error('Error al filtrar héroes:', error);
      }
    );
  }

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.filtroNombreChanged.next(inputElement.value);
  }
}
