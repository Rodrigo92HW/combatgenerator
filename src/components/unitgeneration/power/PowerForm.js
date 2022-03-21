import React from 'react';
import _ from "lodash";
import {v4 as uuid} from "uuid"; 

function PowerForm({ powerName, setPowerName, powerUses, setPowerUses, powerType, setPowerType, powerDistance, setPowerDistance, powerTarget, setPowerTarget, powerDuration, setPowerDuration, 
  powerDamage1, setPowerDamage1, powerDamage2, setPowerDamage2, powerHeal1, setPowerHeal1, powerHeal2, setPowerHeal2, powerEffect1, setPowerEffect1, powerEffect2, setPowerEffect2,
  powerEffect3, setPowerEffect3, powerEffect4, setPowerEffect4, starDamage, setStarDamage, powers, setPowers }) {

    //Setter de Random
    const usesPower = _.sampleSize(['Un uso por Combate', 'Un uso cada dos Turnos', '4 Usos', '5 Usos', '6 Usos', 'A voluntad', 
    'Lanza 1d6 al principio de cada ronda, puedes usarlo al obtener 6', 'Lanza 1d6 al principio de cada ronda, puedes usarlo al obtener 6', 
    'Lanza 1d6 al principio de cada ronda, puedes usarlo al obtener 6'], Math.ceil(Math.random()));
    const typePower = _.sampleSize(['Fuego', 'Rayo', 'Agua', 'Hielo', 'Viento', 'Tierra', 'Naturaleza', 'Luz', 'Oscuridad', 'Arcano', 'Fisico', 'Magico'], 1);
    const distancePower = _.sampleSize(['Personal', 'Toque', 'Mirada', 'Voz', 'Vista', 'Conexión Arcana'], 1);
    const targetPower = _.sampleSize(['Individuo', 'Parte', 'Grupo', 'Habitación', 'Estructura', 'Limites'], 1);
    const durationPower = _.sampleSize(['Instantáneo', 'Concentración'], 1);
    const damagePower1 = 'k' + ((Math.ceil(Math.random() * (6 - 1) + 1)) + Math.ceil(Number(starDamage)*1.5));
    const damagePower2 = _.sampleSize(['', '', '', '', '', '', '', Math.max(Math.ceil(5*(Number(starDamage))), 5), Math.max(Math.ceil(10*(Number(starDamage))), 10), 
    Math.max(Math.ceil(15*(Number(starDamage))), 15)]);
    const healPower1 = _.sampleSize([('k' + ((Math.ceil(Math.random() * (4 - 1) + 1)) + Math.ceil(Number(starDamage)*1.5))), '', '', '']);
    const healPower2 = _.sampleSize(['', '', '', '', '', '', '', Math.max(Math.ceil(5*(Number(starDamage))), 5), Math.max(Math.ceil(10*(Number(starDamage))), 10), 
    Math.max(Math.ceil(15*(Number(starDamage))), 15)]);
    const effectPower1 = _.sampleSize(['Aplica el estado alterado:' + (_.sampleSize([' Aturdido', 'Capturado', 'Ceguera', 'Debilitado', 'Derribado', 'Enamorado', 'Enfermo', 
    ' Envenenado', 'Paralizado', 'Sangrado'])), 'Empuja 6 metros', 'Atrae 6 metros', 'Gana 10 + Nivel de Evasión', 'Gana 10 + Nivel de Evasión', 'Gana 5 + Nivel de Armadura',
    ' Gana 10 + Nivel de Armadura', 'Gana 5 + Nivel de Resistencia', 'Gana 10 + Nivel de Resistencia', 'Gana 5 + Nivel de Reduccion de Daño', 'Gana 10 + Nivel de Reduccion de Daño',
    ' Gana 5 * Nivel de Vida', 'Gana 10 * Nivel de Vida', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', ''], (Math.ceil(Math.random())));
    const effectPower2 = _.sampleSize([' Aplica el estado alterado:' + (_.sampleSize([' Aturdido', 'Capturado', 'Ceguera', 'Debilitado', 'Derribado', 'Enamorado', 'Enfermo', 
    ' Envenenado', 'Paralizado', 'Sangrado'])), 'Empuja 6 metros', 'Atrae 6 metros', 'Gana 10 + Nivel de Evasión', 'Gana 10 + Nivel de Evasión', 'Gana 5 + Nivel de Armadura',
    ' Gana 10 + Nivel de Armadura', 'Gana 5 + Nivel de Resistencia', 'Gana 10 + Nivel de Resistencia', 'Gana 5 + Nivel de Reduccion de Daño', 'Gana 10 + Nivel de Reduccion de Daño',
    ' Gana 5 * Nivel de Vida', 'Gana 10 * Nivel de Vida', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 
    '', '', '', '', ''], (Math.ceil(Math.random())));


    //Handlers
    const submitPowerHandler = (e) => {
        e.preventDefault();
        setPowers([
          ...powers, {
          name: powerName, 
          uses: powerUses,
          type: powerType,
          distance: powerDistance,
          target: powerTarget,
          duration: powerDuration,
          damage1: powerDamage1,
          damage2: powerDamage2,
          heal1: powerHeal1,
          heal2: powerHeal2,
          effect1: powerEffect1,
          effect2: powerEffect2,
          effect3: powerEffect3,
          effect4: powerEffect4,
          id: uuid()}
        ]);
        setPowerName('');
        setPowerUses('');
        setPowerType('');
        setPowerDistance('');
        setPowerTarget('');
        setPowerDuration('');
        setPowerDamage1('');
        setPowerDamage2('');
        setPowerHeal1('');
        setPowerHeal2('');
        setPowerEffect1('');
        setPowerEffect2('');
        setPowerEffect3('');
        setPowerEffect4('');
    }

    const powerHandlerR = (e) => {
      e.preventDefault();
      setPowerName('');
      setPowerUses(usesPower);
      setPowerType(typePower);
      setPowerDistance(distancePower);
      setPowerTarget(targetPower);
      setPowerDuration(durationPower);
      setPowerDamage1(damagePower1);
      setPowerDamage2(damagePower2);
      setPowerHeal1(healPower1);
      setPowerHeal2(healPower2);
      setPowerEffect1(effectPower1);
      setPowerEffect2(effectPower2);
      setPowerEffect3('');
      setPowerEffect4('');
    }

  return (
    <form className='powerForm'>
      <div className='namePower'>
      Nombre
      <input type='text' className='todo-input' onChange={(e) => setPowerName(e.target.value)} value={powerName}/>
      </div>
      <div className='usePower'>
      Usos
      <select onChange={(e) => setPowerUses(e.target.value)} value={powerUses}>
      <option value="A voluntad">A voluntad</option>
        <option value="Un uso por Combate">Un uso por Combate</option>
        <option value="Un uso cada dos Turnos">Un uso cada dos Turnos</option>
        <option value="4 Usos">4 Usos</option>
        <option value="5 Usos">5 Usos</option>
        <option value="6 Usos">6 Usos</option>
        <option value="Lanza 1d6 al principio de cada ronda, puedes usarlo al obtener 6">Lanza 1d6 al principio de cada ronda, puedes usarlo al obtener 6</option>
      </select>
      </div>
      <div className='typePower'>
      Elemento/Tipo
      <input type='text' className='todo-input' onChange={(e) => setPowerType(e.target.value)} value={powerType}/>
      </div>
      <div className='distancePower'>
      Distancia
      <select onChange={(e) => setPowerDistance(e.target.value)} value={powerDistance}>
        <option value="Personal">Personal</option>
        <option value="Toque">Toque</option>
        <option value="Mirada">Mirada</option>
        <option value="Voz">Voz</option>
        <option value="Vista">Vista</option>
        <option value="Conexión Arcana">Conexión Arcana</option>
      </select>
      </div>
      <div className='targetPower'>
      Objetivos
      <select onChange={(e) => setPowerTarget(e.target.value)} value={powerTarget}>
        <option value="Individuo">Individuo</option>
        <option value="Parte">Parte</option>
        <option value="Circulo">Circulo</option>
        <option value="Grupo">Grupo</option>
        <option value="Habitación">Habitación</option>
        <option value="Estructura">Estructura</option>
        <option value="Limites">Limites</option>
      </select>
      </div>
      <div className='durationPower'>
      Duración
      <select onChange={(e) => setPowerDuration(e.target.value)} value={powerDuration}>
        <option value="Instantáneo">Instantáneo</option>
        <option value="Concentración">Concentración</option>
        <option value="Anillo">Anillo</option>
        <option value="Diámetro">Diámetro</option>
        <option value="Sol">Sol</option>
        <option value="Luna">Luna</option>
        <option value="Año">Año</option>
      </select>
      </div>
      <div className='dmgPower'>
      Daño
      <input type='text' className='todo-input' onChange={(e) => setPowerDamage1(e.target.value)} value={powerDamage1} placeholder='k1'/>
      </div>
      <div className='dmgExtraPower'>
      Daño Fijo Adicional
      <input type='text' className='todo-input' onChange={(e) => setPowerDamage2(e.target.value)} value={powerDamage2} placeholder='0'/>
      </div>
      <div className='healPower'>
      Curación
      <input type='text' className='todo-input' onChange={(e) => setPowerHeal1(e.target.value)} value={powerHeal1} placeholder='k1'/>
      </div>
      <div className='healExtraPower'>
      Curación Fija Adicional
      <input type='text' className='todo-input' onChange={(e) => setPowerHeal2(e.target.value)} value={powerHeal2} placeholder='0'/>
      </div>
      <div className='effectAPower'>
      Efecto A
      <input type='text' className='todo-input' onChange={(e) => setPowerEffect1(e.target.value)} value={powerEffect1}/>
      </div>
      <div className='effectBPower'>
      Efecto B
      <input type='text' className='todo-input' onChange={(e) => setPowerEffect2(e.target.value)} value={powerEffect2}/>
      </div>
      <div className='effectCPower'>
      Efecto C
      <input type='text' className='todo-input' onChange={(e) => setPowerEffect3(e.target.value)} value={powerEffect3}/>
      </div>
      <div className='effectDPower'>
      Efecto D
      <input type='text' className='todo-input' onChange={(e) => setPowerEffect4(e.target.value)} value={powerEffect4}/>
      </div>
      <button className='powerAddButton' type='submit' onClick={submitPowerHandler} id='bFinal5'>
        Agregar
      </button>
      <button className='powerRandButton' type='submit' onClick={powerHandlerR} id='bRandom5'>
        Randomize
      </button>
    </form>
  )
}

export default PowerForm;