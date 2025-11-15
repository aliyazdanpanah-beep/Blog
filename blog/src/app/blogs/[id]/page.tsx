import Container from "@/components/container/container";
import { IGetArticel } from "../page";

interface IArticelProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}

async function Articel(props: IArticelProps) {
  const { id } = await props.params;

  const result = await fetch(`http://localhost:8001/Articels/${id}`);
  const data = (await result.json()) as IGetArticel;

  return (
    <Container>
      <div>
        <h1 className="text-lg"> {data.title} </h1>
        <p>{data.description}</p>
      </div>
    </Container>
  );
}

export default Articel;
