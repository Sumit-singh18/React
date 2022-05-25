import React,{useRef,useState,useContext} from 'react'
import './login.css'
import Contxt from './Contxt.js'

const Login=(props)=>{
    const[name,updatename]=useState('')
    const[pass,updatepass]=useState('')

    const uname= useRef()
    const upass=useRef()
     useContext(Contxt)

    function validateuser(){
        if(uname.current.value ==='root' && upass.current.value==='1234'){
            Contxt.loggedIn=true;
            props.sendStatustoapp(true);
        }
        updatename(uname.current.value)
        updatepass(upass.current.value)
    }

    return ( <div className='Main-cont'>
        <div className='Innersect'>
            <label>UserName</label><br></br>
            <input  type= 'text' placeholder='Username'  id='User' ref={uname}/>
        </div>
        <div className='Innersect'>
            <label>Password</label><br></br>
            <input  type= 'password' placeholder='Password'  id='password' ref={upass}/>
        </div><br></br>
        <div>
            <button onClick={validateuser}>SignIn</button>&nbsp;&nbsp;
            <button >SignUp</button>

        </div>
        <br></br>
        <div>
            {
                name==='root'&& pass==='1234'
                ? 'Valid-user' :'Invalid-user'
            }
        </div>
    </div>
    )
}

export default Login;