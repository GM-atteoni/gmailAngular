export class EmailDTO{
    to = '';
    subject = '';
    content = '';


    constructor({destinatario, assunto, conteudo}){
        this.to = destinatario;
        this.subject = assunto;
        this.content = conteudo;
    }

}