import {Link} from "react-router-dom"
import "./App.css"
export const Navbar=()=>{
    return(
        <div className="navbar">
            <Link  to="/">Home</Link>
            <Link  to="/admin">Admin</Link>
            <Link  to="/customer">Customer</Link>
        </div>
    )
}