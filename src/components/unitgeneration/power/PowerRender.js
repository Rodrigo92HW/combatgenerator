import React from "react";

//Se encarga de los visual de los poderes
function PowerRender ({name, uses, type, distance, target, duration, damage1, damage2, heal1, heal2, effect1, effect2, effect3, power, powers, setPowers}) {

    //Borra el Poder
    const deleteHandler = () => {
        setPowers(powers.filter((el) => el.id !== power.id))
    };

    const damageH = damage1 + damage2;
    const healH = heal1 + heal2;
    const effectH = effect1 + effect2 + effect3;

    return (
      <div className='powerFinal'>
          <div className='powerName'>{name}</div>
          <div className='powerUses' ><label>Uso:</label><span>{uses}</span></div>
          <div className='powerType'><label>Elemento:</label><span>{type}</span></div>
          <div className='powerDistance'><label>Rango:</label><span>{distance}</span></div>
          <div className='powerTarget'><label>Objetivo:</label><span>{target}</span></div>
          <div className='powerDuration'><label>Duración:</label><span>{duration}</span></div>
          <div className='powerDmg' style={damageH  > '' ? {display:''}:{display:'none'}}><label>Daño:</label><span>{damage1}+{parseInt(damage2) || 0}</span></div>
          <div className='powerHeal' style={healH  > '' ? {display:''}:{display:'none'}}><label>Curación:</label><span>{heal1}+{parseInt(heal2) || 0}</span></div>
          <div className='powerEffect' style={effectH  > '' ? {display:''}:{display:'none'}}><label>Efectos:</label><span>{effect1} {effect2} {effect3}</span></div>
          <button onClick={deleteHandler}></button>
      </div>
    )
  }

export default PowerRender;