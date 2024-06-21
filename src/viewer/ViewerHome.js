// import React, { useState, useEffect } from 'react';

// export default function ViewerHome() {
//   const [viewerData, setViewerData] = useState("")

//   useEffect(() => {
//     const storedViewerData = localStorage.getItem('viewer');
//     if (storedViewerData) {
//       const parsedViewerData = JSON.parse(storedViewerData);
//       setViewerData(parsedViewerData);
//     }
//   }, []);

//   return (
//     <div>
//       {viewerData && (
//         <div>
//           <h4>Welcome {viewerData.fullname}</h4>
//         </div>
//       )}
//     </div>
//   )
// }

// import React, { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import profile from '../main/mb.png'

// export default function ViewerHome() {
//   const [viewerData, setViewerData] = useState("");

//   useEffect(() => {
//     const storedViewerData = localStorage.getItem('viewer');
//     if (storedViewerData) {
//       const parsedViewerData = JSON.parse(storedViewerData);
//       setViewerData(parsedViewerData);
//       toast.success(`Welcome ${parsedViewerData.fullname}!`);
//     }
//   }, []);
  

//   return (
//     <div className='vhome'>
//       {/* <ToastContainer /> */}


//       <div class="vcard-container">
// 	<span class="pro">PRO</span>
// 	<img class="round" src={profile} alt="profile" />
// 	<h3>{viewerData.fullname}</h3>
// 	<h6>{viewerData.email}</h6>
// 	<p>{viewerData.dateofbirth}</p>
// 	<div class="buttons">
// 		<button class="primary ghost">
// 			Following
// 		</button>
// 	</div>
// 	<div class="skills">
// 		<h6>Here For</h6>
// 		<ul>

// 			<li>Mahesh Babu</li>
// 			<li>Twitter Trends</li>
// 			<li>Movies</li>
// 			<li>Updates</li>
// 		</ul>
// 	</div>
// </div>

// <footer>
// 	<p>
// 		Created with <i class="fa fa-heart"></i> by
// 		<a target="_blank" href="https://florin-pop.com">Florin Pop</a>
// 		- Read how I created this
// 		<a target="_blank" href="https://florin-pop.com/blog/2019/04/profile-card-design">here</a>
// 		- Design made by
// 		<a target="_blank" href="https://dribbble.com/shots/6276930-Profile-Card-UI-Design">Ildiesign</a>
// 	</p>
// </footer>
        
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import profile from './image.png'
import Footer from '../main/Footer';

export default function ViewerHome() {
  const [viewerData, setViewerData] = useState("");

  useEffect(() => {
    const storedViewerData = localStorage.getItem('viewer');
    if (storedViewerData) {
      const parsedViewerData = JSON.parse(storedViewerData);
      setViewerData(parsedViewerData);
      toast.success(`Welcome ${parsedViewerData.fullname}!`);
    }
  }, []);
  

  return (
    <div className='vhome'>
      {/* <ToastContainer /> */}

      <div className="vcard-container">
        <span className="pro">PRO</span>
        <img className="round" src={profile} alt="profile" />
        <h3>{viewerData.fullname}</h3>
        <h6>{viewerData.email}</h6>
        <p>{viewerData.dateofbirth}</p>
        <div className="buttons">
          <button className="primary ghost">
            Following
          </button>
        </div>
        <div className="skills">
          <h6>Here For</h6>
          <ul>
            <li>Mahesh Babu</li>
            <li>Twitter Trends</li>
            <li>Movies</li>
            <li>Updates</li>
          </ul>
        </div>
      </div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

      <Footer />
    </div>
  );
}
