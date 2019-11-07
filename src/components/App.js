import React from "react";
import countries from "../data/countries";
import cities from "../data/cities";
import Field from "./Field"; 

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      password: "",
      repeatPassword: "",
      gender: "",
      email: "",
      mobile: "",
      country: "1",
      city: "1",
      avatar: "",
      errors: {
        firstName: false,
        lastName: false,
        password: false,
        repeatPassword: false,
        gender: false,
        email: false,
        mobile: false,
      }
    };
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const errors = {};
    if (this.state.firstName.length < 5) {
      errors.firstName = "Must be 5 characters or more";
    }

    if (this.state.lastName.length < 5) {
      errors.lastName = "Must be 5 characters or more";
    }

    if (this.state.password.length < 3) {
      errors.password = "Must be 3 characters or more";
    }

    if (this.state.password !== this.state.repeatPassword) {
      errors.repeatPassword = "Must be equal password";
    }

    if (!this.state.gender) {
      errors.gender = "Required";
    }

    if (Object.keys(errors).length > 0) {
      // error
      this.setState({
        errors: errors
      });
    } else {
      this.setState({
        errors: {}
      });
      console.log("submit", this.state);
    }
  };

  getOptionsItems = items => {
    return items.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };

  render() {
    return (
      <div className="form-container card">
        <form className="form card-body">
        {/* <div className="steps mb-4">
          <div className="step">
            <div className="step__marker">1</div>
            <div className="step__title mt-1">Basic</div>
          </div>
          <div className="step">
            <div className="step__marker">2</div>
            <div className="step__title mt-1">Contacts</div>
          </div>
          <div className="step">
            <div className="step__marker">3</div>
            <div className="step__title mt-1">Avatar</div>
          </div>
          <div className="step">
            <div className="step__marker">4</div>
            <div className="step__title mt-1">Finish</div>
          </div>
        </div> */}
        <Field
            id="firstName"
            labelText="First Name"
            type="text"
            placeholder="Enter first name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.onChange}
            error={this.state.errors.firstName}
          />
           <Field
            id="lastName"
            labelText="Last Name"
            type="text"
            placeholder="Enter last name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.onChange}
            error={this.state.errors.lastName}
          />
          <Field
            id="password"
            labelText="Password"
            type="password"
            placeholder="Enter password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            error={this.state.errors.password}
          />
           <Field
              id="repeatPassword"
              labelText="Repeat Password"
              type="password"
              placeholder="Enter repeat password"
              name="repeatPassword"
              value={this.state.repeatPassword}
              onChange={this.onChange}
              error={this.state.errors.repeatPassword}
            />
              <fieldset className="form-group">
            <div>Gender</div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={this.state.gender === "male"}
                onChange={this.onChange}
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={this.state.gender === "female"}
                onChange={this.onChange}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </fieldset>
          <Field
              id="email"
              labelText="Email"
              type="text"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              error={this.state.errors.email}
            />
             <Field
              id="mobile"
              labelText="Mobile"
              type="text"
              placeholder="Enter mobile"
              name="mobile"
              value={this.state.mobile}
              onChange={this.onChange}
              error={this.state.errors.mobile}
            />
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <select
                className="form-control"
                id="country"
                name="country"
                value={this.state.country}
                onChange={this.onChange}
              >
              {this.getOptionsItems(countries)}
            </select>
          </div>
          {/* <div className="form-group">
              <label htmlFor="city">City</label>
              <select
                className="form-control"
                id="city"
                name="city"
                value={this.state.city}
                onChange={this.onChange}
              >
              {this.getOptionsItems(cities)}
            </select>
          </div> */}
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-light mr-4"
              onClick={this.onSubmit}
            >
              Previous
            </button>
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={this.onSubmit}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}
