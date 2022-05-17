import { Pessoa } from "./pessoa.js";
import { bancoDeDados } from "./banco_dados.js";

class Controle{
    static cadastrarPessoa(pessoa){
        const novaPessoa = new Pessoa(pessoa)
        bancoDeDados.todos.push(novaPessoa)
        return true
    }
}

export {Controle}