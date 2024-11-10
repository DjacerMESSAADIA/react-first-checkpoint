import React from 'react';
import product from '../data/product';

const Image = () => {
    return (
        <img 
            src={product.image} 
            alt={product.name}
            className="product-image img-fluid rounded"
            style={{ 
                width: '100%', 
                height: '500px', 
                objectFit: 'cover',
                objectPosition: 'center'
            }}
        />
    );
};

export default Image; 