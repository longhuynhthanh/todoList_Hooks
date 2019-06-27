import React, { useState } from 'react';
import {Modal, Button, Icon, Header, Image} from 'semantic-ui-react';
function DeleteItem(props) {
    const [open, setOpen] = useState(false);
    const { id, name, imageURL, DeleteClick } = props;
    return (
        <Modal trigger={<Button icon='delete' color='red' onClick={() => setOpen(true)}></Button>} basic size='small' open={open}>
            <Header icon='archive' content={name} />
            <Image src={imageURL} size='small'  />
            <Modal.Content>
                <p>
                    Bạn Có Muốn Xóa {name}
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' inverted onClick={() => setOpen(false)}>
                    <Icon name='remove' /> No
                        </Button>
                <Button color='green' inverted onClick={() => {
                    setOpen(false);
                    DeleteClick(id);
                }}>
                    <Icon name='checkmark' /> Yes
                        </Button>
            </Modal.Actions>
        </Modal>
    );
}
export default DeleteItem;