export class Formations {
    public id:number;
    public titre:string;
    public description:string;
    public date:string;
    public duree:string;
    public id_categorie:string;

    constructor(titre,description,date,duree,id_categorie){
            this.titre = titre;
            this.description = description;
            this.date = date;
            this.duree = duree;
            this.id_categorie = id_categorie;
    }
   
    }