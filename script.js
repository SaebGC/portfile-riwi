// Restore saved theme immediately (before DOM loads to avoid flash)
const saved = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', saved);

// Sync checkbox state on load
document.addEventListener('DOMContentLoaded', function () { // wait for DOM to be ready
  const checkbox = document.getElementById('checkbox'); // get theme toggle checkbox
  if (checkbox) {
    checkbox.checked = saved === 'light'; // checked = light mode
    checkbox.addEventListener('change', function () { // on toggle
      const next = this.checked ? 'light' : 'dark'; // determine next theme
      document.documentElement.setAttribute('data-theme', next); // apply theme
      localStorage.setItem('theme', next); // save preference
    });
  }
});

// Handle contact form submission
  document.getElementById('contactForm').addEventListener('submit', function (e) { // form submission event
  e.preventDefault(); // prevent actual form submission
  alert('Your message has been sent!'); // visible on screen
});


window.toggleMenu = function() { // toggle menu visibility on small screens
  const menu = document.getElementById('nav-menu'); // get menu element
  if (!menu) return; // safety check
  menu.classList.toggle('open'); // toggle 'open' class to show/hide menu
};