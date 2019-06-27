import {createContext, useContext} from 'react';
import {inittialState} from '../reducer/index';

//#region Create Context
export const stateContext = createContext(inittialState);
export const dispatchContext = createContext();
//#endregion

//#region useContext
export const useDispatch = () => {
    return useContext(dispatchContext);
}
export const useGlobalState = () => {
    return useContext(stateContext);
}
//#endregion