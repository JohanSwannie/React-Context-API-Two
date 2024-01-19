import useTheme from "../contexts/theme";

function Card() {
  const { themeDark } = useTheme();

  if (themeDark) {
    document.body.style.backgroundColor = "rgb(149, 143, 143)";
  } else {
    document.body.style.backgroundColor = "rgb(48, 44, 44)";
  }

  return (
    <div className="mb-4 h-3/4 w-auto border-8 p-20 card">
      <img
        className="h-full w-full "
        src="https://upload.wikimedia.org/wikipedia/commons/c/c3/2019_Toyota_Corolla_XSE_%28MZEA12L%29_in_Blue_Flame%2C_front_left.jpg"
        alt=""
      />
    </div>
  );
}

export default Card;
