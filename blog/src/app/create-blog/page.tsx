"use client";
import { useState } from "react";
// import "./createBlog.css";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const handelCreateArticel = () => {
    fetch("http://localhost:8001/create/articel/", {
      method: "POST",
      body: JSON.stringify({
        id: Math.floor(Math.random() * 1000).toString(),
        title: title,
        description: description,
      }),
    });
  };
  return (
    <div className="create-blog">
      <div className="form-group">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Description</label>
        <textarea
          value={description}
          className="form-textarea"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div className="form-group">
        <label className="form-label">Image</label>
        <input
          type="text"
          className="form-input"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
      </div>

      <button onClick={handelCreateArticel}>Submit</button>
    </div>
  );
};

export default CreateBlog;
