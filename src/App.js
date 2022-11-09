import './App.css';
import { useState } from 'react';
import Firefly from 'firefly-react';
import Lottie from 'react-lottie';
import * as animationData from './73482-heart.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const colors = ['Yellow', 'Orange'];

const App = () => {
  const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);
  const heartSize = canvasWidth < canvasHeight ? canvasWidth / 2 : canvasHeight / 2;
  window.addEventListener(
    'resize',
    (e) => {
      setCanvasHeight(window.innerHeight);
      setCanvasWidth(window.innerWidth);
    },
    false
  );

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ position: 'absolute' }}>
          <Lottie options={defaultOptions} height={heartSize} width={heartSize} />
        </div>
        <Firefly canvasWidth={canvasWidth} canvasHeight={canvasHeight} colors={colors} />
      </header>
    </div>
  );
};

export default App;
