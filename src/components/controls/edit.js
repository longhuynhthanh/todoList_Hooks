import React, { useState } from 'react';
import { Modal, Header, Button, Input, Select, TextArea, Icon, Form, Image } from 'semantic-ui-react';
const options = ['Small', 'Medium', 'High'];
function Edit(props) {
    const [open, setOpen] = useState(false);
    const { task, EditTask } = props;
    const [imageURL, setImageURL] = useState(task.imageURL);
    const [name, setName] = useState(task.name);
    const [level, setLevel] = useState(task.level);
    const [description, setDescription] = useState(task.description);
    const elm = options.map((option, index) => ({
        key: index + 1,
        text: option,
        value: index + 1
    }));
    return (
        <Modal trigger={<Button icon='edit' color='olive' onClick={() => setOpen(true)}></Button>} basic size='small' open={open}>
            <Header icon='edit outline' content={`Edit ${name}`} color='teal' />
            <Image size='small' circular src={imageURL} centered/>
            <Modal.Content>
                <Form style={{ marginTop: '20px' }}>
                    <Form.Group widths='equal'>
                        <Form.Field control={Input} value={imageURL} placeholder='Image URL' onChange={(e) => setImageURL(e.target.value)} />
                        <Form.Field control={Input} value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} />
                        <Form.Field control={Select} options={elm} defaultValue={level} onChange={(e) => {
                            console.log(e.target);
                        }} />
                    </Form.Group>
                    <Form.Field control={TextArea} value={description} placeholder='Description...' onChange={(e) => setDescription(e.target.value)} />
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' inverted onClick={() => setOpen(false)}>
                    <Icon name='remove' /> No
                </Button>
                <Button color='green' inverted onClick={() => {
                    setOpen(false);
                    const newTask = {
                        id: task.id,
                        imageURL,
                        name,
                        level,
                        description
                    };
                    EditTask(newTask);
                }}>
                    <Icon name='save' /> Save
                </Button>
            </Modal.Actions>
        </Modal>
    );
}
export default Edit;