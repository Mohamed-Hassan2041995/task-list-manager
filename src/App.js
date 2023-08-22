import "bootstrap/dist/css/bootstrap.min.css";
import "./css/app.css";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//context
import { TaskContextProvider } from "./context/TaskContext";
function App() {
  return (
    <div className="app">
      <div className="overlay"></div>
      <Router>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto cont-app my-5">
              <TaskContextProvider>
                <Routes>
                  <Route exact path="/" element={<TaskList />} />
                  <Route path="/add-task" element={<AddTask />} />
                  <Route path="/all-tasks" element={<TaskList />} />
                </Routes>
              </TaskContextProvider>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
