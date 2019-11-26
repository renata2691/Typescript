class QtdSalarios{
    salMinino: number;
    salUsuario: number;

    constructor(psalMinimo: number , psalUsuario: number){
        this.salMinino = psalMinimo;
        this.salUsuario = psalUsuario;
    } 

    Salarios(): number{
        return this.salUsuario / this.salMinino
    }
}

alert("Sabendo que o salario minimo é de R$ 998,00 por mês, vamos verificar o seu salario.")
let salUsu: number = Number(prompt("Informe o seu salario.")) 
let qtdSalarios = new QtdSalarios(998, salUsu)
alert(`Você recebe ${qtdSalarios.Salarios().toFixed(0)} salarios minimos.` )