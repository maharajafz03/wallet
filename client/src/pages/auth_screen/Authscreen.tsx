import { useState } from 'react'
import Signin from './Signin'
import Singup from './Singup'




const Authscreen = () => {

    const [isSignIn, setIsSignIn] = useState<boolean>(false)



const handleClick = () => {
    
    setIsSignIn(prev => (!prev) )
}

  return (
    <div>
    {/* Conditional rendering based on the state */}
    {isSignIn ? (
      <div>
        <Signin />
        <p className='bg-red-500 '>Don't have an account? <button onClick={handleClick}>Sign Up</button></p>
      </div>
    ) : (
      <div>
        <Singup />
        <p>Already have an account? <button onClick={handleClick}>Sign In</button></p>
      </div>
    )}
  </div>
  )
}

export default Authscreen