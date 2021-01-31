import React from "react"
import Video from "./video"

class Checkbox extends React.Component {
  render() {
    return (
      <div className="flex flex-row gap-8">
        <input
          type="checkbox"
          name={this.props.name}
          checked={this.props.checked}
          onChange={this.props.onChange}
        ></input>
        <span>
          <Video videoSrcURL={this.props.name}></Video>
        </span>
      </div>
    )
  }
}

export default Checkbox
