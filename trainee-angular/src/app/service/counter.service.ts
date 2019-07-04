import {Injectable} from '@angular/core';

@Injectable()
export class CounterService {

  private _counter: number;

  get counter(): number {
    return this._counter;
  }

  set counter(value: number) {
    this._counter = value;
  }
}
