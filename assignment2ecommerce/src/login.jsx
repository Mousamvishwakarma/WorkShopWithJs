import {useEffect, useState, useRef} from "react"
const Login = () => {
    /* const [username, setUserName]= useState("")
    const [pass, setPass]= useState("") */
    
    const username = useRef('')
    const pass = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault()

       // console.log(username.current.value)
        username.current.style.borderColor = "green"
        console.log(username.current.value)
        //console.log(pass.current.value)
/*         if(pass.current.value.length < 5){
            pass.current.style.borderColor = "red"
        } */
        localStorage.setItem('username',username.current.value)

    }

    useEffect(()=>{
        console.log("screen rendered")
    })
    return (
        <>
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
           {/*  <input type="text" required name="userName"  placeholder="user name" onChange={(e)=> setUserName(e.target.value)}/>
            <input type="password" required name="pass"  placeholder="Password" onChange={(e)=> setPass(e.target.value)}/> */}
            
             <input type="text" required name="userName"  placeholder="user name" ref={username}/>
            <input type="password" required name="pass"  placeholder="Password" ref={pass}/>
            <input type="submit"/>
            </form>

           <p>{username.current.value}</p>
        
        </>

    )
}

export default Login