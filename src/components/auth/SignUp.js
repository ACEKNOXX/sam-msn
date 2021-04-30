import React,{useState,useRef} from 'react'
import {Link,useHistory} from 'react-router-dom'
import { useAuth } from './../../context/AuthContext'

export default function SignUp() {
    const { signup } = useAuth();
    const history = useHistory()
    const [phase,setPhase] = useState(1)    
    const emailRef = useRef(null)
    const passRef = useRef(null)
    const [email, setEmail] = useState(null)
    const [pass,setPass] = useState(null)
    const [err, setErr] = useState(null)
    const [loading, setLoading] = useState(false)
    

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            setErr("")
            setLoading(true)

            
            console.log("email=",email)
            console.log("pass=",pass)
            alert(email)

            await signup(email,pass)
            history.push("/")
        } catch (error) {
            console.log(error)
            setErr(error.message)
        }
            setLoading(false)

    }


    return (
        <div className="container row" >
            <div className="col s12 m3"></div>
            <div className="col s12 m6 white z-depth-1" style={{
                minHeight:"380px",padding:"35px"
            }}>
                <div className="col s12" style={{ height: "100%"}}>
                    <form >
                    <img src="/assets/logo.png" width="150px" alt="" />
                    <h5 style={{marginTop:"-5px"}}><b>Sign Up</b></h5>
                    <div className="row">
                        <div className="col s12">
                            {err && <p className="red-text">{err}</p>}
                        </div>
                        {phase === 1 &&
                            <div className="input-field col s12">
                                <input ref={emailRef} onChange={()=> setEmail(emailRef.current.value)} type="email" placeholder="Email,phone ot Skype" className="validate" />
                            </div>
                        }
                        {phase === 2 &&
                            <div className="input-field col s12">
                                <input ref={passRef} type="password" onChange={()=>setPass(passRef.current.value)} placeholder="Password" className="validate" />
                            </div>
                        }
                        
                        <div className="col s12">
                            <span><Link to="/" className="">I already have an account ?</Link></span>

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
                                    disabled={loading}
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="right btn-flat center white-text blue"
                                    style={{
                                    marginTop:"25px",
                                        paddingLeft: "40px", paddingRight: "40px"
                                    }}>
                                    {!loading && <span>Submit</span>}
                                    {loading &&  <span>Loading</span>}
                                    
                                </button>
                                <button
                                    disabled={loading}
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
