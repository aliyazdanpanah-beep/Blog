import Container from "@/components/container/container";
import "./blogs.css";
import Articel from "@/components/Articels/Articel";
import axios from "axios";
import Link from "next/link";

export const dynamic = 'force-dynamic'; 

export interface IGetArticel {
  id?: string;
  title?: string;
  description?: string;
}

async function Blogs() {
  const result = await fetch("http://localhost:8001/Articels");
  const data = (await result.json()) as IGetArticel[];

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <Link
            key={item.id}
            href={`/blogs/${item.id}`}
            className="block h-full"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <Articel {...item} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
