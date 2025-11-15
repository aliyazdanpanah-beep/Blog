import Container from "@/components/container/container";

const CreateBlog = () => {
  return (
    <Container>
      <div>
        <label>title</label>
        <input type="text" />

        <label>description</label>
        <textarea></textarea>
      </div>
    </Container>
  );
};

export default CreateBlog;
