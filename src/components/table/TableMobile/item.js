import React from 'react';
import { Item, Label, Image, Grid } from 'semantic-ui-react';
import Edit from '../../controls/edit';
import Delete from '../../controls/delete';
import {useDispatch} from '../../../contexts/index';
function ItemTask(props) {
    const { task } = props;
    const dispatch = useDispatch();
    const DeleteClick = (id) => {
        return DeleteTaskRequest(dispatch, id);
    }
    const EditTask = (editTask) => {
        return EditTaskRequest(dispatch, editTask);
    }
    let level = '';
    let color = '';
    if (task.level === 2) {
        level = 'Medium';
        color = 'teal';
    } else if (task.level === 3) {
        level = 'Hight';
        color = 'red';
    } else if (task.level === 1) {
        level = 'Small';
        color = 'grey';
    }
    return (
        <Item>
            <Item.Content verticalAlign='middle'>
                <Item.Header>
                    {task.name}
                </Item.Header>
                <Item.Description>
                    <Grid columns={3} centered>
                        <Grid.Column>
                            <Label as='a' image color={color}>
                                <Image src={task.imageURL} />
                                {level}
                            </Label>
                        </Grid.Column>
                        <Grid.Column>
                            <p>{task.description}</p>
                        </Grid.Column>
                        <Grid.Column>
                            <Edit task={task} EditTask={EditTask} />
                            <Delete id={task.id} name={task.name} imageURL={task.imageURL} DeleteClick={DeleteClick} />
                        </Grid.Column>
                    </Grid>
                </Item.Description>
            </Item.Content>
        </Item>
    );
}

export default ItemTask;