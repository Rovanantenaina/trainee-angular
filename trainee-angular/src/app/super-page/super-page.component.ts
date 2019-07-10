import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PersonneClass} from '../class/personne.class';
import {ValidationService} from '../service/validation.service';

@Component({
  selector: 'app-super-page',
  template: `.
  <h1>Etape 1</h1>
  <br/>
  <form (ngSubmit)="onSubmit()">
    <label>Entrer votre nom : </label>
    <input
      type="text"
      name="nom"
      [(ngModel)]="personne.nom">
    <br/><br/>
    <label>Entrer votre prenom : </label>
    <input
      type="text"
      name="prenom"
      [(ngModel)]="personne.prenom">
    <br/><br/>
    <label>Entrer votre date de naissance : </label>
    <input
      type="date"
      name="dateNaissance"
      [(ngModel)]="personne.dateNaissance">
    <br/><br>
    <app-recap></app-recap>
    <button type="submit" class="btn btn-primary" [disabled]="!personne.nom || !personne.prenom || !personne.dateNaissance">Enregistrer
    </button>
  </form>
  `
})
export class SuperPageComponent implements OnInit, OnDestroy {

  personne: PersonneClass;

  constructor(private router: Router, private validationService: ValidationService) {
  }

  ngOnInit() {
    this.validationService.personneObservable.subscribe(value => {
      this.personne = value;
    });
  }

  ngOnDestroy(): void {

  }

  onSubmit() {
    this.validationService.setPersonne(this.personne);
    this.router.navigate(['validation-page']);
  }
}
