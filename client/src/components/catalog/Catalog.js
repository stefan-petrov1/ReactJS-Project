import { useEffect, useState } from 'react';
import { CatalogProduct } from './catalog-product/CatalogProduct';
import './Catalog.css';
import { PaginationButton } from './pagination-button/PaginationButton';

export const Catalog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);

  const pages = Math.floor(posts.length / 4) || 1;
  const paginationButtons = [];

  const changePageHandler = (num) => {
    setSelectedPage(num);
  };

  for (let i = 1; i <= pages; i++) {
    paginationButtons.push(
      <PaginationButton
        key={i}
        currentButtonNum={i}
        selectedButtonNum={selectedPage}
        changePageHandler={changePageHandler}
      />
    );
  }

  useEffect(() => {
    fetch('http://localhost:3030/data/posts')
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  return (
    <article className="catalog-center-container">
      <div className="catalog">
        <div className="catalog-filters-container">
          <p className="product-show-amount-text">
            <span>Show</span>
            <select
              className="product-show-amount-selector"
              name="catalog-show-filter"
              defaultValue="8">
              <option value="4">4 products</option>
              <option value="8">8 products</option>
              <option value="12">12 products</option>
            </select>
          </p>
        </div>
        <div className="catalog-container">
          <div className="all-filters-container">
            <div className="filter-container">
              <p className="filter-title">Price</p>
              <div className="product-filter-container">
                <input
                  className="filter-checkbox"
                  type="checkbox"
                  defaultChecked={true}
                />
                <p className="filter-text">All</p>
              </div>
              <div className="product-filter-container">
                <input
                  className="filter-checkbox"
                  value=">= 100 AND <= 499"
                  type="checkbox"
                />
                <p className="filter-text">100 - 499$</p>
              </div>
              <div className="product-filter-container">
                <input className="filter-checkbox" type="checkbox" />
                <p className="filter-text">500 - 999$</p>
              </div>
              <div className="product-filter-container">
                <input className="filter-checkbox" type="checkbox" />
                <p className="filter-text">1000 - 1999$</p>
              </div>
              <div className="product-filter-container">
                <input className="filter-checkbox" type="checkbox" />
                <p className="filter-text">2000 - 3999$</p>
              </div>
              <div className="product-filter-container">
                <input className="filter-checkbox" type="checkbox" />
                <p className="filter-text">4000 - 5999$</p>
              </div>
              <div className="custom-price-product-filter-container"></div>
            </div>
          </div>
          <div className="catalog-products-container">
            {posts && posts.map((x) => <CatalogProduct key={x._id} post={x} />)}
          </div>
        </div>

        <div className="pagination-buttons-container">{paginationButtons}</div>
      </div>
    </article>
  );
};
