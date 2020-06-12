import {connect} from 'react-redux'
import {addSmurf, handleChanges, getSmurfs} from '../actions/smurfActions'
import React, {useState} from 'react';


const SmurfForm = props=>{

    return(
        <form onSubmit={(e)=>{
            e.preventDefault()
            props.addSmurf(props.values)
            window.location.reload()
            }}>
            <h1>Add New Smurf</h1>
            <br />
            <label>Name</label>
            <input type="text" name='name' value={props.name} onChange={props.handleChanges} />
            <br />
            <label>Age</label>
            <input type="text" name='age' value={props.age} onChange={props.handleChanges} />
            <br />
            <label>Height</label>
            <input type='text' name='height' value={props.height} onChange={props.handleChanges} />

            <button name='submit'>Submit</button>
        </form>
    )
}

const mapStateToProps = state=>{
    return {
        values: state.values
    }
}

export default connect(mapStateToProps, {addSmurf, handleChanges, getSmurfs})(SmurfForm)