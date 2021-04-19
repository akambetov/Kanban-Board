export default function (state, action) {
  switch (action.type) {
    case 'add-backlog':
      state.backlog.issues = [
        ...state.backlog.issues,
        {
          id: Date.now().toString(),
          title: action.payload,
          desc: 'DESCRIPTION FROM REDUCER',
        },
      ];
      return state;
    case 'remove-backlog':
      state.backlog.issues = [
        ...state.backlog.issues.filter((issue) => issue.id !== action.payload),
      ];
      return state;
    case 'add-ready':
      state.ready.issues = [
        ...state.ready.issues,
        ...state.backlog.issues.filter((issue) => {
          return issue.id === action.payload;
        }),
      ];
      return state;
    default:
      return state;
  }
}
