// Inizializza la variabile somma a 0
let somma = 0;

// Ciclo per 10 volte
for (let i = 0; i < 10; i++) {
  // Chiede all'utente di inserire un numero
  let numero = prompt("Inserisci un numero:");

  // Converte il valore inserito in numero
  numero = parseFloat(numero);

  // Aggiunge il numero alla somma totale
  somma += numero;
}

// Stampa la somma totale
console.log("La somma totale è: " + somma);
