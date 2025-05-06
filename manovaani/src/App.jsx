import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from "./firebase";
import Dashboard from './pages/Dashboard/Dashboard';
import Journal from './pages/Journal/Journal';
import Resources from './pages/Resources/Resources'; 
import Helplines from './pages/Resources/helplines';
import Videos from './pages/Resources/videos';
import Profile from './pages/Profile/Profile';
// import UserprofileEdit from './components/Userprofile/UserprofileEdit'; 
import Survey from './pages/Survey/Survey';
import Signup from './pages/Signup/Signup';
import SignIn from './pages/Signin/Signin'; 
import { ToastContainer } from 'react-toastify';

function App() {
  const [user, setUser ] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser ) => {
      if (firebaseUser ) {
        setUser ({ 
          name: firebaseUser .displayName,
          email: firebaseUser .email,
          uid: firebaseUser .uid,
        });
      } else {
        setUser (null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (  
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/journal" element={<Journal />} />
        <Route 
          path="/profile" 
          element={user ? <Profile userData={user} /> : <Navigate to="/signin" replace />} 
        />
        {/* <Route 
          path="/userprofile" 
          element={user ? <User profileEdit /> : <Navigate to="/signin" replace />} 
        /> */}
        <Route path="/resources/helplines" element={<Helplines />} />
        <Route path="/resources/videos" element={<Videos />} />
        <Route path="/survey" element={<Survey />} />
        <Route 
          path="/signup" 
          element={!user ? <Signup /> : <Navigate to="/profile" replace />} 
        />
        <Route 
          path="/signin" 
          element={!user ? <SignIn /> : <Navigate to="/profile" replace />} 
        />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;


