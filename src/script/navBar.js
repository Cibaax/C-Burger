import React from 'react';
import '../style/navBar-style.css'
function NavBar(){
    return(
      <div className='content-bar'>
        <img className='bar' src={require('../img/bar.png')} alt='barra'/>
        <div className='information'>
      </div>
      </div>
    );
}
export default NavBar