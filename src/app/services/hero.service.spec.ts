import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatSnackBarModule],
      providers: [HeroService]
    });
    service = TestBed.inject(HeroService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get heroes', () => {
    const mockedHeroes = [{ id: 1, name: 'Superman' }, { id: 2, name: 'Batman' }];
    service.getHeroes().subscribe(heroes => {
      expect(heroes).toEqual(mockedHeroes);
    });

    const req = httpTestingController.expectOne('api/mockedHeroes');
    expect(req.request.method).toBe('GET');
    req.flush(mockedHeroes);
  });

  it('should get hero by ID', () => {
    const mockedHero = { id: 1, name: 'Superman' };
    service.getHeroById(1).subscribe(hero => {
      expect(hero).toEqual(mockedHero);
    });

    const req = httpTestingController.expectOne('api/mockedHeroes/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockedHero);
  });

  it('should update hero', () => {
    const updatedHero = { id: 1, name: 'Updated Superman' };
    service.updateHero(updatedHero).subscribe(() => {
      expect().nothing();
    });

    const req = httpTestingController.expectOne('api/mockedHeroes');
    expect(req.request.method).toBe('PUT');
    req.flush({});
  });


  it('should delete hero', () => {
    const deletedHero = { id: 1, name: 'Superman' };
    service.deleteHero(deletedHero).subscribe(() => {
      expect().nothing();
    });

    const req = httpTestingController.expectOne('api/mockedHeroes/1');
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });


  it('should add hero', () => {
    const newHero = { id: 3, name: 'Wonder Woman' };
    service.addHero(newHero).subscribe(() => {
      expect().nothing();
    });

    const req = httpTestingController.expectOne('api/mockedHeroes');
    expect(req.request.method).toBe('POST');
    req.flush({});
  });

});
