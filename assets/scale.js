// The layout is a fixed 1024px canvas; scale it to the window width like Readymag does.
function fit() {
  var z = window.innerWidth / 1024;
  document.documentElement.style.zoom = z;
  document.documentElement.style.setProperty('--zoom', z);
}
fit();
addEventListener('resize', fit);
