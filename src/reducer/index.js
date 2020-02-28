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
          date: new Date(),
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
          title: 'Design Sprint',
          date: new Date(),
          done: true,
          deleted: false
        },
        {
          id: 4,
          title: 'Icon Set Design for Mobile App',
          date: new Date(),
          done: false,
          deleted: false
        },
        {
          id: 5,
          title: 'HTML/CSS Study',
          date: new Date(),
          done: false,
          deleted: false
        },
        {
          id: 6,
          title: 'Weekly Report',
          date: new Date(),
          done: false,
          deleted: false
        },
        {
          id: 7,
          title: 'Design Meeting',
          date: new Date(),
          done: false,
          deleted: false
        },
        {
          id: 8,
          title: 'Quick Prototyping',
          date: new Date('2019-09-16'),
          done: false,
          deleted: false
        },
        {
          id: 9,
          title: 'UX Conference',
          date: new Date('2019-09-16'),
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
          date: new Date(),
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
        newState.selected = action.selected
        return newState
      }
    case 'UNSELECT_TODO':
      {
        let newState = JSON.parse(JSON.stringify(state))
        newState.unselect = newState.selected
        state.selected = null
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
    case 'TOGGLE_EDITING':
      {
        let newState = JSON.parse(JSON.stringify(state))
        if (newState.editing && newState.editing.text) {
          newState.selected.todo.tasks.unshift({
            title: newState.editing.text,
            date: new Date(),
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