import { IGetArticel } from "@/app/blogs/page";

const Articel = ({ title, description, id }: IGetArticel) => {
  return (
    <div className="shadow p-4">
      <h2> {title} </h2>

      <p> {description} </p>
    </div>
  );
};

export default Articel;
