import ActionMessage from './interfaces/ActionMessage';
import ActionCreator from './interfaces/ActionCreator';

export function actionCreator<
  T extends ActionMessage = {},
  TActionCreator extends ActionCreator<T> = () => T
>(actionType: string, target?: TActionCreator): TActionCreator {
  return createActionCreator(actionType, target);
}

function createActionCreator<T extends ActionMessage, TActionCreator extends ActionCreator<T>>(
  actionType: string,
  target?: TActionCreator,
): TActionCreator {

  let decoratedTarget = function(...args: any[]) {
    // Create the action message
    let actionMessage: ActionMessage = target ? target.apply(null, args) : {};

    // Stamp the action message with the type and private ID
    actionMessage.type = actionType;

    return actionMessage;
  } as TActionCreator;

  setPrivateActionType(decoratedTarget, actionType);
  return decoratedTarget;
}

export function getPrivateActionType(target: any): string | undefined {
  return target.__REDUX_SATCHEL_TYPE;
}

export function setPrivateActionType(target: any, actionType: string) {
  target.__REDUX_SATCHEL_TYPE = actionType;
}

