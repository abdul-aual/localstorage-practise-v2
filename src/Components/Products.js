// import React, { useState } from 'react';
// import fakedata from './fakadata.json';
// import Product from './Product';
// const Products = () => {
//     const [products] = useState(fakedata);
//     return (
//         <div>
//             {
//                 products.map((data,index) =>(
//                     <Product 
//                          pdData={data}  
//                          key={index} >

//                     </Product>
//                 ))
//             }
//         </div>
//     );
// };

// export default Products;

import React, { useState } from 'react';
import fakedata from './fakadata.json';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState(
    fakedata.map(product => ({
      ...product,
      clicked: false,
      qty: 0,
    }))
  );

  // Handle Add to Bag click
  const handleClickBtn = (id) => {
    setProducts(products.map(product =>
      product.id === id
        ? { ...product, clicked: true, qty: 1 }
        : product
    ));
  };

  // Increment quantity
  const inc = (id) => {
    setProducts(products.map(product =>
      product.id === id
        ? { ...product, qty: product.qty + 1 }
        : product
    ));
  };

  // Decrement quantity
  const dec = (id) => {
    setProducts(products.map(product =>
      product.id === id
        ? product.qty > 1
          ? { ...product, qty: product.qty - 1 }
          : { ...product, qty: 0, clicked: false }
        : product
    ));
  };

  return (
    <div>
      {products.map((product) => (
        <Product
          key={product.id}
          pdData={product}
          handleClickBtn={handleClickBtn}
          inc={inc}
          dec={dec}
        />
      ))}
    </div>
  );
};

export default Products;
