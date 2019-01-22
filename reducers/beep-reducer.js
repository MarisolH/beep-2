import {GET_BEEP_BEGIN, GET_BEEP_SUCCESS, GET_BEEP_FAILURE} from '../actions/beep-actions';
const initialState ={
    beep:{
        name: null,
        beeps: []
    },
    isLoading: false    
};

export default function BeepReducer (state = initialState, action){
    switch (action.type) {
        case GET_BEEP_BEGIN:
            return {
                ...state,
                isLoading: true
            }
        case GET_BEEP_SUCCESS :
            return {
                ...state,
                beep: action.payload.beep,
                isLoading: false
            }
        case GET_BEEP_FAILURE:
            return{
                ...state,
                isLoading: false
        }
    }
}