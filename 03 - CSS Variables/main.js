const spacingBar = document.getElementById('spacingBar');
const blurBar = document.getElementById('blurBar');
const colorBar = document.getElementById('colorBar');

spacingBar.addEventListener('input', e => {
  const value = e.target.value + 'px';
  document.documentElement.style.setProperty(`--spacing`, value);
});

blurBar.addEventListener('input', e => {
  const value = e.target.value + 'px';
  document.documentElement.style.setProperty(`--blur`, value);
});

colorBar.addEventListener('change', e => {
  const value = e.target.value;
  document.documentElement.style.setProperty(`--color`, value);
});