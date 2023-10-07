
import React, { useState } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import Menu from './components/menu/menu'; // Import Menu here
import Landing from './components/landing/landing';

function App() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [selectedContent, setSelectedContent] = useState('contentA'); 

  if (!showMainContent) {
    return <Landing onEnter={() => setShowMainContent(true)} />;
  }

  return (
    <div className="App">
      <Header />
      <Menu onSelect={setSelectedContent} /> {/* Render Menu here */}
      <Main selectedContent={selectedContent} />
      <Footer />
    </div>
  );
}

export default App;

