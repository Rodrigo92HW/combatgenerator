import React from 'react';
import CharacteristicRender from './CharacteristicRender';

function CharacteristicHandler ({ characteristic, setCharacteristic }) {

  return (
    <ul className='char-list'>
      {characteristic.map((char) => (
        <CharacteristicRender 
        name={char.name} 
        uses={char.uses}
        effect={char.effect}
        key={char.id} 
        setCharacteristic={setCharacteristic} 
        characteristic={characteristic}
        char={char}/>
      ))}
    </ul>
  )
}

export default CharacteristicHandler