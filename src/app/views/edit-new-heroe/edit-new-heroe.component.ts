import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-new-heroe',
  templateUrl: './edit-new-heroe.component.html',
  styleUrls: ['./edit-new-heroe.component.scss']
})
export class EditNewHeroeComponent implements OnInit, OnDestroy {
  routeSubs?: Subscription;
 
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.routeSubs = this.route.params.subscribe(params => {
      console.log(params)
    })
  }

  ngOnDestroy(): void {
    this.routeSubs?.unsubscribe();
  }
}
