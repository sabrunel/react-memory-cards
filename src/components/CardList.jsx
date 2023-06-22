import Card from "./Card";
import { CardsContext } from "../App";
import { useContext } from "react";

export default function CardList() {
    const { cardList } = useContext(CardsContext);

    return (
        <section>
                <ul className="card-list">
                {cardList.map((card) => {
                    return (
                        <Card
                            key={card.id}
                            id={card.id}
                            source={card.source}
                        />
                    ) 
                })}
            </ul>
        </section>
    )
}