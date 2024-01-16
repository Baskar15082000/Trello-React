import React, { useEffect, useState } from "react";
import { getCards } from "../Api";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { addCard } from "../Api";

const CardList = ({ id }) => {
  const [ispopup, setIsPopup] = useState(false);
  const [cards, setCards] = useState([]);
  const [ispopupcreate, setIsPopupCreate] = useState(false);
  const [cardName, setCardName] = useState("");
  useEffect(() => {
    getCards(id).then((res) => setCards(res));
  }, []);

  function ondelete(id) {}

  function onchangecardname(e) {
    setCardName(e.target.value);
  }
  function createCardfun(id) {
    addCard(cardName, id).then((res) => {
      setCardName("");
      setCards((prev) => [...prev, res]);
    });
  }
  return (
    <div className="cardsdiv d-flex flex-column">
      {cards &&
        cards.map((e) => {
          return (
            <div className="cardlist d-flex justify-content-between" key={e.id}>
              <div className="cards_">{e.name}</div>
              <div
                onClick={() =>
                  setIsPopup((pre) => {
                    if (pre === e.id) {
                      return !pre;
                    } else {
                      return e.id;
                    }
                  })
                }
              >
                <MoreHorizIcon />
                {ispopup === e.id && (
                  <div className="delete p-1" onClick={() => ondelete(e.id)}>
                    Archive
                  </div>
                )}
              </div>
            </div>
          );
        })}
      <div className="add mt-1" onClick={() => setIsPopupCreate(true)}>
        + Add a card
      </div>

      {ispopupcreate && (
        <div className="popupcreatecard d-flex flex-column">
          <input
            type="text"
            value={cardName}
            onChange={onchangecardname}
            placeholder="card name"
          />
          <div className="addcardspopup d-flex justify-content-between px-4 py-1">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setIsPopupCreate(false)}
            >
              x
            </div>{" "}
            <div
              style={{ cursor: "pointer" }}
              onClick={() => createCardfun(id)}
            >
              add
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardList;
