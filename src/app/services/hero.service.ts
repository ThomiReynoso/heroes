import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Hero } from '../models/hero';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({ providedIn: 'root' })
export class HeroService {
  // private heroesUrl = `https://api.opendota.com/api/heroes`; // move to env file
  private heroesUrl = `api/mockedHeroes`; // move to env file

  private heroesSubject = new BehaviorSubject<Hero[]>([] as Hero[]);
  public heroes$ = this.heroesSubject.asObservable();

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
  ) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((heroes: Hero[]) => {
        console.log('fetched heroes')
        this.heroesSubject.next(heroes);
      }),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  getHeroById(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    
    return this.http.get<Hero>(url).pipe(
      tap(() => console.log(`getHero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
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

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(() => this.snackBar.open(`Hero ${hero.name} was updated`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  deleteHero(heroParam: Hero): Observable<Hero> {
    const allHeroes = this.heroesSubject.getValue();
    const updatedHeroes = allHeroes.filter(hero => hero.id !== heroParam.id);
    this.heroesSubject.next(updatedHeroes);

    const url = `${this.heroesUrl}/${heroParam.id}`;  
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(() => this.snackBar.open(`Hero ${heroParam.name} was deleted`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }


  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.snackBar.open(`Hero with name ${newHero.name} was created`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

}

