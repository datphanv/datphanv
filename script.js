// Theme persistence
(function () {
  try {
    var stored = localStorage.getItem("theme");
    if (!stored) {
      var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      stored = prefersDark ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', stored);
  } catch (_) {}
})();

// Update year
var yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Theme toggle
var themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', function () {
    var current = document.documentElement.getAttribute('data-theme') || 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (_) {}
  });
}

// Mobile menu toggle
var menuToggle = document.getElementById('menu-toggle');
var nav = document.getElementById('primary-nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  // Close on link click (mobile)
  nav.addEventListener('click', function (e) {
    var t = e.target;
    if (t && t.tagName === 'A' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

