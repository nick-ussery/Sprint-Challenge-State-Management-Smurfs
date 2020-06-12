import React, { useEffect } from "react";
import "./App.css";
import {connect} from 'react-redux'
import {getSmurfs} from '../actions/smurfActions'
import SmurfList from './smurfList'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import SmurfForm from './smurfForm'
import DeleteSmurf from './delete'


const App = props => {
  // console.log('props in App', props)
  useEffect(()=>{
    props.getSmurfs()
  }, [])



    return (
      <div className="App">
      <Router>
        <Link to='/new'>Add New Smurf         </Link>
        <Link to='/'>       Home</Link>
        <Link to='/delete'>        Delete </Link>
        <Route exact path='/'>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {(props.isFetching && <div>Loading Smurfs</div>)}
        <SmurfList />
        </Route>

        <Route path='/new'>
        <SmurfForm />
        </Route>

        <Route path='/delete'>
          <DeleteSmurf />
        </Route>
      </Router>
      </div>
    );
}

const mapStateToProps = state =>{
  return state
}

export default connect(mapStateToProps, {getSmurfs})(App);
