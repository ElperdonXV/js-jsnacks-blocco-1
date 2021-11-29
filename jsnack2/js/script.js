//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const invitati = ['Sara', 'Giuseppe', 'Mario', 'Rosario', 'Alfredo'];
const nome = prompt('Inserisci il tuo nome');
let esito = false;
let index = 0;
while (index < invitati.length && esito == false) {
    if (invitati[index] == nome) {
        esito = true;
    }
    index++;
}
if (esito) {
    document.innerHtm('Il tuo nome è nella lista');
} else { 
    document.writeln('Il tuo nome non è nella lista');
}
