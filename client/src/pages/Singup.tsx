




const ComponentName: React.FC = () => {



  const handelclick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // storing mongodb for auth-verification
}

  
  
  
  return (
  
      <div>
        <form onSubmit={handelclick}>
          <p>userName</p>
          <input
          type="username"/>
          <p>MailID</p>
          <input
          type="mailID"/>
          <p>password</p>
          <input
          type="password"/>
          <button type="submit">Singup</button>
        </form>
      </div>

  )
};

export default ComponentName;