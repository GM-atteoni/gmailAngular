export class UserInputDTO{
    name = '';
    username = '';
    phone = '';
    password = '';
    avatar = '';


    constructor({nome, user, telefone, senha, avatar}){
        this.name = nome;
        this.username = user;
        this.phone = telefone;
        this.password = senha;
        this.avatar = avatar;
    }

}