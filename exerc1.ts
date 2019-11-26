// 1 -Criar uma classe que efetue o cálculo do salário líquido de um professor através de um método que retorne o salario deste professor. Os dados fornecidos para o método serão: valor da hora aula, número de aulas dadas no mês e
// percentual de desconto do INSS.

class Salario {
    valorHoraAula: number
    numeroAulaDada: number
    descontoInss: number
    resultadoSalario: number

    constructor(presultadoSalario: number) {
        // this.valorHoraAula = pvalorHoraAula;
        // this.numeroAulaDada = pnumeroAulaDada;
        // this.descontoInss = pdescontoInss;
        this.resultadoSalario = presultadoSalario;
    }

    valorAula(pvalorHoraAula: number): number {
       return this.valorHoraAula = pvalorHoraAula
    }
    aulasDadas(pnumeroAulaDada: number): number {
        this.numeroAulaDada = pnumeroAulaDada
        this.valorHoraAula = this.valorHoraAula * pnumeroAulaDada
        return this.valorHoraAula
    }
    descInss(pdescontoInss: number) {
        this.descontoInss = pdescontoInss
         this.resultadoSalario = this.valorHoraAula
         pdescontoInss = this.resultadoSalario *(pdescontoInss / 100) 
         this.resultadoSalario = this.resultadoSalario - this.descontoInss
         return this.resultadoSalario
    }
    mostrarSalario() {
       return this.resultadoSalario
   } 
}
let salario = new Salario(0)
salario.valorAula(Number(prompt("Informe o valor da hora aula")))
salario.aulasDadas(Number(prompt("Informe a quantidade de aulas dadas")))
salario.descInss(Number(prompt("Informe o valor do desconto do INSS")))

alert(salario.mostrarSalario().toFixed(2))
