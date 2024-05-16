// Definisce l'array con i nomi degli invitati
const invitati = [
  "Nicola",
  "Giovanni",
  "Davide",
  "Tonio",
  "Carlo",
  "Mara",
];

// Chiede all'utente di inserire il proprio nome
const nomeUtente = prompt("Inserisci il tuo nome:");

// Inizializza la variabile invitato a false
let invitato = false;

// Ciclo attraverso l'array degli invitati
for (let i = 0; i < invitati.length; i++) {
  // Confronta il nome dell'utente con l'elemento corrente dell'array
  if (invitati[i] === nomeUtente) {
    invitato = true; // Imposta invitato a true se trova una corrispondenza
    break; // Interrompe il ciclo
  }
}

// Comunica se l'utente è invitato o meno
if (invitato) {
  alert("Puoi partecipare alla festa del grande Gatsby!");
} else {
  alert(
    "Spiacente, non sei nella lista degli invitati alla festa del grande Gatsby."
  );
}
