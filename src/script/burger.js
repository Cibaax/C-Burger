import React from 'react';
import '../style/burger-style.css'
function Burger(){
    return(
      <div className='content'>
        <div className='content-burger'>
          <img className='burger' src={require('../img/burger.png')} alt='burger'/>
          <img className='arrows' src={require('../img/arrows.png')} alt='arrows'/>
          <div className='ingredients'>
            <p className='bread'>Bread</p>
            <p className='sauce'>Sauce</p>
            <p className='becon'>becon</p>
            <p className='onion'>Onion</p>
            <p className='cheese'>Cheese</p>
            <p className='meat'>Meat</p>
            <p className='tomato'>Tomato</p>
            <p className='lettuce'>Lettuce</p>
            
          </div>
        </div> 
      </div> 
    );
}
export default Burger;