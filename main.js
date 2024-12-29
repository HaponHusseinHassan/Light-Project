const bulb = document.getElementById('bulb');
const onBtn = document.getElementById('onBtn');
const offBtn = document.getElementById('offBtn');

// Turn ON the light bulb
onBtn.addEventListener('click', () => {
  bulb.src = 'https://www.w3schools.com/js/pic_bulbon.gif';
});

// Turn OFF the light bulb
offBtn.addEventListener('click', () => {
  bulb.src = 'https://www.w3schools.com/js/pic_bulboff.gif';
});
