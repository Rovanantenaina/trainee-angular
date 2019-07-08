import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CounterService} from '../service/counter.service';
import {BehaviorSubject, interval, Observable, of, Subscription} from 'rxjs';

@Component({
  selector: 'app-super-page',
  template: `
    <p>
      super-page works!<br/>
      <input type="text" (change)="changeText($event)">
      <label *ngIf="nom">Bonjour {{nom}} !</label>
      <app-lazy-page [countLazy]="count" (updateCount)="reInit($event)"></app-lazy-page>
    </p>

    <button (click)="increment()">increment</button>
    <button (click)="recap()">historique</button>
    
  `
})
export class SuperPageComponent implements OnInit, OnDestroy {
  public count: number;
  public hist: number[] = [];
  private subscription: Subscription;
  nom: string;

  private changed: BehaviorSubject<any> = new BehaviorSubject(void 0);

  constructor(private router: Router, private counterService: CounterService) {
  }

  public recap() {
    this.counterService.name = this.nom;
    this.counterService.counter = this.count;
    this.counterService.histShare = this.hist;
    this.router.navigate(['recap-page']);
  }

  ngOnInit() {
    const observable = interval(1000);
    this.subscription = observable.subscribe((valeur: any) => {
      // console.log(valeur);
    });

    this.changed.subscribe(value => {
      // console.error(value);
      this.nom = value;
    });

    this.counterService.observator.subscribe(value => {
      // console.error(value);
      this.count = value;
    });
  }

  unsubsribeTimer() {
    this.subscription.unsubscribe();
  }

  increment() {
    this.counterService.increment();
    // this.count = this.counterService.counter;
  }

  reInit(event: number) {
    this.hist.push(this.counterService.counter);
    this.counterService.reInit(event);

  }

  ngOnDestroy(): void {
    this.unsubsribeTimer();
    this.changed.unsubscribe();
  }

  changeText(event: any) {
    this.changed.next(event.target.value.toString());
  }
}
