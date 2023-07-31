export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome;
        this.#ativo = ativo;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
    }

    get nome(){
        return this.#nome
    }
    set nome(novoNome){
        if(novoNome == ''){
            throw new Error('Formato não válido');
        }
        this.#nome = novoNome
    }
    get email(){
        return this.#email
    }
    set email(NovoEmail){
        this.#email = novoEmail
    }
    get nascimento(){
        return this.#nascimento
    }
    set nascimento(NovoNascimento){
        this.#nascimento = novoNascimento
    }
    get role(){
        return this.#role
    }
    set role(novoRole){
        this.#role
    }
    get ativo(){
        return this.#ativo
    }
    set ativo(NovoAtivo){
        this.#ativo = novoAtivo
    }

    exibirInfos(){
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`;
    }
}
