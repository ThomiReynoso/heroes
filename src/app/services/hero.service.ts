import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Hero } from '../models/hero';


@Injectable({ providedIn: 'root' })
export class HeroService {
  private heroesUrl = `https://api.opendota.com/api/heroes`; // move to env file

  private heroesSubject = new BehaviorSubject<Hero[]>({}as Hero[]);
  public heroes$ = this.heroesSubject.asObservable();

  constructor(
    private http: HttpClient,
  ) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((heroes) => {
        console.log('fetched heroes')
        this.heroesSubject.next(heroes);
      }),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  getHeroById(id: number): Observable<Hero> {
    debugger
    const heroes = this.heroesSubject.getValue();
    const hero = heroes.find(hero => hero.id === id);

    // Here we can make an API call to get the hero by id with GET 
    if (!hero) {
      return of({} as Hero);
    }
    return of(hero);
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }

  filterHeroes(searchTerm: string): Observable<Hero[]> {
    if (!searchTerm.trim()) {
      return of([]);
    }

    const heroes = this.heroesSubject.getValue();
    return of(heroes.filter(hero => hero.name.toLowerCase().includes(searchTerm.toLowerCase())));
  }


}

