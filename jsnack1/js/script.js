//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.


//for(i=0; i<10; i++){
    //let num = parseInt(prompt('Inserisci un numero'));
    //let somma = parseInt(somma + num);
//}
//console.log(somma);

let i=0;
let somma = parseInt(0);
while (i<10){
    let num = parseInt(prompt('Inserisci un numero'));
    somma = somma + num;
    i++
}

console.log(somma);
 