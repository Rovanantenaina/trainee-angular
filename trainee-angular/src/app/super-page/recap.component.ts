import {Component, OnInit} from '@angular/core';
import {PersonneClass} from '../class/personne.class';
import {ValidationService} from '../service/validation.service';


@Component({
    selector: 'app-recap',
    template: `
      <div style="border: 1px solid;">
        <h4>Récapitulatif</h4>
        <p>Nom : {{personne.nom}}</p>
        <p>Prenom : {{personne.prenom}}</p>
        <p>Date de naissance : {{personne.dateNaissance}}</p>
        <p>Adresse : {{personne.adresse}}</p>
        <p>Télephone : {{personne.telephone}}</p>
        <p>Email : {{personne.email}}</p>
      </div>

    `,
  }
)

export class RecapComponent implements OnInit {

  public personne: PersonneClass;

  constructor(private validationService: ValidationService) {
  }

  ngOnInit() {
    this.personne = this.validationService.personneObservable.getValue();

  }
}
