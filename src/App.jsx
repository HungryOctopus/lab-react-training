import React from 'react';
import './App.css';
import IdCard from './Idcard';
import Greetings from './Greetings';
import ClickablePicture from './ClickablePicture';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  // Public class field syntax
  // Will ensure that the value of this inside of the method
  // refers to the instance of the App component
  handleIncrement = (event) => {
    console.log('Incrementing count', event);
    // The setState method can take either an object
    // with properties that should be updated in the component state
    // or a function that returns said object and gets called
    // with a reference to the current state object
    this.setState({
      count: this.state.count + 1,
    });
    // this.setState((currentState) => {
    //   return {
    //     count: currentState.count + 1
    //   };
    // });
  };

  render() {
    return (
      // Iteration 1
      <div className="App">
        <IdCard
          firstName="John"
          lastName="Doe"
          gender="male"
          height={178}
          birthdate={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          picture="https:randomuser.me/api/portraits/women/44.jpg"
          firstName="Delores"
          lastName="Obrien"
          gender="female"
          height={172}
          birthdate={new Date('1988-05-11')}
        />
        {/*         {Iteration 2*/}
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        {/* Iteration 8  */}
        <div>
          <button onClick={this.handleIncrement}>
            {this.state.count} Likes
          </button>
        </div>

        {/* Iteration 9 */}
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />
      </div>
    );
  }
}

export default App;
