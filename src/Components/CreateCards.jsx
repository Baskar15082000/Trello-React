import React from "react";

const CreateCards = ({ title }) => {
  return (
    <div>
      <div
        className="modal fade mt-5 "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div
              className="card_1 card position-absolute "
              style={{ width: "40rem" }}
            >
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCards;
