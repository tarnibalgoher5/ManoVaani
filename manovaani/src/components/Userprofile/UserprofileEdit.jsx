import React, { useState } from 'react';
import './UserProfileEdit.css';
import Navbar from '../Navbar/Navbar'; import { useNavigate } from 'react-router-dom';

function UserProfileEdit() {
  const navigate = useNavigate();

  // Initial user data
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Validate and save changes
  const handleSave = () => {
    let validationErrors = {};
    if (!user.name.trim()) {
      validationErrors.name = 'Name is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('User Updated:', user);
      navigate('/profile'); // Redirect back to profile after saving
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
        </div>
      </div>
    </>
  );
}

export default UserProfileEdit;
