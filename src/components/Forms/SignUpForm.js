import React, { useState } from 'react';
import classes from '../../CSS/SignUpForm.module.css';
import Logo from '../../assets/icons/Logo.png';
import { Link } from 'react-router-dom';

function SignUpForm(){
  const [phone, setPhone] = useState('+961');
  const [phoneError, setPhoneError] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setFirstName(value);
    setFirstNameError(!/^[A-Za-z]*$/.test(value));
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setLastName(value);
    setLastNameError(!/^[A-Za-z]*$/.test(value));
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (value.length <= 5) {
      setPhone('+961 ');
    } else {
      setPhone(value);
      const numberPart = value.replace("+961 ", "");
      if (/^[0-9]*$/.test(numberPart) && numberPart.length <= 8) {
        setPhoneError(false);
      } else {
        setPhoneError(true);
      }
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(!value.includes('@') || !value.includes('.') || value.indexOf('@') > value.lastIndexOf('.'));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setPasswordError(!strongPasswordRegex.test(value));
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
              <input 
                type="text" 
                placeholder='First Name'
                value={firstName}
                onChange={handleFirstNameChange}
                style={{ borderColor: firstNameError ? 'red' : '' }}
              />
            </div>
            <div className={classes.lastName}>
              <label>Last Name</label>
              <input 
                type="text" 
                placeholder='Last Name'
                value={lastName}
                onChange={handleLastNameChange}
                style={{ borderColor: lastNameError ? 'red' : '' }}
              />
            </div>
        </div>
          <div className={classes.Number}> 
            <label className={classes.phoneNumber}>Phone Number</label>
            <input 
              type="text"
              value={phone} 
              onChange={handlePhoneChange} 
              style={{ borderColor: phoneError ? 'red' : '' }} 
            />
          </div>
          <div className={classes.Email}>
            <label>Email</label>
            <input 
              type="text" 
              placeholder="test@example.com"
              value={email}
              onChange={handleEmailChange}
              style={{ borderColor: emailError ? 'red' : '' }}
            />
          </div>
          <div className={classes.Password}>
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Your Password"
              value={password}
              onChange={handlePasswordChange}
              style={{ borderColor: passwordError ? 'red' : '' }}
            />
            {password && (
              <span style={{ color: passwordError ? 'red' : 'green', fontSize: '14px', marginTop: '5px' }}>
                {passwordError ? 'Password not strong' : 'Strong password'}
              </span>
            )}
          </div>
          <div>
          <Link to='/home-page' className={classes.submitbtn}>
            <button className={classes.Submitbtn}>SignUp</button>
          </Link>
          <Link to='/' className={classes.submitbtn} style={{ textDecoration: 'underline', textDecorationColor: 'black' }}>
            <p>Already have an account? Login</p>
          </Link>
          </div>
      </form>
    </div>
  );
}

export default SignUpForm;