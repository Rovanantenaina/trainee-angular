import {Injectable} from '@angular/core';
import {PersonneClass} from '../class/personne.class';
import {Observable} from 'rxjs';

@Injectable()
export class ValidationService {

  public personne: PersonneClass;
  observable1: Observable<PersonneClass>;

  constructor() {
  }
}
