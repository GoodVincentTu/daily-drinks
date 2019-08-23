import React from 'react';
import './App.css';
import OrderList from './components/OrderList'

class App extends React.Component{
  state = {
    drinks: [{
      title: '熟成紅茶',
      price: '$20',
      notes: '微糖微冰'
    }]
  }

  render() {
    return (
      <div className="App">
        <OrderList drinks={this.state.drinks}/>
      </div>
    );
  }
}

export default App;
