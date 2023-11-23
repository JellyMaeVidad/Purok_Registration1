import React, {useState} from 'react'
import './Register.css'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'

//import assets
import video from '../../loginAssets/video.mp4'
import b from '../../loginAssets/b.png'

//import icons
import{HiOutlineMailOpen} from 'react-icons/hi'
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'


const Register = () => {
//useState to hold inputs
const [lastName, setLastname] = useState('')
const [firstName, setFirstname] = useState('')
const [middleName, setMiddlename] = useState('')
const [birthDate, setBirthdate] = useState('')
const [email, setEmail] = useState('')
const [userName, setUsername] = useState('')
const [password, setPassword] = useState('')
const navigateTo = useNavigate()

//onClick get what users entered
const createUser = (e)=>{
   e.preventDefault(); 
   //axios to create API that connects to the server
Axios.post('http://localhost:3002/register',{
   //variables to send to server thru route
   Lastname: lastName,
   FirstName: firstName,
   MiddleName: middleName,
   BirthDate: birthDate,
   Email: email,
   UserName: userName,
   Password: password
}).then(()=>{
   // console.log('User has been created.')
   navigateTo('/')

   //clear fields
   setLastname('')
   setFirstname('')
   setMiddlename('')
   setBirthdate('')
   setEmail('')
   setUsername('')
   setPassword('')
})

}

    return(
      <div className="registerPage flex">
      <div className="container flex">
         
        <div className="videoDiv">
            <video src={video} autoPlay muted loop></video>

            <div className="textDiv">
                <h2 className="title">Purok Registration System</h2>
                <p>Log In Now!</p>

            </div>
             <div className="footerDiv flex">
             <span className="text">Have an account?</span>
             <Link to={'/'}>
             <button className='btn'>Log In</button>
             </Link>
             </div>
        </div>


            <div className="formDiv flex">
               <div className="headerDiv1">
                  <img src={b} alt="Logo Image" className='img1'/>
                  <h3 className='h33'>Let Us Know You!</h3>
               </div>

           <form action ="" className='form grid'>
              {/* <span className='showMessage'>Login Status will go here</span> */}


              <div className="inputDiv1">
                   <label htmlFor="lastname">Lastname: </label>
                   <div className="input flex">
                     <FaUserShield className='icon'/>
                     <input type="text" id='lastname' placeholder='Enter Lastname' onChange={(event)=>{
                        setLastname(event.target.value)
                     }}/>
                   </div>
                </div> 

                <div className="inputDiv1">
                   <label htmlFor="firstname">Firstname: </label>
                   <div className="input flex">
                     <FaUserShield className='icon'/>
                     <input type="text" id='firstname' placeholder='Enter Firstname' onChange={(event)=>{
                        setFirstname(event.target.value)
                     }}/>
                   </div>
                </div> 

                <div className="inputDiv1">
                   <label htmlFor="middlename">Middlename: </label>
                   <div className="input flex">
                     <FaUserShield className='icon'/>
                     <input type="text" id='middlename' placeholder='Enter Middlename' onChange={(event)=>{
                        setMiddlename(event.target.value)
                     }}/>
                   </div>
                </div> 

                <div className="inputDiv1">
                   <label htmlFor="birthdate">Birthdate: </label>
                   <div className="input flex">
                     <FaUserShield className='icon'/>
                     <input type="date" id='birthdate' placeholder='Enter Birthdate' onChange={(event)=>{
                        setBirthdate(event.target.value)
                     }}/>
                   </div>
                </div> 

                <div className="inputDiv1">
                   <label htmlFor="email">Email: </label>
                   <div className="input flex">
                     <HiOutlineMailOpen className='icon'/>
                     <input type="email" id='email' placeholder='Enter Email' onChange={(event)=>{
                        setEmail(event.target.value)
                     }}/>
                   </div>
                </div> 

                <div className="inputDiv1">
                   <label htmlFor="username">Username: </label>
                   <div className="input flex">
                     <FaUserShield className='icon'/>
                     <input type="text" id='username' placeholder='Enter Username' onChange={(event)=>{
                        setUsername(event.target.value)
                     }}/>
                   </div>
                </div> 
            
                <div className="inputDiv1">
                   <label htmlFor="password">Password: </label>
                   <div className="input flex">
                     <BsFillShieldLockFill className='icon'/>
                     <input type="password" id='password' placeholder='Enter Password' onChange={(event)=>{
                        setPassword(event.target.value)
                     }}/>
                   </div>
                </div> 

                <button type='submit'className='btn1 flex' onClick={createUser}>
                    <span>Register</span>
                    <AiOutlineSwapRight className='icon'/>
                </button>

                <span className='forgotPassword'>
                    Forgot your Password? <a href= "">Click Here</a>
                </span>

           </form>   
        </div>
     </div>
     </div>
    )
}
export default Register