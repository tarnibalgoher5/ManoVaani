import React, { useState, useEffect } from "react";
import { auth, database } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, get } from "firebase/database";
import { useNavigate } from "react-router-dom";
import './Signin.css';
import Navbar from '../../components/Navbar/Navbar';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionUser, setSessionUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = sessionStorage.getItem("userData");
    if (storedUser) {
      setSessionUser(JSON.parse(storedUser));
    }
  }, []);

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
      let userData = { email: user.email };

      if (snapshot.exists()) {
        userData = snapshot.val();
      }

      // Store user data in sessionStorage
      sessionStorage.setItem("userData", JSON.stringify(userData));
      setSessionUser(userData);

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
    <div>
      <Navbar user={sessionUser} />
      <div className="container">
        <div className="form-wrapper">
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
            <button type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
            {error && <p className="error">{error}</p>}
          </form>
          <p>
            New user?
            <button className="link-button" onClick={() => navigate("/signup")}>
              Create Account
            </button>
          </p>
        </div>
      </div>
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