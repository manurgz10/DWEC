cartas = [];
cartas[0] = ["/cards/2_of_spades.png", "2"];
cartas[1] = ["/cards/2_of_diamonds.png", "2"];
cartas[2] = ["/cards/2_of_hearts.png", "2"];
cartas[3] = ["/cards/2_of_clubs.png", "2"];
cartas[4] = ["/cards/3_of_spades.png", "3"];
cartas[5] = ["/cards/3_of_diamonds.png", "3"];
cartas[6] = ["/cards/3_of_hearts.png", "3"];
cartas[7] = ["/cards/4_of_clubs.png", "3"];
cartas[8] = ["/cards/4_of_spades.png", "4"];
cartas[9] = ["/cards/4_of_diamonds.png", "4"];
cartas[10] = ["/cards/4_of_hearts.png", "4"];
cartas[11] = ["/cards/4_of_clubs.png", "4"];
cartas[12] = ["/cards/5_of_spades.png", "5"];
cartas[13] = ["/cards/5_of_diamonds.png", "5"];
cartas[14] = ["/cards/5_of_hearts.png", "5"];
cartas[15] = ["/cards/5_of_clubs.png", "5"];
cartas[16] = ["/cards/6_of_spades.png", "6"];
cartas[17] = ["/cards/6_of_diamonds.png", "6"];
cartas[18] = ["/cards/6_of_hearts.png", "6"];
cartas[19] = ["/cards/6_of_clubs.png", "6"];
cartas[20] = ["/cards/7_of_spades.png", "7"];
cartas[21] = ["/cards/7_of_diamonds.png", "7"];
cartas[22] = ["/cards/7_of_hearts.png", "7"];
cartas[23] = ["/cards/7_of_clubs.png", "7"];
cartas[24] = ["/cards/8_of_spades.png", "8"];
cartas[25] = ["/cards/8_of_diamonds.png", "8"];
cartas[26] = ["/cards/8_of_hearts.png", "8"];
cartas[27] = ["/cards/8_of_clubs.png", "8"];
cartas[28] = ["/cards/9_of_spades.png", "9"];
cartas[29] = ["/cards/9_of_diamonds.png", "9"];
cartas[30] = ["/cards/9_of_hearts.png", "9"];
cartas[31] = ["/cards/9_of_clubs.png", "9"];
cartas[32] = ["/cards/10_of_spades.png", "10"];
cartas[33] = ["/cards/10_of_diamonds.png", "10"];
cartas[34] = ["/cards/10_of_hearts.png", "10"];
cartas[35] = ["/cards/10_of_clubs.png", "10"];
cartas[36] = ["/cards/ace_of_spades.png", "Ace"];
cartas[37] = ["/cards/ace_of_diamonds.png", "Ace"];
cartas[38] = ["/cards/ace_of_hearts.png", "Ace"];
cartas[39] = ["/cards/ace_of_clubs.png", "Ace"];
cartas[40] = ["/cards/jack_of_spades2.png", "Jack"];
cartas[41] = ["/cards/jack_of_diamonds2.png", "Jack"];
cartas[42] = ["/cards/jack_of_hearts2.png", "Jack"];
cartas[43] = ["/cards/jack_of_clubs2.png", "Jack"];
cartas[44] = ["/cards/queen_of_spades2.png", "Queen"];
cartas[45] = ["/cards/queen_of_diamonds2.png", "Queen"];
cartas[46] = ["/cards/queen_of_hearts2.png", "Queen"];
cartas[47] = ["/cards/queen_of_clubs2.png", "Queen"];
cartas[48] = ["/cards/king_of_spades2.png", "King"];
cartas[49] = ["/cards/king_of_diamonds2.png", "King"];
cartas[50] = ["/cards/king_of_hearts2.png", "King"];
cartas[51] = ["/cards/king_of_clubs2.png", "King"];
let juego = document.querySelector("#div");
function openWindow() {
  ventanaPoker = window.open("ventanajuego.html", "", "width=800,height=300");
}

function dealCards() {
  let hand = [];
  let active = false;
  for (let i = 0; i < 5; i++) {
    if (cartas.length === 0) {
      alert("No quedan cartas en el mazo.");
      window.close();
    }
    let random = Math.floor(Math.random() * cartas.length);
    let randomCard = cartas[random];
    hand.push(randomCard);
    cartas.splice(random, 1);
  }
  for (let i = 0; i < 5; i++) {
    document.getElementById("card" + (i + 1)).src = hand[i][0];
  }

  for (let i = 0; i < 5; i++) {
    for (let j = i + 1; j < 5; j++) {
      if (hand[i][1] === hand[j][1]) {
        document.getElementById("congrats").innerHTML = "Pareja. Has ganado";
        active = true;
      }
    }
  }
  if (active == false) {
    document.getElementById("congrats").innerHTML = "Has perdido.";
  }
}

function closeGame() {
  ventanaPoker.close();
}

function closeAll() {
  ventanaPoker.close();
  window.close();
}
