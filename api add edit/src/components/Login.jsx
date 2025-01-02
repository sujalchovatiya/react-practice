import React from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    // const [formData, setFormData] = React.useState({});

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            email: email,
            password: password
        }

        axios.post("http://localhost:3001/api/noAuth/users/login", data) 
            .then((res) => {
                // setFormData(res.data);
                navigate('/dash');
                console.log(res, "res");
                
            })
            .catch((err) => {
                console.log(err, "err");
            })
    }
    return (


        <div>
            
            <form onSubmit={handleSubmit}>
           
                <div className="container main">

                <h1>Login</h1> <br />
                    <div class="mb-5">
                        <label for="exampleInputEmail1" class="form-label">User Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-5">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div class="mb-5 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>

        </div>

    )
}


export default Login
