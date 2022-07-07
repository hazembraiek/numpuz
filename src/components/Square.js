import React from "react";
import { useDispatch } from "react-redux";
import { BoardActions } from "../store/slices/board";

export const Square = ({ cell, pos }) => {
  const dispatch = useDispatch();
  const switchPos = () => {
    dispatch(BoardActions.setBoard({ posClicked: pos }));
  };
  return (
    <div
      className="cell"
      style={{ backgroundColor: cell ? "#C9A15C" : "#5D2F1F" }}
      onClick={switchPos}
    >
      {cell}
    </div>
  );
};
