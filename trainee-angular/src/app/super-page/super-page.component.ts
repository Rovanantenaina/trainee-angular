import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CounterService} from '../service/counter.service';

@Component({
  selector: 'app-super-page',
  template: `
    <p>
      super-page works!
      <app-lazy-page [countLazy]="count" (updateCount)="reInit($event)"></app-lazy-page>
    </p>

    <button (click)="increment()">increment</button>
    <button (click)="recap()">historique</button>
  `
})
export class SuperPageComponent implements OnInit {
  public count = 0;

  constructor(private router: Router, private counterService: CounterService) {
  }

  public increment() {
    this.count = this.count + 1;
  }

  public reInit(event: number) {
    this.count = event;
  }

  public recap() {
    this.counterService.counter = this.count;
    this.router.navigate(['recap-page']);
  }

  ngOnInit() {
  }

}
