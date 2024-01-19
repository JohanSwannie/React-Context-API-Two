import React from "react";
import useTheme from "../contexts/theme";

function Card() {
  const { themeMode } = useTheme();
  return (
    <div class="mb-4 h-64 w-64 border-8 p-2">
      <img
        class="h-full w-full "
        src="https://upload.wikimedia.org/wikipedia/commons/c/c3/2019_Toyota_Corolla_XSE_%28MZEA12L%29_in_Blue_Flame%2C_front_left.jpg"
        alt=""
      />
    </div>
  );
}

export default Card;
