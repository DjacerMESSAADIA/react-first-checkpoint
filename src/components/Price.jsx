import React from 'react';
import product from '../data/product';

const Price = () => {
    return (
        <div className="product-price fs-4 text-success mb-3">
            ${product.price.toFixed(2)}
        </div>
    );
};

export default Price; 