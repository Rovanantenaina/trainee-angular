import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PersonneClass} from '../class/personne.class';
import {ValidationService} from '../service/validation.service';
import {Observable} from 'rxjs';

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
    <button type="submit" class="btn btn-primary" [disabled]="!personne.nom || !personne.prenom || !personne.dateNaissance">Enregistrer
    </button>
  </form>


  <!--<button (click)="increment()">increment</button>-->
  <!--<button (click)="recap()">historique</button>-->

  `
})
export class SuperPageComponent implements OnInit, OnDestroy {

  personne: PersonneClass;
  observable1: Observable<PersonneClass> = new Observable<PersonneClass>();

  constructor(private router: Router, private validationService: ValidationService) {
  }

  ngOnInit() {
    this.personne = this.validationService.personne || new PersonneClass();
    /*personne Service*/
    // console.log(this.personne);

    this.observable1.subscribe(value => {
      this.personne = value;
      console.log(value);
      console.log('Fin');
      });
  }

  ngOnDestroy(): void {

  }

  onSubmit() {
    this.validationService.personne = this.personne;
    this.router.navigate(['validation-page']);
  }
}
