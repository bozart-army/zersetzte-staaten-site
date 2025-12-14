(function () {
  const buttons = document.querySelectorAll("[data-lang]");
  if (!buttons.length) return;

  const baseurl = "{{ site.baseurl }}"; // wird von Jekyll ersetzt (z.B. /zersetzte-staaten-site)

  function normalize(path) {
    // sorgt dafür, dass baseurl korrekt vorne steht
    if (baseurl && !path.startsWith(baseurl)) return baseurl + path;
    return path;
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.lang;
      const p = location.pathname;

      // Entferne baseurl am Anfang (falls vorhanden)
      let local = baseurl && p.startsWith(baseurl) ? p.slice(baseurl.length) : p;

      // Ersetze /de/ /en/ /hr/ am Anfang durch Ziel
      local = local.replace(/^\/(de|en|hr)(\/|$)/, `/${target}/`);

      // Falls keine Sprache drin war, setze sie
      if (!/^\/(de|en|hr)(\/|$)/.test(local)) local = `/${target}/`;

      // Fallback: immer slash am Ende für Jekyll-Ordnerseiten
      if (!local.endsWith("/")) local += "/";

      location.pathname = normalize(local);
    });
  });
})();
