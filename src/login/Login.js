import './Login.css';
import Logo from './Logo.png';

function Login() {
    return (
        <div className={classes.mainclass}>
        <div className={classes.card}>
        <div className={classes.logo}>
            <img src={Logo} alt="Logo"/>
        </div>
        <form>
            <div className={classes.formgroup}>
                <label htmlFor="EmailAddress">Email_Address</label>
                <input type="text" id="emailaddress" name="EmailAddress" placeholder="Enter your email address"/>
            </div>
            <div className={classes.formgroup}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password"/>
            </div>
            <button type="submit" className={classes.loginbutton}>Login</button>
        </form>
        <button className={classes.createaccountbutton}>Create New Account</button>
    </div>
    </div>
    );
}

export default Login;