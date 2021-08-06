import React, {Component} from 'react';
import './App.css';
import {Route, NavLink} from 'react-router-dom';
import * as hurstonAPI from '../../services/hurston-api';
import AddWork from '../AddWork/AddWork'

class App extends Component {
  state = { 
    hurstons: []
   }
  
  handleAddWork = async newHurstonData => {
    const newHurston = await hurstonAPI.create(newHurstonData);
    this.setState(state => ({
      hurstons: [...state.hurstons, newHurston]
    }),
    () => this.props.history.push('/'));
  }
  
  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
          REACT HURSTON CRUD API
        <nav>
          <NavLink exact to='/'>Hurston Works List</NavLink>
          <NavLink className='m-left' exact to='/add'>Add Work</NavLink>
        </nav>
        </header>
        <main>
        <Route exact path='/add' render={() => 
          <AddWork
            handleAddWork = {this.handleAddWork}
          />
        } />
        </main>
      </div>
     );
  }
}
 
export default App;


