var prompt = require('prompt-sync')();

let produto = parseInt(prompt('Digite o valor do produto: '));
    console.log('(1) Valor para pagamento a vista com desconto de 15% ');
        console.log('(2) Valor para pagamento a prazo com acrescimento de 15% ');
            console.log('(3) Valor parcelado de 24x com juros simples de 20% '); 
let pagamento = parseInt(prompt('Coloque o tipo de pagamento: '));


switch (pagamento){

case 1:
    let valor = produto*0.15;
        let total = produto-valor;
            console.log('O valor a ser pago e de R$ '+total+' reais');
break;

case 2:
    let dinheiro = produto*0.15;
        let subtotal = produto+dinheiro;
            console.log('O valor a ser pago e de R$ '+subtotal+' reais');
break;

case 3:
   let parcelas = parseInt(prompt('digite o numero das parcelas: '));
if (pagamento===3){  

}else if  (parcelas<2){
    console.log('parcelamento insuficiente,coloque mais parcelas ');

}else if (parcelas>24){
    console.log('parcelamento excedendo a contidade estipulada ');

}else{
 }
console.log('parcelamento aceito');
    let valor2 = produto*0.20;
        let valor3 = produto+valor2;
            console.log('O valor a ser pago e de R$ '+valor3+' reais');
                console.log('Divididos de '+parcelas+' parcelas ');

break;
default:
}



