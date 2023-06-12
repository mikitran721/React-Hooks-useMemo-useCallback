import { memo, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo1", "todo 2"]);
  const calculationResult = useMemo(() => expensiveCalculation(count), [count]);
  // dependency array; khi count thay doi moi tinh lai; neu ko lay gia tri cu

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = () => {
    setTodos([...todos, "New Todo"]);
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <button
        className="btn border bg-blue-500 text-white p-4 font-bold"
        onClick={addTodo}
      >
        Add Todo
      </button>
      <hr />
      <div>
        Count:{count} <br />
        Caculation Result:{calculationResult} <br />
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

const expensiveCalculation = (count: number) => {
  console.log("CACULATING");
  /**
   * khi thay doi count thi ham nay cung se render lai theo compt to. mac du khong thay doi gia tri gi nhung van mat time & bo nho thuc thi phi cong;
   * de tranh cho ham nay thay doi theo khi count thay doi, ta se sd useMemo
   */

  for (let i = 0; i < 1000000000; i++) {
    count += 1;
  }

  console.log("DONE CACULATION !!!");
  return count;
};

export default App;
