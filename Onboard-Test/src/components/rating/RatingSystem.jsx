import { useState } from "react";
import { AiOutlineBorder, AiFillCheckSquare } from "react-icons/ai";

export default function App() {
  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);

  const handleText = () => {
    switch (number || hoverStar) {
      case 0:
      case 1:
        return "Poor";
      case 2:
      case 3:
        return "Marginal";
      case 4:
      case 5:
      case 6:
        return "Acceptable";
      case 7:
      case 8:
      case 9:
        return "Good";
      case 10:
        return "Excellent";
      default:
        return "Expertise Level";
    }
  };

  return (
    <div>
      <div>
        {Array(10)
          .fill()
          .map((_, index) =>
            number >= index + 1 || hoverStar >= index + 1 ? (
              <AiFillCheckSquare
                onMouseOver={() => !number && setHoverStar(index + 1)}
                onMouseLeave={() => setHoverStar(undefined)}
                style={{
                  color: "#868686",
                  marginRight: "0px",
                  height: "1.5em",
                  width: "2em",
                }}
                onClick={() => setNumber(index + 1)}
              />
            ) : (
              <AiOutlineBorder
                onMouseOver={() => !number && setHoverStar(index + 1)}
                onMouseLeave={() => setHoverStar(undefined)}
                style={{
                  color: "grey",
                  marginRight: "0px",
                  height: "1.5em",
                  width: "2em",
                }}
                onClick={() => setNumber(index + 1)}
              />
            )
          )}
      </div>
      <p>{handleText()}</p>
    </div>
  );
}
