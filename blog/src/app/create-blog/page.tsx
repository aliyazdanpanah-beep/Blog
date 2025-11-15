import Container from "@/components/container/container";
import "./createBlog.css";

const CreateBlog = () => {
  return (
    <Container>
      <div className="create-blog">
        <div className="form-group">
          <label className="form-label">Title</label>
          <input type="text" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea className="form-textarea"></textarea>
        </div>
      </div>
    </Container>
  );
};

export default CreateBlog;