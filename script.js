function buyButtonClick(button) {
  var overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  document.body.classList.add('darken');

  setTimeout(function() {
    document.body.classList.remove('darken');
    overlay.remove();

    button.classList.add('clicked');
    button.innerHTML = 'Куплено';
    button.onclick = null;
  }, 2000);
}