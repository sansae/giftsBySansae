import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <section className="App-header">
          <div className="page-header">
            <h3>About Us</h3>
            <i class="far fa-grin"></i>
          </div>
        </section>

        <section className="about">
          <div>
            <h5>Hi There!</h5>
          </div>
          <div>
            We are a family owned business operating since 1934. Only recently (2018) have we decided to branch out and take advantage of the world wide web. While we continue to maintain our store front in sunny California, right at the heart of San Francisco, we believe in opening ourselves up to the rest of the world by going online. Our goal is simple: to share stories with others through our collection of rare items. We are a team of archeologists, world travelers, and historians who all share the common interest of discovering the supernatural. If it looks wierd and out of this world, then chances are we'll be there to investigate.
          </div>

          <div>
            <h5>Why Us</h5>
          </div>
          <div>
            <p>
              You might be wondering what makes us unique.
            </p>
            <p>
              It's certainly not our website. After all, there's nothing remarkable about it. You might even say it's quite plain (and I'd agree with you).
            </p>
            <p>
              We stand out among the rest because what we offer are rare items that you won't find just anywhere. Not at your general retail outlets and not at your random mom-and-pop shops. Our items are not sold anywhere else in the world. Some are ancient, having existed for thousands of years, while others are extra-terrestrial and not of this world. Just as well, we have ordinary, but historical items that might appeal to you due to its authentic nature.
            </p>
            <p>
              Take a look at our items, such as our Purple Rain gemstone, and its sparkly complexion and natural beauty might mesmerize you. If that doesn't grab your attention, but you fashion yourself a history buff who appreciates the past, then perhaps our Rotary Phone from World War II might peak your interest. With each one of our items, there is a story to tell, and each story is just as captivating as the item itself.
            </p>
            <p>
              Whatever you are looking for, you are bound to find something in our collection that is worth your time. (hyperlink this to the Items page ==>) Explore our items today!
            </p>
          </div>
        </section>
      </div>
    )
  }
}

export default About;
