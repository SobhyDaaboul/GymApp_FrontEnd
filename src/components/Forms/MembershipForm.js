import classes from '../../CSS/MembershipForm.module.css';

function MembershipForm() {
    return (
        <div>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlfor='Username'>Username</label>
                    <input type='text' required id='Username'/>
                </div>
                <div className={classes.control}>
                    <label htmlfor='Email'>Email</label>
                    <input type='Email' required id='Email'/>
                </div>
                <div>
                    <label>
                        <input type="radio" name="Monthly" value="Monthly"/>
                            Monthly
                    </label>
                    <label>
                        <input type="radio" name="Yearly" value="Yearly"/>
                            Yearly (Get a 30% Discount!)
                    </label>
                </div>
                <div className={classes.actions}>
                    <button>Create</button>
                </div>
            </form>
        </div>
    );
}

export default MembershipForm;