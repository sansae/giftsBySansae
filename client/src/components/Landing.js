import React from 'react';
import imageData from './../data/images';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentImg: imageData[0] };
  }

  handleImageClick(image) {
    this.setState({ currentImg: image });
  }

  render() {
    let divItems = [];

    imageData.map( image => {
      return divItems.push(
        <div onClick={() => this.handleImageClick(image)}>
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
          <div className="item">
            <img src={this.state.currentImg.src} alt={this.state.currentImg.name}></img>
          </div>
        </section>

        <section className="item-description">
          {this.state.currentImg.description}
          <div className="add-cart"><span>Add to Cart</span></div>
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
