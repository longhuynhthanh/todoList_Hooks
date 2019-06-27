import React from 'react';
import { Table, Header, Image, Label } from 'semantic-ui-react';
import {DeleteTaskRequest, EditTaskRequest} from '../../actions/index';
import Delete from '../controls/delete';
import Edit from '../controls/edit';
import {useDispatch} from '../../contexts/index';
function ItemTask(props) {
    const dispatch = useDispatch();
    const DeleteClick = (id) => {
        return DeleteTaskRequest(dispatch, id);
    }
    const EditTask = (editTask) => {
        return EditTaskRequest(dispatch, editTask);
    }
    let level = '';
    let color = '';
    if (props.task.level === 2) {
        level = 'Medium';
        color = 'teal';
    } else if (props.task.level === 3) {
        level = 'Hight';
        color = 'red';
    } else if (props.task.level === 1) {
        level = 'Small';
        color = 'grey';
    }
    return (
        <Table.Row>
            <Table.Cell>
                <Header as='h4' image>
                    <Image src={props.task.imageURL} circular size='mini' />
                    <Header.Content>
                        {props.task.name}
                        <Header.Subheader>{props.task.introduce}</Header.Subheader>
                    </Header.Content>
                </Header>
            </Table.Cell>
            <Table.Cell>
                <Label as='a' image color={color}>
                    <Image src={props.task.imageURL} />
                    {level}
                </Label>
            </Table.Cell>
            <Table.Cell>{props.task.description}</Table.Cell>
            <Table.Cell textAlign='center'>
                <Edit task={props.task} EditTask={EditTask} />
                <Delete id={props.task.id} name={props.task.name} imageURL={props.task.imageURL} DeleteClick={DeleteClick} />
            </Table.Cell>
        </Table.Row>
    );
}
export default ItemTask;