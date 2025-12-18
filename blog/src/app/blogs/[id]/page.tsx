import Container from "@/components/container/container";
import { IGetArticel } from "../page";
import { notFound } from "next/navigation";

interface IArticelProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}

async function Articel(props: IArticelProps) {
  const { id } = await props.params;

  try {
    const result = await fetch(`http://localhost:8001/Articels/${id}`, {
      next: { revalidate: 60 },
    });

    if (!result.ok) {
      if (result.status === 404) {
        notFound();
      }
      throw new Error("خطا در دریافت داده");
    }

    const data = (await result.json()) as IGetArticel;

    return (
      <Container>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
          <p className="text-gray-700 whitespace-pre-line">
            {data.description}
          </p>
        </div>
      </Container>
    );
  } catch (error) {
    console.error("Error fetching article:", error);
    return (
      <Container>
        <div className="p-6 text-red-500">Blog not found</div>
      </Container>
    );
  }
}

export default Articel;
