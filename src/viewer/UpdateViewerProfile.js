// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// export default function UpdateViewerProfile() {
//     const [viewerData, setViewerData] = useState({
//         fullname: '',
//         gender: '',
//         dateofbirth: '',
//         email: '',
//         password: '',
//       });

//       const [message, setMessage] = useState('');
//       const [error, setError] = useState('');
//       const [initialViewerData, setInitialViewerData] = useState({});

//       useEffect(() => {
//         const storedViewerData = localStorage.getItem('viewer');
//         if (storedViewerData) {
//           const parsedViewerData = JSON.parse(storedViewerData);
//           setViewerData(parsedViewerData);
//           setInitialViewerData(parsedViewerData); // Store initial job seeker data
//         }
//       }, []);


//       const handleChange = (e) => {
//         setViewerData({ ...viewerData, [e.target.id]: e.target.value });
//       };
    
//       const handleSubmit = async (e) => 
//       {
//         e.preventDefault();
//         try 
//         {
//           const updatedData = {};
//           for (const key in viewerData) {
//             if (viewerData[key] !== initialViewerData[key] && initialViewerData[key] !== '') {
//               updatedData[key] = viewerData[key]; 
//             }
//           }
//           if (Object.keys(updatedData).length !== 0) {
//             // There are changes
//             updatedData.email = viewerData.email;
//             const response = await axios.put('http://localhost:4005/updateviewerprofile', updatedData);
//             setMessage(response.data);
//             setError('');
//             const res = await axios.get(`http://localhost:4005/viewerprofile/${viewerData.email}`, updatedData)
//             localStorage.setItem("viewer",JSON.stringify(res.data))
//           } else {
//             // No changes
//             setMessage("No Changes in Viewer Profile");
//             setError("");
//           }
//         } 
//         catch (error) {
//           setError(error.response.data);
//           setMessage('');
//         }
//       };

//   return (
//     <div>
//         <h3 align="center"><u>Update Profile</u></h3>
//       {message ? <h4 align="center">{message}</h4> : <h4 align="center" color='red'>{error}</h4>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Full Name</label>
//           <input type="text" id="fullname" value={viewerData.fullname} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Gender</label>
//           <input type="text" id="gender" value={viewerData.gender} readOnly />
//         </div>
//         <div>
//           <label>Date of Birth</label>
//           <input type="date" id="dateofbirth" value={viewerData.dateofbirth} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Email</label>
//           <input type="email" id="email" value={viewerData.email} readOnly />
//         </div>
//         <div>
//           <label>Password</label>
//           <input type="password" id="password" value={viewerData.password} onChange={handleChange} required />
//         </div>
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '../config';

export default function UpdateViewerProfile() {
    const [viewerData, setViewerData] = useState({
        fullname: '',
        gender: '',
        dateofbirth: '',
        email: '',
        password: '',
    });

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [initialViewerData, setInitialViewerData] = useState({});

    useEffect(() => {
        const storedViewerData = localStorage.getItem('viewer');
        if (storedViewerData) {
            const parsedViewerData = JSON.parse(storedViewerData);
            setViewerData(parsedViewerData);
            setInitialViewerData(parsedViewerData);
        }
    }, []);

    const handleChange = (e) => {
        setViewerData({ ...viewerData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedData = {};
            for (const key in viewerData) {
                if (viewerData[key] !== initialViewerData[key] && initialViewerData[key] !== '') {
                    updatedData[key] = viewerData[key];
                }
            }
            if (Object.keys(updatedData).length !== 0) {
                // There are changes
                updatedData.email = viewerData.email;
                const response = await axios.put(`${config.url}/updateviewerprofile`, updatedData);
                setMessage(response.data);
                setError('');
                const res = await axios.get(`${config.url}/viewerprofile/${viewerData.email}`, updatedData);
                localStorage.setItem("viewer", JSON.stringify(res.data));
                toast.success('Profile updated successfully!'); // Show success toast
            } else {
                // No changes
                // setMessage("No Changes in Viewer Profile");
                setError("");
                toast.warning('No changes detected in profile.'); // Show info toast
            }
        } catch (error) {
            setError(error.response.data);
            setMessage('');
            toast.error('Failed to update profile.'); // Show error toast
        }
    };

    return (
      <div className='bodyu'>
        <div className="formu">
            <div className="titleu">Welcome</div>
            <div className="subtitleu">Let's update your account!</div>
            {message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{ color: 'red' }}>{error}</h4>}
            <form onSubmit={handleSubmit}>
                <div className="input-containeru ic1u">
                    <input
                        id="fullname"
                        className="inputu"
                        type="text"
                        placeholder=" "
                        value={viewerData.fullname}
                        onChange={handleChange}
                        required
                    />
                    <div className="cutu"></div>
                    <label htmlFor="fullname" className="placeholderu">Full Name</label>
                </div>
                <div className="input-containeru ic2u">
                    <input
                        id="gender"
                        className="inputu"
                        type="text"
                        placeholder=" "
                        value={viewerData.gender}
                        readOnly
                    />
                    <div className="cutu"></div>
                    <label htmlFor="gender" className="placeholderu">Gender</label>
                </div>
                <div className="input-containeru ic2u">
                    <input
                        id="dateofbirth"
                        className="inputu"
                        type="date"
                        placeholder=" "
                        value={viewerData.dateofbirth}
                        onChange={handleChange}
                        required
                    />
                    <div className="cutu cut-shortu"></div>
                    <label htmlFor="dateofbirth" className="placeholderu">Date of Birth</label>
                </div>
                <div className="input-containeru ic2u">
                    <input
                        id="email"
                        className="inputu"
                        type="email"
                        placeholder=" "
                        value={viewerData.email}
                        readOnly
                    />
                    <div className="cutu cut-shortu"></div>
                    <label htmlFor="email" className="placeholderu">Email</label>
                </div>
                <div className="input-containeru ic2u">
                    <input
                        id="password"
                        className="inputu"
                        type="password"
                        placeholder=" "
                        value={viewerData.password}
                        onChange={handleChange}
                        required
                    />
                    <div className="cutu cut-shortu"></div>
                    <label htmlFor="password" className="placeholderu">Password</label>
                </div>
                <button type="submit" className="submitu">Update</button>
            </form>
            <ToastContainer />
        </div>
        
        </div>
    );
}
