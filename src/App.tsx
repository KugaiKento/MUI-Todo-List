import { useState } from "react";
import _Button from "./components/Button/_Button";
import { Modal } from "./components/Modal/Modal";
import { useTasks } from "./hooks/useTasks";

function App() {
  const { tasks, input, setInput, addTask, removeTask } = useTasks();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Modal
        input={input}
        setInput={setInput}
        addTask={addTask}
        open={open}
        onClose={() => setOpen(false)}
      />
      <ul>
        {Object.entries(tasks).map(([id, text]) => (
          <li key={id}>
            {text}
            <button onClick={() => removeTask(id)}>削除</button>
          </li>
        ))}
      </ul>
      <_Button onClick={() => setOpen(true)} />
    </div>
  );
}

export default App;
