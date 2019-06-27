import React, {useState, useEffect} from 'react';
import {  Button, Form, Input, Select, TextArea } from 'semantic-ui-react';
import {AddTaskRequest, ToggleForm} from '../../actions/index';
import {useDispatch, useGlobalState} from '../../contexts/index';
const options = ['Small', 'Medium', 'High'];

// function FormTask(props) {
//     const {toggleForm, dispatch} = props;
//     useEffect(() => {
//         if(toggleForm === false){
//             setImageURL('');
//             setName('');
//             setLevel(1);
//             setDescription('');
//         }
//     })
//     const [imageURL, setImageURL] = useState('');
//     const [name, setName] = useState('');
//     const [level, setLevel] = useState(1);
//     const [description, setDescription] = useState('');
//     const elm = options.map((option, index) => ({
//         key: index + 1,
//         text: option,
//         value: index + 1
//     }));
//     return (
//         <Form style={{marginTop:'20px'}}>
//             <Form.Group widths='equal'>
//                 <Form.Field control={Input} label='Image URL' value={imageURL} placeholder='First name' onChange={(e) => setImageURL(e.target.value)} />
//                 <Form.Field control={Input} label='Name Task' value={name} placeholder='Last name' onChange={(e) => setName(e.target.value)}/>
//                 <Form.Field control={Select} label='Level' placeholder='Gender' options={elm} defaultValue={1}/>
//             </Form.Group>
//             <Form.Field control={TextArea} label='Description' value={description} placeholder='Tell us more about you...' onChange={(e) => setDescription(e.target.value)} />
//             <Form.Field control={Button} color='red' onClick={() => {
//                 const task = {
//                     imageURL,
//                     name,
//                     level,
//                     description
//                 };
//                 AddTaskRequest(dispatch, task);
//                 dispatch(ToggleForm());
//             }}>Save</Form.Field>
//         </Form>
//     );
// }
function FormTask() {
    const toggleForm = useGlobalState().toogleForm;
    const dispatch = useDispatch();
    useEffect(() => {
        if(toggleForm === false){
            setImageURL('');
            setName('');
            setLevel(1);
            setDescription('');
        }
    }, toggleForm);
    const [imageURL, setImageURL] = useState('');
    const [name, setName] = useState('');
    const [level, setLevel] = useState(1);
    const [description, setDescription] = useState('');
    const elm = options.map((option, index) => ({
        key: index + 1,
        text: option,
        value: index + 1
    }));

    return (
        <Form style={{marginTop:'20px'}}>
            <Form.Group widths='equal'>
                <Form.Field control={Input} label='Image URL' value={imageURL} placeholder='First name' onChange={(e) => setImageURL(e.target.value)} />
                <Form.Field control={Input} label='Name Task' value={name} placeholder='Last name' onChange={(e) => setName(e.target.value)}/>
                <Form.Field control={Select} label='Level' placeholder='Gender' options={elm} defaultValue={1}/>
            </Form.Group>
            <Form.Field control={TextArea} label='Description' value={description} placeholder='Tell us more about you...' onChange={(e) => setDescription(e.target.value)} />
            <Form.Field control={Button} color='red' onClick={() => {
                const task = {
                    imageURL,
                    name,
                    level,
                    description
                };
                AddTaskRequest(dispatch, task);
                dispatch(ToggleForm());
            }}>Save</Form.Field>
        </Form>
    );
}

export default FormTask;