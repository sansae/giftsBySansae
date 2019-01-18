import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
      <div className="signup">
        <section className="App-header">
          <div className="page-header">
            <h3>Join Us!</h3>
            <i class="fas fa-edit"></i>
          </div>
        </section>

        <section className="benefits">
          <div>
            <p>~ Enjoy these features when you join! ~</p>

            <ul className="benefits-list">
              <li>Put up your items for sale</li>
              <li>Get great discounts on select items</li>
              <li>Keep a higher percentage on your sales</li>
            </ul>
          </div>
        </section>

        <section className="form-header">
          <p>~ Fill out the form to create an account with us! More benefits await! ~</p>
        </section>

        <section className="form">
          <form>
            <div class="form-group">
              <label for="firstname">First Name:</label>
              <input type="text" name="firstname" placeholder="Enter First Name" class="form-control"/>
              <small class="text-muted" id="firstnameHelp">First Name must be at least 1 characters in length</small>
            </div>
            <div class="form-group">
              <label for="lastname">Last Name:</label>
              <input type="text" name="lastname" placeholder="Enter Last Name" class="form-control"/>
              <small class="text-muted" id="lastnameHelp">Last Name must be at least 1 character in length</small>
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" name="email" placeholder="Enter Email" class="form-control"/>
              <small class="text-muted" id="emailHelp">Email must be a valid address</small>
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" name="password" placeholder="Enter Password" class="form-control"/>
              <small class="text-muted" id="passwordHelp"> Password must be at least 6 characters in length</small>
            </div>
            <div class="form-group">
              <label for="passwordConfirmation">Password Confirmation:</label>
              <input type="password" name="passwordConfirmation" placeholder="Enter Password confirmation" class="form-control"/>
              <small class="text-muted" id="passwordHelp"> Password confirmation must match password entered above</small>
            </div><br/>
            <input type="submit" value="Sign Up" class="btn btn-primary"/>
          </form>
        </section>

        <footer className="contact">
          Contact Us
        </footer>
      </div>
    )
  }
}

export default Signup;
