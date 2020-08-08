export class users {
    public id:number;
    public lastname:string;
    public name: string;
    public login:string;
    public password:string;
    public email:string;
    public phone:number;
    public Role:string;

    constructor(name,lastname, phone,login, email, Role, password, idUser){
            this.name = name;
            this.lastname = lastname;
            this.email=email;
            this.Role = Role;
            this.login=login;
            this.phone=phone;
            this.password=password;
            this.id = idUser;
    }
   
    }