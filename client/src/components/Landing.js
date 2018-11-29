import React from 'react';


class Landing extends React.Component {
  render() {
    return (
      <div>
        <section className="App-header">
          <div className="page-header">
            <h3>Our Items</h3>
            <i className="far fa-eye"></i>
          </div>
        </section>

        <section className="display">
          <div className="add-cart">
              Add to cart
          </div>
          <div className="item">
              display item here
          </div>
        </section>

        <section className="item-description">
          item description here
        </section>

        <section className="">
          <h4>Select an item to view</h4>
        </section>

        <section className="item-collection">

        </section>
      </div>
    )
  }
}

export default Landing;
