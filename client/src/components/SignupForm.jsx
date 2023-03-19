import './SignupForm.css';
import { useState } from 'react';
import { AuthService } from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

const SignupForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // const [loading, setLoading] = useState(false);

    const onSuccess = (credentialResponse) => {
        const token = credentialResponse.credential;
        const decoded = jwt_decode(token);
        console.log(decoded)
      }

      const onError = () => {
        console.log("error")
      }

    const signup = user => async event => {
        event.preventDefault();
        try {
            const res = await AuthService.signup(user);
            if (res.status === 201) {
                AuthService.setToken(res.data._id);
                navigate('/');
            } else if (res.status === 400) {
                setError(res.error);
            }
        } catch (err) {
            console.log(err);
        }
    };





    const handleSubmit = async (e) => {
        e.preventDefault();
        // setLoading(true);
        // call api to signup
        const res = signup({ email, name, username, password });
        if (res.status === 201) {
            history.push('/login');
        }
        else {
            setError(res.error);
        }
    };

    return (
        <div className="signup-form-container">
            <form className="signup-form" onSubmit={signup({"email": email, "fullName": name, "username": username, "password": password})}>
                <h2>Create your account</h2>
                <input
                    className="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input className='native-signup' type="submit" value="Sign up" />
                {error && <p>{error}</p>}
            </form>
            <p className="login-link-container">Already have an account? <a className="login-link">Login</a></p>
            <hr className="signup-break"/>
            <GoogleLogin onSuccess={onSuccess} onError={onError}/>
        </div>
    );
}

export default SignupForm;
