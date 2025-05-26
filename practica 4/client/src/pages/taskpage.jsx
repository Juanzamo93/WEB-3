import { useEffect } from 'react';
import TaskCard from '../components/TaskCard.jsx';
import { useTasks } from '../context/TaskProvider.jsx';

function TaskPage() {
  const {tasks, loadTasks } = useTasks([]);

  
  useEffect(() => {
    loadTasks();
    
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1>No hay tareas</h1>;
      return tasks.map ((task) => 
          <TaskCard task={task} key={task.id} />
      );
  }
    
  return (
    <div> 
      <h1>Paises</h1>
      {renderMain()}
  </div>
  );
}

    
   
export default TaskPage;

