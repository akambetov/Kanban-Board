export default function (state, action) {
  switch (action.type) {
    case 'get-items':
      console.log(state.backlog.issues);
      return state.backlog.issues;
    case 'add-backlog':
      console.log('reducer');
      console.log(state);
      state.backlog.issues = [
        ...state.backlog.issues,
        {
          id: Date.now(),
          title: action.payload,
          desc: 'DESCRIPTION FROM REDUCER',
        },
      ];
      return state;
    default:
      return state;
  }
}
