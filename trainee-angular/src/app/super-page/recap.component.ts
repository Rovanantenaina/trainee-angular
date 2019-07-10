import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-recap',
    template: `
      <div style="border: 1px solid;">
        <h4>Récapitulatif</h4>
        <p>Nom : </p>
        <p>Prenom : </p>
        <p>Date de Naissance : </p>
      </div>

    `,
  }
)

export class RecapComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }
}
