export const Player = (props) => {
  const update = props.update;
  const id = props.id;

  const randomNumber = () => {
    const number = Math.floor(Math.random() * 6) + 1;

    update(number, id);
  };

  return (
    <div>
      {/* <p>This player 1 has dice score of {player1score}</p> */}
      <button onClick={randomNumber}>Roll</button>
    </div>
  );
};

export default Player;
