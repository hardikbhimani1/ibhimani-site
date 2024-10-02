// App.js
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Icons from './components/Icons';
import ShowCount from './components/ShowCount';
// ... import other components

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Icons/>
      <ShowCount/>
      {/* Add other sections like Services, Footer */}
    </div>
  );
}

export default App;