import { useContext, useState, useEffect } from "react";
import { CardsContext } from "../App";

export default function ScoreBoard( { gameStatus }) {
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
            <div className="progress-text">
                <p>Current attempt</p>
                <p>{`${selectedCards.length} / ${cardList.length}`}</p>
            </div>
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
        </section>
    )
}