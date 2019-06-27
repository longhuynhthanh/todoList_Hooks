import React, { useEffect } from 'react';
import { Table } from 'semantic-ui-react';
import Item from './item';
import {FetchAllTasksRequest} from '../../actions/index';
import {useDispatch, useGlobalState} from '../../contexts/index';
function ListTask() {
    const state = useGlobalState();
    const dispatch = useDispatch();
    useEffect(() => {
        const FetchAll = () => {
            return FetchAllTasksRequest(dispatch);
        }
        FetchAll();
    }, [state.tasks]);
    let elm = null;
    if (state.tasks && state.tasks.length > 0) {
        elm = state.tasks.map((task, index) => {
            return <Item
                key={index}
                task={task}
            />;
        })
    }
    return (
        <Table basic='very' celled striped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Info</Table.HeaderCell>
                    <Table.HeaderCell>Level</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {elm}
            </Table.Body>
        </Table>
    );
}
export default ListTask;