// Chiede all'utente di inserire il primo numero
let numero1 = prompt("Inserisci il primo numero:");

// Chiede all'utente di inserire il secondo numero
let numero2 = prompt("Inserisci il secondo numero:");

// Converte i valori inseriti in numeri
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

// Confronta i numeri e stampa il maggiore
if (numero1 > numero2) {
  console.log("Il numero maggiore è: " + numero1);
} else if (numero2 > numero1) {
  console.log("Il numero maggiore è: " + numero2);
} else {
  console.log("I numeri sono uguali.");
}
