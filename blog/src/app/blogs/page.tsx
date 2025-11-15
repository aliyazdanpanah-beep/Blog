import Container from "@/components/container/container";

const Blogs = () => {
  return (
    <Container>
      <div className="grid grid-cols-4 gap-4">
        <div className="shadow p-4">
          <h2>title</h2>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio nemo
            praesentium aliquam deserunt nobis architecto dignissimos deleniti
            saepe non voluptas, corporis excepturi quo, unde ipsa laudantium
            dicta facere nisi perferendis?
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Blogs;
