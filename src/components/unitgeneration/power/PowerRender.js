import React from 'react'

//Se encarga de los visual de los poderes
function PowerRender ({name, uses, type, distance, target, duration, damage1, damage2, heal1, heal2, effect1, effect2, effect3, effect4, extra1, extra2, power, powers, setPowers}) {

    //Borra el Poder
    const deleteHandler = () => {
        setPowers(powers.filter((el) => el.id !== power.id))
    };

    return (
      <div className='powerFinal'>
          <div className='powerName'>{name}</div>
          <div className='powerUses' >{uses}</div>
          <div className='powerType'>{type}</div>
          <div className='powerDistance'>{distance}</div>
          <div className='powerTarget'>{target}</div>
          <div className='powerDuration'>{duration}</div>
          <div className='powerDmg'>{damage1}+{parseInt(damage2) || 0}</div>
          <div className='powerHeal'>{heal1}+{parseInt(heal2) || 0}</div>
          <div className='powerEffect1'>{effect1}</div>
          <div className='powerEffect2'>{effect2}</div>
          <div className='powerEffect3'>{effect3}</div>
          <div className='powerEffect4'>{effect4}</div>
          <div className='powerExtra1'>{extra1}</div>
          <div className='powerExtra2'>{extra2}</div>
          <button onClick={deleteHandler}>Trash</button>
      </div>
    )
  }

export default PowerRender;