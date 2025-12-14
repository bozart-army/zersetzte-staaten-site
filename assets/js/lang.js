document.querySelectorAll('[data-lang]').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.lang;
    const path = location.pathname.replace(/^\/(de|en|hr)\//, `/${target}/`);
    location.pathname = path || `/${target}/`;
  });
});
