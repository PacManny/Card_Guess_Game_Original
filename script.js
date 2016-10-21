
$(document).ready(function() {
    var clickCount = 0;
  $("img").click(function(event) {
    clickCount++;
    var id = event.target.id
    var planet = document.getElementById(id);
    if (id === 'earth2' || id === 'earth1') {
      planet.src = "img/earth.jpg";
      if ($('#earth2').attr('src') === "img/earth.jpg" && $('#earth1').attr('src') === "img/earth.jpg") {
        $(".cards #earth1").fadeOut(2000);
        $(".cards #earth2").fadeOut(2000);
      }
    } else if (id === 'mars1' || id === 'mars2') {
      planet.src = "img/mars.jpg";
      if ($('#mars1').attr('src') === "img/mars.jpg" && $('#mars2').attr('src') === "img/mars.jpg") {
        $(".cards #mars1").fadeOut(2000);
        $(".cards #mars2").fadeOut(2000);
      }  
    } else if (id === 'sun1' || id === 'sun2') {
      planet.src = "img/sun.jpg";
      if ($('#sun2').attr('src') === "img/sun.jpg" && $('#sun1').attr('src') === "img/sun.jpg") {
        $(".cards #sun1").fadeOut(2000);
        $(".cards #sun2").fadeOut(2000);
      } 
    } else if (id === 'jup1' || id === 'jup2') {
      planet.src = "img/jupiter.gif";
      if ($('#jup2').attr('src') === "img/jupiter.gif" && $('#jup1').attr('src') === "img/jupiter.gif") {
        $(".cards #jup1").fadeOut(2000);
        $(".cards #jup2").fadeOut(2000);
      } 
    }
    function tmr() {
    if (clickCount >= 2) {
        planet.src = 'img/Cover.gif';
        $('img').attr('src', 'img/Cover.gif')
}
clickCount = 0;
    } setTimeout(tmr, 3000)

  });
});


