export const actionTypes = {
  CREATE: 'CREATE',
};

export function create(user) {
  return {
    type: actionTypes.CREATE,
    user,
  };
}
