import fire from '../config/Fire';

export const GET_BEEP_BEGIN = 'GET_BEEP_BEGIN';
export const GET_BEEP_SUCCESS = 'GET_BEEP_SUCCESS';
export const GET_BEEP_FAILURE = 'GET_BEEP_FAILURE';

export const getBeep = () => async (dispatch, getState) =>{
    dispatch(getBeepBegin());
    let events = [];
    let leadsRef = fire.database().ref('beep-react');
    leadsRef.on('child_added', (snapshot,id)=>{
        let data = snapshot.val();
		if (!id) return;
		data.id = id
        let beeps = getState().BeepReducer.beep.beeps;
        beeps.push(data);
        dispatch(getBeepSuccess(beeps));
    }); 
}

export const getBeepBegin =()=>({
    type: GET_BEEP_BEGIN
});
export const getBeepSuccess = data =>({
    type: GET_BEEP_SUCCESS,
    payload: {data}
});
export const getBeepFailure = error => ({
    type: GET_BEEP_FAILURE,
    payload: {error}
});



