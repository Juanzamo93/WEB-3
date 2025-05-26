import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/TaskForm.css"; // Import the CSS file for styling

function TaskForm() {
    const { createTask, getTask, updateTask } = useTasks();
    const params = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState({
        ciudad: "",
        equipo: "",
        stadium: "",
    });

    useEffect(() => {
        const loadTasks = async () => {
            if (params.id) {
                const task = await getTask(params.id);
                if (task) {
                    setTask({
                        ciudad: task.ciudad || "",
                        equipo: task.equipo || "",
                        stadium: task.stadium || "",
                    });
                }
            }
        };
        loadTasks();
    }, [params.id, getTask]);

    return (
        <div className="task-form-container">
            <h1 className="task-form-title">{params.id ? "Editar Equipo" : "Create Task"}</h1>
            <Formik
                initialValues={task}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    try {
                        if (params.id) {
                            await updateTask(params.id, values);
                        } else {
                            await createTask(values);
                        }
                        actions.resetForm();
                        navigate("/");
                    } catch (error) {
                        console.error("Error al guardar la tarea:", error.message);
                    }
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit} className="task-form">
                        <ul className="task-form-list">
                            <li>
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    name="ciudad"
                                    placeholder="Escribe un pais"
                                    onChange={handleChange}
                                    value={values.ciudad}
                                />
                            </li>
                            <li>
                                <label>Capital</label>
                                <input
                                    type="text"
                                    name="equipo"
                                    placeholder="Escribe una capital"
                                    onChange={handleChange}
                                    value={values.equipo}
                                />
                            </li>
                            <li>
                                <label>Continente</label>
                                <input
                                    type="text"
                                    name="stadium"
                                    placeholder="Escribe un continente"
                                    onChange={handleChange}
                                    value={values.stadium}
                                />
                            </li>
                            <li>
                                <button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? "Guardando..." : "Save"}
                                </button>
                            </li>
                        </ul>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default TaskForm;