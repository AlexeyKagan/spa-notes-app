import Store from './Store';

import { formatNote } from './utils';
import AppConstants from '../constants/AppConstants';

class TasksStore extends Store {
  state = {
    notes: [],
    loadingError: null,
    isLoading: true,
  };

  isLoading() {
    return this.state.isLoading;
  }

  getNotes() {
    return this.state.notes;
  }

  onAction(action) {
    switch (action.type) {
      case AppConstants.LOAD_NOTES_REQUEST: {
        this.setState({ isLoading: true });
        break;
      }

      case AppConstants.LOAD_NOTES_SUCCESS: {
        this.setState({
          isLoading: false,
          notes: action.notes.map(formatNote),
          loadingError: null,
        });
        break;
      }

      case AppConstants.LOAD_NOTES_FAIL: {
        this.setState({ loadingError: action.error });
        break;
      }

      default: {
        break;
      }
    }
  }
}

export default new TasksStore();
