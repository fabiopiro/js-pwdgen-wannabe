// Chiedi all'utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

var nome = prompt ("Qual è il tuo nome?");
console.log(nome);

var cognome = prompt ("Qual è il tuo cognome?");
console.log(cognome);

var colorePreferito = prompt ("Qual è il tuo colore preferito?");
console.log(colorePreferito);

var passwordGenerata = nome + cognome + colorePreferito + 21;
console.log(passwordGenerata);

document.getElementById("password").innerHTML = "La tua password è " + passwordGenerata;