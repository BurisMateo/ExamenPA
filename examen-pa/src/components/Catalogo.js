import React from 'react';
import ProductCard from './ProductCard'

const Catalogo = ({productos}) => {
    return ( 
        <div className="row">
            {productos.map(productcard => (
                <ProductCard
                    key={productcard.id}
                    productcard={productcard}
                />
            ))}
        </div>
     );
}

export default Catalogo;