
const emojis = ["🦄","🦄","🐱","🐱","🍓","🍓","⚽️","⚽️","❤️","❤️","😍","😍","🥶","🥶","💩","💩","👻","👻","✈️","✈️","💎","💎","💸","💸",];

let suffleEmojis = emojis.sort(() => (Math.random() > .5) ? 1 : -1);

for (var i=0; i<emojis.length; i++) {
  let box = document.createElement('div');
  box.className = 'item';
  box.innerHTML = suffleEmojis[i];

  box.onclick = function() {
    this.classList.add('kaartDraai');
    setTimeout(() => {
      if(document.querySelectorAll('.kaartDraai').length > 1){
        if(document.querySelectorAll('.kaartDraai')[0].innerHTML == document.querySelectorAll('.kaartDraai')[1].innerHTML){
          document.querySelectorAll('.kaartDraai').forEach(item => item.classList.add('match'));
          document.querySelectorAll('.kaartDraai').forEach(item => item.classList.remove('kaartDraai'));
          if(document.querySelectorAll('.match').length == emojis.length){
            toonMelding('Je hebt gewonnen');
          }
        } else {
          document.querySelectorAll('.kaartDraai').forEach(item => item.classList.remove('kaartDraai'));
        }
      }
    }, 2000);
  };

  document.querySelector('.kaarten').appendChild(box);
}

function toonMelding(bericht) {
  const meldingElement = document.createElement('div'); // maakt soort van een blok aan voor de meldingen
  meldingElement.className = 'melding-blok'; // class toevoegen
  meldingElement.innerText = bericht; // tekst van de meldingen

  
  document.body.appendChild(meldingElement); // het toevoegen van de meldingen aan het scherm

  // Verwijder de melding na 3 seconden
  setTimeout(() => {
      meldingElement.remove();
  }, 3000);

}
