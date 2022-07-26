import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CatalogDetails.css';

export const CatalogDetails = (props) => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3030/data/posts/${id}`)
      .then((res) => res.json())
      .then(setPost);
  }, []);

  return (
    <article className="details-center-flexbox">
      <div className="details-container">
        <img className="details-image" src={post.imageUrl} />
        <div className="details-info-container">
          <div>
            <p className="details-title">{post.title?.substring(0, 49)}</p>
            <p className="details-id">Listing ID: {id}</p>
          </div>

          <div>
            <div className="details-price-container">
              <p>Current Price</p>
              <p>US ${post.price}</p>
            </div>

            <button className="details-buy-button">ADD TO CART</button>
          </div>
        </div>
      </div>
    </article>
  );
};
