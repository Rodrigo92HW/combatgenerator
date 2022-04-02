import React from 'react'

function CharacteristicRender ({name, uses, effect, char, characteristic, setCharacteristic}) {

    //Borra la especialidad
    const deleteHandlerChar = () => {
        setCharacteristic(characteristic.filter((el) => el.id !== char.id))
    };

    return (
      <div className='charact'>
          <div className='charName'>{name}</div>
          <div className='charUses'>{uses}</div>
          <div className='charEffect'>{effect}</div>
          <button onClick={deleteHandlerChar}></button>
      </div>
    )
  }

export default CharacteristicRender