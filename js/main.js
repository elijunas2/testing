function toggleMenu() {
  var nav = document.getElementById('nav');
  if (nav.className === 'responsive') {
    nav.className = '';
  } else {
    nav.className = 'responsive';
  }
}
