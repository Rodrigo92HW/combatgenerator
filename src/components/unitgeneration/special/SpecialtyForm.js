import React from 'react'
import {v4 as uuid} from "uuid";
import axios from 'axios';


function SpecialtyForm({ specialtyName, setSpecialtyName, specialtyCost, setSpecialtyCost, specialtyEffect, setSpecialtyEffect, specialtyRequiere, setSpecialtyRequiere,
  specialty, setSpecialty }) {

    const randomizerS = Math.floor(Math.random() * (14 + 1));

    const submitspecialtyHandler = (e) => {
        e.preventDefault();
        setSpecialty([
          ...specialty, {
          name: specialtyName,
          requiere: specialtyRequiere,
          cost: specialtyCost,
          effect: specialtyEffect,
          id: uuid()}
        ]);
        setSpecialtyName('');
        setSpecialtyRequiere('');
        setSpecialtyCost('');
        setSpecialtyEffect('');
    }

    const submitspecialtyHandlerR = (e) => {
      e.preventDefault();
      axios.get('./SpecialtyList.json')
      .then((response)=>{
        setSpecialtyName(response.data[randomizerS].Name);
        setSpecialtyCost(response.data[randomizerS].Cost);
        setSpecialtyRequiere(response.data[randomizerS].Requiere);
        setSpecialtyEffect(response.data[randomizerS].Effect);
        document.getElementById('bFinal6').click();
      }).catch((error)=>{
        console.log(error);
      })
  }


  return (
    <form className='specForm'>
      <div className='nameSpec'>
      <h2>Nombre</h2>
      <input type='text' className='todo-input' onChange={(e) => setSpecialtyName(e.target.value)} value={specialtyName}/>
      </div>
      <div className='costSpec'>
      <h2>Coste</h2>
      <input type='number' className='todo-input' onChange={(e) => setSpecialtyCost(e.target.value)} value={specialtyCost}/>
      </div>
      <div className='requiereSpec'>
      <h2>Requisito</h2>
      <input type='text' className='todo-input' onChange={(e) => setSpecialtyRequiere(e.target.value)} value={specialtyRequiere}/>
      </div>
      <div className='effectSpec'>
      <h2>Efecto</h2>
      <textarea type='text' className='todo-input' onChange={(e) => setSpecialtyEffect(e.target.value)} value={specialtyEffect}/>
      </div>
      <button className='SpecAddButton frm' type='submit' onClick={submitspecialtyHandler} id='bFinal6'>
      <span>Agregar</span>
      </button>
      <button className='SpecRandButton frm' type='submit' onClick={submitspecialtyHandlerR} id='bRandom6'>
      <span>Randomizar</span>
      </button>
    </form>
  )
}

export default SpecialtyForm