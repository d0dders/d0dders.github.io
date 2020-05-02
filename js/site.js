// Scroll Spy
$('body').scrollspy({ target: '#navbar' , offset: 100});

//AWWW SNAP!!
$(".avatar").click(function(){
    $(".avatar").fadeOut();
});


// MAGIC SPARKLES
$('#hp-game').sparkle({
  color: "rainbow",
  count: 50,
  overlap: 0,
  speed: 2,
  minSize: 7,
  maxSize: 10,
  direction: "both"
}).trigger("start.sparkle").off("mouseover.sparkle")
.off("mouseout.sparkle")
.off("focus.sparkle")
.off("blur.sparkle");

