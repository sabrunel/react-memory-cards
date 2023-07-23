import { useContext, useState, useEffect } from "react";
import { CardsContext } from "../App";
import ProgressBar from "./ProgressBar";

export default function ScoreBoard( { gameStatus }) {
    const { cardList, selectedCards } = useContext(CardsContext);
    const [ progress, setProgress ] = useState(10);

    function computeProgress() {
        const progressValue = (selectedCards.length / cardList.length) * 100;
        setProgress(progressValue);
    }

    useEffect(() => {
       if (gameStatus === 0) {
        computeProgress();
       }
        }, [selectedCards, cardList])

    return (
        <section>
            <div className="progress-text">
                <p>Current attempt</p>
                <p>{`${selectedCards.length} / ${cardList.length}`}</p>
            </div>
            <ProgressBar progress={progress}/>
        </section>
    )
}