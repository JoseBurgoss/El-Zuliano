import React, { useState } from 'react';

export default function Footer() {
  const [showForm, setShowForm] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
  };

  return (
    <>
      <hr/>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', marginBottom: '1.5rem'}}>
        <div>
          <button type='button' className='header-button' onClick={toggleFAQ}>Preguntas Frecuentes</button>
        </div>
        <img src="/Screenshot_2024_07_21-1.png" style={{maxWidth: '100px', alignSelf: 'center'}}/>
        <div>
          <button type='button' className='header-button' onClick={toggleForm}>Contacto y Soporte</button>
        </div>
      </div>
      {showFAQ && (
        <div style={{textAlign: 'left', marginTop: '1rem'}}>
          <div><strong>P:</strong> ¿Cómo puedo obtener más noticias sobre un tema específico?<br/><strong>R:</strong> Utiliza los filtros por categorías en la sección de noticias para encontrar artículos sobre el tema que te interesa.</div>
          <div><strong>P:</strong> ¿Necesito una cuenta para leer las noticias?<br/><strong>R:</strong> No, puedes leer todas las noticias sin necesidad de una cuenta. Solo necesitas iniciar sesión si quieres recibir boletines por correo electrónico y compartir noticias.</div>
          <div><strong>P:</strong> ¿Cómo puedo compartir un artículo en mis redes sociales?<br/><strong>R:</strong> En la página de detalle de cada noticia, encontrarás botones para compartir el artículo en diferentes redes sociales.</div>
          <div><strong>P:</strong> ¿Cómo puedo buscar artículos antiguos?<br/><strong>R:</strong> Puedes usar la barra de búsqueda en la parte superior de la página para buscar artículos antiguos utilizando palabras clave específicas.</div>
          <div><strong>P:</strong> ¿Puedo personalizar la portada para mostrar mis secciones favoritas?<br/><strong>R:</strong> Sí, puedes personalizar la portada y seleccionar las secciones de noticias que más te interesen para una experiencia de lectura más personalizada.</div>
          <div><strong>P:</strong> ¿Cómo puedo suscribirme?<br/><strong>R:</strong> Para suscribirte, completa el formulario de suscripción disponible en la página principal ingresando tu correo electrónico, información de pago y el plan deseado.</div>
          <div><strong>P:</strong> ¿Qué debo hacer si encuentro un error en la página?<br/><strong>R:</strong> Si encuentras un error en la página, contacta al soporte técnico a través de los medios proporcionados en la sección de contacto.</div>
          <div><strong>P:</strong> ¿Cómo puedo cambiar mi dirección de correo electrónico para la suscripción?<br/><strong>R:</strong> Para cambiar tu dirección de correo electrónico para la suscripción, cancela tu suscripción actual y suscríbete nuevamente con la nueva dirección de correo electrónico.</div>
          <div><strong>P:</strong> ¿Hay una aplicación móvil disponible?<br/><strong>R:</strong> Actualmente, no tenemos una aplicación móvil, pero la página web es completamente responsiva y puede ser usada en dispositivos móviles.</div>
          <div><strong>P:</strong> ¿Cómo puedo enviar comentarios o sugerencias sobre la página?<br/><strong>R:</strong> Puedes enviar tus comentarios o sugerencias utilizando el formulario de contacto disponible en la sección de contacto y soporte en la parte de abajo de la página.</div>
        </div>
      )}
      {showForm && (
        <div style={{textAlign: 'center'}}>
          <form>
            <textarea placeholder="Escribe tu sugerencia aquí..." style={{width: '100%', marginTop: '1rem'}}></textarea>
            <button type="submit" className='header-button' style={{marginTop: '1rem'}}>Enviar Sugerencia</button>
          </form>
          <div style={{marginTop: '1rem'}}>
            <p>Teléfono: +58 414-0629243</p>
            <p>Email: elzuliano@gmail.com</p>
            <p>Horario de atención: Lunes a Viernes, de 9:00 AM a 5:00 PM (GMT-5)</p>
            <p>Redes sociales: @elzulianonoticias (Instagram/Twitter)</p>
          </div>
        </div>
      )}
    </>
  );
}