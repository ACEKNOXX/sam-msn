import React,{useState,useRef,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import { useAuth } from './../../context/AuthContext'


export default function SignIn() {
    const { currentUser,login} = useAuth();
    const history= useHistory()
    const [phase,setPhase] = useState(1)    
    const emailRef = useRef(null)
    const passRef = useRef(null)
    const [email, setEmail] = useState(null)
    const [pass,setPass] = useState(null)
    const [err, setErr] = useState(null)
    const [loading,setLoading] = useState(false)

    

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            setLoading(true)
            await login(email, pass)
            history.push('/home')
        } catch (error) {
            setErr(error.message)
        }
        setLoading(false)

    }

    useEffect(() => {
        if (currentUser) {
            history.push('/home')
        } 
    },[currentUser])
    return (
        <div className="container row" >
            <div className="col s12 m3"></div>
            <div className="col s12 m6 white z-depth-1" style={{
                minHeight:"380px",padding:"35px"
            }}>
                <div className="col s12" style={{ height: "100%"}}>
                    <form >
                    <img src="/assets/logo.png" width="150px" alt="" />
                    <h5 style={{marginTop:"-5px"}}><b>Sign In</b></h5>
                    <div className="row">
                        <div className="col s12">
                            {err && <p className="red-text">{err}</p>}
                        </div>
                        {phase === 1 &&
                            <div className="input-field col s12">
                                <input ref={emailRef} onChange={()=> setEmail(emailRef.current.value)} type="email"  placeholder="Email,phone ot Skype" className="validate" required/>
                            </div>
                        }
                        {phase === 2 &&
                            <div className="input-field col s12">
                                <input ref={passRef} onChange={()=>setPass(passRef.current.value)} type="password" placeholder="Password" className="validate" required/>
                            </div>
                        }
                        
                        <div className="col s12">
                            <span>No account ? <Link to="/register" className="">Create one</Link></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <Link to="/">Sign in with Link security key </Link>
                        </div>
                        {phase ===1 &&
                            <div className="col s12 ">
                                
                                
                                <button
                                    type="button"
                                    onClick={()=>setPhase(2)}
                                    className="right btn-flat center white-text blue"
                                    style={{
                                marginTop:"25px",
                                        paddingLeft: "40px", paddingRight: "40px"
                                    }}>
                                    Next
                                </button>
                            </div>
                        }
                        {phase ===2 &&
                            <div className="col s12 ">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="right btn-flat center white-text blue"
                                    onClick={handleSubmit}
                                    style={{
                                marginTop:"25px",
                                        paddingLeft: "40px", paddingRight: "40px"
                                    }}>
                                    Submit
                                </button>
                                <button 
                                    onClick={()=>setPhase(1)}
                                    className="right btn-flat center blue-text transparent"
                                    style={{
                                    marginTop:"25px",
                                            paddingLeft: "40px", paddingRight: "40px"
                                        }}
                                >
                                    Back
                                </button>
                            </div>
                        }
                    </div>
                    </form>
                </div>
            </div>
            <div className="col s12 m3"></div>
        </div>
    )
}
