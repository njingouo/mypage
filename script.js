/* ══════════════════════════════════════════════════════════
   Site académique — Aoudou Njingouo Mounchingam
   Langue (FR/EN) · thème clair-sombre · menu mobile · filtres
   ══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var root = document.documentElement;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* mode privé */ } }
  };

  /* ── 1. Langue ─────────────────────────────────────────── */
  var langBtns = document.querySelectorAll('[data-setlang]');

  function setLang(lang) {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang);
    langBtns.forEach(function (b) {
      var on = b.dataset.setlang === lang;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', String(on));
    });
    store.set('lang', lang);
  }

  // Priorité : choix mémorisé > langue du navigateur > français
  var savedLang = store.get('lang');
  if (!savedLang) {
    savedLang = (navigator.language || 'fr').toLowerCase().indexOf('en') === 0 ? 'en' : 'fr';
  }
  setLang(savedLang);

  langBtns.forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.setlang); });
  });

  /* ── 2. Thème clair / sombre ───────────────────────────── */
  var themeBtn = document.getElementById('theme');
  var savedTheme = store.get('theme');
  if (savedTheme) root.setAttribute('data-theme', savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var current = root.getAttribute('data-theme') || (systemDark ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      store.set('theme', next);
    });
  }

  /* ── 3. Menu mobile ────────────────────────────────────── */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');

  function closeMenu() {
    if (!menu) return;
    menu.classList.remove('is-open');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  }

  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 820) closeMenu();
    });
  }

  /* ── 4. Filtres de publications ────────────────────────── */
  var filterBtns = document.querySelectorAll('[data-filter]');
  var pubs = document.querySelectorAll('.pub');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.dataset.filter;
      filterBtns.forEach(function (b) {
        b.classList.toggle('is-on', b === btn);
        b.setAttribute('aria-selected', String(b === btn));
      });
      pubs.forEach(function (p) {
        p.classList.toggle('is-hidden', f !== 'all' && p.dataset.type !== f);
      });
    });
  });

  /* ── 5. Lien de navigation actif au défilement ─────────── */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav__menu > a[href^="#"]');

  if ('IntersectionObserver' in window && sections.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (s) { io.observe(s); });
  }

  /* ── 6. Année courante dans le pied de page ────────────── */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
