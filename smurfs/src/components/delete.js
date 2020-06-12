import {connect} from 'react-redux'
import {handleChanges, deleteSmurf} from '../actions/smurfActions'
import React, {useState} from 'react';

const DeleteSmurf = props =>{
    console.log('props in delete', props)
    return(
        <form onSubmit={(e)=>{
            e.preventDefault()
            console.log('button clicked', props)
            props.deleteSmurf((props.values.deleting))
            window.location.reload()
        }}>
            <h2>Enter ID of smurf you dislike</h2>
            <label>ID:</label>
            <input type= 'text' name='deleting' value={props.deleting} onChange={props.handleChanges} />
            <button name='submit'>REMOVE THE SMURF FROM YOUR TOWN</button>
        </form>
    )
}

const mapStateToProps = state =>{
    console.log('state in delete', state)
    return {
        values: state.values
    }
}

export default connect(mapStateToProps, {deleteSmurf, handleChanges})(DeleteSmurf)