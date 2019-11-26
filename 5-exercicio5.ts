class Valores{

   
    maior: number
    valor1: number
    valor2: number

    constructor(pvalor1:number, pvalor2: number){
        this.valor1 = pvalor1;
        this.valor2 = pvalor2;
        this.maior;
    }
    ValInfor(): number{
        if (this.valor1 >= this.valor2){
            this.maior = this.valor1
        }else{
            this.maior =this.valor2
        }
        return this.maior
    }

    ParImpar(){
        if(this.maior % 2 == 0 ){
            return "par";
        }else{
            return "impar";
        }
    }
}

let v1: number = Number(prompt("Informe o 1º valor"))
let v2: number = Number(prompt("Informe o 2º valor"))

let valores = new Valores(v1,v2)

alert("O maior valor é "+ valores.ValInfor() +  " e ele é " + valores.ParImpar())



