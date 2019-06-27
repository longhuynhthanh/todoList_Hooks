import React, {useEffect} from 'react';
import {Item} from 'semantic-ui-react';
import {FetchAllTasksRequest} from '../../../actions/index';
import {useDispatch, useGlobalState} from '../../../contexts/index';
import ItemTask from './item';
function ListTask() {
    const tasks = useGlobalState().tasks;
    const dispatch = useDispatch();
    useEffect(() => {
        const FetchAll = () => {
            return FetchAllTasksRequest(dispatch);
        }
        FetchAll();
    }, []);
    let elm = null;
    if (tasks && tasks.length > 0) {
        elm = tasks.map((task, index) => {
            return <ItemTask
                key={index}
                task={task}
            />;
        })
    }
    return (
        <Item.Group>
            {elm}
        </Item.Group>
    );
}

export default ListTask;