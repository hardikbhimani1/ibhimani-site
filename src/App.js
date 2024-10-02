// App.js
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
// ... import other components

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* Add other sections like Services, Footer */}
    </div>
  );
}

export default App;