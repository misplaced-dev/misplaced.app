import Header from '../components/Header';
import SignupForm from '../components/SignupForm';
import { AuthService } from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Signup = () => {
    const navigate = useNavigate();

    // if user is not logged in, redirect to home page
    useEffect(() => {
        if (AuthService.isLoggedIn()) {
            navigate('/');
        }
    }, []);

    return (
        <div className="signup">
            <Header />
            <SignupForm  />
        </div>
    );
};

export default Signup;