import React, { useEffect, useState } from "react";
import { getCards } from "../Api";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { addCard } from "../Api";
import { deleteCard } from "../Api";
import CreateCards from "./CreateCards";

const CardList = ({ id }) => {
  const [ispopup, setIsPopup] = useState(false);
  const [cards, setCards] = useState([]);
  const [ispopupcreate, setIsPopupCreate] = useState(false);
  const [cardName, setCardName] = useState("");

  useEffect(() => {
    getCards(id).then((res) => setCards(res));
  }, []);

  function ondelete(id) {
    console.log(id);
    var t = cards;
    var c = [];
    deleteCard(id).then((res) => {
      console.log(res);
      if (res.status === 200) {
        t.map((e) => {
          if (e.id !== id) {
            c.push(e);
          }
        });
        setCards(c);
      }
    });
  }

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
    <div className="cardsdiv d-flex flex-column ">
      {cards &&
        cards.map((e) => {
          return (
            <div
              className="cardlist d-flex justify-content-between bg-white mb-3 px-1"
              key={e.id}
            >
              <CreateCards title={e.name} id={e.id} />
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
                style={{ cursor: "pointer" }}
              >
                <EditNoteIcon />
                {ispopup === e.id && (
                  <div className="delete p-1" onClick={() => ondelete(e.id)}>
                    Archive
                  </div>
                )}
              </div>
            </div>
          );
        })}

      <div
        className="add mt-3 mb-1 px-1"
        onClick={() => setIsPopupCreate(true)}
      >
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
          <div className="addcardspopup d-flex justify-content-between px-4  py-1">
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
