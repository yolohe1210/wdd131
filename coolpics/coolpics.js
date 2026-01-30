const photos = document.querySelector('.photos');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

photos.addEventListener('click', openModal);

function viewerTemplate(pic, alt) {
  return `<button class="close-viewer">X</button>
          <img src="${pic}" alt="${alt}">`;
}

function openModal(e) {
    if (e.target.tagName !== 'IMG') return;

    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const fullSource = src.replace('.jpg', '-full.jpg');
    modal.innerHTML = viewerTemplate(fullSource, alt);
    modal.showModal();
    modal.querySelector('.close-viewer').addEventListener('click', () => {
        modal.close();
    });
}

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.open) {
        modal.close();
    }
});

menuButton.addEventListener('click', () => {
    menu.classList.toggle('open'); 
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 1000) {
        if (menu.classList.contains("open")) {
            menu.classList.remove("open");
        }
    }
});