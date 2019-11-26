class Funcionario {
    codigo: number;
    anoNasc: number;
    anoIngEmp: number;
    idade: number

    constructor(pcodigo: number, panoNasc: number, panoIngEmp: number){
        this.codigo = pcodigo;
        this.anoNasc = panoNasc;
        this.anoIngEmp = panoIngEmp;
        this.idade;
    }

    Aposentar(){
        if( (2019 - this.anoNasc) >= 65 ){
            return "Requerer aposentadoria"
        }else if((2019 - this.anoIngEmp) >=30 ){
            return "Requerer aposentadoria"
        }else if( (2019 - this.anoNasc) >= 60  || (2019 - this.anoIngEmp) >=25 ){
            return "Requerer aposentadoria"
        }else{
            return "Não requerer"
        }
    }
}

let cod: number = Number(prompt("Informe o codigo do funcionario."));
let nasc: number = Number(prompt("Informe nascimento do funcionario"));
let ing: number = Number(prompt("Informe o ano que funcionario entrou na empresa ."));
let funcionario = new Funcionario(cod, nasc, ing) 
alert(funcionario.Aposentar())