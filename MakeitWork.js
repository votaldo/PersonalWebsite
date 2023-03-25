const toggleButtons = document.querySelectorAll('.mode-toggle button');

function toggleMode() {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      body.style.setProperty('--bg-color', 'var(--bg-color-light)');
      body.style.setProperty('--text-color', 'var(--text-color-light)');
    } else {
      body.classList.add('dark-mode');
      body.style.setProperty('--bg-color', 'var(--bg-color-dark)');
      body.style.setProperty('--text-color', 'var(--text-color-dark)');
    }
  }
  

const modeToggle = document.querySelector('.mode-toggle');
modeToggle.addEventListener('click', toggleMode);

/*
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'light-mode') {
      setTheme('light');
    } else if (button.id === 'dark-mode') {
      setTheme('dark');
    }
  });
});
 */