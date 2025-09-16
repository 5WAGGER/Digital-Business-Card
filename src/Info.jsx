import React from 'react'

export default function Info() {
  return (
    <div id="info">
      <img id="selfie" src="src/images/selfie.jpg"/>
      <h1 className="white">Quentin Jeriko</h1>
      <p id="occupation">Frontend Developer</p>
      <p className="light-white">digital-business-card.quentinjeriko.repl.co</p>
      <div id="btns">
        <a href='mailto: quentin.jeriko04@nvusd.org'>
          <button id="email">Email</button>
        </a>
        <a href='http://google.com'>
          <button id="linkedin">LinkedIn</button>
        </a>
      </div>
    </div>
    
  )
}