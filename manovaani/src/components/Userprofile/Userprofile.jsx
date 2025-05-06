import React, { useState } from 'react';
import './UserProfile.css';
import Navbar from '../Navbar/Navbar'; 
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase'; // update path if needed

function UserProfile() {
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/signin');
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="profile-container">
        {!editMode ? (
          <div className="profile-view">
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
            </div>
          </div>
        ) : (
          <div className="profile-edit">
            {/* <img src={defaultAvatar} alt="User Avatar" className="user-avatar" /> */}
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

        {/* Logout button at the bottom */}
        <div className="logout-wrapper">
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default UserProfile;
