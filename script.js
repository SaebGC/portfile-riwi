function toggleTheme() { // this makes the button work, toggling between light and dark themes and saving the choice
  const current = document.documentElement.getAttribute('data-theme'); // get current theme
  const next = current === 'light' ? 'dark' : 'light'; // determine next theme
  document.documentElement.setAttribute('data-theme', next); // apply next theme
  localStorage.setItem('theme', next); // save choice in localStorage
  updateButton(next); // update button text
}

function updateButton(theme) { // update the toggle button text based on current theme
  const btn = document.getElementById('theme-toggle'); // get the button element
  if (!btn) return; // safety check in case button is missing
  btn.textContent = theme === 'light' ? '☾ Dark' : '☀ Light'; // set text to indicate the opposite theme
}

// Restore saved theme on load
const saved = localStorage.getItem('theme') || 'dark'; // default to dark if no saved theme
document.documentElement.setAttribute('data-theme', saved); // apply saved theme
updateButton(saved); // update button text on load