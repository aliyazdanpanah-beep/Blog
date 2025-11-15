import Container from "@/components/container/container";
import { IGetArticel } from "../page";

async function Articel() {
  const result = await fetch("http://localhost:8001/Articels/1");
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
