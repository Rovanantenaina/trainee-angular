import {Component, OnInit} from '@angular/core';
import {CounterService} from '../service/counter.service';

@Component({
    selector: 'app-recap',
    template: `
      <p>{{varI}}</p>
    `,
  }
)

export class RecapComponent implements OnInit {

  varI: number;
  constructor(private counterService: CounterService) {

  }

  ngOnInit() {
    this.varI = this.counterService.counter;
  }
}
