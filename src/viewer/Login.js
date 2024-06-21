// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// export default function Login({onViewerLogin}) 
// {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [message,setMessage] = useState("")
//   const [error,setError] = useState("")

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try 
//     {
//       const response = await axios.post('http://localhost:4005/checkviewerlogin', formData);
//       if (response.data != null) 
//       {
//         onViewerLogin();

//         localStorage.setItem('viewer', JSON.stringify(response.data));

//         navigate("/viewerhome");
//       } 
//       else 
//       {
//         setMessage("Login Failed")
//         setError("")
//       }
//     } 
//     catch (error) 
//     {
//       setMessage("")
//       setError(error.message)
//     }
//   };

//   return (
//     <div>
//       <h3 align="center"><u>Viewer Login</u></h3>
//       {
//         message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{color:"red"}}>{error}</h4>
//       }
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email</label>
//           <input type="email" id="email" value={formData.email} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Password</label>
//           <input type="password" id="password" value={formData.password} onChange={handleChange} required />
//         </div>
//         <button type="submit" className="button">Login</button>
//       </form>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function Login({ onViewerLogin }) {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4005/checkviewerlogin', formData);
//       if (response.data != null) {
//         onViewerLogin();

//         localStorage.setItem('viewer', JSON.stringify(response.data));

//         navigate("/viewerhome");
//       } else {
//         // setMessage("Login Failed");
//         setError("");
//       }
//     } catch (error) {
//       setMessage("");
//       setError(error.message);
//     }
//   };

//   return (
//     <div className='body2' >
//       {/* <h3 align="center"><u>Viewer Login</u></h3> */}
//       {
//         message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{ color: "red" }}>{error}</h4>
//       }
//       <form onSubmit={handleSubmit}>
//         <div className="wrapper">
//           <h1>Login</h1>
//           <div className="input-box">
//             <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
//           </div>
//           <div className="input-box">
//             <input type="password" id="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
//           </div>
//           <button type="submit" className="btn">Login</button>
//           <div className="register-link">
//             <p>Don't have an account? <a href="/registration">Register</a></p>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '../config';

export default function Login({ onViewerLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/checkviewerlogin`, formData);
      if (response.data != null) {
        onViewerLogin();
        localStorage.setItem('viewer', JSON.stringify(response.data));
        navigate("/viewerhome");
        // toast.success('Login Successful!');
      } else {
        toast.error('Login Failed!');
      }
    } catch (error) {
      toast.error(`Login Failed: ${error.message}`);
    }
  };

  return (
    <div className='body2'>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="wrapper">
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
          </div>
          <div className="input-box">
            <input type="password" id="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="register-link">
            <p>Don't have an account? <a href="/registration">Register</a></p>
          </div>
        </div>
      </form>
    </div>
  );
}
