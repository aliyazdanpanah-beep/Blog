"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";

export default function Dashboard() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    api.get("/user/articels/").then((res) => setArticles(res.data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold">My Articles</h1>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {articles.map((article: any) => (
          <div key={article.id} className="bg-white rounded-xl shadow">
            <img
              src={article.img}
              alt=""
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="font-bold">{article.title}</h2>

              <p className="text-gray-500">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
