import { IGetArticel } from "@/app/blogs/page";
import './articel.css'

const Articel = ({ title, description, id }: IGetArticel) => {
  return (
    <div className=" abbas shadow p-5">
      <h2> {title} </h2>

      <p> {description} </p>
    </div>
  );
};

export default Articel;
