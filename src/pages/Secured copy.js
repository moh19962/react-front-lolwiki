// import React, {useState, useEffect, useContext} from 'react';
// import Logout from './Logout'
// import Keycloak from 'keycloak-js';

// const Secured = () => {

// const [keycloak, setKeycloak] = useState(null);
// const [authenticated, setAuthenticated] = useState(false);


// useEffect(() => {
//     const keycloak = Keycloak('/keycloak.json');
//     keycloak.init({onLoad: 'login-required'}).then(authenticated => {
//       setKeycloak(keycloak)
//       setAuthenticated(authenticated)
//     })
// }, [])




// if(keycloak) {
//         if(authenticated){
//             return (
//                 <>
//                     <div>
//                     <p>
//                         This is a Keycloak-secured component of your application. You shouldn't be able to see this
//                         unless you've authenticated with Keycloak.
//                     </p>
//                     <UserInfo keycloak={this.state.keycloak} />
//                     <Logout keycloak={this.state.keycloak} />
//                     </div>
//                 </>
//             )
//         }
//     }

      
// }

// export default Secured

