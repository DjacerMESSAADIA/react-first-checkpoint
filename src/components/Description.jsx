import React from 'react';
import product from '../data/product';

const Description = () => {
    return (
        <p className="product-description text-muted mb-3">
            {product.description}
        </p>
    );
};

export default Description; 