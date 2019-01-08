document.addEventListener('DOMContentLoaded', function () {
  //// Start Home
  //// Start Slider
  // Variables
  let miCarrousel = document.querySelector('#carrousel');
  let sliderImg = ['img/slider1.jpg', 'img/slider2.jpg', 'img/slider3.jpg']
  let numSlider = 0;
  // Functions
  // Hacemos que cada 4 segundos y medio cambie la imagen de fondo creando un bucle
  function slider() {
    setInterval(function () {
      numSlider ++;
      if(numSlider == 3) {
        numSlider = 0;
      };
      miCarrousel.style.backgroundImage = `url(${sliderImg[numSlider]})`;
    },4500)
  }
  // Events
  slider();
  //// End Slider
  //// Start Scroll
  // Variables
  let navbar = document.querySelector('#navbar')
  let prevScrollpos = window.pageYOffset;
  // Hacemos que cada vez que se haga scroll se llame a la funcion
  window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
    // Si hacemos scroll hacia abajo se muestra el menu y sino se esconde
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-75px";
    }
    // Hacemos que el bg del menu sea blanco cuando pase de 150 px de scroll
    if (currentScrollPos > '150'){
      navbar.classList.add('header_background')
    } else
      navbar.classList.remove('header_background')
  prevScrollpos = currentScrollPos;
}
  //// End Scroll
  //// Start contact

  /// Variables
  let nombre = document.querySelector('#contacto_nombre')
  let errorNombre = document.querySelector('#error_nombre')
  let email = document.querySelector('#contacto_email')
  let errorEmail = document.querySelector('#error_email')
  let texto = document.querySelector('#contacto_texto')
  let errorTexto = document.querySelector('#error_mensaje')
  let enviar = document.querySelector('#boton_enviar')
  let urlAirtable = 'https://api.airtable.com/v0/app08dS8leKzscnpT/Table%201?api_key=keyRjKxCGZreLL5BN'
// Funciones
// Comprobamos que el nombre tenga al menos 3 caracteres para podrse enviar
  let comprobarNombre = () => {
    if (nombre.value.length < 3) {
      nombre.classList.add('contacto_input_error');
      errorNombre.textContent = 'Es necesario un nombre con al menos 3 caracteres';
      return false
    } else {
      nombre.classList.remove('contacto_input_error');
      errorNombre.textContent = '';
      return true;
    }
  }
  // Comprobamos que el email sea valido para poderse enviar
  let comprobarEmail = (correo) => {
    if (email.value.length == 0) {
      return false
    } else {
      var re = /\S+@\S+\.\S+/;
      return re.test(correo);
    }
  }
  // Si el email no es valido que se vea
  let emailIncorrecto = () => {
    let emailvalue = email.value;
    if (comprobarEmail(emailvalue)) {
      errorEmail.textContent = 'El formato del correo no es valido ej.: "ejemplo@email.com"'
      email.classList.add('contacto_input_error')
      return false
    } else {
      email.classList.remove('contacto_input_error')
      return true
    }
  }
  // Comprobamos que el mensaje tenga al menos 3 caracteres para poderse enviar
  let comprobarMensaje = () => {
    if (texto.value.length < 3) {
      texto.classList.add('contacto_input_error');
      errorTexto.textContent = '* Necesito saber que es lo que quieres';
      return false
    } else {
      texto.classList.remove('contacto_input_error');
      errorTexto.textContent = '';
      return true
    }
  }
  // Comrobamos que si todo lo anterior es valido se pueda enviar el fomulario
  let enviarFormulario = () => {
    comprobarMensaje();
    if (comprobarNombre && emailIncorrecto && comrobarMensaje) {
      axios.post(urlAirtable, {
        fields: {
          nombre: nombre.value,
          email: email.value,
          mensaje: texto.value,
        }
      })
    } else {
      comprobarNombre();
      comprobarMensaje();
      emailIncorrecto();
    }
  }
  
  // Eventos
  
  nombre.addEventListener('blur', comprobarNombre)
  email.addEventListener('keyup', comprobarEmail)
  email.addEventListener('blur', comprobarEmail)
  email.addEventListener('blur', emailIncorrecto)
  enviar.addEventListener('click', enviarFormulario)
  /// End contact
  //// End Home
});