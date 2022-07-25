import './Home.css';

export const Home = () => {
  return (
    <>
      <article>
        <div className="site-main-photo" />
        <div className="site-info">
          <p className="site-title">DINOSAUR'S AUCTION</p>
          <p className="site-brief-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="site-get-started-btn">Get Started</button>
        </div>
      </article>
      <article className="site-introduction">
        <div className="intro-div-container">
          <div className="intro-div">
            <img
              className="get-started-icon"
              src="images/get-started-icon.png"
            />
            <p className="intro-title">Get started!</p>
            <p className="intro-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              odio quasi quod sequi veniam aut animi. Quaerat ea autem nam
              labore ab nulla. At, nemo vero nesciunt delectus exercitationem
              debitis?
            </p>
          </div>
          <div className="intro-div">
            <img
              className="how-it-works-icon"
              src="images/how-it-works-icon.png"
            />
            <p className="intro-title">How it works?</p>
            <p className="intro-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              odio quasi quod sequi veniam aut animi. Quaerat ea autem nam
              labore ab nulla. At, nemo vero nesciunt delectus exercitationem
              debitis?
            </p>
          </div>
          <div className="intro-div">
            <img className="what-is-it-icon" src="images/what-is-it-icon.png" />
            <p className="intro-title">What is it?</p>
            <p className="intro-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              odio quasi quod sequi veniam aut animi. Quaerat ea autem nam
              labore ab nulla. At, nemo vero nesciunt delectus exercitationem
              debitis?
            </p>
          </div>
        </div>
      </article>
      <article className="why-trust-us-container">
        <p className="why-trust-us-title">Why trust us?</p>
        <div className="why-trust-us-text-container">
          <p className="why-trust-us-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non totam
            ipsam reprehenderit sunt excepturi inventore voluptatum? Rerum,
            aliquam odit dolores nihil ad incidunt, non, vitae adipisci fuga
            explicabo est repudiandae.
          </p>
          <img className="handshake-image" src="images/handshake.webp" />
        </div>
      </article>
      <hr className="divider" />
    </>
  );
};
