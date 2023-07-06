import { CardsContext } from "../App";
import { useContext } from "react";

export default function WinModal() {
    const { resetGame } = useContext(CardsContext);
    
    return (
        <>
        <div className="backdrop"></div>
        <div className="modal">
            <div className="modal-header">
                <h2>Mastery Attained!</h2>
            </div>
            <div className="modal-body">
                <p> 
                    You have successfully completed the challenge and assembled a complete collection of origami animals. 
                    Well done!
                </p>
            </div>
            <div className="modal-footer">
            <button onClick={() => {resetGame()}} aria-label="restart game">Play again</button>
            </div>
        </div>
    </>
    )
}