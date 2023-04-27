// Esperar a que el DOM se cargue antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    // Obtener referencia al elemento select en el HTML
    const tipoParte = document.querySelector('select[name="tipoParte"]');
  
    // Obtener referencia al elemento en el HTML que quieres cambiar
    const elementoACambiar = document.querySelector('#elementoACambiar');
  
    // Verificar si ambos elementos existen antes de agregar el evento
    if (tipoParte && elementoACambiar) {
      // Agregar un evento de cambio al select
      tipoParte.addEventListener('change', () => {
        // Obtener el valor seleccionado
        const selectedValue = tipoParte.value;
  
        // Cambiar el contenido del elemento según el valor seleccionado
        if (selectedValue === 'v1') {
          elementoACambiar.innerHTML = '¿Qué tipo de electrodoméstico se ha dañado?<br>' +
          '<input type="text" id="electrodomesticos" name="electrodomesticos" value = "Escriba aquí"><br>' +
          '¿Ha sido causado por un incendio o por alta tensión eléctrica?<br><br>' +
          '<input type="radio" id="v-si" name="sel" value="si"><label id="l">Sí</label><br><br>' +
          '<input type="radio" id="v-no" name="sel" value="no"><label id="l2">No</label><br><br>' +
          'Indique superficie dañada (m2)<br>' +
          '<input type="text" id="met2" name="m2" value = "Escriba aquí"><br>' +
          '¿Cuál es el material del objeto?<br>' +
          '<input type="text" id="superficie" name="superficie" value = "Escriba aquí"><br>';
        } else if (selectedValue === 'v2') {
          elementoACambiar.innerHTML = '¿Qué tipo de electrodoméstico se ha dañado?<br>' +
          '<input type="text" id="electrodomesticos" name="electrodomesticos" value = "Escriba aquí"><br>' +
          '¿Ha sido causado por un incendio o por alta tensión eléctrica?<br><br>' +
          '<input type="radio" id="v-si" name="sel" value="si"><label id="l">Sí</label><br><br>' +
          '<input type="radio" id="v-no" name="sel" value="no"><label id="l2">No</label><br><br>' +
          '¿Indique superficie dañada (m2)?<br>' +
          '<input type="text" id="met2" name="m2" value = "Escriba aquí"><br>' +
          '¿Cuál es el material del objeto?<br>' +
          '<input type="text" id="superficie" name="superficie" value = "Escriba aquí"><br>'+
          'Indique el peso aproximado del objeto<br>' +
          '<input type="text" id="superficie" name="superficie" value = "Escriba aquí"><br>';
        } else if (selectedValue === 'v3') {
          elementoACambiar.innerHTML = '¿Cuántas habitaciones se han dañado?<br>' +
          '<input type="number" id="electrodomesticos" name="electrodomesticos" value = "Escriba aquí"><br>' +
          '¿Ha sido causado por un incendio o por alta tensión eléctrica?<br><br>' +
          '<input type="radio" id="v-si" name="sel" value="si"><label id="l">Sí</label><br><br>' +
          '<input type="radio" id="v-no" name="sel" value="no"><label id="l2">No</label><br><br>' +
          '¿Indique superficie dañada (m2)?<br>' +
          '<input type="text" id="met2" name="m2" value = "Escriba aquí"><br>' +
          'Nombre los objetos dañados separados por coma<br>' +
          '<input type="text" id="superficie" name="superficie" value = "Escriba aquí"><br>';
        } else if (selectedValue === 'v4') {
          elementoACambiar.innerHTML = '¿Cuántos baños se han dañado?<br>' +
          '<input type="number" id="electrodomesticos" name="electrodomesticos" value = "Escriba aquí"><br>' +
          '¿Ha sido causado por una inundación?<br><br>' +
          '<input type="radio" id="v-si" name="sel" value="si"><label id="l">Sí</label><br><br>' +
          '<input type="radio" id="v-no" name="sel" value="no"><label id="l2">No</label><br><br>' +
          '¿Indique superficie dañada (m2)?<br>' +
          '<input type="text" id="met2" name="m2" value = "Escriba aquí"><br>' +
          'Nombre otras zonas de la vivienda si hubieran sido dañadas<br>' +
          '<input type="text" id="superficie" name="superficie" value = "Escriba aquí"><br>';
        } else if (selectedValue === 'v5') {
          elementoACambiar.innerHTML = '¿Ha sido dañado algún vehículo?<br><br>' +
          '<input type="radio" id="v-si" name="sel" value="si"><label id="l">Sí</label><br><br>' +
          '<input type="radio" id="v-no" name="sel" value="no"><label id="l2">No</label><br><br>' +
          '¿Cuántas vehículos se han dañado?<br>' +
          '<input type="number" id="electrodomesticos" name="electrodomesticos" value = "Escriba aquí"><br>' +
          'Describa brevement el daño causado<br>' +
          '<input type="text" id="met2" name="m2" value = "Escriba aquí"><br>' +
          'Nombre algún objeto más que haya sido dañado (si lo hubiese)<br>' +
          '<input type="text" id="superficie" name="superficie" value = "Escriba aquí"><br>';
        } else if (selectedValue === "v0"){
          elementoACambiar.innerHTML = '';
        } else {
          elementoACambiar.innerHTML = 'En el caso de a ver seleccionado otro tipo de parte, por favor, indíquenoslo en el siguiente campo de texto indicándo el asunto previamente.<br>';
        }
      });
    } else {
      console.error('El elemento select[name="tipoParte"] o #elementoACambiar no existe en el DOM');
    }
  });