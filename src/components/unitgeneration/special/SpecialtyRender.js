import React from 'react'

function SpecialtyRender ({name, requiere, cost, effect, spe, specialty, setSpecialty}) {

    //Borra la especialidad
    const deleteHandlerSpe = () => {
        setSpecialty(specialty.filter((el) => el.id !== spe.id))
    };

    return (
      <div className='specFinal'>
          <div className='speName'><span>{name} ({cost})</span></div>
          <div className='speRequiere'><span>Requisito:</span><label> {requiere}</label></div>
          <div className='speEffect'><span>Efecto:</span><label> {effect}</label></div>
          <button onClick={deleteHandlerSpe}></button>
      </div>
    )
  }

export default SpecialtyRender