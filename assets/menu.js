// Phone menu: the burger opens the slide-in panel; its close icon or any link closes it.
document.querySelectorAll('#mags-m [data-burger], #mags-m [data-menu-close]').forEach(function (el) {
  el.addEventListener('click', function () {
    document.documentElement.classList.toggle('menu-open', el.hasAttribute('data-burger'));
  });
});
document.querySelectorAll('#mags-m [data-menu] a').forEach(function (a) {
  a.addEventListener('click', function () { document.documentElement.classList.remove('menu-open'); });
});
