export const initialState = {
    smurfs:[],
    isFetching: false,
    values: {
        name: '',
        age: '',
        height: ''
    }
}

export const smurfReducer = (state = initialState, action) =>{
    console.log(action)
    switch(action.type){
        case 'FETCH_START':
            return{
                ...state,
                isFetching: true
            }
        case 'FETCH_SUCCESS':
            return{
                ...state,
                isFetching: false,
                smurfs: action.payload
            }
        case 'FETCH_FAILURE':
            return{
                ...state,
                isFetching: false,

            }
        case 'ADD_SMURF_START':
            return {
                ...state,                                
            }
        case 'SMURF_ADDED':
            return{
                ...state,
                smurfs:action.payload
            }
        case 'HANDLE_CHANGES':
            const name = action.payload.target.name
            const value = action.payload.target.value
            return{
                ...state,
                values:{
                    ...state.values,
                    [name]: value
                }
            }
        default: return state
    }
}