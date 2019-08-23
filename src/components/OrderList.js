import React from 'react';
import OrderItem from './OrderItem';

const OrderList = (props) => {
  return (props.drinks &&
    <ul>
      {props.drinks.map((drink, index) => (
        <OrderItem key={index} drink={drink}/>
      ))}
    </ul>
  )
};

export default OrderList;