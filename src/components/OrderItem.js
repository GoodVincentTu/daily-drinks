import React from 'react';
import DeleteButton from './DeleteButton';

const OrderItem = (props) => {
  return (props.drink && 
    <>
      <li>
        <p>Name: {props.drink.title}</p>
        <p>Price: {props.drink.price}</p>
        <p>Notes: {props.drink.notes}</p>
        <DeleteButton 
          num={props.num}
          hadnleDeleteItems={props.hadnleDeleteItems} />
      </li>
    </>
  )
};

export default OrderItem;