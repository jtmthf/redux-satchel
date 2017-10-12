import ActionMessage from './ActionMessage';

export default interface Dispatch<S> {
  <A extends ActionMessage>(action: A): A;
}