import { useState } from 'react';
import _ from 'lodash';
import PowerForm from './power/PowerForm';
import PowerHandler from './power/PowerHandler';
import CharacteristicForm from './characteristic/CharacteristicForm';
import CharacteristicHandler from './characteristic/CharacteristicHandler';
import html2canvas from 'html2canvas';

//Funcion que se encarga de crear las Unidades y la Interfaz
function UnitCreation () {

//Estrellas, Nivel y Especial
    var [stars, setStars] = useState(1);
    var [starBonus, setStarBonus] = useState(1);
    var [starStats, setStarStats] = useState(5);
    var [starAttack, setStarAttack] = useState(1);
    var [starDamage, setStarDamage] = useState(0);
    const [oneStar, setOneStar] = useState(false);
    const [twoStar, setTwoStar] = useState(false);
    const [threeStar, setThreeStar] = useState(false);
    const [fourStar, setFourStar] = useState(false);
    const [fiveStar, setFiveStar] = useState(false);
    const [sixStar, setSixStar] = useState(false);

    var [level, setLevel] = useState(1);

    const [especial, setEspecial] = useState(false);
    const [especialState, setEspecialState] = useState(0);
    var [specialMod, setSpecialMod] = useState(0);
    var [specialClass, setSpecialClass] = useState('basic');


//No Aleatorio
    //Handdler de Estadisticas de Usuario
    const [str, setStr] = useState(0);
    const [dex, setDex] = useState(0);
    const [con, setCon] = useState(0);
    const [int, setInt] = useState(0);
    const [will, setWill] = useState(0);
    const [cha, setCha] = useState(0);

    //Handdler de Habilidades de Usuario
    const [aca, setAca] = useState(0);
    const [alq, setAlq] = useState(0);
    const [hec, setHec] = useState(0);
    const [inf, setInf] = useState(0);
    const [inv, setInv] = useState(0);
    const [lin, setLin] = useState(0);
    const [med, setMed] = useState(0);
    const [ocu, setOcu] = useState(0);
    const [teo, setTeo] = useState(0);
    const [tca, setTca] = useState(0);
    const [ven, setVen] = useState(0);
    const [ale, setAle] = useState(0);
    const [atl, setAtl] = useState(0);
    const [arm, setArm] = useState(0);
    const [bat, setBat] = useState(0);
    const [conc, setConc] = useState(0);
    const [cond, setCond] = useState(0);
    const [def, setDef] = useState(0);
    const [equ, setEqu] = useState(0);
    const [her, setHer] = useState(0);
    const [inti, setInti] = useState(0);
    const [mec, setMec] = useState(0);
    const [per, setPer] = useState(0);
    const [sig, setSig] = useState(0);
    const [sup, setSup] = useState(0);
    const [coc, setCoc] = useState(0);
    const [com, setCom] = useState(0);
    const [cul, setCul] = useState(0);
    const [emp, setEmp] = useState(0);
    const [eti, setEti] = useState(0);
    const [inte, setInte] = useState(0);    
    const [lid, setLid] = useState(0);
    const [sub, setSub] = useState(0);

    //Estadisticas Finales
    const [strF, setStrF] = useState('');
    const [dexF, setDexF] = useState('');
    const [conF, setConF] = useState('');
    const [intF, setIntF] = useState('');
    const [willF, setWillF] = useState('');
    const [chaF, setChaF] = useState('');
    const statsPreF = [strF, dexF, conF, intF, willF, chaF];
    const bonusStat = (Math.ceil(level/4.8)*starBonus) - 1;
    const statsF = statsPreF.map(function(val){return ++val+bonusStat-1});

    //Habilidades Finales
    const [acaF, setAcaF] = useState(0);
    const [alqF, setAlqF] = useState(0);
    const [hecF, setHecF] = useState(0);
    const [infF, setInfF] = useState(0);
    const [invF, setInvF] = useState(0);
    const [linF, setLinF] = useState(0);
    const [medF, setMedF] = useState(0);
    const [ocuF, setOcuF] = useState(0);
    const [teoF, setTeoF] = useState(0);
    const [tcaF, setTcaF] = useState(0);
    const [venF, setVenF] = useState(0);
    const [aleF, setAleF] = useState(0);
    const [atlF, setAtlF] = useState(0);
    const [armF, setArmF] = useState(0);
    const [batF, setBatF] = useState(0);
    const [concF, setConcF] = useState(0);
    const [condF, setCondF] = useState(0);
    const [defF, setDefF] = useState(0);
    const [equF, setEquF] = useState(0);
    const [herF, setHerF] = useState(0);
    const [intiF, setIntiF] = useState(0);
    const [mecF, setMecF] = useState(0);
    const [perF, setPerF] = useState(0);
    const [sigF, setSigF] = useState(0);
    const [supF, setSupF] = useState(0);
    const [cocF, setCocF] = useState(0);
    const [comF, setComF] = useState(0);
    const [culF, setCulF] = useState(0);
    const [empF, setEmpF] = useState(0);
    const [etiF, setEtiF] = useState(0);
    const [inteF, setInteF] = useState(0);
    const [lidF, setLidF] = useState(0);
    const [subF, setSubF] = useState(0);
    const habilidadesKF = [acaF, alqF, hecF, infF, invF, linF, medF, ocuF, teoF, tcaF, venF];
    const habilidadesFF = [aleF, atlF, armF, batF, concF, condF, defF, equF, herF, intiF, mecF, perF, sigF, supF];
    const habilidadesSF = [cocF, comF, culF, empF, etiF, inteF, lidF, subF]


//Aleatorio
    //Estadisticas Aleatorias
    const [strR, setStrR] = useState(0);
    const [dexR, setDexR] = useState(0);
    const [conR, setConR] = useState(0);
    const [intR, setIntR] = useState(0);
    const [willR, setWillR] = useState(0);
    const [chaR, setChaR] = useState(0);
    const statsPreR = [strR, dexR, conR, intR, willR, chaR];
    const statsR = statsPreR.map(function(val){return ++val+bonusStat-1})

    //Habilidades Aleatorias
    const [acaR, setAcaR] = useState(0);
    const [alqR, setAlqR] = useState(0);
    const [hecR, setHecR] = useState(0);
    const [infR, setInfR] = useState(0);
    const [invR, setInvR] = useState(0);
    const [linR, setLinR] = useState(0);
    const [medR, setMedR] = useState(0);
    const [ocuR, setOcuR] = useState(0);
    const [teoR, setTeoR] = useState(0);
    const [tcaR, setTcaR] = useState(0);
    const [venR, setVenR] = useState(0);
    const [aleR, setAleR] = useState(0);
    const [atlR, setAtlR] = useState(0);
    const [armR, setArmR] = useState(0);
    const [batR, setBatR] = useState(0);
    const [concR, setConcR] = useState(0);
    const [condR, setCondR] = useState(0);
    const [defR, setDefR] = useState(0);
    const [equR, setEquR] = useState(0);
    const [herR, setHerR] = useState(0);
    const [intiR, setIntiR] = useState(0);
    const [mecR, setMecR] = useState(0);
    const [perR, setPerR] = useState(0);
    const [sigR, setSigR] = useState(0);
    const [supR, setSupR] = useState(0);
    const [cocR, setCocR] = useState(0);
    const [comR, setComR] = useState(0);
    const [culR, setCulR] = useState(0);
    const [empR, setEmpR] = useState(0);
    const [etiR, setEtiR] = useState(0);
    const [inteR, setInteR] = useState(0);
    const [lidR, setLidR] = useState(0);
    const [subR, setSubR] = useState(0);
    const habilidadesKR = [acaR, alqR, hecR, infR, invR, linR, medR, ocuR, teoR, tcaR, venR];
    const habilidadesFR = [aleR, atlR, armR, batR, concR, condR, defR, equR, herR, intiR, mecR, perR, sigR, supR];
    const habilidadesSR = [cocR, comR, culR, empR, etiR, inteR, lidR, subR];


//Input Handlers  
    //Input Handler Especial
    const onSpecialSubmit = (e) => {
        e.preventDefault();
        if(especial === true) {
            setEspecialState(stars);
            setSpecialMod(1);
            setSpecialClass('special')
        } else if (especial === false) {
            setEspecialState(stars);
            setSpecialMod(0);
            setSpecialClass('basic')
        }
    }

    //Input Handler Estrellas
    const onStarSubmit = (e) => {
        e.preventDefault();
        if (oneStar === true) {
            stars = 1;
            setOneStar('');
            console.log('estrellas son:', stars);
        } else if (twoStar ===true) {
            stars = 2;
            setTwoStar('');
            console.log('estrellas son:', stars);
        } else if (threeStar ===true) {
            stars = 3;
            setThreeStar('');
            console.log('estrellas son:', stars);
        } else if (fourStar ===true) {
            stars = 4;
            setFourStar('');
            console.log('estrellas son:', stars);
        } else if (fiveStar ===true) {
            stars = 5;
            setFiveStar('');
            console.log('estrellas son:', stars);
        } else if (sixStar ===true) {
            stars = 6;
            setSixStar('');
            console.log('estrellas son:', stars);
        }
    }

    //Input Handler Datos Adicionales
    const [handleDClick, setHandleDClick] = useState(false);
    const [handleDRClick, setHandleDRClick] = useState(false);
    let types = _.sampleSize(['Ángel', 'Demonio', 'Bestia', 'Aquas', 'Aberraciones', 'Constructos', 'Tales', 'Humanoides', 'Monstruo', 'Planta', 'Muerto-Viviente', 'Alienígenas'], 1);
    const [perceptionBonus, setPerceptionBonus] = useState(0);
    const [enemyType, setEnemyType] = useState(false);
    let elementsType = _.sampleSize(['Fuego', 'Rayo', 'Agua', 'Hielo', 'Viento', 'Tierra', 'Naturaleza', 'Luz', 'Oscuridad', 'Arcano', 'Fisico', 'Magico'], Math.random() * (4 - 0) + 0);
    const [weak, setWeak] = useState(false);
    const [resistance, setResistance] = useState(false);
    const [immune, setImmune] = useState(false);
    let conditionITemp = _.sampleSize([' Asustado', ' Aturdido', ' Cansado', ' Capturado', ' Ceguera', ' Debilitado', ' Derribado', ' Dormido', ' Ebrio', ' Enamorado', ' Enfermo', ' Envenenado',
     ' Inconsciente', ' Paralizado', ' Petrificado', ' Quemado', ' Sangrando'], Math.random() * (3 - 0) + 0)

    const onSubmitD = (e) => {
        e.preventDefault();
        if(handleDClick === true) {
            setHandleDClick('');
            setUnitName('');
            setUnitType('');
            setSize('');
            setWeakness('');
            setResistence('');
            setImmunities('');
            setConditionI('');
            setDescription('');
            setBehavior('');
            setPerceptionBonus('');
            setEnemyType(unitType);
            setWeak(weakness);
            setImmune(immunities);
            setResistance(resistence);
        } else if(handleDRClick === true) {
            setHandleDRClick('');
            setEnemyType(types);
            setSize(_.sampleSize(['Enano', 'Pequeño', 'Medio', 'Grande', 'Gigante', 'Colosal'], 1));
            setConditionI(conditionITemp);
            setWeak(elementsType[0]);
            setResistance(elementsType[1]);
            setImmune(elementsType[2]);
        }
    }

    //Input Handler Estadisticas
    const [handleClick, setHandleClick] = useState(false);
    const [handleRandomClick, setHandleRandomClick] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if(handleClick === true) {
            setHandleClick('');
            setStrF(str);
            setDexF(dex);
            setConF(con);
            setIntF(int);
            setWillF(will);
            setChaF(cha);
            setStr('');
            setDex('');
            setCon('');
            setInt('');
            setWill('');
            setCha('');
        }   else if (handleRandomClick === true) {
            setHandleRandomClick('');
            setStrR(Math.floor(Math.random() * (starStats - 1)) + 1);
            setDexR(Math.floor(Math.random() * (starStats - 1)) + 1);
            setConR(Math.floor(Math.random() * (starStats - 1)) + 1);
            setIntR(Math.floor(Math.random() * (starStats - 1)) + 1);
            setWillR(Math.floor(Math.random() * (starStats - 1)) + 1);
            setChaR(Math.floor(Math.random() * (starStats - 1)) + 1);
        }
    }

    //Input Handler Habilidades
    const [handleHClick, setHandleHClick] = useState(false);
    const [handleHRandomClick, setHandleHRandomClick] = useState(false);

    const onSubmitH = (e) => {
        e.preventDefault();
        if(handleHClick === true) {
            setHandleHClick('');
            setAcaF(aca);
            setAlqF(alq);
            setHecF(hec);
            setInfF(inf);
            setInvF(inv);
            setLinF(lin);
            setMedF(med);
            setOcuF(ocu);
            setTeoF(teo);
            setTcaF(tca);
            setVenF(ven);
            setAleF(ale);
            setAtlF(atl);
            setArmF(arm);
            setBatF(bat);
            setConcF(conc);
            setCondF(cond);
            setDefF(def);
            setEquF(equ);
            setHerF(her);
            setIntiF(inti);
            setMecF(mec);
            setPerF(per);
            setSigF(sig);
            setSupF(sup);
            setCocF(coc);
            setComF(com);
            setCulF(cul);
            setEmpF(emp);
            setEtiF(eti);
            setInteF(inte);
            setLidF(lid);
            setSubF(sub);
            setAca('');
            setAlq('');
            setHec('');
            setInf('');
            setInv('');
            setLin('');
            setMed('');
            setOcu('');
            setTeo('');
            setTca('');
            setVen('');
            setAle('');
            setAtl('');
            setArm('');
            setBat('');
            setConc('');
            setCond('');
            setDef('');
            setEqu('');
            setHer('');
            setInti('');
            setMec('');
            setPer('');
            setSig('');
            setSup  ('');
            setCoc('');
            setCom('');
            setCul('');
            setEmp('');
            setEti('');
            setInte('');
            setLid('');
            setSub('');
        } else if (handleHRandomClick === true) {
            setHandleHRandomClick('');
            setAcaR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setAlqR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setHecR(Math.floor(Math.ceil(starStats/1.9)));
            setInfR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setInvR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setLinR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setMedR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setOcuR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setTeoR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setTcaR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setVenR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setAleR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setAtlR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setArmR(Math.floor(Math.ceil(starStats/1.9)));
            setBatR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setConcR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setCondR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setDefR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setEquR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setHerR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setIntiR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setMecR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setPerR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setSigR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setSupR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setCocR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setComR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setCulR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setEmpR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setEtiR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setInteR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setLidR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
            setSubR(Math.floor(Math.random() * (Math.ceil(starStats/1.9) - (Math.ceil(starStats/3.2)))) + (Math.ceil(starStats/3.2)));
        }
    }

    //Input Handler Combate
    const [handleCClick, setHandleCClick] = useState(false);

    const onSubmitC = (e) => {
        e.preventDefault();
        if(handleCClick === true) {
            setHandleHClick('');
            setLifeExtraF(lifeExtra);
            setIniciativeTF(iniciativeTExtra);
            setIniciativeKF(iniciativeKExtra);
            setIniciativeExtraF(iniciativeExtra);
            setEvasionExtraF(evasionExtra);
            setArmorExtraF(armorExtra);
            setResistExtraF(resistExtra);
            setMovementExtraF(movementExtra);
            setAttackTF(attackTExtra);
            setAttackKF(attackKExtra);
            setAttackBonusF(attackBonus);
            setDamageTF(damageTExtra);
            setDamageKF(damageKExtra);
            setDamageBonusF(damageBonus);
            setLifeExtra('');
            setIniciativeTExtra('');
            setIniciativeKExtra('');
            setIniciativeExtra('');
            setEvasionExtra('');
            setArmorExtra('');
            setResistExtra('');
            setMovementExtra('');
            setAttackTExtra('');
            setAttackKExtra('');
            setAttackBonus('');
            setDamageTExtra('');
            setDamageKExtra('');
            setDamageBonus('');
        } else {
            console.log('How did this happen?')
        }
    }

//Holder de Estadisticas de Combate
    const [lifeExtra, setLifeExtra] = useState(0);
    const [iniciativeTExtra, setIniciativeTExtra] = useState(1);
    const [iniciativeKExtra, setIniciativeKExtra] = useState(1);
    const [iniciativeExtra, setIniciativeExtra] = useState(0);
    const [evasionExtra, setEvasionExtra] = useState(0);
    const [armorExtra, setArmorExtra] = useState(0);
    const [resistExtra, setResistExtra] = useState(0);
    const [movementExtra, setMovementExtra] = useState(0);
    const [attackTExtra, setAttackTExtra] = useState(0);
    const [attackKExtra, setAttackKExtra] = useState(0);
    const [attackBonus, setAttackBonus] = useState(0);
    const [damageTExtra, setDamageTExtra] = useState(0);
    const [damageKExtra, setDamageKExtra] = useState(0);
    const [damageBonus, setDamageBonus] = useState(0);


    //Combate Final No Aleatorio
    const [lifeExtraF, setLifeExtraF] = useState(0);
    const [iniciativeTF, setIniciativeTF] = useState(1);
    const [iniciativeKF, setIniciativeKF] = useState(1);
    const [iniciativeExtraF, setIniciativeExtraF] = useState(0);
    const [evasionExtraF, setEvasionExtraF] = useState(0);
    const [armorExtraF, setArmorExtraF] = useState(0);
    const [resistExtraF, setResistExtraF] = useState(0);
    const [movementExtraF, setMovementExtraF] = useState(0);
    const [attackTF, setAttackTF] = useState(0);
    const [attackKF, setAttackKF] = useState(0);
    const [attackBonusF, setAttackBonusF] = useState(0);
    const [damageTF, setDamageTF] = useState(0);
    const [damageKF, setDamageKF] = useState(0);
    const [damageBonusF, setDamageBonusF] = useState(0);

    //Calculadores de Estadisticas de Combate
        //Vida
        const life = Math.floor((Math.max(statsF[0]*4, (statsR[0])*4, 4) + Math.max(statsF[1]*2, (statsR[1])*2, 2) + Math.max(statsF[2]*6, (statsR[2])*6, 6) + 10 + Number(lifeExtraF))* (1 + (especialState*specialMod)));
        //Iniciativa
        const iniciativeBonus = Math.max(statsF[1], statsR[1], 1) + Number(iniciativeExtraF);
        //Movimiento
        const movement = Math.max(4, (Math.max(statsF[1], statsR[1]) + Math.max(atlF/2, atlR/2) + Number(movementExtraF)));
        //Evasion
        const evasion = Math.max(statsF[1]*5, statsR[1]*5, 5) + Number(evasionExtraF);
        //Armadura
        const armor = Math.max(statsF[2]*2, statsR[2]*2, 2) + Number(armorExtraF);
        //Resistencia Magica
        const resist = Number(resistExtraF);
        //Percepction, Subterfugio y Empatia Pasiva
        const passivePerception = (Math.max(habilidadesFF[0], habilidadesFR[0]) + Math.floor(Math.max(statsF[1], statsR[1])/2) + Number(level))*5 + Number(perceptionBonus);
        //Ataque
        const attackT = Number(attackTF) + Math.max(statsF[0], statsR[0], statsF[1], statsR[1], statsF[3], statsR[3], statsF[5], statsR[5], 1);
        const attackK = Number(attackKF) + starAttack + Math.floor(level/3.5) + Math.floor(Math.random() * (2 + 1) + 1);
        //Daño
        const damageT = Number(damageTF) + Math.max(statsF[0], statsR[0], statsF[1], statsR[1], 1);
        const damageK = Number(damageKF) + starDamage + Math.floor(level/5) + Math.floor(Math.random() * (3 + 1) + 1);


    //Constructor de Poderes
    const [powers, setPowers] = useState([]);
    const [powerName, setPowerName] = useState();
    const [powerUses, setPowerUses] = useState();
    const [powerType, setPowerType] = useState('Fisico');
    const [powerDistance, setPowerDistance] = useState('Personal');
    const [powerTarget, setPowerTarget] = useState('Individuo');
    const [powerDuration, setPowerDuration] = useState('Instantáneo');
    const [powerDamage1, setPowerDamage1] = useState();
    const [powerDamage2, setPowerDamage2] = useState();
    const [powerHeal1, setPowerHeal1] = useState();
    const [powerHeal2, setPowerHeal2] = useState();
    const [powerEffect1, setPowerEffect1] = useState();
    const [powerEffect2, setPowerEffect2] = useState();
    const [powerEffect3, setPowerEffect3] = useState();
    const [powerEffect4, setPowerEffect4] = useState();


    //Constructor de Caracteristicas Especiales
    const [characteristic, setCharacteristic] = useState([]);
    const [characteristicName, setCharacteristicName] = useState();
    const [characteristicUses, setCharacteristicUses] = useState();
    const [characteristicEffect, setCharacteristicEffect] = useState();

    //Datos Adicionales de Unidades
    const [unitName, setUnitName] = useState();
    const [unitType, setUnitType] = useState();
    const [size, setSize] = useState();
    const [weakness, setWeakness] = useState();
    const [resistence, setResistence] = useState();
    const [immunities, setImmunities] = useState();
    const [conditionI, setConditionI] = useState();
    const [description, setDescription] = useState();
    const [behavior, setBehavior] = useState();

    //Randomizar o Aplicar Todo
    const [finalSubmiter, setFinalSubmiter] = useState(false);
    const [finalRandomizer, setFinalRandomizer] = useState(false);

    const onFinalSubmit = (e) => {
        e.preventDefault();
        if (finalSubmiter === true) {
            document.getElementById('bFinal1').click();
            document.getElementById('bFinal2').click();
            document.getElementById('bFinal3').click();
            document.getElementById('bFinal4').click();
            document.getElementById('bFinal5').click();
            setFinalSubmiter(false);
        } else if (finalRandomizer === true) {
            document.getElementById('bRandom1').click();
            document.getElementById('bRandom2').click();
            document.getElementById('bRandom3').click();
            document.getElementById('bRandom4').click();
            document.getElementById('bRandom5').click();
//            setStars(Math.floor(Math.random() * (6 + 1) + 1))
            document.getElementById('bFinal5').click();
            setFinalRandomizer(false);
        } else {
            console.log('Error404');
        }
    }

    //Captura de Pantalla
    const doCapture = () => {
        window.scrollTo(0, 0);
        html2canvas(document.getElementById('saveData')).then(function (canvas) {
            console.log(canvas.toDataURL('image/jpg', 0.9));
        })
    }


    
    return (
        <div className='unitContainer'>
            <label className='creatingUnit'>Crear Unidad</label>
        <div className='unitBuilder'>
            <div className='unitTitle'>
            <div className='unitStars'>
                <form className='stars' onSubmit={onStarSubmit}>
                    <input type='radio' name='star' id='star-6' className='star star-6' onClick={() => setStars(6) | setSixStar(!sixStar) | setStarStats(21) | setStarBonus(2) | setStarAttack(3) | setStarDamage(2) | 
                        setEspecialState(5)}/><label htmlFor='star-6' className='star s6'></label>
                    <input type='radio' name='star' id='star-5' className='star star-5' onClick={() => setStars(5) | setFiveStar(!fiveStar) | setStarStats(13) | setStarBonus(1) | setStarAttack(3) | setStarDamage(2) | 
                        setEspecialState(4)}/><label htmlFor='star-5' className='star s5'></label>
                    <input type='radio' name='star' id='star-4' className='star star-4' onClick={() => setStars(4) | setFourStar(!fourStar) | setStarStats(11) | setStarBonus(1) | setStarAttack(2) | setStarDamage(1) | 
                        setEspecialState(3.25)}/><label htmlFor='star-4' className='star s4'></label>
                    <input type='radio' name='star' id='star-3' className='star star-3' onClick={() => setStars(3) | setThreeStar(!threeStar) | setStarStats(9) | setStarBonus(1) | setStarAttack(2) | setStarDamage(1) | 
                        setEspecialState(2.5)}/><label htmlFor='star-3' className='star s3'></label>
                    <input type='radio' name='star' id='star-2' className='star star-2' onClick={() => setStars(2) | setTwoStar(!twoStar) | setStarStats(7) | setStarBonus(1) | setStarAttack(1) | setStarDamage(0) | 
                        setEspecialState(1.75)}/><label htmlFor='star-2' className='star s2'></label>
                    <input type='radio' name='star' id='star-1' className='star star-1' onClick={() => setStars(1) | setOneStar(!oneStar) | setStarStats(5) | setStarBonus(1) | setStarAttack(1) | setStarDamage(0) | 
                        setEspecialState(1)}/><label htmlFor='star-1' className='star s1'></label>                        
                </form>
                </div>
            <div className='especial'>
                <form className='special'  onSubmit={onSpecialSubmit}>
                    <button type='submit' className={specialClass} onClick={() => setEspecial(!especial)}>SSS</button>
                </form>
                </div>
            </div>
            <div className='dataExtra'>
                <form className='dataExtra' onSubmit={onSubmitD}>
                <h1>Datos Extra</h1>
                    <div className='nameStart'>
                    <h2>Nombre</h2>
                    <input type='text' value={unitName} onChange={(e) => setUnitName(e.target.value)}/>
                    </div>
                    <div className='levelTotal'>
                    <h1 className='level'>Nivel</h1>
                    <select className='level' type='number' value={level} onChange={(e) => setLevel(e.target.value)}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                        <option value='11'>11</option>
                        <option value='12'>12</option>
                        <option value='13'>13</option>
                        <option value='14'>14</option>
                        <option value='15'>15</option>
                        <option value='16'>16</option>
                        <option value='17'>17</option>
                        <option value='18'>18</option>
                        <option value='19'>19</option>
                        <option value='20'>20</option>
                    </select>
                    </div>
                    <div className='typeStart'>
                    <h2>Tipo</h2>
                    <input type='text' value= {unitType} onChange={(e) => setUnitType(e.target.value)}/>
                    </div>
                    <div className='sizeStart'>
                    <h2>Tamaño</h2>
                    <select value={size} onChange={(e) => setSize(e.target.value)}>
                        <option value='Enano'>Enano</option>
                        <option value='Pequeño'>Pequeño</option>
                        <option value='Medio'>Medio</option>
                        <option value='Grande'>Grande</option>
                        <option value='Gigante'>Gigante</option>
                        <option value='Colosal'>Colosal</option>
                    </select>
                    </div>
                    <div className='weakStart'>
                    <h2>Debilidad</h2>
                    <input type='text' value= {weakness} onChange={(e) => setWeakness(e.target.value)}/>
                    </div>
                    <div className='resiStart'>
                    <h2>Resistencia</h2>
                    <input type='text' value= {resistence} onChange={(e) => setResistence(e.target.value)}/>
                    </div>
                    <div className='immuStart'>
                    <h2>Inmunidad</h2>
                    <input type='text' value= {immunities} onChange={(e) => setImmunities(e.target.value)}/>
                    </div>
                    <div className='immuCondi'>
                    <h2>Inmunidad Condición</h2>
                    <input type='text' value= {conditionI} onChange={(e) => setConditionI(e.target.value)}/>
                    </div>
                    <div className='percStart'>
                    <h2>Percepción Bonus</h2>
                    <input type='text' value= {perceptionBonus} onChange={(e) => setPerceptionBonus(e.target.value)}/>
                    </div>
                    <div className='descStart'>
                    <h2>Descripción</h2>
                    <textarea value= {description} onChange={(e) => setDescription(e.target.value)} cols='30' rows='10'></textarea>
                    </div>
                    <div className='behaStart'>
                    <h2>Comportamiento</h2>
                    <textarea value= {behavior} onChange={(e) => setBehavior(e.target.value)} cols='30' rows='10'></textarea>
                    </div>
                    <button className='dataButtonF' onClick={() => setHandleDClick(!handleDClick)} id='bFinal1' type='submit'>Do the thing</button>
                    <button className='dataButtonR' onClick={() => setHandleDRClick(!handleDRClick)} id='bRandom1' type='submit'>Do the random thing</button>
                </form>
            </div>
            <div className='Characteristic'>
                <h1>Caracteristicas</h1>
                <CharacteristicForm
                characteristic={characteristic} setCharacteristic={setCharacteristic}
                characteristicName={characteristicName} setCharacteristicName={setCharacteristicName}
                characteristicEffect={characteristicEffect} setCharacteristicEffect={setCharacteristicEffect}
                characteristicUses={characteristicUses} setCharacteristicUses={setCharacteristicUses}
                />
            </div>
            <div className='Combat'>
                <h1 className='Combat'>Combate</h1>
                <form className='Combat' onSubmit={onSubmitC}>
                    <div className='life'>
                    <input type='number' value={lifeExtra} onChange={(e) => setLifeExtra(e.target.value)}/>
                    </div>
                    <div className='iniciative'>
                    <input type='number' value={iniciativeTExtra} onChange={(e) => setIniciativeTExtra(e.target.value)}/>
                    <input type='number' value={iniciativeKExtra} onChange={(e) => setIniciativeKExtra(e.target.value)}/>
                    <input type='number' value={iniciativeExtra} onChange={(e) => setIniciativeExtra(e.target.value)}/>
                    </div>
                    <div className='evasion'>
                    <input type='number' value={evasionExtra} onChange={(e) => setEvasionExtra(e.target.value)}/>
                    </div>
                    <div className='armor'>
                    <input type='number' value={armorExtra} onChange={(e) => setArmorExtra(e.target.value)}/>
                    </div>
                    <div className='resist'>
                    <input type='number' value={resistExtra} onChange={(e) => setResistExtra(e.target.value)}/>
                    </div>
                    <div className='movement'>
                    <input type='number' value={movementExtra} onChange={(e) => setMovementExtra(e.target.value)}/>
                    </div>
                    <div className='acc'>
                    <input type='number' value={attackTExtra} onChange={(e) => setAttackTExtra(e.target.value)}/>
                    <input type='number' value={attackKExtra} onChange={(e) => setAttackKExtra(e.target.value)}/>
                    <input type='number' value={attackBonus} onChange={(e) => setAttackBonus(e.target.value)}/>
                    </div>
                    <div className='dmg'>
                    <input type='number' value={damageTExtra} onChange={(e) => setDamageTExtra(e.target.value)}/>
                    <input type='number' value={damageKExtra} onChange={(e) => setDamageKExtra(e.target.value)}/>
                    <input type='number' value={damageBonus} onChange={(e) => setDamageBonus(e.target.value)}/>
                    </div>
                    <div className='combatClick'>
                    <button onClick={() => setHandleCClick(!handleCClick)} type='submit'>Do the thing</button>
                    </div>
                </form>
            </div>
            <h1 className='statsH1'>Estadisticas</h1>
            <div className='unitStats'>
                <form className='Stats' onSubmit={onSubmit}>
                <div className='Body'>
                    <h2>Fuerza</h2>
                    <input type='number' placeholder='1' value={str} onChange={(e) => setStr(e.target.value)}></input>
                    <h2>Destreza</h2>
                    <input type='number' placeholder='1' value={dex} onChange={(e) => setDex(e.target.value)}></input>
                    <h2>Constitución</h2>
                    <input type='number' placeholder='1' value={con} onChange={(e) => setCon(e.target.value)}></input>
                </div>
                <div className='Mind'>
                    <h2>Inteligencia</h2>
                    <input type='number' placeholder='1' value={int} onChange={(e) => setInt(e.target.value)}></input>
                    <h2>Voluntad</h2>
                    <input type='number' placeholder='1' value={will} onChange={(e) => setWill(e.target.value)}></input>
                    <h2>Carisma</h2>
                    <input type='number' placeholder='1' value={cha} onChange={(e) => setCha(e.target.value)}></input>
                </div>
                <button onClick={() => setHandleClick(!handleClick)} id='bFinal2' type='submit'>Do the thing</button>
                <button onClick={() => setHandleRandomClick(!handleRandomClick)} id='bRandom2' type='submit'>Do the Random thing</button>
                </form> 
            </div>
            <div className='unitAbilities'>
            <h1>Habilidades</h1>
            <form className='Abilities' onSubmit={onSubmitH}>
                    <div className='Knowledge'>
                    <h2 className='Knowledge'>Conocimientos</h2>
                        <h3>Academisismo</h3>
                        <input type='number' placeholder='1' value={aca} onChange={(e) => setAca(e.target.value)}></input>
                        <h3>Alquimia</h3>
                        <input type='number' placeholder='1' value={alq} onChange={(e) => setAlq(e.target.value)}></input>
                        <h3>Hechicería</h3>
                        <input type='number' placeholder='1' value={hec} onChange={(e) => setHec(e.target.value)}></input>
                        <h3>Informática</h3>
                        <input type='number' placeholder='1' value={inf} onChange={(e) => setInf(e.target.value)}></input>
                        <h3>Investigación</h3>
                        <input type='number' placeholder='1' value={inv} onChange={(e) => setInv(e.target.value)}></input>
                        <h3>Lingüística</h3>
                        <input type='number' placeholder='1' value={lin} onChange={(e) => setLin(e.target.value)}></input>
                        <h3>Medicina</h3>
                        <input type='number' placeholder='1' value={med} onChange={(e) => setMed(e.target.value)}></input>
                        <h3>Ocultismo</h3>
                        <input type='number' placeholder='1' value={ocu} onChange={(e) => setOcu(e.target.value)}></input>
                        <h3>Teología</h3>
                        <input type='number' placeholder='1' value={teo} onChange={(e) => setTeo(e.target.value)}></input>
                        <h3>Trato con Animales</h3>
                        <input type='number' placeholder='1' value={tca} onChange={(e) => setTca(e.target.value)}></input>
                        <h3>Venenos</h3>
                        <input type='number' placeholder='1' value={ven} onChange={(e) => setVen(e.target.value)}></input>
                    </div>
                    <div className='Feats'>
                    <h2 className='Feats'>Proezas</h2>
                        <h3>Alerta</h3>
                        <input type='number' placeholder='1' value={ale} onChange={(e) => setAle(e.target.value)}></input>
                        <h3>Atletismo</h3>
                        <input type='number' placeholder='1' value={atl} onChange={(e) => setAtl(e.target.value)}></input>
                        <h3>Armas</h3>
                        <input type='number' placeholder='1' value={arm} onChange={(e) => setArm(e.target.value)}></input>
                        <h3>Batalla</h3>
                        <input type='number' placeholder='1' value={bat} onChange={(e) => setBat(e.target.value)}></input>
                        <h3>Concentración</h3>
                        <input type='number' placeholder='1' value={conc} onChange={(e) => setConc(e.target.value)}></input>
                        <h3>Conducir</h3>
                        <input type='number' placeholder='1' value={cond} onChange={(e) => setCond(e.target.value)}></input>
                        <h3>Defensa</h3>
                        <input type='number' placeholder='1' value={def} onChange={(e) => setDef(e.target.value)}></input>
                        <h3>Equitación</h3>
                        <input type='number' placeholder='1' value={equ} onChange={(e) => setEqu(e.target.value)}></input>
                        <h3>Herrería</h3>
                        <input type='number' placeholder='1' value={her} onChange={(e) => setHer(e.target.value)}></input>
                        <h3>Intimidación</h3>
                        <input type='number' placeholder='1' value={inti} onChange={(e) => setInti(e.target.value)}></input>
                        <h3>Mecánica</h3>
                        <input type='number' placeholder='1' value={mec} onChange={(e) => setMec(e.target.value)}></input>
                        <h3>Pericias</h3>
                        <input type='number' placeholder='1' value={per} onChange={(e) => setPer(e.target.value)}></input>
                        <h3>Sigilo</h3>
                        <input type='number' placeholder='1' value={sig} onChange={(e) => setSig(e.target.value)}></input>
                        <h3>Supervivencia</h3>
                        <input type='number' placeholder='1' value={sup} onChange={(e) => setSup(e.target.value)}></input>
                    </div>
                    <div className='Socials'>
                    <h2 className='Socials'>Sociales</h2>
                        <h3>Cocina</h3>
                        <input type='number' placeholder='1' value={coc} onChange={(e) => setCoc(e.target.value)}></input>
                        <h3>Comercio</h3>
                        <input type='number' placeholder='1' value={com} onChange={(e) => setCom(e.target.value)}></input>
                        <h3>Cultura</h3>
                        <input type='number' placeholder='1' value={cul} onChange={(e) => setCul(e.target.value)}></input>
                        <h3>Empatía</h3>
                        <input type='number' placeholder='1' value={emp} onChange={(e) => setEmp(e.target.value)}></input>
                        <h3>Etiqueta</h3>
                        <input type='number' placeholder='1' value={eti} onChange={(e) => setEti(e.target.value)}></input>
                        <h3>Interpretación</h3>
                        <input type='number' placeholder='1' value={inte} onChange={(e) => setInte(e.target.value)}></input>
                        <h3>Liderazgo</h3>
                        <input type='number' placeholder='1' value={lid} onChange={(e) => setLid(e.target.value)}></input>
                        <h3>Subterfugio</h3>
                        <input type='number' placeholder='1' value={sub} onChange={(e) => setSub(e.target.value)}></input>
                    </div>
                    <button onClick={() => setHandleHClick(!handleHClick)} type='submit' id='bFinal3'>Do the thing</button>
                    <button onClick={() => setHandleHRandomClick(!handleHRandomClick)} type='submit' id='bRandom3'>Do the Random thing</button>
            </form> 
            </div>
            <div className='Powers'>
                <PowerForm
                powers={powers} setPowers={setPowers}
                powerName={powerName} setPowerName={setPowerName}
                powerUses={powerUses} setPowerUses={setPowerUses}
                powerType={powerType} setPowerType={setPowerType}
                powerDistance={powerDistance} setPowerDistance={setPowerDistance}
                powerTarget={powerTarget} setPowerTarget={setPowerTarget}
                powerDuration={powerDuration} setPowerDuration={setPowerDuration}
                powerDamage1={powerDamage1} setPowerDamage1={setPowerDamage1}
                powerDamage2={powerDamage2} setPowerDamage2={setPowerDamage2}
                powerHeal1={powerHeal1} setPowerHeal1={setPowerHeal1}
                powerHeal2={powerHeal2} setPowerHeal2={setPowerHeal2}
                powerEffect1={powerEffect1} setPowerEffect1={setPowerEffect1}
                powerEffect2={powerEffect2} setPowerEffect2={setPowerEffect2}
                powerEffect3={powerEffect3} setPowerEffect3={setPowerEffect3}
                powerEffect4={powerEffect4} setPowerEffect4={setPowerEffect4}
                starDamage={starDamage} setStarDamage={setStarDamage}
                />
                </div>
            <div className='finalSubmit'>
                <form className='finalSubmit' onSubmit={onFinalSubmit}>
                    <button onClick={() => setFinalSubmiter(!finalSubmiter) | document.getElementById('bFinal1').click() | document.getElementById('bFinal2').click()
                 | document.getElementById('bFinal3').click() | document.getElementById('bFinal4').click() | document.getElementById('bFinal5').click()}><span>Submitear Todo</span></button>
                    <button onClick={() => setFinalRandomizer(!finalRandomizer) | document.getElementById('bRandom1').click() | document.getElementById('bRandom2').click()
                 | document.getElementById('bRandom3').click() | document.getElementById('bRandom4').click() | document.getElementById('bRandom5').click()}><span>Randomizar Todo</span></button>
                </form>
                </div>
        </div>
        <div className='finalSheet' id='saveData'>
    <h1 className='dataF'>Datos</h1>
        <div className='nameF'>Nombre: {unitName}</div>
        <div className='starF'>{stars}</div>
        <div className='specF'>{especial}</div>
        <div className='typeF'>Tipo: {enemyType}</div>
        <div className='sizeF'>Tamaño: {size}</div>
        <div className='weakF'>Debilidad: {weak}</div>
        <div className='resiF'>Resistencia: {resistance}</div>
        <div className='imnuF'>Inmunidad: {immune}</div>
        <div className='condF'>Condicion Inmunidad: {conditionI}</div>
        <div className='pperpF'>Percepción Pasiva: {passivePerception}</div>
        <div className='descF'>Descripción: {description}</div>
        <div className='behaF'>Comportamiento: {behavior} </div>
    <h1 className='caraF'>Caracteristicas</h1>
        <div>Caracteristica: <CharacteristicHandler characteristic={characteristic} setCharacteristic={setCharacteristic}/></div>
    <h1 className='statF'>Estadisticas</h1>
        <div className='strF' style={statsF[0] <= statsR[0] ? {display:'none'}:{display:'flex'}}>Fuerza: {statsF[0]}</div>
        <div className='dexF' style={statsF[1] <= statsR[1] ? {display:'none'}:{display:'flex'}}>Destreza: {statsF[1]}</div>
        <div className='conF' style={statsF[2] <= statsR[2] ? {display:'none'}:{display:'flex'}}>Constitución: {statsF[2]}</div>
        <div className='intF' style={statsF[3] <= statsR[3] ? {display:'none'}:{display:'flex'}}>Inteligencia: {statsF[3]}</div>
        <div className='wilF' style={statsF[4] <= statsR[4] ? {display:'none'}:{display:'flex'}}>Voluntad: {statsF[4]}</div>
        <div className='carF' style={statsF[5] <= statsR[5] ? {display:'none'}:{display:'flex'}}>Carisma: {statsF[5]}</div>
        <div className='strF' style={statsF[0] > statsR[0] ? {display:'none'}:{display:'flex'}}>Fuerza: {statsR[0]}</div>
        <div className='dexF' style={statsF[1] > statsR[1] ? {display:'none'}:{display:'flex'}}>Destreza: {statsR[1]}</div>
        <div className='conF' style={statsF[2] > statsR[2] ? {display:'none'}:{display:'flex'}}>Constitución: {statsR[2]}</div>
        <div className='intF' style={statsF[3] > statsR[3] ? {display:'none'}:{display:'flex'}}>Inteligencia: {statsR[3]}</div>
        <div className='wilF' style={statsF[4] > statsR[4] ? {display:'none'}:{display:'flex'}}>Voluntad: {statsR[4]}</div>
        <div className='carF' style={statsF[5] > statsR[5] ? {display:'none'}:{display:'flex'}}>Carisma: {statsR[5]}</div>
    <h1 className='habiF'>Habilidades</h1>
        <div className='knowK'>
        <h2 className='knowF'>Conocimientos</h2>
            <div className='acadF' style={habilidadesKF[0] <= habilidadesKR[0] ? {display:'none'}:{display:'flex'}}>Academicismo: {habilidadesKF[0]}</div>
            <div className='alquF' style={habilidadesKF[1] <= habilidadesKR[1] ? {display:'none'}:{display:'flex'}}>Alquimia: {habilidadesKF[1]}</div>
            <div className='sorcF' style={habilidadesKF[2] <= habilidadesKR[2] ? {display:'none'}:{display:'flex'}}>Hechicería: {habilidadesKF[2]}</div>
            <div className='infoF' style={habilidadesKF[3] <= habilidadesKR[3] ? {display:'none'}:{display:'flex'}}>Informática: {habilidadesKF[3]}</div>
            <div className='inveF' style={habilidadesKF[4] <= habilidadesKR[4] ? {display:'none'}:{display:'flex'}}>Investigación: {habilidadesKF[4]}</div>
            <div className='lingF' style={habilidadesKF[5] <= habilidadesKR[5] ? {display:'none'}:{display:'flex'}}>Lingüística: {habilidadesKF[5]}</div>
            <div className='mediF' style={habilidadesKF[6] <= habilidadesKR[6] ? {display:'none'}:{display:'flex'}}>Medicina: {habilidadesKF[6]}</div>
            <div className='oculF' style={habilidadesKF[7] <= habilidadesKR[7] ? {display:'none'}:{display:'flex'}}>Ocultismo: {habilidadesKF[7]}</div>
            <div className='teolF' style={habilidadesKF[8] <= habilidadesKR[8] ? {display:'none'}:{display:'flex'}}>Teología: {habilidadesKF[8]}</div>
            <div className='trcaF' style={habilidadesKF[9] <= habilidadesKR[9] ? {display:'none'}:{display:'flex'}}>Trato con Animales: {habilidadesKF[9]}</div>
            <div className='poisF' style={habilidadesKF[10] <= habilidadesKR[10] ? {display:'none'}:{display:'flex'}}>Venenos: {habilidadesKF[10]}</div>
            <div className='acadF' style={habilidadesKF[0] > habilidadesKR[0] ? {display:'none'}:{display:'flex'}}>Academicismo: {habilidadesKR[0]}</div>
            <div className='alquF' style={habilidadesKF[1] > habilidadesKR[1] ? {display:'none'}:{display:'flex'}}>Alquimia: {habilidadesKR[1]}</div>
            <div className='sorcF' style={habilidadesKF[2] > habilidadesKR[2] ? {display:'none'}:{display:'flex'}}>Hechicería: {habilidadesKR[2]}</div>
            <div className='infoF' style={habilidadesKF[3] > habilidadesKR[3] ? {display:'none'}:{display:'flex'}}>Informática: {habilidadesKR[3]}</div>
            <div className='inveF' style={habilidadesKF[4] > habilidadesKR[4] ? {display:'none'}:{display:'flex'}}>Investigación: {habilidadesKR[4]}</div>
            <div className='lingF' style={habilidadesKF[5] > habilidadesKR[5] ? {display:'none'}:{display:'flex'}} >Lingüística: {habilidadesKR[5]}</div>
            <div className='mediF' style={habilidadesKF[6] > habilidadesKR[6] ? {display:'none'}:{display:'flex'}}>Medicina: {habilidadesKR[6]}</div>
            <div className='oculF' style={habilidadesKF[7] > habilidadesKR[7] ? {display:'none'}:{display:'flex'}}>Ocultismo: {habilidadesKR[7]}</div>
            <div className='teolF' style={habilidadesKF[8] > habilidadesKR[8] ? {display:'none'}:{display:'flex'}}>Teología: {habilidadesKR[8]}</div>
            <div className='trcaF' style={habilidadesKF[9] > habilidadesKR[9] ? {display:'none'}:{display:'flex'}}>Trato con Animales: {habilidadesKR[9]}</div>
            <div className='poisF' style={habilidadesKF[10] > habilidadesKR[10] ? {display:'none'}:{display:'flex'}}>Venenos: {habilidadesKR[10]}</div>
        </div>
        <div className='featF'>
        <h2 className='featF'>Proezas</h2>
            <div className='percF' style={habilidadesFF[0] <= habilidadesFR[0] ? {display:'none'}:{display:'flex'}}>Alerta: {habilidadesFF[0]}</div>
            <div className='atleF' style={habilidadesFF[1] <= habilidadesFR[1] ? {display:'none'}:{display:'flex'}}>Atletismo: {habilidadesFF[1]}</div>
            <div className='weapF' style={habilidadesFF[2] <= habilidadesFR[2] ? {display:'none'}:{display:'flex'}}>Armas: {habilidadesFF[2]}</div>
            <div className='batlF' style={habilidadesFF[3] <= habilidadesFR[3] ? {display:'none'}:{display:'flex'}}>Batalla: {habilidadesFF[3]}</div>
            <div className='concF' style={habilidadesFF[4] <= habilidadesFR[4] ? {display:'none'}:{display:'flex'}}>Concentración: {habilidadesFF[4]}</div>
            <div className='drivF' style={habilidadesFF[5] <= habilidadesFR[5] ? {display:'none'}:{display:'flex'}}>Conducir: {habilidadesFF[5]}</div>
            <div className='defeF' style={habilidadesFF[6] <= habilidadesFR[6] ? {display:'none'}:{display:'flex'}}>Defensa: {habilidadesFF[6]}</div>
            <div className='equiF' style={habilidadesFF[7] <= habilidadesFR[7] ? {display:'none'}:{display:'flex'}}>Equitación: {habilidadesFF[7]}</div>
            <div className='forgF' style={habilidadesFF[8] <= habilidadesFR[8] ? {display:'none'}:{display:'flex'}}>Herrería: {habilidadesFF[8]}</div>
            <div className='intiF' style={habilidadesFF[9] <= habilidadesFR[9] ? {display:'none'}:{display:'flex'}}>Intimidación: {habilidadesFF[9]}</div>
            <div className='mechF' style={habilidadesFF[10] <= habilidadesFR[10] ? {display:'none'}:{display:'flex'}}>Mecánica: {habilidadesFF[10]}</div>
            <div className='periF' style={habilidadesFF[11] <= habilidadesFR[11] ? {display:'none'}:{display:'flex'}}>Pericias: {habilidadesFF[11]}</div>
            <div className='stelF' style={habilidadesFF[12] <= habilidadesFR[12] ? {display:'none'}:{display:'flex'}}>Sigilo: {habilidadesFF[12]}</div>
            <div className='supeF' style={habilidadesFF[13] <= habilidadesFR[13] ? {display:'none'}:{display:'flex'}}>Supervivencia: {habilidadesFF[13]}</div>
            <div className='percF' style={habilidadesFF[0] > habilidadesFR[0] ? {display:'none'}:{display:'flex'}}>Alerta: {habilidadesFR[0]}</div>
            <div className='atleF' style={habilidadesFF[1] > habilidadesFR[1] ? {display:'none'}:{display:'flex'}}>Atletismo: {habilidadesFR[1]}</div>
            <div className='weapF' style={habilidadesFF[2] > habilidadesFR[2] ? {display:'none'}:{display:'flex'}}>Armas: {habilidadesFR[2]}</div>
            <div className='batlF' style={habilidadesFF[3] > habilidadesFR[3] ? {display:'none'}:{display:'flex'}}>Batalla: {habilidadesFR[3]}</div>
            <div className='concF' style={habilidadesFF[4] > habilidadesFR[4] ? {display:'none'}:{display:'flex'}}>Concentración: {habilidadesFR[4]}</div>
            <div className='drivF' style={habilidadesFF[5] > habilidadesFR[5] ? {display:'none'}:{display:'flex'}}>Conducir: {habilidadesFR[5]}</div>
            <div className='defeF' style={habilidadesFF[6] > habilidadesFR[6] ? {display:'none'}:{display:'flex'}}>Defensa: {habilidadesFR[6]}</div>
            <div className='equiF' style={habilidadesFF[7] > habilidadesFR[7] ? {display:'none'}:{display:'flex'}}>Equitación: {habilidadesFR[7]}</div>
            <div className='forgF' style={habilidadesFF[8] > habilidadesFR[8] ? {display:'none'}:{display:'flex'}}>Herrería: {habilidadesFR[8]}</div>
            <div className='intiF' style={habilidadesFF[9] > habilidadesFR[9] ? {display:'none'}:{display:'flex'}}>Intimidación: {habilidadesFR[9]}</div>
            <div className='mechF' style={habilidadesFF[10] > habilidadesFR[10] ? {display:'none'}:{display:'flex'}}>Mecánica: {habilidadesFR[10]}</div>
            <div className='periF' style={habilidadesFF[11] > habilidadesFR[11] ? {display:'none'}:{display:'flex'}}>Pericias: {habilidadesFR[11]}</div>
            <div className='stelF' style={habilidadesFF[12] > habilidadesFR[12] ? {display:'none'}:{display:'flex'}}>Sigilo: {habilidadesFR[12]}</div>
            <div className='supeF' style={habilidadesFF[13] > habilidadesFR[13] ? {display:'none'}:{display:'flex'}}>Supervivencia: {habilidadesFR[13]}</div>
        </div>
        <div className='sociF'>
        <h2 className='sociF'>Sociales</h2>
            <div className='cookF' style={habilidadesSF[0] <= habilidadesSR[0] ? {display:'none'}:{display:'flex'}}>Cocina: {habilidadesSF[0]}</div>
            <div className='comeF' style={habilidadesSF[1] <= habilidadesSR[1] ? {display:'none'}:{display:'flex'}}>Comercio: {habilidadesSF[1]}</div>
            <div className='cultF' style={habilidadesSF[2] <= habilidadesSR[2] ? {display:'none'}:{display:'flex'}}>Cultura: {habilidadesSF[2]}</div>
            <div className='emphF' style={habilidadesSF[3] <= habilidadesSR[3] ? {display:'none'}:{display:'flex'}}>Empatía: {habilidadesSF[3]}</div>
            <div className='etiqF' style={habilidadesSF[4] <= habilidadesSR[4] ? {display:'none'}:{display:'flex'}}>Etiqueta: {habilidadesSF[4]}</div>
            <div className='inteF' style={habilidadesSF[5] <= habilidadesSR[5] ? {display:'none'}:{display:'flex'}}>Interpretación: {habilidadesSF[5]}</div>
            <div className='lideF' style={habilidadesSF[6] <= habilidadesSR[6] ? {display:'none'}:{display:'flex'}}>Liderazgo: {habilidadesSF[6]}</div>
            <div className='deceF' style={habilidadesSF[7] <= habilidadesSR[7] ? {display:'none'}:{display:'flex'}}>Subterfugio: {habilidadesSF[7]}</div>
            <div className='cookF' style={habilidadesSF[0] > habilidadesSR[0] ? {display:'none'}:{display:'flex'}}>Cocina: {habilidadesSR[0]}</div>
            <div className='comeF' style={habilidadesSF[1] > habilidadesSR[1] ? {display:'none'}:{display:'flex'}}>Comercio: {habilidadesSR[1]}</div>
            <div className='cultF' style={habilidadesSF[2] > habilidadesSR[2] ? {display:'none'}:{display:'flex'}}>Cultura: {habilidadesSR[2]}</div>
            <div className='emphF' style={habilidadesSF[3] > habilidadesSR[3] ? {display:'none'}:{display:'flex'}}>Empatía: {habilidadesSR[3]}</div>
            <div className='etiqF' style={habilidadesSF[4] > habilidadesSR[4] ? {display:'none'}:{display:'flex'}}>Etiqueta: {habilidadesSR[4]}</div>
            <div className='inteF' style={habilidadesSF[5] > habilidadesSR[5] ? {display:'none'}:{display:'flex'}}>Interpretación: {habilidadesSR[5]}</div>
            <div className='lideF' style={habilidadesSF[6] > habilidadesSR[6] ? {display:'none'}:{display:'flex'}}>Liderazgo: {habilidadesSR[6]}</div>
            <div className='deceF' style={habilidadesSF[7] > habilidadesSR[7] ? {display:'none'}:{display:'flex'}}>Subterfugio: {habilidadesSR[7]}</div>
        </div>
    <div className='combf'>
    <h1 className='combF'>Combate</h1>
        <div className='lifeF'>Vida: {life}</div>
        <div className='inicF'>Iniciativa: {iniciativeTF}k{iniciativeKF}+{iniciativeBonus}</div>
        <div className='evasF'>Evasión: {evasion}</div>
        <div className='armoF'>Armadura: {armor}</div>
        <div className='resiF'>Resistencia Magica: {resist}</div>
        <div className='moveF'>Movimiento: {movement}</div>
        <div className='ataqF'>Ataque Presicion: {attackT}k{attackK}+{attackBonusF}</div>
        <div className='dmgF'>Ataque Daño: {damageT}k{damageK}+{damageBonusF}</div>
    </div>
    <div className='poweF'>
    <h1 className='poweF'>Poderes</h1>
    <PowerHandler powers={powers} setPowers={setPowers} /> 
    </div>
    </div>
    <button  className='submF' onClick={doCapture}>Guardar</button>
        </div>
    );
}


export default UnitCreation