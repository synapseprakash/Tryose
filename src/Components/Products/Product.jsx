import React from 'react';
import '../Products/Product.css';
const ProductView = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 39.99,
      image: 'product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      image: 'product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 49.99,
      image: 'product3.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 19.99,
      image: 'product4.jpg',
    },
    {
      id: 5,
      name: 'Product 5',
      price: 59.99,
      image: 'product5.jpg',
    },
    {
      id: 6,
      name: 'Product 6',
      price: 34.99,
      image: 'product6.jpg',
    },
    {
      id: 7,
      name: 'Product 7',
      price: 44.99,
      image: 'product7.jpg',
    },
    {
      id: 8,
      name: 'Product 8',
      price: 24.99,
      image: 'product8.jpg',
    },
    // Add more products here
  ];

  return (
    <div className="product-view">
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="card">
              <img src={product.image} alt={product.name} className="card-img-top" />
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p className="card-text">Price: ${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductView;
