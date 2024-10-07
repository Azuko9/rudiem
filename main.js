

$(document).ready(function () {
  $(".tilt").tilt({
    maxTilt: 25,
    perspective: 1000,
    speed: 400,
    transition: true,
  });
});



if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', function(event) {
    const { gamma, beta } = event; // gamma: gauche-droite, beta: haut-bas
    // Appliquez l'effet similaire à Tilt.js en fonction de ces valeurs
    const element = document.querySelector('.tilt');
    element.style.transform = `rotateY(${gamma*0.25}deg) rotateX(${beta*0.25}deg)`;
  });
} else {
  $('.tilt').tilt(); // Active Tilt.js pour desktop
}

  