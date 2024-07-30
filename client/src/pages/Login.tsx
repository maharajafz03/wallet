import React, { useState } from "react";

const Login: React.FC<{ onSwitch: () => void }> = ({ onSwitch }) => {
  
    return (
    <div>
      <p>
        Don't have an account? <button onClick={onSwitch}>Sign Up</button>
      </p>
    </div>
  );
};

export default Login;
