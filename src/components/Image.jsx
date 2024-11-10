import React from 'react';
import product from '../data/product';

const Image = () => {
    return (
        <img 
            src={product.image} 
            alt={product.name}
            className="product-image img-fluid rounded mb-3"
            style={{ maxWidth: '100%', height: 'auto' }}
        />
    );
};

export default Image; 