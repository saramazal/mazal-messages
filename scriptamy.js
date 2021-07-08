window.onload = function() {
    Particles.init({
      selector: '.background'
    });
  };

var particles = Particles.init({
    selector: ".background",
    color: ["#ffffff", "#26c8c8", "#e15f5f"],
   connectParticles: true,
  responsive: [
    {
      breakpoint: 375,
      options: {
        color: "#ffffff",
        maxParticles: 43,
        connectParticles: false
      }
    }
  ]
});
 
