import React from 'react';
import SpecialtyRender from './SpecialtyRender';

function SpecialtyHandler ({ specialty, setSpecialty }) {

  return (
    <ul className='spe-list'>
      {specialty.map((spe) => (
        <SpecialtyRender 
        name={spe.name} 
        requiere={spe.requiere}
        cost={spe.cost}
        effect={spe.effect}
        key={spe.id} 
        setSpecialty={setSpecialty} 
        specialty={specialty}
        spe={spe}/>
      ))}
    </ul>
  )
}

export default SpecialtyHandler