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
        },
        {
          id: 10,
          title: 'Go swimming',
          done: false,
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
          title: 'Design page',
          done: true,
          deleted: false
        },
        {
          id: 4,
          title: 'Design for Mobile App',
          done: true,
          deleted: false
        },
        {
          id: 5,
          title: 'HTML5/CSS3 Study',
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
          title: 'Meeting',
          done: false,
          deleted: false
        },
        {
          id: 8,
          title: 'Complete Todo Component',
          done: true,
          deleted: false
        },
        {
          id: 9,
          title: 'Interviews',
          done: true,
          deleted: false,
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
        },
        {
          id: 11,
          title: 'Repair Water Pipes',
          done: false,
          deleted: false,
        },
        {
          id: 12,
          title: 'Feed The Cat',
          done: false,
          deleted: false,
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
        let count = newState.currentIndex + 1
        newState.currentIndex = count % 3
        return newState
      }
    case 'PREV_TODO':
      {
        let newState = JSON.parse(JSON.stringify(state))
        let count = newState.currentIndex - 1
        newState.currentIndex = Math.abs(count % 3)
        return newState
      }
    case 'DONE_TASK': 
      {
        let newState = JSON.parse(JSON.stringify(state))
        newState.todos.forEach(todo => {
          todo.tasks.forEach(task => {
            if (task.title === action.value.task.title) {
              task.done = true
            }
          })
        });
        return newState
      }
    case 'DELETE_TASK':
      {
        let newState = JSON.parse(JSON.stringify(state))
        newState.todos.forEach(todo => {
          todo.tasks.forEach(task => {
            if (task.title === action.value.task.title) {
              task.deleted = true
            }
          })
        });
        return newState
      }
    case 'HANDLE_TXT_ONCHANGE':
      {
        let newState = JSON.parse(JSON.stringify(state))
        newState.editing.text = action.value
        return newState
      }
    case 'TOGGLE_EDITING':
      {
        let newState = JSON.parse(JSON.stringify(state))
        if (newState.editing && newState.editing.text) {
          newState.todos.forEach((todo) => {
            if (todo.name === newState.selected.todo.name) {
              todo.tasks.unshift({
                id: Math.random()*100,
                title: newState.editing.text,
                done: false,
                deleted: false
              })
            }
          })
        }
        newState.editing = newState.editing ? null : { text: '' }
        return newState
      }
    default:
      return state
  }
}

export default reducer