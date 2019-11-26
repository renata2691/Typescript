// 3 -Todo restaurante, embora por lei não possa obrigar o cliente a pagar, cobra 10% para o garçom. Crie uma classe que tenha um método que verifica o valor gasto com despesas em um restaurante e mostre o valor total da conta com a gorjeta.

class Restaurante {
    despesas: number;
    gorjeta: number = 0.1;

    constructor(pdespesas: number) {
        this.despesas = pdespesas;
    }

    calcularConta() {
        return this.despesas * this.gorjeta + this.despesas
        
    }

}
let total:number = (Number(prompt("Qual o valor consumido no local?")))

let maria= new Restaurante(total)

alert(maria.calcularConta())