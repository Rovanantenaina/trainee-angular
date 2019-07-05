import {Injectable} from '@angular/core';

@Injectable()
export class CounterService {

  private cCounter = 0;

  public increment() {
    this.cCounter = this.cCounter + 1;
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
}
