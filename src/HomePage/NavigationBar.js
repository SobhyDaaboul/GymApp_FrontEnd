import { Link } from 'react-router-dom';
import classes from './NavigationBar.module.css';
import Logo from "../assets/icons/Logo.png";

function NavigationBar(){
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={Logo}/>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/Membership'>Membership</Link>
                    </li>
                    <li>
                        <Link to='/Classes'>Classes</Link>
                    </li>
                    <li>
                        <Link to='/MyWorkout'>MyWorkout</Link>
                    </li>
                    <li>
                        <Link to='/PtSessions'>PtSessions</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavigationBar;