export class PersonneClass {

   nom: string;
   prenom: string;
   adresse: string;
   telephone: number;
   email: string;
   dateNaissance: Date;

  constructor() {

  }


  clone(): PersonneClass {
    const pers = new PersonneClass();
    pers.nom = this.nom;
    pers.prenom = this.prenom;
    pers.dateNaissance = this.dateNaissance;
    pers.adresse = this.adresse;
    pers.telephone = this.telephone;
    pers.email = this.email;
    return pers;
  }

}

