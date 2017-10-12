import ActionCreator from './interfaces/ActionCreator';
import ActionMessage from './interfaces/ActionMessage';
import ReducerFunction from './interfaces/ReducerFunction'; 
import satchelActionCreator from './actionCreator';
import satchelReducer from './reducer';

export default function reducerAction<
  S,
  T extends ActionMessage = {},
  TActionCreator extends ActionCreator<T> = () => T
>(actionType: string, reducer: ReducerFunction<S, T>, actionCreator?: TActionCreator): [ReducerFunction<S, T>, TActionCreator] {
  const action = satchelActionCreator(actionType, actionCreator);
  return [satchelReducer(action, reducer), action];
}