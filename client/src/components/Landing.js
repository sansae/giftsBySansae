import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import imageData from './../data/images';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentImg: imageData[0], page: 1, isOpen: false, photoIndex: 0 };
  }

  next(totalPages) {
    this.slider.slickNext();

    this.setState({page: this.state.page + 1});

    if (this.state.page === totalPages) {
      this.setState({page: 1});
    }
  }

  previous(totalPages) {
    this.slider.slickPrev();

    this.setState({page: this.state.page - 1});

    if (this.state.page === 1) {
      this.setState({page: totalPages});
    }
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const divItems = [];

    imageData.map( image => {
      return divItems.push(
        <div>
          <img onClick={() => this.setState({ currentImg: image })} src={image.src} alt={image.name} class="img-item"></img>
          <p className="item-name">
            {image.name}
          </p>
          <p>Base Price: {image.price}</p>
          {/*
          <p>Bids: {image.bids}</p>
          <p>
            Current Bid: {image.currentBid}
          </p>
          <p>
            Days Remaining: {image.daysLeft}
          </p>
          <button>Place New Bid</button>
          */}
        </div>
      )
    })

    const settings = {
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      swipeToSlide: true,
    };

    const totalPages = Math.ceil(divItems.length / settings.slidesToShow);

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
            <img onClick={() => this.setState({isOpen: true})} src={this.state.currentImg.src} alt={this.state.currentImg.name}></img>

            {isOpen && (
              <Lightbox
                mainSrc={imageData[photoIndex].src}
                nextSrc={imageData[(photoIndex + 1) % imageData.length].src}
                prevSrc={imageData[(photoIndex + imageData.length - 1) % imageData.length].src}
                onCloseRequest={() =>
                  this.setState({
                    isOpen: false,
                  })
                }
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + imageData.length - 1) % imageData.length
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % imageData.length
                  })
                }
              />
            )}
          </div>
        </section>

        <section className="item-description">
          {this.state.currentImg.description}
          <div className="add-cart"><span>Add to Cart</span></div>
        </section>

        <section className="select-item-header">
          <h4>Select An Item To View</h4>
        </section>

        <Slider className="slider" ref={c => (this.slider = c)} {...settings}>
          {divItems}
        </Slider>

        <div>
          <button className="button" onClick={() => this.previous(totalPages)}>
            Prev
          </button>
          <button className="button" onClick={() => this.next(totalPages)}>
            Next
          </button>
          <div className="page-number">
            {this.state.page} of {totalPages}
          </div>
        </div>

        <footer className="contact">Contact Us</footer>
      </div>
    )
  }
}

export default Landing;
