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
    console.log(currentScrollPos)
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
  let comrobarNombre = () => {
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
  let comprobarEmail = () => {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.value)
    emailIncorrecto()
  }
  // Si el email no es valido que se vea
  let emailIncorrecto = () => {
    if (!comprobarEmail) {
      email.classList.add('contacto_input_error');
      errorEmail.textContent = '* El email no es valido';
    } else {
      email.classList.remove('contacto_input_error');
      errorEmail.textContent = '';
    }
  }
  // Comprobamos que el mensaje tenga al menos 3 caracteres para poderse enviar
  let comrobarMensaje = () => {
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
  let mostrarBotonEnviar = () => {
    if (comrobarNombre && emailIncorrecto && comrobarMensaje) {
      enviar.classList.remove('boton_enviar_disabled')
      enviar.removeAttribute('disabled')
    } else {
      enviar.classList.add('boton_enviar_disabled')
      enviar.setAttribute('disabled')
    }
  }
  let enviarFormulario = () => {
    axios.post(urlAirtable, {
      fields: {
        nombre: nombre.value,
        email: email.value,
        mensaje: texto.value,
      }
    })
  }
  // Eventos
  enviar.addEventListener('click', enviarFormulario);
  /// End contact
  //// End Home
});