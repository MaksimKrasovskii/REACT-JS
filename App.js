import React, { Component } from 'react';



class App extends Component {
  handleClick = () => {
    import('./moduleA')
      .then(({ moduleA }) => {
        //Use moduleA
        console.log(moduleA);
        
        
      })
      .catch(err => {
        // Handle failure
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Load</button>
        <p>Нажми кнопку и открой console</p>
      </div>
    );
  }
}

export default App;







 
