import React from 'react';
import NavigationBar from './layout/NavigationBar'; 
import MainPage from './layout/MainPage'; 
import Footer from './layout/Footer'; 
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <NavigationBar/>  {/* Navigation bar */}
      <MainPage /> {/* Main content */}
      <Footer /> {/* Footer */}
    </div>
  );
}

export default App;
