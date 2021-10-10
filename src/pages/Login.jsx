import React,{useState, useRef} from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const Login = () => {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const form = useRef(null);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        form.current[0].value ="";
        form.current[1].value ="";
        try{
            const res = await axios.post('http://localhost:8080/api/auth/login', {
                username,
                password
            });

            console.log(res);
            localStorage.token = res.data.token;
            localStorage.username = username;
        } catch(error){
            return <Redirect to="/get-arterial-data" />
        }
    };
    
    return (
        <div className="Form">
            <h1>Iniciar sesión</h1>
            <form onSubmit={handleSubmit} ref={form}>
                <div className="inp">
                <FontAwesomeIcon icon={faUser} />
                <input type="number" name="username" placeholder="Identificación" onChange={e=>setUsername(e.target.value)}/>
                </div>
                <div className="inp">
                <FontAwesomeIcon icon={faLock} />
                <input type="password" name="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                </div>
                <div className="text">
                    <label ><input type="checkbox" name="remember" /> Recordarme</label>
                    <p>He olvidado mi contraseña</p>
                </div>
                <button>Iniciar sesión</button>
                <Link to="signup"><p>¿No tienes cuenta?</p></Link>
            </form>
        </div>
    )
}

export default Login;
