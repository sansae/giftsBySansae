import React from 'react';
import imageData from './../data/images';

class Landing extends React.Component {
  render() {
    let divItems = [];

    imageData.map( image => {
      return divItems.push(
        <div>
          <img src={image.src} alt={image.name} class="img-item"></img>
          <p>{image.name}</p>
        </div>
      )
    })

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

        <section className="select-item-header">
          <h4>Select An Item To View</h4>
        </section>

        <section className="item-collection">
          {divItems}
        </section>
      </div>
    )
  }
}

export default Landing;
