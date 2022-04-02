import React from 'react'
import PowerRender from './PowerRender'

function PowerHandler({powers, setPowers}) {

  return (
    <ul className='power-list'>
      {powers.map((power) => (
        <PowerRender 
        name={power.name} 
        uses={power.uses}
        type={power.type}
        distance={power.distance}
        target={power.target}
        duration={power.duration}
        damage1={power.damage1}
        damage2={power.damage2}
        heal1={power.heal1}
        heal2={power.heal2}
        effect1={power.effect1}
        effect2={power.effect2}
        effect3={power.effect3}
        key={power.id} 
        setPowers={setPowers} 
        powers={powers}
        power={power}/>
      ))}
    </ul>
  )
}

export default PowerHandler;