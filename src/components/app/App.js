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
        <div className={styles.background}>
          <div className={styles.back_1}></div>
          <div className={styles.back_2}></div>
          <div className={styles.back_3}></div>         
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
