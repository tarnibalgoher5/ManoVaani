import React, { useState } from "react";
import { auth, database } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import './Signup.css';
import Navbar from '../../components/Navbar/Navbar';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update Firebase auth user profile displayName
      await updateProfile(user, { displayName: name });

      // Save user data in Realtime Database using their UID
      await set(ref(database, 'users/' + user.uid), {
        name: name,
        email: email,
      });

      alert("Signup successful! You can now sign in.");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/signin");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <Navbar />
      
      <form id="userform" onSubmit={handleSignUp} className="form">
      <h2>Create a new account</h2>
        {/* <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          autoComplete="name"
        /> */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          autoComplete="new-password"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
          autoComplete="new-password"
        />
        <button type="submit">Sign Up</button>
        {error && <p className="error">{error}</p>}
      <p>
        Already have an account?{" "}
        <button className="link-button" onClick={() => navigate("/signin")}>
          Sign In
        </button>
      </p>
      </form>
      
    </div>
  );
};

export default SignUp;



/*import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './Signup.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Update display name to the user's name
      await updateProfile(userCredential.user, { displayName: name });
      alert("Signup successful! You can now Sign In.");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/signin");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <Navbar />
      <h2>Create a new account</h2>
      <form onSubmit={handleSignUp} className="form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          autoComplete="name"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          autoComplete="new-password"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
          autoComplete="new-password"
        />
        <button type="submit">Sign Up</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p>
        Already have an account?{" "}
        <button className="link-button" onClick={() => navigate("/signin")}>
          Sign In
        </button>
      </p>
      <Footer />
    </div>
  );
};

export default SignUp;
*/

