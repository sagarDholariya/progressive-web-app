import React, { memo } from "react";
import CheckBox from "./CheckBox";
import EditButton from "./EditButton";
import RemoveButton from "./RemoveButton";
import PropTypes from "prop-types";
import FavouriteButton from "./FavouriteButton";

function Card({
  key,
  card,
  removeHandler,
  modalHandler,
  checkBoxChanger,
  addFavourite,
  type,
}) {
  const { data, id, isChecked, isFavourite } = card;
  return (
    <>
      <div key={key} class="card" style={{padding: '20px'}}>
        <div class="card-header">Quote</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p style={{ textDecoration: isChecked ? "line-through" : "" }}>
              {data}
            </p>
            <div style={{ display: 'flex', justifyContent: type === "list" ? 'space-between' : 'flex-start', alignItems: 'center' }}>
              {type === "list" && <CheckBox isChecked={isChecked} checkBoxChanger={checkBoxChanger} id={id} />}
              {type === "list" && <EditButton modalHandler={modalHandler} card={card} />}
              {type === "list" && <RemoveButton removeHandler={removeHandler} id={id} />}
              <FavouriteButton
                addFavourite={addFavourite}
                id={id}
                isFavourite={isFavourite}
              />
            </div>
          </blockquote>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  key: PropTypes.number,
  card: PropTypes.object,
  updateList: PropTypes.func,
  removeHandler: PropTypes.func,
  modalHandler: PropTypes.func,
  editHandler: PropTypes.func,
  checkBoxChanger: PropTypes.func,
  type: PropTypes.string,
};

export default memo(Card);
