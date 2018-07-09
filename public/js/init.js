(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.modal').modal();
    $('.scrollspy').scrollSpy();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// Init particle

var canvasDiv = document.getElementById('particle-canvas');
var options = {
    particleColor: '#ffffff',
    background: 'public/img/background01.jpg',
    interactive: true,
    speed: 'medium',
    density: 'high'
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);