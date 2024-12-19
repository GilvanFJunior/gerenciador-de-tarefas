import { useState } from 'react';

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>

      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>

      <button
        onClick={() => {
          //verificando se o titulo e a descrição estão preenchidos
          if (!title.trim() || !description.trim()) {
            return alert('Por favor, preencha todos os campos');
          }
          onAddTaskSubmit(title, description);
          setTitle('');
          setDescription('');
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium "
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;