import React from 'react'
import './About.css'
import Me from '../media/me.jpeg'

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-desc'>
        <h2> Acerca de mi</h2>
         <p>
         Programador Jr. con bases en estructuras de datos y
Algoritmos de JS, con nivel intermedio de manipulación en la
Biblioteca React de JavaScript, en estos últimos 6 años estuve
en la búsqueda de encontrar mi pasión y puedo decir que por
fin la encontré en la programación, esforzándome en crecer y
para así llegar a ser un Desarrollador Full Stack Developer...</p>
<h4>FORMACIÓN ACADÉMICA</h4>
<p>
JavaScript Avanzado, Estructura de datos y
Algoritmos,
DOM Y CSS avanzado, ES6, AJAX, React y
Redux,
NodeJS, Promises, Web Server, Express,
Testing,
SQL, ORM, Sequelize.
Desarrollador Full Stack Developer
2022- Actualidad
Soy Henry, Buenos Aires
El programa de estudio cuenta con:
Bachillerato en administración de empresas
y sistema contable
Instituto Evangélico Alemán Luis Siegel
2008-2013</p>
<h4>Idiomas</h4>
<p>
Ingles - trainee / reading comprehension<br></br>
Español - Nativo<br></br>
Alemán - Anfänger/ Leseverständnis<br></br>

         </p>
        </div>
        <div className='about-img'>
            <img src={Me}
             alt='about'
             />
        </div>
    </div>
  );
};

export default About;
