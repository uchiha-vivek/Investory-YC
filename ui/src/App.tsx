// import React from 'react';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { auth } from './firebase/config'; // Ensure this is correctly pointing to your firebase config
import Authentication from './pages/Authentication';

function App() {
  // const handleGoogle = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault(); // Prevents any default behavior
  //   try {
  //     const provider = new GoogleAuthProvider(); // No need to use await here
  //     const result = await signInWithPopup(auth, provider);
  //     console.log(result.user); // Log the user for testing purposes
  //   } catch (error) {
  //     console.error('Error signing in with Google:', error);
  //   }
  // };

  return (
    <>
      {/* <button onClick={handleGoogle}>Google</button> */}
      <Authentication/>
    </>
  );
}

export default App;
