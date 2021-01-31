import React from "react"
import { Link } from "gatsby"
import logo from "../graphics/daze-logo.svg"

export default function Reflection() {
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
        alert(this.state.selectedOption)
      }
    
  return (
    <div className="w-full px-24 py-6 flex flex-col">
      <img className="mx-auto w-20" src={logo} alt="Daze" />
      <div className="mt-20 text-6xl text-blue font-pn-bold text-center">
          You did it!
      </div>
      <div className="mt-20 text-2xl text-blue font-pn-bold text-left">
        Congratulations on completing the 7 days! Write a short reflection so Daze can remind you of your progress.
      </div>
      <form onSubmit = {this.handleSubmit}>
        <input
            type="text"
            name="reflect"
            value={this.state.value}
            onChange={this.onValueChange}
        />
        <input type = "submit" value = "submit"/>  
      </form>

    </div>
  )
}
 