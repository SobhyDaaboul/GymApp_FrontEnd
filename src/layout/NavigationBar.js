import { Link } from 'react-router-dom';
import classes from './NavigationBar.module.css';
import Logo from "../assets/icons/Logosmall.png";
import { useState } from 'react';

function NavigationBar(){
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown((prev) => !prev);
    };

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={Logo} alt='Gym Logo'/>
            </div>
            <nav>
                <ul className={classes.navList}>
                    <li className={classes.navItem}>
                        <span className={classes.navLink} onClick={toggleDropdown}>Membership</span>
                        {showDropdown && (
                            <ul className={classes.dropdownMenu}>
                                <li className={classes.dropdownItem}>
                                    <Link to='/Membership/Create'>Create Membership</Link>
                                </li>
                                <li className={classes.dropdownItem}>
                                    <Link to='/Membership/Cancel'>Cancel Membership</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className={classes.navItem}>
                        <Link className={classes.navLink} to='/Classes'>Classes</Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link className={classes.navLink} to='/MyWorkout'>MyWorkout</Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link className={classes.navLink} to='/PtSessions'>PtSessions</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavigationBar;