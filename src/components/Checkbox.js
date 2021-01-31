import React from "react"
import Video from "./video"

class Checkbox extends React.Component {
  render() {
    return (
      <div className="w-full flex flex-row gap-8">
        <input
          type="checkbox"
          name={this.props.name}
          checked={this.props.checked}
          onChange={this.props.onChange}
          className="rounded-lg text-orange w-16 h-16"
        ></input>
        <span className="w-full">
          <Video videoSrcURL={this.props.name}></Video>
        </span>
      </div>
    )
  }
}

export default Checkbox
