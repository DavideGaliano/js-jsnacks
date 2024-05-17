// Inizializza la variabile per tenere traccia del numero precedente
let numeroPrecedente = null;

// Ciclo per un massimo di 1000 iterazioni
for (let i = 0; i < 1000; i++) {
  // Chiede all'utente di inserire un numero
  let numeroCorrente = parseInt(prompt("Inserisci un numero:"));

  // Verifica se l'input dell'utente è un numero valido
  if (isNaN(numeroCorrente)) {
    console.log("Per favore, inserisci un numero valido.");
    i--; // Decrementa il contatore per ripetere l'iterazione
    continue; // Salta alla prossima iterazione del ciclo
  }

  // Controlla se il numero corrente è uguale al numero precedente
  if (numeroCorrente === numeroPrecedente) {
    console.log(
      "Hai inserito lo stesso numero due volte consecutive. Il programma termina."
    );
    break; // Interrompe il ciclo
  }

  // Aggiorna numeroPrecedente con numeroCorrente
  numeroPrecedente = numeroCorrente;
}

console.log("Mi sono rotto di aspettare termino il programma.");
