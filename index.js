const btn = document.getElementById('btn');

// ✅ Change button text on click
btn.addEventListener('click', function handleClick() {
  

  btn.innerHTML = `<span style="background-color: grey">Can't wait to talk &#128513<span>`;
});
