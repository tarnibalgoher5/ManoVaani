import React, { useState } from 'react'; 
import './UserProfileEdit.css';
import Navbar from '../Navbar/Navbar'; 
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebase'; // adjust path as needed

function UserProfileEdit() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    let validationErrors = {};
    if (!user.name.trim()) {
      validationErrors.name = 'Name is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('User Updated:', user);
      navigate('/profile');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/signin');
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="edit-profile-container">
        <h2>Edit Profile</h2>

        <div className="input-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Phone No:</label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
        </div>

        <div className="button-group">
          <button onClick={handleSave} className="save-btn">Save</button>
          <button onClick={() => navigate('/profile')} className="cancel-btn">Cancel</button>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserProfileEdit;
