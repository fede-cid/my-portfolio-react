import React from 'react';
import './Cover.css';
import video from '../media/coverVideo.mp4'


const Cover = () => {
  return (
    <div className='cover-conteiner'>
        <video className='video' src={video} autoPlay loop muted />
        <h1> Federico Cid</h1>
        <p>Estudiante Full Stack Developer <br></br> HTML | JavaScript | CSS | React | Redux | Sequelize | Node.js | ORM | Promises | ES6 | SQL | BackEnd | FrontEnd</p>
    </div>
  )
}

export default Cover
