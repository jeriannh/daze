import React from "react"
export default class IndexPage extends React.Component {
  state = {
    goal: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const goal = target.goal
    this.setState({
      [goal]: value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    alert(`Your goal is ${this.state.goal}!`)
  }

  render() {
    return (
      <div className = "mt-20 items-center text-center">
      <h1 className = "text-3xl text-blue font-pn-bold">What's your goal for the next 7 days?</h1>
      
      
      <form onSubmit={this.handleSubmit}>
        <div class="flex m-5 flex-row items-center justify-center">
          <div class="m-2">
            <label>
              Relieve Stress
              <input 
                type ="radio" 
                name="goals"
                goal = "Stress"
                // value = "Stress"
                // value={this.state.goal}
                onChange={this.handleInputChange}
                />
            </label>
          </div>
          <div class="m-2">
            <label>
              Boost Confidence
              <input 
                type ="radio" 
                name="goals"
                value={this.state.goal}
                onChange={this.handleInputChange}
                />
            </label>          
          </div>
          <div class="m-2">
          <label>
              Energize
              <input 
                type ="radio" 
                name="goals"
                value={this.state.goal}
                onChange={this.handleInputChange}
                />
            </label>      
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
      </div>
    )
  }
}