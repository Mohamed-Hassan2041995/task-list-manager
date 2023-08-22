import React, { useState, useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";

export default function EditTask() {
  const { editTask, item } = useContext(TaskContext);

  const [title, setTitle] = useState("");

  useEffect(() => {
    if (item !== null) {
      setTitle(item.title);
    }
  },[item]);
  const handelSubmit = (e) => {
    e.preventDefault();

    editTask({ title: title, id: item.id });
    setTitle("");
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <form className="border p-3 my-3 " onSubmit={handelSubmit}>
        <h1 className="text-center display-4">Edit Task </h1>
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
