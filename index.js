const btn = document.getElementById('btn');

// ✅ Toggle button text on click
btn.addEventListener('click', function handleClick() {
  const initialText = 'Click me';

  if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn.textContent = 'Button clicked';
  } else {
    btn.textContent = initialText;
  }
});