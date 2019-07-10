import {Injectable} from '@angular/core';
import {PersonneClass} from '../class/personne.class';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class ValidationService {

  private personne: PersonneClass;
  public personneObservable: BehaviorSubject<PersonneClass> = new BehaviorSubject(new PersonneClass());

  setPersonne(personne: PersonneClass) {
    this.personne = personne;
    this.personneObservable.next(personne);
    console.log(personne);
  }
  // observable1: Observable<PersonneClass>;

  constructor() {
    this.personne = new PersonneClass();
  }
}
