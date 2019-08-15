export class EmailDTO{
    to = '';
    subject = '';
    content = '';

    created_at = '';
    id = '';
    from = '';


    constructor({destinatario, assunto, conteudo}){
        this.to = destinatario;
        this.subject = assunto;
        this.content = conteudo;
    }

}