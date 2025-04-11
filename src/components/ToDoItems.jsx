import React, { useState } from "react";

const ToDoItems = (props) => {
  const [itemStyled, setItemStyled] = useState(false);

  const handleToggleStyle = () => setItemStyled((prev) => !prev);

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        onClick={handleToggleStyle}
        style={{
          textDecoration: itemStyled ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {props.text}
      </span>
      <button onClick={() => props.onChecked(props.id)}>❌</button>
    </li>
  );
};

export default ToDoItems;
