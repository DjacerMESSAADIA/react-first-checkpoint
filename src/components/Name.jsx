import React from 'react';
import product from '../data/product';

const Name = () => {
    return (
        <h2 className="product-name fw-bold mb-3">{product.name}</h2>
    );
};

export default Name; 