let currentImageIndex = 0;
let images = [];

function filterImages(category) {
  const allImages = document.querySelectorAll('.gallery img');
  allImages.forEach(img => {
    img.style.display = (category === 'all' || img.classList.contains(category)) ? 'block' : 'none';
  });
  images = Array.from(document.querySelectorAll('.gallery img')).filter(img => img.style.display !== 'none');
}

function openLightbox(img) {
  images = Array.from(document.querySelectorAll('.gallery img')).filter(img => img.style.display !== 'none');
  currentImageIndex = images.indexOf(img);
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function nextImage(event) {
  event.stopPropagation();
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById('lightbox-img').src = images[currentImageIndex].src;
}

function prevImage(event) {
  event.stopPropagation();
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  document.getElementById('lightbox-img').src = images[currentImageIndex].src;
}
