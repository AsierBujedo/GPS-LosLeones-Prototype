$(document).ready(function() {

    var back = $(".prev");
    var next = $(".next");
    var steps = $(".step");
    var texts = ["La solicitud se encuentra en trámite.", "La solicitud se ha tramitado correctamente y se encuentra ahora abierta.", "Se ha asignado un técnico a la solicitud.", "El perito se encuentra evaluando la situación en este momento.","El perito ha evaluado su solicitud y está siendo procesada.", "Su solicitud se ha resuelto, encontrará la resolución en su bandeja de entrada."];
  
    next.bind("click", function() {
      $.each(steps, function(i) {
        if (!$(steps[i]).hasClass('current') && !$(steps[i]).hasClass('done')) {
          $(steps[i]).addClass('current');
          $(steps[i - 1]).removeClass('current').addClass('done');
          $("#text").text(texts[i]);
          return false;
        }
      })
    });
    back.bind("click", function() {
      $.each(steps, function(i) {
        if ($(steps[i]).hasClass('done') && $(steps[i + 1]).hasClass('current')) {
          $(steps[i + 1]).removeClass('current');
          $(steps[i]).removeClass('done').addClass('current');
          $("#text").text(texts[i]);
          return false;
        }
      })
    });
    
  })