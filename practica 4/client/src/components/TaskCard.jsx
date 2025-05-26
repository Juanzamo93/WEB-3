import { useTasks } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";
import "../styles/TaskCard.css"; // Archivo CSS para estilos

function TaskCard({ task }) {
    const { deleteTask } = useTasks();
    const navigate = useNavigate();

    return (
        <div className="task-card">
            <ul className="task-card-list">
                <li><strong>Nombre:</strong> {task.ciudad}</li>
                <li><strong>Capital:</strong> {task.equipo}</li>
                <li><strong>Continente:</strong> {task.stadium}</li>
            </ul>
            <div className="task-card-buttons">
                <button onClick={() => deleteTask(task.id)} className="delete-button">
                    Borrar
                </button>
                <button onClick={() => navigate(`/edit/${task.id}`)} className="edit-button">
                    Editar
                </button>
            </div>
        </div>
    );
}

export default TaskCard;