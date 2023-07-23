import { CardsContext } from "../App";
import { useContext } from "react";

export default function WinModal({ title, content }) {
    const { resetGame } = useContext(CardsContext);
    
    return (
        <>
        <div className="backdrop"></div>
        <div className="modal">
            <div className="modal-header">
                <h2>{title}</h2>
            </div>
            <div className="modal-body">
                <p> {content} </p>
            </div>
            <div className="modal-footer">
                <button onClick={() => {resetGame()}} aria-label="restart game">Play again</button>
            </div>
        </div>
    </>
    )
}