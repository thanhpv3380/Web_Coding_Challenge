import { actionTypes } from './actions';

export const initialState = {
  users: [],
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CREATE: {
      const { user } = action;
      const newUsers = [...state.users];
      const userFind = newUsers.findIndex((el) => el.id === user.id);
      if (userFind >= 0) {
        newUsers[userFind] = {
          ...newUsers[userFind],
          vaccines: [
            ...newUsers[userFind].vaccines,
            {
              name: user.vaccine,
              date: new Date(),
            },
          ],
        };
      } else {
        const newUser = {
          ...user,
          vaccines: [
            {
              name: user.vaccine,
              date: new Date(),
            },
          ],
        };
        delete newUser.vaccine;
        newUsers.push(newUser);
      }
      return { ...state, users: [...newUsers] };
    }

    default:
      return state;
  }
}
