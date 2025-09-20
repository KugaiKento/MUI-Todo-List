import { useEffect, useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

function App() {
  const [tasks, setTasks] = useLocalStorage<Record<string, string>>(
    "tasks",
    {}
  );
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input) return;
    const id = Date.now().toString(); // 時刻をキーにする
    setTasks({ ...tasks, [id]: input });
    setInput("");
  };

  const removeTask = (id: string) => {
    const updated = { ...tasks };
    delete updated[id];
    setTasks(updated);
  };

  return (
    <>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addTask}>追加</button>
        <ul>
          {Object.entries(tasks).map(([id, text]) => (
            <li key={id}>
              {text}
              <button onClick={() => removeTask(id)}>削除</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
