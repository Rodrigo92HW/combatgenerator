import { useState } from 'react';
import _ from 'lodash';
import PowerForm from './power/PowerForm';
import PowerHandler from './power/PowerHandler';
import CharacteristicForm from './characteristic/CharacteristicForm';
import CharacteristicHandler from './characteristic/CharacteristicHandler';
import SpecialtyForm from './special/SpecialtyForm';
import SpecialtyHandler from './special/SpecialtyHandler';
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
    let sizemod = _.sampleSize(['Enano', 'Pequeño', 'Medio', 'Grande', 'Gigante', 'Colosal'], 1);
    let types = _.sampleSize(['Ángel', 'Demonio', 'Bestia', 'Aquas', 'Aberraciones', 'Constructos', 'Tales', 'Humanoides', 'Monstruo', 'Planta', 'Muerto-Viviente', 'Alienígenas']);
    const [perceptionBonus, setPerceptionBonus] = useState(0);
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
            setUnitType(unitType);
            setWeak(weakness);
            setImmune(immunities);
            setResistance(resistence);
        } else if(handleDRClick === true) {
            setHandleDRClick('');
            setUnitType(types);
            setSize(sizemod);
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
        var E = document.getElementsByClassName('hab r');
        var m = E.length;
        var n1 = parseInt(Math.random()*m);
        var n2 = parseInt(Math.random()*m);
        var n3 = parseInt(Math.random()*m);
        var n4 = parseInt(Math.random()*m);
        var n5 = parseInt(Math.random()*m);
        var n6 = parseInt(Math.random()*m);
        var n7 = parseInt(Math.random()*m);
        var n8 = parseInt(Math.random()*m);
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
            for (var i=m-1;i>=0;i--) {
                var s = E[i];
                s.style.display='none';
            }
        E[n1].style.display='flex';
        E[n2].style.display='flex';
        E[n3].style.display='flex';
        E[n4].style.display='flex';
        E[n5].style.display='flex';
        E[n6].style.display='flex';
        E[n7].style.display='flex';
        E[n8].style.display='flex';
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
        const movement = Math.floor(Math.max(4, (Math.max(statsF[1], statsR[1]) + Math.max(atlF/2, atlR/2) + Number(movementExtraF))));
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

    //Constructor de Especiales
    const [specialty, setSpecialty] = useState([]);
    const [specialtyName, setSpecialtyName] = useState();
    const [specialtyRequiere, setSpecialtyRequiere] = useState();
    const [specialtyCost, setSpecialtyCost] = useState();
    const [specialtyEffect, setSpecialtyEffect] = useState();


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

    const onFinalSubmit = (e) =>  {
        e.preventDefault();
        if (finalSubmiter === true) {
            document.getElementById('bFinal1').click();
            document.getElementById('bFinal2').click();
            document.getElementById('bFinal3').click();
            document.getElementById('bFinal4').click();
            document.getElementById('bFinal5').click();
            document.getElementById('bFinal6').click();
            setFinalSubmiter(false);
        } else if (finalRandomizer === true) {
            document.getElementById('bRandom1').click();
            document.getElementById('bRandom2').click();
            document.getElementById('bRandom3').click();
            document.getElementById('bRandom5').click();
            document.getElementById('bFinal5').click();
//          setStars(Math.floor(Math.random() * (6 + 1) + 1))
            setFinalRandomizer(false);
        } else {
            console.log('Error404');
        }
    }

    //Modificadores de Display
    let [displayD, setDisplayD] = useState(false);
    let [displayCa, setDisplayCa] = useState(false);
    let [displayCo, setDisplayCo] = useState(false);
    let [displayS, setDisplayS] = useState(false);
    let [displayA, setDisplayA] = useState(false);
    let [displayP, setDisplayP] = useState(false);
    let [displaySp, setDisplaySp] = useState(false);
    let [displaySpe, setDisplaySpe] = useState(false);
    let starDisplay =  'star' + stars;
    let especialDisplay = 'special ' + especial;
    


    //Captura de Pantalla
    const doCapture = () => {
        window.scrollTo(0, 0);
        html2canvas(document.getElementById('saveData')).then(function (canvas) {
            console.log(canvas.toDataURL('image/jpg', 0.9));
            var a = document.createElement('a');
        // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = unitName + '.jpg';
        a.click();
        })
    }

    return (
    <div className='unitContainer'>
        <label className='creatingUnit'>Crear Unidad</label>
        <div className='unitBuilder'>
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
                    <button type='submit' className={specialClass} onClick={() => setEspecial(!especial) | setDisplaySp(!displaySp)}>SSS</button>
                </form>
            </div>
            <div className={true === displayD  ? 'contentD show' : 'contentD'}>
            <div className='dataTitle'>
                <h1>Datos Extra</h1><button className='collapsible' onClick={()=> setDisplayD(!displayD)}>V</button>
            </div>
            <div className='dataExtra'>
                <form className='dataExtra' onSubmit={onSubmitD}>
                    <div className='nameStart'>
                    <h2>Nombre</h2>
                    <input type='text' value={unitName} onChange={(e) => setUnitName(e.target.value)}/>
                    </div>
                    <div className='levelTotal'>
                    <h2>Nivel</h2>
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
                    <h2>Especie</h2>
                    <select type='text' value= {unitType} onChange={(e) => setUnitType(e.target.value)}>
                        <option value='Angel'>Ángel</option>
                        <option value='Demonio'>Demonio</option>
                        <option value='Bestia'>Bestia</option>
                        <option value='Aquas'>Aquas</option>
                        <option value='Aberraciones'>Aberraciones</option>
                        <option value='Constructos'>Constructos</option>
                        <option value='Tales'>Tales</option>
                        <option value='Humanoides'>Humanoides</option>
                        <option value='Monstruo'>Monstruo</option>
                        <option value='Planta'>Planta</option>
                        <option value='Muerto-Viviente'>Muerto-Viviente</option>
                        <option value='Alienigenas'>Alienígenas</option>
                    </select>
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
                    <h2>Inmune a</h2>
                    <input type='text' value= {conditionI} onChange={(e) => setConditionI(e.target.value)}/>
                    </div>
                    <div className='percStart'>
                    <h2>Percepción Bonus</h2>
                    <input type='number' value= {perceptionBonus} onChange={(e) => setPerceptionBonus(e.target.value)}/>
                    </div>
                    <div className='behaStart'>
                    <h2>Comportamiento</h2>
                    <textarea value= {behavior} onChange={(e) => setBehavior(e.target.value)} cols='30' rows='10'></textarea>
                    </div>
                    <div className='descStart'>
                    <h2>Descripción</h2>
                    <textarea value= {description} onChange={(e) => setDescription(e.target.value)} cols='30' rows='10'></textarea>
                    </div>
                    <div className='buttondata'>
                    <button className='dataButtonF frm' onClick={() => setHandleDClick(!handleDClick)} id='bFinal1' type='submit'><span>Aplicar</span></button>
                    <button className='dataButtonR frm' onClick={() => setHandleDRClick(!handleDRClick)} id='bRandom1' type='submit'><span>Randomizar</span></button>
                    </div>
                </form>
                </div>
            </div>
            <div className={true === displayCa  ? 'contentCa show' : 'contentCa'}>
            <div className='dataCar'>
                <h1>Caracteristica</h1><button className='collapsible' onClick={()=> setDisplayCa(!displayCa)}>V</button>
            </div>
            <div className='Characteristic'>
                <CharacteristicForm
                characteristic={characteristic} setCharacteristic={setCharacteristic}
                characteristicName={characteristicName} setCharacteristicName={setCharacteristicName}
                characteristicEffect={characteristicEffect} setCharacteristicEffect={setCharacteristicEffect}
                characteristicUses={characteristicUses} setCharacteristicUses={setCharacteristicUses}
                />
            </div></div>
            <div className={true === displayCo  ? 'contentCo show' : 'contentCo'}>
            <div className='dataCombat'>
                <h1>Combate</h1><button className='collapsible' onClick={()=> setDisplayCo(!displayCo)}>V</button>
            </div>
                <form className='Combat' onSubmit={onSubmitC}>
                <div className='Combat'>
                    <div className='life'>
                    <label>Vida Extra</label>
                    <input type='number' value={lifeExtra} onChange={(e) => setLifeExtra(e.target.value)}/>
                    </div>
                    <div className='iniTC'> 
                    <label>Iniciativa Tirada</label>
                    <input type='number' value={iniciativeTExtra} onChange={(e) => setIniciativeTExtra(e.target.value)}/>
                    </div>
                    <div className='iniKC'> 
                    <label>Iniciativa Guardada</label>
                    <input type='number' value={iniciativeKExtra} onChange={(e) => setIniciativeKExtra(e.target.value)}/>
                    </div>
                    <div className='iniEC'> 
                    <label>Iniciativa Fija</label>
                    <input type='number' value={iniciativeExtra} onChange={(e) => setIniciativeExtra(e.target.value)}/>
                    </div>
                    <div className='evasion'>
                    <label>Evasión Extra</label>
                    <input type='number' value={evasionExtra} onChange={(e) => setEvasionExtra(e.target.value)}/>
                    </div>
                    <div className='armor'>
                    <label>Armadura Extra</label>
                    <input type='number' value={armorExtra} onChange={(e) => setArmorExtra(e.target.value)}/>
                    </div>
                    <div className='resist'>
                    <label>Resistencia Extra</label>
                    <input type='number' value={resistExtra} onChange={(e) => setResistExtra(e.target.value)}/>
                    </div>
                    <div className='movement'>
                    <label>Movimiento Extra</label>
                    <input type='number' value={movementExtra} onChange={(e) => setMovementExtra(e.target.value)}/>
                    </div>
                    <div className='accTC'>
                    <label>Presición Tirada</label>
                    <input type='number' value={attackTExtra} onChange={(e) => setAttackTExtra(e.target.value)}/>
                    </div>
                    <div className='accKC'>
                    <label>Presición Guardada</label>
                    <input type='number' value={attackKExtra} onChange={(e) => setAttackKExtra(e.target.value)}/>
                    </div>
                    <div className='accEC'>
                    <label>Presición Extra</label>
                    <input type='number' value={attackBonus} onChange={(e) => setAttackBonus(e.target.value)}/>
                    </div>
                    <div className='dmgTC'>
                    <label>Daño Tirada</label>
                    <input type='number' value={damageTExtra} onChange={(e) => setDamageTExtra(e.target.value)}/>
                    </div>
                    <div className='dmgKC'>
                    <label>Daño Guardada</label>
                    <input type='number' value={damageKExtra} onChange={(e) => setDamageKExtra(e.target.value)}/>
                    </div>
                    <div className='dmgEC'>
                    <label>Daño Extra</label>
                    <input type='number' value={damageBonus} onChange={(e) => setDamageBonus(e.target.value)}/>
                    </div>
                    <div className='combatClick'>
                    <button className='combatButtonF frm' onClick={() => setHandleCClick(!handleCClick)} type='submit'><span>Aplicar</span></button>
                    </div>
                </div>
            </form></div>
            <div className={true === displayS  ? 'contentS show' : 'contentS'}>
                <div className='dataStats'>
                <h1>Estadisticas</h1><button className='collapsible' onClick={()=> setDisplayS(!displayS)}>V</button>
            </div>
            <div className='unitStats'>
                <form className='Stats' onSubmit={onSubmit}>
                <div className='Body'>
                    <label>Fuerza</label>
                    <input type='number' placeholder='1' value={str} onChange={(e) => setStr(e.target.value)}></input>
                    <label>Destreza</label>
                    <input type='number' placeholder='1' value={dex} onChange={(e) => setDex(e.target.value)}></input>
                    <label>Constitución</label>
                    <input type='number' placeholder='1' value={con} onChange={(e) => setCon(e.target.value)}></input>
                </div>
                <div className='Mind'>
                    <label>Inteligencia</label>
                    <input type='number' placeholder='1' value={int} onChange={(e) => setInt(e.target.value)}></input>
                    <label>Voluntad</label>
                    <input type='number' placeholder='1' value={will} onChange={(e) => setWill(e.target.value)}></input>
                    <label>Carisma</label>
                    <input type='number' placeholder='1' value={cha} onChange={(e) => setCha(e.target.value)}></input>
                </div>
                <button className='statButtonF frm' onClick={() => setHandleClick(!handleClick)} id='bFinal2' type='submit'><span>Aplicar</span></button>
                <button className='statButtonR frm' onClick={() => setHandleRandomClick(!handleRandomClick)} id='bRandom2' type='submit'><span>Randomizar</span></button>
                </form> 
            </div></div>
            <div className={true === displayA  ? 'contentA show' : 'contentA'}>
            <div className='dataAbilities'>
                <h1>Habilidades</h1><button className='collapsible' onClick={()=> setDisplayA(!displayA)}>V</button>
            </div>
            <div className='unitAbilities'>
            <form className='Abilities' onSubmit={onSubmitH}>
                    <div className='Knowledge'>
                    <h2 className='Knowledge'>Conocimientos</h2>
                        <label>Academisismo</label>
                        <input type='number' placeholder='1' value={aca} onChange={(e) => setAca(e.target.value)}></input><br />
                        <label>Alquimia</label>
                        <input type='number' placeholder='1' value={alq} onChange={(e) => setAlq(e.target.value)}></input><br />
                        <label>Hechicería</label>
                        <input type='number' placeholder='1' value={hec} onChange={(e) => setHec(e.target.value)}></input><br />
                        <label>Informática</label>
                        <input type='number' placeholder='1' value={inf} onChange={(e) => setInf(e.target.value)}></input><br />
                        <label>Investigación</label>
                        <input type='number' placeholder='1' value={inv} onChange={(e) => setInv(e.target.value)}></input><br />
                        <label>Lingüística</label>
                        <input type='number' placeholder='1' value={lin} onChange={(e) => setLin(e.target.value)}></input><br />
                        <label>Medicina</label>
                        <input type='number' placeholder='1' value={med} onChange={(e) => setMed(e.target.value)}></input><br />
                        <label>Ocultismo</label>
                        <input type='number' placeholder='1' value={ocu} onChange={(e) => setOcu(e.target.value)}></input><br />
                        <label>Teología</label>
                        <input type='number' placeholder='1' value={teo} onChange={(e) => setTeo(e.target.value)}></input><br />
                        <label>Trato con Anim</label>
                        <input type='number' placeholder='1' value={tca} onChange={(e) => setTca(e.target.value)}></input><br />
                        <label>Venenos</label>
                        <input type='number' placeholder='1' value={ven} onChange={(e) => setVen(e.target.value)}></input><br />
                    </div>
                    <div className='Feats'>
                    <h2 className='Feats'>Proezas</h2>
                        <label>Alerta</label>
                        <input type='number' placeholder='1' value={ale} onChange={(e) => setAle(e.target.value)}></input><br />
                        <label>Atletismo</label>
                        <input type='number' placeholder='1' value={atl} onChange={(e) => setAtl(e.target.value)}></input><br />
                        <label>Armas</label>
                        <input type='number' placeholder='1' value={arm} onChange={(e) => setArm(e.target.value)}></input><br />
                        <label>Batalla</label>
                        <input type='number' placeholder='1' value={bat} onChange={(e) => setBat(e.target.value)}></input><br />
                        <label>Concentración</label>
                        <input type='number' placeholder='1' value={conc} onChange={(e) => setConc(e.target.value)}></input><br />
                        <label>Conducir</label>
                        <input type='number' placeholder='1' value={cond} onChange={(e) => setCond(e.target.value)}></input><br />
                        <label>Defensa</label>
                        <input type='number' placeholder='1' value={def} onChange={(e) => setDef(e.target.value)}></input><br />
                        <label>Equitación</label>
                        <input type='number' placeholder='1' value={equ} onChange={(e) => setEqu(e.target.value)}></input><br />
                        <label>Herrería</label>
                        <input type='number' placeholder='1' value={her} onChange={(e) => setHer(e.target.value)}></input><br />
                        <label>Intimidación</label>
                        <input type='number' placeholder='1' value={inti} onChange={(e) => setInti(e.target.value)}></input><br />
                        <label>Mecánica</label>
                        <input type='number' placeholder='1' value={mec} onChange={(e) => setMec(e.target.value)}></input><br />
                        <label>Pericias</label>
                        <input type='number' placeholder='1' value={per} onChange={(e) => setPer(e.target.value)}></input><br />
                        <label>Sigilo</label>
                        <input type='number' placeholder='1' value={sig} onChange={(e) => setSig(e.target.value)}></input><br />
                        <label>Supervivencia</label>
                        <input type='number' placeholder='1' value={sup} onChange={(e) => setSup(e.target.value)}></input><br />
                    </div>
                    <div className='Socials'>
                    <h2 className='Socials'>Sociales</h2>
                        <label>Cocina</label>
                        <input type='number' placeholder='1' value={coc} onChange={(e) => setCoc(e.target.value)}></input><br />
                        <label>Comercio</label>
                        <input type='number' placeholder='1' value={com} onChange={(e) => setCom(e.target.value)}></input><br />
                        <label>Cultura</label>
                        <input type='number' placeholder='1' value={cul} onChange={(e) => setCul(e.target.value)}></input><br />
                        <label>Empatía</label>
                        <input type='number' placeholder='1' value={emp} onChange={(e) => setEmp(e.target.value)}></input><br />
                        <label>Etiqueta</label>
                        <input type='number' placeholder='1' value={eti} onChange={(e) => setEti(e.target.value)}></input><br />
                        <label>Interpretación</label>
                        <input type='number' placeholder='1' value={inte} onChange={(e) => setInte(e.target.value)}></input><br />
                        <label>Liderazgo</label>
                        <input type='number' placeholder='1' value={lid} onChange={(e) => setLid(e.target.value)}></input><br />
                        <label>Subterfugio</label>
                        <input type='number' placeholder='1' value={sub} onChange={(e) => setSub(e.target.value)}></input><br />
                    </div>
                    <button className='abilitiesButtonS frm' onClick={() => setHandleHClick(!handleHClick)} type='submit' id='bFinal3'><span>Aplicar</span></button>
                    <button className='abilitiesButtonR frm' onClick={() => setHandleHRandomClick(!handleHRandomClick)} type='submit' id='bRandom3'><span>Randomizar</span></button>
            </form> 
            </div></div>
            <div className={true === displayP  ? 'contentP show' : 'contentP'}>
            <div className='dataPowers'>
                <h1>Poderes</h1><button className='collapsible' onClick={()=> setDisplayP(!displayP)}>V</button>
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
            </div></div>
            <div style={true <= displaySp ? {display:''}:{display:'none'}}>
            <div className={true === displaySpe  ? 'contentSpe show' : 'contentSpe'}>
            <div className='specialTitle'>
                <h1>Especial</h1><button className='collapsible' onClick={()=> setDisplaySpe(!displaySpe)}>V</button>
            </div>
            <div className='specialF'>
                <SpecialtyForm
                specialty={specialty} setSpecialty={setSpecialty}
                specialtyName={specialtyName} setSpecialtyName={setSpecialtyName}
                specialtyRequiere={specialtyRequiere} setSpecialtyRequiere={setSpecialtyRequiere}
                specialtyCost={specialtyCost} setSpecialtyCost={setSpecialtyCost}
                specialtyEffect={specialtyEffect} setSpecialtyEffect={setSpecialtyEffect}
                />
            </div>
            </div>
            </div>
            <div className='finalSubmit'>
                <form className='finalSubmit' onSubmit={onFinalSubmit}>
                    <button className='frm' id='finalButton' onClick={() => setFinalSubmiter(!finalSubmiter) | document.getElementById('bFinal1').click() | document.getElementById('bFinal2').click()
                 | document.getElementById('bFinal3').click() | document.getElementById('bFinal4').click() | document.getElementById('bFinal5').click()
                 | document.getElementById('bFinal6').click()}><span>Submitear Todo</span></button>
                    <button className='frm' onClick={() => setFinalRandomizer(!finalRandomizer) | document.getElementById('bRandom1').click() | document.getElementById('bRandom2').click()
                 | document.getElementById('bRandom3').click() | document.getElementById('bRandom4').click() | document.getElementById('bRandom5').click()
                 | document.getElementById('bRandom6').click() }><span>Randomizar Todo</span></button>
                </form>
            </div>
        </div>
    <div className={especialDisplay}>
        <div className='finalSheet' id='saveData'>
        <div className='nameF'><h1>{unitName}</h1></div>
        <div className='finalStars'><div className={starDisplay}></div></div>
        <div className='leftSide'>
    <div className='informF'>
    <h1>Información</h1>
        <div className='typeF'><span className='in'>Especie:</span><span className='inD'>{unitType}</span></div>
        <div className='sizeF'><span className='in'>Tamaño:</span><span className='inD'>{size}</span></div>
        <div className='weakF'><span className='in'>Debilidad:</span><span className='inD'>{weak}</span></div>
        <div className='resiF'><span className='in'>Resistencia:</span><span className='inD'>{resistance}</span></div>
        <div className='imnuF'><span className='in'>Inmunidad:</span><span className='inD'>{immune}</span></div>
        <div className='condF'><span className='in'>Inmune a:</span><span className='inD'>{conditionI}</span></div>
        <div className='pperpF'><span className='in'>Percepción:</span><span className='inD'>{passivePerception}</span></div>
    </div>
    <h1 className='caraF'>Caracteristicas</h1>
    <CharacteristicHandler characteristic={characteristic} setCharacteristic={setCharacteristic}/>
        <div className='habiF'>
        <h1>Habilidades</h1>
            <div className='hab acadF' style={habilidadesKF[0] <= habilidadesKR[0] ? {display:'none'}:{display:'flex'}}><h2>Academicismo:</h2><span>{habilidadesKF[0]}</span></div>
            <div className='hab alquF' style={habilidadesKF[1] <= habilidadesKR[1] ? {display:'none'}:{display:'flex'}}><h2>Alquimia:</h2><span>{habilidadesKF[1]}</span></div>
            <div className='hab sorcF' style={habilidadesKF[2] <= habilidadesKR[2] ? {display:'none'}:{display:'flex'}}><h2>Hechicería:</h2><span>{habilidadesKF[2]}</span></div>
            <div className='hab infoF' style={habilidadesKF[3] <= habilidadesKR[3] ? {display:'none'}:{display:'flex'}}><h2>Informática:</h2><span>{habilidadesKF[3]}</span></div>
            <div className='hab inveF' style={habilidadesKF[4] <= habilidadesKR[4] ? {display:'none'}:{display:'flex'}}><h2>Investigación:</h2><span>{habilidadesKF[4]}</span></div>
            <div className='hab lingF' style={habilidadesKF[5] <= habilidadesKR[5] ? {display:'none'}:{display:'flex'}}><h2>Lingüística:</h2><span>{habilidadesKF[5]}</span></div>
            <div className='hab mediF' style={habilidadesKF[6] <= habilidadesKR[6] ? {display:'none'}:{display:'flex'}}><h2>Medicina:</h2><span>{habilidadesKF[6]}</span></div>
            <div className='hab oculF' style={habilidadesKF[7] <= habilidadesKR[7] ? {display:'none'}:{display:'flex'}}><h2>Ocultismo:</h2><span>{habilidadesKF[7]}</span></div>
            <div className='hab teolF' style={habilidadesKF[8] <= habilidadesKR[8] ? {display:'none'}:{display:'flex'}}><h2>Teología:</h2><span>{habilidadesKF[8]}</span></div>
            <div className='hab trcaF' style={habilidadesKF[9] <= habilidadesKR[9] ? {display:'none'}:{display:'flex'}}><h2>Trato con Animales:</h2><span>{habilidadesKF[9]}</span></div>
            <div className='hab poisF' style={habilidadesKF[10] <= habilidadesKR[10] ? {display:'none'}:{display:'flex'}}><h2>Venenos:</h2><span>{habilidadesKF[10]}</span></div>
            <div className='hab acadF' style={{display:'none'}}><h2>Academicismo:</h2><span>{habilidadesKR[0]}</span></div>
            <div className='hab alquF' style={{display:'none'}}><h2>Alquimia:</h2><span>{habilidadesKR[1]}</span></div>
            <div className='hab sorcF' style={{display:'none'}}><h2>Hechicería:</h2><span>{habilidadesKR[2]}</span></div>
            <div className='hab infoF' style={{display:'none'}}><h2>Informática:</h2><span>{habilidadesKR[3]}</span></div>
            <div className='hab inveF' style={{display:'none'}}><h2>Investigación:</h2><span>{habilidadesKR[4]}</span></div>
            <div className='hab lingF' style={{display:'none'}}><h2>Lingüística:</h2><span>{habilidadesKR[5]}</span></div>
            <div className='hab mediF' style={{display:'none'}}><h2>Medicina:</h2><span>{habilidadesKR[6]}</span></div>
            <div className='hab oculF' style={{display:'none'}}><h2>Ocultismo:</h2><span>{habilidadesKR[7]}</span></div>
            <div className='hab teolF' style={{display:'none'}}><h2>Teología:</h2><span>{habilidadesKR[8]}</span></div>
            <div className='hab trcaF' style={{display:'none'}}><h2>Trato con Animales:</h2><span>{habilidadesKR[9]}</span></div>
            <div className='hab poisF' style={{display:'none'}}><h2>Venenos:</h2><span>{habilidadesKR[10]}</span></div>
            <div className='perc' style={{display:'flex'}}><h2>Alerta:</h2><span>{Math.max(habilidadesFF[0] , habilidadesFR[0])}</span></div>
            <div className='hab atleF' style={habilidadesFF[1] <= habilidadesFR[1] ? {display:'none'}:{display:'flex'}}><h2>Atletismo:</h2><span>{habilidadesFF[1]}</span></div>
            <div className='weap' style={{display:'flex'}}><h2>Armas:</h2><span>{Math.max(habilidadesFF[2] , habilidadesFR[2])}</span></div>
            <div className='hab batlF' style={habilidadesFF[3] <= habilidadesFR[3] ? {display:'none'}:{display:'flex'}}><h2>Batalla:</h2><span>{habilidadesFF[3]}</span></div>
            <div className='hab concF' style={habilidadesFF[4] <= habilidadesFR[4] ? {display:'none'}:{display:'flex'}}><h2>Concentración:</h2><span>{habilidadesFF[4]}</span></div>
            <div className='hab drivF' style={habilidadesFF[5] <= habilidadesFR[5] ? {display:'none'}:{display:'flex'}}><h2>Conducir:</h2><span>{habilidadesFF[5]}</span></div>
            <div className='hab defeF' style={habilidadesFF[6] <= habilidadesFR[6] ? {display:'none'}:{display:'flex'}}><h2>Defensa:</h2><span>{habilidadesFF[6]}</span></div>
            <div className='hab equiF' style={habilidadesFF[7] <= habilidadesFR[7] ? {display:'none'}:{display:'flex'}}><h2>Equitación:</h2><span>{habilidadesFF[7]}</span></div>
            <div className='hab forgF' style={habilidadesFF[8] <= habilidadesFR[8] ? {display:'none'}:{display:'flex'}}><h2>Herrería:</h2><span>{habilidadesFF[8]}</span></div>
            <div className='hab intiF' style={habilidadesFF[9] <= habilidadesFR[9] ? {display:'none'}:{display:'flex'}}><h2>Intimidación:</h2><span>{habilidadesFF[9]}</span></div>
            <div className='hab mechF' style={habilidadesFF[10] <= habilidadesFR[10] ? {display:'none'}:{display:'flex'}}><h2>Mecánica:</h2><span>{habilidadesFF[10]}</span></div>
            <div className='hab periF' style={habilidadesFF[11] <= habilidadesFR[11] ? {display:'none'}:{display:'flex'}}><h2>Pericias:</h2><span>{habilidadesFF[11]}</span></div>
            <div className='hab stelF' style={habilidadesFF[12] <= habilidadesFR[12] ? {display:'none'}:{display:'flex'}}><h2>Sigilo:</h2><span>{habilidadesFF[12]}</span></div>
            <div className='hab supeF' style={habilidadesFF[13] <= habilidadesFR[13] ? {display:'none'}:{display:'flex'}}><h2>Supervivencia:</h2><span>{habilidadesFF[13]}</span></div>
            <div className='hab r atleF' style={{display:'none'}}><h2>Atletismo:</h2><span>{habilidadesFR[1]}</span></div>
            <div className='hab r batlF' style={{display:'none'}}><h2>Batalla:</h2><span>{habilidadesFR[3]}</span></div>
            <div className='hab r concF' style={{display:'none'}}><h2>Concentración:</h2><span>{habilidadesFR[4]}</span></div>
            <div className='hab r drivF' style={{display:'none'}}><h2>Conducir:</h2><span>{habilidadesFR[5]}</span></div>
            <div className='hab r defeF' style={{display:'none'}}><h2>Defensa:</h2><span>{habilidadesFR[6]}</span></div>
            <div className='hab r equiF' style={{display:'none'}}><h2>Equitación:</h2><span>{habilidadesFR[7]}</span></div>
            <div className='hab r forgF' style={{display:'none'}}><h2>Herrería:</h2><span>{habilidadesFR[8]}</span></div>
            <div className='hab r intiF' style={{display:'none'}}><h2>Intimidación:</h2><span>{habilidadesFR[9]}</span></div>
            <div className='hab r mechF' style={{display:'none'}}><h2>Mecánica:</h2><span>{habilidadesFR[10]}</span></div>
            <div className='hab r periF' style={{display:'none'}}><h2>Pericias:</h2><span>{habilidadesFR[11]}</span></div>
            <div className='hab r stelF' style={{display:'none'}}><h2>Sigilo:</h2><span>{habilidadesFR[12]}</span></div>
            <div className='hab r supeF' style={{display:'none'}}><h2>Supervivencia:</h2><span>{habilidadesFR[13]}</span></div>
            <div className='hab cookF' style={habilidadesSF[0] <= habilidadesSR[0] ? {display:'none'}:{display:'flex'}}><h2>Cocina:</h2><span>{habilidadesSF[0]}</span></div>
            <div className='hab comeF' style={habilidadesSF[1] <= habilidadesSR[1] ? {display:'none'}:{display:'flex'}}><h2>Comercio:</h2><span>{habilidadesSF[1]}</span></div>
            <div className='hab cultF' style={habilidadesSF[2] <= habilidadesSR[2] ? {display:'none'}:{display:'flex'}}><h2>Cultura:</h2><span>{habilidadesSF[2]}</span></div>
            <div className='hab emphF' style={habilidadesSF[3] <= habilidadesSR[3] ? {display:'none'}:{display:'flex'}}><h2>Empatía:</h2><span>{habilidadesSF[3]}</span></div>
            <div className='hab etiqF' style={habilidadesSF[4] <= habilidadesSR[4] ? {display:'none'}:{display:'flex'}}><h2>Etiqueta:</h2><span>{habilidadesSF[4]}</span></div>
            <div className='hab inteF' style={habilidadesSF[5] <= habilidadesSR[5] ? {display:'none'}:{display:'flex'}}><h2>Interpretación:</h2><span>{habilidadesSF[5]}</span></div>
            <div className='hab lideF' style={habilidadesSF[6] <= habilidadesSR[6] ? {display:'none'}:{display:'flex'}}><h2>Liderazgo:</h2><span>{habilidadesSF[6]}</span></div>
            <div className='hab deceF' style={habilidadesSF[7] <= habilidadesSR[7] ? {display:'none'}:{display:'flex'}}><h2>Subterfugio:</h2><span>{habilidadesSF[7]}</span></div>
            <div className='hab r cookF' style={{display:'none'}}><h2>Cocina:</h2><span>{habilidadesSR[0]}</span></div>
            <div className='hab r comeF' style={{display:'none'}}><h2>Comercio:</h2><span>{habilidadesSR[1]}</span></div>
            <div className='hab r cultF' style={{display:'none'}}><h2>Cultura:</h2><span>{habilidadesSR[2]}</span></div>
            <div className='hab r emphF' style={{display:'none'}}><h2>Empatía:</h2><span>{habilidadesSR[3]}</span></div>
            <div className='hab r etiqF' style={{display:'none'}}><h2>Etiqueta:</h2><span>{habilidadesSR[4]}</span></div>
            <div className='hab r inteF' style={{display:'none'}}><h2>Interpretación:</h2><span>{habilidadesSR[5]}</span></div>
            <div className='hab r lideF' style={{display:'none'}}><h2>Liderazgo:</h2><span>{habilidadesSR[6]}</span></div>
            <div className='hab r deceF' style={{display:'none'}}><h2>Subterfugio:</h2><span>{habilidadesSR[7]}</span></div>
        </div>
        </div>
        <div className='rightSide'>
        <div className='statsF'>
    <h1>Estadisticas</h1>
        <div className='strF' style={statsF[0] <= statsR[0] ? {display:'none'}:{display:''}}><h2>{statsF[0]}</h2><span>Fue</span></div>
        <div className='dexF' style={statsF[1] <= statsR[1] ? {display:'none'}:{display:''}}><h2>{statsF[1]}</h2><span>Des</span></div>
        <div className='conF' style={statsF[2] <= statsR[2] ? {display:'none'}:{display:''}}><h2>{statsF[2]}</h2><span>Con</span></div>
        <div className='intF' style={statsF[3] <= statsR[3] ? {display:'none'}:{display:''}}><h2>{statsF[3]}</h2><span>Int</span></div>
        <div className='wilF' style={statsF[4] <= statsR[4] ? {display:'none'}:{display:''}}><h2>{statsF[4]}</h2><span>Vol</span></div>
        <div className='chaF' style={statsF[5] <= statsR[5] ? {display:'none'}:{display:''}}><h2>{statsF[5]}</h2><span>Car</span></div>
        <div className='strF' style={statsF[0] > statsR[0] ? {display:'none'}:{display:''}}><h2>{statsR[0]}</h2><span>Fue</span></div>
        <div className='dexF' style={statsF[1] > statsR[1] ? {display:'none'}:{display:''}}><h2>{statsR[1]}</h2><span>Des</span></div>
        <div className='conF' style={statsF[2] > statsR[2] ? {display:'none'}:{display:''}}><h2>{statsR[2]}</h2><span>Con</span></div>
        <div className='intF' style={statsF[3] > statsR[3] ? {display:'none'}:{display:''}}><h2>{statsR[3]}</h2><span>Int</span></div>
        <div className='wilF' style={statsF[4] > statsR[4] ? {display:'none'}:{display:''}}><h2>{statsR[4]}</h2><span>Vol</span></div>
        <div className='carF' style={statsF[5] > statsR[5] ? {display:'none'}:{display:''}}><h2>{statsR[5]}</h2><span>Car</span></div>
    </div>
        <div className='combf'>
            <h1>Combate</h1>
                <div className='lifeF'><span>{life}</span></div>
                <div className='iniholder'></div>
                <div className='inicF'><span>{iniciativeTF}k{iniciativeKF}+{iniciativeBonus}</span></div>
                <div className='moveF'><span>{movement}</span></div>
                <div className='evasF'><span>{evasion}</span></div>
                <div className='armoF'><span>{armor}</span></div>
                <div className='resF'><span>{resist}</span></div>
                <div className='atkholder'></div>
                <div className='ataqF'><span>{attackT}k{attackK}+{attackBonusF}</span></div>
                <div className='dmgholder'></div>
                <div className='dmgF'><span>{damageT}k{damageK}+{damageBonusF}</span></div>
        </div>
        <h1 className='poweF'>Poderes</h1>
        <PowerHandler powers={powers} setPowers={setPowers} /> 
        </div>
        <div className='specF' style={true <= displaySp ? {display:''}:{display:'none'}}>
        <h1 className='specF'>Especialidades</h1>
        <SpecialtyHandler specialty={specialty} setSpecialty={setSpecialty}/>
        </div>
            <div className='descF' style={description > '' ? {display:''}:{display:'none'}}><h2 className='in'>Descripción</h2><span className='inDL'>{description}</span></div>
            <div className='behaF' style={behavior > '' ? {display:''}:{display:'none'}}><h2 className='in'>Comportamiento</h2><span className='inDL'>{behavior}</span></div>
        </div>
        </div>
        <button  className='submF' onClick={doCapture}>Guardar</button>
    </div>
    );
}


export default UnitCreation