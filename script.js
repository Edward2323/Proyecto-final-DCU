function agregarFila() {

    const tabla = document.getElementById('miTabla');
    const tbody = tabla.querySelector('tbody');


    const nuevaFila = document.createElement('tr');

    for (let i = 1; i <= 3; i++) {
      const nuevaCelda = document.createElement('td');
      nuevaCelda.textContent = `Nuevo Dato ${i}`; // Contenido de la celda
      nuevaFila.appendChild(nuevaCelda); // Agregar celda a la fila
    }


    tbody.appendChild(nuevaFila);
  }