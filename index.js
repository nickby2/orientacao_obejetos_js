import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

// const novoUser = new User('Lucas', 'lucas@gmail.com', '1995-16-11');
// console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('Lucas', 'lucas@gmail.com', '16-11-1995');
console.log(novoAdmin.nome);
novoAdmin.nome = 'Sarah'
console.log(novoAdmin.nome);

const novoDocente = new Docente('Lidia', 'lidia@gmail.com', '1995-16-11');
console.log(novoDocente.exibirInfos());
