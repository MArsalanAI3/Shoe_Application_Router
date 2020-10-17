import React from 'react';
import Shoes from './../Shoes.json';
import {Link} from 'react-router-dom';


function Product() {
  return (
    <div >
      <h1>WellCome To Product</h1>

    <div className='ProductContainer'>
    {Object.keys(Shoes).map(keyName=>{
      const shoe = Shoes[keyName];
      return (
          <Link key={keyName} 
              className="link" 
              to={`/product/${keyName}`}>
                  <h4>{shoe.name}</h4>
                  <img src={shoe.img} height={150} alt="shoe" />
      </Link>)
    })}

    </div>


    </div>
  );
}

export default Product;
