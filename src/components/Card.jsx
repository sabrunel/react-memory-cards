import { useContext } from "react";
import { CardsContext } from "../App";

export default function Card({ id, source }) {
    const { recordSelectedCards } = useContext(CardsContext);

    return (
        <li className="card" onClick={() => {
            recordSelectedCards(id);
        }}>
            <img src={source}/>
        </li>
    )
}