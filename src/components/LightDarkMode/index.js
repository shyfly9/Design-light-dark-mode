import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state

    const modiChange = isDarkMode ? 'dark-mode' : 'light-mode'

    const textButton = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={`container ${modiChange}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="btn" type="button" onClick={this.onMode}>
            {textButton}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
