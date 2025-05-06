import React, { useState } from "react";
import { auth, database } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, get } from "firebase/database";
import { useNavigate } from "react-router-dom";
import './Signin.css';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Fetch user profile from Realtime Database
      const userRef = ref(database, 'users/' + user.uid);
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        const userData = snapshot.val();
        // Store user data in sessionStorage
        sessionStorage.setItem("userData", JSON.stringify(userData));
      } else {
        console.warn("No user data found in database!");
        sessionStorage.setItem("userData", JSON.stringify({ email: user.email }));
      }

      setEmail("");
      setPassword("");
      setLoading(false);
      navigate("/profile");
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h2>Sign into your account</h2>
      <form onSubmit={handleSignIn} className="form">
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
          autoComplete="current-password"
        />
        <button type="submit" disabled={loading}>{loading ? "Signing in..." : "Sign In"}</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p>
        New user?{" "}
        <button className="link-button" onClick={() => navigate("/signup")}>
          Create Account
        </button>
      </p>
    </div>
  );
};

export default SignIn;




/*import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './Signin.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Signed in successfully!");
      setEmail("");
      setPassword("");
      navigate("/"); // Redirect after sign-in
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <Navbar />
      <h2>Sign into your account</h2>
      <form onSubmit={handleSignIn} className="form">
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
          autoComplete="current-password"
        />
        <button type="submit">Sign In</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p>
        New user?{" "}
        <button className="link-button" onClick={() => navigate("/signup")}>
          Create Account
        </button>
      </p>
      <Footer />
    </div>
  );
};

export default SignIn;*/