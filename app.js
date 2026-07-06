(() => {
  const header = document.getElementById('site-header');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOpenIcon = document.getElementById('menu-open-icon');
  const menuCloseIcon = document.getElementById('menu-close-icon');
  const projectModal = document.getElementById('project-modal');
  const openProjectButton = document.getElementById('open-project');
  const projectCloseButtons = document.querySelectorAll('[data-close-project]');

  let lastFocusedElement = null;

  const setHeaderState = () => {
    header.classList.toggle('border-b', window.scrollY > 16);
    header.classList.toggle('border-white/10', window.scrollY > 16);
    header.classList.toggle('bg-slate-950/90', window.scrollY > 16);
    header.classList.toggle('backdrop-blur-xl', window.scrollY > 16);
  };

  const setMenuOpen = (isOpen) => {
    mobileMenu.classList.toggle('hidden', !isOpen);
    menuOpenIcon.classList.toggle('hidden', isOpen);
    menuCloseIcon.classList.toggle('hidden', !isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  };

  const openProject = () => {
    lastFocusedElement = document.activeElement;
    projectModal.classList.remove('hidden');
    projectModal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
    projectModal.querySelector('[data-close-project]').focus();
  };

  const closeProject = () => {
    projectModal.classList.add('hidden');
    projectModal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
    lastFocusedElement?.focus();
  };

  window.addEventListener('scroll', setHeaderState, { passive: true });
  setHeaderState();

  menuToggle.addEventListener('click', () => {
    setMenuOpen(mobileMenu.classList.contains('hidden'));
  });

  document.querySelectorAll('[data-close-menu]').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  openProjectButton.addEventListener('click', openProject);
  projectCloseButtons.forEach((button) => button.addEventListener('click', closeProject));

  projectModal.addEventListener('click', (event) => {
    if (event.target === projectModal) closeProject();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (!projectModal.classList.contains('hidden')) closeProject();
      else setMenuOpen(false);
    }
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
