import { Routes, Route } from 'react-router-dom'
import Registration from './userAuthentication/Registration.js';
import Login from './userAuthentication/Login.js';
import Profile from './userAuthentication/Profile.js';
import Home from  './home.js';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;

