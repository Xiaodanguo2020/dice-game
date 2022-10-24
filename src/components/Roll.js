export const Roll = () => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 7);
  };

  return (
    <div>
      <ul>
        <li>
          <button onClick={() => randomNumber}>Roll</button>
        </li>
      </ul>
    </div>
  );
};

export default Roll;
