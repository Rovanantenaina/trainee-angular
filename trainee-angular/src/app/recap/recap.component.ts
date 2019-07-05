import {Component, OnInit} from '@angular/core';
import {CounterService} from '../service/counter.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-recap',
    template: `
      <p>{{varI}}</p>
    `,
  }
)

export class RecapComponent implements OnInit {

  varI: number;
  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.varI = this.activatedRoute.snapshot.data.count;
  }
}
