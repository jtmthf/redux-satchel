import ActionMessage from './ActionMessage';

type ThunkFunction<T extends ActionMessage> = (actionMessage: T) => void | Promise<any>;
export default ThunkFunction;
