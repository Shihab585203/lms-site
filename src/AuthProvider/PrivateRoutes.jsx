import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='flex justify-center items-center my-10'><progress className="progress w-56"></progress></div>;
    }

    if(!user){
        return <Navigate to='/login' state={{ from: location}} replace/>
    }
    return children;
};

export default PrivateRoutes;