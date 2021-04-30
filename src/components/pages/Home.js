import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth } from './../../context/AuthContext'

export default function Home() {
    const { currentUser, logout} = useAuth();
    console.log(currentUser)
    
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m4 l4"></div>
                <div className="col s12 m4 l4">
                    <div className="card-panel center">
                        <h5>User HomePage</h5>
                    </div>
                    <Link to="/" onClick={()=> logout()}>Logout</Link>
                </div>
                <div className="col s12 m4 l4"></div>
            </div>
        </div>
    )

    
}
