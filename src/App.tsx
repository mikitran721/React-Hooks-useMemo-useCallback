import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo1", "todo 2"]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count:{count}
        <button onClick={increment}>INCREMENT</button>
      </div>
    </>
  );
}

export default App;
