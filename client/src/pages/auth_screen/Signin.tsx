


// type bttn = {
//     name:string;
// }


const Login: React.FC = () => {

    const handelclick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // fetching mongodb for authverification
    }

  


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
};

export default Login;