
const emojis = ["🦄","🦄","🐱","🐱","🍓","🍓","⚽️","⚽️","❤️","❤️","😍","😍","🥶","🥶","💩","💩","👻","👻","✈️","✈️","💎","💎","💸","💸",];

let suffleEmojis = emojis.sort(() => (Math.random() > .5) ? 1 : -1);

for (var i=0; i<emojis.length; i++) {
  let box = document.createElement('div');
  box.className = 'item';
  box.innerHTML = suffleEmojis[i];

  box.onclick = function() {
    this.classList.add('boxopen');
    setTimeout(() => {
      if(document.querySelectorAll('.boxopen').length > 1){
        if(document.querySelectorAll('.boxopen')[0].innerHTML == document.querySelectorAll('.boxopen')[1].innerHTML){
          document.querySelectorAll('.boxopen').forEach(item => item.classList.add('boxMatch'));
          document.querySelectorAll('.boxopen').forEach(item => item.classList.remove('boxopen'));
          if(document.querySelectorAll('.boxMatch').length == emojis.length){
            alert('Je hebt gewonnen!');
          }
        } else {
          document.querySelectorAll('.boxopen').forEach(item => item.classList.remove('boxopen'));
        }
      }
    }, 2000);
  };

  document.querySelector('.kaarten').appendChild(box);
}



