import './App.css';
import { useState, useCallback } from 'react';
import Firefly from 'firefly-react';
import Heart from './heart';

const colors = ['Yellow', 'Orange'];

const App = () => {
  const [isClick, setClick] = useState(false);

  const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);

  window.addEventListener(
    'resize',
    (e) => {
      setCanvasHeight(window.innerHeight);
      setCanvasWidth(window.innerWidth);
    },
    false
  );

  const onClick = useCallback(() => {
    setClick(!isClick);
  }, [isClick]);

  return (
    <div className="App">
      <header className="App-header">
        <Heart isClick={isClick} onClick={onClick} />
        <Firefly canvasWidth={canvasWidth} canvasHeight={canvasHeight} colors={colors} />
      </header>
    </div>
  );
};

export default App;
