import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import './signup.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the signup logic (e.g., API call)
        console.log('Signup:', { email, password });
        // Redirect to sign-in page after signup
        history.push('/signin');
    };

    const handleSignInRedirect = () => {
        history.push('/signin');
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <p>
                Already have an account?{' '}
                <button onClick={handleSignInRedirect}>Sign In</button>
            </p>
        </div>
    );
};

export default Signup;