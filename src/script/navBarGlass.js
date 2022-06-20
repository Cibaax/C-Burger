import React from 'react';
import '../style/navBarGlass-style.css'
function NavBarGlass(){
  return(
    <div className='card'>
      <div className='card-blur'>
      <img className='facebook' src={require('../img/facebook.png')} alt='facebook'></img>
      <img className='instagram' src={require('../img/instagram.png')} alt='instagram'></img>
      <img className='whatsapp' src={require('../img/whatsapp.png')} alt='whatsapp'></img>
        <p className='try-it'>Try It</p>
      </div>
    </div>
    
  )
}



export default NavBarGlass