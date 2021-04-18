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
          id: Date.now().toString(),
          title: action.payload,
          desc: 'DESCRIPTION FROM REDUCER',
        },
      ];
      return state;
    case 'add-ready':
      state.ready.issues = [
        ...state.ready.issues,
        ...state.backlog.issues.filter((issue) => {
          console.log(issue.id === action.payload);
          console.log(issue.id, action.payload);
          return issue.id === action.payload;
        }),
      ];
      // state.ready.issues.push(
      //   ...state.backlog.issues.filter((issue) => issue.id === action.payload)
      // );
      state.backlog.issues = [
        ...state.backlog.issues.filter((issue) => issue.id !== action.payload),
      ];
      console.log(action.payload);
      return state;
    default:
      return state;
  }
}
