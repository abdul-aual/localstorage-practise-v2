import React from 'react';
import './product.css';

const Product = ({ pdData, handleClickBtn, inc, dec }) => {
  const { Nm, MRP, Sp, id, clicked, qty } = pdData;

  return (
    <div className='product-holder-div' >
     <div className='btn-holder-div' >
        <h4>{Nm}</h4>
        <p>{Sp}</p>
        <p>Price: {MRP}</p>
        
        <button 
        className={`add-to-bag-btn ${clicked? 'clicked':''}`}
        onClick={clicked ? null : () => handleClickBtn(id)}>
          {clicked ? (
            <>
              <span className='dec' onClick={() => dec(id)}>-</span>
              <span className='qty' >{qty}</span>
              <span className='inc' onClick={() => inc(id)}>+</span>
            </>
          ) : (
            'Add to bag'
          )}
        </button>
      </div>
    </div>
  );
};

export default Product;
