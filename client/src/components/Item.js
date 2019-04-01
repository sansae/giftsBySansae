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

        <div className="items-section">
            {divItems}
        </div>
      </div>
    )
  }
}

export default Item;
