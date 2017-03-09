// // con
// unNom();
// maFonction();

// function a(){
// }

// function uneFonction(){
//     "use strict";
//     var loop = 0,
//     b=12;

//     if(true){
//         for (loop = 0; loop < 15; loop++) {
//         }
//     }
//     console.log("Mes variables loop et b sont:")
//     console.log(loop, b);
// }

// uneFonction();


// var a = undefined;

// if(a){
//     console.log("ceci est vrai");
// }else{
//     console.log("ceci est faux")

// }

// function addition(a,b){
//     if(((typeof a) == "number") &&((typeof b) == "number")){
//          console.log(a+b);
//     }
// }
// console.log(12 + "11");

// var tab = [5, "true", false, "coucou", true];

// var el = tab.pop();

// console.log(el, tab);

// for (var index = 0; index < 6; index++) {
//     if(index == 3){
//         continue;
//     }
//     console.log("compteur : "+index); 
// }

// function fct(){
//     var a = 12;
//     var fct1 = function(){
//          var a = 16;
//         console.log("fonction interne : ", a);
//     };
    
//     fct1();
//     console.log("fonction principale", a);
// }
// fct();

/**
 * Cluosure && callback2
 */
// function execute(cb1, cb2){
//         cb1();
//         cb2();  
// };

// function callback1(){
//     console.log("welcome 1");
// }

// function callback2(){
//     console.log("welcome 2");
// }

// execute(callback1, callback2);

var uneValeur = 100;

function action(){
    console.log("5 sec après", uneValeur);
}

console.log("avant");

setTimeout(action, 5000);

uneValeur = 20000; 

console.log("avant");



























































































































































 
