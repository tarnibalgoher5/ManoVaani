import React, { useState } from "react";
import { auth, database } from "../../firebase";
import { updateProfile, updateEmail } from "firebase/auth";
import { ref, set } from "firebase/database";
import './Profile.css';
import Navbar from '../../components/Navbar/Navbar';

const Profile = ({ userData }) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(userData.name || userData.displayName || "");
  const [email, setEmail] = useState(userData.email || "");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEditToggle = () => {
    setError("");
    setEditing(!editing);
    if (editing) {
      setName(userData.name || userData.displayName || "");
      setEmail(userData.email || "");
    }
  };

  const handleSave = async () => {
    setError("");
    setLoading(true);
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("No authenticated user");

      if (name !== user.displayName) {
        await updateProfile(user, { displayName: name });
      }

      if (email !== user.email) {
        await updateEmail(user, email);
      }

      await set(ref(database, "users/" + user.uid), {
        name,
        email,
      });

      setEditing(false);
      setLoading(false);
      alert("Profile updated successfully!");
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="profile-component-container">
      {/* <Navbar /> */}
      <h2 className="profile-component-title">Your Profile</h2>
      {error && <p className="profile-component-error">{error}</p>}

      <div className="profile-component-field">
        <label className="profile-component-label">Name:</label>
        {editing ? (
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="profile-component-input"
          />
        ) : (
          <p className="profile-component-text">{name || "N/A"}</p>
        )}
      </div>

      <div className="profile-component-field">
        <label className="profile-component-label">Email:</label>
        {editing ? (
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="profile-component-input"
          />
        ) : (
          <p className="profile-component-text">{email || "N/A"}</p>
        )}
      </div>

      <div className="profile-component-buttons">
        {editing ? (
          <>
            <button
              onClick={handleSave}
              disabled={loading}
              className="profile-component-button primary"
            >
              {loading ? "Saving..." : "Save"}
            </button>
            <button
              onClick={handleEditToggle}
              className="profile-component-button secondary"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={handleEditToggle}
            className="profile-component-button primary"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;