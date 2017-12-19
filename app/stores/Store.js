import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';

const CHANGE_EVENT = 'CHANGE_EVENT';

export default class Store extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(this.onAction.bind(this));
  }

  state = {};

  emitChange () {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.emitChange();
  }

  onAction(action) {
    console.log('action:', action);
  }
}
