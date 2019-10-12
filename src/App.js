import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
    <Contact
      avatar="https://randomuser.me/api/portraits/women/29.jpg"
      name = "Leta Cooper"
      status
    />

    <Contact
      avatar="https://randomuser.me/api/portraits/men/4.jpg"
      name = "Dylan Peters"
      
    />
    <Contact
      avatar="https://randomuser.me/api/portraits/men/20.jpg"
      name = "Darrell Parker"
      status
    />

    </div>
  );
}

export default App;
