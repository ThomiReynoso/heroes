import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { DialogData } from 'src/app/models/dialogData';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private dialog: MatDialog,
    public loadingService: LoadingService,
  ) {}

  public heroesListObs$?: Observable<Hero[]> = this.heroService.heroes$;

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe();
  }

  remove(hero: Hero): void {
    const data: DialogData = {
      title: 'Delete Hero',
      message: 'Are you sure you want to delete this hero?',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    };
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { 
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.heroService.deleteHero(hero).subscribe();
      }
    });
  }

}
