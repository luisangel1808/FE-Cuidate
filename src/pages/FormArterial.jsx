import axios from 'axios';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faHeartbeat, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import '../styles/components/Form.css';

const FormArterial = () => {
    const [diastolic, setDiastolic] = useState(0);
    const [systolic, setSystolic] = useState(0);
    const [pulse, setPulse] = useState(0);
    const [observations, setObservations] = useState("");
    const [date, setDate] = useState("");



    const handleSubmit = async (e) =>{
        e.preventDefault();
        await axios.post('http://localhost:8080/api/pressure-measurements/insert', {
            date,
            idPatient:1,
            systolic,
            diastolic,
            pulse,
            observations,
        });
    };

    return (
        <div className="Form">
            <h1>Ingresa tus datos de presión</h1>
            <form onSubmit={handleSubmit}>
                <div className="inp">
                <FontAwesomeIcon icon={faHeartbeat} />
                    <input type="number" name="diastolic" placeholder="Diastólica" onChange={e=>setDiastolic(e.target.value)}/>
                </div>

                <div className="inp">
                <FontAwesomeIcon icon={faHeartbeat} />
                    <input type="number" name="systolic" placeholder="Sistólica" onChange={e=>setSystolic(e.target.value)}/>
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