import { Route, Routes } from 'react-router-dom';
import TaskPage from './pages/taskpage.jsx';
import TaskForm from './pages/taskform.jsx';
import NotFound from './pages/notfound.jsx';
import Navbar from './components/Navbar.jsx';
import { TaskContextProvider } from './context/TaskProvider.jsx';


function App() {
  return (
    <div className="app">
      <div className="container mx-auto">  
        <TaskContextProvider>
          <Navbar />
            <Routes>
              <Route path="/" element={<TaskPage />} />
              <Route path="/new" element={<TaskForm />} />
              <Route path="/edit/:id" element={<TaskForm />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;

