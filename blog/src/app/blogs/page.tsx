import Container from "@/components/container/container";
import "./blogs.css";
import Articel from "@/components/Articels/Articel";
import axios from "axios";
import Link from "next/link";

export interface IGetArticel {
  id?: string;
  title?: string;
  description?: string;
}

async function Blogs() {
  const result = await fetch("http://localhost:8001/Articels");
  const data = (await result.json()) as IGetArticel[];

  return (
    <section className="container">
      <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8 mx-auto max-w-7xl">
        {data.map((item) => (
          <Link
            key={item.id}
            href={`/blogs/${item.id}`}
            className="block transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 h-full hover:shadow-2xl transition-all duration-300 hover:border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-3 mb-4">
                {item.description}
              </p>
              <div className="flex justify-between items-center text-xs text-gray-500 pt-3 border-t border-gray-100">
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-md font-medium">
                  ID: {item.id}
                </span>
                <span className="text-blue-500 font-semibold">مشاهده →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
