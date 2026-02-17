const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const navPanel = document.getElementById('navPanel');

if(openBtn) {
  openBtn.addEventListener('click', () => navPanel.classList.add('open'));
}
if(closeBtn) {
  closeBtn.addEventListener('click', () => navPanel.classList.remove('open'));
}
