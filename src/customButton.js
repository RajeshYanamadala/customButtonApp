import React from "react";

const Button = ({ style, onClick, childern }) => {
  return (
    <button onClick={onClick} style={style}>
      {childern}
    </button>
  );
};

export default Button;
