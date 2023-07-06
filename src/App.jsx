import { useState, useEffect, createContext } from "react";
import ScoreBoard from "./components/ScoreBoard";
import CardList from "./components/CardList";
import LoseModal from "./components/LoseModal";
import WinModal from "./components/WinModal";
import _ from 'lodash';

export const CardsContext = createContext();

export default function App() {
  const [gameStatus, setGameStatus] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [cardList, setCardList] = useState([
    {
        id: 1,
        source: "/bear.jpg"
    },
    {
        id: 2,
        source: "/bear-2.jpg"
    },
    {
        id: 3,
        source: "/bird.jpg"
    },
      {
        id: 4,
        source: "/bird-2.jpg"
    },
    {
        id: 5,
        source: "/bird-3.jpg"
    },
    {
        id: 6,
        source: "/deer.jpg"
    },
    {
        id: 7,
        source: "/deer-2.jpg"
    },
    {
        id: 8,
        source: "/deer-3.jpg"
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
         Assemble a unique origami menagerie
        </h2>
      </header>
      <main>
        <CardsContext.Provider value={{cardList, selectedCards, recordSelectedCards, playRound, resetGame}}>
          <ScoreBoard gameStatus={gameStatus} resetGame={resetGame}/>
          {gameStatus !==0 && 
                <div>
                    {gameStatus == -1 && <LoseModal/>}
                    {gameStatus == 1 && <WinModal/>}
                </div>
            }
          <CardList/>
        </CardsContext.Provider>
      </main>
      <footer>
        <p><a href="http://www.freepik.com">Designed by rawpixel.com / Freepik</a></p>
      </footer>
    </>
  )
}