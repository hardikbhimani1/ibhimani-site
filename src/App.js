// App.js
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Icons from './components/Icons';
// ... import other components

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Icons/>
      {/* Add other sections like Services, Footer */}
    </div>
  );
}

export default App;