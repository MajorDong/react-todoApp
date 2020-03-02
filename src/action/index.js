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

const deleteTask = (value) =>({
  type: 'DELETE_TASK',
  value
})
const toggleEditing =() =>({
  type: 'TOGGLE_EDITING'
})

const handleTxtOnchange = (value) => ({
  type: 'HANDLE_TXT_ONCHANGE',
  value
})

export {selectTodo,unselectTodo,nextTodo,prevTodo,deleteTask,toggleEditing,handleTxtOnchange}