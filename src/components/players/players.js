import { useEffect, useState } from "react";
import { playersArr } from "../../utils/constats";
import NavigationPanel from "./navigation-panel/navigation-panel";
import styles from "./players.module.css";
import Player from "./player/player";
import { useResize } from "../../utils/use-resize";

export default function Players() {
  const { windowWidth } = useResize();
  const [arr, setArr] = useState([])

  const [selectedPlayers, setSelectedPlayers] = useState([])

  useEffect (() => {
    let _selectedPlayers = selectedPlayers
    if (windowWidth > 1300) {
      if (_selectedPlayers.length === 0) {
        _selectedPlayers = [1, 2, 3]
        setSelectedPlayers(_selectedPlayers)
      } 
      
      if (_selectedPlayers.length === 2){
        if (_selectedPlayers[0] < playersArr.length - 2) {
          _selectedPlayers.push([Number(_selectedPlayers[_selectedPlayers.length - 1]) + 1])
        } else _selectedPlayers.push([Number(_selectedPlayers[0]) - 1])
        setSelectedPlayers(_selectedPlayers)
      } 
      
      if (_selectedPlayers.length === 1){
        if (_selectedPlayers[0] < playersArr.length - 2) {
          _selectedPlayers.push([Number(_selectedPlayers[_selectedPlayers.length - 1]) + 1])
          _selectedPlayers.push([Number(_selectedPlayers[_selectedPlayers.length - 1]) + 1])
        } else if (_selectedPlayers[0] === playersArr.length - 1){
          _selectedPlayers.push([Number(_selectedPlayers[_selectedPlayers.length - 1]) + 1])
          _selectedPlayers.push([Number(_selectedPlayers[0]) - 1])
        } else {
          _selectedPlayers.push([Number(_selectedPlayers[0]) - 1])
          _selectedPlayers.push([Number(_selectedPlayers[0]) - 1])
        }
        setSelectedPlayers(_selectedPlayers)
      }
      
    } else if (windowWidth <= 1300 && windowWidth > 900 ) {
      if (_selectedPlayers.length === 0) {
      _selectedPlayers = [1, 2]
      setSelectedPlayers(_selectedPlayers)
      } 
      
      if (_selectedPlayers.length === 3) {
        _selectedPlayers.shift();
        
      } 
      
      if (_selectedPlayers.length === 1) {
        if (_selectedPlayers[0] < playersArr.length - 1) {
          _selectedPlayers.push([Number(_selectedPlayers[_selectedPlayers.length - 1]) + 1])
        } else _selectedPlayers.push([Number(_selectedPlayers[0]) - 1])
        console.log('_selectedPlayers[0]', _selectedPlayers[0]);
        
        setSelectedPlayers(_selectedPlayers)    
      }
      
    } else if (windowWidth <= 900) {
      if (_selectedPlayers.length === 0) {
        _selectedPlayers = [1]
        setSelectedPlayers(_selectedPlayers)
      } 
      
      if (_selectedPlayers.length === 3) {
        _selectedPlayers.shift();
        _selectedPlayers.shift();
        setSelectedPlayers(_selectedPlayers)
      } 
      
      if (_selectedPlayers.length === 2) {
        _selectedPlayers.shift();
        setSelectedPlayers(_selectedPlayers)
      }

    }    

    console.log('_selectedPlayers', _selectedPlayers);
    
    
  }, [selectedPlayers, windowWidth])

  useEffect (() => {
    let _arr = arr
    if (selectedPlayers.length > 0 || (selectedPlayers.length > 0 && ((windowWidth > 1300 && _arr.length !== 3) || (windowWidth <= 1300 && windowWidth > 900 && _arr.length !== 2) || (windowWidth <= 900 && _arr.length !== 1) ))) {
      _arr = []
      selectedPlayers.forEach(el => {
        _arr.push(playersArr[el - 1])
      })
    }
    setArr(_arr)

  }, [selectedPlayers, windowWidth])
  
  const leftButtonKlick = () => {
    let _newSelectedPlayers = []
    if (selectedPlayers[0] !== 1) {
      selectedPlayers.forEach(el => _newSelectedPlayers.push(el - 1))
      setSelectedPlayers(_newSelectedPlayers)
    }    
  }

  const rightButtonKlick = () => {
    let _newSelectedPlayers = []
    if (selectedPlayers[selectedPlayers.length - 1] !== playersArr.length) {
      selectedPlayers.forEach(el => _newSelectedPlayers.push(el + 1))
      setSelectedPlayers(_newSelectedPlayers)
    }
    console.log('rightButtonKlick');
    
  }


  return (
    <div className={styles.content}>
      <div className={styles.navigation}>
        <h2 className={styles.title}>Участники турнира</h2>
        <NavigationPanel leftButtonKlick={leftButtonKlick} rightButtonKlick={rightButtonKlick} selectedPlayers={selectedPlayers} arrLength={playersArr.length} />
      </div>
      <ul className={styles.players}>
      {arr.length > 0 && arr.map((player, index) => {
        return (
          <Player key={index} player={player}/>
        )
      })
      }
      </ul>

    </div>
  );
}
