import _Button from "./components/Button/_Button";
import { Modal } from "./components/Modal/Modal";
import { useTasks } from "./hooks/useTasks";

function App() {
  const { tasks, input, setInput, addTask, removeTask } = useTasks();

  return (
    <div>
      <Modal input={input} setInput={setInput} addTask={addTask} />
      <ul>
        {Object.entries(tasks).map(([id, text]) => (
          <li key={id}>
            {text}
            <button onClick={() => removeTask(id)}>削除</button>
          </li>
        ))}
      </ul>
      <_Button />
    </div>
  );
}

export default App;
