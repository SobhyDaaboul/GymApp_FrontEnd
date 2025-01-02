import React, { useState } from 'react';
import './SignUp.css';
import Logo from './Logo.png';


function SignUp(){
  const [phone, setPhone] = useState('+961');
  const [phoneError, setPhoneError] = useState(false); 
  const [emailError,setEmailError]= useState(false);

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (value.length <= 5) {
      setPhone('+961 ');
    } else {
      setPhone(value);
      const numberPart = value.replace("+961 ", ""); 
      if (/^[0-9]*$/.test(numberPart) || numberPart === "") {
        setPhoneError(false); 
      } else {
        setPhoneError(true); 
      }
    }
  };

  const handleEmailError = (e)=>{ 
  };

  return (
    <div class="mainclass">
      <form class="formclass">
        <div class="logo">
          <img src={Logo} alt="Logo"/>
                </div>
        <div className="nameContainer">
            <div className="firstName">
              <label>First Name</label>
              <input type="text" placeholder='Enter Here'/>
            </div>
            <div className="lastName">
              <label>Last Name</label>
              <input type="text" placeholder='Enter Here'/>
            </div>
        </div>
          <div class="Number"> 
            <label>Phone Number</label>
            <input type="text"
                   value={phone} 
                   onChange={handlePhoneChange} 
                   placeholder="only 8 number "
                   style={{ borderColor: phoneError ? 'red' : '' }} />
          </div>
          <div class="Email">
            <label>Email</label>
            <input type="text" placeholder="test@example.com"/>
          </div>
          <div class="Password">
            <label>Password</label>
            <input type="text" placeholder="yourpassword"/>
          </div>
          <div>
            <button class="Submit-btn">SignUp</button>
          </div>
      </form>
    </div>
  );
}

export default SignUp;