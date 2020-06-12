import axios from 'axios'
import {useHistory} from 'react-router-dom'


export const getSmurfs = () =>{
    return dispatch =>{
        dispatch({type:'FETCH_START'})
        axios.get('http://localhost:3333/smurfs')
        .then(res=>{
            dispatch({type:'FETCH_SUCCESS', payload: res.data})
        })
        .catch(err=>{
            dispatch({type: 'FETCH_FAIL', payload: `${err}`})
        })
    }
}

export const addSmurf = input =>{
    return dispatch =>{
        dispatch({type: 'ADD_SMURF_START'})
        axios.post('http://localhost:3333/smurfs', input)
        .then(res=>{
            const history= useHistory();
            history.push('/')            
            dispatch({type: "SMURF_ADDED"})
            console.log('respnse from add smurf', res)            
        })
        .catch(err=>{
            dispatch({type:"SMURF_ADD_FAIL", payload: err})
        })
    }
}

export const handleChanges = e =>{
    return dispatch =>{
        dispatch({type: 'HANDLE_CHANGES', payload: e})
    }
}

export const deleteSmurf = input =>{
    console.log('input in delete function', input)
    return dispatch =>{
        dispatch({type: "REMOVE_SMURF_START"})
        axios.delete(`http://localhost:3333/smurfs/${input}`)
        .then(res=>{
            dispatch({type: 'REMOVE_SUCCESSFUL_YOU_MONSTER'})
        })
        .catch(err=> console.log(err))
    }
}