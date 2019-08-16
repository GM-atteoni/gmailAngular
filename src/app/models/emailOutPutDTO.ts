export class EmailOutPutsDTO{
    conteudo = '';
    dataEnvio = '';
    remetente = '';
    id = '';
    assunto = '';
    destinatario = '';


    constructor({content, created_at, from, id, subject, to}){
        this.conteudo = content;
        this.dataEnvio = created_at;
        this.remetente = from;
        this. id = id;
        this. assunto = subject;
        this.destinatario = to;
    }

}