import React from "react";

const Square = ({
  colorValue,
  hexValue,
  isDark
}) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDark ? "#000" : "#fff",
      }}
    >
      <p>{colorValue ? colorValue : "empty color"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};
Square.defaultProps = {
    colorValue: "empty Color value"
}
export default Square;
