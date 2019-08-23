import React from 'react';
import OrderItem from './OrderItem';

const OrderList = (props) => {
  return (props.drinks &&
    <ul>
      <p>Orders</p>
      {props.drinks.map(drink => (
        <OrderItem key={drink.title} drink={drink}/>
      ))}
    </ul>
  )
};

export default OrderList;