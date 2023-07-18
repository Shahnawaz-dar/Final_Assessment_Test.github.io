import React from 'react';
import './App.css';
import DataComponent from './components/DataComponent';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <h1 className="app-heading">Final Assessment Test</h1>
      <DataComponent />
      <Footer />
    </div>
  );
};

export default App;