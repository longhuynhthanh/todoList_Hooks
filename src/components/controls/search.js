import React, { useState } from 'react';
import { Search } from 'semantic-ui-react';
import {SearchTasks} from '../../actions/index';
import {useDispatch, useGlobalState} from '../../contexts/index';
// function SearchTask(props) {
//     const {dispatch} = props;

//     const [isLoading, setIsLoading] = useState(false);
//     const [value, setValue] = useState('');
//     const handleSearchChange = (e, { value }) => {
//         setIsLoading(true);
//         setValue(value);
//         setTimeout(() => {
//             dispatch(SearchTasks(value));
//             setIsLoading(false);
//         }, 400)
//     }

//     return (
//         <Search
//             loading={isLoading}
//             onSearchChange={handleSearchChange}
//             value={value}
//         />
//     );
// }
function SearchTask() {
    const dispatch = useDispatch();
    const state = useGlobalState();
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState('');
    const handleSearchChange = (e, { value }) => {
        setIsLoading(true);
        setValue(value);
        setTimeout(() => {
            dispatch(SearchTasks(value));
            setIsLoading(false);
        }, 400)
    }
    return (
        <Search
            loading={isLoading}
            onSearchChange={handleSearchChange}
            value={value}
            // results={state.tasks} 
        />
    );
}
export default SearchTask;