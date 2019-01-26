import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <section className="App-header">
          <div className="page-header">
            <h2 className="cart-title">Shopping Cart</h2>
            <i className="fas fa-cart-arrow-down"></i>
          </div>
        </section>

        {this.props.cart.items.map((item, index) => {
          return <section className="shopping-cart">
            <div className="cart-pics">
              <img src={item.src} alt={item.name}></img>
            </div>

            <div className="cart-details">
              <p><span>Item:</span> {item.name}</p>
              <p><span>Details:</span> {item.description}</p>
              <p><span>Price Per Count:</span> {item.price}</p>
              <p><span>count:</span> {item.count}</p>
            </div>
          </section>
        })}
      </div>
    )
  }
}

export default ShoppingCart;
