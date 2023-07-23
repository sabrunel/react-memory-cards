import { useState, useEffect, createContext } from "react";
import ScoreBoard from "./components/ScoreBoard";
import CardList from "./components/CardList";
import Modal from "./components/Modal";
import _ from 'lodash';

import bear from "./assets/bear.jpg";
import bear2 from "./assets/bear-2.jpg";
import bird from "./assets/bird.jpg";
import bird2 from "./assets/bird-2.jpg";
import bird3 from "./assets/bird-3.jpg";
import deer from "./assets/deer.jpg";
import deer2 from "./assets/deer-2.jpg";
import deer3 from "./assets/deer-3.jpg";

export const CardsContext = createContext();

export default function App() {
  const [gameStatus, setGameStatus] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [cardList, setCardList] = useState([
    {
        id: 1,
        source: bear
    },
    {
        id: 2,
        source: bear2
    },
    {
        id: 3,
        source: bird
    },
      {
        id: 4,
        source: bird2
    },
    {
        id: 5,
        source: bird3
    },
    {
        id: 6,
        source: deer
    },
    {
        id: 7,
        source: deer2
    },
    {
        id: 8,
        source: deer3
    },
  ])

  // Content of the modal that shows upon winning or losing
  const outcomeText = {
    win: {
      title: "Mastery Attained!",
      content: "You have successfully completed the challenge and assembled a complete collection of origami animals.  Well done!"
    },
    lose: {
      title: "Better Luck Next Time!",
      content: "The art of origami takes time to perfect. Keep folding and refining your skills. Remember, practice makes perfect!"
    },
  }

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
        <h2>Assemble a unique origami menagerie</h2>
      </header>
      <main>
        <CardsContext.Provider value={{cardList, selectedCards, recordSelectedCards, playRound, resetGame}}>
          <ScoreBoard gameStatus={gameStatus} resetGame={resetGame}/>
          {gameStatus !==0 && 
                <div>
                    {gameStatus == -1 && <Modal title={outcomeText.lose.title} content={outcomeText.lose.content}/>}
                    {gameStatus == 1 && <Modal title={outcomeText.win.title} content={outcomeText.win.content}/>}
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