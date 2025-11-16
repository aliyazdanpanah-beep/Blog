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
    <Container>
      <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 ">
        {data.map((item) => (
          <Link
            key={item.id}
            href={`/blogs/${item.id}`}
            className="block transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 h-full hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                {item.description}
              </p>
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>ID: {item.id}</span>
                <span>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default Blogs;
