document.addEventListener('DOMContentLoaded', function () {
  try {
    var fc = document.querySelector('.franklin-content');
    if (!fc) return;
    var h1 = fc.querySelector('h1');
    if (h1) h1.remove();
  } catch (e) {
    console.error('remove-title.js error', e);
  }
});
