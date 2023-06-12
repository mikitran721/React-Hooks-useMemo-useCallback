import { memo, useState } from "react";
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
        Count:{count} <br />
        <button
          className="btn border bg-blue-500 text-white p-4 font-bold"
          onClick={increment}
        >
          INCREMENT
        </button>
      </div>
    </>
  );
}

const Todos = memo(({ todos }: { todos: string[] }) => {
  console.log(`TODO RRENDERED`);
  /**
   * khi tang increment thi TODOS cung chay lai theo render cua APP;
   * de tranh viec totos render theo app ta su dung memo(..) boc lai todos. tac dung voi component nhung vao - child comp
   * export default memo(Todos); neu de file rieng
   */

  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-700">MY TODOS</h1>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </>
  );
});

export default App;
