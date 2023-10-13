import React, { useState, useEffect, useRef } from 'react';

const SaveToHomePage = () => {
  const [showAddToHomeScreenButton, setShowAddToHomeScreenButton] = useState(true);
  const deferredPrompt = useRef(null);

  useEffect(() => {
    // Check if the browser supports the beforeinstallprompt event
    if ('BeforeInstallPromptEvent' in window) {
      // Add an event listener to register the beforeinstallprompt event
      window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent the default browser prompt
        e.preventDefault();
        
        // Store the event for later use
        deferredPrompt.current = e;
      });
    }
  }, []);

  const handleAddToHomeScreen = () => {
    // Check if the deferredPrompt is available
    if (deferredPrompt.current) {
      // Trigger the installation prompt
      deferredPrompt.current.prompt();
      console.log(deferredPrompt.current);

      // Wait for the user choice
      deferredPrompt.current.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }

        // Cleanup
        // deferredPrompt.current = null;
      });
    }
  };

  return (
    <div>
      {/* Your content */}
      <h1>Welcome to My React App</h1>

      {/* Render the "Add to Home Screen" button */}
      {showAddToHomeScreenButton && (
        <button id="add-to-home-screen-button" onClick={handleAddToHomeScreen}>
          Add to Home Screen
        </button>
      )}
    </div>
  );
};

export default SaveToHomePage;
