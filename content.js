function curtir(btn) {
  const card = btn.closest('.card');
  const title = card.querySelector('h2').innerText;
  localStorage.setItem(title, 'like');
  updateButtons(card, 'like');
  adicionarFavorito(card, title);
}

function descurtir(btn) {
  const card = btn.closest('.card');
  const title = card.querySelector('h2').innerText;
  localStorage.setItem(title, 'dislike');
  updateButtons(card, 'dislike');
}

function updateButtons(card, action) {
  const buttons = card.querySelectorAll('button');
  buttons.forEach(b => b.classList.remove('active', 'like', 'dislike'));
  const selected = action === 'like' ? buttons[0] : buttons[1];
  selected.classList.add('active', action);
}

function adicionarFavorito(card, title) {
  const container = document.getElementById('favoritosContainer');
  if (container && !document.getElementById('fav-' + title)) {
    const clone = card.cloneNode(true);
    clone.id = 'fav-' + title;
    container.appendChild(clone);
  }
}

function scrollCarousel(id, direction) {
  const container = document.getElementById(id);
  container.scrollLeft += direction * 300;
}

function enviarMensagem() {
  alert("Mensagem enviada! Entraremos em contato em breve.");
}

window.onload = () => {
  document.querySelectorAll('.card').forEach(card => {
    const title = card.querySelector('h2').innerText;
    const saved = localStorage.getItem(title);
    if (saved) {
      updateButtons(card, saved);
      if (saved === 'like') adicionarFavorito(card, title);
    }
  });
};