import './App.css';
import { useState, useCallback } from 'react';
import Firefly from 'firefly-react';
import Lottie from 'lottie-react';
import firstHeart from './73482-heart.json';
import bestHeart from './97653-best-heart.json';
import boxHeart from './97380-heart-box.json';
import likeHeart from './6974-like-heart-animation.json';
import lheart from './7692-heart.json';
import heartAnimation from './96723-heart-animation.json';
import randomHeart from './96839-heart.json';
import particlesHeart from './725-heart-with-particles.json';

const colors = ['Yellow', 'Orange'];
const HEARTS = [firstHeart, bestHeart, boxHeart, particlesHeart, likeHeart, lheart, heartAnimation, randomHeart];
const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
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

  const onClick = useCallback(() => {
    let nextIndex = selectedIndex + 1;
    if (nextIndex >= HEARTS.length) {
      nextIndex = 0;
    }
    setSelectedIndex(nextIndex);
  }, [selectedIndex]);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ position: 'absolute' }} onClick={onClick}>
          <Lottie
            style={{ height: heartSize, width: heartSize }}
            animationData={JSON.parse(JSON.stringify(HEARTS[selectedIndex]))}
            height={heartSize}
            width={heartSize}
          />
        </div>
        <Firefly canvasWidth={canvasWidth} canvasHeight={canvasHeight} colors={colors} />
      </header>
    </div>
  );
};

export default App;
