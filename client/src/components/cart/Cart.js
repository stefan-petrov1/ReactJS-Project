import { Link } from 'react-router-dom';
import { CartItem } from './cart-item/CartItem';
import './Cart.css';

export const Cart = () => {
  const item1Data = {
    imageUrl:
      'https://c.pxhere.com/photos/e2/c4/watch_watches_luxury_time_timepiece_avi_8-1205190.jpg!d',
    title: 'Really Nice Luxury Watch',
    id: '8f414b4f-ab39-4d36-bedb-2ad69da9c830',
    price: 1569,
  };

  const item2Data = {
    imageUrl:
      'https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/10/Apple-watch-7-1-920x693.jpeg',
    title: 'Almost untouched Apple Smart Watch',
    id: '8f414b4f-ab39-4d36-bedb-2ad69da9c830',
    price: 431,
  };

  const totalPrice = item1Data.price + item2Data.price;

  return (
    <article className="cart-container">
      <div className="cart-data-container">
        <div className="cart-item-container">
          <CartItem {...item1Data} />
          <CartItem {...item2Data} />
          <CartItem {...item1Data} />
        </div>
        <div className="cart-data">
          <div className="cart-data-info">
            <div className="cart-data-price-container">
              <p>Subtotal: </p>
              <p>${totalPrice}</p>
            </div>

            <Link to={'/checkout'} className="cart-checkout-btn">
              Checkout{' '}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
