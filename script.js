// ==== MENÚ ACTIVO ====
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// ==== MENÚ DESPLEGABLE EN MÓVILES ====
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// ==== TIPS DEL DÍA ====
const tips = [
  "Bebe al menos 2 litros de agua al día.",
  "Realiza estiramientos cada mañana.",
  "Evita el exceso de cafeína.",
  "Tómate 10 minutos diarios para meditar.",
  "Agradece algo cada día."
];
function mostrarTipAleatorio() {
  const tip = tips[Math.floor(Math.random() * tips.length)];
  const contenedor = document.getElementById("tips-grid");
  if (contenedor) contenedor.innerHTML = `<div class="card">🌟 ${tip}</div>`;
}
window.onload = mostrarTipAleatorio;

// ==== PERFIL LOCALSTORAGE (GUARDAR, EDITAR, BORRAR) ====
const formPerfil = document.querySelector("#perfil form");
const editarBtn = document.getElementById("editarPerfil");
const borrarBtn = document.getElementById("borrarPerfil");

function cargarPerfil() {
  const perfil = JSON.parse(localStorage.getItem("perfil"));
  if (perfil) {
    document.getElementById("nombre").value = perfil.nombre || "";
    document.getElementById("intereses").value = perfil.intereses || "";
  }
}

if (formPerfil) {
  formPerfil.addEventListener("submit", e => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const intereses = document.getElementById("intereses").value;
    localStorage.setItem("perfil", JSON.stringify({ nombre, intereses }));
    alert("✅ Perfil guardado con éxito");
  });
}

if (editarBtn) {
  editarBtn.addEventListener("click", () => {
    alert("✏️ Ahora puedes editar tus datos y volver a guardarlos.");
    document.getElementById("nombre").focus();
  });
}

if (borrarBtn) {
  borrarBtn.addEventListener("click", () => {
    localStorage.removeItem("perfil");
    formPerfil.reset();
    alert("🗑️ Perfil eliminado.");
  });
}

window.addEventListener("load", cargarPerfil);

// ==== VALIDACIÓN DE FORMULARIOS ====
const regForm = document.getElementById("registerForm");
const logForm = document.getElementById("loginForm");

if (regForm) {
  regForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Registro exitoso ✅ Bienvenido a Salud Integral");
  });
}

if (logForm) {
  logForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Inicio de sesión correcto 🔑");
  });
}

// ==== CORRECCIÓN: “LEER MÁS” EN ARTÍCULOS ====
const botonesLeerMas = document.querySelectorAll(".leer-mas");
botonesLeerMas.forEach(boton => {
  boton.addEventListener("click", e => {
    e.preventDefault();
    const articulo = boton.dataset.articulo;
    alert(`📖 Abriendo el artículo completo sobre ${articulo}.`);
  });
});

// ==== CARRUSEL ====
let index = 0;
const images = document.querySelectorAll('.carousel img');
function nextSlide() {
  index = (index + 1) % images.length;
  document.querySelector('.carousel').style.transform = `translateX(-${index * 100}%)`;
}
setInterval(nextSlide, 4000);

// ==== ANIMACIÓN DE ENTRADA PARA VIDEOS ====
const videoCards = document.querySelectorAll(".video-card");
function mostrarVideos() {
  videoCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
}
window.addEventListener("scroll", mostrarVideos);
window.addEventListener("load", mostrarVideos);

