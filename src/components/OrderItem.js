import React from 'react';

const OrderItem = (props) => {
  return (props.drink && 
    <>
      <li>
        <p>Name: {props.drink.title}</p>
        <p>Price: {props.drink.price}</p>
        <p>Notes: {props.drink.notes}</p>
      </li>
    </>
  )
};

export default OrderItem;