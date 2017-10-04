import ActionCreator from './interfaces/ActionCreator';
import ActionMessage from './interfaces/ActionMessage';
import ReducerFunction from './interfaces/ReducerFunction';
import { getPrivateActionType } from './actionCreator';

export default function mutator<S, T extends ActionMessage>(
  actionCreator: ActionCreator<T>,
  target: ReducerFunction<S, T>
): ReducerFunction<S, T> {
  return (state, action) => action.type === getPrivateActionType(actionCreator) ? target(state, action) : state;
}