import React, { useState } from 'react';
import './UserProfile.css';
import Navbar from '../Navbar/Navbar'; // Import Navbar component
// import defaultAvatar from '/default-avatar.png'; // Replace with actual avatar path

function UserProfile() {
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleLogout = () => {
    // Implement logout logic
    console.log('Logging out...');
  };

  return (
    <>
      <Navbar />

      <div className="profile-container">
        {!editMode ? (
          <div className="profile-view">
            <img src={defaultAvatar} alt="User Avatar" className="user-avatar" />
            <h2>{user.name}</h2>

            <div className="info-row">
              <label>Email:</label>
              <span>{user.email}</span>
            </div>

            <div className="info-row">
              <label>Phone No:</label>
              <span>{user.phone || 'Not provided'}</span>
            </div>

            <div className="button-group">
              <button onClick={toggleEditMode} className="edit-btn">Edit</button>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
          </div>
        ) : (
          <div className="profile-edit">
            <img src={defaultAvatar} alt="User Avatar" className="user-avatar" />
            <h2>Edit Profile</h2>

            <div className="info-row">
              <label>Name:</label>
              <input type="text" name="name" value={user.name} onChange={handleChange} />
            </div>

            <div className="info-row">
              <label>Email:</label>
              <input type="email" name="email" value={user.email} onChange={handleChange} />
            </div>

            <div className="info-row">
              <label>Phone No:</label>
              <input type="text" name="phone" value={user.phone} onChange={handleChange} />
            </div>

            <div className="button-group">
              <button onClick={toggleEditMode} className="save-btn">Save</button>
              <button onClick={() => setEditMode(false)} className="cancel-btn">Cancel</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default UserProfile;
