import './Login.css';
import Logo from './Logo.png';

function Login() {
    return (
        <div class="card">
        <div class="logo">
            <img src={Logo} alt="Logo"/>
        </div>
        <form>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Enter your username"/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password"/>
            </div>
            <button type="submit" class="login-button">Login</button>
        </form>
        <button class="create-account-button">Create New Account</button>
    </div>
    );
}

export default Login;