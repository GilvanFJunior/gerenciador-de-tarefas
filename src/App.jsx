import { useState } from 'react';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar Programação',
      description:
        'Estudar programação para poder se tornar um Programador Full Stack',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Estudar Inglês',
      description: 'Estudar para ser fluente em outra lingua',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Estudar Galos de Combate',
      description:
        'Estudar sobre Galos de combate para poder ser o rei do  galismo',
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}

export default App;
