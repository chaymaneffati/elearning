export class Cour {
    public id:number;
    public titre:string;
    public date:string;
    public fichier:string;
    public id_formation:number;
    public id_formateur:number; 
    constructor(titre, date, fichier, id_formation, id_formateur){
        this.titre = titre;
        this.date = date;
        this.fichier = fichier;
        this.id_formation = id_formation;
        this.id_formateur = id_formateur;
}
}
