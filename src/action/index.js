const selectTodo = (selectedTodo)=>({
  type: 'SELECT_TODO',
  selectedTodo
})

const unselectTodo = () =>({
  type: 'UNSELECT_TODO'
})

const nextTodo = () =>({
  type: 'NEXT_TODO'
})

const prevTodo = () =>({
  type: 'PREV_TODO'
})

const deleteTask = (taskID) =>({
  type: 'DELETE_TASK',
  taskID
})
const toggleEditing =() =>({
  type: 'TOGGLE_EDITING'
})

export {selectTodo,unselectTodo,nextTodo,prevTodo,deleteTask,toggleEditing}