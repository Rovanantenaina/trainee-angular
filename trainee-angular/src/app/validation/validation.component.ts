import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ValidationService} from '../service/validation.service';
import {PersonneClass} from '../class/personne.class';

@Component({
    selector: 'app-validation',
    template: `
      <button (click)="modifier()">retour</button>
      <h1>Etape 2 </h1>
      <!--<div style="border:1px solid;" *ngIf="personne">-->
        <!--<h4 style="position: center">Récapitulatif</h4>-->
        <!--<p>Nom : {{personne.nom}}</p>-->
        <!--<p>Prenom : {{personne.prenom}}</p>-->
        <!--<p>Date de naissance : {{personne.dateNaissance}}</p>-->
        <!--<button (click)="modifier()">Modifier</button>-->
        <!--<br>-->
      <!--</div>-->
      <br>
      <form (ngSubmit)="onSubmit()">
        <label>Entrer votre adresse : </label>
        <input
          type="text"
          name="adresse"
          [(ngModel)]="personne.adresse">
        <br/><br/>
        <label>Entrer votre numero de telephone : </label>
        <input
          type="number"
          name="telephone"
          [(ngModel)]="personne.telephone">
        <br/><br/>
        <label>Entrer e-mail : </label>
        <input
          type="text"
          name="email"
          [(ngModel)]="personne.email">
        <br/><br>
        <button type="submit" class="btn btn-primary" [disabled]="!personne.adresse || !personne.telephone || !personne.email">Enregistrer
        </button>
      </form>
    `,
  }
)

export class ValidationComponent implements OnInit {

  public personne: PersonneClass;

  constructor(private router: Router, private validationService: ValidationService) {
  }

  ngOnInit() {
    this.personne = this.validationService.personne;
  }

  modifier() {
    this.validationService.personne = this.personne;
    this.router.navigate(['super-page']);
  }

  retour() {
    this.validationService.personne = new PersonneClass();
    this.router.navigate(['super-page']);
  }

  onSubmit() {
    this.validationService.personne.adresse = this.personne.adresse;
    this.validationService.personne.telephone = this.personne.telephone;
    this.validationService.personne.email = this.personne.email;
    this.router.navigate(['validationNext-page']);
  }

}
