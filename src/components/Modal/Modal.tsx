// Modal.tsx
type ModalProps = {
  input: string;
  setInput: (val: string) => void;
  addTask: () => void;
};

export function Modal({ input, setInput, addTask }: ModalProps) {
  return (
    <div className="modal">
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTask}>追加</button>
    </div>
  );
}
