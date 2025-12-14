(function () {
  const buttons = document.querySelectorAll("[data-lang]");
  if (!buttons.length) return;

  const baseurl = window.__BASEURL__ || "";

  function normalize(path) {
    if (baseurl && !path.startsWith(baseurl)) return baseurl + path;
    return path;
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.lang;
      const p = location.pathname;

      let local = baseurl && p.startsWith(baseurl) ? p.slice(baseurl.length) : p;

      local = local.replace(/^\/(de|en|hr)(\/|$)/, `/${target}/`);

      if (!/^\/(de|en|hr)(\/|$)/.test(local)) local = `/${target}/`;

      if (!local.endsWith("/")) local += "/";

      location.pathname = normalize(local);
    });
  });
})();
