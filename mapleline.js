// Navigation mobile Boreal: injecte un bouton hamburger et regroupe les liens de
// navigation dans un tiroir. Aucune modification de HTML par page n'est requise.
// Sur desktop, le tiroir est en display:contents (les liens restent dans la rangee);
// sur mobile, le bouton est visible et le tiroir s'ouvre en panneau sous l'en-tete.
(function () {
  function initNav() {
    var inner = document.querySelector('.topbar-inner');
    if (!inner || inner.querySelector('.nav-toggle')) return;
    var nav = inner.querySelector('.topnav');
    if (!nav) return;
    var links = nav.querySelectorAll('a.navlink');
    if (!links.length) return;

    // Regroupe les liens dans un tiroir, insere avant la bascule de langue
    // pour conserver l'ordre desktop (liens puis langue).
    var lang = nav.querySelector('.lang');
    var drawer = document.createElement('div');
    drawer.className = 'nav-drawer';
    for (var i = 0; i < links.length; i++) drawer.appendChild(links[i]);
    nav.insertBefore(drawer, lang || null);

    // Bouton hamburger en premier dans la nav.
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'nav-toggle';
    btn.setAttribute('aria-label', 'Menu');
    btn.setAttribute('aria-expanded', 'false');
    for (var s = 0; s < 3; s++) btn.appendChild(document.createElement('span'));
    btn.addEventListener('click', function () {
      var open = inner.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.insertBefore(btn, nav.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
})();
