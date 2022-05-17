import { Controle } from "./controle.js"
import { Pessoa } from "./pessoa.js"
import { bancoDeDados } from "./banco_dados.js"


const ul = document.querySelector("#lista-de-alunos")
let soma = 0
let totalAlunos = document.querySelector("#total-alunos")


//Adicionando na Array
function adicionarPessoa(event) {
    event.preventDefault()

    const nomeUsuario           = document.querySelector("#nome").value
    const sobrenomeUsuario      = document.querySelector("#sobrenome").value
    const emailUsuario          = document.querySelector("#email").value
    const telefoneUsuario       = document.querySelector("#telefone").value
    const contatoUsuario        = document.querySelector("#contato").value
    const cargoUsuario          = document.querySelector("#cargo").value
    const dataNascimentoUsuario = document.querySelector("#data-nascimento").value


    let pessoa = ({ nome: nomeUsuario, sobrenome: sobrenomeUsuario, datadenascimento: dataNascimentoUsuario, email: emailUsuario, contato: contatoUsuario, telefone: telefoneUsuario, cargo: cargoUsuario })

// Verificação de email
    let idade = verificaIdade(dataNascimentoUsuario)
    let emailVerificado = bancoDeDados.todos.some(function verificaEmail(pessoa) {
        //return pessoa._email === emailUsuario
        if(pessoa._email === emailUsuario){
            return true
        }
        else{
            return false
        }
    })
    if (!emailVerificado && idade >= 18){
        Controle.cadastrarPessoa(pessoa)
        mostrarTela(nomeUsuario, sobrenomeUsuario, emailUsuario, cargoUsuario)
        soma +=1
        totalAlunos.innerText = soma
    }  
    else{
        if(emailVerificado){
            alert("Esse email já está em uso!")
        }
        if(idade < 18){
            alert("Você não tem a idade mínima para se cadastrar!")
        }
    }
    
}

// Mostrar na Tela
function mostrarTela(nomeUsuario, sobrenomeUsuario, emailUsuario, cargoUsuario) {

    // Criando Elementos
    let li = document.createElement("li")
    let p_nome = document.createElement("p")
    let p_sobrenome = document.createElement("p")
    let p_email = document.createElement("p")
    let p_cargo = document.createElement("p")

    p_nome.innerText = nomeUsuario
    p_sobrenome.innerText = sobrenomeUsuario
    p_email.innerText = emailUsuario
    p_cargo.innerHTML = cargoUsuario

    //Adicionando Elementos
    li.appendChild(p_nome)
    li.appendChild(p_sobrenome)
    li.appendChild(p_email)
    li.appendChild(p_cargo)
    ul.appendChild(li)

}

function verificaIdade(dataNascimentoUsuario){
    let separaNascimento = dataNascimentoUsuario.split("-")
    let indice = separaNascimento[0]
    let mudar = parseInt(indice)
    let subtrai = new Date().getFullYear() - mudar
    return subtrai
}

export { adicionarPessoa, mostrarTela }
