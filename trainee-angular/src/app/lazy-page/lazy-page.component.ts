import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-lazy-page',
  template: `
    <p>
      lazy-page works!
    </p>
    <span>Vous avez cliquez {{countLazy}} fois</span>
    <button (click)="reinitialiser()">reinitialiser</button>
  `
})
export class LazyPageComponent implements OnInit {

  @Input()
  countLazy: number;

  @Output()
  updateCount: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  public reinitialiser() {
    this.countLazy = 0;
    this.updateCount.emit(this.countLazy);
  }

  ngOnInit() {
  }

}
