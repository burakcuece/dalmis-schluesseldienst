/** Navigation, Header-Zustand und FAQ-Akkordeon. */

const header = document.querySelector<HTMLElement>('[data-header]');
const menuToggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const navMenu = document.querySelector<HTMLElement>('[data-navigation]');
const mediaDesktop = window.matchMedia('(min-width: 1024px)');

function setMenuState(open: boolean): void {
  if (!menuToggle || !navMenu) return;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  navMenu.classList.toggle('is-open', open);
  document.body.classList.toggle('nav-open', open && !mediaDesktop.matches);
}

menuToggle?.addEventListener('click', () => {
  setMenuState(menuToggle.getAttribute('aria-expanded') !== 'true');
});

navMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenuState(false)));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuState(false);
});

document.addEventListener('click', (event) => {
  if (!navMenu || !menuToggle || mediaDesktop.matches) return;
  const target = event.target as Node;
  if (navMenu.classList.contains('is-open') && !navMenu.contains(target) && !menuToggle.contains(target)) {
    setMenuState(false);
  }
});

mediaDesktop.addEventListener('change', () => setMenuState(false));

const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 18);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

// FAQ: pro Akkordeon ist immer nur eine Antwort geöffnet
document.querySelectorAll<HTMLElement>('[data-accordion]').forEach((accordion) => {
  const buttons = accordion.querySelectorAll<HTMLButtonElement>('button[aria-controls]');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const willOpen = button.getAttribute('aria-expanded') !== 'true';
      buttons.forEach((other) => {
        other.setAttribute('aria-expanded', String(willOpen && other === button));
        const panel = document.getElementById(other.getAttribute('aria-controls') ?? '');
        if (panel) panel.hidden = !(willOpen && other === button);
      });
    });
  });
});

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

export {};
