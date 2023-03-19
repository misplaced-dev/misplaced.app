import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import { AuthService } from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {
    const navigate = useNavigate();

    // if user is not logged in, redirect to home page
    useEffect(() => {
        if (AuthService.isLoggedIn()) {
            navigate('/');
        }
    }, []);

    return (
        <div className="login">
            <Header />
            <LoginForm />
        </div>
    );
};

export default Login;