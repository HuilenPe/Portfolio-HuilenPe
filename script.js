//ROTACION
const open = document.getElementById('open');
const close = document.getElementById('close');

const container = document.querySelector('.container');

open.addEventListener('click', () => container.classList.add('show-nav'));
close.addEventListener('click', () => container.classList.remove('show-nav'));


// CARTA
const cards =
    document.querySelectorAll('.card');
cards.forEach((card) => {
    card.addEventListener('click', () => {
        removerClasesActivas();
        // Al hacer clic, se agregará la clase "active" a la card
        card.classList.add('active');
    });
});

// Función para quitar la clase "active"
function removerClasesActivas() {
    cards.forEach((card) => {
        card.classList.remove('active');
    });
}

//Detalle de proyecto
function mostrarDetallesProyecto(projectNumber) {
    // Puedes usar el número del proyecto para cargar los detalles correspondientes
    const projectDetailsContainer = document.getElementById('project-details-container');
    const projectDetailsTitle = document.getElementById('project-details-title');

    // Ejemplo: Cambia el título según el número del proyecto
    projectDetailsTitle.textContent = `Detalles del Proyecto ${projectNumber}`;

    // Puedes agregar más contenido dinámico según tus necesidades

    // Muestra la sección de detalles del proyecto
    projectDetailsContainer.style.display = 'block';
}

//boton volver atrás
function goBack() {
    window.history.back();
}