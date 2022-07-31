import './CartItem.css';

export const CartItem = ({ imageUrl, title, id, price }) => {
  return (
    <div className="cart-item">
      <img className="cart-item-image" src={imageUrl} />

      <div className="cart-image-separator" />

      <div className="cart-item-info">
        <div>
          <p className="cart-item-title">{title}</p>
          <p className="cart-item-id">Listing ID: {id}</p>
        </div>
        <p className="cart-item-price">Price: ${price}</p>
      </div>

      <span className="close">&times;</span>
    </div>
  );
};
