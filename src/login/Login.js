import './Login.css';
import Logo from './Logo.png';

function Login() {
    return (
        <div className='mainclass'>
        <div className="card">
        <div className="logo">
            <img src={Logo} alt="Logo"/>
        </div>
        <form>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Enter your username"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password"/>
            </div>
            <button type="submit" className="login-button">Login</button>
        </form>
        <button className="create-account-button">Create New Account</button>
    </div>
    </div>
    );
}

export default Login;