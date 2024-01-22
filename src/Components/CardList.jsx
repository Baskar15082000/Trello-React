import React, { useEffect, useState } from "react";
import { getCards } from "../Api";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { addCard } from "../Api";
import { deleteCard } from "../Api";
import CreateCards from "./CreateCards";
import { useDispatch, useSelector } from "react-redux";
import { creatNewcard, deleteAcard, getCard } from "../Features/cardSlice";

const CardList = ({ id }) => {
  const dispatch = useDispatch();
  const listId = id;
  const [ispopup, setIsPopup] = useState(false);
  const [cards, setCards] = useState([]);
  const cards_ = useSelector((state) => state.card.data);
  const [ispopupcreate, setIsPopupCreate] = useState(false);
  const [cardName, setCardName] = useState("");

  useEffect(() => {
    getCards(id).then((res) => dispatch(getCard({ res, id })));

    // console.log(cards_);
  }, []);

  function ondelete(id) {
    deleteCard(id).then((res) => dispatch(deleteAcard({ listId, id })));
  }

  function onchangecardname(e) {
    setCardName(e.target.value);
  }
  function createCardfun(id) {
    addCard(cardName, id).then((res) => {
      setCardName("");
      dispatch(creatNewcard({ id, res }));
    });
  }
  return (
    <div className="cardsdiv d-flex flex-column ">
      {cards_.map((e) => {
        if (e.id == id) {
          return e.card.map((e) => {
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
          });
        }
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
              className="text-danger"
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
