const hideShowBtn = (state, table) => {
  const taskAdd = document.querySelector(`.task-add-${table}`);
  const taskSubmit = document.querySelector(`.task-submit-${table}`);
  taskAdd.classList.toggle('hide');
  taskSubmit.classList.toggle('hide');
};

export default hideShowBtn;
