import React from 'react';

const Ubicacion = () => {
  return (
      <div>
      <h2 className='titulo-seccion'>UBICACIÓN</h2>
        <iframe className='mapa'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9027.200208106242!2d-70.81432095341471!3d-33.57395306387095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662e761fc111a03%3A0x79ef934e14076aa3!2sMr.%20Takeshi%20Sushi%20sushi%20padre%20hurtrado!5e0!3m2!1ses-419!2scl!4v1652634141085!5m2!1ses-419!2scl"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ width: '100%', border: '0' }}
        ></iframe>
      </div>
  );
};

export default Ubicacion;
