// App.js
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Icons from './components/Icons';
import ShowCount from './components/ShowCount';
import Quote from './components/Quote';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Icons/>
      <ShowCount/>
      <Quote/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;