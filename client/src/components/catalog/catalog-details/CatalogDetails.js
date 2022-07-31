import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CatalogDetails.css';

export const CatalogDetails = (props) => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();

  const modalExitHandler = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch(`http://localhost:3030/data/posts/${id}`)
      .then((res) => res.json())
      .then(setPost);
  }, []);

  return (
    <article>
      <div className="details-modal-background" onClick={modalExitHandler} />

      <div className="details-center-flexbox details-modal">
        <div className="details-container">
          <img className="details-image" src={post.imageUrl} />

          <div className="details-separator" />

          <div className="details-info-container">
            <span className="close" onClick={modalExitHandler}>
              &times;
            </span>

            <div>
              <p className="details-title">{post.title?.substring(0, 49)}</p>
              <p className="details-id">Listing ID: {id}</p>
            </div>

            <div>
              <div className="details-price-container">
                <p>Current Price</p>
                <p>${post.price}</p>
              </div>

              <button className="details-buy-button">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
