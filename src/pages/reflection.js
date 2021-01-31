import React, { Component } from "react"
import { navigate } from "gatsby"
import { Link } from "gatsby"

import logo from "../graphics/daze-logo.svg"

class reflection extends Component {
  constructor() {
    super()
    this.state = {
      name: "React",
    }
    this.onValueChange = this.onValueChange.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
  }

  onValueChange(event) {
    this.setState({
      reflection: event.target.value,
    })
  }

  formSubmit(event) {
    event.preventDefault()
    // localStorage.setItem("reflect", JSON.stringify(this.state.reflection))
    
    console.log(this.state.reflection)
    navigate("/dashboard/")
  }

  render() {
    return (
      <div className="w-full px-48 py-6 flex flex-col">
                <Link to="/dashboard">
                <img className="mx-auto w-20" src={logo} alt="Daze" />
          </Link>
          <div className="mt-20 text-6xl text-blue font-pn-bold text-center">
          You did it!
        </div>
        <div className="mt-20 text-2xl text-blue font-pn-bold text-left">
          Congratulations on completing day{" "}
          {JSON.parse(localStorage.getItem("day"))}! We believe every
          achievement is worth recording, write a short reflection so Daze can
          remind you of your progress.
        </div>
        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            className="rounded-lg my-5 w-full h-24 "
            name="reflect"
            value={this.state.reflection}
            onChange={this.onValueChange}
            maxlength="500"
          />
          <br></br>
          <button
            className="rounded-full bg-orange text-white font-pn-bold text-2xl px-5 py-2 hover:shadow-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default reflection
