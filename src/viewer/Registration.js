// import React, { useState } from 'react';
// import axios from 'axios';
// import './viewer.css'

// export default function Registration() 
// {
//   //formData state variable is initialized with all required keys and empty values
//   const [formData, setFormData] = useState({
//     fullname: '',
//     gender: '',
//     dateofbirth: '',
//     email: '',
//     password: '',
//   });

//   //message state variable
//   const [message, setMessage] = useState('');
//   //error state variable
//   const [error, setError] = useState('');

//   const handleChange = (e) =>   // e - event
//   {
    
//     setFormData({...formData, [e.target.id]: e.target.value});
    
//     // It updates the state `formData` by adding or updating a property with a key equal to 
//     //the ID of the input field 
//     //that triggered the change event (e.target.id). The value of this property is 
//     //set to the new value entered in that input field (e.target.value).
//   };

//   const handleSubmit = async (e) => 
//   {
//     e.preventDefault();
//     try 
//     {
//       const response = await axios.post('http://localhost:4005/insertviewer', formData);
//       if (response.status === 200) 
//       {
//         //It will set all fields to ""
//         setFormData({
//           fullname: '',
//           gender: '',
//           dateofbirth: '',
//           email: '',
//           password: '',
//         });
//       }
//       setMessage(response.data);
//       setError(''); //set error to ""
//     } 
//     catch(error) 
//     {
//       setError(error.response.data);
//       setMessage(''); //set message to ""
//     }
//   };
  
//   return (
//     <div className='body' >
//     <div className='container1'>
//       <h3 align="center"><u> Become a Subscriber By Registration</u></h3>
//       {
//         message ? <h4 align="center">{message}  </h4> : <h4 align="center">{error}</h4>
//       }

     
      

//       <form onSubmit={handleSubmit}>
//         <div class="main-user-info">
//           <div class="user-input-box">
//             <label>Full Name</label>
//             <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} required />
//           </div>
//           <div class="gender-details-box">
//           <span class="gender-title">Gender</span>
//           <div class="gender-category">
//           <label>Gender</label>
//           <select id="gender" value={formData.gender} onChange={handleChange} required>
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="others">Other</option>
//           </select>
//           </div>
//           <div class="user-input-box">
//           <label>Date of Birth</label>
//           <input type="date" id="dateofbirth" value={formData.dateofbirth} onChange={handleChange} required />
//           </div>
//           <div class="user-input-box">
//           <label>Email</label>
//           <input type="email" id="email" value={formData.email} onChange={handleChange} required />
//           </div>
//           <div class="user-input-box">
//           <label>Password</label>
//           <input type="password" id="password" value={formData.password} onChange={handleChange} required />
//           </div>
//         </div>
//         <button class="form-submit-btn" type="submit">Register</button>

//         </div>
//       </form>

// </div>
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import axios from 'axios';
// import './viewer.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function Registration() {
//   const [formData, setFormData] = useState({
//     fullname: '',
//     gender: '',
//     dateofbirth: '',
//     email: '',
//     password: ''
//   });

//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { id, value, type, name } = e.target;
//     if (type === 'radio') {
//       setFormData({ ...formData, [name]: value });
//     } else {
//       setFormData({ ...formData, [id]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4005/insertviewer', formData);
//       if (response.status === 200) {
//         setFormData({
//           fullname: '',
//           gender: '',
//           dateofbirth: '',
//           email: '',
//           password: ''
//         });
//       }
//       setMessage(response.data);
//       setError('');
//       toast.success(`Registration Success`);
//     } catch (error) {
//       setError(error.response.data);
//       setMessage('');
//     }
//   };

//   return (
//     <div className='body'>
//       <div className='container1'>
//         <h1 className='form-title'>Registration</h1>
//         {message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>}
//         <form onSubmit={handleSubmit}>
//           <div className="main-user-info">
//             <div className="user-input-box">
//               <label htmlFor="fullname">Full Name</label>
//               <input
//                 type="text"
//                 id="fullname"
//                 value={formData.fullname}
//                 onChange={handleChange}
//                 placeholder="Enter Full Name"
//                 required
//               />
//             </div>
//             <div className="user-input-box">
//               <label htmlFor="dateofbirth">Date of Birth</label>
//               <input
//                 type="date"
//                 id="dateofbirth"
//                 value={formData.dateofbirth}
//                 onChange={handleChange}
//                 placeholder="Enter Date of Birth"
//                 required
//               />
//             </div>
//             <div className="user-input-box">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter Email"
//                 required
//               />
//             </div>
//             <div className="user-input-box">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Enter Password"
//                 required
//               />
//             </div>
//           </div>
//           <div className="gender-details-box">
//             <span className="gender-title">Gender</span>
//             <div className="gender-category">
//               <input
//                 type="radio"
//                 name="gender"
//                 id="male"
//                 value="male"
//                 checked={formData.gender === 'male'}
//                 onChange={handleChange}
//                 required
//               />
//               <label htmlFor="male">Male</label>
//               <input
//                 type="radio"
//                 name="gender"
//                 id="female"
//                 value="female"
//                 checked={formData.gender === 'female'}
//                 onChange={handleChange}
//                 required
//               />
//               <label htmlFor="female">Female</label>
//               <input
//                 type="radio"
//                 name="gender"
//                 id="other"
//                 value="other"
//                 checked={formData.gender === 'other'}
//                 onChange={handleChange}
//                 required
//               />
//               <label htmlFor="other">Other</label>
//             </div>
//           </div>
//           <div className="form-submit-btn">
//             <input type="submit" value="Register" />
//             <br/>
//             <div className="register-link">
//             <p>Have an account? <a href="/login">Login</a></p>
//           </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import axios from 'axios';
import './viewer.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '../config';

export default function Registration() {
  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    dateofbirth: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value, type, name } = e.target;
    if (type === 'radio') {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/insertviewer`, formData);
      if (response.status === 200) {
        setFormData({
          fullname: '',
          gender: '',
          dateofbirth: '',
          email: '',
          password: ''
        });
        toast.success('Registration Success');
        setMessage('');
        setError('');
      }
    } catch (error) {
      setError(error.response.data);
      setMessage('');
      toast.error('Registration Failed');
    }
  };

  return (
    <div className='body'>
      <div className='container1'>
        <h1 className='form-title'>Registration</h1>
        {message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>}
        <form onSubmit={handleSubmit}>
          <div className="main-user-info">
            <div className="user-input-box">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Enter Full Name"
                required
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="dateofbirth">Date of Birth</label>
              <input
                type="date"
                id="dateofbirth"
                value={formData.dateofbirth}
                onChange={handleChange}
                placeholder="Enter Date of Birth"
                required
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                required
              />
            </div>
          </div>
          <div className="gender-details-box">
            <span className="gender-title">Gender</span>
            <div className="gender-category">
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
                required
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
                required
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                name="gender"
                id="other"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleChange}
                required
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
          <div className="form-submit-btn">
            <input type="submit" value="Register" />
            <br />
            <div className="register-link">
              <p>Have an account? <a href="/login">Login</a></p>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
