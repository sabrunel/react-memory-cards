import { useContext, useState, useEffect } from "react";
import { CardsContext } from "../App";

export default function ScoreBoard( { gameStatus, resetGame }) {
    const { cardList, selectedCards } = useContext(CardsContext);
    const [ progress, setProgress ] = useState(10);

    function computeProgress() {
        const progressValue = (selectedCards.length / cardList.length) * 100;
        setProgress(progressValue);
    }

    useEffect(() => {
       if (gameStatus ===0) {
        computeProgress();
       }
        }, [selectedCards, cardList])

    return (
        <section>
            <p>Current attempt</p>
            <div className="progress-bar">
                <div style={{
                    height: "20px",
                    width: `${progress}%`,
                    backgroundColor: "black",
                    borderRadius: "8px",
                    transition: "width 0.2s ease-in-out"
                    }}>
                </div>
            </div>
            {gameStatus !==0 && 
                <div>
                    {gameStatus == -1 && <p>Try again!</p>}
                    {gameStatus == 1 && <p>Congratulations!</p>}
                    <button onClick={() => {resetGame()}}> Restart game</button>
                </div>
            }
        </section>
    )
}