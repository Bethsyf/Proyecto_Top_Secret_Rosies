import React from 'react';
import {Redirect, Route} from 'react-router-dom';


export default function PrivateRoute(props) {

  const user = null;

  if (!user) return <Redirect to="/" />

  return (
    
    <Route {...props}/>
  )
};



// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) return <div>Loading...</div>;

//   return isAuthenticated ? (
//     <>{children}</>
//   ) : (
//     <div>
//       <div className='text-9xl text-red-500 '>No estas autorizado para ver este sitio.</div>
//       <Link to='/'>
//         <span className='text-blue-500 font-bold'>Llévame al home</span>
//       </Link>
//     </div>
//   );
// };

