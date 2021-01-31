import React, { Component } from "react"
import Checkbox from "../components/Checkbox"
import { navigate } from "gatsby"
import logo from "../graphics/daze-logo.svg"
import blogilates from "../graphics/blogilates.jpg"

export default class Plan extends Component {
  constructor() {
    super()
    this.state = {
      checkedItems: new Map(),
    }
    this.handleChange = this.handleChange.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
  }

  handleChange = e => {
    const item = e.target.name
    const isChecked = e.target.checked
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked),
    }))
  }

  deleteCheckboxState = (name, checked) => {
    const updateChecked = typeof checked === "undefined" ? true : false
    this.setState(prevState => prevState.checkedItems.set(name, updateChecked))
  }

  formSubmit(event) {
    const day = `${this.props.location.state.selectedDay}`
    console.log({ day })

    // Get the existing data
    var existing = localStorage.getItem(`day${day}`)

    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    existing = existing ? existing.split(",") : []

    for (const [key, value] of this.state.checkedItems.entries()) {
      value && existing.push(key)
    }

    // Save back to localStorage
    localStorage.setItem(`day${day}`, JSON.stringify(existing))

    navigate("/dashboard")
  }

  render() {
    var checkboxes = []
    const goal = JSON.parse(localStorage.getItem("goal"))
    {
      goal === "Stress relief" &&
        (checkboxes = [
          {
            name: "https://www.youtube.com/embed/TVwyEtS_7OQ",
            key: "checkBox1",
          },
          {
            name: "https://www.youtube.com/embed/g_tea8ZNk5A",
            key: "checkBox2",
          },
          {
            name: "https://www.youtube.com/embed/lJUIDBBqJOE",
            key: "checkBox3",
          },
        ])
    }
    {
      goal === "Confidence boost" &&
        (checkboxes = [
          {
            name: "https://www.youtube.com/embed/pzj78YA1zws",
            key: "checkBox1",
          },
          {
            name: "https://www.youtube.com/embed/LzYAgCw-_B0",
            key: "checkBox2",
          },
          {
            name: "https://www.youtube.com/embed/0Y8cy6qtIgg",
            key: "checkBox4",
          },
        ])
    }
    {
      goal === "Energy" &&
        (checkboxes = [
          {
            name: "https://www.youtube.com/embed/P8ZmbPaZ45I",
            key: "checkBox1",
          },
          {
            name: "https://www.youtube.com/embed/2zQ89vkNnNg",
            key: "checkBox2",
          },
          {
            name: "https://www.youtube.com/embed/9seYxs-vu9s",
            key: "checkBox4",
          },
        ])
    }

    const checkboxesToRender = checkboxes.map(item => {
      return (
        <label key={item.key}>
          <Checkbox
            name={item.name}
            checked={!!this.state.checkedItems.get(item.name)}
            onChange={this.handleChange}
            video={item.video}
          />
        </label>
      )
    })

    const checkboxesDeleteHandlers = checkboxes.map(item => {
      return (
        <span
          key={item.name}
          className="hidden"
          onClick={() =>
            this.deleteCheckboxState(
              item.name,
              this.state.checkedItems.get(item.name)
            )
          }
        ></span>
      )
    })

    return (
      <div className="w-full px-12 py-6 flex flex-col">
        <img className="mx-auto w-20" src={logo} alt="Daze" />
        <div className="text-4xl font-pn-bold text-blue mb-12">
          Day {this.props.location.state.selectedDay}
        </div>
        <div className="grid grid-cols-3 gap-24 mb-12">
          <div className="col-span-2 w-full flex flex-col gap-4">
            {checkboxesToRender}
            {checkboxesDeleteHandlers}
          </div>
          <div className="w-full rounded-lg bg-green p-12 text-2xl text-blue font-pn-bold flex flex-col items-center gap-8 checked:shadow-lg">
            <div className="text-4xl font-pn-bold text-white">
              Empowered women empower women.
            </div>
            <img className="rounded-lg" src={blogilates} alt="Blogilates"></img>
            <div className="font-sans text-white">
              Join Cassey Ho of Blogilates in an exclusive Daze fitness class
              that is all about feeling confident in your own skin.
            </div>
            <button className="rounded-full bg-white text-green font-pn-bold text-2xl px-5 py-2 hover:shadow-lg">
              Register now
            </button>
          </div>
        </div>
        <button
          className="rounded-full w-min mx-auto bg-orange text-white font-pn-bold text-4xl px-6 py-2 hover:shadow-lg"
          onClick={this.formSubmit}
        >
          Save
        </button>
      </div>
    )
  }
}
