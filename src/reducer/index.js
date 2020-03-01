const defaultState = {
  currentIndex: 0,
  selected: null,
  unselect: null,
  editing: null,
  todos: [
    {
      icon: 'user',
      name: 'Personal',
      tasks: [
        {
          id: 1,
          title: 'Dating',
          done: true,
          deleted: false
        }
      ],
      colors: ['#ff6262', '#ffa947']
    },
    {
      icon: 'suitcase',
      name: 'Work',
      tasks: [
        {
          id: 3,
          title: 'Design Sprint',
          done: true,
          deleted: false
        },
        {
          id: 4,
          title: 'Icon Set Design for Mobile App',
          done: true,
          deleted: false
        },
        {
          id: 5,
          title: 'HTML/CSS Study',
          done: true,
          deleted: false
        },
        {
          id: 6,
          title: 'Weekly Report',
          done: false,
          deleted: false
        },
        {
          id: 7,
          title: 'Design Meeting',
          done: false,
          deleted: false
        },
        {
          id: 8,
          title: 'Quick Prototyping',
          done: false,
          deleted: false
        },
        {
          id: 9,
          title: 'UX Conference',
          done: false,
          deleted: false
        }
      ],
      colors: ['#5b9df9', '#47bfff']
    },
    {
      icon: 'home',
      name: 'Home',
      tasks: [
        {
          id: 2,
          title: 'House Keeping',
          done: true,
          deleted: false
        }
      ],
      colors: ['#2c7d59', '#3ba776']
    }
  ],
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SELECT_TODO':
      {
        let newState = JSON.parse(JSON.stringify(state))
        newState.unselect = null
        newState.selected = action.selectedTodo
        console.log(newState.selected)
        return newState
      }
    case 'UNSELECT_TODO':
      {
        let newState = JSON.parse(JSON.stringify(state))
        newState.unselect = newState.selected
        newState.selected = null
        return newState
      }
    case 'NEXT_TODO':
      {
        let newState = JSON.parse(JSON.stringify(state))
        if (newState.currentIndex < newState.todos.length - 1) {
          newState.currentIndex++
          return newState
        }
      }
    case 'PREV_TODO':
      {
        let newState = JSON.parse(JSON.stringify(state))
        if (newState.currentIndex > 0) {
          newState.currentIndex--
          return newState
        }
      }
    case 'DELETE_TASK':
      {
        let newState = JSON.parse(JSON.stringify(state))
        newState.todos.forEach( todo => {
          todo.tasks.forEach( task =>{
            if(task.id === action.taskID){
              task.deleted = true
            }
          })
        });
        return newState
      }
    case 'TOGGLE_EDITING':
      {
        let newState = JSON.parse(JSON.stringify(state))
        if (newState.editing && newState.editing.text) {
          newState.selected.todo.tasks.unshift({
            title: newState.editing.text,
            done: false,
            deleted: false
          })
        }
        newState.editing = newState.editing ? null : {text: ''}
        return newState
      }
    default:
      return state
  }
}

export default reducer