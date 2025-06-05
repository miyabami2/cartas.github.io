<script>
 // Espera a que el formulario intente enviarse
 document.getElementById('formulario-imagen').addEventListener('submit', function (e) {
   const archivo = document.getElementById('imagen').files[0]; // obtiene el archivo seleccionado
   const nombre = document.querySelector('input[name="Nombre"]'); // campo de nombre
   const email = document.querySelector('input[name="Email"]');   // campo de correo
   const mensajeError = document.getElementById('error-mensaje');
 
   // Limpiamos el mensaje previo
   mensajeError.textContent = "";
  
  // Validar nombre (que no esté vacío)
  if (!nombre.value.trim()) {
    e.preventDefault();
    mensajeError.textContent = "⚠️ Por favor, escribe tu nombre.";
    return;
   }
  // Validar email con formato básico
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email.value)) {
    e.preventDefault();
    mensajeError.textContent = "⚠️ Escribe un correo electrónico válido.";
    return;
  }
   // Validar tamaño (menos de 4 MB)
   if (archivo.size > 4 * 1024 * 1024) {
     e.preventDefault(); // detenemos el envío
     mensajeError.textContent = "⚠️ La imagen no debe superar los 4 MB.";
     return;
   }
 
   // Validar tipo de archivo (solo imágenes)
   const tiposPermitidos = ['image/jpeg', 'image/png', 'image/gif'];
   if (!tiposPermitidos.includes(archivo.type)) {
     e.preventDefault();
     mensajeError.textContent = "⚠️ Solo se permiten imágenes JPG, PNG o GIF.";
     return;
   }
 });
</script>
