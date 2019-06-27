import React, {useCallback} from 'react';
import {Button} from 'semantic-ui-react';
import {ToggleForm} from '../../actions/index';
import {useDispatch, useGlobalState} from '../../contexts/index';
// function AddTask(props){
//     const {dispatch, toggleForm} = props;
//     return(
//         <Button primary fluid onClick={() => {
//             dispatch(ToggleForm());
//         }}>{toggleForm ? 'Close' : 'Add'} Task</Button>
//     );
// }

function AddTask(){
    const dispatch = useDispatch();
    const state = useGlobalState();

    const Click = useCallback(() => dispatch(ToggleForm()), [dispatch]);

    return(
        <Button primary fluid onClick={Click}>{state.toogleForm ? 'Close' : 'Add'} Task</Button>
    );
}
export default AddTask;