import React,{ useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
//import {Redirect} from 'react-router-dom';

 const PrivateRoute = ({ children }) => {
   const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently } = useAuth0();

   useEffect(() => {

    const fetchAuth0Token = async () =>{
      const accessToken = await getAccessTokenSilently({
        audience: `api-autenticacion-trs`,      
    });
    localStorage.setItem('token', accessToken)
    };
    if (isAuthenticated){           //pedir nuevo token cuando expire el anterior
      fetchAuth0Token()
    }   
    
  }, [isAuthenticated, getAccessTokenSilently])

   if (isLoading) return <div>Loading...</div>;

    if (!isAuthenticated){
      return loginWithRedirect();
    }

    return <> {children}</>;
   };


    // return isAuthenticated ? (
    //   <>{children}</>
    // ) : (
    //   <div>       
    //    <Redirect to="/" />               
    //   </div>
    // );

    
  

 export default PrivateRoute;


