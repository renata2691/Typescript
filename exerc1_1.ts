class Salarioo {
    valorHoraAula: number
    numeroAulaDada: number
    descontoInss: number
    resultadoSalario: number

    constructor(pvalorHoraAula: number, pnumeroAulaDada: number, pdescontoInss: number) {
        this.valorHoraAula = pvalorHoraAula;
        this.numeroAulaDada = pnumeroAulaDada;
        this.descontoInss = pdescontoInss;
        this.resultadoSalario;
    }

    calculoSalario(){
        this.valorHoraAula = this.valorHoraAula  * this.numeroAulaDada
        this.resultadoSalario = this.valorHoraAula * (1 - this.descontoInss / 100)
        return this.resultadoSalario
    }


let valH: number = Number(prompt("valor hora"));
let qtdAul: number = Number(prompt("qtd aulas"));
let desc: number = Number(prompt("desconto"));

let salarioo = new Salarioo(valH, qtdAul, desc)
alert(salarioo.calculoSalario().toFixed(2))