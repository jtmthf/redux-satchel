import ActionMessage from './ActionMessage';
import Dispatch from './Dispatch';

type ThunkFunction<S, T extends ActionMessage> = (dispatch: Dispatch<S> , actionMessage: T, getState: () => S) => void | Promise<any>;
export default ThunkFunction;
