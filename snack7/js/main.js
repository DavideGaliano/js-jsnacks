// Chiede all'utente di inserire il numero massimo
const numeroMassimo = parseInt(prompt("Inserisci il numero massimo:"));

// Verifica che l'input dell'utente sia un numero valido
if (!isNaN(numeroMassimo) && numeroMassimo > 0) {
  // Stampa la tabellina del 2 fino al numero massimo inserito dall'utente
  for (let i = 2; i <= numeroMassimo; i += 2) {
    console.log(i);
  }
} else {
  console.log("Per favore, inserisci un numero valido maggiore di 0.");
}
