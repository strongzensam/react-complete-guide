import React, {useEffect} from 'react';
import styles from './Cockpit.module.css'

const Cockpit = (props) => {
  useEffect(() => {
    console.log('useEffect');
    setTimeout(() => {
      // alert('saved data to the cloud')
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);

  useEffect(()=>{
    console.log('2nd useEffect');
    return () => {
      console.log('Cockpit cleanup work in 2nd useEffect');
    }
  })

  let classes = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = styles.Red
  }
  if (props.personsLength <= 2){
    classes.push(styles.red);
  };
  if (props.personsLength <= 1) {
    classes.push(styles.bold);
  }
  return (
    <div className = {styles.Cockpit}>
    <h1>{props.title}</h1>
    <p className = {classes.join(' ')}>This is really working!</p>
    <button
      className = {btnClass}
      onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
}

export default React.memo(Cockpit);
