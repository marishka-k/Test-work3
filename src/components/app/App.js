import Header from '../app-header/app-header';
import Tezises from '../tezises/tezises';
import Slogan from '../slogan/slogan';
import ChessGame from '../chess-game/chess-game';
import Stages from '../stages/stages';
import Players from '../players/players';
import Footer from '../footer/footer';
import TopBackground from '../top-background/top-background';
import styles from './App.module.css';


function App() {
   
  return (
    <div className={styles.app}>
      <Header/>
      <main className={styles.main}>
        <Tezises/>
        <Slogan/>
        <ChessGame/>
        <Stages/> 
        <Players/>
        <Slogan/>
        <TopBackground/>          
      </main>
      <Footer/>
    </div>
  );
}

export default App;
