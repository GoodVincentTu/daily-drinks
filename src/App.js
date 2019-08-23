import React from 'react';
import './App.css';
import OrderList from './components/OrderList';
import AddItem from './components/AddItem';

class App extends React.Component{
  state = {
    drinks: [{
      title: '熟成紅茶',
      price: 20,
      notes: '微糖微冰'
    }]
  }

  handleItems = (itemObj) => {
    const {title, price, notes} = {...itemObj};
    if(!title || !price || !notes) return alert('Please fill the name, price, and notes');
    const newAry = [...this.state.drinks];
    newAry.unshift({title, price, notes});
    this.setState({drinks: newAry});
  }

  render() {
    return (
      <div className="App">
        <AddItem handleItems={this.handleItems} />
        <OrderList drinks={this.state.drinks} />
      </div>
    );
  }
}

export default App;
