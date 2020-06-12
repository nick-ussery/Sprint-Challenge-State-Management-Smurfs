import React from 'react';
import Smurf from './smurf'
import {connect} from 'react-redux'

const styling ={
    display: 'flex',
    flexWrap: 'wrap',
    flexFlow: 'row',
    width: '100%',
    justifyContent: 'space-evenly'
}


const SmurfList = props =>{
    // console.log('props in SmurfList', props)
    return (
        <div style={styling}>
            {props.smurfs.map(smurf=>{
                return <Smurf key={smurf.id} smurf={smurf} />
            })}
        </div>
    )
}

const mapStateToProps= state =>{
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {})(SmurfList)