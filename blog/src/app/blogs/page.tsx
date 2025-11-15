import Container from "@/components/container/container";
import "./blogs.css";
import Articel from "@/components/Articels/Articel";

const Blogs = () => {
  return (
    <Container>
      <div className=" Wrapper grid grid-cols-4 gap-4">
        <Articel />      
        <Articel />      
        <Articel />      
        <Articel />      
      </div>
    </Container>
  );
};

export default Blogs;
