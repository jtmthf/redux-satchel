import Dispatch from './Dispatch';

export interface MiddlewareAPI<S> {
  dispatch: Dispatch<S>;
  getState(): S;
}

export default interface Middleware {
  <S>(api: MiddlewareAPI<S>): (next: Dispatch<S>) => Dispatch<S>;
}
