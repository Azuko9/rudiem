

$(document).ready(function () {
  $(".tilt").tilt({
    maxTilt: 20,
    perspective: 1000,
    speed: 400,
    transition: true,
  });
});



VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 25,
  speed: 400,
  gyroscope: true // Activer le gyroscope sur mobile
});





if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", handleOrientation, true);
  } else {
    console.log("Gyroscope not supported");
  }
  
  function handleOrientation(event) {
    const tiltX = event.beta;  // Inclinaison avant-arrière (rotation autour de l'axe X)
    const tiltY = event.gamma; // Inclinaison gauche-droite (rotation autour de l'axe Y)
  
    // Appliquez les valeurs à un élément manipulé par Tilt.js
    applyGyroToTilt(tiltX, tiltY);
  }
  
  function applyGyroToTilt(tiltX, tiltY) {
    // Sélectionnez l'élément que vous manipulez avec Tilt.js
    const tiltElement = document.querySelector('.js-tilt');
  
    // Simulez les mouvements comme s'il s'agissait de mouvements de la souris
    // Tilt.js s'attend à des valeurs `event.clientX` et `event.clientY`
    const fakeEvent = {
      clientX: tiltY + window.innerWidth / 2, // Simule la rotation gauche-droite
      clientY: tiltX + window.innerHeight / 2, // Simule la rotation avant-arrière
    };
  
    // Utilisez l'API interne de Tilt.js pour déclencher les animations
    tiltElement.vanillaTilt.onMouseMove(fakeEvent);
  }
  