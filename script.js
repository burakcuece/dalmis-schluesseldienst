(() => {
  'use strict';

  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const navigation = document.querySelector('[data-navigation]');
  const menuLinks = navigation ? navigation.querySelectorAll('a') : [];
  const mediaDesktop = window.matchMedia('(min-width: 1024px)');

  const setMenuState = (open) => {
    if (!menuToggle || !navigation) return;
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    navigation.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open && !mediaDesktop.matches);
  };

  menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    setMenuState(!isOpen);
  });

  menuLinks.forEach((link) => link.addEventListener('click', () => setMenuState(false)));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuState(false);
  });

  document.addEventListener('click', (event) => {
    if (!navigation || !menuToggle || mediaDesktop.matches) return;
    if (navigation.classList.contains('is-open') && !navigation.contains(event.target) && !menuToggle.contains(event.target)) {
      setMenuState(false);
    }
  });

  mediaDesktop.addEventListener?.('change', () => setMenuState(false));

  const updateHeader = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 18);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  document.querySelectorAll('[data-accordion] button[aria-controls]').forEach((button) => {
    button.addEventListener('click', () => {
      const panelId = button.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;
      const willOpen = button.getAttribute('aria-expanded') !== 'true';

      document.querySelectorAll('[data-accordion] button[aria-controls]').forEach((otherButton) => {
        const otherPanelId = otherButton.getAttribute('aria-controls');
        const otherPanel = otherPanelId ? document.getElementById(otherPanelId) : null;
        otherButton.setAttribute('aria-expanded', 'false');
        if (otherPanel) otherPanel.hidden = true;
      });

      button.setAttribute('aria-expanded', String(willOpen));
      if (panel) panel.hidden = !willOpen;
    });
  });

  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal');

  if (!reducedMotion && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('motion-ready');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  }
})();
