const mobileMenu = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false; // Variable para rastrear si el menú está abierto

// Alterna el menú al hacer clic en el icono de menú
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuOpen = !menuOpen; // Cambia el estado de si el menú está abierto o no
});

// Cierra el menú al hacer scroll hacia abajo
window.addEventListener('scroll', () => {
    if (menuOpen && window.scrollY > 0) { // Si el menú está abierto y el usuario hace scroll
        navLinks.classList.remove('active'); // Cierra el menú
        menuOpen = false; // Actualiza el estado del menú a cerrado
    }
});

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const totalSlides = slides.length;
const interval = 4000; // 3 segundos

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });
}

function moveToNextSlide() {
    currentIndex++;
    if (currentIndex === totalSlides) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

function moveToPrevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    showSlide(currentIndex);
}

document.querySelector('.next').addEventListener('click', moveToNextSlide);
document.querySelector('.prev').addEventListener('click', moveToPrevSlide);

setInterval(moveToNextSlide, interval);


// Obtiene los elementos
var modal = document.getElementById("myModal");
var img = document.getElementById("myImage");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Cuando se hace clic en la imagen, se muestra el modal
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt; // Muestra el texto alternativo como título
}

// Cuando se hace clic en el botón de cerrar, se oculta el modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

// Cierra el modal si se hace clic fuera de la imagen
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}



  // Obtener el video
  const video = document.getElementById('miVideo');

  // Función para controlar la reproducción del video según el scroll
  function controlVideo() {
      const rect = video.getBoundingClientRect();
      const inViewport = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);

      if (inViewport) {
          video.play();
      } else {
          video.pause();
          video.currentTime = 0; // Reinicia el video si lo deseas
      }
  }

  // Escuchar el evento de scroll
  window.addEventListener('scroll', controlVideo);
  // Verifica la posición del video al cargar la página
  controlVideo();


