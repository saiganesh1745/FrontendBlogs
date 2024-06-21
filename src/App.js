import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainNavBar from "./main/MainNavBar";
import ViewerNavBar from './viewer/ViewerNavBar';


function App() {
  const [isViewerLoggedIn, setIsViewerLoggedIn] = useState(false);

  useEffect(() => {
    const viewerLoggedIn = localStorage.getItem('isViewerLoggedIn') === 'true';

    
    setIsViewerLoggedIn(viewerLoggedIn);
  }, []);

  const onViewerLogin = () => {
    localStorage.setItem('isViewerLoggedIn', 'true');
    setIsViewerLoggedIn(true);
  };

  return (
    <div>
      
      <Router>
      {isViewerLoggedIn ? (
          <ViewerNavBar />
        ) : (
      <MainNavBar onViewerLogin={onViewerLogin} />
    )}
      </Router>
      
    </div>
  );
}

export default App;

