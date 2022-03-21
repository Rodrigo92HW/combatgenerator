import React from 'react';
import CharacteristicRender from './CharacteristicRender';

function CharacteristicHandler ({ characteristic, setCharacteristic }) {

  return (
    <div className='charialty-container'>
    <ul className='charialty-list'>
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
    </div>
  )
}

export default CharacteristicHandler