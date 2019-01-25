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
              <p><span>Quantity:</span> 1</p>
              <p><span>Details:</span>{item.description}</p>
              <p><span>Price:</span> {item.price}</p>
            </div>
            {/*
            <div className="cart-table">
              <table>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                </tr>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              </table>
            </div>
            */}
          </section>
        })}
        {/*
        <table>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Price</th>
          </tr>
          {this.props.cart.items.map((item, index) => {
            return <tr>
                <td><img src={item.src} alt={item.name}></img></td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
          })}
        </table>
        */}
      </div>
    )
  }
}

export default ShoppingCart;
