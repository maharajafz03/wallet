

const Login: React.FC = () => {




    const handelclick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // fetching mongodb for authverification
    }

    const signup = () => {

    }


    return ( 
       
        <div>
            {/* adding wallet logo */}


            {/* adding wallet name */}
            <h1>Metamsk</h1>

            <form onSubmit={handelclick}>
                <p>Email</p>
                <input type="emailid"/>
                <div></div>
                <p>password</p>
                <input type="password"/>
                <button type="submit">Login</button>
            </form>
            <div>
                <p>Dont have account just <button onClick={signup}> signup </button></p>
            </div>
        </div>

    )
};

export default Login;