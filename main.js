import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

window.kepkeretAdatok = function () {
  const a1 = document.getElementById('a1').value;
  const a2 = document.getElementById('a2').value;
  const a3 = document.getElementById('a3').value;
  const a4 = document.getElementById('a4').value;

  const kep = document.getElementById('kep');
  const kepKeret = document.getElementById('kepKeret');

  kep.src = a1;

  if (a2) {
    kep.style.width = a2 + 'px';
  }

  if (a3) {
    kepKeret.style.border = `${a3}px solid ${a4}`
  } else {
    kepKeret.style.border = 'none';
  }
};

document.getElementById('temaButton').onclick = function () {
  document.body.classList.toggle('dark-mode');
};

document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('a1').addEventListener('input', kepkeretAdatok);
  document.getElementById('a2').addEventListener('input', kepkeretAdatok);
  document.getElementById('a3').addEventListener('input', kepkeretAdatok);
  document.getElementById('a4').addEventListener('input', kepkeretAdatok);

});
