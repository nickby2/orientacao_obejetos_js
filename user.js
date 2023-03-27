export default class User {
    constructor(nome, email, nascimento, role, ativo = true){
        this.nome = nome;
        this.ativo = ativo;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || 'estudante';
    }

    exibirInfos(){
        return this.mome + ', ' + this.email + ', ' + this.nascimento;
    }
}

const novoUser = new User('Lucas', 'lucas@gmail.com', '16-11-1995');
