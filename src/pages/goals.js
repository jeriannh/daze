import React, { Component } from "react"
import { navigate } from "gatsby"
import stress from "../graphics/stress.svg"
import confidence from "../graphics/confidence.svg"
import energy from "../graphics/energy.svg"

class Goals extends Component {
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
      selectedOption: event.target.value,
    })
  }

  formSubmit(event) {
    event.preventDefault()
    localStorage.setItem("goal", JSON.stringify(this.state.selectedOption))
    navigate("/dashboard")
  }

  render() {
    return (
      <div className="h-screen flex items-center">
        <div className="w-full flex flex-col items-center gap-12">
          <h1 className="text-3xl text-blue font-pn-bold">
            What's your goal for the next 7 days?
          </h1>
          <form
            className="w-full flex flex-col items-center gap-12"
            onSubmit={this.formSubmit}
          >
            <div className="grid grid-cols-3 gap-14">
              <div className="radio w-full">
                <label className="w-full inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="hidden"
                    value="Stress relief"
                    checked={this.state.selectedOption === "Stress relief"}
                    onChange={this.onValueChange}
                  />
                  <span
                    className={`w-full rounded-lg bg-grey px-14 py-24 text-2xl text-blue font-pn-bold flex flex-col items-center gap-12 checked:shadow-lg ${
                      this.state.selectedOption === "Stress relief" &&
                      "shadow-xl"
                    }`}
                  >
                    <img className="h-24" src={stress} alt="Stress" />
                    Relieve stress
                  </span>
                </label>
              </div>
              <div className="radio">
                <label className="w-full inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="hidden"
                    value="Confidence boost"
                    checked={this.state.selectedOption === "Confidence boost"}
                    onChange={this.onValueChange}
                  />
                  <span
                    className={`w-full rounded-lg bg-grey px-14 py-24 text-2xl text-blue font-pn-bold flex flex-col items-center gap-12 checked:shadow-lg ${
                      this.state.selectedOption === "Confidence boost" &&
                      "shadow-xl"
                    }`}
                  >
                    <img
                      className="h-24"
                      src={confidence}
                      alt="Confidence Boost"
                    />
                    Boost confidence
                  </span>
                </label>
              </div>
              <div className="radio">
                <label className="w-full inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="hidden"
                    value="Energy"
                    checked={this.state.selectedOption === "Energy"}
                    onChange={this.onValueChange}
                  />
                  <span
                    className={`w-full rounded-lg bg-grey px-14 py-24 text-2xl text-blue font-pn-bold flex flex-col items-center gap-12 checked:shadow-lg ${
                      this.state.selectedOption === "Energy" && "shadow-xl"
                    }`}
                  >
                    <img className="h-24" src={energy} alt="Energy" />
                    Energize
                  </span>
                </label>
              </div>
            </div>
            <button
              className="rounded-full bg-orange text-white font-pn-bold text-2xl px-5 py-2 hover:shadow-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Goals
