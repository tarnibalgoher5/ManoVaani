import Dashboard from './pages/Dashboard/Dashboard';
// import Aboutus from './pages/Aboutus/Aboutus'; 
// import Chatbot from './pages/Chatbot/Chatbot';
// import Journal from './pages/Journal/Journal';
import Resources from './pages/Resources/Resources';
// import Signin from './pages/Signin/Signin';
// import Signup from './pages/Signup/Signup';
// import Userprofile from './components/Userprofile/Userprofile';
// import UserprofileEdit from './components/Userprofile/UserprofileEdit'; 
import Survey from './pages/Survey/Survey';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';

function App() {

// toastify notifications to add * 
  return (  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      {/* { <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>} /> */}
      <Route path="/resources" element={<Resources/>}  />
      {/* <Route path="/journal" element={<Journal/>}  />
      <Route path="/chatbot" element={< Chatbot/>}  />
      <Route path="/userprofile" element={<Userprofile />}  />
      <Route path="/userprofile" element={<UserprofileEdit />}  />*/} 
      <Route path="/survey" element={<Survey />}  /> 
     
    </Routes>
    </BrowserRouter>
  )
}

export default App;