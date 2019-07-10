import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ValidationService} from '../service/validation.service';
import {PersonneClass} from '../class/personne.class';

@Component({
    selector: 'app-validation',
    template: `
      <button (click)="retour()">retour</button>
      <h1>Etape 2 </h1>
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
        <app-recap></app-recap>
        <button type="submit" class="btn btn-primary" [disabled]="!personne.adresse || !personne.telephone || !personne.email">Enregistrer
        </button>
      </form>
    `,
  }
)

export class Etape2Component implements OnInit {

  public personne: PersonneClass;
  private personneClone: PersonneClass;

  constructor(private router: Router, private validationService: ValidationService) {
  }

  ngOnInit() {
    this.validationService.personneObservable.subscribe(value => {
      this.personne = value;
      this.personneClone = this.personne.clone();
    });

  }


  retour() {
    this.validationService.setPersonne(this.personneClone);
    this.router.navigate(['super-page']);
  }

  onSubmit() {
    this.validationService.setPersonne(this.personne);
    this.router.navigate(['validationNext-page']);
  }

}
