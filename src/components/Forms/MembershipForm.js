import classes from '../../CSS/MembershipForm.module.css';
import { useState } from 'react';
import PaymentForm from './PaymentForm';

function MembershipForm() {
    const [showPayment, setShowPayment] = useState(false);
    const [formData, setFormData] = useState({username: '',
        email: '',
        membershipType: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowPayment(true);
    };

    const handleInputChange = (event) => {
        const { id, value, name, type } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [type === 'radio' ? name : id.toLowerCase()]: value
        }));
    };

    if (showPayment) return <PaymentForm userData={formData} />;
    

    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={handleSubmit}>
                <h1 className={classes.header}>Membership</h1>
                <div className={classes.control}>
                    <label htmlFor='username'>Username</label>
                    <input 
                        type='text' 
                        required 
                        id='username'
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='email'>Email</label>
                    <input 
                        type='email' 
                        required 
                        id='email'
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={`${classes.control} ${classes.radioGroup}`}>
                    <div className={classes.radioOption}>
                        <input 
                            type="radio" 
                            name="membershipType" 
                            value="Monthly" 
                            id="monthly"
                            onChange={handleInputChange}
                        />
                        <label htmlFor="monthly">Monthly</label>
                    </div>
                    <div className={classes.radioOption}>
                        <input 
                            type="radio" 
                            name="membershipType" 
                            value="Yearly" 
                            id="yearly"
                            onChange={handleInputChange}
                        />
                        <label htmlFor="yearly">Yearly (Get a 30% Discount!)</label>
                    </div>
                </div>
                <div className={classes.actions}>
                    <button>Create</button>
                </div>
            </form>
            
        </div>
    );
}

export default MembershipForm;