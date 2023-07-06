import { CardsContext } from "../App";
import { useContext } from "react";

export default function LoseModal() {
    const { resetGame } = useContext(CardsContext);

    return (
        <>
        <div className="backdrop"></div>
        <div className="modal">
            <div className="modal-header">
                <h2>Better Luck Next Time!</h2>
            </div>
            <div className="modal-body">
                <p>
                The art of origami takes time to perfect. 
                Keep folding and refining your skills. 
                Remember, practice makes perfect!
                </p>
            </div>
            <div className="modal-footer">
                <button onClick={() => {resetGame()}} aria-label="restart game">Play again</button>
            </div>
        </div>
    </>

    )
}