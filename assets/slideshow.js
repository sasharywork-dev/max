// Readymag slideshows: show one image at a time, click (or arrow keys when hovered) to advance.
document.querySelectorAll('.common-slideshow').forEach(function (show) {
  var images = show.querySelectorAll('.images-wrapper .image');
  var i = 0;
  function go(n) {
    images[i].classList.remove('active');
    i = (n + images.length) % images.length;
    images[i].classList.add('active');
  }
  images[0].classList.add('active');
  show.addEventListener('click', function (e) {
    var r = show.getBoundingClientRect();
    go(e.clientX - r.left < r.width / 2 ? i - 1 : i + 1);
  });
});
