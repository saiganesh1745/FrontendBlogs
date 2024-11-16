// import React from 'react';
// import { Tweet } from 'react-tweet';
// import ScrollToTop from "react-scroll-to-top";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
// import { FaAnglesUp } from "react-icons/fa6";


// export default function Tweets() {
//   return (
//     <div className="tweets">
//       <div className="tweet-container">
//         <Tweet id="1799335693132730672" />
//       </div>
//       <div className="tweet-container">
//         <Tweet id="1791443606701785475" />
//       </div>
//       <div className="tweet-container">
//         <Tweet id="1761749799789859046" />
//       </div>
//       <div className="tweet-container">
//         <Tweet id="1803776031767322928" />
//       </div>
//       <div className="tweet-container">
//         <Tweet id="1761628341994742241" />
//       </div>
//       <div className="tweet-container">
//         <Tweet id="1803775319926517824" />
//       </div>
//       <div className="tweet-container">
//         <Tweet id="1803780457089339701" />
//       </div>
//       <div className="tweet-container">
//         <Tweet id="1803779617699848243" />
//       </div>
//       <div className="tweet-container">
//         <Tweet id="1722186992132432226" />
//       </div>
      
//       <ScrollToTop 
//         smooth 
//         className='scroll' 
//         component={<FaAnglesUp icon={FaAnglesUp} />} 
//       />
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import { Tweet } from 'react-tweet';
import ScrollToTop from "react-scroll-to-top";
import { FaAnglesUp, FaArrowDown } from "react-icons/fa6"; // Import both icons
import Footer from './Footer';



export default function Tweets() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
      setIsAtBottom(isBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='tweetsb'>
    <div className="tweets">
      <div className="tweet-container">
        <Tweet id="1799335693132730672" />
      </div>
      <div className="tweet-container">
        <Tweet id="1799335693132730672" />
      </div>
      <div className="tweet-container">
        <Tweet id="1761749799789859046" />
      </div>
      <div className="tweet-container">
        <Tweet id="1803776031767322928" />
      </div>
      <div className="tweet-container">
        <Tweet id="1761628341994742241" />
      </div>
      <div className="tweet-container">
        <Tweet id="1743961214118473935" />
      </div>
      <div className="tweet-container">
        <Tweet id="1811755530890981719" />
      </div>
      <div className="tweet-container">
        <Tweet id="1803779617699848243" />
      </div>
      <div className="tweet-container">
        <Tweet id="1722186992132432226" />
      </div>
      
      <ScrollToTop 
        smooth 
        className='scroll' 
        component={<FaAnglesUp />} 
      />
      
      <div 
        className={`scroll-bottom ${isAtBottom ? 'hidden' : ''}`} 
        onClick={scrollToBottom}
      >
        <FaArrowDown />
      </div>
      <Footer />
    </div>
    </div>
  );
}
