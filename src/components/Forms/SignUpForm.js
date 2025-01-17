import React, { useState } from 'react';
import classes from '../../CSS/SignUpForm.module.css';
import Logo from '../../assets/icons/Logo.png';
import { Link } from 'react-router-dom';


function SignUpForm(){
  const [phone, setPhone] = useState('+961');
  const [phoneError, setPhoneError] = useState(false); 

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

  return (
    <div className={classes.mainclass}>
      <form className={classes.formclass}>
        <div className={classes.logo}>
          <img src={Logo} alt="Logo"/>
        </div>
        <div className={classes.nameContainer}>
            <div className={classes.firstName}>
              <label>First Name</label>
              <input type="text" placeholder='First Name'/>
            </div>
            <div className={classes.lastName}>
              <label>Last Name</label>
              <input type="text" placeholder='Last Name'/>
            </div>
        </div>
          <div className={classes.Number}> 
            <label className={classes.phoneNumber}>Phone Number</label>
            <input type="text"
                   value={phone} 
                   onChange={handlePhoneChange} 
                   style={{ borderColor: phoneError ? 'red' : '' }} />
          </div>
          <div className={classes.Email}>
            <label>Email</label>
            <input type="text" placeholder="test@example.com"/>
          </div>
          <div className={classes.Password}>
            <label>Password</label>
            <input type="text" placeholder="Your Password"/>
          </div>
          <div>
          <Link to='/home-page' className={classes.submitbtn}>
            <button className={classes.Submitbtn}>SignUp</button>
          </Link>
          </div>
      </form>
    </div>
  );
}

export default SignUpForm;