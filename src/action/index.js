const selectTodo = (selected)=>({
  type: 'SELECT_TODO',
  selected
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

const toggleEditing =() =>({
  type: 'TOGGLE_EDITING'
})

export {selectTodo,unselectTodo,nextTodo,prevTodo,toggleEditing}