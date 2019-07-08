import {Component, OnInit} from '@angular/core';
import {CounterService} from '../service/counter.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-recap',
    template: `
      <label *ngIf="histShareChild.length!==0"> Hello ! {{nameRecap}} </label>
      <p *ngIf="histShareChild.length!==0">Your History :</p>
      <label *ngFor="let test of histShareChild">{{test}} /</label>
      <button *ngIf="histShareChild.length!==0" (click)="deleteHistory()">delete</button>
    `,
  }
)

export class RecapComponent implements OnInit {

  varI: number;
  histShareChild: number[];
  nameRecap: number[];

  constructor(private activatedRoute: ActivatedRoute, private counterService: CounterService) {

  }

  ngOnInit() {
    this.nameRecap = this.counterService.name;
    this.varI = this.activatedRoute.snapshot.data.count;
    this.histShareChild = this.counterService.histShare;
    console.log(this.histShareChild);
    // this.histShareChild = this.counterService.histShare;
  }

  deleteHistory() {
    this.histShareChild = [];
  }

}
