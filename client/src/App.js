import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/layout/Navbar';
import ForgetPassword from './components/auth/ForgetPassword';
import ResetPassword from './components/auth/ResetPassword';
import JobPostForm from './components/form/JobPostForm';
import RoleSelection from './components/role/RoleSelection';
import Footer from './components/layout/Footer';


function App() {
  return (
    <>
      <div>
        {/* <Navbar/> */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/job-post-form" element={<JobPostForm />} />
          <Route path="/role-selection" element={<RoleSelection />} />
        </Routes>
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
