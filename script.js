
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
            alert('Je hebt gewonnen!');
          }
        } else {
          document.querySelectorAll('.kaartDraai').forEach(item => item.classList.remove('kaartDraai'));
        }
      }
    }, 2000);
  };

  document.querySelector('.kaarten').appendChild(box);
}



