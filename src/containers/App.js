import React, { Component } from 'react';
import styles from './App.module.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Validation from '../components/Validation/Validation';
import CharComponent from '../components/CharComponent/CharComponent';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../components/hoc/withClass'
import Aux from '../components/hoc/Aux'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      { id: 'ons', name: 'Max', age: 28 },
      { id: 'onss', name: 'Manu', age: 29 },
      { id: 'onsa', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    lengthElement: 'Length',
    showCockpit: true,
    changedCounter: 0
    };

static getDerivedStateFromProps(props, state){
  console.log('[App.js] getDerivedStateFromProps');
  return state
}
componentDidMount(){
  console.log('[App.js] componentDidMount');
}
shouldComponentUpdate(nextProps, nextState){
  console.log('[App.js] shouldComponentUpdate');
return true;
}
deletePersonHandler = (personIndex) => {
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons})
}

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changedCounter: prevState.changedCounter + 1
      };
    });

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  lengthHandler = (event, lengthElement) => {
    this.setState({lengthElement: event.target.value})
    // console.log(plength);
  }
  charComponentDeleteHandler = (event, id) => {
    const characterArray = [...this.state.lengthElement.split('')];
    characterArray.splice(id, 1);
    this.setState({lengthElement: characterArray.join('')})
  }

  render() {
    console.log('[App.js] render');
    const style ={
      backgroundColor: "green",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }
let persons = null;
// let p;
//
// if (this.state.lengthElement.length <= 5) {
//   p = 'This text is too short';
//
// } else {
//   p = 'Text is fine'
// }
// let lengthArray = this.state.lengthElement.split('');
// let objectArray = [];
// let arrId = 0;
// lengthArray.map((character, arrId)=> {
//   objectArray.push({letter: character, id: arrId});
//   arrId++;
//   console.log(objectArray);
// });

if (this.state.showPersons) {
  persons =
            <div>
              <Persons
                persons = {this.state.persons}
                clicked = {this.deletePersonHandler}
                changed = {this.nameChangedHandler}
                />
            </div>
}
    return (
      <Aux>
        <button onClick = {() => this.setState({ showCockpit: false })}>Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit
          title = {this.props.appTitle}
          showPersons = {this.state.showPersons}
          personsLength = {this.state.persons.length}
          clicked = {this.togglePersonsHandler}
          /> : null}
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, styles.App);


//
// switchNameHandler = () => {
//   // console.log('was clicked');
//   this.setState({
//     persons: [
//       {name: "Maximillian", age: 28},
//       {name: "Samuel", age: 18},
//       {name: "Isaac", age: 26}
//     ]
//   })
// }
