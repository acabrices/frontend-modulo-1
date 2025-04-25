$(document).ready(function() {
    // Agregar botón para eliminar tareas existenes
    $("li").append('<span class="close">\u00D7</span>');
  
    // Botón Eliminar
    $(document).on("click", ".close", function(e) {
      e.stopPropagation();
      $(this).parent().fadeOut(200, function() {
        $(this).remove();
      });
    });
  
    // Activa o desactiva tarea al darle Clic
    $("#myUL").on("click", "li", function() {
      $(this).toggleClass("checked");
    });
  
    // Agrega nueva tarea al darle clic al botón añadir
    $(".addBtn").click(function() {
      addNewItem();
    });
  
    // Agrega nueva tarea al darle al botón Enter en el teclado
    $("#myInput").keypress(function(e) {
      if (e.which === 13) {
        addNewItem();
      }
    });
  
    // Función de ayuda indica al usuario que no puede dejar el registro en blanco
    function addNewItem() {
      var inputValue = $("#myInput").val().trim();
      if (inputValue === "") {
        alert("Por favor agregue una nueva tarea");
      } else {
        var newItem = $("<li></li>").text(inputValue);
        newItem.append('<span class="close">\u00D7</span>');
        $("#myUL").append(newItem);
        $("#myInput").val("");
      }
    }
  });