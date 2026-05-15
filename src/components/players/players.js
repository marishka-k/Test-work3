import { useEffect, useState, useCallback, useRef } from "react";
import { playersArr } from "../../utils/constats";
import NavigationPanel from "./navigation-panel/navigation-panel";
import styles from "./players.module.css";
import Player from "./player/player";
import { useResize } from "../../utils/use-resize";

export default function Players() {
  const { windowWidth } = useResize();
  const trackRef = useRef(null);
  
  const getSlidesPerView = () => {
    if (windowWidth > 1300) return 3;
    if (windowWidth > 900) return 2;
    return 1;
  };

  const slidesPerView = getSlidesPerView();
  const totalOriginal = playersArr.length;
  
  const extendedList = [...playersArr, ...playersArr.slice(0, slidesPerView)];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [slideFullWidth, setSlideFullWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current && trackRef.current.firstElementChild) {
      const firstSlide = trackRef.current.firstElementChild;     
      const width = firstSlide.offsetWidth + 20; 
      setSlideFullWidth(width);
    }
  }, [windowWidth, slidesPerView, extendedList]); 

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= totalOriginal) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    } else if (currentIndex < 0) {
      setIsTransitioning(false);
      setCurrentIndex(totalOriginal - 1);
    }
  };
  
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);
  
  const translateX = -(currentIndex * slideFullWidth);
  
  let displayIndex = currentIndex;
  if (displayIndex >= totalOriginal) displayIndex = 0;
  if (displayIndex < 0) displayIndex = totalOriginal - 1;
  const humanReadableIndex = displayIndex + 1; 

  return (
    <div className={styles.content}>
      <div className={styles.navigation}>
        <h2 className={styles.title}>Участники турнира</h2>
        <div className={styles.navigation_top}>
          <NavigationPanel 
            leftButtonKlick={prevSlide} 
            rightButtonKlick={nextSlide} 
            selectedPlayers={[humanReadableIndex]} 
            arrLength={totalOriginal} 
          />
        </div>
      </div>

      <div style={{ overflow: 'hidden' }}>
        <ul 
          ref={trackRef}
          className={styles.players}
          style={{
            transform: `translateX(${translateX}px)`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedList.map((player, index) => (
            <li 
              key={`${player.id || index}-${index}`} 
              className={styles.playerItem}
            >
              <Player player={player} />
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.navigation_bottom}>
        <NavigationPanel 
          leftButtonKlick={prevSlide} 
          rightButtonKlick={nextSlide} 
          selectedPlayers={[humanReadableIndex]}
          arrLength={totalOriginal} 
        />
      </div>
    </div>
  );
}