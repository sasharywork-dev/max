// The layout is a fixed canvas (1024px desktop, 390px phone); scale it to the window width like Readymag does.
var phone = matchMedia('(max-width: 767px)');
function fit() {
  var z = window.innerWidth / (phone.matches ? 390 : 1024);
  document.documentElement.style.zoom = z;
  document.documentElement.style.setProperty('--zoom', z);
}
fit();
addEventListener('resize', fit);
