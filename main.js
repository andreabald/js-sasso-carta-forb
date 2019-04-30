// Sasso Carta e Forbice tra due giocatori CPU

var gioco = ['sasso','carta','forbice'];

function scelta(){

  var opzione = +(Math.floor((Math.random()*3)));
  var risultato;

  switch (opzione) {
    case 0:
      var risultato = 'sasso';
      break;
    case 1:
      var risultato = 'carta';
      break;
    case 2:
      var risultato = 'forbice';
      break;
  }
  return risultato;
}

var player1 = scelta();
var player2 = scelta();

console.log('Player 1: ' + player1);
console.log('Player 2: ' + player2);

if (player1 == 'sasso' && player2 == 'sasso') {
  console.log('Risultato: pareggio!');

} else if (player1 == 'sasso' && player2 == 'carta') {
  console.log('Risultato: player 2 vince!');

} else if (player1 == 'sasso' && player2 == 'forbice') {
  console.log('Risultato: player 1 vince!');

} else if (player1 == 'carta' && player2 == 'sasso') {
  console.log('Risultato: player 1 vince!');

} else if (player1 == 'carta' && player2 == 'forbice') {
  console.log('Risultato: player 2 vince!');

} else if (player1 == 'carta' && player2 == 'carta') {
  console.log('Risultato: pareggio!');

} else if (player1 == 'forbice' && player2 == 'sasso') {
  console.log('Risultato: player 2 vince!');

} else if (player1 == 'forbice' && player2 == 'carta') {
  console.log('Risultato: player 1 vince!');

} else if (player1 == 'forbice' && player2 == 'forbice') {
  console.log('Risultato: pareggio!');
}
