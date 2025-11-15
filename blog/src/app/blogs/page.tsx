import Container from "@/components/container/container";
import "./blogs.css";
import Articel from "@/components/Articels/Articel";
import axios from "axios";
import Link from "next/link";

export interface IGetArticel {
  id?: number;
  title?: string;
  description?: string;
}

async function Blogs() {
  const result = await fetch("http://localhost:8001/Articels");
  const data = (await result.json()) as IGetArticel[];

  return (
    <Container>
      <div className=" Wrapper grid grid-cols-4 gap-4">
        {data.map((item) => (
          <Link key={item.id} href={`/blogs/${item.id}`}>
            <Articel {...item} key={item.id} />
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default Blogs;
