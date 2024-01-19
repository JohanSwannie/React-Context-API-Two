import useTheme from "../contexts/theme";

function Card() {
  const { themeDark } = useTheme();

  if (themeDark) {
    document.body.style.backgroundColor = "rgb(149, 143, 143)";
  } else {
    document.body.style.backgroundColor = "rgb(48, 44, 44)";
  }

  return (
    <div className="mb-4 h-3/4 w-3/4 border-8 p-16 mx-auto card">
      <img
        className="h-full w-full mb-8"
        src="https://upload.wikimedia.org/wikipedia/commons/c/c3/2019_Toyota_Corolla_XSE_%28MZEA12L%29_in_Blue_Flame%2C_front_left.jpg"
        alt=""
      />
      {themeDark ? (
        <h1 className="text-white mt-8">Toyota - $14995</h1>
      ) : (
        <h1 className="text-black font-bold mt-8">Toyota - $14995</h1>
      )}
    </div>
  );
}

export default Card;
