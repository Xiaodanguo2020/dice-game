import { useState } from "react";
import "./App.css";
import Player from "./components/Player";
// import Player2 from "./components/Player2";

function App() {
  const [userList, setUserList] = useState([
    { id: 1, score: 0 },
    { id: 2, score: 0 },
  ]);

  const updateListOfUsers = (id, number) => {
    userList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          score: number,
        };
      } else {
        return item;
      }
    });
    console.log(number, id);
    console.log(userList, "here");
  };

  return (
    <div className="App">
      <h1>Dice Game</h1>
      {userList.map((u) => {
        return <Player key={u.id} update={updateListOfUsers} id={u.id} />;
      })}
      {/* <Player1 update={updateListOfUsers} /> */}
      {/* <Player2 update={updateListOfUsers} /> */}
    </div>
  );
}

export default App;
