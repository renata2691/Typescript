// – Criar uma classe para resolver o seguinte problema: A prefeitura do Rio de Janeiro abriu uma linha de crédito para os funcionários estatutários. O valor máximo da prestação não poderá ultrapassar 30% do salário bruto. Fazer um algoritmo que permita entrar com o salário bruto e o valor da prestação e informar se o empréstimo pode ou não ser concedido

class Emprestimo {
    salarioBruto: number;
    valorPrestacao: number;

    constructor(psalarioBruto: number, pvalorPrestacao: number) {
        this.salarioBruto = psalarioBruto;
        this.valorPrestacao = pvalorPrestacao
    }

    calculoCredito() {
        if ((this.salarioBruto * 0.3) >= (this.valorPrestacao)) {
            return true
        }
        else {
            return false
        }
    }
}
let saldo:number = (Number(prompt("Informe o salario")))
let prestacao:number = (Number(prompt("Informe o valor da prestação")))

let funcionario = new Emprestimo(saldo, prestacao)

if(funcionario.calculoCredito() === true){
    alert("Empréstimo LIBERADO")
}
else{
    alert("Empréstimo NEGADO")
}