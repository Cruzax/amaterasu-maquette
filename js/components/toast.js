/* Petite notification en bas de l'écran */
function toast(text) {
  const el = document.getElementById('toast');
  el.textContent = text;
  el.classList.add('on');
  clearTimeout(el._timer);
  el._timer = setTimeout(() => el.classList.remove('on'), 2200);
}
