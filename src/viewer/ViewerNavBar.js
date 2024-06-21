// import React from 'react'
// import { Route, Routes, Link, useNavigate } from 'react-router-dom';
// import ViewerHome from './ViewerHome';
// import MovieLists from './MovieLists';
// import UpdateViewerProfile from './UpdateViewerProfile';
// import SeriesList from './SeriesList';


// export default function ViewerNavBar() {

//     const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('isViewerLoggedIn');
//     localStorage.removeItem('viewer');

//     navigate('/login');
//     window.location.reload()
//   };

//   return (
//     <div>
//         <nav>
//         <ul>
//           <li><Link to="/viewerhome">Home</Link></li>
//           <li className="dropdown">
//             <Link>FILM/SERIES List</Link>
//             <div className="dropdown-content">
//             <Link to="/movies">Movies</Link>
//             <Link to="/series">Series</Link>
//             </div>
//           </li>
//           <li><Link to="/updateprofile">Update Profile</Link></li>
//           <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/viewerhome" element={<ViewerHome/>} exact />
//         <Route path="/movies" element={<MovieLists/>} exact />
//         <Route path="/series" element={<SeriesList/>} exact />
//         <Route path="/updateprofile" element={<UpdateViewerProfile/>} exact />

//       </Routes>

//     </div>
//   )
// }


import React from 'react';
import { Route, Routes, useNavigate, NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewerHome from './ViewerHome';
import MovieLists from './MovieLists';
import UpdateViewerProfile from './UpdateViewerProfile';
import { CiLogout } from "react-icons/ci";



export default function ViewerNavBar() {
 


  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isViewerLoggedIn');
    localStorage.removeItem('viewer');

    navigate('/login');
    // toast.error('Logout successful!')
    window.location.reload();
  };

  return (
    <div>
      <ToastContainer />
      <nav className="navbar">
  <div className="containers">
    <div className="logo">
      <NavLink to="/">Blogs</NavLink>
    </div>
          <div className="nav-elements">
        <ul>
          <li><NavLink to="/viewerhome">Home</NavLink></li>
          <li>
            <NavLink to="/movies" >Movies</NavLink>
          </li>
          <li><NavLink to="/updateprofile">Update Profile</NavLink></li>
          {/* <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li> */}
          <div className="logout-button" onClick={handleLogout} style={{ cursor: 'pointer' }}>
      <CiLogout size={24} color="red" />
    </div>
        </ul>
        </div>
      </div>
      
      </nav>

      <Routes>
        <Route path="/viewerhome" element={<ViewerHome />} exact />
        <Route path="/movies" element={<MovieLists />} exact />
        <Route path="/updateprofile" element={<UpdateViewerProfile />} exact />
      </Routes>
      
    </div>
  );
}
