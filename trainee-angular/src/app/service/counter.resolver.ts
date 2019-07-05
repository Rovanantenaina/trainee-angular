import {Injectable} from '@angular/core';
import {Resolver} from '@angular/core/testing/src/resolvers';
import {CounterService} from './counter.service';

@Injectable()
export class CounterResolver implements Resolver<number> {


  constructor(private counterService: CounterService) {
  }

  resolve(): number {
    return this.counterService.counter;
  }
}
