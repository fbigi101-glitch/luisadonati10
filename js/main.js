// Logo: stretch "Italy as an Italian" to exactly the width of "Luisa Donati".
function fitLogo() {
  document.querySelectorAll('.logo').forEach(function (logo) {
    var name = logo.querySelector('.logo-name');
    var tag = logo.querySelector('.logo-tag');
    if (!name || !tag) return;
    tag.style.letterSpacing = '0px';
    tag.style.marginRight = '0px';
    var chars = tag.textContent.length;
    var spacing = (name.getBoundingClientRect().width - tag.getBoundingClientRect().width) / chars;
    tag.style.letterSpacing = spacing + 'px';
    // letter-spacing also adds space after the last letter: remove it so both lines end together
    tag.style.marginRight = (-spacing) + 'px';
  });
}
fitLogo();
if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitLogo);
window.addEventListener('resize', fitLogo);

// Mobile menu: open and close with the "Menu" button.
var toggle = document.querySelector('.menu-toggle');
var nav = document.getElementById('site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.textContent = open ? 'Close' : 'Menu';
  });
}

// Forms are not connected yet (see README). Until a form gets a real
// action="..." address, show a friendly message instead of reloading the page.
document.querySelectorAll('form').forEach(function (form) {
  if (form.getAttribute('action')) return;
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you! This form is not connected yet.');
  });
});

// Journal topic filters: highlight the selected button.
document.querySelectorAll('[role="group"] button').forEach(function (button, _, all) {
  button.addEventListener('click', function () {
    all.forEach(function (b) {
      b.style.background = 'transparent';
      b.style.color = '#1A1A1A';
    });
    button.style.background = '#1A1A1A';
    button.style.color = '#FFFFFF';
  });
});
