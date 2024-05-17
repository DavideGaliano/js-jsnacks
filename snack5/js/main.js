// Inizializza un array vuoto per i numeri dispari
let numeriDispari = [];

// Ciclo per 6 volte
for (let i = 0; i < 6; i++) {
  // Chiede all'utente di inserire un numero
  let numero = prompt("Inserisci un numero:");

  // Converte il valore inserito in numero
  numero = parseInt(numero);

  // Verifica se il numero è dispari
  if (numero % 2 !== 0) {
    // Aggiunge il numero all'array se è dispari
    numeriDispari.push(numero);
  }
}

// Stampa l'array dei numeri dispari
console.log("I numeri dispari inseriti sono:", numeriDispari);
