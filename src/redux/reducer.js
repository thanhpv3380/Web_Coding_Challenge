import { combineReducers } from 'redux';
import auth, { initialState as authInitialState } from './auth/reducer';
import user, { initialState as userInitialState } from './user/reducer';

export const initialState = {
  auth: authInitialState,
  user: userInitialState,
};

export default combineReducers({
  auth,
  user,
});
