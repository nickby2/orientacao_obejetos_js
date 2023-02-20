const user = {
    nome: "Lucas" ,
    email: "Lucas@gmail.com",
    nascimento: "16/11/1995",
    role: "estudante",
    ativo: "true",
    exibirInfos: function(){
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "Mario",
    email: "Mario@gmail.com",
    role: "administrator",
    criarCurso(){
        console.log('Curso criado!');
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()