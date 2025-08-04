document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkModeToggle');
  const isDark = localStorage.getItem('theme') === 'dark';

  // Apply saved theme on page load
  if (isDark) {
    document.body.classList.add('dark');
    toggle.checked = true;
  }

  // Listen for toggle change
  toggle.addEventListener('change', function () {
    if (toggle.checked) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  });
});
