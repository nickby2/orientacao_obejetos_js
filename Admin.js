import User from "./User.js"

class Admin extends User{
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
    super(nome, email, nascimento, role, ativo);

    }
}

const novoAdmin = new Admin('Lucas', 'lucas@gmail.com', '16-11-1995');
console.log(novoAdmin);