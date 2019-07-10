import {Component, OnInit} from '@angular/core';
import {PersonneClass} from '../class/personne.class';
import {ValidationService} from '../service/validation.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-validation-next',
    template: `
      <button (click)="modifier()"><- retour</button>
      <h1>Etape 3</h1>
      <div style="border:1px solid;" *ngIf="personne">
        <h4 style="position: center">Récapitulatif</h4>
        <p>Nom : {{personne.nom}}</p>
        <p>Prenom : {{personne.prenom}}</p>
        <p>Date de naissance : {{personne.dateNaissance}}</p>
        <p>Adresse : {{personne.adresse}}</p>
        <p>Télephone : {{personne.telephone}}</p>
        <p>Email : {{personne.email}}</p>
        <br>
      </div>
      <button (click)="valider()">VALIDER</button>
      <button (click)="retour()">Retour accueil</button>
    `,
  }
)

export class ValidationNextComponent implements OnInit {

  personne: PersonneClass;

  constructor(private router: Router, private validationService: ValidationService) {
  }

  ngOnInit() {
    this.personne = this.validationService.personne;
  }

  valider() {

  }

  retour() {
    this.validationService.personne = new PersonneClass();
    this.router.navigate(['super-page']);
  }

  modifier() {
    this.validationService.personne = this.personne;
    this.router.navigate(['validation-page']);
  }

}
