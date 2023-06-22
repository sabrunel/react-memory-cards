import { useState, useEffect, createContext } from "react";
import ScoreBoard from "./components/ScoreBoard";
import CardList from "./components/CardList";
import _ from 'lodash';

export const CardsContext = createContext();

export default function App() {
  const [gameStatus, setGameStatus] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [cardList, setCardList] = useState([
    {
        id: 1,
        source: "/src/assets/bear.jpg"
    },
    {
        id: 2,
        source: "/src/assets/bear-2.jpg"
    },
    {
        id: 3,
        source: "/src/assets/bird.jpg"
    },
      {
        id: 4,
        source: "/src/assets/bird-2.jpg"
    },
    {
        id: 5,
        source: "/src/assets/bird-3.jpg"
    },
    {
        id: 6,
        source: "/src/assets/deer.jpg"
    },
    {
        id: 7,
        source: "/src/assets/deer-2.jpg"
    },
    {
        id: 8,
        source: "/src/assets/deer-3.jpg"
    },
  ])

  function shuffleCards() {
      setCardList((currentList) => {
          return _.shuffle(currentList);
      })
  }

  function recordSelectedCards(id) {
    if (selectedCards.includes(id)) {
      setGameStatus(-1); // Defeat
    } else {
      setSelectedCards((currentList) => {
        return  [...currentList, id]
        })
      }
    }

  function playRound() {
      if (selectedCards.length === cardList.length) {
      setGameStatus(1); // Victory
    }  else {
      shuffleCards();
    }
  }

  function resetGame() {
    setGameStatus(0);
    setSelectedCards([]);
  }

  useEffect(()  => {
    if (gameStatus ===0) {
      playRound();
     }
  }, [selectedCards])

  return (
    <>
      <header>
        <h1>Memory Folds</h1>
        <h2> 
         Assemble a unique origami menagerie.
        </h2>
        <p>  
          Your goal is to select and fold each animal card with precision.
        </p> 
        <p>  
          Be strategic, avoid duplicates, and become the master of paper artistry!
        </p>
      </header>
      <main>
        <CardsContext.Provider value={{cardList, selectedCards, recordSelectedCards, playRound}}>
          <ScoreBoard gameStatus={gameStatus} resetGame={resetGame}/>
          <CardList/>
        </CardsContext.Provider>
      </main>
      <footer>
        <p><a href="http://www.freepik.com">Designed by rawpixel.com / Freepik</a></p>
      </footer>
    </>
  )
}