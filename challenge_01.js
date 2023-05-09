
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

let x, y;
x = prompt("Zahl1");
y = prompt("Zahl2");
x = parseInt(x);
y = parseInt(y);

let summe;
summe = x + y;
console.log("Ergebnis: " + summe);