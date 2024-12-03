
import React, { useEffect, useState } from 'react';
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

  const [cart, setCart] = useState({ TotalItems: 0, TotalAmount: 0, Items: [] });

  // Load cart from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  // Update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Handle Add to Bag click
  const handleClickBtn = (id) => {
    const updatedProducts = products.map(product =>
      product.id === id
        ? { ...product, clicked: true, qty: 1 }
        : product
    );
    setProducts(updatedProducts);

    // Update cart
    const selectedProduct = products.find(product => product.id === id);
    const existingItem = cart.Items.find(item => item.id === id);

    setCart(prevCart => {
      const updatedItems = existingItem
        ? prevCart.Items.map(item =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
          )
        : [...prevCart.Items, { ...selectedProduct, qty: 1 }];

      return {
        TotalItems: updatedItems.length, // Updated TotalItems
        TotalAmount: prevCart.TotalAmount + selectedProduct.MRP,
        Items: updatedItems,
      };
    });
  };

  // Increment quantity
  const inc = (id) => {
    const selectedProduct = products.find(product => product.id === id);
    setProducts(products.map(product =>
      product.id === id
        ? { ...product, qty: product.qty + 1 }
        : product
    ));

    setCart(prevCart => {
      const updatedItems = prevCart.Items.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      );

      return {
        TotalItems: updatedItems.length, // Updated TotalItems
        TotalAmount: prevCart.TotalAmount + selectedProduct.MRP,
        Items: updatedItems,
      };
    });
  };

  // Decrement quantity
  const dec = (id) => {
    const selectedProduct = products.find(product => product.id === id);
    setProducts(products.map(product =>
      product.id === id
        ? product.qty > 1
          ? { ...product, qty: product.qty - 1 }
          : { ...product, qty: 0, clicked: false }
        : product
    ));

    setCart(prevCart => {
      const updatedItems = prevCart.Items.map(item =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      ).filter(item => item.qty > 0);

      return {
        TotalItems: updatedItems.length, // Updated TotalItems
        TotalAmount: prevCart.TotalAmount - selectedProduct.MRP,
        Items: updatedItems,
      };
    });
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
