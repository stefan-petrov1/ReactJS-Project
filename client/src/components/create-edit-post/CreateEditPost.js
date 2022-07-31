import '../auth/Auth.css';
import './CreateEditPost.css';

export const CreateEditPost = () => {
  return (
    // 'cu' stands for 'create update'
    <section className="cu-container-center">
      <article className="cu-container">
        <p className="sign-title">Create/Edit Post</p>
        <form className="sign-form">
          <div className="sign-field-input-container">
            <input
              className="sign-in-field-input"
              placeholder="Title"
              type="text"
              name="title"
            />
            <p className="sign-error">Title must be bla bla bla</p>
          </div>
          <div className="sign-field-input-container">
            <input
              className="sign-in-field-input"
              placeholder="Image URL"
              type="text"
              name="imageUrl"
            />
            <p className="sign-error">Image urk should be valid</p>
          </div>
          <div className="sign-field-input-container">
            <input
              className="sign-in-field-input"
              placeholder="Price"
              type="number"
              name="price"
            />
            <p className="sign-error">Price must be somthing</p>
          </div>
          <button className="sign-btn cu-btn">Save</button>
        </form>
      </article>
    </section>
  );
};
