import './CatalogProduct.css';

const titleThreshold = 20;

export const CatalogProduct = ({ post }) => {
  const title =
    post.title?.length >= titleThreshold
      ? post.title.substring(0, titleThreshold - 4) + '...'
      : post.title;

  return (
    <div className="product-card">
      <div className="product-preview">
        <img className="product-image" src={post.imageUrl} />
        <p className="product-title">{title}</p>
      </div>
      <div className="product-hr" />
      <div>
        <p className="product-buy-now-text">BUY NOW</p>
        <p className="product-price">${post.price}</p>
      </div>
    </div>
  );
};
