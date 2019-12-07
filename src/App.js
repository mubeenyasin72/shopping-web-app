import React, { Component } from 'react'
import CombineComponents from './View/combineComponents';
 class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <CombineComponents/>
        </div>
      </React.Fragment>
    )
  }
}

export default App;