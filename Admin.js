import User from "./User.js"

export default class Admin extends User{
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
    super(nome, email, nascimento, role, ativo);

    }

    nomeAdmin(){
        return `${this.#nome}`
    }
    criarCurso(nomeCurso, vagas){
        return `Curso de ${nomeCurso} criado com ${vagas} vagas`
    }
}
