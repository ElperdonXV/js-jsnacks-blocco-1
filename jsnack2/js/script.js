//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const invitati = ['Sara', 'Giuseppe', 'Mario', 'Rosario', 'Alfredo'];
const nome = prompt('Inserisci il tuo nome');
let esito = false;
for (let index = 0; index < invitati.length; index++) {
    if (nome == invitati[index]) {
        esito = true;
    }
}
if (esito == true) {
    document.getElementById('esito').innerHTML = "Puoi partecipare alla festa";
}
else {
    document.getElementById('esito').innerHTML = "Non puoi partecipare alla festa";
}