import React from 'react';
import NavigationBar from './layout/NavigationBar'; 
import MainPage from './layout/MainPage'; 
import Footer from './layout/Footer'; 
import './App.module.css';

function App() {
  return (
    <div className="App">
      <NavigationBar/>  {/* Navigation bar */}
      <MainPage /> {/* Main content */}
      <Footer /> {/* Footer */}
    </div>
  );
}

export default App;
