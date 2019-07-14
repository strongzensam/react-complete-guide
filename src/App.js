import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    persons: [
      { id: 'ons', name: 'Max', age: 28 },
      { id: 'onss', name: 'Manu', age: 29 },
      { id: 'onsa', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    lengthElement: 'Length'
    };

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

    this.setState({persons: persons});

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
let p;

if (this.state.lengthElement.length <= 5) {
  p = 'This text is too short';

} else {
  p = 'Text is fine'
}
let lengthArray = this.state.lengthElement.split('');
let objectArray = [];
let arrId = 0;
lengthArray.map((character, arrId)=> {
  objectArray.push({letter: character, id: arrId});
  arrId++;
  console.log(objectArray);
});

let classes = [];
if (this.state.persons.length <= 2){
  classes.push('red');
};
if (this.state.persons.length <= 1) {
  classes.push('bold');
}

if (this.state.showPersons) {
  persons =
            <div>
              <h3>How long am I?</h3>
              <input type = "text" onChange = {(event) => {this.lengthHandler(event, this.state.lengthElement)}} value = {this.state.lengthElement}></input>
              <p>{this.state.lengthElement.length}</p>
              <Validation
                >{p}</Validation>
              {objectArray.map(character => {
                return <CharComponent
                  delete={(event) => {this.charComponentDeleteHandler(event, character.id)}}
                  >{character.letter}
                </CharComponent>
              })}
              {this.state.persons.map((person, index) => {
                return <Person
                click={() => {this.deletePersonHandler(index)}}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => {this.nameChangedHandler(event, person.id)}}
                />
              })}
            </div>
            style.backgroundColor = 'red';
            style[':hover'] = {

              backgroundColor: 'salmon'
            }
}
    return (

      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className = {classes.join(' ')}>This is really working!</p>
        <button
          style ={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}


      </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;


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
