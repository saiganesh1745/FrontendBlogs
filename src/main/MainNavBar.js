import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom';
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import Tweets from './Tweets';
import Contact from './Contact';
import Home from './Home';
import './main.css';
import Registration from './../viewer/Registration';
import Login from '../viewer/Login';
import ViewerHome from '../viewer/ViewerHome';
import NotFound from './NotFound';


export default function MainNavBar({onViewerLogin}) {
  return (
    <div className="body1" >
        {/* <nav>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tweets">Top Tweets</Link></li>
          <li><Link to="/records">Records</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/registration">Registration</Link></li>
        </ul>
      </nav> */}

<nav className="navbar">
  <div className="containers">
    <div className="logo">
      <NavLink to="/">Blogs</NavLink>
    </div>
    <div className="nav-elements">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/tweets">Tweets</NavLink>
        </li>
        <li>
          <NavLink to="/registration">Registration</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>



      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/tweets" element={<Tweets/>} exact />
        <Route path="/contact" element={<Contact/>} exact />
        <Route path="/registration" element={<Registration/>} exact />
        <Route path="/login" element={<Login onViewerLogin={onViewerLogin}/>} exact />
        <Route path="/viewerhome" element={<ViewerHome/>} exact />
        <Route path="*" element={<NotFound/>} exact />
      </Routes>

    </div>
  )
}
