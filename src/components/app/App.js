import Header from '../app-header/app-header';
import styles from './App.module.css';
import Tezises from '../tezises/tezises';
import Slogan from '../slogan/slogan';
import { useResize } from '../../utils/use-resize';
import ChessGame from '../chess-game/chess-game';
import { useEffect } from 'react';
import Stages from '../stages/stages';
import Players from '../players/players';
import Footer from '../footer/footer';
import TopBackground from '../top-background/top-background';


function App() {
  const { windowWidth } = useResize();

  useEffect(() => {
  console.log('windowWidth', windowWidth);}, [windowWidth]
  )
   
  return (
    <div className={styles.app}>
      <Header/>
      <main className={styles.main}>
        <Tezises/>
        <Slogan/>
        <ChessGame windowWidth={windowWidth}/>
        <Stages/> 
        <Players windowWidth={windowWidth}/>
        <Slogan/>
        <TopBackground/>          
      </main>
      <Footer/>
    </div>
  );
}

export default App;
