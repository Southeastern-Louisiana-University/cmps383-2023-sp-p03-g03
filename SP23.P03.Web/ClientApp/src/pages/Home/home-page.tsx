import React from 'react';
import { useNavigate} from 'react-router-dom';
import { routes } from '../../Routes/config';


export function HomePage(): React.ReactElement {
    const navigate = useNavigate();
    return (
        <div>
            <div>Home Page</div>
            <button onClick={() => {navigate('*')}}>
                not found
            </button>
            <button onClick={() => {navigate(routes.signup)}}>
                SignUp Page
            </button>
        </div>
    );
}