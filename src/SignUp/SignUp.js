import './SignUp.css';


function SignUp(){
  return (
    <div class="mainclass">
      <div class='imagebackground'></div>
      <form class="formclass">
      <div className="nameContainer">
          <div className="firstName">
            <label>First Name</label>
            <input type="text" placeholder="Enter your first name" />
          </div>
          <div className="lastName">
            <label>Last Name</label>
            <input type="text" placeholder="Enter your last name" />
          </div>
      </div>
        <div class="Number"> 
          <label>Phone Number</label>
          <input type="text" placeholder="your PhoneNumber"/>
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