import React from 'react';
import Shoes from './../Shoes.json';
import {useParams}from "react-router-dom";

function ProductItems() {
  let {id} = useParams();
const shoe=Shoes[id]
if (!shoe)
return <h2>Shoe Not Found!</h2>


  return (
    <div >
      <h1>WellCome To ProductItems</h1>

      <div className="link">
                  <h4>{shoe.name}</h4>
                  <img src={shoe.img} height={500} alt="shoe" />
      </div>

    </div>
  );
}

export default ProductItems;
