// Genera un numero casuale da 0 a 10
const numeroComputer = Math.floor(Math.random() * 11);

// Chiede all'utente di inserire un numero
const numeroUtente = parseInt(prompt("Inserisci un numero tra 0 e 10:"));

// Confronta il numero dell'utente con il numero generato dal computer
if (numeroUtente === numeroComputer) {
  alert("Hai vinto! Il numero era " + numeroComputer);
} else {
  alert("Hai perso. Il numero era " + numeroComputer);
}
