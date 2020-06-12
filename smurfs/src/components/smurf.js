import React from 'react';
import { smurfReducer } from '../reducers/smurfReducers';

const styling = {
    border: '1px solid black',
    width: '25%'
}
const Smurf = props =>{
    // console.log('props in Smurf', props)
    return (
        <div style={styling}>
            <h3>{props.smurf.name}</h3>
    <p>Age: {props.smurf.age}</p>
    <p>Height: {props.smurf.height}</p>
        </div>
    )
}

export default Smurf