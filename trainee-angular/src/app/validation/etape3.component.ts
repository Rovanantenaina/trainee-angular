import {Component, OnInit} from '@angular/core';
import {PersonneClass} from '../class/personne.class';
import {ValidationService} from '../service/validation.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-validation-next',
    template: `
      <button (click)="modifier()"><- retour</button>
      <h1>Etape 3</h1>
      <app-recap></app-recap>
      <button (click)="valider()">VALIDER</button>
      <button (click)="retour()">Retour accueil</button>
    `,
  }
)

export class Etape3Component implements OnInit {

  personne: PersonneClass;
  personneClone: PersonneClass;

  constructor(private router: Router, private validationService: ValidationService) {
  }

  ngOnInit() {
    this.validationService.personneObservable.subscribe(value => {
      this.personne = value;
      this.personneClone = this.personne.clone();
    });

  }

  valider() {

  }

  retour() {
    this.validationService.setPersonne(new PersonneClass());
    this.router.navigate(['super-page']);
  }

  modifier() {
    this.validationService.setPersonne(this.personneClone);
    this.router.navigate(['validation-page']);
  }

}
