import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function AddTask() {
  const { addTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();

    addTask({title:title,id:Math.floor(Math.random() *10000)})
        setTitle(''); 
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <form className="border p-3 my-3 " onSubmit={handelSubmit}>
        <h1 className="text-center display-4">Add New Task </h1>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="text your task"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div class="d-grid gap-2">
          <button type="submit" className="btn btn-success">
            {" "} 
            Submit{" "}
          </button>
        </div>
      </form>
    </>
  );
}
