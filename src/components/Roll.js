import { useState } from "react";

export const Roll = () => {
  const [score, set_score] = useState(null);

  const randomNumber = () => {
    const number = Math.floor(Math.random() * 6) + 1;
    console.log(number);
    set_score(number);
  };

  return (
    <div>
      <p>this player has dice score of {score}</p>
      <button onClick={randomNumber}>Roll</button>
    </div>
  );
};

export default Roll;
