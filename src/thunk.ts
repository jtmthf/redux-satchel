import ActionCreator from './interfaces/ActionCreator';
import ActionMessage from './interfaces/ActionMessage';
import Middleware, {MiddlewareAPI} from './interfaces/Middleware';
import ThunkFunction from './interfaces/ThunkFunction';
import { getPrivateActionType } from './actionCreator';

export default function thunk<S, T extends ActionMessage>(
  actionCreator: ActionCreator<T>,
  target: ThunkFunction<S, T>
): Middleware {
  const type = getPrivateActionType(actionCreator);
  if (type === undefined) {
    throw new Error('thunk must be passed a redux-satchel action creator.');
  }

  return ({dispatch, getState}) => next => action => {
    if (action.type === type) {
      target(dispatch, action as any, getState as any)
    }

    return next(action);
  }
}