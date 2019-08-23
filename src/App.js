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

  handleAddItems = (itemObj) => {
    const {title, price, notes} = {...itemObj};
    if(!title || !price || !notes) return alert('Please fill the name, price, and notes');
    const newAry = [...this.state.drinks];
    newAry.unshift({title, price, notes});
    this.setState({drinks: newAry});
  }

  hadnleDeleteItems = (inputIndex) => {
    const newAry = [...this.state.drinks];
    const returnAry = newAry.filter((drink, index) => { return index !== inputIndex})
    this.setState({drinks: returnAry});
  }

  render() {
    return (
      <div className="App">
        <AddItem handleAddItems={this.handleAddItems} />
        <OrderList 
          drinks={this.state.drinks}
          hadnleDeleteItems={this.hadnleDeleteItems} />
      </div>
    );
  }
}

export default App;
