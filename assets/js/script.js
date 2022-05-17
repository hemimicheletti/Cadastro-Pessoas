import {Controle} from "./controle.js"
import {bancoDeDados} from "./banco_dados.js"
import {adicionarPessoa, mostrarTela} from "./add.js"


// Se clicando em pesquisar e o campo for Todos/  return todos
const ul = document.querySelector("#lista-de-alunos")

// Função Mostrar por Cargo
function filtroCargo(){
    ul.innerHTML = '';

    const pesquisa = document.querySelector('#cargoOption').value
    const buscar = bancoDeDados.todos.filter((pessoa) => {
        if (pesquisa === "Aluno" && pessoa._cargo === "Aluno"){
            return pessoa
        }
        else if (pesquisa === "Facilitador" && pessoa._cargo === "Facilitador"){
            return pessoa
        }
        else if (pesquisa === "Instrutor" && pessoa._cargo === "Instrutor"){
            return pessoa
        }
        else if (pesquisa === "Todos"){
            if(pessoa._cargo === "Aluno" || pessoa._cargo === "Facilitador" || pessoa._cargo === "Instrutor"){                
                return pessoa
            }            
        }
    })

    if(bancoDeDados.todos.length > 0){
        
        for(let contador = 0; contador < buscar.length; contador +=1){
            console.log(buscar[contador])
            mostrarTela(buscar[contador]._nome, buscar[contador]._sobrenome, buscar[contador]._email, buscar[contador]._cargo)
        }
    }

 
}

const botaoPesquisar = document.querySelector("#btn")
botaoPesquisar.addEventListener("click",filtroCargo)

const botaoCadastrar = document.querySelector("#register-button")
botaoCadastrar.addEventListener("click",adicionarPessoa)


