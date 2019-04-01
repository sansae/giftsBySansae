import React from 'react';
import imageData from '../data/images';

class Item extends React.Component {

  render() {
    var divItems = [];

    imageData.map((image, index) => {
      return divItems.push(
        <div>
          <img src={image.src} alt={image.name}></img>
        </div>
      )
    })


    return (
      <div>
        <section className="App-header">
          <div className="page-header">
            <h3>All Items</h3>
            <i className="far fa-eye"></i>
          </div>
        </section>

        <section>
          <div className="all-items">
            {divItems}
          </div>
        </section>
      </div>
    )
  }
}

export default Item;
