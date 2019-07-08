import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class CounterService {

  private cCounter = 0;
  public histShare: number[];
  public name;

  constructor() {
  }

  private oObservator: BehaviorSubject<any> = new BehaviorSubject(void 0);

  public increment() {
    this.cCounter = this.cCounter + 1;
    this.oObservator.next(this.cCounter);
  }


  public reInit(event: number) {
    this.cCounter = event;
  }

  get counter(): number {
    return this.cCounter;
  }

  set counter(value: number) {
    this.cCounter = value;
  }

  get observator(): BehaviorSubject<any> {
    return this.oObservator;
  }

  set observator(value: BehaviorSubject<any>) {
    this.oObservator = value;
  }
}
