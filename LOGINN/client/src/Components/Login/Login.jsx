import React, {useEffect, useState} from 'react'
import './Login.css'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'

//import assets
import video from '../../loginAssets/video.mp4'
import b from '../../loginAssets/b.png'

//import icons
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'

const Login = () => {

  //useState hook to store inputs
  const [loginUserName, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const navigateTo = useNavigate()

  //show message to users
  const[loginStatus, setLoginStatus] = useState('')
  const[statusHolder, setstatusHolder] = useState('message')

//onClick get what users entered
const loginUser = (e)=>{
  e.preventDefault();
  //axios to create API that connects to the server
Axios.post('http://localhost:3002/login',{
  //variables to send to server thru route
  LoginUserName: loginUserName,
  LoginPassword: loginPassword
}).then((response)=>{
  console.log()

  //catch error if credentials are wrong
if(response.data.message || loginUserName == '' || loginPassword == ''){
   //if credentials are wrong...
   navigateTo('/') //nav to the same login page
   setLoginStatus('Credentials do not exist!')
}
else{
  navigateTo('/dashboard') //if credentials match
}
})
}
useEffect(()=>{
  if(loginStatus !== ''){
    setstatusHolder('showMessage') //show message
    setTimeout(()=>{
      setstatusHolder('message')// hide after 4s
    }, 4000)
  }
}, [loginStatus])

//clear form on submit
const onSubmit = ()=>{
  setLoginUsername('')
  setLoginPassword('')
}

    return(
      <div className="loginPage flex">
      <div className="container flex">
         
        <div className="videoDiv">
            <video src={video} autoPlay muted loop></video>

            <div className="textDiv">
                <h2 className="title">Purok Registration System</h2>
                <p>Register Now!</p>

            </div>
             <div className="footerDiv flex">
             <span className="text"> Don't have an account?</span>
             <Link to={'./register'}>
             <button className='btn'>Sign Up</button>
             </Link>
             </div>
        </div>


            <div className="formDiv flex">
               <div className="headerDiv">
                  <img src={b} alt="Logo Image" />
                  <h3>Welcome!</h3>
           </div>

           <form className='form grid' onSubmit={onSubmit}>
              <span className={statusHolder}>{loginStatus}</span>

                <div className="inputDiv">
                   <label htmlFor="username">Username: </label>
                   <div className="input flex">

                     <FaUserShield className='icon'/>
                     <input type="text" id='username' placeholder='Enter Username' onChange={(event)=>{
                        setLoginUsername(event.target.value)
                     }}/>
                   </div>
                </div> 
            
                <div className="inputDiv">
                   <label htmlFor="password">Password: </label>
                   <div className="input flex">
                     <BsFillShieldLockFill className='icon'/>
                     <input type="password" id='password' placeholder='Enter Password' onChange={(event)=>{
                        setLoginPassword(event.target.value)
                     }}/>
                   </div>
                </div> 

                <button type='submit'className='btn flex' onClick={loginUser}>
                    <span>Login</span>
                    <AiOutlineSwapRight className='icon'/>
                </button>

                {/* <a href='/dashboard'>Dashboard</a> */}

                <span className='forgotPassword'>
                    Forgot your Password? <a href= "">Click Here</a>
                </span>

           </form>   
        </div>
     </div>
     </div>
    )
}
export default Login