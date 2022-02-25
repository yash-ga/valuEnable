import { useState } from "react"
import { NavLink , useHistory} from "react-router-dom"

export const Signup=()=>{
    const history=useHistory()
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
    const handleSignUp=async ()=>{
        // setSignUp([...signUp,name,email])
        // setName("")
        // setEmail('')

        const res= await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email
            })
        })
        const data=await res.json()
        if(data.status===422||!data){
            window.alert("invalid credentials")
            console.log('invalid  registration');
        }
        else{
            window.alert("successful registration")
            console.log('successful registration');
            history.push("/signin")
        }

        
    }
    return (
        <div>
            <h1>SignUp</h1>
            <form onSubmit={handleSignUp}>

            <input type="text" placeholder="Your Name" value={name} onChange={handleName} />
            <br />
            <input type="password" placeholder="Your Password" />
            <br />
            <input type="email" placeholder="Your Email" value={email} onChange={handleEmail}/>
            <br />
            <select name="#" id="roel">
                <option value="admin">admin</option>
                <option value="customer">customer</option>
                <option value="moderator">moderator</option>
            </select>
            <br />
            <button onClick={handleSignUp}>SignUP</button>
            </form>
            {signUp.map((e,id)=>{return(
                <div key={id}>{e}</div>
            )})}
        </div>
    )
}