import { useState } from "react"

export const Signup=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [signUp,setSignUp]=useState([])
    const handleName=(e)=>{
        console.log(e.target.value)
        setName(e.target.value)
    }
    const handleEmail=(e)=>{
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    const handleSignUp=()=>{
        setSignUp([...signUp,name,email])
        setName("")
        setEmail('')
        
    }
    return (
        <div>
            <h1>SignUp</h1>
            <input type="text" placeholder="Your Name" value={name} onChange={handleName} />
            <input type="password" placeholder="Your Password" />
            <input type="email" placeholder="Your Email" value={email} onChange={handleEmail}/>
            <button onClick={handleSignUp}>SignUP</button>
            {signUp.map((e,id)=>{return(
                <div key={id}>{e}</div>
            )})}
        </div>
    )
}