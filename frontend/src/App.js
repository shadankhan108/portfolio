import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NodeGraphBackground from './components/NodeGraphBackground';
import MatrixBackground from './components/MatrixBackground';
import DynamicScatterBackground from './components/DynamicScatterBackground';

const App = () => {
  const [background, setBackground] = useState('scatter');

  const toggleBackground = () => {
    const backgrounds = ['scatter', 'matrix', 'nodeGraph'];
    const currentIndex = backgrounds.indexOf(background);
    const nextIndex = (currentIndex + 1) % backgrounds.length;
    setBackground(backgrounds[nextIndex]);
  };

  const renderBackground = () => {
    switch (background) {
      case 'scatter':
        return <DynamicScatterBackground />;
      case 'matrix':
        return <MatrixBackground />;
      case 'nodeGraph':
        return <NodeGraphBackground />;
      default:
        return <DynamicScatterBackground />;
    }
  };

  return (
    <>
      <Navbar toggleBackground={toggleBackground} />
      {renderBackground()}
    </>
  );
};

export default App;
