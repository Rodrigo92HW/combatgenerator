import React from 'react'
import {v4 as uuid} from "uuid";
import axios from 'axios';


function CharacteristicForm({ characteristicName, setCharacteristicName, characteristicUses, setCharacteristicUses, characteristicEffect, setCharacteristicEffect, 
  characteristic, setCharacteristic }) {

    const randomizer = Math.floor(Math.random() * (61 + 1));

    const submitCharacteristicHandler = (e) => {
        e.preventDefault();
        setCharacteristic([
          ...characteristic, {
          name: characteristicName, 
          uses: characteristicUses,
          effect: characteristicEffect,
          id: uuid()}
        ]);
        setCharacteristicName('');
        setCharacteristicUses('');
        setCharacteristicEffect('');
    }

    const submitCharacteristicHandlerR = (e) => {
      e.preventDefault();
      axios.get('./CharacteristicList.json')
      .then((response)=>{
        setCharacteristicName(response.data[randomizer].Name);
        setCharacteristicUses(response.data[randomizer].Uses);
        setCharacteristicEffect(response.data[randomizer].Effect);
        document.getElementById('bFinal4').click();
      }).catch((error)=>{
        console.log(error);
      })
  }


  return (
    <form className='charForm'>
      <div className='nameChar'>
      Nombre
      <input type='text' className='todo-input' onChange={(e) => setCharacteristicName(e.target.value)} value={characteristicName}/>
      </div>
      <div className='useChar'>
      Uso
      <input type='text' className='todo-input' onChange={(e) => setCharacteristicUses(e.target.value)} value={characteristicUses}/>
      </div>
      <div className='effectChar'>
      Efecto
      <input type='text' className='todo-input' onChange={(e) => setCharacteristicEffect(e.target.value)} value={characteristicEffect}/>
      </div>
      <button className='charAddButton' type='submit' onClick={submitCharacteristicHandler} id='bFinal4'>
        Agregar
      </button>
      <button className='charRandButton' type='submit' onClick={submitCharacteristicHandlerR} id='bRandom4'>
        Randomize
      </button>
    </form>
  )
}

export default CharacteristicForm