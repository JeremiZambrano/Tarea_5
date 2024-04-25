document.getElementById('clientForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario
  
    // Aquí puedes agregar tu lógica de validación o envío de datos
    // Por ejemplo, puedes obtener los valores de los campos así:
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value;
    var date = document.getElementById('date_control').value 
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
  
    // Luego puedes procesar estos valores como desees, como enviarlos a un servidor
  
    // Por ahora, solo mostraremos los valores en la consola
    console.log('Nombre:', name);
    console.log('Apellidos:', lastName);
    console.log('Nacimiento', date_control)
    console.log('Dirección:', address);
    console.log('Email:', email);
    console.log('Teléfono:', phone);
  
    // Aquí puedes agregar la lógica para enviar los datos a un servidor mediante AJAX, fetch, etc.
  });

