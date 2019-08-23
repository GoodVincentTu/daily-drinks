import React from 'react';
import OrderItem from './OrderItem';

const OrderList = (props) => {
  return (props.drinks &&
    <ul>
      {props.drinks.map((drink, index) => (
        <OrderItem 
          key={index}
          num={index}
          drink={drink}
          hadnleDeleteItems={props.hadnleDeleteItems}/>
      ))}
    </ul>
  )
};

export default OrderList;