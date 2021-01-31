import React, { Component } from "react"
import Checkbox from "../components/Checkbox"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import Video from "../components/video"
import logo from "../graphics/daze-logo.svg"
import stress from "../graphics/stress.svg"
import confidence from "../graphics/confidence.svg"
import energy from "../graphics/energy.svg"

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
    console.log(this.state.checkedItems)
  }

  render() {
    var checkboxes = []
    const goal = JSON.parse(localStorage.getItem("goal"))
    {
      goal === "Stress relief" &&
        (checkboxes = [
          {
            name: "https://www.youtube.com/embed/NRWz91kQuJk",
            key: "checkBox1",
          },
          {
            name: "https://www.youtube.com/embed/o6JN_fADpPk",
            key: "checkBox2",
          },
        ])
    }
    {
      goal === "Confidence boost" &&
        (checkboxes = [
          {
            name: "https://www.youtube.com/embed/JZyy0JfUNXQ",
            key: "checkBox1",
          },
          {
            name: "https://www.youtube.com/embed/I6xCb7s5CE4",
            key: "checkBox2",
          },
        ])
    }
    {
      goal === "Energy" &&
        (checkboxes = [
          {
            name: "https://www.youtube.com/embed/eOWJsw_ARB0",
            key: "checkBox1",
          },
          {
            name: "https://www.youtube.com/embed/aE4j3KR5m54",
            key: "checkBox2",
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
      <div className="w-full px-24 py-6 flex flex-col">
        <img className="mx-auto w-20" src={logo} alt="Daze" />
        <div className="text-4xl font-pn-bold text-blue mb-12">Day 1</div>
        <div className="grid grid-cols-2 gap-24">
          <div className="flex flex-col gap-4">
            {checkboxesToRender}
            <br /> {checkboxesDeleteHandlers}
          </div>
          <div className="text-4xl font-pn-bold text-green mb-12">
            Empowered women empower women.
          </div>
        </div>
        <button
          className="rounded-full w-min mx-auto bg-orange text-white font-pn-bold text-2xl px-5 py-2 hover:shadow-lg"
          onClick={this.formSubmit}
        >
          Save
        </button>
      </div>
    )
  }
}

/* export default function Plan({ location }) {
  const goal = JSON.parse(localStorage.getItem("goal"))

  return (
    <div className="w-full px-24 py-6 flex flex-col">
      <img className="mx-auto w-20" src={logo} alt="Daze" />
      <div className="text-4xl font-pn-bold text-blue mb-12">
        Day {location.state.day}
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-8">
          {goal === "Stress relief" && (
            <>
              <Video
                videoSrcURL={"https://www.youtube.com/embed/NRWz91kQuJk"}
                videoTitle={"Stretches You Need After a Stressful Day"}
              ></Video>
              <Video
                videoSrcURL={"https://www.youtube.com/embed/o6JN_fADpPk"}
                videoTitle={"Wake Up With Me Workout - Best Morning Workout"}
              ></Video>
            </>
          )}
          {goal === "Confidence boost" && (
            <>
              <Video
                videoSrcURL={"https://www.youtube.com/embed/JZyy0JfUNXQ"}
                videoTitle={"5 Ways to Build your Core & Confidence Workout"}
              ></Video>
              <Video
                videoSrcURL={"https://www.youtube.com/embed/I6xCb7s5CE4"}
                videoTitle={"Beautiful Body Pilates | Total Body Workout"}
              ></Video>
            </>
          )}
          {goal === "Energy" && (
            <>
              <Video
                videoSrcURL={"https://www.youtube.com/embed/eOWJsw_ARB0"}
                videoTitle={"10 Perfect Morning Stretches to Increase Energy"}
              ></Video>
              <Video
                videoSrcURL={"https://www.youtube.com/embed/aE4j3KR5m54"}
                videoTitle={"POP Pilates Top Hits"}
              ></Video>
            </>
          )}
        </div>
      </div>
    </div>
  )
  // }
}
 */
