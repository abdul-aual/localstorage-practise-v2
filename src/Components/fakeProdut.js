// import React, { useState } from 'react';

// const Product = (props) => {
//     const { Nm, MRP, Sp } = props.pdData;
//     const [clicked, setClicked] = useState(false);
//     const [qty, setQty] = useState(0);
//     const handleClickBtn = () =>{
//         setQty(1);
//         setClicked(true);
//     }
//     const inc = () =>{
//         setQty(qty+1);
//     }
//     const dec = () =>{
//         if(qty>1){
//             setQty(qty-1)
//         }else{
//             setQty(0);
//             setClicked(false);
//         }
//     }
//     return (
//         <div style={{ marginBottom: '8px', marginTop: '30px' }} >
//             <div style={{ textAlign: 'center', width: '350px', margin: '0 auto', border: '1px solid lightgray', borderRadius: '8px', padding: '20px 2px' }} >
//                 <h4>{Nm}</h4>
//                 <p>{Sp}</p>
//                 <p>Price: {MRP}</p>
//                 <button onClick={clicked? null:handleClickBtn} >
//                     {
//                         clicked?(
//                             <>
//                             <span onClick={dec}>-</span>
//                             <span>{qty}</span>
//                             <span onClick={inc}>+</span>
//                             </>
//                         ):(
//                             'Add to bag'
//                         )
//                     }


//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Product;