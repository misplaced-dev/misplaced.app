import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { AuthService } from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
    const navigate = useNavigate();

    // if user is not logged in, redirect to login page
    useEffect(() => {
        if (!AuthService.isLoggedIn()) {
            navigate('/login');
        }
    }, []);

    return (
        <div>
        <Header />
        <PostCard />
        </div>
    );
}

export default Home;