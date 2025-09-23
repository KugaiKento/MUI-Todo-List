// Modal.tsx
type ModalProps = {
  open: boolean;
  onClose: () => void;
  input: string;
  setInput: (value: string) => void;
  addTask: () => void;
};

export function Modal({ open, onClose, input, setInput, addTask }: ModalProps) {
  if (!open) return null; // 開いていないときは何も表示しない

  return (
    <div className="modal">
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          addTask();
          onClose();
        }}
      >
        追加
      </button>
      <button onClick={onClose}>閉じる</button>
    </div>
  );
}
