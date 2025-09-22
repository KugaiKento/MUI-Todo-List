import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useTasks() {
  const [tasks, setTasks] = useLocalStorage<Record<string, string>>(
    "tasks",
    {}
  );
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input) return;
    const id = Date.now().toString();
    setTasks({ ...tasks, [id]: input });
    setInput("");
  };

  const removeTask = (id: string) => {
    const updated = { ...tasks };
    delete updated[id];
    setTasks(updated);
  };

  return { tasks, input, setInput, addTask, removeTask };
}
