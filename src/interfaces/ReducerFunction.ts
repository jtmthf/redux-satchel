import ActionMessage from './ActionMessage';

type ReducerFunction<S, T extends ActionMessage> = (state: S, actionMessage: T) => S;
export default ReducerFunction;
