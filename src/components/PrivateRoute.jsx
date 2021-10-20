import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {Redirect} from 'react-router-dom';

//import { Link } from 'react-router-dom';



// export default function PrivateRoute(props) {
//   const user = null;

//   if (!user) return <Redirect to="/" />

//   return (
    
//     <Route {...props}/>
//   )
// };



 const PrivateRoute = ({ children }) => {
   const { isAuthenticated, isLoading } = useAuth0();

   if (isLoading) return <div>Loading...</div>;

   return isAuthenticated ? (
     <>{children}</>
   ) : (
     <div>       
       <Redirect to="/" />               
     </div>
   );
 };

 export default PrivateRoute;

