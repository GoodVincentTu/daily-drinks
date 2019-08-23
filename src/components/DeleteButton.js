import React, { Component } from 'react';

class DeleteButton extends Component {
  handleDelete = e => {
    e.preventDefault();
    this.props.hadnleDeleteItems(this.props.num);
  }

  render() {
    return (
      <>
        <span onClick={this.handleDelete} >&times;</span>
      </>
    );
  }
}

export default DeleteButton;