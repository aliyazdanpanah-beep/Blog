"use client";

import { useState } from "react";
import { createArticle } from "@/services/article";

export default function CreateArticle() {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [img, setImg] = useState("");

  const submit = async () => {
    await createArticle(title, description, img);

    alert("Article Created");
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <div className="bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-6">Create Article</h1>

        <input
          placeholder="Title"
          className="border p-3 w-full mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="border p-3 w-full h-40 mb-4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          placeholder="Image URL"
          className="border p-3 w-full mb-4"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />

        <button
          onClick={submit}
          className="bg-black text-white px-5 py-3 rounded"
        >
          Publish
        </button>
      </div>
    </div>
  );
}
