import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class MockedDataService implements InMemoryDbService {

  createDb() {
    const mockedHeroes: Hero[] = [
      { id: 1, name: 'Superman' },
      { id: 2, name: 'Batman' },
      { id: 3, name: 'Wonder Woman' },
      { id: 4, name: 'Spider-Man' },
      { id: 5, name: 'Iron Man' },
      { id: 6, name: 'Captain America' },
      { id: 7, name: 'Thor' },
      { id: 8, name: 'Hulk' },
      { id: 9, name: 'Black Widow' },
      { id: 10, name: 'Green Lantern' },
      { id: 11, name: 'Flash' },
      { id: 12, name: 'Aquaman' },
      { id: 13, name: 'Wolverine' },
      { id: 14, name: 'Captain Marvel' },
      { id: 15, name: 'Black Panther' },
      { id: 16, name: 'Deadpool' },
      { id: 17, name: 'Green Arrow' },
      { id: 18, name: 'Ant-Man' },
      { id: 19, name: 'Doctor Strange' },
      { id: 20, name: 'Cyborg' }
    ];

    return {mockedHeroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
