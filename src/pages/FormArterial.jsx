import axios from 'axios';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faHeartbeat, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import '../styles/components/Form.css';
import { Redirect } from 'react-router';

const FormArterial = () => {
    const [diastolic, setDiastolic] = useState(0);
    const [systolic, setSystolic] = useState(0);
    const [pulse, setPulse] = useState(0);
    const [observations, setObservations] = useState("");
    const [date, setDate] = useState("");

    const generateValorate = (systolic, diastolic) =>{
        if(systolic<=80 || diastolic<60){
            return "Hipotensión"
        }
        else if((systolic>=80 && systolic<=119) && (diastolic>=60 && diastolic<=79)){
            return "Normal"
        }
        else if((systolic>=120 && systolic<=139) || (diastolic>=80 && diastolic<=89)){
            return "Elevada"
        }
        else if((systolic>=140 && systolic<=159) || (diastolic>=90 && diastolic<=99)){
            return "Etapa 1 de hipertensión"
        }
        else if((systolic>=160 && systolic<=180) || (diastolic>=100 && diastolic<=120)){
            return "Etapa 2 de hipertensión"
        }
        else if((systolic>180) || (diastolic>110)){
            return "Crisis hipertensiva"
        }
    }



    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const st = generateValorate(systolic, diastolic)
            
            console.log(systolic);
            console.log(diastolic);
            if(st === "Etapa 1 de hipertensión"){
                alert("Se ha reportado a su cuidador inmediatamente")
            }
            if(st === "Etapa 2 de hipertensión"){
                alert("Se ha reportado a su cuidador inmediatamente")
            }
            if(st === "Crisis hipertensiva"){
                alert("Se ha reportado a su cuidador inmediatamente")
            }
            alert(`Valoración: ${st}`);
            

        await axios.post('http://localhost:8080/api/pressure-measurements/insert', {
            date,
            idPatient:1,
            systolic,
            diastolic,
            pulse,
            observations,
            state: st
        });

        }catch(e){
            console.log(e)
        }
    };


    return (
        <div className="Form">
            <h1>Ingresa tus datos de presión</h1>
            <form onSubmit={handleSubmit}>
                <div className="inp">
                <FontAwesomeIcon icon={faHeartbeat} />
                    <input type="number" name="systolic" placeholder="Sistólica" onChange={e=>setSystolic(e.target.value)}/>
                </div>
                <div className="inp">
                <FontAwesomeIcon icon={faHeartbeat} />
                    <input type="number" name="diastolic" placeholder="Diastólica" onChange={e=>setDiastolic(e.target.value)}/>
                </div>
                <div className="inp">
                <FontAwesomeIcon icon={faHeartbeat} />
                    <input type="number" name="pulse" placeholder="Pulso" onChange={e=>setPulse(e.target.value)}/>
                </div>
                <div className="inp">
                <FontAwesomeIcon icon={faFileAlt} />
                    <input type="text" name="observations" placeholder="Observaciones" onChange={e=>setObservations(e.target.value)}/>
                </div>
                <div className="inp">
                <FontAwesomeIcon icon={faCalendarDay} />
                    <input type="datetime-local" name="date" placeholder="Fecha" onChange={e=>setDate(e.target.value)}/>
                </div>
                <button>Registrar</button>
            </form>
        </div>
    )
}

export default FormArterial;