import React from 'react';

class AddItem extends React.Component {
  state = {
    title: '熟成紅茶',
    price: 20,
    notes: '微糖微冰',
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  handleClick = e => {
    e.preventDefault();
    const itemObj = {...this.state};
    this.props.handleAddItems(itemObj);
  }

  render() {
    return (
      <div>
        <fieldset>
          <label htmlFor="title">
            Name:
            <input 
              type="text"
              id="title"
              name="title"
              placeholder="Enter the name of the drink"
              required
              value={this.state.title}
              onChange={this.handleChange} />
          </label>

          <label htmlFor="price">
            Price
            <input 
              type="number"
              id="price"
              name="price"
              placeholder="Price"
              required
              value={this.state.price}
              onChange={this.handleChange} />
          </label>

          <label htmlFor="notes">
            Notes
            <textarea 
              name="notes"
              id="notes" 
              cols="30"
              rows="10"
              placeholder="Enter some additional notes"
              required
              value={this.state.notes}
              onChange={this.handleChange} />
          </label>

          <button
            onClick={this.handleClick}>
              Submit
          </button>
        </fieldset>
      </div>
    )
  }
}

export default AddItem;