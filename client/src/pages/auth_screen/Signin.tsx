<<<<<<< HEAD:client/src/pages/auth_screen/Signin.tsx



// type bttn = {
//     name:string;
// }


const Login: React.FC = () => {

    const handelclick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // fetching mongodb for authverification
    }
=======
import React, { useState } from "react";
>>>>>>> origin/main:client/src/pages/Login.tsx

const Login: React.FC<{ onSwitch: () => void }> = ({ onSwitch }) => {
  
<<<<<<< HEAD:client/src/pages/auth_screen/Signin.tsx


    return ( 
       
        <div>
            {/* adding wallet logo */}


            {/* adding wallet name */}
            <h1>Metamask</h1>

            <form onSubmit={handelclick}>
                <p>Email</p>
                <input type="emailid"/>
                <div></div>
                <p>password</p>
                <input type="password"/>
                <button type="submit">Login</button>
            </form>
            
        </div>

    )
=======
    return (
    <div>
      <p>
        Don't have an account? <button onClick={onSwitch}>Sign Up</button>
      </p>
    </div>
  );
>>>>>>> origin/main:client/src/pages/Login.tsx
};

export default Login;
